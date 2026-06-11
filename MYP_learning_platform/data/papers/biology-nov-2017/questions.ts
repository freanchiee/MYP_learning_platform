import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2017',
  subject: 'Biology',
  session: 'November',
  year: 2017,
  totalMarks: 120,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Q1: Water in Plants (7 marks, Criterion A) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Water in Plants & Transpiration',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Transpiration & Translocation'],
    marks: 7,
    stem: 'Plants can experience water stress either when there is not enough water in the soil or when the transpiration rate is too high. The diagram shows plant cells in hypotonic, isotonic, and hypertonic solutions.',
    figImages: [
      '/images/papers/biology-nov-2017/page-02.png',
      '/images/papers/biology-nov-2017/page-03.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'The animation shows different diagrams of water moving in and out of a plant cell.\n\n**Select** the diagram that correctly shows the movement of water molecules when a plant cell is turgid.',
        marks: 1,
        ph: 'Select the correct diagram.',
        widget: 'radio_select',
        widgetOptions: ['Diagram A', 'Diagram B', 'Diagram C', 'Diagram D'],
      },
      {
        label: 'b',
        text: '**State** the name of the structure in the cell that prevents it from bursting when it is turgid.',
        marks: 1,
        ph: 'The structure is the...',
      },
      {
        label: 'c',
        text: '**Suggest and justify** a possible effect of plasmolyzed cells on the plant\'s structure.',
        marks: 1,
        ph: 'Plant will wilt / go floppy / can no longer stand upright...',
      },
      {
        label: 'd',
        text: 'Many environmental factors impact on the transpiration rate of plants. Marram grass is a plant that has had to adapt to dry and windy conditions.\n\nThe image shows that the leaves of marram grass are curled inward, the inner surface is quite thick, and the stomata are sunken so that stomata are also surrounded by hairs.\n\n**Explain** how one adaptation of the marram leaf reduces water loss by transpiration. You should include scientific knowledge and understanding in your answer.',
        marks: 4,
        ph: 'Curled leaves / sunken stomata / waxy cuticle; trapped water vapour / humid microclimate; reduces evaporation/transpiration rate...',
        figImages: ['/images/papers/biology-nov-2017/page-03.png'],
      },
    ],
  },

  // ── Q2: Tropisms (16 marks, Criterion A/C) ──────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Tropisms & Plant Responses',
    topicCanonical: 'Tropism',
    topicGroup: 'Interactions with Environment',
    marks: 16,
    stem: 'Living organisms have the ability to respond to a stimulus. When a plant responds to a stimulus, it is called a tropism. If the tropism is positive, the stimulus causes growth of the plant toward the stimulus. If the tropism is negative, the stimulus causes growth of the plant away from the stimulus.',
    figImages: ['/images/papers/biology-nov-2017/page-04.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** two stimuli, other than gravity or touch, that cause tropism in plants.',
        marks: 2,
        ph: 'Two stimuli: e.g. light / water / heat / nutrients / pheromones...',
      },
      {
        label: 'b',
        text: 'A plant shows both positive and negative tropism.\n\n**Suggest** how the growth of a plant shows both positive and negative tropism towards gravity.',
        marks: 4,
        ph: 'Stem: positive tropism — grows upward / toward light; leaves exposed to light. Roots: negative tropism — grow downward; absorb water/nutrients; form stable root structure...',
        figImages: ['/images/papers/biology-nov-2017/page-05.png'],
      },
      {
        label: 'c',
        text: 'Mimosa pudica is a low-growing plant that responds to touch by closing its leaves.\n\n**Suggest** how this type of tropism might improve chances of survival for this plant.',
        marks: 3,
        ph: 'Touch causes leaves to close so cannot be eaten; gives wilted unappealing appearance; predators confused; improved chance of survival with more photosynthetic tissue...',
        figImages: ['/images/papers/biology-nov-2017/page-05.png'],
      },
      {
        label: 'd',
        text: 'In 1880, Charles Darwin and his son Francis Darwin carried out a famous experiment on plant tropism. Their experimental set-up is shown in the image.\n\n**Describe** what the results in the picture indicate about the response of plants to light.',
        marks: 3,
        ph: 'Stalk/plant bends toward light; only if the tip is exposed to light; light is perceived at the tip...',
        figImages: [
          '/images/papers/biology-nov-2017/page-06.png',
          '/images/papers/biology-nov-2017/page-07.png',
        ],
      },
      {
        label: 'e',
        text: 'Other researchers studied this behaviour further. The tips of two plants were separated from their bases with a thin sheet of mica. The mica on one plant was placed on the same side as the light source. The mica on the other plant was placed on the opposite side of the stem from the light source. Mica is a non-permeable material.\n\nBased on these results, the researchers concluded that the response was the result of the movement of a substance from the tip of the plant toward the base on the shaded side of the stalk.\n\nUse scientific knowledge and understanding to **justify** how these results support the conclusion.',
        marks: 4,
        ph: 'On shaded side, mica blocked substance from tip; plant did not bend; mica on lit side did not affect bending; so plant grew toward light...',
        figImages: ['/images/papers/biology-nov-2017/page-07.png'],
      },
    ],
  },

  // ── Q3: Cells & Selective Breeding (10 marks, Criterion A/D) ─────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Cell Organelles & Genetic Engineering',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    topicsAlso: ['Genetic Modification'],
    marks: 10,
    stem: 'The cell is the basic structural, functional and biological unit of all living organisms. Cells are the smallest units of life that can reproduce independently and are often called the building blocks of life.',
    figImages: ['/images/papers/biology-nov-2017/page-08.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct organelle for each of the following functions.',
        marks: 3,
        ph: 'Nucleus → DNA / control; Golgi apparatus → packaging proteins/lipids; Mitochondria → energy conversion.',
        widget: 'match_drag_drop',
        widgetItems: ['Cell membrane', 'Cytoplasm', 'Golgi apparatus', 'Mitochondria', 'Nucleus'],
        widgetOptions: [
          'The part of the cell containing DNA and responsible for control of growth and function',
          'Packaging of molecules like proteins, movement of lipids and the creation of lysosomes',
          'Conversion of energy in food molecules to energy',
        ],
      },
      {
        label: 'b',
        text: '**State** the function of a gene.',
        marks: 1,
        ph: 'A specific instruction for a specific trait/protein/characteristic...',
      },
      {
        label: 'c',
        text: 'Belgian Blue cattle are a good example of the application of selective breeding to produce an animal with desired traits.\n\n**Compare and contrast** genetic engineering and selective breeding as methods to produce plants and animals with desired traits.',
        marks: 4,
        ph: 'Similarity: both select for desired trait; both alter genetic code. Difference: GE introduces new trait vs SB uses existing; GE needs one generation vs SB needs many; GE is faster; GE is artificial, SB is natural...',
        figImages: ['/images/papers/biology-nov-2017/page-09.png'],
      },
      {
        label: 'd',
        text: '**Suggest** how selective breeding might weaken a species\' ability to survive.',
        marks: 2,
        ph: 'Reduction in gene pool/variation; trait desired by humans may negatively affect species; low variation reduces ability to survive changes in environment...',
      },
    ],
  },

  // ── Q4: Diffusion & Iodine Investigation (20 marks, Criterion A/B/C/D) ───────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Diffusion & Investigation Skills',
    topicCanonical: 'Diffusion',
    topicGroup: 'Metabolism',
    topicsAlso: ['Movement & Transport'],
    marks: 20,
    stem: 'Cells take in molecules from their surroundings to use for energy and as building blocks for other molecules. Cells also produce waste and must move waste products out of the cell. Diffusion is the movement of molecules across a semi-permeable membrane. The students researched methods for measuring this process and decided to design an investigation using dialysis tubing as a model cell. Dialysis tubing is a semi-permeable membrane used in separation techniques.\n\nThe students set up an investigation with three beakers of 1%, 5%, and 15% iodine solution and tubes filled with a 10% solution of starch. The iodine will turn dark blue when mixed with starch. The students used a reference tube to hold up to the beaker and they stopped timing when they thought the tube was the same colour as the reference tube.',
    figImages: [
      '/images/papers/biology-nov-2017/page-10.png',
      '/images/papers/biology-nov-2017/page-11.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the process that describes the movement of iodine molecules from a region of high concentration to a region of lower concentration.',
        marks: 1,
        ph: 'Select the correct process.',
        widget: 'radio_select',
        widgetOptions: ['Active transport', 'Diffusion', 'Osmosis', 'Transpiration'],
      },
      {
        label: 'b',
        text: 'The iodine solution used in this investigation is harmful. **Select** the correct hazard sign to label the iodine bottle.',
        marks: 1,
        ph: 'Select Sign C (harmful/exclamation).',
        widget: 'radio_select',
        widgetOptions: ['Sign A', 'Sign B', 'Sign C', 'Sign D'],
        figImages: ['/images/papers/biology-nov-2017/page-12.png'],
      },
      {
        label: 'c',
        text: '**Suggest** two precautions that the students should take before using iodine solution.',
        marks: 2,
        ph: 'Use gloves; use safety glasses...',
      },
      {
        label: 'd',
        text: '**State** the problem being tested by this experiment.',
        marks: 3,
        ph: 'Does the concentration of iodine solution affect the time taken for iodine to diffuse across a semi-permeable membrane?',
      },
      {
        label: 'e',
        text: '**Formulate** a testable prediction for this experiment.',
        marks: 1,
        ph: 'If concentration of iodine increases, then the rate of diffusion will increase...',
      },
      {
        label: 'f',
        text: '**Identify** the variables in this investigation. For each variable, **outline** how this variable is manipulated.',
        marks: 6,
        ph: 'IV: concentration of iodine solution (1%, 5%, 15%). DV: time for iodine to diffuse (turn tube dark blue). CV1: temperature (keep constant). CV2: volume of water / type of membrane / amount of starch...',
        figImages: ['/images/papers/biology-nov-2017/page-13.png'],
      },
      {
        label: 'g',
        text: '**State and justify** how many trials should be conducted for this experiment in order to collect sufficient data.',
        marks: 2,
        ph: 'At least three trials; average can be calculated / anomalous data identified for statistical analysis...',
      },
      {
        label: 'h',
        text: '**Design** a table to collect sufficient data for this investigation.',
        marks: 3,
        ph: 'Table with at least 3 rows (for concentrations), at least 3 trial columns, labels including units...',
        figImages: ['/images/papers/biology-nov-2017/page-14.png'],
      },
      {
        label: 'i',
        text: '**Suggest** one weakness in the method.',
        marks: 1,
        ph: 'Determining when bag was completely changed could be subjective; concentrations not changed in equal increments...',
      },
    ],
  },

  // ── Q5: Osmosis & Temperature Investigation (21 marks, Criterion B/C) ─────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Osmosis Data Analysis — Temperature',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    marks: 21,
    stem: 'Osmosis is the movement of water molecules across a semi-permeable membrane from a region of low concentration of dissolved substances to a region of high concentration of dissolved substances. The movement of water molecules will cease until the concentration of dissolved substances on both sides of the membrane are equal. The students wanted to investigate whether the rate of osmosis was related to temperature. The students decided to use dialysis tubing as a model cell. Dialysis tubing is a semi-permeable membrane used in separation techniques.\n\nThe students planned to use dialysis tubing, beakers, a balance, a measuring cylinder and a timer. They planned to use 10 cm³ of starch solution in each tubing and to measure the mass change after 10 minutes. The start of the experiment is shown below.',
    figImages: [
      '/images/papers/biology-nov-2017/page-15.png',
      '/images/papers/biology-nov-2017/page-16.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**State** the problem being studied in this investigation.',
        marks: 1,
        ph: 'Whether temperature affects the rate of movement of water molecules across a membrane...',
      },
      {
        label: 'b',
        text: '**Outline** how the rate of osmosis is determined and **formulate** the unit for the rate of osmosis.',
        marks: 3,
        ph: 'Change in mass over a fixed time period used to determine rate; unit = g min⁻¹ or g s⁻¹...',
      },
      {
        label: 'c',
        text: 'Complete the table below by **calculating** the missing value.\n\n(Negligible: very small and not important)\n\n| Temperature / °C | Avg initial mass / g | Avg final mass / g | Increase in mass after 10 min / g | Rate of osmosis / unit formulated in (b) |\n|---|---|---|---|---|\n| 5 | 10.90 | 10.91 | 0.01 | Negligible |\n| 10 | 11.06 | 11.76 | 0.70 | 0.07 |\n| 15 | 11.10 | 12.11 | 1.01 | **?** |\n| 20 | 11.41 | 12.58 | 1.17 | 0.12 |\n| 35 | 12.33 | 13.73 | 1.40 | 0.14 |',
        marks: 2,
        ph: 'Rate at 15°C = 0.10(1) g min⁻¹; accept 0.10 with correct significant figures...',
      },
      {
        label: 'd',
        text: '**Present** the data from the table in a graph.',
        marks: 4,
        ph: 'y-axis: rate of osmosis (unit from b), evenly spaced increments, all points plotted correctly, ignore point (5,0)...',
        figImages: ['/images/papers/biology-nov-2017/page-16.png'],
      },
      {
        label: 'e',
        text: 'After conducting their own investigation, the students researched other investigations to see if they matched similar conclusions. The students found a similar graph from a local university — that graph is shown below.\n\nScroll back to your graph in part (d) and **compare and contrast** the trend in the students\' data in part (d) with the graph of the university data.',
        marks: 4,
        ph: 'Both show similar trend until 35°C; both increase at similar rate; university shows plateau above 35°C; student data has no measurements above 35°C...',
        figImages: ['/images/papers/biology-nov-2017/page-18.png'],
      },
      {
        label: 'f',
        text: '**Explain** one scientific reason for the trend shown in the university data.',
        marks: 4,
        ph: 'As temperature increases kinetic energy increases; particles move more quickly; rate of movement across membrane increases; above 35°C equilibrium reached so rate becomes constant; OR term kinetic energy / equilibrium / osmotic pressure used correctly...',
      },
      {
        label: 'g',
        text: '**State** whether the students\' method is valid based on comparison of their data with the university data. **Justify** your answer.',
        marks: 1,
        ph: 'Valid because trends match (below 35°C) OR data / results were similar; not valid because no measurements above 35°C...',
      },
      {
        label: 'h',
        text: '**Suggest** one extension **and** one improvement to this investigation.',
        marks: 2,
        ph: 'Extension: increase temperature range / investigate different solute. Improvement: fill in missing increments / increase duration of each trial...',
        figImages: ['/images/papers/biology-nov-2017/page-19.png'],
      },
    ],
  },

  // ── Q6: Investigation Design — Temperature & Osmosis in Potato Cells (17 marks, B) ─
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Osmosis & Potatoes',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Cell Structure & Function'],
    marks: 17,
    stem: 'The students then decided to study how molecules moved in and out of real cells. They decided to use potatoes to show how temperature is related to the movement of water in potato cells.',
    figImages: ['/images/papers/biology-nov-2017/page-19.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the equipment needed for this investigation. Click the "Palette Image Library" button to display the equipment available.',
        marks: 2,
        ph: 'Balance/ruler, potato, beaker, thermometer, flask of distilled water, knife, ice, kettle, paper towels, goggles — any three correct...',
      },
      {
        label: 'b',
        text: '**Design** an investigation to study how temperature is related to osmosis in potato cells. In your investigation, you should include:\n\n- an identification of the independent, dependent and control variables\n- a hypothesis that your method will test\n- how you will manipulate the variables\n- a description of your method\n- how you will ensure your method is safe',
        marks: 15,
        ph: 'IV: temperature (e.g. 5,10,15,20,35°C). DV: change in mass of potato. CV: volume of solution, size of potato piece, type of solution, time. Hypothesis: as temperature increases, rate of osmosis increases (until equilibrium). Method: cut equal potato pieces, place in solutions at different temperatures, measure mass before and after 10 min, 3 repeats. Safety: handle knife carefully, goggles for hot water...',
        figImages: ['/images/papers/biology-nov-2017/page-20.png'],
      },
    ],
  },

  // ── Q7: Balanced Diet & Nutrients (4 marks, Criterion A/C) ───────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Balanced Diet & Macronutrients',
    topicCanonical: 'Nutrition',
    topicGroup: 'Metabolism',
    topicsAlso: ['Digestion'],
    marks: 4,
    stem: 'Living organisms need a balanced diet to remain healthy. A balanced diet should include the following nutrients: fat, carbohydrate, protein, minerals and vitamins.',
    figImages: [
      '/images/papers/biology-nov-2017/page-20.png',
      '/images/papers/biology-nov-2017/page-21.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Select** the appropriate function for each nutrient.',
        marks: 3,
        ph: 'Carbohydrate→quick energy; Fat→long-term storage & insulation; Minerals & vitamins→support metabolism; Protein→body structures & cell functions.',
        widget: 'match_drag_drop',
        widgetItems: ['Carbohydrate', 'Fat', 'Minerals and vitamins', 'Protein'],
        widgetOptions: [
          'Quick energy release',
          'Long term energy storage and insulation',
          'Supports metabolism',
          'Body structures and cell functions',
        ],
      },
      {
        label: 'b',
        text: 'Diets are varied across the globe but all balanced diets need to contain a certain percentage of protein. The recommended mass of protein needed each day for an average sized adult is 51 g.\n\nUse the information in the graph to **identify** the food with the highest percentage of protein.',
        marks: 1,
        ph: 'Goat (meat)...',
        figImages: ['/images/papers/biology-nov-2017/page-21.png'],
      },
    ],
  },

  // ── Q8: In Vitro Meat Production (16 marks, Criterion D) ─────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'In Vitro Meat & Intensive Farming — Evaluate',
    topicCanonical: 'Cloning',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Ethical Implications'],
    marks: 16,
    stem: 'The video shows how scientific innovation is being used to produce foods with high percentages of protein. Scientists are combining fat cells and muscle cells, and from one muscle cell many millions of cells can be grown. The new muscle fibres are then minced and turned into burgers.',
    figImages: [
      '/images/papers/biology-nov-2017/page-22.png',
      '/images/papers/biology-nov-2017/page-23.png',
    ],
    tasks: [
      {
        label: '',
        text: '**Discuss and evaluate** the implications of using in vitro meat production to address unsustainable intensive meat farming. In your answer, you should consider:\n\n- the impacts of intensive meat farming\n- the strengths and limitations of in vitro meat production\n- the environmental considerations of both intensive farming and in vitro production\n- the ethical issues involved in both intensive farming and in vitro production\n- a concluding appraisal.',
        marks: 16,
        ph: 'Impacts: deforestation, methane, water use. Strengths: no animal suffering, less land; Limitations: expensive, unnatural. Environmental: intensive uses land/water, in vitro uses less land but energy. Ethical: intensive farming welfare, in vitro artificial. Appraisal: in vitro could reduce suffering but cost and acceptability are barriers...',
      },
    ],
  },

  // ── Q9: 3D Bioprinting for Transplants (9 marks, Criterion D) ────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: '3D Bioprinting — Scientific Implications',
    topicCanonical: '3D Tissue & Organ Printing',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Ethical Implications'],
    marks: 9,
    stem: '3D printing has been suggested as a new source of body tissue for people with medical conditions requiring a transplant. Currently people requiring replacement body tissue must rely on transplanted material from a matching donor.',
    figImages: [
      '/images/papers/biology-nov-2017/page-23.png',
      '/images/papers/biology-nov-2017/page-24.png',
    ],
    tasks: [
      {
        label: '',
        text: '**Discuss and evaluate** the scientific implications of replacing traditional transplantation techniques with 3D bio-printing. In your answer, you should include:\n\n- the advantages of 3D printing for transplant patients\n- the disadvantages of 3D printing for transplant patients\n- a concluding appraisal.',
        marks: 9,
        ph: 'Advantages: no need for matching donor, less rejection risk, on-demand production. Disadvantages: expensive, limited types of tissue, not fully tested. Appraisal: promising technology but not yet ready for widespread use...',
      },
    ],
  },
]
