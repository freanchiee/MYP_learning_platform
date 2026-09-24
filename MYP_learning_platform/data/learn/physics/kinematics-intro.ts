import type { FlowNode, Module } from './types'

// Built from Class 2 notes (1D Motion), the teacher's "Motion & Measurement" article and the
// teacher's Desmos "Motion 1D" activity. The notes' arrows, trees and tables stay visual.

const MOTION_FLOW: FlowNode = {
  q: 'Is the object changing its position w.r.t. time?',
  tag: 'w.r.t. a reference point',
  branches: [
    { label: 'YES', tone: 'yes', node: { title: 'MOTION', note: 'Relative, not absolute, because position is relative' } },
    { label: 'NO', tone: 'no', node: { title: 'REST' } },
  ],
}

const PERIODIC_FLOW: FlowNode = {
  q: 'Is the object making repetitive motion?',
  branches: [
    { label: 'YES', tone: 'yes', node: { title: 'Periodic motion', note: 'a pattern that repeats' } },
    { label: 'NO', tone: 'no', node: { title: 'Non-periodic motion', tag: 'N.P.M.' } },
  ],
}

const NATURAL_NODE: FlowNode = {
  title: 'Natural periodic motion',
  tag: 'historically used to measure time',
  boxes: [
    { text: 'Precise', kind: 'no' },
    { text: 'Accurate', kind: 'no' },
  ],
  note: 'so people made their own',
}

const SERIES_FLOW: FlowNode = {
  title: 'Infinite series',
  note: '½ + ¼ + ⅛ + 1/16 + 1/32 + … → ∞ terms',
  branches: [
    { label: 'CONVERGENT', tone: 'yes', node: { title: 'Finite sum', note: 'here: exactly 1, the whole square' } },
    { label: 'DIVERGENT', tone: 'no', node: { title: '∞ Infinite sum' } },
  ],
}

const UNIFORM_NODE: FlowNode = {
  title: 'Uniform motion',
  boxes: [
    { text: 'Equal change in position per unit time', kind: 'yes' },
    { text: 'Constant velocity', kind: 'yes' },
    { text: 'Acceleration', kind: 'no' },
  ],
}

