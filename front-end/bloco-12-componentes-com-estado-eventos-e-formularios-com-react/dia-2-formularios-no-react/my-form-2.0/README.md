# Bloco 12 - Dia 2

### Criando um formulário em  **_React_** .

Lembra do formulário que você criou usando JavaScript  _"clássico"_ ? Vamos criar um parecido em React, e você verá como suas habilidades evoluíram desde então!

-   Crie um novo projeto, utilizando  `npx create-react-app my-form-2.0`
    
-   Caso julgue necessário, crie estilos  **_CSS_** para seu formulário, de acordo com a sua imaginação.
    
-   Faça tudo utilizando as abstrações do  **_React_** .
    

Vamos criar um formulário de cadastro de currículo com base na especificação seguintes:

1.  Crie um  `<fieldset>`  para os dados pessoais a seguir:
    
    -   Nome - Texto
        -   Limite de 40 caracteres
        -   Todos os caracteres devem ser transformados para  `UPPER CASE`  assim que forem digitados.
        -   Campo obrigatório
    -   Email - Texto
        -   Limite de 50 caracteres
        -   Campo obrigatório
    -   CPF - Texto
        -   Limite de 11 caracteres
        -   Campo obrigatório
    -   Endereço - Texto
        -   Limite de 200 caracteres
        -   Remover qualquer caracter especial que seja digitado
        -   Campo obrigatório
    -   Cidade - Texto
        -   Limite de 28 caracteres
        -   Ao remover o foco desse campo (evento  `onBlur`  ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
        -   Campo obrigatório.
    -   Estado - ComboBox
        -   Todos os estados do Brasil
        -   Campo obrigatório.
    -   Tipo - Radio Button
        -   Casa, Apartamento
        -   Campo obrigatório.
2.  Crie outro  `<fieldset>`  para dados do seu último emprego:
    
    -   Resumo do currículo - TextArea
        -   Limite de 1000 caracteres
        -   Campo obrigatório.
    -   Cargo - TextArea
        -   Limite de 40 caracteres
        -   Quando o mouse passar por cima deste campo (evento  `onMouseEnter`  ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
        -   Campo obrigatório
    -   Descrição do cargo - Texto
        -   Limite de 500 caracteres
        -   Campo obrigatório
3.  Crie um botão que, ao ser clicado, monta uma  `<div>`  com o consolidado dos dados que foram inseridos no formulário.
    
4.  Crie um botão  `Limpar`  que limpa todos os campos do formulário e a  `<div>`  com seu currículo também.
    

Por último, vá até o formulário que você criou na aula  `HTML & CSS - Forms`  e veja as diferenças no código.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
