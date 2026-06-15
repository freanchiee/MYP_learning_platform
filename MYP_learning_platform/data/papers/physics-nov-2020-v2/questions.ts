import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2020 · VARIANT 2  (isomorphic to physics-nov-2020)
// Same crit, command terms, marks (task+question+total), tags, widgets and task
// structure. Only the real-world context, numbers and artefacts change.
// Contexts differ from BOTH the source AND variant 1.
//   Q1 Thermoregulation : foxes/dog  → walrus / camel / jackrabbit / sweating horse
//   Q2 GPE & power      : hill-climb  → tower-crane lifting a load (industrial)
//   Q3 Light & space    : night sky   → observatory + GPS satellites (space)
//   Q4 Electromagnet B  : Kibble bal. → security door-lock electromagnet (everyday)
//   Q5 Electromagnet C  : paper clips → iron nails
//   Q6 Capillary C      : tubes/redwood → capillary tubes set (inverse 1/d)
//   Q7 Capillary design : temperature → detergent (surfactant) concentration
//   Q8 Maglev A/D       : maglev      → high-speed maglev test line (transport)
//   Q9 Transport eval D : 4 options   → 4 intercity (500 km) transport options
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2020-v2',
  subject: 'Physics',
  session: 'November',
  year: 2020,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─── Q1: Thermoregulation in animals (8 marks, Criterion A) ───
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Thermal Physics — Thermoregulation',
    marks: 8,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['heat transfer', 'conduction', 'convection', 'radiation', 'evaporation'], level: 'developing' },
    stem: 'Animals must keep their body temperature within a narrow range, a process called thermoregulation. This question is about the physics of heat transfer that animals use to stay warm or to cool down.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="hot1b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f08c00"/></marker></defs><rect width="600" height="230" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Heat transfer in animals</text><g><ellipse cx="120" cy="135" rx="60" ry="38" fill="#9a6b4f"/><circle cx="70" cy="120" r="22" fill="#9a6b4f"/><path d="M62,138 l-6,26 l6,-2 Z" fill="#e8e0d4"/><path d="M74,138 l-2,28 l6,-4 Z" fill="#e8e0d4"/><text x="120" y="196" font-size="11" text-anchor="middle" fill="#6b4a36">Walrus (blubber)</text></g><g><ellipse cx="320" cy="120" rx="50" ry="30" fill="#d9b070"/><path d="M300,92 q4,-26 16,-2" fill="#d9b070"/><circle cx="280" cy="108" r="16" fill="#d9b070"/><line x1="320" y1="150" x2="320" y2="185" stroke="#b08c4f" stroke-width="3"/><line x1="300" y1="150" x2="300" y2="185" stroke="#b08c4f" stroke-width="3"/><text x="320" y="206" font-size="11" text-anchor="middle" fill="#a8721a">Camel</text></g><g><ellipse cx="500" cy="135" rx="36" ry="26" fill="#cbb89a"/><path d="M478,112 l-10,-40 l10,4 l6,34 Z" fill="#cbb89a" stroke="#9a8a6c"/><path d="M506,112 l10,-40 l-10,4 l-6,34 Z" fill="#cbb89a" stroke="#9a8a6c"/><line x1="470" y1="80" x2="455" y2="60" stroke="#f08c00" stroke-width="2" marker-end="url(#hot1b)"/><text x="500" y="186" font-size="11" text-anchor="middle" fill="#8a7a5c">Jackrabbit</text></g></svg>',
      },
      caption: 'Animals use conduction, convection, radiation and evaporation to control their body temperature.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** which of these animals is best adapted to staying warm in a cold polar climate.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A — Jackrabbit: very large thin ears, short pale fur', 'B — Camel: short coat, long thin legs', 'C — Walrus: thick layer of blubber under the skin', 'D — Greyhound: short smooth coat, lean body'],
        ph: 'Select one option.',
      },
      {
        label: 'b',
        text: 'Walruses have a very thick layer of blubber (fat) beneath their skin. **Outline** how this feature helps walruses keep warm in cold Arctic waters.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="hl1b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f08c00"/></marker></defs><rect width="460" height="220" fill="#ffffff"/><text x="230" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cross-section of walrus skin</text><rect x="60" y="50" width="280" height="22" fill="#c0392b"/><text x="350" y="65" font-size="11" fill="#7a1f15">body core (warm)</text><rect x="60" y="72" width="280" height="46" fill="#f4d35e"/><text x="350" y="99" font-size="11" fill="#9a7d0f">blubber / fat</text><rect x="60" y="118" width="280" height="12" fill="#7a5a44"/><text x="350" y="128" font-size="11" fill="#7a5a44">skin</text><g stroke="#f08c00" stroke-width="2"><line x1="120" y1="50" x2="120" y2="155" marker-end="url(#hl1b)"/><line x1="200" y1="50" x2="200" y2="155" marker-end="url(#hl1b)"/><line x1="280" y1="50" x2="280" y2="155" marker-end="url(#hl1b)"/></g><text x="200" y="185" font-size="11" text-anchor="middle" fill="#f08c00">heat flows outwards (slowly through blubber)</text></svg>',
          },
          caption: 'The thick blubber layer beneath a walrus\'s skin slows the flow of heat to the cold water.',
        },
        ph: 'Describe the physics of how the blubber layer reduces heat loss (2 points).',
      },
      {
        label: 'c',
        text: 'The jackrabbit lives in the hot North American desert, while the Arctic hare lives in the freezing far north.\n\n**Outline** how the large ears of the jackrabbit **and** the white fur of the Arctic hare help with thermoregulation. You should use scientific language in your answer.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="hf1b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f08c00"/></marker></defs><rect width="560" height="220" fill="#ffffff"/><g><ellipse cx="150" cy="145" rx="44" ry="30" fill="#cbb89a"/><path d="M128,120 l-16,-58 l14,4 l8,52 Z" fill="#cbb89a" stroke="#9a8a6c"/><path d="M172,120 l16,-58 l-14,4 l-8,52 Z" fill="#cbb89a" stroke="#9a8a6c"/><line x1="112" y1="76" x2="92" y2="54" stroke="#f08c00" stroke-width="2" marker-end="url(#hf1b)"/><line x1="188" y1="76" x2="208" y2="54" stroke="#f08c00" stroke-width="2" marker-end="url(#hf1b)"/><text x="150" y="196" font-size="11" text-anchor="middle" fill="#8a7a5c">Jackrabbit — large ears</text></g><g><ellipse cx="410" cy="145" rx="44" ry="32" fill="#f2f5f7" stroke="#c5ced4"/><path d="M392,120 l-8,-32 l8,2 l6,28 Z" fill="#f2f5f7" stroke="#c5ced4"/><path d="M428,120 l8,-32 l-8,2 l-6,28 Z" fill="#f2f5f7" stroke="#c5ced4"/><circle cx="398" cy="143" r="3.5" fill="#2c3e50"/><text x="410" y="196" font-size="11" text-anchor="middle" fill="#5b6b78">Arctic hare — white fur</text></g></svg>',
          },
          caption: 'The jackrabbit (left) and Arctic hare (right) are adapted to opposite climates.',
        },
        ph: 'Address both features: (1) large ears and conduction/convection/radiation, (2) white fur and radiation.',
      },
      {
        label: 'd',
        text: 'When a horse gets too hot during exercise, it sweats, allowing water to evaporate from its skin.\n\n**Explain** how the process of evaporation leads to a cooling effect in a horse.',
        marks: 3,
        ph: 'Use particle theory: which particles escape, what happens to those left behind, and why this cools the horse.',
      },
    ],
  },

  // ─── Q2: Tower crane / energy (9 marks, Criterion A) ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power — Tower Crane',
    marks: 9,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'work-energy', topics: ['gravitational potential energy', 'Sankey diagrams', 'power'], level: 'developing' },
    stem: 'On a construction site, a tall tower crane lifts heavy steel and concrete loads to the upper floors of a building. The crane\'s electric motor does work against gravity to raise each load.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bldg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfd8df"/><stop offset="1" stop-color="#9aa6b0"/></linearGradient></defs><rect width="600" height="300" fill="#ffffff"/><rect x="0" y="280" width="600" height="20" fill="#8a8278"/><rect x="380" y="120" width="120" height="160" fill="url(#bldg2)" stroke="#7d8a96"/><g stroke="#b6c4cf"><line x1="410" y1="120" x2="410" y2="280"/><line x1="440" y1="120" x2="440" y2="280"/><line x1="470" y1="120" x2="470" y2="280"/></g><rect x="120" y="60" width="16" height="220" fill="#f08c00"/><g stroke="#c97a10" stroke-width="2"><line x1="120" y1="80" x2="136" y2="110"/><line x1="136" y1="80" x2="120" y2="110"/><line x1="120" y1="140" x2="136" y2="170"/><line x1="136" y1="140" x2="120" y2="170"/></g><line x1="128" y1="64" x2="520" y2="64" stroke="#f08c00" stroke-width="8"/><line x1="128" y1="64" x2="40" y2="64" stroke="#f08c00" stroke-width="8"/><rect x="20" y="58" width="40" height="20" fill="#5b6b78"/><line x1="440" y1="68" x2="440" y2="180" stroke="#2c3e50" stroke-width="2"/><rect x="424" y="180" width="32" height="24" fill="#5b6b78" stroke="#2c3e50"/><text x="470" y="196" font-size="11" fill="#5b6b78">load</text><line x1="540" y1="120" x2="540" y2="280" stroke="#1f2d3a" stroke-width="1" stroke-dasharray="4 4"/><line x1="534" y1="120" x2="546" y2="120" stroke="#1f2d3a"/><line x1="534" y1="280" x2="546" y2="280" stroke="#1f2d3a"/><text x="552" y="205" font-size="11" fill="#1f2d3a">height</text><text x="300" y="48" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Tower crane lifting a load</text></svg>',
      },
      caption: 'A tower crane raises a heavy load to height h, increasing its gravitational potential energy.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The Sankey diagram below represents the energy changes in the crane\'s lifting motor. **Label** the energy forms on the diagram.',
        marks: 2,
        artefact: {
          component: 'SankeySim',
          data: {
            units: 'J',
            input: { label: 'Input energy', value: 100 },
            outputs: [
              { label: 'Useful energy output (25%)', value: 25, kind: 'out' },
              { label: 'Heat losses (70%)', value: 70, kind: 'loss' },
              { label: 'Frictional losses (5%)', value: 5, kind: 'loss' },
            ],
            labelBank: ['Input energy', 'Useful energy output (25%)', 'Heat losses (70%)', 'Frictional losses (5%)'],
          },
          caption: 'Energy transfers in the crane motor. Label each band.',
        },
        ph: 'Label all three output arrows: Useful energy output (25%), Heat losses (70%), Frictional losses (5%).',
      },
      {
        label: 'b',
        text: 'The crane lifts a load from the ground (height 0 m) up to a platform at a height of 75 m. The load has a mass of 1500 kg. **Calculate** the gain in gravitational potential energy of the load. You should assume that the gravitational field strength is 10 N kg⁻¹.',
        marks: 4,
        ph: 'Show working: Δh = 75 − 0 = 75 m; ΔEp = mgh = 1500 × 10 × 75 = ? J or MJ',
      },
      {
        label: 'c',
        text: 'A different load gained 2.4 MJ of gravitational potential energy in 120 s as it was lifted. **Calculate** the power of the crane motor for this lift.',
        marks: 3,
        ph: 'Show working: P = E / t = 2 400 000 / 120 = ? W   Include correct units.',
      },
    ],
  },

  // ─── Q3: Light waves and space (9 marks, Criterion A) ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Astrophysics — Light & Satellites',
    marks: 9,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['light emission and reflection', 'geostationary satellites', 'speed of light', 'Big Bang'], level: 'proficient' },
    stem: 'This question is about light waves and space. An astronomer uses an observatory telescope to study objects in the night sky and to track communication satellites.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sky3b" cx="0.5" cy="0.2"><stop offset="0" stop-color="#161f3a"/><stop offset="1" stop-color="#080c1a"/></radialGradient></defs><rect width="600" height="300" fill="url(#sky3b)"/><g fill="#ffffff"><circle cx="90" cy="44" r="2.4"/><circle cx="170" cy="86" r="1.6"/><circle cx="260" cy="36" r="2"/><circle cx="360" cy="74" r="1.4"/><circle cx="450" cy="50" r="2.2"/><circle cx="540" cy="92" r="1.6"/><circle cx="320" cy="118" r="1.4"/><circle cx="210" cy="150" r="1.5"/></g><circle cx="130" cy="64" r="13" fill="#f4d35e"/><text x="130" y="92" font-size="10" text-anchor="middle" fill="#f4d35e">star</text><circle cx="480" cy="104" r="16" fill="#cfd6dd"/><path d="M480,88 a16,16 0 0 0 0,32 a12,12 0 0 1 0,-32 Z" fill="#9aa3ab"/><text x="480" y="136" font-size="10" text-anchor="middle" fill="#cfd6dd">Moon</text><circle cx="330" cy="56" r="9" fill="#e08a1e"/><text x="330" y="80" font-size="10" text-anchor="middle" fill="#e08a1e">planet</text><path d="M250,256 a60,30 0 0 1 100,0 Z" fill="#b6c4cf" stroke="#7d8a96"/><rect x="246" y="252" width="108" height="8" fill="#5b6b78"/><rect x="290" y="200" width="20" height="56" fill="#8a99a6" stroke="#5b6b78"/><line x1="300" y1="200" x2="480" y2="104" stroke="#0b7285" stroke-width="1.5" stroke-dasharray="5 4"/><text x="300" y="282" font-size="11" text-anchor="middle" fill="#cfe9f6">observatory telescope</text></svg>',
      },
      caption: 'An observatory telescope gathers light from stars, planets and the Moon, and tracks satellites.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** whether each object emits its own light or reflects light.\n\n| Object | Emits or reflects light |\n|--------|------------------------|\n| Star | ? |\n| Moon | ? |\n| Planet | ? |\n| Satellite | ? |',
        marks: 2,
        widget: 'radio_select',
        widgetOptions: ['Star — Emits; Moon — Reflects; Planet — Reflects; Satellite — Reflects'],
        ph: 'Select Emits or Reflects for each: Star, Moon, Planet, Satellite.',
      },
      {
        label: 'b',
        text: 'Some weather satellites stay at the same point above the Earth\'s surface. These are known as geostationary satellites. **State** why these satellites appear to be stationary.',
        marks: 1,
        ph: 'State the orbital period of a geostationary satellite.',
      },
      {
        label: 'c',
        text: 'Weather agencies use geostationary satellites to monitor cloud cover. **State** one additional application of geostationary satellites.',
        marks: 1,
        ph: 'Give one use other than weather monitoring (e.g. TV broadcasting, GPS, satellite phones, navigation).',
      },
      {
        label: 'd',
        text: 'A geostationary satellite is approximately 36 000 km above the surface of the Earth. Light travels at 3 × 10⁸ m s⁻¹. When a ground station sends a signal up to the satellite and it is relayed straight back down to another ground station, **calculate** the minimum time delay between the signal being sent and being received back on Earth.',
        marks: 3,
        ph: 'Convert km → m; total distance = 2 × 3.6 × 10⁷ m; t = d / c = ? Show all steps.',
      },
      {
        label: 'e',
        text: 'The observatory telescope can also gather light from very distant galaxies. Astronomers observe that these distant galaxies are moving away from each other. **Outline** how this observation provides evidence for the origin of the universe.',
        marks: 2,
        ph: 'Link: galaxies moving apart → in the past they were closer together → evidence for the Big Bang.',
      },
    ],
  },

  // ─── Q4: Security door-lock electromagnet investigation (12 marks, Criterion B) ───
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Magnetism & Electromagnetism — Door-Lock Electromagnet',
    marks: 12,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['scientific inquiry', 'electromagnets', 'variables', 'hypothesis'], level: 'proficient' },
    stem: 'Many secure buildings use an electromagnetic door lock. When a current flows through a coil of wire wrapped around an iron core, the core becomes magnetic and holds a steel plate on the door firmly shut. When the current is switched off, the door can be opened. You can investigate the same effect in your school classroom using a coil of wire wrapped around an iron rod to pick up paper clips.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="mag4b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b6c4cf"/><stop offset="1" stop-color="#7d8a96"/></linearGradient></defs><rect width="560" height="260" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Electromagnetic door lock</text><rect x="80" y="50" width="120" height="170" fill="#d6cdbf" stroke="#9a8e78"/><text x="140" y="240" font-size="11" text-anchor="middle" fill="#8a7e68">door frame</text><rect x="200" y="50" width="180" height="170" fill="#bfa67e" stroke="#8a6e44"/><circle cx="350" cy="140" r="7" fill="#5b4a30"/><text x="290" y="240" font-size="11" text-anchor="middle" fill="#8a6e44">door</text><rect x="180" y="110" width="40" height="40" rx="4" fill="url(#mag4b)" stroke="#5b6b78"/><g stroke="#0b7285" stroke-width="2.5"><line x1="186" y1="118" x2="214" y2="118"/><line x1="186" y1="128" x2="214" y2="128"/><line x1="186" y1="138" x2="214" y2="138"/></g><text x="150" y="105" font-size="10" fill="#0b7285">coil + iron core</text><rect x="220" y="116" width="14" height="28" fill="#8a99a6" stroke="#5b6b78"/><text x="248" y="170" font-size="10" fill="#5b6b78">steel plate</text><rect x="420" y="160" width="70" height="40" rx="4" fill="#222222"/><text x="455" y="185" font-size="11" fill="#3ad36a" text-anchor="middle" font-family="monospace">A</text><line x1="420" y1="180" x2="186" y2="128" stroke="#c0392b" stroke-width="1.5"/></svg>',
      },
      caption: 'A security door-lock electromagnet, and the classroom version using a coil on an iron rod.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the research question this experiment could investigate.',
        marks: 1,
        ph: 'Write a research question identifying the independent variable (current) and dependent variable (electromagnet strength / weight supported).',
      },
      {
        label: 'b',
        text: 'Below is a list of variables that are important in this experiment. **Select** the description that best describes each.\n\n| Variable | Independent | Dependent | Control |\n|----------|-------------|-----------|--------|\n| Current | | | |\n| Diameter of the iron rod | | | |\n| Number of turns | | | |\n| Total length taken up by the turns | | | |\n| Total weight of paper clips supported by the electromagnet | | | |\n| Size of the paper clips | | | |',
        marks: 4,
        widget: 'variable_classify',
        widgetOptions: ['Current', 'Diameter of the iron rod', 'Number of turns', 'Total length taken up by the turns', 'Total weight of paper clips supported', 'Size of the paper clips'],
        ph: 'Classify each variable: Current = Independent; Weight of clips = Dependent; all others = Control.',
      },
      {
        label: 'c',
        text: 'Using your knowledge of electromagnets and the way the door-lock electromagnet works, **formulate** a testable hypothesis that could test your research question from part (a).',
        marks: 3,
        ph: 'Structure: If [current increases], then [weight of paper clips supported will increase] because [the electromagnetic field is stronger / more current → stronger magnetic field].',
      },
      {
        label: 'd',
        text: 'In the laboratory, you have a range of equipment available. **Select** one piece of equipment that you would need and state how it would be used in the experiment.',
        marks: 2,
        ph: 'Name the equipment (e.g. ammeter) and state its purpose (to measure the size of the current).',
      },
      {
        label: 'e',
        text: 'A second piece of equipment is also needed to measure the dependent variable. **Select** the most appropriate choice and justify your selection.',
        marks: 2,
        ph: 'Name the equipment (e.g. balance/scale) and explain why that range is most suitable (greatest range to measure the total weight of paper clips).',
      },
    ],
  },

  // ─── Q5: Iron nail electromagnet investigation (15 marks, Criterion C) ───
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Magnetism — Iron Nail Investigation',
    marks: 15,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['data collection', 'data processing', 'graph analysis', 'proportional relationships'], level: 'proficient' },
    stem: 'Two different groups of students in your class investigate whether the strength of an electromagnet is affected by the spacing of the turns wrapped around an iron rod. They keep the current constant at 2 A. Your teacher tells the class that:\n\n**magnetic force ~ current × number of turns per centimetre**\n\nThe first group of students uses large iron nails, each with a weight of 0.25 N, to determine the weight supported by the electromagnet.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="240" fill="#ffffff"/><text x="260" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Electromagnet lifting iron nails</text><rect x="240" y="40" width="40" height="70" rx="6" fill="#b6c4cf" stroke="#7d8a96"/><g stroke="#0b7285" stroke-width="2.5"><line x1="246" y1="50" x2="274" y2="50"/><line x1="246" y1="62" x2="274" y2="62"/><line x1="246" y1="74" x2="274" y2="74"/><line x1="246" y1="86" x2="274" y2="86"/><line x1="246" y1="98" x2="274" y2="98"/></g><text x="300" y="80" font-size="11" fill="#0b7285">coil on iron rod</text><g stroke="#5b6b78" stroke-width="3"><line x1="252" y1="118" x2="252" y2="170"/><line x1="262" y1="118" x2="262" y2="178"/><line x1="272" y1="118" x2="272" y2="166"/></g><g fill="#5b6b78"><circle cx="252" cy="118" r="4"/><circle cx="262" cy="118" r="4"/><circle cx="272" cy="118" r="4"/></g><text x="300" y="156" font-size="11" fill="#5b6b78">iron nails (0.25 N each)</text><rect x="60" y="60" width="70" height="40" rx="4" fill="#222222"/><text x="95" y="85" font-size="11" fill="#3ad36a" text-anchor="middle" font-family="monospace">2.0 A</text><line x1="130" y1="80" x2="240" y2="60" stroke="#c0392b" stroke-width="2"/></svg>',
      },
      caption: 'The electromagnet picks up a cluster of iron nails; the number of nails it holds measures its strength.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Present** the data from the tablet in a table.',
        marks: 3,
        ph: 'Draw a table with clear headings and units. Include all 6 data rows (coil length / cm vs number of nails): 1.0→6, 2.0→3, 3.0→2, 4.0→1, 5.0→1, 6.0→1.',
      },
      {
        label: 'b',
        text: '**Calculate** the number of turns per centimetre and the total nail weight for each measurement. Present this processed data in a second table.',
        marks: 4,
        ph: 'Calculate turns per cm (= turns ÷ length/cm) and weight/N (= nails × 0.25 N) for each row. Show working and correct units (cm⁻¹ and N). All values to 1 d.p.',
      },
      {
        label: 'c',
        text: 'The first group used large iron nails in their experiment. The second group uses small steel pins, each with a weight of 0.01 N. **Justify** why the second group of students will produce a better set of data.',
        marks: 2,
        ph: 'This would lead to more accurate data because small pins produce a more precise measure of weight supported (0.01 N increments vs 0.25 N increments).',
      },
      {
        label: 'd',
        text: 'The relationship given for this experiment was:\n\n**weight supported ~ current × number of turns per centimetre**\n\nThe second group produced the following graph of their results. Use the graph to **explain** if the data supports the relationship.',
        marks: 4,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'turns per centimetre / cm⁻¹',
            yLabel: 'weight supported / N',
            points: [[1.0, 0.25], [2.0, 0.50], [3.0, 0.75], [4.0, 1.00], [5.0, 1.25], [6.0, 1.50]],
            readouts: [{ x: 4.0, note: 'read weight at 4.0 cm⁻¹' }],
            dataMaxX: 6.0,
          },
          caption: 'Weight supported against number of turns per centimetre (constant current 2 A).',
        },
        ph: 'Describe: straight line through the origin → relationship is proportional. State this supports the given relationship (weight ∝ turns per cm at constant current).',
      },
      {
        label: 'e',
        text: 'The independent variable in this experiment was number of turns per centimetre. If the independent variable was changed to current, **predict** the shape and the gradient of a graph drawn from the new data.',
        marks: 2,
        ph: 'Shape: same (straight line through the origin — still proportional). Gradient: would be different because current is a different variable with a different constant of proportionality.',
      },
    ],
  },

  // ─── Q6: Capillary action investigation (11 marks, Criterion C & A) ───
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Pressure — Capillary Action',
    marks: 11,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    tags: { unit: 'pressure', topics: ['capillary action', 'proportional relationships', 'graphical analysis', 'gradient calculation'], level: 'proficient' },
    stem: 'We normally expect liquids to flow downwards through a tube. However, if the diameter of the tube is small enough, the liquid will rise up through the tube. This process is known as capillary action. It is one of the mechanisms by which water moves up through plant stems and tree trunks.\n\nA student performs an experiment to investigate capillary action. After some research, they discover that the height to which the water rises above the liquid surface is given by:\n\n**height above liquid surface = capillary constant × (1 / diameter)**\n\nThe capillary constant is the constant of proportionality for capillary action.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="liq6b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe9d8"/><stop offset="1" stop-color="#7fbf96"/></linearGradient></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Capillary tubes of different diameters</text><rect x="60" y="180" width="440" height="40" fill="url(#liq6b)" stroke="#3f7e6a"/><text x="500" y="205" font-size="11" fill="#2c5444">water</text><g><rect x="110" y="60" width="10" height="130" fill="none" stroke="#7d8a96"/><rect x="111" y="84" width="8" height="106" fill="url(#liq6b)"/><text x="115" y="242" font-size="11" text-anchor="middle" fill="#5b6b78">A</text><text x="115" y="258" font-size="10" text-anchor="middle" fill="#5b6b78">0.8 mm</text></g><g><rect x="200" y="60" width="13" height="130" fill="none" stroke="#7d8a96"/><rect x="201" y="120" width="11" height="70" fill="url(#liq6b)"/><text x="206" y="242" font-size="11" text-anchor="middle" fill="#5b6b78">B</text><text x="206" y="258" font-size="10" text-anchor="middle" fill="#5b6b78">1.2 mm</text></g><g><rect x="290" y="60" width="18" height="130" fill="none" stroke="#7d8a96"/><rect x="291" y="138" width="16" height="52" fill="url(#liq6b)"/><text x="299" y="242" font-size="11" text-anchor="middle" fill="#5b6b78">C</text><text x="299" y="258" font-size="10" text-anchor="middle" fill="#5b6b78">1.6 mm</text></g><g><rect x="380" y="60" width="24" height="130" fill="none" stroke="#7d8a96"/><rect x="381" y="158" width="22" height="32" fill="url(#liq6b)"/><text x="392" y="242" font-size="11" text-anchor="middle" fill="#5b6b78">D</text><text x="392" y="258" font-size="10" text-anchor="middle" fill="#5b6b78">2.0 mm</text></g><line x1="60" y1="80" x2="60" y2="190" stroke="#1f2d3a"/><g font-size="9" fill="#1f2d3a"><text x="40" y="83">40</text><text x="40" y="138">20</text><text x="48" y="190">0</text></g><text x="30" y="150" font-size="10" fill="#1f2d3a" transform="rotate(-90 30 150)">height / mm</text></svg>',
      },
      caption: 'Water rises higher in narrower tubes: the height depends inversely on the tube diameter.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The results of the experiment are recorded in the table below. **Measure** the height of the water in tube C and complete the table.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Tube', 'Diameter / mm', '1 / diameter / mm⁻¹', 'Height of water / mm'],
            rows: [
              ['A', '0.8', '1.25', '40.0'],
              ['B', '1.2', '0.83', '27.0'],
              ['C', '1.6', '0.63', ''],
              ['D', '2.0', '0.50', '16.0'],
            ],
          },
          caption: 'Measured capillary rise for four tubes. Complete the row for tube C.',
        },
        ph: 'Read tube C height from the diagram (≈ 20.0 mm) and enter: C: diameter 1.6 mm, 1/diameter = 0.63 mm⁻¹, height = 20.0 mm.',
      },
      {
        label: 'b',
        text: '**Plot** your measured value on the graph below, and draw a line of best fit. You should add labels to the axes.',
        marks: 4,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'plot',
            xAxis: { label: '1 / diameter / mm⁻¹', min: 0, max: 1.25, tick: 0.25 },
            yAxis: { label: 'height of water / mm', min: 0, max: 40, tick: 5 },
            dataTable: [{ x: 1.25, y: 40.0 }, { x: 0.83, y: 27.0 }, { x: 0.50, y: 16.0 }],
            plotMissing: [0.63, 20.0],
          },
          caption: 'Plot the missing point (tube C) and draw a line of best fit through the origin.',
        },
        ph: 'Plot point C at (0.63, 20.0). Draw line of best fit (through origin, approximately equal points above and below). Label x-axis: "1/diameter / mm⁻¹" and y-axis: "Height of liquid / mm".',
      },
      {
        label: 'c',
        text: '**Calculate** the capillary constant from the graph. You must show your working in your answer.',
        marks: 3,
        ph: 'Choose two points on the line of best fit with Δy ≥ 25 mm. Calculate gradient = Δy / Δx. Capillary constant ≈ 32 mm² (accept 28–36).',
      },
      {
        label: 'd',
        text: 'Giant redwood trees can grow to almost 100 m in height. From this experiment, we can conclude that capillary action is not the only mechanism used to move water through tree trunks. Use the relationship from the experiment to **suggest** how this experiment supports this conclusion.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="320" height="300" fill="#ffffff"/><rect x="146" y="60" width="28" height="200" fill="#8a5a2b"/><ellipse cx="160" cy="70" rx="80" ry="60" fill="#4e7a3f"/><ellipse cx="160" cy="40" rx="55" ry="42" fill="#5f9150"/><line x1="250" y1="60" x2="250" y2="260" stroke="#1f2d3a"/><line x1="245" y1="60" x2="255" y2="60" stroke="#1f2d3a"/><line x1="245" y1="260" x2="255" y2="260" stroke="#1f2d3a"/><text x="262" y="165" font-size="12" fill="#1f2d3a">≈ 100 m</text><rect x="100" y="260" width="120" height="8" fill="#6b5232"/><text x="160" y="288" font-size="11" text-anchor="middle" fill="#4e6b3f">Giant redwood tree</text></svg>',
          },
          caption: 'A giant redwood can carry water nearly 100 m up its trunk.',
        },
        ph: 'Use the inverse relationship: height ∝ 1/diameter. For a 100 m tree, the tube diameter would need to be unrealistically small → capillary action alone cannot explain water reaching 100 m heights.',
      },
    ],
  },

  // ─── Q7: Design investigation — detergent concentration and capillary action (13 marks, Criterion B) ───
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Pressure — Capillary Action Design',
    marks: 13,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    tags: { unit: 'pressure', topics: ['experimental design', 'variables', 'method', 'data collection'], level: 'advanced' },
    stem: 'You decide to extend the experiment and investigate how the concentration of detergent added to the water affects the height that the water rises up a capillary tube.',
    tasks: [
      {
        label: 'a',
        text: '**Design** an investigation that you could use to carry out this investigation. In your plan, you must include:\n- a research question\n- the independent, dependent and one control variable\n- the equipment you need and how it will be used\n- your method for manipulating the variables\n- how you will collect sufficient data',
        marks: 13,
        ph: 'Research question: How does detergent concentration affect the height water rises in a capillary tube?\nIV: detergent concentration (mL per 100 mL); DV: height of water rise (mm); CV: tube diameter, water temperature, tube length.\nEquipment: capillary tube(s), measuring cylinder, syringe/pipette, ruler, beaker, water, detergent.\nMethod: prepare at least 5 different detergent concentrations; measure height of rise in each case; repeat 3 times; calculate mean.\nData: record in table with concentrations and height values; at least 5 increments AND 3 trials to calculate mean.',
      },
    ],
  },

  // ─── Q8: Maglev trains (8 marks, Criterion A & D) ───
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Magnetism — Maglev Trains',
    marks: 8,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['magnetic forces', 'friction', 'electromagnetic levitation'], level: 'proficient' },
    stem: 'Engineers are building a high-speed maglev (magnetic levitation) test line to connect two distant cities. This type of train is lifted and driven by powerful electromagnets instead of running on wheels along a rail.',
    tasks: [
      {
        label: 'a',
        text: 'Some metals are attracted to magnets, some are not. **Select** the metal that is attracted to magnets.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Cobalt', 'Copper', 'Silver', 'Tin'],
        ph: 'Select one metal.',
      },
      {
        label: 'b',
        text: 'Maglev trains use repelling forces between strong electromagnets in the track and on the underside of the train. These electromagnets lift the whole train so it floats about 1 cm above the track. The train can travel at an average speed of 430 km h⁻¹.\n\nIn order to function, the maglev train uses magnetic forces to control three systems: the levitation system, the guidance system, and the propulsion system.\n\n**Identify** the force corresponding to each system in the diagram.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="lev8b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker><marker id="grd8b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2e8b57"/></marker><marker id="prp8b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="560" height="260" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Maglev train — forces</text><rect x="150" y="120" width="260" height="56" rx="22" fill="#2e7d6e" stroke="#1c5247"/><path d="M410,142 q30,0 30,20 l-40,0 Z" fill="#2e7d6e" stroke="#1c5247"/><rect x="120" y="190" width="320" height="14" fill="#8a99a6" stroke="#5b6b78"/><text x="280" y="220" font-size="11" text-anchor="middle" fill="#5b6b78">guideway / track</text><line x1="280" y1="186" x2="280" y2="148" stroke="#0b7285" stroke-width="3" marker-end="url(#lev8b)"/><text x="290" y="170" font-size="11" fill="#0b7285">blue</text><line x1="320" y1="148" x2="360" y2="148" stroke="#2e8b57" stroke-width="3" marker-end="url(#grd8b)"/><text x="364" y="138" font-size="11" fill="#2e8b57">green</text><line x1="240" y1="148" x2="180" y2="148" stroke="#c0392b" stroke-width="3" marker-end="url(#prp8b)"/><text x="170" y="138" font-size="11" fill="#c0392b">red</text></svg>',
          },
          caption: 'Three magnetic forces act on the maglev train: an upward (blue), a sideways (green) and a forward (red) force.',
        },
        ph: 'Match each force arrow to a system: Levitation = upward force (blue), Guidance = sideways force (green), Propulsion = forward force (red).',
      },
      {
        label: 'c',
        text: 'Compared to a conventional train with wheels in contact with the track, the frictional forces in maglev trains are lower. **Suggest** two advantages of lower frictional forces.',
        marks: 2,
        ph: 'Give two distinct advantages: e.g. higher maximum speed; less energy wasted as heat; less wear and tear on components; lower maintenance costs.',
      },
      {
        label: 'd',
        text: 'The size of the repelling force depends on the distance between the magnets. The graph below shows how the repelling force varies when the distance between the magnets increases.\n\nUse the graph to **explain** the effect on the repelling force of an increase in the number of passengers.',
        marks: 3,
        artefact: {
          component: 'FieldSim',
          data: {
            quantity: 'repelling force',
            relationship: 'repelling force decreases as the gap increases',
            k: 60,
            distanceRange: [1, 10],
            distanceUnits: 'mm',
            forceUnits: 'kN',
          },
          caption: 'Repelling force between the magnets against the gap between them (drag the distance slider).',
        },
        ph: 'Step 1: more passengers → greater weight/load on train. Step 2: train sinks closer to track → smaller distance between magnets. Step 3: from graph, smaller distance → larger repelling force.',
      },
    ],
  },

  // ─── Q9: Transportation evaluation (15 marks, Criterion D) ───
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Forces & Transport — Evaluation',
    marks: 15,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['evaluation', 'transport', 'science in society', 'economic and environmental impact'], level: 'advanced' },
    stem: 'People increasingly travel long distances between cities for work and leisure. New technologies give travellers several choices for an intercity journey. Travellers value low cost, short journey times, comfort and safety. The infographic below compares four ways of making the same 500 km intercity journey between two cities.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Travelling 500 km between cities — four options</text><g font-size="11" fill="#1f2d3a"><text x="40" y="70" font-weight="700">Option</text><text x="210" y="70" font-weight="700">Cost</text><text x="310" y="70" font-weight="700">Time</text><text x="420" y="70" font-weight="700">CO2 / trip</text><text x="540" y="70" font-weight="700">Safety</text></g><line x1="30" y1="78" x2="580" y2="78" stroke="#7d8a96"/><g font-size="11" fill="#2c3e50"><text x="40" y="110">Car (drive)</text><text x="210" y="110">$70</text><text x="310" y="110">5.5 h</text><text x="420" y="110">70 kg</text><text x="540" y="110">medium</text><text x="40" y="150">High-speed rail</text><text x="210" y="150">$95</text><text x="310" y="150">2.5 h</text><text x="420" y="150">14 kg</text><text x="540" y="150">high</text><text x="40" y="190">Aeroplane</text><text x="210" y="190">$120</text><text x="310" y="190">1.5 h</text><text x="420" y="190">130 kg</text><text x="540" y="190">very high</text><text x="40" y="230">Intercity coach</text><text x="210" y="230">$40</text><text x="310" y="230">6.5 h</text><text x="420" y="230">30 kg</text><text x="540" y="230">high</text></g><line x1="30" y1="118" x2="580" y2="118" stroke="#e3e8ec"/><line x1="30" y1="158" x2="580" y2="158" stroke="#e3e8ec"/><line x1="30" y1="198" x2="580" y2="198" stroke="#e3e8ec"/><g><rect x="40" y="252" width="20" height="14" fill="#c0392b"/><text x="66" y="264" font-size="10" fill="#5b6b78">car</text><rect x="120" y="252" width="20" height="14" fill="#0b7285"/><text x="146" y="264" font-size="10" fill="#5b6b78">rail</text><rect x="200" y="252" width="20" height="14" fill="#7a4fb5"/><text x="226" y="264" font-size="10" fill="#5b6b78">air</text><rect x="280" y="252" width="20" height="14" fill="#f08c00"/><text x="306" y="264" font-size="10" fill="#5b6b78">coach</text></g><text x="300" y="300" font-size="10" text-anchor="middle" fill="#94a3ad">Figures are typical values for a single 500 km intercity trip.</text></svg>',
      },
      caption: 'Comparison of four intercity transport options for the same 500 km journey.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using information from the infographic above and your wider MYP knowledge, choose one of the alternative transportation methods. **Discuss and evaluate** your chosen method compared to driving a car. In your answer you should include:\n- the economic advantages and disadvantages of your chosen method compared to driving\n- the environmental advantages and disadvantages of your chosen method compared to driving\n- the comfort of your chosen method compared to driving\n- the safety of your chosen method compared to driving\n- your final recommendation',
        marks: 15,
        ph: 'Choose high-speed rail, aeroplane, or intercity coach. Compare systematically on: cost, CO2/environmental impact, comfort (seating, space, journey experience), safety data, and make a justified final recommendation. Use specific data from the infographic where possible.',
      },
    ],
  },

]
