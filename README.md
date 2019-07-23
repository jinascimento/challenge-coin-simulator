# Cambio Store Challenge

## Desafio a ser desenvolvido
O desafio consiste em criar uma aplicação Ruby on Rails onde você irá implementar uma página com o trecho de layout da imagem layout.png (retirado da página inicial www.cambiostore.com). Para efeito de simplificação do desafio, você pode desconsiderar os seguintes elementos:

- Slider com os depoimentos;
- O simulador (box branco com o botão "comparar casas de câmbio") pode conter apenas o conteúdo da aba "Moedas em espécie", não sendo necessário implementar a linha superior com as abas.

O que a aplicação precisará conter:

- Utilização do pré-processador SASS para css;
- O CSS deverá ser escrito utilizando a metodologia BEM (http://getbem.com/);
- O simulador deverá ser desenvolvido como um componente React. Para utilização do React na aplicação, recomendo que utilize a gem https://github.com/shakacode/react_on_rails;
- No simulador, o valor exibido para cotação deverá mudar de acordo com a moeda selecionada. No back-end, você deverá consumir a API https://docs.awesomeapi.com.br/api-de-moedas para busca de valores. Para simplificação, pode considerar que o simulador trabalhará apenas com as moedas Dólar e Euro.

O código da aplicação deverá estar acessível num repositório público do GitHub, e deverá ser feito o deploy da aplicação para uma máquina free do Heroku.

Ao finalizar o desafio, por favor enviar o link do repositório no GitHub e a url do Heroku com a página desenvolvida.

Contanto que os critérios acima sejam atendidos, a estratégia de implementação ficará a critério do desenvolvedor. O que será levado em conta é a organização e legibilidade do código final.

## Configurações do ambiente
    - Ruby version: 2.5.0
    - Rails version: 5.2.3
    - Banco de dados: PostgreSQL

## Ambiente de Desenvolvimento

Clone este repositorio
Rode os comandos para configuração do ambiente Rails.
 - bundle install
 - rails s
 - rake db:create

O Projeto estara disponivel em http://localhost:3000
