import { logger } from '@api/utils/logger';
import { sessionCommiter } from '../utils/sessionCommiter';
import { Attributes } from '@api/db/models/attributes';
import { IAttributes } from '@api/interfaces/attributes';

export const createPlayerAttributes = async (
  payload: Omit<IAttributes, '_id'>
) => {
  if (!payload.playerId) {
    logger.debug('player id is required');
    return;
  }

  try {
    const operation = async () => {
      const playerAttributes = new Attributes(payload);
      return await playerAttributes.save();
    };
    return await sessionCommiter(operation);
  } catch (error) {
    logger.error(error);
  }
};
