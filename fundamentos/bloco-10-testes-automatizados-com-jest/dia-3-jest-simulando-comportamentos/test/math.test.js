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
  it("se foi chamada duas vezes", () => {
    expect(math.multiplicar).toHaveBeenCalledTimes(2);
  });
});

describe("3. Testando 'somar'...", () => {
  math.somar = jest.fn().mockResolvedValue(5);

  it("se resolve", async () => {
    await expect(math.somar(1, 3)).resolves.toBe(5);
  });
  it("se os argumentos foram passados corretamente", () => {
    expect(math.somar).toHaveBeenCalledWith(1, 3);
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
  });
});

describe("5. Testando 'subtrair'", () => {
  const mockSubtrair = jest.spyOn(math, "subtrair");

  beforeEach(() => {
    
  });
  
  afterEach(() => {
    mockSubtrair.mockRestore();
  });

  it("...spy mock com returnvalue", () => {    
    mockSubtrair.mockReturnValue(20);
    expect(mockSubtrair(10, 5)).toBe(20);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(10, 5);
  });
  
  it("...spy mock depois de restore com implementation", () => {
    mockSubtrair.mockImplementation((a, b) => a * b);
    expect(mockSubtrair(4, 2)).toBe(8);    
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(4, 2);
  });

  it("...testa função original", () => {
    expect(math.subtrair(5,2)).toBe(3);    
  });
});