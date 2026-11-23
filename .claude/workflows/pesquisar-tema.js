export const meta = {
  name: 'pesquisar-tema',
  description: 'Studere etapas 0-3: escopa o tema, coleta fontes, escreve achados, verifica adversarialmente e monta o MOC',
  whenToUse: 'Quando o usuário pedir para pesquisar/estudar um tema novo ou expandir um tema existente no acervo',
  phases: [
    { title: 'Escopo', detail: 'pedido, caminho no acervo e subtópicos' },
    { title: 'Fontes', detail: 'um pesquisador por subtópico, em paralelo' },
    { title: 'Achados', detail: 'notas atômicas sem duplicar o acervo' },
    { title: 'Verificação', detail: 'dois verificadores independentes por nota, 1 rodada de correção' },
    { title: 'Síntese', detail: 'MOC, visuais e auditoria final' },
  ],
}

// args: { tema, contexto, objetivo, nivel, profundidade, foco, hoje }  (hoje = AAAA-MM-DD)
// profundidade: 'geral' (visão ampla) | 'especifico' (aprofundar em foco). foco: o que aprofundar / lacunas a cobrir.
const { tema, contexto = '', objetivo = '', nivel = 'zero', profundidade = 'geral', foco = '', hoje } = args || {}
if (!tema || !hoje) throw new Error('args precisa de { tema, hoje } (hoje = AAAA-MM-DD)')

const CTX =
  'Tema: ' + tema + '\n' +
  'Contexto do usuário: ' + (contexto || '(não informado)') + '\n' +
  'Objetivo: ' + (objetivo || '(não informado)') + '\n' +
  'Nível atual: ' + nivel + '\n' +
  'Profundidade pedida: ' + profundidade + '\n' +
  'Foco / lacunas a cobrir: ' + (foco || '(nenhum específico)') + '\n' +
  'Data de hoje: ' + hoje

const SCOPE = {
  type: 'object',
  properties: {
    pedido: { type: 'string', description: 'caminho do pedido criado em 00-Inbox' },
    caminho: { type: 'string', description: 'pasta no acervo: Acervo/Domínio/Área/Subárea' },
    existentes: { type: 'array', items: { type: 'string' }, description: 'notas já existentes relevantes' },
    suposicoes: { type: 'array', items: { type: 'string' } },
    subtopicos: {
      type: 'array',
      items: {
        type: 'object',
        properties: { nome: { type: 'string' }, pergunta: { type: 'string' } },
        required: ['nome', 'pergunta'],
      },
    },
  },
  required: ['pedido', 'caminho', 'subtopicos'],
}

const SRC = {
  type: 'object',
  properties: {
    subtopico: { type: 'string' },
    fontes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          arquivo: { type: 'string' },
          nivel: { type: 'string' },
          url: { type: 'string' },
          sustenta: { type: 'array', items: { type: 'string' } },
        },
        required: ['arquivo', 'nivel', 'url'],
      },
    },
    divergencias: { type: 'array', items: { type: 'string' } },
    lacunas: { type: 'array', items: { type: 'string' } },
  },
  required: ['subtopico', 'fontes'],
}

const ACH = {
  type: 'object',
  properties: {
    achados: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          arquivo: { type: 'string' },
          titulo: { type: 'string' },
          novo: { type: 'boolean' },
          confianca: { type: 'string' },
        },
        required: ['arquivo', 'titulo'],
      },
    },
    links_cruzados: { type: 'array', items: { type: 'string' } },
    lacunas: { type: 'array', items: { type: 'string' } },
  },
  required: ['achados'],
}

const VERDICT = {
  type: 'object',
  properties: {
    arquivo: { type: 'string' },
    veredito: { type: 'string', enum: ['ok', 'corrigir', 'reprovado'] },
    problemas: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          afirmacao: { type: 'string' },
          veredito: { type: 'string', enum: ['confirmada', 'parcial', 'refutada', 'nao-verificavel'] },
          evidencia: { type: 'string' },
          correcao: { type: 'string' },
        },
        required: ['afirmacao', 'veredito'],
      },
    },
  },
  required: ['arquivo', 'veredito'],
}

