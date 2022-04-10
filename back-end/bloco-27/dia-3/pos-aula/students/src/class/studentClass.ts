import { v4 as uuid, validate as uuidValidate } from 'uuid';
import Person from './personClass';
import { TExamsGrade, TWorksGrade } from '../types';
import { IStudent, IStudentClass, IPerson } from '../interfaces';
import EvaluationResult from './resultEvaluationClass';

export default class Student extends Person implements IStudentClass {
  private _examsGrade: TExamsGrade;

  private _worksGrade: TWorksGrade;

  private _evaluationResults: EvaluationResult[] = [];

  private _enrollment: string;

  constructor(
    person: IPerson,
    { enrollment, examsGrade, worksGrade }: IStudent,
  ) {
    super(person);
    this.validateGrades(examsGrade);
    this.validateGrades(worksGrade);
    if (enrollment) {
      this.validateEnrollment(enrollment);
    } else {
      this.generateEnrollment();
    }
  }

  public addEvaluation(evaluation: EvaluationResult) {
    this._evaluationResults.push(evaluation);
  }

  public get evaluations(): EvaluationResult[] {
    return this._evaluationResults;
  }
  
  private validateEnrollment(enrollment: string) {
    if (!uuidValidate(enrollment)) {
      throw new Error(`Invalid enrollment ${enrollment}`);
    }
    this._enrollment = enrollment;
  }
  
  generateEnrollment(): string {
    this._enrollment = uuid();
    return this._enrollment;
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

  get enrollment(): string {
    return this.enrollment;
  }

  set enrollment(enrollment: string) {
    this.validateEnrollment(enrollment);
  }

  get examsGrade(): TExamsGrade {
    return this._examsGrade;
  }

  set examsGrade(grades: TExamsGrade) {
    this.validateGrades(grades);
  }

  get worksGrade(): TWorksGrade {
    return this._worksGrade;
  }

  set worksGrade(grades: TWorksGrade) {
    this.validateGrades(grades);
  }

  public sumGrades(): number {
    return [...this._examsGrade, ...this._worksGrade]
      .reduce((acc, grade) => acc + grade, 0);
  }

  public averageGrades(): number {
    const average = this.sumGrades() / (this._examsGrade.length + this._worksGrade.length);
    return Number(average.toFixed(2));
  }

  public sumEvaulationGrades(): number {
    return this._evaluationResults.reduce((acc, evaluation) => acc + evaluation.score, 0);
  }

  public averageEvaulationGrades(): number {
    const average = this.sumEvaulationGrades() / this._evaluationResults.length;
    return Number(average.toFixed(2));
  }
}
