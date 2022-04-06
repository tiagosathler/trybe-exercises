import Student from './class/studentClass';
import Person from './class/personClass';
import Employee from './class/employeeClass';
import Lesson from './class/lessonClass';
import Teacher from './class/teacherClass';

const studentOne = new Student(
  { name: 'Tiago', birthday: new Date('1980/07/23') },
  {
    enrollment: '000.98.159.88',
    examsGrade: [90, 85, 90, 100],
    worksGrade: [60, 74],
  },
);
  
console.log(`${studentOne.name} has ${studentOne.getAge()} years old`);
console.log(`Instâncias de 'Person': ${Person.count}`);

console.log(studentOne);
studentOne.examsGrades = [93, 87, 91, 99];
studentOne.workskGrades = [65, 76];

console.log(studentOne);
console.log('Soma de todas as notas: ', studentOne.sumGrades());
console.log('Média de todas as notas: ', studentOne.averageGrades());

// const employee1 = new Employee(
//   person1,
//   {
//     salary: 1000,
//     admissionDate: new Date('2020/07/23'),
//   },
// );

// console.log(employee1);

// const math = new Lesson('Matemática');
// const english = new Lesson('Inglês');

// const teacher1 = new Teacher(person1, employee1, math);
// console.log(teacher1);
// console.log(`Matéria lecionada por ${teacher1.name}: ${teacher1.getSubjectName()}`);

// teacher1.subject = english;
// console.log(teacher1);
// console.log(`Nova matéria lecionada por ${teacher1.name}: ${teacher1.subject.name}`);

// english.name = 'English';
// console.log(teacher1);
// console.log(`Nova matéria lecionada por ${teacher1.name}: ${teacher1.subject.name}`);