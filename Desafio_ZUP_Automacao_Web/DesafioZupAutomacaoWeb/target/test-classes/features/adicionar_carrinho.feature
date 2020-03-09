#language: pt

Funcionalidade: Realizar um fluxo de ponta a ponta de um cliente
em um site de compra

Como um usuário
Gostaria de pesquisar um produto
Para que eu possa realizar selecionar um produto e enviar para o carrinho de compras

Cenário: Inserir um produto no carrinho

Dado que acesso o site americanas
Quando faco a busca do produto "smartphone samsung galaxy a70 - branco"
Então escolho um produto na lista
E adiciono no carrinho
Então valido o produto no carrinho "Smartphone Samsung Galaxy A70 - Branco"



Cenário: Inserir dois produto no carrinho

Dado que acesso o site americanas
Quando faco a busca do produto "smartphone samsung galaxy a70 - branco"
Então escolho um produto na lista
E adiciono no carrinho
Então valido o produto no carrinho "Smartphone Samsung Galaxy A70 - Branco"
E faco a busca do produto "console ps4 1tb edição family"
E escolho um produto na lista
E adiciono no carrinho
Então valido o produto no carrinho "Console PS4 1TB Edição Family"


Cenário: Remover um produto

Dado que acesso o site americanas
Quando faco a busca do produto "smartphone samsung galaxy a70 - branco"
Então escolho um produto na lista
E adiciono no carrinho
Então valido o produto no carrinho "Smartphone Samsung Galaxy A70 - Branco"
E faco a busca do produto "console ps4 1tb edição family"
E escolho um produto na lista
E adiciono no carrinho
Então valido o produto no carrinho "Console PS4 1TB Edição Family"
E remover um produto
