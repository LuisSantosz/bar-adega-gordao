(() => {
  'use strict';
  const { loja, produtos, categorias } = window.CATALOGO;
  const $ = (id) => document.getElementById(id);
  const state = { category: 'todos', query: '', sort: 'default' };
  const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  const normalize = (value) => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const safeImage = (value) => /^(assets\/[a-zA-Z0-9_./-]+)$/.test(value) && !value.includes('..') ? value : 'assets/favicon.svg';
  const colors = new Set(['lime', 'pink', 'yellow', 'blue', 'purple', 'orange']);
  const colorClass = (color) => colors.has(color) ? color : 'blue';

  // Registros inválidos não quebram a consulta dos outros produtos.
  const validProducts = produtos.filter((p) => p.id && p.nome && (p.preco === null || (Number.isFinite(p.preco) && p.preco >= 0)));
  const searchIndex = new Map(validProducts.map((p) => [p, normalize(`${p.nome} ${p.tipo} ${p.volume} ${categorias.find((c) => c.id === p.categoria)?.nome || ''}`)]));
  let searchTimer;
  function getVisibleProducts() {
    const query = normalize(state.query.trim());
    const result = validProducts.filter((p) => (state.category === 'todos' || p.categoria === state.category) && searchIndex.get(p).includes(query));
    if (state.sort === 'price-asc') result.sort((a, b) => (a.preco ?? Infinity) - (b.preco ?? Infinity));
    if (state.sort === 'price-desc') result.sort((a, b) => (b.preco ?? -Infinity) - (a.preco ?? -Infinity));
    if (state.sort === 'name') result.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
    return result;
  }
  function productCard(product) {
    const hasPrice = Number.isFinite(product.preco);
    const price = hasPrice ? product.preco.toFixed(2).split('.') : [];
    const category = categorias.find((c) => c.id === product.categoria)?.nome || 'Bebida';
    return `<div class="col-6 col-lg-4 product-grid-col"><article class="card product-card color-${colorClass(product.cor)}">
      <div class="product-art"><span class="product-badge">${escape(category)}</span><img class="product-image" src="${safeImage(product.imagem)}" alt="${escape(product.nome)} — ${escape(product.volume)}" width="300" height="300" loading="lazy" decoding="async"></div>
      <div class="card-body product-body"><span class="product-type">${escape(product.tipo)} <span aria-hidden="true">/</span> ${escape(product.volume)}</span><h3>${escape(product.nome)}</h3><div class="price-line"><span class="price" aria-label="${hasPrice ? escape(brl.format(product.preco)) : 'Preço a consultar'}">${hasPrice ? `<span class="currency" aria-hidden="true">R$</span><span aria-hidden="true">${Number(price[0]).toLocaleString('pt-BR')}<small>,${price[1]}</small></span>` : '<small>Consulte</small>'}</span><span class="price-unit">${loja.demonstracao ? 'demonstrativo' : 'por unidade'}</span></div><button type="button" class="product-more" data-product="${escape(product.id)}" aria-label="Ver detalhes de ${escape(product.nome)}">Ver detalhes ${icon('diagonal')}</button></div>
      </article></div>`;
  }
  function render() {
    clearTimeout(searchTimer);
    const visible = getVisibleProducts();
    $('productGrid').innerHTML = visible.map(productCard).join('');
    $('emptyState').hidden = visible.length !== 0;
    $('resultCount').innerHTML = `<strong>${visible.length}</strong> ${visible.length === 1 ? 'produto encontrado' : 'produtos encontrados'}${loja.demonstracao ? ' · demonstração' : ''}`;
    document.querySelectorAll('[data-category]').forEach((button) => {
      const active = button.dataset.category === state.category;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    $('productGrid').querySelectorAll('img').forEach((img) => {
      img.addEventListener('error', () => { img.src = 'assets/favicon.svg'; img.alt = 'Imagem do produto indisponível'; }, { once: true });
    });
  }

  $('categoryList').innerHTML = categorias.map((category) => `<button type="button" class="category-btn${category.id === state.category ? ' active' : ''}" data-category="${escape(category.id)}" aria-pressed="${category.id === state.category}">${icon(category.icone)}${escape(category.nome)}</button>`).join('');
  $('categoryList').addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    state.category = button.dataset.category;
    render();
  });
  $('productSearch').addEventListener('input', (event) => {
    state.query = event.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(render, 120);
  });
  $('productSort').addEventListener('change', (event) => { state.sort = event.target.value; render(); });
  $('resetFilters').addEventListener('click', () => {
    state.category = 'todos'; state.query = ''; state.sort = 'default';
    $('productSearch').value = ''; $('productSort').value = 'default';
    render(); $('productSearch').focus();
  });

  // Modal Bootstrap: o catálogo não possui carrinho nem processa pagamentos.
  const productModal = new bootstrap.Modal($('productModal'));
  let lastProductButton = null;
  $('productGrid').addEventListener('click', (event) => {
    const button = event.target.closest('[data-product]');
    if (!button) return;
    const product = validProducts.find((p) => p.id === button.dataset.product);
    if (!product) return;
    lastProductButton = button;
    $('productModalTitle').textContent = product.nome;
    $('modalProductImage').src = safeImage(product.imagem);
    $('modalProductImage').alt = `${product.nome}, ${product.volume}`;
    $('modalArt').className = `modal-product-art color-${colorClass(product.cor)}`;
    $('modalProductType').textContent = `${product.tipo} / ${product.volume}`;
    $('modalProductDescription').textContent = product.descricao;
    $('modalProductPrice').textContent = Number.isFinite(product.preco) ? brl.format(product.preco) : 'Preço a consultar';
    productModal.show();
  });
  $('productModal').addEventListener('hidden.bs.modal', () => { lastProductButton?.focus(); });
  $('modalProductImage').addEventListener('error', (event) => {
    if (!event.target.src.endsWith('/assets/favicon.svg')) { event.target.src = 'assets/favicon.svg'; event.target.alt = 'Imagem indisponível'; }
  });

  $('paymentCard').addEventListener('click', () => {
    const flipped = $('paymentCard').classList.toggle('flipped');
    $('paymentCard').setAttribute('aria-expanded', String(flipped));
    $('paymentCard').setAttribute('aria-label', flipped ? 'Formas aceitas: crédito, débito, Pix e dinheiro. Voltar à frente do cartão.' : 'Mostrar formas de pagamento');
    $('paymentFront').setAttribute('aria-hidden', String(flipped));
    $('paymentBack').setAttribute('aria-hidden', String(!flipped));
  });
  $('paymentConditions').textContent = loja.observacaoPagamento;

  // Interações de contato usam somente dados cadastrados da própria adega.
  const infoModal = new bootstrap.Modal($('infoModal'));
  let lastInfoButton = null;
  function showInfo(title, message, button) {
    lastInfoButton = button;
    $('infoModalTitle').textContent = title;
    $('infoModalText').textContent = message;
    infoModal.show();
  }
  $('infoModal').addEventListener('hidden.bs.modal', () => { lastInfoButton?.focus(); });
  function configureContact(id, url, label, title, missing) {
    const button = $(id);
    if (url) {
      const link = document.createElement('a');
      link.className = button.className; link.id = id; link.href = url;
      link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.innerHTML = `${escape(label)} ${icon('diagonal')}`;
      button.replaceWith(link);
    } else {
      button.addEventListener('click', () => showInfo(title, missing, button));
    }
  }
  const phone = String(loja.whatsapp || '').replace(/\D/g, '');
  const instagram = String(loja.instagram || '').trim().replace(/^@/, '');
  const phoneValid = /^\d{10,15}$/.test(phone);
  const instagramValid = /^[A-Za-z0-9._]{1,30}$/.test(instagram);
  configureContact('whatsappButton', phoneValid ? `https://wa.me/${phone}?text=${encodeURIComponent('Olá! Vi o catálogo do Bar e Adega do Gordão e gostaria de tirar uma dúvida.')}` : '', 'Conversar no WhatsApp', 'WhatsApp em breve', 'O número oficial do Bar e Adega do Gordão ainda não foi cadastrado nesta prévia.');
  configureContact('instagramButton', instagramValid ? `https://www.instagram.com/${encodeURIComponent(instagram)}/` : '', instagram ? `@${instagram}` : 'Ver Instagram', 'Instagram em breve', 'O perfil oficial do Bar e Adega do Gordão ainda não foi cadastrado nesta prévia.');
  const address = [loja.endereco, loja.cidade].filter(Boolean).join(' — ');
  configureContact('mapButton', loja.endereco ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` : '', 'Abrir no Google Maps', 'Endereço em breve', 'O endereço do Bar e Adega do Gordão ainda não foi cadastrado nesta prévia.');
  if (loja.endereco) $('addressText').textContent = loja.endereco;
  if (loja.endereco || loja.cidade) $('cityText').textContent = loja.cidade || '';
  if (loja.horario) $('hoursText').textContent = loja.horario;
  if (!loja.demonstracao) {
    $('catalogNote').textContent = 'Preços por unidade. Confirme os valores e a disponibilidade no estabelecimento.';
    $('modalDemoNote').textContent = 'Confirme o valor e a disponibilidade no estabelecimento.';
    document.querySelector('meta[name="description"]').content = 'Conheça o catálogo do Bar e Adega do Gordão. Consulte bebidas, preços, formas de pagamento e contatos.';
  }

  // Modo leve para telas pequenas e aparelhos com interação por toque.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window) {
    const effectsObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => target.classList.toggle('effects-offscreen', !isIntersecting));
    });
    document.querySelectorAll('.hero, .ticker').forEach((element) => effectsObserver.observe(element));
  }
  let manualMotionChoice = null;
  let motionPaused = reducedMotion.matches;
  try { const saved = localStorage.getItem('gordao-motion-paused'); if (saved !== null) { manualMotionChoice = saved === 'true'; motionPaused = manualMotionChoice || reducedMotion.matches; } } catch { /* preferência é opcional */ }
  function setMotion(paused) {
    motionPaused = paused;
    document.body.classList.toggle('motion-paused', paused || document.hidden);
    $('motionToggle').setAttribute('aria-pressed', String(paused));
    $('motionToggle').disabled = reducedMotion.matches;
    $('motionToggle').innerHTML = `${icon(paused ? 'play' : 'pause')}<span>${paused ? 'Ativar animações' : 'Pausar animações'}</span>`;
    if (reducedMotion.matches) { $('motionToggle').innerHTML = `${icon('pause')}<span>Movimento reduzido</span>`; $('motionToggle').title = 'A preferência de movimento reduzido do seu dispositivo está ativada.'; }
  }
  $('motionToggle').addEventListener('click', () => {
    if (reducedMotion.matches) return;
    manualMotionChoice = !motionPaused; setMotion(manualMotionChoice);
    try { localStorage.setItem('gordao-motion-paused', String(manualMotionChoice)); } catch { /* navegação continua sem armazenamento */ }
  });
  reducedMotion.addEventListener('change', () => {
    setMotion(reducedMotion.matches || Boolean(manualMotionChoice));
  });
  document.addEventListener('visibilitychange', () => { document.body.classList.toggle('motion-paused', document.hidden || motionPaused); });
  setMotion(motionPaused);
  render();
})();

