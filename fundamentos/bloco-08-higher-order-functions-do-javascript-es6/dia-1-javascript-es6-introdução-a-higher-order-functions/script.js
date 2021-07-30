// BLOCO 08 - DIA 1 - JAVASCRIPT ES6 - INTRODUÇÃO A HIGHER ORDER FUNCTIONS
// EXERCÍCIO PRÉ-AULA AO VIVO:

const wakeUp = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

// Ao chamar a função doingThings:
const doingThings = (func) => console.log(func); //HOF

doingThings(wakeUp()); // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
doingThings(coffee()); // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Bora tomar café!!
doingThings(sleep()); // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Partiu dormir!!


// EXERCÍCIOS PÓS-AULA AO VIVO:

// EXERCÍCIO 1:
const makeObjectFunction = (nomeCompleto) => {  // Minha função como parâmetro da HOF
  const emailAddress = `${nomeCompleto.replace(' ', '_').toLowerCase()}@email.com`;
  return { fullName: nomeCompleto, email: emailAddress};
}

const newEmployees = (funcaoDeRetorno) => {  // HOF: funcaoDeRetorno (callback)
  const employees = {
    id1: funcaoDeRetorno('Pedro Guerra'), 
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: funcaoDeRetorno('Luiza Drumond'), 
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: funcaoDeRetorno('Carla Paiva'), 
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(`Exercício 1: Employees:`);
console.log(newEmployees(makeObjectFunction));

// EXERCÍCIO 2:
// fn que compara com um numero number com outro gerado aleatoriamente entre 1 e 5 (inteiro)
const isEqual = (number) => number === Math.ceil((Math.random()*5)); 

// hof que chama a função de comparação que retorna true ou false e depois retorna conforme o teste
const estouComSorte = (number, callback) => callback(number) ? 'Parabéns você ganhou!' : 'Tente novamente...';

console.log(`Exercício 2: Estou com sorte?? ${estouComSorte(5, isEqual)}`);

// EXERCÍCIO 3:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C']; // gabarito
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']; // respostas

// funcao de comparacao e retorna o ponto equivalente
const compare = (answer, rightAnswer) => {
  if (answer === rightAnswer) {
    return 1;
  } else if( answer === 'N.A') {
    return 0;    
  }
  return -0.5;
}

// hof que chama a fn compare para comparar cada resposta com o gabarito e retornar o ponto equivalente
const checkAnswers = (answers, template, callback) => {
  let points = 0;
  for(let index in answers) {
    points += callback(answers[index], template[index]);
  }
  return points;
}
const phrase = `Exercício 3: Sua pontuação, de até 10, foi `
console.log(`${phrase}${checkAnswers(STUDENT_ANSWERS, RIGHT_ANSWERS, compare)}.`);