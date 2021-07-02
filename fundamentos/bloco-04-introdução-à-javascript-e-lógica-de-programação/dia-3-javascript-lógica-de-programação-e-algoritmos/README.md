# Bloco 04 - Dia 3 - JavaScript - Lógica de Programação e Algoritmos

O objetivo deste dia é aprender algoritmos e lógica de programação, a base de tudo! Quebrar grandes problemas em outros menores e utilizar a lógica de programação na resolução de problemas.
Os exercícios estão compilados no arquivo `script.js` e os resultados podem ser visualizados ao abrir o arquivo HTML no *browser* utilizando-se do *console* da ferramenta *inspecionar*. Também podem ser vistos ao rodar diretamente no *Node.Js*.

## Exercícios do dia
1. Para o primeiro exercício de hoje, faça um programa que, dado um valor `n` qualquer, seja `n > 1` , imprima na tela um quadrado feito de *asteriscos* de lado de tamanho `n`. Por exemplo:
```
> n = 5
> 
> *****
> *****
> *****
> *****
> *****
```

2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 *asteriscos* de base. Por exemplo:
```
> n = 5
>
> *
> **
> ***
> ****
> *****
```
3. Agora inverta o lado do triângulo. Por exemplo:
```
> n = 5
>
>     *
>    **
>   ***
>  ****
> *****
```
> Atenção! Note que esse exercício é *bem mais complexo que o anterior!* Não basta, aqui, imprimir somente *asteriscos*. Você precisará de uma lógica para imprimir espaços também.

4. Depois, faça uma pirâmide com `n` *asteriscos* de base:
```
> n = 5
> 
>   *
>  ***
> *****
```
### Bônus

5. Faça uma pirâmide com `n` *asteriscos* de base que seja vazia no meio. Assuma que o valor de `n` será sempre ímpar:
```
> Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
> n = 7
>
>    *
>  * *
>  *   *
> *******
```

6. Faça um programa que diz se um número definido numa variável é primo ou não.
   * Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
   * Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
