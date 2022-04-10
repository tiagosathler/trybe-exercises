const read = require('readline-sync');
const { velocity } = require('./services/velocity');

const dist = read.questionInt('Informe a distância em metros: ');
const tempo = read.question('Informe o tempo em segundos: ');

const velMedia = velocity(dist, tempo);

console.log(`A velocidade média é de ${velMedia.toFixed(2)} m/s ou ${velMedia*3.6} km/h`);