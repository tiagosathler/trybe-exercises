# Bloco 05 - Dia 1 - JavaScript: DOM, Eventos e Web Storage
O objetivo deste dia é aprender a manipular **DOM** (*Document Object Model*), a estrutura que faz a ponte entre o *HTML* e o *JavaScript* e que permite interção entre os dois. Os exerícios permitem recuperar os dados do *HTML* através do *JavaScript*. Também aplicou-se nestes exercícios alguns eventos relacionados a *botões* do conteúdo *HTML*.

## Exercícios do dia
É hora de aplicar seus conhecimentos em manipular os elementos do HTML!

1. A seguir, você verá um trecho de código `HTML` e `CSS`.
2. Crie um arquivo `HTML` dentro do diretório `dia-5-javascript-dom-eventos-e-web-storage_1` e copie o código a seguir.
3. Leia as instruções que estão dentro de um comentário na tag `<script>`.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.1</title>
    
    <style>
      main, section {
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
        margin: 0 auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <header> 
      <h1 class="title">Exercício 5.1 - JavaEscripito </h1>
    </header>    
    <main class="main-content">
      <section class="center-content">
        <p>Texto padrão do nosso site</p>
        <p>-----</p>
        <p>Trybe</p>
      </section>
    </main>
    <script>
        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 	Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim 	realizando o exercício)
	Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
	Crie uma função que mude a cor do quadrado vermelho para branco.
	Crie uma função que corrija o texto da tag <h1>.
	Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
	Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
    </script>
  </body>
</html>
```

> **OBS**: os exercícios foram ligeiramente alterados pois criei uma nova `section` contendo um `h2` e um lista ordenada `ol` com `button` de **Faça** e **Desfaça** para cada exercício. O objetivo é dar mais calareza na interatividade do site.

