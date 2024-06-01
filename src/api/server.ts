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
import cloudinary from 'cloudinary';
import { Headers } from 'node-fetch';
(global as any).Headers = Headers;
dotenv.config();

const isDevelopment = config.env === 'development';

const server = async () => {
  const app: Express = express();
  app.use(
    cors({
      origin: [
        config.session.domain,
        'http://localhost:3000',
        'https://prosoccer.io',
      ],
      allowedHeaders: ['Content-Type', 'Authorization', 'content-type'],
      credentials: true,
      optionsSuccessStatus: 200,
    })
  );

  app.use(
    Session({
      secret: config.session.secret,
      store: MongoStore.create({
        mongoUrl: config.db.uri,
      }),
      cookie: {
        domain: config.session.domain,
      },
      saveUninitialized: true,
      resave: false,
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
  cloudinary.v2.config({
    cloud_name: config.cloudinary.cloudName,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret,
  });

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
