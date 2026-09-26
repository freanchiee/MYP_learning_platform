import type { FlowNode, Lesson, Module } from './types'

// Built from Class 5 notes (A2 · Newton's laws, momentum, kinetic energy, momentum-change cases).
// Every law uses the same three parts: what it is called, what it says in words, what it says in maths.
// The third-law figure is the teacher's own hand-drawn diagram. The quiz is ORIGINAL: it tests the same
// skills as the "Momentum and force" paper the teacher supplied, with new contexts and numbers.

const M = '/dp-physics/a2-force-and-motion'

const CANCEL_FLOW: FlowNode = {
  q: 'Do the action and the reaction act on the SAME object?',
  branches: [
    { label: 'YES', tone: 'yes', node: { title: 'Then they could cancel', note: 'that is what balanced forces on ONE object look like' } },
    {
      label: 'NO',
      tone: 'no',
      node: { title: 'They cannot cancel', tag: 'different objects', note: 'the push acts on the trolley, the reaction acts on the person. Each is in a different force diagram' },
    },
  ],
}

const REVERSE_FLOW: FlowNode = {
  q: 'Does the velocity change direction?',
  branches: [
    { label: 'YES', tone: 'yes', node: { title: 'Treat it as a vector', tag: 'use a number line', note: 'one direction is +, the other is −. The change is the whole distance from i to f' } },
    { label: 'NO', tone: 'no', node: { title: 'Same sign throughout', note: 'still subtract, signs included: final velocity minus initial velocity' } },
  ],
}

