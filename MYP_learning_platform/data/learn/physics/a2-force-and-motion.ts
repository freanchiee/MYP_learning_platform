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
  // ------------------------------------------------------------------ 3 what can a force do
  {
    slug: 'what-can-a-force-do',
    code: 'A.2 · 3',
    title: 'What can a force do?',
    blurb: 'Change the speed, change the direction, change the shape. Then drive a car and see all three.',
    syllabus: 'A.2 Forces and momentum · effects of a force',
    level: 'SL+HL',
    difficulty: 2,
    minutes: 20,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'Get in and drive first. Then we will name what each control actually does with a force.' },
      {
        t: 'deck',
        slides: [
          {
            id: 'car',
            kicker: 'Play first',
            title: 'Drive the car — what do you notice?',
            blocks: [
              {
                t: 'widget',
                id: 'force-car-game',
                title: 'Drive the car',
                idea: 'Try ▲ to speed up, ▼ to brake, ◀ ▶ to steer, and drive over a speed breaker. Notice: does each push feel the same, or different?',
              },
              { t: 'note', text: 'Speeding up, braking and steering all use a force. So does the bump pushing the spring. Next: what is different about each one?' },
            ],
          },
          {
            id: 'three',
            kicker: 'Force can do 3 things',
            title: 'Speed, direction, shape',
            blocks: [
              { t: 'p', text: 'You just used all three. The engine and the brakes changed the car’s **speed**. Steering changed its **direction**. The speed breaker changed the spring’s **shape**.' },
              {
                t: 'arrows',
                head: ['A force can…', 'Formula'],
                rows: [
                  { emoji: '⏩', from: '1  change the SPEED of an object', to: 'F = ma', note: 'F along the line of v' },
                  { emoji: '↪️', from: '2  change the DIRECTION of a moving object', to: 'F = mv² / r', note: 'F at 90° to v, speed constant' },
                  { emoji: '🗜️', from: '3  change the SHAPE of an object', to: 'F = kx', note: 'Hooke’s law' },
                ],
              },
            ],
          },
          {
            id: 'speed',
            kicker: '1 · Change the speed',
            title: 'Force along the line of motion',
            blocks: [
              {
                t: 'table',
                head: ['Angle between F and v', 'Acceleration', 'Speed'],
                rows: [
                  ['0°  (same direction)', 'a in the same direction as v', 'increases ↑'],
                  ['180°  (opposite direction)', 'a opposite to v', 'decreases ↓'],
                ],
              },
              { t: 'formulas', items: [{ eq: 'F = ma', legend: ['a = Δv / t', 'm = 2 kg, a = 1 m s⁻² → F = 2 N'] }] },
              {
                t: 'widget',
                id: 'force-speed-anim',
                title: 'Same direction or opposite?',
                idea: 'The block starts at 4 m s⁻¹. Flip the direction of the force and watch the speed.',
                predict: { q: 'Predict: a force acts on a moving block in the direction OPPOSITE to its velocity. Its speed will…', options: ['increase', 'decrease', 'stay the same'], answer: 1, why: 'Force and velocity at 180°: the acceleration is opposite to v, so the speed falls.' },
              },
            ],
          },
          {
            id: 'direction',
            kicker: '2 · Change the direction',
            title: 'Force at 90° to the motion',
            blocks: [
              {
                t: 'formulas',
                items: [{ eq: 'F = mv² / r', legend: ['centripetal force', 'the acceleration is a = v² / r', 'note: the speed is constant'] }],
              },
              {
                t: 'widget',
                id: 'force-direction-anim',
                title: 'A ball on a circle',
                idea: 'The force is at 90° to the velocity, so it turns the velocity without changing the speed.',
                predict: { q: 'Predict: you double the speed but keep the same radius and mass. The force needed becomes…', options: ['2 times as big', '4 times as big', 'the same'], answer: 1, why: 'F = mv² / r, so F ∝ v². Double v, four times the force.' },
              },
            ],
          },
          {
            id: 'shape',
            kicker: '3 · Change the shape',
            title: 'Squeeze and stretch',
            blocks: [
              { t: 'formulas', items: [{ eq: 'F = kx', legend: ['Hooke’s law', 'k: spring constant (N m⁻¹)', 'x: extension or compression (m)'] }] },
              {
                t: 'widget',
                id: 'force-shape-anim',
                title: 'A spring',
                idea: 'A pull stretches the spring and a push compresses it. The change of shape is proportional to the force.',
                predict: { q: 'Predict: a spring extends by 4 cm under 8 N. Under 16 N (still within its limit) it extends by…', options: ['2 cm', '8 cm', '16 cm'], answer: 1, why: 'x = F / k, so doubling F doubles x: 8 cm.' },
              },
            ],
          },
        ],
      },
      { t: 'check', id: 'a2-3-c1', q: 'A force acts in the same direction as an object’s velocity. The object…', options: ['speeds up', 'slows down', 'moves in a circle'], answer: 0, why: 'Force and velocity at 0°: the acceleration is along v, so the speed increases.', back: 'speed' },
      { t: 'check', id: 'a2-3-c2', q: 'A satellite moves in a circle at constant speed. The force on it is…', options: ['along its velocity', 'at 90° to its velocity', 'opposite to its velocity'], answer: 1, why: 'A force at 90° to the velocity changes the direction only: F = mv² / r.', back: 'direction' },
      { t: 'check', id: 'a2-3-c3', q: 'A 2.0 kg block has an acceleration of 1.0 m s⁻². The net force on it is…', options: ['0.5 N', '2.0 N', '3.0 N'], answer: 1, why: 'F = ma = 2.0 × 1.0 = 2.0 N.', back: 'speed' },
      { t: 'check', id: 'a2-3-c4', q: 'A car goes round a bend at a steady speed. The sideways friction force from the tyres changes the car’s…', options: ['direction', 'speed', 'mass'], answer: 0, why: 'The force is at 90° to the velocity, so it changes the direction but not the speed.', back: 'car' },
      { t: 'check', id: 'a2-3-c5', q: 'A spring with k = 200 N m⁻¹ is pulled with a force of 10 N. The extension is…', options: ['5.0 cm', '20 cm', '0.50 cm'], answer: 0, why: 'x = F / k = 10 / 200 = 0.050 m = 5.0 cm.', back: 'shape' },
      { t: 'check', id: 'a2-3-c6', q: 'A speed breaker pushes a wheel upwards and squeezes the suspension spring. Which effect of a force is this?', options: ['changing the shape', 'changing the speed', 'changing the direction'], answer: 0, why: 'The spring is compressed: a change of shape, with F = kx.', back: 'car' },
      { t: 'apply', id: 'a2-3-a1', prompt: 'A car goes round a bend at a steady 10 m s⁻¹. Explain, using what a force can do, why the driver still needs a force although the speed does not change.', model: 'Speed is constant, but velocity is a vector, so turning changes it. A force at 90° to the velocity (the sideways friction of the tyres) changes the direction of the velocity without changing the speed. Its size is F = mv² / r, so without it the car would carry on in a straight line.', checklist: ['I said velocity changes when direction changes', 'I said the force is at 90° to the velocity', 'I said speed is unchanged', 'I gave F = mv² / r'] },
      { t: 'retrieval', items: [{ from: 'A.2 · 2', q: 'For constant mass, F = …', options: ['ma', 'mv', '½mv²'], answer: 0, why: 'F = Δp / t = ma.' }, { from: 'A.2 · 1', q: 'If F_net = 0 the velocity…', options: ['does not change', 'must be zero', 'keeps increasing'], answer: 0, why: 'Newton’s first law.' }] },
      { t: 'summary', points: ['A force can change the speed (along v), the direction (at 90° to v) or the shape of an object.', 'Speed: F = ma. Direction: F = mv² / r. Shape: F = kx.', 'Engine force is with the velocity, braking force is against it, tyre friction is across it.'], terms: [{ term: 'Centripetal force', def: 'the force towards the centre that keeps an object moving in a circle' }, { term: 'Hooke’s law', def: 'extension is proportional to the force, F = kx, within the limit of proportionality' }], formulas: ['F = ma', 'F = mv² / r', 'F = kx'], errors: ['Thinking a force is needed to keep an object moving at constant speed.', 'Thinking a force at 90° to the velocity speeds the object up.', 'Forgetting that Hooke’s law only holds up to the limit of proportionality.'] },
    ],
  },
  // ------------------------------------------------------------------ 3
  {
    slug: 'newtons-third-law',
    code: 'A.2 · 4',
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
    code: 'A.2 · 5',
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
      { t: 'retrieval', items: [{ from: 'A.2 · 4', q: 'Action and reaction act on…', options: ['different objects', 'the same object', 'no object'], answer: 0, why: 'They never cancel.' }, { from: 'A.2 · 2', q: 'Momentum is measured in…', options: ['kg m s⁻¹', 'J', 'N'], answer: 0, why: 'Or N s.' }] },
      { t: 'summary', points: ['Third law: equal and opposite forces. Second law: F = Δp / t.', 'Together: Δp₁ = −Δp₂, so Δp_sys = 0.', 'Momentum is always conserved for an isolated system.'], terms: [{ term: 'Isolated system', def: 'no net external force' }], formulas: ['Δp_{sys} = 0 if F_{net,ext,sys} = 0', 'm_{1}u_{1} + m_{2}u_{2} = m_{1}v_{1} + m_{2}v_{2}'], errors: ['Using conservation when an external force acts (for example friction).', 'Forgetting signs for direction.'] },
    ],
  },
  // ------------------------------------------------------------------ 5
  {
    slug: 'momentum-vs-kinetic-energy',
    code: 'A.2 · 6',
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
      { t: 'retrieval', items: [{ from: 'A.2 · 5', q: 'Δp_sys = 0 if…', options: ['F_net,ext = 0', 'E_k is conserved', 'the masses are equal'], answer: 0, why: 'Isolated system.' }, { from: 'A.2 · 2', q: 'p = …', options: ['mv', '½mv²', 'ma'], answer: 0, why: 'Mass × velocity.' }] },
      { t: 'summary', points: ['Momentum p = mv is a vector; kinetic energy E_k = ½mv² is a scalar.', 'Momentum is always conserved in an isolated system; kinetic energy only in elastic collisions.', 'They were argued over as one quantity until d’Alembert (1743).'], terms: [{ term: 'Elastic collision', def: 'kinetic energy is conserved' }, { term: 'Inelastic collision', def: 'kinetic energy is not conserved' }], formulas: ['p = mv', 'E_{k} = ½mv²'], errors: ['Treating kinetic energy as conserved in every collision.', 'Adding momenta without signs.'] },
    ],
  },
  // ------------------------------------------------------------------ 6
  {
    slug: 'momentum-change-cases',
    code: 'A.2 · 7',
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
      { t: 'retrieval', items: [{ from: 'A.2 · 6', q: 'Momentum is a…', options: ['vector', 'scalar'], answer: 0, why: 'It has a direction.' }, { from: 'A.2 · 2', q: 'F_net = …', options: ['Δp / t', 'mv', '½mv²'], answer: 0, why: 'Rate of change of momentum.' }] },
      { t: 'summary', points: ['Δp = m(v_f − v_i), with signs.', 'If the direction reverses, one velocity is negative.', 'Use the number line: the change is the arrow from i to f.'], terms: [{ term: 'Change in momentum', def: 'final momentum minus initial momentum, a vector' }], formulas: ['Δp = p_{f} − p_{i} = mΔv'], errors: ['Subtracting speeds instead of velocities.', 'Dropping the sign of the final velocity after a rebound.'] },
    ],
  },
  // ------------------------------------------------------------------ 7 force, space and time
  {
    slug: 'force-space-and-time',
    code: 'A.2 · 8',
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
      { t: 'retrieval', items: [{ from: 'A.2 · 2', q: 'F_net = …', options: ['Δp / t', 'mv', '½mv²'], answer: 0, why: 'Rate of change of momentum.' }, { from: 'A.2 · 6', q: 'Which quantity is a scalar?', options: ['kinetic energy', 'momentum', 'force'], answer: 0, why: 'Kinetic energy has no direction.' }] },
      { t: 'summary', points: ['Imbalance is the cause of motion; a bigger imbalance means more motion.', 'Force = work done per unit displacement (space) = change in momentum per unit time (time).', 'Given the present state and the force, the future (and the past) follows.'], terms: [{ term: 'Imbalance', def: 'a difference (of force, concentration, temperature or potential) that drives a flow' }, { term: 'Work done', def: 'the way energy in one form (E₁) is converted into energy in another form (E₂); a force acting through a displacement' }], formulas: ['WD / x = F = Δp / t'], errors: ['Mixing up energy per distance (force) with energy per time (power).', 'Forgetting the condition: constant force along the displacement.', 'Treating work done as a store of energy: it is the process that converts E₁ into E₂.'] },
    ],
  },

  // ------------------------------------------------------------------ 9 the four fundamental forces
  {
    slug: 'four-fundamental-forces',
    code: 'A.2 · 9',
    title: 'The four fundamental forces',
    blurb: 'Every push and pull in the universe comes down to just four forces. How do they compare?',
    syllabus: 'A.2 Forces and momentum · enrichment: fundamental forces',
    level: 'SL+HL',
    difficulty: 2,
    minutes: 14,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'Gravity holds you to the floor. A magnet holds a fridge note. A nucleus holds together against its own repulsion. Are these really different forces, or the same thing in disguise?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'four',
            kicker: 'May the forces be with you',
            title: 'Four forces, not one',
            blocks: [
              {
                t: 'table',
                head: ['Force', 'Acts on…', 'Example'],
                rows: [
                  ['Gravitational', 'any matter, because matter has mass — between two or more masses, at rest or moving', 'you and the Earth'],
                  ['Electromagnetic', 'charges, in electric and magnetic fields — between charges at rest (electric) or moving (magnetic)', 'a magnet and a fridge, static shock'],
                  ['Weak nuclear', 'particles separated by less than about 10⁻¹⁸ m, roughly 0.1% of a proton’s diameter', 'radioactive decay'],
                  ['Strong nuclear', 'protons and neutrons in the nucleus, at about 10⁻¹⁵ m', 'holding the nucleus together'],
                ],
              },
              { t: 'note', text: 'Every push or pull you have met — friction, tension, the normal force, a spring, even a chemical bond — is really the electromagnetic force showing up between atoms.' },
            ],
          },
          {
            id: 'table',
            kicker: 'Compare them',
            title: 'Range, strength, mediator',
            blocks: [
              {
                t: 'widget',
                id: 'fundamental-forces-table',
                title: 'The four forces, quantitatively',
                idea: 'Each force is carried (mediated) by a particle. Range and relative strength span enormous numbers, so the strength bars use a log scale.',
                predict: { q: 'Predict: which force is the STRONGEST, particle for particle?', options: ['Gravitational', 'Weak nuclear', 'Strong nuclear'], answer: 2, why: 'The strong force is the strongest by far — it has to be, to overcome the electric repulsion between protons packed into a tiny nucleus.' },
              },
            ],
          },
          {
            id: 'weakest',
            kicker: 'Weakest, yet everywhere',
            title: 'Why gravity still matters',
            blocks: [
              { t: 'p', text: 'Gravity is the weakest of the four by an enormous margin. But it has two advantages the others do not both share: it has **infinite range**, and it is **always attractive** (never cancels out). Add up the gravity from every particle in a planet, and the weakest force wins on the largest scales.' },
              { t: 'callout', kind: 'idea', title: 'Not yet found', text: 'The graviton — the particle physicists expect should carry the gravitational force, to match the other three — has never been directly observed. Gravity is the one fundamental force with no confirmed mediator.' },
            ],
          },
        ],
      },
      { t: 'check', id: 'a2-9-c1', q: 'Which force is responsible for radioactive decay?', options: ['Weak nuclear', 'Strong nuclear', 'Electromagnetic'], answer: 0, why: 'The weak nuclear force causes processes like beta decay.', back: 'four' },
      { t: 'check', id: 'a2-9-c2', q: 'Which mediating particle carries the electromagnetic force?', options: ['Photon', 'Gluon', 'Graviton'], answer: 0, why: 'The photon, massless and spin 1.', back: 'table' },
      { t: 'check', id: 'a2-9-c3', q: 'Why does the weakest fundamental force (gravity) dominate the motion of planets?', options: ['It has infinite range and is always attractive', 'It is actually the strongest at short range', 'The other forces do not act on planets'], answer: 0, why: 'Gravity never cancels and never fades to zero, so it adds up over huge masses and distances.', back: 'weakest' },
      { t: 'check', id: 'a2-9-c4', q: 'The strong nuclear force acts over a range of about…', options: ['10⁻¹⁵ m', '10⁻¹⁸ m', 'infinite'], answer: 0, why: 'About the size of a nucleus, 10⁻¹⁵ m.', back: 'table' },
      { t: 'apply', id: 'a2-9-a1', prompt: 'Friction, tension and the normal force are all "contact" forces you meet every day. Which fundamental force are they really examples of, and why does it not feel like a single force?', model: 'They are all the electromagnetic force, acting between the electrons in the outer atoms of two surfaces (or the atoms along a string). It does not feel like "one force" because it shows up in different everyday situations — resisting sliding (friction), pulling along a string (tension), pushing apart two touching surfaces (the normal force) — even though the same force is behind all of them.', checklist: ['I named the electromagnetic force', 'I said it acts between atoms/electrons', 'I gave at least one everyday example', 'I explained why it looks like different forces'] },
      { t: 'retrieval', items: [{ from: 'A.2 · 3', q: 'A force at 90° to the velocity changes…', options: ['the direction only', 'the speed only'], answer: 0, why: 'Centripetal force.' }, { from: 'A.2 · 2', q: 'F_net = …', options: ['Δp / t', 'mv'], answer: 0, why: 'Rate of change of momentum.' }] },
      { t: 'summary', points: ['Four fundamental forces: gravitational, electromagnetic, weak nuclear, strong nuclear.', 'Strong is the strongest, gravity by far the weakest, but gravity has infinite range and is always attractive.', 'Everyday contact forces (friction, tension, the normal force) are all really the electromagnetic force.'], terms: [{ term: 'Mediating particle', def: 'the particle that "carries" a fundamental force between two other particles' }, { term: 'Graviton', def: 'the hypothetical particle expected to mediate gravity; never yet observed' }], formulas: [], errors: ['Thinking friction or tension is a separate fundamental force.', 'Assuming the strongest force must dominate everyday life — range and sign matter too.'] },
    ],
  },
  // ------------------------------------------------------------------ 10 everyday forces: friction, drag, buoyancy, tension
  {
    slug: 'everyday-forces',
    code: 'A.2 · 10',
    title: 'Friction, buoyancy, tension and the rest',
    blurb: 'The everyday forces you name on a free-body diagram, a nitrous drag race, what resists motion, and a skydiver with two terminal velocities.',
    syllabus: 'A.2 Forces and momentum · contact and resistive forces',
    level: 'SL+HL',
    difficulty: 2,
    minutes: 28,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'A stationary drop of water on a level table feels balanced forces. Tilt the table and the forces become unbalanced — it slides. What would the SAME experiment look like with a drop of honey, or glue, or oil?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'balanced',
            kicker: 'The table and the drop',
            title: 'Balanced vs unbalanced, revisited',
            blocks: [
              {
                t: 'table',
                head: ['', 'Stationary drop (level table)', 'Moving drop (tilted table)'],
                rows: [['Forces', 'balanced, F_net = 0', 'unbalanced, F_net ≠ 0']],
              },
              { t: 'p', text: 'This lets us conclude that motion (here, transportation) happened only because the table was tilted — an imbalance of forces. Now imagine the same experiment with a drop of **honey**, **glue**, or **oil** instead of water.' },
            ],
          },
          {
            id: 'names',
            kicker: 'Name the forces',
            title: 'A catalogue of everyday forces',
            blocks: [
              {
                t: 'table',
                head: ['Force', 'Direction', 'Formula / note'],
                rows: [
                  ['Weight (gravity)', 'straight down', 'W = mg'],
                  ['Normal force N', '90° to the surface, pushing away from it', 'from Newton’s 3rd law: the surface pushes back'],
                  ['Tension T', 'along a string or cable, pulling', 'found from F_net = ma on the system it acts in'],
                  ['Buoyant force', 'upward, on anything in a fluid', 'F_B = ρ_fluid × V_displaced × g (Archimedes)'],
                  ['Spring force', 'along the spring, resisting the stretch/squeeze', 'F = kx (Hooke’s law, from A.2 · 3)'],
                  ['Friction f', 'along the surface, opposing sliding (or attempted sliding)', 'f = μN'],
                  ['Drag / air resistance', 'opposite the motion, through a fluid', 'grows with speed'],
                ],
              },
              { t: 'callout', kind: 'warn', title: 'All contact, except two', text: 'Every force in this table except weight and the buoyant force is a contact force — and every contact force is really the electromagnetic force between atoms (see A.2 · 9).' },
            ],
          },
          {
            id: 'buoyancy',
            kicker: 'Buoyancy',
            title: 'Float, or sink?',
            blocks: [
              { t: 'formulas', items: [{ eq: 'F_B = ρ_fluid V g', legend: ['= weight of fluid displaced', 'V: the volume PUSHED OUT OF THE WAY by the object'] }] },
              {
                t: 'arrows',
                head: ['Compare F_B with weight W', 'Result'],
                rows: [
                  { from: 'F_B > W', to: 'floats — rises until enough of it is above the surface that F_B falls to equal W' },
                  { from: 'F_B < W', to: 'sinks' },
                  { from: 'F_B = W', to: 'stays where it is (neutrally buoyant)' },
                ],
              },
              { t: 'callout', kind: 'idea', title: 'Where the upthrust comes from', text: 'Pressure in a fluid increases with depth. The bottom of a submerged object sits deeper than its top, so the fluid pushes up on the bottom harder than it pushes down on the top. That imbalance IS the buoyant force.' },
              {
                t: 'widget',
                id: 'anchored-pod-lab',
                title: 'An anchored underwater pod',
                idea: 'A sensor pod is less dense than water, so it would float — but a cable tethers it to the riverbed at an angle θ. Weight pulls down, the cable pulls down-and-back, so the upthrust must be bigger than the weight alone: F_B = W + T sin θ.',
                predict: { q: 'Predict: compared with a pod hanging straight down (θ = 90°), the SAME pod tethered at a shallower angle (θ = 40°) needs the cable tension to be…', options: ['smaller, for the same upthrust', 'bigger, for the same upthrust', 'the same either way'], answer: 1, why: 'A shallower angle means less of the tension acts vertically (sin θ is smaller), so a bigger T is needed to supply the same vertical pull, T sin θ.' },
              },
            ],
          },
          {
            id: 'tension',
            kicker: 'Tension',
            title: 'A string pulls, it never pushes',
            blocks: [
              { t: 'p', text: 'A string, rope or cable can only **pull** along its own length — never push. Its tension is not fixed by a formula; it comes out of applying F_net = ma to whatever the string is attached to.' },
              {
                t: 'steps',
                title: 'a block and a hanging mass',
                given: 'A 4.0 kg block sits on a frictionless table. A string over an ideal pulley connects it to a 2.0 kg mass hanging off the edge. Find the acceleration and the tension.',
                steps: [
                  { line: 'Treat both masses as one system: total mass 6.0 kg, driven by the hanging weight m_{B}g', why: 'Only the hanging mass has an unbalanced force along the direction of motion; the table supports the block’s weight.' },
                  { line: 'a = m_{B}g / (m_{A} + m_{B}) = (2.0 × 9.81) / 6.0 = 3.3 m s⁻²', why: 'F_net,system = m_B g; a = F_net / total mass.' },
                  { line: 'Now isolate the block: T = m_{A}a = 4.0 × 3.3 = 13 N', why: 'The string is the ONLY horizontal force on the block, so T = m_A a.' },
                  { line: 'Check: for the hanging mass, m_{B}g − T = m_{B}a → 19.6 − 13 = 6.5 ≈ 2.0 × 3.3 ✓', why: 'The same acceleration must satisfy Newton’s second law for the hanging mass too.' },
                ],
                answer: 'a ≈ 3.3 m s⁻², T ≈ 13 N',
              },
            ],
          },
          {
            id: 'friction',
            kicker: 'Friction',
            title: 'Static, dynamic, and the incline',
            blocks: [
              {
                t: 'arrows',
                head: ['Type', 'When'],
                rows: [
                  { from: 'Static friction', to: 'the surfaces are not sliding yet — friction matches whatever is needed, up to a maximum' },
                  { from: 'Dynamic (kinetic) friction', to: 'the surfaces are already sliding' },
                ],
              },
              { t: 'formulas', items: [{ eq: 'f = μN', legend: ['μ: coefficient of friction (no units)', 'N: normal force (90° to the surface)', 'μ_static > μ_dynamic'] }] },
              { t: 'widget', id: 'tilt-forces', title: 'A block on a tilted table', idea: 'The block stays still while the pull down the slope is less than the greatest friction. Push the tilt further and it slides.' },
              {
                t: 'steps',
                title: 'the angle where it just starts to slide',
                given: 'A block sits on a surface tilted at angle θ. At the critical angle, it is on the point of sliding. Find μ in terms of θ.',
                steps: [
                  { line: 'N = mg cos θ,   f = mg sin θ', why: 'Resolve the weight into components along and perpendicular to the slope; at rest, friction balances the along-slope component exactly.' },
                  { line: 'at the point of sliding, f = μN', why: 'Friction is at its maximum possible (static) value right at the critical angle.' },
                  { line: 'μmg cos θ = mg sin θ', why: 'Substitute N and f from the line above.' },
                  { line: 'μ = sin θ / cos θ = tan θ', why: 'The mg cancels — μ depends only on the angle, not the mass.' },
                ],
                answer: 'μ = tan θ',
              },
            ],
          },
          {
            id: 'nos-race',
            kicker: 'Play first',
            title: 'Floor it — what happens when the nitrous runs out?',
            blocks: [
              { t: 'p', text: 'Start the engine and watch the speed climb. It stops climbing well before you would expect — something is resisting the car as hard as the engine is pushing it. Then try the nitrous.' },
              {
                t: 'widget',
                id: 'nos-race-lab',
                title: 'Drag strip: nitrous boost',
                idea: 'Full throttle gives a steady engine force. Drag and rolling resistance grow with speed until they exactly balance it — a top speed. Holding NOS adds extra engine force, pushing the balance point up to a NEW, higher top speed, for as long as the tank lasts.',
                predict: { q: 'Predict: the car is cruising at its NOS-boosted top speed when the nitrous tank finally runs dry (you keep the accelerator floored). What happens next?', options: ['speed stays at the new, higher top speed', 'speed falls back down to the ORIGINAL top speed', 'the car stops accelerating and its speed stays exactly where it is forever'], answer: 1, why: 'Without the boost, only the normal engine force remains — smaller than the drag at that speed — so the net force is backward: the car decelerates until drag falls back to match the normal engine force, at the original top speed.' },
              },
              { t: 'note', text: 'Notice: the car never overshoots BELOW the original top speed on the way down. It settles exactly there, because that is where engine force = resistance again.' },
              {
                t: 'steps',
                title: 'reading average acceleration off a v–t graph',
                given: 'From a run of the race: on the normal climb (no nitrous), the graph shows the car at about 4 m s⁻¹ at t = 2 s, and about 22 m s⁻¹ at t = 13 s. Then, once at the original top speed, 5 seconds of nitrous takes it from 40 m s⁻¹ up to about 52 m s⁻¹. Find the average acceleration in each phase.',
                steps: [
                  { line: 'Average acceleration = Δv / Δt — the gradient between the two points on the graph, not the instantaneous (curving) gradient at any one point', why: 'A v–t graph is curving throughout (the resistance keeps changing), so "average" means a straight line between two read-off points.' },
                  { line: 'Normal climb: a = (22 − 4) / (13 − 2) = 18 / 11 ≈ 1.6 m s⁻²', why: 'Read Δv off the vertical axis, Δt off the horizontal axis, between the two chosen points.' },
                  { line: 'Nitrous phase: a = (52 − 40) / 5 = 12 / 5 = 2.4 m s⁻²', why: 'Same idea, using the boosted stretch of the graph.' },
                  { line: 'Compare: 2.4 m s⁻² > 1.6 m s⁻²', why: 'Nitrous does not just raise the top speed — it raises the acceleration at every speed along the way, because it adds to the net force (engine − resistance) at every point, not just at the top.' },
                ],
                answer: 'a ≈ 1.6 m s⁻² (normal), a ≈ 2.4 m s⁻² (nitrous) — the boosted phase accelerates faster, not just further.',
              },
            ],
          },
          {
            id: 'resist',
            kicker: 'What resists motion',
            title: 'Friction, drag, viscosity, resistance',
            blocks: [
              {
                t: 'table',
                head: ['Resists…', 'Between…', 'Example'],
                rows: [
                  ['Friction', 'solid on solid', 'a book sliding across a desk'],
                  ['Drag', 'a solid moving through a fluid', 'F_D = ½ C_D ρ A v² — air resistance on a car'],
                  ['Viscosity', 'layers within a fluid itself', 'why honey pours more slowly than water'],
                  ['Electrical resistance', 'moving charge', 'the opposition a circuit gives to current'],
                ],
              },
              { t: 'note', text: 'Four different names, one family: something always opposes motion, and it grows the harder (or faster) you push.' },
              { t: 'formulas', items: [{ eq: 'F_drag ∝ v²  (often written F_drag = kv²)', legend: ['k bundles up the shape, size and the fluid — same idea as the race just now', 'top speed: the speed where kv² grows to match the driving force'] }] },
              { t: 'callout', kind: 'idea', title: 'What the race just showed', text: 'The engine force was constant, but the resistance kept growing with speed — so the car settled at whatever speed made them equal. Nitrous did not change the resistance; it changed the driving force, so the balance point moved. The same equation, F_drag = kv², explains a ball falling through honey, a skydiver, and a drag car.' },
            ],
          },
          {
            id: 'terminal',
            kicker: 'Try it',
            title: 'Falling through honey, water, air',
            blocks: [
              {
                t: 'widget',
                id: 'terminal-velocity-lab',
                title: 'Reaching terminal velocity',
                idea: 'A falling ball speeds up until resistance grows to match its weight — then the forces balance and the speed stops changing.',
                predict: { q: 'Predict: the SAME ball is dropped into honey and into water. Compared with water, in honey it reaches…', options: ['a higher terminal velocity, more slowly', 'a lower terminal velocity, but sooner', 'the same terminal velocity either way'], answer: 1, why: 'More resistance (bigger k) means the ball cannot speed up as far before the forces balance, AND it balances sooner.' },
              },
            ],
          },
          {
            id: 'parachute',
            kicker: 'A bigger twist',
            title: 'A skydiver: two terminal velocities',
            blocks: [
              { t: 'p', text: 'Air resistance on something fast grows with the SQUARE of speed, not speed itself: F_drag = kv² here. That still gives a terminal velocity — but a parachute changes k enormously, part way through the fall.' },
              {
                t: 'widget',
                id: 'parachute-lab',
                title: 'Cut the rope, then open the parachute',
                idea: 'Hanging: tension balances weight. Cut the rope: weight alone accelerates the jumper, drag grows with speed until it balances weight (terminal velocity). Open the parachute: drag jumps up, now BIGGER than weight, so the jumper decelerates to a new, much lower terminal velocity.',
                predict: { q: 'Predict: the instant the parachute opens, the jumper is moving much faster than the new (canopy) terminal velocity. What happens next?', options: ['speed keeps rising, just more slowly', 'speed suddenly drops to the new terminal velocity', 'speed falls, because drag now exceeds weight'], answer: 2, why: 'Drag depends on the CURRENT speed, which is still high, so the huge new drag briefly exceeds the weight: an unbalanced force that decelerates the jumper down towards the new terminal velocity.' },
              },
              { t: 'callout', kind: 'idea', title: 'Same story, twice', text: 'Both terminal velocities are the same balance — weight = drag — just with a very different k. A bigger k (the open canopy) needs a much smaller v to produce the same drag force.' },
              { t: 'callout', kind: 'note', title: 'Same balance, opposite move', text: 'Back in the nitrous race, the BALANCE moved because the driving force changed (NOS added, then removed) while k stayed fixed. Here it moves because k changes (the canopy) while the driving force (weight) stays fixed. Either way: F_net = 0 is what defines "terminal".' },
            ],
          },
        ],
      },
      { t: 'check', id: 'a2-10-c1', q: 'The buoyant force on an object equals…', options: ['the weight of fluid it displaces', 'its own weight', 'the density of the object'], answer: 0, why: 'Archimedes’ principle: F_B = ρ_fluid V g.', back: 'names' },
      { t: 'check', id: 'a2-10-c1b', q: 'An object floats when…', options: ['F_B > W', 'F_B < W', 'F_B = 0'], answer: 0, why: 'When the buoyant force exceeds the weight, the object rises.', back: 'buoyancy' },
      { t: 'check', id: 'a2-10-c1c', q: 'A 0.20 m radius sphere of density 500 kg m⁻³ hangs fully underwater from a cable at 60° to the horizontal, tension 120 N. What is the upthrust on it?', options: ['≈ 268 N', '≈ 60 N', '≈ 164 N'], answer: 0, why: 'W = ρVg = 500 × (4/3)π(0.20)³ × 9.81 ≈ 164 N. F_B = W + T sin 60° = 164 + 120 × 0.866 ≈ 268 N.', back: 'buoyancy' },
      { t: 'check', id: 'a2-10-c2', q: 'A string can…', options: ['only pull, never push', 'only push, never pull', 'push or pull equally'], answer: 0, why: 'Tension always pulls along the string.', back: 'tension' },
      { t: 'check', id: 'a2-10-c3', q: 'At the angle where a block just starts to slide, μ equals…', options: ['tan θ', 'sin θ', 'mg cos θ'], answer: 0, why: 'μmg cos θ = mg sin θ gives μ = tan θ.', back: 'friction' },
      { t: 'check', id: 'a2-10-c4', q: 'Static friction compared with dynamic (kinetic) friction on the same surfaces is usually…', options: ['greater', 'smaller', 'exactly equal'], answer: 0, why: 'μ_static > μ_dynamic — it takes more force to start sliding than to keep it sliding.', back: 'friction' },
      { t: 'check', id: 'a2-10-c5', q: 'A ball falling through a fluid reaches terminal velocity when…', options: ['its weight is balanced by the resistive force', 'it stops accelerating due to gravity switching off', 'the fluid runs out'], answer: 0, why: 'At terminal velocity, F_net = 0: weight = drag/viscous force.', back: 'terminal' },
      { t: 'check', id: 'a2-10-c5b', q: 'In the nitrous race, why does the car reach a top speed at all, even with the accelerator fully down the whole time?', options: ['drag and rolling resistance grow with speed until they match the (constant) engine force', 'the engine runs out of fuel', 'the driver has to slow down for the finish line'], answer: 0, why: 'Engine force stays roughly constant, but resistance grows with v² — so eventually they must be equal, and that speed is the top speed.', back: 'nos-race' },
      { t: 'check', id: 'a2-10-c5c', q: 'Once the NOS tank empties (accelerator still floored), the car…', options: ['decelerates back down to the ORIGINAL top speed, never below it', 'stays at the boosted top speed forever', 'decelerates all the way down to a stop'], answer: 0, why: 'Only the normal engine force remains, which is smaller than the drag at the boosted speed — an unbalanced backward force — until speed falls enough that drag matches the normal engine force again.', back: 'nos-race' },
      { t: 'check', id: 'a2-10-c5d', q: 'On the race’s v–t graph, a point at t = 4 s reads about 10 m s⁻¹, and a point at t = 9 s reads about 30 m s⁻¹. The average acceleration over that stretch is…', options: ['4.0 m s⁻²', '3.3 m s⁻¹', '20 m s⁻²'], answer: 0, why: 'a = Δv/Δt = (30 − 10) / (9 − 4) = 20/5 = 4.0 m s⁻². (The second option has the right number but the wrong unit — that is speed, not acceleration.)', back: 'nos-race' },
      { t: 'check', id: 'a2-10-c5e', q: 'Comparing the normal climb with the nitrous phase on the SAME v–t graph, the nitrous stretch of the line is…', options: ['steeper — a bigger average acceleration', 'the same steepness — nitrous only changes the top speed', 'less steep — nitrous trades acceleration for a higher top speed'], answer: 0, why: 'Steepness on a v–t graph IS the acceleration. Nitrous adds to the net force at every speed, not just at the top, so the climb is visibly steeper while it lasts.', back: 'nos-race' },
      { t: 'check', id: 'a2-10-c6', q: 'The instant a skydiver’s parachute opens, drag is…', options: ['bigger than weight, so they decelerate', 'smaller than weight, so they keep speeding up', 'exactly equal to weight already'], answer: 0, why: 'They are still moving at their old (fast) freefall speed, and the canopy has hugely increased k, so kv² now exceeds their weight.', back: 'parachute' },
      { t: 'check', id: 'a2-10-c7', q: 'Why is the terminal velocity under an open parachute so much lower than in freefall?', options: ['drag needs only a small v to balance weight when k is large', 'gravity is weaker near the ground', 'the parachute reduces the jumper’s weight'], answer: 0, why: 'At terminal velocity, kv² = weight (a fixed value). A much bigger k means a much smaller v is enough.', back: 'parachute' },
      { t: 'apply', id: 'a2-10-a1', prompt: 'Sketch (in words) what would happen to a drop of honey, a drop of glue, and a drop of oil on the SAME tilted-table experiment. Which would take longest to start visibly moving, and why?', model: 'All three would stay still on the level table (balanced forces) and start moving once tilted (unbalanced forces), just like the water. Honey and glue are far more viscous than water, so the internal resistance to flowing is much larger; the drop would deform and creep very slowly even once tilted, and glue might not visibly move at all within a reasonable time. Oil is less viscous than honey but still more viscous than water, so it would move, just more slowly than the water did.', checklist: ['I said all three still show balanced vs unbalanced forces', 'I linked "slower to move" to higher viscosity', 'I ranked honey/glue as slowest, oil in between', 'I connected this to the terminal-velocity idea (more resistance)'] },
      { t: 'retrieval', items: [{ from: 'A.2 · 9', q: 'Everyday contact forces (friction, tension) are all really…', options: ['the electromagnetic force', 'gravity', 'the strong force'], answer: 0, why: 'Atoms interacting electromagnetically.' }, { from: 'A.2 · 3', q: 'F = kx describes a force that changes an object’s…', options: ['shape', 'speed', 'direction'], answer: 0, why: 'Hooke’s law, a change of shape.' }] },
      { t: 'summary', points: ['Named forces: weight, normal force, tension, buoyant force, spring force, friction, drag.', 'F_B = ρ_fluid V g = weight of fluid displaced. F_B > W floats, F_B < W sinks.', 'A string only pulls. Tension is found from F_net = ma, not a standalone formula.', 'f = μN, with μ_static > μ_dynamic; at the point of sliding on an incline, μ = tan θ.', 'Friction, drag, viscosity and electrical resistance are one family: things that oppose motion.', 'A falling object reaches terminal velocity when the resistive force balances its weight.', 'A nitrous-boosted car reaches a NEW, higher top speed while the boost lasts, then decays back to the ORIGINAL top speed once it runs out — the same F_net = 0 balance, moved by changing the driving force instead of the resistance.', 'A skydiver has TWO terminal velocities: fast in freefall, much slower under an open parachute, because drag depends on k as well as v.'], terms: [{ term: 'Tension', def: 'the pulling force transmitted along a string, rope or cable' }, { term: 'Buoyant force', def: 'the upward force on an object in a fluid, equal to the weight of fluid displaced' }, { term: 'Terminal velocity', def: 'the constant speed reached when the driving force balances the resistive force' }], formulas: ['f = μN', 'μ = tan θ (at the point of sliding)', 'F_B = ρ_fluid V g', 'F_B = W + T sin θ (tethered underwater, cable at θ to the horizontal)', 'F_drag = kv² (fast motion through air)'], errors: ['Giving tension a fixed formula instead of finding it from F_net = ma.', 'Forgetting μ_static > μ_dynamic.', 'Thinking a denser/more viscous fluid gives a HIGHER terminal velocity — it is the opposite.', 'Using cos θ instead of sin θ for a cable’s vertical pull, when θ is measured from the horizontal.', 'Thinking a parachute reduces speed by reducing weight, rather than by increasing drag.', 'Thinking losing the nitrous boost means the car just stops accelerating and stays at the boosted speed — the resistance is still bigger there, so it must decelerate.'] },
    ],
  },
  // ------------------------------------------------------------------ 8 exam questions: collisions
  {
    slug: 'exam-questions-collisions',
    code: 'A.2 · 11',
    title: 'Exam questions: collisions and Newton’s third law',
    blurb: 'Two collision problems, worked step by step with our own animated diagram and a recreated momentum-time graph.',
    syllabus: 'A.2 Forces and momentum · conservation of momentum, Newton’s third law, elastic and inelastic collisions',
    level: 'SL+HL',
    difficulty: 3,
    minutes: 26,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'Two balls collide. Momentum is always conserved — but kinetic energy usually is not. These two problems show what that difference looks like, ball by ball, millisecond by millisecond.' },
      {
        t: 'deck',
        slides: [
          {
            id: 'balls',
            kicker: 'Problem 1 · one ball stops, the other moves off',
            title: 'A 0.24 kg ball stops a 0.48 kg ball',
            blocks: [
              { t: 'p', text: 'Ball X (mass 0.240 kg) moves at 16 m s⁻¹ in a straight line on a frictionless surface. It collides with a stationary ball Y (mass 0.480 kg). After the collision, ball X is stationary.' },
              { t: 'table', head: ['Given', 'Value'], rows: [['Mass of X', '0.240 kg'], ['Mass of Y', '0.480 kg'], ['Speed of X before', '16 m s⁻¹'], ['Speed of Y before', '0 (stationary)'], ['Speed of X after', '0 (stationary)']] },
              {
                t: 'widget',
                id: 'balls-collision-anim',
                title: 'Watch the collision, and both momentum-time lines',
                idea: 'X arrives, they touch for a brief instant (shaded), then X is stationary and Y moves off. The two momentum lines below always add up to the same total.',
                predict: { q: 'Predict: since X ends up stationary, ball Y must leave with ALL of X’s original momentum. Y’s mass is exactly double X’s, so Y’s speed afterwards is…', options: ['half of X’s original speed (8 m s⁻¹)', 'the same as X’s original speed (16 m s⁻¹)', 'double X’s original speed (32 m s⁻¹)'], answer: 0, why: 'Momentum = mass × velocity. To carry the same momentum with double the mass, Y needs half the speed: 8 m s⁻¹.' },
              },
              {
                t: 'steps',
                title: 'find Y’s speed, and the kinetic energy lost',
                given: 'Ball X (0.240 kg, 16 m s⁻¹) collides with stationary ball Y (0.480 kg) on a frictionless surface; afterwards X is stationary. Find Y’s speed v, and the change in total kinetic energy.',
                steps: [
                  { line: 'p_i = m_X u_X + m_Y u_Y = 0.240 × 16 + 0 = 3.84 kg m s⁻¹', why: 'Total momentum before the collision — only X is moving.' },
                  { line: 'p_f = m_X (0) + m_Y v = 0.480v, and p_i = p_f', why: 'Momentum is conserved: the total is the same before and after.' },
                  { line: 'v = 3.84 / 0.480 = 8.0 m s⁻¹', why: 'Solve for Y’s speed.' },
                  { line: 'KE_i = ½(0.240)(16²) = 30.72 J,  KE_f = ½(0.480)(8.0²) = 15.36 J', why: 'Kinetic energy uses speed SQUARED — always recompute it separately from momentum.' },
                  { line: 'ΔE_k = 15.36 − 30.72 = −15.36 J', why: 'Kinetic energy is LOST: the collision is not perfectly elastic, even though nothing sticks together.' },
                ],
                answer: 'v = 8.0 m s⁻¹; ΔE_k = −15.36 J (15.36 J of kinetic energy is lost).',
              },
              { t: 'callout', kind: 'warn', title: 'Momentum is always conserved; kinetic energy is not', text: 'This collision loses kinetic energy even though the balls do NOT stick together. "Not sticking" does not mean "elastic" — check the numbers, every time.' },
            ],
          },
          {
            id: 'force',
            kicker: 'Same collision · the force involved',
            title: 'The contact force, from the impulse',
            blocks: [
              { t: 'p', text: 'The collision lasts 2.0 ms, and the contact force is (approximately) constant while the balls touch. Impulse — force × time — equals the change in momentum.' },
              { t: 'formulas', items: [{ eq: 'F = Δp / t', legend: ['the force on ONE ball, from its own change in momentum', 'assumes the force is constant over the contact time'] }] },
              {
                t: 'steps',
                title: 'force on X from Y, and force on Y from X',
                given: 'The collision above lasts 2.0 ms. Find the force exerted on X by Y, then compare it with the force exerted on Y by X.',
                steps: [
                  { line: 'Δp_X = m_X v_{X,f} − m_X u_X = 0.240(0) − 0.240(16) = −3.84 kg m s⁻¹', why: 'X’s momentum goes from 3.84 to 0: a change of −3.84.' },
                  { line: 'F_{on X} = Δp_X / t = −3.84 / 0.0020 = −1920 N', why: 'Negative: the force on X points opposite to X’s original direction of travel — it is what brings X to rest.' },
                  { line: 'F_{on Y} = −F_{on X} = +1920 N', why: 'Newton’s third law: the force Y exerts on X, and the force X exerts on Y, are equal in size and opposite in direction, at every instant.' },
                ],
                answer: 'Force on X from Y: 1920 N, opposing X’s original motion. Force on Y from X: 1920 N, the same size, in the opposite direction (the direction X was originally moving).',
              },
              { t: 'callout', kind: 'idea', title: 'Check it against the graph', text: 'Scrub the widget above to the shaded contact window. Both lines are straight (constant slope — constant force) and equally steep, one falling as the other rises by exactly the same amount at every instant.' },
            ],
          },
          {
            id: 'stick',
            kicker: 'Problem 2 · they stick together',
            title: 'A perfectly inelastic collision, in general',
            blocks: [
              { t: 'p', text: 'Block X (mass m_X) moves at speed 5v and collides head-on with a stationary block Y (mass m_Y). The two blocks stick together and move off with common speed v.' },
              { t: 'table', head: ['Given', 'Value'], rows: [['Speed of X before', '5v'], ['Speed of Y before', '0 (stationary)'], ['Common speed after', 'v'], ['Collision', 'perfectly inelastic — they stick together']] },
              {
                t: 'widget',
                id: 'stick-collision-anim',
                title: 'Watch them stick, and both momentum-time lines',
                idea: 'This uses one concrete case, m_X = 1 kg and v = 2 m s⁻¹ (so X starts at 5v = 10 m s⁻¹) — but the two results proved below (m_Y/m_X = 4 and the 1/5 kinetic-energy ratio) hold for ANY m_X and v.',
                predict: { q: 'Predict: after they stick together, do the two momentum-time lines below (X and Y) end up at the SAME value or different values?', options: ['different — they still have different masses', 'the same — each carries momentum in proportion to how the total splits by mass, but their VELOCITY is identical', 'different, because momentum is not conserved when things stick together'], answer: 1, why: 'Once stuck, X and Y move at the same velocity but keep their own (different) masses, so they carry different SHARES of the total momentum — X’s line and Y’s line level off at different heights, in proportion 1:4 (matching m_X:m_Y).' },
              },
              {
                t: 'steps',
                title: 'show that m_Y / m_X = 4',
                given: 'Block X (mass m_X, speed 5v) collides with stationary block Y (mass m_Y) and they stick together, moving off at common speed v. Use conservation of momentum to find the ratio m_Y / m_X.',
                steps: [
                  { line: 'p_i = m_X(5v) + m_Y(0) = 5m_Xv', why: 'Total momentum before the collision.' },
                  { line: 'p_f = (m_X + m_Y)v', why: 'After sticking together, the combined mass (m_X + m_Y) moves at the common speed v.' },
                  { line: '5m_Xv = (m_X + m_Y)v', why: 'Momentum is conserved: p_i = p_f. The v cancels from both sides.' },
                  { line: '5m_X = m_X + m_Y  →  4m_X = m_Y  →  m_Y / m_X = 4', why: 'Rearrange for the ratio. Notice v never mattered — the ratio is fixed by the collision alone.' },
                ],
                answer: 'm_Y / m_X = 4.',
              },
              {
                t: 'steps',
                title: 'the kinetic-energy ratio, for ANY m_X and v',
                given: 'Using m_Y = 4m_X (just shown), find the ratio (total KE after) / (total KE before) for this same collision.',
                steps: [
                  { line: 'KE_i = ½ m_X(5v)² = 12.5 m_Xv²', why: 'Only X is moving beforehand.' },
                  { line: 'KE_f = ½(m_X + m_Y)v² = ½(5m_X)v² = 2.5 m_Xv²', why: 'Substitute m_Y = 4m_X, so the combined mass is 5m_X.' },
                  { line: 'ratio = KE_f / KE_i = 2.5 / 12.5 = 1/5', why: 'The m_X and v² cancel completely — this ratio is 1/5 for EVERY perfectly inelastic collision of this exact shape (5v into a stationary target of 4× the mass), whatever the actual numbers.' },
                ],
                answer: 'ratio = 1/5 = 0.2. (For comparison: a perfectly ELASTIC collision would give a ratio of exactly 1 — no kinetic energy lost at all.)',
              },
            ],
          },
          {
            id: 'graph',
            kicker: 'Reading the graph',
            title: 'What the momentum-time graph is really showing',
            blocks: [
              { t: 'p', text: 'Block X makes contact with block Y at t = 20 ms. Before that, nothing has touched yet; after t = 40 ms, they are moving together.' },
              {
                t: 'table',
                head: ['Time interval', 'What’s happening', 'Force on X?'],
                rows: [
                  ['0 to 20 ms', 'X travels alone at constant speed 5v; Y sits still', 'None — X’s momentum-time line is flat'],
                  ['20 to 40 ms', 'contact: a constant force decelerates X and accelerates Y', 'Yes — opposing X’s motion, X’s line slopes down'],
                  ['40 to 60 ms', 'stuck together, moving at common speed v', 'None — X’s line is flat again, at a lower value'],
                ],
              },
              { t: 'callout', kind: 'idea', title: 'Sketch Y’s line yourself', text: 'Y’s momentum starts at 0 (stationary) and must always make the TWO lines add up to the same constant total. So while X’s line falls by some amount, Y’s line rises by exactly that same amount — a mirror image, reflected in the flat, shared final value once they move off together.' },
            ],
          },
        ],
      },
      { t: 'check', id: 'a2-11-c1', q: 'Ball X (0.24 kg, 16 m s⁻¹) hits stationary ball Y (0.48 kg). After the collision X is at rest. What is Y’s speed?', options: ['8.0 m s⁻¹', '16 m s⁻¹', '4.0 m s⁻¹'], answer: 0, why: 'p_i = p_f: 0.24 × 16 = 0.48 × v, so v = 8.0 m s⁻¹.', back: 'balls' },
      { t: 'check', id: 'a2-11-c2', q: 'In that same collision, the kinetic energy of the system…', options: ['decreases — the collision is not perfectly elastic', 'stays exactly the same — it is elastic', 'increases — energy is added by the collision'], answer: 0, why: 'KE drops from 30.72 J to 15.36 J: 15.36 J is lost, even though the balls do not stick together.', back: 'balls' },
      { t: 'check', id: 'a2-11-c3', q: 'The collision lasts 2.0 ms and brings ball X (0.24 kg, 16 m s⁻¹) to rest. The magnitude of the force on X is…', options: ['1920 N', '3.84 N', '7680 N'], answer: 0, why: 'F = Δp/t = (0.24 × 16) / 0.0020 = 1920 N.', back: 'force' },
      { t: 'check', id: 'a2-11-c4', q: 'The force ball Y exerts on ball X, compared with the force ball X exerts on ball Y, is…', options: ['equal in size, opposite in direction', 'equal in size, same direction', 'different in size, since Y has more mass'], answer: 0, why: 'Newton’s third law: an action–reaction pair is always equal and opposite, whatever the masses involved.', back: 'force' },
      { t: 'check', id: 'a2-11-c5', q: 'Block X (mass m, speed 5v) collides with a stationary block Y and they stick together, moving off at v. What is m_Y / m_X?', options: ['4', '5', '0.2'], answer: 0, why: '5m_Xv = (m_X + m_Y)v gives m_Y = 4m_X.', back: 'stick' },
      { t: 'check', id: 'a2-11-c6', q: 'For that same sticking collision, the ratio (KE after) / (KE before) is…', options: ['1/5', '1', '4'], answer: 0, why: 'KE_f/KE_i = 2.5m_Xv² / 12.5m_Xv² = 1/5, for any m_X and v.', back: 'stick' },
      { t: 'check', id: 'a2-11-c7', q: 'On the momentum–time graph, from t = 0 to t = 20 ms (before contact), the force on block X is…', options: ['zero — its momentum-time line is flat', 'constant and non-zero', 'increasing'], answer: 0, why: 'A flat line on a p–t graph means no change in momentum, so F = Δp/Δt = 0.', back: 'graph' },
      { t: 'apply', id: 'a2-11-a1', prompt: 'A 0.50 kg trolley moving at 6.0 m s⁻¹ collides with a stationary 1.0 kg trolley and they stick together. Find their common speed afterwards, and the ratio of kinetic energy after to kinetic energy before (compare it with the 1/5 result above — is it the same collision shape?).', model: 'Momentum: 0.50 × 6.0 = (0.50 + 1.0) × v, so v = 3.0/1.5 = 2.0 m s⁻¹. KE before = ½(0.50)(6.0²) = 9.0 J. KE after = ½(1.5)(2.0²) = 3.0 J. Ratio = 3.0/9.0 = 1/3. This is NOT the same shape as the worked example: here m_Y/m_X = 1.0/0.50 = 2, not 4, so a different ratio is expected — the 1/5 result only applies to a 5v-into-4×-the-mass collision specifically.', checklist: ['I used momentum conservation to find v = 2.0 m s⁻¹', 'I computed KE before (9.0 J) and after (3.0 J) separately', 'I found the ratio, 1/3', 'I checked the mass ratio (2, not 4) and explained why 1/3 ≠ 1/5'] },
      { t: 'retrieval', items: [{ from: 'A.2 · 5', q: 'Momentum is conserved for a system when…', options: ['there is no net external force', 'the collision is elastic'], answer: 0, why: 'Conservation of momentum needs zero net external force — nothing about elastic or inelastic.' }, { from: 'A.2 · 6', q: 'A collision where the objects stick together is called…', options: ['perfectly inelastic', 'perfectly elastic'], answer: 0, why: 'Sticking together, with the biggest possible KE loss for that momentum, is perfectly inelastic.' }] },
      { t: 'summary', points: ['Momentum is conserved in every collision (zero net external force); kinetic energy usually is not.', '"They don’t stick together" does not mean "elastic" — always check the KE numbers.', 'Impulse (F×t) equals the change in momentum of ONE object; the force pair on the two colliding objects is always equal and opposite (Newton’s third law), at every instant.', 'For X (speed 5v) sticking to a stationary Y: m_Y/m_X = 4 and KE_after/KE_before = 1/5 — both follow from momentum conservation alone, for any mass or speed.'], terms: [{ term: 'Perfectly inelastic collision', def: 'the colliding objects stick together and move with a common velocity; the biggest possible kinetic-energy loss for the given momentum' }, { term: 'Impulse', def: 'force × time, equal to the change in momentum it causes' }], formulas: ['p_i = p_f (momentum conservation)', 'F = Δp / t', 'KE = ½mv²'], errors: ['Assuming a collision is elastic just because nothing sticks together.', 'Using the ORIGINAL speed instead of the SQUARED speed when computing kinetic energy.', 'Forgetting that the two collision forces (on each object) are equal and opposite at every instant, not just at the start or end.'] },
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
