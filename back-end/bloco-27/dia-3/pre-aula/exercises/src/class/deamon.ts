import { IDeamon } from '../interfaces';

export default class Deamon implements IDeamon {
  private _name: string;
  
  private _specialMove: string;

  constructor(name: string, specialMove: string) { 
    this._name = name;
    this._specialMove = specialMove;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get specialMove(): string {
    return this._specialMove;
  }

  set specialMove(specialMove: string) {
    this._specialMove = specialMove;
  }
}
