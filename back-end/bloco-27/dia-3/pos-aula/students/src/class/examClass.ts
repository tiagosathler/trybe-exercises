import Evaluation from './evaluationClass';
import Teacher from './teacherClass';

export default class Exam extends Evaluation {
  readonly type: 'prova';

  constructor({
    teacher,
    score,
  }: { teacher: Teacher, score: number }) {
    super({
      teacher,
      score,
    });
    this.validateExam(score);
  }

  private validateExam(score: number): void {
    if (score > 25) {
      throw new Error('Nota de prova inválida: deve ser de 0 a 25');
    }
    this._score = score;
  }
}