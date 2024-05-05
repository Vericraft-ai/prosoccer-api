import { ObjectId } from 'mongoose';

export interface IUser {
  _id: ObjectId;
  email: string;
  username: string;
  wallet_address: string;
  role: string;
  active: boolean;
}
