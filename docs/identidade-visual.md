# Identidade visual

Baseada no logo da Conecta. A versão atual, atualizada em outubro de 2026, é `assets/img/logo-original-novo.png`: o símbolo "C" com um círculo, e ao lado "CONECTA" com "GESTÃO CONTÁBIL" embaixo, em branco sobre azul escuro. O logo antigo (`logo-original.jpg`) fica guardado como referência.

## Cores

| Uso | Cor | Variável CSS |
| --- | --- | --- |
| Principal (azul do logo) | `#2F5A8C` | `--cor-principal` |
| Principal escura (rodapé, hover) | `#1B3557` | `--cor-principal-escura` |
| Vibrante (botões principais, ponto dos títulos) | `#5CC8FF` | `--cor-vibrante` |
| Destaque (linhas do circuito) | `#3D86C6` | `--cor-destaque` |
| Destaque clara (menu ativo) | `#A9D1F2` | `--cor-destaque-clara` |
| Texto | `#1F2933` | `--cor-texto` |
| Texto suave | `#4A5563` | `--cor-texto-suave` |
| Fundo | `#FFFFFF` | `--cor-fundo` |
| Fundo alternativo | `#F4F7FB` | `--cor-fundo-alt` |

As variáveis ficam no topo de `assets/css/style.css`. Mudando ali, o site inteiro muda.

O azul de destaque (`#3D86C6`) não tem contraste suficiente para texto branco pequeno. Use-o em palavras destacadas dos títulos e em detalhes. O azul vibrante (`#5CC8FF`) sempre leva texto escuro (`--cor-principal-escura`).

## Estilo visual

Inspirado no visual de sites de contabilidade digital (referência dada pelo cliente: Contabilizei), sem copiar textos nem telas:

- Cabeçalho branco com o logo em azul e botão "Fale conosco" em pílula.
- Títulos grandes em negrito, com palavras destacadas em azul e um ponto final na cor vibrante.
- Botões em formato de pílula: cheio (vibrante) e contorno (azul).
- Página inicial com uma faixa de circuito de borda a borda: texto branco à esquerda e o logo à direita. No modo escuro, a parte de baixo da faixa se mistura com o fundo da página (variável `--hero-fundo`).
- Cartões com fundo em degradê azul-claro, cantos de 16px e ícones de linha.
- Seções: serviços, como funciona, comparativo, perguntas frequentes e faixa de chamada.
- Rodapé azul-escuro com colunas de links.
- No menu, "eContador" abre o portal eContador (Alterdata) em uma nova aba.

## Modo noturno

O site abre no modo noturno por padrão. O botão com o sol, no cabeçalho, troca para o modo claro, e a lua volta para o escuro. A escolha fica salva no navegador.

As cores do modo escuro ficam no bloco `[data-tema="escuro"]` em `assets/css/style.css`:

| Uso | Cor |
| --- | --- |
| Fundo | `#0E1A2B` |
| Fundo alternativo | `#13233A` |
| Cartões e caixas | `#172A44` |
| Texto | `#E6EDF5` |
| Texto suave | `#A9B8CA` |
| Destaque (links e palavras dos títulos) | `#6BB2EC` |
| Rodapé | `#08121F` |

O azul do logo, o azul vibrante dos botões e o painel de circuito continuam iguais nos dois modos. No escuro, o logo do cabeçalho fica branco.

## Tipografia

- Fonte: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts).

## Arquivos do logo

Todos em `assets/img/`. As versões em SVG são vetoriais, então ficam nítidas em qualquer tamanho. As brancas só funcionam sobre fundo escuro.

| Arquivo | Uso |
| --- | --- |
| `logo-original-novo.png` | Logo atual enviado pelo cliente (outubro de 2026) |
| `logo-original.jpg` | Logo antigo, guardado como referência |
| `logo-horizontal.svg` | Versão branca (símbolo + "CONECTA"), usada no rodapé |
| `logo-horizontal-azul.svg` | Versão azul (símbolo + "CONECTA"), usada no cabeçalho |
| `logo-completo.svg` | Versão branca completa, com "GESTÃO CONTÁBIL" ao lado do símbolo |
| `logo-vertical.svg` | Símbolo em cima e o nome embaixo, usada no topo da página inicial e nas perguntas frequentes |
| `icone.svg` | Símbolo branco em um quadrado azul arredondado, base do ícone |
| `favicon.png` | Ícone da aba do navegador e do balão do WhatsApp (gerado a partir de `icone.svg`) |
| `circuito.svg` | Padrão de circuito em vetor (nítido em qualquer tela), usado na faixa da página inicial e nas perguntas frequentes |
| `fundo-circuito.jpg` | Recorte do circuito do logo original (não usado mais, fica como referência) |

O logo novo chegou em uma imagem pequena (296x96 pixels). Para ficar nítido, ele foi redesenhado em vetor: o símbolo foi refeito com círculos ajustados à imagem original, e as letras usam a fonte Montserrat (licença livre, OFL) convertida em contorno. Se o cliente tiver o arquivo oficial em vetor (SVG, AI ou PDF), vale trocar pelos oficiais.

## Animações

Animações leves para o site parecer mais fluido. O código fica no fim de `assets/css/style.css` e de `assets/js/main.js`.

- O topo da página inicial entra com o texto subindo aos poucos, e o logo flutua devagar.
- Títulos, cartões, passos, tabela e perguntas surgem suavemente quando aparecem na tela. Itens lado a lado aparecem um depois do outro.
- Cartões e passos sobem um pouco ao passar o mouse. O botão do WhatsApp cresce um pouco.
- A troca entre modo claro e escuro muda as cores com suavidade.
- O cabeçalho ganha uma sombra quando a página rola.
- Quem ativa "reduzir movimento" no celular ou no computador vê o site sem animações.

## Balão do WhatsApp

O botão redondo do WhatsApp, no canto da tela, abre um balão de conversa. Ele abre sozinho uma vez quando a pessoa chega ao fim da página, e também ao tocar no botão. O balão traz uma mensagem pronta, que a pessoa pode editar. Ao tocar em "Enviar no WhatsApp", abre o WhatsApp da Conecta, (27) 99697-0273, com a mensagem já escrita. Se a pessoa fechar o balão, ele não abre sozinho de novo naquela página.

O texto da mensagem pronta e o número ficam em `assets/js/main.js`, na parte "Balão do WhatsApp".
