# Bloco 08 - Dia 3 - JavaScript ES 6 - Higher Order Functions - `reduce`

Neste dia aprendemos uma das mais poderesas HOF para *arrays* em JS ES6, o `reduce`. Método importanssímo que percorre todo *array* através de uma função e acumula o resultado em parâmetro *acumulador*. Isto abre caminho para diversas possibilidades, inclusive associando esta HOF com outras.

## Exercícios do dia

> Os exercícios estão divididos em arquivos conforme o seu número. Exemplo, `exercise1.js` para o *Exercício 1*. Aqui aplicou-se o módulo *Assert* do Node.JS para validar os exercícios.

1. Dada uma matriz, transforme-a em um array.
```
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
```

> DADO O *ARRAY* ABAIXO, faça os exercícios de 2 a 4:
```
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
```

2. Crie uma string com os nomes de todas as pessoas autoras.

3. Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

