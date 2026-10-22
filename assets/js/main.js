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
  ".secao-cabeca > *, .carrossel, .passos li, .comparativo > div, .tabela thead, .tabela tbody tr, .faq-intro, .faq-lista, .instagram-texto, .instagram-feed, .chamada .container > *, .contato-item, .mapa, .faixa .container > *"
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
    const irmaos = [...alvo.parentElement.children].filter((el) => el.matches(".secao-cabeca > *, .passos li, .comparativo > *, .tabela tbody tr, .faq > *, .instagram > *, .chamada .container > *, .contato-item, .faixa .container > *"));
    const posicao = irmaos.indexOf(alvo);
    if (posicao > 0) alvo.style.setProperty("--atraso", `${Math.min(posicao, 5) * 0.12}s`);
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

  // A caixa de texto cresce sozinha conforme a pessoa escreve
  const caixa = balao.querySelector("textarea");
  const ajustarAltura = () => {
    caixa.style.height = "auto";
    caixa.style.height = `${caixa.scrollHeight}px`;
  };
  caixa.addEventListener("input", ajustarAltura);

  const abrir = () => {
    balao.classList.add("aberto");
    whatsapp.setAttribute("aria-expanded", "true");
    ajustarAltura();
  };
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

// Próximo vencimento do DAS (Simples Nacional): todo dia 20, ou o próximo
// dia útil quando o dia 20 cai em fim de semana ou feriado nacional
const vencimento = document.querySelector(".vencimento");
if (vencimento) {
  const pascoa = (ano) => {
    const a = ano % 19, b = Math.floor(ano / 100), c = ano % 100;
    const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const mes = Math.floor((h + l - 7 * m + 114) / 31), dia = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(ano, mes - 1, dia);
  };
  const chave = (data) => `${data.getMonth() + 1}-${data.getDate()}`;
  const feriados = (ano) => {
    const lista = new Set(["1-1", "4-21", "5-1", "9-7", "10-12", "11-2", "11-15", "11-20", "12-25"]);
    const p = pascoa(ano);
    // Carnaval (segunda e terça), Sexta-feira Santa e Corpus Christi
    [-48, -47, -2, 60].forEach((dias) => lista.add(chave(new Date(ano, p.getMonth(), p.getDate() + dias))));
    return lista;
  };
  const diaUtil = (data) => {
    while (data.getDay() === 0 || data.getDay() === 6 || feriados(data.getFullYear()).has(chave(data))) {
      data.setDate(data.getDate() + 1);
    }
    return data;
  };
  const agora = new Date();
  const hoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
  let proximo = diaUtil(new Date(hoje.getFullYear(), hoje.getMonth(), 20));
  if (proximo < hoje) proximo = diaUtil(new Date(hoje.getFullYear(), hoje.getMonth() + 1, 20));
  const faltam = Math.round((proximo - hoje) / 86400000);
  vencimento.querySelector(".vencimento-data").textContent =
    proximo.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });
  vencimento.querySelector(".vencimento-falta").textContent =
    faltam === 0 ? "Vence hoje" : faltam === 1 ? "Falta 1 dia" : `Faltam ${faltam} dias`;
}

if (!poucoMovimento) {
  // Título da página inicial: cada palavra surge um pouco depois da anterior
  const titulo = document.querySelector(".hero h1");
  if (titulo) {
    titulo.setAttribute("aria-label", titulo.textContent);
    titulo.innerHTML = titulo.textContent.trim().split(/\s+/)
      .map((palavra, i) => `<span class="palavra" aria-hidden="true" style="--i:${i}">${palavra}</span>`).join(" ");
  }

  // "Como funciona": a barra se acende quando a seção aparece na tela
  const passos = document.querySelector(".passos");
  if (passos && "IntersectionObserver" in window) {
    new IntersectionObserver((entradas, obs) => {
      if (entradas[0].isIntersecting) { passos.classList.add("acesa"); obs.disconnect(); }
    }, { threshold: 0.4 }).observe(passos);
  }

  // Sinais de luz correndo pelas linhas do circuito das faixas azuis
  const faixas = document.querySelectorAll(".hero, .topo");
  if (faixas.length) {
    const arquivo = new URL("../img/circuito.svg", document.currentScript.src).href;
    fetch(arquivo).then((r) => r.text()).then((texto) => {
      const modelo = new DOMParser().parseFromString(texto, "image/svg+xml").documentElement;
      const caminhos = [...modelo.querySelectorAll("path")];
      faixas.forEach((faixa) => {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", modelo.getAttribute("viewBox"));
        svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
        svg.setAttribute("class", "circuito-vivo");
        svg.setAttribute("aria-hidden", "true");
        faixa.prepend(svg);
        const quantos = window.innerWidth < 720 ? 6 : 12;
        const escolhidos = [...caminhos].sort(() => Math.random() - 0.5).slice(0, quantos);
        escolhidos.forEach((original) => {
          const linha = document.createElementNS("http://www.w3.org/2000/svg", "path");
          linha.setAttribute("d", original.getAttribute("d"));
          svg.appendChild(linha);
          const tamanho = linha.getTotalLength();
          const traco = 60;
          linha.style.strokeDasharray = `${traco} ${tamanho + traco}`;
          linha.style.strokeDashoffset = traco;
          // O sinal percorre a linha na primeira metade do tempo e descansa na outra
          linha.animate(
            [{ strokeDashoffset: traco, offset: 0 }, { strokeDashoffset: -tamanho, offset: 0.5 }, { strokeDashoffset: -tamanho, offset: 1 }],
            { duration: 5000 + Math.random() * 5000, delay: Math.random() * 6000, iterations: Infinity }
          );
        });
      });
    }).catch(() => {});
  }
}

// Perguntas frequentes: só uma resposta aberta por vez, e ela desce ao abrir
// e sobe ao fechar
const perguntas = [...document.querySelectorAll(".faq details")];
const animarPergunta = (pergunta, abrir) => {
  const resumo = pergunta.querySelector("summary");
  if (pergunta._animacao) pergunta._animacao.cancel();
  if (poucoMovimento) { pergunta.open = abrir; return; }
  const inicio = pergunta.offsetHeight;
  if (abrir) pergunta.open = true;
  const fim = abrir ? pergunta.scrollHeight : resumo.offsetHeight;
  pergunta.style.overflow = "hidden";
  const animacao = pergunta.animate(
    [{ height: `${inicio}px` }, { height: `${fim}px` }],
    { duration: 300, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)" }
  );
  pergunta._animacao = animacao;
  animacao.onfinish = () => {
    if (!abrir) pergunta.open = false;
    pergunta.style.overflow = "";
    pergunta._animacao = null;
  };
};
perguntas.forEach((pergunta) => {
  pergunta.querySelector("summary").addEventListener("click", (e) => {
    e.preventDefault();
    const abrir = !pergunta.open || pergunta._animacao?.fechando;
    if (abrir) {
      perguntas.forEach((outra) => { if (outra !== pergunta && outra.open) animarPergunta(outra, false); });
    }
    animarPergunta(pergunta, abrir);
    if (pergunta._animacao) pergunta._animacao.fechando = !abrir;
  });
});
