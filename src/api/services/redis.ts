import { config } from '@app/config';
import Redis, { RedisOptions } from 'ioredis';
import { logger } from '@app/api/utils/logger';

let options: RedisOptions = {
  host: config.redis.host,
  port: config.redis.port,
  username: config.redis.username,
  password: config.redis.password,
  retryStrategy: (times) => {
    // reconnect after
    return Math.min(times * 50, 2000);
  },
};

if (config.env === 'production') {
  options = {
    ...options,
    tls: { rejectUnauthorized: false },
  };
}

export const redisClient = new Redis(options);

redisClient.on('connection', () => {
  logger.info('redis connected');
});
