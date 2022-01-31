const imc = (peso, altura) => {
  const result = peso / (altura * altura);
  return result;
}

const compare = ( imc ) => {
  if (imc < 18.5) return { range: 'Abaixo de 18.5', message: 'Abaixo do peso (magreza)'}
  if (imc < 25) return { range: 'Entre de 18.5 e 24.9', message: 'Peso normal'};
  if (imc < 30) return { range: 'Entre de 25 e 29.9', message: 'Acima do peso (sobrepeso)'};
  if (imc < 35) return { range: 'Entre de 35 e 34.9', message: 'Obsesidade grau I'};
  if (imc < 40) return { range: 'Entre de 35 e 39.9', message: 'Obsesidade grau II'};
  return { range: 'Igual ou acima de 40', message: 'Obsesidade grau III e IV'};
};

module.exports = {
  imc,
  compare,
};