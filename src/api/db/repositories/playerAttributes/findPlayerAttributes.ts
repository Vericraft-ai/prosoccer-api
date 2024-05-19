import { Attributes } from '@api/db/models/attributes';
import { IAttributes } from '@api/interfaces/attributes';
import { logger } from '@api/utils/logger';

type Payload = {
  playerId: string;
  id: string;
};

export const findPlayerAttributes = async (
  payload: Partial<Payload>
): Promise<IAttributes | null> => {
  try {
    logger.debug('Finding player by', payload);
    return await Attributes.findOne({
      $or: [{ playerId: payload.playerId }, { _id: payload.id }],
    }).populate('player');
  } catch (error) {
    logger.error(error);
    return null;
  }
};
