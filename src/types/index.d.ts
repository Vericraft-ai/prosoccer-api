declare namespace Express {
  interface Request {
    session: import('./types').session;
  }
}

declare global {
  interface BigInt {
    toJSON(): string;
  }
}
