import { IBicycleVehicle } from '../interfaces/vehicles';
import Vehicle from './Vehicle';

export default class Bicycle
  extends Vehicle
  implements IBicycleVehicle {
  pedal(): void {
    console.log(`Pedal a bicycle ${this._name} of ${this._brand}`);
  }

  ride(): void {
    console.log(`Ride a bicycle ${this._name} of ${this._brand}`);
  }
}