import { IAttributes } from '@api/interfaces/attributes';
import { Schema, model } from 'mongoose';

const AttributesSchema = new Schema<IAttributes>(
  {
    playerId: {
      type: Schema.Types.ObjectId,
      ref: 'Player',
      required: true,
    },
    condition: {
      type: Number,
      required: true,
    },
    potential: {
      type: Number,
      required: false,
    },
    overall: {
      type: Number,
      required: false,
    },
    speed: {
      type: Number,
      required: false,
    },
    strength: {
      type: Number,
      required: false,
    },
    skill: {
      type: Number,
      required: false,
    },
    shooting: {
      type: Number,
      required: false,
    },
    passing: {
      type: Number,
      required: false,
    },
    defending: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

AttributesSchema.methods.toJSON = function () {
  const teamObj = this.toObject();

  teamObj.id = teamObj._id;
  delete teamObj._id;

  delete teamObj.createdAt;
  delete teamObj.updatedAt;

  delete teamObj.__v;
  return teamObj;
};

export const Attributes = model<IAttributes>('Attributes', AttributesSchema);
