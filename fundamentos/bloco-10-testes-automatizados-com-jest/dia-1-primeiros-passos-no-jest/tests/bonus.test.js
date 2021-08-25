const { searchEmployee } = require("../scripts/bonus");

describe("Testando a função 'searchEmployee'...", () => {
  it("Se nenhum parâmetro for passsado a função retorne 'undefined'", () => {
    let expected = undefined;
    expect(searchEmployee()).toEqual(expected);
  });
  it ("Se o 'id' passado não consta em funcionários retorne 'Error'", () => {
    expected = new Error('ID não identificada');
    expect(searchEmployee('9999-9')).toEqual(expected);
  });
  it ("Sem 'detail' retorne o objeto para o 'id' encontrado", () => {
    expected = {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    };
    expect(searchEmployee('5569-4')).toEqual(expected);
  });
  it("Retorne 'Error' se 'detail' requisitado não existe no 'id' encontrado ", () => {
    expected = new Error('Informação indisponível');
    expect(searchEmployee('4456-4', 'address')).toEqual(expected);
  });
  it("Retorne o 'detail' desejado para o 'id' encontrado", () => {
    expected = ['Context API', 'RTL', 'Bootstrap'];
    expect(searchEmployee('4456-4', 'specialities')).toEqual(expected);
  });
  
})