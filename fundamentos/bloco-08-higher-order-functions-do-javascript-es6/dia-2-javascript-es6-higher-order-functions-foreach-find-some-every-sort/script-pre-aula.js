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

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach( (element) => showEmailList(element));

// array.find
// 1:
const numbers = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = (array) => array.find((element) => !(element % 3) && !(element % 5) );
console.log(findDivisibleBy3And5(numbers))

//2:
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