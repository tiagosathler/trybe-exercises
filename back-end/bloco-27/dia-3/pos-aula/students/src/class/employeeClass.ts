import Person from './personClass';
import { IEmployee, IEmployeeClass, IPerson } from '../interfaces';

export default class Employee extends Person implements IEmployeeClass {
  private _registration: number;

  private _salary: number;

  private _admissionDate: Date;

  constructor(
    person: IPerson,
    {
      salary,
      admissionDate,
    }: IEmployee,
  ) {
    super(person);
    this.generateRegistration();
    this.validateSalary(salary);
    this.validateAdmissionDate(admissionDate);  
  }

  get registration(): number {
    return this._registration;
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
   
  public generateRegistration(): number {
    if (this._registration) {
      return this._registration;
    }
    this._registration = Math.floor(Math.random() * 100000);
    return this._registration;
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