const STATUS = {
  type: 'object',
  properties: { atualizadas: { type: 'array', items: { type: 'string' } } },
  required: ['atualizadas'],
}

const AUDIT = {
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    problemas: { type: 'array', items: { type: 'string' } },
  },
  required: ['ok'],
}

// ---------- Etapa 0: escopo ----------
phase('Escopo')
const scope = await agent(
  'ETAPA 0 (Studere). Escopar o pedido.\n\n' + CTX + '\n\n' +
  '1. Procure em Acervo/ (Glob/Grep) por notas e MOCs já existentes sobre o tema e temas vizinhos. Reutilize pastas existentes.\n' +
  '2. Defina o caminho em Acervo/Domínio/Área/Subárea (mais específico que fizer sentido; não crie categorias vazias).\n' +
  '3. Crie o pedido em 00-Inbox/ usando _templates/0-Pedido/pedido.md (status: escopado, caminho, suposições registradas).\n' +
  '4. Liste de 3 a 8 subtópicos, cada um com uma pergunta-guia. Se profundidade = geral: cubra o que é, conceitos base, como funciona e aplicações práticas, respeitando o nível atual do usuário (começando dos fundamentos se for zero). ' +
  'Se profundidade = especifico ou houver foco: concentre os subtópicos no foco, incluindo os pré-requisitos que o acervo ainda não tem. Não repita o que o acervo já cobre bem; foque em lacunas e extensões.\n' +
  'Retorne os dados estruturados.',
  { agentType: 'arquivista', schema: SCOPE, label: 'escopo', phase: 'Escopo' }
)
if (!scope || !scope.subtopicos || !scope.subtopicos.length) throw new Error('Escopo falhou: sem subtópicos')

let subtopicos = scope.subtopicos
if (subtopicos.length > 8) {
  log('Subtópicos limitados a 8 (descartados ' + (subtopicos.length - 8) + '): ' + subtopicos.slice(8).map(s => s.nome).join('; '))
  subtopicos = subtopicos.slice(0, 8)
}
log('Caminho: ' + scope.caminho + ' | subtópicos: ' + subtopicos.map(s => s.nome).join(', '))

// ---------- Etapa 1: fontes ----------
phase('Fontes')
const fontesBrutas = await parallel(subtopicos.map(s => () =>
  agent(
    'ETAPA 1 (Studere). Colete fontes sobre o subtópico "' + s.nome + '".\n' +
    'Pergunta-guia: ' + s.pergunta + '\n\n' + CTX + '\n\n' +
    'Pasta do tema: ' + scope.caminho + ' (notas de fonte em ' + scope.caminho + '/_fontes/).\n' +
    'Notas já existentes que podem cobrir parte disso: ' + JSON.stringify(scope.existentes || []) + '\n' +
    'Siga as regras do seu papel: ≥3 fontes, ≥2 independentes nível A/B, leia cada URL, nada inventado.',
    { agentType: 'pesquisador', schema: SRC, phase: 'Fontes', label: 'fontes: ' + s.nome }
  )
))
const pesquisas = fontesBrutas.filter(Boolean)
if (pesquisas.length < subtopicos.length) {
  const ok = new Set(pesquisas.map(p => p.subtopico))
  log('Pesquisa falhou para: ' + subtopicos.filter(s => !ok.has(s.nome)).map(s => s.nome).join('; '))
}
if (!pesquisas.length) throw new Error('Nenhum subtópico foi pesquisado')

