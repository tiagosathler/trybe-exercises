const isValidCep = (cep) => {
  const regex = /\d{5}-?\d{3}/g;
  return regex.test(cep);
};

module.exports = {
  isValidCep,
};