const getUserName = require("../script/getUserName");

describe("Teste de um banco de dados assíncrono, usando 'Promises'", () => {
  it("se o o usuário é encontrado;", () => {
    expect.assertions(1);
    return getUserName(1).then((userName) => {
      expect(userName).toBe('Mark');
    })
  });
  it("se o usuário não é encontrado;", () => {
    expect.assertions(1);
    return getUserName(0).catch((error) => {
      expect(error.message).toBe('User with 0 not found.');
    })
  });
});

describe("Teste de um banco de dados assíncrono, usando 'async/await'", () => {
  it("se o o usuário é encontrado;", async () => {    
    expect.assertions(1);
    const received = await getUserName(1);
    const expected = 'Mark';
    expect(received).toBe(expected);
  });
  it("se o usuário não é encontrado;", async () => {
    expect.assertions(1);
    const expected = 'User with 3 not found.';
    try {
      await getUserName(3);
    } catch(error) {
      expect(error.message).toBe(expected);
    }    
  });
});