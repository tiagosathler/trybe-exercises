import isInList from '../utils';
import Piece from './piece';
import Pawn from './pawn';
import Root from './root';

export default class Board {
  pieces: Piece[] = [];

  constructor() {
    this.addPiece(new Pawn(['C', '2']));
    this.addPiece(new Root(['F', '1']));
  }

  private addPiece(piece: Piece) {
    if (isInList(piece.position, this.occupiedHouses)) { return; }
    this.pieces.push(piece);
  }

  get occupiedHouses() {
    return this.pieces.map((piece) => piece.position);
  }
}
