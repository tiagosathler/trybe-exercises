import { IPerson } from '../interfaces';

export default abstract class Person {
  protected _name: string;

  protected _birthday: Date;

  private static _count = 0;

  constructor(
    { name, birthday }: IPerson,
  ) {
    this.validadeName(name);
    this.validadeDate(birthday);
    Person._count += 1;
  }

  public static get count(): number {
    return this._count;
  }

  private validadeDate(date: Date | undefined): void {
    if (date) {
      const now: Date = new Date();
      const diff: number = now.valueOf() - date.valueOf();
      if (diff < 0 || diff > 120 * 365.25 * 24 * 60 * 60 * 1000) {
        throw new Error('Invalid date: must be between now and 120 years');
      }
      this._birthday = date;
    } else {
      throw new Error('Birthday must be provided');
    }
  }

  private validadeName(name: string | undefined): void {
    if (name) {
      if (name.length < 3) {
        throw new Error('Name must be at least 3 characters long');
      }
      this._name = name;
    } else {
      throw new Error('Name must be provided');
    }
  }

  protected getAge(): number {
    const now: Date = new Date();
    const diff: number = now.valueOf() - this._birthday.valueOf();
    return Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
  }

  protected get name(): string {
    return this._name;
  }

  protected set name(newName: string) {
    this.validadeName(newName);
  }

  protected get birthday(): Date {
    return this._birthday;
  }

  protected set birthday(newBirthday: Date) {
    this.validadeDate(newBirthday);
  }
}