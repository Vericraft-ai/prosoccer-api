import { SiweMessage } from 'siwe';
import { Cookie } from 'express-session';

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
