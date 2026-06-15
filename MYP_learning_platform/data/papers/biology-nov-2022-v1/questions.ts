import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2022 · VARIANT 1  (isomorphic to biology-nov-2022)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, tags, widgets) in a NEW biological context, with self-contained
// data-driven artefacts (no external image files). All answers recomputed.
//   Q1 Food web:        kelp-forest/sea-otter → African savanna grassland/lion
//   Q2 Digestion/RBC:   stomach protease graph (new pH/enzyme labels & nutrient framing)
//   Q3 Reproduction:    sex hormones / puberty / meiosis / sex determination (new distractors)
//   Q4 Photosynthesis:  temperature investigation → light-as-context, NEW data table values
//   Q5 Crit C CO₂ eval: CO₂ investigation, NEW concentration set & rate values
//   Q6 Crit B design:   light-intensity → water-temperature (pondweed) design
//   Q7 Crit C pesticide: boric-acid yield → neem-oil yield, NEW species & graph values
//   Q8 Crit D cancer:   sun exposure → physical activity & health (NEW trend data)
//   Q9 Crit D essay:    personalized medicine → gene therapy for inherited disease
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2022-v1',
  subject: 'Biology',
  session: 'November',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Food Webs & Ecosystems (8 marks) Criterion A
  // Context: African savanna grassland; keystone predator = lion
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Food Webs & Ecosystems',
    topicCanonical: 'Food Chains & Webs',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Interdependency'],
    marks: 8,
    stem: 'The questions below are about an African savanna grassland food web. The web includes grass, zebras, gazelles, cheetahs and lions.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Savanna grassland food web',
        nodes: [
          { id: 'grass', label: 'Grass', color: '#2f9e44', detail: 'Producer — makes food by photosynthesis. Eaten by zebras and gazelles.' },
          { id: 'zebra', label: 'Zebra', color: '#f08c00', detail: 'Primary consumer (herbivore) — eats grass; hunted by lions.' },
          { id: 'gazelle', label: 'Gazelle', color: '#e8590c', detail: 'Primary consumer (herbivore) — eats grass; hunted by cheetahs and lions.' },
          { id: 'cheetah', label: 'Cheetah', color: '#9c36b5', detail: 'Secondary consumer (predator) — hunts gazelles.' },
          { id: 'lion', label: 'Lion', color: '#c2255c', detail: 'Top predator — hunts zebras and gazelles.' },
        ],
        edges: [
          { from: 'grass', to: 'zebra', label: 'eaten by' },
          { from: 'grass', to: 'gazelle', label: 'eaten by' },
          { from: 'zebra', to: 'lion', label: 'eaten by' },
          { from: 'gazelle', to: 'cheetah', label: 'eaten by' },
          { from: 'gazelle', to: 'lion', label: 'eaten by' },
        ],
      },
      caption: 'Arrows point from each organism to the consumer that eats it (the direction energy flows).',
    },
    figCaption: 'Hover a node to see how each organism feeds in the savanna food web.',
    tasks: [
      {
        label: 'a',
        text: '**Identify** one organism that lions eat in this food web.',
        marks: 1,
        ph: 'Name a prey organism of the lion from the food web.',
      },
      {
        label: 'b',
        text: '**Outline** the role of producers in a food web.',
        marks: 2,
        ph: 'State what producers do (photosynthesis, light energy) and what they produce.',
      },
      {
        label: 'c',
        text: 'Until the 1960s, lions were hunted and killed as trophies; this had a dramatic impact on this ecosystem. Following a hunting ban and stricter protection, the lion population started to increase. **Suggest** another human action that could have caused the lion population to increase.',
        marks: 1,
        ph: 'Think of a conservation strategy humans use to protect species.',
      },
      {
        label: 'd',
        text: 'The following diagrams are pyramids of numbers from the food chain grass → gazelle → lion. The pyramid on the left shows the ecosystem in 1962; the pyramid on the right shows the ecosystem today. Using the diagrams, **explain** the effect of the growing lion population on the populations of gazelles and grass.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="300" fill="#ffffff"/><text x="155" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">1962</text><text x="465" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Today</text><g stroke="#356b44" stroke-width="1.5"><polygon points="60,90 250,90 230,120 80,120" fill="#c2255c"/><polygon points="80,120 230,120 200,160 110,160" fill="#e8590c"/><polygon points="110,160 200,160 90,250 220,250" fill="#2f9e44"/></g><text x="155" y="108" font-size="11" text-anchor="middle" fill="#fff">lion (few)</text><text x="155" y="144" font-size="11" text-anchor="middle" fill="#fff">gazelle (many)</text><text x="155" y="210" font-size="11" text-anchor="middle" fill="#fff">grass (some)</text><g stroke="#356b44" stroke-width="1.5"><polygon points="370,90 560,90 520,130 410,130" fill="#c2255c"/><polygon points="410,130 520,130 470,170 460,170" fill="#e8590c"/><polygon points="430,170 500,170 380,250 550,250" fill="#2f9e44"/></g><text x="465" y="112" font-size="11" text-anchor="middle" fill="#fff">lion (more)</text><text x="465" y="155" font-size="11" text-anchor="middle" fill="#fff">gazelle (few)</text><text x="465" y="210" font-size="11" text-anchor="middle" fill="#fff">grass (lots)</text></svg>',
          },
          caption: 'Pyramids of numbers for grass → gazelle → lion in 1962 (left) and today (right).',
        },
        ph: 'Lions eat more gazelles → fewer gazelles → less grass eaten → grass increases.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Nutrition, Digestion & Transport (10 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Nutrition, Digestion & Transport',
    topicCanonical: 'Digestion',
    topicGroup: 'Metabolism',
    topicsAlso: ['Nutrition', 'Movement & Transport'],
    marks: 10,
    stem: 'The questions below are about nutrients, digestion, and transport in the human body.',
    tasks: [
      {
        label: 'a',
        text: '**State** a nutrient that is used as a source of energy under normal circumstances.',
        marks: 1,
        ph: 'Not protein — think carbohydrates or fats.',
      },
      {
        label: 'b',
        text: 'Proteases are enzymes in the stomach that begin to digest proteins. **Select** what is produced when proteins are digested.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Amino acids', 'Glucose', 'Fatty acids', 'Glycerol'],
        ph: 'Proteins are broken down into their monomer building blocks.',
      },
      {
        label: 'c',
        text: 'Cells in the stomach lining produce hydrochloric acid. The graph shows the activity of four different enzymes against pH. **Select** the enzyme that digests protein in the stomach. **Justify** your answer.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="300" fill="#ffffff"/><line x1="60" y1="250" x2="430" y2="250" stroke="#444" stroke-width="1.5"/><line x1="60" y1="40" x2="60" y2="250" stroke="#444" stroke-width="1.5"/><text x="245" y="285" font-size="12" text-anchor="middle" fill="#1f2d3a">pH</text><text x="22" y="150" font-size="12" text-anchor="middle" fill="#1f2d3a" transform="rotate(-90 22 150)">Enzyme activity</text><g font-size="10" fill="#444" text-anchor="middle"><text x="60" y="266">0</text><text x="134" y="266">2</text><text x="208" y="266">4</text><text x="282" y="266">7</text><text x="356" y="266">9</text><text x="430" y="266">14</text></g><path d="M70,250 Q120,60 138,70 Q150,80 200,250" fill="none" stroke="#c2255c" stroke-width="2.5"/><text x="130" y="55" font-size="12" fill="#c2255c" font-weight="700">A</text><path d="M150,250 Q230,90 252,90 Q270,95 340,250" fill="none" stroke="#0b7285" stroke-width="2.5"/><text x="252" y="80" font-size="12" fill="#0b7285" font-weight="700">B</text><path d="M210,250 Q300,120 320,120 Q340,125 400,250" fill="none" stroke="#f08c00" stroke-width="2.5"/><text x="322" y="110" font-size="12" fill="#f08c00" font-weight="700">C</text><path d="M260,250 Q340,150 360,150 Q380,155 425,245" fill="none" stroke="#2f9e44" stroke-width="2.5"/><text x="362" y="140" font-size="12" fill="#2f9e44" font-weight="700">D</text></svg>',
          },
          caption: 'Activity of four enzymes (A, B, C, D) at different pH values. Enzyme A peaks at pH ≈ 2.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select the enzyme with optimum activity at the stomach\'s acidic pH (~2).',
      },
      {
        label: 'd',
        text: 'The products of digestion must enter the blood to be transported around the body. **Outline** the process through which the products of digestion enter the bloodstream. You should use scientific terminology in your answer.',
        marks: 2,
        ph: 'Diffusion (high to low concentration) or active transport (low to high).',
      },
      {
        label: 'e',
        text: 'In addition to the products of digestion, other molecules are present in the bloodstream. **Explain** how red blood cells are adapted to transport gases around the body.',
        marks: 4,
        ph: 'State 2 structural features; explain how each enables gas transport.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Reproduction & Genetics (9 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Reproduction & Genetics',
    topicCanonical: 'Reproduction',
    topicGroup: 'Evolution',
    topicsAlso: ['DNA & Genetics'],
    marks: 9,
    stem: 'The questions below are about the reproductive system and genetics.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="220" fill="#ffffff"/><text x="260" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Sex hormones and their glands</text><circle cx="140" cy="120" r="34" fill="#bfe3f2" stroke="#0b7285" stroke-width="2"/><text x="140" y="124" font-size="11" text-anchor="middle" fill="#0b7285">testes</text><circle cx="380" cy="120" r="34" fill="#ffe3ec" stroke="#c2255c" stroke-width="2"/><text x="380" y="124" font-size="11" text-anchor="middle" fill="#c2255c">ovaries</text><rect x="95" y="60" width="90" height="22" rx="6" fill="#e7f5ff" stroke="#1971c2"/><text x="140" y="75" font-size="10" text-anchor="middle" fill="#1971c2">Testosterone</text><line x1="140" y1="82" x2="140" y2="86" stroke="#1971c2" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="335" y="60" width="90" height="22" rx="6" fill="#fff0f6" stroke="#c2255c"/><text x="380" y="75" font-size="10" text-anchor="middle" fill="#c2255c">Progesterone</text><line x1="380" y1="82" x2="380" y2="86" stroke="#c2255c" stroke-width="1.5" stroke-dasharray="3 3"/></svg>',
      },
      caption: 'Each sex hormone is made in a specific reproductive gland.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The reproductive system is controlled by hormones. **Select** the correct items to complete the diagram by matching each sex hormone to its site of production.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['Testosterone → Site of production', 'Progesterone → Site of production'],
        widgetOptions: ['Testes', 'Ovaries', 'Liver', 'Adrenaline'],
        ph: 'Match testosterone to its gland and progesterone to its gland.',
      },
      {
        label: 'b',
        text: 'Sex hormones are responsible for the changes during puberty. **Select** the correct location for each change in the Venn diagram.',
        marks: 2,
        widget: 'variable_classify',
        widgetItems: ['Males', 'Both', 'Females'],
        widgetOptions: [
          'Sex organs grow and develop',
          'Sperm production starts',
          'Hips widen',
          'Development of breast tissue',
          'Voice deepens',
          'Menstruation starts',
          'Underarm hair grows',
        ],
        ph: 'Males only, both sexes, or females only — classify each change correctly.',
      },
      {
        label: 'c',
        text: 'Sperm are formed in the testes through meiosis. Human body cells contain 46 chromosomes, but sex cells contain 23. **Outline** why there are fewer chromosomes in sex cells.',
        marks: 2,
        ph: 'Two sex cells fuse at fertilization — if both had 46, offspring would have 92.',
      },
      {
        label: 'd',
        text: 'Using your knowledge of sex chromosomes X and Y, **explain** why sperm determine whether offspring will be male or female.',
        marks: 3,
        ph: 'Female = XX, male = XY. Egg always gives X; sperm gives either X or Y.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Photosynthesis Investigation (13 marks) Criterion A
  // NEW data table: averages 318, 320, ?(322), 290, 250 ; missing avg at 40°C
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Photosynthesis Investigation',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Nutrient/Carbon/Nitrogen Cycles'],
    marks: 13,
    stem: 'Climate change is one of the biggest current issues facing humanity. Human actions have caused atmospheric carbon dioxide (CO₂) concentration to increase, which has led to a rise in average global temperatures.',
    tasks: [
      {
        label: 'a',
        text: 'Plants use sunlight to convert CO₂ to glucose using a process called photosynthesis. **Select** words to complete the word equation for photosynthesis.',
        marks: 1,
        widget: 'fill_blank',
        widgetOptions: ['Oxygen', 'Glucose', 'Water', 'Carbon dioxide'],
        ph: 'Reactants: CO₂ + water. Products: glucose + oxygen.',
      },
      {
        label: 'b',
        text: 'A student decided to test the effect of temperature on photosynthesis. **Identify** the variables in this investigation: state the independent variable, dependent variable, and two control variables.',
        marks: 4,
        ph: 'IV = temperature; DV = O₂ concentration; CVs = CO₂ concentration, light level, plant type.',
      },
      {
        label: 'c',
        text: '**Formulate** a hypothesis for this investigation using the format: If … then … because …',
        marks: 3,
        ph: 'If temperature increases, then O₂ concentration will increase, because photosynthesis rate increases.',
      },
      {
        label: 'd',
        text: 'The student conducted the experiment and collected data. **Calculate** the missing average for 40 °C and add it to the table, giving your answer to an appropriate degree of accuracy.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Temperature / °C', 'Trial 1 / ppm', 'Trial 2 / ppm', 'Trial 3 / ppm', 'Average / ppm'],
            rows: [
              ['20', '316', '319', '319', '318'],
              ['30', '321', '320', '319', '320'],
              ['40', '324', '321', '321', '?'],
              ['50', '291', '289', '290', '290'],
              ['60', '251', '249', '250', '250'],
            ],
          },
          caption: 'Oxygen concentration produced at each temperature. The 40 °C average is missing.',
        },
        ph: 'Average of 324, 321, 321 = 322 → 322.',
      },
      {
        label: 'e',
        text: '**State** one improvement to the presentation of the student\'s data table.',
        marks: 1,
        ph: 'What is missing from the table headings or units?',
      },
      {
        label: 'f',
        text: 'The student predicted that as temperature increases, the O₂ concentration decreases. Use the results to **comment** on the validity of this prediction.',
        marks: 2,
        ph: 'Data do not support from 20→40°C; do support above 40°C. Or insufficient data.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — CO₂ & Photosynthesis Evaluation (14 marks) Criterion C
  // NEW: CO₂ at 0.04%, 0.08%, 0.12%; rate plateaus above 0.08%; max ~10 ppm
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'CO₂ & Photosynthesis Evaluation',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 14,
    stem: 'A student tested the effect of carbon dioxide (CO₂) concentration on the rate of photosynthesis using the following method: (1) Cut base of plant stem. (2) Place stem in flask with water. (3) Place flask in closed container at 35 °C with CO₂ regulator. (4) Use CO₂ concentrations of 0.04%, 0.08% and 0.12%. (5) Measure O₂ concentration in ppm after 10 minutes. (6) Use O₂ data to calculate rate of photosynthesis.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Rate of photosynthesis vs CO₂ concentration',
        xLabel: 'CO₂ concentration',
        yLabel: 'Rate of photosynthesis',
        xUnit: '%',
        yUnit: 'ppm O₂ min⁻¹',
        dataPoints: [
          { x: 0.04, y: 5 },
          { x: 0.08, y: 10 },
          { x: 0.12, y: 10.2 },
        ],
        xMin: 0,
        xMax: 0.16,
        yMin: 0,
        yMax: 12,
        xStep: 0.04,
        yStep: 2,
      },
      caption: 'Rate of photosynthesis rises with CO₂ up to about 0.08%, then plateaus.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The method does not contain details of how control variables should be monitored. **State** two extra details that should be added to the method to make it repeatable.',
        marks: 2,
        ph: 'Name two CVs that need to be monitored and how (e.g. light level, stem length).',
      },
      {
        label: 'b',
        text: '**Suggest** two reasons for setting the heater at 35 °C.',
        marks: 2,
        ph: 'Temperature as a control variable; 35°C is optimum or ensures reaction proceeds quickly.',
      },
      {
        label: 'c',
        text: 'The student\'s laboratory partner said that the method would not give sufficient data to test the effect of changing CO₂ concentration on photosynthesis rate. **Suggest** and **justify** two improvements to the data collection to give sufficient data.',
        marks: 4,
        ph: 'More repeats, more CO₂ increments, or add a control (CO₂ = 0%) — justify each.',
      },
      {
        label: 'd',
        text: 'The students used their data to calculate the rate of photosynthesis and plotted the graph. Using data from the graph and scientific reasoning, **explain** the results of this experiment.',
        marks: 5,
        ph: 'Rate increases below 0.08% (CO₂ limiting); plateaus above 0.08% (other factors limit).',
      },
      {
        label: 'e',
        text: '**Suggest** how the students could increase the rate of photosynthesis beyond 10 ppm O₂ min⁻¹.',
        marks: 1,
        ph: 'Change another limiting factor — temperature or light intensity.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Water Temperature & Photosynthesis Design (15 marks) Criterion B
  // Context: pondweed (Elodea) + water temperature instead of light intensity
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Water Temperature & Photosynthesis Design',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 15,
    stem: 'The students wanted to extend their knowledge of photosynthesis. They want to investigate how changing the temperature of the water affects the rate of photosynthesis in a piece of pondweed (Elodea). They are provided with the equipment shown and standard laboratory equipment.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pondweed in a water bath</text><rect x="120" y="70" width="180" height="160" rx="6" fill="url(#bw)" stroke="#3f7e98" stroke-width="2"/><rect x="195" y="120" width="30" height="105" rx="4" fill="none" stroke="#2f9e44" stroke-width="2"/><path d="M210,225 l-10,-18 l20,0 Z" fill="#2f9e44"/><path d="M210,200 q-14,-8 -10,-22 M210,170 q14,-8 10,-22 M210,140 q-14,-6 -10,-20" stroke="#2f9e44" stroke-width="2" fill="none"/><text x="240" y="180" font-size="11" fill="#2f9e44">pondweed</text><g><circle cx="205" cy="110" r="3" fill="#fff" stroke="#0b7285"/><circle cx="218" cy="95" r="2.5" fill="#fff" stroke="#0b7285"/><circle cx="200" cy="85" r="2" fill="#fff" stroke="#0b7285"/></g><text x="232" y="98" font-size="10" fill="#0b7285">O₂ bubbles</text><rect x="320" y="100" width="14" height="120" rx="4" fill="#fff" stroke="#444"/><circle cx="327" cy="220" r="10" fill="#c0392b"/><rect x="324" y="120" width="6" height="100" fill="#c0392b"/><text x="345" y="150" font-size="11" fill="#444">thermometer</text><rect x="110" y="230" width="200" height="14" rx="4" fill="#d0d7dd" stroke="#8a99a6"/><text x="210" y="262" font-size="11" text-anchor="middle" fill="#5b6b78">heat source / ice to set water temperature</text><circle cx="90" cy="60" r="20" fill="#fff3b0" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="2" stroke-linecap="round"><line x1="90" y1="34" x2="90" y2="26"/><line x1="112" y1="48" x2="118" y2="42"/><line x1="68" y1="48" x2="62" y2="42"/></g><text x="90" y="92" font-size="10" text-anchor="middle" fill="#9a7d0f">lamp (constant)</text></svg>',
      },
      caption: 'Pondweed releases oxygen bubbles; a water bath sets the water temperature.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to test how changing the temperature of the water affects the rate of photosynthesis in the pondweed. In your answer, you should include:\n- the independent variable, dependent variable and two control variables\n- a testable hypothesis\n- details of any additional equipment you would need\n- details of how to manipulate, measure or monitor the variables\n- details of the method to collect sufficient data',
        marks: 15,
        ph: 'IV = water temperature; DV = O₂ bubbles/min; CVs; hypothesis; method with repeats and increments.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Pesticides & Plant Yield (7 marks) Criterion C
  // NEW: neem-oil pesticide; species P,Q,R,S; highest yield = P (3.2)
  // NEW graph: minimum conc P = 3%, S = 5%
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Pesticides & Plant Yield',
    topicCanonical: 'Human Influences',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Pollution & Conservation'],
    marks: 7,
    stem: 'In addition to maximizing plant growth through photosynthesis, the yield of plant crops can be increased using pesticides. Pesticides are compounds used in farming to kill plant pests. The table below shows the results from experiments testing the impact of using the pesticide neem oil on the yield of different plant species. The experiment was conducted in a greenhouse with constant environmental conditions and concentration of pesticide.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Plant species', 'Yield without pesticide / kg m⁻²', 'Yield with pesticide / kg m⁻²'],
        rows: [
          ['P', '1.4', '3.2'],
          ['Q', '1.9', '2.1'],
          ['R', '1.6', '2.6'],
          ['S', '1.1', '1.3'],
        ],
      },
      caption: 'Yield of four plant species grown with and without the pesticide neem oil.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the plant species that has the highest yield when grown using pesticide.',
        marks: 1,
        ph: 'Compare "Yield with pesticide" column for all four species.',
      },
      {
        label: 'b',
        text: 'In some species, the use of pesticide did not have a large impact on yield. **Suggest** a reason for this observation.',
        marks: 1,
        ph: 'The pest targeted by neem oil may not attack all plant species.',
      },
      {
        label: 'c',
        text: '**State** the reason for conducting these experiments inside a greenhouse.',
        marks: 1,
        ph: 'Greenhouses allow control of environmental variables.',
      },
      {
        label: 'd',
        text: 'A farmer who grows species P and S decided to find the lowest possible concentration of neem oil needed to maximise yield. **Identify** the minimum concentration of neem oil for plant P and for plant S.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="300" fill="#ffffff"/><line x1="60" y1="250" x2="430" y2="250" stroke="#444" stroke-width="1.5"/><line x1="60" y1="40" x2="60" y2="250" stroke="#444" stroke-width="1.5"/><text x="245" y="285" font-size="12" text-anchor="middle" fill="#1f2d3a">Neem oil concentration / %</text><text x="22" y="150" font-size="12" text-anchor="middle" fill="#1f2d3a" transform="rotate(-90 22 150)">Yield / kg m⁻²</text><g font-size="10" fill="#444" text-anchor="middle"><text x="60" y="266">0</text><text x="135" y="266">2</text><text x="208" y="266">3</text><text x="282" y="266">5</text><text x="356" y="266">7</text><text x="430" y="266">9</text></g><polyline points="60,200 135,120 208,70 282,70 356,70 430,70" fill="none" stroke="#2f9e44" stroke-width="2.5"/><circle cx="208" cy="70" r="4" fill="#2f9e44"/><text x="195" y="60" font-size="11" fill="#2f9e44" font-weight="700">P</text><polyline points="60,230 135,200 208,165 282,130 356,130 430,130" fill="none" stroke="#c2255c" stroke-width="2.5"/><circle cx="282" cy="130" r="4" fill="#c2255c"/><text x="292" y="124" font-size="11" fill="#c2255c" font-weight="700">S</text></svg>',
          },
          caption: 'Yield of plant P (green) and plant S (pink) against neem oil concentration. P plateaus at 3%, S at 5%.',
        },
        widget: 'fill_blank',
        widgetOptions: ['3', '5'],
        ph: 'Read from graph where yield of each plant reaches its maximum and stops increasing.',
      },
      {
        label: 'e',
        text: 'The farmer wants to grow both species on the same farm. **Identify** the minimum concentration of neem oil they should use. **Justify** your answer.',
        marks: 2,
        ph: 'Use the higher of the two minimum concentrations and explain why.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Physical Activity & Disease (10 marks) Criterion D
  // Context: physical activity / heart disease instead of sun exposure
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Health, Lifestyle & Disease',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Cell Division (Mitosis & Meiosis)'],
    marks: 10,
    stem: 'A disease is a disorder that affects an organism\'s body, organs, tissues or cells. Diseases can be caused by pathogens; they can be inherited or they can develop due to changes in normal body processes such as physical inactivity.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="300" fill="#ffffff"/><text x="240" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">New cases of coronary heart disease per year</text><line x1="60" y1="250" x2="440" y2="250" stroke="#444" stroke-width="1.5"/><line x1="60" y1="40" x2="60" y2="250" stroke="#444" stroke-width="1.5"/><text x="250" y="285" font-size="11" text-anchor="middle" fill="#1f2d3a">Age / years</text><g font-size="10" fill="#444" text-anchor="middle"><text x="100" y="266">35</text><text x="180" y="266">50</text><text x="260" y="266">65</text><text x="340" y="266">75</text><text x="420" y="266">85</text></g><polyline points="100,235 180,200 260,120 340,90 420,150" fill="none" stroke="#1971c2" stroke-width="2.5"/><polyline points="100,240 180,215 260,150 340,110 420,175" fill="none" stroke="#c2255c" stroke-width="2.5"/><rect x="300" y="48" width="130" height="44" rx="4" fill="#f8f9fa" stroke="#ced4da"/><line x1="312" y1="62" x2="330" y2="62" stroke="#1971c2" stroke-width="3"/><text x="336" y="66" font-size="10" fill="#1971c2">males</text><line x1="312" y1="80" x2="330" y2="80" stroke="#c2255c" stroke-width="3"/><text x="336" y="84" font-size="10" fill="#c2255c">females</text></svg>',
      },
      caption: 'New cases of coronary heart disease per year for males and females by age. Both rise then fall; males peak at 75, females at 75 with fewer cases.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The graph shows the number of new cases of coronary heart disease per year in females and males by age. Using the graph, **state** one similarity and one difference in the trends in new cases per year for females and males.',
        marks: 2,
        ph: 'Similarity: both increase then decrease with age. Difference: peak age or which sex has more cases at certain ages.',
      },
      {
        label: 'b',
        text: 'The incidence rate graph shows cases per 100 000 people. **Suggest** and **justify** why the incidence rates for both males and females increase with age.',
        marks: 2,
        ph: 'Longer exposure to risk factors → greater chance of damage accumulating over time.',
      },
      {
        label: 'c',
        text: 'A student claims that doing intense daily exercise is good for health. **Discuss** and **evaluate** the student\'s claim. In your answer, you should include:\n- health benefits that support the student\'s claim\n- health concerns that do not support the student\'s claim\n- a concluding statement with advice for minimizing the health concerns',
        marks: 6,
        ph: 'Benefits: stronger heart, weight control. Concerns: injury, overtraining. Advice: moderate, rest, warm up.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Gene Therapy (14 marks) Criterion D
  // Context: gene therapy for inherited disease instead of personalized medicine
  // ─────────────────────────────────────────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Gene Therapy',
    topicCanonical: 'Genome Mapping & Application',
    topicGroup: 'Biotechnology',
    topicsAlso: ['DNA & Genetics', 'Ethical Implications'],
    marks: 14,
    stem: 'Developments in science and technology have allowed scientists to treat some inherited diseases by changing a patient\'s genetic material. Gene therapy works by inserting a working copy of a gene into a patient\'s cells to replace a faulty gene that causes a disease such as cystic fibrosis or sickle-cell anaemia. The new gene is usually carried into the cells using a modified, harmless virus.',
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the use of gene therapy in the treatment of inherited diseases. In your answer, you should include:\n- medical benefits of gene therapy for an individual and wider society\n- economic considerations in providing gene therapy\n- ethical considerations\n- a concluding appraisal with justification',
        marks: 14,
        ph: 'Cover medical benefits, economic costs/savings, ethical issues (access, safety, germline), and a justified conclusion.',
      },
    ],
  },
]
