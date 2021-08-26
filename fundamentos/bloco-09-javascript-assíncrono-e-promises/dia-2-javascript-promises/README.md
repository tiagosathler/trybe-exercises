# Bloco 09 - Dia 2 - JavaScript Promises

As **Promises**, embora não sejam muito intuitivas a princípio, foram criadas para facilitar a leitura de códigos assíncronos e tornar sua lógica mais previsível e legível. Elas são uma das formas mais populares de se escrever esse tipo de código em JavaScript hoje em dia. São também a principal forma de você se comunicar com APIs. A função do tipo *promise* é assíncrona, sendo literalmente uma promessa de entregar algum resultado. Saber como usá-la e tratar seu retorno é objetivo deste dia.

## Exercícios do dia

### Exercício pré-aula ao vivo

> Este exercício é uma sequencia de testes observar como uma função assíncrona se comporta. É necessário tratá-la como uma *promise* encadeando-a ao `then / catch` ou invocando-a através de `async / await`. Invocar uma função assíncrona sem estes cuidados o resultado esperado é apenas uma promessa não concluída, ou seja, o código síncrono não espera a conclusão e segue sem tratar o resultado.

> [exercises-pre-aula.js]()

### Exercícios pós-aula ao vivo

> Este exercício é dinâmico sendo visualizado através do carregamento da página e do seu inspetor/console [**jokes.html**](). O script desta página é o [**apiScript.js**](). O objetivo são dois: (1) usar a *API* de piadas [**icanhazdadjoke**](https://icanhazdadjoke.com/api) para buscar uma piada aleatória e jogá-la na página através da manipulação do *DOM* (2) enquanto que o código síncrono é executado fazendo chamadas para funções assíncronas.

**1.** Como primeiro exercício, vamos usar a função `fetch`, para criar um site simples com um gerador de piadas ruins! Vamos usar a API do site [icanhazdadjoke.com](https://icanhazdadjoke.com/). Ele esclarece como fazer as requisições ao serviço de piadas. Usemos como base o script abaixo:

```
// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();
```
> A partir da resposta `data` faça a piada aparecer no DOM da sua página!

**2.** Agora vamos fazer uma **Promise**:

  * Primeiramente, instancie uma *Promise*

  * Dentro dela, você deve produzir um *array* com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.

  * Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um `then`, com um `console.log('Promise resolvida')` e um `catch`, com um `console.log('Promise rejeitada')` à *Promise*, só para que o código funcione e possamos ver o resultado.

  * Tente usar *Higher Order Functions*! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

**3.** Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

**4.** Quando a *Promise* for rejeitada, imprima, via `console.log`, a frase `"É mais de oito mil! Essa promise deve estar quebrada!"`

**5.** Quando a *Promise* for bem-sucedida, encadeie nela uma segunda *Promise* que some os elementos do array.