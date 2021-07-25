// EXERCÍCIOS DO DIA
// PARTE II
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

// EXERCÍCIO 1:
const addTurnToLesson = (object, key, value) => object[key] = value;
addTurnToLesson(lesson2, 'turno', 'noite')
console.table(lesson2);

