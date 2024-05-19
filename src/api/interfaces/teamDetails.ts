import { ObjectId } from 'mongoose';

export enum Formation {
  FOUR_FOUR_TWO_A = '4-4-2 A',
  FOUR_FOUR_TWO_B = '4-4-2 B',
  FOUR_FIVE_ONE = '4-5-1',
  FOUR_THREE_THREE = '4-3-3',
  FIVE_THREE_TWO = '5-3-2',
  FIVE_FOUR_ONE = '5-4-1',
  THREE_FIVE_TWO = '3-5-2',
  THREE_FOUR_THREE = '3-4-3',
  THREE_FOUR_ONE_TWO = '3-4-1-2',
  FOUR_TWO_THREE_ONE = '4-2-3-1',
}

export enum PlayStyle {
  BALANCED = 'Balanced',
  LONG_BALL_GAME = 'Long Ball Game',
  SHORT_BALL = 'Short Ball',
}

export interface ITeamDetails {
  team: ObjectId | string;
  colors?: {
    top: string;
    bottom: string;
    socks: string;
  };
  tactics: {
    formation: Formation;
    formationStyle: PlayStyle;
  };
  captain?: ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
