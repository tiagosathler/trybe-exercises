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

const newObjectTemplate = (obj) => {
  return {
    age: obj.releaseYear - obj.author.birthYear,
    author: obj.author.name,
  };
};

const nameAndAge = () =>
  books.map((obj) => newObjectTemplate(obj)).sort((a, b) => a.age - b.age);

assert.deepStrictEqual(nameAndAge(), expectedResult);
