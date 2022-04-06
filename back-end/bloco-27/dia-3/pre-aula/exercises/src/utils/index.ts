import { IPerson } from '../interfaces';

export default function showDetails(person: IPerson):void {
  person.showIdentification();
}