// Sanity check for the MYP4 Individuals & Societies answer coach.
//
// For every coached written field of both exemplars it scores a WEAK answer, a STRONG answer written in
// different words from the model answers, a keyword-STUFFED answer and the model answers themselves, with the
// same rule-based estimate the server uses (estimateLevel without the on-device model). It fails (exit 1) unless
//   weak < strong, stuffed <= 2, stuffed < strong, and every model answer scores at least 5.
//
// Run:  npx esbuild scripts/check-is-coach.ts --bundle --platform=node --outfile=.check-is-coach.cjs && node .check-is-coach.cjs

import { estimateLevel } from '../lib/design-live/answerFeedback'
import { MYP4_GEOGRAPHY_URBAN_WATER } from '../data/design/live/myp4-geography-urban-water'
import { MYP4_HISTORY_INDUSTRIAL_REVOLUTION } from '../data/design/live/myp4-history-industrial-revolution'
import type { LiveActivityDefinition, WorksheetField } from '../data/design/live/types'

interface Sample { weak: string; strong: string; stuffed: string }

const SAMPLES: Record<string, Record<string, Sample>> = {
  geography: {
    'investigate.question.rq': {
      weak: 'Why does the city have water problems?',
      strong: 'How far have planning decisions about pipe connections, rather than drought, caused unequal access to water between neighbourhoods in a growing city since 2015?',
      stuffed: 'water unequal access rather than since neighbourhood informal settlements fairer governance how far to what extent',
    },
    'investigate.evaluate.evaluation': {
      weak: 'It was fine and I did my work.',
      strong: 'My plan worked well because the data table and the interview showed two sides, but one limitation is that I only had one table and the interview was fictional. Next time I would add a second data source and check the claims against it.',
      stuffed: 'limitation next time because however missing bias improve second source check against fictional instead',
    },
    'think.explain.explanation': {
      weak: 'Cities need water and sometimes there is not enough water for everybody.',
      strong: 'When a city grows, urbanization means more people share the same reservoirs, so demand rises faster than supply and water stress appears even if rainfall stays the same. For example, paved surfaces increase surface runoff, which means less rain soaks into the ground, and stakeholders in informal settlements are hit hardest.',
      stuffed: 'urbanization water stress surface runoff informal settlement stakeholder sustainable demand supply reservoir groundwater',
    },
    'think.perspectives.views': {
      weak: 'The authority has one view and the residents have a different view.',
      strong: 'The water authority sees fines and limits as fair because supply is short, whereas Eastfield residents see them as unfair because they already get very little. This means a single saving target treats unequal users alike, so the city would need separate targets for each neighbourhood.',
      stuffed: 'perspective whereas however implication as a result because authority residents planner stakeholder this means therefore',
    },
    'think.argument.argument': {
      weak: 'I think the water is unfair because some people get less.',
      strong: 'Mainly, decisions explain the unequal access rather than rainfall. Source B shows Lakeview with 310 litres per person and Eastfield with 28, which suggests the same dams are shared very unevenly. This is because Eastfield is not on the map, as Source C says. However, Source A reports low dam levels, so rainfall still limits supply. Overall, decisions decide who receives the water.',
      stuffed: 'source however because overall suggests evidence whereas decision mainly rather than shows therefore although',
    },
    'think.audience.style': {
      weak: 'I will write it nicely.',
      strong: 'My audience is a local councillor, so I will use a formal tone, keep the main finding at the start and make one specific recommendation, which suits a reader with little time.',
      stuffed: 'audience reader purpose tone formal simple plain specific explain recommend persuade inform because therefore',
    },
  },
  history: {
    'investigate.question.rq': {
      weak: 'What was the Industrial Revolution like?',
      strong: 'How far did the factory system improve the lives of child workers in Lancashire between 1820 and 1850, compared with life on a farm?',
      stuffed: 'factory system improve working families between rather than how far to what extent child labour reform',
    },
    'investigate.evaluate.evaluation': {
      weak: 'It was fine and I did my work.',
      strong: 'The strongest part was using a letter and a petition because they gave opposite views, but a limitation is that I had only one health table and the interview was fictional. Next time I would add a second source and check the claims against a worker’s own account.',
      stuffed: 'limitation next time because however missing bias improve second source check against fictional instead',
    },
    'think.explain.explanation': {
      weak: 'Factories came and lots of people went to the towns.',
      strong: 'Industrialization meant the factory system needed many workers in one place, so people left the countryside for paid work and urbanization followed. As a result housing, clean water and drains did not keep up, which means disease spread, and reform laws appeared in response, for example limits on child labour.',
      stuffed: 'industrialization urbanization factory system reform empire perspective wages machines mills housing drains disease',
    },
    'think.perspectives.views': {
      weak: 'The owner liked factories but the workers did not like them.',
      strong: 'A mill owner sees long hours as the way to stay profitable, whereas a child worker sees them as a loss of health and schooling. This means owners would oppose laws on hours because they raise costs, while reformers would push for them, so the debate was a clash between profit and welfare.',
      stuffed: 'perspective whereas however implication as a result because owner worker reformer weaver this means therefore',
    },
    'think.argument.argument': {
      weak: 'I think the factories were bad because people were poor.',
      strong: 'Overall, life improved for some but not equally, so the effect was mixed. Source A suggests mills gave wages, but the owner had a reason to exaggerate. Source B shows mill workers dying at about 17, which means crowded housing outweighed the gains. Source C adds that weavers in Bengal lost their trade, although cheaper cloth helped buyers.',
      stuffed: 'source however because overall suggests evidence by contrast mixed shows therefore although outweigh',
    },
    'think.audience.style': {
      weak: 'I will write it nicely.',
      strong: 'My audience is a class of younger students, so I will use simple words, explain each key term and give one clear example, which suits readers who are new to the topic.',
      stuffed: 'audience reader purpose tone formal simple plain specific explain recommend persuade inform because therefore',
    },
  },
}

