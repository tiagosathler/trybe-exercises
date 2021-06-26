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

