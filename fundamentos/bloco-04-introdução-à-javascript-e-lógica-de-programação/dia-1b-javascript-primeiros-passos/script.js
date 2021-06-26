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

// Programa 4
a = 0;
console.log('Programa 4');
console.log('Dado a = ' + a);
if (a > 0) {
  console.log("a é um número positivo")
} else if (a < 0) {
  console.log("a é um número negativo")
} else {
  console.log("a é zero")
}
console.log('-----------')

// Programa 5
let angle1 = 30;
let angle2 = 30;
let angle3 = 120;
console.log('Programa 5');
console.log('Dados angle1 = ' + angle1 + ', angle2 = ' + angle2 + ' e angle3 = ' + angle3);

resultado = angle1 + angle2 + angle3;
console.log("os angulos " + angle1 + " " + angle2 + " " + angle3 + " são ângulos internos de um triângulo?")
if (resultado == 180) {
  console.log(true)
} else if (angle1 == 0 && angle1 > 180) {
  console.log("o angle1 de " + angle1 + "º não é um ângulo válido")
  console.log(false)
} else if (angle2 == 0 || angle2 > 180) {
  console.log("o angle2 de " + angle2 + "º não é um ângulo válido")
  console.log(false)
} else if (angle3 == 0 || angle3 > 180) {
  console.log("o angle3 de " + angle3 + "º não é um ângulo válido")
  console.log(false)
} else {
  console.log(false)
}
console.log('-----------')