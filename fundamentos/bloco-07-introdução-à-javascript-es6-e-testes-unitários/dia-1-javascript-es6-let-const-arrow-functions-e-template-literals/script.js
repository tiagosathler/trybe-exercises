// ///////////////////////////////////////////////////////////////
// PARTE I - Exercício 1:
//
// FUNCTION ORIGINAL:
// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }
//
// 1º passo: retirar o vazamento de escopo:
function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
//  console.log(elseScope + ' o que estou fazendo aqui ? :O');
}
testingScope(false);

//
// 2º passo: transformar em arrow function e template literals
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope}, ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  //console.log(elseScope + ' o que estou fazendo aqui ? :O');
}
testingScope(false);
// ///////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////
// PARTE I: EXERCÍCIO 2:
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortAndWriteArray = array => `Os números ${array.sort((a, b) => a - b).join(', ')} se encontram ordenados de forma crescente!`;

console.log(sortAndWriteArray(oddsAndEvens)); // será necessário alterar essa linha 😉
// ///////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////
// PARTE II: EXERCÍCIO 1:
 
// SOLUÇÃO 1:
const factorial = number => {
  let result;
  if (number >= 0) {
    result = 1;
    for(let i = 1; i <= number; i += 1) {
      result *= i;
    }
  } else {
    result = `Não existe fatorial de ${number}!!!`;
  }
  return result;
}
console.log(factorial(3))

// SOLUÇÃO 2:
const factorial = number => {
  let result;  
  if (number >= 0) {
    result = number;    
    while(number > 2) {
     result *= --number;
    }
  } else {
    result = `Não existe fatorial de ${number}!!!`;
  }
  return result;
}
console.log(factorial(3))

// SOLUÇÃO 3:
const multiply = n => { 
  let result = n;
  while (n > 2) {
    result *= --n;
  }
  return result;
}

const factorial = number => number >= 0 ? multiply(number) : `Não existe fatorial de ${number}!!!`;
console.log(factorial(3))

// SOLUÇÃO 4:
const factorial = number => number > 1 ? number * factorial (number -1) : 1;
let x = 5;
console.log(x >= 0 ? factorial(x) : `Não existe fatorial de ${x}!!!`);

// ///////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////
// PARTE II: EXERCÍCIO 2:

// SOLUÇÃO 1:
let biggestWord = "";
const longestWord = string => string.split(' ').forEach(word => word.length > biggestWord.length ? biggestWord = word : null);
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");
console.log(biggestWord);


// SOLUÇÃO 2:
const reducer = (biggestWord, wordTest) => wordTest.length > biggestWord.length ? wordTest : biggestWord;
const phrase = "Antônio foi no banheiro e não sabemos o que aconteceu";
console.log(phrase.split(' ').reduce(reducer));

// SOLUÇÃO 3 (em uma única linha):
const longestWord = phrase => 
  phrase.split(' ').reduce( (biggestWord, wordTest) =>
    wordTest.length > biggestWord.length ? wordTest : biggestWord);

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// ///////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////
// PARTE II: EXERCÍCIO 4:
const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'Arduino', 'Run'];

const newPhrase = (phrase, symbol, name) => phrase.replace(new RegExp(symbol, 'ig'), name);
const newPhraseWithSkills = (phrase, symbol, name, skills) => {
  let composite = `${newPhrase(phrase, symbol, name)}

  Minhas ${skills.length} principais habilidades são:`

  skills.sort( (a, b) => a - b).forEach(skill => {
    composite = `${composite}
    - ${skill}`});
    composite = `${composite}

  #goTrybe
  `;
  return composite;
}
console.log('-- Função 1:\n')
console.log(newPhrase('Tryber x aqui!', 'x', 'Bebeto'));

console.log('\n-- Função 2:\n')
console.log(newPhraseWithSkills('Tryber x aqui!', 'x', 'Bebeto', skills));
