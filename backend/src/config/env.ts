import path from 'path';
import * as dotenv from 'dotenv';
const environment = process.env.NODE_ENV ?? 'dev';
const envPath = path.join(__dirname, '..', '..', '.env');
dotenv.config({ path: envPath });

export default {
  whiteList: [
  ],
  PORT: process.env.PORT ?? 4000,
  MONGO_DB_URL: process.env.MONGO_DB_URL ?? '',
  // HOME_DOMAIN_URL: process.env.HOME_DOMAIL_URL ?? 'http://localhost:4000',
  // API_URL: 'http://localhost:4000/',
};
