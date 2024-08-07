// eslint-disable-next-line
require('dotenv').config();
import { config as dotenvConfig } from 'dotenv';
import * as R from 'ramda';
import { Environment } from '@app/config/environments/types';

export type Network = 'fuji' | 'amoy';

type NetworkData = {
  contract: string;
  chainId: number;
  apiKey?: string;
  rpcUrl?: string;
};

dotenvConfig();

const env = process.env.NODE_ENV ?? 'development';

export interface Config {
  appName: string;

  env: Environment;

  server: {
    port: number;
  };

  db: {
    uri: string;
  };

  session: {
    secret: string;
    name: string;
    domain: string;
  };

  pinata: {
    url: string;
    secret: string;
    // jsonUrl: string;
  };

  removeBg: {
    url: string;
    apiKey: string;
  };

  stability: {
    url: string;
    apiKey: string;
  };

  cloudinary: {
    cloudName: string;
    apiKey: string;
    apiSecret: string;
  };

  resendApiKey: string;

  network: Network;

  web3Provider: Record<Network, NetworkData>;

  redis: {
    host: string;
    port: number;
    password?: string;
    username?: string;
  };
}

export const getEnvironmentValue = (
  key: string,
  defaultValue?: string
): string => {
  const envVal = process.env[key] ?? defaultValue;

  if (!envVal && envVal !== '') {
    throw new Error(`env variable ${key} has to be defined`);
  }

  return envVal;
};

/* eslint-disable */
const envConfig = require(`./environments/${env}`)?.config;
const defaultConfig = require('./default').config;
/* eslint-enable */

export const config = R.mergeDeepRight(
  defaultConfig,
  envConfig
) as object as Config;
