---
name: auditar-acervo
description: Checagem de integridade do acervo do Studere: links quebrados, notas órfãs, frontmatter incompleto, status inconsistente, validade vencida, duplicatas, MOCs desatualizados. Use periodicamente ou quando o usuário pedir uma limpeza/saúde do acervo.
---

# Auditar acervo

Roteado a partir de pedidos como "como está a saúde do acervo", "tem link quebrado?", "limpa/organiza a base". Por padrão audita todo `Acervo/` e `Cursos/`; se o usuário citou um tema ou pasta, só aquela.

## Checagens

1. **Links quebrados:** todo `[[link]]` resolve para uma nota existente.
2. **Órfãs:** notas que nenhum MOC lista e que nada linka.
3. **Frontmatter:** campos obrigatórios do template (`camada`, `status`, `criado`, `atualizado`, `confianca` nos achados; `nivel`, `url`, `acessado` nas fontes).
4. **Status inconsistente:** achado `publicado`/`verificado` sem `verificado-em`; MOC `revisada` listando nota em `rascunho`; módulo `revisado` sem `revisado-por`; curso apoiado em nota não verificada.
5. **Validade vencida:** `validade` anterior à data de hoje. Listar para reverificar.
6. **Duplicatas:** títulos ou conceitos muito parecidos (candidatas a fundir).
7. **Fontes:** nota sem fonte; fonte só nível C sustentando afirmação; `url-verificada: false`.
8. **MOC desatualizado:** nota do tema ausente do MOC; lacunas já resolvidas ainda listadas.
9. **Pastas:** categorias vazias; notas fora do lugar mais específico.

## Execução

Use Glob/Grep. Para acervos grandes, divida por subárea e dispare agentes `Explore`/`general-purpose` em paralelo (somente leitura).

## Saída

Relatório curto agrupado por tipo de problema, com `caminho:linha` e a correção sugerida. **Não corrija automaticamente**: proponha, e aplique só o que o usuário aprovar (via `arquivista`). Sugira `/verificar` para as notas com validade vencida.
