import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2016 · VARIANT 2  (isomorphic to biology-may-2016)
// Same crit / command term / marks / task structure / tags as the source; every
// question re-tests the SAME concept in a NEW context — different again from v1.
//   Q1 Transport:      lungs/blood → earthworm skin / plant xylem (guard cells)
//   Q2 Cell division:  generic cell → skin wound-healing framing
//   Q3 Twins:          three twin pairs → new trait table (thumb, peak, freckles)
//   Q4 Crit B design:  temp × leaf-disc → temp × duckweed (Lemna) photosynthesis
//   Q5 Crit C data:    distance × bubbles → CO₂ concentration × bubbles (Elodea)
//   Q6 Crit C analysis: water × biomass → hours of light/day × biomass (basil)
//   Q7 Crit B design:  CO₂ conc × rate → light intensity (distance) × rate
//   Q8 Biodiversity:   generic ecosystem → tropical rainforest
//   Q9 Food web:       garden web → grassland (savanna) web
//   Q10 Crit D:        seed banks → plant tissue-culture gene bank (in-vitro)
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2016-v2',
  subject: 'Biology',
  session: 'May',
  year: 2016,
  totalMarks: 120,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────
  // Q1 — Transport (10 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Transport in Living Things',
    topicCanonical: 'Movement & Transport',
    topicGroup: 'Metabolism',
    topicsAlso: ['Diffusion', 'Osmosis'],
    marks: 10,
    stem: 'Living things move substances across cell membranes in different ways, including osmosis, diffusion and active transport. An earthworm exchanges gases through its moist skin, while a plant draws water up from its roots and loses water vapour through tiny pores called stomata.',
    artefact: {
      component: 'ParticleSim',
      data: {
        mode: 'diffusion',
        substance: 'oxygen',
        before: 'High O₂ concentration in the air at the moist skin surface',
        after: 'Low O₂ concentration in the blood beneath the earthworm\'s skin',
      },
      caption: 'Oxygen diffuses from the air (high concentration) into the blood (low concentration) across the earthworm\'s thin, moist skin.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagrams show substances moving into or out of cells.\n\nFor each diagram, **select** the transport mechanism being shown.',
        marks: 2,
        widget: 'inline_dropdown_select',
        widgetItems: [
          'Water taken up by plant root hair cells',
          'Mineral ions pumped into root cells against the gradient',
          'Oxygen taken into the blood across an earthworm\'s skin',
          'Water vapour leaving a leaf through the stomata',
        ],
        widgetOptions: ['Osmosis', 'Diffusion', 'Neither'],
        ph: 'Osmosis; Neither; Diffusion; Diffusion.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="v2t1ah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="260" fill="#ffffff"/><g><text x="80" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">root hair</text><path d="M40,150 q40,-70 80,-20 q30,40 -20,60 q-50,18 -60,-40 Z" fill="#dff0d8" stroke="#2f9e44" stroke-width="2"/><line x1="120" y1="130" x2="160" y2="120" stroke="#0b7285" stroke-width="2" marker-end="url(#v2t1ah)"/><text x="150" y="108" font-size="10" fill="#0b7285">water</text></g><g><text x="230" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">root cell</text><rect x="196" y="80" width="70" height="80" rx="8" fill="#eafaf1" stroke="#2f9e44" stroke-width="2"/><circle cx="180" cy="120" r="6" fill="#f08c00"/><line x1="186" y1="120" x2="200" y2="120" stroke="#0b7285" stroke-width="2" marker-end="url(#v2t1ah)"/><text x="160" y="108" font-size="9" fill="#7a3d12">ion (pumped)</text></g><g><text x="400" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">earthworm skin</text><path d="M360,60 q60,10 60,60 q0,50 -60,60" fill="none" stroke="#c98a6b" stroke-width="6"/><circle cx="430" cy="120" r="20" fill="#fde0dc" stroke="#c0392b"/><text x="430" y="124" font-size="9" text-anchor="middle" fill="#c0392b">blood</text><line x1="350" y1="120" x2="408" y2="120" stroke="#0b7285" stroke-width="2" marker-end="url(#v2t1ah)"/><text x="332" y="124" font-size="10" fill="#0b7285">O₂</text></g><g><text x="540" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">stoma</text><path d="M512,110 q14,-22 28,0 q-14,18 -28,0 Z" fill="#dff0d8" stroke="#2f9e44" stroke-width="2"/><ellipse cx="526" cy="110" rx="6" ry="10" fill="#bfe3f2"/><line x1="526" y1="100" x2="526" y2="60" stroke="#0b7285" stroke-width="2" marker-end="url(#v2t1ah)"/><text x="500" y="54" font-size="9" fill="#0b7285">water vapour</text></g></svg>',
          },
          caption: 'Four examples of substances crossing cell membranes.',
        },
      },
      {
        label: 'b',
        text: '**State** the name of the organ system that carries blood around the body.',
        marks: 1,
        ph: 'Circulatory system.',
      },
      {
        label: 'c',
        text: '**Outline** why the uptake of oxygen from the air into the blood at the earthworm\'s skin does not require energy.',
        marks: 2,
        ph: 'Diffusion is a passive process; oxygen moves down its concentration gradient (high in air → low in blood); no ATP required.',
      },
      {
        label: 'd',
        text: '**State** the name of another system that transmits signals inside the animal body.',
        marks: 1,
        ph: 'Nervous system.',
      },
      {
        label: 'e',
        text: 'Select **one** sense organ from the options: Sight / Hearing / Taste / Smell / Touch.\n\n**Explain** how this sense and the transmission of signals inside the body leads to a response that helps the animal to survive. Use a specific example in your answer.',
        marks: 4,
        ph: 'Select a sense → describe stimulus → receptor detects stimulus → nerve impulse sent to brain → brain interprets → effector produces response → explain how response aids survival.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q2 — DNA & Cell Division (12 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'DNA & Cell Division',
    topicCanonical: 'Cell Division (Mitosis & Meiosis)',
    topicGroup: 'Evolution',
    topicsAlso: ['DNA & Genetics'],
    marks: 12,
    stem: 'When you cut your skin, the wound heals as the skin cells around it divide by mitosis to make new, identical cells that close the gap.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="240" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Anaphase of mitosis (skin cell)</text><ellipse cx="300" cy="130" rx="150" ry="80" fill="#fdeee6" stroke="#c98a6b" stroke-width="2.5"/><g stroke="#e0a98a" stroke-width="1.5"><line x1="160" y1="130" x2="270" y2="95"/><line x1="160" y1="130" x2="270" y2="165"/><line x1="440" y1="130" x2="330" y2="95"/><line x1="440" y1="130" x2="330" y2="165"/></g><circle cx="160" cy="130" r="6" fill="#0b7285"/><circle cx="440" cy="130" r="6" fill="#0b7285"/><text x="150" y="118" font-size="10" fill="#0b7285">pole</text><text x="430" y="118" font-size="10" fill="#0b7285">pole</text><g fill="#0b7285" stroke="#075563"><path d="M262,88 q10,-14 0,-28 q-12,14 0,28 Z"/><path d="M278,88 q10,-14 0,-28 q-12,14 0,28 Z"/><path d="M262,172 q10,14 0,28 q-12,-14 0,-28 Z"/><path d="M278,172 q10,14 0,28 q-12,-14 0,-28 Z"/></g><g fill="#0b7285" stroke="#075563"><path d="M322,88 q10,-14 0,-28 q-12,14 0,28 Z"/><path d="M338,88 q10,-14 0,-28 q-12,14 0,28 Z"/><path d="M322,172 q10,14 0,28 q-12,-14 0,-28 Z"/><path d="M338,172 q10,14 0,28 q-12,-14 0,-28 Z"/></g><text x="220" y="60" font-size="11" fill="#075563">chromatids → poles</text></svg>',
      },
      caption: 'A dividing skin cell in anaphase: sister chromatids are pulled to opposite poles, so each new cell is genetically identical.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the molecule that stores genetic information inside a cell.',
        marks: 1,
        ph: 'DNA (deoxyribonucleic acid).',
      },
      {
        label: 'b',
        text: '**Outline** the events that happen during **anaphase** that are crucial for two identical cells to be formed.',
        marks: 3,
        ph: 'Centromeres split; spindle fibres shorten/contract; chromatids pulled to opposite poles; each pole receives complete set of chromosomes.',
      },
      {
        label: 'c',
        text: '**Outline** three differences between the products of mitosis and the products of meiosis.',
        marks: 3,
        ph: 'Mitosis → 2 cells; meiosis → 4 cells. Mitosis → diploid (2n); meiosis → haploid (n). Mitosis → genetically identical; meiosis → genetically varied.',
      },
      {
        label: 'd',
        text: '**Describe** one problem that can occur to the genetic molecule during meiosis and how this might affect the offspring.',
        marks: 2,
        ph: 'Non-disjunction: chromosomes fail to separate → offspring receives extra/fewer chromosomes (e.g. trisomy/Down syndrome). OR mutation: change in DNA base sequence.',
      },
      {
        label: 'e',
        text: '**Explain** how one process that occurs during meiosis leads to genetic differences in offspring of the same parents.',
        marks: 3,
        ph: 'Crossing over: homologous chromosomes exchange segments → new allele combinations on chromosomes. OR independent assortment: random orientation of homologous pairs → many possible allele combinations in gametes.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q3 — Identical Twins (7 marks, Criterion A/C)
  // ─────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Genetics & Identical Twins',
    topicCanonical: 'Inheritance & Variation',
    topicGroup: 'Evolution',
    topicsAlso: ['DNA & Genetics'],
    marks: 7,
    stem: 'Identical twins develop from a single fertilised egg, so they share the same genes and are genetically identical. The photographs show three pairs of identical twins who have grown up in different environments.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="220" fill="#ffffff"/><g><text x="100" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pair 1</text><circle cx="75" cy="80" r="26" fill="#f1c27d" stroke="#c98a3c"/><circle cx="125" cy="80" r="26" fill="#f1c27d" stroke="#c98a3c"/><rect x="60" y="106" width="30" height="46" rx="8" fill="#9c36b5"/><rect x="118" y="106" width="14" height="46" rx="7" fill="#9c36b5"/><text x="100" y="172" font-size="10" text-anchor="middle" fill="#5b6b78">one is much thinner</text></g><g><text x="300" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pair 2</text><circle cx="275" cy="80" r="26" fill="#f1c27d" stroke="#c98a3c"/><circle cx="325" cy="80" r="26" fill="#f1c27d" stroke="#c98a3c"/><g fill="#7a3d12"><circle cx="268" cy="78" r="1.5"/><circle cx="278" cy="84" r="1.5"/><circle cx="272" cy="90" r="1.5"/></g><rect x="260" y="106" width="30" height="46" rx="8" fill="#1971c2"/><rect x="310" y="106" width="30" height="46" rx="8" fill="#1971c2"/><text x="300" y="172" font-size="10" text-anchor="middle" fill="#5b6b78">one has more freckles</text></g><g><text x="500" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pair 3</text><circle cx="475" cy="80" r="26" fill="#f1c27d" stroke="#c98a3c"/><circle cx="525" cy="80" r="26" fill="#f1c27d" stroke="#c98a3c"/><path d="M463,58 q12,-14 24,0" fill="none" stroke="#3a2e22" stroke-width="3"/><path d="M513,58 q12,-14 24,0" fill="none" stroke="#cfcfcf" stroke-width="3"/><rect x="460" y="106" width="30" height="46" rx="8" fill="#e8590c"/><rect x="510" y="106" width="30" height="46" rx="8" fill="#e8590c"/><text x="500" y="172" font-size="10" text-anchor="middle" fill="#5b6b78">one has greyer hair</text></g></svg>',
      },
      caption: 'Three pairs of identical twins. Each pair shows at least one visible difference.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** one pair of twins shown in the photographs and **identify** one feature of those twins that is different between the two individuals.',
        marks: 1,
        ph: 'Any pair — state distinguishing feature e.g. body weight, number of freckles, hair greyness.',
      },
      {
        label: 'b',
        text: '**Suggest** one factor that could account for the difference you identified in (a).',
        marks: 1,
        ph: 'Environmental factor e.g. diet/exercise (body weight), sun exposure (freckles), age/stress (hair greyness).',
      },
      {
        label: 'c',
        text: '**Outline** a reason why the difference seen in the twins may not be seen in the children of each twin.',
        marks: 2,
        ph: 'Environmental modification is not heritable; it is not encoded in DNA; children inherit genes not acquired characteristics; any child of either twin may or may not express the phenotype depending on their own environment.',
      },
      {
        label: 'd',
        text: 'The table below shows characteristics of four people — A, B, C and D.\n\n**Identify** which two people are identical twins. **Justify** your answer using at least two examples from the table.',
        marks: 3,
        ph: 'A and D are identical twins. Both have a widow\'s peak (genetic) and both have a hitchhiker\'s thumb (genetic). The difference in freckles (D has more) is environmental and does not rule them out.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Characteristic', 'Person A', 'Person B', 'Person C', 'Person D'],
            rows: [
              ['Widow\'s peak hairline (genetic)', 'Yes', 'No', 'No', 'Yes'],
              ['Hitchhiker\'s thumb (genetic)', 'Yes', 'Yes', 'No', 'Yes'],
              ['Blood group (genetic)', 'O', 'A', 'A', 'O'],
              ['Freckles (environmental)', 'Few', 'Few', 'Many', 'Many'],
            ],
          },
          caption: 'Characteristics of four people. Genetic traits are inherited; environmental traits are acquired.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q4 — Photosynthesis Investigation Design (18 marks, Criterion A/B)
  // ─────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Photosynthesis Investigation Design',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 18,
    stem: 'A student wants to investigate how temperature affects the rate of photosynthesis. Small floating plants of duckweed (Lemna) are placed in a dish of sodium hydrogen carbonate solution and lit from above. As the duckweed photosynthesises, the dissolved oxygen it produces is measured each minute with an oxygen sensor, which is used as a measure of the rate of photosynthesis. The dish is kept in water baths at different temperatures.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="v2t4lamp" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="560" height="300" fill="#ffffff"/><circle cx="280" cy="60" r="24" fill="url(#v2t4lamp)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="266" y1="86" x2="252" y2="108"/><line x1="280" y1="88" x2="280" y2="110"/><line x1="294" y1="86" x2="308" y2="108"/></g><text x="330" y="62" font-size="11" fill="#9a7d0f">lamp above</text><rect x="170" y="130" width="220" height="100" rx="6" fill="#cfe9f6" stroke="#3f7e98" stroke-width="2"/><g fill="#2f9e44" stroke="#1f7a32"><ellipse cx="220" cy="142" rx="14" ry="7"/><ellipse cx="260" cy="146" rx="14" ry="7"/><ellipse cx="305" cy="142" rx="14" ry="7"/><ellipse cx="345" cy="146" rx="14" ry="7"/></g><text x="280" y="120" font-size="11" text-anchor="middle" fill="#1f7a32">floating duckweed (Lemna)</text><rect x="370" y="150" width="14" height="70" rx="3" fill="#222"/><circle cx="377" cy="220" r="6" fill="#3ad36a"/><text x="402" y="180" font-size="10" fill="#5b6b78">O₂ sensor</text><rect x="150" y="235" width="240" height="40" rx="4" fill="#dff0f7" stroke="#3f7e98"/><text x="270" y="260" font-size="11" text-anchor="middle" fill="#2c5468">water bath (set temperature)</text></svg>',
      },
      caption: 'Apparatus: lit duckweed (Lemna) in sodium hydrogen carbonate solution, held in a water bath. An oxygen sensor measures the rate of photosynthesis.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Organize** the following molecules into the correct positions to show the word equation for photosynthesis:\n\n*carbon dioxide, water, glucose, oxygen*\n\n___BLANK_1___ + ___BLANK_2___ → ___BLANK_3___ + ___BLANK_4___',
        marks: 1,
        widget: 'fill_blank',
        widgetOptions: ['carbon dioxide', 'water', 'glucose', 'oxygen'],
        ph: 'water + carbon dioxide → glucose + oxygen (reactants and products in either order).',
      },
      {
        label: 'b',
        text: '**State** the problem being tested by this experiment.',
        marks: 1,
        ph: 'How does temperature affect the rate of photosynthesis (as measured by the dissolved oxygen produced per minute)?',
      },
      {
        label: 'c',
        text: '**Formulate** a testable hypothesis for this investigation. Include a scientific reason for your prediction.',
        marks: 4,
        ph: 'If temperature increases then the rate of photosynthesis will increase (up to an optimum) because higher temperatures increase enzyme activity which speeds up the reactions of photosynthesis; above the optimum the enzymes denature and the rate falls.',
      },
      {
        label: 'd',
        text: '**State** the variables for this investigation and **outline** how each will be manipulated or measured.',
        marks: 10,
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: [
          'Temperature of water bath',
          'Dissolved oxygen produced per minute',
          'Species of plant used',
          'Number of duckweed plants used',
          'Volume of sodium hydrogen carbonate solution',
          'Light intensity/distance from lamp',
          'Concentration of sodium hydrogen carbonate',
          'Time allowed before taking readings',
        ],
        ph: 'IV: temperature. DV: dissolved oxygen per minute. CV: plant species, number of plants, solution volume, light intensity, NaHCO₃ concentration.',
      },
      {
        label: 'e',
        text: '**State** how many trials you would carry out and **justify** your choice.',
        marks: 2,
        ph: 'At least 3–5 trials; repetition increases reliability/reduces effect of anomalous results; allows calculation of a mean.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — CO₂ Concentration & Rate of Photosynthesis (10 marks, Criterion C)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Photosynthesis Data & Graphs',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 10,
    stem: 'Carbon dioxide is a raw material for photosynthesis. A student investigated the rate of photosynthesis of pondweed at different carbon dioxide concentrations by dissolving different amounts of sodium hydrogen carbonate in the water and counting the number of bubbles produced per minute.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="v2t5lamp" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="560" height="280" fill="#ffffff"/><rect x="220" y="70" width="150" height="160" rx="6" fill="#cfe9f6" stroke="#3f7e98" stroke-width="2"/><line x1="280" y1="225" x2="280" y2="110" stroke="#2f9e44" stroke-width="4"/><g stroke="#2f9e44" stroke-width="2.5"><line x1="280" y1="140" x2="262" y2="128"/><line x1="280" y1="165" x2="298" y2="153"/></g><g fill="#bfe3f2" stroke="#6cb6d6"><circle cx="286" cy="108" r="4"/><circle cx="292" cy="98" r="3"/><circle cx="284" cy="90" r="3.5"/></g><text x="318" y="100" font-size="10" fill="#0b7285">O₂ bubbles</text><g fill="#eaf6e9" stroke="#2f9e44"><circle cx="240" cy="200" r="5"/><circle cx="255" cy="210" r="4"/><circle cx="315" cy="205" r="5"/></g><text x="295" y="245" font-size="10" text-anchor="middle" fill="#1f7a32">NaHCO₃ (CO₂ source) dissolved in water</text><circle cx="110" cy="150" r="28" fill="url(#v2t5lamp)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="142" y1="138" x2="215" y2="150"/><line x1="142" y1="150" x2="215" y2="162"/><line x1="142" y1="162" x2="215" y2="174"/></g><text x="110" y="196" font-size="11" text-anchor="middle" fill="#9a7d0f">lamp (fixed)</text><text x="295" y="56" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pondweed photosynthesis vs CO₂ concentration</text></svg>',
      },
      caption: 'Pondweed in water with dissolved sodium hydrogen carbonate (a CO₂ source); the student counts the bubbles released per minute.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Design** a data collection table to record the number of bubbles per minute at five different carbon dioxide concentrations (0.1, 0.2, 0.3, 0.4 and 0.5 % sodium hydrogen carbonate). Include three trials and a mean.',
        marks: 4,
        ph: 'Table: column headers = Trial 1, Trial 2, Trial 3, Mean; row headers = CO₂ concentrations (0.1–0.5 %); units shown; title included.',
      },
      {
        label: 'b',
        text: 'The data table below shows results collected by the student.\n\n**Calculate** the mean number of bubbles per minute at each concentration.',
        marks: 3,
        ph: '0.1 % → 8; 0.2 % → 19; 0.3 % → 30; 0.4 % → 38; 0.5 % → 40.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['CO₂ concentration / %', 'Trial 1 / min⁻¹', 'Trial 2 / min⁻¹', 'Trial 3 / min⁻¹', 'Mean / min⁻¹'],
            rows: [
              ['0.1', '7', '9', '8', ''],
              ['0.2', '20', '18', '19', ''],
              ['0.3', '31', '29', '30', ''],
              ['0.4', '39', '38', '37', ''],
              ['0.5', '41', '40', '39', ''],
            ],
          },
          caption: 'Bubbles per minute at five CO₂ concentrations over three trials. Calculate the mean for each row.',
        },
      },
      {
        label: 'c',
        text: '**Present** the transformed data (means) in an appropriate graph. Label the axes and give the graph a title.',
        marks: 3,
        ph: 'Line graph; x-axis = CO₂ concentration (%); y-axis = mean bubbles per minute; plotted correctly; title; units; curve levels off (plateau) at high concentration.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Light Hours & Biomass Investigation Analysis (14 marks, Criterion C)
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Biomass Investigation Analysis',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Osmosis'],
    marks: 14,
    stem: 'A student tested the hypothesis: "If one group of basil plants receives more hours of light per day than the other group, then the biomass of those plants increases more." Two groups of identical basil seedlings were grown under lamps; one group received 8 hours of light per day and the other received 16 hours per day. The mean biomass of the plants was measured at the start and end of the investigation.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Mean biomass of basil plants over six weeks',
        xLabel: 'Time',
        yLabel: 'Mean biomass',
        xUnit: 'weeks',
        yUnit: 'g',
        xMax: 6,
        yMax: 40,
        xStep: 1,
        yStep: 10,
        dataPoints: [
          { x: 0, y: 5 },
          { x: 6, y: 17 },
          { x: 0, y: 5 },
          { x: 6, y: 33 },
        ],
      },
      caption: '8 h/day group rises from 5 g to 17 g; 16 h/day group rises from 5 g to 33 g over six weeks.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the data, **state** one trend shown in the results.',
        marks: 1,
        ph: 'Plants receiving more hours of light (16 h) showed a greater increase in biomass than those receiving fewer hours (8 h).',
      },
      {
        label: 'b',
        text: '**Explain** one scientific reason for the difference in the final and initial mean average biomass of the plants.',
        marks: 3,
        ph: 'More hours of light means more time for photosynthesis; light is needed for photosynthesis; more photosynthesis → more glucose → more organic molecules → greater biomass.',
      },
      {
        label: 'c',
        text: 'Using the data, **comment** on whether the results support the hypothesis stated above.',
        marks: 1,
        ph: 'Results support hypothesis; 16 h group has greater mean biomass increase (28 g) than 8 h group (12 g).',
      },
      {
        label: 'd',
        text: '**Describe** one strength and one weakness of the method used in this investigation.',
        marks: 4,
        ph: 'Strength: e.g. multiple plants used → more reliable mean. Weakness: e.g. only two light periods tested → limited range; or only one factor changed.',
      },
      {
        label: 'e',
        text: '**Outline** two improvements to this investigation. **Justify** how each improvement would enhance the investigation.',
        marks: 4,
        ph: 'Improvement 1: test more light periods (e.g. 4, 8, 12, 16, 20 h) → identifies optimum. Improvement 2: repeat with more plant replicates → increases reliability of mean.',
      },
      {
        label: 'f',
        text: 'Suggest **one** extension to this investigation other than changing temperature or light intensity.',
        marks: 1,
        ph: 'Investigate effect of CO₂ concentration, water amount, fertiliser type, or plant species on plant biomass.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q7 — Photosynthesis Investigation Design (16 marks, Criterion B)
  // ─────────────────────────────────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Photosynthesis Experiment Design (Criteria B)',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 16,
    stem: 'You are asked to design an investigation to study the effect of light intensity on the rate of photosynthesis. Light intensity can be changed by moving a lamp closer to or further from the plant. The equipment available includes: aquatic plants, a lamp, a ruler, sodium hydrogen carbonate solution, a stopwatch, and a collection vessel.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="v2t7lamp" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="560" height="240" fill="#ffffff"/><circle cx="80" cy="120" r="26" fill="url(#v2t7lamp)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="112" y1="110" x2="200" y2="118"/><line x1="112" y1="120" x2="200" y2="130"/><line x1="112" y1="130" x2="200" y2="142"/></g><text x="80" y="162" font-size="11" text-anchor="middle" fill="#9a7d0f">lamp (move on ruler)</text><line x1="60" y1="180" x2="500" y2="180" stroke="#94a3ad"/><g font-size="9" fill="#94a3ad"><text x="60" y="196">0</text><text x="180" y="196">10</text><text x="300" y="196">20</text><text x="420" y="196">30 cm</text></g><line x1="180" y1="174" x2="180" y2="184" stroke="#94a3ad"/><line x1="300" y1="174" x2="300" y2="184" stroke="#94a3ad"/><line x1="420" y1="174" x2="420" y2="184" stroke="#94a3ad"/><rect x="260" y="60" width="120" height="100" rx="6" fill="#cfe9f6" stroke="#3f7e98" stroke-width="2"/><line x1="320" y1="155" x2="320" y2="84" stroke="#2f9e44" stroke-width="4"/><g stroke="#2f9e44" stroke-width="2.5"><line x1="320" y1="110" x2="304" y2="100"/><line x1="320" y1="128" x2="336" y2="118"/></g><g fill="#bfe3f2" stroke="#6cb6d6"><circle cx="326" cy="82" r="4"/><circle cx="332" cy="74" r="3"/></g><text x="360" y="78" font-size="10" fill="#0b7285">O₂</text><text x="320" y="46" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Light intensity on an aquatic plant</text></svg>',
      },
      caption: 'A lamp on a ruler is moved closer to or further from an aquatic plant to change the light intensity; bubbles released per minute measure the rate of photosynthesis.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** a complete investigation to test how light intensity affects the rate of photosynthesis. Your answer should include:\n- a testable hypothesis with scientific reasoning\n- identification and justification of the independent, dependent and control variables\n- a step-by-step method that could be followed by another student\n- a description of how the variables will be measured and controlled\n- a labelled data collection table\n- a description of how the data will be processed and presented.',
        marks: 16,
        ph: 'Hypothesis: If light intensity increases (lamp moved closer), the rate of photosynthesis increases, because light provides the energy for the light-dependent stage. IV: light intensity (distance of lamp). DV: bubbles per minute. CV: temperature, CO₂ concentration, plant type. Method: place plant at set distances; count bubbles per minute; 3 trials; calculate mean.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q8 — Biodiversity (7 marks, Criterion A/D)
  // ─────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Biodiversity',
    topicCanonical: 'Biodiversity',
    topicGroup: 'Evolution',
    topicsAlso: ['Human Influences', 'Interdependency'],
    marks: 7,
    stem: 'Tropical rainforests contain more species than any other land ecosystem. Their many layers, from the forest floor to the high canopy, provide homes for huge numbers of plants, insects, birds and mammals.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="v2t8sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dff3fb"/><stop offset="1" stop-color="#eaf6e9"/></linearGradient></defs><rect width="600" height="260" fill="url(#v2t8sky)"/><rect x="0" y="225" width="600" height="35" fill="#7a5a32"/><g stroke="#6b4f2a" stroke-width="10" stroke-linecap="round"><line x1="120" y1="225" x2="120" y2="120"/><line x1="320" y1="225" x2="320" y2="90"/><line x1="500" y1="225" x2="500" y2="140"/></g><g fill="#2f9e44"><ellipse cx="120" cy="110" rx="60" ry="40"/><ellipse cx="320" cy="80" rx="80" ry="50"/><ellipse cx="500" cy="130" rx="55" ry="38"/></g><g fill="#37b24d"><ellipse cx="220" cy="150" rx="40" ry="26"/><ellipse cx="420" cy="160" rx="36" ry="24"/></g><circle cx="300" cy="70" r="6" fill="#f08c00"/><circle cx="312" cy="78" r="5" fill="#d6336c"/><ellipse cx="180" cy="200" rx="9" ry="5" fill="#9c36b5"/><ellipse cx="470" cy="205" rx="8" ry="4" fill="#1971c2"/><path d="M90,210 q6,-12 12,0" fill="none" stroke="#7a3d12" stroke-width="2"/><text x="300" y="252" font-size="11" text-anchor="middle" fill="#4a3a1a">forest floor</text><text x="300" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#1f5c2c">A biodiverse tropical rainforest</text></svg>',
      },
      caption: 'A tropical rainforest supports a great variety of species across its layers, from the forest floor to the canopy.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the meaning of the term *biodiversity*.',
        marks: 1,
        ph: 'The variety of different species of organisms in a given area/ecosystem.',
      },
      {
        label: 'b',
        text: '**Outline** one specific human action that can reduce biodiversity.',
        marks: 2,
        ph: 'Logging/clearing the rainforest destroys habitats → reduces number of species that can survive in the area → biodiversity decreases. Accept: mining, palm-oil plantations, pollution.',
      },
      {
        label: 'c',
        text: '**Explain**, using scientific language, how the loss of one species might affect other organisms in the same ecosystem.',
        marks: 4,
        ph: 'Loss of prey species → predator population declines. Loss of a pollinator → plants that depend on it fail to reproduce. Loss of a producer removes energy input to the food chain. Disrupts food web. Keystone species removal amplifies effects. Ecosystem stability reduced.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q9 — Food Web (5 marks, Criterion A/D)
  // ─────────────────────────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Food Web & Ecosystem Roles',
    topicCanonical: 'Food Chains & Webs',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Interdependency'],
    marks: 5,
    stem: 'The diagram shows the feeding relationships in a grassland (savanna) ecosystem. Arrows point from each organism to the organism that eats it.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Grassland (savanna) food web',
        nodes: [
          { id: 'grass', label: 'Grass', color: '#2f9e44', detail: 'Producer — makes food by photosynthesis.' },
          { id: 'acacia', label: 'Acacia shrub', color: '#37b24d', detail: 'Producer — base of the food web.' },
          { id: 'grasshopper', label: 'Grasshopper', color: '#f08c00', detail: 'Primary consumer (herbivore) — eats grass.' },
          { id: 'gazelle', label: 'Gazelle', color: '#e8590c', detail: 'Primary consumer — grazes on grass and acacia.' },
          { id: 'bird', label: 'Insect-eating bird', color: '#1971c2', detail: 'Secondary consumer — eats grasshoppers.' },
          { id: 'cheetah', label: 'Cheetah', color: '#0b7285', detail: 'Secondary consumer — hunts gazelles.' },
          { id: 'eagle', label: 'Eagle', color: '#9c36b5', detail: 'Top predator — eats insect-eating birds.' },
        ],
        edges: [
          { from: 'grass', to: 'grasshopper' },
          { from: 'grass', to: 'gazelle' },
          { from: 'acacia', to: 'gazelle' },
          { from: 'grasshopper', to: 'bird' },
          { from: 'gazelle', to: 'cheetah' },
          { from: 'bird', to: 'eagle' },
          { from: 'grasshopper', to: 'gazelle' },
          { from: 'bird', to: 'cheetah' },
        ],
      },
      caption: 'A grassland (savanna) food web. Arrows point from prey to predator (towards the organism that eats it).',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the type of diagram shown.',
        marks: 1,
        ph: 'Food web.',
      },
      {
        label: 'b',
        text: 'Using the diagram, **state** the role of the grass and the role of the grasshopper in the ecosystem.',
        marks: 2,
        ph: 'Grass: producer (converts light energy into biomass by photosynthesis). Grasshopper: primary consumer/herbivore (eats plants, transfers energy to secondary consumers).',
      },
      {
        label: 'c',
        text: '**Justify** why both the grass and the grasshopper are equally important to protect in this ecosystem.',
        marks: 2,
        ph: 'Loss of grass removes a food source for grasshoppers and gazelles → food web collapse. Loss of grasshopper removes a food source for the insect-eating bird (and so the eagle) → those populations decline. Both are integral links; loss of either disrupts energy flow through the ecosystem.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q10 — Plant Tissue-Culture Gene Bank (21 marks, Criterion D)
  // ─────────────────────────────────────────────
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Seed Banks & Conservation',
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Biodiversity'],
    marks: 21,
    stem: 'Some plants — such as bananas and many orchids — do not produce seeds that can be dried and stored. To preserve the diversity of these plants, scientists keep them as living "tissue-culture gene banks": tiny pieces of plant tissue are grown on jelly in sterile containers, or stored frozen, so that whole plants can be regrown when needed.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="240" fill="#ffffff"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Plant tissue-culture gene bank</text><g><rect x="60" y="70" width="120" height="130" rx="10" fill="#eafaf1" stroke="#2f9e44" stroke-width="2"/><rect x="60" y="160" width="120" height="40" rx="6" fill="#cfe9b8" stroke="#2f9e44"/><line x1="120" y1="160" x2="120" y2="110" stroke="#2f9e44" stroke-width="3"/><g stroke="#2f9e44" stroke-width="2"><line x1="120" y1="130" x2="108" y2="120"/><line x1="120" y1="130" x2="132" y2="120"/></g><text x="120" y="220" font-size="11" text-anchor="middle" fill="#1f7a32">tissue on nutrient jelly</text></g><g><rect x="240" y="70" width="120" height="130" rx="10" fill="#eafaf1" stroke="#2f9e44" stroke-width="2"/><rect x="240" y="160" width="120" height="40" rx="6" fill="#cfe9b8" stroke="#2f9e44"/><line x1="300" y1="160" x2="300" y2="100" stroke="#2f9e44" stroke-width="3"/><g stroke="#2f9e44" stroke-width="2"><line x1="300" y1="120" x2="286" y2="108"/><line x1="300" y1="120" x2="314" y2="108"/><line x1="300" y1="138" x2="288" y2="128"/><line x1="300" y1="138" x2="312" y2="128"/></g><text x="300" y="220" font-size="11" text-anchor="middle" fill="#1f7a32">plantlet growing</text></g><g><rect x="420" y="70" width="120" height="130" rx="10" fill="#dff3fb" stroke="#0b7285" stroke-width="2"/><rect x="420" y="70" width="120" height="20" rx="8" fill="#0b7285"/><text x="480" y="84" font-size="9" text-anchor="middle" fill="#fff">frozen −196 °C</text><g fill="#37b24d" stroke="#2f9e44"><rect x="440" y="110" width="16" height="36" rx="4"/><rect x="464" y="110" width="16" height="36" rx="4"/><rect x="488" y="110" width="16" height="36" rx="4"/><rect x="512" y="110" width="16" height="36" rx="4"/></g><text x="480" y="220" font-size="11" text-anchor="middle" fill="#075563">cryopreserved tissue</text></g></svg>',
      },
      caption: 'A tissue-culture gene bank keeps plants that cannot be stored as seeds — as living cultures on nutrient jelly or as cryopreserved tissue.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** one reason why tissue-culture gene banks are important.',
        marks: 1,
        ph: 'Preserves the diversity of plants that cannot be stored as seeds; protects species from extinction; maintains genetic resources for future use.',
      },
      {
        label: 'b',
        text: '**Outline** the process used to create and maintain a tissue-culture gene bank.',
        marks: 3,
        ph: 'Take small pieces of plant tissue under sterile conditions; grow them on nutrient jelly containing hormones so they form plantlets; keep them cool or cryopreserve some tissue; sub-culture/regrow regularly to keep the collection alive.',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** the implications of creating and maintaining tissue-culture gene banks. In your extended answer consider:\n- the advantages and disadvantages of tissue-culture gene banks\n- the social, economic and environmental implications\n- whether tissue-culture gene banks are a sufficient long-term strategy for conservation\n- an appraisal of the overall value of tissue-culture gene banks.',
        marks: 17,
        ph: 'Advantages: preserves plants that cannot be stored as seeds, insurance against extinction, can clone many plants, research. Disadvantages: costly, labour-intensive (constant sub-culturing), risk of contamination or mutation, limited to a few cells/genotypes. Social: equity of access, food security (e.g. bananas). Economic: investment needed. Environmental: does not preserve habitat; does not address root causes of biodiversity loss. Evaluation: necessary but not sufficient; must be complemented by habitat conservation. Appraisal.',
      },
    ],
  },
]
