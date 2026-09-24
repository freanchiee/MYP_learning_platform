import type { Block, FlowNode, Module } from './types'

// Built from Class 1 notes (Intro to Physics) plus the teacher's "Motion & Measurement" and
// "What factors lead to motion" articles. Original teacher material. The notes' checkboxes,
// arrows and trees are kept as visual blocks (matrix, flow, arrows), not turned into paragraphs.

const MEASURABLE_FLOW: FlowNode = {
  q: 'Is everything measurable? Can it be measured?',
  branches: [
    {
      label: 'YES',
      tone: 'yes',
      node: {
        title: 'Physical quantity',
        tag: 'independent of the person',
        boxes: [
          { text: 'Magnitude / size', kind: 'yes' },
          { text: 'Unit', kind: 'yes' },
          { text: 'Direction (optional)', kind: 'opt' },
        ],
        bracket: { count: 2, label: 'scalar' },
        note: 'add a direction and it becomes a vector',
      },
    },
    {
      label: 'NO',
      tone: 'no',
      node: {
        title: 'Rating / Index',
        tag: 'emotional quantities',
        note: 'it depends on the person. Pain index: mosquito 5, snake 90',
      },
    },
  ],
}

const FORCE_FLOW: FlowNode = {
  q: 'Are the forces on the object balanced?',
  branches: [
    { label: 'YES', tone: 'yes', node: { title: 'Motion does not change', note: 'at rest, or steady motion' } },
    { label: 'NO', tone: 'no', node: { title: 'Motion changes', note: 'the bigger the imbalance, the more rapid the change' } },
  ],
}

const ASSESSMENT_FLOW: FlowNode = {
  title: 'Assessment',
  tag: 'Papers 1 + 2 = 80%',
  branches: [
    { label: 'PAPER 1', tone: 'plain', node: { title: 'Paper 1', boxes: [{ text: 'A: multiple choice', kind: 'yes' }, { text: 'B: data-based questions', kind: 'yes' }] } },
    { label: 'PAPER 2', tone: 'plain', node: { title: 'Paper 2', note: 'structured questions, from 1–6 marks up to a whole question worth 20' } },
    { label: 'IA · 20%', tone: 'plain', node: { title: 'Internal assessment', note: 'a mini research paper. Search online, follow your curiosity', tag: 'EE = core point' } },
  ],
}

const seven = (): Block => ({
  t: 'arrows',
  head: ['Unit', 'Measures'],
  rows: [
    { from: 'm', to: 'length' },
    { from: 'kg', to: 'mass' },
    { from: 's', to: 'time' },
    { from: 'A', to: 'electric current', note: '(amperes)' },
    { from: 'K', to: 'temperature', note: '(kelvin)' },
    { from: 'mol', to: 'amount of particles' },
    { from: 'cd', to: 'intensity of light' },
  ],
})

