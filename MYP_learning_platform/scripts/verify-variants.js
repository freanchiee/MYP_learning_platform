const fs = require('fs')
function parse(id) {
  const s = fs.readFileSync(`data/papers/${id}/questions.ts`, 'utf8')
  const qs = []
  const qBlocks = s.split(/\n  \{\n/).slice(1)
  for (const b of qBlocks) {
    const crit = (b.match(/crit: '([^']+)'/) || [])[1]
    const id2 = (b.match(/id: (\d+)/) || [])[1]
    const marks = (b.match(/\n    marks: (\d+)/) || [])[1]
    const tc = (b.match(/topicCanonical: '([^']+)'/) || [])[1]
    const tg = (b.match(/topicGroup: '([^']+)'/) || [])[1]
    const labels = [...b.matchAll(/\n        label: '([^']*)'/g)].map((m) => m[1])
    const taskMarks = [...b.matchAll(/\n        marks: (\d+)/g)].map((m) => +m[1])
    const widgets = [...b.matchAll(/widget: '([^']+)'/g)].map((m) => m[1])
    qs.push({
      id: id2, crit, marks: +marks, tc, tg,
      labels: labels.join(''), taskMarks: taskMarks.join('+'),
      tsum: taskMarks.reduce((a, c) => a + c, 0), widgets: widgets.join(','),
    })
  }
  return qs
}
const src = parse('biology-may-2025'), v1 = parse('biology-may-2025-v1'), v2 = parse('biology-may-2025-v2')
let ok = true
for (let i = 0; i < src.length; i++) {
  const S = src[i], A = v1[i], B = v2[i]
  const same = S.crit === A.crit && A.crit === B.crit && S.marks === A.marks && A.marks === B.marks
    && S.labels === A.labels && A.labels === B.labels && S.taskMarks === A.taskMarks && A.taskMarks === B.taskMarks
    && S.widgets === A.widgets && A.widgets === B.widgets && S.tc === A.tc && A.tc === B.tc && S.tg === A.tg && A.tg === B.tg
  if (!same) ok = false
  console.log(`Q${S.id} | crit ${S.crit} | qmarks ${S.marks} | tasks ${S.taskMarks}=${S.tsum} | labels ${S.labels} | widgets ${S.widgets || '-'} | ${S.tc}/${S.tg} | ${same ? 'ISOMORPHIC ✓' : 'MISMATCH ✗'}`)
}
const tot = (a) => a.reduce((x, q) => x + q.marks, 0)
console.log(`\nTotal question marks: src=${tot(src)} v1=${tot(v1)} v2=${tot(v2)} (paperMeta declares 88 — mirrored from source)`)
console.log(ok ? '\nALL 8 QUESTIONS ISOMORPHIC ACROSS SOURCE / v1 / v2 ✓' : '\nMISMATCH FOUND ✗')
