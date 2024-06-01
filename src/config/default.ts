import type { Config } from '.';
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
};
