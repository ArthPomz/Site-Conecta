# Como contribuir

## Fluxo de trabalho

1. Atualize a `main`: `git checkout main && git pull`.
2. Crie uma branch por tarefa: `git checkout -b feature/pagina-servicos`.
3. Faça commits pequenos e com mensagens claras.
4. Envie a branch: `git push -u origin feature/pagina-servicos`.
5. Abra um Pull Request para a `main`, revise e faça o merge.

## Nomes de branch

- `feature/...` para novas funcionalidades ou páginas.
- `fix/...` para correções.
- `docs/...` para documentação.

## Mensagens de commit

Usamos o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

- `feat: adiciona página de serviços`
- `fix: corrige menu no celular`
- `docs: atualiza requisitos`
- `style: ajusta cores do rodapé`

## Tarefas

As tarefas ficam nas **Issues** do repositório. Cada PR deve citar a issue que resolve (por exemplo, `Closes #3`).
