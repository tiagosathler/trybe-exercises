import Evaluation from './evaluationClass';
import { IEvaluationResult } from '../interfaces';

export default class EvaluationResult {
  private _evaluation: Evaluation;

  private _score: number;

  constructor(
    {
      evaluation,
      score,
    }: IEvaluationResult,
  ) {
    this._evaluation = evaluation;
    this.validateScore(score);
  }

  private validateScore(score: number) {
    if (score < 0 || score > this._evaluation.score) {
      throw new Error(`
      Invalid score '${score}' in evaluation type '${this._evaluation.type}'
      on subject '${this._evaluation.teacher.subject.name}'`);
    }
    this._score = score;
  }

  get score(): number {
    return this._score;
  }

  set score(score: number) {
    this.validateScore(score);
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(evaluation: Evaluation) {
    this._evaluation = evaluation;
  }
}