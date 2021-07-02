# Bloco 03 - Dia 3 - HTML & CSS - Seletores e posicionamento

Neste terceiro dia de estudos avancei mais um pouco em **CSS** utlizando seletores de posicionamento. Aprendi um pouco sobre *Box Model* - Modelo de caixas no CSS, *posicionamento de elementos*, *agrupamento de seletores e pseudoclasses* e *combinações e classes descendentes*.

Os exercícios podem ser vistos a partir dos arquivos HTML deste repositório.

## Os requisitos dos exercícios de hoje são:

### 1. Exercícios do momento pré-aula ao vivo:

#### Parte I: Caixas
> Para fixar:
> `index1.html`:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício de Fixação: box model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="caixa width-and-height" style="background: #036b52">A</div>
  <div class="caixa width-and-height padding" style="background: #41197f;">B</div>
  <div class="caixa width-and-height padding margin" style="background: #444955">C</div>
  <div class="caixa width-and-height padding margin border" style="background: #3898EC">D</div>
</body>
</html>
```

> `style2.css`:
```
.caixa {
  color: white;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  vertical-align: top;
}

.width-and-height {
  height: 50px;
  width: 50px;
}

/* insira na classe abaixo um padding de 20px para aplicá-lo aos itens B, C e D */
.padding {

}

/* insira na classe abaixo uma margem de 30px para aplicá-la aos itens C e D */
.margin {

}

/* insira na classe abaixo uma borda com valor '5px solid black' para aplicá-la ao item D */
.border {
  
}
```

#### Parte II - Posicionamento de elementos:

> Para fixar:
> `index2.html`:

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Posicionamento de elementos</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>Exercícios de fixação 3.3</h1>
    <img src="https://bit.ly/39HLUyi" alt="jumpMario" class="super-mario" />
    <img src="https://bit.ly/3arGfMc" alt="goomba" class="goomba" />
    <img src="https://bit.ly/2MV2bY0" alt="bowser" class="bowser" />
    <p class="speach">
      Goomba, do something!
    </p>
    <img src="https://bit.ly/3tmxgED" alt="baloon" class="baloon" />
  </body>
</html>
```
> `style2.css`

```
.super-mario {
  width: 200px;
}

.goomba {
  width: 100px;
}

.baloon {

}

.speach {
  font-size: 25px;
}

.bowser {
  width: 200px;
}
```
 *Personagens pertencentes à Nintendo©*
1. Posicione o Mário acima do Goomba.
2. Posicione a tag p para que fique dentro do balão de fala.
3. Posicione o balão para que se torne uma fala de Bowser.

#### Parte III - Agrupamento de seletores e pseudoclasses:

> Para fixar:
> `index3.html`:
```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Agrupando Seletores</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Lista dos Melhores Sites que já vi</h1>
    <p>Top 3 dos melhores sites que existem na web</p>
    <p>Principais motivos para eu gostar deles</p>
  </body>
</html>
```
1. Adicione uma lista ordenada dos 3 melhores sites que você conhece.
2. Crie um arquivo `style3.css` no diretŕio `estilos`.
3. Nesse arquivo `.css`, adicione os estilos para que:
   * O texto das tags `h1` e `p` estejam centralizados.
   * A cor de fundo da sua lista mude quando o cursor estiver sobre o item.
   * A fonte do item mude quando ele for clicado.
4. Adicione uma lista não ordenada com, pelo menos, 3 características que você gosta.
5. No `style3.css`, adicione a propriedade `list-style: none` para ambas as listas.
> **Dica** : Nesse [link](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes), você irá encontrar a documentação sobre todas as pseudoclasses do CSS.

#### Parte IV - Combinações e classes descendentes:

> Para fixar:
> `index4.html`
```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>#GoTrybe</title>
  </head>
  <body>
    <h1><em>Combinações e Classes Descendentes</em></h1>
    <br />
    <h3>Top 5 frases memoráveis:</h3>
    <ol>
      <li><em>Com grandes poderes vêm grandes responsabilidades.</em> - Tio Ben (Homem Aranha)</li>
      <li><em>Houston, temos um problema.</em> - Jack Swigert</li>
      <li><em>Sempre parece impossível até que esteja feito.</em> - Nelson Mandela</li>
      <li><em>Parte da jornada é o fim.</em> - Tony Stark (Homem de Ferro)</li>
      <li><em>Às vezes, o melhor que podemos fazer é começar novamente.</em> - Steve Rogers (Capitão América)</li>
    </ol>
    <h3>As maiores linguagens de programação:</h3>
    <ul>
      <li>Python</li>
      <li>Java</li>
      <li>JavaScript</li>
      <li>C#</li>
      <li>C / C++</li>
    </ul>
    <h3>Maiores aliados de uma pessoa desenvolvedora:</h3>
    <ul>
      <li>
        <a href="https://pt.stackoverflow.com/" target="_blank">StackOverflow</a>
      </li>
      <li>
        <a href="https://www.w3schools.com/" target="_blank">W3Schools</a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/pt-BR/" target="_blank">MDN Web Docs</a>
      </li>
      <li>
        <a href="https://devdocs.io/" target="_blank">DevDocs</a>
      </li>
      <li>
        <a href="https://app.betrybe.com/" target="_blank">Trybe</a>
      </li>
    </ul>
  </body>
</html>
```
 *Crie o arquivo `style4.css` e resolva os seguintes exercícios:*

1. Faça com que todos os itens de Listas Ordenadas tenham uma cor de fundo amarela. Se a numeração do item for PAR, faça a cor de fonte ser verde. Se o número for considerado ÍMPAR, utilize a propriedade text-transform para deixar o texto maiúsculo. (Dica: combinar classes pode ser útil aqui).

2. Faça todas as tags Header (h1, h2...) possuírem cor de fonte vermelha e, se alguma delas estiver em itálico, aumente seu tamanho para 40px e acrescente uma borda de 1px preta e sólida.

3. Faça todas as li's terem 20px de tamanho de fonte e, para todo texto em itálico dentro de alguma li, utilize a propriedade font-weight para deixá-lo negrito.

4. Na listagem de linguagens de programação, faça com que as 3 primeiras da lista possuam cor de fonte azul e, se alguma possuir "java*" no texto, utilize uma cor de fundo rosa.

5. _(Bônus)_ Para cada link na lista de aliados da pessoa desenvolvedora, faça com que ao passar o mouse sobre cada um, o texto fique em negrito e assuma a cor de fonte "temática do site"

> _Dica 1:_ Utilize o seletor :hover para controlar o passar do mouse.
> _Dica 2:_ Sugestão de cores padrão. StackOverflow (laranja), W3Schools (verde), MDN (preta), DevDocs (amarela), Trybe (verde).




