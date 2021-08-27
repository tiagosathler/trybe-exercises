const exercises = require("../script/exercises");

describe("Testa 'randomNumber'", () => {
  exercises.randomNumber = jest.fn();

  describe("1. Mock com retorno fixo em 10:", () => {
     it("...se ela foi chamada, se retorna 10 e se foi chamada 2 vezes", () => {
      exercises.randomNumber.mockReturnValue(10);
      exercises.randomNumber();
      expect(exercises.randomNumber).toHaveBeenCalled();
      expect(exercises.randomNumber()).toEqual(10);
      expect(exercises.randomNumber).toHaveBeenCalledTimes(2);
    })    
  });

  describe("2. Mock com implementation com 2 parâmetros:", () => {
    it("...se retorna a implementação e se foi chamada 1 vez e com os parâmetros", () => {
      exercises.randomNumber.mockReset();
      exercises.randomNumber.mockImplementationOnce((n, d) => n / d);
      expect(exercises.randomNumber(12, 3)).toEqual(4);
      expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
      expect(exercises.randomNumber).toHaveBeenCalledWith(12, 3);
    });
  });

  describe("3. Mock com outra implementation de 3 parâmetros:", () => {
    it("...se retorna a implementação e se foi chamada 1 vez e com os parâmetros", () => {
      exercises.randomNumber.mockReset();
      exercises.randomNumber.mockImplementationOnce((a, b, c)  => a * b * c);
      expect(exercises.randomNumber(2, 3, 5)).toEqual(30);
      expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
      expect(exercises.randomNumber).toHaveBeenCalledWith(2, 3, 5);
    });
  });
});

describe("4. Testa as funções de strings mockadas ('upperCase', 'firstLetter' e 'concat'): ", () => {
  const firstLetterSpy = jest.spyOn(exercises, 'firstLetter');
  const upperCaseSpy = jest.spyOn(exercises, 'upperCase');
  const concatSpy = jest.spyOn(exercises, "concat");

  describe("- Mock de 'upperCase':", () => {
     it("... se retorna uma implementação e se foi chamada", () => {
      upperCaseSpy.mockImplementation((str) => str.toLowerCase());
      expect(upperCaseSpy('TIAGO')).toMatch('tiago');      
      expect(exercises.upperCase).toHaveBeenCalledTimes(1);
    })    
  });

  describe("- Mock de 'firstLetter':", () => {
    it("... se retorna uma implementação e se foi chamada", () => {
      firstLetterSpy.mockImplementation((str) => str.charAt(str.length -1));
      expect(firstLetterSpy('tiago')).toEqual('o');
      expect(exercises.firstLetter).toHaveBeenCalledTimes(1);
    })
  })

  describe("- Mock de 'concat':", () => {
    it("... se retorna uma implementação e se foi chamada", () => {
      concatSpy.mockImplementation((str1, str2, str3) => str1 + str2 + str3);
      expect(concatSpy('t', 'h', 's')).toEqual('ths');
      expect(exercises.concat).toHaveBeenCalledTimes(1);
    })
  })  
});

describe("5. Testa as funções de strings originais ('upperCase', 'firstLetter' e 'concat')", () => {  
  describe("- Implementação original de 'upperCase'",() => {
    it("... se retorna o resultado real de 'upperCase'",() => {
      exercises.upperCase.mockRestore();
      expect(exercises.upperCase('tiago')).toEqual('TIAGO');
    });
  });

  describe("- Implementação original de 'firstLetter",() => {
    it("... se retorna o resultado real de 'firstLetter",() => {
    exercises.firstLetter.mockRestore();
    expect(exercises.firstLetter('Tiago')).toEqual('T');
    });
  });

  describe("- Implementação original de 'concat'",() => {
    it("... se retorna o resultado real de 'concat'",() => {
    exercises.concat.mockRestore();
    expect(exercises.concat('Tiago', 'Sathler')).toEqual('TiagoSathler');
    });
  });
});

describe("6. Mock de uma função assíncrona em 'getDog' ('fetch')", () => {
  exercises.getDog = jest.fn();
  exercises.getDog
    .mockResolvedValue("request sucess")
    .mockRejectedValue("request failed");

  
  describe("- Testando um mock resolve 'success'", () => {
    it("... se resolve com a mensagem correta",() => {      
      expect(exercises.getDog()).resolves.toEqual("request success");
      expect(exercises.getDog).toHaveBeenCalled();
    });
  })

  describe("- Testando um mock reject 'failed'", () => {
    it("... se rejeita com a mensagem correta",() => {
      expect(exercises.getDog()).rejects.toEqual("request failed");
      expect(exercises.getDog).toHaveBeenCalledTimes(2);
    });
  });
});