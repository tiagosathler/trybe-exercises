// BLOCO 08 - DIA 3 - JAVASCRIPT ES6 - HOF - map e filter
// 30/07/21
// EXERCÍCIO DO DIA

const assert = require("assert");
const { SSL_OP_TLS_ROLLBACK_BUG } = require("constants");

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

let expectedResult;

// 1:
expectedResult = [
  "As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin",
  "O Senhor dos Anéis - Fantasia - J. R. R. Tolkien",
  "Fundação - Ficção Científica - Isaac Asimov",
  "Duna - Ficção Científica - Frank Herbert",
  "A Coisa - Terror - Stephen King",
  "O Chamado de Cthulhu - Terror - H. P. Lovecraft",
];

const formatedBookNames = () =>
  books.map((ojb) => `${ojb.name} - ${ojb.genre} - ${ojb.author.name}`);

assert.deepStrictEqual(formatedBookNames(), expectedResult);

// 2:
expectedResult = [
  {
    age: 31,
    author: "Isaac Asimov",
  },
  {
    age: 38,
    author: "H. P. Lovecraft",
  },
  {
    age: 39,
    author: "Stephen King",
  },
  {
    age: 43,
    author: "George R. R. Martin",
  },
  {
    age: 45,
    author: "Frank Herbert",
  },
  {
    age: 62,
    author: "J. R. R. Tolkien",
  },
];

const newObjectTemplate = (obj) => ({  
    age: obj.releaseYear - obj.author.birthYear,
    author: obj.author.name,
  });

const nameAndAge = () =>
  books.map((obj) => newObjectTemplate(obj)).sort((a, b) => a.age - b.age);

assert.deepStrictEqual(nameAndAge(), expectedResult);

// 3:
expectedResult = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: { name: "George R. R. Martin", birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: { name: "J. R. R. Tolkien", birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: { name: "Isaac Asimov", birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: { name: "Frank Herbert", birthYear: 1920 },
    releaseYear: 1965,
  },
];

const filterCondition = (obj) =>
  obj.genre === "Ficção Científica" || obj.genre === "Fantasia";

const fantasyOrScienceFiction = () => {
  return books.filter((obj) => filterCondition(obj));
};

assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);

//4:
expectedResult = [
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: { name: "H. P. Lovecraft", birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: { name: "Isaac Asimov", birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: { name: "J. R. R. Tolkien", birthYear: 1892 },
    releaseYear: 1954,
  },
];

const olderThan60YearsAgo = (obj) => new Date().getFullYear() - obj.releaseYear > 60;

const oldBooksOrdered = () =>
  books
    .filter((obj) => olderThan60YearsAgo(obj))
    .sort((a, b) => a.releaseYear - b.releaseYear);

assert.deepStrictEqual(oldBooksOrdered(), expectedResult);

// 5:
expectedResult = [
  "Frank Herbert",
  "George R. R. Martin",
  "Isaac Asimov",
  "J. R. R. Tolkien",
];

const fantasyOrScienceFictionAuthors = () =>
  books
    .filter((obj) => filterCondition(obj))
    .map((obj) => obj.author.name)
    .sort();

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);

// 6:
expectedResult = ["O Senhor dos Anéis", "Fundação", "O Chamado de Cthulhu"];

const oldBooks = () =>
  books.filter((obj) => olderThan60YearsAgo(obj)).map((obj) => obj.name);

assert.deepStrictEqual(oldBooks(), expectedResult);

// 7:
expectedResult = 'O Senhor dos Anéis';
// SOLUÇÃO 1:
// (minha solução foobar)

// const regexp = /[A-Z][.] [A-Z][.] [A-Z][.]/g
// const filterAbrName = (string) => {
//   if (string.search(regexp) >= 0) {
//     return true;
//   }
//   return false;
// }

// const authorWith3DotsOnName = () => {
//   const bookFounded = books.filter((obj) => filterAbrName(obj.author.name));
//   return bookFounded[0].name;
// }

// SOLUÇÃO GABARITO:
// mérito do gabarito da Trybe.

const getArrayWithDotsIn = (prhase) => prhase.split(' ').filter((wordInArray) => wordInArray.endsWith('.')); 
// esta fn retorna um array com os elementos filtrados de um array obtido de uma frase
// aqui vale observar que o split separa os elementos da frase que estão separados por espaço, aí o macete é que "T. H. S. Sathler" é transformado em um array com 4 elementos, e depois um filter com um teste endsWith filtra aqueles elementos que terminam com '.'. No fim, neste exemplo, a função retorna um array cotendo apenas 3 elementos, ou seja, 3 abreviações. 


const authorWith3DotsOnName = () => {
  return books.find((book) => getArrayWithDotsIn(book.author.name).length === 3).name;
}
// esta função principal do exercício procura ('find') em cada elemento de book o primeiro que atende se a propriedade book.author.name (string) passada à segunda função tem tamanho 3. observe que o retorno da função getArrayWithDotsIn, que recebe a frase (string) é um array filtrado com elementos com '.' (veja exeplicação da função acima). Observe também que o retorno de 'find' é o objeto que passou no teste, então é necessário, por fim, retornar a propriedade 'name', pois queremos devolver o nome do livro.

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);