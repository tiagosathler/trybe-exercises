export default abstract class Character {
  static count = 0;

  constructor(public name: string) { }
  abstract talk(): void;
  abstract specialMove(): void;
  abstract getCountCalls(): number;
}
