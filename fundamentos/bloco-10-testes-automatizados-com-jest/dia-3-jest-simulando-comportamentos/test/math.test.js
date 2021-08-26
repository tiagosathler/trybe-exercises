const math = require("../script/math");

describe("1. Testando 'subtrair'...", () => {
  it("se foi chamada", () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
  });
});

describe("2. Testando 'multiplicar'...", () => {
  math.multiplicar = jest.fn().mockReturnValue(10);
  it("se foi chamada", () => {
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
  });
  it("se retorna um valor padrão", () => {
    expect(math.multiplicar()).toBe(10);
  });
});

describe("3. Testando 'somar'...", () => {
  math.somar = jest.fn().mockImplementation((a, b) => a + b);
  it("se foi chamada", () => {
    math.somar(3, 4);
    expect(math.somar).toHaveBeenCalled();
  });
  it("se retorna a soma", () => {
    expect(math.somar(5, 6)).toBe(11);
  });
  it("se os argumentos foram passados corretamente", () => {
    expect(math.somar).toHaveBeenCalledWith(5, 6);
  });
});

describe("4. Testando 'dividir'", () => {
  math.dividir = jest
    .fn()
    .mockReturnValue(15)     // chamada default
    .mockReturnValueOnce(2)  // primeira chamada
    .mockReturnValueOnce(5); // segunda chamada

  it('se foi chamada', () => {
    math.dividir();
    expect(math.dividir).toHaveBeenCalled();
  });
  it("se na segunda chamada o retorno é 2", () => {
    expect(math.dividir()).toBe(5);
  });
  it("se nenhum parâmetro foi passada à função", () => {
    expect(math.dividir).toHaveBeenCalledWith();
  });
  it("se foi chamada 2 vezes", () => {
    expect(math.dividir).toHaveBeenCalledTimes(2);
  });
  it("se na terceira chamada o retorno é o padrão", () => {
    expect(math.dividir()).toBe(15);
  })
});

describe("5. Testando 'subtrair'", () => {
  const mockSubtrair = jest.spyOn(math, "subtrair");

  beforeEach(() => {
    mockSubtrair.mockImplementation((a, b) => a * b);
  })
  
  afterEach(() => {
    mockSubtrair.mockRestore();
  })

  it("...spy mock com returnvalue", () => {    
    mockSubtrair.mockReturnValue(20);
    expect(mockSubtrair(10, 5)).toBe(20);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(10, 5);
  })
  
  it("...spy mock depois de restore com implementation", () => {
    expect(mockSubtrair(4, 2)).toBe(8);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(4, 2);
  })

  

  // it("se retorna '8'", () => {
  //   expect(mockSubtrair(2, 4)).toBe(8);
  // });
  // it("se foi chamada anteriormente", () => {
  //   expect(mockSubtrair).toHaveBeenCalledTimes(1);
  // });
  // it("se os argumentos foram passados corretamente", () => {
  //   expect(mockSubtrair).toHaveBeenCalledWith(2, 4);
  // });

  // mockSubtrair.mockRestore();
  // mockSubtrair.mockReturnValue(8);

  // it("se retorna '20'", () => {
  //   expect(mockSubtrair(10, 2)).toBe(8);
  // });
  // it("se foi chamada anteriormente", () => {
  //   expect(mockSubtrair).toHaveBeenCalledTimes(1);
  // });
  // it("se os argumentos foram passados corretamente", () => {
  //   expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
  // });
});