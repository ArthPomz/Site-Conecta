# Identidade visual

Baseada no logo da Conecta. A versão atual, atualizada em outubro de 2026, é `assets/img/logo-original-novo.png`: o símbolo "C" com um círculo, e ao lado "CONECTA" com "GESTÃO CONTÁBIL" embaixo, em branco sobre azul escuro. O logo antigo (`logo-original.jpg`) fica guardado como referência.

## Cores

| Uso | Cor | Variável CSS |
| --- | --- | --- |
| Azul do logo (faixas do topo, passos, Instagram) | `#2F5A8C` | `--azul` |
| Azul escuro (primeiro passo, cabeçalho da tabela) | `#1B3557` | `--azul-escuro` |
| Azul médio (último passo, marcadores das listas) | `#3A6EA8` | `--azul-medio` |
| Ciano (botões principais e faixa "Vamos conversar") | `#5CC8FF` | `--ciano` |
| Texto sobre o ciano | `#0E1A2B` | `--noite` |

Essas cores da marca valem nos dois modos. As que mudam com o tema:

| Uso | Modo claro | Modo escuro (padrão) | Variável CSS |
| --- | --- | --- | --- |
| Fundo | `#FFFFFF` | `#0E1A2B` | `--fundo` |
| Superfície (cartões, faixas alternadas) | `#EEF3F9` | `#15273F` | `--superficie` |
| Superfície ao passar o mouse | `#E1EAF4` | `#1C3250` | `--superficie-forte` |
| Texto | `#14243A` | `#E8EEF5` | `--texto` |
| Texto suave | `#4A5563` | `#A9B8CA` | `--texto-suave` |
| Links | `#2F5A8C` | `#8BC4F2` | `--link` |
| Rodapé | `#1B3557` | `#08121F` | `--rodape` |

As variáveis ficam no topo de `assets/css/style.css` (modo claro) e no bloco `[data-tema="escuro"]` (modo escuro). Mudando ali, o site inteiro muda. O ciano sempre leva texto escuro (`--noite`).

## Estilo visual

Revisado em outubro de 2026 com a skill `design-taste-frontend` (pasta `.claude/skills/`), para o site ficar com menos "cara de site feito por IA". A ideia principal continua a mesma; o que mudou:

- Cores chapadas: nada de degradê, sombra em blocos parados ou linhas finas separando as coisas. As áreas se separam por um degrau de cor (fundo e superfície).
- Títulos em uma só cor, sem palavras coloridas nem ponto final colorido.
- Botões sempre em formato de pílula; blocos com cantos retos.
- Faixa azul com o circuito no topo de todas as páginas; o circuito corre devagar no fundo.
- Cartões de serviço sem ícones; "Como funciona" virou três faixas lado a lado, do azul mais escuro ao mais claro (a ordem aparece pela cor, sem números).
- Páginas de Serviços e "O que é a Conecta": um assunto por faixa, com o título à esquerda e o texto à direita.
- "Vamos conversar" virou uma faixa inteira em ciano, o único bloco grande na cor de destaque.
- Rodapé com títulos em letras normais (sem caixa alta pequena).
- No menu, "eContador" abre o portal eContador (Alterdata) em uma nova aba.

Para conferir o site com a skill: `node .claude/skills/design-taste-frontend/scripts/lint.mjs index.html pages assets` e `node .claude/skills/design-taste-frontend/scripts/inspect.mjs index.html`. A pasta `.taste-skill/` que ela cria não vai para o repositório.

O que ainda falta segundo a skill: fotos de verdade (do escritório, da equipe, de Fundão). Quando houver, elas são a melhoria que mais faria diferença.

## Modo noturno

O site abre no modo noturno por padrão. O botão com o sol, no cabeçalho, troca para o modo claro, e a lua volta para o escuro. A escolha fica salva no navegador. No escuro, o logo do cabeçalho fica branco.

## Tipografia

- Títulos: [League Spartan](https://fonts.google.com/specimen/League+Spartan), peso 700.
- Textos: [Figtree](https://fonts.google.com/specimen/Figtree), pesos 400 e 600.
- As duas ficam dentro do site, em `assets/fonts/` (licença livre OFL, arquivos de licença na mesma pasta), então não dependem do Google Fonts.
- Cinco tamanhos no site todo: `--t-pequeno`, `--t-texto`, `--t-destaque`, `--t-titulo` e `--t-gigante`.

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
| `circuito.svg` | Padrão de circuito em vetor (nítido em qualquer tela), fundo transparente, usado sobre o azul do logo nas faixas do topo e no cartão do Instagram |
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

## Instagram

O link para o Instagram aparece no rodapé de todas as páginas, na página de contato e na faixa "Vamos conversar" da página inicial. O perfil é [@conectacontabilfundao](https://www.instagram.com/conectacontabilfundao/). Se o usuário mudar, procure `conectacontabilfundao` nos arquivos `.html` e troque.

### Posts do Instagram na página inicial

A página inicial tem uma seção "Acompanhe a Conecta no Instagram". Por enquanto ela mostra um cartão com o perfil e um botão para seguir. Para os posts aparecerem sozinhos, é preciso um serviço de widget de Instagram (por exemplo Behold, LightWidget ou SnapWidget). Alguém com acesso à conta da Conecta faz login no serviço, conecta o Instagram e copia o código que ele gera. Esse código entra no `index.html`, no lugar do cartão marcado com o comentário "Posts do Instagram". Depois disso, cada post novo aparece no site sem precisar mexer em nada.