export const PREFACE: Module = {
  slug: 'preface',
  code: '0',
  title: 'Preface to the syllabus',
  theme: 'Welcome to Physics',
  source: 'Class 1 · Intro to Physics',
  intro:
    'Before any equation: what physics studies, what "measurable" means, the units everything is built from, what makes things move, and the map of the whole course.',
  lessons: [
    // ------------------------------------------------------------------ 0.1
    {
      slug: 'what-is-physics',
      code: '0.1',
      title: 'What is physics?',
      blurb: 'Matter, energy, and how they interact.',
      syllabus: 'Preface · Nature of physics',
      level: 'SL+HL',
      difficulty: 1,
      minutes: 12,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'Everything you can touch, see, hear or feel is either stuff, or something stuff does. Which two words cover all of it?' },
        {
          t: 'deck',
          slides: [
            {
              id: 'study',
              kicker: 'The big idea',
              title: 'Physics is the study of…',
              blocks: [
                { t: 'arrows', rows: [{ from: 'MATTER', to: 'ENERGY (J)', note: 'and how they interact with each other and with themselves' }] },
                { t: 'note', text: "It's better to have questions that cannot be answered than answers that cannot be questioned." },
              ],
            },
            {
              id: 'matter',
              kicker: 'Tick the boxes',
              title: 'Matter, space, black holes and waves',
              blocks: [
                {
                  t: 'matrix',
                  title: 'Which of these have energy, mass and volume?',
                  idea: 'Fill in every box yourself, then check.',
                  cols: [
                    { head: 'Matter', ex: 'a book, water' },
                    { head: 'Space', sub: 'vacuum', ex: 'a jar with the air pumped out' },
                    { head: 'Black hole', ex: 'B.H., a nucleus' },
                    { head: 'Wave', ex: 'light, sound' },
                  ],
                  rows: [
                    { label: 'Energy (J)', cells: [{ v: 'yes' }, { v: 'no' }, { v: 'yes' }, { v: 'yes' }] },
                    { label: 'Mass (kg)', cells: [{ v: 'yes' }, { v: 'no' }, { v: 'yes' }, { v: 'no' }] },
                    { label: 'Volume (m³)', cells: [{ v: 'yes' }, { v: 'yes' }, { v: 'tiny' }, { v: 'no' }] },
                  ],
                },
              ],
            },
            {
              id: 'states',
              kicker: 'States of matter',
              title: 'Solid, liquid, gas… and beyond',
              blocks: [
                {
                  t: 'pills',
                  groups: [
                    { label: 'At school: 3 states', items: ['Solid', 'Liquid', 'Gas'] },
                    { label: 'And more…', tone: 'muted', items: ['Plasma (the Sun)', 'Bose–Einstein condensate', 'Fermionic condensate', 'Exotic states'] },
                  ],
                },
              ],
            },
            {
              id: 'wave',
              kicker: 'Energy on the move',
              title: 'What is a wave?',
              blocks: [
                { t: 'pills', groups: [{ label: 'A wave is a…', items: ['disturbance', 'fluctuation', 'oscillation', 'ripple'] }, { label: 'For example', tone: 'muted', items: ['Light', 'Sound'] }] },
                { t: 'callout', kind: 'note', title: 'Careful', text: 'Sound needs a material to travel through. Light does not. "No mass, no volume" is a first picture, refined later.' },
              ],
            },
            {
              id: 'link',
              kicker: 'The link',
              title: 'Two equations join matter and energy',
              blocks: [
                { t: 'formulas', items: [{ eq: 'E = mc²', legend: ['E: energy (J)', 'm: mass (kg)', 'c: speed of light'] }, { eq: 'E = hf', legend: ["h: Planck's constant", 'f: frequency (Hz)'] }] },
                { t: 'widget', id: 'energy-generator', title: 'Try it: energy from mass', idea: 'A tiny mass is an enormous energy, because c² is enormous. Every problem has fresh numbers.', predict: { q: 'Predict: 1 kg of mass completely converted to energy. About how many joules?', options: ['About 3 × 10⁸ J', 'About 9 × 10¹⁶ J', 'About 6 × 10⁻³⁴ J'], answer: 1, why: 'E = mc² = 1 × (3 × 10⁸)² = 9 × 10¹⁶ J.' } },
              ],
            },
          ],
        },
        { t: 'check', id: 'p1-c1', q: 'Which has volume but no mass?', options: ['A black hole', 'A vacuum (empty space)', 'A block of wood'], answer: 1, why: 'A vacuum takes up space but holds almost no matter.', back: 'matter' },
        { t: 'check', id: 'p1-c2', q: 'Which unit belongs to energy?', options: ['kg', 'm³', 'J'], answer: 2, why: 'Energy is measured in joules.', back: 'study' },
        { t: 'check', id: 'p1-c3', q: 'A wave is best described as…', options: ['a piece of matter moving', 'a disturbance that carries energy', 'an empty region of space'], answer: 1, why: 'A wave is a disturbance (oscillation, ripple) that carries energy.', back: 'wave' },
        { t: 'apply', id: 'p1-a1', prompt: 'In your own words, say what physics studies and give one example each of matter and energy.', model: 'Physics studies matter and energy and how they interact. Matter has mass and volume, for example a book (0.5 kg). Energy is measured in joules and can be carried by waves, for example the light from a lamp.', checklist: ['I named matter and energy', 'I gave a correct example of each', 'I mentioned how they interact', 'I used a correct unit'] },
        { t: 'summary', points: ['Physics studies matter and energy and how they interact.', 'Matter has mass (kg) and volume (m³).', 'Energy is measured in J and travels as waves.', 'E = mc² and E = hf connect them.'], terms: [{ term: 'Matter', def: 'has mass and takes up space' }, { term: 'Energy', def: 'measured in joules' }, { term: 'Wave', def: 'a disturbance that transfers energy' }], formulas: ['E = mc²', 'E = hf'], errors: ['Forgetting to square c in E = mc².', 'Mixing up kg (mass) and J (energy).'] },
      ],
    },
    // ------------------------------------------------------------------ 0.2
    {
      slug: 'can-it-be-measured',
      code: '0.2',
      title: 'Can it be measured?',
      blurb: 'Physical quantities, ratings, scalars and vectors.',
      syllabus: 'Preface · Measurement',
      level: 'SL+HL',
      difficulty: 1,
      minutes: 12,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'How much does a mosquito bite hurt? Ask five friends, get five numbers. Ask five friends the mass of one book, get one. Why?' },
        {
          t: 'deck',
          slides: [
            { id: 'test', kicker: 'Follow the arrows', title: 'Can it be measured?', blocks: [{ t: 'flow', title: 'The measurability test', root: MEASURABLE_FLOW }] },
            { id: 'sort', kicker: 'Your turn', title: 'Sort it', blocks: [{ t: 'widget', id: 'measurable-sorter', title: 'Physical quantity or rating?', idea: 'Would everyone get the same value?' }] },
            {
              id: 'anatomy',
              kicker: 'Scalar or vector',
              title: 'Does it need a direction?',
              blocks: [
                { t: 'arrows', head: ['It has', 'So it is a'], rows: [{ from: 'size + unit', to: 'SCALAR', note: 'e.g. 3 kg, 12 s' }, { from: 'size + unit + direction', to: 'VECTOR', note: 'e.g. 10 N to the right' }] },
                { t: 'widget', id: 'scalar-vector-sorter', title: 'Scalar or vector?', idea: 'If the description is incomplete without a direction, it is a vector.' },
              ],
            },
          ],
        },
        { t: 'check', id: 'p2-c1', q: 'Which is a physical quantity?', options: ['How scary a snake looks', 'The mass of a snake', 'How much you like snakes'], answer: 1, why: 'Mass gives the same value for everyone. The other two depend on the person.', back: 'test' },
        { t: 'check', id: 'p2-c2', q: '"20 m s⁻¹" is…', options: ['a size and a unit, so a scalar description', 'always a vector', 'not a physical quantity'], answer: 0, why: 'It has size and unit. Add "to the east" and it becomes a vector description.', back: 'anatomy' },
        { t: 'check', id: 'p2-c3', q: 'What must every physical quantity have?', options: ['A number and a unit', 'A number and a direction', 'A unit and a rating'], answer: 0, why: 'Size (number) and unit. Direction is optional.', back: 'anatomy' },
        { t: 'apply', id: 'p2-a1', prompt: 'A friend says "the concert was 9 out of 10". Is that a physical quantity? Explain.', model: 'No. It is a rating that depends on the person, so someone else could give a different score. A physical quantity, like the mass of a speaker, is the same for everyone and is written with a number and a unit.', checklist: ['I said it is not physical', 'I said it depends on the person', 'I contrasted with something measurable', 'I mentioned number and unit'] },
        { t: 'retrieval', items: [{ from: '0.1', q: 'Which unit belongs to energy?', options: ['kg', 'J', 'm³'], answer: 1, why: 'Joules.' }, { from: '0.1', q: 'In E = mc², which quantity is squared?', options: ['m', 'c', 'E'], answer: 1, why: 'The speed of light, c.' }] },
        { t: 'summary', points: ['Physical quantity: measurable, independent of the person.', 'It needs a number and a unit.', 'Direction is optional: with it, a vector; without, a scalar.', 'Ratings and indices are not physical quantities.'], terms: [{ term: 'Scalar', def: 'size and unit only' }, { term: 'Vector', def: 'size, unit and direction' }, { term: 'Rating / index', def: 'a personal score' }], formulas: [], errors: ['Saying a scalar has a direction.', 'Writing a number without a unit.'] },
      ],
    },
    // ------------------------------------------------------------------ 0.3
    {
      slug: 'si-base-units',
      code: '0.3',
      title: 'The seven base units',
      blurb: 'The units that every other unit is built from.',
      syllabus: 'Preface · Tools: SI units',
      level: 'SL+HL',
      difficulty: 1,
      minutes: 10,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'Thousands of units exist. Which few are truly fundamental?' },
        {
          t: 'deck',
          slides: [
            { id: 'seven', kicker: 'Unit → quantity', title: 'Seven base units', blocks: [seven()] },
            {
              id: 'derived',
              kicker: 'Also in your notes',
              title: 'Useful, but derived',
              blocks: [
                { t: 'arrows', head: ['Unit', 'Measures'], rows: [{ from: 'lux', to: 'intensity of light', note: 'built from the candela' }, { from: 'rad', to: 'angle', note: 'dimensionless' }, { from: '°C', to: 'temperature', note: 'the base unit is K' }] },
                { t: 'callout', kind: 'warn', title: 'Refined from the class notes', text: 'The base unit of light intensity is the candela. Lux and the radian are derived. Degrees Celsius is common, but the kelvin is the base unit.' },
              ],
            },
            { id: 'train', kicker: 'Your turn', title: 'Match them', blocks: [{ t: 'widget', id: 'si-trainer', title: 'Quantity → base unit', idea: 'Pick the base unit for each quantity.' }] },
          ],
        },
        { t: 'check', id: 'p3-c1', q: 'The SI base unit of temperature is…', options: ['°C', 'K', 'J'], answer: 1, why: 'The kelvin, K.', back: 'derived' },
        { t: 'check', id: 'p3-c2', q: 'Which is NOT a base unit?', options: ['ampere', 'kilogram', 'joule'], answer: 2, why: 'The joule is derived: 1 J = 1 kg m² s⁻².', back: 'seven' },
        { t: 'check', id: 'p3-c3', q: 'How many SI base units are there?', options: ['5', '7', '9'], answer: 1, why: 'Seven: m, kg, s, A, K, mol, cd.', back: 'seven' },
        { t: 'retrieval', items: [{ from: '0.2', q: 'A physical quantity always needs…', options: ['a direction', 'a number and a unit', 'a rating'], answer: 1, why: 'A number and a unit.' }, { from: '0.1', q: 'Volume is measured in…', options: ['m³', 'kg', 'J'], answer: 0, why: 'Cubic metres.' }] },
        { t: 'summary', points: ['Seven SI base units.', 'All other units (J, N …) are built from them.', 'Lux and the radian are derived.'], terms: [{ term: 'Base unit', def: 'one of the seven fundamental SI units' }, { term: 'Derived unit', def: 'made by combining base units' }], formulas: ['1 J = 1 kg m² s⁻²'], errors: ['Treating °C as the base unit of temperature.', 'Listing the joule as a base unit.'] },
      ],
    },
    // ------------------------------------------------------------------ 0.4
    {
      slug: 'what-makes-things-move',
      code: '0.4',
      title: 'What makes things move?',
      blurb: 'Unbalanced forces and the four fundamental forces.',
      syllabus: 'Preface · Forces and motion overview',
      level: 'SL+HL',
      difficulty: 2,
      minutes: 14,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'A block sits still on a level table. Tilt the table and it slides. Nothing was added. What changed?' },
        {
          t: 'deck',
          slides: [
            { id: 'imbalance', kicker: 'Follow the arrows', title: 'Balanced or not?', blocks: [{ t: 'flow', title: 'Forces and motion', root: FORCE_FLOW }] },
            { id: 'tilt', kicker: 'Explore', title: 'Tilt the table', blocks: [{ t: 'widget', id: 'tilt-forces', title: 'Pull down the slope versus friction', idea: 'It slides when the pull beats the friction. The bigger the imbalance, the bigger the acceleration.', predict: { q: 'Predict: with a rougher surface, the block starts sliding at…', options: ['a smaller angle', 'a larger angle', 'the same angle'], answer: 1, why: 'More friction can hold against a bigger pull, so you must tilt further.' } }] },
            { id: 'four', kicker: 'Fundamental forces', title: 'Four forces, not one', blocks: [{ t: 'note', text: 'May the Forces be with you: there are 4 of them.' }, { t: 'widget', id: 'four-forces', title: 'Meet the four forces', idea: 'Each acts on something different, over a different range.' }] },
          ],
        },
        { t: 'check', id: 'p4-c1', q: 'When does an object\'s motion change?', options: ['When the forces on it are balanced', 'When the forces on it are unbalanced', 'Never'], answer: 1, why: 'Unbalanced forces change motion.', back: 'imbalance' },
        { t: 'check', id: 'p4-c2', q: 'Which force holds the nucleus together?', options: ['Gravitational', 'Strong nuclear', 'Electromagnetic'], answer: 1, why: 'The strong nuclear force acts like a glue over about 10⁻¹⁵ m.', back: 'four' },
        { t: 'check', id: 'p4-c3', q: 'Gravity acts between…', options: ['any two masses', 'only charged objects', 'only nuclei'], answer: 0, why: 'Any matter, because matter has mass.', back: 'four' },
        { t: 'apply', id: 'p4-a1', prompt: 'A cup slides off a tilted tray. Use forces to explain why it moves.', model: 'On the level tray the forces were balanced, so the cup stayed at rest. Tilting made the pull of gravity down the slope larger than the friction, so the forces became unbalanced and the cup moved.', checklist: ['I said the forces became unbalanced', 'I named gravity and friction', 'I linked imbalance to motion', 'I compared before and after'] },
        { t: 'retrieval', items: [{ from: '0.3', q: 'Which is a base unit?', options: ['newton', 'metre', 'joule'], answer: 1, why: 'The metre.' }, { from: '0.2', q: 'A vector needs…', options: ['a direction as well', 'only a unit', 'a rating'], answer: 0, why: 'Size, unit and direction.' }] },
        { t: 'summary', points: ['Unbalanced forces change motion.', 'There are four fundamental forces.', 'Bigger imbalance, more rapid change.'], terms: [{ term: 'Force', def: 'a push or a pull' }, { term: 'Unbalanced', def: 'the forces do not cancel' }], formulas: [], errors: ['Thinking constant speed needs a force.', 'Forgetting friction.'] },
      ],
    },
    // ------------------------------------------------------------------ 0.5
    {
      slug: 'themes-and-assessment',
      code: '0.5',
      title: 'The map: themes and assessment',
      blurb: 'The five themes and how you are assessed.',
      syllabus: 'Preface · Course overview',
      level: 'SL+HL',
      difficulty: 1,
      minutes: 8,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'You know what physics is. Here is the whole road map.' },
        {
          t: 'deck',
          slides: [
            {
              id: 'themes',
              kicker: '5 themes',
              title: 'Themes A to E',
              blocks: [
                {
                  t: 'arrows',
                  head: ['Theme', 'Topic'],
                  rows: [
                    { from: 'A', to: 'Space, time and motion', note: 'Mechanics · we start here, A1' },
                    { from: 'B', to: 'The particulate nature of matter', note: 'Thermal physics + Electricity' },
                    { from: 'C', to: 'Wave behaviour', note: 'Waves' },
                    { from: 'D', to: 'Fields' },
                    { from: 'E', to: 'Nuclear and quantum physics', note: 'Nuclear physics' },
                  ],
                },
              ],
            },
            { id: 'assessment', kicker: 'Follow the arrows', title: 'How you are assessed', blocks: [{ t: 'flow', title: 'Assessment', root: ASSESSMENT_FLOW }, { t: 'callout', kind: 'note', title: 'Exact weightings', text: 'Papers 1 and 2 together are 80%. The exact split is in the official IB subject guide.' }] },
          ],
        },
        { t: 'check', id: 'p5-c1', q: 'How many themes are there?', options: ['3', '5', '7'], answer: 1, why: 'Five, A to E.', back: 'themes' },
        { t: 'check', id: 'p5-c2', q: 'Which theme holds motion and forces?', options: ['Theme A', 'Theme C', 'Theme E'], answer: 0, why: 'Theme A: Space, time and motion.', back: 'themes' },
        { t: 'check', id: 'p5-c3', q: 'The internal assessment is a…', options: ['multiple-choice test', 'mini research paper', 'oral exam'], answer: 1, why: 'An investigation written up as a mini research paper.', back: 'assessment' },
        { t: 'retrieval', items: [{ from: '0.4', q: 'How many fundamental forces are there?', options: ['2', '4', '7'], answer: 1, why: 'Four.' }, { from: '0.3', q: 'The SI base unit of mass is…', options: ['g', 'kg', 'N'], answer: 1, why: 'The kilogram.' }] },
        { t: 'summary', points: ['Five themes: A to E.', 'Papers 1 and 2 are 80%, the IA is 20%.', 'The EE is a core part of the Diploma.'], terms: [{ term: 'IA', def: 'internal assessment, marked by your teacher' }], formulas: [], errors: [] },
      ],
    },
  ],
}
