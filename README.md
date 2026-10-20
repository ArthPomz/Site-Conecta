# Site-Conecta

Site institucional da **Conecta**, escritório de contabilidade em Fundão (ES). O site apresenta a empresa, seus serviços e as formas de contato.

## Tecnologias

- HTML, CSS e JavaScript puros, sem etapa de build.
- Pode ser publicado diretamente pelo GitHub Pages.

## Como rodar localmente

Basta abrir o `index.html` no navegador. Para ter um servidor local (recomendado, evita problemas com caminhos):

```bash
# com Python
python3 -m http.server 8000

# ou com Node
npx serve .
```

Depois acesse http://localhost:8000.

## Estrutura

```
Site-Conecta/
├── index.html            # página inicial
├── pages/
│   ├── servicos.html     # lista completa de serviços
│   ├── sobre.html        # página "Quem somos"
│   └── contato.html      # telefone, e-mail, endereço e mapa
├── assets/
│   ├── css/style.css     # estilos do site
│   ├── js/main.js        # menu mobile e pequenos scripts
│   └── img/              # logo e imagens
└── docs/                 # documentação do projeto
```

## Documentação

- [Requisitos](docs/requisitos.md): o que o site precisa ter.
- [Serviços](docs/servicos.md): conteúdo oficial dos serviços da Conecta.
- [Identidade visual](docs/identidade-visual.md): cores, fontes e logo.
- [Decisões](docs/decisoes.md): registro das decisões técnicas.
- [Como contribuir](CONTRIBUTING.md): fluxo de branches, commits e Pull Requests.

## Publicação

Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`. O site fica disponível em `https://arthpomz.github.io/Site-Conecta/`.

## Contato da Conecta

- Celular: (27) 99697-0273
- E-mail: contato@conectagcont.com.br
- Endereço: Rua Stefano Broseghini, 142, Fundão – ES, CEP 29185-000
