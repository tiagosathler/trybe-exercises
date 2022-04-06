import MeleeCharacter from './class/melee';
import LongRangeCharacter from './class/longRangeCharacter';
import PhysicalPerson from './class/person';
import showDetails from './utils';

const melee = new MeleeCharacter('Melee');
melee.talk();
melee.specialMove();
console.log(melee.getCountCalls());

const smash = new LongRangeCharacter('Smash');
smash.talk();
smash.specialMove();
console.log(smash.getCountCalls());

const pp0 = new PhysicalPerson('Tiago', 123456789);
const pp1 = new PhysicalPerson('João', 987654321);

showDetails(pp0);
showDetails(pp1);