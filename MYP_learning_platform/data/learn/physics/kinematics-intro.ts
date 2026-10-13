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

    // ------------------------------------------------------------------ A.1 · 5
    {
      slug: 'vectors-resolving',
      code: 'A.1 · 5',
      title: 'Vectors: components and the river',
      blurb: 'Steer a boat across a flowing river, then learn to resolve any vector into two parts.',
      syllabus: 'A.1 Kinematics · vectors and scalars',
      level: 'SL+HL',
      difficulty: 2,
      minutes: 20,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'Point a boat straight across a flowing river. Does it land on the opposite bank, or somewhere downstream?' },
        {
          t: 'deck',
          slides: [
            {
              id: 'game',
              kicker: 'Play first',
              title: 'Cross the river — where do you land?',
              blocks: [
                {
                  t: 'widget',
                  id: 'river-crossing-game',
                  title: 'Steer the boat',
                  idea: 'Try aiming straight across, then try aiming upstream. Watch the three coloured readouts: your boat, the current, and where you actually go.',
                },
                { t: 'note', text: 'The boat never quite goes where it points. Two things happen at once: the engine pushes it across, and the current carries it along. Next: how to add those two together.' },
              ],
            },
            {
              id: 'vectors',
              kicker: 'What just happened',
              title: 'Two velocities at once',
              blocks: [
                {
                  t: 'arrows',
                  head: ['What', 'Direction'],
                  rows: [
                    { emoji: '🚤', from: 'the boat’s velocity', to: 'relative to the water, wherever you steer it', note: 'a vector' },
                    { emoji: '🌊', from: 'the current’s velocity', to: 'always downstream', note: 'a vector' },
                    { emoji: '🟡', from: 'the boat’s ACTUAL path over the ground', to: 'the sum of the two', note: 'still a vector' },
                  ],
                },
                { t: 'callout', kind: 'idea', title: 'Vector addition', text: 'When two velocities act at once, the real motion is their vector sum: add them tip to tail, or add their components. Direction matters as much as size.' },
              ],
            },
            {
              id: 'resolve',
              kicker: 'The tool',
              title: 'Resolving a vector into components',
              blocks: [
                { t: 'p', text: 'Any vector can be split into two parts at right angles to each other: a horizontal part and a vertical part. This is called **resolving** the vector.' },
                { t: 'formulas', items: [{ eq: 'Vx = V cos θ', legend: ['the horizontal component'] }, { eq: 'Vy = V sin θ', legend: ['the vertical component'] }] },
                {
                  t: 'widget',
                  id: 'vector-resolve-anim',
                  title: 'Change the vector, watch the components',
                  idea: 'θ is measured from the horizontal. The two dashed lines are Vx and Vy.',
                  predict: { q: 'Predict: a vector of magnitude 10 points at 90° (straight up). Its horizontal component Vx is…', options: ['10', '0', '5'], answer: 1, why: 'Vx = V cos 90° = 10 × 0 = 0. All of it is vertical.' },
                },
                { t: 'callout', kind: 'warn', title: 'Check it', text: 'The components should always rebuild the original vector: √(Vx² + Vy²) = V. If they don’t, the angle or the trig function is wrong.' },
              ],
            },
            {
              id: 'analysis',
              kicker: 'Back to the river',
              title: 'Resolving the boat’s velocity',
              blocks: [
                { t: 'p', text: 'Aim the boat at angle θ from straight across. Only the part of its velocity that points **across** the river gets you to the other side; the part that points **along** the river just adds to the current.' },
                { t: 'formulas', items: [{ eq: 'across = V cos θ', legend: ['gets you over: t = width / across'] }, { eq: 'along = current + V sin θ', legend: ['carries you downstream: drift = along × t'] }] },
                {
                  t: 'table',
                  head: ['Aim', 'Effect'],
                  rows: [
                    ['straight across (θ = 0°)', 'shortest crossing time — but the current still drifts you downstream'],
                    ['upstream (θ negative)', 'crossing takes longer, but you can cancel the drift completely'],
                    ['downstream (θ positive)', 'never a good idea: it only adds to the drift'],
                  ],
                },
                { t: 'callout', kind: 'idea', title: 'To land exactly opposite', text: 'Choose θ so that along = 0: aim upstream at θ = −sin⁻¹(current ÷ boat speed). This only works if the boat is faster than the current.' },
              ],
            },
            {
              id: 'retry',
              kicker: 'Try again',
              title: 'Now aim on purpose',
              blocks: [
                {
                  t: 'widget',
                  id: 'river-crossing-game',
                  title: 'Land exactly opposite your start',
                  idea: 'Work out the heading with the formula above, then steer to it and check the drift.',
                  predict: { q: 'Predict: boat top speed 3 m s⁻¹, current 2 m s⁻¹. To land exactly opposite, you should aim…', options: ['straight across, 0°', 'upstream, about 42°', 'downstream, about 42°'], answer: 1, why: 'θ = −sin⁻¹(2/3) ≈ −41.8°: aim upstream by about 42°.' },
                },
              ],
            },
          ],
        },
        { t: 'check', id: 'a1-5-c1', q: 'A vector of magnitude 8 points at 60° above the horizontal. Its vertical component is…', options: ['4.0', '6.9', '8.0'], answer: 1, why: 'Vy = V sin θ = 8 × sin 60° ≈ 6.9.', back: 'resolve' },
        { t: 'check', id: 'a1-5-c2', q: 'A boat aims straight across a river (θ = 0°). Compared with aiming slightly upstream, its crossing time is…', options: ['shorter', 'longer', 'the same'], answer: 0, why: 'across = V cos θ is largest at θ = 0°, so the crossing time (width ÷ across) is shortest.', back: 'analysis' },
        { t: 'check', id: 'a1-5-c3', q: 'A river flows at 2 m s⁻¹. A boat that can only manage 1.5 m s⁻¹…', options: ['can still land exactly opposite its start', 'can never fully cancel the drift', 'will not move at all'], answer: 1, why: 'Cancelling the drift needs the boat faster than the current; here it is not.', back: 'analysis' },
        { t: 'check', id: 'a1-5-c4', q: 'To rebuild a vector from its components Vx and Vy, its magnitude is…', options: ['Vx + Vy', '√(Vx² + Vy²)', 'Vx × Vy'], answer: 1, why: 'Pythagoras: the components are the two shorter sides of a right triangle.', back: 'resolve' },
        { t: 'apply', id: 'a1-5-a1', prompt: 'A river is 30 m wide and flows at 1.5 m s⁻¹. A boat can travel at 2.5 m s⁻¹ in still water. If the boat aims straight across, find the time to cross and the drift downstream.', model: 'Aiming straight across, θ = 0°, so across = V cos 0° = 2.5 m s⁻¹ and along = current = 1.5 m s⁻¹ (the boat adds nothing sideways). Time = width / across = 30 / 2.5 = 12 s. Drift = along × time = 1.5 × 12 = 18 m.', checklist: ['I used across = V cos θ with θ = 0°', 'I found time = width / across = 12 s', 'I used along = current only (no boat contribution)', 'I found drift = 18 m'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 1', q: 'Motion is described…', options: ['relative to a reference point', 'in absolute terms'], answer: 0, why: 'Position is relative.' }, { from: 'A.1 · 4', q: 'Uniform motion means…', options: ['constant velocity', 'constant force'], answer: 0, why: 'No acceleration.' }] },
        { t: 'summary', points: ['A vector resolves into components: Vx = V cos θ, Vy = V sin θ.', 'When two velocities act at once, the real motion is their vector sum.', 'Crossing a river: only the across component gets you over; the along component (current + boat) causes drift.'], terms: [{ term: 'Resolve', def: 'split a vector into two components at right angles' }, { term: 'Resultant', def: 'the single vector that has the same effect as two or more vectors added together' }], formulas: ['Vx = V cos θ, Vy = V sin θ', 'V = √(Vx² + Vy²)', 'across = V cos θ, along = current + V sin θ'], errors: ['Mixing up sin and cos for the two components.', 'Forgetting the current still acts even when the boat aims straight across.', 'Assuming you can always cancel the drift: only true if the boat is faster than the current.'] },
      ],
    },
    // ------------------------------------------------------------------ A.1 · 6
    {
      slug: 'terms-of-motion',
      code: 'A.1 · 6',
      title: 'Terms to describe motion',
      blurb: 'Position, distance, displacement, speed, velocity and acceleration: which are vectors, and why the difference matters.',
      syllabus: 'A.1 Kinematics · distance, displacement, speed, velocity, acceleration',
      level: 'SL+HL',
      difficulty: 2,
      minutes: 18,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'You walk 3 m east and then 4 m north. How far did you walk? How far are you from where you started? Those are two different questions with two different answers.' },
        {
          t: 'deck',
          slides: [
            {
              id: 'position',
              kicker: '1 · Position',
              title: 'Where is it?',
              blocks: [
                { t: 'p', text: 'Position says where an object is, measured from a chosen reference point. In three dimensions it needs three numbers, (x, y, z). Motion along a single line needs only one: this is **1D** motion.' },
                { t: 'callout', kind: 'note', title: 'Link back', text: 'Position depends on the reference point you measure from. That is exactly why motion is relative (A.1 · 1).' },
              ],
            },
            {
              id: 'distance',
              kicker: 'Two ways to measure a journey',
              title: 'Distance and displacement',
              blocks: [
                {
                  t: 'table',
                  head: ['', 'Distance', 'Displacement'],
                  rows: [
                    ['Kind of quantity', 'scalar (size only)', 'vector (size and direction)'],
                    ['What it measures', 'the length of the PATH covered', 'the shortest route, the straight line from start to end'],
                    ['Can it be zero after a long trip?', 'no', 'yes: come back to the start'],
                  ],
                },
                {
                  t: 'steps',
                  title: 'east, then north',
                  given: 'You walk 3 m east, then 4 m north. Find the distance, the displacement, and the direction of the displacement.',
                  steps: [
                    { line: 'Distance = 3 + 4 = 7 m', why: 'Distance adds up the length of the path you actually walked.' },
                    { line: 'Displacement = √(3² + 4²) = √25 = 5 m', why: 'The straight line from start to end is the hypotenuse of a right-angled triangle.' },
                    { line: 'tan θ = opposite / adjacent = 4 / 3, so θ = tan⁻¹(4/3) = 53.1°', why: 'The direction is the angle of that hypotenuse, measured from the east axis.' },
                  ],
                  answer: 'distance 7 m; displacement 5 m at 53.1° north of east',
                },
              ],
            },
            {
              id: 'speed',
              kicker: '2 · Speed and velocity',
              title: 'The same idea, scalar and vector',
              blocks: [
                { t: 'formulas', items: [{ eq: 'speed = distance / time', legend: ['a scalar', 'distance: the length of the path covered'] }, { eq: 'v = Δx / t = (x_f − x_i) / t', legend: ['a vector', 'Δx: displacement, the shortest route from x_i to x_f', 'unit: m s⁻¹'] }] },
                { t: 'callout', kind: 'warn', title: 'Not the same', text: 'Δx / t is the average VELOCITY, not the average speed. Average speed uses distance. For the walk above, 5 m of displacement and 7 m of distance give different answers for the same time.' },
                { t: 'formulas', items: [{ eq: 'Δx = vt', legend: ['for uniform motion: the position changes by v every second'] }] },
              ],
            },
            {
              id: 'acceleration',
              kicker: '3 · Acceleration',
              title: 'The rate of change of velocity',
              blocks: [
                { t: 'formulas', items: [{ eq: 'a = Δv / t = (v − u) / t', legend: ['u: initial velocity (v_i)', 'v: final velocity (v_f)', 'unit: m s⁻¹ per s = m s⁻²'] }, { eq: 'v = u + at', legend: ['rearranged: the velocity after time t'] }] },
                { t: 'callout', kind: 'idea', title: 'Reading a = 2 m s⁻²', text: 'The velocity increases by 2 m s⁻¹ every second: 0, 2, 4, 6, 8 … The unit is a speed per second, which is why it is m s⁻¹ ÷ s.' },
              ],
            },
          ],
        },
        { t: 'check', id: 'a1-6-c1', q: 'Which of these is a vector?', options: ['distance', 'displacement', 'speed'], answer: 1, why: 'Displacement has a size and a direction. Distance and speed are scalars.', back: 'distance' },
        { t: 'check', id: 'a1-6-c2', q: 'You run once around a 400 m track and finish where you started. Your displacement is…', options: ['400 m', '200 m', '0 m'], answer: 2, why: 'Displacement is the straight line from start to end, and here they are the same point.', back: 'distance' },
        { t: 'check', id: 'a1-6-c3', q: 'A car speeds up from 4 m s⁻¹ to 16 m s⁻¹ in 3 s. Its acceleration is…', options: ['4 m s⁻²', '12 m s⁻²', '36 m s⁻²'], answer: 0, why: 'a = (v − u) / t = (16 − 4) / 3 = 4 m s⁻².', back: 'acceleration' },
        { t: 'check', id: 'a1-6-c4', q: 'A ball at 3 m s⁻¹ accelerates at 2 m s⁻² for 5 s. Its final velocity is…', options: ['13 m s⁻¹', '10 m s⁻¹', '30 m s⁻¹'], answer: 0, why: 'v = u + at = 3 + 2 × 5 = 13 m s⁻¹.', back: 'acceleration' },
        { t: 'apply', id: 'a1-6-a1', prompt: 'A drone flies 6 m east and then 8 m north in 5 s. Find its distance, its displacement, its average speed and the size of its average velocity.', model: 'Distance = 6 + 8 = 14 m. Displacement = √(6² + 8²) = 10 m. Average speed = distance / time = 14 / 5 = 2.8 m s⁻¹. Average velocity = displacement / time = 10 / 5 = 2.0 m s⁻¹ (in the direction of the displacement). The speed is bigger because distance is at least as big as displacement.', checklist: ['I added the two legs for distance (14 m)', 'I used Pythagoras for displacement (10 m)', 'I divided distance by time for speed (2.8 m s⁻¹)', 'I divided displacement by time for velocity (2.0 m s⁻¹)'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 5', q: 'A vector splits into two components at…', options: ['right angles', '45° to each other'], answer: 0, why: 'Components are at right angles.' }, { from: 'A.1 · 4', q: 'Uniform motion has acceleration…', options: ['zero', 'constant and not zero'], answer: 0, why: 'Constant velocity means a = 0.' }] },
        { t: 'summary', points: ['Distance (scalar) is the length of the path; displacement (vector) is the straight line from start to end.', 'Speed = distance / time. Velocity = displacement / time.', 'Acceleration is the rate of change of velocity, a = (v − u) / t, so v = u + at.'], terms: [{ term: 'Displacement', def: 'shortest route from start to end, a vector' }, { term: 'Acceleration', def: 'rate of change of velocity, in m s⁻²' }], formulas: ['Δx = vt', 'a = (v − u) / t', 'v = u + at'], errors: ['Calling Δx / t the average speed.', 'Adding distances when the question asks for displacement.', 'Writing the unit of acceleration as m s⁻¹.'] },
      ],
    },

    // ------------------------------------------------------------------ A.1 · 7
    {
      slug: 'motion-graphs',
      code: 'A.1 · 7',
      title: 'Motion graphs: x–t, v–t, a–t',
      blurb: 'Three linked graphs describe the same motion. Read the slope, read the area, and tell uniform from non-uniform.',
      syllabus: 'A.1 Kinematics · motion graphs, uniform and non-uniform motion',
      level: 'SL+HL',
      difficulty: 2,
      minutes: 25,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'One motion, three graphs: where it is, how fast it is going, how quickly that speed is changing. Each graph hides the other two inside its slope and its area.' },
        {
          t: 'deck',
          slides: [
            {
              id: 'graph',
              kicker: 'Why graph?',
              title: 'A graph is a picture of data',
              blocks: [
                { t: 'p', text: 'A graph is a visual representation of data: each point pairs two physical quantities. The equation **y = mx** is a straight line through the origin. This kind of relationship is called **direct proportionality**: if one quantity doubles, the other doubles too.' },
                { t: 'callout', kind: 'note', title: 'Slope', text: 'The slope (gradient, steepness) is rise / run = (y₂ − y₁) / (x₂ − x₁). On a graph of position against time, that ratio is a velocity.' },
              ],
            },
            {
              id: 'uniform',
              kicker: 'Uniform motion',
              title: 'Equal distance in equal time',
              blocks: [
                { t: 'table', head: ['Graph', 'Shape', 'Says'], rows: [['x–t', 'straight line through the origin', 'the slope is the velocity: steeper means faster'], ['v–t', 'flat, horizontal line', 'the velocity is constant'], ['a–t', 'flat line ON the t axis', 'a = 0']] },
                {
                  t: 'widget',
                  id: 'motion-graphs-lab',
                  title: 'Three graphs for one motion',
                  idea: 'Start with the three uniform presets (A, B, C). On the x–t graph, compare how steep each line is with its velocity on the v–t graph.',
                  predict: { q: 'Predict: three objects move uniformly at 12.5, 5 and 2.5 m s⁻¹. On the x–t graph, the fastest object has the…', options: ['steepest line', 'flattest line', 'same slope as the others'], answer: 0, why: 'Slope = rise / run = Δx / t = velocity, so a bigger velocity means a steeper x–t line.' },
                },
              ],
            },
            {
              id: 'area',
              kicker: 'Slope and area',
              title: 'What each graph hides',
              blocks: [
                { t: 'table', head: ['On the…', 'The SLOPE is', 'The AREA under it is'], rows: [['x–t graph', 'velocity', 'nothing useful (no physical meaning)'], ['v–t graph', 'acceleration', 'displacement'], ['a–t graph', 'jerk (rate of change of a)', 'change in velocity']] },
                { t: 'callout', kind: 'idea', title: 'Check with uniform motion', text: 'A flat v–t line at 5 m s⁻¹ for 2 s encloses a rectangle of area 5 × 2 = 10 m. That is exactly the displacement, Δx = vt.' },
              ],
            },
            {
              id: 'nonuniform',
              kicker: 'Non-uniform motion',
              title: 'Unequal distance in equal time',
              blocks: [
                { t: 'p', text: 'Now the velocity changes, so a ≠ 0. The x–t graph is a curve: position is a square function of time.' },
                { t: 'formulas', items: [{ eq: 'x_f = x_i + ut + ½at²', legend: ['a square function of time', 'u: initial velocity, a: constant acceleration'] }] },
                { t: 'callout', kind: 'note', title: 'Tangent', text: 'On a curve, the velocity at one instant is the slope of the TANGENT at that point. A tangent touches the curve without cutting through it. Use rise / run on that straight line.' },
                {
                  t: 'steps',
                  title: 'area under a v–t graph: a rectangle plus a triangle',
                  given: 'An object starts with u = 5 m s⁻¹ and accelerates at a = 1 m s⁻². Find its displacement in the first 5 s.',
                  steps: [
                    { line: 'v = u + at = 5 + 1 × 5 = 10 m s⁻¹ at t = 5 s', why: 'The v–t graph is a straight line rising from 5 to 10.' },
                    { line: 'Rectangle: 5 m s⁻¹ × 5 s = 25 m', why: 'The part of the area that would exist even with no acceleration.' },
                    { line: 'Triangle: ½ × 5 s × (10 − 5) m s⁻¹ = 12.5 m', why: 'The extra area contributed by the acceleration.' },
                    { line: 'Total area = 25 + 12.5 = 37.5 m', why: 'Check: x = ut + ½at² = 25 + ½ × 1 × 25 = 37.5 m. The two methods agree.' },
                  ],
                  answer: '37.5 m',
                },
                {
                  t: 'widget',
                  id: 'motion-graphs-lab',
                  title: 'Now let the velocity change',
                  idea: 'Choose the class example (u = 5 m s⁻¹, a = 1 m s⁻²), then drag the time slider to 5 s. Watch the tangent tilt on x–t while the shaded areas grow on v–t.',
                  predict: { q: 'Predict: with a > 0, as time passes the tangent on the x–t graph gets…', options: ['steeper, because v is increasing', 'flatter, because v is decreasing', 'no different, because a is constant'], answer: 0, why: 'The tangent slope IS the velocity. With a > 0 the velocity keeps rising, so the tangent keeps getting steeper.' },
                },
              ],
            },
          ],
        },
        { t: 'check', id: 'a1-7-c1', q: 'On a position–time graph, a steeper straight line means…', options: ['a larger velocity', 'a larger acceleration', 'a longer distance for all times'], answer: 0, why: 'Slope = Δx / t = velocity.', back: 'uniform' },
        { t: 'check', id: 'a1-7-c2', q: 'The area under a velocity–time graph gives…', options: ['displacement', 'acceleration', 'jerk'], answer: 0, why: 'v × t has units m s⁻¹ × s = m: a displacement.', back: 'area' },
        { t: 'check', id: 'a1-7-c3', q: 'A flat, horizontal line on a v–t graph means…', options: ['constant velocity, a = 0', 'the object is at rest', 'constant acceleration'], answer: 0, why: 'The velocity does not change, so a = 0. (It is at rest only if that constant is 0.)', back: 'uniform' },
        { t: 'check', id: 'a1-7-c4', q: 'The v–t graph of an object rises steadily from 5 m s⁻¹ to 25 m s⁻¹ in 4 s. Its acceleration, the gradient, is…', options: ['5 m s⁻²', '20 m s⁻²', '7.5 m s⁻²'], answer: 0, why: 'Gradient = (25 − 5) / 4 = 5 m s⁻².', back: 'area' },
        { t: 'check', id: 'a1-7-c5', q: 'The area under an a–t graph gives…', options: ['change in velocity', 'displacement', 'change in acceleration'], answer: 0, why: 'a × t = m s⁻² × s = m s⁻¹, a change in velocity.', back: 'area' },
        { t: 'apply', id: 'a1-7-a1', prompt: 'A cyclist starts at 2 m s⁻¹ and speeds up uniformly to 8 m s⁻¹ in 6 s. Sketch the v–t graph in words, find the acceleration from its gradient, and find the distance from its area.', model: 'The v–t graph is a straight line rising from 2 to 8 m s⁻¹ over 6 s. Acceleration = gradient = (8 − 2) / 6 = 1.0 m s⁻². Distance = area = rectangle 2 × 6 = 12 m plus triangle ½ × 6 × (8 − 2) = 18 m, giving 30 m. Check: average velocity 5 m s⁻¹ × 6 s = 30 m.', checklist: ['I described a straight rising line', 'I found the gradient (1.0 m s⁻²)', 'I split the area into rectangle plus triangle', 'I got 30 m and checked it'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 6', q: 'Displacement is…', options: ['a vector', 'the length of the path'], answer: 0, why: 'A vector: the straight line from start to end.' }, { from: 'A.1 · 4', q: 'For uniform motion, Y = …', options: ['vt', 'v/t'], answer: 0, why: 'Position = velocity × time.' }] },
        { t: 'summary', points: ['x–t slope = velocity; v–t slope = acceleration; v–t area = displacement; a–t area = change in velocity.', 'Uniform motion: x–t is a straight line, v–t is flat, a = 0.', 'Non-uniform motion: x–t curves; the tangent at a point gives the instantaneous velocity; x = ut + ½at².'], terms: [{ term: 'Gradient', def: 'rise / run, the slope of a graph' }, { term: 'Tangent', def: 'a straight line touching a curve at one point; its slope is the instantaneous gradient' }], formulas: ['v = Δx / t', 'x_f = x_i + ut + ½at²', 'area under v–t = displacement'], errors: ['Reading the height of a v–t graph as the distance instead of the AREA.', 'Confusing "flat v–t line" with "at rest".', 'Measuring a gradient with a chord instead of a tangent.'] },
      ],
    },

    // ------------------------------------------------------------------ A.1 · 8
    {
      slug: 'exam-questions-one',
      code: 'A.1 · 8',
      title: 'Exam questions I: a train, a bouncing ball, a skidding car',
      blurb: 'Three exam-style motion problems, worked step by step with our own animated diagrams: read the graph, then check it against the moving object itself.',
      syllabus: 'A.1 Kinematics · applying v = u + at, x = ut + ½at², v² = u² + 2as',
      level: 'SL+HL',
      difficulty: 3,
      minutes: 28,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'A graph tells you the numbers. An animation tells you what those numbers actually look like happening. Here are three classic exam problems, solved both ways.' },
        {
          t: 'deck',
          slides: [
            {
              id: 'train',
              kicker: 'Problem 1 · speeding up, then slowing down',
              title: 'A train from rest to rest',
              blocks: [
                { t: 'p', text: 'A train starts from rest at station A and speeds up steadily until it passes point B. From B it slows down steadily until it comes to rest at station C. The whole journey, A to C, takes time T; the part from A to B takes 0.80 of that time.' },
                { t: 'table', head: ['Given', 'Value'], rows: [['Acceleration, A → B', '0.20 m s⁻²'], ['Fraction of the journey time spent A → B', '0.80 T'], ['Total distance, A → C', '1800 m'], ['Speed at A and at C', '0 (starts and ends at rest)']] },
                {
                  t: 'widget',
                  id: 'train-accel-decel-anim',
                  title: 'Watch the train, and the speed readout',
                  idea: 'Scrub through the journey. The train speeds up for the first 80% of the time, then must lose ALL of that speed in only the remaining 20%.',
                  predict: { q: 'Predict: since the deceleration phase (B → C) is much SHORTER than the acceleration phase (A → B), but must remove the same speed, the deceleration compared to the 0.20 m s⁻² acceleration is…', options: ['bigger', 'smaller', 'the same, 0.20 m s⁻²'], answer: 0, why: 'The same change in speed happening in a shorter time needs a bigger rate of change — a bigger magnitude of acceleration.' },
                },
                {
                  t: 'steps',
                  title: 'find T, the speed at B, and the deceleration',
                  given: 'A train starts from rest at A, accelerates at 0.20 m s⁻² until it passes B (reached after 0.80 of the total journey time T), then decelerates uniformly to rest at C. The whole A-to-C journey covers 1800 m. On a v–t graph this is a triangle: base T, with the peak (at B) reached after 0.80T.',
                  steps: [
                    { line: 'Speed at B: V = a₁ × (0.80T) = 0.20 × 0.80T = 0.16T', why: 'Uniform acceleration from rest: v = u + at, with u = 0.' },
                    { line: 'Total distance = area of the triangle = ½ × T × V = ½ × T × 0.16T = 0.08T²', why: 'Area under a v–t graph is displacement — the graph is one triangle, base T, height V.' },
                    { line: '0.08T² = 1800 → T² = 22 500 → T = 150 s', why: 'Solve using the given total distance.' },
                    { line: 'V = 0.16 × 150 = 24 m s⁻¹', why: 'Substitute T back into the expression for V.' },
                    { line: 'Deceleration, B → C: a₂ = V / (0.20T) = 24 / 30 = 0.80 m s⁻²', why: 'The same speed V is lost over the remaining 0.20T = 30 s.' },
                  ],
                  answer: 'V = 0.16T (part a); T = 150 s, so V = 24 m s⁻¹ and the deceleration B → C is 0.80 m s⁻² (four times bigger than the acceleration).',
                },
              ],
            },
            {
              id: 'ball',
              kicker: 'Problem 2 · dropped, then bounces',
              title: 'A ball that bounces, but not all the way back',
              blocks: [
                { t: 'p', text: 'A small ball is released from rest and falls freely under gravity. It reaches the floor after exactly 1.0 s, bounces, and rises again — but not to its original height, since it loses some speed in the bounce.' },
                { t: 'table', head: ['Given', 'Value'], rows: [['Mass', '0.250 kg'], ['Released from rest at t = 0'], ['Time to reach the floor', '1.0 s'], ['g', '9.80 m s⁻²'], ['Air resistance', 'negligible']] },
                {
                  t: 'widget',
                  id: 'ball-bounce-anim',
                  title: 'Drop it, and watch it bounce',
                  idea: 'Scrub to the exact top of the bounce (point M, where the dot turns green). Read off the velocity and the acceleration there.',
                  predict: { q: 'Predict: at the very top of the rebound (point M), the ball is momentarily at rest. Its acceleration at that instant is…', options: ['also zero, since it is not moving', 'still g, downward — unchanged', 'upward, to bring it back down'], answer: 1, why: 'Velocity and acceleration are independent. Gravity acts the whole time the ball is in the air, at every instant — including the one instant its velocity happens to be zero.' },
                },
                {
                  t: 'steps',
                  title: 'find the drop height and the rebound height',
                  given: 'A 0.250 kg ball is released from rest and falls freely (g = 9.80 m s⁻²), reaching the floor after exactly 1.0 s. It bounces, rebounding with half the speed it hit the floor at (a typical energy loss on a bounce).',
                  steps: [
                    { line: 'Drop height: H = ½ g t² = ½ × 9.80 × 1.0² = 4.9 m', why: 'Released from rest, falling for a known time.' },
                    { line: 'Impact speed: v = g t = 9.80 × 1.0 = 9.8 m s⁻¹', why: 'v = u + at, with u = 0.' },
                    { line: 'Rebound speed: 0.5 × 9.8 = 4.9 m s⁻¹', why: 'Given: the bounce halves the speed.' },
                    { line: 'Time to the peak, M: 4.9 / 9.8 = 0.5 s after the bounce', why: 'Decelerating under gravity from the rebound speed back to zero.' },
                    { line: 'Rebound height: 4.9² / (2 × 9.8) = 1.225 m — exactly a QUARTER of the drop height', why: 'v² = u² − 2gh, rearranged, with v = 0 at the peak. Halving the speed quarters the height, since height depends on speed SQUARED.' },
                  ],
                  answer: 'H = 4.9 m; rebound height ≈ 1.225 m; acceleration at M is still g, downward.',
                },
              ],
            },
            {
              id: 'skid',
              kicker: 'Problem 3 · react, then brake',
              title: 'A car: reaction distance, then skid distance',
              blocks: [
                { t: 'p', text: 'A car is travelling at a steady speed when a hazard appears. The driver takes a moment to react — during which the car keeps moving at that same steady speed — before the brakes bite and the car decelerates hard, leaving skid marks, until it stops.' },
                { t: 'table', head: ['Given', 'Value'], rows: [['Distance covered during the reaction (before braking)', '29.3 m'], ['Distance covered while skidding (braking)', '12.8 m'], ['Deceleration while skidding', '0.85 g'], ['Speed at the very end', '0 (comes to rest)']] },
                {
                  t: 'widget',
                  id: 'car-skid-anim',
                  title: 'React, then brake',
                  idea: 'The skid marks only appear once braking starts — the reaction phase leaves no marks, because the tyres are not sliding yet.',
                  predict: { q: 'Predict: during the reaction-time phase (before the brakes are applied), the car’s velocity is…', options: ['constant — the driver has not acted yet', 'already decreasing, a little', 'increasing, as the driver panics'], answer: 0, why: 'Nothing has changed yet: no force has been applied differently, so the car simply continues at its original steady speed until the brakes are actually pressed.' },
                },
                {
                  t: 'steps',
                  title: 'find the speed before braking, and the reaction time',
                  given: 'A car travels at a steady speed u before the driver reacts to a hazard, covering 29.3 m in that reaction time. The brakes then bring it to rest over a 12.8 m skid, decelerating at 0.85g. Work backwards from the skid: it starts at the (unknown) speed u and ends at rest.',
                  steps: [
                    { line: 'Deceleration: a = 0.85 × 9.8 = 8.33 m s⁻²', why: 'Given as a fraction of g.' },
                    { line: 'v² = u² − 2as, with v = 0: u² = 2 × 8.33 × 12.8 = 213.2', why: 'Rearranging v² = u² + 2as for the braking phase, where the acceleration is negative (a deceleration).' },
                    { line: 'u = √213.2 ≈ 14.6 m s⁻¹', why: 'This is the car’s speed at the START of braking — the same speed it had all through the reaction phase.' },
                    { line: 't_reaction = 29.3 / 14.6 ≈ 2.0 s', why: 'During the reaction phase the car moves at the CONSTANT speed u, so distance = speed × time.' },
                  ],
                  answer: 'u ≈ 14.6 m s⁻¹; reaction time ≈ 2.0 s.',
                },
              ],
            },
          ],
        },
        { t: 'check', id: 'a1-8a-c1', q: 'On the train’s v–t graph, the AREA under the whole triangle represents…', options: ['the total distance, A to C', 'the total time, T', 'the acceleration at B'], answer: 0, why: 'Area under a v–t graph is always a displacement — here, the whole 1800 m journey.', back: 'train' },
        { t: 'check', id: 'a1-8a-c2', q: 'A train accelerates for a SHORTER time than it decelerates, but reaches the same peak speed both times. Its acceleration, compared with its deceleration, is…', options: ['bigger in magnitude', 'smaller in magnitude', 'exactly equal'], answer: 0, why: 'The same change in speed over less time needs a bigger rate of change.', back: 'train' },
        { t: 'check', id: 'a1-8a-c3', q: 'A ball bounces and loses some speed each time. Each successive rebound height is…', options: ['lower than the last', 'the same as the last', 'higher than the last'], answer: 0, why: 'Losing speed at each bounce means less kinetic energy to convert into height, so each peak is lower.', back: 'ball' },
        { t: 'check', id: 'a1-8a-c4', q: 'At the very top of a ball’s bounce, its velocity is zero. Its acceleration at that instant is…', options: ['g, downward, unchanged', 'zero, since v = 0', 'momentarily upward'], answer: 0, why: 'Gravity acts continuously; velocity passing through zero does not switch gravity off.', back: 'ball' },
        { t: 'check', id: 'a1-8a-c5', q: 'In the skid-mark problem, the car’s speed during the REACTION phase (before braking) is…', options: ['constant', 'decreasing', 'increasing'], answer: 0, why: 'No braking force is applied yet, so nothing changes the speed during the reaction time.', back: 'skid' },
        { t: 'check', id: 'a1-8a-c6', q: 'Why do skid marks only appear during the braking phase, not the reaction phase?', options: ['the tyres are only sliding once the brakes are hard applied', 'the car is only moving once braking starts', 'skid marks appear at any constant speed'], answer: 0, why: 'A skid mark needs the tyres to slide against the road; at a steady speed with no braking, they simply roll.', back: 'skid' },
        { t: 'apply', id: 'a1-8a-a1', prompt: 'A different train accelerates from rest at 0.25 m s⁻² for the first 60% of its journey time T, then decelerates to rest for the remaining 40%. If the total distance is 2400 m, find T (set up the same way as Problem 1, then solve).', model: 'V = a × 0.60T = 0.15T. Area of the triangle: ½ × T × V = ½ × T × 0.15T = 0.075T² = 2400, so T² = 32 000 and T ≈ 179 s. Then V = 0.15 × 179 ≈ 26.8 m s⁻¹, and the deceleration is V / 0.40T = 26.8 / 71.6 ≈ 0.37 m s⁻².', checklist: ['I wrote V in terms of T from the acceleration phase', 'I used area = ½ × T × V for the total distance', 'I solved for T (≈ 179 s)', 'I found V and the deceleration'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 7', q: 'The area under a v–t graph is…', options: ['displacement', 'acceleration'], answer: 0, why: 'Area is displacement.' }, { from: 'A.1 · 6', q: 'v = u + at rearranges v² = u² + 2as by…', options: ['eliminating time', 'eliminating displacement'], answer: 0, why: 'v² = u² + 2as has no t in it.' }] },
        { t: 'summary', points: ['A v–t graph shaped like a triangle: its area is the total displacement, its two slopes are the two accelerations.', 'A shorter phase reaching the same speed change needs a BIGGER magnitude of acceleration.', 'At the top of a bounce, velocity is zero but acceleration (g) is not — they are independent.', 'A "reaction, then brake" problem is two separate uniform phases: constant velocity, then constant deceleration; solve the braking phase first with v² = u² + 2as, since it pins down u.'], terms: [{ term: 'Uniform deceleration', def: 'constant negative acceleration, decreasing speed at a constant rate' }], formulas: ['v = u + at', 'x = ut + ½at²', 'v² = u² + 2as', 'area under v–t = displacement'], errors: ['Assuming both phases of a "speeds up then slows down" graph must have the same acceleration.', 'Thinking zero velocity means zero acceleration.', 'Applying the braking deceleration to the reaction-time distance, or vice versa.'] },
      ],
    },

    // ------------------------------------------------------------------ A.1 · 9
    {
      slug: 'exam-questions-two',
      code: 'A.1 · 9',
      title: 'Exam questions II: a signal, a take-off, a chase, and leaking oil',
      blurb: 'Four more exam-style motion problems as multiple-choice, each with its own recreated diagram, animation and worked solution.',
      syllabus: 'A.1 Kinematics · applying v = u + at, x = ut + ½at², v² = u² + 2as',
      level: 'SL+HL',
      difficulty: 3,
      minutes: 26,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'Four more scenes: a train that must not run a red signal, a plane with a limited runway, one car catching another, and a leaking car whose oil drops become a stopwatch.' },
        {
          t: 'deck',
          slides: [
            {
              id: 'signal',
              kicker: 'Problem 4 · brake in time',
              title: 'A train must stop by the red signal',
              blocks: [
                { t: 'p', text: 'A train driver applies the brakes at a yellow signal, a known distance from a red signal where the train must be at rest. Assuming the greatest deceleration the train can manage, what is the fastest it could safely be going at the yellow signal?' },
                { t: 'table', head: ['Given', 'Value'], rows: [['Distance, yellow signal to red signal', '1000 m'], ['Maximum deceleration', '0.20 m s⁻²'], ['Speed required at the red signal', '0 (must have stopped)']] },
                {
                  t: 'widget',
                  id: 'signal-train-anim',
                  title: 'The fastest safe approach speed',
                  idea: 'This train is travelling at exactly the fastest safe speed: it comes to rest exactly at the red signal, using the full 1000 m.',
                  predict: { q: 'Predict: on a particular railway, a train driver applies the brake at a yellow signal, a distance of 1.0 km from a red signal where it stops. The maximum deceleration is 0.2 m s⁻². Assuming uniform deceleration, what is the maximum safe speed at the yellow signal?', options: ['20 m s⁻¹', '40 m s⁻¹', '200 m s⁻¹', '400 m s⁻¹'], answer: 0, why: 'v² = u² + 2as, with v = 0: u² = 2 × 0.2 × 1000 = 400, so u = 20 m s⁻¹. (B mixes up a factor of 2; C and D forget to square-root.)' },
                },
                {
                  t: 'steps',
                  title: 'the maximum safe speed',
                  given: 'A train driver applies the brake at a yellow signal, 1000 m from a red signal where the train must have already stopped. The maximum deceleration is 0.20 m s⁻², applied uniformly. Use v² = u² + 2as, with the final speed v = 0, s = 1000 m and a = −0.20 m s⁻².',
                  steps: [
                    { line: '0 = u² − 2 × 0.20 × 1000', why: 'Substitute the known values, with deceleration taken as negative.' },
                    { line: 'u² = 400', why: 'Rearrange.' },
                    { line: 'u = 20 m s⁻¹', why: 'Square root both sides (only the positive root makes physical sense here).' },
                  ],
                  answer: '20 m s⁻¹ — any faster and the train would pass the red signal still moving.',
                },
              ],
            },
            {
              id: 'takeoff',
              kicker: 'Problem 5 · a limited runway',
              title: 'An aircraft must reach take-off speed in time',
              blocks: [
                { t: 'p', text: 'An aircraft starts from rest and accelerates uniformly along the runway. It must reach its take-off speed within a maximum runway distance. What is the smallest acceleration that still achieves this?' },
                { t: 'table', head: ['Given', 'Value'], rows: [['Starts from rest'], ['Take-off speed', '85 km h⁻¹'], ['Maximum runway distance', '1.20 km'], ['Motion', 'uniform acceleration throughout']] },
                {
                  t: 'widget',
                  id: 'aircraft-takeoff-anim',
                  title: 'Just enough runway',
                  idea: 'This aircraft is using the SLOWEST acceleration that still gets it to take-off speed exactly at the end of the runway. Any slower and it would run out of tarmac.',
                  predict: { q: 'Predict: an aircraft, initially stationary on a runway, takes off with a speed of 85 km h⁻¹ in a distance of no more than 1.20 km. What is the minimum constant acceleration necessary for the aircraft?', options: ['0.23 m s⁻²', '0.46 m s⁻²', '3.0 m s⁻²', '6.0 m s⁻²'], answer: 0, why: 'Convert 85 km h⁻¹ to 23.6 m s⁻¹ first. Then v² = 2as gives a = v² / 2s = 23.6² / 2400 ≈ 0.23 m s⁻². (B is what you get forgetting to square v; C and D come from mixing up km and m.)' },
                },
                {
                  t: 'steps',
                  title: 'convert units, then find the minimum acceleration',
                  given: 'An aircraft, initially stationary on a runway, must reach a take-off speed of 85 km h⁻¹ in a distance of no more than 1.20 km, accelerating uniformly throughout. Use v² = u² + 2as, with u = 0, v = 85 km h⁻¹ and s = 1.20 km = 1200 m.',
                  steps: [
                    { line: '85 km h⁻¹ = 85 × 1000 / 3600 ≈ 23.61 m s⁻¹', why: 'Convert to SI units before using the kinematics equations — km h⁻¹ will not work directly.' },
                    { line: 'v² = 2as → a = v² / (2s) = 23.61² / (2 × 1200)', why: 'Rearrange with u = 0.' },
                    { line: 'a ≈ 557.5 / 2400 ≈ 0.23 m s⁻²', why: 'Evaluate.' },
                  ],
                  answer: '≈ 0.23 m s⁻² — the smallest acceleration that reaches take-off speed within the runway.',
                },
              ],
            },
            {
              id: 'chase',
              kicker: 'Problem 6 · one car catches another',
              title: 'A steady car, and one that is accelerating',
              blocks: [
                { t: 'p', text: 'Two cars travel along the same straight road. One moves at a constant speed. The other starts behind it, already moving, but accelerating — and eventually draws level. How big was the gap at the start?' },
                { t: 'table', head: ['Given', 'Value'], rows: [['Car X (ahead)', 'constant 6.0 m s⁻¹'], ['Car Y (behind), speed at the instant shown', '4.0 m s⁻¹'], ['Car Y’s acceleration', '0.50 m s⁻²'], ['Time for Y to draw level with X', '20 s']] },
                {
                  t: 'widget',
                  id: 'chase-cars-anim',
                  title: 'The catch-up',
                  idea: 'Car X (blue) never changes speed. Car Y (orange) starts slower but keeps speeding up, and eventually overtakes the gap entirely.',
                  predict: { q: 'Predict: two cars X and Y travel along the same road. X is at a constant 6.0 m s⁻¹. Y has a constant acceleration of 0.50 m s⁻². At the instant shown, X is a distance d ahead of Y, and Y is travelling at 4.0 m s⁻¹. Car Y is level with car X after a time of 20 s. What is the distance d?', options: ['40 m', '60 m', '180 m', '300 m'], answer: 1, why: 'In 20 s, Y travels 4×20 + ½×0.5×20² = 80 + 100 = 180 m. X travels 6×20 = 120 m. The gap Y closes is d, so d = 180 − 120 = 60 m.' },
                },
                {
                  t: 'steps',
                  title: 'find the initial gap, d',
                  given: 'Car X travels at a constant 6.0 m s⁻¹. Car Y starts a distance d behind X, already moving at 4.0 m s⁻¹ and accelerating at 0.50 m s⁻². Car Y draws level with car X after 20 s. Both cars are therefore at the same position at t = 20 s: find how far each has travelled, then compare.',
                  steps: [
                    { line: 'Distance travelled by Y: s_Y = u t + ½at² = 4 × 20 + ½ × 0.5 × 20² = 80 + 100 = 180 m', why: 'Y starts at 4.0 m s⁻¹ and accelerates at 0.50 m s⁻².' },
                    { line: 'Distance travelled by X: s_X = 6.0 × 20 = 120 m', why: 'X moves at a constant speed, so distance = speed × time.' },
                    { line: 'd = s_Y − s_X = 180 − 120 = 60 m', why: 'Y started a distance d BEHIND X. To draw level, Y must cover that gap PLUS however far X has also moved — so Y’s total distance equals X’s distance plus the gap.' },
                  ],
                  answer: 'd = 60 m.',
                },
              ],
            },
            {
              id: 'drips',
              kicker: 'Problem 7 · a leaking stopwatch',
              title: 'Oil drops as a ticker-tape',
              blocks: [
                { t: 'p', text: 'A car with a steady oil leak drips one drop every fixed interval. Because the car is accelerating, the drops land further and further apart — and the SPACING between them is enough to work out the acceleration.' },
                { t: 'table', head: ['Given', 'Value'], rows: [['Interval between drops', '2.0 s'], ['Distance, 1st to 2nd drop', '9.0 m'], ['Distance, 2nd to 3rd drop', '12.0 m'], ['Motion', 'uniform acceleration']] },
                {
                  t: 'widget',
                  id: 'oil-drip-car-anim',
                  title: 'Watch the drops land',
                  idea: 'Each drop marks the car’s position every 2.0 s. The GAPS between drops grow — that growth is what reveals the acceleration.',
                  predict: { q: 'Predict: a car moves with uniform acceleration along a straight road. Oil leaks at the rate of one drop every two seconds. The distances between three successive drops are 9.0 m and 12.0 m. What is the acceleration of the car?', options: ['0.75 m s⁻²', '1.5 m s⁻²', '3.0 m s⁻²', '6.0 m s⁻²'], answer: 0, why: 'The average velocity across each interval equals the instantaneous velocity at its MIDPOINT: 4.5 m s⁻¹ at t = 1 s, 6.0 m s⁻¹ at t = 3 s. Acceleration = (6.0 − 4.5) / (3 − 1) = 0.75 m s⁻².' },
                },
                {
                  t: 'steps',
                  title: 'find the acceleration from the drop spacing',
                  given: 'A car with a leaking oil tank accelerates uniformly along a straight road, dripping one drop every 2.0 s. The gap between the 1st and 2nd drops is 9.0 m; between the 2nd and 3rd, 12.0 m. For uniform acceleration, the average velocity over an interval equals the instantaneous velocity at its MIDPOINT in time.',
                  steps: [
                    { line: 'Average velocity, drops 1→2: 9.0 / 2.0 = 4.5 m s⁻¹, at the midpoint t = 1 s', why: 'Average velocity = distance ÷ time for that interval.' },
                    { line: 'Average velocity, drops 2→3: 12.0 / 2.0 = 6.0 m s⁻¹, at the midpoint t = 3 s', why: 'Same idea, for the next interval.' },
                    { line: 'Acceleration = (6.0 − 4.5) / (3 − 1) = 0.75 m s⁻²', why: 'The two midpoint velocities are exactly one interval (2 s) apart in time, so this is Δv / Δt.' },
                  ],
                  answer: '0.75 m s⁻².',
                },
              ],
            },
          ],
        },
        { t: 'check', id: 'a1-9-c1', q: 'A car brakes from speed u and comes exactly to rest over a known distance s, at a known deceleration a. Which equation finds u directly, with no need for time?', options: ['v² = u² + 2as', 'v = u + at', 'x = ut + ½at²'], answer: 0, why: 'v² = u² + 2as involves only u, v, a and s — no t needed.', back: 'signal' },
        { t: 'check', id: 'a1-9-c2', q: 'Before using v² = u² + 2as with a speed given in km h⁻¹, you should…', options: ['convert it to m s⁻¹ first', 'convert the distance to km instead', 'leave it in km h⁻¹, it does not matter'], answer: 0, why: 'The kinematics equations assume consistent SI units throughout.', back: 'takeoff' },
        { t: 'check', id: 'a1-9-c3', q: 'Car Y starts a distance d behind car X and eventually draws level. At that moment, the distance Y has travelled equals…', options: ['the distance X has travelled, plus d', 'the distance X has travelled, minus d', 'exactly the distance X has travelled'], answer: 0, why: 'Y has to cover the original gap AND keep pace with however far X has also moved.', back: 'chase' },
        { t: 'check', id: 'a1-9-c4', q: 'For a uniformly accelerating object, the average velocity across a time interval equals the instantaneous velocity…', options: ['at the midpoint of that interval', 'at the start of that interval', 'at the end of that interval'], answer: 0, why: 'This only holds for CONSTANT acceleration, and it is exactly at the midpoint in time.', back: 'drips' },
        { t: 'apply', id: 'a1-9-a1', prompt: 'A cyclist must stop within 40 m of applying the brakes, decelerating uniformly at 2.5 m s⁻². What is the fastest safe speed at the moment the brakes are applied?', model: 'v² = u² + 2as, with v = 0: u² = 2 × 2.5 × 40 = 200, so u = √200 ≈ 14.1 m s⁻¹.', checklist: ['I used v² = u² + 2as with v = 0', 'I substituted a = 2.5 and s = 40', 'I got u² = 200', 'I took the square root, ≈ 14.1 m s⁻¹'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 8', q: 'A v–t graph shaped like a triangle: its area is…', options: ['the total displacement', 'the total acceleration'], answer: 0, why: 'Area under v-t is displacement.' }, { from: 'A.1 · 6', q: 'v² = u² + 2as is useful when you do not know…', options: ['the time', 'the acceleration'], answer: 0, why: 'It has no t in it.' }] },
        { t: 'summary', points: ['"Just enough" problems (a signal, a runway) both come down to v² = u² + 2as with one speed equal to zero.', 'Always convert to consistent SI units (m, s, m s⁻¹) before using a kinematics equation.', 'In a chase problem, the gap equals the difference between the two distances travelled by the time they meet.', 'For uniform acceleration, average velocity across an interval = instantaneous velocity at its midpoint — this is how ticker-tape and oil-drop spacing reveal acceleration.'], terms: [{ term: 'Midpoint velocity', def: 'for uniform acceleration, the average velocity over an interval, which equals the instantaneous velocity halfway through it in time' }], formulas: ['v² = u² + 2as', 'v = u + at', 'x = ut + ½at²'], errors: ['Using a speed in km h⁻¹ directly in a kinematics equation.', 'Forgetting the initial gap when two vehicles are said to "meet" or "draw level".', 'Treating average velocity as if it applied at the START or END of an interval instead of its midpoint.'] },
      ],
    },
    // ------------------------------------------------------------------ A.1 · 9b
    {
      slug: 'independence-of-motion',
      code: 'A.1 · 9b',
      title: 'Independence of motion: x and y',
      blurb: 'Drop one ball, throw another sideways. They land together. Horizontal and vertical motion do not depend on each other, and only the time links them.',
      syllabus: 'A.1 Kinematics · projectile motion, independence of horizontal and vertical components',
      level: 'SL+HL',
      difficulty: 2,
      minutes: 22,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'Two balls leave the same height at the same moment. One is simply dropped. The other is thrown sideways. Which hits the ground first? Your gut says the dropped one. Your gut is wrong.' },
        {
          t: 'deck',
          slides: [
            {
              id: 'setup',
              kicker: 'The question',
              title: 'Ball A is dropped. Ball B is thrown sideways.',
              blocks: [
                { t: 'diagram', id: 'independence', caption: 'The situation, not to scale. The dotted lines show that A and B are at the same height at the same moments; B just also moves sideways.' },
                { t: 'p', text: 'Two small balls, **A** and **B**, start together from a height of 50 m above level ground. A is released from rest (free fall). B is projected horizontally at 5 m s⁻¹. Air resistance is negligible. Take g = 10 m s⁻².' },
                { t: 'table', head: ['Part', 'Task'], rows: [['Q1', 'Find the time taken for ball A to hit the ground'], ['Q2', 'Find the horizontal distance R from the start at which ball B lands'], ['Q3', 'Find the displacement of ball B from its start to where it lands']] },
              ],
            },
            {
              id: 'idea',
              kicker: 'The idea',
              title: 'Horizontal and vertical motion are not dependent',
              blocks: [
                {
                  t: 'table',
                  head: ['', 'Horizontal motion', 'Vertical motion'],
                  rows: [
                    ['Acceleration', '0 (nothing pushes sideways)', 'g = 10 m s⁻² downward'],
                    ['Initial velocity of A', '0', '0'],
                    ['Initial velocity of B', '5 m s⁻¹', '0'],
                    ['Equation to use', 's = ut (uniform motion)', 's = ut + ½at², v = u + at, v² = u² + 2as'],
                  ],
                  firstColHeader: true,
                },
                { t: 'callout', kind: 'idea', title: 'What links the two axes?', text: 'Only the time. The same clock runs for the horizontal and the vertical motion. Solve one axis to get the time, then carry that time over to the other axis.' },
              ],
            },
            {
              id: 'lab',
              kicker: 'Try it',
              title: 'Release both balls',
              blocks: [
                {
                  t: 'widget',
                  id: 'independence-lab',
                  title: 'Same height, same time, every time',
                  idea: 'Press Release both. The dotted lines join the two balls at equal times: they are always at the same height. Change B’s speed and the picture widens, but the landing time does not move.',
                  predict: { q: 'Predict: B is thrown sideways at 5 m s⁻¹ and A is dropped, both from the same height. Compared with A, B takes…', options: ['the same time to land', 'longer to land', 'less time to land'], answer: 0, why: 'Only the vertical motion decides the time, and both balls start with zero vertical velocity and accelerate at g. Sideways speed changes WHERE B lands, not WHEN.' },
                },
              ],
            },
            {
              id: 'q1',
              kicker: 'Q1 · time',
              title: 'Time for A to hit the ground',
              blocks: [
                {
                  t: 'steps',
                  title: 'free fall from 50 m',
                  given: 'Ball A is dropped from rest from a height of 50 m. Take g = 10 m s⁻² and down as positive. Pick the equation that contains what you know (s, u, a) and what you want (t).',
                  steps: [
                    { line: 's = ut + ½at²', why: 'v = u + at is not the one to use here: it needs the final velocity v, which we do not know yet.' },
                    { line: '50 = 0 × t + ½ × 10 × t²', why: 'u = 0 (released from rest) and a = g = 10 m s⁻².' },
                    { line: '50 = 5t²', why: 'Simplify.' },
                    { line: 't = √(100 / 10) = √10 = 3.16 s', why: 'The same as t = √(2s / a) = √(2 × 50 / 10). Take the positive root.' },
                  ],
                  answer: 't = 3.16 s',
                },
              ],
            },
            {
              id: 'q2',
              kicker: 'Q2 · range',
              title: 'How far across does B land?',
              blocks: [
                {
                  t: 'steps',
                  title: 'horizontal distance R',
                  given: 'Ball B is projected horizontally at 5 m s⁻¹ from the same 50 m height. The same clock runs for both axes, so B is in the air for the same time as A.',
                  steps: [
                    { line: 't(B) = t(A) = 3.16 s', why: 'Independence: B falls exactly like A, so it takes the same time to reach the ground.' },
                    { line: 'R = speed × time = 5 × 3.16', why: 'Horizontally there is no acceleration, so the motion is uniform: s = ut.' },
                    { line: 'R = 15.8 m', why: 'To 3 significant figures (15.81 m exactly).' },
                  ],
                  answer: 'R = 15.8 m',
                },
              ],
            },
            {
              id: 'q3',
              kicker: 'Q3 · displacement',
              title: 'Displacement of B',
              blocks: [
                {
                  t: 'steps',
                  title: 'put the two parts together',
                  given: 'Displacement is the straight line (a vector) from where B starts to where it lands. It has a horizontal part R = 15.8 m and a vertical part of 50 m, at right angles.',
                  steps: [
                    { line: 'd = √(R² + 50²)', why: 'Pythagoras, because the two parts are at right angles.' },
                    { line: 'd = √(15.8² + 50²) = √(250 + 2500)', why: '15.8² is 250 (exactly 5² × 10).' },
                    { line: 'd = √2750 = 52.4 m', why: 'Evaluate.' },
                    { line: 'direction: tan⁻¹(50 / 15.8) = 72.5° below the horizontal', why: 'Optional: the direction of the displacement.' },
                  ],
                  answer: '52.4 m, at 72.5° below the horizontal',
                },
                { t: 'callout', kind: 'warn', title: 'Displacement is not the distance along the curve', text: 'The curved path B follows is longer than the 52.4 m straight line. Displacement is the straight-line change of position, a vector.' },
              ],
            },
            {
              id: 'game',
              kicker: 'Play',
              title: 'Supply drop',
              blocks: [
                { t: 'p', text: 'You are the pilot. The crate must land on the target, so decide WHEN to release. Switch off easy mode and use the same two steps as Q1 and Q2: find the time to fall, then the distance travelled sideways in that time.' },
                { t: 'widget', id: 'supply-drop-game', title: 'Hit the target', idea: 'Press Release (or the space bar). Use “Show the lead distance” if you get stuck.' },
              ],
            },
            {
              id: 'myth',
              kicker: 'Misconceptions',
              title: 'Three things people get wrong',
              blocks: [
                {
                  t: 'pills',
                  groups: [
                    { label: '✗ Common mistakes', tone: 'warn', items: ['B takes longer because it has further to go', 'B falls more slowly because it is moving sideways', 'Gravity pulls less on a ball that is moving'] },
                    { label: '✓ Better', items: ['Sideways speed does not change the fall: same height, same time', 'Gravity acts only downward, so only the vertical motion changes', 'The two axes share only the time'] },
                  ],
                },
              ],
            },
          ],
        },
        { t: 'check', id: 'a1-9a-c1', q: 'Two balls leave the same height together, one dropped from rest and one thrown sideways. Ignoring air resistance, they hit the ground…', options: ['first, the one dropped from rest', 'at the same time', 'first, the one thrown sideways'], answer: 1, why: 'The vertical motion is the same for both (starts at 0, accelerates at g), so the time to fall is the same. The sideways velocity only decides how far across it lands.', back: 'idea' },
        { t: 'check', id: 'a1-9a-c2', q: 'A ball is projected horizontally at 8 m s⁻¹ from a cliff 80 m high (g = 10 m s⁻²). The time to reach the sea is…', options: ['2.8 s', '4.0 s', '8.0 s'], answer: 1, why: '80 = ½ × 10 × t² gives t² = 16, so t = 4.0 s. The 8 m s⁻¹ is not needed for the time.', back: 'q1' },
        { t: 'check', id: 'a1-9a-c3', q: 'For the same ball, how far from the foot of the cliff does it land?', options: ['32 m', '8 m', '320 m'], answer: 0, why: 'R = speed × time = 8 × 4.0 = 32 m. The horizontal motion is uniform.', back: 'q2' },
        { t: 'check', id: 'a1-9a-c4', q: 'Ignoring air resistance, the horizontal component of a projectile’s velocity during its flight…', options: ['decreases because of gravity', 'increases as it falls', 'stays constant'], answer: 2, why: 'Gravity acts vertically. Nothing acts horizontally, so a_x = 0 and v_x does not change.', back: 'idea' },
        { t: 'check', id: 'a1-9a-c5', q: 'Which quantity is the same for the horizontal motion and the vertical motion of a projectile?', options: ['the acceleration', 'the time', 'the velocity'], answer: 1, why: 'The same clock runs for both axes. Acceleration (0 and g) and velocity are different for the two axes.', back: 'idea' },
        { t: 'check', id: 'a1-9a-c6', q: 'In Q3 the displacement of B (52.4 m) compared with its horizontal distance R = 15.8 m is…', options: ['larger, because it also includes the 50 m fall', 'smaller, because the path is curved', 'equal'], answer: 0, why: 'Displacement is the straight line from start to landing point: √(R² + 50²), which is larger than either part.', back: 'q3' },
        { t: 'apply', id: 'a1-9a-a1', prompt: 'A marble rolls off the edge of a table 1.25 m high at 2.0 m s⁻¹. Use g = 10 m s⁻². Find (a) the time to reach the floor and (b) how far from the edge of the table it lands.', model: '(a) Vertical axis: s = ut + ½at² with u = 0: 1.25 = ½ × 10 × t², so t² = 0.25 and t = 0.50 s. (b) Horizontal axis, uniform motion: R = speed × time = 2.0 × 0.50 = 1.0 m from the edge.', checklist: ['I used the vertical axis only for the time', 'I used u = 0 vertically', 'I used R = speed × time horizontally with the SAME time', 'I gave units and a sensible number of significant figures'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 6', q: 'A body falls from rest with acceleration 10 m s⁻². After 3.0 s it has fallen…', options: ['45 m', '30 m', '90 m'], answer: 0, why: 's = ½at² = ½ × 10 × 3² = 45 m.' }, { from: 'A.1 · 7', q: 'The gradient of a velocity–time graph is…', options: ['acceleration', 'displacement'], answer: 0, why: 'Gradient of v–t is a.' }] },
        { t: 'summary', points: ['Horizontal and vertical motion of a projectile are independent: gravity changes only the vertical motion.', 'Horizontally: a = 0, so s = ut. Vertically: a = g, so use s = ut + ½at², v = u + at, v² = u² + 2as.', 'The only link between the axes is the time. Find it from one axis and use it in the other.', 'Displacement is the straight-line vector, found by Pythagoras from its two parts.'], terms: [{ term: 'Projectile', def: 'an object moving under gravity alone (no air resistance)' }, { term: 'Component', def: 'the part of a vector along one axis' }], formulas: ['s = ut + ½at²', 'R = u_{x}t', 'd = √(R² + h²)'], errors: ['Thinking sideways speed changes the time of fall.', 'Using the horizontal speed in the vertical equation.', 'Giving the curved path length instead of the straight-line displacement.'] },
      ],
    },
    // ------------------------------------------------------------------ A.1 · 9c
    {
      slug: 'exam-questions-three',
      code: 'A.1 · 9c',
      title: 'Exam question III: a parcel dropped from an aircraft',
      blurb: 'Split the motion into a horizontal and a vertical axis. Four parts: the path, the time, the vertical speed and the landing speed.',
      syllabus: 'A.1 Kinematics · projectile motion: components, s = ut + ½at², v = u + at',
      level: 'SL+HL',
      difficulty: 3,
      minutes: 24,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'An aircraft flying level releases a parcel. Does the parcel drop straight down? Does it fall for longer than one dropped from a hovering helicopter at the same height? Keep the two axes apart and the whole problem falls out.' },
        {
          t: 'deck',
          slides: [
            {
              id: 'question',
              kicker: 'The question · 4 parts, 7 marks',
              title: 'A parcel released from a small aircraft',
              blocks: [
                { t: 'diagram', id: 'parcel', caption: 'The situation, not to scale. Part (i) asks you to sketch the dashed path: starts flat, curves down, lands ahead of the release point.' },
                { t: 'p', text: 'A small aircraft is flying horizontally at 42 m s⁻¹, at a height of 63 m above level ground. It releases a small parcel. Air resistance is negligible.' },
                { t: 'table', head: ['Given', 'Value'], rows: [['Velocity of the aircraft (and parcel) at release', '42 m s⁻¹, horizontal'], ['Height above the ground', '63 m'], ['Air resistance', 'negligible'], ['Take g as', '9.8 m s⁻²']] },
                { t: 'table', head: ['Part', 'Task', 'Marks'], rows: [['(i)', 'Sketch the path of the parcel from the aircraft to the ground', '1'], ['(ii)', 'Calculate the time from release to reaching the ground', '3'], ['(iii)', 'Calculate the vertical component of the velocity just before it lands', '1'], ['(iv)', 'Determine the speed at which it lands', '2']] },
                { t: 'callout', kind: 'idea', title: 'Plan', text: 'Split the motion into a horizontal axis and a vertical axis. They never affect each other, so solve each one separately and put them back together at the end.' },
              ],
            },
            {
              id: 'axes',
              kicker: 'The key idea',
              title: 'Two independent axes',
              blocks: [
                {
                  t: 'table',
                  head: ['', 'Horizontal (x)', 'Vertical (y)'],
                  rows: [
                    ['Initial velocity', 'u_{x} = 42 m s⁻¹', 'u_{y} = 0 (it was released level)'],
                    ['Acceleration', 'a_{x} = 0 (no air resistance)', 'a_{y} = g = 9.8 m s⁻², downward'],
                    ['Velocity', 'constant: 42 m s⁻¹', 'grows: v_{y} = g t'],
                    ['Equation to use', 'x = u_{x} t', 'y = ½ g t²'],
                  ],
                  firstColHeader: true,
                },
                { t: 'note', text: 'The most common slip: writing u_y = 42. The parcel is released level, so its INITIAL vertical velocity is 0. It only gains downward speed because of gravity.' },
              ],
            },
            {
              id: 'animate',
              kicker: 'Watch it first',
              title: 'Release the parcel',
              blocks: [
                {
                  t: 'widget',
                  id: 'parcel-drop-anim',
                  title: 'The parcel, and the numbers as it falls',
                  idea: 'Drag the time slider or press Release. Switch on the 0.5 s dots: equal steps across, growing steps down. Change the speed and height and watch what changes.',
                  predict: { q: 'Predict: one parcel is released from the moving aircraft. Another is dropped from rest from the same height at the same instant. Ignoring air resistance, which reaches the ground first?', options: ['they land at the same time', 'the one dropped from rest', 'the one released from the aircraft'], answer: 0, why: 'Only the vertical motion decides the time. Both start with zero vertical velocity and both accelerate at g. The horizontal speed changes WHERE it lands, not WHEN.' },
                },
                { t: 'note', text: 'Try it: change the aircraft speed and the time stays the same. Change the height and it changes.' },
              ],
            },
            {
              id: 'path',
              kicker: 'Part (i) · 1 mark',
              title: 'Sketch the path',
              blocks: [
                {
                  t: 'arrows',
                  head: ['Feature of the path', 'Why'],
                  rows: [
                    { from: 'starts horizontal', to: 'at release the velocity is 42 m s⁻¹ along the flight direction, with no vertical part', emoji: '➡️' },
                    { from: 'curves downward', to: 'v_{y} keeps growing as gravity acts', note: 'a parabola', emoji: '↘️' },
                    { from: 'gets steeper', to: 'v_{x} stays 42 but v_{y} increases, so the angle below the horizontal grows', emoji: '📈' },
                    { from: 'lands ahead of the release point', to: 'it keeps moving forward at 42 m s⁻¹ the whole time', emoji: '📍' },
                  ],
                },
                { t: 'callout', kind: 'warn', title: 'Not a straight line', text: 'It is neither straight down nor a straight slope. It is a curve that starts flat and gets steeper. Extra, not asked: it lands x = 42 × 3.586 ≈ 151 m ahead of the release point.' },
              ],
            },
            {
              id: 'time',
              kicker: 'Part (ii) · 3 marks',
              title: 'Time to reach the ground',
              blocks: [
                {
                  t: 'steps',
                  title: 'time of fall, vertical axis only',
                  given: 'A parcel is released from an aircraft flying level at 42 m s⁻¹, 63 m above the ground. Find the time from release to reaching the ground. Use the vertical axis only: u_{y} = 0, a = 9.8 m s⁻² downward, s = 63 m.',
                  steps: [
                    { line: 's = u_{y}t + ½at²', why: 'The equation with s, u, a and t. Apply it to the vertical axis only.' },
                    { line: '63 = 0 × t + ½ × 9.8 × t²', why: 'u_{y} = 0 because the parcel is released level, so the first term vanishes.' },
                    { line: '63 = 4.9 t²', why: '½ × 9.8 = 4.9.' },
                    { line: 't² = 63 / 4.9 = 12.86', why: 'Rearrange for t².' },
                    { line: 't = √12.86 = 3.59 s ≈ 3.6 s', why: 'Square root. The 42 m s⁻¹ was not needed: horizontal speed does not change how long it takes to fall.' },
                  ],
                  answer: 't ≈ 3.6 s (3.586 s unrounded)',
                },
                { t: 'callout', kind: 'note', title: 'Keep the unrounded value', text: 'Store 3.5857… in your calculator (use the answer key) for the next parts rather than re-typing 3.6.' },
              ],
            },
            {
              id: 'vy',
              kicker: 'Part (iii) · 1 mark',
              title: 'Vertical component just before landing',
              blocks: [
                {
                  t: 'steps',
                  title: 'vertical velocity at the ground',
                  given: 'The parcel has been falling for t = 3.586 s with a = 9.8 m s⁻², starting with no vertical velocity. Find the vertical component of its velocity just before it lands.',
                  steps: [
                    { line: 'v = u + at (vertical axis)', why: 'Final velocity from initial velocity, acceleration and time.' },
                    { line: 'v_{y} = 0 + 9.8 × 3.586', why: 'u_{y} = 0. Use the unrounded t.' },
                    { line: 'v_{y} = 35.1 m s⁻¹, downward', why: 'State the direction: it points down.' },
                  ],
                  answer: '35.1 m s⁻¹ downward',
                },
                { t: 'callout', kind: 'warn', title: 'A rounding trap', text: 'With the rounded t = 3.6 s you get 9.8 × 3.6 = 35.3 m s⁻¹, not 35.1. Keep the unrounded time. A check that needs no time at all: v_y = √(2gh) = √(2 × 9.8 × 63) = 35.1 m s⁻¹.' },
              ],
            },
            {
              id: 'speed',
              kicker: 'Part (iv) · 2 marks',
              title: 'Speed on landing',
              blocks: [
                {
                  t: 'steps',
                  title: 'put the two components back together',
                  given: 'Just before landing the parcel has a horizontal component of 42 m s⁻¹ (unchanged) and a vertical component of 35.1 m s⁻¹ downward, at right angles. Find its speed.',
                  steps: [
                    { line: 'v_{x} = 42 m s⁻¹', why: 'No horizontal force, so the horizontal component never changed.' },
                    { line: 'v = √(v_{x}² + v_{y}²)', why: 'The components are at right angles, so Pythagoras gives the size of the resultant.' },
                    { line: 'v = √(42² + 35.1²) = √(1764 + 1232) = 54.7 m s⁻¹', why: 'Substitute and evaluate.' },
                    { line: 'tan θ = 35.1 / 42, so θ ≈ 40° below the horizontal', why: 'Optional: the direction of the velocity at landing.' },
                  ],
                  answer: 'speed ≈ 55 m s⁻¹ (54.7 with v_y rounded to 35.1; 54.8 with unrounded values)',
                },
              ],
            },
            {
              id: 'energy',
              kicker: 'Check it another way',
              title: 'Energy gives the same speed',
              blocks: [
                {
                  t: 'steps',
                  title: 'gravitational PE becomes kinetic energy',
                  given: 'Use energy to check part (iv). With no air resistance, the parcel’s gravitational potential energy lost equals the kinetic energy gained. Let the parcel have mass m.',
                  steps: [
                    { line: '½mv² = ½m(42)² + m g h', why: 'KE at landing = KE at release + the GPE lost in falling 63 m.' },
                    { line: 'v² = 42² + 2 × 9.8 × 63 = 1764 + 1234.8', why: 'Cancel m, then substitute.' },
                    { line: 'v = √2998.8 = 54.8 m s⁻¹', why: 'Matches the 54.7 within rounding: 35.1 was rounded before squaring.' },
                  ],
                  answer: 'The mass cancels: the landing speed does not depend on how heavy the parcel is.',
                },
              ],
            },
            {
              id: 'myth',
              kicker: 'Misconceptions',
              title: 'Four classic slips',
              blocks: [
                {
                  t: 'pills',
                  groups: [
                    { label: '✗ Common mistakes', tone: 'warn', items: ['It falls straight down because it was “dropped”', 'The 42 m s⁻¹ makes it take longer to fall', 'The landing speed is 35.1 m s⁻¹ (only the vertical part)', 'u_{y} = 42 m s⁻¹'] },
                    { label: '✓ Better', items: ['It keeps moving forward at 42 m s⁻¹ while it falls', 'The time depends only on the height and g', 'Landing speed = the resultant of 42 and 35.1, about 55 m s⁻¹', 'u_{y} = 0 for a level release'] },
                  ],
                },
              ],
            },
          ],
        },
        { t: 'check', id: 'a1-9b-c1', q: 'A parcel is released from an aircraft flying level at 42 m s⁻¹. The initial VERTICAL velocity of the parcel is…', options: ['0', '42 m s⁻¹ downward', '9.8 m s⁻¹ downward'], answer: 0, why: 'The aircraft is flying level, so there is no vertical motion at release. The parcel only gains downward speed because of gravity.', back: 'axes' },
        { t: 'check', id: 'a1-9b-c2', q: 'An aircraft flying level at 55 m s⁻¹ releases a parcel 45 m above level ground. Ignoring air resistance (g = 9.8 m s⁻²), the time to reach the ground is about…', options: ['9.2 s', '3.0 s', '0.82 s'], answer: 1, why: '45 = ½ × 9.8 × t² gives t² = 90 / 9.8 = 9.18, so t = 3.0 s. The 55 m s⁻¹ is not used. (9.2 is t², and 0.82 is 45 ÷ 55.)', back: 'time' },
        { t: 'check', id: 'a1-9b-c3', q: 'Just before the parcel in the question lands, the horizontal component of its velocity is…', options: ['42 m s⁻¹', '0', '35.1 m s⁻¹'], answer: 0, why: 'Nothing pushes it sideways (no air resistance), so the horizontal component stays at its release value, 42 m s⁻¹.', back: 'axes' },
        { t: 'check', id: 'a1-9b-c4', q: 'A small aircraft flies level at 30 m s⁻¹ and releases a parcel 80 m above level ground. Ignoring air resistance, the speed at which the parcel reaches the ground is about…', options: ['40 m s⁻¹', '50 m s⁻¹', '70 m s⁻¹'], answer: 1, why: 'v_y = √(2gh) = √(2 × 9.8 × 80) = 39.6 m s⁻¹. Speed = √(30² + 39.6²) = 49.7 ≈ 50 m s⁻¹. Adding 30 + 39.6 would wrongly give about 70, and 40 is only the vertical part.', back: 'speed' },
        { t: 'check', id: 'a1-9b-c5', q: 'While the parcel falls, the aircraft keeps flying level at a constant 42 m s⁻¹. Ignoring air resistance on the parcel, where is the aircraft relative to the parcel?', options: ['directly above it', 'ahead of it', 'behind it'], answer: 0, why: 'Both keep the same horizontal velocity, 42 m s⁻¹, so they stay in the same vertical line.', back: 'animate' },
        { t: 'check', id: 'a1-9b-c6', q: 'The time a parcel takes to reach the ground after release from a level-flying aircraft depends on…', options: ['the height and g only', 'the height, g and the aircraft’s speed', 'the aircraft’s speed only'], answer: 0, why: 'Time of fall comes from the vertical axis, h = ½gt². The horizontal speed only decides how far it travels.', back: 'time' },
        { t: 'apply', id: 'a1-9b-a1', prompt: 'The aircraft flies twice as fast, at 84 m s⁻¹, at the same height of 63 m. State what happens to (a) the time to reach the ground and (b) the horizontal distance the parcel travels. Explain using the two axes.', model: '(a) The time is unchanged at 3.6 s. It comes from the vertical axis, h = ½gt² with u_y = 0, and neither the height nor g has changed. (b) The horizontal distance is x = u_x t = 84 × 3.586 ≈ 301 m, twice the 151 m before, because the parcel moves forward at a constant 84 m s⁻¹ for the same time.', checklist: ['I said the time is unchanged and why (vertical axis only)', 'I used u_y = 0 and h = ½gt²', 'I said the horizontal distance doubles (about 301 m)', 'I used x = u_x t with constant horizontal velocity'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 9', q: 'Before using v² = u² + 2as with a speed in km h⁻¹, you should…', options: ['convert it to m s⁻¹', 'leave it in km h⁻¹', 'convert the distance to km'], answer: 0, why: 'The equations need consistent SI units.' }, { from: 'A.1 · 6', q: 'A body starts from rest with constant acceleration. If the time is doubled, the distance travelled becomes…', options: ['four times as large', 'twice as large', 'half as large'], answer: 0, why: 's = ½at², so s ∝ t².' }] },
        { t: 'summary', points: ['Split projectile motion into two independent axes: constant velocity horizontally, constant acceleration g vertically.', 'A level release means u_y = 0. The time of fall comes from h = ½gt² and does not depend on the horizontal speed.', 'The vertical component at the ground is v_y = gt (or √(2gh)). The horizontal component stays the same.', 'The landing speed is the resultant √(v_x² + v_y²), found by Pythagoras. Energy gives the same answer.'], terms: [{ term: 'Component', def: 'the part of a vector along one chosen axis' }, { term: 'Resultant', def: 'the single vector made from the components, found by Pythagoras' }], formulas: ['s = u_{y}t + ½at²', 'v = u + at', 'x = u_{x}t', 'v = √(v_{x}² + v_{y}²)', 'v² = u_{x}² + 2gh'], errors: ['Writing u_y = 42 for a level release.', 'Using the horizontal speed to find the time of fall.', 'Quoting only the vertical component as the landing speed.', 'Rounding t to 3.6 s before using it again.'] },
      ],
    },
    // ------------------------------------------------------------------ A.1 · 9d
    {
      slug: 'exam-questions-four',
      code: 'A.1 · 9d',
      title: 'Exam question IV: a ball thrown over a wall',
      blurb: 'Launch at an angle. Resolve into components, find the time, then the height. Then change every number and finish with one of three questions.',
      syllabus: 'A.1 Kinematics · projectile motion at an angle, components, s = ut + ½at²',
      level: 'SL+HL',
      difficulty: 3,
      minutes: 30,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'A student throws a ball at a wall. Will it get over? If the wall were further away, would it still? And if it hits, how high up? One set of equations answers all three.' },
        {
          t: 'deck',
          slides: [
            {
              id: 'question',
              kicker: 'The question · 7 marks',
              title: 'A ball thrown over a wall',
              blocks: [
                { t: 'diagram', id: 'wall', caption: 'The situation, drawn to scale. The dashed curve is the path; the three unknowns are the time to the wall, the vertical component u_y of the launch velocity, and the wall height h.' },
                { t: 'p', text: 'A student throws a ball over a vertical wall. The ball leaves the hand 1.2 m above level ground with a speed of 22 m s⁻¹, at 40° above the horizontal. The wall is a horizontal distance of 36 m from the student. Air resistance is negligible.' },
                { t: 'table', head: ['Part', 'Task', 'Marks'], rows: [['(a)', 'Define velocity', '1'], ['(b)(i)', 'Determine the time taken for the ball to reach the wall', '2'], ['(b)(ii)', 'Calculate the vertical component u of the initial velocity of the ball', '1'], ['(b)(iii)', 'The ball just goes over the wall. Calculate the height h of the wall', '3']] },
              ],
            },
            {
              id: 'define',
              kicker: 'Part (a) · 1 mark',
              title: 'Define velocity',
              blocks: [
                { t: 'def', term: 'Velocity', text: 'The rate of change of displacement (displacement per unit time). It is a vector: it has a direction as well as a size.' },
                { t: 'callout', kind: 'warn', title: 'Say “displacement”', text: 'Not “distance per unit time”, which is speed. Not just “speed with a direction”. The word that earns the mark is displacement.' },
              ],
            },
            {
              id: 'plan',
              kicker: 'The plan',
              title: 'Sign convention, then two axes',
              blocks: [
                {
                  t: 'table',
                  head: ['', 'x-axis (horizontal)', 'y-axis (vertical)'],
                  rows: [
                    ['Sign convention', 'toward the wall = +', 'up = +, down = −'],
                    ['Acceleration', 'a_{x} = 0 (uniform motion)', 'a_{y} = −g = −9.81 m s⁻²'],
                    ['Initial velocity', 'u_{x} = 22 cos 40° = 16.85 m s⁻¹', 'u_{y} = 22 sin 40° = 14.14 m s⁻¹'],
                    ['Equation', 's = ut', 's = ut + ½at²'],
                  ],
                  firstColHeader: true,
                },
                { t: 'callout', kind: 'idea', title: 'Assign the signs first', text: 'Decide up is +. Then u_y = +14.14 m s⁻¹ and the acceleration is −9.81 m s⁻². Everything else follows from that choice. The two axes share only the time.' },
              ],
            },
            {
              id: 'ii',
              kicker: 'Part (b)(ii) · 1 mark',
              title: 'Vertical component of the initial velocity',
              blocks: [
                {
                  t: 'steps',
                  title: 'resolve the launch velocity',
                  given: 'The ball leaves the hand at 22 m s⁻¹ at 40° above the horizontal. Resolve this into a horizontal component and a vertical component.',
                  steps: [
                    { line: 'sin 40° = u_{y} / 22', why: 'The vertical component is the side opposite the angle in the velocity triangle.' },
                    { line: 'u_{y} = 22 sin 40° = 14.14 m s⁻¹', why: 'Upward, so positive. This is the INITIAL vertical velocity.' },
                    { line: 'u_{x} = 22 cos 40° = 16.85 m s⁻¹', why: 'The horizontal component, needed for the time to the wall.' },
                  ],
                  answer: 'u = 14.1 m s⁻¹ (upward)',
                },
              ],
            },
            {
              id: 'i',
              kicker: 'Part (b)(i) · 2 marks',
              title: 'Time to reach the wall',
              blocks: [
                {
                  t: 'steps',
                  title: 'horizontal axis only',
                  given: 'The wall is 36 m away. Horizontally there is no acceleration, so the ball moves at the constant 16.85 m s⁻¹.',
                  steps: [
                    { line: 't = d / u_{x} = 36 / 16.85', why: 'Uniform motion: time = distance ÷ speed.' },
                    { line: 't = 2.136 s ≈ 2.1 s', why: 'Keep 2.136 s in the calculator for the next part.' },
                  ],
                  answer: 't = 2.1 s (2.136 s unrounded)',
                },
              ],
            },
            {
              id: 'iii',
              kicker: 'Part (b)(iii) · 3 marks',
              title: 'Height of the wall',
              blocks: [
                {
                  t: 'steps',
                  title: 'vertical axis, at the time the ball reaches the wall',
                  given: 'The ball just goes over the wall, so the wall’s height equals the ball’s height when it reaches the wall, at t = 2.136 s. First find how far above the launch point it is, then add the 1.2 m it started above the ground.',
                  steps: [
                    { line: 's = u_{y}t + ½at²', why: 'Vertical axis, with up positive.' },
                    { line: 's = 14.14 × 2.136 + ½ × (−9.81) × 2.136²', why: 'a = −9.81 m s⁻² because gravity acts down.' },
                    { line: 's = 30.21 − 22.38 = 7.83 m', why: 'The ball is 7.83 m above the point where it left the hand.' },
                    { line: 'h = 7.83 + 1.2 = 9.03 m', why: 'Check the initial conditions: it was thrown from 1.2 m above the ground, so add 1.2 m.' },
                  ],
                  answer: 'h = 9.0 m',
                },
                { t: 'callout', kind: 'warn', title: 'A rounding trap', text: 'Using t = 2.1 s gives s = 14.14 × 2.1 − 4.905 × 2.1² = 29.7 − 21.6 = 8.1 m, so h = 9.3 m. Using 2.136 s gives h = 9.0 m. The answer shifts by 0.3 m because near the wall the ball is falling quickly (v_y = −6.8 m s⁻¹), so a small error in t makes a big error in the height. Keep the unrounded time and round only the final answer.' },
              ],
            },
            {
              id: 'lab',
              kicker: 'Make your own',
              title: 'Change the numbers, change the question',
              blocks: [
                {
                  t: 'widget',
                  id: 'wall-problem-lab',
                  title: 'Ball over a wall: edit everything',
                  idea: 'Change the speed, angle, release height, wall distance and wall height. The question rewrites itself, the ball flies, and the worked solution updates. Pick one of the three finishing questions, or press the dice for a random one.',
                  predict: { q: 'Predict: with the exam numbers (22 m s⁻¹ at 40° from 1.2 m), the wall is moved much further away, to 60 m. The ball…', options: ['lands before it reaches the wall', 'still reaches the wall, but lower', 'hits the wall higher up'], answer: 0, why: 'The ball lands about 50 m from the thrower (range ≈ 50.0 m). A wall at 60 m is never reached.' },
                },
              ],
            },
            {
              id: 'three',
              kicker: 'Three ways to finish',
              title: 'Whichever question is asked, the method is the same',
              blocks: [
                {
                  t: 'arrows',
                  head: ['The question', 'What you do'],
                  rows: [
                    { from: 'Will it clear the wall?', to: 'find y at the wall’s distance, then compare it with the wall height', note: 't = d / u_x, then y = y₀ + u_y t − ½gt²', emoji: '⚖️' },
                    { from: 'How far should the wall be?', to: 'solve y = wall height for t, take the LATER root, then d = u_x t', note: 'a quadratic: two roots, up and down', emoji: '📏' },
                    { from: 'How high does it hit?', to: 'the height y at the wall’s distance is where it meets the wall', note: 'if y is below the top, that is where it hits', emoji: '🎯' },
                  ],
                },
                { t: 'callout', kind: 'note', title: 'The ball is at the wall height twice', text: 'A ball that rises over a given height is at that height once going up and once coming down. A wall at any distance between those two points is cleared. The farthest wall that is still just cleared is the one on the way down.' },
              ],
            },
            {
              id: 'myth',
              kicker: 'Misconceptions',
              title: 'Things to avoid',
              blocks: [
                {
                  t: 'pills',
                  groups: [
                    { label: '✗ Common mistakes', tone: 'warn', items: ['Using 22 m s⁻¹ as the vertical (or horizontal) speed', 'Forgetting to add the 1.2 m release height', 'Rounding t before using it again', 'Using g = +9.81 with up positive'] },
                    { label: '✓ Better', items: ['Resolve: u_y = 22 sin 40°, u_x = 22 cos 40°', 'Height above ground = release height + s', 'Keep the unrounded time', 'Up positive means a = −9.81 m s⁻²'] },
                  ],
                },
              ],
            },
          ],
        },
        { t: 'check', id: 'a1-9d-c1', q: 'A ball is thrown at 22 m s⁻¹ at 40° above the horizontal. The initial vertical component of its velocity is…', options: ['14.1 m s⁻¹', '16.9 m s⁻¹', '22 m s⁻¹'], answer: 0, why: 'u_y = 22 sin 40° = 14.1 m s⁻¹. (16.9 is 22 cos 40°, the horizontal component.)', back: 'ii' },
        { t: 'check', id: 'a1-9d-c2', q: 'At the highest point of its flight (no air resistance), the vertical component of the ball’s velocity is…', options: ['equal to g', 'zero', 'equal to the horizontal component'], answer: 1, why: 'It has stopped rising and not yet started falling, so v_y = 0. The horizontal component is unchanged.', back: 'plan' },
        { t: 'check', id: 'a1-9d-c3', q: 'A ball is thrown from the ground at 20 m s⁻¹, 30° above the horizontal, toward a wall 30 m away. The time to reach the wall is about…', options: ['1.7 s', '1.5 s', '3.0 s'], answer: 0, why: 'u_x = 20 cos 30° = 17.3 m s⁻¹, so t = 30 / 17.3 = 1.73 s. (1.5 is 30 ÷ 20, which ignores the angle.)', back: 'i' },
        { t: 'check', id: 'a1-9d-c4', q: 'For the same throw (g = 9.81 m s⁻²) the ball’s height above the ground when it reaches the wall is…', options: ['17.3 m', '14.7 m', '2.6 m'], answer: 2, why: 'u_y = 10 m s⁻¹. y = 10 × 1.732 − ½ × 9.81 × 1.732² = 17.32 − 14.72 = 2.6 m. (17.3 forgets gravity; 14.7 is the gravity term alone.)', back: 'iii' },
        { t: 'check', id: 'a1-9d-c5', q: 'The ball “just goes over” a wall. This means that at the wall, the height of the ball…', options: ['is zero', 'equals the height of the wall', 'equals the height it was released from'], answer: 1, why: 'Just clearing means the ball is level with the top of the wall as it passes.', back: 'iii' },
        { t: 'check', id: 'a1-9d-c6', q: 'In part (iii), rounding the time 2.136 s to 2.1 s changes the height by about 0.3 m. The main reason is that…', options: ['g changes with height', 'the ball is falling quickly there, so its height is sensitive to the time', 'the horizontal speed changes with time'], answer: 1, why: 'Near the wall v_y is about −6.8 m s⁻¹, so an error of 0.036 s in t changes the height by about 0.25 m.', back: 'iii' },
        { t: 'check', id: 'a1-9d-c7', q: 'The vertical displacement of the ball from the launch point, when it reaches the wall, is 7.83 m. The wall’s height above the ground is…', options: ['9.03 m', '7.83 m', '6.63 m'], answer: 0, why: 'The ball started 1.2 m above the ground: 7.83 + 1.2 = 9.03 m.', back: 'iii' },
        { t: 'apply', id: 'a1-9d-a1', prompt: 'The student throws at the same angle, 40°, but a little faster. The wall stays 36 m away. Explain, using the equations, what happens to the height of the ball at the wall.', model: 'With a larger speed u, both u_x = u cos 40° and u_y = u sin 40° increase. The time to reach the wall, t = 36 / u_x, becomes smaller, so gravity has less time to pull the ball down, and u_y t is larger. Both effects raise y = y₀ + u_y t − ½gt². Written together, y = y₀ + d tan θ − g d² / (2u² cos²θ): a bigger u makes the last term smaller, so y is larger.', checklist: ['I said both components increase', 'I said the time to the wall decreases (t = d / u_x)', 'I linked less time to less fall under gravity', 'I used y = y₀ + u_y t − ½gt² (or the combined form)'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 9c', q: 'The horizontal component of a projectile’s velocity (no air resistance) is…', options: ['constant', 'growing', 'zero at the top'], answer: 0, why: 'No horizontal force, so no horizontal acceleration.' }, { from: 'A.1 · 9b', q: 'A ball is dropped and another is thrown sideways from the same height. They…', options: ['land at the same time', 'land at different times'], answer: 0, why: 'The vertical motions are identical.' }] },
        { t: 'summary', points: ['Resolve the launch velocity: u_x = u cosθ, u_y = u sinθ. Fix a sign convention: up is +, so a_y = −g.', 'Time comes from the horizontal axis: t = d / u_x. Height comes from the vertical axis: y = y₀ + u_y t − ½gt².', 'Add the release height to get the height above the ground. Keep the unrounded time.', 'Three finishing questions: will it clear (compare), how far should the wall be (solve y = h, take the later root), how high does it hit (y at the wall).'], terms: [{ term: 'Velocity', def: 'rate of change of displacement, a vector' }, { term: 'Component', def: 'the part of a vector along one axis' }], formulas: ['u_{x} = u cosθ', 'u_{y} = u sinθ', 't = d / u_{x}', 'y = y_{0} + u_{y}t − ½gt²'], errors: ['Using 22 m s⁻¹ as a component.', 'Forgetting to add the release height.', 'Rounding the time too early.', 'Mixing the sign of g.'] },
      ],
    },

    // ------------------------------------------------------------------ A.1 · 9e
    {
      slug: 'vector-addition-crosswind-umbrella',
      code: 'A.1 · 9e',
      title: 'Adding velocities: crosswind landing and the umbrella',
      blurb: 'Land a plane in a crosswind, then keep dry in the rain. Two games, one triangle of velocities.',
      syllabus: 'A.1 Kinematics · relative velocity, vector addition, components',
      level: 'SL+HL',
      difficulty: 3,
      minutes: 28,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'To fly straight down a runway in a crosswind, the pilot does not point the nose along the runway. To stay dry in the rain, you do not hold the umbrella straight up. Different scenes, same triangle.' },
        {
          t: 'deck',
          slides: [
            {
              id: 'rule',
              kicker: 'The rule',
              title: 'Velocities add as vectors',
              blocks: [
                { t: 'diagram', id: 'crosswind', caption: 'Top view of the same landing, flown two ways. The black arrow is the sum of the other two: it is where the aircraft actually goes.' },
                { t: 'formulas', items: [{ eq: 'v_{over the ground} = v_{through the air} + v_{of the air (wind)}', legend: ['draw them head to tail', 'the sum is the third side of the triangle', 'it is the velocity you actually have over the ground'] }] },
                {
                  t: 'arrows',
                  head: ['Vector', 'In the crosswind landing'],
                  rows: [
                    { from: 'through the air', to: '200 km h⁻¹ along the nose', note: 'what the pilot controls', emoji: '✈️' },
                    { from: 'of the air', to: '50 km h⁻¹ sideways', note: 'the wind', emoji: '💨' },
                    { from: 'over the ground', to: 'their vector sum', note: 'where the plane really goes', emoji: '➡️' },
                  ],
                },
              ],
            },
            {
              id: 'game',
              kicker: 'Play',
              title: 'Land the plane in a crosswind',
              blocks: [
                {
                  t: 'widget',
                  id: 'crosswind-landing-game',
                  title: 'Steer the nose, watch the sum',
                  idea: 'Press Start, then steer with the slider or the arrow keys. The blue arrow is the nose, the light-blue arrow is the wind, the black arrow is where you actually go. Aim the black arrow at the runway.',
                  predict: { q: 'Predict: a 50 km h⁻¹ crosswind blows from the left. To fly straight along the runway, the pilot should point the nose…', options: ['along the runway', 'slightly to the left, into the wind', 'slightly to the right, with the wind'], answer: 1, why: 'The plane’s sideways velocity through the air must cancel the wind’s sideways velocity, so the nose points into the wind.' },
                },
              ],
            },
            {
              id: 'solve',
              kicker: 'The solution',
              title: 'The crab angle',
              blocks: [
                {
                  t: 'steps',
                  title: 'no drift, straight down the runway',
                  given: 'A plane flies at 200 km h⁻¹ through the air. A steady 50 km h⁻¹ wind blows across the runway (at 90° to it). The pilot wants the plane to move straight along the runway.',
                  steps: [
                    { line: 'sideways: V sinθ = W', why: 'For zero sideways drift, the sideways part of the plane’s velocity through the air must cancel the wind.' },
                    { line: 'sinθ = W / V = 50 / 200 = 0.25', why: 'Divide.' },
                    { line: 'θ = sin⁻¹(0.25) = 14.5°', why: 'The nose points 14.5° into the wind: the “crab angle”.' },
                    { line: 'ground speed = √(V² − W²) = √(200² − 50²) = 193.6 km h⁻¹', why: 'Pythagoras: the air velocity of 200 km h⁻¹ is the hypotenuse of the triangle, so the speed along the runway is a bit less.' },
                  ],
                  answer: 'θ = 14.5° into the wind; speed along the runway 193.6 km h⁻¹',
                },
                { t: 'callout', kind: 'note', title: 'What if the pilot ignores the wind?', text: 'Pointing the nose straight along the runway, the plane drifts sideways at 50 km h⁻¹. Flying 4 km at 200 km h⁻¹ takes 72 s, so it ends up 50 × 72 / 3600 = 1.0 km off the runway.' },
              ],
            },
            {
              id: 'rain',
              kicker: 'Same triangle, new scene',
              title: 'Walking in the rain',
              blocks: [
                {
                  t: 'widget',
                  id: 'umbrella-walk-game',
                  title: 'Keep dry',
                  idea: 'Change your walking speed, then lean the umbrella forward until the “body kept dry” meter is as high as it goes. Switch between watching from the pavement and from the walker.',
                  predict: { q: 'Predict: the rain falls straight down and you walk forward at a steady speed. Relative to YOU, the rain comes…', options: ['straight down', 'from in front of you, slanting', 'from behind you, slanting'], answer: 1, why: 'You walk into the rain. From your point of view the rain has your velocity taken away: it moves backward as well as down, so it comes at you from the front.' },
                },
              ],
            },
            {
              id: 'rainsolve',
              kicker: 'The solution',
              title: 'How far to lean the umbrella',
              blocks: [
                {
                  t: 'steps',
                  title: 'velocity of the rain relative to the walker',
                  given: 'Rain falls vertically at 8 m s⁻¹. A person walks at 2 m s⁻¹ along a pavement. Find the angle at which the umbrella should lean, and the speed at which the rain meets the person.',
                  steps: [
                    { line: 'v(rain relative to walker) = v(rain) − v(walker)', why: 'Velocity relative to an observer is the object’s velocity minus the observer’s velocity.' },
                    { line: 'components: 8 m s⁻¹ down and 2 m s⁻¹ backward', why: 'Subtracting the walker’s forward 2 m s⁻¹ leaves a backward 2 m s⁻¹.' },
                    { line: 'tanθ = W / v = 2 / 8 = 0.25, so θ = 14.0°', why: 'θ is measured from the vertical. The rain comes from the front, so lean the umbrella forward by 14.0°.' },
                    { line: 'speed = √(8² + 2²) = 8.25 m s⁻¹', why: 'Pythagoras: you meet the rain a little faster than it falls.' },
                  ],
                  answer: 'lean forward 14.0° from the vertical; the rain meets the walker at 8.25 m s⁻¹',
                },
                {
                  t: 'table',
                  head: ['Walking pace', 'Speed W (m s⁻¹)', 'Lean θ = tan⁻¹(W / 8)'],
                  rows: [['stroll', '1.5', '10.6°'], ['walk', '2', '14.0°'], ['brisk walk', '3', '20.6°'], ['jog', '5', '32.0°']],
                  note: 'Rain speed 8 m s⁻¹. The faster you go, the more you must lean.',
                },
              ],
            },
            {
              id: 'compare',
              kicker: 'Compare',
              title: 'Same method, different triangle',
              blocks: [
                {
                  t: 'table',
                  head: ['', 'Crosswind landing', 'Walking in rain'],
                  rows: [
                    ['Known speed through the medium', '200 km h⁻¹ (the hypotenuse)', '8 m s⁻¹ (a side: vertical)'],
                    ['Other velocity', 'the wind, 50 km h⁻¹', 'you, 2 m s⁻¹'],
                    ['What you choose', 'the heading of the nose', 'the lean of the umbrella'],
                    ['Condition', 'sinθ = W / V', 'tanθ = W / v'],
                  ],
                  firstColHeader: true,
                  note: 'Draw the triangle every time and ask: which side do I know? The plane’s 200 km h⁻¹ is the longest side; the rain’s 8 m s⁻¹ is a shorter one.',
                },
              ],
            },
            {
              id: 'myth',
              kicker: 'Misconceptions',
              title: 'Common slips',
              blocks: [
                {
                  t: 'pills',
                  groups: [
                    { label: '✗ Common mistakes', tone: 'warn', items: ['Point the nose at the runway to land on it', 'Rain falls straight down for the walker too', 'Always use tanθ = W / V'] },
                    { label: '✓ Better', items: ['Point the nose into the wind so the SUM points along the runway', 'The walker sees the rain slanted: rain velocity minus walker velocity', 'Sketch the triangle first; sin, cos or tan depends on which sides you know'] },
                  ],
                },
              ],
            },
          ],
        },
        { t: 'check', id: 'a1-9e-c1', q: 'A plane flies at 200 km h⁻¹ through the air in a 50 km h⁻¹ crosswind. To fly straight along the runway, the nose must point…', options: ['along the runway', 'into the wind by 14.5°', 'with the wind by 14.5°'], answer: 1, why: 'sinθ = 50 / 200 = 0.25, so θ = 14.5°, and the nose points into the wind to cancel the drift.', back: 'solve' },
        { t: 'check', id: 'a1-9e-c2', q: 'For that landing, the plane’s speed along the runway is about…', options: ['200 km h⁻¹', '250 km h⁻¹', '194 km h⁻¹'], answer: 2, why: '√(200² − 50²) = 193.6 ≈ 194 km h⁻¹. It is slightly less than 200 because part of the airspeed is used to cancel the wind.', back: 'solve' },
        { t: 'check', id: 'a1-9e-c3', q: 'Rain falls vertically at 6.0 m s⁻¹. You run at 3.0 m s⁻¹. From you, the rain seems to come at what angle from the vertical?', options: ['26.6°, from in front', '63.4°, from in front', '26.6°, from behind'], answer: 0, why: 'tanθ = 3.0 / 6.0 = 0.50, so θ = 26.6°. You run into the rain, so it comes from the front.', back: 'rainsolve' },
        { t: 'check', id: 'a1-9e-c4', q: 'For the same runner and rain, the speed of the rain relative to the runner is…', options: ['9.0 m s⁻¹', '6.7 m s⁻¹', '3.0 m s⁻¹'], answer: 1, why: '√(6.0² + 3.0²) = 6.7 m s⁻¹. The two components are at right angles, so use Pythagoras, not addition.', back: 'rainsolve' },
        { t: 'check', id: 'a1-9e-c5', q: 'You walk faster in the same rain. To stay dry, the umbrella should lean…', options: ['less', 'the same', 'more, toward the direction you are walking'], answer: 2, why: 'tanθ = W / v grows with W, so the rain comes in more slanted and the umbrella must lean further forward.', back: 'rain' },
        { t: 'check', id: 'a1-9e-c6', q: 'A pilot ignores the wind and points the nose straight along the runway. The plane will…', options: ['fly straight along the runway', 'drift sideways with the wind', 'turn into the wind'], answer: 1, why: 'Its ground velocity is the sum of the nose velocity and the wind, so the sideways wind velocity is added to the motion.', back: 'game' },
        { t: 'apply', id: 'a1-9e-a1', prompt: 'A swimmer can swim at 1.5 m s⁻¹ in still water and wants to cross a river straight across to the opposite bank. The river flows at 0.60 m s⁻¹. At what angle upstream should she aim, and how fast does she cross?', model: 'To go straight across, her upstream component must cancel the current: 1.5 sinθ = 0.60, so sinθ = 0.40 and θ = 23.6° upstream of straight across. Her speed across is the other component: 1.5 cosθ = √(1.5² − 0.60²) = 1.4 m s⁻¹.', checklist: ['I drew the triangle with the swimmer’s 1.5 m s⁻¹ as the hypotenuse', 'I used sinθ = 0.60 / 1.5', 'I found θ = 23.6° upstream', 'I used Pythagoras for the speed across (1.4 m s⁻¹)'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 9c', q: 'The landing speed of a parcel is found from its components by…', options: ['Pythagoras: √(v_x² + v_y²)', 'adding them', 'multiplying them'], answer: 0, why: 'The components are at right angles.' }, { from: 'A.1 · 9d', q: 'A ball thrown at 30° at 20 m s⁻¹ has u_y equal to…', options: ['10 m s⁻¹', '17.3 m s⁻¹', '20 m s⁻¹'], answer: 0, why: '20 sin 30° = 10 m s⁻¹.' }] },
        { t: 'summary', points: ['Velocities add as vectors, head to tail: v(ground) = v(air) + v(wind).', 'Crosswind landing: point the nose into the wind, sinθ = W / V, ground speed √(V² − W²).', 'Rain on a walker: v(rain relative) = v(rain) − v(walker), tanθ = W / v, lean the umbrella forward.', 'Sketch the triangle, work out which sides you know, then choose sin, cos, tan or Pythagoras.'], terms: [{ term: 'Relative velocity', def: 'the velocity of one thing as seen by another: v(A) − v(B)' }, { term: 'Crab angle', def: 'the angle a pilot points the nose into the wind so the plane tracks straight' }], formulas: ['v_{ground} = v_{air} + v_{wind}', 'sinθ = W / V', 'tanθ = W / v', 'v_{rel} = v_{A} − v_{B}'], errors: ['Pointing the nose at the destination in a crosswind.', 'Adding the speeds instead of using Pythagoras.', 'Forgetting that the walker sees the rain slanted.'] },
      ],
    },

    // ------------------------------------------------------------------ A.1 · 9f
    {
      slug: 'stellar-aberration',
      code: 'A.1 · 9f',
      title: 'Stellar aberration and the speed of light',
      blurb: 'The umbrella problem again, but the rain is starlight and the walker is the Earth. A tilted telescope gives the speed of light.',
      syllabus: 'A.1 Kinematics · relative velocity applied to starlight, speed of light',
      level: 'SL+HL',
      difficulty: 3,
      minutes: 24,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'Point a telescope straight at a star overhead and you miss it. The telescope is fine. The Earth is moving. It is exactly why you tilt an umbrella forward when you walk in the rain.' },
        {
          t: 'deck',
          slides: [
            {
              id: 'link',
              kicker: 'The link',
              title: 'Rain and umbrella, starlight and telescope',
              blocks: [
                { t: 'diagram', id: 'aberration', caption: 'Starlight comes straight down; the Earth moves sideways; so the telescope must tilt forward. The right-hand triangle is the same one as for rain and an umbrella.' },
                {
                  t: 'table',
                  head: ['', 'Walking in the rain', 'Observing a star'],
                  rows: [
                    ['What falls straight down', 'rain, 8 m s⁻¹', 'starlight, 3.00 × 10⁸ m s⁻¹'],
                    ['The moving observer', 'you, 2 m s⁻¹', 'the Earth, 29.8 km s⁻¹'],
                    ['What you tilt', 'the umbrella', 'the telescope'],
                    ['Tilt angle', 'tanθ = 2 / 8, 14.0°', 'tanα = v / c, 20.5 arcseconds'],
                  ],
                  firstColHeader: true,
                },
                { t: 'note', text: 'You tilt the umbrella forward because you walk into the rain. You tilt the telescope forward because the Earth moves into the light. The reason is the same: subtract the observer’s velocity from the velocity of the thing coming at you.' },
              ],
            },
            {
              id: 'lab',
              kicker: 'Try it',
              title: 'Switch between rain and starlight',
              blocks: [
                {
                  t: 'widget',
                  id: 'aberration-lab',
                  title: 'The same triangle, two scenes',
                  idea: 'Compare the two scenes, then press “Six months later”. For starlight the tilt is only 20 arcseconds, so the picture exaggerates it. The bottom panel runs Bradley’s method backwards: measure α, get c.',
                  predict: { q: 'Predict: the Earth moves at about 30 km s⁻¹ and starlight at about 300 000 km s⁻¹. The telescope’s tilt will be…', options: ['about 20 arcseconds: tiny', 'about 20 degrees', 'zero, because light is too fast to be affected'], answer: 0, why: 'tanα = v / c is about 10⁻⁴, so α is about 10⁻⁴ radians, which is about 20 arcseconds (0.0057°). Small, but measurable with a good telescope.' },
                },
              ],
            },
            {
              id: 'v',
              kicker: 'First, the Earth’s speed',
              title: 'How fast does the Earth move?',
              blocks: [
                {
                  t: 'steps',
                  title: 'orbital speed',
                  given: 'The Earth goes once round the Sun in one year, T = 3.156 × 10⁷ s, on a nearly circular orbit of radius r = 1.496 × 10¹¹ m.',
                  steps: [
                    { line: 'v = 2πr / T', why: 'One orbit is a distance 2πr, covered in a time T.' },
                    { line: 'v = 2π × 1.496 × 10¹¹ / 3.156 × 10⁷', why: 'Substitute.' },
                    { line: 'v = 2.98 × 10⁴ m s⁻¹ = 29.8 km s⁻¹', why: 'About 107 000 km per hour.' },
                  ],
                  answer: 'v = 29.8 km s⁻¹',
                },
              ],
            },
            {
              id: 'calc',
              kicker: 'The aberration angle',
              title: 'How far must the telescope tilt?',
              blocks: [
                {
                  t: 'steps',
                  title: 'tanα = v / c',
                  given: 'A telescope points at a star directly overhead. The Earth moves at v = 2.98 × 10⁴ m s⁻¹, at right angles to the starlight, which travels at c = 3.00 × 10⁸ m s⁻¹.',
                  steps: [
                    { line: 'tanα = v / c', why: 'Same triangle as the umbrella: the observer’s speed over the speed of what is falling toward you.' },
                    { line: 'tanα = 2.98 × 10⁴ / 3.00 × 10⁸ = 9.93 × 10⁻⁵', why: 'Divide.' },
                    { line: 'α = 9.93 × 10⁻⁵ rad', why: 'The angle is tiny, so tanα ≈ α in radians.' },
                    { line: 'α = 9.93 × 10⁻⁵ × (180 / π) × 3600 = 20.5″', why: 'Radians to degrees to arcseconds (1° = 3600″).' },
                  ],
                  answer: 'α = 20.5 arcseconds (0.0057°)',
                },
              ],
            },
            {
              id: 'bradley',
              kicker: 'Using it',
              title: 'Measure the tilt, find the speed of light',
              blocks: [
                { t: 'p', text: 'In the 1720s the astronomer James Bradley saw nearby stars drift in small ellipses over a year. The cause was the Earth’s motion, not the stars’ own. The size of the drift is α, and the Earth’s orbital speed v is known, so the speed of light follows. His result was close to the modern 3.00 × 10⁸ m s⁻¹.' },
                {
                  t: 'steps',
                  title: 'run it backwards',
                  given: 'A star directly overhead is observed to shift by α = 20.5″ when the Earth is moving at right angles to the starlight at v = 2.98 × 10⁴ m s⁻¹. Find the speed of light.',
                  steps: [
                    { line: 'α = 20.5 / 3600 degrees = 5.69 × 10⁻³° = 9.94 × 10⁻⁵ rad', why: 'Convert arcseconds to degrees, then to radians (× π / 180).' },
                    { line: 'c = v / tanα = 2.98 × 10⁴ / 9.94 × 10⁻⁵', why: 'Rearrange tanα = v / c.' },
                    { line: 'c = 3.00 × 10⁸ m s⁻¹', why: 'The speed of light, from a measurement of starlight and the Earth’s motion.' },
                  ],
                  answer: 'c = 3.00 × 10⁸ m s⁻¹',
                },
              ],
            },
            {
              id: 'year',
              kicker: 'Through the year',
              title: 'Six months later the tilt reverses',
              blocks: [
                {
                  t: 'arrows',
                  head: ['A star seen from…', 'What the telescope does over a year'],
                  rows: [
                    { from: 'the pole of the Earth’s orbit', to: 'traces a tiny circle, angular radius 20.5″', emoji: '⭕' },
                    { from: 'the plane of the orbit', to: 'swings back and forth along a line', emoji: '↔️' },
                    { from: 'anywhere in between', to: 'traces a small ellipse', emoji: '🥚' },
                  ],
                },
                { t: 'callout', kind: 'idea', title: 'Not the same as parallax', text: 'Parallax is the shift from seeing the star from two places, and it depends on the star’s distance: nearer stars shift more. Aberration depends only on v / c, so every star at a given position in the sky shows the same shift, near or far.' },
              ],
            },
            {
              id: 'myth',
              kicker: 'Misconceptions',
              title: 'Two things to avoid',
              blocks: [
                {
                  t: 'pills',
                  groups: [
                    { label: '✗ Common mistakes', tone: 'warn', items: ['The star really moves in an ellipse', 'Aberration is bigger for near stars, like parallax'] },
                    { label: '✓ Better', items: ['The star stays put. The Earth’s velocity tilts the direction we must point', 'The size is v / c: independent of the star’s distance'] },
                  ],
                },
              ],
            },
          ],
        },
        { t: 'check', id: 'a1-9f-c1', q: 'Stellar aberration is caused by…', options: ['the star’s distance from the Earth', 'the Earth’s motion while light travels down the telescope', 'the bending of light by the atmosphere'], answer: 1, why: 'The Earth moves sideways while the light travels down the tube, so the telescope must tilt, like an umbrella in the rain.', back: 'link' },
        { t: 'check', id: 'a1-9f-c2', q: 'The Earth’s orbital speed is 2.98 × 10⁴ m s⁻¹ and the speed of light is 3.00 × 10⁸ m s⁻¹. The value of tanα is…', options: ['9.93 × 10⁻⁵', '1.01 × 10⁴', '9.93 × 10⁻³'], answer: 0, why: 'tanα = v / c = 2.98 × 10⁴ / 3.00 × 10⁸ = 9.93 × 10⁻⁵.', back: 'calc' },
        { t: 'check', id: 'a1-9f-c3', q: 'A telescope is tilted forward to see a star. Six months later, to see the same star it must be tilted…', options: ['the same way', 'the other way', 'not at all'], answer: 1, why: 'Six months later the Earth moves in the opposite direction, so the relative velocity of the starlight flips and so does the tilt.', back: 'year' },
        { t: 'check', id: 'a1-9f-c4', q: 'A star overhead shifts by 20.5″ when the Earth’s speed is 29.8 km s⁻¹ at right angles to the light. The speed of light is…', options: ['3.00 × 10⁵ m s⁻¹', '1.45 × 10³ m s⁻¹', '3.00 × 10⁸ m s⁻¹'], answer: 2, why: 'c = v / tanα with α converted to radians (9.94 × 10⁻⁵): 2.98 × 10⁴ / 9.94 × 10⁻⁵ = 3.00 × 10⁸ m s⁻¹. Forgetting to convert the angle or the speed to SI gives the other options.', back: 'bradley' },
        { t: 'check', id: 'a1-9f-c5', q: 'In the rain-and-umbrella comparison, the rain plays the role of…', options: ['starlight', 'the Earth', 'the telescope'], answer: 0, why: 'Rain is what falls straight down; starlight is what arrives from far away. You are the Earth and the umbrella is the telescope.', back: 'link' },
        { t: 'check', id: 'a1-9f-c6', q: 'Compared with parallax, the size of stellar aberration depends on the distance to the star…', options: ['strongly: nearer stars shift more', 'not at all: it depends only on v / c', 'only for stars in the plane of the orbit'], answer: 1, why: 'Aberration comes from the Earth’s velocity and the speed of light, not from the star’s distance. Parallax is the one that depends on distance.', back: 'year' },
        { t: 'apply', id: 'a1-9f-a1', prompt: 'Explain the link between tilting an umbrella in the rain and tilting a telescope to see a star. Include the equation and say what each symbol is in each case.', model: 'In both cases a moving observer meets something that falls straight down. Relative to the observer, its velocity is its own velocity minus the observer’s, so it comes in slanted from the front. The tilt satisfies tanα = v / c, where v is the observer’s speed (the walker, or the Earth at 29.8 km s⁻¹) and c is the speed of the thing arriving (the rain at about 8 m s⁻¹, or starlight at 3.00 × 10⁸ m s⁻¹). For the walker this is 14°; for the telescope only 20.5 arcseconds, because v / c is so small.', checklist: ['I said the observer moves into what falls toward them', 'I said relative velocity = its velocity minus the observer’s', 'I wrote tanα = v / c and named v and c for each case', 'I compared the sizes (14° and 20.5 arcseconds)'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 9e', q: 'Rain falls at 8 m s⁻¹ and you walk at 2 m s⁻¹. The umbrella should lean by…', options: ['14.0°', '75.9°', '0°'], answer: 0, why: 'tanθ = 2 / 8.' }, { from: 'A.1 · 9e', q: 'The velocity of A relative to B is…', options: ['v(A) − v(B)', 'v(A) + v(B)', 'v(A) × v(B)'], answer: 0, why: 'Subtract the observer’s velocity.' }] },
        { t: 'summary', points: ['A moving observer sees what falls toward them slanted: relative velocity = its velocity minus the observer’s.', 'Telescope tilt (stellar aberration): tanα = v / c, about 9.93 × 10⁻⁵ rad, which is 20.5 arcseconds.', 'The tilt reverses six months later; over a year a star traces a tiny ellipse (a circle at the orbit’s pole, a line in its plane).', 'Measuring α and knowing v gives c = v / tanα, about 3.00 × 10⁸ m s⁻¹.'], terms: [{ term: 'Stellar aberration', def: 'the apparent shift of a star’s position caused by the Earth’s velocity' }, { term: 'Arcsecond', def: '1/3600 of a degree' }], formulas: ['tanα = v / c', 'v = 2πr / T', 'c = v / tanα'], errors: ['Forgetting to convert the angle from arcseconds to radians.', 'Thinking aberration depends on the star’s distance.', 'Using v in km s⁻¹ and c in m s⁻¹.'] },
      ],
    },
    // ------------------------------------------------------------------ A.1 · 10
    {
      slug: 'models-not-a-pipe',
      code: 'A.1 · 10',
      title: 'Models: “This is not a pipe”',
      blurb: 'x = vt is not the ball. A TOK look at what a model is, and how to test one against reality.',
      syllabus: 'A.1 Kinematics · mathematical models · Theory of Knowledge link',
      level: 'SL+HL',
      difficulty: 2,
      minutes: 20,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'In 1929 the painter René Magritte painted a smoking pipe, and wrote underneath it, in French: “This is not a pipe.” He was right. It is a painting of a pipe. What is a formula like x = vt a picture of?' },
        {
          t: 'deck',
          slides: [
            {
              id: 'pipe',
              kicker: 'Representation',
              title: 'The image of a pipe is not a pipe',
              blocks: [
                { t: 'p', text: 'You cannot fill the painted pipe with tobacco. The image **represents** the pipe; it is not the pipe. Every model in physics works the same way: an equation, a graph or a simulation stands in for a real thing, and leaves most of it out.' },
                {
                  t: 'source',
                  title: 'La trahison des images (Ceci n’est pas une pipe), 1929',
                  citation: 'Magritte, René. The Treachery of Images (This Is Not a Pipe) [La trahison des images (Ceci n’est pas une pipe)]. 1929. Oil on canvas, 60.3 × 81.1 cm. Los Angeles County Museum of Art, accession no. 78.7. Purchased with funds provided by the Mr. and Mrs. William Preston Harrison Collection.',
                  note: 'Artwork © C. Herscovici / Artists Rights Society (ARS), New York. It is still under copyright, so it is linked here rather than copied: the museum shows it on its own page.',
                  href: 'https://collections.lacma.org/object/31931',
                  linkLabel: 'View the painting on the LACMA collections website',
                },
                {
                  t: 'table',
                  head: ['The real thing', 'A representation of it'],
                  rows: [['a pipe', 'a painting of a pipe'], ['a ball moving along a line', 'the equation x_f = x_i + vt'], ['a whole car journey', 'a position–time graph'], ['the atom', 'a drawing of electrons orbiting a nucleus']],
                },
                { t: 'callout', kind: 'idea', title: 'TOK', text: 'If every representation leaves something out, what do we actually KNOW when we know a model? What do we know about the thing itself?' },
              ],
            },
            {
              id: 'models',
              kicker: 'Mathematical models',
              title: 'Models that describe motion',
              blocks: [
                { t: 'p', text: 'A model turns a situation into a few quantities you can compute with. To describe motion we choose position **x**, velocity **v** and acceleration **a** as the system’s state, and write equations that link them.' },
                {
                  t: 'table',
                  head: ['Model', 'Purpose'],
                  rows: [['x_f = x_i + vt', 'where uniform motion puts an object later'], ['x_f = x_i + ut + ½at²', 'where constant acceleration puts it later'], ['atomic models', 'what matter is made of, and how it behaves'], ['models of the universe', 'how the cosmos is arranged and how it changes'], ['driver-assistance systems (ADAS)', 'predict where nearby vehicles will be, using their measured x, v and a']],
                },
                { t: 'callout', kind: 'note', title: 'Prediction or measurement?', text: 'x_f (predicted by the model) and x_f* (what you actually measure) are two different things. A good model is one where they stay close, for the situations you care about.' },
              ],
            },
            {
              id: 'test',
              kicker: 'Test a model',
              title: 'Useful, but incorrect',
              blocks: [
                { t: 'p', text: 'A model that ignores air resistance predicts a car from rest with constant acceleration, x = ½at². The widget compares that prediction with a fuller simulation that includes drag and rolling resistance.' },
                {
                  t: 'widget',
                  id: 'model-vs-reality-lab',
                  title: 'A model against reality',
                  idea: 'Drag the time slider. Where do the two curves agree? Where do they part company? Then switch to velocity.',
                  predict: { q: 'Predict: the model says the car’s speed keeps growing steadily. In the real car, after 30 s the speed is…', options: ['about the same as the model', 'far lower, levelling off', 'far higher, speeding up'], answer: 1, why: 'Air resistance grows with speed until it balances the engine force, so the real speed levels off near 40 m s⁻¹, while the model keeps climbing to 60.' },
                },
                { t: 'callout', kind: 'idea', title: '“All models are incorrect, but some are useful”', text: 'This line is usually credited to the statistician George Box. The constant-acceleration model is useful for the first second or two, and misleading for the first minute. Knowing WHERE a model works is as important as the model.' },
              ],
            },
            {
              id: 'tok',
              kicker: 'Theory of Knowledge',
              title: 'Questions to argue about',
              blocks: [
                { t: 'list', items: ['If a model always leaves something out, in what sense does it give us knowledge about the real world?', 'Who decides when a model is “good enough”, and what are they using to decide?', 'Is a model with more detail always better? What would you lose?', 'A driver-assistance system relies on models of motion. What could go wrong if the model is trusted outside the situations it was tested in?'] },
              ],
            },
          ],
        },
        { t: 'check', id: 'a1-8-c1', q: 'The message of “This is not a pipe” for physics models is that…', options: ['a model represents the real thing, but is not the real thing', 'models are always wrong so are worthless', 'a good model is identical to what it describes'], answer: 0, why: 'A representation stands in for the thing and leaves details out.', back: 'pipe' },
        { t: 'check', id: 'a1-8-c2', q: 'A model predicts x_f = 50 m, but the measured position is x_f* = 47 m. The right conclusion is…', options: ['the model is off by a few percent here: it is useful, but not exact', 'the measurement must be wrong', 'the model is completely useless'], answer: 0, why: 'A prediction and a measurement will rarely match exactly. What matters is how large the gap is and whether it is acceptable.', back: 'models' },
        { t: 'check', id: 'a1-8-c3', q: 'In the car example, the constant-acceleration model gets worse over time because it leaves out…', options: ['air resistance, which grows with speed', 'the car’s colour', 'the driver’s weight only'], answer: 0, why: 'Resistance grows with speed and eventually balances the engine force, so the real acceleration falls to zero.', back: 'test' },
        { t: 'apply', id: 'a1-8-a1', prompt: 'In 4–6 sentences: choose one model from this lesson (for example x = vt or x = ½at²). Say what it leaves out, one situation where it is useful, and one where it is misleading.', model: 'The model x = ½at² treats a car as speeding up at constant acceleration. It leaves out air resistance and rolling resistance. In the first second or two the resistance is tiny, so the model is within a few percent of a real car and is useful for a quick estimate. After half a minute the real car is close to its top speed and the model overshoots its position by more than a third and its speed by half, so it is misleading. The lesson is that a model comes with a range where it can be trusted.', checklist: ['I named one model', 'I said what it leaves out', 'I gave one situation where it works', 'I gave one situation where it misleads, with a reason'] },
        { t: 'retrieval', items: [{ from: 'A.1 · 7', q: 'On a v–t graph, the area is…', options: ['displacement', 'acceleration'], answer: 0, why: 'Area under v–t is the displacement.' }, { from: 'A.1 · 4', q: 'Y = vt assumes…', options: ['constant velocity', 'constant acceleration'], answer: 0, why: 'Uniform motion.' }] },
        { t: 'summary', points: ['A model represents a real thing, but is not the thing: it leaves things out on purpose.', 'A model’s prediction (x_f) and the measured result (x_f*) can differ; a useful model keeps the gap small where you use it.', 'Know the range where a model works, and be careful outside it.'], terms: [{ term: 'Model', def: 'a simplified representation used to describe and predict something real' }, { term: 'Assumption', def: 'something a model takes for granted, such as “no air resistance”' }], formulas: ['x_f = x_i + vt', 'x_f = x_i + ut + ½at²'], errors: ['Treating a model as if it WERE reality.', 'Throwing a model away because it is not perfect.', 'Trusting a model outside the conditions it was built for.'] },
      ],
    },
  ],
}
