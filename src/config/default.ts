import type { Config, Network } from '.';
import { getEnvironmentValue } from '.';

export const config: Config = {
  appName: 'Prosoccer ⚽',

  env: getEnvironmentValue('NODE_ENV', 'development') as Config['env'],

  server: {
    port: Number(getEnvironmentValue('PORT', '4000')),
  },

  db: {
    uri: getEnvironmentValue(
      'MONGODB_URI',
      'mongodb+srv://localhost:27017/prosoccer'
    ),
  },

  session: {
    secret: getEnvironmentValue('SESSION_SECRET'),
    name: getEnvironmentValue('SESSION_NAME', 'prosoccer'),
    domain: getEnvironmentValue('SESSION_DOMAIN', '.prosoccer.io'),
  },

  pinata: {
    url: getEnvironmentValue('PINATA_URL'),
    // jsonUrl: getEnvironmentValue('PINATA_JSON'),
    secret: getEnvironmentValue('PINATA_JWT'),
  },

  removeBg: {
    url: getEnvironmentValue('REMOVE_BG_URL'),
    apiKey: getEnvironmentValue('REMOVE_BG_API_KEY'),
  },

  stability: {
    url: getEnvironmentValue('STABILITY_URL'),
    apiKey: getEnvironmentValue('STABILITY_API_KEY'),
  },

  cloudinary: {
    cloudName: getEnvironmentValue('CLOUDINARY_CLOUD_NAME'),
    apiKey: getEnvironmentValue('CLOUDINARY_API_KEY'),
    apiSecret: getEnvironmentValue('CLOUDINARY_API_SECRET'),
  },

  resendApiKey: getEnvironmentValue('RESEND_API_KEY'),

  network: getEnvironmentValue('NETWORK', 'fuji') as Network,

  web3Provider: {
    fuji: {
      contract: '0xb502c9766Eb1915f4fc480ed2a639cd1Bef4863B',
      chainId: 43113,
      apiKey: getEnvironmentValue('ETHERSCAN_API_KEY'),
      rpcUrl: getEnvironmentValue('AVALANCHE_FUJI_RPC_URL'),
    },
    amoy: {
      contract: '0xEa65C2781B5042223ed5C9CC0d7Fc43d59014e08',
      chainId: 80002,
      apiKey: getEnvironmentValue('POLYGONSCAN_API_KEY'),
      rpcUrl: getEnvironmentValue('POLYGON_AMOY_RPC_URL'),
    },
  },

  redis: {
    host: getEnvironmentValue('REDIS_HOST', 'localhost'),
    port: Number(getEnvironmentValue('REDIS_PORT', '6379')),
    password: getEnvironmentValue('REDIS_PASSWORD', ''),
    username: getEnvironmentValue('REDIS_USERNAME', ''),
  },
};
