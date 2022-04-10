const read = require('readline-sync');
const { draw } = require('./services/sort');

let number = read.questionInt('Escolha um número entre 0 e 10: ');

let play = 1;

while(play) {
  if(number === draw()) {
    console.log('Você acertou!');
  } else {
    console.log('Tente novamente...')
  }
  play = read.questionInt('Tentar novamente ? (0) (1)');
  if (play) {
    number = read.questionInt('Escolha um número entre 0 e 10: ');
  }
}