import { IMotorcycleVehicles } from '../interfaces/vehicles';
import Vehicle from './Vehicle';

export default class Motorcycle
  extends Vehicle
  implements IMotorcycleVehicles {
  startEngine(): void {
    console.log(`Starting a motorcycle ${this._brand} of ${this._name}`);
  }
  
  ride(): void {
    console.log(`Ride a motorcycle ${this._brand} of ${this._name}`);
  }
}