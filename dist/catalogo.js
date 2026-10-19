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
    { id: 'destilados', nome: 'Destilados', icone: 'bottle' },
    { id: 'energeticos', nome: 'Energéticos', icone: 'bolt' },
    { id: 'sem-alcool', nome: 'Sem álcool', icone: 'cup' }
  ],
  /* Valores ilustrativos, não são preços confirmados da adega. */
  produtos: [
    { id: 'heineken', nome: 'Heineken', categoria: 'cervejas', tipo: 'Long neck', volume: '330 ml', preco: 8.99, imagem: 'assets/heineken.jpg', cor: 'lime', descricao: 'Cerveja Heineken em garrafa long neck. Consulte a disponibilidade no estabelecimento.' },
    { id: 'budweiser', nome: 'Budweiser', categoria: 'cervejas', tipo: 'Lata', volume: '350 ml', preco: 4.99, imagem: 'assets/budweiser.jpg', cor: 'pink', descricao: 'Cerveja Budweiser em lata. Consulte a disponibilidade no estabelecimento.' },
    { id: 'jack-daniels', nome: 'Jack Daniel’s', categoria: 'destilados', tipo: 'Whisky', volume: '1 litro', preco: 149.90, imagem: 'assets/jack-daniels.jpg', cor: 'yellow', descricao: 'Whisky Jack Daniel’s Old No. 7. Preço por garrafa. Consulte a disponibilidade no estabelecimento.' },
    { id: 'absolut', nome: 'Absolut Vodka', categoria: 'destilados', tipo: 'Vodka', volume: '1 litro', preco: 89.90, imagem: 'assets/absolut.png', cor: 'blue', descricao: 'Vodka Absolut Original. Preço por garrafa. Consulte a disponibilidade no estabelecimento.' },
    { id: 'red-bull', nome: 'Red Bull', categoria: 'energeticos', tipo: 'Energético', volume: '250 ml', preco: 10.99, imagem: 'assets/red-bull.jpg', cor: 'purple', descricao: 'Energético Red Bull Original em lata. Consulte a disponibilidade no estabelecimento.' },
    { id: 'coca-cola', nome: 'Coca-Cola', categoria: 'sem-alcool', tipo: 'Refrigerante', volume: '2 litros', preco: 12.99, imagem: 'assets/coca-cola.jpg', cor: 'orange', descricao: 'Refrigerante Coca-Cola em garrafa PET. Consulte a disponibilidade no estabelecimento.' }
  ]
};