// ---------- Etapa 2: achados (barreira: dedupe entre subtópicos) ----------
phase('Achados')
const ach = await agent(
  'ETAPA 2 (Studere). Escreva os achados do tema.\n\n' + CTX + '\n\n' +
  'Pasta do tema: ' + scope.caminho + '\n' +
  'Resultado da pesquisa de fontes (JSON):\n' + JSON.stringify(pesquisas) + '\n\n' +
  'Crie notas atômicas (1 conceito por nota) com _templates/2-Achado/achado.md, status: rascunho. ' +
  'Busque antes de criar: se o conceito já existe no acervo, estenda a nota existente. Ligue com [[links]], inclusive a outras áreas. ' +
  'Toda afirmação relevante liga a uma nota de fonte. Registre divergências. Use a data ' + hoje + ' em criado/atualizado/histórico.',
  { agentType: 'arquivista', schema: ACH, phase: 'Achados', label: 'achados' }
)
if (!ach || !ach.achados || !ach.achados.length) throw new Error('Nenhum achado produzido')
log(ach.achados.length + ' notas de achado (' + ach.achados.filter(a => a.novo).length + ' novas)')

// ---------- Etapa 2b: verificação adversarial ----------
phase('Verificação')
const LENSES = [
  {
    k: 'fonte-original',
    p: 'Lente FONTE ORIGINAL: reabra cada fonte citada na nota (WebFetch) e confira se ela realmente diz o que a nota afirma. Procure exagero, generalização, trecho fora de contexto, dado desatualizado.',
  },
  {
    k: 'evidencia-independente',
    p: 'Lente EVIDÊNCIA INDEPENDENTE: ignore as fontes da nota e procure, por conta própria, fontes nível A/B que confirmem ou contradigam cada afirmação-chave. Conceito base com fonte única não passa.',
  },
]

async function verificar(achados, rodada) {
  const tarefas = achados.flatMap(a => LENSES.map(l => () =>
    agent(
      'ETAPA 2 — verificação adversarial (rodada ' + rodada + ').\n' +
      'Nota: ' + a.arquivo + '\n' + l.p + '\n' +
      'Tente REFUTAR. Na dúvida, reprove. NÃO edite arquivos nesta rodada; apenas retorne o veredito: ' +
      'ok (nada a corrigir), corrigir (há afirmações parciais ou não verificáveis), reprovado (há afirmação refutada).',
      { agentType: 'verificador', schema: VERDICT, phase: 'Verificação', label: l.k + ': ' + a.titulo }
    )
  ))
  const res = await parallel(tarefas)
  return achados.map((a, i) => {
    const vs = LENSES.map((_, j) => res[i * LENSES.length + j])
    const problemas = vs.filter(Boolean).flatMap(v => (v.problemas || []).filter(p => p.veredito !== 'confirmada'))
    let estado = 'ok'
    if (vs.some(v => !v)) estado = 'corrigir' // verificador falhou: conservador
    if (vs.some(v => v && v.veredito === 'corrigir')) estado = 'corrigir'
    if (vs.some(v => v && v.veredito === 'reprovado')) estado = 'reprovado'
    return { a, estado, problemas }
  })
}

let rodada1 = await verificar(ach.achados, 1)
const aprovadas = rodada1.filter(r => r.estado === 'ok').map(r => r.a)
const falhas = rodada1.filter(r => r.estado !== 'ok')
log('Rodada 1: ' + aprovadas.length + ' ok, ' + falhas.length + ' a corrigir')

if (falhas.length) {
  await agent(
    'ETAPA 2 — correção (Studere). Os verificadores apontaram problemas. Corrija cada nota: ' +
    'remova ou reescreva afirmações refutadas, qualifique as parciais, cite fonte independente quando o verificador trouxe, ' +
    'ou registre "não verificado" em Contradições e incertezas. Não invente fonte. Atualize Histórico (' + hoje + ').\n\n' +
    JSON.stringify(falhas.map(f => ({ arquivo: f.a.arquivo, problemas: f.problemas }))),
    { agentType: 'arquivista', phase: 'Verificação', label: 'correção' }
  )
  const rodada2 = await verificar(falhas.map(f => f.a), 2)
  rodada2.filter(r => r.estado === 'ok').forEach(r => aprovadas.push(r.a))
  const aindaFalham = rodada2.filter(r => r.estado !== 'ok')
  if (aindaFalham.length) {
    log('Permanecem em rascunho: ' + aindaFalham.map(r => r.a.titulo).join('; '))
  }
  var pendentes = aindaFalham
} else {
  var pendentes = []
}

