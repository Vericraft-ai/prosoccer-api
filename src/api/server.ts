import 'module-alias/register';

import http from 'http';
import cors from 'cors';
import Session from 'express-session';
import morgan from 'morgan';
import helmet from 'helmet';
import express, { Express, Response } from 'express';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';
import { config } from '@app/config';
import routes from '@api/routes';
import { connectDBWithRetry } from './db';

dotenv.config();

const isDevelopment = config.env === 'development';

const server = async () => {
  const app: Express = express();

  app.use(cors());

  app.use(
    Session({
      secret: config.session.secret,
      store: MongoStore.create({
        mongoUrl: config.db.uri,
      }),
      saveUninitialized: true,
      resave: false,
      cookie: {
        secure: process.env.NODE_ENV === 'production',
      },
    })
  );

  app.use(express.json());

  app.use(express.json());
  app.use(morgan('dev'));
  app.use(
    helmet({
      crossOriginEmbedderPolicy: !isDevelopment,
      contentSecurityPolicy: !isDevelopment,
    })
  );

  app.get('/', (_, res: Response) => {
    res.send({
      message: 'Welcome, Traveler',
    });
  });

  app.use('/api', routes);

  const httpServer = http.createServer(app);

  await connectDBWithRetry();

  return httpServer;
};

export default server;
