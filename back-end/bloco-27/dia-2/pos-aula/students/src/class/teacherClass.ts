import Employee from './employeeClass';
import Lesson from './lessonClass';
import { IEmployee, IPerson, ITeacherClass } from '../interfaces';

export default class Teacher extends Employee implements ITeacherClass {
  _lesson: Lesson;
  
  constructor(
    person: IPerson,
    employee: IEmployee,
    lesson: Lesson,
  ) {
    super(person, employee);
    this._lesson = lesson;
  }

  get subject(): Lesson {
    return this._lesson;
  }

  set subject(lesson: Lesson) {
    this._lesson = lesson;
  }

  public getSubjectName(): string {
    return this._lesson.subject;
  }
}