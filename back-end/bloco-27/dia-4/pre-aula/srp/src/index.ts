// ./src/index.ts

type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

type Student = {
  name: string;
  disciplines: Discipline[];
};

/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines }: Student): Student => ({
  name,
  disciplines: disciplines.map(({ name: n, grade }) => {
    let letterGrade;
    switch (true) {
      case grade >= 0.9: { letterGrade = 'A'; break; }
      case grade >= 0.8: { letterGrade = 'B'; break; }
      case grade >= 0.7: { letterGrade = 'C'; break; }
      case grade >= 0.6: { letterGrade = 'D'; break; }
      default: { letterGrade = 'E'; }
    }
    return { name: n, grade, letterGrade };
  }) });

/* "Determinar" */
const approvedStudents = ({ disciplines }: Student): boolean =>
  disciplines.every(
    ({ grade }) => grade > 0.7,
  );

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }: Student): void => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students: Student[]): void {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

/*
  Não se esqueça que é necessário exportar ao final as funções para que você
  possa testa-las
*/
export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
};