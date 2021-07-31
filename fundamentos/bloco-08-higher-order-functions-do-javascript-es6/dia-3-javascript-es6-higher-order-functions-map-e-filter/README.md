# Bloco 08 - Dia 3 - JavaScript ES6 - Higher Order Functions - `map` e `filter`

Neste dia continuamos a aplicar outras HOF aos *arrays*, que são métodos próprios disponíveis a qualquer objeto tipo *array* em JavaScript ES6. A HOF `map` devolve um *array* de mesmo tamanho do *array* original poŕem permitindo-nos construir outro com qualquer informação para cada elemento. Já o `filter` é uma HOF que filtra do *array* os elementos que passam na condição de teste e devolve outro *array* com os elementos do original. Observe que as duas funções não alteram o *array* original.

## Exercícios do dia:

> Os exercícios foram desenvolvidos em único arquivo: [`exercices.js`](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-08-higher-order-functions-do-javascript-es6/dia-3-javascript-es6-higher-order-functions-map-e-filter/exercises.js). O *array* necessário para execução dos exercícios está exposto no arquivo. Ele contém objetos relacionados a livros.

1. Crie um *array* com *strings* no formato `NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA`.
  * Dica: use a função `map`.

2. Construa um *array* de objetos a partir do *array* de livros. Cada objeto deve conter uma propriedade `author` , com o nome da pessoa autora do livro, e uma propriedade `age` com a idade dessa pessoa quando o livro foi lançado. O *array* deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
  * Dica: use as funções `map`, `sort`.

3. Crie um *array* com todos os objetos que possuem gênero `Ficção Científica` ou `Fantasia`.
  * Dica: use as função `filter`.

4. Crie um *array* ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
  * Dica: use as funções `filter` e `sort`.

5. Crie um *array* em ordem alfabética apenas com os nomes de todas as pessoas autoras de `Ficção Científica` ou `Fantasia`.

6. Crie um *array* com o nome de todos os livros com mais de 60 anos de publicação.

7. Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
  * Dica: cada inicial termina com um ponto.