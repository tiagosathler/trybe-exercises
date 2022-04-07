import Teacher from './teacherClass';

export default abstract class Evaluation {
  protected _score: number;

  protected _teacher: Teacher;

  constructor({
    teacher,
    score,
  }: { teacher: Teacher, score: number }) {
    this._teacher = teacher;
    this.validateScore(score);
  }

  protected validateScore(score: number): void {
    if (score <= 0) {
      throw new Error('Nota inválida: deve ser maior que 0!');
    }
    this._score = score;
  }

  public get score(): number {
    return this._score;
  }

  public set score(score: number) {
    this.validateScore(score);
  }

  public get teacher(): Teacher {
    return this._teacher;
  }

  public set teacher(teacher: Teacher) {
    this._teacher = teacher;
  }  
}