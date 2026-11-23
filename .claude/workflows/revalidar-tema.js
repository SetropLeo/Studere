export const meta = {
  name: 'revalidar-tema',
  description: 'Studere: compara as notas de um tema do acervo com a informação atual da internet e reporta o que continua válido, mudou ou ficou desatualizado',
  whenToUse: 'Quando o usuário perguntar se o que temos sobre um tema ainda faz sentido, está atual, ou pedir para conferir o acervo com a internet',
  phases: [
    { title: 'Inventário', detail: 'listar notas do tema e suas afirmações-chave' },
    { title: 'Conferência', detail: 'por nota: checar com fontes atuais e registrar novas fontes' },
    { title: 'Relatório', detail: 'consolidar; atualizar o acervo só se aplicar = true' },
  ],
}

// args: { tema, caminho, aplicar, hoje }
// caminho = pasta do tema no acervo (ou lista de pastas separadas por ;). aplicar = false por padrão (só relatório).
const { tema, caminho = '', aplicar = false, hoje } = args || {}
if (!tema || !hoje) throw new Error('args precisa de { tema, hoje }')

const INV = {
  type: 'object',
  properties: {
    caminho: { type: 'string' },
    notas: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          arquivo: { type: 'string' },
          titulo: { type: 'string' },
          validade: { type: 'string' },
          atualizado: { type: 'string' },
          afirmacoes: { type: 'array', items: { type: 'string' }, description: 'afirmações-chave verificáveis' },
        },
        required: ['arquivo', 'titulo', 'afirmacoes'],
      },
    },
  },
  required: ['notas'],
}

const CONF = {
  type: 'object',
  properties: {
    arquivo: { type: 'string' },
    estado: { type: 'string', enum: ['atual', 'parcial', 'desatualizada', 'contradita', 'inconclusiva'] },
    mudancas: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          afirmacao: { type: 'string' },
          situacao: { type: 'string', enum: ['confirmada', 'mudou', 'refutada', 'nao-verificavel'] },
          o_que_mudou: { type: 'string' },
          evidencia_url: { type: 'string' },
          nivel_fonte: { type: 'string' },
        },
        required: ['afirmacao', 'situacao'],
      },
    },
    novidades: { type: 'array', items: { type: 'string' }, description: 'desenvolvimentos relevantes recentes que a nota não cobre' },
  },
  required: ['arquivo', 'estado'],
}

const REG = {
  type: 'object',
  properties: {
    fontes: { type: 'array', items: { type: 'string' }, description: 'arquivos de fonte criados/atualizados' },
  },
  required: ['fontes'],
}

phase('Inventário')
const inv = await agent(
  'REVALIDAÇÃO (Studere) — inventário, somente leitura.\n' +
  'Tema: ' + tema + '\nPasta(s): ' + (caminho || '(descobrir em Acervo/ por Grep/Glob)') + '\nData de hoje: ' + hoje + '\n\n' +
  'Liste as notas de achado e o MOC do tema (ignore _fontes/). Para cada nota: arquivo, título, validade, atualizado e as 3 a 8 afirmações-chave verificáveis ' +
  '(fatos, números, versões, comportamentos, recomendações). Se não houver notas, retorne lista vazia. NÃO edite nada.',
  { agentType: 'arquivista', schema: INV, label: 'inventário', phase: 'Inventário' }
)
if (!inv || !inv.notas || !inv.notas.length) {
  return { vazio: true, motivo: 'Nenhuma nota encontrada para o tema no acervo.', tema }
}
log(inv.notas.length + ' notas para conferir')

