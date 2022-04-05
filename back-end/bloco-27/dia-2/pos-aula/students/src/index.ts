import Student from './class/studentClass';
import Person from './class/personClass';
import Employee from './class/employeeClass';

const person1 = new Person({ name: 'Tiago', birthday: new Date('1980/07/23') });
console.log(person1);

const studentOne = new Student(
  person1,
  {
    enrollment: '000.98.159.88',
    examsGrade: [90, 85, 90, 100],
    worksGrade: [60, 74],
  },
);

console.log(studentOne);
studentOne.examsGrades = [93, 87, 91, 99];
studentOne.workskGrades = [65, 76];

console.log(studentOne);
console.log('Soma de todas as notas: ', studentOne.sumGrades());
console.log('Média de todas as notas: ', studentOne.averageGrades());

const employee1 = new Employee(
  person1,
  {
    salary: 1000,
    admissionDate: new Date('2020/07/23'),
  },
);

console.log(employee1);