import { SiweMessage } from 'siwe';
import { Cookie } from 'express-session';
import { Request } from 'express';
import { ITeams } from '@api/interfaces/teams';
import { ObjectId } from 'mongoose';

export type session = {
  nonce: string | null;
  save: () => Promise<void>;
  siwe: SiweMessage | null;
  destroy: () => void;
  cookie: Cookie;
  user: {
    _id: ObjectId;
    role?: string;
  };
};
export type TeamPayload = Omit<ITeams, '_id'>;
export type ExpressRequest = Request & { user?: { _id: string } };
