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
