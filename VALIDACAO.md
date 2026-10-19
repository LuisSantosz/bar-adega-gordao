# Verificação

Data: 18/10/2026.

## Verificado

- Sintaxe JavaScript de `app.js` e `catalogo.js`: aprovada com `node --check`.
- 18 verificações funcionais em DOM simulado com a biblioteca Bootstrap real: aprovadas.
- Carregamento inicial de seis produtos e sinalização de demonstração.
- Filtro por categoria; busca sem acentos combinada com filtro; estado vazio; limpeza dos filtros.
- Ordenação por menor preço, maior preço e nome.
- Modal de produto com nome e preço corretos, fechamento e restauração de foco.
- Cartão de pagamento abre e fecha, com crédito, débito, Pix e dinheiro; estados acessíveis atualizados.
- Contato ausente abre aviso; contatos preenchidos geram links válidos. Dados de teste ficaram somente no ambiente de verificação.
- Pausa das animações, persistência da preferência e respeito ao movimento reduzido.
- Nomes de produtos inseridos como texto, sem executar HTML.
- IDs únicos, âncoras internas e existência de todos os recursos locais.
- Bootstrap CSS/JS conferidos pelos hashes SHA-384 fornecidos na documentação oficial da versão 5.3.8.
- Imagens dos produtos inspecionadas visualmente; duas imagens com quadriculado incorporado foram substituídas por fotos de fundo branco.

## Limitação

O controle de navegador exigido pelo fluxo de Sites não está disponível neste ambiente. Não foram feitos testes de renderização, screenshots ou medição de transbordamento em navegador. O DOM simulado verifica comportamento, mas não a aparência final. A adaptação a celular, tablet e desktop está implementada; a conferência visual nessas telas continua pendente.

## Dados que faltam

- Produtos e preços reais.
- Endereço, cidade e horários.
- Número de WhatsApp e perfil do Instagram da adega.
- Bandeiras ou condições adicionais de pagamento, se houver.

Os dados ausentes não foram inventados. Esta entrega permanece explicitamente marcada como demonstração.

## Revisão: fonte spray e limpeza de textos

As 18 verificações funcionais existentes foram executadas novamente e aprovadas. Conferidos os novos textos da faixa, a remoção das frases e da numeração decorativa, as âncoras e os arquivos locais. A fonte Rubik Spray Paint contém todos os caracteres de BAR E ADEGA DO GORDÃO, inclusive Ã. A limitação de conferência visual em navegador permanece.

## Revisão: cartão sóbrio e remoções das imagens

Aprovadas novamente as 18 verificações funcionais em DOM. Verificadas a remoção do cabeçalho e da faixa superior, a ausência de estrelas decorativas, a separação de “Seu jeito de pagar.”, a manutenção da fonte spray e a remoção de todas as inclinações 2D do cartão, inclusive no hover e nas regras de celular. O aviso de dados demonstrativos permanece junto aos produtos. A conferência visual em navegador continua pendente pela mesma limitação do ambiente.

## Revisão: Permanent Marker, logo e faixa

Verificados em DOM: renderização dos seis produtos, remoção do botão do letreiro, presença do logo G com coroa no topo, dois grupos idênticos com os sete textos pedidos na faixa e funcionamento do giro do cartão de pagamento. Verificada a presença de todos os caracteres do nome na fonte Permanent Marker, inclusive Ã; recursos locais, IDs e âncoras também foram conferidos. A conferência visual em navegador continua pendente.

## Revisão: texto amarelo e dinheiro contido no card

Verificação focada em DOM simulado: logo superior removido; sete textos preservados nos dois grupos da faixa; nove notas decorativas dentro do letreiro; pausa e retomada das animações funcionando. Inspeção do CSS: texto destacado sem fundo, borda ou padding próprio; recorte das notas limitado às bordas do card em todas as larguras; queda relativa à altura do card, sem deslocamento vertical fixo. A conferência visual em navegador continua pendente.
