const Models = require('../models');

const findByCep = async (cep) => {
  const result = await Models.Cep.findByCep(cep);
  return result;
};

const createCep = async (data) => {
  // const { cep, logradouro, bairro, localidade, uf } = data;
  const result = await Models.Cep.createCep(data);
  return result;
};

module.exports = {
  findByCep,
  createCep,
};