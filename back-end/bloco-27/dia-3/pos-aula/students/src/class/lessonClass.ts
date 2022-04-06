export default class Lesson {
  private _name: string;

  constructor(name: string) {
    this.validateLessonName(name);
  }

  private validateLessonName(name: string) {
    if (name.length < 3) {
      throw new Error('Lesson name must be at least 3 characters long');
    }
    this._name = name;    
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this.validateLessonName(name);
  }
}