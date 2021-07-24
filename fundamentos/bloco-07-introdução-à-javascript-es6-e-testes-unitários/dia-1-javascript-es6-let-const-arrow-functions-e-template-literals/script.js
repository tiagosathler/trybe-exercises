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
// EXERCÍCIO 1: retirar o vazamento de escopo:
// function testingScope(escopo) {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   //console.log(elseScope + ' o que estou fazendo aqui ? :O');
// }
//
// EXERCÍCIO 1: transformar em arrow function e template literals
// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = `${ifScope}, ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
//   //console.log(elseScope + ' o que estou fazendo aqui ? :O');
// }
//
// testingScope(false);
// ///////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////
// PARTE I: EXERCÍCIO 2:
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui:
const sortAndWriteArray = array => `Os números ${array.sort((a, b) => a - b).join(', ')} se encontram ordenados de forma crescente!`;

console.log(sortAndWriteArray(oddsAndEvens)); // será necessário alterar essa linha 😉