export default class Lesson {
  _subject: string;

  constructor(name: string) {
    this.validateLessonName(name);
  }

  private validateLessonName(name: string) {
    if (name.length < 3) {
      throw new Error('Lesson name must be at least 3 characters long');
    }
    this._subject = name;    
  }

  get subject(): string {
    return this._subject;
  }

  set subject(name: string) {
    this.validateLessonName(name);
  }
}