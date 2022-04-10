export type BoardColumn = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type BoardRow = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

const boardColumns: BoardColumn[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const boardRows: BoardRow[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

export type BoardHouse = [BoardColumn, BoardRow];

export { boardColumns, boardRows };