phase('Conferência')
const resultados = await pipeline(
  inv.notas,
  // 1. conferir com a web
  (_p, n) => agent(
    'REVALIDAÇÃO — lente ATUALIDADE. Nota: ' + n.arquivo + ' (validade: ' + (n.validade || 'não definida') + ', atualizada em ' + (n.atualizado || '?') + ').\n' +
    'Hoje é ' + hoje + '. Afirmações-chave:\n' + JSON.stringify(n.afirmacoes) + '\n\n' +
    'Para cada afirmação, procure o que há de mais atual em fontes sérias: documentação oficial (versão vigente), artigos científicos (incl. revisões e preprints reconhecidos), padrões/normas, blogs técnicos de referência. ' +
    'Diga se continua confirmada, mudou, foi refutada ou não dá para verificar, com URL e nível (A/B) da evidência que você LEU. ' +
    'Registre também novidades relevantes que a nota não cobre. Estado geral: atual / parcial / desatualizada / contradita / inconclusiva. ' +
    'NÃO edite arquivos nesta etapa. Nada de inventar URL ou data.',
    { agentType: 'verificador', schema: CONF, phase: 'Conferência', label: 'conferir: ' + n.titulo }
  ),
  // 2. registrar fontes novas (só se houve mudança ou novidade com evidência)
  async (c, n) => {
    if (!c) return null
    const urls = (c.mudancas || []).filter(m => m.evidencia_url && m.situacao !== 'confirmada').map(m => m.evidencia_url)
    if (!urls.length || !aplicar) return { n, c, fontes: [] }
    const r = await agent(
      'Registre como notas de fonte (_templates/1-Fonte/fonte.md, pasta _fontes/ do tema, status lida, acessado ' + hoje + ') estas URLs que sustentam mudanças na nota ' + n.arquivo + '. ' +
      'Abra e leia cada uma; descarte as que não abrirem. Reutilize notas de fonte já existentes com a mesma URL.\n' + JSON.stringify(urls),
      { agentType: 'pesquisador', schema: REG, phase: 'Conferência', label: 'fontes novas: ' + n.titulo }
    )
    return { n, c, fontes: r ? r.fontes : [] }
  }
)

const conferidas = resultados.filter(Boolean)
const falhas = inv.notas.filter((_n, i) => !resultados[i])
if (falhas.length) log('Conferência falhou para: ' + falhas.map(n => n.titulo).join('; '))

phase('Relatório')
const precisam = conferidas.filter(r => r.c.estado !== 'atual' && r.c.estado !== 'inconclusiva')
let atualizacao = null
if (aplicar && precisam.length) {
  atualizacao = await agent(
    'REVALIDAÇÃO — aplicar atualizações no acervo (Studere). Para cada nota abaixo: corrija o que mudou, mantendo o texto antigo relevante em "Contradições e incertezas" ou no Histórico com data (' + hoje + ') ' +
    'para não perder conhecimento; ligue as novas fontes; atualize `validade` e `atualizado`; status volta a rascunho. Atualize o MOC (lacunas e notas) e as notas de curso que dependem delas devem ser apenas LISTADAS no retorno, não editadas.\n' +
    JSON.stringify(precisam.map(r => ({ arquivo: r.n.arquivo, estado: r.c.estado, mudancas: r.c.mudancas, novidades: r.c.novidades, fontes: r.fontes }))),
    { agentType: 'arquivista', phase: 'Relatório', label: 'aplicar atualizações' }
  )
  // quem escreve não aprova: reverificar o que foi reescrito
  await parallel(precisam.map(r => () => agent(
    'Reverificação após atualização. Nota: ' + r.n.arquivo + '. Confira se o texto novo bate com as fontes novas e se nada foi apagado sem registro. ' +
    'Se ok, status: verificado, verificado-em ' + hoje + '. Se não, mantenha rascunho e liste o problema. Altere só frontmatter/Histórico.',
    { agentType: 'verificador', phase: 'Relatório', label: 'reverificar: ' + r.n.titulo }
  )))
}

return {
  tema,
  aplicado: !!aplicar,
  resumo: {
    atual: conferidas.filter(r => r.c.estado === 'atual').map(r => r.n.arquivo),
    parcial: conferidas.filter(r => r.c.estado === 'parcial').map(r => r.n.arquivo),
    desatualizada: conferidas.filter(r => r.c.estado === 'desatualizada').map(r => r.n.arquivo),
    contradita: conferidas.filter(r => r.c.estado === 'contradita').map(r => r.n.arquivo),
    inconclusiva: conferidas.filter(r => r.c.estado === 'inconclusiva').map(r => r.n.arquivo),
    falhou: falhas.map(n => n.arquivo),
  },
  detalhes: conferidas.map(r => ({
    arquivo: r.n.arquivo,
    estado: r.c.estado,
    mudancas: (r.c.mudancas || []).filter(m => m.situacao !== 'confirmada'),
    novidades: r.c.novidades || [],
  })),
  atualizacao,
}
