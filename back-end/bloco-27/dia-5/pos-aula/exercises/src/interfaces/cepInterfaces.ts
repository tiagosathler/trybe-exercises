export interface ICepServiceClass {
  cepAPI: IFooCepAPIClass;
}

export interface IFooCepAPIClass {
  getAddressByCEP(cep: string, num: number): Promise<string>;
  getCepByAddress(address: string, num: number): Promise<string>;
}