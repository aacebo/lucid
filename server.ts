import express, { Request, Response } from 'express';
import next from 'next';
import mongoose from 'mongoose';

import Logger from './helpers/logger/logger.helper';
import FixtureService from './fixtures/fixtures.service';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = +process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}, async err => {
  if (err) throw err;
  Logger.info(`mongo connected on ${process.env.DATABASE_URI}`);

  if (dev) {
    Logger.warn('initializing fixtures...');
    await FixtureService.initialize();
  }

  await app.prepare();
  const server = express();

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    Logger.info(`listening on localhost:${port} [${process.env.NODE_ENV || 'dev'}]`)
  });
}).catch(err => {
  Logger.error(err.toString());
  process.exit(1);
});
