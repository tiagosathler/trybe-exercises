import Teacher from './teacherClass';
import { IEvaluation } from '../interfaces';

import compareScore from '../utils';

export default class Evaluation {
  private _score: number;

  private _teacher: Teacher;

  private _type: 'prova' | 'trabalho';

  constructor({
    score,
    teacher,
    type,
  }: IEvaluation) {
    this.validateScore(score, type);
    this._teacher = teacher;
    this._type = type; 
  }

  private validateScore(score: number, type: 'prova' | 'trabalho') {
    switch (type) {
      case 'prova':
        this._score = compareScore(score, 25, type);
        break;
      case 'trabalho':
        this._score = compareScore(score, 50, type);
        break;
      default:
        throw new Error(`Invalid type '${type}'`);
    }
    this._score = score;
  }

  get score(): number {
    return this._score;
  }

  set score(score: number) {
    this.validateScore(score, this._type);
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(teacher: Teacher) {
    this._teacher = teacher;
  }

  get type(): 'prova' | 'trabalho' {
    return this._type;
  }

  set type(type: 'prova' | 'trabalho') {
    this.validateScore(this._score, type);
  }
}