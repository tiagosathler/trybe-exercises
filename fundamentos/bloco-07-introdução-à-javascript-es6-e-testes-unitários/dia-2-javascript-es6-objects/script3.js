// EXERCÍCIOS DO DIA
// Bônus
//
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// EXERCÍCIO 1:
const countStudentsInSubject = (object, subject) => {
  let counter = 0;
  for (let lesson in object) {
    object[lesson].materia === subject ? counter += object[lesson].numeroEstudantes : null;
  }
  return counter;
}
console.log(countStudentsInSubject(allLessons, "Matemática"));
