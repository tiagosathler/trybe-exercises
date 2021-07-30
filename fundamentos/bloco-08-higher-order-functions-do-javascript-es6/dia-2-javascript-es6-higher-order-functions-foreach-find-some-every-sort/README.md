# Bloco 08 - Dia 2 - JavaScript ES6 - Higher Order Functions - *forEach*, *find*, *some*, *every* e *sort*

Neste dia aprendi usar algumas *HOF* específicas para objetos tipo *array* em JavaScript ES6. São funções nativas associadas ao qualquer *array* que otimizam e facilitam a construção do algoritmo, uma vez que não é necessário ficar preocupado criando estruturas para percorrer, testar e buscar informações no *array*, apenas ficar focado em o que quero fazer com a informação.

## Exercícios do dia

> *Aqui foram feitos exercícios antes e depois da aula ao vivo, para melhor fixação do conteúdo. Estão, respectivamente separados nos arquivos: [script-pre-aula.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-08-higher-order-functions-do-javascript-es6/dia-2-javascript-es6-higher-order-functions-foreach-find-some-every-sort/script-pre-aula.js) e [exercise1.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-08-higher-order-functions-do-javascript-es6/dia-2-javascript-es6-higher-order-functions-foreach-find-some-every-sort/exercise1.js).*

### Exercícios pré-aula ao vivo:

#### Exercícios para o `find`:

1. Utilize o `find` para retornar o primeiro número do *array* que é divisível por `3` e `5`, caso ele exista: `const numbers = [19, 21, 30, 3, 45, 22, 15];`.

2. Utilize o `find` para encontrar o primeiro nome com `5` letras, caso ele exista: const `names = ['João', 'Irene', 'Fernando', 'Maria'];`.

3. Utilize o `find` para encontrar a música com `id` igual a `31031685`, caso ela exista:
```
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
```
#### Exercícios para `some` e `every`:

1. Escreva uma função que dado um *array* de nomes e um nome retorne `true` se ele estiver contido e caso contrário, retorne `false`, use `some`: `const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];`.

2. Escreva uma função que dado um *array* de pessoas e uma idade mínima retorne `true` se todas tiverem a idade maior ou igual a mínima e caso contrário `false`, use `every`:
```
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
```
 #### Exercícios para `sort`:

 1. Utilize a `sort` para ordenar o *array* pela __idade__ das pessoas em ordem __crescente__:
```
 const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
```
2. Modifique o `sort` do exercício anterior para que ordene o *array* pela __idade__ das pessoas em ordem __decrescente__.

3. (EXTRA) Modifique o `sort` do exercício anterior para que ordene o *array* pelo __nome__ das pessoas em ordem __decrescente__.

### Exercícios pós-aula ao vivo:

> *Usar a contante `books` defininida no arquivo [exercise1.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-08-higher-order-functions-do-javascript-es6/dia-2-javascript-es6-higher-order-functions-foreach-find-some-every-sort/exercise1.js) para executar os exercícios. Aqui foram usadas testes unitários através do `assert` para verficar o retorno esperado de cada função*

1. Encontre o nome da __primeira pessoa__ autora do livro nascida no ano de __1947__.

2. Retorne o __nome__ do livro de __menor__ nome.

3. Encontre o __primeiro livro__ cujo nome possui __26__ caracteres.

4. Ordene os livros por __data de lançamento__ em ordem __decrescente__.

5. Faça uma função que retorne `true`, se __todas__ as pessoas autoras nasceram no __século XX__, ou `false`, caso contrário.

6. Faça uma função que retorne `true`, se __algum__ livro foi lançado na __década de 80__, e `false`, caso contrário.

7. Faça uma função que retorne `true`, caso __nenhum__ *author* tenha nascido no __mesmo ano__, e `false`, caso contrário.