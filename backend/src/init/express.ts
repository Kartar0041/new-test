import express, { Application } from 'express';
import appRoute from '../routes/index';
import cors from 'cors';

export default async ({ app }: { app: Application }) => {
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.get('/v2', (req, res) => {
    const html = `<h1>${"Hello"}</h1>`;
    res.send(html);
  });

  app.use('/api1/v1', appRoute);

  return app;
};
