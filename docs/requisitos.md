# Requisitos do site

## Objetivo

Apresentar a Conecta, seus serviços contábeis e facilitar o contato de potenciais clientes.

## Páginas

| Página | Conteúdo |
| --- | --- |
| Início | Apresentação curta, resumo dos serviços e chamada para contato |
| Serviços | Lista completa dos serviços (ver [servicos.md](servicos.md)) |
| O que é a Conecta | História, equipe e valores da Conecta |
| Contato | Telefone, WhatsApp, e-mail, endereço e mapa |
| Política de Privacidade | Como os dados pessoais são tratados (LGPD) |
| Termos de Uso | Regras de uso do site |

## Requisitos funcionais

- [ ] Menu de navegação presente em todas as páginas.
- [ ] Botão de WhatsApp visível.
- [ ] Mapa com a localização do escritório.
- [ ] Formulário de contato (definir serviço de envio, ver [decisoes.md](decisoes.md)).

## Requisitos não funcionais

- [ ] Responsivo (celular, tablet e computador).
- [ ] Carregamento rápido.
- [ ] Acessível (contraste, textos alternativos nas imagens).
- [ ] Boas práticas de SEO (títulos, descrições, Google Meu Negócio).

## Requisitos legais (LGPD e Marco Civil)

- [x] Política de Privacidade e Termos de Uso, com link no rodapé de todas as páginas.
- [x] Aviso de cookies: conteúdo de terceiros (mapa do Google) só carrega depois do aceite, e a escolha pode ser mudada em "Preferências de cookies".
- [x] Aviso de privacidade no balão do WhatsApp.
- [x] Razão social, CNPJ e registro no CRC-ES no rodapé, na Política e nos Termos.
- [ ] Conferir se a hospedagem definitiva adiciona cookies (busque por `TODO(Arthur)` no código).
- [ ] Se for criado um formulário de contato, incluir aviso de privacidade com link para a política antes do botão de enviar.
- [ ] Se for incluído Google Analytics, Pixel ou similar, carregar com `type="text/plain" data-consentimento="terceiros"` (ver `main.js`) e listar na tabela de cookies da política.

## Pendências com o cliente

- Logo em vetor (SVG, AI ou PDF), se existir. O logo em imagem e as cores já foram recebidos.
- Fotos do escritório ou da equipe.
- Domínio (o e-mail sugere `conectagcont.com.br`).
