// BLOCO 08 - DIA 1 - JAVASCRIPT ES6 - INTRODUÇÃO A HIGHER ORDER FUNCTIONS
// EXERCÍCIO DE BÔNUS:

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// PARTE 1 - EXERCÍCIO 1:
// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const randomDamage = (min, max) => Math.round(Math.random()*(max-min))+min;

const damageSimulator = (figure, a, b, callback) => {
  if (figure === mage) {
    if (figure.mana < 15) {
      mage.damage = 'Não possui mana suficiente';    
    } {
      mage.mana -= 15;
      figure.damage = callback(a, b);
    }
  }
  figure.damage = callback(a, b);
}

// damageSimulator(dragon, 15, dragon.strength, randomDamage);
// console.log(`Dano do 'dragon': ${dragon.damage}`);

// PARTE 1 - EXERCÍCIO 2:
// Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
// damageSimulator(warrior, warrior.strength, warrior.strength*warrior.weaponDmg, randomDamage);
// console.log(`Dano do 'warrior': ${warrior.damage}`);

// PARTE 1 - EXERCÍCIO 3:
// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageDamageTurn = () => {
  damageSimulator(mage, mage.intelligence, mage.intelligence*2, randomDamage); 
  return { damage: mage.damage, mana: mage.mana }
}
// console.log(mageDamageTurn());

// PARTE 2:
const gameActions = {
  warrior: (callback) => {
    callback(warrior, warrior.strength, warrior.strength*warrior.weaponDmg, randomDamage);
    dragon.healthPoints -= warrior.damage;
  },
  mage: (callback) =>  {
    callback(mage, mage.intelligence, mage.intelligence*2, randomDamage);
    if (typeof(mage.damage) === 'number') {
      dragon.healthPoints -= mage.damage;
    }    
  },
  dragon: (callback) => {
    callback(dragon, 15, dragon.strength, randomDamage);
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },
  fetchBattle: () => battleMembers,
};

const condition = () => warrior.healthPoints > 0 && mage.healthPoints > 0 && dragon.healthPoints > 0;

const fullGame = () => {
  let rodada = 0;
  do {
    console.log(`RODADA ${rodada}:`)
    rodada += 1;
    console.log(gameActions.fetchBattle());
    gameActions.warrior(damageSimulator);
    gameActions.mage(damageSimulator);
    gameActions.dragon(damageSimulator);    
  }
  while (condition());
  console.log(`FIM DE JOGO: finalizado na ${rodada}ª rodada!`);
  console.log(gameActions.fetchBattle());  
}

fullGame();