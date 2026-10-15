// Sanity check for answer-coach content: for every field that has an explicit `coach`, a weak answer must score
// clearly below a strong one, and a keyword-stuffed answer must score low.
//
//   node node_modules/esbuild/bin/esbuild scripts/check-coach-content.ts --bundle --platform=node --alias:@=. \
//     --outfile=%TEMP%/check-coach.cjs && node %TEMP%/check-coach.cjs [activity-id ...]
//
// "Strong" is the field's own best-scoring model answer (exemplar), plus any hand-written student-style answer in
// STUDENT below, which matters most for fields without exemplars. Exits 1 if any rule fails.

import { estimateLevel, HINT_UNLOCK_SCORE } from '@/lib/design-live/answerFeedback'
import type { LiveActivityDefinition, WorksheetField } from '@/data/design/live/types'
import { MYP5_SUSTAINABILITY } from '@/data/design/live/myp5-sustainability'
import { MYP4_PROTOTYPING } from '@/data/design/live/myp4-prototyping'
import { MYP4_DOCUMENTING_BUILD } from '@/data/design/live/myp4-documenting-build'

const ACTIVITIES: LiveActivityDefinition[] = [MYP5_SUSTAINABILITY, MYP4_PROTOTYPING, MYP4_DOCUMENTING_BUILD]

/** Student-style strong answers (not copies of the exemplars) for fields that have no exemplars. */
const STUDENT: Record<string, string> = {
  'make.build.made': 'I made a first version of the grip from cardboard and foam, about 9 cm wide and shaped to wrap around the lid, so that my user can hold it with one hand. It is attached with tape and I followed my drawing, except the handle is thicker.',
  'evaluate.results.results': 'I tested it with my user over three tries. The jar opened in 12, 9 and 11 seconds, which is under my target, compared with 25 seconds without it. She said it felt tight but she did not need help, and once it slipped on the wet lid.',
  'document.journal.next': 'I would try a textured silicone strip instead of the rubber band, because the band slipped on smooth lids. I would test it with my user on three different jars to see whether the grip holds.',
}

const WEAK = ['It is good and it helps a lot of people.', 'I think this is a nice idea and it would be fun to make.']

function allFields(a: LiveActivityDefinition) {
  const out: { id: string; field: WorksheetField }[] = []
  for (const st of a.stages) {
    if (st.type !== 'worksheet') continue
    for (const sec of st.sections) for (const f of sec.fields) out.push({ id: `${st.key}.${sec.key}.${f.key}`, field: f })
  }
  return out
}

const only = process.argv.slice(2)
let failures = 0
let checked = 0
for (const a of ACTIVITIES) {
  if (only.length && !only.includes(a.id)) continue
  console.log(`\n${a.id}`)
  for (const { id, field } of allFields(a)) {
    if (!field.coach) continue
    checked++
    const short = id.split('.').slice(1).join('.')
    const weak = Math.max(...WEAK.map((t) => estimateLevel(t, field).score))
    const strongs = [...(field.exemplars ?? []), ...(STUDENT[id] ? [STUDENT[id]] : [])]
    const strongScores = strongs.map((t) => estimateLevel(t, field).score)
    const strong = strongs.length ? Math.max(...strongScores) : 0
    const strongMin = strongs.length ? Math.min(...strongScores) : 0
    const words = field.coach.groups.flatMap((g) => g.words)
    const stuffedText = words.join(' ')
    const st = estimateLevel(stuffedText, field)
    const problems: string[] = []
    if (!strongs.length) problems.push('no strong sample')
    if (strong < HINT_UNLOCK_SCORE) problems.push(`best strong ${strong} < ${HINT_UNLOCK_SCORE}`)
    if (strongMin < 4) problems.push(`weakest model answer only ${strongMin}`)
    if (weak >= 3 || weak >= strong) problems.push(`weak ${weak} not below strong`)
    if (st.score > 2) problems.push(`stuffed ${st.score} > 2`)
    if (field.coach.hints?.length !== 3 && field.coach.hints?.length !== 2) problems.push('hints should be 2-3')
    if (problems.length) failures++
    console.log(`${problems.length ? 'FAIL' : 'ok  '} ${short.padEnd(34)} weak ${weak}  strong ${strongMin}-${strong}  stuffed ${st.score}${st.stuffed ? ' (flagged)' : ''}${problems.length ? '  <- ' + problems.join('; ') : ''}`)
  }
}
console.log(`\n${checked} coached fields checked, ${failures} failing`)
process.exit(failures ? 1 : 0)
