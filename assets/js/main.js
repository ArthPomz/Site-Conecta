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
