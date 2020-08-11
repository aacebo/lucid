import express, { Request, Response } from 'express';
import next from 'next';
import mongoose from 'mongoose';

import Logger from './helpers/logger/logger.helper';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = +process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();

    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      Logger.log(`Ready on localhost:${port} - ${process.env.NODE_ENV || 'dev'}`)
    });

    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
