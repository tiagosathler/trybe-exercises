import Student from './class/studentClass';
import Person from './class/personClass';
import Employee from './class/employeeClass';
// import Lesson from './class/lessonClass';
// import Teacher from './class/teacherClass';

const studentOne = new Student(
  { name: 'Tiago Heringer', birthday: new Date('1980/07/23') },
  {
    examsGrade: [90, 85, 90, 100],
    worksGrade: [60, 74],
  },
);
  
console.log(`${studentOne.name} has ${studentOne.getAge()} years old`);
console.log(`Instâncias de 'Person': ${Person.count}`);

console.log(studentOne);
studentOne.examsGrade = [93, 87, 91, 99];
studentOne.worksGrade = [65, 76];

console.log(studentOne);
console.log('Soma de todas as notas: ', studentOne.sumGrades());
console.log('Média de todas as notas: ', studentOne.averageGrades());

console.log('---------------------------');

const employee1 = new Employee(
  { name: 'Tiago Sathler', birthday: new Date('1980/07/23') },
  {
    salary: 8000,
    admissionDate: new Date('2021/07/23'),
  },
);

console.log(employee1);
console.log(
  'Name:', 
  employee1.name,
  '\nBirthday:',
  employee1.birthday,
  '\nAge:',
  employee1.getAge(),
  '\nSalary:',
  employee1.salary,
  '\nAdmission date:',
  employee1.admissionDate,
  '\nEnrollment:',
  employee1.enrollment,
  '\nNew enrollment:',
  employee1.generateEnrollment(),
);
console.log(`Instâncias de 'Person': ${Person.count}`);

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