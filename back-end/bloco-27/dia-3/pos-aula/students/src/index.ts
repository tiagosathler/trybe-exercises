import Student from './class/studentClass';
import Person from './class/personClass';
import Employee from './class/employeeClass';
import Lesson from './class/lessonClass';
import Teacher from './class/teacherClass';
import Evaluation from './class/evaluationClass';
import EvaluationResult from './class/resultEvaluationClass';

const MY_BIRTHDAY = new Date('1980-07-23');
const LINE = '------------------------------------------------------';

const studentOne = new Student(
  { name: 'Tiago Heringer', birthday: MY_BIRTHDAY },
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

console.log(LINE);

const employee1 = new Employee(
  { name: 'Tiago Sathler', birthday: MY_BIRTHDAY },
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

console.log(LINE);

const math = new Lesson('Matemática');
const english = new Lesson('Inglês');

const teacher1 = new Teacher(
  { name: 'Tiago Siqueira', birthday: MY_BIRTHDAY },
  { salary: 3500, admissionDate: new Date('2020/08/31') },
  math,
);
console.log(teacher1);
console.log(`Matéria lecionada por ${teacher1.name}: ${teacher1.getSubjectName()}`);

// teacher1.subject = english;
// console.log(teacher1);
// console.log(`Nova matéria lecionada por ${teacher1.name}: ${teacher1.subject.name}`);

// english.name = 'English';
// console.log(teacher1);
// console.log(`Nova matéria lecionada por ${teacher1.name}: ${teacher1.subject.name}`);
console.log(`Instâncias de 'Person': ${Person.count}`);

console.log(LINE);

const mathWork = new Evaluation({ score: 50, teacher: teacher1, type: 'trabalho' });
const mathExam = new Evaluation({ score: 25, teacher: teacher1, type: 'prova' });

const studentOneMathWork = new EvaluationResult({ score: 49, evaluation: mathWork });
const studentOneMathExam = new EvaluationResult({ score: 20, evaluation: mathExam });

studentOne.addEvaluation(studentOneMathWork);
studentOne.addEvaluation(studentOneMathExam);
console.log(studentOne);
console.log('Soma das notas', studentOne.sumEvaulationGrades());
console.log('Média das notas', studentOne.averageEvaulationGrades());