import { Application, urlencoded, json } from 'express';
import * as fs from 'fs';
import { WriteStream } from 'fs';
import * as path from 'path';

// import { unCoughtErrorHandler } from './handlers/errorHandler';
import Routes from './routes/index';

// app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public config(app: Application): void {
    app.use(urlencoded({ extended: true }));

    app.use(json());
  }
}

process.on('beforeExit', function (err) {
  console.error(err);
});