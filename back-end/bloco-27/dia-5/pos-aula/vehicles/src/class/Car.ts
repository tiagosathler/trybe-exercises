import { ICarVehicle } from '../interfaces/vehicles';
import Vehicle from './Vehicle';

export default class Car
  extends Vehicle
  implements ICarVehicle {
  drive(): void {
    console.log(`Drive a car ${this._name} of ${this._brand}`);
  }

  startEngine(): void {
    console.log(`Starting a car ${this._name} of ${this._brand}`);
  }  
}