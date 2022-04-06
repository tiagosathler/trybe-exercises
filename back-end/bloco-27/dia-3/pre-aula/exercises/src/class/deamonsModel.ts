import { IDeamon, IDbDeamon, IDeamonModelClass } from '../interfaces';

export default class DeamonsModel implements IDeamonModelClass {
  private _deamons: IDbDeamon[] = [];

  create(deamon: IDeamon): IDbDeamon {
    const id = this._deamons.length + 1;
    this._deamons.push({ id, ...deamon });
    return this._deamons.reverse()[0];
  }

  read(): IDbDeamon[] {
    return this._deamons;
  }

  update(id: number, deamon: IDeamon): IDbDeamon {
    const index = this._deamons.findIndex((d) => d.id === id);
    this._deamons[index] = { id, ...deamon };
    return this._deamons[index];
  }

  delete(id: number): boolean {
    const index = this._deamons.findIndex((d) => d.id === id);
    if (index === -1) {
      this._deamons.splice(index, 1);
      return true;
    }
    return false;
  }
}