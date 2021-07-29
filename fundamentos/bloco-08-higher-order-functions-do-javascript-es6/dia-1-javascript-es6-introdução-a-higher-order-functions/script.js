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
  const emailAddress = `${nomeCompleto.replace(' ', '').toLowerCase()}@email.com`;
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

console.log(newEmployees(makeObjectFunction));

// EXERCÍCIO 2:

const isEqual = (number) => number === Math.round((Math.random()*5));;

const estouComSorte = (number, callback) => callback(number) ? 'Parabéns você ganhou' : 'Tente novamente'; //hof

console.log(estouComSorte(3, isEqual));
