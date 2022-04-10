import Character from './character';

export default class LongRangeCharacter extends Character {
  static increment(): void {
    this.count += 10;
  }

  getCountCalls():number {
    return LongRangeCharacter.count;
  }

  talk(): void {
    LongRangeCharacter.increment();
    console.log('speak quickly!');
  }

  specialMove(): void {
    LongRangeCharacter.increment();
    console.log('super dump');
  }
} 