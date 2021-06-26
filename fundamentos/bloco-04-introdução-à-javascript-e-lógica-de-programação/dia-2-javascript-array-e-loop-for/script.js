// BLOCO 04 - DIA 2 - 24/06/21
// JavaScript - Array e loop for
// EXERCÍCIOS

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// P.1
console.log('Bloco 4 / Dia 2 / Programa 1')
for (let number of numbers) {
  console.log(number);
}
console.log('-----------')

// p.2
console.log('Bloco 4 / Dia 2 / Programa 2')
let soma=0;
for (let number of numbers) {
  soma += number;
  }
console.log('Soma: ' + soma);  
console.log('-----------')

// p.3
console.log('Bloco 4 / Dia 2 / Programa 3')
let media = soma / numbers.length;

console.log('Média: ' + media);  
console.log('-----------')

// p.4
console.log('Bloco 4 / Dia 2 / Programa 4')
if (media > 20 ) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20')
}
console.log('-----------')

// p.5
console.log('Bloco 4 / Dia 2 / Programa 5')
let maiorValor = Number.NEGATIVE_INFINITY;
for (let number of numbers) {
  if (number >= maiorValor) {
    maiorValor = number;
  }
}
console.log('Maior valor do array: ' + maiorValor)
console.log('-----------')

// p.6
console.log('Bloco 4 / Dia 2 / Programa 6')
let contaImpares = 0;
for (let number of numbers) {
  if (number % 2 != 0 ) {
    contaImpares += 1;
  }
}
if (contaImpares > 0) {
  console.log('Quantidade de números ímpares: ' + contaImpares);
} else {
  console.log('nenhum valor ímpar encontrado')
}
console.log('-----------')

// p.7
console.log('Bloco 4 / Dia 2 / Programa 7')
let menorValor = Number.POSITIVE_INFINITY;
for (let number of numbers) {
  if (number <= menorValor) {
    menorValor = number;
  }
}
console.log('Menor valor do array: ' + menorValor)
console.log('-----------')

// p.8
console.log('Bloco 4 / Dia 2 / Programa 8')
let meusNumeros = [];
for (let index = 1; index <= 25; index += 1) {
  meusNumeros.push(index + 1);
}
console.log('Meu array: ' + meusNumeros)
console.log('-----------')

// p.9
console.log('Bloco 4 / Dia 2 / Programa 9')
for (let number of meusNumeros) {
  console.log(number/2)
}
console.log('-----------')