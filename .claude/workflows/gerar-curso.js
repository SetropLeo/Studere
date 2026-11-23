export const meta = {
  name: 'gerar-curso',
  description: 'Studere etapa 4: transforma um tema do acervo em curso prático (teoria depois prática), com visuais e revisão independente',
  whenToUse: 'Somente quando o usuário pedir um curso sobre um tema que já tem MOC revisado no acervo',
  phases: [
    { title: 'Plano', detail: 'trilha de módulos e checagem de lacunas no acervo' },
    { title: 'Módulos', detail: 'escrever, ilustrar e revisar cada módulo em pipeline' },
    { title: 'Fechamento', detail: 'visão geral e revisão final' },
  ],
}

// args: { tema, caminho, nome, nivelInicial, nivelAlvo, foco, preferenciaPratica, hoje }
// caminho = pasta do tema no acervo (onde está o MOC)
const { tema, caminho, nome, nivelInicial = 'zero', nivelAlvo = 'basico ao avancado', foco = '', preferenciaPratica = '', hoje } = args || {}
if (!tema || !caminho || !hoje) throw new Error('args precisa de { tema, caminho, hoje }')
const NOME = nome || tema
const PASTA = 'Cursos/Curso - ' + NOME

const CTX =
  'Tema: ' + tema + '\n' +
  'Pasta do tema no acervo: ' + caminho + '\n' +
  'Curso: ' + NOME + ' (pasta ' + PASTA + ')\n' +
  'Ponto de partida do aluno: ' + nivelInicial + ' (comece a trilha daí; não repita o que ele já domina, mas inclua os pré-requisitos que faltam)\n' +
  'Nível alvo: ' + nivelAlvo + '\n' +
  'Foco do aluno: ' + (foco || '(visão geral do tema)') + '\n' +
  'Preferência de prática: ' + (preferenciaPratica || 'escolher o formato mais adequado ao tema') + '\n' +
  'Data de hoje: ' + hoje

const PLANO = {
  type: 'object',
  properties: {
    moc_ok: { type: 'boolean', description: 'MOC existe e está revisada' },
    modulos: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          numero: { type: 'number' },
          titulo: { type: 'string' },
          nivel: { type: 'string', enum: ['basico', 'intermediario', 'avancado'] },
          objetivos: { type: 'array', items: { type: 'string' } },
          notasBase: { type: 'array', items: { type: 'string' } },
          pratica: { type: 'string', description: 'ideia da prática do módulo' },
        },
        required: ['numero', 'titulo', 'nivel', 'objetivos', 'notasBase'],
      },
    },
    lacunas: {
      type: 'array',
      items: {
        type: 'object',
        properties: { conceito: { type: 'string' }, critica: { type: 'boolean' } },
        required: ['conceito', 'critica'],
      },
    },
  },
  required: ['moc_ok', 'modulos'],
}

const MOD = {
  type: 'object',
  properties: {
    arquivo: { type: 'string' },
    notasBase: { type: 'array', items: { type: 'string' } },
    lacunas: { type: 'array', items: { type: 'string' } },
  },
  required: ['arquivo'],
}

const REV = {
  type: 'object',
  properties: {
    arquivo: { type: 'string' },
    veredito: { type: 'string', enum: ['ok', 'corrigir', 'reprovado'] },
    problemas: { type: 'array', items: { type: 'string' } },
  },
  required: ['arquivo', 'veredito'],
}

// ---------- Plano ----------
phase('Plano')
const plano = await agent(
  'ETAPA 4 — planejar o curso (Studere).\n\n' + CTX + '\n\n' +
  'Leia o MOC e todas as notas do tema em ' + caminho + ' (e links relacionados em outras áreas). ' +
  'Entrada exigida: MOC com status revisada. Se não estiver, retorne moc_ok: false.\n' +
  'Monte a trilha do básico ao avançado em módulos (idealmente 4 a 10), cada um com objetivos, as notas do acervo que o sustentam (notasBase, caminhos de arquivo) e a ideia de prática. ' +
  'Cada módulo deve poder ser escrito SOMENTE com o que está no acervo. Liste em lacunas todo conceito importante que o acervo não cobre (critica: true se bloqueia um módulo central).',
  { agentType: 'autor-curso', schema: PLANO, label: 'plano', phase: 'Plano' }
)
if (!plano) throw new Error('Plano falhou')
if (!plano.moc_ok) {
  return { parado: true, motivo: 'MOC do tema não está revisado. Rode /estudar antes.', caminho }
}
const criticas = (plano.lacunas || []).filter(l => l.critica)
if (criticas.length) {
  log('Lacunas críticas no acervo: ' + criticas.map(l => l.conceito).join('; '))
  return {
    parado: true,
    motivo: 'Acervo não cobre conceitos críticos. Pesquise primeiro (volta à etapa 1) e rode de novo.',
    lacunas: plano.lacunas,
  }
}
log('Trilha: ' + plano.modulos.map(m => m.numero + '. ' + m.titulo).join(' | '))

