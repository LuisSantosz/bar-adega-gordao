/* Edite os dados aqui. Não é necessário instalar ferramentas ou compilar o site. */
window.CATALOGO = {
  loja: {
    nome: 'BAR E ADEGA DO GORDÃO',
    demonstracao: true,
    whatsapp: '', // País + DDD + número, somente dígitos. Ex.: 5511999999999
    instagram: '', // Nome de usuário, sem @. Preencha com o perfil real da adega.
    endereco: '',
    cidade: '',
    horario: '',
    observacaoPagamento: 'Consulte no balcão as bandeiras aceitas e as condições de pagamento.'
  },
  categorias: [
    { id: 'todos', nome: 'Todos os produtos', icone: 'grid' },
    { id: 'cervejas', nome: 'Cervejas', icone: 'beer' },
    { id: 'refrigerantes', nome: 'Refrigerante', icone: 'cup' },
    { id: 'whisky', nome: 'Whisky', icone: 'bottle' },
    { id: 'vodka', nome: 'Vodka', icone: 'bottle' },
    { id: 'gin', nome: 'Gin', icone: 'bottle' },
    { id: 'sucos', nome: 'Suco', icone: 'cup' },
    { id: 'gelo', nome: 'Gelo', icone: 'grid' },
    { id: 'copos', nome: 'Copo', icone: 'cup' },
    { id: 'energeticos', nome: 'Energéticos', icone: 'bolt' },
  ],
  /* Valores ilustrativos, não são preços confirmados da adega. */
  produtos: [
    { id: 'gin', nome: 'Gin', categoria: 'gin', tipo: 'Gin', volume: 'Consulte opções', preco: null, imagem: 'assets/categoria-gin.svg', cor: 'blue', descricao: 'Consulte as marcas, tamanhos e preços disponíveis no estabelecimento.' },
    { id: 'suco', nome: 'Suco', categoria: 'sucos', tipo: 'Suco', volume: 'Consulte opções', preco: null, imagem: 'assets/categoria-suco.svg', cor: 'orange', descricao: 'Consulte os sabores, tamanhos e preços disponíveis no estabelecimento.' },
    { id: 'gelo', nome: 'Gelo', categoria: 'gelo', tipo: 'Gelo', volume: 'Consulte opções', preco: null, imagem: 'assets/categoria-gelo.svg', cor: 'blue', descricao: 'Consulte os tamanhos de pacote e preços disponíveis no estabelecimento.' },
    { id: 'copo', nome: 'Copo', categoria: 'copos', tipo: 'Copo', volume: 'Consulte opções', preco: null, imagem: 'assets/categoria-copo.svg', cor: 'pink', descricao: 'Consulte os modelos, tamanhos e preços disponíveis no estabelecimento.' },
    { id: 'heineken', nome: 'Heineken', categoria: 'cervejas', tipo: 'Long neck', volume: '330 ml', preco: 8.99, imagem: 'assets/heineken.jpg', cor: 'lime', descricao: 'Cerveja Heineken em garrafa long neck. Consulte a disponibilidade no estabelecimento.' },
    { id: 'budweiser', nome: 'Budweiser', categoria: 'cervejas', tipo: 'Lata', volume: '350 ml', preco: 4.99, imagem: 'assets/budweiser.jpg', cor: 'pink', descricao: 'Cerveja Budweiser em lata. Consulte a disponibilidade no estabelecimento.' },
    { id: 'jack-daniels', nome: 'Jack Daniel’s', categoria: 'whisky', tipo: 'Whisky', volume: '1 litro', preco: 149.90, imagem: 'assets/jack-daniels.jpg', cor: 'yellow', descricao: 'Whisky Jack Daniel’s Old No. 7. Preço por garrafa. Consulte a disponibilidade no estabelecimento.' },
    { id: 'absolut', nome: 'Absolut Vodka', categoria: 'vodka', tipo: 'Vodka', volume: '1 litro', preco: 89.90, imagem: 'assets/absolut.png', cor: 'blue', descricao: 'Vodka Absolut Original. Preço por garrafa. Consulte a disponibilidade no estabelecimento.' },
    { id: 'red-bull', nome: 'Red Bull', categoria: 'energeticos', tipo: 'Energético', volume: '250 ml', preco: 10.99, imagem: 'assets/red-bull.jpg', cor: 'purple', descricao: 'Energético Red Bull Original em lata. Consulte a disponibilidade no estabelecimento.' },
    { id: 'coca-cola', nome: 'Coca-Cola', categoria: 'refrigerantes', tipo: 'Refrigerante', volume: '2 litros', preco: 12.99, imagem: 'assets/coca-cola.jpg', cor: 'orange', descricao: 'Refrigerante Coca-Cola em garrafa PET. Consulte a disponibilidade no estabelecimento.' }
  ]
};
