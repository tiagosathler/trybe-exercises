# Bloco 07 - Dia 1 - JavaScript ES6 -let, const, arrow functions e template literals

Neste dia revimos o já havíamos aprendindo no JavaScript até aqui porém com foco nas modificações importantes feitas no [ECMAScript ES6](https://www.w3schools.com/js/js_es6.asp), que incluiu o `let`, `const`, *arrow function* e *template literals* e testes unitários. 

## Exercícios do dia

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

2. Criar uma função que tenha como entrada um _array de números_ e devolva uma _string_ com o _array ordenado_ em ordem crescente. Use _*arrow function*_ e _*template literals*_.

### Parte II:
1. Desenvolva uma função que receba um número e calcule o fatorial dele. Suponha que o este número é inteiro mas teste se é possível calcular o fatorial (o número tem que ser maior que zero). Use *arrow function* e *teste unitário* para simplificar a solução.

2. Faça uma função chamada `longestWord` que retorne a _maior palavra_ de _uma frase_ qualquer.

3. Desenvolva uma simples página HTML que contenha um botão para incrementar um contador `clickCount` e mostre seu valor na página a medida que se clica no botão. Use um código JavaScript no próprio HTML.

4. Desenvolva duas funções: a primeira substituirá em _uma frase_ qualquer _um caracter específico_ pelo _nome de uma pessoa_. Exemplo: substituir o `x` de `"Tryber x aqui!"` por `"Bebeto"`. Já a segunda função usará a primeira e acrescentrá à nova frase cada _skill_ que está em um _array global_ chamado `skills`. Por exemplo, dado o array `const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'Arduino', 'Run'];` retorna a frase da primeira função e acrescenta:
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