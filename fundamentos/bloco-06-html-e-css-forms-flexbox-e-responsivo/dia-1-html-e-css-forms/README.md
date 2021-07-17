# Bloco 06 - Dia 1 - HTML & CSS - Forms
Objetivo deste dia é criar formulários em HTML através das *tags* `input`, `button`, `textarea`, `select` e `form`, `fieldset`, `legend`. Entender os principais atributos destas *tags*, especialmente em `input`, ver uma breve introdução de como este formulário é enviado por requisições `GET` e `POST` através da ação do botão do tipo `submit`. No exercício do dia, além de praticar em HTML foi proposto um algoritmo simples em JS para testar a data e uso do `preventDefault()`. Aqui não se preocupou com as folhas de estilo em CSS, tema para o próximo dia deste bloco.

## Exercícios do dia
> O resultado do exercício pode ser explorado ao ler os arquivos [`forms.html`](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-06-html-e-css-forms-flexbox-e-responsivo/dia-1-html-e-css-forms/forms.html) e [`script.js`](https://github.com/tiagosathler/trybe-exercises/blob/master/fundamentos/bloco-06-html-e-css-forms-flexbox-e-responsivo/dia-1-html-e-css-forms/script.js).  

### Criando um formulário de currículo - Requisitos:
* Crie um arquivo HTML chamado `form.html` para o formulário.
* Caso julgue necessário, crie estilos CSS para o seu formulário, de acordo com a sua imaginação. Coloque-os em um arquivo `styles.css`.
* Crie também um arquivo `script.js` para seu código JavaScript .

1. Crie um `<fieldset>` para os seguintes dados pessoais:
	  * Nome - Texto
	     * Limite de 40 caracteres
	     * Campo obrigatório
	  * Email - Texto
	     * Limite de 50 caracteres
	     * Campo obrigatório
	  * CPF - Texto
	     * Limite de 11 caracteres
	     * Campo obrigatório
	  * Endereço - Texto
	     * Limite de 200 caracteres
	     * Campo obrigatório
	  * Cidade - Texto
	     * Limite de 28 caracteres
	     * Campo obrigatório
	  * Estado - Select
	     * Todos os estados do Brasil
	     * Utilize estruturas de repetição via JavaScript para gerar os `<option>`
	     * Campo obrigatório
	  * Tipo - Radio Button
	    * Casa, Apartamento
	    * Campo obrigatório
    
2. Crie outro `<fieldset>` para dados do seu último emprego
  * Resumo do currículo - TextArea
    * Limite de 1000 caracteres
    * Campo obrigatório
  * Cargo - Texto
    * Limite de 40 caracteres
    * Campo obrigatório
  * Descrição do cargo - Texto
    * Limite de 500 caracteres
    * Campo obrigatório
  * Data de início - Texto
    * Verificar o formato da data `dd/mm/aaaa`.
    * O dia deve ser > 0 e <= 31.
    * O mês deve ser > 0 e <= 12.
    * O ano não pode ser negativo.
    * Caso alguma das condições seja inválida no momento do envio do formulário, exibir via `alert` uma mensagem de erro contextualizada.
    * Campo obrigatório

3. Logo abaixo do formulário, crie um botão que:
  * Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o `preventDefault()`. Note que isso vai impedir as validações do HTML ao fazer o submit
  * Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.
  * Caso todos os dados sejam válidos, monte uma `<div>` com o consolidado dos dados que foram inseridos no formulário.
  * Caso haja algum dado inválido, mostre em uma `<div>` uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.

4. Crie um botão `Limpar` que limpa todos os campos do formulário e a `<div>` com seu currículo também.
