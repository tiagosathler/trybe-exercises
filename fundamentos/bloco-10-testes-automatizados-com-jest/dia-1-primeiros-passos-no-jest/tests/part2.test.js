const {
  decode,
  encode,
  techList,
  hydrate,  
} = require("../scripts/part2");

describe("1 - Encode/Decode", () => {
  it("1.1 - Teste se encode e decode são funções", () => {
    const expected = 'function';
    expect(typeof encode).toBe(expected);
    expect(typeof decode).toBe(expected);
  });
  it("1.2 - Para a função 'encode' teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente", () => {
    const expected = '12345';
    expect(encode('aeiou')).toBe(expected);
  });
  it("1.3 - Para a função 'decode' teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente", () => {
    const expected = 'aeiou';
    expect(decode('12345')).toBe(expected);
  });
  it("1.4 - Teste se as demais letras/números não são convertidos para cada caso;", () => {
    let expected = '67890';
    expect(decode('67890')).toBe(expected);
    expected = 'bcdfghjklmnpqrstvwxz';
    expect(encode('bcdfghjklmnpqrstvwxz')).toBe(expected);
  });
  it("1.5 - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.", () => {
    let string = 'hi there!';
    let expected = 'h3 th2r2!';
    expect(encode(string).length).toBe(expected.length);
    string = 'h3 th2r2!';
    expected = 'hi there!';
    expect(decode(string).length).toBe(expected.length);
  });
});

describe('2 - Testa a função techList', () => {
  it('2.1 - Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('2.2 - Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('2.3 - Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('2.4 - Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('3 - Testa a função hydrate', () => {
  it('3.1 - Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('3.2 - Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('3.3 - Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

module.exports = techList;