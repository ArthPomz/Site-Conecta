// Abre e fecha o menu no celular
const botao = document.querySelector(".menu-botao");
const menu = document.querySelector(".menu");

if (botao && menu) {
  botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", aberto);
  });
}

// Ano atual no rodapé
const ano = document.querySelector("#ano");
if (ano) ano.textContent = new Date().getFullYear();

// Carrossel de serviços: as setas passam um cartão por vez
document.querySelectorAll(".carrossel").forEach((carrossel) => {
  const trilho = carrossel.querySelector(".carrossel-trilho");
  const anterior = carrossel.querySelector(".anterior");
  const proximo = carrossel.querySelector(".proximo");

  const passo = () => {
    const cartao = trilho.querySelector(".cartao");
    return cartao ? cartao.offsetWidth + 24 : trilho.clientWidth;
  };

  const atualizarSetas = () => {
    anterior.disabled = trilho.scrollLeft <= 8;
    proximo.disabled = trilho.scrollLeft + trilho.clientWidth >= trilho.scrollWidth - 8;
  };

  anterior.addEventListener("click", () => trilho.scrollBy({ left: -passo() }));
  proximo.addEventListener("click", () => trilho.scrollBy({ left: passo() }));
  trilho.addEventListener("scroll", atualizarSetas, { passive: true });
  window.addEventListener("resize", atualizarSetas);
  atualizarSetas();
});

// Modo noturno: o botão alterna o tema e a escolha fica salva no navegador
const temaBotao = document.querySelector(".tema-botao");
if (temaBotao) {
  const aplicarTema = (tema) => {
    document.documentElement.dataset.tema = tema;
    temaBotao.setAttribute("aria-label", tema === "escuro" ? "Ativar modo claro" : "Ativar modo noturno");
  };
  aplicarTema(document.documentElement.dataset.tema || "escuro");
  temaBotao.addEventListener("click", () => {
    const novo = document.documentElement.dataset.tema === "escuro" ? "claro" : "escuro";
    aplicarTema(novo);
    try { localStorage.setItem("tema", novo); } catch (e) {}
  });
}

// Animações: os blocos surgem suavemente quando aparecem na tela
const alvos = document.querySelectorAll(
  ".secao-cabeca, .carrossel, :not(.carrossel-trilho) > .cartao, .passo, .tabela, .faq-painel, .faq-caixa, .chamada, .contato-item, .mapa, .topo .titulo, .topo .subtitulo, .topo .texto"
);
const poucoMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !poucoMovimento) {
  document.documentElement.classList.add("animar");
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      const alvo = entrada.target;
      alvo.classList.add("visivel");
      observador.unobserve(alvo);
      // Depois de aparecer, o bloco volta ao normal (e o efeito do mouse funciona)
      const atraso = parseFloat(alvo.style.getPropertyValue("--atraso")) || 0;
      setTimeout(() => {
        alvo.classList.remove("revelar", "visivel");
        alvo.style.removeProperty("--atraso");
      }, (atraso + 0.8) * 1000);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  alvos.forEach((alvo) => {
    // Itens lado a lado aparecem um depois do outro
    const irmaos = [...alvo.parentElement.children].filter((el) => el.matches(".cartao, .passo, .contato-item"));
    const posicao = irmaos.indexOf(alvo);
    if (posicao > 0) alvo.style.setProperty("--atraso", `${Math.min(posicao, 3) * 0.12}s`);
    alvo.classList.add("revelar");
    observador.observe(alvo);
  });
}

// Cabeçalho ganha uma sombra depois que a página rola
const cabecalho = document.querySelector(".cabecalho");
if (cabecalho) {
  const marcarRolagem = () => cabecalho.classList.toggle("rolado", window.scrollY > 8);
  window.addEventListener("scroll", marcarRolagem, { passive: true });
  marcarRolagem();
}
