const isValidCep = (cep, regex) => regex.test(cep);

module.exports = {
  isValidCep,
};