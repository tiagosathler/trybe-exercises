import express, { Express, Request, Response, NextFunction } from 'express';
import { config } from 'dotenv';
import * as middleware from '../middlewares';

import cors = require('cors');

config();

const app: Express = express();

app.use(express.json(), cors());

app.use('/*', middleware.handleInvalidEndpoint);

app.use(middleware.handleError);

export default app;