// BLOCO 4 - DIA 3 - JavaScript - Lógica de Programação
// EXERCÍCIOS DO DIA
// 25/06/21 - Tiago H. S. Sathler


// P.1
console.log('---------')
let n = 5;
console.log("Programa 1 - Quadro de 'n = " + n + "' astericos:");
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
n = 5;
console.log("Programa 2 - Triângulo retângulo de 'n = " + n + "' astericos:");
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
n = 5;
console.log("Programa 3 - Triângulo retângulo invertido de 'n = " + n + "' astericos:");
if ( n<= 1) {
  console.log('Valor de n deve ser maior que 1');  
} else {
  let resultado = '';
  let posicao = n;
  for (let index = 0; index < n ; index += 1) {
    for (let charIndex = 0; charIndex <= n ; charIndex += 1) {
      if ( charIndex < posicao ) {
        resultado += ' ';
      } else {
        resultado += '*';
      }
    }
    console.log(resultado);
    resultado = '';
    posicao -= 1;    
  }
}
console.log('---------')

// P.4
n = 5;
console.log("Programa 4 - Pirâmide 'n = " + n + "' asteriscos de base:")
if ( n<= 1) {
  console.log('Valor de n deve ser maior que 1');
} else if ( n % 2 === 0 ) {
  console.log('Valor de n precisa ser ímpar');
} else {
  let resultado = '';
  for (let indexLinha = 0; indexLinha < (n-1)/2 + 1 ; indexLinha += 1) {
    for (let indexChar = 0; indexChar < n; indexChar += 1) {
      if (indexChar < (n-1)/2 - indexLinha || indexChar > (n-1)/2 + indexLinha) {
        resultado += ' ';
      } else {
        resultado += '*';
      }
    }
    console.log(resultado);
    resultado = '';    
  }
}
console.log('---------')

// P.4
n = 7;
console.log("Programa 5 (Bônus) - Pirâmide vazia 'n = " + n + "' asteriscos de base:")
if ( n<= 1) {
  console.log('Valor de n deve ser maior que 1');
} else if ( n % 2 === 0 ) {
  console.log('Valor de n precisa ser ímpar');
} else {
  let resultado = '';
  for (let indexLinha = 0; indexLinha < (n-1)/2 + 1 ; indexLinha += 1) {
    if (indexLinha !== (n-1)/2) {
      for (let indexChar = 0; indexChar < n; indexChar += 1) {
        if (indexChar === (n-1)/2 - indexLinha || indexChar === (n-1)/2 + indexLinha) {
          resultado += '*';
        } else {
          resultado += ' ';
        }
      }
    } else {
      for (let indexChar = 0; indexChar < n; indexChar += 1) {
        resultado += '*';
      }
    }
    console.log(resultado);
    resultado = '';    
  }
}
console.log('---------')
