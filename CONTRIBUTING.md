# Guia de Commits

Este projeto segue o padrão **[Conventional Commits](https://www.conventionalcommits.org/pt-br/)** para manter o histórico do git legível e útil.

## Formato

```
<tipo>(<escopo opcional>): <descrição curta no imperativo>

<corpo opcional explicando o "porquê">
```

## Tipos

| Tipo       | Quando usar                                                |
|----------- |-------------------------------------------------------------|
| `feat`     | Nova funcionalidade ou seção do portfólio                  |
| `fix`      | Correção de bug ou layout quebrado                         |
| `refactor` | Reorganização de código/conteúdo sem mudar comportamento   |
| `style`    | Ajustes visuais/formatação que não alteram lógica           |
| `docs`     | Mudanças em README, CONTRIBUTING, comentários               |
| `chore`    | Tarefas de manutenção (deps, config, build, git)            |
| `perf`     | Melhoria de performance                                      |
| `test`     | Adição ou ajuste de testes                                   |
| `ci`       | Mudanças em workflows/CI                                     |

## Exemplos

```
feat(hero): adiciona seção de proof points na home
fix(pdf): corrige quebra de layout no cabeçalho do currículo
refactor(resumo): destaca atuação como Full Stack antes da docência
chore(git): adiciona .gitattributes e normaliza fins de linha
docs(readme): reorganiza README e move lista de ícones pendentes
```

## Boas práticas

- Escreva a descrição curta no imperativo ("adiciona", não "adicionado").
- Um commit = uma mudança lógica. Evite misturar refatoração com nova feature.
- Use o corpo do commit para explicar o motivo quando não for óbvio.

## Template de commit (opcional)

Para usar o template `.gitmessage` deste repositório localmente:

```bash
git config commit.template .gitmessage
```
