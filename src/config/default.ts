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
  },
};
