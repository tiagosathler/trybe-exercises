const fs = require('fs');
const input = fs.readFileSync('./dev/stdin', 'utf8');
const [as, bs, cs] = input.trim().split(' ');

const a = Number(as);
const b = Number(bs);
const c = Number(cs);

function floor(x) {
  return (Math.ceil(10000 * x )/ 10000).toFixed(3);
}

const triangle = floor(a * c / 2);
const circle = floor(Math.pow(c, 2) * 3.14159);
const trapeze = floor(((a + b) * c) / 2);
const square = floor(Math.pow(b, 2));
const rectangle = floor(a * b);

const result = 
`TRIANGULO: ${triangle}
CIRCULO: ${circle}
TRAPEZIO: ${trapeze}
QUADRADO: ${square}
RETANGULO: ${rectangle}`

console.log(result);