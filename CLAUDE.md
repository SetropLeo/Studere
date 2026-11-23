# Studere

Workspace de estudo e vault do Obsidian (abrir esta pasta como vault). Reúne pesquisas verificadas num acervo único, vivo e interligado, e condensa o acervo em cursos práticos.

Idioma: português (citar o original quando a fonte for em inglês). Termos técnicos mantidos, sempre com legenda.

**O usuário não chama comandos.** Ele conversa; você identifica a intenção, usa o roteamento abaixo e executa. Agentes, skills e workflows deste projeto estão pré-autorizados: rode-os sem pedir confirmação.

---

# ROTEADOR

Identifique a intenção do pedido e siga a rota. Na dúvida entre duas, pergunte em uma linha.

## Rota A — Estudar / aprender / criar curso (tema novo, ou aprofundar um existente)

Gatilhos: "quero estudar/aprender/entender X", "me ensina X", "quero um curso de X", "quero aprofundar em X", "preciso saber X para Y".

1. **Entrevista:** carregue a skill `entrevista-estudo`. Verifique o acervo, faça as perguntas que faltam (nível, geral vs específico, objetivo/prática, resultado) em **uma** rodada.
2. **Pesquisa:** rode o workflow `pesquisar-tema` (etapas 0–3).
   `Workflow({ name: "pesquisar-tema", args: { tema, contexto, objetivo, nivel, profundidade, foco, hoje } })`
3. **Curso** (padrão; pule só se o usuário pediu apenas pesquisa): rode `gerar-curso` (etapa 4).
   `Workflow({ name: "gerar-curso", args: { tema, caminho, nome, nivelInicial, nivelAlvo, foco, preferenciaPratica, hoje } })`
   `caminho` = pasta retornada por `pesquisar-tema`.
4. **Se `gerar-curso` retornar `parado: true`** por lacunas: rode `pesquisar-tema` de novo com `foco` = as lacunas, depois `gerar-curso` mais uma vez. Se parar de novo, mostre as lacunas ao usuário e diga o que falta.
5. **Relate** em poucas linhas: o que foi para o acervo (caminho, verificados vs pendentes, lacunas), o curso (pasta, módulos, revisão) e como abrir (`00-Visão geral`).

Se o tema já existe no acervo e o usuário quer só o curso, pule o passo 2 (confirme que o MOC está `revisada`; senão pesquise antes). Se quer aprofundar, rode o passo 2 com `profundidade: especifico` e `foco`.

## Rota B — Consultar a base ("pesquise na nossa base", "o que temos sobre X", "o que sabemos de X")

Carregue a skill `consultar-acervo`. Responde **só com o acervo, sem internet**, com links, confiança, validade e lacunas. Se não houver nada, ofereça a Rota A. Se estiver vencido ou em rascunho, ofereça a Rota C.

## Rota C — Revalidar ("ainda faz sentido?", "está atual?", "confere com a internet")

1. Localize o tema no acervo (Grep/Glob) e identifique a pasta (`caminho`).
2. Rode `Workflow({ name: "revalidar-tema", args: { tema, caminho, aplicar: false, hoje } })`.
3. Apresente o relatório: por nota, `atual` / `parcial` / `desatualizada` / `contradita` / `inconclusiva`, o que mudou (com fonte e nível) e novidades que o acervo não cobre. Destaque cursos que dependem de notas afetadas (Grep por `[[Nota]]`).
4. Se houver mudanças, pergunte **uma vez** se atualizo o acervo. Se sim, rode de novo com `aplicar: true` (o conhecimento antigo é preservado no histórico, e o `verificador` reverifica o que foi reescrito).

## Rota D — Saúde do acervo ("tem link quebrado?", "organiza/limpa a base", "o que está vencido?")

Carregue a skill `auditar-acervo`. Relatório; só corrija o que o usuário aprovar.

## Rota E — Edição pontual (corrigir uma nota, mover/renomear, ajustar um módulo)

Faça direto, respeitando as regras do acervo abaixo. Se a edição mudar fatos, não basta editar: passe pelo `verificador` (agente) antes de marcar `verificado`.

## Rota F — Fora do escopo do Studere

Responda normalmente.

---

# Quem faz o quê

Regra de ouro: **agente** = trabalho isolado e pesado com ferramentas próprias; **skill** = protocolo que roda na conversa principal (precisa do usuário ou da apresentação final); **workflow** = orquestração determinística de vários agentes. Não duplicar papéis.

