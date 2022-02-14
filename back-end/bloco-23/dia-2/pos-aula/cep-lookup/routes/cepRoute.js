const { Router } = require('express');

const Controller = require('../controllers');

const cepRoute = Router();

cepRoute
  .get('/:cep', Controller.Cep.findCep)
  .post('/', Controller.Cep.createCep);

module.exports = cepRoute;