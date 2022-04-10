export interface IPerson {
  id: number;
  name: string;
  showIdentification(): void;
}

export interface IDeamon {
  name: string;
  specialMove: string;
}

export interface IDbDeamon extends IDeamon {
  id: number;
}

export interface IDeamonModelClass {
  create(deamon: IDbDeamon): IDbDeamon;
  read(): IDbDeamon[];
  update(id: number, deamon: IDeamon): IDbDeamon;
  delete(id: number): boolean;
}