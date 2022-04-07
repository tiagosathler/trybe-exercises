import Work from './workClass';
import Exam from './examClass';

export default class EvaluationResult {
  private _evaluation: Work | Exam;

  private _score: number;

  constructor(
    {
      evaluation,
      score,
    }: {
      evaluation: Work | Exam,
      score: number,
    },
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

  get evaluation(): Work | Exam {
    return this._evaluation;
  }

  set evaluation(evaluation: Work | Exam) {
    this._evaluation = evaluation;
  }
}