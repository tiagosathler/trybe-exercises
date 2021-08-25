# Bloco 10 - Dia 2 - Jest - Testes Assíncronos

Neste dia aprendemos a fazer testes unitários através do Jest em *callbacks* e em funções assíncronas, sejam elas do tipo *promises* ou *async / await*, como inserir *assertions* para garantir o teste e não passar em falsos positivos. Aprendemos a montar os blocos de teste através do *describe / it* e as configurações de *Setup* e *Teardown* dos testes.

## Exercícios do dia

> Os exercícios estão em arquivos do tipo *test.js* correspondente a cada função que se deseja testar.

1. Escreva um teste que verifique a chamada do *callback* de uma função `uppercase`, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os **falso-positivos** em testes assíncronos.

2. Utilizando a sintaxe de *Promise*, faça um teste que verifique o resultado da função `getUserName` para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
> Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável `users`, para saber quais IDs existem.

3. Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de *async/await*.
> Dica: Utilize o *try/catch* para o caso de erro.

4. A função `getRepos` busca no *GitHub* de um usuário seus repositórios, de acordo com a URL, e retorna uma lista como resultado. Dada a URL `'https://api.github.com/orgs/tryber/repos'`, faça um teste que verifique que os repositórios `'sd-01-week4-5-project-todo-list'` e `'sd-01-week4-5-project-meme-generator'` se encontram nessa lista.

5. Para este exercício, no teste `afterBefore`, tente adivinhar a saída dos `console.log` dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do `beforeEach` e do `afterEach`.

6. Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.
```
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);
```
6.1. Adicione a função `getAnimalByName` para buscar pelo nome do animal, ou seja criar uma função que deverá passar no teste de `getAnimal.test`.
> Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

6.2. Adicione a função `getAnimalsByAge` para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.
