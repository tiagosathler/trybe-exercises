import Airplane from './class/Airplane';
import Bicycle from './class/Bicycle';
import Car from './class/Car';
import FuturisticCar from './class/FuturisticCar';
import Motorcycle from './class/Motorcycle';

async function main() {
  const caloi = new Bicycle('Aspen Way', 'Caloi');
  const golf = new Car('Golf', 'VW');
  const xre300 = new Motorcycle('XRE300', 'Honda');
  const airplane = new Airplane('747', 'Boeing');
  const delorean = new FuturisticCar('DeLorean', 'Time Machine');

  caloi.pedal();
  caloi.ride();

  golf.startEngine();
  golf.drive();

  xre300.startEngine();
  xre300.ride();

  airplane.startEngine();
  airplane.fly();

  delorean.startEngine();
  delorean.fly();
  delorean.drive();
}

main();

// async function mockMain() {
//   const mockCepAPI = new MockCepAPI();
//   const cepSvc = new CepService(mockCepAPI);

//   console.log(
//     'get address by cep',
//     '->',
//     await cepSvc.cepAPI.getAddressByCEP('xx.xxx-xx', 10),
//   );
    
//   console.log(
//     'get cep by address', 
//     '->',
//     await cepSvc.cepAPI.getCepByAddress('street foo, between bar and baz', 10),
//   );
// }

// mockMain();

// ORIGINAL:
// ./index.ts
// import CepService from './CepService';

// async function main() {
//   const cepSvc = new CepService();

//   console.log('get address by cep', '->', await cepSvc.addressByCep('xx.xxx-xx', 10));
//   console.log('get cep by address', '->', await cepSvc.cepByAdress('street foo, between bar and baz', 10));
// }

// main();