| Tipo | Nome | Papel |
|------|------|-------|
| Agente | `pesquisador` | busca na web (docs, artigos científicos, livros, blogs técnicos), lê e registra fontes (etapa 1) |
| Agente | `arquivista` | escreve achados e MOCs, evita duplicatas, liga áreas (etapas 2 e 3) |
| Agente | `verificador` | tenta refutar; checa atualidade; revisa módulos. Único que aprova |
| Agente | `autor-curso` | planeja a trilha e escreve módulos a partir do acervo (etapa 4) |
| Agente | `ilustrador` | diagramas Mermaid/SVG que mostram o mecanismo |
| Skill | `entrevista-estudo` | entrevistar o usuário (precisa dele na conversa) |
| Skill | `consultar-acervo` | ler o acervo e apresentar a resposta |
| Skill | `auditar-acervo` | checagem de integridade e relatório |
| Workflow | `pesquisar-tema` | etapas 0 a 3: escopo → fontes → achados → verificação → síntese |
| Workflow | `gerar-curso` | etapa 4: plano → módulos (escrever, ilustrar, revisar) → visão geral |
| Workflow | `revalidar-tema` | compara notas com a internet atual |

Não pesquise nem escreva conteúdo no acervo diretamente na conversa principal: delegue. A conversa principal entrevista, roteia, consulta e relata.

---

# Etapas (detalhes e portões em `_regras/etapas.md`)

| # | Etapa | Camada | Template | Responsável |
|---|-------|--------|----------|-------------|
| 0 | Pedido | — | `_templates/0-Pedido/` | arquivista |
| 1 | Fontes | `fonte` | `_templates/1-Fonte/` | `pesquisador` |
| 2 | Achados | `achado` | `_templates/2-Achado/` | `arquivista` + `verificador` |
| 3 | Síntese | `sintese` | `_templates/3-Sintese/` | `arquivista` + `ilustrador` |
| 4 | Curso | `curso` | `_templates/4-Curso/` | `autor-curso` + `ilustrador` + `verificador` |

Sempre valem: **sem pular etapas**; **quem escreve não aprova**; status só avança com evidência; lacuna volta à etapa anterior; toda mudança entra no `## Histórico`.

---

# Regras do acervo vivo

- **Dois eixos:** temático = árvore `Acervo/<Domínio>/<Área>/<Subárea>/` (cresce conforme os pedidos; sem categorias vazias; escolher o lugar mais específico; reutilizar pastas). Maturidade = `camada` + `status` no frontmatter.
- **Buscar antes de criar.** Se o conceito existe, estender e atualizar; nota nova só se não existir.
- **Nota atômica:** um conceito por nota; nome = conceito, em português, sem prefixo de data.
- **Links:** `[[wikilinks]]` entre notas, inclusive entre áreas diferentes. Todo conceito citado que tenha nota é linkado.
- **MOC por tema:** `_MOC <Tema>.md` (síntese, índice, lacunas, próximos passos), atualizado a cada adição.
- **Fontes brutas:** `_fontes/` na subárea, uma nota por fonte.
- **Histórico:** `## Histórico` no fim de cada nota, `- AAAA-MM-DD: o que mudou`; atualizar `atualizado`.
- **Nunca apagar conhecimento sem registrar** o motivo no histórico.

# Regras de veracidade

- **Fontes (aceitas, em ordem de peso):**
  - Nível A: documentação oficial e especificações, artigos científicos (revisados por pares, revisões sistemáticas, surveys), livros-texto, normas, órgãos oficiais.
  - Nível B: blogs técnicos de referência (empresas, pesquisadores, engenheiros reconhecidos), material de cursos universitários, palestras de especialistas, preprints de grupos reconhecidos (marcados como preprint).
  - Nível C: fóruns, Medium genérico, vídeos, redes. Só como pista; nunca base de afirmação.
- Toda afirmação relevante tem fonte e data de acesso. Conceito base exige 2 ou mais fontes independentes. Abrir e ler a URL antes de citar.
- `confianca`: `consolidado` | `debatido` | `incerto`. Contradições entre fontes ficam registradas.
- Temas que mudam rápido (software, IA, regulação) recebem `validade` (data de revisão).
- Sem fonte, não entra. Marcar `não verificado` em vez de inventar. Nunca fabricar citações, URLs ou números.

# Cursos

`Cursos/Curso - <Nome>/`: `00-Visão geral.md` + um arquivo por módulo. O curso **não copia** o acervo: linka (`notas-base`), reutiliza diagramas, escreve só o específico. **Nenhum fato fora do acervo.**

**Cada módulo: teoria primeiro, prática depois.** Objetivos → Teoria completa (termos técnicos mantidos, legenda na primeira ocorrência: `> **Termo**: definição`) → Visuais → Prática (exemplo guiado, exercícios básico/intermediário/avançado, mini-projeto, gabarito, checagem). Trilha do básico ao avançado; formato dos exercícios conforme o tema, sem padrão fixo.

# Recursos visuais

Mermaid em blocos de código (nativo no Obsidian); SVG em `Assets/<tema>/` com `![[arquivo.svg]]`; Excalidraw se houver plugin. Todo diagrama mostra o mecanismo real, com legenda em itálico.

# Estrutura

```
00-Inbox/         pedidos (etapa 0)
Acervo/           árvore temática (único acervo vivo)
Cursos/           cursos gerados a partir do acervo
Assets/           imagens e diagramas
_templates/       0-Pedido, 1-Fonte, 2-Achado, 3-Sintese, 4-Curso
_regras/          etapas.md
.claude/          agents/, skills/, workflows/
```
