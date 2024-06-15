import { PlayerPosition } from '@api/interfaces/player';
import { TeamSheetPayload } from '@api/interfaces/teamSheet';
import { logger } from '@api/utils/logger';
import { calculateTeamPerformance } from '.';
import { findPlayer } from '@api/db/repositories/player/findPlayer';

export const handleTeamSheetUpdate = async (payload: TeamSheetPayload) => {
  logger.debug('Updating team sheet by', payload);

  let query: Record<string, any> = {};

  if (payload.players) {
    if (payload.players.length > 11) {
      logger.debug('Invalid number of players');
      return;
    }

    for (const player of payload.players) {
      const playerExists = await findPlayer({ playerId: player });
      if (!playerExists?._id) {
        logger.debug('Invalid player');
        return;
      }
    }
    query.$addToSet = { players: { $each: payload.players } };
  }

  if (payload.playerPositions) {
    if (!isValidPlayerPositions(payload.playerPositions)) {
      logger.debug('Invalid player positions');
      return;
    }

    query.$addToSet = query.$addToSet || {};
    query.$addToSet.playerPositions = query.$addToSet.playerPositions || {
      $each: [],
    };

    for (const playerPosition of payload.playerPositions) {
      const { playerId, position, playerPositioning } = playerPosition;
      if (
        !query.$addToSet.playerPositions.$each.some(
          (p: { playerId: string }) => p.playerId === playerId
        )
      ) {
        query.$addToSet.playerPositions.$each.push({
          playerId,
          position,
          playerPositioning,
        });
      }
    }
    const { overall } = calculateTeamPerformance(payload.playerPositions);
    query.sheetOverall = overall;
  }
  return query;
};

const isValidPlayerPositions = (
  playerPositions: TeamSheetPayload['playerPositions']
) => {
  return playerPositions?.every(
    (playerPosition) =>
      playerPosition.position in PlayerPosition || !playerPosition.playerId
  );
};
