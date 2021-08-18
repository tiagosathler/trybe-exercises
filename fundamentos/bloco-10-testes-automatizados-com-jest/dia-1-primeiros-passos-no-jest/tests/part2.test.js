const {
  decode,
  encode,
  techList,
  hydrate,  
} = require("../scripts/part2");

describe("1 - Encode/Decode", () => {
  it("1.1 - Teste se encode e decode são funções", () => {
    const expected = 'function';
    expect(expected).toBe(typeof encode);
    expect(expected).toBe(typeof decode);
  });
  it("1.2 - Para a função 'encode' teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente", () => {
    const expected = '12345';
    expect(expected).toBe(encode('aeiou'));
  });
  it("1.3 - Para a função 'decode' teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente", () => {
    const expected = 'aeiou';
    expect(expected).toBe(decode('12345'));
  });
  it("1.4 - Teste se as demais letras/números não são convertidos para cada caso;", () => {
    let expected = '67890';
    expect(expected).toBe(decode('67890'));
    expected = 'bcdfghjklmnpqrstvwxz';
    expect(expected).toBe(encode('bcdfghjklmnpqrstvwxz'));
  });
  it("1.5 - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.", () => {
    let string = 'hi there!';
    let expected = 'h3 th2r2!';
    expect(expected.length).toBe(encode(string).length);
    string = 'h3 th2r2!';
    expected = 'hi there!';
    expect(expected.length).toBe(decode(string).length);
  });
});