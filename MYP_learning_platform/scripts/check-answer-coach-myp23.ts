// Sanity check for the MYP3 / MYP2 answer-coach content (data/design/live/myp23-coaches.ts).
// For every coached written field in the five activities it checks that:
//   - a weak answer scores lower than a strong one, and the strong one reaches level 5 (points and hints unlock);
//   - a keyword-stuffed answer (the field's own word list pasted in) scores 2 or less;
//   - it has 2-3 hints, and the scaffold (where there is one) has a frame and steps;
// and that every quiz question in these activities has a `strand` and a `why`.
//
// Run:  npx esbuild scripts/check-answer-coach-myp23.ts --bundle --platform=node --alias:@=. --outfile=.check-coach.cjs --log-level=error && node .check-coach.cjs; rm -f .check-coach.cjs

import { estimateLevel } from '@/lib/design-live/answerFeedback'
import { MYP3_UNIT1_KICKOFF } from '@/data/design/live/myp3-unit1-kickoff'
import { MYP3_UNIT1_KICKOFF_EXTENDED } from '@/data/design/live/myp3-unit1-kickoff-extended'
import { MYP2_EVERYDAY_NEEDS } from '@/data/design/live/myp2-everyday-needs'
import { MYP2_DESIGN_STUDIO } from '@/data/design/live/myp2-design-studio'
import type { LiveActivityDefinition, WorksheetField } from '@/data/design/live/types'

