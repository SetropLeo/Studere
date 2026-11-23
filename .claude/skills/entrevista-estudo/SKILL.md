---
name: entrevista-estudo
description: Protocolo de entrevista curta para entender a situação do usuário antes de estudar um tema novo, aprofundar um existente ou gerar um curso (nível atual, geral vs específico, objetivo, prática, resultado esperado). Use sempre que o pedido for aprender/estudar/aprofundar algo ou criar um curso, antes de rodar qualquer pesquisa.
---

# Entrevista de estudo

Roda na conversa principal (precisa do usuário). Objetivo: coletar os `args` dos workflows com o mínimo de perguntas.

## Antes de perguntar

1. Grep/Glob em `Acervo/` pelo tema e sinônimos. Se já existe, mencione em uma linha (o que há, `status`, `validade`) e ajuste as perguntas: o usuário quer **estender**, **fazer o curso do que existe** ou **revalidar**?
2. Não pergunte o que o pedido já respondeu. Frase como "sou programador, não sei nada de LLM" já dá nível e contexto.

## Perguntas (AskUserQuestion, até 4 de uma vez; só as que faltam)

1. **Ponto de partida** (`nivel`): Zero (nunca vi) | Básico (conheço o conceito) | Intermediário (já uso) | Avançado (quero detalhes finos). Pergunte também "o que você já sabe sobre isso?" quando o nível não for zero (campo livre via "Outro").
2. **Abrangência** (`profundidade`, `foco`): Visão geral do tema inteiro | Aprofundar em algo específico (qual?).
3. **Para quê** (`objetivo`, `contexto`): ex. usar no trabalho, construir um projeto, entender por curiosidade, preparar entrevista/prova. Pergunte também stack, linguagem ou ferramentas se o tema for técnico (`preferenciaPratica`).
4. **Resultado** (`resultado`): Pesquisa + curso completo (padrão, o usuário costuma querer) | Só pesquisa/acervo.

Regras:
- Pergunte só o que mudaria o resultado. Se algo for dedutível, assuma e registre a suposição.
- Opções curtas e concretas; a recomendada primeiro.
- Uma única rodada de perguntas. Nada de interrogatório.

## Saída

Monte e confirme em uma linha, sem esperar aprovação: "Vou pesquisar X (nível N, foco F, para O) e montar o curso." Em seguida siga o roteamento do `CLAUDE.md`. Mapeamento:

| Resposta | Arg do workflow |
|----------|-----------------|
| tema | `tema` |
| ponto de partida + o que já sabe | `nivel` / `nivelInicial`, `contexto` |
| geral vs específico | `profundidade` (`geral` \| `especifico`), `foco` |
| para quê | `objetivo` |
| stack/formato de prática | `preferenciaPratica` |
| resultado | decide se roda `gerar-curso` depois |
