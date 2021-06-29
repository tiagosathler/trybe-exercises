// BLOCO 04 - DIA 4 - Introdução à JavaScript e Lógica de Programação - Objetos e funções
// 28/06/21 - Tiago H. S. Sathler
// Exercícios do dia


// Parte I - Objetos e For/In
console.log('BLOCO 04 - DIA 4 - JAVASCRIPT - OBJETOS E FUNÇÕES');
console.log('*****************************');
console.log('PARTE I - Objetos e For / In');
console.log('*****************************');

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// programa I.1
console.log('Programa I - 1:');
console.log('Boas-vindas para você, ' + info.personagem + '.');
console.log('-----------------')

// programa I.2
console.log('Programa I - 2:');
info.recorrente = 'Sim';
console.log(info);
console.log('-----------------')

// programa I.3
console.log('Programa I - 3:');
for (let key in info) {
  console.log(key);
}
console.log('-----------------')

// programa I.4
console.log('Programa I - 4:');
for (let key in info) {
  console.log(info[key]);
}
console.log('-----------------')

// programa I.5
console.log('Programa I - 5:');
let outraInfo = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}
for (let key in info) {  
  if (key != 'recorrente') {
    console.log(info[key] + ' e ' + outraInfo[key]);
  } else if (info[key] === 'Sim' && outraInfo[key] === 'Sim') {
    console.log('Ambos recorrentes');
  } else if (info[key] === 'Não' && outraInfo[key] === 'Não') {
    console.log('Ambos não são recorrentes');
  } else {
    console.log('Recorrente? ' + info[key] + ' / ' + outraInfo[key]);
  }
}


// Parte I - Objetos e For/In
console.log('*****************************');
console.log('PARTE II - Funções');
console.log('*****************************');

// programa II.1
console.log('Programa I - 1:');
function isPalindrome(string) {
  string = string.toLowerCase();
  let diffChar = true;
  for (let index = 0; index < string.length / 2 ; index += 1) {
    if (string[index] != string[string.length - index - 1]) {
      diffChar = false;
    }  
  }
  return diffChar;
}
console.log("'arara' é palíndrome? " + isPalindrome('arara'));
console.log("'desenvolvimento' é palíndrome? " + isPalindrome('desenvolvimento'));
console.log("'Osso' é palíndrome? " + isPalindrome('Osso'));
console.log("'TeNeT' é palíndrome? " + isPalindrome('TeNeT'));
console.log("'AMA' é palíndrome? " + isPalindrome('AMA'));
console.log("'amar' é palíndrome? " + isPalindrome('amar'));
console.log('-----------------');

// programa II.2
console.log('Programa II - 2:');
function indexOfBigger(array) {
  let biggerValue = Number.NEGATIVE_INFINITY;
  let indexOfValue = 0;
  for (let index in array) {
    if (array[index] > biggerValue) {
      biggerValue = array[index];
      indexOfValue = index;
    }
  }
  return indexOfValue;
}
let arrayDeTeste = [2, 3, 6, 7, 10, 1];
console.log("Dado o 'arrayDeTeste' = ", arrayDeTeste);
console.log("Índice do MAIOR valor no 'arrayDeTeste': " + indexOfBigger(arrayDeTeste));
console.log('-----------------');

// programa II.3
console.log('Programa II - 3:');
function indexOfSmaller(array) {
  let smallerValue = Number.POSITIVE_INFINITY;
  let indexOfValue = 0;
  for (let index in array) {
    if (array[index] < smallerValue) {
      smallerValue = array[index];
      indexOfValue = index;
    }
  }
  return indexOfValue;
}
arrayDeTeste = [2, 4, 6, 7, 10, 0, -3];
console.log("Dado o 'arrayDeTeste' = ", arrayDeTeste);
console.log("Índice do MENOR valor no 'arrayDeTeste': " + indexOfSmaller(arrayDeTeste));
console.log('-----------------');

// programa II.4
console.log('Programa II - 4:');
function biggestWord(array) {
  let wordLength = 0;
  let getWord = '';
  for (let string of array) {
    if (string.length > wordLength) {
      wordLength = string.length;
      getWord = string;
    }
  }
  return getWord;
}
arrayDeTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log("Dado o 'arrayDeTeste' = ", arrayDeTeste);
console.log("Maior 'string' em 'arrayDeTeste': " + biggestWord(arrayDeTeste));
console.log('-----------------');

