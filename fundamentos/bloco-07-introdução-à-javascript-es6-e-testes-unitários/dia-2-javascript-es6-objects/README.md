# Bloco 07 - Dia 2 - JavaScript ES6 - objects 
Neste dia estudei alguns métodos para interagir com __objetos__ em *JavaSript ES6*, passo essencial para compreensão de como esta linguagem lida com objetos. Foram apresentados os métodos de manipulação de objetos: `Object.keys`, `Object.entries`, `Object.assign` e `Object.values`

## Exercícios do dia
> Os exercícios estão nos arquivos [script1.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-07-introdu%C3%A7%C3%A3o-%C3%A0-javascript-es6-e-testes-unit%C3%A1rios/dia-2-javascript-es6-objects/script1.js) (Parte I), [script2.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-07-introdu%C3%A7%C3%A3o-%C3%A0-javascript-es6-e-testes-unit%C3%A1rios/dia-2-javascript-es6-objects/script2.js) (Parte II) e [script3.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-07-introdu%C3%A7%C3%A3o-%C3%A0-javascript-es6-e-testes-unit%C3%A1rios/dia-2-javascript-es6-objects/script3.js) (Bônus).

### Parte I:
> Dado um objeto `order` contendo as informações de um pedido pizza (descrito no arquivo [script1.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-07-introdu%C3%A7%C3%A3o-%C3%A0-javascript-es6-e-testes-unit%C3%A1rios/dia-2-javascript-es6-objects/script1.js)) acesse e modifique algumas informações:

1. Complete a função `customerInfo()` para que seu retorno seja similar a *"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".*

2. Complete a função `orderModifier()` para que seu retorno seja similar a *"Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."*

### Parte II:
> Dados 3 objetos `lesson1`, `lesson2` e `lesson3`, contendo informações sobre "materia", "numeroEstudantes", "professor" e "turno" (conforme no arquivo [script2.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-07-introdu%C3%A7%C3%A3o-%C3%A0-javascript-es6-e-testes-unit%C3%A1rios/dia-2-javascript-es6-objects/script2.js)):

1. Crie uma função para adicionar o *turno* da *manhã* na `lesson2`. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

2. Crie uma função para listar as *keys* de um objeto. Essa função deve receber um objeto como parâmetro.

3. Crie uma função para mostrar o tamanho de um objeto.

4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

5. Crie um objeto de nome `allLessons`, que deve agrupar todas as aulas através do `Object.assign`. Cada chave desse novo objeto será uma aula, sendo essas chaves: `lesson1`, `lesson2` e `lesson3`. A saída deverá ser outro objeto contendo três objetos.

6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
```
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
```

8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
```
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
```

### Bônus:
> Aproveitando os resultados da Parte II, use (ou construa novamente) o objeto criado `allLessons` e faça os seguintes exercícios ([script3.js](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-07-introdu%C3%A7%C3%A3o-%C3%A0-javascript-es6-e-testes-unit%C3%A1rios/dia-2-javascript-es6-objects/script3.js)):

1. Crie uma função para contar quantos estudantes assistiram às aulas de *"Matemática"*. 

2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes: 
```
console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
```