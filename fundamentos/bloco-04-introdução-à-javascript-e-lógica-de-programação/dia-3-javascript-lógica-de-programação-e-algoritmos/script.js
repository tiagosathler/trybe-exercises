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

// P.2
console.log('Programa 2 - Triângulo retângulo de n astericos')
n = 5;
if (n<= 1) {
  console.log('Valor de n deve ser maior que 1');
} else {
  let resultado = '*';
  console.log(resultado);
  for (let index = 1; index < n ; index += 1) {
    resultado += '*';
    console.log(resultado)
  }  
}
console.log('---------')

// P.3
console.log('Programa 3 - Triângulo retângulo invertido de n astericos')
n = 5;
if ( n<= 1) {
  console.log('Valor de n deve ser maior que 1');  
} else {
  let resultado = '';
  let posicao = n;
  for (let index = 0; index < n ; index += 1) {
    for (let charIndex = 0; charIndex <= n ; charIndex += 1) {
      if ( charIndex < posicao ) {
        resultado += ' '; // acrescenta um espaço
      } else {
        resultado += '*'; // acrescenta um asterisco
      }
    }
    console.log(resultado);
    resultado = '';
    posicao -= 1;    
  }
}
console.log('---------')

