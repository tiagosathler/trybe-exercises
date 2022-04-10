const read = require('readline-sync');
const { imc, compare } = require('./services/imc');


const nome = read.question('Qual seu nome?');
const peso = read.questionFloat('Qual seu peso (em kg)?');
const altura = read.questionFloat('Qual sua altura (em m)?');

const yourImc = imc(peso, altura);
console.log(`Olá ${nome}! Peso: ${peso} kg / Altura: ${altura} m`);
console.log(`Seu IMC é de ${yourImc}`);

const { range, message } = compare(yourImc);

console.log(`Sua faixa de IMC: ${range}`);
console.log(`Sua condição: ${message}`);