import { TExamsGrade, TWorksGrade } from '../types';

export interface IPerson {
  name: string;
  birthday: Date;
}

export interface IStudent extends IPerson {
  enrollment: string;
  examsGrade: TExamsGrade;
  worksGrade: TWorksGrade;
}
