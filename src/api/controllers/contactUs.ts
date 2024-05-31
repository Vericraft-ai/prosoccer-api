import { ExpressRequest } from '@app/types/types';
import { contactUs } from '@services/contactUs';
import { Response } from 'express';

export const sendContactUs = async (
  request: ExpressRequest,
  response: Response
) => {
  const payload = request.body;
  const data = await contactUs(payload);
  response.status(200).json(data);
};
