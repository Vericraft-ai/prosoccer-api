import { getListedTokens } from '@services/marketplace';
import { Request, Response } from 'express';

export const getListings = async (request: Request, response: Response) => {
  const { cursor, size = 10 } = request.query;
  const data = await getListedTokens({
    cursor: cursor as string,
    size: size as number,
  });

  response.json(data);
};
