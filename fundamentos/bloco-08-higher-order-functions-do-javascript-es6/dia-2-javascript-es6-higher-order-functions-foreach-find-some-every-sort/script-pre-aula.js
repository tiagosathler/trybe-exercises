// BLOCO 08- DIA 2 - JS ES6 - HOF - forEach, find, some, every, sort
// 29/07/21
// EXERCÍCIOS PRÉ-AULA AO VIVO

// array.forEach
// 1.
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
console.log("'forEach - Exercício 1:")
const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);  
};
emailListInData.forEach( (element) => showEmailList(element));

// array.find
// 1:
console.log('-------------------------------------');
console.log("'find' - Exercicio 1:")
const numbers = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = (array) => array.find((element) => !(element % 3) && !(element % 5) );
console.log(findDivisibleBy3And5(numbers))

// array.find
//2:
console.log('-------------------------------------');
console.log("'find' - Exercicio 2:")
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const isWordWithNLetters = (word, n) => word.length > n;
const templateNegativeAnswer = (x) => `Não há nome com pelo menos ${x} letras`;

const findFirstNameWithNLetters = (array, n) => {
  const name = array.find((element) => isWordWithNLetters(element, n));
  if (name !== undefined) {
    return name;
  }
    return templateNegativeAnswer(n);
}
console.log(findFirstNameWithNLetters(names, 5));
console.log('-------------------------------------');

// array.find
//3:
console.log("'find' - Exercicio 3:")
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  const objFounded = musicas.find( (obj) => obj.id === id);
  if (objFounded) {
    return objFounded.title;
  } 
  return `Não há música com o 'id' = ${id} em 'músicas'`;   
}
console.log(findMusic('31031685'))


// array.some e array.every
// 1:
console.log('-------------------------------------');
console.log("'some e every' - Exercicio 1:")
const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some( (element) => element === name);
}

console.log(hasName(names2, 'Ana'))

// array.some e array.every
// 2:
console.log('-------------------------------------');
console.log("'some e every' - Exercicio 2:")
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((obj) => obj.age >= minimumAge);
}

console.log(verifyAges(people,12));

// array.sort
// 1:
console.log('-------------------------------------');
console.log("'sort' - Exercicio 1:")
console.log(' Ordenando por ordem crescente de idade:')

// Adicione se código aqui
people.sort( (a, b) => a.age - b.age);
console.log(people);

// array.sort
// 2:
console.log('-------------------------------------');
console.log("'sort' - Exercicio 2:")
console.log(' Ordenando por ordem decrescente de idade:')

// Adicione se código aqui
people.sort( (a, b) => b.age - a.age);
console.log(people);

// array.sort
// 3 (extra):
console.log('-------------------------------------');
console.log("'sort' - Exercicio 3 (extra):")
console.log(' Ordenando por ordem decrescente de nome:')

// Adicione se código aqui
people.sort();
people.reverse();
console.log(people);