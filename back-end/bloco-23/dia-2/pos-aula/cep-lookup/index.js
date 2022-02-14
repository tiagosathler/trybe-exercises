const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const { config } = require('dotenv');

const Routes = require('./routes');

config();

const app = express();

const { env: { PORT } } = process; 

app.use(bodyParser.json(), cors());

app.use('/ping', Routes.pingRoute);

app.use('/*', Routes.notFoundRoute);

app.listen(PORT, () => {
  console.log('CEP LOOKUP online listen on %s PORT', PORT);
});