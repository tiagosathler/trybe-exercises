const fs = require('fs');
const input = fs.readFileSync('./dev/stdin', 'utf8');
const [x, y] = input.trim().split(' ');

if (+x > 0 && +y > 0) {
  console.log('Q1');
} else if (+x < 0 && +y > 0) {
  console.log('Q2');
} else if (+x < 0 && +y < 0) {
  console.log('Q3');
} else if (+x > 0 && +y < 0) {
  console.log('Q4');
} else if (+x === 0 && +y === 0) {
  console.log('Origem');
} else if (+x === 0) {
  console.log('Eixo Y');
} else {
  console.log('Eixo X');
}