# Bloco 05 - Dia 1 - JavaScript: DOM, Eventos e Web Storage
Objetivo deste dia é continuar a manipulação de elementos do DOM, desta vez selecionando elementos através das hierarquias criadas na árvore DOM (... vô, pai, filho, neto...), como criar ou remover elementos na estrutura HTML a partir do JS e por fim acrescentar conteúdo ou valores aos parâmetros dos elementos.

## Exercícios do dia

### Exercícios pré-aula ao vivo

#### Parte I

> Adicione o código abaixo a uma página *HTML* e adicione uma tag *script* . Você deverá fazer tudo a seguir usando somente *JavaScript*.

> Os exercícios desta seção estão no arquivo **`exercicios-pre-aula.html`**!

```
<div id="paiDoPai">
  <div id="pai">
    <div id="primeiroFilho"></div>
    <div id="elementoOndeVoceEsta">
      <div id="primeiroFilhoDoFilho"></div>
      <div id="segundoEUltimoFilhoDoFilho"></div>
    </div>
    Atenção!
    <div id="terceiroFilho"></div>
    <div id="quartoEUltimoFilho"></div>
  </div>
</div>
```
1. Acesse o elemento `elementoOndeVoceEsta` .
2. Acesse pai a partir de `elementoOndeVoceEsta` e adicione uma `color` a ele.
3. Acesse o `primeiroFilhoDoFilho` e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
4. Acesse o `primeiroFilho` a partir de `pai` .
5. Agora acesse o `primeiroFilho` a partir de `elementoOndeVoceEsta` .
6. Agora acesse o texto `Atenção!` a partir de `elementoOndeVoceEsta` .
7. Agora acesse o `terceiroFilho` a partir de `elementoOndeVoceEsta` .
8. Agora acesse o `terceiroFilho a partir de `pai` .

#### Parte II

1. Crie um irmão para `elementoOndeVoceEsta`.
2. Crie um filho para `elementoOndeVoceEsta`.
3. Crie um filho para `primeiroFilhoDoFilho` .
4. A partir desse filho criado, acesse `terceiroFilho`.

#### Parte III

* Remova todos os elementos filhos de `paiDoPai` exceto `pai`, `elementoOndeVoceEsta` e `primeiroFilhoDoFilho`.

### Exercícios pós-aula ao vivo

> **Aprofunde seu conhecimento!**

> Exercícios desta seção estão no arquivo **`exercicios-pos-aula.html`**!

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript , o qual deve ser inserido entre as tags `<script>` e `</script>` .
Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.2</title>
    <style>
      div {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }

      .main-content .left-content {
        background-color: green;
        width: 60%;
        margin-left: 0;
        margin-right: auto;
      }

      .main-content .left-content .small-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
      }

      .main-content .right-content {
        background-color: blue;
        width: 60%;
        margin-left: auto;
        margin-right: 0;
      }

      .main-content .description {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <script>
      // COLOQUE SEU CÓDIGO AQUI
    </script>
  </body>
</html>
```

#### Parte I

1. Adicione a tag `h1` com o texto `Exercício 5.2 - JavaScript DOM` como filho da tag `body`;
2. Adicione a tag `div` com a classe `main-content` como filho da tag `body`;
3. Adicione a tag `div` com a classe `center-content` como filho da tag `div` criada no passo 2;
4. Adicione a tag `p` como filho do `div` criado no passo 3 e coloque algum texto;
5. Adicione a tag `div` com a classe `left-content` como filho da tag `div` criada no passo 2;
6. Adicione a tag `div` com a classe `right-content` como filho da tag `div` criada no passo 2;
7. Adicione uma imagem com `src` configurado para o valor `https://picsum.photos/200` e `classe small-image`. Esse elemento deve ser filho do `div` criado no passo 5;
8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do `div` criado no passo 6;
9. Adicione 3 tags `h3`, todas sendo filhas do `div` criado no passo 2.

#### Parte II

1. Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
2. Adicione a classe `title` na tag `h1` criada;
3. Adicione a classe `description` nas 3 tags `h3` criadas;
4. Remova o `div` criado no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;
5. Centralize o `div` criado no passo 6 (aquele que possui a classe `right-content` ). Dica: para centralizar, basta configurar o `margin-right: auto` do `div` ;
6. Troque a cor de fundo do elemento pai da `div` criada no passo 3 (aquela que possui a classe `center-content` ) para a cor verde;
7. Remova os dois últimos elementos ( `nove` e `dez` ) da lista criada no passo 8.