const lessons: Lesson[] = [
  // ------------------------------------------------------------------ 1
  {
    slug: 'newtons-first-law',
    code: 'A.2 · 1',
    title: "Newton's first law",
    blurb: 'The law of inertia: no net force, no change in motion.',
    syllabus: 'A.2 Forces and momentum · Newton’s laws',
    level: 'SL+HL',
    difficulty: 1,
    minutes: 12,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'A puck glides across smooth ice and hardly slows down. What is pushing it along?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'law',
            kicker: 'Newton’s first law',
            title: 'Name, words, maths',
            blocks: [
              {
                t: 'law',
                ordinal: 'first',
                name: 'Law of inertia',
                nameNote: 'inertia: the property that resists a change in motion',
                words: 'An object at rest, or in motion, stays that way until a net external force acts on it.',
                maths: ['If F_{net,ext} = 0', 'then Δv = 0', 'and a = 0'],
                mathsNote: 'no net force, no change in velocity',
              },
            ],
          },
          {
            id: 'diagram',
            kicker: 'The picture',
            title: 'Balanced forces',
            blocks: [{ t: 'widget', id: 'nfl-diagram', title: 'Zero net force, two ways', idea: 'A book at rest and a puck at constant velocity have the same net force: zero.' }],
          },
          {
            id: 'lab',
            kicker: 'Try it',
            title: 'Switch the net force on and off',
            blocks: [
              {
                t: 'widget',
                id: 'inertia-lab',
                title: 'Strobe diagram',
                idea: 'Equal spacing between the dots means constant velocity.',
                predict: { q: 'Predict: the net force is zero and the body moves at 2 m s⁻¹. After 4 s its velocity is…', options: ['0 m s⁻¹', '2 m s⁻¹', '8 m s⁻¹'], answer: 1, why: 'F_net = 0, so a = 0 and the velocity does not change: still 2 m s⁻¹.' },
              },
            ],
          },
          {
            id: 'myth',
            kicker: 'Misconception',
            title: 'Motion does not need a force',
            blocks: [
              {
                t: 'pills',
                groups: [
                  { label: '✗ Common mistake', tone: 'warn', items: ['A moving object needs a force to keep it moving'] },
                  { label: '✓ Newton’s first law', items: ['A CHANGE in velocity needs a net force', '“Stays in motion” means same speed AND same direction'] },
                ],
              },
            ],
          },
        ],
      },
      { t: 'check', id: 'a2-1-c1', q: 'A trolley moves at constant velocity on a level track. The net external force on it is…', options: ['zero', 'forward and constant', 'forward and increasing'], answer: 0, why: 'Constant velocity means Δv = 0 and a = 0, so F_net = 0.', back: 'law' },
      { t: 'check', id: 'a2-1-c2', q: 'Which property of an object resists a change in its motion?', options: ['inertia', 'weight', 'speed'], answer: 0, why: 'Inertia is the property that resists a change in motion.', back: 'law' },
      { t: 'check', id: 'a2-1-c3', q: 'A bus stops suddenly and passengers lurch forward. The best explanation is…', options: ['their inertia: they tend to keep moving at the same velocity', 'a forward force pushes them', 'the bus pulls them forward'], answer: 0, why: 'No forward force acts on them. The bus slows, but they tend to keep their velocity.', back: 'myth' },
      { t: 'apply', id: 'a2-1-a1', prompt: 'A puck on frictionless ice is pushed and then released. Describe its motion after release and explain it with Newton’s first law.', model: 'After release there is no net external force, because the normal force balances the weight and there is no friction. By Newton’s first law its velocity does not change, so it keeps moving in a straight line at constant speed.', checklist: ['I said the net force is zero', 'I linked zero net force to no change in velocity', 'I described a straight line at constant speed', 'I named the law'] },
      { t: 'retrieval', items: [{ from: 'A.1 · 1', q: 'Motion is described…', options: ['relative to a reference point', 'in absolute terms', 'only for fast objects'], answer: 0, why: 'Position, and so motion, is relative.' }, { from: '0.5', q: 'The unit newton in base units is…', options: ['kg m s⁻²', 'kg m s⁻¹', 'kg m² s⁻²'], answer: 0, why: 'F = ma gives kg m s⁻².' }] },
      { t: 'summary', points: ['No net external force means no change in velocity.', 'Inertia is the property that resists a change in motion.', 'A moving object does not need a force to keep moving.'], terms: [{ term: 'Inertia', def: 'the property that resists a change in motion' }, { term: 'Net external force', def: 'the total force from outside the object' }], formulas: ['If F_{net,ext} = 0 then Δv = 0 and a = 0'], errors: ['Thinking constant motion needs a constant force.', 'Forgetting that direction counts as part of velocity.'] },
    ],
  },
  // ------------------------------------------------------------------ 2
  {
    slug: 'newtons-second-law',
    code: 'A.2 · 2',
    title: "Newton's second law",
    blurb: 'The law of acceleration: force is the rate of change of momentum.',
    syllabus: 'A.2 Forces and momentum · Newton’s laws, momentum',
    level: 'SL+HL',
    difficulty: 2,
    minutes: 16,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'A footballer’s kick and a gentle tap can send the ball in the same direction. What is different about the push?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'law',
            kicker: 'Newton’s second law',
            title: 'Name, words, maths',
            blocks: [
              {
                t: 'law',
                ordinal: 'second',
                name: 'Law of acceleration',
                nameNote: 'links force, momentum and acceleration',
                words: 'The rate of change of momentum is directly proportional to the net external force.',
                maths: ['F_{net,ext} ∝ Δp / t', 'F_{net,ext} = Δp / t = (p_{f} − p_{i}) / t', '= (m_{f}v_{f} − m_{i}v_{i}) / t', '= m(v_{f} − v_{i}) / t   (mass constant)', 'F_{net,ext} = ma'],
                mathsNote: 'in SI units the constant of proportionality is 1',
              },
            ],
          },
          {
            id: 'momentum',
            kicker: 'A new quantity',
            title: 'Momentum',
            blocks: [
              { t: 'formulas', items: [{ eq: 'p = mv', legend: ['p: momentum (a vector)', 'm: mass (kg)', 'v: velocity (m s⁻¹)'] }] },
              {
                t: 'arrows',
                head: ['Quantity', 'Unit'],
                rows: [
                  { from: 'momentum p', to: 'kg m s⁻¹', note: 'or N s' },
                  { from: 'example', to: '2 kg × 5 m s⁻¹ north = 10 kg m s⁻¹ north', note: 'direction counts' },
                ],
              },
              { t: 'callout', kind: 'note', title: 'Why N s = kg m s⁻¹', text: '1 N s = 1 (kg m s⁻²) × s = 1 kg m s⁻¹.' },
            ],
          },
          {
            id: 'diagram',
            kicker: 'The picture',
            title: 'Momentum grows steadily',
            blocks: [{ t: 'widget', id: 'nsl-diagram', title: 'A constant force', idea: 'Equal time steps give equal changes in momentum, so Δp / t is constant and equals F.' }],
          },
          {
            id: 'lab',
            kicker: 'Try it',
            title: 'Force, mass and the p–t graph',
            blocks: [
              {
                t: 'widget',
                id: 'newton-lab',
                title: 'Change the force and the mass',
                idea: 'Watch the dots, the velocity arrows and the gradient of the momentum–time graph.',
                predict: { q: 'Predict: you double the mass but keep the same net force. The gradient of the p–t graph will…', options: ['halve', 'stay the same', 'double'], answer: 1, why: 'The gradient is Δp / t = F. A bigger mass changes the acceleration (velocity changes more slowly), not the rate of change of momentum.' },
              },
            ],
          },
          {
            id: 'gradient',
            kicker: 'Graph skill',
            title: 'Gradient of a p–t graph = net force',
            blocks: [
              { t: 'formulas', items: [{ eq: 'gradient = Δp / t = F', legend: ['steeper line: bigger net force', 'flat line: net force is zero', 'curve getting steeper: force increasing'] }] },
              { t: 'note', text: 'Read the gradient first. Then check the direction: a falling p–t graph means the net force points the other way.' },
            ],
          },
        ],
      },
      { t: 'check', id: 'a2-2-c1', q: 'The unit N s is equivalent to…', options: ['kg m s⁻¹', 'kg m s⁻²', 'kg m² s⁻²'], answer: 0, why: '1 N s = 1 kg m s⁻² × s = 1 kg m s⁻¹.', back: 'momentum' },
      { t: 'check', id: 'a2-2-c2', q: 'The gradient of a momentum–time graph gives…', options: ['the net external force', 'the mass', 'the kinetic energy'], answer: 0, why: 'F = Δp / t, which is the gradient.', back: 'gradient' },
      { t: 'check', id: 'a2-2-c3', q: 'A 2.0 kg trolley’s velocity changes from 1.0 m s⁻¹ to 5.0 m s⁻¹ in 4.0 s. The net force is…', options: ['0.5 N', '2.0 N', '8.0 N'], answer: 1, why: 'F = mΔv / t = 2.0 × 4.0 / 4.0 = 2.0 N.', back: 'law' },
      { t: 'apply', id: 'a2-2-a1', prompt: 'A friend says "F = ma is the whole second law". Explain what the law says in terms of momentum, and when F = ma can be used.', model: 'The second law says the net external force equals the rate of change of momentum, F = Δp / t. When the mass is constant, Δp = mΔv, so F = mΔv / t = ma. If the mass changes, for example a rocket burning fuel, you must use F = Δp / t.', checklist: ['I wrote F = Δp / t', 'I said F = ma needs constant mass', 'I showed how Δp = mΔv leads to ma', 'I gave a case where mass changes'] },
      { t: 'retrieval', items: [{ from: 'A.2 · 1', q: 'If F_net = 0, then…', options: ['Δv = 0', 'v = 0', 'a is constant and not zero'], answer: 0, why: 'No net force means no change in velocity.' }, { from: '0.6', q: '36 km/h in m s⁻¹ is…', options: ['10', '36', '129.6'], answer: 0, why: '36 ÷ 3.6 = 10.' }] },
      { t: 'summary', points: ['F_net,ext = Δp / t: net force is the rate of change of momentum.', 'p = mv is a vector, unit kg m s⁻¹ = N s.', 'For constant mass, F = ma.', 'The gradient of a p–t graph is the net force.'], terms: [{ term: 'Momentum', def: 'mass × velocity, a vector' }, { term: 'Newton second law', def: 'net external force = rate of change of momentum' }], formulas: ['p = mv', 'F_{net,ext} = Δp / t', 'F = ma (constant mass)'], errors: ['Using F = ma when the mass changes.', 'Forgetting that momentum has a direction.'] },
    ],
  },
  // ------------------------------------------------------------------ 3
  {
    slug: 'newtons-third-law',
    code: 'A.2 · 3',
    title: "Newton's third law",
    blurb: 'The law of action and reaction: forces come in pairs, on different objects.',
    syllabus: 'A.2 Forces and momentum · Newton’s laws',
    level: 'SL+HL',
    difficulty: 2,
    minutes: 14,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'You push a heavy trolley forward. Why do you feel it pushing back on you?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'law',
            kicker: 'Newton’s third law',
            title: 'Name, words, maths',
            blocks: [
              {
                t: 'law',
                ordinal: 'third',
                name: 'Law of action and reaction',
                nameNote: 'Action / Reaction',
                words: 'Every action has an equal and opposite reaction.',
                maths: ['F_{P→T} = − F_{T→P}'],
                mathsNote: 'equal size, opposite direction, on DIFFERENT objects',
              },
            ],
          },
          {
            id: 'figure',
            kicker: 'The picture',
            title: 'A person pushes a trolley',
            blocks: [
              {
                t: 'figure',
                src: '/images/dp-physics/ntl-hand-drawn.png',
                alt: 'Hand-drawn diagram. A person P pushes a box on wheels T. A dashed circle marks the system containing both. The person pushes the box to the right with 5 newtons (the action, F from P to T), and the box pushes the person to the left with 5 newtons (the reaction, F from T to P).',
                caption: 'Person P pushes trolley T with 5 N to the right (action). The trolley pushes P with 5 N to the left (reaction). The dashed circle is the system.',
                credit: 'Teacher’s own class notes',
              },
            ],
          },
          {
            id: 'cancel',
            kicker: 'Follow the arrows',
            title: 'Why don’t action and reaction cancel?',
            blocks: [{ t: 'flow', title: 'The classic question', root: CANCEL_FLOW }],
          },
          {
            id: 'pairs',
            kicker: 'More pairs',
            title: 'Spot the pair',
            blocks: [
              {
                t: 'table',
                head: ['Action', 'Reaction', 'Acts on'],
                rows: [
                  ['Person pushes trolley forward', 'Trolley pushes person backward', 'trolley / person'],
                  ['Boot pushes football', 'Football pushes boot', 'football / boot'],
                  ['Earth pulls you down (your weight)', 'You pull Earth up', 'you / Earth'],
                  ['Rocket pushes exhaust gas back', 'Gas pushes rocket forward', 'gas / rocket'],
                ],
                note: 'each force in a pair is the same type, and each acts on a different object',
              },
            ],
          },
        ],
      },
      { t: 'check', id: 'a2-3-c1', q: 'A person pushes a trolley with 5 N to the right. The trolley pushes the person with…', options: ['5 N to the left', '5 N to the right', 'less than 5 N to the left'], answer: 0, why: 'The reaction is equal in size and opposite in direction.', back: 'figure' },
      { t: 'check', id: 'a2-3-c2', q: 'Why do an action force and its reaction force not cancel each other?', options: ['they act on different objects', 'they are not equal in size', 'the reaction is always smaller'], answer: 0, why: 'Forces cancel only when they act on the same object.', back: 'cancel' },
      { t: 'check', id: 'a2-3-c3', q: 'A boot kicks a football. The reaction to the boot’s force on the ball is…', options: ['the ball’s force on the boot', 'the ground’s force on the boot', 'the weight of the ball'], answer: 0, why: 'The pair is boot on ball and ball on boot.', back: 'pairs' },
      { t: 'apply', id: 'a2-3-a1', prompt: 'A rocket accelerates forward in space, where there is nothing to push against. Explain how, using Newton’s third law.', model: 'The rocket pushes exhaust gas backwards (the action). By Newton’s third law the gas pushes the rocket forwards with an equal and opposite force (the reaction). That force acts on the rocket, so it accelerates. No air is needed.', checklist: ['I named the action and the reaction', 'I said they are equal and opposite', 'I said the reaction acts on the rocket', 'I did not say the forces cancel'] },
      { t: 'retrieval', items: [{ from: 'A.2 · 2', q: 'The gradient of a p–t graph is…', options: ['the net force', 'the mass', 'the speed'], answer: 0, why: 'F = Δp / t.' }, { from: 'A.2 · 1', q: 'Inertia is…', options: ['the property that resists a change in motion', 'a kind of force', 'a unit of mass'], answer: 0, why: 'It resists change in motion.' }] },
      { t: 'summary', points: ['Forces come in pairs: action and reaction.', 'They are equal in size and opposite in direction.', 'They act on different objects, so they never cancel each other.'], terms: [{ term: 'Action–reaction pair', def: 'two forces of the same type between two objects, on different objects' }], formulas: ['F_{P→T} = − F_{T→P}'], errors: ['Saying action and reaction cancel.', 'Putting both forces of a pair in the same free-body diagram.'] },
    ],
  },
  // ------------------------------------------------------------------ 4
  {
    slug: 'momentum-conservation',
    code: 'A.2 · 4',
    title: 'Momentum conservation',
    blurb: 'Newton’s second and third laws together: what one object gains, the other loses.',
    syllabus: 'A.2 Forces and momentum · conservation of momentum',
    level: 'SL+HL',
    difficulty: 3,
    minutes: 18,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'Two skaters at rest push apart. One glides left, the other right. Why do their momenta always cancel out?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'derive',
            kicker: 'Derivation',
            title: 'Third law + second law',
            blocks: [
              {
                t: 'steps',
                title: 'momentum conservation',
                given: 'A person P pushes a trolley T. The two forces are an action–reaction pair, and they act for the same time t.',
                steps: [
                  { line: 'F_{P→T} = − F_{T→P}', why: 'Newton’s third law: equal in size, opposite in direction, on different objects.' },
                  { line: 'Δp_{T} / t = − Δp_{P} / t', why: 'Newton’s second law on each object: F = Δp / t. The collision time t is the same for both.' },
                  { line: 'Δp_{T} + Δp_{P} = 0', why: 'Multiply by t and collect the terms: what one object gains, the other loses.' },
                  { line: 'Δp_{sys} = 0   if   F_{net,ext,sys} = 0', why: 'Take P and T together as one system. The push pair is internal, so only an external net force could change the system’s momentum.' },
                ],
                answer: 'the total momentum of an isolated system is conserved',
              },
            ],
          },
          {
            id: 'system',
            kicker: 'The idea',
            title: 'System and isolated system',
            blocks: [
              {
                t: 'pills',
                groups: [
                  { label: 'System', items: ['the objects you choose to look at together', 'forces between them are internal'] },
                  { label: 'Isolated system', tone: 'muted', items: ['net external force = 0', 'so total momentum stays the same'] },
                ],
              },
              { t: 'formulas', items: [{ eq: 'Δp_{sys} = 0', legend: ['if F_{net,ext,sys} = 0', 'always conserved for an isolated system'] }] },
            ],
          },
          {
            id: 'lab',
            kicker: 'Try it',
            title: 'Collision lab',
            blocks: [
              {
                t: 'widget',
                id: 'collision-lab',
                title: 'Before and after',
                idea: 'Change the masses and velocities. Watch the total momentum in both types of collision.',
                predict: { q: 'Predict: a 2 kg cart moving at 4 m s⁻¹ hits an identical stationary cart and they stick together. Total momentum after, compared with before, is…', options: ['half', 'the same', 'double'], answer: 1, why: 'Momentum of an isolated system is conserved: 8 kg m s⁻¹ before and after (the carts move at 2 m s⁻¹ together).' },
              },
            ],
          },
        ],
      },
      { t: 'check', id: 'a2-4-c1', q: 'Two skaters, 60 kg and 40 kg, push apart from rest. The 60 kg skater moves at 2.0 m s⁻¹. The 40 kg skater moves at…', options: ['3.0 m s⁻¹', '2.0 m s⁻¹', '1.3 m s⁻¹'], answer: 0, why: 'Total momentum stays 0: 60 × 2.0 = 40 × v, so v = 3.0 m s⁻¹ the other way.', back: 'derive' },
      { t: 'check', id: 'a2-4-c2', q: 'The total momentum of a system is conserved when…', options: ['the net external force on it is zero', 'no energy is lost', 'the masses are equal'], answer: 0, why: 'Only an external net force can change the momentum of the system.', back: 'system' },
      { t: 'check', id: 'a2-4-c3', q: 'A 2.0 kg cart at 3.0 m s⁻¹ hits a stationary 1.0 kg cart and they stick together. Their speed is…', options: ['2.0 m s⁻¹', '3.0 m s⁻¹', '1.0 m s⁻¹'], answer: 0, why: '2.0 × 3.0 = (2.0 + 1.0) × v, so v = 2.0 m s⁻¹.', back: 'lab' },
      { t: 'apply', id: 'a2-4-a1', prompt: 'Explain why the momentum of two colliding bodies is conserved, using Newton’s second and third laws.', model: 'The forces the bodies exert on each other are equal and opposite (third law) and act for the same time. By the second law F = Δp / t, so their changes in momentum are equal and opposite, and Δp₁ + Δp₂ = 0. If no external net force acts, the total momentum is conserved.', checklist: ['I used the third law for equal and opposite forces', 'I used F = Δp / t for each body', 'I said the time is the same', 'I concluded the changes cancel'] },
      { t: 'retrieval', items: [{ from: 'A.2 · 3', q: 'Action and reaction act on…', options: ['different objects', 'the same object', 'no object'], answer: 0, why: 'They never cancel.' }, { from: 'A.2 · 2', q: 'Momentum is measured in…', options: ['kg m s⁻¹', 'J', 'N'], answer: 0, why: 'Or N s.' }] },
      { t: 'summary', points: ['Third law: equal and opposite forces. Second law: F = Δp / t.', 'Together: Δp₁ = −Δp₂, so Δp_sys = 0.', 'Momentum is always conserved for an isolated system.'], terms: [{ term: 'Isolated system', def: 'no net external force' }], formulas: ['Δp_{sys} = 0 if F_{net,ext,sys} = 0', 'm_{1}u_{1} + m_{2}u_{2} = m_{1}v_{1} + m_{2}v_{2}'], errors: ['Using conservation when an external force acts (for example friction).', 'Forgetting signs for direction.'] },
    ],
  },
  // ------------------------------------------------------------------ 5
  {
    slug: 'momentum-vs-kinetic-energy',
    code: 'A.2 · 5',
    title: 'Momentum vs kinetic energy',
    blurb: 'Commonly confused, and once argued over for about sixty years.',
    syllabus: 'A.2 Forces and momentum · momentum and kinetic energy',
    level: 'SL+HL',
    difficulty: 2,
    minutes: 15,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'Two identical carts head towards each other at the same speed. Their total momentum is zero. Is their total kinetic energy zero too?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'table',
            kicker: 'Commonly misunderstood',
            title: 'Two different quantities',
            blocks: [
              {
                t: 'table',
                head: ['', 'Momentum', 'Kinetic energy'],
                rows: [
                  ['Formula', 'p = mv', 'E_{k} = ½mv²'],
                  ['Type', 'vector (has direction)', 'scalar (no direction)'],
                  ['Unit', 'kg m s⁻¹ (= N s)', 'J (= kg m² s⁻²)'],
                  ['Depends on speed as', 'v: double v, double p', 'v²: double v, four times E_{k}'],
                  ['Can it be negative?', 'yes: the sign shows direction', 'no: always ≥ 0'],
                  ['Isolated system, any collision', 'always conserved', 'only if the collision is elastic'],
                  ['Changed by', 'a net force acting over a TIME: Ft = Δp', 'a force acting over a DISTANCE (work, in A.3)'],
                  ['Two equal carts, equal speeds, opposite directions', 'total p = 0', 'total E_{k} > 0'],
                ],
              },
            ],
          },
          {
            id: 'history',
            kicker: 'Historical insight',
            title: 'When they were found to be different',
            blocks: [
              {
                t: 'arrows',
                head: ['When', 'What happened'],
                rows: [
                  { from: '1644', to: 'Descartes: the “quantity of motion” (mass × speed) is what is conserved in the universe. He ignores direction.' },
                  { from: '1668–69', to: 'Wallis, Wren and Huygens solve collision problems for the Royal Society and show that direction matters: momentum needs a sign.' },
                  { from: '1686', to: 'Leibniz argues that what a moving body can do goes with mv², which he calls vis viva, “living force”.' },
                  { from: 'c. 1720–40', to: '’s Gravesande drops brass balls into soft clay: double the speed, four times the dent. Émilie du Châtelet spreads the result.' },
                  { from: '1743', to: 'd’Alembert: the quarrel is largely about words. Momentum measures a force acting over time, vis viva a force acting over distance. Two different quantities, both real.' },
                  { from: '1800s', to: 'The factor ½ and the name “kinetic energy” arrive (Coriolis, Kelvin), and energy conservation is worked out.' },
                ],
              },
              { t: 'note', text: 'Same object, two different questions: how much push (over time) does it carry, and how much can it do (over distance)?' },
            ],
          },
          {
            id: 'lab',
            kicker: 'Try it',
            title: 'Elastic or inelastic?',
            blocks: [
              {
                t: 'widget',
                id: 'collision-lab',
                title: 'Watch both quantities',
                idea: 'Momentum is conserved every time. Kinetic energy is conserved only in the elastic case.',
                predict: { q: 'Predict: a 2 kg cart at 4 m s⁻¹ hits an identical stationary cart and they stick together. The total kinetic energy after, compared with before, is…', options: ['the same', 'half', 'double'], answer: 1, why: 'Before: ½ × 2 × 4² = 16 J. After: both move at 2 m s⁻¹, ½ × 4 × 2² = 8 J. Half is lost.' },
              },
            ],
          },
        ],
      },
      { t: 'check', id: 'a2-5-c1', q: 'A body’s speed doubles. Its momentum and kinetic energy become…', options: ['×2 and ×4', '×2 and ×2', '×4 and ×2'], answer: 0, why: 'p ∝ v, E_k ∝ v².', back: 'table' },
      { t: 'check', id: 'a2-5-c2', q: 'In a collision in an isolated system, which is ALWAYS conserved?', options: ['momentum', 'kinetic energy', 'speed'], answer: 0, why: 'Kinetic energy is conserved only in elastic collisions.', back: 'table' },
      { t: 'check', id: 'a2-5-c3', q: 'Which of these can be negative?', options: ['momentum', 'kinetic energy', 'both'], answer: 0, why: 'Momentum is a vector, so its sign shows direction. E_k = ½mv² is never negative.', back: 'table' },
      { t: 'check', id: 'a2-5-c4', q: 'The argument between Descartes and Leibniz was finally described as…', options: ['largely about words: two different quantities', 'won by Descartes', 'a mistake by Newton'], answer: 0, why: 'd’Alembert (1743) said momentum and vis viva measure different effects of a force.', back: 'history' },
      { t: 'apply', id: 'a2-5-a1', prompt: 'Two identical carts move towards each other at the same speed and stick together. State what happens to the total momentum and to the total kinetic energy, and explain.', model: 'The total momentum before is zero (equal and opposite), and it is still zero after, so it is conserved. The kinetic energy before is positive, but the carts end at rest, so all of it is lost as heat, sound and deformation. Momentum is a vector, kinetic energy is a scalar.', checklist: ['I said momentum is conserved (zero before and after)', 'I said kinetic energy is not conserved', 'I linked it to vector and scalar', 'I said where the energy went'] },
      { t: 'retrieval', items: [{ from: 'A.2 · 4', q: 'Δp_sys = 0 if…', options: ['F_net,ext = 0', 'E_k is conserved', 'the masses are equal'], answer: 0, why: 'Isolated system.' }, { from: 'A.2 · 2', q: 'p = …', options: ['mv', '½mv²', 'ma'], answer: 0, why: 'Mass × velocity.' }] },
      { t: 'summary', points: ['Momentum p = mv is a vector; kinetic energy E_k = ½mv² is a scalar.', 'Momentum is always conserved in an isolated system; kinetic energy only in elastic collisions.', 'They were argued over as one quantity until d’Alembert (1743).'], terms: [{ term: 'Elastic collision', def: 'kinetic energy is conserved' }, { term: 'Inelastic collision', def: 'kinetic energy is not conserved' }], formulas: ['p = mv', 'E_{k} = ½mv²'], errors: ['Treating kinetic energy as conserved in every collision.', 'Adding momenta without signs.'] },
    ],
  },
  // ------------------------------------------------------------------ 6
  {
    slug: 'momentum-change-cases',
    code: 'A.2 · 6',
    title: 'Momentum change: four cases',
    blurb: 'When the direction reverses, treat momentum as a vector. Use a number line.',
    syllabus: 'A.2 Forces and momentum · change in momentum',
    level: 'SL+HL',
    difficulty: 3,
    minutes: 16,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'A ball hits a wall at 5 m s⁻¹ and bounces back at 2 m s⁻¹. Is its change in momentum 3 units, or something else?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'cases',
            kicker: 'The four cases',
            title: 'A 0.2 kg ball, starting at 5 m s⁻¹',
            blocks: [
              {
                t: 'arrows',
                head: ['Case', 'Δp = m(v_{f} − v_{i})'],
                rows: [
                  { from: '1  web', to: '0.2 × (5 − 5) = 0 kg m s⁻¹', note: 'no change' },
                  { from: '2  paper, out at 3', to: '0.2 × (3 − 5) = −0.4 kg m s⁻¹', note: 'decrease' },
                  { from: '3  stopped', to: '0.2 × (0 − 5) = −1.0 kg m s⁻¹' },
                  { from: '4  rebound at 2', to: '0.2 × (−2 − 5) = −1.4 kg m s⁻¹', note: 'the tricky one ★' },
                ],
              },
            ],
          },
          {
            id: 'line',
            kicker: 'Try it',
            title: 'Put it on the number line',
            blocks: [
              {
                t: 'widget',
                id: 'momentum-cases',
                title: 'Velocity and momentum number lines',
                idea: 'i is the start, f is the finish. The change is the arrow from i to f, signs included.',
                predict: { q: 'Predict: Case 4 (5 m s⁻¹ in, 2 m s⁻¹ back out, mass 0.2 kg). The change in momentum is…', options: ['−0.6 kg m s⁻¹', '−1.4 kg m s⁻¹', '+1.4 kg m s⁻¹'], answer: 1, why: 'Take toward the wall as +: v_i = +5, v_f = −2, Δv = −7 m s⁻¹, Δp = 0.2 × (−7) = −1.4 kg m s⁻¹.' },
              },
            ],
          },
          {
            id: 'case4',
            kicker: 'Case 4 ★',
            title: 'Direction reverses: a vector',
            blocks: [
              { t: 'flow', title: 'Which way do I treat it?', root: REVERSE_FLOW },
              {
                t: 'steps',
                title: 'case 4, step by step',
                given: 'A 0.2 kg ball hits a wall at 5 m s⁻¹ and rebounds at 2 m s⁻¹. Find the change in momentum.',
                steps: [
                  { line: 'toward the wall = +', why: 'Momentum is a vector, so choose a positive direction first.' },
                  { line: 'v_{i} = +5 m s⁻¹,  v_{f} = −2 m s⁻¹', why: 'The ball comes back, so its final velocity has the opposite sign.' },
                  { line: 'Δv = v_{f} − v_{i} = (−2) − (+5) = −7 m s⁻¹', why: 'On the number line the arrow from +5 to −2 is 7 units long, pointing in the negative direction.' },
                  { line: 'Δp = mΔv = 0.2 × (−7) = −1.4 kg m s⁻¹', why: 'Same as p_f − p_i = (−0.4) − (+1.0) = −1.4.' },
                ],
                answer: '−1.4 kg m s⁻¹, i.e. 1.4 kg m s⁻¹ away from the wall',
              },
            ],
          },
        ],
      },
      { t: 'check', id: 'a2-6-c1', q: 'Case 2: 0.2 kg ball, 5 m s⁻¹ down to 3 m s⁻¹ (same direction). Δp is…', options: ['−0.4 kg m s⁻¹', '+0.4 kg m s⁻¹', '−1.6 kg m s⁻¹'], answer: 0, why: '0.2 × (3 − 5) = −0.4 kg m s⁻¹.', back: 'cases' },
      { t: 'check', id: 'a2-6-c2', q: 'Case 3: the same ball is brought to rest. Δp is…', options: ['−1.0 kg m s⁻¹', '0', '+1.0 kg m s⁻¹'], answer: 0, why: 'p_i = 1.0, p_f = 0, so Δp = −1.0 kg m s⁻¹.', back: 'cases' },
      { t: 'check', id: 'a2-6-c3', q: 'A ball’s velocity goes from +5 m s⁻¹ to −2 m s⁻¹. The change in velocity is…', options: ['−7 m s⁻¹', '−3 m s⁻¹', '+3 m s⁻¹'], answer: 0, why: '(−2) − (+5) = −7 m s⁻¹, an arrow 7 units long on the number line.', back: 'case4' },
      { t: 'check', id: 'a2-6-c4', q: 'Which mistake gives the wrong answer for a rebound?', options: ['subtracting the speeds and ignoring the direction change', 'choosing a positive direction first', 'using p = mv for each velocity'], answer: 0, why: 'Speeds 5 and 2 give 3, but the vectors 5 and −2 differ by 7.', back: 'line' },
      { t: 'apply', id: 'a2-6-a1', prompt: 'A 0.50 kg ball hits a wall at 4.0 m s⁻¹ and rebounds at 1.0 m s⁻¹. Find the change in momentum. Show your choice of positive direction.', model: 'Take toward the wall as +. v_i = +4.0 m s⁻¹, v_f = −1.0 m s⁻¹. Δv = (−1.0) − (+4.0) = −5.0 m s⁻¹. Δp = 0.50 × (−5.0) = −2.5 kg m s⁻¹, so 2.5 kg m s⁻¹ away from the wall.', checklist: ['I chose a positive direction', 'I gave v_f a negative sign', 'I got Δv = −5.0 m s⁻¹', 'I got −2.5 kg m s⁻¹ with a direction'] },
      { t: 'retrieval', items: [{ from: 'A.2 · 5', q: 'Momentum is a…', options: ['vector', 'scalar'], answer: 0, why: 'It has a direction.' }, { from: 'A.2 · 2', q: 'F_net = …', options: ['Δp / t', 'mv', '½mv²'], answer: 0, why: 'Rate of change of momentum.' }] },
      { t: 'summary', points: ['Δp = m(v_f − v_i), with signs.', 'If the direction reverses, one velocity is negative.', 'Use the number line: the change is the arrow from i to f.'], terms: [{ term: 'Change in momentum', def: 'final momentum minus initial momentum, a vector' }], formulas: ['Δp = p_{f} − p_{i} = mΔv'], errors: ['Subtracting speeds instead of velocities.', 'Dropping the sign of the final velocity after a rebound.'] },
    ],
  },
  // ------------------------------------------------------------------ 7 force, space and time
  {
    slug: 'force-space-and-time',
    code: 'A.2 · 7',
    title: 'Force: the link between space and time',
    blurb: 'Imbalance drives motion. Force connects the three dimensions of space with time, and carries the present into the future.',
    syllabus: 'A.2 Forces and momentum · big picture (enrichment)',
    level: 'SL+HL',
    difficulty: 2,
    minutes: 14,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'Space has three dimensions and time has one. Is there a single quantity that ties both to the way things change?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'imbalance',
            kicker: 'Utkarsh laws of motion',
            title: 'Imbalance is the cause of motion',
            blocks: [
              {
                t: 'pills',
                groups: [
                  { label: 'Rule 1', items: ['Imbalance is the cause of motion'] },
                  { label: 'Rule 2', items: ['The greater the imbalance, the more the motion'] },
                ],
              },
              {
                t: 'table',
                title: 'One idea, four kinds of motion',
                head: ['Example of motion', 'What moves', 'The imbalance', 'The law'],
                rows: [
                  ['1  Transportation', 'bulk movement of matter', 'forces: 10 N one way, 2 N the other, so F_{net} = 8 N', 'Newton’s second law: F_{net} = ma (acceleration)'],
                  ['2  Diffusion', 'particles', 'concentration A ≠ B, with A > B', 'rate of diffusion ∝ Δconcentration'],
                  ['3  Heat energy', 'energy', 'temperature T_{A} ≠ T_{B}, with T_{A} > T_{B}', 'rate of heat flow ∝ ΔT'],
                  ['4  Current', 'movement of charge', 'potential V_{A} > V_{B}', 'I ∝ ΔV, so V = IR (Ohm’s law)'],
                ],
                note: 'no imbalance, no motion',
              },
            ],
          },
          {
            id: 'dimensions',
            kicker: 'Space and time',
            title: 'Four dimensions',
            blocks: [{ t: 'widget', id: 'spacetime-diagram', title: '3 + 1', idea: 'Position needs three numbers (x, y, z). Change needs one more: time.' }],
          },
          {
            id: 'link',
            kicker: 'Force is the link',
            title: 'One quantity, two ways to see it',
            blocks: [
              {
                t: 'arrows',
                head: ['Look at…', 'And you find'],
                rows: [
                  { emoji: '📏', from: 'work done per unit displacement (ΔE / x)', to: 'force', note: 'the space side' },
                  { emoji: '⏱️', from: 'change in momentum per unit time (Δp / t)', to: 'force', note: 'the time side' },
                ],
              },
              { t: 'formulas', items: [{ eq: 'WD / x = F = Δp / t', legend: ['WD: work done (energy transferred, J)', 'x: displacement (m)', 'Δp: change in momentum (kg m s⁻¹)', 't: time (s)'] }] },
              {
                t: 'arrows',
                head: ['Energy in one form', 'Becomes'],
                rows: [{ emoji: '🔁', from: 'E₁ (form 1)', to: 'E₂ (form 2)', note: 'through work done, WD' }],
              },
              { t: 'callout', kind: 'idea', title: 'Work done is the conversion', text: 'Work done (WD) is the way energy in one form, E₁, gets converted into energy in another form, E₂. Force is the work done per unit displacement, and the change in momentum per unit time.' },
              { t: 'callout', kind: 'warn', title: 'Condition', text: 'F = WD / x = ΔE / x holds for a constant force acting along the displacement. If the force is not constant, or is at an angle to the motion, this simple form no longer applies directly.' },
            ],
          },
          {
            id: 'evolve',
            kicker: '⏪ Past → 📍 present → 🔮 future',
            title: 'How the present evolves',
            blocks: [
              {
                t: 'widget',
                id: 'force-link',
                title: 'One force, both ratios',
                idea: 'Start from rest. Move the present along the timeline and watch momentum per second and energy per metre both come out as F.',
                predict: { q: 'Predict: a constant 4 N net force acts on a body for 3 s, starting from rest. The momentum gained is…', options: ['4 kg m s⁻¹', '12 kg m s⁻¹', '36 kg m s⁻¹'], answer: 1, why: 'Δp = Ft = 4 × 3 = 12 kg m s⁻¹.' },
              },
              { t: 'note', text: '📍 Know the present state and the force, and you can find the 🔮 future. Run it backwards and you recover the ⏪ past.' },
            ],
          },
        ],
      },
      { t: 'check', id: 'a2-7-c1', q: 'Which pair are BOTH equal to force?', options: ['work done per unit displacement, and change in momentum per unit time', 'work done per unit time, and change in momentum per unit displacement', 'energy per unit time, and momentum per unit distance'], answer: 0, why: 'F = WD / x (space side) and F = Δp / t (time side).', back: 'link' },
      { t: 'check', id: 'a2-7-c2', q: 'A constant 6.0 N force acts along a body’s path for 2.0 m. The energy transferred is…', options: ['12 J', '3.0 J', '8.0 J'], answer: 0, why: 'WD = Fx = 6.0 × 2.0 = 12 J.', back: 'link' },
      { t: 'check', id: 'a2-7-c3', q: 'The same 6.0 N force acts for 2.0 s. The change in momentum is…', options: ['12 kg m s⁻¹', '3.0 kg m s⁻¹', '8.0 kg m s⁻¹'], answer: 0, why: 'Δp = Ft = 6.0 × 2.0 = 12 kg m s⁻¹. Same number, different quantity and unit.', back: 'evolve' },
      { t: 'check', id: 'a2-7-c4', q: 'In the imbalance table, what plays the role of the imbalance for an electric current?', options: ['a potential difference V_A − V_B', 'a concentration difference', 'a temperature difference'], answer: 0, why: 'Charge flows when there is a potential difference: I ∝ ΔV.', back: 'imbalance' },
      { t: 'apply', id: 'a2-7-a1', prompt: 'Explain how force connects space and time, using two equations.', model: 'Work done is how energy in one form is converted into another. Force is the work done per unit displacement, F = WD / x (for a constant force along the displacement), which ties it to space. It is also the change in momentum per unit time, F = Δp / t, which ties it to time. So one quantity, the net force, links how energy changes over distance with how momentum changes over time.', checklist: ['I wrote F = WD / x', 'I wrote F = Δp / t', 'I linked one to space and the other to time', 'I said both equal the same force'] },
      { t: 'retrieval', items: [{ from: 'A.2 · 2', q: 'F_net = …', options: ['Δp / t', 'mv', '½mv²'], answer: 0, why: 'Rate of change of momentum.' }, { from: 'A.2 · 5', q: 'Which quantity is a scalar?', options: ['kinetic energy', 'momentum', 'force'], answer: 0, why: 'Kinetic energy has no direction.' }] },
      { t: 'summary', points: ['Imbalance is the cause of motion; a bigger imbalance means more motion.', 'Force = work done per unit displacement (space) = change in momentum per unit time (time).', 'Given the present state and the force, the future (and the past) follows.'], terms: [{ term: 'Imbalance', def: 'a difference (of force, concentration, temperature or potential) that drives a flow' }, { term: 'Work done', def: 'the way energy in one form (E₁) is converted into energy in another form (E₂); a force acting through a displacement' }], formulas: ['WD / x = F = Δp / t'], errors: ['Mixing up energy per distance (force) with energy per time (power).', 'Forgetting the condition: constant force along the displacement.', 'Treating work done as a store of energy: it is the process that converts E₁ into E₂.'] },
    ],
  },
  // ------------------------------------------------------------------ 8 quiz
  {
    slug: 'quiz-momentum-and-force',
    code: 'A.2 · Quiz',
    title: 'Quiz: momentum and force',
    blurb: 'Ten multiple-choice questions on Newton’s second and third laws and on momentum.',
    syllabus: 'A.2 Forces and momentum · practice',
    level: 'SL+HL',
    difficulty: 2,
    minutes: 20,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'Ten questions. A wrong answer links back to the lesson that covers it, and you can try again as often as you like.' },
      {
        t: 'check',
        id: 'q1',
        q: 'A trolley moves along a level track. A constant forward force F and a constant backward drag of 5.0 N act on it, and no other horizontal forces. Its momentum falls from 4.5 kg m s⁻¹ to 2.1 kg m s⁻¹ in 0.60 s. What is F?',
        options: ['1.0 N', '4.0 N', '5.0 N', '9.0 N'],
        answer: 0,
        why: 'Net force = Δp / t = (2.1 − 4.5) / 0.60 = −4.0 N (backwards). So F − 5.0 = −4.0, giving F = 1.0 N. The 4.0 N is only the net force.',
        backHref: `${M}/newtons-second-law#gradient`,
        backLabel: 'Review: gradient of a p–t graph is the net force',
      },
      {
        t: 'check',
        id: 'q2',
        q: 'A quadcopter of mass 0.80 kg hovers at a fixed point. Each of its four rotors pushes 0.25 kg of air vertically downwards every second. Take g = 9.81 m s⁻² and assume the air above is at rest. What is the speed of the air leaving each rotor?',
        options: ['1.96 m s⁻¹', '7.85 m s⁻¹', '15.7 m s⁻¹', '31.4 m s⁻¹'],
        answer: 1,
        why: 'Hovering: total upward force = weight = 0.80 × 9.81 = 7.85 N. Each rotor supplies 7.85 / 4 = 1.96 N, and F = (mass per second) × v gives v = 1.96 / 0.25 = 7.85 m s⁻¹. Forgetting the four rotors gives 31.4 m s⁻¹.',
        backHref: `${M}/newtons-third-law#law`,
        backLabel: 'Review: the third law and rate of change of momentum',
      },
      {
        t: 'check',
        id: 'q3',
        q: 'The net external force on a trolley that starts from rest is slowly increased. Which describes the trolley’s momentum–time graph?',
        options: ['a straight line with constant gradient', 'a curve whose gradient gets steeper', 'a curve whose gradient gets shallower', 'a horizontal line'],
        answer: 1,
        why: 'The gradient of a p–t graph is the net force. If the force increases, the gradient increases: the curve gets steeper.',
        backHref: `${M}/newtons-second-law#gradient`,
        backLabel: 'Review: gradient of a p–t graph',
      },
      {
        t: 'check',
        id: 'q4',
        q: 'A hose delivers 180 kg of water per minute. The water leaves horizontally at 8.0 m s⁻¹. What is the minimum force needed to hold the hose still?',
        options: ['0.40 N', '24 N', '1440 N', '86 400 N'],
        answer: 1,
        why: '180 kg per minute = 3.0 kg s⁻¹. Force = rate of change of momentum = 3.0 × 8.0 = 24 N. Using 180 without converting minutes to seconds gives 1440 N.',
        backHref: `${M}/newtons-second-law#law`,
        backLabel: 'Review: F = Δp / t',
      },
      {
        t: 'check',
        id: 'q5',
        q: 'A 2.0 kg trolley moves forward at 9.0 m s⁻¹. A constant resultant force of 6.0 N acts backwards on it for 2.0 s. What is its velocity afterwards?',
        options: ['3.0 m s⁻¹', '6.0 m s⁻¹', '12 m s⁻¹', '15 m s⁻¹'],
        answer: 0,
        why: 'Δp = −6.0 × 2.0 = −12 kg m s⁻¹. p_i = 18, so p_f = 6.0 kg m s⁻¹ and v = 6.0 / 2.0 = 3.0 m s⁻¹. The 6.0 kg m s⁻¹ is a momentum, not a velocity.',
        backHref: `${M}/newtons-second-law#law`,
        backLabel: 'Review: Ft = Δp',
      },
      {
        t: 'check',
        id: 'q6',
        q: 'Two isolated trolleys, 3.0 kg and 1.5 kg, are pushed apart by a spring between them. During the push the 3.0 kg trolley has an average acceleration of 2.0 m s⁻². What is the average acceleration of the 1.5 kg trolley?',
        options: ['1.0 m s⁻²', '2.0 m s⁻²', '4.0 m s⁻²', '6.0 m s⁻²'],
        answer: 2,
        why: 'The forces are an equal and opposite pair (third law): F = 3.0 × 2.0 = 6.0 N. So a = 6.0 / 1.5 = 4.0 m s⁻².',
        backHref: `${M}/newtons-third-law#law`,
        backLabel: 'Review: the third law',
      },
      {
        t: 'check',
        id: 'q7',
        q: 'A 150 g tennis ball hits a wall at 24 m s⁻¹ and rebounds along the same line at 12 m s⁻¹. It is in contact with the wall for 0.030 s. What is the average force of the wall on the ball?',
        options: ['60 N', '120 N', '180 N', '180 000 N'],
        answer: 2,
        why: 'Take toward the wall as +. Δp = 0.150 × (−12 − 24) = −5.4 kg m s⁻¹. F = Δp / t = −5.4 / 0.030 = −180 N, a 180 N force away from the wall. 180 000 N comes from leaving the mass in grams.',
        backHref: `${M}/momentum-change-cases#case4`,
        backLabel: 'Review: direction reverses, use a number line',
      },
      {
        t: 'check',
        id: 'q8',
        q: 'Which statement is the most general form of Newton’s second law?',
        options: ['net force = mass × velocity', 'net force = rate of change of momentum', 'net force = change in kinetic energy', 'net force = acceleration ÷ mass'],
        answer: 1,
        why: 'F_net = Δp / t works even when the mass changes. F = ma is the special case for constant mass.',
        backHref: `${M}/newtons-second-law#law`,
        backLabel: 'Review: the second law',
      },
      {
        t: 'check',
        id: 'q9',
        q: 'A 250 g puck slides at 8.0 m s⁻¹ towards a rink board, rebounds at 3.0 m s⁻¹ in the opposite direction, and is in contact with the board for 0.20 s. What is the average force of the board on the puck?',
        options: ['6.3 N', '10 N', '14 N', '2.8 N'],
        answer: 2,
        why: 'Δp = 0.250 × (−3.0 − 8.0) = −2.75 kg m s⁻¹, so F = 2.75 / 0.20 = 13.75 N ≈ 14 N. Subtracting the speeds (8.0 − 3.0) would give 6.3 N.',
        backHref: `${M}/momentum-change-cases#line`,
        backLabel: 'Review: the number line',
      },
      {
        t: 'check',
        id: 'q10',
        q: 'A constant resultant force F acts on an object of mass m for a time t, starting from rest. What is the object’s change in velocity?',
        options: ['Ft', 'F / (mt)', 'Ft / m', 'mt / F'],
        answer: 2,
        why: 'Ft = Δp = mΔv, so Δv = Ft / m.',
        backHref: `${M}/newtons-second-law#law`,
        backLabel: 'Review: Ft = Δp = mΔv',
      },
      { t: 'summary', points: ['F_net = Δp / t; the gradient of a p–t graph is the net force.', 'Rate of change of momentum: (mass per second) × (velocity change).', 'A rebound reverses the direction: subtract velocities with signs.'], terms: [{ term: 'Impulse', def: 'Ft, equal to the change in momentum' }], formulas: ['F = Δp / t', 'Ft = Δp', 'Δp = m(v_{f} − v_{i})'], errors: ['Subtracting speeds after a rebound.', 'Forgetting to convert grams to kilograms or minutes to seconds.'] },
    ],
  },
]

export const A2_FORCE_AND_MOTION: Module = {
  slug: 'a2-force-and-motion',
  code: 'A.2',
  title: 'Force and motion',
  theme: 'Theme A · Space, time and motion',
  source: 'Class 5 · Newton’s laws and momentum',
  intro: 'Newton’s three laws in one format (name, words, maths), momentum and its conservation, what momentum is not, and how to handle a rebound. Classes 3 and 4 of A.1 come later.',
  lessons,
}