// ---------- Módulos (pipeline por módulo) ----------
phase('Módulos')
const modulos = plano.modulos
const resultados = await pipeline(
  modulos,
  // 1. escrever
  (_prev, m) => agent(
    'ETAPA 4 — escrever o módulo ' + m.numero + ' "' + m.titulo + '" do curso.\n\n' + CTX + '\n\n' +
    'Plano deste módulo: ' + JSON.stringify(m) + '\n' +
    'Trilha completa (para referenciar anteriores/posteriores): ' + JSON.stringify(modulos.map(x => ({ numero: x.numero, titulo: x.titulo, nivel: x.nivel }))) + '\n\n' +
    'Crie ' + PASTA + '/' + String(m.numero).padStart(2, '0') + ' - ' + m.titulo + '.md com _templates/4-Curso/modulo.md. ' +
    'Teoria completa primeiro (termos técnicos legendados), prática depois. Nenhum fato fora do acervo; liste as notas usadas em notas-base. ' +
    'Prática concreta: exemplo guiado, exercícios nos 3 níveis, mini-projeto, gabarito, checagem. status: escrito. Data ' + hoje + '.',
    { agentType: 'autor-curso', schema: MOD, phase: 'Módulos', label: 'escrever ' + m.numero + ': ' + m.titulo }
  ),
  // 2. visuais
  (r, m) => r && agent(
    'Visuais (Studere). Leia o módulo ' + r.arquivo + ' e as notas-base. Crie de 2 a 4 visuais que expliquem o mecanismo dos conceitos centrais da teoria (Mermaid ou SVG em Assets/), ' +
    'insira-os na seção "Visuais" com legenda. Não acrescente fatos que não estejam na teoria/acervo.',
    { agentType: 'ilustrador', phase: 'Módulos', label: 'visuais ' + m.numero }
  ).then(() => r),
  // 3. revisão independente (+ 1 rodada de correção)
  async (r, m) => {
    if (!r) return null
    const revisar = (tag) => agent(
      'ETAPA 4 — revisão independente do módulo ' + r.arquivo + ' (' + tag + ').\n' +
      'Confira: (a) toda afirmação da teoria está nas notas-base do acervo (fato fora do acervo = reprovado); ' +
      '(b) termos técnicos legendados na primeira ocorrência; (c) teoria antes da prática; ' +
      '(d) exercícios resolvíveis só com a teoria dos módulos até este, gabarito coerente; código executável: confira que roda/está correto; ' +
      '(e) visuais corretos e com legenda.\n' +
      'Se ok: status: revisado, revisado-por: verificador, atualize Histórico (' + hoje + '). Senão: NÃO mude status e liste problemas objetivos.',
      { agentType: 'verificador', schema: REV, phase: 'Módulos', label: 'revisar ' + m.numero + ' ' + tag }
    )
    let rev = await revisar('rodada 1')
    if (rev && rev.veredito !== 'ok') {
      await agent(
        'ETAPA 4 — corrigir o módulo ' + r.arquivo + ' segundo a revisão:\n' + JSON.stringify(rev.problemas || []) +
        '\nCorrija sem introduzir fatos fora do acervo. Se faltar conceito no acervo, registre em lacunas em vez de inventar. Atualize Histórico (' + hoje + ').',
        { agentType: 'autor-curso', schema: MOD, phase: 'Módulos', label: 'corrigir ' + m.numero }
      )
      rev = await revisar('rodada 2')
    }
    return { modulo: m, arquivo: r.arquivo, lacunas: r.lacunas || [], revisao: rev }
  }
)

const prontos = resultados.filter(Boolean)
const falharam = modulos.filter((m, i) => !resultados[i])
if (falharam.length) log('Módulos que falharam na geração: ' + falharam.map(m => m.titulo).join('; '))
const reprovados = prontos.filter(p => !p.revisao || p.revisao.veredito !== 'ok')
if (reprovados.length) log('Módulos não aprovados na revisão: ' + reprovados.map(p => p.modulo.titulo).join('; '))

// ---------- Fechamento ----------
phase('Fechamento')
if (!prontos.length) throw new Error('Nenhum módulo foi gerado')
const visao = await agent(
  'ETAPA 4 — visão geral do curso (Studere).\n\n' + CTX + '\n\n' +
  'Crie ' + PASTA + '/00-Visão geral.md com _templates/4-Curso/curso-visao-geral.md: para quem é, o que será capaz de fazer, pré-requisitos, trilha (tabela e diagrama Mermaid) linkando cada módulo, como estudar, glossário geral e base no acervo. ' +
  'Módulos existentes: ' + JSON.stringify(prontos.map(p => ({ arquivo: p.arquivo, titulo: p.modulo.titulo, nivel: p.modulo.nivel, status: p.revisao ? p.revisao.veredito : 'sem-revisao' }))) + '\n' +
  'status: escrito. Data ' + hoje + '.',
  { agentType: 'autor-curso', phase: 'Fechamento', label: 'visão geral' }
)
const final = await agent(
  'ETAPA 4 — revisão final do curso em ' + PASTA + '. Confira: links entre módulos e para o acervo resolvem; a trilha na visão geral bate com os arquivos; pré-requisitos e ordem de dificuldade coerentes; nenhum módulo repete o outro sem propósito. ' +
  'Se tudo ok E todos os módulos estiverem revisados, marque a visão geral como status: revisado (Histórico, ' + hoje + '). Não reescreva conteúdo; liste problemas.',
  {
    agentType: 'verificador',
    schema: { type: 'object', properties: { ok: { type: 'boolean' }, problemas: { type: 'array', items: { type: 'string' } } }, required: ['ok'] },
    phase: 'Fechamento',
    label: 'revisão final',
  }
)

return {
  pasta: PASTA,
  modulos: prontos.map(p => ({ arquivo: p.arquivo, veredito: p.revisao ? p.revisao.veredito : null, lacunas: p.lacunas })),
  reprovados: reprovados.map(p => p.arquivo),
  falharam: falharam.map(m => m.titulo),
  revisao_final: final,
}
