declare namespace Express {
  interface Request {
    session: import('./types').session;
  }
}
