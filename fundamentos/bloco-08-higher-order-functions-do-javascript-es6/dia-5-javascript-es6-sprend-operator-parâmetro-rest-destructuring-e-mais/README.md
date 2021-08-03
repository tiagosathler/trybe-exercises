# Bloco 08 - Dia 5 - JavaScript ES6 - spread operator, parâmetro rest, destructuring e mais

Neste dia aprendemos novas *features* do JS ES6 que são *spread operator*, parâmetro *rest* e como fazer o *destructuring* de objetos e *arrrays*. O *spread* facilita muito na hora de juntar *arrays* e *objetos*. Já o *rest* facilita muito na passagem de parâmetro de funções juntando-as em um único *array*. Por fim, a metodoliga de fazer *destructuring* de objetos e *arrays* facilita a melhor compreensão do código, deixando-o mais simples e conciso.

## Exercícios do dia

> Os exercícios estão divididos em arquivos conforme o número. Aqui aplicou-se o módulo Assert do Node.JS para validar os exercícios, isso implica que as funções foram desenvolvidas para passar no teste, portanto é importante entender o que se compara em cada teste.

1. Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência `2`, `15` e `54`.
  * Dica: use `spread operator`.
```
const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  assert.strictEqual(rectangleArea(), rectangle[0] * rectangle[1]); // altere a chamada da funcao rectangleArea
});
```

2. Crie uma função `sum` que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
Dica: use `parâmetro rest`.
```
const assert = require('assert');

// escreva sum abaixo

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);

```

