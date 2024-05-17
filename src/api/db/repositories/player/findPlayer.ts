import { Player } from '@api/db/models/player';
import { IPlayer } from '@api/interfaces/player';
import { logger } from '@api/utils/logger';

type Payload = {
  playerId: string;
  tokenUri: string;
};

export const findPlayer = async (
  payload: Partial<Payload>
): Promise<IPlayer | null> => {
  try {
    logger.debug('Finding player by', payload);
    return await Player.findOne({
      $or: [{ _id: payload.playerId }, { token: payload.tokenUri }],
    }).populate('team');
  } catch (error) {
    logger.error(error);
    return null;
  }
};
