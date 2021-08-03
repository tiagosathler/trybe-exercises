# Bloco 08 - Dia 5 - JavaScript ES6 - spread operator, parâmetro rest, destructuring e mais

Neste dia aprendemos novas *features* do JS ES6 que são *spread operator*, parâmetro *rest* e como fazer o *destructuring* de objetos e *arrrays*. O *spread* facilita muito na hora de juntar *arrays* e *objetos*. Já o *rest* facilita muito na passagem de parâmetro de funções juntando-as em um único *array*. Por fim, a metodoliga de fazer *destructuring* de objetos e *arrays* facilita a melhor compreensão do código, deixando-o mais simples e conciso.

## Exercícios do dia

> Os exercícios estão divididos em arquivos conforme o número. Aqui aplicou-se o módulo Assert do Node.JS para validar os exercícios, isso implica que as funções foram desenvolvidas para passar no teste, portanto é importante entender o que se compara em cada teste.

__1.__ Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência `2`, `15` e `54`. 
> _* Dica: use `spread operator`._

> [__exercise1.js__](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-08-higher-order-functions-do-javascript-es6/dia-5-javascript-es6-sprend-operator-par%C3%A2metro-rest-destructuring-e-mais/exercise1.js)

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

__2.__ Crie uma função `sum` que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
> _* Dica: use `parâmetro rest`._

> [__exercise2.js__](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-08-higher-order-functions-do-javascript-es6/dia-5-javascript-es6-sprend-operator-par%C3%A2metro-rest-destructuring-e-mais/exercise2.js)

```
const assert = require('assert');

// escreva sum abaixo

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);

```
__3.__ Escreva a função `personLikes`, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo: 
> _* Dica: use `object destructuring`._

> [__exercise3.js__](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-08-higher-order-functions-do-javascript-es6/dia-5-javascript-es6-sprend-operator-par%C3%A2metro-rest-destructuring-e-mais/exercise3.js)

```
const assert = require('assert');

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = () => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
assert.strictEqual(personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');
```

__4.__ Escreva uma função `filterPeople` que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
> _* Dica: use `object destructuring`._

> [__exercise4.js__](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-08-higher-order-functions-do-javascript-es6/dia-5-javascript-es6-sprend-operator-par%C3%A2metro-rest-destructuring-e-mais/exercise4.js)

```
const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });
```

__5.__ Escreva a função `swap`, que dado um *array* de 3 elementos, retorna um novo *array* com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só: 
> _* Dica: use `array destructuring`._

> [__exercise5.js__](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-08-higher-order-functions-do-javascript-es6/dia-5-javascript-es6-sprend-operator-par%C3%A2metro-rest-destructuring-e-mais/exercise5.js)

```
const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);
```

__6.__ Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função `toObject` que, dada uma lista, retorna um objeto representando o carro: 
> _* Dica: use `array destructuring` e `abbreviation object literal`._

> [__exercise6.js__](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-08-higher-order-functions-do-javascript-es6/dia-5-javascript-es6-sprend-operator-par%C3%A2metro-rest-destructuring-e-mais/exercise6.js)

```
const assert = require('assert');

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

assert.deepStrictEqual(toObject(palio), { name: 'Palio', brand: 'Fiat', year: 2019 });
assert.deepStrictEqual(toObject(shelbyCobra), { name: 'Shelby Cobra', brand: 'Ford', year: 1963 });
assert.deepStrictEqual(toObject(chiron), { name: 'Chiron', brand: 'Bugatti', year: 2016 });
```

__7.__ Escreva uma função `shipLength` que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:
> _* Dica: use `object destructuring`._

> [__exercise7.js__](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-08-higher-order-functions-do-javascript-es6/dia-5-javascript-es6-sprend-operator-par%C3%A2metro-rest-destructuring-e-mais/exercise7.js)

```
const assert = require('assert');

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo

assert.strictEqual(shipLength(ships[0]), 'Titanic is 269.1 meters long');
assert.strictEqual(shipLength(ships[1]), 'Queen Mary 2 is 1132 feet long');
assert.strictEqual(shipLength(ships[2]), 'Yamato is 256 meters long');
```

__8.__ Escreva uma função `greet` que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
> _* Dica: use `default params`._

> [__exercise8.js__](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-08-higher-order-functions-do-javascript-es6/dia-5-javascript-es6-sprend-operator-par%C3%A2metro-rest-destructuring-e-mais/exercise8.js)

```
const assert = require('assert');

// escreva greet abaixo

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');
```
