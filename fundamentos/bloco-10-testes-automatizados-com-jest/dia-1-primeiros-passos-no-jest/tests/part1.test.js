const {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
  obj1,
  obj2,
  obj3,
} = require("../scripts/part1");

// Exercício 1:
describe("1 - 'sum(a, b)' retorna a soma do parâmetro 'a' com o 'b'", () => {
  it("Teste se o retorno de 'sum(4, 5)' é '9'", () => {
    expect(sum(4, 5)).toBe(9);
  });
  it("Teste se o retorno de 'sum(0, 0)' é '0'", () => {
    expect(sum(0, 0)).toBe(0);
  });
  it("Teste se a função 'sum' lança um erro quando os parâmetros são '4' e '5' (string 5)", () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });
  it("Teste se a mensagem de erro é 'parameters must be numbers' quando realizar a chamada sum(4, '5')", () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError(new Error("parameters must be numbers"));
  });
});

// Exercício 2:
describe("2 - 'myRemove(arr, item)' recebe um array 'arr' e retorna uma cópia desse array sem o elemento 'item' caso ele exista no array", () => {
  it("Verifique se a chamada 'myRemove([1, 2, 3, 4], 3)' retorna o array esperado", () => {
    const expected = [1, 2, 4];
    expect(expected).toEqual(myRemove([1, 2, 3, 4], 3));
  });
  it("Verifique se a chamada 'myRemove([1, 2, 3, 4], 3)' não retorna o array [1, 2, 3, 4]", () => {
    const expected = [1, 2, 3, 4];
    expect(expected).not.toEqual(myRemove([1, 2, 3, 4], 3));
  });
  it("Verifique se o array passado por parâmetro não sofreu alterações", () => {
    const array = [1, 2, 3, 4];
    const arrayCopied = array.map((x) => x);
    myRemove(array, 3);
    expect(array).toEqual(arrayCopied);
  });
  it("Verifique se a chamada 'myRemove([1, 2, 3, 4], 5)' retorna o array esperado", () => {
    const array = [1, 2, 3, 4];     
    expect(array).toEqual(myRemove(array, 5));
  });
});

// Exercício 3:
describe("3 - 'myRemoveWithoutCopy(arr, item)' recebe um array 'arr' e retorna o próprio array sem o elemento 'item' caso ele exista no array", () => {
  it("Verifique se a chamada 'myRemoveWithoutCopy([1, 2, 3, 4], 3)' retorna o array esperado", () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 3);
    const expected = [1, 2, 4];
    expect(expected).toEqual(array);
  });
  it("Verifique se a chamada 'myRemoveWithoutCopy([1, 2, 3, 4], 3)' não retorna o array '[1, 2, 3, 4]'", () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 3);
    const expected = [1, 2, 3, 4];
    expect(expected).not.toEqual(array);
  });
  it("Faça uma chamada para a função 'myRemoveWithoutCopy' e verifique se o array passado por parâmetro sofreu alterações", () => {
    const array = [1, 2, 3, 4];
    const arrayCopied = array.map((x) => x);
    myRemoveWithoutCopy(array, 3);
    expect(arrayCopied).not.toEqual(array);
  });
  it("Verifique se a chamada 'myRemoveWithoutCopy([1, 2, 3, 4], 5)' retorna o array esperado", () => {
    const array = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    expect(expected).toEqual(myRemoveWithoutCopy(array, 5));
  });
});

// Exercício 4:
describe("4 - myFizzBuzz(num)' recebe um número 'num' e retorna 'fizzbuzz' se o número for divisível por 3 e 5, retorna 'fizz' se for divisível apenas por 3, retorna 'buzz' se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna 'false' caso num não seja um número",
  () => {
    it("Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado", () => {
      const expected = 'fizzbuzz';
      expect(expected).toBe(myFizzBuzz(15));
    });
    it("Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado", () => {
      const expected = 'fizz';
      expect(expected).toBe(myFizzBuzz(9));
    });
    it("Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado", () => {
      const expected = 'buzz';
      expect(expected).toBe(myFizzBuzz(20));
    });
    it("Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado", () => {
      const expected = 2;
      expect(expected).toBe(myFizzBuzz(2));
    });
    it("Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado", () => {
      const expected = false;
      expect(expected).toBe(myFizzBuzz('a'));
    });
});

// Exercício 5:
describe("5 - Dados três objetos conhecidos: 'obj1', 'obj2' e 'obj3'. Teste se eles são ou não iguais entre si", () => {
  it ("'obj1' igual a 'obj2'?", () => {
    expect(obj1).toEqual(obj2);
  });
  it ("'obj1' diferente de 'obj3'?", () => {
    expect(obj1).not.toEqual(obj3);
  });
  it ("'obj2' diferente de 'obj3'?", () => {
    expect(obj2).not.toEqual(obj3);
  });
});