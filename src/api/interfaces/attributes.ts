import { ObjectId } from 'mongoose';

export interface IAttributes {
  _id: ObjectId;
  playerId: ObjectId;
  condition: number;
  potential?: number;
  overall?: number;
  speed?: number;
  strength?: number;
  skill?: number;
  shooting?: number;
  passing?: number;
  defending?: number;
  created_at?: Date;
  updated_at?: Date;
}
