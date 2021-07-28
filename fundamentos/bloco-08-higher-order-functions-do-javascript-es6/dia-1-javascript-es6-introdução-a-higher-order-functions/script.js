// EXERCÍCIO PRÉ-AULA AO VIVO:

const wakeUp = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

// Ao chamar a função doingThings:
const doingThings = (func) => console.log(func);

doingThings(wakeUp()); // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
doingThings(coffee()); // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Bora tomar café!!
doingThings(sleep()); // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Partiu dormir!!

