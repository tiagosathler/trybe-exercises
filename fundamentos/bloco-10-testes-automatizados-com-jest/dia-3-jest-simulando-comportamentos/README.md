# Bloco 10 - Dia 3 - Jest - Simulando comportamentos

Nste dia aprendemos a fazer *mock* de funções, especialmente quando queremos testar ou simular um comportamento com resultados controlados ou diferentes daqueles esperados. Isto é especialmente últil naquelas funções cujas respostas não podem ser controladas ou quando acessam recursos externos (API). Basicamente usamos `jest.fn()`, `jest.mock()` e `jest.spy()`.

## Exercícios do dia

### Exercícios pré-aula ao vivo

#### Parte I

> Mock de uma função API. Usando a função `fetchURL` do arquivo `api.js` retorna um array de 200 objetos. Testar esta função com mocks.
> Função [api.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-10-testes-automatizados-com-jest/dia-3-jest-simulando-comportamentos/script/api.js) / Teste: [api.test.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-10-testes-automatizados-com-jest/dia-3-jest-simulando-comportamentos/test/api.test.js)

```
function fetchURL() {
  return fetch('https://ghibliapi.herokuapp.com/species').then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}
module.exports = { fetchURL };
```

#### Parte II

> Utilize as funções do arquivo 'math.js' para realizar os exercícios:
> Funções: [math.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-10-testes-automatizados-com-jest/dia-3-jest-simulando-comportamentos/script/math.js) / Testes [math.test.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-10-testes-automatizados-com-jest/dia-3-jest-simulando-comportamentos/test/math.test.js)

```
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };
```

1. Faça o *mock* da funcão __subtrair__ e teste sua chamada.

2. Faça o *mock* da função __multiplicar__ e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.

3. Faça o *mock* da função __somar__ e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

4. Faça o *mock* da função __dividir__ e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

5. Faça o *mock* da função __subtrair__ de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.

### Exercícios pós-aula ao vivo

> Funções: [exercises.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-10-testes-automatizados-com-jest/dia-3-jest-simulando-comportamentos/script/exercises.js) / Testes: [exercises.test.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-10-testes-automatizados-com-jest/dia-3-jest-simulando-comportamentos/test/exercises.test.js)

1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

3. Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

4. Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

5. Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

6. Crie uma função que faça requisição para a api [dog pictures](https://dog.ceo/dog-api/). *Mocke* a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

#### Bônus

1. O código abaixo utiliza uma API de piadas e implementa o `fetchJoke`, que é um gerador de piadas ruins . As piadas são geradas aleatoriamente através do endpoint armazenado em `API_URL`. Faça um teste que verifique a chamada dessa *API* para um resultado específico. Para isso, faça um mock do `fetch` , que faz a chamada à *API*, utilizando os seguintes dados:

```
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};
```