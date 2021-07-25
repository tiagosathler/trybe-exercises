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

// EXERCÍCIO 2:
const listKeysInObject = object => Object.keys(object);
console.log(listKeysInObject(lesson2));

// EXERCÍCIO 3:
const showsLengthOfObject = object => Object.keys(object).length;
console.log(showsLengthOfObject(lesson3));

// EXERCÍCIO 4:
const listValuesOfObject = object => Object.values(object);
console.log(listValuesOfObject(lesson1));

// EXERCÍCIO 5:
// solução a:
const allLessons1 = (object1, object2, object3) => {
  const returnObject = { lesson1: {}, lesson2: {}, lesson3: {} };
  Object.assign(returnObject.lesson1, object1);
  Object.assign(returnObject.lesson2, object2);
  Object.assign(returnObject.lesson3, object3);
  return returnObject;
}
console.log(allLessons1(lesson1, lesson2, lesson3));

// solução b:
const allLessons2 = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons2);

