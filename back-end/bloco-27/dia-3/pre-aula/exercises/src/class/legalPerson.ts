import { IPerson } from '../interfaces';

export default class PhysicalPerson implements IPerson {
  private static lastId = 0;

  private _name: string;

  private _id: number;

  private _cnpj: number;

  constructor(name: string, cpf: number) {
    this._name = name;
    this._cnpj = cpf;
    this._id = PhysicalPerson.newId();
  }

  get name(): string {
    return this._name;
  }

  get id(): number {
    return this._id;
  }

  get cnpj(): number {
    return this._cnpj;
  }

  private static newId(): number {
    PhysicalPerson.lastId += 1;
    return PhysicalPerson.lastId;
  }

  showIdentification(): void {
    console.log(`${this._name} com o id ${this._id} tem o CNPJ ${this._cnpj}`);
  }
}