import { IPlayer, PlayerPosition } from '@api/interfaces/player';
import { Schema, model } from 'mongoose';

const PlayerSchema = new Schema<IPlayer>(
  {
    team: {
      type: Schema.Types.ObjectId,
      ref: 'Teams',
      required: true,
    },
    // bundleId: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Bundle',
    //   required: true,
    // },
    isForSale: {
      type: Boolean,
      default: false,
    },
    tokenURI: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      enum: PlayerPosition,
      required: true,
    },
  },
  { timestamps: true }
);

PlayerSchema.methods.toJSON = function () {
  const playerObj = this.toObject();

  playerObj.id = playerObj._id;
  delete playerObj._id;

  delete playerObj.createdAt;
  delete playerObj.updatedAt;

  delete playerObj.__v;
  return playerObj;
};

export const Player = model<IPlayer>('Player', PlayerSchema);
