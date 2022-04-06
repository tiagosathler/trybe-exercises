import isInList from '../utils';
import Piece from './piece';
import Pawn from './pawn';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import Root from './root';

export default class Board {
  pieces: Piece[] = [];

  constructor() {
    const pawn = new Pawn(['C', '2'], this);
    const root = new Root(['F', '1'], this);
    this.addPiece(pawn);
    this.addPiece(root);
  }

  private addPiece(piece: Piece) {
    if (isInList(piece.position, this.occupiedHouses)) { return; }
    this.pieces.push(piece);
  }

  get occupiedHouses() {
    return this.pieces.map((piece) => piece.position);
  }
}
