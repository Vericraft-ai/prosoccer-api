import { ObjectId } from 'mongoose';

export interface IPlayer {
  _id: ObjectId;
  team: ObjectId;
  bundleId?: ObjectId;
  isForSale: boolean;
  name: string;
  position: PlayerPosition;
  tokenURI: string;
  age: number;
  height: number;
  weight: number;
  created_at: Date;
  updated_at: Date;
}

export enum PlayerPosition {
  GK = 'GK',
  CB = 'CB',
  LB = 'LB',
  RB = 'RB',
  CDM = 'CDM',
  CM = 'CM',
  CAM = 'CAM',
  LW = 'LW',
  RW = 'RW',
  ST = 'ST',
}
