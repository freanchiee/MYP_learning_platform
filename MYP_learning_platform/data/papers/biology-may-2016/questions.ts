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
        figImages: ['/images/papers/biology-may-2016/page-01.png'],
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
        figImages: ['/images/papers/biology-may-2016/page-02.png'],
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
    stem: 'Identical twins have the same genes so they are genetically identical. The photographs show three pairs of twins.',
    figImages: ['/images/papers/biology-may-2016/page-04.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** one pair of twins shown in the photographs and **identify** one feature of those twins that is different between the two individuals.',
        marks: 1,
        ph: 'Any pair — state distinguishing feature e.g. hair colour/length, piercings, skin tone, weight.',
      },
      {
        label: 'b',
        text: '**Suggest** one factor that could account for the difference you identified in (a).',
        marks: 1,
        ph: 'Environmental factor e.g. diet, sun exposure, lifestyle choice (hair dye/piercing), exercise.',
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
        ph: 'A and C are identical twins. Both share tongue rolling (genetic trait); same eye colour; one shared trait that differs between B and D. Environmental differences (e.g. sun tan) explain non-genetic differences.',
        figImages: ['/images/papers/biology-may-2016/page-04.png'],
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
    figImages: ['/images/papers/biology-may-2016/page-05.png'],
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
    stem: 'Photosynthesis is a light-dependent process. A student investigated the rate of photosynthesis at different distances from a light source by counting the number of bubbles produced per minute.',
    figImages: ['/images/papers/biology-may-2016/page-07.png'],
    tasks: [
      {
        label: 'a',
        text: '**Design** a data collection table to record the number of bubbles per minute at five different distances from the light source (10, 20, 30, 40 and 50 cm). Include three trials and a mean.',
        marks: 4,
        ph: 'Table: column headers = Trial 1, Trial 2, Trial 3, Mean; row headers = distances (10–50 cm); units shown; title included.',
      },
      {
        label: 'b',
        text: 'The data table below shows results collected by the student.\n\n**Calculate** the mean number of bubbles per minute at each distance.',
        marks: 3,
        ph: '10 cm → 107; 20 cm → 108; 30 cm → 63; 40 cm → 27; 50 cm → 9.',
        figImages: ['/images/papers/biology-may-2016/page-08.png'],
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
    figImages: ['/images/papers/biology-may-2016/page-09.png'],
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
    stem: 'You are asked to design an investigation to study the effect of carbon dioxide concentration on the rate of photosynthesis. The equipment available includes: aquatic plants, CO₂ supply (sodium hydrogen carbonate solutions at different concentrations), light source, ruler, stopwatch, and a collection vessel.',
    figImages: ['/images/papers/biology-may-2016/page-10.png'],
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
    figImages: ['/images/papers/biology-may-2016/page-11.png'],
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
    figImages: ['/images/papers/biology-may-2016/page-12.png'],
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
    stem: 'Scientists are preserving the diversity of plants by creating seed banks. These are collections of seeds from as many different plant species as possible that are stored for long periods of time.',
    figImages: ['/images/papers/biology-may-2016/page-13.png'],
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
