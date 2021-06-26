// Bloco 04 - Dia 1 - Parte B
// JavaScript - Primeiros Passos
// 23/06/21 - Quarta-feira
// Exercícios

// p.1
let a = 1;
let b = 6;
let resultado = 0 ;

console.log('Dados a = ' + a + ' e b = ' + b);

// p. 1.1
console.log('Programa 1.1 - Adição');
resultado = a + b;
console.log("a + b = " + resultado);
console.log('-----------');

// p. 1.2
console.log('Programa 1.2 - Subtração');
resultado = a - b;
console.log("a - b = " + resultado);
console.log('-----------');

// p. 1.3
console.log('Programa 1.3 - Multiplicação');
resultado = a * b;
console.log("a * b = " + resultado);
console.log('-----------');

// p. 1.4
console.log('Programa 1.4 - Divisão');
resultado = a / b;
console.log("a / b = " + resultado);
console.log('-----------');

// p. 1.5
console.log('Programa 1.5 - Resto da divisão');
resultado = a % b;
console.log("a % b = " + resultado);
console.log('-----------');

// Programa 2
a = 10;
b = 9;
console.log('Programa 2')
console.log('Dados a = ' + a + ' e b = ' + b);
if (a > b) {
  console.log("a é maior que b = " + a + " > " + b);
  console.log("maior dos dois é... " + a)
} else {
  console.log("b é maior que a = " + b + " > " + a);
  console.log("maior dos dois é... " + b);
}
console.log('-----------')

// Programa 3
a = 15;
b = 25;
let c = 4;
console.log('Programa 3');
console.log('Dados a = ' + a + ', b = ' + b + ' e c = ' + c);
if (a > b && a > c) {
  console.log("maior dos três é... " + a);
} else if (b > c) {
  console.log("maior dos três é... " + b);  
} else {
  console.log("maior dos três é... " + c);
}
console.log('-----------')
