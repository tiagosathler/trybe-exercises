import { TExamsGrade, TWorskGrade } from '../types/types';

export default class Student {
  private _name: string;

  private _enrollment: string;

  private _examsGrades: TExamsGrade;

  private _workskGrades: TWorskGrade;

  constructor(
    name: string,
    enrollment: string,
    examsGrades: TExamsGrade = [0, 0, 0, 0],
    worksGrades: TWorskGrade = [0, 0],
  ) {
    this._name = name;
    this._enrollment = enrollment;
    this._examsGrades = examsGrades;
    this._workskGrades = worksGrades;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    if (name.length > 3) {
      throw new Error('Name must be at least 3 characters long');
    }
    this._name = name;
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(enrollment: string) {
    this._enrollment = enrollment;
  }

  public get examsGrades(): TExamsGrade {
    return this._examsGrades;
  }

  public set examsGrades(grades: TExamsGrade) {
    this._examsGrades = grades;
  }

  public get workskGrades(): TWorskGrade {
    return this._workskGrades;
  }

  public set workskGrades(grades: TWorskGrade) {
    this._workskGrades = grades;
  }

  public sumGrades(): number {
    return [...this._examsGrades, ...this._workskGrades]
      .reduce((acc, grade) => acc + grade, 0);
  }

  public avergeGrades(): number {
    const average = this.sumGrades() / (this._examsGrades.length + this._workskGrades.length);
    return Math.round(average);
  }
}
