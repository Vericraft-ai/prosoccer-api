import { ObjectId } from 'mongoose';

export interface ITeams {
  _id: ObjectId;
  userId: ObjectId;
  teamName: string;
  shortForm: string;
  managerId: ObjectId;
  level: Levels;
  logoUrl: string;
  created_at: Date;
  updated_at: Date;
}

export enum Levels {
  division1 = 'division one',
  division2 = 'division two',
  division3 = 'division three',
}
