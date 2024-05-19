import {
  Formation,
  ITeamDetails,
  PlayStyle,
} from '@api/interfaces/teamDetails';
import { Schema, model } from 'mongoose';

const TeamDetailsSchema = new Schema<ITeamDetails>(
  {
    team: {
      type: Schema.Types.ObjectId,
      ref: 'Teams',
      required: true,
    },
    colors: {
      type: { top: String, bottom: String, socks: String },
      required: false,
      _id: false,
    },
    tactics: {
      type: {
        formation: {
          type: String,
          enum: Formation,
          default: Formation.FOUR_FOUR_TWO_A,
        },
        formationStyle: {
          type: String,
          enum: PlayStyle,
          default: PlayStyle.BALANCED,
        },
      },
      required: false,
      _id: false,
    },
    captain: {
      type: Schema.Types.ObjectId,
      ref: 'Players',
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

TeamDetailsSchema.methods.toJSON = function () {
  const teamDetailsObj = this.toObject();

  teamDetailsObj.id = teamDetailsObj._id;
  delete teamDetailsObj._id;

  delete teamDetailsObj.createdAt;
  delete teamDetailsObj.updatedAt;

  delete teamDetailsObj.__v;
  return teamDetailsObj;
};

export const TeamDetails = model<ITeamDetails>(
  'TeamDetails',
  TeamDetailsSchema
);
