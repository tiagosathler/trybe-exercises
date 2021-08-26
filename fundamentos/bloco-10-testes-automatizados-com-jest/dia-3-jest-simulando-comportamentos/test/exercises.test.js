const exercises = require("../script/exercises");

describe("1. Testa 'randomNumber'", () => {
  exercises.randomNumber = jest.fn();
  exercises.randomNumber.mockReturnValue(10);
  exercises.randomNumber();
  it("se ela foi chamada", () => {
    expect(exercises.randomNumber).toHaveBeenCalled();
  })
  it("se retorna 10", () => {
    expect(exercises.randomNumber()).toEqual(10);
  });
  it("se foi chamada 2 vezes", () => {
    expect(exercises.randomNumber).toHaveBeenCalledTimes(2);
  })
});