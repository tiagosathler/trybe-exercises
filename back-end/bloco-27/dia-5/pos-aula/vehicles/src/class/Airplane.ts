import { IAirplanesVehicles } from '../interfaces/vehicles';
import Vehicle from './Vehicle';

export default class Airplane
  extends Vehicle
  implements IAirplanesVehicles {
  startEngine(): void {
    console.log(`Starting a airplane ${this._name} of ${this._brand}`);
  }

  fly(): void {
    console.log(`Flying a airplane ${this._name} of ${this._brand}`);
  }
}