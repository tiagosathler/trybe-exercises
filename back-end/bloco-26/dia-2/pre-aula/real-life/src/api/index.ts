import { config } from 'dotenv';
import * as express from 'express';
import { Express, Request, Response, NextFunction } from 'express';
const cors = require('cors');

import ping from '../controllers/ping';
import getBooks from '../controllers/getBooks';
import handleError from '../middlewares/handleError';
import insertBook from '../controllers/insertBook';

config();
const PORT:string = process.env.PORT;


const app: Express = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(express.json());

app.get('/ping', ping);
app.get('/books', getBooks);
app.post('/books', insertBook);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
