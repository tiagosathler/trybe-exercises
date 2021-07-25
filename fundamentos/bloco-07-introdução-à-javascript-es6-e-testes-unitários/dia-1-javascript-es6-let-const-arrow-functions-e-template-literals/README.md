# Bloco 07 - Dia 1 - JavaScript ES6 -let, const, arrow functions e template literals

Neste dia revimos o já havíamos aprendindo no JavaScript até aqui porém com foco nas modificações importantes feitas no [ECMAScript ES6](https://www.w3schools.com/js/js_es6.asp), que incluiu o `let`, `const`, *arrow function* e *template literals* e testes unitários. 

## Exercícios do dia

### Parte I:
1. Melhorar uma função retirando o vazamento de escopo de variável, transformando-a em *arrow function* e usando *template literals*;

2. Criar uma função que tenha como entrada um *array* de números e devolva uma *string* com o *array* ordenados em ordem crescente. Usando *arrow function* e *template literals*.

### Parte II:
1. Desenvolva uma função que receba um número e calcule o fatorial dele. Suponha que o este número é inteiro mas teste se é possível calcular o fatorial (o número tem que ser maior que zero). Use *arrow function* e *teste unitário* para simplificar a solução.

2. Faça uma função `longestWord` que retorne a maior palavra de uma frase.

3. Desenvolva uma simples página HTML que contenha um botão para incrementar um contador `clickCount` e mostre seu valor na página a medida que se clica no botão. Use um código JavaScript no próprio HTML.

4. Desenvolva duas funções: a primeira substituirá em *uma frase* qualquer *um caracter específico* pelo *nome de uma pessoa*. Exemplo: substituir o `x` de `"Tryber x aqui!"` por `"Bebeto"`. Já a segunda função usará a primeira e acrescentrá à nova frase cada *skill* que está em um *array global* chamado `skills`. Por exemplo, dado o array `const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'Arduino', 'Run'];` retorna a frase da primeira função e acrescenta:
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