import { joinWaitlist } from '@services/joinWaitlist';
import { ExpressRequest } from '@app/types/types';
import { Response } from 'express';

export const joinWaitlistController = async (
  request: ExpressRequest,
  response: Response
) => {
  const payload = request.body;
  const data = await joinWaitlist(payload.email);
  response.status(200).json(data);
};
