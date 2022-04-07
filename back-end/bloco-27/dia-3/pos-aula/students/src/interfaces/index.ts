import { TExamsGrade, TWorksGrade } from '../types';
import Teacher from '../class/teacherClass';
import Evaluation from '../class/evaluationClass';

export interface IPerson {
  name?: string;
  birthday?: Date;  
}

export interface IEnrollable {
  enrollment: string;
  generateEnrollment: () => string;
}

export interface IEnrollableClass {
  enrollment: string;
  generateEnrollment: () => string;
}

export interface IStudent {
  enrollment?: string;
  examsGrade: TExamsGrade;
  worksGrade: TWorksGrade;  
}

export interface IStudentClass extends IPerson, IEnrollable {
  examsGrade: TExamsGrade;
  worksGrade: TWorksGrade;
  sumGrades: () => number;
  averageGrades: () => number;
}

export interface IEmployee {
  enrollment?: string;
  salary: number;
  admissionDate: Date;
}

export interface IEmployeeClass extends IPerson, IEnrollable {
  salary: number;
  admissionDate: Date;
}
export interface ITeacherClass {
  getSubjectName: () => string;
}

export interface IEvaluation {
  score: number;
  teacher: Teacher;
  type: 'prova' | 'trabalho';
}

export interface IEvaluationResult {
  score: number;
  evaluation: Evaluation;
}