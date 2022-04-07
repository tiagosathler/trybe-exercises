import Evaluation from './evaluationClass';
import Teacher from './teacherClass';

export default class Work extends Evaluation {
  readonly type: 'trabalho';

  constructor({
    teacher,
    score,
  }: { teacher: Teacher, score: number }) {
    super({
      teacher,
      score,
    });
    this.validateWork(score);
  }

  private validateWork(score: number): void {
    if (score > 50) {
      throw new Error('Nota de trabalho inválida: deve ser de 0 a 50');
    }
    this._score = score;
  }
}