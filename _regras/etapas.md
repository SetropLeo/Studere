# Etapas e portões

O trabalho no Studere passa por 5 etapas. Cada etapa tem **entrada** (o que precisa existir), **saída** (definição de pronto), **responsável** e um **portão**: sem cumprir a saída, a etapa seguinte não começa.

| # | Etapa | Camada | Template | Responsável | Status possíveis |
|---|-------|--------|----------|-------------|------------------|
| 0 | Pedido | — | `0-Pedido/pedido.md` | você + Claude | `pendente` → `escopado` |
| 1 | Fontes | `fonte` | `1-Fonte/fonte.md` | agente `pesquisador` | `registrada` → `lida` → `validada` |
| 2 | Achados | `achado` | `2-Achado/achado.md` | agente `arquivista` | `rascunho` → `verificado` → `publicado` |
| 3 | Síntese | `sintese` | `3-Sintese/moc.md` | agente `arquivista` | `rascunho` → `revisada` |
| 4 | Curso | `curso` | `4-Curso/*.md` | agentes `autor-curso` + `ilustrador` | `planejado` → `escrito` → `revisado` → `publicado` |

## Regras gerais

1. **Sem pular etapas.** Etapa N só inicia se a saída da etapa N-1 estiver cumprida.
2. **Retrocesso permitido e esperado.** Lacuna descoberta numa etapa volta para a etapa anterior apropriada (ex.: curso encontra conceito sem nota → volta à etapa 1). Registrar no `## Histórico`.
3. **Quem escreve não aprova.** A passagem para `verificado` (achado) e `revisado` (curso) é feita pelo agente `verificador`, nunca pelo autor.
4. **Status só avança com evidência.** Mudar o campo `status` exige que os critérios da etapa estejam cumpridos.
5. **Toda mudança vai ao histórico** da nota, com data.
6. **Acervo é único.** Antes de criar qualquer nota, buscar existente e estender (ver `CLAUDE.md`).

## Etapa 0 — Pedido

- **Entrada:** pedido do usuário (tema + contexto).
- **Saída:** `pedido.md` no `00-Inbox/` com tema, contexto, objetivo, nível atual, tipo de resultado esperado (só acervo, ou acervo + curso).
- **Portão:** objetivo claro. Se ambíguo, uma pergunta curta ao usuário; senão, assumir o padrão e registrar a suposição.
- Em seguida: decidir o **caminho** no acervo (`Acervo/Domínio/Área/Subárea`) reutilizando pastas existentes, e a lista de **subtópicos** com a pergunta-guia de cada um.

## Etapa 1 — Fontes

- **Entrada:** pedido escopado, subtópicos definidos.
- **Saída:**
  - ≥ 3 fontes por subtópico, sendo ≥ 2 independentes de nível A ou B para qualquer conceito base.
  - Cada fonte registrada em `_fontes/` com URL, data de acesso e nível (A/B/C).
  - URLs abertas e conferidas (nunca citar o que não foi lido).
- **Portão:** nenhuma fonte nível C sustenta afirmação. Fonte C só serve como pista a ser confirmada em A/B.

## Etapa 2 — Achados

- **Entrada:** fontes `lida` ou `validada`.
- **Saída:**
  - Notas atômicas (1 conceito por nota) com `confianca`, `fontes`, `validade` quando aplicável.
  - Cada afirmação relevante tem fonte. Contradições registradas.
  - Verificação adversarial feita pelo `verificador` (tenta refutar, procura evidência independente). Só então `status: verificado`.
- **Portão:** nenhuma nota `rascunho` entra na síntese.

## Etapa 3 — Síntese

- **Entrada:** achados `verificado`.
- **Saída:** `_MOC <Tema>.md` com síntese, mapa Mermaid, índice linkado, fontes principais, **lacunas** e próximos passos; links cruzados com outras áreas do acervo.
- **Portão:** todo link resolve; toda nota do tema aparece no MOC; lacunas críticas ou foram pesquisadas (volta à etapa 1) ou estão declaradas.

## Etapa 4 — Curso (somente sob pedido)

- **Entrada:** MOC `revisada` e sem lacunas críticas.
- **Saída:**
  - `00-Visão geral.md` + 1 arquivo por módulo.
  - Cada módulo: Objetivos → **Teoria** (completa, termos técnicos legendados) → Visuais → **Prática** (exemplo guiado, exercícios básico/intermediário/avançado, mini-projeto, gabarito, checagem).
  - **Nenhum fato novo**: tudo que o curso afirma está no acervo e linkado via `notas-base`. Se faltar, volta à etapa 1.
  - Exercícios conferidos (executáveis rodam; escritos têm gabarito coerente).
- **Portão:** `verificador` revisa teoria vs acervo e prática vs teoria antes de `revisado`.

## Quem faz o quê

| Agente | Etapas | Escreve | Não faz |
|--------|--------|---------|---------|
| `pesquisador` | 1 | notas de fonte | achados, síntese |
| `arquivista` | 2, 3 | achados, MOC, links, histórico | buscar na web, aprovar |
| `verificador` | 2, 4 | só veredito (e `status`) | escrever conteúdo |
| `autor-curso` | 4 | módulos, visão geral | pesquisar fatos novos |
| `ilustrador` | 3, 4 | Mermaid/SVG em `Assets/` | texto de conteúdo |

## Automação

O roteamento dos pedidos está no `CLAUDE.md`. Resumo:

- Estudar tema → skill `entrevista-estudo` → workflow `pesquisar-tema` (etapas 0–3) → workflow `gerar-curso` (etapa 4).
- Consultar a base → skill `consultar-acervo`.
- Conferir se o acervo ainda vale → workflow `revalidar-tema`.
- Saúde do acervo → skill `auditar-acervo`.
