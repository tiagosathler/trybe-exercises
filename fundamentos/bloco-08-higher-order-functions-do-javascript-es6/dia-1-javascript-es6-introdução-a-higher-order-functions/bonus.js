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

damageSimulator(dragon, 15, dragon.strength, randomDamage);
console.log(`Dano do 'dragon': ${dragon.damage}`);

// PARTE 1 - EXERCÍCIO 2:
// const warriorAttack = () => 
damageSimulator(warrior, warrior.strength, warrior.strength*warrior.weaponDmg, randomDamage);
console.log(`Dano do 'warrior': ${warrior.damage}`);

// PARTE 1 - EXERCÍCIO 3:
const putMageDamageTurn = () => {
  damageSimulator(mage, mage.intelligence, mage.intelligence*2, randomDamage); 
  return { damage: mage.damage, mana: mage.mana }
}
console.log(putMageDamageTurn());

// PARTE 2:
const gameActions = (attack, callback) => {
  // Crie as HOFs neste objeto.
  if (attack === warrior) {
    // EXERCÍCIO 1:
    callback(attack, attack.strength, attack.strength*attack.weaponDmg, randomDamage);
    dragon.healthPoints -= attack.damage;
  } else if (attack === mage) {    
    callback(attack, attack.intelligence, attack.intelligence*2, randomDamage);
    dragon.healthPoints -= attack.damage;
  } else {
    callback(attack, 15, attack.strength, randomDamage);
    mage.healthPoints -= attack.damage;
    warrior.healthPoints -= attack.damage;
  }
  return battleMembers;  
};
console.log('1 Ataque do warrior:')
console.log(gameActions(warrior, damageSimulator));
console.log('1 Ataque do warrior:')
console.log(gameActions(mage, damageSimulator));
console.log('1 Ataque do dragon:')
console.log(gameActions(dragon, damageSimulator));

console.log('2 Ataque do warrior:')
console.log(gameActions(warrior, damageSimulator));
console.log('2 Ataque do warrior:')
console.log(gameActions(mage, damageSimulator));
console.log('2 Ataque do dragon:')
console.log(gameActions(dragon, damageSimulator));