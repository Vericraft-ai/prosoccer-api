import { Player } from '@api/db/models/player';
import { IPlayer } from '@api/interfaces/player';
import { logger } from '@api/utils/logger';
import { sessionCommiter } from '../utils/sessionCommiter';

export const createPlayer = async (payload: Omit<IPlayer, '_id'>) => {
  if (!payload.team) {
    logger.debug('Team id is required');
    return;
  }
  const playerExists = await findPlayerByTokenUri(payload.tokenURI);
  if (playerExists?._id) {
    logger.debug('Player already exists', {
      tokenURI: payload.tokenURI,
    });
    return;
  }

  try {
    const operation = async () => {
      const player = new Player(payload);
      return await player.save();
    };
    return await sessionCommiter(operation);
  } catch (error) {
    logger.error(error);
  }
};

const findPlayerByTokenUri = async (tokenUri: string) => {
  try {
    return await Player.findOne({ token: tokenUri });
  } catch (error) {
    logger.error(error);
  }
};
