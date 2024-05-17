import { ObjectId } from 'mongoose';
import { PlayerPosition } from './player';

export interface ITeamSheet {
  _id: ObjectId;
  team: ObjectId;
  players: string[];
  playerPositions: {
    playerId: string;
    position: PlayerPosition;
    playerPrefferedPosition: PlayerPosition;
  }[];
  teamDetails: ObjectId;
  sheetOverall: number;
  created_at: Date;
  updated_at: Date;
}
