const imc = (peso, altura) => {
  const result = peso / (altura^2);
  return result;
}

module.exports = {
  imc
};