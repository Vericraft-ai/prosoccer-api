import { ObjectId } from 'mongoose';

export interface ITeams {
  _id: ObjectId;
  user_id: ObjectId;
  team_name: string;
  short_form: string;
  manager_id: ObjectId;
  level: Levels;
  logo_url: string;
  created_at: Date;
  updated_at: Date;
}

export enum Levels {
  division1 = 'division one',
  division2 = 'division two',
  division3 = 'division three',
}
