import MeleeCharacter from './class/melee';
import LongRangeCharacter from './class/longRangeCharacter';
import PhysicalPerson from './class/physicalPerson';
import LegalPerson from './class/legalPerson';
import showDetails from './utils';
import Contract from './class/contract';

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

const lp0 = new LegalPerson('Grafeno', 1000123456789);
const lp1 = new LegalPerson('Localiza', 1000123456789);

showDetails(pp0);
showDetails(pp1);

showDetails(lp0);
showDetails(lp1);

const c1: Contract<PhysicalPerson> = new Contract(pp0);
console.log(c1.broker.cpf);

const c2: Contract<LegalPerson> = new Contract(lp0);
console.log(c2.broker.cnpj);