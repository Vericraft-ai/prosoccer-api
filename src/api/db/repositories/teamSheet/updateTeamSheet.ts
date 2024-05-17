import { TeamSheet } from '@api/db/models/teamSheet';
import { PlayerPosition } from '@api/interfaces/player';
import { ITeamSheet } from '@api/interfaces/teamSheet';
import { logger } from '@api/utils/logger';

export type TeamSheetPayload = Partial<Omit<ITeamSheet, '_id'>> & {
  id: string;
  players?: string[];
  playerPositions?: {
    playerId: string;
    position: PlayerPosition;
    playerPrefferedPosition: PlayerPosition;
  }[];
};

export const updateTeamSheet = async (payload: TeamSheetPayload) => {
  try {
    logger.debug('Updating team sheet by', payload);

    let query: Record<string, any> = {};

    if (payload.players) {
      if (payload.players.length > 11) {
        logger.debug('Invalid number of players');
        return;
      }
      query.$addToSet = { players: { $each: payload.players } };
    }

    if (payload.playerPositions) {
      if (!isValidPlayerPositions(payload.playerPositions)) {
        logger.debug('Invalid player positions');
        return;
      }
      query.$addToSet = {
        ...query.$addToSet,
        playerPositions: { $each: payload.playerPositions },
      };
    }

    const update = { ...payload, query };

    return await TeamSheet.findByIdAndUpdate({ _id: payload.id }, update, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    logger.error(error);
  }
};

const isValidPlayerPositions = (
  playerPositions: TeamSheetPayload['playerPositions']
) => {
  return playerPositions?.every(
    (playerPosition) => playerPosition.position in PlayerPosition
  );
};
