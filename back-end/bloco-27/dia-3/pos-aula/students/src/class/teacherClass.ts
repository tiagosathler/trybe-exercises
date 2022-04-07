import Employee from './employeeClass';
import Lesson from './lessonClass';
import { ITeacherClass } from '../interfaces';

export default class Teacher extends Employee implements ITeacherClass {
  _lesson: Lesson;
  
  constructor({
    employee,
    lesson,
  }: { employee: Employee, lesson: Lesson }) {
    const { name, birthday, salary, admissionDate, enrollment } = employee;
    const person = { name, birthday };
    const info = { salary, admissionDate, enrollment };
    super({ person, info });
    this._lesson = lesson;
  }

  get subject(): Lesson {
    return this._lesson;
  }

  set subject(lesson: Lesson) {
    this._lesson = lesson;
  }

  public getSubjectName(): string {
    return this._lesson.name;
  }
}