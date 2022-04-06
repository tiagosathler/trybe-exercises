import MeleeCharacter from "./class/melee";
import LongRangeCharacter from "./class/longRangeCharacter";

const melee = new MeleeCharacter('Melee');
melee.talk();
melee.specialMove();
console.log(melee.getCountCalls());


const smash = new LongRangeCharacter('Smash');
smash.talk()
smash.specialMove()
console.log(smash.getCountCalls());