import { Application } from 'express';
import applicationInitialization from './init';
import http from 'http';
import config from './config/env';

async function startServer() {
  try {
    const app: Application = await applicationInitialization();
    app.get('/status', (req: any, res: any) => res.send('Success'));
    const server: http.Server = http.createServer(app);
    server.listen(config.PORT, () => {
      console.info(`server started on--- ${config.PORT}`);
      console.info(`server Url http://localhost:${config.PORT}`);
    });

    return server;
  } catch (error: any) {
    console.error('Error occured when starting server:::', error);
  }
}

export default startServer();