// key = `${activityId}/${stageKey}.${sectionKey}.${fieldKey}`. `weak` is a thin answer, `strong` a developed one in a student's voice
// (not copied from the model answers).
const SAMPLES: Record<string, { weak: string; strong: string }> = {
  'choose.need.statement': {
    weak: 'Tariq needs a better bag.',
    strong: 'Tariq needs a way to remember his kit because he packs in a rush every morning and leaves things at home, so he gets sent to the office, and it matters because he loses marks and feels embarrassed in front of his friends.',
  },
  'choose.need.proof': {
    weak: 'It is a need because he needs it.',
    strong: 'It is a need and not a want because it happens every week, it costs him marks and time, and without a fix it just repeats. A want would be a nicer looking bag, which would not change the problem.',
  },
  'choose.persona.summary': {
    weak: 'Tariq is 14 and likes football.',
    strong: 'Tariq is a friendly 14 year old who loves football but rushes every morning, so he usually forgets his kit. He gets embarrassed when teachers ask where it is, and he remembers things better when he can see them.',
  },
  'interview.questions.best': {
    weak: 'The first question was the best one.',
    strong: 'The question about the last time it went wrong worked best because it was open, so she described a real morning in detail instead of just saying yes or no, and it taught me about a workaround I would not have guessed.',
  },
  'interview.empathy.changed': {
    weak: 'I thought something different.',
    strong: 'I assumed he forgot things because he did not care, but the interview showed he cares a lot and the rush causes it, so now I will focus on the morning routine rather than the bag.',
  },
  'plan.research.why': {
    weak: 'I did the interview first and then the rest.',
    strong: 'I put the interview first because everything else depends on knowing what he does now. The product comparison is second because I need to know what to compare, and the test is last because it only works after I have a design, otherwise I would waste time.',
  },
  'plan.check.weak': {
    weak: 'Step three is weakest.',
    strong: 'Step four is weakest because it says look online but has no source or purpose. I will fix it by naming three specific products to compare, and it helps me decide which feature to borrow, so I can choose with evidence.',
  },
  'plan.respect.note': {
    weak: 'I will be nice to people.',
    strong: 'I will ask permission before the interview and explain what it is for, because people can say no or stop at any time. I will use only a first name, keep my notes private and not take photos without consent.',
  },
  'evidence.assumptions.reflection': {
    weak: 'The interview was useful.',
    strong: 'The interview changed my thinking because I assumed the problem was the bag, but he said the rush is the real problem, so now I will focus on reminders and routines instead of a bigger bag.',
  },
  'products.insight.keep': {
    weak: 'I will keep the good bits.',
    strong: 'I will keep the rubber grip because all three products use it and reviews say it works. I will avoid thin handles because people say they hurt, and I will improve wet lids because none of the three grips well when wet.',
  },
  'brief.sentence.one': {
    weak: 'I am designing for Rosa.',
    strong: 'I am designing for Rosa, made from silicone and wood, because my interview and the product reviews showed she needs a thick handle that does not slip, so she can open jars without pain.',
  },
  'brief.brief.text': {
    weak: 'Rosa needs a jar opener.',
    strong: 'Rosa, 78, needs to open jars because arthritis makes gripping hard. My interview showed she avoids cooking, and my product analysis found that all three openers slip on wet lids. My solution must work one handed and fit a drawer, and must not have small parts.',
  },
  'brief.material.question': {
    weak: 'I will use plastic.',
    strong: 'I need to find out if silicone stays grippy when wet, so I will test it by pulling a wet lid with a spring scale and compare the force each time. I also need to find out where the material comes from.',
  },
  'reflect.journal.entry': {
    weak: 'I learned a lot today.',
    strong: 'Today I learned that my user problem is different from what I assumed. The interview showed it is the rush and not the bag, and my product analysis found a gap that none of the products fills.',
  },
  'reflect.journal.next': {
    weak: 'I would do it better.',
    strong: 'I would interview a second person next time because one interview gives only one view, so my next step is to ask a classmate the same questions and compare the answers before I choose a material.',
  },
  'develop.spec.ref': {
    weak: 'The force line is the most important.',
    strong: 'The force line matters most because Rosa said she avoids the cooker when knobs need two hands, so if it still needs too much force the design fails her however good it looks, and that was my main test.',
  },
  'develop.choose.why': {
    weak: 'I chose the ridged one because I liked it.',
    strong: 'I chose the ridged knob because it met all four lines in my specification, unlike the dotted one, which missed visibility. The sunburst looked best but failed the force line, so I rejected it.',
  },
  'develop.drawings.notes': {
    weak: 'It shows the knob.',
    strong: 'The drawing shows the top, front and side views, 40 mm wide and 25 mm tall, with the ridges 1.5 mm high. The labels name the silicone sleeve and the 6 mm hole so that a classmate could make it from the drawing alone.',
  },
  'create.plan.method': {
    weak: 'I chose 3D printing.',
    strong: 'I chose 3D printing because I can model the ridges exactly in Tinkercad and the school printer is available this week, whereas laser cutting would not give me raised ridges.',
  },
  'create.skills.skills': {
    weak: 'I used some tools.',
    strong: 'I modelled the knob in Tinkercad, then measured the ridge height with callipers and compared it against my drawing, which showed 1.4 mm against 1.5 mm. I sanded safely wearing a mask while the teacher was present.',
  },
  'create.make.works': {
    weak: 'Yes it works.',
    strong: 'It works as intended because I tested it on the real drawer and it stayed in place when pulled, which matches my specification. One thing did not work, the pointer was faint, so I made the line thicker.',
  },
  'evaluate.results.explain': {
    weak: 'It was good.',
    strong: 'The solution was mostly successful: it met the force and visibility lines, with 11 N and 3 out of 3 people, but only partly met the grip line because my user said the ridges felt a little sharp, which shows what to fix.',
  },
  'evaluate.improve.improve': {
    weak: 'I would make it better.',
    strong: 'Because my user said the ridges felt sharp, the next version should round off the ridge tops, so that it improves the grip line. The test also showed a wobble, so I would make the hole 0.2 mm smaller.',
  },
  'evaluate.impact.impact': {
    weak: 'It helps my user.',
    strong: 'It makes a difference to Rosa because she can now turn the knob with one hand without it slipping, so she can keep cooking independently. It could also help other people with weak grip, and a printed knob can be replaced when it wears.',
  },
  'evaluate.impact.journal': {
    weak: 'I learned about design.',
    strong: 'I learned that my first idea was not the best one, because testing with my user showed what really mattered. Next time I will test earlier, and I would write my testing plan at the same time as my specification.',
  },
  'week1.problem.problem': {
    weak: 'Students have a problem.',
    strong: 'Younger students struggle to move along the narrow corridor between lessons because it is crowded, so they arrive late and feel nervous, and sometimes get hurt.',
  },
  'week1.opportunity.statement': {
    weak: 'Make a new corridor.',
    strong: 'How might we help younger students move safely between lessons so that they arrive on time and feel calm, without making the corridor feel crowded?',
  },
  'week1.user.why': {
    weak: 'It matters to him.',
    strong: 'This matters to my cousin because he carries his bag every day and it makes him tired, so if it were solved he would feel less stressed and more ready to learn.',
  },
  'week1.journal.entry': {
    weak: 'Nothing much.',
    strong: 'Today I noticed that the corridor is busiest at break because everyone leaves at once. I was surprised that nobody seemed bothered, and I want to find out next how my user feels about it.',
  },
  'week2.findings.summary': {
    weak: 'My user needs help.',
    strong: 'My user said that carrying a heavy bag every day hurts, and I observed them rest it on the floor between lessons. This shows the real need is a way to carry less, and it is worth solving because it affects their day.',
  },
  'week2.findings.change': {
    weak: 'It changed a bit.',
    strong: 'At first I assumed my user wanted a lighter bag, but they said the real problem is having nowhere to keep books, so now my focus has changed to storage.',
  },
  'week2.journal.entry': {
    weak: 'It was fine.',
    strong: 'Today my user said something that surprised me because I assumed the noise was the problem, but they told me it is the queue. I want to find out next how long they wait.',
  },
}

