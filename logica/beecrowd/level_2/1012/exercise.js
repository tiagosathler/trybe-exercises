const fs = require('fs');
const input = fs.readFileSync('./dev/stdin/file.txt', 'utf8');
const [as, bs, cs] = input.trim().split(' ');

const a = Number(as);
const b = Number(bs);
const c = Number(cs);

const triangle = (a * b / 2).toFixed(3);
const circle = (Math.pow(c, 2) * Math.PI).toFixed(3);
const trapeze = (((a + b) * c) / 2).toFixed(3);
const square = (Math.pow(b, 2)/ 2 ).toFixed(3);
const rectangle = (a * b).toFixed(3);

const result = `
TRIANGULO: ${triangle}
CIRCULO = ${circle}
TRAPEZIO = ${trapeze}
QUADRADO = ${square}
RETANGULO = ${rectangle}`

fs.writeFileSync('./dev/stdout/file.txt', result);