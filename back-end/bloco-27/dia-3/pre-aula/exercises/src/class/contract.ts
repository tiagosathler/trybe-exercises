import { IPerson } from '../interfaces';

export default class Contract<T extends IPerson> {
  static _number: 0;

  constructor(public broker: T) { }

  static get number() {
    return this._number;
  }
}