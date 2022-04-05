import Person from './personClass';
import { TExamsGrade, TWorksGrade } from '../types';
import { IStudent, IStudentClass, IPerson } from '../interfaces';

export default class Student extends Person implements IStudentClass {
  private _enrollment: string;

  private _examsGrade: TExamsGrade;

  private _worksGrade: TWorksGrade;

  constructor(
    person: IPerson,
    {
      enrollment, examsGrade, worksGrade,
    }: IStudent,
  ) {
    const { name, birthday } = person;
    super({ name, birthday });
    this.validateGrades(examsGrade);
    this.validateGrades(worksGrade);
    this.validateEnrollment(enrollment);      
  }
  
  private validateGrades(array: TExamsGrade | TWorksGrade) {
    array.forEach((grade) => {
      if (grade < 0 || grade > 100) {
        throw new Error(`Invalid grade ${grade}`);
      }
    });
    if (array.length === 4) {
      this._examsGrade = array;
    }
    if (array.length === 2) {
      this._worksGrade = array;
    }
  }

  private validateEnrollment(enrollment: string) {
    if (enrollment.length > 16 || !enrollment.length) {
      throw new Error(`Invalid enrollment ${enrollment}`);
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

  public averageGrades(): number {
    const average = this.sumGrades() / (this._examsGrade.length + this._worksGrade.length);
    return Math.round(average);
  }
}
