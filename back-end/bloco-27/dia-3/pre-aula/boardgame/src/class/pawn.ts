import { BoardHouse, boardRows } from '../types';
import isInList from '../utils';
import Piece from './piece';

export default class Pawn extends Piece {
  type: 'Peão';

  get availableMoves(): BoardHouse[] {
    const column = this.position[0];
    const row = this.position[1];
    const rowIndex = boardRows.indexOf(row);
    if (rowIndex === 7) {
      return [];
    }
    const nextHouse: BoardHouse = [column, boardRows[rowIndex + 1]];
    if (isInList(nextHouse, this.availableMoves)) {
      return [];
    }
    return [nextHouse];
  }
}
