const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const middleware = require('./src/middlewares');

const Route = require('./src/routes');

const PORT = process.env.API_PORT || 3001;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', Route.Patients);
app.use('/plans', Route.Plans);
app.use('/doctor', Route.Doctor);

app.use('/*', middleware.handleEndpointNotFound);

app.use(middleware.handleErrors);

app.listen(PORT, () => {
  console.log(`Listening in the port: ${PORT}`);
});

module.exports = app;