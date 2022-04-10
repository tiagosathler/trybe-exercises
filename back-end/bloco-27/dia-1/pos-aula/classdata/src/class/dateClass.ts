import isDate from 'validator/lib/isDate';

interface IDate {
  day: number;
  month: number;
  year: number;
}

enum MonthList {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12,
}

export default class DateClass {
  private _day: number;

  private _month: number;

  private _year: number;

  private _isRandomDate = false;

  private _isValidDate = false;

  constructor(year: number, month: number, day: number) {
    if (this.validadeDate({ day, month, year })) {
      this._day = day;
      this._month = month;
      this._year = year;
    } else {
      const date = new Date(Math.round(Math.random() * 1e13));
      this._day = date.getDay();
      this._month = date.getMonth();
      this._year = date.getFullYear();
      this._isRandomDate = true;
    }
  }

  private validadeDate({ day, month, year }:IDate): boolean {
    const dayString = day?.toString().padStart(2, '0');
    const monthString = month?.toString().padStart(2, '0');
    const yearString = year?.toString().padStart(4, '0');
    if (isDate(`${yearString}-${monthString}-${dayString}`)) {
      this._isValidDate = true;
      return true;
    }
    return false;
  }

  public get day(): number {
    return this._day;
  }

  public set day(d: number) {
    if (!this.validadeDate({ year: this._year, month: this._month, day: d })) {
      throw new Error('Invalid day');
    }
    this._day = d;
  }

  public get month(): number {
    return this._month;
  }

  public set month(m: number) {
    if (!this.validadeDate({ year: this._year, month: m, day: this._day })) {
      throw new Error('Invalid month');
    }
    this._month = m;
  } 

  public get year(): number {
    return this._year;
  }

  public set year(y: number) {
    if (!this.validadeDate({ year: y, month: this._month, day: this._day })) {
      throw new Error('Invalid year');
    }
    this._year = y;
  }

  public getMonthName(): string {
    return MonthList[this._month];
  }

  public isLeapYear(): boolean {
    return ((this._year % 4 === 0 && this._year % 100 !== 0) || this._year % 400 === 0);
  }

  public compare(date: DateClass): number {
    const actualDate = (new Date(this._year, this._month, this._day)).valueOf();
    const compareDate = (new Date(date.year, date.month, date.day)).valueOf();
    if (actualDate > compareDate) {
      return 1;
    } if (actualDate < compareDate) {
      return -1;
    }
    return 0;
  }
}
