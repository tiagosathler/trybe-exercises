// BLOCO 08- DIA 2 - JS ES6 - HOF - forEach, find, some, every, sort
// 29/07/21
// EXERCÍCIOS PRÉ-AULA AO VIVO

// forEach
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

// Adicione seu código aqui
emailListInData.forEach( (element) => showEmailList(element));
