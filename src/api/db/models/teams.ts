import { ITeams, Levels } from '@api/interfaces/teams';
import { Schema, model } from 'mongoose';

const TeamsSchema = new Schema<ITeams>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    team_name: {
      type: String,
      required: true,
    },
    short_form: {
      type: String,
      required: false,
    },
    // manager_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Manager',
    //   required: false,
    // },
    level: {
      type: String,
      enum: Levels,
      default: Levels.division1,
      required: false,
    },
    logo_url: {
        type: String,
        required: false,
    },
  },
  {
    timestamps: true,
  }
);

TeamsSchema.methods.toJSON = function () {
  const teamObj = this.toObject();

  teamObj.id = teamObj._id;
  delete teamObj._id;

  delete teamObj.createdAt;
  delete teamObj.updatedAt;

  delete teamObj.__v;
  return teamObj;
};

export const Teams = model<ITeams>('Teams', TeamsSchema);
