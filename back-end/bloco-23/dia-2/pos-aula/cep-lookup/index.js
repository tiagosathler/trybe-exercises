const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const { config } = require('dotenv');

const Routes = require('./routes');
const middlewares = require('./middlewares');

config();

const app = express();

const { env: { PORT } } = process;

app.use(bodyParser.json(), cors());

app.use('/ping', Routes.pingRoute);

app.use('/cep', Routes.CepRoute);

app.use('/*', Routes.notFoundRoute);

app.use(middlewares.handleErrors);

app.listen(PORT, () => {
  console.log('CEP LOOKUP online listen on %s PORT', PORT);
});