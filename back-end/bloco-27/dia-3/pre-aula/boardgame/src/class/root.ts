/* eslint import/no-cycle: [2, { maxDepth: 2 }] */
import Piece from './piece';
import Board from './board';
import { BoardHouse, boardRows, boardColumns } from '../types';
import isInList from '../utils';

export default class Root extends Piece {
  type = 'Torre';

  _board: Board;

  constructor(position: BoardHouse, board: Board) {
    super(position);
    this._board = board;
  }

  get occupiedHouses() {
    return this._board.pieces.map((piece) => piece.position);
  }

  /* eslint complexity: ["error", 15] */
  /* eslint max-lines-per-function: ["error", 50] */
  get availableMoves() {
    const column = this.position[0];
    const columnIndex = boardColumns.indexOf(column);

    const row = this.position[1];
    const rowIndex = boardRows.indexOf(row);

    const availableHouses: BoardHouse[] = [];

    // Adiciona todas as casas abaixo
    for (let i = rowIndex - 1; i >= 0; i -= 1) {
      const house: BoardHouse = [boardColumns[columnIndex], boardRows[i]];
      if (isInList(house, this._board.occupiedHouses)) break;
      availableHouses.push(house);
    }

    // Adiciona todas as casas acima
    for (let i = rowIndex + 1; i < 8; i += 1) {
      const house: BoardHouse = [boardColumns[columnIndex], boardRows[i]];
      if (isInList(house, this._board.occupiedHouses)) break;
      if (!isInList(house, availableHouses)) {
        availableHouses.push(house);
      }
    }

    // Adiciona todas as casas na direita
    for (let i = columnIndex + 1; i < 8; i += 1) {
      const house: BoardHouse = [boardColumns[i], boardRows[rowIndex]];
      if (isInList(house, this._board.occupiedHouses)) break;
      if (!isInList(house, availableHouses)) {
        availableHouses.push(house);
      }
    }

    // Adiciona todas as casas na esquerda
    for (let i = columnIndex - 1; i >= 0; i -= 1) {
      const house: BoardHouse = [boardColumns[i], boardRows[rowIndex]];
      if (isInList(house, this._board.occupiedHouses)) break;
      if (!isInList(house, availableHouses)) {
        availableHouses.push(house);
      }
    }

    return availableHouses;
  }
}
