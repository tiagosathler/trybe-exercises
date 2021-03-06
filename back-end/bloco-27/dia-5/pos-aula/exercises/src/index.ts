// ./index.ts
import CepService from './class/CepService';
import FooCepAPI from './class/FooCepAPI';
import MockCepAPI from './class/MockCepAPI';

async function main() {
  const fooCepAPI = new FooCepAPI();
  const cepSvc = new CepService(fooCepAPI);

  console.log(
    'get address by cep',
    '->',
    await cepSvc.cepAPI.getAddressByCEP('xx.xxx-xx', 10),
  );
    
  console.log(
    'get cep by address', 
    '->',
    await cepSvc.cepAPI.getCepByAddress('street foo, between bar and baz', 10),
  );
}

main();

async function mockMain() {
  const mockCepAPI = new MockCepAPI();
  const cepSvc = new CepService(mockCepAPI);

  console.log(
    'get address by cep',
    '->',
    await cepSvc.cepAPI.getAddressByCEP('xx.xxx-xx', 10),
  );
    
  console.log(
    'get cep by address', 
    '->',
    await cepSvc.cepAPI.getCepByAddress('street foo, between bar and baz', 10),
  );
}

mockMain();

// ORIGINAL:
// ./index.ts
// import CepService from './CepService';

// async function main() {
//   const cepSvc = new CepService();

//   console.log('get address by cep', '->', await cepSvc.addressByCep('xx.xxx-xx', 10));
//   console.log('get cep by address', '->', await cepSvc.cepByAdress('street foo, between bar and baz', 10));
// }

// main();