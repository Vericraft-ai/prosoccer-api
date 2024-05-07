import { SiweMessage } from 'siwe';
import { Cookie } from 'express-session';
import { Request } from 'express';
import { ITeams } from '@api/interfaces/teams';

export type session = {
  nonce: string | null;
  save: () => Promise<void>;
  siwe: SiweMessage | null;
  destroy: () => void;
  cookie: Cookie;
  user: {
    role?: string;
  };
};
export type TeamPayload = Omit<ITeams, '_id'>;
export type ExpressRequest = Request & { user?: { _id: string } };
