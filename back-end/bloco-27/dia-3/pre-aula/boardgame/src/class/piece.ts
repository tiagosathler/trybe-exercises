import { BoardHouse } from '../types';
import isInList from '../utils';

export default abstract class Piece {
  protected _position: BoardHouse;

  abstract type: string;

  abstract get availableMoves(): BoardHouse[];

  constructor(position: BoardHouse) {
    this._position = position;
  }

  get position() { return this._position; }

  move(newPosition: BoardHouse): boolean {
    console.log(
      `MOVENDO ${this.type} DA CASA ${this._position} PARA A CASA ${newPosition}`,
    );
    if (!isInList(newPosition, this.availableMoves)) return false;
    this._position = newPosition;
    return true;
  }
}
