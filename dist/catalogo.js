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
    { id: 'gin', nome: 'Eternity Watermelon', categoria: 'gin', tipo: 'Gin sabor melancia', volume: '900 ml', preco: 20, demonstracao: false, imagem: 'assets/eternity-watermelon-900ml.jpg', cor: 'pink', descricao: 'Gin Eternity Watermelon sabor melancia, garrafa de 900 ml. Preço por garrafa.' },
    { id: 'suco', nome: 'Maguary Maracujá', categoria: 'sucos', tipo: 'Suco de maracujá', volume: '1 litro', preco: 6, demonstracao: false, imagem: 'assets/maguary-maracuja-1l.jpg', cor: 'orange', descricao: 'Suco Maguary sabor maracujá, embalagem de 1 litro. Preço por unidade.' },
    { id: 'gelo', nome: 'Saco de gelo', categoria: 'gelo', tipo: 'Gelo em cubos', volume: 'Saco', preco: 20, demonstracao: false, imagem: 'assets/produto-gelo.jpg', cor: 'blue', descricao: 'Saco de gelo em cubos. Preço por saco. Consulte o peso no estabelecimento.' },
    { id: 'copo', nome: 'Copo 500 ml', categoria: 'copos', tipo: 'Copo descartável', volume: '500 ml', preco: 2, demonstracao: false, imagem: 'assets/produto-copo.jpg', cor: 'pink', descricao: 'Copo descartável transparente de 500 ml. Preço por unidade.' },
    { id: 'heineken', nome: 'Heineken', categoria: 'cervejas', tipo: 'Long neck', volume: '330 ml', preco: 8.99, imagem: 'assets/heineken.jpg', cor: 'lime', descricao: 'Cerveja Heineken em garrafa long neck. Consulte a disponibilidade no estabelecimento.' },
    { id: 'budweiser', nome: 'Budweiser', categoria: 'cervejas', tipo: 'Lata', volume: '350 ml', preco: 4.99, imagem: 'assets/budweiser.jpg', cor: 'pink', descricao: 'Cerveja Budweiser em lata. Consulte a disponibilidade no estabelecimento.' },
    { id: 'jack-daniels', nome: 'Jack Daniel’s', categoria: 'whisky', tipo: 'Whisky', volume: '1 litro', preco: 149.90, imagem: 'assets/jack-daniels.jpg', cor: 'yellow', descricao: 'Whisky Jack Daniel’s Old No. 7. Preço por garrafa. Consulte a disponibilidade no estabelecimento.' },
    { id: 'absolut', nome: 'Absolut Vodka', categoria: 'vodka', tipo: 'Vodka', volume: '1 litro', preco: 89.90, imagem: 'assets/absolut.png', cor: 'blue', descricao: 'Vodka Absolut Original. Preço por garrafa. Consulte a disponibilidade no estabelecimento.' },
    { id: 'red-bull', nome: 'Red Bull', categoria: 'energeticos', tipo: 'Energético', volume: '250 ml', preco: 10.99, imagem: 'assets/red-bull.jpg', cor: 'purple', descricao: 'Energético Red Bull Original em lata. Consulte a disponibilidade no estabelecimento.' },
    { id: 'coca-cola', nome: 'Coca-Cola', categoria: 'refrigerantes', tipo: 'Refrigerante', volume: '2 litros', preco: 12.99, imagem: 'assets/coca-cola.jpg', cor: 'orange', descricao: 'Refrigerante Coca-Cola em garrafa PET. Consulte a disponibilidade no estabelecimento.' }
  ]
};
