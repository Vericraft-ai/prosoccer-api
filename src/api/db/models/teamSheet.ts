import { ITeamSheet } from '@api/interfaces/teamSheet';
import { Schema, model } from 'mongoose';

const TeamSheetSchema = new Schema<ITeamSheet>(
  {
    team: {
      type: Schema.Types.ObjectId,
      ref: 'Teams',
      required: true,
    },
    players: {
      type: [String],
      required: false,
    },
    playerPositions: {
      type: [
        {
          playerId: String,
          position: String,
          potential: Number,
          playerPositioning: {
            assignedPosition: String,
            preferredPosition: String,
          },
        },
      ],
      required: false,
      _id: false,
    },
    teamDetails: {
      type: Schema.Types.ObjectId,
      ref: 'TeamDetails',
      required: true,
    },
    sheetOverall: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

TeamSheetSchema.methods.toJSON = function () {
  const playerObj = this.toObject();

  playerObj.id = playerObj._id;
  delete playerObj._id;

  delete playerObj.createdAt;
  delete playerObj.updatedAt;

  delete playerObj.__v;
  return playerObj;
};

export const TeamSheet = model<ITeamSheet>('TeamSheet', TeamSheetSchema);
