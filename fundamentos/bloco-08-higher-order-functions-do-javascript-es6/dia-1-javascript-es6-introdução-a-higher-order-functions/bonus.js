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
const randomDamage = (min, max) => Math.round(Math.random()*(max-min))+min;

const damageSimulator = (figure, a, b, callback) => {
  figure.damage = callback(a, b);
}

damageSimulator(dragon, 15, dragon.strength, randomDamage);
console.log(`Dano do 'dragon': ${dragon.damage}`);

// PARTE 1 - EXERCÍCIO 2:
damageSimulator(warrior, warrior.strength, warrior.strength*warrior.weaponDmg, randomDamage);
console.log(`Dano do 'warrior': ${warrior.damage}`);

// PARTE 1 - EXERCÍCIO 3:
const getMageTurn = (callback) => {
  if (mage.mana < 15) {
    mage.damage = 'Não possui mana suficiente';    
  } {
    mage.mana -= 15;
    damageSimulator(mage, mage.intelligence, mage.intelligence*2, callback);
  }
  return { damage: mage.damage, mana: mage.mana }
}
console.log(getMageTurn(randomDamage));