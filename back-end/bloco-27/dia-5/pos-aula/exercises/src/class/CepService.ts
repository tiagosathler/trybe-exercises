// ./CepService.ts
import { ICepServiceClass, IFooCepAPIClass } from '../interfaces/cepInterfaces';

class CepService implements ICepServiceClass {
  public readonly cepAPI: IFooCepAPIClass;

  constructor(cepAPI: IFooCepAPIClass) {
    this.cepAPI = cepAPI;
  } 
}

export default CepService;

// ORIGINAL:
// ./CepService.ts
// import FooCepAPI from './FooCepAPI';

// class CepService {
//   private readonly cepApi: FooCepAPI;

//   constructor() {
//     this.cepApi = new FooCepAPI();
//   }

//   addressByCep(cep: string, num: number) {
//     return this.cepApi.getAddressByCEP(cep, num);
//   }

//   cepByAdress(address: string, num: number) {
//     return this.cepApi.getCepByAddress(address, num);
//   }
// }

// export default CepService;