# Bar e Adega do Gordão

Catálogo de consulta feito em **HTML, CSS, JavaScript e Bootstrap 5.3.8**, sem instalação, compilação, conta de usuário ou servidor de banco de dados.

## Abrir

Abra `dist/index.html` no navegador. Todos os arquivos usados pela página estão incluídos, inclusive Bootstrap, fontes e imagens. Os links de WhatsApp, Instagram e Google Maps precisam de internet.

Para hospedar em um serviço estático, envie o conteúdo da pasta `dist`. A página inicial deve ser `index.html` na raiz publicada. O código-fonte também está sincronizado no projeto de Sites correspondente.

## GitHub Pages

Site: https://luissantosz.github.io/bar-adega-gordao/

Em **Settings → Pages → Build and deployment**, mantenha **Source: GitHub Actions**. O workflow `.github/workflows/pages.yml` publica o conteúdo de `dist` automaticamente a cada atualização da branch `main`; não é necessário compilar o projeto.

Edite os arquivos dentro de `dist`, salve na branch `main` e acompanhe a publicação em **Actions → Publicar catálogo no GitHub Pages**. Também é possível iniciar uma publicação pelo botão **Run workflow**. Os caminhos de CSS, JavaScript, fontes e imagens são relativos, compatíveis com o endereço do projeto.

## Atualizar os dados

Edite **`dist/catalogo.js`** em um editor de texto, por exemplo VS Code:

- `loja.whatsapp`: número real com país e DDD, somente dígitos.
- `loja.instagram`: perfil real da adega, sem `@`.
- `loja.endereco`, `loja.cidade`, `loja.horario`: dados do estabelecimento.
- `loja.observacaoPagamento`: condições confirmadas, bandeiras e eventual regra de parcelamento.
- `produtos`: nome, categoria, embalagem, volume, preço, imagem e descrição de cada produto.
- `loja.demonstracao`: mantenha `true` enquanto os preços forem ilustrativos. Mude para `false` **somente depois de cadastrar e conferir os dados reais**.

Preços são números com ponto decimal no código, por exemplo `8.99`. A página exibe `R$ 8,99`. Cada produto precisa de um `id` único. Os arquivos de imagem devem ficar em `dist/assets`; use nomes simples sem espaços ou acentos, e mantenha o caminho relativo, como `assets/heineken.jpg`.

Categorias disponíveis: `cervejas`, `destilados`, `energeticos`, `sem-alcool`. É possível adicionar categorias ao array `categorias` e produtos com o identificador correspondente. As cores dos cards são `lime`, `pink`, `yellow`, `blue`, `purple` e `orange`.

Os contatos não preenchidos exibem um aviso claro ao clicar. Assim que os dados válidos forem cadastrados, a aplicação cria os links correspondentes automaticamente. Nenhum telefone de terceiros é usado como contato da adega.

## Funcionalidades

- Textura de tijolos pretos e cartaz neon com fonte Permanent Marker e dinheiro decorativo animado.
- Paleta azul, rosa, amarelo e verde, baseada na referência enviada.
- Cards Bootstrap personalizados, imagens de produtos e valores em reais.
- Busca que ignora acentos, filtros por categoria e ordenação de preços ou nomes.
- Detalhes dos produtos em modal, com navegação por teclado.
- Cartão clicável com giro 3D: crédito, débito, Pix e dinheiro.
- Áreas de endereço, horários, WhatsApp e Instagram.
- Controle para pausar animações e respeito à preferência de movimento reduzido do dispositivo.
- Layout com adaptações para celular, tablet e desktop.
- Sem carrinho, checkout, coleta de cartão, processamento de pagamento ou pedido online.

## Arquivos

```
dist/
  index.html             Estrutura e conteúdo fixo
  style.css              Layout, responsividade e animações
  catalogo.js             Produtos, preços e contatos editáveis
  app.js                  Busca, filtros, modais, cartão e contatos
  assets/                 Fontes e imagens locais
  vendor/                 Bootstrap CSS e JavaScript
```

## Conteúdo demonstrativo

Os seis produtos e os preços são exemplos de apresentação. Não representam estoque nem valores confirmados do Bar e Adega do Gordão. Endereço, horários, número de WhatsApp e perfil do Instagram não foram fornecidos e permanecem vazios. Crédito, débito, Pix e dinheiro foram informados pelo solicitante. Não se presume parcelamento, bandeira, taxa ou desconto.

