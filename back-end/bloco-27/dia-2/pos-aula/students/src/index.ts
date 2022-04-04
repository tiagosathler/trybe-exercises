import Student from './class/studentClass';

const studentOne = new Student('Jan', '12345');

studentOne.examsGrades = [15, 20, 9, 16];
studentOne.workskGrades = [10, 13];

console.log(studentOne);
console.log('Soma de todas as notas: ', studentOne.sumGrades());
console.log('Média de todas as notas: ', studentOne.avergeGrades());