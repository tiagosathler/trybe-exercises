const animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalObject = animals.find((animal) => animal.name === name);
      if (animalObject) {
        return resolve(animalObject);
      };
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalsByAge = animals.filter((animal) => animal.age === age);
      if (animalsByAge.length > 0) {
        return resolve(animalsByAge);
      };
      return reject('Nenhum animal encontrado!');
    }, 100);
  })
);

const getAnimalByName = (name) => {
  return findAnimalByName(name).then((result) => result);
};

const getAnimalsByAge = (age) => {
  return findAnimalsByAge(age).then((result) => result);
}

module.exports = { getAnimalByName, getAnimalsByAge };