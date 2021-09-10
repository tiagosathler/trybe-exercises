# Bloco 12 - Dia 3 - Projeto - Movie Cards Library Stateful

Este projeto é semelhante ao anterior ([Movie Cards Library](https://github.com/tiagosathler/trybe-exercises/tree/master/front-end/bloco-11-introducao-a-react/dia-3-projeto-movie-cards-library)), porém agora usando componenentes com estado e uso de formulários em React. 

A ideia é que dois componentes da página tenha seus estados gerenciados, sendo o principal, `MovieLibrary` gerencia o estado sobre as informações dos filmes e os parâmetros de filtragem (formulário de seleção e pesquisa). Já o componente `AddMovie` gerencia o estado das informações do formulário de adição de novos filmes. 

Ao clicar no botão *Adicionar* no componente `AddMovie` o componente filho `AMButton` invoca uma *callback* do pai, que por sua vez testa os dados de seu estado (formulário com campos obrigatórios). Se passar no teste ele invoca a função *callback* de seu *pai* (`MovieLibrary`) passando seu estado testado como parâmetro, de modo que o pai acrescente as novas informações do filme ao estado dos filmes e atualize os estados de pesquisa e busca. Finalmente, depois dessa execução a função retorna para o filho para que ele atualize o estado de seu formulário de adição (limpa).

Eu adicionei outra funcionalidade que não estava nos requisitos que é a alternativa de *Favoritar* o filme. Isto implica em passar uma *callback* ao componenete filho e depois ao neto de modo que ele invoca a função do avô passando como parâmetro sua *props*.

> Os requisitos do projeto podem ser lidos no repositório da [__Trybe__](https://www.betrybe.com/): [Project Movie Cards Library Stateful](https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful)

> A página pode ser testada diretamente de uma cópia hospedada no GitHub Pages: [Projeto Movie Cards Library Stateful](https://tiagosathler.github.io/projects/movie-cards-library-stateful/index.html)

> Os resultados do projeto podem ser vistos neste Pull Request: [Movie Cards Library Project](https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful/pull/24)

![](https://github.com/tiagosathler/trybe-exercises/blob/master/front-end/bloco-12-componentes-com-estado-eventos-e-formularios-com-react/dia-3-projeto-movie-cards-library-stateful/Results-Movie-Cards-Library-Stateful.png)