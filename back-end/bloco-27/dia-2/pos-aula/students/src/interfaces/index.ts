import { TExamsGrade, TWorksGrade } from '../types';

export interface IPerson {
  name?: string;
  birthday?: Date;
}

export interface IStudent extends IPerson {
  enrollment: string;
  examsGrade: TExamsGrade;
  worksGrade: TWorksGrade;
}

export interface IEmployee extends IPerson {
  registration?: number;
  salary: number;
  admissionDate: Date;
}

export interface IEmployeeClass {
  generateRegistration: () => number;
}

export interface IStudentClass {
  sumGrades: () => number;
  averageGrades: () => number;
}