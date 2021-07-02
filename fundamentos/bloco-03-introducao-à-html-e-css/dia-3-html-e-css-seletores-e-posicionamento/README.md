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
**Personagens pertencentes à Nintendo©**
1. Posicione o Mário acima do Goomba.
2. Posicione a tag p para que fique dentro do balão de fala.
3. Posicione o balão para que se torne uma fala de Bowser.

#### Parte III - Agrupamento de seletores e pseudoclasses

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
2. Crie um arquivo no mesmo diretório e nomeie-o de 'style.css'.
3. Nesse arquivo .css, adicione os estilos para que:
   * O texto das tags `h1` e `p` estejam centralizados.
   * A cor de fundo da sua lista mude quando o cursor estiver sobre o item.
   * A fonte do item mude quando ele for clicado.
4. Adicione uma lista não ordenada com, pelo menos, 3 características que você gosta.
5. No `style3.css`, adicione a propriedade `list-style: none` para ambas as listas.
> **Dica** : Nesse [link](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes), você irá encontrar a documentação sobre todas as pseudoclasses do CSS.