A paleta de cores segue a referência fornecida pelo solicitante. As imagens de produtos foram obtidas das páginas públicas abaixo para esta demonstração; substitua por fotos próprias ou imagens cujo uso esteja autorizado pela marca/fornecedor antes de divulgar amplamente. Não há afiliação com as marcas.

- Heineken: https://www.savegnago.com.br/cerveja-heineken-330ml-long-neck/p
- Budweiser: https://www.boasupermercados.com.br/cerveja-lager-lata-budweiser-350ml/p
- Jack Daniel’s: https://www.rimi.lt/e-parduotuve/lt/produktai/alkoholiniai-ir-nealkoholiniai-gerimai/viskis/jav-ir-kanados-viskis-burbonas-/tenesio-viskis-jack-daniel-s-40-1-l/p/101841
- Absolut: https://redbottle.com.au/absolut-vodka-limited-edition-rainbow-1l/
- Red Bull: https://www.carrefour.com.br/energetico-red-bull-250ml-mp933474142/p
- Coca-Cola: https://www.tendaatacado.com.br/produto/refrigerante-coca-cola-original-garrafa-2l

Bibliotecas e fontes: Bootstrap (MIT), https://getbootstrap.com/docs/5.3/getting-started/introduction/ ; famílias Barlow e Barlow Condensed (SIL Open Font License), https://fonts.google.com/specimen/Barlow e https://fonts.google.com/specimen/Barlow+Condensed . Os avisos de licença do Bootstrap estão preservados nos arquivos distribuídos. Consulte `dist/assets/OFL-Barlow.txt`. A fonte Rubik Spray Paint segue a SIL Open Font License, disponível em `dist/assets/OFL-RubikSprayPaint.txt`; referência: https://fonts.google.com/specimen/Rubik+Spray+Paint .

## Validação desta entrega

Os resultados da verificação funcional e as limitações estão em `VALIDACAO.md`. O ambiente não oferece o controle de navegador exigido para a verificação visual de Sites; a inspeção real das telas em celular e desktop permanece pendente. A responsividade foi implementada no CSS, mas não deve ser confundida com teste visual executado.

## Revisão de conteúdo

Letreiro, marca e rodapé usam tipografia de marcador. Frases decorativas, cartaz de referência com slogans e numeração ornamental de seções e produtos foram removidos. A faixa animada apresenta: Os melhores preços; Cerveja; Destilados; Energéticos; Gelo e muito mais. Preços, volumes e contagem de resultados foram preservados por serem informações do catálogo.

## Revisão do cartão de pagamento

Removido o cabeçalho pequeno e a faixa superior mostrados na segunda imagem. O letreiro principal mantém a fonte spray. Retiradas as estrelas decorativas e instruções de toque. Cartão horizontal em grafite e prata, sem inclinação em repouso ou hover; o giro para revelar crédito, débito, Pix e dinheiro continua disponível por clique ou teclado. Título: “Seu jeito de pagar.”, com espaços explícitos.

## Revisão do letreiro e da faixa

A fonte anterior do nome era Rubik Spray Paint. A atual é Permanent Marker (Google Fonts, licença Apache 2.0 incluída em `dist/assets/LICENSE-PermanentMarker.txt`). Barlow e Barlow Condensed continuam nos demais textos. O botão “Ver produtos e preços” foi removido. O detalhe inferior do letreiro é branco, “BAR E ADEGA” é amarelo e o logo do canto superior foi removido. A faixa apresenta: Os melhores preços, Cerveja, Destilados, Refrigerante, Suco, Gelo, Muito mais; o primeiro item tem apenas texto amarelo, sem fundo próprio.

O letreiro neon e o cartão de pagamento foram desenvolvidos sob medida em HTML e CSS, sem copiar um modelo de galeria. Os cards de produtos usam a estrutura de cards do Bootstrap com CSS próprio. Referências para explorar alternativas: https://getbootstrap.com/docs/5.3/components/card/ e https://uiverse.io/cards .

## Revisão da animação do letreiro

A chuva de dinheiro está limitada ao interior do card do letreiro, com recorte nas bordas arredondadas. O percurso começa no topo e termina na borda inferior, acompanhando a altura do card em qualquer largura de tela. A luz externa e o detalhe branco continuam fora desse recorte.
