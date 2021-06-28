// BLOCO 4 - DIA 3 - JavaScript - Lógica de Programação
// EXERCÍCIOS DO DIA
// 25/06/21 - Tiago H. S. Sathler


// P.1
console.log('---------')
console.log('Programa 1 - Quadro de n astericos')
let n = 5;
if (n<= 1) {
  console.log('Valor de n deve ser maior que 1');
} else {
  let resultado = '*';
  for (let index = 1; index < n ; index += 1) {
    resultado += '*';
  }
  for (let index = 0; index < n ; index += 1) {
    console.log(resultado);
  }
}
console.log('---------')

