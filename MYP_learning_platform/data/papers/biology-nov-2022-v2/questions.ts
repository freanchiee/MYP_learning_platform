import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2022 · VARIANT 2  (isomorphic to biology-nov-2022)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, tags, widgets) in a NEW biological context, distinct from both the
// source AND variant 1. Self-contained data-driven artefacts; answers recomputed.
//   Q1 Food web:        kelp-forest → coastal salt-marsh / osprey (GenericSVG web)
//   Q2 Digestion/RBC:   stomach protease graph (new pH/enzyme labels & nutrient framing)
//   Q3 Reproduction:    sex hormones / puberty / meiosis / sex determination (new distractors)
//   Q4 Photosynthesis:  temperature investigation, NEW data table values & missing avg
//   Q5 Crit C CO₂ eval: CO₂ investigation, NEW concentration set & rate values
//   Q6 Crit B design:   light-intensity → CO₂-concentration (hydrogencarbonate) design
//   Q7 Crit C pesticide: boric-acid yield → pyrethrin yield, NEW species & graph values
//   Q8 Crit D health:   sun exposure → dietary sugar intake & health (NEW trend data)
//   Q9 Crit D essay:    personalized medicine → stem-cell therapy for tissue repair
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2022-v2',
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
  // Context: coastal salt-marsh estuary; recovered predator = osprey
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
    stem: 'The questions below are about a coastal salt-marsh food web. The web includes cordgrass, marsh snails, shore crabs, mullet (a fish) and ospreys (a fish-eating bird of prey).',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="fa" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#495057"/></marker></defs><rect width="620" height="360" fill="#ffffff"/><text x="310" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Salt-marsh food web</text><g><ellipse cx="310" cy="310" rx="78" ry="30" fill="#2f9e44"/><text x="310" y="315" font-size="12" text-anchor="middle" fill="#fff">cordgrass</text></g><g><ellipse cx="150" cy="195" rx="62" ry="26" fill="#f08c00"/><text x="150" y="200" font-size="11" text-anchor="middle" fill="#fff">marsh snail</text></g><g><ellipse cx="470" cy="195" rx="62" ry="26" fill="#e8590c"/><text x="470" y="200" font-size="11" text-anchor="middle" fill="#fff">shore crab</text></g><g><ellipse cx="310" cy="120" rx="58" ry="26" fill="#0b7285"/><text x="310" y="125" font-size="11" text-anchor="middle" fill="#fff">mullet</text></g><g><ellipse cx="310" cy="45" rx="58" ry="24" fill="#c2255c"/><text x="310" y="50" font-size="11" text-anchor="middle" fill="#fff">osprey</text></g><line x1="270" y1="290" x2="180" y2="215" stroke="#495057" stroke-width="1.8" marker-end="url(#fa)"/><line x1="350" y1="290" x2="440" y2="215" stroke="#495057" stroke-width="1.8" marker-end="url(#fa)"/><line x1="205" y1="180" x2="425" y2="175" stroke="#495057" stroke-width="1.8" marker-end="url(#fa)"/><line x1="455" y1="172" x2="345" y2="135" stroke="#495057" stroke-width="1.8" marker-end="url(#fa)"/><line x1="310" y1="94" x2="310" y2="71" stroke="#495057" stroke-width="1.8" marker-end="url(#fa)"/><text x="500" y="290" font-size="10" fill="#868e96">arrows = energy flow</text></svg>',
      },
      caption: 'Arrows point from each organism to the consumer that eats it (the direction energy flows).',
    },
    figCaption: 'A salt-marsh food web: cordgrass → snails/crabs → mullet → osprey.',
    tasks: [
      {
        label: 'a',
        text: '**Identify** one organism that ospreys eat in this food web.',
        marks: 1,
        ph: 'Name a prey organism of the osprey from the food web.',
      },
      {
        label: 'b',
        text: '**Outline** the role of producers in a food web.',
        marks: 2,
        ph: 'State what producers do (photosynthesis, light energy) and what they produce.',
      },
      {
        label: 'c',
        text: 'Until the 1970s, ospreys were poisoned by a pesticide that thinned their eggshells; this had a dramatic impact on this ecosystem. Following a ban on the pesticide, the osprey population started to increase. **Suggest** another human action that could have caused the osprey population to increase.',
        marks: 1,
        ph: 'Think of a conservation strategy humans use to protect species.',
      },
      {
        label: 'd',
        text: 'The following diagrams are pyramids of numbers from the food chain cordgrass → mullet → osprey. The pyramid on the left shows the ecosystem in 1972; the pyramid on the right shows the ecosystem today. Using the diagrams, **explain** the effect of the growing osprey population on the populations of mullet and cordgrass.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="300" fill="#ffffff"/><text x="155" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">1972</text><text x="465" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Today</text><g stroke="#356b44" stroke-width="1.5"><polygon points="60,90 250,90 230,120 80,120" fill="#c2255c"/><polygon points="80,120 230,120 200,160 110,160" fill="#0b7285"/><polygon points="110,160 200,160 90,250 220,250" fill="#2f9e44"/></g><text x="155" y="108" font-size="11" text-anchor="middle" fill="#fff">osprey (few)</text><text x="155" y="144" font-size="11" text-anchor="middle" fill="#fff">mullet (many)</text><text x="155" y="210" font-size="11" text-anchor="middle" fill="#fff">cordgrass (some)</text><g stroke="#356b44" stroke-width="1.5"><polygon points="370,90 560,90 520,130 410,130" fill="#c2255c"/><polygon points="410,130 520,130 470,170 460,170" fill="#0b7285"/><polygon points="430,170 500,170 380,250 550,250" fill="#2f9e44"/></g><text x="465" y="112" font-size="11" text-anchor="middle" fill="#fff">osprey (more)</text><text x="465" y="155" font-size="11" text-anchor="middle" fill="#fff">mullet (few)</text><text x="465" y="210" font-size="11" text-anchor="middle" fill="#fff">cordgrass (lots)</text></svg>',
          },
          caption: 'Pyramids of numbers for cordgrass → mullet → osprey in 1972 (left) and today (right).',
        },
        ph: 'Ospreys eat more mullet → fewer mullet → less cordgrass eaten → cordgrass increases.',
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
            svg: '<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="300" fill="#ffffff"/><line x1="60" y1="250" x2="430" y2="250" stroke="#444" stroke-width="1.5"/><line x1="60" y1="40" x2="60" y2="250" stroke="#444" stroke-width="1.5"/><text x="245" y="285" font-size="12" text-anchor="middle" fill="#1f2d3a">pH</text><text x="22" y="150" font-size="12" text-anchor="middle" fill="#1f2d3a" transform="rotate(-90 22 150)">Enzyme activity</text><g font-size="10" fill="#444" text-anchor="middle"><text x="60" y="266">0</text><text x="134" y="266">2</text><text x="208" y="266">5</text><text x="282" y="266">7</text><text x="356" y="266">9</text><text x="430" y="266">14</text></g><path d="M260,250 Q340,150 360,150 Q380,155 425,245" fill="none" stroke="#2f9e44" stroke-width="2.5"/><text x="362" y="140" font-size="12" fill="#2f9e44" font-weight="700">P</text><path d="M210,250 Q300,120 320,120 Q340,125 400,250" fill="none" stroke="#f08c00" stroke-width="2.5"/><text x="322" y="110" font-size="12" fill="#f08c00" font-weight="700">Q</text><path d="M150,250 Q230,90 252,90 Q270,95 340,250" fill="none" stroke="#0b7285" stroke-width="2.5"/><text x="252" y="80" font-size="12" fill="#0b7285" font-weight="700">R</text><path d="M70,250 Q120,60 138,70 Q150,80 200,250" fill="none" stroke="#c2255c" stroke-width="2.5"/><text x="130" y="55" font-size="12" fill="#c2255c" font-weight="700">S</text></svg>',
          },
          caption: 'Activity of four enzymes (P, Q, R, S) at different pH values. Enzyme S peaks at pH ≈ 2.',
        },
        widget: 'radio_select',
        widgetOptions: ['P', 'Q', 'R', 'S'],
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
        svg: '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="220" fill="#ffffff"/><text x="260" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Sex hormones and their glands</text><circle cx="140" cy="120" r="34" fill="#ffe3ec" stroke="#c2255c" stroke-width="2"/><text x="140" y="124" font-size="11" text-anchor="middle" fill="#c2255c">ovaries</text><circle cx="380" cy="120" r="34" fill="#bfe3f2" stroke="#0b7285" stroke-width="2"/><text x="380" y="124" font-size="11" text-anchor="middle" fill="#0b7285">testes</text><rect x="92" y="60" width="96" height="22" rx="6" fill="#fff0f6" stroke="#c2255c"/><text x="140" y="75" font-size="10" text-anchor="middle" fill="#c2255c">Oestrogen</text><line x1="140" y1="82" x2="140" y2="86" stroke="#c2255c" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="333" y="60" width="94" height="22" rx="6" fill="#e7f5ff" stroke="#1971c2"/><text x="380" y="75" font-size="10" text-anchor="middle" fill="#1971c2">Testosterone</text><line x1="380" y1="82" x2="380" y2="86" stroke="#1971c2" stroke-width="1.5" stroke-dasharray="3 3"/></svg>',
      },
      caption: 'Each sex hormone is made in a specific reproductive gland.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The reproductive system is controlled by hormones. **Select** the correct items to complete the diagram by matching each sex hormone to its site of production.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['Oestrogen → Site of production', 'Testosterone → Site of production'],
        widgetOptions: ['Ovaries', 'Testes', 'Kidneys', 'Glucagon'],
        ph: 'Match oestrogen to its gland and testosterone to its gland.',
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
          'Shoulders broaden',
          'Menstruation starts',
          'Body hair increases',
        ],
        ph: 'Males only, both sexes, or females only — classify each change correctly.',
      },
      {
        label: 'c',
        text: 'Egg cells are formed in the ovaries through meiosis. Human body cells contain 46 chromosomes, but sex cells contain 23. **Outline** why there are fewer chromosomes in sex cells.',
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
  // NEW data table: averages 405, 410, ?(412), 380, 340 ; missing avg at 40°C
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
              ['20', '404', '405', '406', '405'],
              ['30', '411', '410', '409', '410'],
              ['40', '414', '411', '411', '?'],
              ['50', '381', '379', '380', '380'],
              ['60', '341', '339', '340', '340'],
            ],
          },
          caption: 'Oxygen concentration produced at each temperature. The 40 °C average is missing.',
        },
        ph: 'Average of 414, 411, 411 = 412 → 412.',
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
  // NEW: CO₂ at 0.06%, 0.12%, 0.18%; rate plateaus above 0.12%; max ~12 ppm
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'CO₂ & Photosynthesis Evaluation',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 14,
    stem: 'A student tested the effect of carbon dioxide (CO₂) concentration on the rate of photosynthesis using the following method: (1) Cut base of plant stem. (2) Place stem in flask with water. (3) Place flask in closed container at 30 °C with CO₂ regulator. (4) Use CO₂ concentrations of 0.06%, 0.12% and 0.18%. (5) Measure O₂ concentration in ppm after 10 minutes. (6) Use O₂ data to calculate rate of photosynthesis.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Rate of photosynthesis vs CO₂ concentration',
        xLabel: 'CO₂ concentration',
        yLabel: 'Rate of photosynthesis',
        xUnit: '%',
        yUnit: 'ppm O₂ min⁻¹',
        dataPoints: [
          { x: 0.06, y: 6 },
          { x: 0.12, y: 12 },
          { x: 0.18, y: 12.3 },
        ],
        xMin: 0,
        xMax: 0.24,
        yMin: 0,
        yMax: 14,
        xStep: 0.06,
        yStep: 2,
      },
      caption: 'Rate of photosynthesis rises with CO₂ up to about 0.12%, then plateaus.',
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
        text: '**Suggest** two reasons for setting the heater at 30 °C.',
        marks: 2,
        ph: 'Temperature as a control variable; 30°C is optimum or ensures reaction proceeds quickly.',
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
        ph: 'Rate increases below 0.12% (CO₂ limiting); plateaus above 0.12% (other factors limit).',
      },
      {
        label: 'e',
        text: '**Suggest** how the students could increase the rate of photosynthesis beyond 12 ppm O₂ min⁻¹.',
        marks: 1,
        ph: 'Change another limiting factor — temperature or light intensity.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — CO₂ Concentration & Photosynthesis Design (15 marks) Criterion B
  // Context: pondweed (Elodea) + sodium hydrogencarbonate (CO₂ source) concentration
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'CO₂ Concentration & Photosynthesis Design',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 15,
    stem: 'The students wanted to extend their knowledge of photosynthesis. They want to investigate how changing the concentration of dissolved carbon dioxide affects the rate of photosynthesis in a piece of pondweed (Elodea). Dissolved CO₂ can be increased by adding sodium hydrogencarbonate to the water. They are provided with the equipment shown and standard laboratory equipment.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bw2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pondweed and dissolved CO₂</text><rect x="150" y="70" width="170" height="160" rx="6" fill="url(#bw2)" stroke="#3f7e98" stroke-width="2"/><rect x="220" y="120" width="30" height="105" rx="4" fill="none" stroke="#2f9e44" stroke-width="2"/><path d="M235,225 l-10,-18 l20,0 Z" fill="#2f9e44"/><path d="M235,200 q-14,-8 -10,-22 M235,170 q14,-8 10,-22 M235,140 q-14,-6 -10,-20" stroke="#2f9e44" stroke-width="2" fill="none"/><text x="262" y="180" font-size="11" fill="#2f9e44">pondweed</text><g><circle cx="230" cy="110" r="3" fill="#fff" stroke="#0b7285"/><circle cx="243" cy="95" r="2.5" fill="#fff" stroke="#0b7285"/><circle cx="225" cy="85" r="2" fill="#fff" stroke="#0b7285"/></g><text x="255" y="98" font-size="10" fill="#0b7285">O₂ bubbles</text><rect x="360" y="90" width="120" height="60" rx="6" fill="#fff8e1" stroke="#f08c00"/><text x="420" y="115" font-size="10" text-anchor="middle" fill="#9a6b00">sodium</text><text x="420" y="130" font-size="10" text-anchor="middle" fill="#9a6b00">hydrogencarbonate</text><text x="420" y="145" font-size="9" text-anchor="middle" fill="#9a6b00">(adds dissolved CO₂)</text><line x1="360" y1="120" x2="322" y2="130" stroke="#f08c00" stroke-width="1.5" stroke-dasharray="3 3"/><circle cx="90" cy="60" r="20" fill="#fff3b0" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="2" stroke-linecap="round"><line x1="90" y1="34" x2="90" y2="26"/><line x1="112" y1="48" x2="118" y2="42"/><line x1="68" y1="48" x2="62" y2="42"/></g><text x="90" y="92" font-size="10" text-anchor="middle" fill="#9a7d0f">lamp (constant)</text></svg>',
      },
      caption: 'Pondweed releases oxygen bubbles; dissolved CO₂ is increased by adding sodium hydrogencarbonate.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to test how changing the concentration of dissolved carbon dioxide affects the rate of photosynthesis in the pondweed. In your answer, you should include:\n- the independent variable, dependent variable and two control variables\n- a testable hypothesis\n- details of any additional equipment you would need\n- details of how to manipulate, measure or monitor the variables\n- details of the method to collect sufficient data',
        marks: 15,
        ph: 'IV = CO₂ (hydrogencarbonate) concentration; DV = O₂ bubbles/min; CVs; hypothesis; method with repeats and increments.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Pesticides & Plant Yield (7 marks) Criterion C
  // NEW: pyrethrin pesticide; species J,K,L,M; highest yield = K (2.8)
  // NEW graph: minimum conc K = 2%, M = 7%
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
    stem: 'In addition to maximizing plant growth through photosynthesis, the yield of plant crops can be increased using pesticides. Pesticides are compounds used in farming to kill plant pests. The table below shows the results from experiments testing the impact of using the pesticide pyrethrin on the yield of different plant species. The experiment was conducted in a greenhouse with constant environmental conditions and concentration of pesticide.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Plant species', 'Yield without pesticide / kg m⁻²', 'Yield with pesticide / kg m⁻²'],
        rows: [
          ['J', '1.3', '2.2'],
          ['K', '1.5', '2.8'],
          ['L', '1.7', '1.9'],
          ['M', '1.2', '2.5'],
        ],
      },
      caption: 'Yield of four plant species grown with and without the pesticide pyrethrin.',
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
        ph: 'The pest targeted by pyrethrin may not attack all plant species.',
      },
      {
        label: 'c',
        text: '**State** the reason for conducting these experiments inside a greenhouse.',
        marks: 1,
        ph: 'Greenhouses allow control of environmental variables.',
      },
      {
        label: 'd',
        text: 'A farmer who grows species K and M decided to find the lowest possible concentration of pyrethrin needed to maximise yield. **Identify** the minimum concentration of pyrethrin for plant K and for plant M.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="300" fill="#ffffff"/><line x1="60" y1="250" x2="430" y2="250" stroke="#444" stroke-width="1.5"/><line x1="60" y1="40" x2="60" y2="250" stroke="#444" stroke-width="1.5"/><text x="245" y="285" font-size="12" text-anchor="middle" fill="#1f2d3a">Pyrethrin concentration / %</text><text x="22" y="150" font-size="12" text-anchor="middle" fill="#1f2d3a" transform="rotate(-90 22 150)">Yield / kg m⁻²</text><g font-size="10" fill="#444" text-anchor="middle"><text x="60" y="266">0</text><text x="135" y="266">2</text><text x="208" y="266">4</text><text x="282" y="266">7</text><text x="356" y="266">9</text><text x="430" y="266">11</text></g><polyline points="60,190 135,75 208,75 282,75 356,75 430,75" fill="none" stroke="#c2255c" stroke-width="2.5"/><circle cx="135" cy="75" r="4" fill="#c2255c"/><text x="122" y="66" font-size="11" fill="#c2255c" font-weight="700">K</text><polyline points="60,225 135,195 208,160 282,110 356,110 430,110" fill="none" stroke="#1971c2" stroke-width="2.5"/><circle cx="282" cy="110" r="4" fill="#1971c2"/><text x="292" y="104" font-size="11" fill="#1971c2" font-weight="700">M</text></svg>',
          },
          caption: 'Yield of plant K (pink) and plant M (blue) against pyrethrin concentration. K plateaus at 2%, M at 7%.',
        },
        widget: 'fill_blank',
        widgetOptions: ['2', '7'],
        ph: 'Read from graph where yield of each plant reaches its maximum and stops increasing.',
      },
      {
        label: 'e',
        text: 'The farmer wants to grow both species on the same farm. **Identify** the minimum concentration of pyrethrin they should use. **Justify** your answer.',
        marks: 2,
        ph: 'Use the higher of the two minimum concentrations and explain why.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Dietary Sugar & Disease (10 marks) Criterion D
  // Context: dietary sugar intake / type-2 diabetes instead of sun exposure
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Diet, Lifestyle & Disease',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Cell Division (Mitosis & Meiosis)'],
    marks: 10,
    stem: 'A disease is a disorder that affects an organism\'s body, organs, tissues or cells. Diseases can be caused by pathogens; they can be inherited or they can develop due to changes in normal body processes such as a diet very high in sugar.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="300" fill="#ffffff"/><text x="240" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">New cases of type-2 diabetes per year</text><line x1="60" y1="250" x2="440" y2="250" stroke="#444" stroke-width="1.5"/><line x1="60" y1="40" x2="60" y2="250" stroke="#444" stroke-width="1.5"/><text x="250" y="285" font-size="11" text-anchor="middle" fill="#1f2d3a">Age / years</text><g font-size="10" fill="#444" text-anchor="middle"><text x="100" y="266">30</text><text x="180" y="266">45</text><text x="260" y="266">60</text><text x="340" y="266">70</text><text x="420" y="266">80</text></g><polyline points="100,238 180,195 260,110 340,95 420,160" fill="none" stroke="#1971c2" stroke-width="2.5"/><polyline points="100,242 180,205 260,135 340,105 420,170" fill="none" stroke="#c2255c" stroke-width="2.5"/><rect x="300" y="48" width="130" height="44" rx="4" fill="#f8f9fa" stroke="#ced4da"/><line x1="312" y1="62" x2="330" y2="62" stroke="#1971c2" stroke-width="3"/><text x="336" y="66" font-size="10" fill="#1971c2">males</text><line x1="312" y1="80" x2="330" y2="80" stroke="#c2255c" stroke-width="3"/><text x="336" y="84" font-size="10" fill="#c2255c">females</text></svg>',
      },
      caption: 'New cases of type-2 diabetes per year for males and females by age. Both rise then fall; males have more cases at most ages.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The graph shows the number of new cases of type-2 diabetes per year in females and males by age. Using the graph, **state** one similarity and one difference in the trends in new cases per year for females and males.',
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
        text: 'A student claims that completely cutting all sugar out of their diet is good for health. **Discuss** and **evaluate** the student\'s claim. In your answer, you should include:\n- health benefits that support the student\'s claim\n- health concerns that do not support the student\'s claim\n- a concluding statement with advice for minimizing the health concerns',
        marks: 6,
        ph: 'Benefits: lower diabetes risk, weight control, dental health. Concerns: low energy, sugar is a needed fuel, overly restrictive. Advice: reduce free sugars, balanced diet.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Stem-Cell Therapy (14 marks) Criterion D
  // Context: stem-cell therapy for tissue repair instead of personalized medicine
  // ─────────────────────────────────────────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Stem-Cell Therapy',
    topicCanonical: 'Genome Mapping & Application',
    topicGroup: 'Biotechnology',
    topicsAlso: ['DNA & Genetics', 'Ethical Implications'],
    marks: 14,
    stem: 'Developments in science and technology have allowed scientists to grow new cells and tissues to repair the body. Stem cells are unspecialised cells that can divide and develop into many different specialised cell types. Doctors are investigating stem-cell therapy to replace damaged tissues — for example, growing new nerve cells after a spinal injury, or new heart muscle after a heart attack. Some stem cells are taken from early embryos, while others can be obtained from adult tissue.',
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the use of stem-cell therapy in the treatment of damaged tissues. In your answer, you should include:\n- medical benefits of stem-cell therapy for an individual and wider society\n- economic considerations in providing stem-cell therapy\n- ethical considerations\n- a concluding appraisal with justification',
        marks: 14,
        ph: 'Cover medical benefits, economic costs/savings, ethical issues (embryo source, safety, access), and a justified conclusion.',
      },
    ],
  },
]
