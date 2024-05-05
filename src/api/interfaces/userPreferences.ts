import { ObjectId } from 'mongoose';

export interface IUserPreferences {
  _id: ObjectId;
  preferred_currency: string;
  match_duration: number;
  user_id: ObjectId;
}