if (aprovadas.length) {
  const st = await agent(
    'ETAPA 2 — registrar aprovação. Nas notas abaixo, atualize SOMENTE o frontmatter e o Histórico: ' +
    'status: verificado, verificado-em: ' + hoje + ', verificado-por: verificador. ' +
    'Ajuste confianca (consolidado/debatido/incerto) conforme o que você viu nas verificações.\n' +
    JSON.stringify(aprovadas.map(a => a.arquivo)),
    { agentType: 'verificador', schema: STATUS, phase: 'Verificação', label: 'registrar status' }
  )
  log('Marcadas como verificado: ' + (st ? st.atualizadas.length : 0))
}
if (!aprovadas.length) throw new Error('Nenhum achado passou na verificação; MOC não será criado. Ver notas em rascunho.')

// ---------- Etapa 3: síntese ----------
phase('Síntese')
const lacunas = []
  .concat(ach.lacunas || [])
  .concat(pesquisas.flatMap(p => p.lacunas || []))
  .concat(pendentes.map(r => 'Nota em rascunho (não passou na verificação): ' + r.a.titulo))
const moc = await agent(
  'ETAPA 3 (Studere). Crie ou atualize o MOC do tema em ' + scope.caminho + ' usando _templates/3-Sintese/moc.md.\n' +
  'Use SOMENTE achados verificados:\n' + JSON.stringify(aprovadas.map(a => a.arquivo)) + '\n' +
  'Lacunas conhecidas (liste-as no MOC): ' + JSON.stringify(lacunas) + '\n' +
  'Preencha síntese, mapa Mermaid, índice por seção, conexões com outras áreas (links cruzados: ' +
  JSON.stringify(ach.links_cruzados || []) + '), fontes principais. Se existir MOC-pai, adicione o link. Data ' + hoje + '. status: rascunho.',
  { agentType: 'arquivista', phase: 'Síntese', label: 'moc' }
)
await agent(
  'Visuais (Studere). Leia o MOC em ' + scope.caminho + ' e as notas centrais do tema. ' +
  'Melhore o mapa Mermaid do MOC para refletir as relações reais entre os conceitos, e crie de 1 a 3 diagramas que expliquem o MECANISMO dos conceitos mais difíceis, inserindo-os nas notas correspondentes com legenda. ' +
  'Notas do tema: ' + JSON.stringify(aprovadas.map(a => a.arquivo)),
  { agentType: 'ilustrador', phase: 'Síntese', label: 'visuais' }
)
const auditoria = await agent(
  'ETAPA 3 — auditoria final. Confira no tema em ' + scope.caminho + ':\n' +
  '- todos os [[links]] das notas e do MOC resolvem para arquivos existentes;\n' +
  '- toda nota do tema aparece no MOC; frontmatter completo conforme o template;\n' +
  '- nenhuma nota "rascunho" é citada como base no MOC;\n' +
  '- diagramas Mermaid têm sintaxe válida e legenda.\n' +
  'Se tudo ok: no MOC, status: revisada (atualize Histórico, ' + hoje + '). Se não: não mude o status e liste problemas. NÃO reescreva conteúdo.',
  { agentType: 'verificador', schema: AUDIT, phase: 'Síntese', label: 'auditoria' }
)

return {
  caminho: scope.caminho,
  pedido: scope.pedido,
  subtopicos: subtopicos.map(s => s.nome),
  achados_verificados: aprovadas.map(a => a.arquivo),
  achados_pendentes: pendentes.map(r => r.a.arquivo),
  lacunas,
  auditoria,
}
