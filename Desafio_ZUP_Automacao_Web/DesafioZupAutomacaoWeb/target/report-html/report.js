$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/adicionar_carrinho.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Realizar um fluxo de ponta a ponta de um cliente",
  "description": "em um site de compra\n\nComo um usuário\nGostaria de pesquisar um produto\nPara que eu possa realizar selecionar um produto e enviar para o carrinho de compras",
  "id": "realizar-um-fluxo-de-ponta-a-ponta-de-um-cliente",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "#Cenário: Inserir um produto no carrinho"
    },
    {
      "line": 11,
      "value": "#"
    },
    {
      "line": 12,
      "value": "#Dado que acesso o site americanas"
    },
    {
      "line": 13,
      "value": "#Quando faco a busca do produto \"smartphone samsung galaxy a70 - branco\""
    },
    {
      "line": 14,
      "value": "#Então escolho um produto na lista"
    },
    {
      "line": 15,
      "value": "#E adiciono no carrinho"
    },
    {
      "line": 16,
      "value": "#Então valido o produto no carrinho \"Smartphone Samsung Galaxy A70 - Branco\""
    },
    {
      "line": 17,
      "value": "#"
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 19,
      "value": "#"
    },
    {
      "line": 20,
      "value": "#Cenário: Inserir dois produto no carrinho"
    },
    {
      "line": 21,
      "value": "#"
    },
    {
      "line": 22,
      "value": "#Dado que acesso o site americanas"
    },
    {
      "line": 23,
      "value": "#Quando faco a busca do produto \"smartphone samsung galaxy a70 - branco\""
    },
    {
      "line": 24,
      "value": "#Então escolho um produto na lista"
    },
    {
      "line": 25,
      "value": "#E adiciono no carrinho"
    },
    {
      "line": 26,
      "value": "#Então valido o produto no carrinho \"Smartphone Samsung Galaxy A70 - Branco\""
    },
    {
      "line": 27,
      "value": "#E faco a busca do produto \"console ps4 1tb edição family\""
    },
    {
      "line": 28,
      "value": "#E escolho um produto na lista"
    },
    {
      "line": 29,
      "value": "#E adiciono no carrinho"
    },
    {
      "line": 30,
      "value": "#Então valido o produto no carrinho \"Console PS4 1TB Edição Family\""
    }
  ],
  "line": 33,
  "name": "Remover um produto",
  "description": "",
  "id": "realizar-um-fluxo-de-ponta-a-ponta-de-um-cliente;remover-um-produto",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 35,
  "name": "que acesso o site americanas",
  "keyword": "Dado "
});
formatter.step({
  "line": 36,
  "name": "faco a busca do produto \"smartphone samsung galaxy a70 - branco\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 37,
  "name": "escolho um produto na lista",
  "keyword": "Então "
});
formatter.step({
  "line": 38,
  "name": "adiciono no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 39,
  "name": "valido o produto no carrinho \"Smartphone Samsung Galaxy A70 - Branco\"",
  "keyword": "Então "
});
formatter.step({
  "line": 40,
  "name": "faco a busca do produto \"console ps4 1tb edição family\"",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "escolho um produto na lista",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "adiciono no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "valido o produto no carrinho \"Console PS4 1TB Edição Family\"",
  "keyword": "Então "
});
formatter.step({
  "line": 44,
  "name": "remover um produto",
  "keyword": "E "
});
formatter.match({
  "location": "AdicionarCarrinhoSteps.queAcessoOSiteAmericanas()"
});
formatter.result({
  "duration": 4318544357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smartphone samsung galaxy a70 - branco",
      "offset": 25
    }
  ],
  "location": "AdicionarCarrinhoSteps.faco_a_busca_do_produto(String)"
});
formatter.result({
  "duration": 5470086181,
  "status": "passed"
});
formatter.match({
  "location": "AdicionarCarrinhoSteps.escolho_um_produto_na_lista()"
});
formatter.result({
  "duration": 786083659,
  "status": "passed"
});
formatter.match({
  "location": "AdicionarCarrinhoSteps.adiciono_no_carrinho()"
});
formatter.result({
  "duration": 9036006614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smartphone Samsung Galaxy A70 - Branco",
      "offset": 30
    }
  ],
  "location": "AdicionarCarrinhoSteps.valido_o_produto_no_carrinho(String)"
});
formatter.result({
  "duration": 217498126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "console ps4 1tb edição family",
      "offset": 25
    }
  ],
  "location": "AdicionarCarrinhoSteps.faco_a_busca_do_produto(String)"
});
formatter.result({
  "duration": 6100011597,
  "status": "passed"
});
formatter.match({
  "location": "AdicionarCarrinhoSteps.escolho_um_produto_na_lista()"
});
formatter.result({
  "duration": 2666454514,
  "status": "passed"
});
formatter.match({
  "location": "AdicionarCarrinhoSteps.adiciono_no_carrinho()"
});
formatter.result({
  "duration": 8171459818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Console PS4 1TB Edição Family",
      "offset": 30
    }
  ],
  "location": "AdicionarCarrinhoSteps.valido_o_produto_no_carrinho(String)"
});
formatter.result({
  "duration": 513763402,
  "status": "passed"
});
formatter.match({
  "location": "AdicionarCarrinhoSteps.removerUmProduto()"
});
formatter.result({
  "duration": 268042133,
  "status": "passed"
});
});