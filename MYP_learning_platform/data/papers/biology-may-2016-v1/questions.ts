import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2016 · VARIANT 1  (isomorphic to biology-may-2016)
// Same crit / command term / marks / task structure / tags as the source; every
// question re-tests the SAME concept in a NEW biological context, with self-
// contained data-driven artefacts (no figImages). Data recomputed throughout.
//   Q1 Transport:      lungs/blood examples → mangrove roots / gut / gills
//   Q2 Cell division:  generic cell → onion root-tip mitosis framing
//   Q3 Twins:          three twin pairs → trait table swapped (new traits)
//   Q4 Crit B design:  temp × leaf-disc photosynthesis → temp × pondweed (Cabomba)
//   Q5 Crit C data:    distance × bubbles → light intensity × bubbles (Elodea)
//   Q6 Crit C analysis: water × biomass → fertiliser (N) × biomass (wheat)
//   Q7 Crit B design:  CO₂ conc × rate → light colour (wavelength) × rate
//   Q8 Biodiversity:   generic ecosystem → coral reef
//   Q9 Food web:       garden web → freshwater pond web
//   Q10 Crit D:        seed banks → frozen zoos (animal cryobanks)
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2016-v1',
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
    stem: 'Living things move substances across cell membranes in different ways, including osmosis, diffusion and active transport. A fish exchanges gases at its gills and a mangrove tree absorbs water through its roots in salty mud.',
    artefact: {
      component: 'ParticleSim',
      data: {
        mode: 'diffusion',
        substance: 'dissolved oxygen',
        before: 'High O₂ concentration in the water flowing over the gill',
        after: 'Low O₂ concentration in the blood inside the gill capillary',
      },
      caption: 'Oxygen diffuses from the water (high concentration) into the blood (low concentration) across the thin gill membrane.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagrams show substances moving into or out of cells.\n\nFor each diagram, **select** the transport mechanism being shown.',
        marks: 2,
        widget: 'inline_dropdown_select',
        widgetItems: [
          'Water taken up by mangrove root hair cells',
          'Amoeba engulfing a food particle',
          'Oxygen taken into the blood across fish gills',
          'Carbon dioxide given out by gill cells',
        ],
        widgetOptions: ['Osmosis', 'Diffusion', 'Neither'],
        ph: 'Osmosis; Neither; Diffusion; Diffusion.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="t1ah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="260" fill="#ffffff"/><g><text x="80" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">root hair</text><path d="M40,150 q40,-70 80,-20 q30,40 -20,60 q-50,18 -60,-40 Z" fill="#dff0d8" stroke="#2f9e44" stroke-width="2"/><line x1="120" y1="130" x2="160" y2="120" stroke="#0b7285" stroke-width="2" marker-end="url(#t1ah)"/><text x="150" y="108" font-size="10" fill="#0b7285">water</text></g><g><text x="230" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">amoeba</text><circle cx="230" cy="120" r="42" fill="#eaf3f7" stroke="#0b7285" stroke-width="2"/><circle cx="230" cy="120" r="14" fill="#cfe9f6" stroke="#3a6ea5"/><circle cx="262" cy="110" r="7" fill="#f08c00"/><path d="M252,108 q12,8 4,18" fill="none" stroke="#0b7285" stroke-width="2" marker-end="url(#t1ah)"/><text x="276" y="100" font-size="9" fill="#7a3d12">food</text></g><g><text x="400" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">gill</text><path d="M360,60 q60,10 60,60 q0,50 -60,60" fill="none" stroke="#c0392b" stroke-width="3"/><circle cx="430" cy="120" r="20" fill="#fde0dc" stroke="#c0392b"/><text x="430" y="124" font-size="9" text-anchor="middle" fill="#c0392b">blood</text><line x1="370" y1="120" x2="408" y2="120" stroke="#0b7285" stroke-width="2" marker-end="url(#t1ah)"/><text x="345" y="124" font-size="10" fill="#0b7285">O₂</text></g><g><text x="535" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">gill cell</text><rect x="500" y="80" width="70" height="80" rx="8" fill="#eafaf1" stroke="#2f9e44" stroke-width="2"/><line x1="535" y1="80" x2="535" y2="50" stroke="#0b7285" stroke-width="2" marker-end="url(#t1ah)"/><text x="544" y="64" font-size="10" fill="#0b7285">CO₂</text></g></svg>',
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
        text: '**Outline** why the uptake of oxygen from the water into the blood at the gills does not require energy.',
        marks: 2,
        ph: 'Diffusion is a passive process; oxygen moves down its concentration gradient (high in water → low in blood); no ATP required.',
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
    stem: 'A scientist examines the dividing cells at the tip of a growing onion root under a microscope. The cells are dividing by mitosis so that the root can grow longer.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="t2ah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#444"/></marker></defs><rect width="600" height="240" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Anaphase of mitosis</text><ellipse cx="300" cy="130" rx="150" ry="80" fill="#eafaf1" stroke="#2f9e44" stroke-width="2.5"/><g stroke="#37b24d" stroke-width="1.5"><line x1="160" y1="130" x2="270" y2="95"/><line x1="160" y1="130" x2="270" y2="165"/><line x1="440" y1="130" x2="330" y2="95"/><line x1="440" y1="130" x2="330" y2="165"/></g><circle cx="160" cy="130" r="6" fill="#0b7285"/><circle cx="440" cy="130" r="6" fill="#0b7285"/><text x="150" y="118" font-size="10" fill="#0b7285">pole</text><text x="430" y="118" font-size="10" fill="#0b7285">pole</text><g fill="#f08c00" stroke="#b86b00"><path d="M262,88 q10,-14 0,-28 q-12,14 0,28 Z"/><path d="M278,88 q10,-14 0,-28 q-12,14 0,28 Z"/><path d="M262,172 q10,14 0,28 q-12,-14 0,-28 Z"/><path d="M278,172 q10,14 0,28 q-12,-14 0,-28 Z"/></g><g fill="#f08c00" stroke="#b86b00"><path d="M322,88 q10,-14 0,-28 q-12,14 0,28 Z"/><path d="M338,88 q10,-14 0,-28 q-12,14 0,28 Z"/><path d="M322,172 q10,14 0,28 q-12,-14 0,-28 Z"/><path d="M338,172 q10,14 0,28 q-12,-14 0,-28 Z"/></g><text x="220" y="60" font-size="11" fill="#b86b00">chromatids → poles</text></svg>',
      },
      caption: 'A root-tip cell in anaphase: sister chromatids are pulled to opposite poles by the spindle fibres.',
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
        svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="220" fill="#ffffff"/><g><text x="100" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pair 1</text><circle cx="75" cy="80" r="26" fill="#f1c27d" stroke="#c98a3c"/><circle cx="125" cy="80" r="26" fill="#e0a96d" stroke="#c98a3c"/><rect x="60" y="106" width="30" height="46" rx="8" fill="#2f9e44"/><rect x="110" y="106" width="30" height="46" rx="8" fill="#2f9e44"/><text x="100" y="172" font-size="10" text-anchor="middle" fill="#5b6b78">one has more tanned skin</text></g><g><text x="300" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pair 2</text><circle cx="275" cy="80" r="26" fill="#f1c27d" stroke="#c98a3c"/><circle cx="325" cy="80" r="26" fill="#f1c27d" stroke="#c98a3c"/><path d="M250,66 q25,-22 50,0" fill="#3a2e22"/><path d="M300,66 q25,-22 50,0" fill="#8a6a3a"/><rect x="260" y="106" width="30" height="46" rx="8" fill="#0b7285"/><rect x="310" y="106" width="30" height="46" rx="8" fill="#0b7285"/><text x="300" y="172" font-size="10" text-anchor="middle" fill="#5b6b78">one has dyed hair</text></g><g><text x="500" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pair 3</text><circle cx="475" cy="80" r="26" fill="#f1c27d" stroke="#c98a3c"/><circle cx="525" cy="80" r="22" fill="#f1c27d" stroke="#c98a3c"/><rect x="458" y="106" width="34" height="50" rx="8" fill="#f08c00"/><rect x="510" y="106" width="30" height="42" rx="8" fill="#f08c00"/><text x="500" y="172" font-size="10" text-anchor="middle" fill="#5b6b78">one is more muscular</text></g></svg>',
      },
      caption: 'Three pairs of identical twins. Each pair shows at least one visible difference.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** one pair of twins shown in the photographs and **identify** one feature of those twins that is different between the two individuals.',
        marks: 1,
        ph: 'Any pair — state distinguishing feature e.g. skin tone, dyed hair, muscle/body build.',
      },
      {
        label: 'b',
        text: '**Suggest** one factor that could account for the difference you identified in (a).',
        marks: 1,
        ph: 'Environmental factor e.g. sun exposure, hair dye, exercise/diet, lifestyle choice.',
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
        ph: 'B and D are identical twins. Both can roll the tongue (genetic) and both have attached earlobes (genetic). The difference in skin tone (D more tanned) is environmental and does not rule them out.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Characteristic', 'Person A', 'Person B', 'Person C', 'Person D'],
            rows: [
              ['Eye colour (genetic)', 'Brown', 'Blue', 'Brown', 'Blue'],
              ['Tongue rolling (genetic)', 'Can', 'Can', 'Cannot', 'Can'],
              ['Earlobes (genetic)', 'Free', 'Attached', 'Free', 'Attached'],
              ['Skin tone (environmental)', 'Pale', 'Pale', 'Tanned', 'Tanned'],
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
    stem: 'A student wants to investigate how temperature affects the rate of photosynthesis. Short pieces of the pondweed Cabomba are placed in a beaker of sodium hydrogen carbonate solution and lit from one side. The student counts the number of gas bubbles released from the cut stem each minute, which is used as a measure of the rate of photosynthesis. The beaker is placed in water baths at different temperatures.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="t4lamp" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="560" height="300" fill="#ffffff"/><rect x="180" y="80" width="160" height="160" rx="6" fill="#cfe9f6" stroke="#3f7e98" stroke-width="2"/><rect x="180" y="80" width="160" height="20" fill="#eaf6fb" stroke="#3f7e98"/><line x1="240" y1="240" x2="240" y2="120" stroke="#2f9e44" stroke-width="4"/><g stroke="#2f9e44" stroke-width="2.5"><line x1="240" y1="150" x2="222" y2="138"/><line x1="240" y1="170" x2="258" y2="158"/><line x1="240" y1="190" x2="222" y2="178"/></g><g fill="#bfe3f2" stroke="#6cb6d6"><circle cx="246" cy="118" r="4"/><circle cx="252" cy="108" r="3"/><circle cx="244" cy="100" r="3.5"/></g><text x="300" y="118" font-size="10" fill="#0b7285">O₂ bubbles</text><circle cx="90" cy="150" r="26" fill="url(#t4lamp)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="120" y1="140" x2="175" y2="150"/><line x1="120" y1="150" x2="175" y2="160"/><line x1="120" y1="160" x2="175" y2="170"/></g><text x="90" y="192" font-size="11" text-anchor="middle" fill="#9a7d0f">lamp</text><rect x="160" y="245" width="200" height="40" rx="4" fill="#dff0f7" stroke="#3f7e98"/><text x="260" y="270" font-size="11" text-anchor="middle" fill="#2c5468">water bath (set temperature)</text><text x="260" y="64" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cabomba pondweed in NaHCO₃ solution</text></svg>',
      },
      caption: 'Apparatus: lit Cabomba pondweed in sodium hydrogen carbonate solution, held in a water bath. Bubbles per minute measure the rate of photosynthesis.',
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
        ph: 'How does temperature affect the rate of photosynthesis (as measured by the number of bubbles per minute)?',
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
          'Number of bubbles per minute',
          'Species of pondweed used',
          'Length of pondweed used',
          'Volume of sodium hydrogen carbonate solution',
          'Light intensity/distance from lamp',
          'Concentration of sodium hydrogen carbonate',
          'Time allowed before counting bubbles',
        ],
        ph: 'IV: temperature. DV: bubbles per minute. CV: pondweed species, pondweed length, solution volume, light intensity, NaHCO₃ concentration.',
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
  // Q5 — Light Intensity & Rate of Photosynthesis (10 marks, Criterion C)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Photosynthesis Data & Graphs',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 10,
    stem: 'Photosynthesis is a light-dependent process. A student investigated the rate of photosynthesis of pondweed at different light intensities by changing the brightness of a lamp and counting the number of bubbles produced per minute.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="t5lamp" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="560" height="280" fill="#ffffff"/><rect x="220" y="70" width="150" height="160" rx="6" fill="#cfe9f6" stroke="#3f7e98" stroke-width="2"/><line x1="280" y1="225" x2="280" y2="110" stroke="#2f9e44" stroke-width="4"/><g stroke="#2f9e44" stroke-width="2.5"><line x1="280" y1="140" x2="262" y2="128"/><line x1="280" y1="165" x2="298" y2="153"/></g><g fill="#bfe3f2" stroke="#6cb6d6"><circle cx="286" cy="108" r="4"/><circle cx="292" cy="98" r="3"/><circle cx="284" cy="90" r="3.5"/></g><text x="318" y="100" font-size="10" fill="#0b7285">O₂ bubbles</text><circle cx="110" cy="150" r="28" fill="url(#t5lamp)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="142" y1="138" x2="215" y2="150"/><line x1="142" y1="150" x2="215" y2="162"/><line x1="142" y1="162" x2="215" y2="174"/></g><text x="110" y="196" font-size="11" text-anchor="middle" fill="#9a7d0f">variable lamp</text><line x1="138" y1="240" x2="372" y2="240" stroke="#94a3ad"/><g font-size="9" fill="#94a3ad"><text x="138" y="256">0</text><text x="250" y="256">distance / brightness varied</text></g><text x="295" y="56" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pondweed photosynthesis vs light intensity</text></svg>',
      },
      caption: 'Pondweed lit by a lamp of adjustable brightness; the student counts the bubbles released per minute.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Design** a data collection table to record the number of bubbles per minute at five different light intensities (20, 40, 60, 80 and 100 % of full brightness). Include three trials and a mean.',
        marks: 4,
        ph: 'Table: column headers = Trial 1, Trial 2, Trial 3, Mean; row headers = light intensities (20–100 %); units shown; title included.',
      },
      {
        label: 'b',
        text: 'The data table below shows results collected by the student.\n\n**Calculate** the mean number of bubbles per minute at each light intensity.',
        marks: 3,
        ph: '20 % → 11; 40 % → 23; 60 % → 34; 80 % → 41; 100 % → 44.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Light intensity / %', 'Trial 1 / min⁻¹', 'Trial 2 / min⁻¹', 'Trial 3 / min⁻¹', 'Mean / min⁻¹'],
            rows: [
              ['20', '10', '12', '11', ''],
              ['40', '24', '22', '23', ''],
              ['60', '33', '35', '34', ''],
              ['80', '42', '40', '41', ''],
              ['100', '45', '44', '43', ''],
            ],
          },
          caption: 'Bubbles per minute at five light intensities over three trials. Calculate the mean for each row.',
        },
      },
      {
        label: 'c',
        text: '**Present** the transformed data (means) in an appropriate graph. Label the axes and give the graph a title.',
        marks: 3,
        ph: 'Line graph; x-axis = light intensity (%); y-axis = mean bubbles per minute; plotted correctly; title; units; curve levels off (plateau) at high intensity.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Fertiliser & Biomass Investigation Analysis (14 marks, Criterion C)
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
    stem: 'A student tested the hypothesis: "If one group of wheat plants receives more nitrogen fertiliser than the other group, then the biomass of those plants increases more." Two groups of identical wheat seedlings were set up; one group received 2 g of nitrogen fertiliser per week and the other received 4 g per week. The mean biomass of the plants was measured at the start and end of the investigation.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Mean biomass of wheat plants over six weeks',
        xLabel: 'Time',
        yLabel: 'Mean biomass',
        xUnit: 'weeks',
        yUnit: 'g',
        xMax: 6,
        yMax: 50,
        xStep: 1,
        yStep: 10,
        dataPoints: [
          { x: 0, y: 8 },
          { x: 6, y: 26 },
          { x: 0, y: 8 },
          { x: 6, y: 44 },
        ],
      },
      caption: '2 g/week group rises from 8 g to 26 g; 4 g/week group rises from 8 g to 44 g over six weeks.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the data, **state** one trend shown in the results.',
        marks: 1,
        ph: 'Plants receiving more fertiliser (4 g) showed a greater increase in biomass than those receiving less (2 g).',
      },
      {
        label: 'b',
        text: '**Explain** one scientific reason for the difference in the final and initial mean average biomass of the plants.',
        marks: 3,
        ph: 'Nitrogen is needed to make proteins/amino acids and chlorophyll; more nitrogen → more chlorophyll → more photosynthesis → more glucose → more organic molecules → greater biomass.',
      },
      {
        label: 'c',
        text: 'Using the data, **comment** on whether the results support the hypothesis stated above.',
        marks: 1,
        ph: 'Results support hypothesis; 4 g group has greater mean biomass increase (36 g) than 2 g group (18 g).',
      },
      {
        label: 'd',
        text: '**Describe** one strength and one weakness of the method used in this investigation.',
        marks: 4,
        ph: 'Strength: e.g. multiple plants used → more reliable mean. Weakness: e.g. only two fertiliser amounts tested → limited range; or only one nutrient changed.',
      },
      {
        label: 'e',
        text: '**Outline** two improvements to this investigation. **Justify** how each improvement would enhance the investigation.',
        marks: 4,
        ph: 'Improvement 1: test more fertiliser amounts (e.g. 1, 2, 3, 4, 5 g) → identifies optimum. Improvement 2: repeat with more plant replicates → increases reliability of mean.',
      },
      {
        label: 'f',
        text: 'Suggest **one** extension to this investigation other than changing temperature or light intensity.',
        marks: 1,
        ph: 'Investigate effect of a different nutrient (e.g. phosphorus or potassium) or soil pH on plant biomass.',
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
    stem: 'You are asked to design an investigation to study the effect of the colour (wavelength) of light on the rate of photosynthesis. The equipment available includes: aquatic plants, a white lamp with red, green and blue coloured filters, sodium hydrogen carbonate solution, ruler, stopwatch, and a collection vessel.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="t7lamp" cx="0.5" cy="0.5"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dddddd"/></radialGradient></defs><rect width="560" height="240" fill="#ffffff"/><circle cx="90" cy="120" r="26" fill="url(#t7lamp)" stroke="#aaaaaa"/><text x="90" y="162" font-size="11" text-anchor="middle" fill="#5b6b78">white lamp</text><rect x="150" y="90" width="14" height="60" fill="#c0392b" opacity="0.7"/><rect x="170" y="90" width="14" height="60" fill="#2f9e44" opacity="0.7"/><rect x="190" y="90" width="14" height="60" fill="#3a6ea5" opacity="0.7"/><text x="177" y="170" font-size="10" text-anchor="middle" fill="#5b6b78">colour filter</text><rect x="250" y="70" width="140" height="140" rx="6" fill="#cfe9f6" stroke="#3f7e98" stroke-width="2"/><line x1="320" y1="205" x2="320" y2="100" stroke="#2f9e44" stroke-width="4"/><g stroke="#2f9e44" stroke-width="2.5"><line x1="320" y1="130" x2="302" y2="118"/><line x1="320" y1="150" x2="338" y2="138"/></g><g fill="#bfe3f2" stroke="#6cb6d6"><circle cx="326" cy="98" r="4"/><circle cx="332" cy="88" r="3"/></g><text x="360" y="92" font-size="10" fill="#0b7285">O₂</text><text x="320" y="56" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Coloured light on aquatic plant</text></svg>',
      },
      caption: 'A white lamp shines through coloured filters onto an aquatic plant; bubbles released per minute measure the rate of photosynthesis.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** a complete investigation to test how the colour (wavelength) of light affects the rate of photosynthesis. Your answer should include:\n- a testable hypothesis with scientific reasoning\n- identification and justification of the independent, dependent and control variables\n- a step-by-step method that could be followed by another student\n- a description of how the variables will be measured and controlled\n- a labelled data collection table\n- a description of how the data will be processed and presented.',
        marks: 16,
        ph: 'Hypothesis: Plants under red and blue light will photosynthesise faster than under green light, because chlorophyll absorbs red and blue strongly but reflects green. IV: colour of light. DV: bubbles per minute. CV: light intensity, temperature, plant type, NaHCO₃ concentration. Method: place plant under each filter; count bubbles per minute; 3 trials; calculate mean.',
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
    stem: 'Coral reefs are among the most biodiverse ecosystems on Earth. Reef-building corals provide shelter and food for thousands of species of fish, invertebrates and algae.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="t8sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#4f9ec4"/></linearGradient></defs><rect width="600" height="260" fill="url(#t8sea)"/><rect x="0" y="220" width="600" height="40" fill="#e8d9a8"/><g><path d="M90,220 q-10,-50 10,-70 q5,40 15,70 Z" fill="#f08c00" stroke="#b86b00"/><path d="M110,220 q5,-40 25,-55 q-2,35 -5,55 Z" fill="#e8772e" stroke="#a8531a"/></g><g><path d="M470,220 q-8,-60 8,-80 q6,45 18,80 Z" fill="#d6336c" stroke="#a61e4d"/><circle cx="478" cy="155" r="6" fill="#f783ac"/><circle cx="486" cy="175" r="5" fill="#f783ac"/></g><g fill="#0b7285"><ellipse cx="250" cy="110" rx="22" ry="11"/><path d="M272,110 l14,-7 l0,14 Z"/><ellipse cx="350" cy="150" rx="16" ry="8" fill="#f08c00"/><path d="M366,150 l10,-5 l0,10 Z" fill="#f08c00"/></g><g fill="#2f9e44"><ellipse cx="180" cy="200" rx="10" ry="5"/><ellipse cx="540" cy="190" rx="9" ry="4"/></g><circle cx="320" cy="60" r="6" fill="#37b24d"/><circle cx="335" cy="70" r="5" fill="#37b24d"/><text x="300" y="34" font-size="14" font-weight="700" text-anchor="middle" fill="#073b4c">A biodiverse coral reef</text></svg>',
      },
      caption: 'A coral reef supports a great variety of species: corals, reef fish, invertebrates and algae.',
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
        ph: 'Overfishing removes species from the reef → reduces number of species that can survive → biodiversity decreases. Accept: pollution, coral bleaching from warming seas, coastal development.',
      },
      {
        label: 'c',
        text: '**Explain**, using scientific language, how the loss of one species might affect other organisms in the same ecosystem.',
        marks: 4,
        ph: 'Loss of prey species → predator population declines. Loss of coral (habitat-former) → many fish lose shelter and food → populations decline. Disrupts food web. Keystone species removal amplifies effects. Ecosystem stability reduced.',
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
    stem: 'The diagram shows the feeding relationships in a freshwater pond ecosystem. Arrows point from each organism to the organism that eats it.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Freshwater pond food web',
        nodes: [
          { id: 'algae', label: 'Pond algae', color: '#2f9e44', detail: 'Producer — makes food by photosynthesis.' },
          { id: 'plant', label: 'Water plant', color: '#37b24d', detail: 'Producer — base of the food web.' },
          { id: 'snail', label: 'Pond snail', color: '#f08c00', detail: 'Primary consumer (herbivore) — eats algae and water plants.' },
          { id: 'tadpole', label: 'Tadpole', color: '#e8590c', detail: 'Primary consumer — grazes on algae and plants.' },
          { id: 'beetle', label: 'Diving beetle', color: '#1971c2', detail: 'Secondary consumer — eats tadpoles.' },
          { id: 'fish', label: 'Stickleback fish', color: '#0b7285', detail: 'Secondary consumer — eats snails, tadpoles and beetles.' },
          { id: 'heron', label: 'Heron', color: '#9c36b5', detail: 'Top predator — eats the stickleback fish.' },
        ],
        edges: [
          { from: 'algae', to: 'snail' },
          { from: 'algae', to: 'tadpole' },
          { from: 'plant', to: 'snail' },
          { from: 'plant', to: 'tadpole' },
          { from: 'snail', to: 'fish' },
          { from: 'tadpole', to: 'beetle' },
          { from: 'beetle', to: 'fish' },
          { from: 'fish', to: 'heron' },
          { from: 'tadpole', to: 'fish' },
        ],
      },
      caption: 'A freshwater pond food web. Arrows point from prey to predator (towards the organism that eats it).',
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
        text: 'Using the diagram, **state** the role of the water plant and the role of the pond snail in the ecosystem.',
        marks: 2,
        ph: 'Water plant: producer (converts light energy into biomass by photosynthesis). Pond snail: primary consumer/herbivore (eats plants/algae, transfers energy to secondary consumers).',
      },
      {
        label: 'c',
        text: '**Justify** why both the water plant and the pond snail are equally important to protect in this ecosystem.',
        marks: 2,
        ph: 'Loss of water plant removes a food source for snails and tadpoles → food web collapse. Loss of snail removes food source for the stickleback fish → fish (and then heron) populations decline. Both are integral links; loss of either disrupts energy flow through the ecosystem.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q10 — Frozen Zoos / Animal Cryobanks (21 marks, Criterion D)
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
    stem: 'Scientists are preserving the diversity of animals by creating "frozen zoos". These are collections of frozen cells, eggs and sperm from as many different animal species as possible, stored for long periods of time so that endangered species might one day be bred again.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="t10tank" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dff3fb"/><stop offset="1" stop-color="#9fd3e8"/></linearGradient></defs><rect width="600" height="240" fill="#ffffff"/><text x="300" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Frozen zoo — cryogenic storage</text><rect x="220" y="50" width="160" height="160" rx="14" fill="url(#t10tank)" stroke="#0b7285" stroke-width="3"/><rect x="220" y="50" width="160" height="22" rx="8" fill="#0b7285"/><text x="300" y="66" font-size="11" text-anchor="middle" fill="#fff">liquid nitrogen −196 °C</text><g fill="#37b24d" stroke="#2f9e44"><rect x="244" y="96" width="20" height="40" rx="4"/><rect x="270" y="96" width="20" height="40" rx="4"/><rect x="296" y="96" width="20" height="40" rx="4"/><rect x="322" y="96" width="20" height="40" rx="4"/></g><g fill="#f08c00" stroke="#b86b00"><rect x="244" y="150" width="20" height="40" rx="4"/><rect x="270" y="150" width="20" height="40" rx="4"/><rect x="296" y="150" width="20" height="40" rx="4"/><rect x="322" y="150" width="20" height="40" rx="4"/></g><text x="300" y="226" font-size="11" text-anchor="middle" fill="#5b6b78">vials of frozen cells, eggs and sperm</text><g><path d="M70,150 q20,-40 40,0 q-20,15 -40,0 Z" fill="#c98a3c"/><text x="90" y="186" font-size="10" text-anchor="middle" fill="#5b6b78">samples from</text><text x="90" y="200" font-size="10" text-anchor="middle" fill="#5b6b78">endangered animals</text></g><line x1="120" y1="140" x2="215" y2="130" stroke="#0b7285" stroke-width="2" stroke-dasharray="4 4"/></svg>',
      },
      caption: 'A frozen zoo stores cells, eggs and sperm from endangered animals in liquid nitrogen at −196 °C.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** one reason why frozen zoos are important.',
        marks: 1,
        ph: 'Preserves animal genetic diversity; protects endangered species from extinction; maintains genetic resources for future breeding.',
      },
      {
        label: 'b',
        text: '**Outline** the process used to create and maintain a frozen zoo.',
        marks: 3,
        ph: 'Collect cells/eggs/sperm from animals; add cryoprotectant to prevent ice damage; cool and store at very low temperature (liquid nitrogen, −196 °C); test viability periodically; thaw and use for breeding if needed.',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** the implications of creating and maintaining frozen zoos. In your extended answer consider:\n- the advantages and disadvantages of frozen zoos\n- the social, economic and environmental implications\n- whether frozen zoos are a sufficient long-term strategy for conservation\n- an appraisal of the overall value of frozen zoos.',
        marks: 17,
        ph: 'Advantages: insurance against extinction, preserve genetic diversity, support research/breeding. Disadvantages: costly, does not preserve habitat or behaviour, not all species can be revived, viability may fall. Social: ethics, public engagement. Economic: high cost vs benefit. Environmental: does not address root causes of biodiversity loss. Evaluation: necessary but not sufficient; must be complemented by habitat conservation. Appraisal.',
      },
    ],
  },
]
