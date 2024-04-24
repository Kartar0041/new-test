import { Application } from 'express';
import express from 'express';
import expressLoader from './express';
import mongooseLoader from './databaseConnection';

export default async (): Promise<Application> => {
  try {
    const application = express();
    await mongooseLoader();
    console.info('Database started');
    const applications: Application = await expressLoader({ app: application });
    console.info('Express Intialized');
    return applications;
  } catch (error: any) {
    console.error(`Application initialization failed ${error.stack}`);
    throw error;
  }
};
