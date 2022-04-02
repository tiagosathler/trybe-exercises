export default class Client {
  private _name: string;

  constructor(
    name: string,
   
  ) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    if (name.length > 3) {
      throw new Error('Name must be at least 3 characters long');
    }
    this._name = name;
  }
}
