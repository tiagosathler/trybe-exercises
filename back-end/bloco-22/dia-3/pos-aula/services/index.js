const fs = require('fs/promises');

const MESSAGE_NOT_NUMBER = 'o valor deve ser um número';

const testNumberSign = (number) => {
  if (number === undefined) return null;
  if (typeof number !== 'number') return MESSAGE_NOT_NUMBER;
  if (number > 0) return 'positivo';
  if (number < 0) return 'negativo';
  return 'neutro';
};

const fileRecorder = async (filename, content) => null;

module.exports = {
  testNumberSign,
  fileRecorder,
};