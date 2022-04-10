const fs = require('fs').promises;

// 1. Crie uma função que recebe três parâmetros retorna uma Promise .
async function one(...numbers) {
  return new Promise((resolve, reject) => {
    console.log(numbers);
    if (numbers.length !== 3) reject(new Error('Informe 3 números'));
    numbers.forEach((number) => {
      if (typeof number !== 'number') {
        reject(new Error('Informe apenas números'));
      }      
    })
    const [a, b, c] = numbers;
    const result = (a + b) * c;
    if (result < 5000) reject({result, message: 'Resultado abaixo de 5000!'});
    resolve({result, message: 'Resultado acima de 5000!'});
  })
}

// one(1, 3)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// one('a', 3, 'c')
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// one(1, 2, 3)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// one(1, 6, 9)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
///

// 2. Escreva um código para consumir a função construída no exercício anterior.
console.log('------------------------------')
function two() {
  const random = ['','',''].map(() => Math.floor(Math.random() * 100 + 1));
  one(...random)
    .then((response) => console.log(`2: SUCCESS - ${response.message} - result = `, response.result))
    .catch((response) => console.log(`2: FAILS - ${response.message} - result = `, response.result));
}

two();

// 3. Reescreva o código do exercício anterior para que utilize async/await .
console.log('------------------------------')
async function three() {
  try {
    const random = ['','',''].map(() => Math.floor(Math.random() * 100 + 1));
    const resolve = await one(...random);
    console.log(`3: SUCCESS - ${resolve.message} - result = `, resolve.result);
  } catch(reject) {
    console.log(`3: FAILS - ${reject.message} - result = `, reject.result);
  }
}

three();  

// 4. Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
console.log('------------------------------')
// const fs = require('fs').promises;

function part41(content) {
  content.forEach(( {id, name }) => console.log(`${id} - ${name}`));
}

// function part42(content)

fs.readFile('./simpsons.json', 'utf-8')
  .then((json) => JSON.parse(json))
  .then((content) => {
    part41(content);
  })
  .catch(err => console.log('Erro:', err));