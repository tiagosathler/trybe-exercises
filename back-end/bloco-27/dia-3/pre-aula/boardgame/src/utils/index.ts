import { BoardHouse } from '../types';

export default function isInList(element: BoardHouse, list: BoardHouse[]): boolean {
  const { result }: { result: boolean } = list.reduce((acc: { result: boolean }, e) => {
    if (element[0] === e[0] && element[1] === e[1]) {
      acc.result = true;
    }
    return acc;
  }, { result: false });
  return result;
}
