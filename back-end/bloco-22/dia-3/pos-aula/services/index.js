const testNumberSign = (number) => {
  if (number === undefined) return null;
  if (typeof number !== 'number') return null;
  if (number > 0) return 'positivo';
  if (number < 0) return 'negativo';
  return 'neutro';
};

module.exports = {
  testNumberSign,
};