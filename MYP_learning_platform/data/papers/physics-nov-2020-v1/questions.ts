import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2020 · VARIANT 1  (isomorphic to physics-nov-2020)
// Same crit, command terms, marks (task+question+total), tags, widgets and task
// structure. Only the real-world context, numbers and artefacts change.
// All figures are self-contained data-driven artefacts (no figImages).
//   Q1 Thermoregulation : foxes/dog  → penguin / fennec / Arctic fox / panting dog (animals)
//   Q2 GPE & power      : hill-climb  → pumped-storage hydro reservoir (environmental)
//   Q3 Light & space    : night sky   → ground dish antenna & deep space (space)
//   Q4 Electromagnet B  : Kibble bal. → scrap-metal lifting electromagnet (industrial)
//   Q5 Electromagnet C  : paper clips → steel washers
//   Q6 Capillary C      : tubes/redwood → capillary tubes set (inverse 1/d)
//   Q7 Capillary design : temperature → salt concentration of the liquid
//   Q8 Maglev A/D       : maglev      → maglev (commuter framing)
//   Q9 Transport eval D : 4 options   → 4 commuter transport options (60 km)
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2020-v1',
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
    stem: 'Animals must keep their body temperature within a narrow range, a process called thermoregulation. This question is about the physics of heat transfer used by animals to stay warm or to cool down.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="hot1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f08c00"/></marker></defs><rect width="600" height="230" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Heat transfer in animals</text><g><ellipse cx="120" cy="130" rx="38" ry="55" fill="#2c3e50"/><ellipse cx="120" cy="110" rx="30" ry="40" fill="#ffffff"/><circle cx="120" cy="78" r="20" fill="#2c3e50"/><path d="M105,150 q15,18 30,0" fill="#f08c00"/><text x="120" y="208" font-size="11" text-anchor="middle" fill="#2c3e50">Emperor penguin</text></g><g><ellipse cx="320" cy="120" rx="55" ry="34" fill="#d9a441"/><path d="M280,120 q-22,-6 -30,4 q26,2 30,8 Z" fill="#c98a3c"/><path d="M375,108 l24,-30 l8,6 l-18,30 Z" fill="#d9a441"/><text x="320" y="178" font-size="11" text-anchor="middle" fill="#a8721a">Fennec fox</text></g><g><ellipse cx="500" cy="125" rx="48" ry="40" fill="#8a99a6"/><path d="M460,95 q-44,-20 -52,18 q40,4 52,8 Z" fill="#8a99a6" stroke="#5b6b78"/><line x1="500" y1="125" x2="500" y2="180" stroke="#5b6b78" stroke-width="3"/><text x="500" y="200" font-size="11" text-anchor="middle" fill="#5b6b78">African elephant</text><line x1="430" y1="90" x2="400" y2="70" stroke="#f08c00" stroke-width="2" marker-end="url(#hot1)"/></g></svg>',
      },
      caption: 'Animals use conduction, convection, radiation and evaporation to control their body temperature.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** which of these animals is best adapted to staying warm in a cold polar climate.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A — Fennec fox: large ears, short pale fur', 'B — Emperor penguin: dense overlapping feathers and a thick fat layer', 'C — African elephant: thin grey skin, very large ears', 'D — Camel: short hair, long thin legs'],
        ph: 'Select one option.',
      },
      {
        label: 'b',
        text: 'Emperor penguins have a thick layer of fat (blubber) beneath their skin. **Outline** how this feature helps penguins keep warm in cold Antarctic conditions.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="hl1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f08c00"/></marker></defs><rect width="460" height="220" fill="#ffffff"/><text x="230" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cross-section of penguin skin</text><rect x="60" y="50" width="280" height="22" fill="#c0392b"/><text x="350" y="65" font-size="11" fill="#7a1f15">body core (warm)</text><rect x="60" y="72" width="280" height="40" fill="#f4d35e"/><text x="350" y="96" font-size="11" fill="#9a7d0f">fat / blubber</text><rect x="60" y="112" width="280" height="14" fill="#3a3f44"/><text x="350" y="123" font-size="11" fill="#3a3f44">feathers</text><g stroke="#f08c00" stroke-width="2"><line x1="120" y1="50" x2="120" y2="150" marker-end="url(#hl1)"/><line x1="200" y1="50" x2="200" y2="150" marker-end="url(#hl1)"/><line x1="280" y1="50" x2="280" y2="150" marker-end="url(#hl1)"/></g><text x="200" y="180" font-size="11" text-anchor="middle" fill="#f08c00">heat flows outwards (slowly through fat)</text></svg>',
          },
          caption: 'The fat layer beneath a penguin\'s skin slows the flow of heat to the cold surroundings.',
        },
        ph: 'Describe the physics of how the fat layer reduces heat loss (2 points).',
      },
      {
        label: 'c',
        text: 'The fennec fox lives in the hot Sahara Desert, while its distant cousin the Arctic fox lives in the freezing Arctic.\n\n**Outline** how the large ears of the fennec fox **and** the white fur of the Arctic fox help with thermoregulation. You should use scientific language in your answer.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="hf1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f08c00"/></marker></defs><rect width="560" height="220" fill="#ffffff"/><g><ellipse cx="150" cy="140" rx="50" ry="34" fill="#d9a441"/><path d="M112,128 l-34,-46 l14,2 l28,38 Z" fill="#d9a441" stroke="#c98a3c"/><path d="M188,128 l34,-46 l-14,2 l-28,38 Z" fill="#d9a441" stroke="#c98a3c"/><line x1="95" y1="90" x2="70" y2="66" stroke="#f08c00" stroke-width="2" marker-end="url(#hf1)"/><line x1="205" y1="90" x2="230" y2="66" stroke="#f08c00" stroke-width="2" marker-end="url(#hf1)"/><text x="150" y="196" font-size="11" text-anchor="middle" fill="#a8721a">Fennec fox — large ears</text></g><g><ellipse cx="410" cy="140" rx="50" ry="36" fill="#f2f5f7" stroke="#c5ced4"/><path d="M380,116 l-12,-26 l10,2 l8,22 Z" fill="#f2f5f7" stroke="#c5ced4"/><path d="M440,116 l12,-26 l-10,2 l-8,22 Z" fill="#f2f5f7" stroke="#c5ced4"/><circle cx="394" cy="138" r="4" fill="#2c3e50"/><circle cx="426" cy="138" r="4" fill="#2c3e50"/><text x="410" y="196" font-size="11" text-anchor="middle" fill="#5b6b78">Arctic fox — white fur</text></g></svg>',
          },
          caption: 'The fennec fox (left) and Arctic fox (right) are adapted to opposite climates.',
        },
        ph: 'Address both features: (1) large ears and conduction/convection/radiation, (2) white fur and radiation.',
      },
      {
        label: 'd',
        text: 'When a dog gets too hot, it pants, allowing water to evaporate from its wet tongue.\n\n**Explain** how the process of evaporation leads to a cooling effect in a dog.',
        marks: 3,
        ph: 'Use particle theory: which particles escape, what happens to those left behind, and why this cools the dog.',
      },
    ],
  },

  // ─── Q2: Pumped-storage hydro / energy (9 marks, Criterion A) ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power — Pumped-Storage Hydro',
    marks: 9,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'work-energy', topics: ['gravitational potential energy', 'Sankey diagrams', 'power'], level: 'developing' },
    stem: 'A pumped-storage hydroelectric power station stores energy by pumping water from a low reservoir up to a high reservoir when electricity is cheap. When demand is high, the water is released back down to drive turbines and generate electricity.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="watr2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd1e8"/><stop offset="1" stop-color="#4f9bc0"/></linearGradient><linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fa86b"/><stop offset="1" stop-color="#4e6b3f"/></linearGradient></defs><rect width="600" height="300" fill="#ffffff"/><path d="M0,300 L0,130 Q120,70 260,90 L600,230 L600,300 Z" fill="url(#hill2)"/><ellipse cx="120" cy="110" rx="70" ry="16" fill="url(#watr2)" stroke="#2c5468"/><text x="120" y="92" font-size="11" text-anchor="middle" fill="#1f4a5c">upper reservoir</text><rect x="360" y="226" width="200" height="40" fill="url(#watr2)" stroke="#2c5468"/><text x="460" y="252" font-size="11" text-anchor="middle" fill="#1f4a5c">lower reservoir</text><path d="M150,118 Q300,140 380,228" fill="none" stroke="#5b6b78" stroke-width="10" stroke-linecap="round"/><path d="M150,118 Q300,140 380,228" fill="none" stroke="#b6c4cf" stroke-width="5" stroke-linecap="round"/><text x="300" y="150" font-size="11" fill="#5b6b78">penstock</text><rect x="330" y="210" width="46" height="34" rx="4" fill="#2c3e50"/><text x="353" y="231" font-size="10" fill="#ffffff" text-anchor="middle">turbine</text><line x1="120" y1="126" x2="120" y2="226" stroke="#1f2d3a" stroke-width="1" stroke-dasharray="4 4"/><line x1="100" y1="126" x2="140" y2="126" stroke="#1f2d3a"/><line x1="100" y1="226" x2="140" y2="226" stroke="#1f2d3a"/><text x="92" y="180" font-size="11" text-anchor="end" fill="#1f2d3a">height drop</text></svg>',
      },
      caption: 'A pumped-storage scheme: water falls from the upper reservoir through a turbine to generate electricity.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The Sankey diagram below represents the energy changes in the turbine-generator. **Label** the energy forms on the diagram.',
        marks: 2,
        artefact: {
          component: 'SankeySim',
          data: {
            units: 'J',
            input: { label: 'Input energy', value: 100 },
            outputs: [
              { label: 'Useful electrical output (25%)', value: 25, kind: 'out' },
              { label: 'Heat losses (70%)', value: 70, kind: 'loss' },
              { label: 'Frictional losses (5%)', value: 5, kind: 'loss' },
            ],
            labelBank: ['Input energy', 'Useful electrical output (25%)', 'Heat losses (70%)', 'Frictional losses (5%)'],
          },
          caption: 'Energy transfers in the turbine-generator. Label each band.',
        },
        ph: 'Label all three output arrows: Useful electrical output (25%), Heat losses (70%), Frictional losses (5%).',
      },
      {
        label: 'b',
        text: 'In one scheme, water is released from the upper reservoir at an altitude of 540 m and falls to the lower reservoir at an altitude of 90 m. A batch of water released has a mass of 920 kg. **Calculate** the gain in gravitational potential energy released by this water as it falls. You should assume that the gravitational field strength is 10 N kg⁻¹.',
        marks: 4,
        ph: 'Show working: Δh = 540 − 90 = 450 m; ΔEp = mgh = 920 × 10 × 450 = ? J or MJ',
      },
      {
        label: 'c',
        text: 'During one release, the falling water transferred 9.2 MJ of energy to the turbine in 460 s. **Calculate** the power delivered to the turbine.',
        marks: 3,
        ph: 'Show working: P = E / t = 9 200 000 / 460 = ? W   Include correct units.',
      },
    ],
  },

  // ─── Q3: Light waves and deep space (9 marks, Criterion A) ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Astrophysics — Light & Satellites',
    marks: 9,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['light emission and reflection', 'geostationary satellites', 'speed of light', 'Big Bang'], level: 'proficient' },
    stem: 'This question is about light waves and space. A space agency uses a large dish antenna to communicate with satellites and to observe distant objects in the night sky.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sky3" cx="0.5" cy="0.2"><stop offset="0" stop-color="#15233f"/><stop offset="1" stop-color="#070d1c"/></radialGradient></defs><rect width="600" height="300" fill="url(#sky3)"/><g fill="#ffffff"><circle cx="80" cy="50" r="2.5"/><circle cx="160" cy="90" r="1.6"/><circle cx="250" cy="40" r="2"/><circle cx="350" cy="80" r="1.4"/><circle cx="430" cy="45" r="2.2"/><circle cx="520" cy="95" r="1.6"/><circle cx="300" cy="120" r="1.4"/><circle cx="200" cy="150" r="1.5"/></g><circle cx="120" cy="70" r="14" fill="#f4d35e"/><text x="120" y="100" font-size="10" text-anchor="middle" fill="#f4d35e">star</text><circle cx="470" cy="110" r="16" fill="#cfd6dd"/><path d="M470,94 a16,16 0 0 0 0,32 a12,12 0 0 1 0,-32 Z" fill="#9aa3ab"/><text x="470" y="142" font-size="10" text-anchor="middle" fill="#cfd6dd">Moon</text><circle cx="320" cy="60" r="9" fill="#e08a1e"/><text x="320" y="84" font-size="10" text-anchor="middle" fill="#e08a1e">planet</text><rect x="250" y="248" width="100" height="10" fill="#5b6b78"/><path d="M260,248 Q300,200 340,248 Z" fill="#b6c4cf" stroke="#7d8a96"/><line x1="300" y1="225" x2="300" y2="248" stroke="#5b6b78" stroke-width="3"/><circle cx="300" cy="222" r="4" fill="#f08c00"/><line x1="300" y1="222" x2="470" y2="110" stroke="#0b7285" stroke-width="1.5" stroke-dasharray="5 4"/><text x="300" y="278" font-size="11" text-anchor="middle" fill="#cfe9f6">ground-based dish antenna</text></svg>',
      },
      caption: 'A dish antenna observes light from stars, planets and the Moon, and exchanges signals with satellites.',
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
        text: 'Some communication satellites stay at the same point above the Earth\'s surface. These are known as geostationary satellites. **State** why these satellites appear to be stationary.',
        marks: 1,
        ph: 'State the orbital period of a geostationary satellite.',
      },
      {
        label: 'c',
        text: 'Television companies use geostationary satellites to broadcast signals. **State** one additional application of geostationary satellites.',
        marks: 1,
        ph: 'Give one use other than TV broadcasting (e.g. weather forecasting, GPS, satellite phones, navigation).',
      },
      {
        label: 'd',
        text: 'A geostationary satellite is approximately 36 000 km above the surface of the Earth. Light travels at 3 × 10⁸ m s⁻¹. When the dish sends a TV signal up to the satellite and it is relayed straight back down to another dish, **calculate** the minimum time delay between the signal being sent and being received back on Earth.',
        marks: 3,
        ph: 'Convert km → m; total distance = 2 × 3.6 × 10⁷ m; t = d / c = ? Show all steps.',
      },
      {
        label: 'e',
        text: 'The same dish can collect light from very distant galaxies. Astronomers observe that these distant galaxies are moving away from each other. **Outline** how this observation provides evidence for the origin of the universe.',
        marks: 2,
        ph: 'Link: galaxies moving apart → in the past they were closer together → evidence for the Big Bang.',
      },
    ],
  },

  // ─── Q4: Scrap-metal lifting electromagnet investigation (12 marks, Criterion B) ───
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Magnetism & Electromagnetism — Lifting Electromagnet',
    marks: 12,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['scientific inquiry', 'electromagnets', 'variables', 'hypothesis'], level: 'proficient' },
    stem: 'In a scrap-metal yard, a crane uses a powerful electromagnet to lift heavy loads of steel. When a current flows through the coil of wire wrapped around an iron core, the core becomes magnetic and attracts the steel. When the current is switched off, the load is released. You can investigate the same effect in your school classroom using a coil of wire wrapped around an iron rod to pick up paper clips.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="mag4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b6c4cf"/><stop offset="1" stop-color="#7d8a96"/></linearGradient></defs><rect width="560" height="280" fill="#ffffff"/><line x1="60" y1="30" x2="60" y2="120" stroke="#5b6b78" stroke-width="6"/><line x1="60" y1="34" x2="260" y2="34" stroke="#5b6b78" stroke-width="6"/><text x="160" y="22" font-size="13" font-weight="700" fill="#1f2d3a">Scrap-metal lifting electromagnet</text><line x1="260" y1="34" x2="260" y2="70" stroke="#2c3e50" stroke-width="3"/><rect x="210" y="70" width="100" height="34" rx="6" fill="url(#mag4)" stroke="#5b6b78"/><g stroke="#0b7285" stroke-width="2.5"><line x1="222" y1="104" x2="222" y2="130"/><line x1="242" y1="104" x2="242" y2="130"/><line x1="262" y1="104" x2="262" y2="130"/><line x1="282" y1="104" x2="282" y2="130"/><line x1="298" y1="104" x2="298" y2="130"/></g><rect x="206" y="104" width="108" height="10" fill="#0b7285"/><text x="330" y="100" font-size="11" fill="#0b7285">coil + iron core</text><g fill="#8a99a6" stroke="#5b6b78"><rect x="226" y="138" width="20" height="14"/><rect x="252" y="138" width="20" height="14"/><rect x="278" y="138" width="20" height="14"/><rect x="240" y="156" width="20" height="14"/><rect x="266" y="156" width="20" height="14"/></g><text x="262" y="190" font-size="11" text-anchor="middle" fill="#5b6b78">steel scrap (load)</text><rect x="60" y="200" width="80" height="44" rx="4" fill="#222222"/><text x="100" y="220" font-size="11" fill="#3ad36a" text-anchor="middle" font-family="monospace">A</text><text x="100" y="236" font-size="9" fill="#9bb9cf" text-anchor="middle">power + ammeter</text><line x1="140" y1="222" x2="206" y2="109" stroke="#c0392b" stroke-width="2"/></svg>',
      },
      caption: 'A scrap-metal crane electromagnet, and the classroom version using a coil on an iron rod.',
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
        text: 'Using your knowledge of electromagnets and the way the scrap-metal crane works, **formulate** a testable hypothesis that could test your research question from part (a).',
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

  // ─── Q5: Steel washer electromagnet investigation (15 marks, Criterion C) ───
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Magnetism — Steel Washer Investigation',
    marks: 15,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['data collection', 'data processing', 'graph analysis', 'proportional relationships'], level: 'proficient' },
    stem: 'Two different groups of students in your class investigate whether the strength of an electromagnet is affected by the spacing of the turns wrapped around an iron rod. They keep the current constant at 2 A. Your teacher tells the class that:\n\n**magnetic force ~ current × number of turns per centimetre**\n\nThe first group of students uses large steel washers, each with a weight of 0.3 N, to determine the weight supported by the electromagnet.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="240" fill="#ffffff"/><text x="260" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Electromagnet lifting steel washers</text><rect x="240" y="40" width="40" height="70" rx="6" fill="#b6c4cf" stroke="#7d8a96"/><g stroke="#0b7285" stroke-width="2.5"><line x1="246" y1="50" x2="274" y2="50"/><line x1="246" y1="62" x2="274" y2="62"/><line x1="246" y1="74" x2="274" y2="74"/><line x1="246" y1="86" x2="274" y2="86"/><line x1="246" y1="98" x2="274" y2="98"/></g><text x="300" y="80" font-size="11" fill="#0b7285">coil on iron rod</text><g fill="none" stroke="#5b6b78" stroke-width="3"><ellipse cx="260" cy="124" rx="22" ry="7"/><ellipse cx="260" cy="142" rx="22" ry="7"/><ellipse cx="260" cy="160" rx="22" ry="7"/><ellipse cx="260" cy="178" rx="22" ry="7"/></g><text x="300" y="156" font-size="11" fill="#5b6b78">steel washers (0.3 N each)</text><rect x="60" y="60" width="70" height="40" rx="4" fill="#222222"/><text x="95" y="85" font-size="11" fill="#3ad36a" text-anchor="middle" font-family="monospace">2.0 A</text><line x1="130" y1="80" x2="240" y2="60" stroke="#c0392b" stroke-width="2"/></svg>',
      },
      caption: 'The electromagnet supports a chain of steel washers; the number of washers it holds measures its strength.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Present** the data from the tablet in a table.',
        marks: 3,
        ph: 'Draw a table with clear headings and units. Include all 6 data rows (coil length / cm vs number of washers): 1.0→6, 2.0→3, 3.0→2, 4.0→1, 5.0→1, 6.0→1.',
      },
      {
        label: 'b',
        text: '**Calculate** the number of turns per centimetre and the total washer weight for each measurement. Present this processed data in a second table.',
        marks: 4,
        ph: 'Calculate turns per cm (= turns ÷ length/cm) and weight/N (= washers × 0.3 N) for each row. Show working and correct units (cm⁻¹ and N). All values to 1 d.p.',
      },
      {
        label: 'c',
        text: 'The first group used large steel washers in their experiment. The second group uses small steel tacks, each with a weight of 0.01 N. **Justify** why the second group of students will produce a better set of data.',
        marks: 2,
        ph: 'This would lead to more accurate data because small tacks produce a more precise measure of weight supported (0.01 N increments vs 0.3 N increments).',
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
            points: [[1.0, 0.30], [2.0, 0.60], [3.0, 0.90], [4.0, 1.20], [5.0, 1.50], [6.0, 1.80]],
            readouts: [{ x: 3.0, note: 'read weight at 3.0 cm⁻¹' }],
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
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="liq6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Capillary tubes of different diameters</text><rect x="60" y="180" width="440" height="34" fill="url(#liq6)" stroke="#3f7e98"/><text x="498" y="200" font-size="11" fill="#2c5468">water</text><g><rect x="110.5" y="70" width="9" height="110" fill="none" stroke="#7d8a96"/><rect x="111.5" y="96" width="7" height="84" fill="url(#liq6)"/><text x="115" y="236" font-size="11" text-anchor="middle" fill="#5b6b78">A</text><text x="115" y="252" font-size="10" text-anchor="middle" fill="#5b6b78">1.0 mm</text></g><g><rect x="200" y="70" width="14" height="110" fill="none" stroke="#7d8a96"/><rect x="201" y="123" width="12" height="57" fill="url(#liq6)"/><text x="207" y="236" font-size="11" text-anchor="middle" fill="#5b6b78">B</text><text x="207" y="252" font-size="10" text-anchor="middle" fill="#5b6b78">1.5 mm</text></g><g><rect x="290" y="70" width="18" height="110" fill="none" stroke="#7d8a96"/><rect x="291" y="138" width="16" height="42" fill="url(#liq6)"/><text x="299" y="236" font-size="11" text-anchor="middle" fill="#5b6b78">C</text><text x="299" y="252" font-size="10" text-anchor="middle" fill="#5b6b78">2.0 mm</text></g><g><rect x="380.5" y="70" width="23" height="110" fill="none" stroke="#7d8a96"/><rect x="381.5" y="147" width="21" height="33" fill="url(#liq6)"/><text x="392" y="236" font-size="11" text-anchor="middle" fill="#5b6b78">D</text><text x="392" y="252" font-size="10" text-anchor="middle" fill="#5b6b78">2.5 mm</text></g><line x1="60" y1="90" x2="60" y2="180" stroke="#1f2d3a"/><line x1="56" y1="90" x2="64" y2="90" stroke="#1f2d3a"/><line x1="56" y1="135" x2="64" y2="135" stroke="#1f2d3a"/><line x1="56" y1="180" x2="64" y2="180" stroke="#1f2d3a"/><g font-size="9" fill="#1f2d3a" text-anchor="end"><text x="52" y="93">30</text><text x="52" y="138">15</text><text x="52" y="183">0</text></g><text x="28" y="135" font-size="10" fill="#1f2d3a" text-anchor="middle" transform="rotate(-90 28 135)">height / mm</text></svg>',
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
              ['A', '1.0', '1.00', '28.0'],
              ['B', '1.5', '0.67', '19.0'],
              ['C', '2.0', '0.50', ''],
              ['D', '2.5', '0.40', '11.0'],
            ],
          },
          caption: 'Measured capillary rise for four tubes. Complete the row for tube C.',
        },
        ph: 'Read tube C height from the diagram (≈ 14.0 mm) and enter: C: diameter 2.0 mm, 1/diameter = 0.50 mm⁻¹, height = 14.0 mm.',
      },
      {
        label: 'b',
        text: '**Plot** your measured value on the graph below, and draw a line of best fit. You should add labels to the axes.',
        marks: 4,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'plot',
            xAxis: { label: '1 / diameter / mm⁻¹', min: 0, max: 1.0, tick: 0.1 },
            yAxis: { label: 'height of water / mm', min: 0, max: 30, tick: 5 },
            dataTable: [{ x: 1.00, y: 28.0 }, { x: 0.67, y: 19.0 }, { x: 0.40, y: 11.0 }],
            plotMissing: [0.50, 14.0],
          },
          caption: 'Plot the missing point (tube C) and draw a line of best fit through the origin.',
        },
        ph: 'Plot point C at (0.50, 14.0). Draw line of best fit (through origin, approximately equal points above and below). Label x-axis: "1/diameter / mm⁻¹" and y-axis: "Height of liquid / mm".',
      },
      {
        label: 'c',
        text: '**Calculate** the capillary constant from the graph. You must show your working in your answer.',
        marks: 3,
        ph: 'Choose two points on the line of best fit with Δy ≥ 20 mm. Calculate gradient = Δy / Δx. Capillary constant ≈ 28 mm² (accept 24–32).',
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

  // ─── Q7: Design investigation — salt concentration and capillary action (13 marks, Criterion B) ───
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Pressure — Capillary Action Design',
    marks: 13,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    tags: { unit: 'pressure', topics: ['experimental design', 'variables', 'method', 'data collection'], level: 'advanced' },
    stem: 'You decide to extend the experiment and investigate how the salt concentration of the water affects the height that the water rises up a capillary tube.',
    tasks: [
      {
        label: 'a',
        text: '**Design** an investigation that you could use to carry out this investigation. In your plan, you must include:\n- a research question\n- the independent, dependent and one control variable\n- the equipment you need and how it will be used\n- your method for manipulating the variables\n- how you will collect sufficient data',
        marks: 13,
        ph: 'Research question: How does salt concentration affect the height water rises in a capillary tube?\nIV: salt concentration (g per 100 mL); DV: height of water rise (mm); CV: tube diameter, water temperature, tube length.\nEquipment: capillary tube(s), balance, measuring cylinder, ruler, beaker, water, salt.\nMethod: prepare at least 5 different salt concentrations; measure height of rise in each case; repeat 3 times; calculate mean.\nData: record in table with concentrations and height values; at least 5 increments AND 3 trials to calculate mean.',
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
    stem: 'To move large numbers of commuters quickly between city districts, some transport planners use the maglev (magnetic levitation) train. This type of train is lifted and driven by powerful electromagnets instead of running on wheels along a rail.',
    tasks: [
      {
        label: 'a',
        text: 'Some metals are attracted to magnets, some are not. **Select** the metal that is attracted to magnets.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Aluminium', 'Brass', 'Steel', 'Zinc'],
        ph: 'Select one metal.',
      },
      {
        label: 'b',
        text: 'Maglev trains use repelling forces between strong electromagnets in the track and on the underside of the train. These electromagnets lift the whole train so it floats about 1 cm above the track. The train can travel at an average speed of 430 km h⁻¹.\n\nIn order to function, the maglev train uses magnetic forces to control three systems: the levitation system, the guidance system, and the propulsion system.\n\n**Identify** the force corresponding to each system in the diagram.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="lev8" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker><marker id="grd8" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2e8b57"/></marker><marker id="prp8" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="560" height="260" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Maglev train — forces</text><rect x="150" y="120" width="260" height="56" rx="22" fill="#3a6ea5" stroke="#234a73"/><path d="M150,142 q-30,0 -30,20 l40,0 Z" fill="#3a6ea5" stroke="#234a73"/><rect x="120" y="190" width="320" height="14" fill="#8a99a6" stroke="#5b6b78"/><text x="280" y="220" font-size="11" text-anchor="middle" fill="#5b6b78">guideway / track</text><line x1="280" y1="186" x2="280" y2="148" stroke="#0b7285" stroke-width="3" marker-end="url(#lev8)"/><text x="290" y="170" font-size="11" fill="#0b7285">blue</text><line x1="240" y1="148" x2="200" y2="148" stroke="#2e8b57" stroke-width="3" marker-end="url(#grd8)"/><text x="196" y="138" font-size="11" fill="#2e8b57">green</text><line x1="410" y1="148" x2="470" y2="148" stroke="#c0392b" stroke-width="3" marker-end="url(#prp8)"/><text x="448" y="138" font-size="11" fill="#c0392b">red</text></svg>',
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
            k: 80,
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
    stem: 'A growing city needs to move large numbers of commuters between its suburbs and its centre every day. Engineers and planners must choose between several transport options. Commuters value low cost, short journey times, comfort and safety. The infographic below compares four ways of making the same 60 km commuter journey across the city.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Commuting 60 km across the city — four options</text><g font-size="11" fill="#1f2d3a"><text x="40" y="70" font-weight="700">Option</text><text x="220" y="70" font-weight="700">Cost</text><text x="320" y="70" font-weight="700">Time</text><text x="430" y="70" font-weight="700">CO2 / trip</text><text x="540" y="70" font-weight="700">Safety</text></g><line x1="30" y1="78" x2="580" y2="78" stroke="#7d8a96"/><g font-size="11" fill="#2c3e50"><text x="40" y="110">Car (drive)</text><text x="220" y="110">$9.0</text><text x="320" y="110">55 min</text><text x="430" y="110">8.4 kg</text><text x="540" y="110">medium</text><text x="40" y="150">Commuter rail</text><text x="220" y="150">$5.0</text><text x="320" y="150">45 min</text><text x="430" y="150">1.6 kg</text><text x="540" y="150">high</text><text x="40" y="190">Express bus</text><text x="220" y="190">$3.0</text><text x="320" y="190">70 min</text><text x="430" y="190">3.2 kg</text><text x="540" y="190">high</text><text x="40" y="230">Bicycle</text><text x="220" y="230">$0.2</text><text x="320" y="230">95 min</text><text x="430" y="230">0.0 kg</text><text x="540" y="230">medium</text></g><line x1="30" y1="118" x2="580" y2="118" stroke="#e3e8ec"/><line x1="30" y1="158" x2="580" y2="158" stroke="#e3e8ec"/><line x1="30" y1="198" x2="580" y2="198" stroke="#e3e8ec"/><g><rect x="40" y="252" width="20" height="14" fill="#c0392b"/><text x="66" y="264" font-size="10" fill="#5b6b78">car</text><rect x="120" y="252" width="20" height="14" fill="#0b7285"/><text x="146" y="264" font-size="10" fill="#5b6b78">rail</text><rect x="200" y="252" width="20" height="14" fill="#f08c00"/><text x="226" y="264" font-size="10" fill="#5b6b78">bus</text><rect x="280" y="252" width="20" height="14" fill="#2e8b57"/><text x="306" y="264" font-size="10" fill="#5b6b78">bicycle</text></g><text x="300" y="300" font-size="10" text-anchor="middle" fill="#94a3ad">Figures are typical values for a single 60 km commuter trip.</text></svg>',
      },
      caption: 'Comparison of four commuter transport options for the same 60 km city journey.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using information from the infographic above and your wider MYP knowledge, choose one of the alternative transportation methods. **Discuss and evaluate** your chosen method compared to driving a car. In your answer you should include:\n- the economic advantages and disadvantages of your chosen method compared to driving\n- the environmental advantages and disadvantages of your chosen method compared to driving\n- the comfort of your chosen method compared to driving\n- the safety of your chosen method compared to driving\n- your final recommendation',
        marks: 15,
        ph: 'Choose commuter rail, express bus, or bicycle. Compare systematically on: cost, CO2/environmental impact, comfort (seating, space, journey experience), safety data, and make a justified final recommendation. Use specific data from the infographic where possible.',
      },
    ],
  },

]
