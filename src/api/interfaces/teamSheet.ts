import { ObjectId } from 'mongoose';
import { PlayerPosition } from './player';

export interface ITeamSheet {
  _id: ObjectId;
  team: ObjectId;
  players?: string[];
  playerPositions?: {
    playerId: string;
    position: PlayerPosition;
    potential: number;
    playerPositioning: PlayerPositioning;
  }[];
  teamDetails: ObjectId;
  sheetOverall?: number;
  created_at?: Date;
  updated_at?: Date;
}

type PlayerPositioning = {
  assignedPosition: PlayerPosition;
  preferredPosition: PlayerPosition;
};

export interface TeamSheetPayload {
  id: string;
  players?: string[];
  playerPositions?: {
    playerId: string;
    position: PlayerPosition;
    potential: number;
    playerPositioning: PlayerPositioning;
  }[];
}
