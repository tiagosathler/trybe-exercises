const { getAnimalByName, getAnimalsByAge } = require('../script/getAnimal');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalByName('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByName('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalsByAge', () => {
  describe('Quando existe um animal com uma idade determinada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalsByAge(1).then(animal => {
        expect(animal[0]).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalsByAge(10).catch(error =>
        expect(error).toEqual('Nenhum animal encontrado!')
      );
    });
  });
});