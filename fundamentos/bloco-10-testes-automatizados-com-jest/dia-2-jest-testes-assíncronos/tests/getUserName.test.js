const getUserName = require("../script/getUserName");

describe("Teste de um banco de dados assíncrono", () => {
  it("se o o usuário é encontrado;", () => {
    getUserName(1).then((userName) => {
      expect(userName).toBe('Mark');
    })
  });
  it("se o usuário não é encontrado;", () => {
    getUserName(0).catch((error) => {
      expect(error.message).toBe('User with 0 not found.');
    })
  });
});