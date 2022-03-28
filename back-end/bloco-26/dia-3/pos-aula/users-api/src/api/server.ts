import express, { Express, Request, Response, NextFunction } from 'express';
import { config } from 'dotenv';
import * as middleware from '../middlewares';
import { userRoute } from '../routes';

import cors = require('cors');

config();

const app: Express = express();

app.use(express.json(), cors());

app.use('/users', userRoute);

app.use('/*', middleware.handleInvalidEndpoint);

app.use(middleware.handleError);

export default app;