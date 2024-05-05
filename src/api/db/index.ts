import 'module-alias/register';

import { config } from '@app/config';
import { logger } from '@app/api/utils/logger';
import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(config.db.uri);
    logger.info('MongoDB connected');
  } catch (error) {
    logger.error(error);
  }
};

export const connectDBWithRetry = async () => {
  try {
    await connect();
  } catch (error) {
    logger.info('MongoDB connection unsuccessful, retry after 10 seconds.');
    setTimeout(connectDBWithRetry, 10000);
  }
};
