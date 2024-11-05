import express from 'express';
import bodyParser from 'body-parser';
import { Server } from 'http';
import cors from 'cors';
import router from './index';

export class SetupApplication {
  private server?: Server;

  constructor(private port = 3000, public app = express()) { }

  public init(): void {
    this.setupCors();
    this.setupExpress();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.use(router);
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private setupCors() {
    this.app.use(cors({origin: 'http://localhost:4200'}))
  }

  public start(): void {
    this.server = this.app.listen(this.port, () => {
    console.log(`Server running on port ${this.port}`);
    });
  }
}