const Models = require('../models');

const findByCep = async (cep) => {
  const result = Models.Cep.findByCep(cep);
  return result;
};

module.exports = {
  findByCep,
};