# Identidade visual

Baseada no logo enviado pelo cliente (`assets/img/logo-original.jpg`): símbolo e nome em branco sobre fundo azul com padrão de circuito.

## Cores

| Uso | Cor | Variável CSS |
| --- | --- | --- |
| Principal (azul do logo) | `#2F5A8C` | `--cor-principal` |
| Principal escura (rodapé, hover) | `#22446C` | `--cor-principal-escura` |
| Destaque (linhas do circuito) | `#3D86C6` | `--cor-destaque` |
| Destaque clara (menu ativo) | `#A9D1F2` | `--cor-destaque-clara` |
| Texto | `#1F2933` | `--cor-texto` |
| Fundo | `#FFFFFF` | `--cor-fundo` |
| Fundo alternativo | `#EEF3F8` | `--cor-fundo-alt` |

As variáveis ficam no topo de `assets/css/style.css`. Mudando ali, o site inteiro muda.

O azul de destaque (`#3D86C6`) não tem contraste suficiente para texto branco pequeno. Use-o em bordas e detalhes, e use `--cor-principal` para botões com texto branco.

## Tipografia

- Fonte: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts).

## Arquivos do logo

Todos em `assets/img/`. As versões em PNG foram recortadas do logo original, com fundo transparente e desenho em branco, por isso só funcionam sobre fundo escuro.

| Arquivo | Uso |
| --- | --- |
| `logo-original.jpg` | Arte original enviada pelo cliente |
| `logo-horizontal.png` | Cabeçalho do site (símbolo ao lado do nome) |
| `logo-vertical.png` | Destaque na página inicial |
| `favicon.png` | Ícone da aba do navegador |
| `fundo-circuito.jpg` | Fundo com o padrão de circuito |

Se o cliente tiver o logo em vetor (SVG, AI ou PDF), vale substituir os PNGs para ter mais nitidez.
