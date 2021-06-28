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
console.log('-----------------')