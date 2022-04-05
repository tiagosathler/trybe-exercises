import { IPerson } from '../interfaces';

export default class Person {
  private _name: string;

  private _birthday: Date;

  constructor(
    { name, birthday }: IPerson,
  ) {
    this.validadeName(name);
    this.validadeDate(birthday);    
  }

  private validadeDate(date: Date): void {
    const now: Date = new Date();
    const diff: number = now.valueOf() - date.valueOf();
    if (diff < 0 || diff > 120 * 365.25 * 24 * 60 * 60 * 1000) {
      throw new Error('Invalid date');
    }
    this._birthday = date;
  }

  private validadeName(name: string): void {
    if (name.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this.validadeName(newName);
  }

  get birthday(): Date {
    return this._birthday;
  }

  set birthday(newBirthday: Date) {
    this.validadeDate(newBirthday);
  }
}