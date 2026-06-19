import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2016',
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
    stem: 'Living things use different processes to transport substances across cell membranes. These include osmosis, diffusion and active transport.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Diagram', 'Substance moving', 'Direction of movement', 'Energy used?'],
        rows: [
          ['Root hair cell', 'Water into cell', 'Down a water-potential gradient (soil → cell)', 'No'],
          ['White blood cell', 'A whole bacterium engulfed', 'Cell membrane wraps around the particle', 'Yes'],
          ['Lung (alveolus → blood)', 'Oxygen into the bloodstream', 'High O₂ in air sac → low O₂ in blood', 'No'],
          ['Leaf cell', 'Oxygen out of the cell', 'High O₂ inside cell → low O₂ outside', 'No'],
        ],
      },
      caption: 'Four cases of substances moving into or out of cells. Use the direction and the "energy used?" column to decide the mechanism.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagrams show substances moving into or out of cells.\n\nFor each diagram, **select** the transport mechanism being shown.',
        marks: 2,
        widget: 'inline_dropdown_select',
        widgetItems: [
          'Water taken up by root hair cells',
          'White blood cell taking in bacteria',
          'Oxygen taken up into bloodstream in lungs',
          'Oxygen given out by leaf cells',
        ],
        widgetOptions: ['Osmosis', 'Diffusion', 'Neither'],
        ph: 'Osmosis; Neither; Diffusion; Diffusion.',
      },
      {
        label: 'b',
        text: '**State** the name of the organ system that carries blood around the body.',
        marks: 1,
        ph: 'Circulatory system.',
      },
      {
        label: 'c',
        text: '**Outline** why the uptake of oxygen from the lungs into the bloodstream does not require energy.',
        marks: 2,
        ph: 'Diffusion is a passive process; oxygen moves down its concentration gradient (high in alveoli → low in blood); no ATP required.',
      },
      {
        label: 'd',
        text: '**State** the name of another system that transmits signals inside the human body.',
        marks: 1,
        ph: 'Nervous system.',
      },
      {
        label: 'e',
        text: 'Select **one** sense organ from the options: Sight / Hearing / Taste / Smell / Touch.\n\n**Explain** how this sense and the transmission of signals inside the human body leads to a response that helps us to survive. Use a specific example in your answer.',
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="230" fill="#ffffff"/><text x="320" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">The stages of mitosis</text><g><ellipse cx="80" cy="120" rx="52" ry="46" fill="#eef4f7" stroke="#5b6b78"/><path d="M62 105 q18 -14 36 0" stroke="#9c36b5" stroke-width="4" fill="none"/><path d="M62 135 q18 14 36 0" stroke="#0b7285" stroke-width="4" fill="none"/><text x="80" y="190" font-size="10" text-anchor="middle" fill="#475569">Prophase</text><text x="80" y="204" font-size="8" text-anchor="middle" fill="#94a3ad">chromosomes condense</text></g><g><ellipse cx="210" cy="120" rx="52" ry="46" fill="#eef4f7" stroke="#5b6b78"/><line x1="210" y1="86" x2="210" y2="154" stroke="#cbd5e1" stroke-width="1"/><path d="M196 110 h28" stroke="#9c36b5" stroke-width="4"/><path d="M196 130 h28" stroke="#0b7285" stroke-width="4"/><text x="210" y="190" font-size="10" text-anchor="middle" fill="#475569">Metaphase</text><text x="210" y="204" font-size="8" text-anchor="middle" fill="#94a3ad">line up at the equator</text></g><g><ellipse cx="340" cy="120" rx="52" ry="46" fill="#fff7ed" stroke="#e8590c" stroke-width="2"/><path d="M330 100 l-16 -10" stroke="#94a3ad" stroke-width="1"/><path d="M350 100 l16 -10" stroke="#94a3ad" stroke-width="1"/><path d="M330 140 l-16 10" stroke="#94a3ad" stroke-width="1"/><path d="M350 140 l16 10" stroke="#94a3ad" stroke-width="1"/><path d="M312 100 h18" stroke="#9c36b5" stroke-width="4"/><path d="M350 100 h18" stroke="#9c36b5" stroke-width="4"/><path d="M312 140 h18" stroke="#0b7285" stroke-width="4"/><path d="M350 140 h18" stroke="#0b7285" stroke-width="4"/><text x="340" y="190" font-size="10" font-weight="700" text-anchor="middle" fill="#e8590c">Anaphase</text><text x="340" y="204" font-size="8" text-anchor="middle" fill="#c2410c">chromatids pulled to poles</text></g><g><ellipse cx="470" cy="98" rx="34" ry="30" fill="#eef4f7" stroke="#5b6b78"/><ellipse cx="470" cy="148" rx="34" ry="30" fill="#eef4f7" stroke="#5b6b78"/><path d="M456 92 h28" stroke="#9c36b5" stroke-width="3"/><path d="M456 142 h28" stroke="#0b7285" stroke-width="3"/><text x="470" y="190" font-size="10" text-anchor="middle" fill="#475569">Telophase</text><text x="470" y="204" font-size="8" text-anchor="middle" fill="#94a3ad">two nuclei form</text></g><g><circle cx="585" cy="98" r="24" fill="#e6fcf5" stroke="#2f9e44"/><circle cx="585" cy="148" r="24" fill="#e6fcf5" stroke="#2f9e44"/><text x="585" y="190" font-size="10" text-anchor="middle" fill="#475569">Cytokinesis</text><text x="585" y="204" font-size="8" text-anchor="middle" fill="#94a3ad">two identical cells</text></g></svg>',
      },
      caption: 'During anaphase (orange) the centromeres split and spindle fibres pull one chromatid of each pair to each pole, so both daughter cells receive an identical set.',
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
        text: '**Explain** how one process that occurs during meiosis leads to genetic differences in children of the same parents.',
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
    stem: 'Identical twins have the same genes, so they are genetically identical. The table records six characteristics of four people — A, B, C and D. Two of these four people are a pair of identical twins. Some characteristics are inherited (genetic) and some are caused by the environment.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Trait', 'A', 'B', 'C', 'D'],
        rows: [
          ['Has a sun tan', 'yes', 'yes', 'no', 'no'],
          ['Sex', 'male', 'male', 'male', 'female'],
          ['Tongue roll', 'yes', 'no', 'yes', 'no'],
          ['Natural hair colour', 'brown', 'brown', 'brown', 'brown'],
          ['Has coloured / dyed hair', 'no', 'no', 'yes', 'yes'],
          ['Eye colour', 'brown', 'brown', 'brown', 'blue'],
        ],
      },
      caption: 'Characteristics of four people. Genetic traits (sex, tongue rolling, natural eye colour) are inherited; a sun tan and dyed hair are environmental and can differ between identical twins.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the table, **identify** one characteristic that differs between the two identical twins even though they have the same genes.',
        marks: 1,
        ph: 'A sun tan (A has one, C does not) OR coloured / dyed hair (C has it, A does not).',
      },
      {
        label: 'b',
        text: '**Suggest** one factor that could account for the difference you identified in (a).',
        marks: 1,
        ph: 'An environmental factor e.g. sun exposure (tan) or a lifestyle choice such as dyeing the hair.',
      },
      {
        label: 'c',
        text: '**Outline** a reason why the difference seen between the twins may not be seen in their children.',
        marks: 2,
        ph: 'The difference is environmental (acquired), not genetic; it is not encoded in DNA, so it cannot be inherited; children inherit genes only, and whether they show the feature depends on their own environment.',
      },
      {
        label: 'd',
        text: 'The table above shows characteristics of four people — A, B, C and D.\n\n**Identify** which two people are identical twins. **Justify** your answer using at least two examples from the table.',
        marks: 3,
        ph: 'A and C are identical twins. Both share tongue rolling (genetic trait); same sex and natural eye colour. Differences (sun tan, dyed hair) are environmental, not genetic, so do not rule out identical twins.',
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
    stem: 'A student wants to investigate how temperature affects the rate of photosynthesis. Leaf discs from a plant are placed in a syringe with sodium hydrogen carbonate solution. The syringe is used to remove air from the discs so they sink. The time taken for the discs to float to the surface when placed under a light source is used as a measure of the rate of photosynthesis.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="270" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Leaf-disc photosynthesis apparatus</text><g><circle cx="90" cy="70" r="26" fill="#fff3bf" stroke="#f08c00" stroke-width="2"/><g stroke="#f59f00" stroke-width="2"><line x1="90" y1="34" x2="90" y2="22"/><line x1="118" y1="42" x2="127" y2="33"/><line x1="126" y1="70" x2="138" y2="70"/><line x1="118" y1="98" x2="127" y2="107"/></g><text x="90" y="120" font-size="10" text-anchor="middle" fill="#475569">Light source</text></g><line x1="150" y1="70" x2="205" y2="120" stroke="#94a3ad" stroke-width="1" stroke-dasharray="3 3"/><g><rect x="210" y="70" width="150" height="150" rx="6" fill="#e7f5ff" stroke="#1971c2" stroke-width="2"/><text x="285" y="60" font-size="10" text-anchor="middle" fill="#475569">Beaker — NaHCO₃ solution</text><circle cx="245" cy="100" r="9" fill="#2f9e44" stroke="#2b8a3e"/><circle cx="285" cy="95" r="9" fill="#2f9e44" stroke="#2b8a3e"/><circle cx="325" cy="103" r="9" fill="#2f9e44" stroke="#2b8a3e"/><text x="375" y="98" font-size="9" fill="#2b8a3e">discs float (O₂)</text><circle cx="255" cy="195" r="9" fill="#37b24d" stroke="#2b8a3e" opacity="0.55"/><circle cx="300" cy="200" r="9" fill="#37b24d" stroke="#2b8a3e" opacity="0.55"/><text x="375" y="200" font-size="9" fill="#94a3ad">discs sink at start</text><path d="M255 185 q0 -35 0 -70" stroke="#69db7c" stroke-width="1.5" fill="none" marker-end="url(#a)"/><defs><marker id="a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#69db7c"/></marker></defs></g><g><rect x="430" y="120" width="90" height="100" rx="40" fill="#fff" stroke="#5b6b78" stroke-width="2" transform="rotate(8 475 170)"/><text x="475" y="245" font-size="10" text-anchor="middle" fill="#475569">Water bath</text><text x="475" y="259" font-size="9" text-anchor="middle" fill="#94a3ad">sets the temperature</text></g></svg>',
      },
      caption: 'Sunk leaf discs photosynthesise under the light, release oxygen and rise to the surface; the time to float measures the rate. The water bath sets the temperature being tested.',
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
        ph: 'How does temperature affect the rate of photosynthesis (as measured by the time for leaf discs to float)?',
      },
      {
        label: 'c',
        text: '**Formulate** a testable hypothesis for this investigation. Include a scientific reason for your prediction.',
        marks: 4,
        ph: 'If temperature increases then the rate of photosynthesis will increase (up to an optimum) because higher temperatures increase enzyme activity (RuBisCO) which speeds up the light-independent reactions.',
      },
      {
        label: 'd',
        text: '**State** the variables for this investigation and **outline** how each will be manipulated or measured.',
        marks: 10,
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: [
          'Temperature of water bath',
          'Time for leaf discs to float',
          'Type of plant/leaf used',
          'Number of leaf discs',
          'Volume of sodium hydrogen carbonate solution',
          'Light intensity/distance from light source',
          'Size of leaf discs',
          'Concentration of sodium hydrogen carbonate',
        ],
        ph: 'IV: temperature. DV: time for leaf discs to float. CV: plant type, number of discs, solution volume, light intensity, disc size, NaHCO₃ concentration.',
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
  // Q5 — Wavelength & Rate of Photosynthesis (10 marks, Criterion C)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Photosynthesis Data & Graphs',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 10,
    stem: 'Photosynthesis is a light-dependent process. A student investigated the rate of photosynthesis at different distances from a light source by counting the number of oxygen bubbles produced per minute by an aquatic plant.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="580" height="250" fill="#ffffff"/><text x="290" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Counting oxygen bubbles from pondweed</text><g><circle cx="70" cy="120" r="24" fill="#fff3bf" stroke="#f08c00" stroke-width="2"/><g stroke="#f59f00" stroke-width="2"><line x1="70" y1="88" x2="70" y2="78"/><line x1="96" y1="96" x2="104" y2="88"/><line x1="104" y1="120" x2="114" y2="120"/><line x1="96" y1="144" x2="104" y2="152"/></g><text x="70" y="170" font-size="10" text-anchor="middle" fill="#475569">Lamp</text></g><g stroke="#94a3ad" stroke-width="1"><line x1="118" y1="120" x2="220" y2="120" stroke-dasharray="4 3"/></g><text x="170" y="112" font-size="9" text-anchor="middle" fill="#94a3ad">distance d (cm)</text><g><rect x="220" y="60" width="150" height="150" rx="6" fill="#e7f5ff" stroke="#1971c2" stroke-width="2"/><text x="295" y="50" font-size="10" text-anchor="middle" fill="#475569">Beaker of water</text><path d="M250 205 q4 -50 18 -80 q-14 18 -4 80" fill="#2f9e44" stroke="#2b8a3e"/><path d="M268 125 l14 -20 M268 145 l16 -10 M268 165 l14 8" stroke="#2f9e44" stroke-width="4" stroke-linecap="round"/><text x="262" y="200" font-size="9" fill="#2b8a3e">pondweed</text><g fill="#e7f5ff" stroke="#74c0fc"><circle cx="300" cy="100" r="4"/><circle cx="308" cy="118" r="3.5"/><circle cx="298" cy="135" r="3"/><circle cx="312" cy="150" r="3.5"/></g><text x="345" y="100" font-size="9" fill="#1971c2">O₂ bubbles</text></g><g><rect x="410" y="95" width="120" height="60" rx="6" fill="#f8fafc" stroke="#5b6b78"/><text x="470" y="118" font-size="10" text-anchor="middle" fill="#475569">Count bubbles</text><text x="470" y="136" font-size="10" text-anchor="middle" fill="#475569">per minute</text><text x="470" y="172" font-size="9" text-anchor="middle" fill="#94a3ad">repeat at 10–50 cm</text></g></svg>',
      },
      caption: 'A lamp is placed a set distance from pondweed in water; the student counts oxygen bubbles released per minute, repeating at distances of 10, 20, 30, 40 and 50 cm.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Design** a data collection table to record the number of bubbles per minute at five different distances from the light source (10, 20, 30, 40 and 50 cm). Include at least three repeat trials and a column for the mean.',
        marks: 4,
        ph: 'Table: column headers = Trial 1, Trial 2, Trial 3, … , Mean; row headers = distances (10–50 cm); units shown (cm; bubbles min⁻¹); title included.',
      },
      {
        label: 'b',
        text: 'The data table below shows results collected by the student.\n\n**Calculate** the mean number of bubbles per minute at each distance.',
        marks: 3,
        ph: '10 cm → 107.2 (≈107); 20 cm → 108.0 (108); 30 cm → 62.4 (≈62); 40 cm → 26.8 (≈27); 50 cm → 9.2 (≈9).',
        artefact: {
          component: 'DataTableInteractive',
          data: {
            title: 'Bubbles per minute at each distance',
            headers: ['Distance from light / cm', 'Trial 1', 'Trial 2', 'Trial 3', 'Trial 4', 'Trial 5'],
            rows: [
              ['10', '110', '99', '109', '102', '116'],
              ['20', '109', '99', '101', '112', '119'],
              ['30', '58', '53', '58', '67', '76'],
              ['40', '19', '24', '31', '27', '33'],
              ['50', '8', '15', '4', '11', '8'],
            ],
            caption: 'Add the five trials in each row and divide by 5 to find the mean number of bubbles per minute at that distance.',
          },
        },
      },
      {
        label: 'c',
        text: '**Present** the transformed data (means) in an appropriate graph. Label the axes and give the graph a title.',
        marks: 3,
        ph: 'Line graph or bar chart; x-axis = distance from light (cm); y-axis = mean bubbles per minute; plotted correctly; title; units.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Biomass & Water Investigation Analysis (14 marks, Criterion C)
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
    stem: 'A student tested the hypothesis: "If one group of plants receives more water than the other group then the biomass of those plants increases more." Two groups of identical plants were set up; one group received 100 mL of water per day and the other received 200 mL per day. The biomass of plants was measured at the start and end of the investigation.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Plant group', 'Initial mean biomass / kg', 'Final mean biomass / kg', 'Increase in biomass / kg'],
        rows: [
          ['100 mL water per day', '0.10', '0.17', '0.07'],
          ['200 mL water per day', '0.10', '0.26', '0.16'],
        ],
      },
      caption: 'Mean biomass of each group at the start and after 3 weeks. Both groups started at the same biomass; compare the increase to test the hypothesis.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the data, **state** one trend shown in the results.',
        marks: 1,
        ph: 'Plants receiving more water (200 mL) showed a greater increase in biomass than those receiving less water (100 mL).',
      },
      {
        label: 'b',
        text: '**Explain** one scientific reason for the difference in the final and initial mean average biomass of the plants.',
        marks: 3,
        ph: 'Plants receiving more water can photosynthesize more; water is a reactant in photosynthesis; more glucose produced → more organic molecules → greater biomass.',
      },
      {
        label: 'c',
        text: 'Using the data, **comment** on whether the results support the hypothesis stated above.',
        marks: 1,
        ph: 'Results support hypothesis; 200 mL group has greater mean biomass increase than 100 mL group.',
      },
      {
        label: 'd',
        text: '**Describe** one strength and one weakness of the method used in this investigation.',
        marks: 4,
        ph: 'Strength: e.g. multiple plants used → more reliable mean. Weakness: e.g. only two water amounts tested → limited range; or only one environmental condition changed.',
      },
      {
        label: 'e',
        text: '**Outline** two improvements to this investigation. **Justify** how each improvement would enhance the investigation.',
        marks: 4,
        ph: 'Improvement 1: test more water volumes (e.g. 50, 100, 150, 200, 250 mL) → identifies optimum. Improvement 2: repeat experiment with more plant replicates → increases reliability of mean.',
      },
      {
        label: 'f',
        text: 'Suggest **one** extension to this investigation other than changing temperature or light intensity.',
        marks: 1,
        ph: 'Investigate effect of type of fertilizer/soil nutrient concentration on plant biomass.',
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
    stem: 'You are asked to design an investigation to study the effect of carbon dioxide concentration on the rate of photosynthesis. The apparatus available is shown below: a sealed tank holding potted plants, a cylinder that can add carbon dioxide to the tank, a CO₂/O₂ sensor that logs the gas levels, and an adjustable lamp.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="280" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Sealed-tank photosynthesis apparatus</text><g><rect x="60" y="120" width="46" height="110" rx="8" fill="#dbe4ff" stroke="#3b5bdb" stroke-width="2"/><rect x="74" y="106" width="18" height="18" fill="#5b6b78"/><text x="83" y="180" font-size="11" font-weight="700" text-anchor="middle" fill="#3b5bdb">CO₂</text><text x="83" y="248" font-size="9" text-anchor="middle" fill="#475569">CO₂ cylinder</text></g><path d="M106 150 q40 -10 64 4" stroke="#fa5252" stroke-width="3" fill="none"/><g><rect x="170" y="80" width="200" height="150" rx="6" fill="#f1f3f5" stroke="#5b6b78" stroke-width="2" opacity="0.5"/><text x="270" y="70" font-size="10" text-anchor="middle" fill="#475569">Sealed glass tank</text><g><rect x="200" y="195" width="26" height="20" fill="#e8590c"/><path d="M213 195 l-12 -28 M213 195 l12 -30 M213 178 l-10 -20 M213 178 l10 -22" stroke="#2f9e44" stroke-width="4" stroke-linecap="round"/></g><g><rect x="255" y="195" width="26" height="20" fill="#e8590c"/><path d="M268 195 l-12 -34 M268 195 l12 -32 M268 172 l-10 -18 M268 172 l10 -20" stroke="#2f9e44" stroke-width="4" stroke-linecap="round"/></g><g><rect x="310" y="195" width="26" height="20" fill="#e8590c"/><path d="M323 195 l-10 -24 M323 195 l10 -26" stroke="#2f9e44" stroke-width="4" stroke-linecap="round"/></g></g><g><rect x="210" y="240" width="120" height="26" rx="4" fill="#fff" stroke="#5b6b78"/><text x="270" y="257" font-size="10" text-anchor="middle" fill="#475569">CO₂ / O₂ sensor</text></g><g><circle cx="470" cy="80" r="22" fill="#fff3bf" stroke="#f08c00" stroke-width="2"/><g stroke="#f59f00" stroke-width="2"><line x1="470" y1="50" x2="470" y2="40"/><line x1="494" y1="58" x2="502" y2="50"/><line x1="500" y1="80" x2="510" y2="80"/></g><rect x="466" y="100" width="8" height="70" fill="#868e96"/><rect x="440" y="170" width="60" height="10" rx="3" fill="#495057"/><text x="470" y="200" font-size="10" text-anchor="middle" fill="#475569">Adjustable lamp</text></g><line x1="448" y1="92" x2="372" y2="140" stroke="#ffd43b" stroke-width="2" stroke-dasharray="4 3"/></svg>',
      },
      caption: 'CO₂ from the cylinder is added to the sealed tank of plants; the sensor logs gas levels while the lamp provides light. Vary the CO₂ level and measure the rate of oxygen production / CO₂ uptake.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** a complete investigation to test how carbon dioxide concentration affects the rate of photosynthesis. Your answer should include:\n- a testable hypothesis with scientific reasoning\n- identification and justification of the independent, dependent and control variables\n- a step-by-step method that could be followed by another student\n- a description of how the variables will be measured and controlled\n- a labelled data collection table\n- a description of how the data will be processed and presented.',
        marks: 16,
        ph: 'Hypothesis: If CO₂ concentration increases, rate of photosynthesis increases, because CO₂ is a reactant needed for the light-independent stage. IV: CO₂ concentration. DV: bubbles per minute. CV: light, temperature, plant type. Method: set up aquatic plant in each NaHCO₃ concentration; count bubbles per minute; 3 trials; calculate mean.',
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
    stem: 'Human activities can reduce the biodiversity of an ecosystem. The table summarises some of these activities and how each one lowers the number of species in an area.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Human activity', 'Effect on the habitat / ecosystem', 'Effect on biodiversity'],
        rows: [
          ['Deforestation', 'Habitats and food sources destroyed', 'Many species lost'],
          ['Introducing invasive species', 'New species out-compete or prey on natives', 'Native species decline'],
          ['Pollution (e.g. river)', 'Water becomes toxic to organisms', 'Sensitive species die out'],
          ['Overexploitation (over-fishing / hunting)', 'Populations removed faster than they recover', 'Species become rare or extinct'],
          ['Climate change (melting ice caps)', 'Habitats shrink or disappear', 'Specialist species lost'],
        ],
      },
      caption: 'Five human activities that reduce biodiversity. Each destroys or degrades habitat, lowering the number of species that can survive in the area.',
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
        ph: 'Deforestation destroys habitats → reduces number of species that can survive in the area → biodiversity decreases.',
      },
      {
        label: 'c',
        text: '**Explain**, using scientific language, how the loss of one species might affect other organisms in the same ecosystem.',
        marks: 4,
        ph: 'Loss of prey species → predator population declines. Loss of predator → prey population increases → overgrazing/competition. Disrupts food web. Keystone species removal amplifies effects. Ecosystem stability reduced.',
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
    stem: 'The diagram shows the feeding relationships between organisms in a garden ecosystem. Each arrow points from an organism to the organism that eats it, showing the direction of energy flow.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Garden food web',
        nodes: [
          { id: 'plant', label: 'Flowering plant', color: '#2f9e44', detail: 'Producer — makes its own food by photosynthesis; base of the food web.' },
          { id: 'grass', label: 'Grass', color: '#2f9e44', detail: 'Producer — converts light energy into biomass.' },
          { id: 'slug', label: 'Slug', color: '#f08c00', detail: 'Primary consumer / herbivore — eats the flowering plant; food for the hedgehog and thrush.' },
          { id: 'mouse', label: 'Mouse', color: '#f08c00', detail: 'Primary consumer — eats grass and seeds; prey of the owl and fox.' },
          { id: 'grasshopper', label: 'Grasshopper', color: '#f08c00', detail: 'Primary consumer — eats grass; prey of the thrush.' },
          { id: 'hedgehog', label: 'Hedgehog', color: '#c2255c', detail: 'Secondary consumer — eats slugs and other invertebrates.' },
          { id: 'thrush', label: 'Thrush', color: '#c2255c', detail: 'Secondary consumer — eats slugs and grasshoppers.' },
          { id: 'owl', label: 'Owl', color: '#1971c2', detail: 'Top predator — eats mice.' },
          { id: 'fox', label: 'Fox', color: '#1971c2', detail: 'Top predator — eats mice and hedgehogs.' },
        ],
        edges: [
          { from: 'plant', to: 'slug', label: 'eaten by' },
          { from: 'grass', to: 'mouse' },
          { from: 'grass', to: 'grasshopper' },
          { from: 'slug', to: 'hedgehog' },
          { from: 'slug', to: 'thrush' },
          { from: 'grasshopper', to: 'thrush' },
          { from: 'mouse', to: 'owl' },
          { from: 'mouse', to: 'fox' },
          { from: 'hedgehog', to: 'fox' },
        ],
      },
      caption: 'Arrows point from prey to predator (the direction energy flows). Producers are green, herbivores orange, predators red/blue.',
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
        text: 'Using the diagram, **state** the role of the flowering plant and the role of the slug in the ecosystem.',
        marks: 2,
        ph: 'Flowering plant: producer (converts light energy into biomass by photosynthesis). Slug: primary consumer/herbivore (eats plants, transfers energy to secondary consumers).',
      },
      {
        label: 'c',
        text: '**Justify** why both the flowering plant and the slug are equally important to protect in this ecosystem.',
        marks: 2,
        ph: 'Loss of flowering plant removes food source for multiple organisms → food web collapse. Loss of slug removes food source for carnivores (e.g. hedgehog/thrush) → those populations decline. Both are integral links; loss of either disrupts energy flow through ecosystem.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q10 — Seed Banks (21 marks, Criterion D)
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
    stem: 'Scientists are preserving the diversity of plants by creating seed banks. These are collections of seeds from as many different plant species as possible that are stored for long periods of time. The flow chart shows the main steps used to build and maintain a seed bank.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="200" fill="#ffffff"/><text x="310" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">How a seed bank is created and maintained</text><defs><marker id="ar" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="#5b6b78"/></marker></defs><g font-size="10" fill="#1f2d3a"><g><rect x="20" y="70" width="100" height="70" rx="8" fill="#e6fcf5" stroke="#2f9e44" stroke-width="2"/><text x="70" y="98" text-anchor="middle" font-weight="700">1. Collect</text><text x="70" y="114" text-anchor="middle">seeds from</text><text x="70" y="128" text-anchor="middle">wild plants</text></g><line x1="120" y1="105" x2="148" y2="105" stroke="#5b6b78" stroke-width="2" marker-end="url(#ar)"/><g><rect x="150" y="70" width="100" height="70" rx="8" fill="#fff9db" stroke="#f08c00" stroke-width="2"/><text x="200" y="98" text-anchor="middle" font-weight="700">2. Dry</text><text x="200" y="114" text-anchor="middle">to remove</text><text x="200" y="128" text-anchor="middle">moisture</text></g><line x1="250" y1="105" x2="278" y2="105" stroke="#5b6b78" stroke-width="2" marker-end="url(#ar)"/><g><rect x="280" y="70" width="100" height="70" rx="8" fill="#e7f5ff" stroke="#1971c2" stroke-width="2"/><text x="330" y="98" text-anchor="middle" font-weight="700">3. Freeze</text><text x="330" y="114" text-anchor="middle">and store at</text><text x="330" y="128" text-anchor="middle">−20 °C</text></g><line x1="380" y1="105" x2="408" y2="105" stroke="#5b6b78" stroke-width="2" marker-end="url(#ar)"/><g><rect x="410" y="70" width="100" height="70" rx="8" fill="#f3f0ff" stroke="#7048e8" stroke-width="2"/><text x="460" y="98" text-anchor="middle" font-weight="700">4. Test</text><text x="460" y="114" text-anchor="middle">viability</text><text x="460" y="128" text-anchor="middle">periodically</text></g><line x1="510" y1="105" x2="538" y2="105" stroke="#5b6b78" stroke-width="2" marker-end="url(#ar)"/><g><rect x="540" y="70" width="70" height="70" rx="8" fill="#fff0f6" stroke="#c2255c" stroke-width="2"/><text x="575" y="98" text-anchor="middle" font-weight="700">5. Re-</text><text x="575" y="112" text-anchor="middle">grow if</text><text x="575" y="126" text-anchor="middle">needed</text></g></g><path d="M575 140 q0 30 -250 30 q-255 0 -255 -25" fill="none" stroke="#adb5bd" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#ar)"/><text x="320" y="188" font-size="9" text-anchor="middle" fill="#94a3ad">re-grown plants supply fresh seeds back to the bank</text></svg>',
      },
      caption: 'Seeds are collected, dried, frozen at about −20 °C and periodically tested for viability; if viability falls, seeds are grown into plants that supply fresh seeds.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** one reason why seed banks are important.',
        marks: 1,
        ph: 'Preserves plant diversity; protects species from extinction; maintains genetic resources for future use.',
      },
      {
        label: 'b',
        text: '**Outline** the process used to create and maintain a seed bank.',
        marks: 3,
        ph: 'Collect seeds from wild populations; dry seeds to remove moisture; freeze/store at low temperatures (−20 °C); test viability periodically; regrow if viability declines.',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** the implications of creating and maintaining seed banks. In your extended answer consider:\n- the advantages and disadvantages of seed banks\n- the social, economic and environmental implications\n- whether seed banks are a sufficient long-term strategy for conservation\n- an appraisal of the overall value of seed banks.',
        marks: 17,
        ph: 'Advantages: insurance against extinction, food security, research. Disadvantages: costly, limited to seeds (no habitat preservation), seeds may lose viability. Social: global equity of access. Economic: investment needed. Environmental: does not address root causes of biodiversity loss. Evaluation: necessary but not sufficient; must be complemented by habitat conservation. Appraisal.',
      },
    ],
  },
]
