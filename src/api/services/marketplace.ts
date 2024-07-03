import { redisClient } from '@services/redis';

type Pagination = {
  cursor?: string | number;
  size?: number;
};

export const getListedTokens = async ({ cursor, size }: Pagination) => {
  const listings = await redisClient.hscan(
    'listings',
    cursor ?? 0,
    'COUNT',
    size ?? 10
  );

  return {
    cursor: listings[0],
    listings: Object.values(listings[1]).map((listing) => JSON.parse(listing)),
  };
};
