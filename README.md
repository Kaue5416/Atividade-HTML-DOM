Kauê e José Antônio - 08/05/2025


Características do Sistema:

1. Estrutura HTML Semântica:
   - Utiliza elementos como <header>,<main>, <section> e <footer> para organizar o conteúdo de forma clara e acessível.
   - Contêineres separados para a lista de produtos (<main id="product-list">) e o carrinho (<section id="cart">).

2. Renderização Dinâmica:
   - Os produtos são carregados dinamicamente a partir do arquivo data.json e exibidos no contêiner de produtos.

3. Carrinho de Compras:
   - Permite adicionar produtos ao carrinho, ajustar a quantidade e remover itens.
   - Exibe os itens adicionados ao carrinho com informações detalhadas, como nome, preço unitário, quantidade e subtotal.

4. Cálculo Automático:
   - Calcula automaticamente o subtotal de cada item (preço unitário x quantidade).
   - Atualiza o valor total do carrinho dinamicamente conforme os itens são adicionados, removidos ou ajustados.

5. Mensagem de Carrinho Vazio:
   - Exibe uma mensagem "Carrinho vazio" quando não há itens no carrinho.

6. Responsividade:
   - As imagens dos produtos possuem diferentes tamanhos (thumbnail, mobile, tablet, desktop) para se adaptar ao dispositivo do usuário.

7. Estilo Moderno:
   - Utiliza CSS para criar um layout moderno e responsivo, com:
     - Botões estilizados com efeitos de hover.
     - Bordas arredondadas e sombras para destacar os elementos.
     - Layout em grade para organizar os produtos.

8. Interatividade:
   - Botões para aumentar, diminuir ou remover itens do carrinho.
   - Feedback visual ao interagir com os botões.



Funcionalidades do Sistema

1. Carregamento de Produtos:
   - Os produtos são carregados do arquivo data.json e exibidos dinamicamente na página.

2. Adicionar ao Carrinho:
   - O botão "Adicionar ao Carrinho" permite incluir produtos no carrinho.

3. Gerenciamento de Quantidade:
   - Botões para aumentar ou diminuir a quantidade de cada item no carrinho.
   - Se a quantidade de um item for reduzida para zero, ele é removido automaticamente.

4. Remoção de Itens:
   - Botão para remover itens específicos do carrinho.

5. Limpar Carrinho:
   - Um botão permite limpar todos os itens do carrinho de uma vez.

6. Cálculo do Total:
   - O sistema calcula automaticamente o subtotal de cada item e o total geral do carrinho.

7. Feedback Visual:
   - Mensagem de "Carrinho vazio" quando não há itens no carrinho.
   - Efeitos visuais nos botões ao passar o mouse ou clicar.

8. Organização Visual:
   - Cada produto exibe:
     - Imagem (thumbnail).
     - Nome.
     - Categoria.
     - Preço.
