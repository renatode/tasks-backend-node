import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import routes from './routes';

import './database/dbinit';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());

    //CORS
    this.server.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      next();
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;