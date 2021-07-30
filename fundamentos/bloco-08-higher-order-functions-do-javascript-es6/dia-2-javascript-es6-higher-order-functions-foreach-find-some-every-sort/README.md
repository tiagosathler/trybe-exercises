# Bloco 08 - Dia 2 - JavaScript ES6 - Higher Order Functions - *forEach*, *find*, *some*, *every* e *sort*

Neste dia aprendi usar algumas *HOF* específicas para objetos tipo *array* em JavaScript ES6. São funções nativas associadas ao qualquer *array* que otimizam e facilitam a construção do algoritmo, uma vez que não é necessário ficar preocupado criando estruturas para percorrer, testar e buscar informações no *array*, apenas ficar focado em o que quero fazer com a informação.

## Exercícios do dia

> Aqui foram feitos exercícios antes e depois da aula ao vivo, para melhor fixação do conteúdo. Estão, respectivamente separados nos arquivos: script-pre-aula.js e exercise1.js.

### Exercícios pré-aula ao vivo:

#### Exercícios para o `find`:

1. Utilize o `find` para retornar o primeiro número do *array* que é divisível por `3` e `5`, caso ele exista: `const numbers = [19, 21, 30, 3, 45, 22, 15];`.

2. Utilize o `find` para encontrar o primeiro nome com `5` letras, caso ele exista: const `names = ['João', 'Irene', 'Fernando', 'Maria'];`.

3. Utilize o `find` para encontrar a música com `id` igual a `31031685`, caso ela exista:
```
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
```