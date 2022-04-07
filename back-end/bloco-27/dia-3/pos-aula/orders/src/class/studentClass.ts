import { v4 as uuid, validate as uuidValidate } from 'uuid';
import Person from './personClass';
import { IPerson, IEnrollable } from '../interfaces';

export default class Student extends Person implements IEnrollable {
  private _enrollment: string;

  constructor(
    person: IPerson,
  ) {
    super(person);
    this.generateEnrollment();
  }
    
  generateEnrollment(): string {
    this._enrollment = uuid();
    return this._enrollment;
  }

  private static validateEnrollment(enrollment: string): void {
    if (!uuidValidate(enrollment)) {
      throw new Error('A matrícula não é válida.');
    }
  }
  
  get enrollment(): string {
    return this.enrollment;
  }

  set enrollment(value: string) {
    Student.validateEnrollment(value);
    this.generateEnrollment();
  }
}
