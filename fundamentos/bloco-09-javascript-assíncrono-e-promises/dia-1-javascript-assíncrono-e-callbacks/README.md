# Bloco 09 - Dia 1 - JavasScript Assíncrono e Callbacks

Neste dia revisamos o conceito de *callback* em funções no JavaScript e fomos apresentados ao conceito de execução *assíncrona*, em que o código síncrono é executado linha a linha normalmente, sem ter que ficar esperando aquelas funções cujo o tempo de resposta foge de nosso controle. Para estas funções, usamos o conceito de assincronicidade, cuja execução é separada e ocorre paralelamente à execução síncrona.

Introduziu-se o conceito de *API* cuja chamada é assíncrona.

## Exercícios do dia

> Os exercícios estão em cada arquivo *.js*.

**1.** Dado o código descrito em [**exercise-01.js**](), qual a ordem de finalização de execução das linhas comentadas?

**2.** Agora, dado o código descrito em [**exercise-02.js**](), qual a ordem de finalização de execução das linhas comentadas?

**3.** A função `getPlanet` dada em [**exercise-03.js**]() imprime o planeta Marte de forma síncrona. Modifique `getPlanet`, de forma que Marte seja impresso `assincronamente`, depois de 4 segundos.

**4.** Suponha que você precise simular uma mensagem enviada do robô *Curiosity* de Marte para a Terra. O `Curiosity` envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função `sendMarsTemperature`, que imprime a temperatura em Marte. [**exercise-04.js**]()

**5.** Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô `Curiosity` o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função `sendMarsTemperature` um `callback` que contenha as ações a serem tomadas em cima da temperatura. [**exercise-05.js**]()

**6.** Por fim, o robô `Curiosity` tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função `sendMarsTemperature` um outro `callback` que contenha as ações a serem tomadas em caso de falha. [**exercise-06.js**]()