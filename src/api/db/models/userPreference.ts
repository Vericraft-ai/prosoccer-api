import { Schema, model } from 'mongoose';
import { IUserPreferences } from '@app/api/interfaces';

const UserPreferenceSchema = new Schema<IUserPreferences>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    preferred_currency: {
      type: String,
      default: 'MATIC',
      required: true,
    },
    match_duration: {
      type: Number,
      required: true,
      default: 5, //minutes
    },
  },
  {
    timestamps: true,
  }
);

UserPreferenceSchema.methods.toJSON = function () {
  const userPrefObj = this.toObject();

  userPrefObj.id = userPrefObj._id;
  delete userPrefObj._id;

  delete userPrefObj.__v;
  return userPrefObj;
};

export const UserPreference = model<IUserPreferences>(
  'UserPreference',
  UserPreferenceSchema
);
