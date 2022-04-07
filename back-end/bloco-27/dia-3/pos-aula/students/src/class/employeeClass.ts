import { v4 as uuid, validate as uuidValidate } from 'uuid';
import Person from './personClass';
import { IEmployee, IEmployeeClass } from '../interfaces';

export default class Employee extends Person implements IEmployeeClass {
  private _enrrolment: string;

  private _salary: number;

  private _admissionDate: Date;

  constructor(
    {
      person,
      info,
    }:
    {
      person: { name: string, birthday: Date },
      info: IEmployee,
    },
  ) {
    const { enrollment, salary, admissionDate } = info;
    super(person);
    this.validateSalary(salary);
    this.validateAdmissionDate(admissionDate);
    if (enrollment) {
      this.validateEnrollment(enrollment);
    } else {
      this.generateEnrollment();
    }
  }
  
  private validateEnrollment(enrollment: string) {
    if (!uuidValidate(enrollment)) {
      throw new Error(`Invalid enrollment ${enrollment}`);
    }
    this._enrrolment = enrollment;
  }

  generateEnrollment(): string {
    this._enrrolment = uuid();
    return this._enrrolment;
  }

  get enrollment(): string {
    return this._enrrolment;
  }

  set enrollment(enrollment: string) {
    this.validateEnrollment(enrollment);
  }

  get salary(): number {
    return this._salary;
  }

  set salary(salary: number) {
    this.validateSalary(salary);
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(admissionDate: Date) {
    this.validateAdmissionDate(admissionDate);
  }
   
  private validateSalary(salary: number) {
    if (salary < 0) {
      throw new Error(`Invalid salary ${salary}`);
    }
    this._salary = salary;
  }

  private validateAdmissionDate(admissionDate: Date) {
    if (admissionDate > new Date()) {
      throw new Error(`Invalid admission date ${admissionDate}`);
    }
    this._admissionDate = admissionDate;
  }
}