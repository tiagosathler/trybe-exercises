const read = require('readline-sync');
const { imc } = require('./services/imc');

const nome = read.question('Qual seu nome?');
const peso = read.questionInt('Qual seu peso (em kg)?');
const altura = read.questionInt('Qual sua altura (em m)?');

const yourImc = imc(peso, altura);
console.log(`Olá ${nome}, seu IMC é de ${yourImc}`);