function fieldsOf(a: LiveActivityDefinition): Record<string, WorksheetField> {
  const out: Record<string, WorksheetField> = {}
  for (const st of a.stages) {
    if (st.type !== 'worksheet') continue
    for (const sec of st.sections) for (const f of sec.fields) if (f.coach) out[`${st.key}.${sec.key}.${f.key}`] = f
  }
  return out
}

let failures = 0
const fail = (msg: string) => { failures++; console.log('  FAIL ' + msg) }

for (const [name, act] of [['geography', MYP4_GEOGRAPHY_URBAN_WATER], ['history', MYP4_HISTORY_INDUSTRIAL_REVOLUTION]] as const) {
  console.log(`\n${name}`)
  const fields = fieldsOf(act)
  const samples = SAMPLES[name]
  for (const key of Object.keys(samples)) if (!fields[key]) fail(`${key}: no coach on this field`)
  for (const [key, f] of Object.entries(fields)) {
    const s = samples[key]
    if (!s) { fail(`${key}: no sample answers in this script`); continue }
    const weak = estimateLevel(s.weak, f)
    const strong = estimateLevel(s.strong, f)
    const stuffed = estimateLevel(s.stuffed, f)
    const models = (f.exemplars ?? []).map((e) => estimateLevel(e, f).score)
    console.log(`  ${key.padEnd(34)} weak ${weak.score}  strong ${strong.score} (hits ${strong.hits.length})  stuffed ${stuffed.score}${stuffed.stuffed ? ' (flagged)' : ''}  models ${models.join('/') || '-'}`)
    if (!(weak.score < strong.score)) fail(`${key}: weak (${weak.score}) is not below strong (${strong.score})`)
    if (strong.score < 5) fail(`${key}: strong answer only reaches ${strong.score}`)
    if (stuffed.score > 2) fail(`${key}: stuffed answer scores ${stuffed.score}`)
    if (stuffed.score >= strong.score) fail(`${key}: stuffed is not below strong`)
    models.forEach((m, i) => { if (m < 5) fail(`${key}: model answer ${i + 1} only reaches ${m}`) })
    if (key.endsWith('.rq') || key.endsWith('.argument')) {
      if (!f.coach?.scaffold?.steps.length) fail(`${key}: missing scaffold`)
      if ((f.coach?.hints?.length ?? 0) < 2) fail(`${key}: needs 2-3 hints`)
    }
  }
  const mcqs = act.stages.filter((st) => st.type === 'mcq')
  for (const st of mcqs) if (st.type === 'mcq') st.questions.forEach((q, i) => { if (!q.strand || !q.why) fail(`${st.key} Q${i + 1}: missing strand or why`) })
}

console.log(failures ? `\n${failures} check(s) failed` : '\nAll checks passed')
process.exit(failures ? 1 : 0)
