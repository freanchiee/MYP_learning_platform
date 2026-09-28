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
      slug: 'models-not-a-pipe',
      code: 'A.1 · 8',
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
