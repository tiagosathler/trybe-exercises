import { IVehicle } from '../interfaces/vehicles';

export default abstract class Vehicle implements IVehicle {
  protected _brand: string;
  
  protected _name: string;

  constructor(name: string, brand: string) {
    this._name = name;
    this._brand = brand;
  }

  get name(): string {
    return this._name;
  }
  
  set name(value: string) {
    this._name = value;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(value: string) {
    this._brand = value;
  }  
}