# Bloco 10 - Dia 1 - Primeiros Passos no Jest

Nste dia fomos apresentados ao *framework* **Jest** de testes unitários para JavaScript, usado na criação de testes automatizados. O *Jest* foi desenvolvido pelo *Facebook* e sua documentação está disponível [aqui](https://jestjs.io/). Aprendemos como instalar o *Jest* através do *npm*, como escrever os testes, usar o *expect* e os diferentes *matchers* disponíveis na documentação. Finalmente, vimos o uso de *describe* para organização dos testes.

## Exercícios do dia

> *Os exercícios estão separados em pares de arquivos, um para as funções e outro para os respectivos testes.*

### Parte I

1. Refaça os exercícios 1 a 5 do conteúdo de *Testes unitários em JavaScript*, dessa vez utilizando **Jest**.

### Parte II

> No Bloco 4 foi feito o projeto [*Playground functions*](https://github.com/tiagosathler/trybe-exercises/tree/master/fundamentos/bloco-04-introdu%C3%A7%C3%A3o-%C3%A0-javascript-e-l%C3%B3gica-de-programa%C3%A7%C3%A3o/dia-5-projeto-playground-functions). Nos exercícios a seguir, você irá trabalhar com os testes para algumas funções que você criou! Aproveite para refatorá-las e usar todos os recursos que já aprendemos até aqui, como as *Higher Order Functions* e as *features* do Javascript ES6.

1. Para as funções encode e decode crie os seguintes testes:

   1.1. Teste se `encode` e `decode` são funções;

   1.2. Para a função encode teste se as vogais *a*, *e*, *i*, *o*, *u* são convertidas em *1*, *2*, *3*, *4* e *5*, respectivamente;

   1.3. Para a função decode teste se os números *1*, *2*, *3*, *4* e *5* são convertido nas vogais *a*, *e*, *i*, *o*, *u*, respectivamente;

   1.4. Teste se as demais letras/números não são convertidos para cada caso;

   1.5. Teste se a *string* que é retornada pelas funções têm o mesmo número de caracteres que a *string* passada como parâmetro.

2. A função `techList` recebe como parâmetros um *array* contendo uma lista de tecnologias e uma *string* com um nome. Para cada tecnologia no *array* a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
```
{
  tech: 'nomeTecnologia',
  name: name,
}
```
> Implemente a função `techList` a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto! É importante nunca alterar os testes ou as variáveis já escritas no código.
```
const techList = require('./techList.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
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
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

module.exports = techList;
```

3. A função `hydrate` recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:
```
// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'
```
> Implemente a função `hydrate` a partir dos testes abaixo. Experimente refatorar a função que você criou para o projeto Playground Function! É importante nunca alterar os testes ou as variáveis já escritas no código .
```
const hydrate = require('./hydrate.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
```

### Bônus

1. Neste exercício, você irá praticar o desenvolvimento orientado a testes (TDD) implementando:
  * A função;
  * Os testes para essa função;

> Considere os dados abaixo. Você deve criar uma função que receba dois parâmetros: o `id` do funcionário e a informação disponível sobre ele ( `firstName`, `lastName`, `specialities`). Você também deverá criar os testes para essa função. Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. Caso o `id` não conste no quadro de funcionários, sua função deve retornar o erro `"ID não identificada"`. Se a informação que se quer acessar não existir, a função deve retornar o erro `"Informação indisponível"`.
```
// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
};
```