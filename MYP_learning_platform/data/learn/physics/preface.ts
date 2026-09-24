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
      slug: 'unit-prefixes',
      code: '0.4',
      title: 'Prefixes: kilo to femto',
      blurb: 'One word in front of a unit that says how big or small.',
      syllabus: 'Preface · Tools: SI prefixes',
      level: 'SL+HL',
      difficulty: 1,
      minutes: 8,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'The distance to school and the width of a virus are both lengths. Do we write them with the same number of zeros? No. We change the prefix.' },
        {
          t: 'deck',
          slides: [
            {
              id: 'prefix',
              kicker: 'Follow the arrows',
              title: 'Prefix',
              blocks: [
                {
                  t: 'flow',
                  title: 'A prefix is a multiplier',
                  root: {
                    title: 'Prefix',
                    note: '1000 g = 1 kg',
                    tag: 'a word in front of a unit',
                    branches: [
                      { label: 'HIGH', tone: 'plain', node: { title: 'Big multipliers', note: 'kilo, mega, giga, tera, peta' } },
                      { label: 'LOW', tone: 'plain', node: { title: 'Small multipliers', note: 'milli, micro, nano, pico, femto' } },
                    ],
                  },
                },
              ],
            },
            {
              id: 'high',
              kicker: 'High',
              title: 'Big prefixes',
              blocks: [
                {
                  t: 'arrows',
                  head: ['Prefix', 'Symbol'],
                  rows: [
                    { from: 'kilo = 10³', to: 'km', note: '(kilometre)' },
                    { from: 'mega = 10⁶', to: 'MW', note: '(megawatt)' },
                    { from: 'giga = 10⁹', to: 'GB', note: '(gigabytes)' },
                    { from: 'tera = 10¹²', to: 'TB' },
                    { from: 'peta = 10¹⁵', to: 'PB' },
                  ],
                },
              ],
            },
            {
              id: 'low',
              kicker: 'Low',
              title: 'Small prefixes',
              blocks: [
                {
                  t: 'arrows',
                  head: ['Prefix', 'Symbol'],
                  rows: [
                    { from: 'milli = 10⁻³', to: 'mm', note: '(millimetre)' },
                    { from: 'micro = 10⁻⁶', to: 'µm', note: '(micrometre)' },
                    { from: 'nano = 10⁻⁹', to: 'nm' },
                    { from: 'pico = 10⁻¹²', to: 'pm' },
                    { from: 'femto = 10⁻¹⁵', to: 'fm' },
                  ],
                },
                { t: 'callout', kind: 'warn', title: 'Capital or small?', text: 'MW (megawatt, 10⁶ W) and mW (milliwatt, 10⁻³ W) differ by a factor of 10⁹. The case of the letter matters.' },
              ],
            },
          ],
        },
        { t: 'check', id: 'p4a-c1', q: 'What does the prefix kilo mean?', options: ['× 10³', '× 10⁻³', '× 10⁶'], answer: 0, why: 'kilo = 10³, so 1 km = 1000 m.', back: 'high' },
        { t: 'check', id: 'p4a-c2', q: 'Which is the longest?', options: ['1 mm', '1 µm', '1 nm'], answer: 0, why: 'milli (10⁻³) is larger than micro (10⁻⁶), which is larger than nano (10⁻⁹).', back: 'low' },
        { t: 'check', id: 'p4a-c3', q: '4.2 µm written in metres is…', options: ['4.2 × 10⁻⁶ m', '4.2 × 10⁶ m', '4.2 × 10⁻³ m'], answer: 0, why: 'micro = 10⁻⁶, so 4.2 µm = 4.2 × 10⁻⁶ m.', back: 'low' },
        { t: 'apply', id: 'p4a-a1', prompt: 'A cell is 0.000035 m wide. Write its width using a prefix, and explain your choice.', model: '0.000035 m = 35 × 10⁻⁶ m = 35 µm. Micro means 10⁻⁶, so the prefix turns a long string of zeros into a short number.', checklist: ['I chose micro (µm)', 'I wrote 35 µm', 'I linked micro to 10⁻⁶', 'I kept the unit'] },
        { t: 'retrieval', items: [{ from: '0.3', q: 'How many SI base units are there?', options: ['5', '7', '9'], answer: 1, why: 'Seven.' }, { from: '0.3', q: 'The SI base unit of mass is…', options: ['g', 'kg', 'N'], answer: 1, why: 'The kilogram (it already has a prefix, kilo).' }] },
        { t: 'summary', points: ['A prefix multiplies a unit: 1000 g = 1 kg.', 'High: kilo 10³, mega 10⁶, giga 10⁹, tera 10¹², peta 10¹⁵.', 'Low: milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹, pico 10⁻¹², femto 10⁻¹⁵.'], terms: [{ term: 'Prefix', def: 'a word in front of a unit that multiplies it by a power of ten' }], formulas: ['1 km = 10³ m', '1 µm = 10⁻⁶ m'], errors: ['Mixing up M (mega) and m (milli).', 'Getting the sign of the exponent wrong.'] },
      ],
    },
    // ------------------------------------------------------------------ 0.5
    {
      slug: 'derived-units',
      code: '0.5',
      title: 'Derived units',
      blurb: 'Area, speed, acceleration, force and pressure, all built from base units.',
      syllabus: 'Preface · Tools: derived units',
      level: 'SL+HL',
      difficulty: 2,
      minutes: 12,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'A ruler gives metres. How do you measure how big a tabletop is, or how fast a car goes? No new unit needed: just combine the ones you have.' },
        {
          t: 'deck',
          slides: [
            {
              id: 'combine',
              kicker: 'The idea',
              title: 'Derived units',
              blocks: [
                { t: 'note', text: 'Derived units are a combination of base units.' },
                { t: 'arrows', head: ['Quantity', 'Unit'], rows: [{ from: 'length L', to: 'm' }, { from: 'area = L × b', to: 'm²', note: '10 m × 5 m = 50 m²' }, { from: 'volume = L × b × h', to: 'm³', note: '5 m × 5 m × 5 m = 125 m³' }] },
              ],
            },
            {
              id: 'motion',
              kicker: 'Motion',
              title: 'Speed and acceleration',
              blocks: [
                { t: 'arrows', head: ['Quantity', 'Unit'], rows: [{ from: 'speed = distance ÷ time', to: 'm s⁻¹', note: 'same as m/s' }, { from: 'acceleration = change in velocity ÷ time', to: 'm s⁻²', note: 'same as m/s²' }] },
                { t: 'callout', kind: 'idea', title: 'What "5 m s⁻²" means', text: 'The object changes its speed by 5 m s⁻¹ every second (here, it increases). Velocity is speed with a direction.' },
              ],
            },
            {
              id: 'force',
              kicker: 'Forces',
              title: 'Force and pressure',
              blocks: [
                { t: 'formulas', items: [{ eq: 'F = ma', legend: ['F: force (N)', 'm: mass (kg)', 'a: acceleration (m s⁻²)'] }, { eq: 'p = F / A', legend: ['p: pressure (Pa)', 'F: force (N)', 'A: area (m²)'] }] },
                { t: 'arrows', head: ['Quantity', 'Unit'], rows: [{ from: 'force = mass × a', to: 'kg m s⁻² = N', note: '2 kg × 5 m s⁻² = 10 N' }, { from: 'pressure = force ÷ area', to: 'N m⁻² = Pa', note: 'pascal' }] },
              ],
            },
          ],
        },
        { t: 'check', id: 'p5a-c1', q: 'The SI unit of area is…', options: ['m', 'm²', 'm³'], answer: 1, why: 'Area = length × breadth, so m × m = m².', back: 'combine' },
        { t: 'check', id: 'p5a-c2', q: 'An object accelerates at 5 m s⁻². This means…', options: ['it travels 5 m every second', 'its speed increases by 5 m s⁻¹ every second', 'its speed is 5 m s⁻¹'], answer: 1, why: 'Acceleration is the change in velocity per unit time.', back: 'motion' },
        { t: 'check', id: 'p5a-c3', q: 'The newton in base units is…', options: ['kg m s⁻²', 'kg m s⁻¹', 'kg m² s⁻²'], answer: 0, why: 'F = ma: kg × m s⁻² = kg m s⁻². (kg m² s⁻² is the joule.)', back: 'force' },
        { t: 'apply', id: 'p5a-a1', prompt: 'A 3 kg trolley accelerates at 4 m s⁻². Find the force on it and give the unit in two ways.', model: 'F = ma = 3 kg × 4 m s⁻² = 12 N. In base units, 12 kg m s⁻².', checklist: ['I used F = ma', 'I substituted with units', 'The answer is 12', 'I gave N and kg m s⁻²'] },
        { t: 'retrieval', items: [{ from: '0.4', q: 'kilo means…', options: ['10³', '10⁻³', '10⁶'], answer: 0, why: 'kilo = 10³.' }, { from: '0.3', q: 'Which is NOT a base unit?', options: ['metre', 'newton', 'second'], answer: 1, why: 'The newton is derived.' }] },
        { t: 'summary', points: ['Derived units combine base units.', 'Area m², volume m³, speed m s⁻¹, acceleration m s⁻².', 'Force: N = kg m s⁻². Pressure: Pa = N m⁻².'], terms: [{ term: 'Newton (N)', def: 'the unit of force, kg m s⁻²' }, { term: 'Pascal (Pa)', def: 'the unit of pressure, N m⁻²' }], formulas: ['F = ma', 'p = F / A'], errors: ['Writing m for an area.', 'Confusing the newton (kg m s⁻²) with the joule (kg m² s⁻²).'] },
      ],
    },
    // ------------------------------------------------------------------ 0.6
    {
      slug: 'converting-units',
      code: '0.6',
      title: 'Converting units',
      blurb: 'Worked examples, then practise with fresh numbers.',
      syllabus: 'Preface · Tools: unit conversion',
      level: 'SL+HL',
      difficulty: 2,
      minutes: 15,
      access: 'free',
      blocks: [
        { t: 'hook', text: 'A speedometer says 36 km/h. A physics problem needs m s⁻¹. Same speed, different unit. How do you switch without slipping?' },
        {
          t: 'deck',
          slides: [
            {
              id: 'method',
              kicker: 'The method',
              title: 'Write what each unit is worth first',
              blocks: [
                { t: 'arrows', head: ['Fact', 'In SI'], rows: [{ from: '1 km', to: '1000 m' }, { from: '1 h', to: '3600 s' }, { from: '1 cm', to: '10⁻² m', note: 'so 1 cm² = 10⁻⁴ m²' }] },
                { t: 'note', text: 'Convert the length first, then square or cube.' },
              ],
            },
            {
              id: 'speed',
              kicker: 'Worked example 1',
              title: 'Speed',
              blocks: [{ t: 'steps', title: 'km/h to m s⁻¹', given: 'Convert 36 km/h to m s⁻¹.', steps: [{ line: '1 km = 1000 m, 1 h = 3600 s', why: 'Write what each unit is worth in SI first.' }, { line: '36 km/h = 36 × 1000 m / 3600 s', why: 'Replace km with 1000 m and h with 3600 s.' }, { line: '= 36 000 / 3 600', why: 'Multiply the top, multiply the bottom.' }, { line: '= 10 m s⁻¹', why: 'Divide. The unit is now metres per second.' }], answer: '10 m s⁻¹' }],
            },
            {
              id: 'volume',
              kicker: 'Worked example 2',
              title: 'Volume',
              blocks: [{ t: 'steps', title: 'cm³ to m³', given: 'A cube has sides of 5 cm. Find its volume in m³.', steps: [{ line: '5 cm = 5 × 10⁻² m = 0.05 m', why: 'Convert the length to metres BEFORE working out the volume.' }, { line: 'V = L × b × h = (0.05 m)³', why: 'A volume is length × breadth × height. All three are 0.05 m.' }, { line: '= (5/100)³ = 125 / 10⁶', why: '5³ = 125 and 100³ = 10⁶.' }, { line: '= 125 × 10⁻⁶ = 1.25 × 10⁻⁴ m³', why: 'Write in standard form: 125 = 1.25 × 10².' }], answer: '1.25 × 10⁻⁴ m³' }],
            },
            {
              id: 'pressure',
              kicker: 'Worked example 3',
              title: 'Pressure',
              blocks: [{ t: 'steps', title: 'cm² to m²', given: 'A force of 100 N acts on an area of 10 cm². Find the pressure in Pa.', steps: [{ line: '10 cm² = 10 × (10⁻² m)² = 10 × 10⁻⁴ m²', why: 'The unit is squared, so the conversion factor is squared too.' }, { line: '= 10⁻³ m²', why: '10 × 10⁻⁴ = 10⁻³.' }, { line: 'p = F / A = 100 N / 10⁻³ m²', why: 'Pressure is force divided by area, in SI units.' }, { line: '= 1 × 10⁵ N m⁻²', why: '100 / 10⁻³ = 10² × 10³ = 10⁵.' }], answer: '1 × 10⁵ Pa' }],
            },
            {
              id: 'try',
              kicker: 'Your turn',
              title: 'Convert with fresh numbers',
              blocks: [{ t: 'widget', id: 'unit-converter', title: 'Unit converter', idea: 'Every problem is new. Wrong answers get feedback on the usual slip.', predict: { q: 'Predict: 1 cm² is how many m²?', options: ['10⁻²', '10⁻⁴', '10⁻³'], answer: 1, why: '1 cm = 10⁻² m, so 1 cm² = (10⁻²)² = 10⁻⁴ m².' } }],
            },
          ],
        },
        { t: 'check', id: 'p6-c1', q: '72 km/h in m s⁻¹ is…', options: ['20', '72', '259'], answer: 0, why: '72 × 1000 / 3600 = 20 m s⁻¹.', back: 'speed' },
        { t: 'check', id: 'p6-c2', q: '250 cm² in m² is…', options: ['0.025 m²', '2.5 m²', '2.5 × 10⁻⁴ m²'], answer: 0, why: '250 × 10⁻⁴ = 0.025 m².', back: 'pressure' },
        { t: 'check', id: 'p6-c3', q: '2 h in seconds is…', options: ['120 s', '7200 s', '3600 s'], answer: 1, why: '2 × 3600 = 7200 s.', back: 'method' },
        { t: 'apply', id: 'p6-a1', prompt: 'Convert 500 cm³ to m³, and explain why the factor is 10⁻⁶ and not 10⁻².', model: '500 cm³ = 500 × 10⁻⁶ m³ = 5 × 10⁻⁴ m³. Each length converts by 10⁻², and a volume has three lengths, so the factor is (10⁻²)³ = 10⁻⁶.', checklist: ['I got 5 × 10⁻⁴ m³', 'I used 10⁻⁶', 'I explained it as cubing 10⁻²', 'I kept the unit'] },
        { t: 'retrieval', items: [{ from: '0.5', q: 'Pressure is measured in…', options: ['N', 'Pa', 'J'], answer: 1, why: 'Pascal: N m⁻².' }, { from: '0.4', q: 'micro means…', options: ['10⁻⁶', '10⁶', '10⁻³'], answer: 0, why: 'micro = 10⁻⁶.' }] },
        { t: 'summary', points: ['Write what each unit is worth in SI first.', 'Convert lengths before squaring or cubing.', 'cm² → m²: × 10⁻⁴. cm³ → m³: × 10⁻⁶. km/h → m s⁻¹: ÷ 3.6.'], terms: [{ term: 'Conversion factor', def: 'what one unit is worth in another' }], formulas: ['1 cm² = 10⁻⁴ m²', '1 cm³ = 10⁻⁶ m³', 'v(m s⁻¹) = v(km/h) ÷ 3.6'], errors: ['Using 10⁻² for an area or a volume.', 'Multiplying instead of dividing when going from km/h to m s⁻¹.'] },
      ],
    },
    // ------------------------------------------------------------------ 0.7
    {
      slug: 'what-makes-things-move',
      code: '0.7',
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
    // ------------------------------------------------------------------ 0.8
    {
      slug: 'themes-and-assessment',
      code: '0.8',
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
        { t: 'retrieval', items: [{ from: '0.7', q: 'How many fundamental forces are there?', options: ['2', '4', '7'], answer: 1, why: 'Four.' }, { from: '0.3', q: 'The SI base unit of mass is…', options: ['g', 'kg', 'N'], answer: 1, why: 'The kilogram.' }] },
        { t: 'summary', points: ['Five themes: A to E.', 'Papers 1 and 2 are 80%, the IA is 20%.', 'The EE is a core part of the Diploma.'], terms: [{ term: 'IA', def: 'internal assessment, marked by your teacher' }], formulas: [], errors: [] },
      ],
    },
  ],
}
