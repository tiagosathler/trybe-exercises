const { Router } = require('express');

const CepRoute = require('./cepRoute');

const middlewares = require('../middlewares');

const pingRoute = Router();
const notFoundRoute = Router();

pingRoute.get('/', middlewares.pingPong);

notFoundRoute.use(middlewares.endpointNotFound);

module.exports = {
  pingRoute,
  notFoundRoute,
  CepRoute,
};