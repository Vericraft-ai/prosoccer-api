import { logger } from '@api/utils/logger';
import { SessionRequest, getNonce, verifyRequest } from '@services/auth';
import { Request, Response } from 'express';
import { SiweErrorType } from 'siwe';

export const generateNonce = async (request: Request, response: Response) => {
  const nonce = await getNonce(request);
  response.setHeader('Content-Type', 'text/plain');
  response.send(nonce);
};

export const verify = async (request: Request, response: Response) => {
  try {
    await verifyRequest(request);
    response.status(200).send(request.session.id || 'fireboy');
  } catch (e) {
    const error = e as Error;
    logger.error(error.message);
    request.session.siwe = null;
    request.session.nonce = null;
    switch (e) {
      case SiweErrorType.EXPIRED_MESSAGE: {
        response.status(440).json({ message: error.message });
        break;
      }

      case SiweErrorType.INVALID_SIGNATURE: {
        response.status(422).json({ message: error.message });
        break;
      }
      default: {
        response.status(500).json({ message: error.message });
        break;
      }
    }
  }
};

export const getActiveProfile = async (
  request: Request,
  response: Response
) => {
  if (!request.session.siwe) {
    response.status(401).json({ message: 'You have to first sign in' });
    return;
  }
  response.send({ address: request.session.siwe?.address });
};

export const logout = async (request: SessionRequest, response: Response) => {
  request.session.destroy();
  response.json({ ok: true });
};
