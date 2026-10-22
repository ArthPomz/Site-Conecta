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
    return cartao ? cartao.offsetWidth + 8 : trilho.clientWidth;
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
  ".secao-cabeca > *, .carrossel, .passos li, .comparativo > *, .faq-intro, .faq-lista, .instagram-texto, .instagram-feed, .chamada .container > *, .contato-item, .mapa, .faixa .container > *"
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
    const irmaos = [...alvo.parentElement.children].filter((el) => el.matches(".secao-cabeca > *, .passos li, .comparativo > *, .faq > *, .instagram > *, .chamada .container > *, .contato-item, .faixa .container > *"));
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

// Balão do WhatsApp: abre sozinho quando a pessoa chega ao fim da página,
// com uma mensagem pronta que ela pode editar antes de enviar
const whatsapp = document.querySelector(".whatsapp");
if (whatsapp) {
  const numero = "5527996970273";
  const icone = new URL("../img/favicon.png", document.currentScript.src).href;
  const balao = document.createElement("div");
  balao.className = "whatsapp-balao";
  balao.setAttribute("role", "dialog");
  balao.setAttribute("aria-label", "Conversar no WhatsApp");
  balao.innerHTML = `
    <div class="whatsapp-balao-topo">
      <img src="${icone}" alt="">
      <div><strong>Conecta Gestão Contábil</strong><span>WhatsApp</span></div>
      <button class="whatsapp-balao-fechar" type="button" aria-label="Fechar">&times;</button>
    </div>
    <form>
      <p class="whatsapp-balao-fala">Olá! Como podemos ajudar a sua empresa?</p>
      <label class="sr-only" for="whatsapp-mensagem">Sua mensagem</label>
      <textarea id="whatsapp-mensagem">Olá! Vim pelo site da Conecta e gostaria de falar com um contador.</textarea>
      <button class="botao botao-primario" type="submit">Enviar no WhatsApp</button>
    </form>`;
  document.body.appendChild(balao);

  const abrir = () => { balao.classList.add("aberto"); whatsapp.setAttribute("aria-expanded", "true"); };
  const fechar = () => { balao.classList.remove("aberto"); whatsapp.setAttribute("aria-expanded", "false"); };
  let fechadoPelaPessoa = false;

  whatsapp.addEventListener("click", (e) => {
    e.preventDefault();
    balao.classList.contains("aberto") ? fechar() : abrir();
  });
  balao.querySelector(".whatsapp-balao-fechar").addEventListener("click", () => {
    fechadoPelaPessoa = true;
    fechar();
  });
  balao.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = balao.querySelector("textarea").value.trim();
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
  });

  // Abre uma vez ao chegar perto do fim da página (se a pessoa não tiver fechado)
  window.addEventListener("scroll", () => {
    const noFim = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40;
    if (noFim && !fechadoPelaPessoa && !balao.classList.contains("aberto")) abrir();
  }, { passive: true });
}
