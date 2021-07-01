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


// Parte II - Objetos e For/In
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

// programa II.5
console.log('Programa II - 5:');
function repeatableInteger(array) {
  let count = [];
  let maxCount = 0;
  let indexOfInteger = 0;
  for (let index1 in array) {
    count[index1] = 0;
    for (let index2 in array ) {
      if ( array[index1] === array[index2]) {
        count[index1] += 1;
      }
    }
    if (count[index1] > maxCount) {
      maxCount = count[index1];
      indexOfInteger = index1;
    }
  }  
  return array[indexOfInteger];
}
arrayDeTeste = [2, 3, 2, 5, 8, 2, 3]; 
console.log("Dado o 'arrayDeTeste' formado por números inteiros = ", arrayDeTeste);
console.log("O número que mais se repete no 'arrayDeTeste' é: " + repeatableInteger(arrayDeTeste));
console.log('-----------------');

// programa II.6
console.log('Programa II - 6:');
function sumOfN(n) {
  let sum = 0;
  for (let index = 0; index <= n; index += 1) {
    sum += index;
  }
  return sum;
}
let numberN = 5;
console.log("Dado um número 'numberN' = ", numberN);
console.log("O somatório dos números inteiros de 1 até " + numberN + " é: " + sumOfN(numberN));
console.log('-----------------');

// programa II.7
console.log('Programa II - 7:');
function verificaFimPalavra(string1, string2) {
  let condicao = true;
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  difTamanhoStrings = string1.length - string2.length;
  for (let index = difTamanhoStrings; index < string1.length; index += 1 ) {
    if (string1[index] != string2[index -difTamanhoStrings]) {
      condicao = false;
    }
  }
  return condicao;
}
let word = 'trybe';
let ending = 'be';
console.log("Dadas duas strings 'word' = '" + word + "' e 'ending' = '" + ending + "'");
console.log("No final de 'word' contém o conteúdo de 'ending'?", verificaFimPalavra(word, ending));
console.log('-----------------');


// Parte III - Bônus
console.log('*****************************');
console.log('PARTE III - Bônus');
console.log('*****************************');

// programa III.1
console.log('Programa III - 1:');
function romanToDecimalNumber(string) {
  string = string.toUpperCase();
  let values = [];
  let sum = 0;
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case 'I':
        values[index] = 1;
        break;
      case 'V':
        values[index] = 5;
        break;
      case 'X':
        values[index] = 10;
        break;
      case 'L':
        values[index] = 50;
        break;
      case 'C':
        values[index] = 100;
        break;
      case 'D':
        values[index] = 500;
        break;
      case 'M':
        values[index] = 1000;
        break;
      default:
        return NaN;
    }
  }  
  for (let index = 0; index < values.length; index += 1) {
    if (index < values.length - 1) {
      if (values[index] < values[index+1]) {
        values[index] = -values[index];
      }
    }
    sum += values[index];
  }
  return sum;
}

let romanNumber = 'MDCCCLXX'
let decimalNumber = romanToDecimalNumber(romanNumber);
console.log('Dado um número em notação Romana: ' + romanNumber);
console.log('O mesmo número em notação decimal: ' + decimalNumber);
console.log('-----------------');