// ./interfaces.ts
export interface IVehicle {
  name: string;
  brand: string;
}

export interface MotorizedVehicles extends IVehicle {
  startEngine(): void;
}

export interface IBicycleVehicle extends IVehicle {
  pedal(): void;
  ride(): void;
}
  
export interface ICarVehicle extends MotorizedVehicles {
  drive(): void;
}

export interface IMotorcycleVehicles extends MotorizedVehicles {
  ride(): void;
}
export interface IAirplanesVehicles extends MotorizedVehicles {
  fly(): void;
  
}

// ORIGINAL:
// export interface IVehicle {
//   drive(): void;
//   fly(): void;
// }
