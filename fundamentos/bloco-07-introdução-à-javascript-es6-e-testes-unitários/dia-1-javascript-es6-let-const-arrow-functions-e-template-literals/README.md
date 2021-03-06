# Bloco 07 - Dia 1 - JavaScript ES6 - let, const, arrow functions e template literals

Neste dia revi o que já havia visto no JavaScript até aqui porém com foco nas modificações importantes feitas no [ECMAScript ES6](https://www.w3schools.com/js/js_es6.asp), que incluiu os escopos locais de `let` e `const`, as declarações de funções por *arrow function*, os *template literals* e os *testes unitários*. 

## Exercícios do dia
> Os exercícios estão no arquivo [script.js](https://github.com/tiagosathler/trybe-exercises/blob/bloco-07-dia-1/fundamentos/bloco-07-introdu%C3%A7%C3%A3o-%C3%A0-javascript-es6-e-testes-unit%C3%A1rios/dia-1-javascript-es6-let-const-arrow-functions-e-template-literals/script.js) exceto o Exercício 3 da Parte II que está no arquivo [index.html](https://github.com/tiagosathler/trybe-exercises/blob/bloco-07-dia-1/fundamentos/bloco-07-introdu%C3%A7%C3%A3o-%C3%A0-javascript-es6-e-testes-unit%C3%A1rios/dia-1-javascript-es6-let-const-arrow-functions-e-template-literals/index.html).


### Parte I:
1. Melhorar a função dada abaixo retirando o vazamento de escopo de variável, transformando-a em *arrow function* e usando *template literals*;
```
      function testingScope(escopo) {
        if (escopo === true) {
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true);
```

2. Criar uma função que tenha como entrada um __array de números__ e devolva uma __string__ com o __array ordenado__ em ordem crescente. Use __*arrow function*__ e __*template literals*__.

### Parte II:
1. Desenvolva uma função que receba um número e calcule o fatorial dele. Suponha que o este número é inteiro mas teste se é possível calcular o fatorial (o número tem que ser maior que zero). Use *arrow function* e *teste unitário* para simplificar a solução.

2. Faça uma função chamada `longestWord` que retorne a __maior palavra__ de __uma frase__ qualquer.

3. Desenvolva uma simples página HTML que contenha um botão para incrementar um contador `clickCount` e mostre seu valor na página a medida que se clica no botão. Use um código JavaScript no próprio HTML.

4. Desenvolva duas funções: a primeira substituirá em __uma frase__ qualquer __um caracter específico__ pelo __nome de uma pessoa__. Exemplo: substituir o `x` de `"Tryber x aqui!"` por `"Bebeto"`. Já a segunda função usará a primeira e acrescentrá à nova frase cada _skill_ que está em um _array global_ chamado `skills`. Por exemplo, dado o array `const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'Arduino', 'Run'];` retorna a frase da primeira função e acrescenta:
``` 
Tryber Bebeto aqui!

  Minhas 6 principais habilidades são:
    - JavaScript
    - HTML
    - CSS
    - React
    - Arduino
    - Run

  #goTrybe
```