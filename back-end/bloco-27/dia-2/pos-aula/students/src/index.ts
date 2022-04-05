import Student from './class/studentClass';
import Person from './class/personClass';

const newPerson = new Person({ name: 'Tiago', birthday: new Date('1980/07/23') });
console.log(newPerson);

const studentOne = new Student({
  name: 'Tiago',
  birthday: new Date('1980/07/23'),
  enrollment: '000.98.159.88',
  examsGrade: [90, 85, 90, 100],
  worksGrade: [60, 74],
});

console.log(studentOne);
studentOne.examsGrades = [93, 87, 91, 99];
studentOne.workskGrades = [65, 76];

console.log(studentOne);
console.log('Soma de todas as notas: ', studentOne.sumGrades());
console.log('Média de todas as notas: ', studentOne.avergeGrades());
