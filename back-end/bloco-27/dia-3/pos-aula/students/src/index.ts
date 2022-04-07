import Student from './class/studentClass';
import Person from './class/personClass';
import Employee from './class/employeeClass';
import Lesson from './class/lessonClass';
import Teacher from './class/teacherClass';
import Exam from './class/examClass';
import Work from './class/workClass';
import EvaluationResult from './class/resultEvaluationClass';

const MY_BIRTHDAY = new Date('1980-07-23');
const LINE = '------------------------------------------------------';

const studentOne = new Student(
  { name: 'João da Silva', birthday: MY_BIRTHDAY },
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

const employee1 = new Employee({
  person: { name: 'Tiago Sathler', birthday: MY_BIRTHDAY },
  info: {
    salary: 4000,
    admissionDate: new Date('2021/07/23'),
  },
});
  
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

const mathTeacher = new Teacher({ employee: employee1, lesson: math });
console.log(mathTeacher);
console.log(`Matéria lecionada por ${mathTeacher.name}: ${mathTeacher.getSubjectName()}`);

const employee2 = new Employee({
  person:
    { name: 'Amélia Siqueira', birthday: new Date('1945-11-13') },
  info: {
    salary: 4000,
    admissionDate: new Date('1988/03/01'),
  },
});

const englishTeacher = new Teacher({ employee: employee2, lesson: english });

console.log(`Instâncias de 'Person': ${Person.count}`);

console.log(LINE);

const mathWork = new Work({ score: 50, teacher: mathTeacher });
const mathExam = new Exam({ score: 25, teacher: mathTeacher });

const englishWork = new Work({ score: 30, teacher: englishTeacher });
const englishExam = new Exam({ score: 20, teacher: englishTeacher });

const studentOneMathWork = new EvaluationResult({ score: 49, evaluation: mathWork });
const studentOneMathExam = new EvaluationResult({ score: 20, evaluation: mathExam });
const studentOneEnglishWork = new EvaluationResult({ score: 30, evaluation: englishWork });
const studentOneEnglishExam = new EvaluationResult({ score: 20, evaluation: englishExam });

studentOne.addEvaluation(studentOneMathWork);
studentOne.addEvaluation(studentOneMathExam);
studentOne.addEvaluation(studentOneEnglishWork);
studentOne.addEvaluation(studentOneEnglishExam);

console.log(studentOne);
console.log(studentOne.evaluations);
console.log('Soma das notas', studentOne.sumEvaulationGrades());
console.log('Média das notas', studentOne.averageEvaulationGrades());