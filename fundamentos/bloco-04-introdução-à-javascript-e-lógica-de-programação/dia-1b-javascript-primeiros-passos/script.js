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
let angle2 = 40;
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

//Programa 6
console.log('Programa 6');
let nomeDaPeca = 'King';
console.log('Dado nomeDaPeca = ' + nomeDaPeca);
nomeDaPeca = nomeDaPeca.toLowerCase();
switch (nomeDaPeca) {
  case 'pawn':
    console.log('PAWN - PEÂO');
    console.log('Primeiro avanço: pode ser 2 casas a frente');
    console.log('Um avanço a frente por turno');
    console.log('Um avanço à frente na diagonal apenas se for para capturar outra peça');
    break;
  case 'rook':
    console.log('ROOK - TORRE');
    console.log('Avança ou retroce em direção reta: à frente ou para atrás ou para aos lados')
    console.log('Pode avançar até atingir a borda ou outra peça')
    console.log('Não pode passar por cima de outra peça')
    console.log('Pode capturar qualquer peça que esteja no seu alance')
    break;
  case 'bishop':
    console.log('BISHOP - BISPO');
    console.log('Pode avançar ou retroceder somente pelas diagonais')
    console.log('Pode avançar várias casas até a borda ou a outra peça')
    console.log('Pode capturar qualquer peça ao seu alcance')
    console.log('Não pode passar por cima de outra peça')
    break;
  case 'knife':
    console.log('KNIFE - CAVALO');
    console.log('Movimento em L: duas à frente / trás e, sem seguida outra à esquerda ou direita');
    console.log('Pode pular outra peças inclusive as suas');
    console.log('Pode capturar qualquer peça desde que esteja ao seu alcance')
    break;
  case 'queen':
    console.log('QUEEN - RAINHA')
    console.log('Pode avançar em qualquer direção');
    console.log('Pode avançar várias casas mas não pode pular outras peças')
    console.log('Pode capturar qualquer peça')
    break;
  case 'king':
    console.log('KING - REI')
    console.log('Pode se mover em qualquer direção apenas por uma casa')
    console.log('Não pode se mover para por em xeque')
    console.log('Pode capturar qualquer peça')
    break;
  default:
    console.log('PEÇA INVÁLIDA')
}
console.log('-----------')

//Programa 7
console.log('Programa 7');
let nota = 10;
console.log('Dado nota = ' + nota);
if (nota > 100 || nota < 0) {
  console.log('Nota inválida')
} else if (nota >= 90) {
  console.log('Nota ' + nota + '. Conceito A')
} else if (nota >= 80) {
  console.log('Nota ' + nota + '. Conceito B')
} else if (nota >= 70) {
  console.log('Nota ' + nota + '. Conceito C')
} else if (nota >= 60) {
  console.log('Nota ' + nota + '. Conceito D')
} else if (nota >= 50) {
  console.log('Nota ' + nota + '. Conceito E')
} else {
  console.log('Nota ' + nota + '. Conceito F')
}
console.log('-----------')

//Programa 8
console.log('Programa 8');
a = 5;
b = 1;
c = 0;
console.log('Dados a = ' + a + ', b = ' + b + ' e c = ' + c);
console.log("Algum número é par? (" + a +", " + b + ", " + c + ")" )
if ( (!(a % 2)&&(a !=0) ) || ( !(b % 2)&&(b != 0) ) || ( !(c % 2)&&(c != 0) ))  {
  console.log(true)
} else {
  console.log(false)
}
console.log('-----------')
