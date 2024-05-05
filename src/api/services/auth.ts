import { findOneOrCreateUser } from '@api/db/repositories/user/operations/findOneOrCreate';
import { Request } from 'express';
import { generateNonce, SiweMessage, SiweErrorType } from 'siwe';

export type SessionRequest = Request & {
  session: {
    nonce: string | null;
    save: () => Promise<void>;
    siwe: SiweMessage | null;
    destroy: () => void;
  };
};

export const getNonce = async (request: Request) => {
  request.session.nonce = generateNonce();
  request.session.save();
  return request.session.nonce;
};

export const verifyRequest = async (request: Request) => {
  if (!request.body.message) {
    throw new Error('Expected prepareMessage object as body.');
  }

  const SIWEObject = new SiweMessage(request.body.message);

  if (!request.session.nonce) {
    throw new Error(SiweErrorType.INVALID_NONCE);
  }

  const { data: message } = await SIWEObject.verify({
    signature: request.body.signature,
    nonce: request.session.nonce ?? undefined,
  });

  const user = await findOneOrCreateUser(message.address);

  request.session.siwe = message;
  request.session.cookie.expires = message.expirationTime
    ? new Date(message.expirationTime)
    : null;
  request.session.user.role = user?.role;

  request.session.save();
  return true;
};

export const getActiveProfile = async (request: SessionRequest) => {
  return request.session.siwe;
};
