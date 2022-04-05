import Person from './personClass';
import { TExamsGrade, TWorksGrade } from '../types';
import { IStudent } from '../interfaces';

export default class Student extends Person {
  private _enrollment: string;

  private _examsGrade: TExamsGrade;

  private _worksGrade: TWorksGrade;

  constructor(
    {
      name, birthday, enrollment, examsGrade, worksGrade,
    }: IStudent,
  ) {
    super({ name, birthday });
    this.validateGrades(examsGrade);
    this.validateGrades(worksGrade);
    this.validateEnrollment(enrollment);      
  }

  validateGrades(array: TExamsGrade | TWorksGrade) {
    array.forEach((grade) => {
      if (grade < 0 || grade > 100) {
        throw new Error('Invalid grade');
      }
    });
    if (array.length === 4) {
      this._examsGrade = array;
    }
    if (array.length === 2) {
      this._worksGrade = array;
    }
  }

  validateEnrollment(enrollment: string) {
    if (enrollment.length > 16 || !enrollment.length) {
      throw new Error('Invalid enrollment');
    }
    this._enrollment = enrollment;
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(enrollment: string) {
    this.validateEnrollment(enrollment);
  }

  public get examsGrades(): TExamsGrade {
    return this._examsGrade;
  }

  public set examsGrades(grades: TExamsGrade) {
    this.validateGrades(grades);
  }

  public get workskGrades(): TWorksGrade {
    return this._worksGrade;
  }

  public set workskGrades(grades: TWorksGrade) {
    this.validateGrades(grades);
  }

  public sumGrades(): number {
    return [...this._examsGrade, ...this._worksGrade]
      .reduce((acc, grade) => acc + grade, 0);
  }

  public avergeGrades(): number {
    const average = this.sumGrades() / (this._examsGrade.length + this._worksGrade.length);
    return Math.round(average);
  }
}
