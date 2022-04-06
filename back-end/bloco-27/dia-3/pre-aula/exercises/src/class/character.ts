export default abstract class Character {
  static _count: number = 0;
  constructor(public name: string) { }
  abstract talk(): void;
  abstract specialMove(): void;
  abstract getCountCalls(): number;
}