export const KINEMATICS_INTRO: Module = {
  slug: 'a1-kinematics',
  code: 'A.1',
  title: 'Kinematics: describing motion',
  theme: 'Theme A · Space, time and motion',
  source: 'Class 2 · 1D Motion',
  intro: 'Start with the best question you can ask about motion, see how repetition gave us clocks, meet an ancient paradox, and model motion yourself.',
  lessons: [
    // ------------------------------------------------------------------ A.1 · 1
    {
      slug: 'motion-or-rest',
      code: 'A.1 · 1',
      title: 'Motion or rest?',
      blurb: 'Ask a good question: with respect to what?',
      syllabus: 'Opening of A.1 Kinematics (before A.1.1)',
      level: 'SL+HL',
      difficulty: 1,
      minutes: 12,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'You sit on a train at 100 km h⁻¹. A friend on the platform says you are moving. You say you are still. Who is right?' },
        {
          t: 'deck',
          slides: [
            {
              id: 'question',
              kicker: 'Ask better',
              title: 'A bad question and a good one',
              blocks: [
                { t: 'pills', groups: [{ label: '✗ Bad question', tone: 'warn', items: ['What is motion?'] }, { label: '✓ Good question', items: ['Is the object changing its position w.r.t. time?'] }] },
                { t: 'note', text: 'A good question is 50% of the solution.' },
              ],
            },
            { id: 'tree', kicker: 'Follow the arrows', title: 'Motion or rest', blocks: [{ t: 'flow', title: 'Motion or rest?', root: MOTION_FLOW }] },
            {
              id: 'relative',
              kicker: 'Explore',
              title: 'Motion is relative',
              blocks: [{ t: 'widget', id: 'frame-of-reference', title: 'Choose a reference point', idea: 'The same objects are at rest or in motion, depending on what you measure from.', predict: { q: 'Predict: a passenger sits still in a moving train. Measured from the platform she is…', options: ['at rest', 'in motion', 'impossible to say'], answer: 1, why: 'From the platform her position changes with time, so she is in motion. From the train she is at rest.' } }],
            },
          ],
        },
        { t: 'check', id: 'a1-c1', q: 'Which is the better question about motion?', options: ['What is motion?', 'Is the object changing position with respect to time?', 'Why does everything move?'], answer: 1, why: 'It can be answered yes or no, and it names what to measure from.', back: 'question' },
        { t: 'check', id: 'a1-c2', q: 'A passenger is at rest relative to the train. Relative to the ground she is…', options: ['also at rest', 'in motion', 'not a physical object'], answer: 1, why: 'Her position changes relative to the ground.', back: 'relative' },
        { t: 'check', id: 'a1-c3', q: 'Why is motion relative?', options: ['Because position is measured from a reference point', 'Because objects slow down', 'Because time can be measured'], answer: 0, why: 'Position depends on the reference point, so motion does too.', back: 'tree' },
        { t: 'apply', id: 'a1-a1', prompt: 'A cyclist passes a bus stop. Describe her motion relative to two different reference points.', model: 'Relative to the bus stop, she changes position with time, so she is in motion. Relative to her own bicycle, her position does not change, so she is at rest. Motion depends on the reference point, so it is relative.', checklist: ['I named two reference points', 'I stated motion or rest for each', 'I used "changing position with time"', 'I concluded motion is relative'] },
        { t: 'summary', points: ['Ask: is position changing with time, from a reference point?', 'Yes: motion. No: rest.', 'Motion is relative, because position is relative.'], terms: [{ term: 'Reference point', def: 'where position is measured from' }, { term: 'Motion', def: 'a change of position with time' }, { term: 'Rest', def: 'no change of position with time' }], formulas: [], errors: ['Saying "it moves" without a reference point.', 'Thinking rest and motion are absolute.'] },
      ],
    },
    // ------------------------------------------------------------------ A.1 · 2
    {
      slug: 'periodic-motion-and-time',
      code: 'A.1 · 2',
      title: 'Repeating motion and the birth of clocks',
      blurb: 'How repetition gave us a way to measure time.',
      syllabus: 'Opening of A.1 Kinematics · link to periodic motion (Theme C)',
      level: 'SL+HL',
      difficulty: 2,
      minutes: 14,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'Before watches and phones, how did anyone know how long a day, a month or a year was?' },
        {
          t: 'deck',
          slides: [
            { id: 'periodic', kicker: 'Follow the arrows', title: 'Does it repeat?', blocks: [{ t: 'flow', title: 'Repetitive motion', root: PERIODIC_FLOW }] },
            {
              id: 'natural',
              kicker: 'Natural periodic motion',
              title: 'Nature’s clocks',
              blocks: [
                {
                  t: 'arrows',
                  head: ['Repeats from…', 'Period'],
                  rows: [
                    { emoji: '☀️', from: 'sunrise → sunset', to: '1 day' },
                    { emoji: '🌕', from: 'full moon → full moon', to: '1 month' },
                    { emoji: '❄️', from: 'winter → summer → winter', to: '1 year' },
                    { emoji: '❤️', from: 'one beat → next beat', to: '1 heartbeat' },
                  ],
                },
                { t: 'flow', title: 'The catch', root: NATURAL_NODE },
              ],
            },
            {
              id: 'manmade',
              kicker: 'Man-made periodic motion',
              title: 'We built our own',
              blocks: [
                {
                  t: 'arrows',
                  head: ['Made with', 'How it keeps time'],
                  rows: [
                    { emoji: '⏳', from: 'sand clock', to: 'sand falls at a steady rate' },
                    { emoji: '🕰️', from: 'pendulum', to: 'a big pendulum drives the clock hands', note: 'clock tower' },
                    { emoji: '💎', from: 'quartz crystal', to: 'electronic oscillation', note: '~32 768 per second in a watch' },
                  ],
                },
              ],
            },
            {
              id: 'pendulum',
              kicker: 'Explore',
              title: 'Build a pendulum clock',
              blocks: [
                { t: 'formulas', items: [{ eq: 'f = 1/T', legend: ['T: period (s)', 'f: frequency (Hz)'] }, { eq: 'T = 2π√(L/g)', legend: ['L: length (m)', 'g = 9.81 m s⁻²', 'small swings only'] }] },
                { t: 'widget', id: 'pendulum', title: 'Change the length, watch the period', idea: 'Small swings only, up to about 15°.', predict: { q: 'Predict: you make the pendulum 4 times longer. The period becomes…', options: ['4 times longer', '2 times longer', 'unchanged'], answer: 1, why: 'T = 2π√(L/g). Multiplying L by 4 multiplies T by √4 = 2.' } },
              ],
            },
          ],
        },
        { t: 'check', id: 'a2-c1', q: 'Which is a man-made periodic motion?', options: ['Sunrise to sunrise', 'A pendulum swinging in a clock', 'A full moon'], answer: 1, why: 'A pendulum clock is built by people.', back: 'manmade' },
        { t: 'check', id: 'a2-c2', q: 'A pendulum takes 2.0 s per complete swing. Its frequency is…', options: ['0.5 Hz', '2.0 Hz', '4.0 Hz'], answer: 0, why: 'f = 1/T = 1/2.0 s = 0.5 Hz.', back: 'pendulum' },
        { t: 'check', id: 'a2-c3', q: 'Why did people move from natural to man-made periodic motion?', options: ['Natural motion is too regular', 'Natural motion is less precise and accurate', 'Man-made motion is louder'], answer: 1, why: 'Man-made systems can be made much more precise.', back: 'natural' },
        { t: 'apply', id: 'a2-a1', prompt: 'Explain why a pendulum is a better timekeeper than the moon’s phases.', model: 'A pendulum repeats every few seconds, so it can time short intervals, and it can be made precise and the same anywhere. The moon’s cycle takes about a month and is less precise.', checklist: ['I compared precision', 'I compared how often each repeats', 'I mentioned man-made vs natural', 'I gave a reason'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 1', q: 'Motion means…', options: ['a change of position with time', 'having a force', 'being large'], answer: 0, why: 'A change of position with time.' }, { from: '0.3', q: 'The SI base unit of time is…', options: ['minute', 'second', 'hour'], answer: 1, why: 'The second.' }] },
        { t: 'summary', points: ['Repeating motion is periodic.', 'Natural periodic motion first measured time, but not precisely.', 'Pendulums and quartz are precise.'], terms: [{ term: 'Period T', def: 'time for one repeat' }, { term: 'Frequency f', def: 'repeats per second' }], formulas: ['f = 1/T', 'T = 2π√(L/g)'], errors: ['Mixing up period and frequency.', 'Using big swings with the simple formula.'] },
      ],
    },
    // ------------------------------------------------------------------ A.1 · 3
    {
      slug: 'zeno-and-infinite-series',
      code: 'A.1 · 3',
      title: 'Zeno: is all motion an illusion?',
      blurb: 'An ancient paradox, settled by a series that adds to a finite number.',
      syllabus: 'Enrichment · mathematics and Theory of Knowledge',
      level: 'SL+HL',
      difficulty: 2,
      minutes: 12,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'To walk from A to B you must cover half the distance, then half of what is left, then half again, forever. So how does anyone arrive?' },
        {
          t: 'deck',
          slides: [
            {
              id: 'paradox',
              kicker: 'Zeno of Elea',
              title: 'The paradox',
              blocks: [
                { t: 'note', text: 'All motion is an illusion. Nothing moves.' },
                {
                  t: 'arrows',
                  head: ['Step', 'Distance still to cover'],
                  rows: [
                    { from: '1st step', to: '½ of the way' },
                    { from: '2nd step', to: '¼ more' },
                    { from: '3rd step', to: '⅛ more' },
                    { from: '…∞ steps', to: '∞ time?', note: 'always some of it left' },
                  ],
                },
              ],
            },
            { id: 'series', kicker: 'Follow the arrows', title: 'Infinite series', blocks: [{ t: 'flow', title: 'Two kinds of infinite series', root: SERIES_FLOW }] },
            {
              id: 'sum',
              kicker: 'Explore',
              title: 'Add the steps',
              blocks: [{ t: 'widget', id: 'zeno-series', title: 'Add more and more terms', idea: 'The total creeps up to 1 but never passes it. If each step takes half as long, the total time is finite too.', predict: { q: 'Predict: adding infinitely many terms of ½ + ¼ + ⅛ + …, the total would be…', options: ['infinite', 'exactly 1', 'a bit more than 1'], answer: 1, why: 'After n terms the total is 1 − (½)ⁿ, which approaches 1.' } }],
            },
            {
              id: 'settled',
              kicker: 'Settled',
              title: 'Why we do arrive',
              blocks: [{ t: 'callout', kind: 'idea', title: 'The resolution', text: 'The steps shrink, and so do the times. Infinitely many steps do not need infinite time when the series converges.' }],
            },
          ],
        },
        { t: 'check', id: 'a3-c1', q: 'A convergent series…', options: ['adds up to a finite number', 'adds up to infinity', 'has no terms'], answer: 0, why: 'Convergent means the total is finite.', back: 'series' },
        { t: 'check', id: 'a3-c2', q: 'After 3 terms of ½ + ¼ + ⅛ + …, the total is…', options: ['7/8', '3/4', '1'], answer: 0, why: '½ + ¼ + ⅛ = 7/8 = 1 − (½)³.', back: 'sum' },
        { t: 'check', id: 'a3-c3', q: 'What is wrong with "infinite steps need infinite time"?', options: ['The steps have no size', 'The step times also shrink and can add to a finite total', 'Time does not exist'], answer: 1, why: 'When the times form a convergent series, the total time is finite.', back: 'settled' },
        { t: 'apply', id: 'a3-a1', prompt: 'In two sentences, explain how a convergent series settles Zeno’s paradox.', model: 'Zeno splits a journey into infinitely many steps, but the step sizes ½, ¼, ⅛, … form a convergent series that adds to the whole distance. The times also form a convergent series, so the total time is finite and the journey can be finished.', checklist: ['I said the series converges', 'I said the total is finite', 'I covered time as well as distance', 'I used two sentences'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 2', q: 'Frequency is…', options: ['1/T', 'T²', 'L/g'], answer: 0, why: 'f = 1/T.' }, { from: 'A.1 · 1', q: 'Motion is relative because…', options: ['position depends on the reference point', 'objects slow down', 'time varies'], answer: 0, why: 'Position depends on the reference point.' }] },
        { t: 'summary', points: ['Zeno claimed infinite steps mean infinite time.', '½ + ¼ + ⅛ + … converges to 1.', 'Convergent: finite. Divergent: infinite.'], terms: [{ term: 'Convergent', def: 'the sum is finite' }, { term: 'Divergent', def: 'the sum grows without limit' }], formulas: ['Sₙ = 1 − (½)ⁿ'], errors: ['Thinking infinitely many terms must sum to infinity.'] },
      ],
    },
    // ------------------------------------------------------------------ A.1 · 4
    {
      slug: 'model-1d-motion',
      code: 'A.1 · 4',
      title: 'Model 1D motion: Y = vt',
      blurb: 'Turn "changing position with time" into a model, then animate it.',
      syllabus: 'Opening of A.1 Kinematics · uniform motion (before A.1.1)',
      level: 'SL+HL',
      difficulty: 2,
      minutes: 15,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'If you know how fast something moves, can you say exactly where it will be later?' },
        {
          t: 'deck',
          slides: [
            {
              id: 'uniform',
              kicker: 'Uniform motion',
              title: 'Position at a future time',
              blocks: [
                { t: 'formulas', items: [{ eq: 'Y = vt', legend: ['Y: position on the Y axis', 'v: velocity', 't: time in the future'] }] },
                { t: 'arrows', rows: [{ from: 'v = 3', to: 'position changes by 3 units each second', note: 'rate of change of position = velocity' }] },
                { t: 'flow', title: 'What uniform motion means', root: UNIFORM_NODE },
              ],
            },
            {
              id: 'desmos',
              kicker: 'Challenge',
              title: 'Make it move in Desmos',
              blocks: [{ t: 'desmos', src: 'https://www.desmos.com/calculator/koj0gyubjl?embed', title: 'Motion 1D', description: 'Aim: animate a bouncing ball as close to reality as possible, in vertical motion only. Start with Y = vt. Text description: a Desmos graph with an image whose vertical position is driven by your expressions and a time slider.' }],
            },
          ],
        },
        { t: 'check', id: 'a4-c1', q: 'An object moves uniformly at v = 4 m s⁻¹ from Y = 0. Where is it after 5 s?', options: ['9 m', '20 m', '1.25 m'], answer: 1, why: 'Y = vt = 4 × 5 = 20 m.', back: 'uniform' },
        { t: 'check', id: 'a4-c2', q: 'Uniform motion means…', options: ['equal change in position per unit time', 'speeding up steadily', 'moving in a circle'], answer: 0, why: 'Equal position change in equal times: constant velocity.', back: 'uniform' },
        { t: 'check', id: 'a4-c3', q: 'In uniform motion the acceleration is…', options: ['zero', 'equal to v', 'constant and not zero'], answer: 0, why: 'Constant velocity means no acceleration.', back: 'uniform' },
        { t: 'apply', id: 'a4-a1', prompt: 'A drone climbs at a steady 5 m s⁻¹ from the ground. Write its height model, find the height after 8 s, and state your assumption.', model: 'Y = vt = 5 × 8 = 40 m. I assumed uniform motion (constant velocity, no acceleration) and that the drone started at Y = 0 when t = 0.', checklist: ['I wrote Y = vt', 'I substituted with units', 'The answer is 40 m', 'I stated the assumption'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 3', q: 'A convergent series adds up to…', options: ['a finite number', 'infinity'], answer: 0, why: 'A finite number.' }, { from: 'A.1 · 2', q: 'The period of a pendulum is measured in…', options: ['hertz', 'seconds'], answer: 1, why: 'Period is a time, in seconds.' }] },
        { t: 'summary', points: ['Uniform motion: equal change in position per unit time.', 'Velocity is the rate of change of position.', 'Y = vt predicts position, starting from Y = 0.'], terms: [{ term: 'Velocity', def: 'rate of change of position' }, { term: 'Uniform motion', def: 'constant velocity, no acceleration' }], formulas: ['Y = vt'], errors: ['Forgetting the start-at-zero assumption.', 'Leaving out the unit.'] },
      ],
    },
  ],
}
