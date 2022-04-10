import Character from './character';

export default class MeleeCharacter extends Character {
  static increment(): void {
    this.count += 1;
  }

  getCountCalls(): number {
    return MeleeCharacter.count;
  }

  talk(): void {
    MeleeCharacter.increment();
    console.log('speak slowly!');
  }

  specialMove(): void {
    MeleeCharacter.increment();
    console.log('super run');
  }
}