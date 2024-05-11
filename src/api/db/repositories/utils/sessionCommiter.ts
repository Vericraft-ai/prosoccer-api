import { logger } from '@api/utils/logger';
import { startSession } from 'mongoose';

type Operation<T> = () => Promise<T>;

export const sessionCommiter = async <T>(operation: Operation<T>) => {
  const session = await startSession();
  logger.info('Starting transaction');
  session.startTransaction();
  try {
    const result = operation();
    await session.commitTransaction();
    logger.info('Transaction committed');
    return result;
  } catch (error) {
    logger.error(error);
    await session.abortTransaction();
  } finally {
    logger.info('Ending transaction');
    session.endSession();
  }
};