const activities: LiveActivityDefinition[] = [MYP3_UNIT1_KICKOFF, MYP3_UNIT1_KICKOFF_EXTENDED, MYP2_EVERYDAY_NEEDS, MYP2_DESIGN_STUDIO]
const failures: string[] = []
let checked = 0
const seenSamples = new Set<string>()

for (const act of activities) {
  for (const stage of act.stages) {
    if (stage.type === 'mcq') {
      stage.questions.forEach((q, i) => {
        if (!q.strand || !q.why) failures.push(`${act.id}/${stage.key} question ${i + 1}: missing strand or why`)
      })
    }
    if (stage.type !== 'worksheet') continue
    for (const section of stage.sections) {
      for (const field of section.fields as WorksheetField[]) {
        if (!field.coach) continue
        const id = `${stage.key}.${section.key}.${field.key}`
        const sample = SAMPLES[id]
        if (!sample) { failures.push(`${act.id}/${id}: coached field has no sample in SAMPLES`); continue }
        seenSamples.add(id)
        checked++
        const weak = estimateLevel(sample.weak, field)
        const strong = estimateLevel(sample.strong, field)
        const words = field.coach.groups.flatMap((g) => g.words)
        const stuffed = estimateLevel(words.join(' '), field)
        const stuffedShort = estimateLevel(words.slice(0, 12).join(', '), field)
        const line = `${act.id}/${id}: weak ${weak.score}, strong ${strong.score}, stuffed ${stuffed.score}/${stuffedShort.score}`
        console.log(line)
        if (!(weak.score < strong.score)) failures.push(`${line} -> weak is not below strong`)
        if (strong.score < 5) failures.push(`${line} -> strong answer does not reach level 5`)
        if (stuffed.score > 2 || stuffedShort.score > 2) failures.push(`${line} -> keyword stuffing scores above 2`)
        const hints = field.coach.hints ?? []
        if (hints.length < 2 || hints.length > 3) failures.push(`${act.id}/${id}: needs 2-3 hints, has ${hints.length}`)
        if (field.coach.scaffold && (!field.coach.scaffold.frame || field.coach.scaffold.steps.length < 3)) failures.push(`${act.id}/${id}: scaffold needs a frame and 3+ steps`)
      }
    }
  }
}
for (const id of Object.keys(SAMPLES)) if (!seenSamples.has(id)) failures.push(`sample ${id} does not match a coached field`)

console.log(`\n${checked} coached fields checked`)
if (failures.length) {
  console.error('\nFAILURES:\n' + failures.join('\n'))
  process.exit(1)
}
console.log('All checks passed')
