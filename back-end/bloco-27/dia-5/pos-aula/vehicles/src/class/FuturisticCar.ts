// ./FuturisticCar.ts
import * as interfaces from '../interfaces/vehicles';
import Vehicle from './Vehicle';

export default class FuturisticCar
  extends Vehicle
  implements interfaces.ICarVehicle, interfaces.IAirplanesVehicles {
  startEngine(): void {
    console.log(`Starting a futuristic car ${this._name} of ${this._brand}`);
  }

  drive(): void {
    console.log(`Drive a futuristic car ${this._name} of ${this._brand}`);
  }
    
  fly(): void {
    console.log(`Flying a futuristic car ${this._name} of ${this._brand}`);
  }
}

// ORIGINAL:
// ./FuturisticCar.ts
// import { IVehicle } from '../interfaces/vehicles';

// export default class FuturisticCar implements IVehicle {
//   drive(): void { console.log('Drive a futuristic car'); }

//   fly(): void { console.log('Flying a futuristic car'); }
// }