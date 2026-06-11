export type Widget =
  | 'radio_select'
  | 'inline_dropdown_select'
  | 'variable_classify'
  | 'match_drag_drop'
  | 'fill_blank'

export interface Task {
  label: string
  text: string
  marks: number
  ph: string
  widget?: Widget
  widgetOptions?: string[]
  widgetItems?: string[]
  figImages?: string[]
}

export interface Question {
  id: number
  crit: 'A' | 'B' | 'C' | 'D'
  type: 'extended'
  topic: string
  topicCanonical?: import('@/data/taxonomy/topics').Topic
  topicGroup?: import('@/data/taxonomy/topics').TopicGroup
  marks: number
  stem: string
  figImages?: string[]
  tasks: Task[]
}

export interface PaperMeta {
  id: string
  subject: string
  session: string
  year: number
  totalMarks: number
  durationMinutes: number
  criteria: string[]
}

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2023',
  subject: 'Chemistry',
  session: 'November',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Cola / CO₂ / equilibrium (10m, Crit A) ──────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Chemical Equilibrium & Bonding',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 10,
    stem: 'Carbon dioxide (CO₂) is dissolved in cola drinks under pressure to make them fizzy. When the can is opened, the pressure is released and the CO₂ comes out of solution.',
    figImages: ['chemistry-nov-2023/page-02.png', 'chemistry-nov-2023/page-03.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** the number of oxygen atoms in one molecule of carbon dioxide.',
        marks: 1,
        ph: '2 oxygen atoms',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**State** the chemical formula of carbon dioxide.',
        marks: 1,
        ph: 'CO₂',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Draw** a dot-and-cross diagram to show the bonding in a molecule of CO₂.',
        marks: 3,
        ph: 'Carbon in centre, two double bonds to O atoms, lone pairs on each O',
      },
      {
        label: 'd',
        text: '**Select** the symbols below to form an equation showing the equilibrium between dissolved carbon dioxide and the carbon dioxide gas in the space above the drink: ___ ⇌ ___',
        marks: 2,
        ph: 'CO₂(aq) ⇌ CO₂(g)',
        widget: 'fill_blank',
      },
      {
        label: 'e',
        text: '**Explain** what will happen to the concentration of dissolved carbon dioxide in the drink after a cold can of cola is taken outside on a warm day for 10 minutes.',
        marks: 3,
        ph: 'Less fizzy; equilibrium shifts; CO₂ solubility decreases with temperature',
      },
    ],
  },

  // ─── Q2: Phosphoric acid / sucrose / xylitol / aspartame (9m, Crit A) ────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Organic Chemistry & Moles',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 9,
    stem: 'Phosphoric acid (H₃PO₄) is added to cola to make it sour and to balance the sweet taste of sucrose. In some varieties of cola, sugar is replaced with artificial sweeteners such as xylitol and aspartame.',
    figImages: ['chemistry-nov-2023/page-03.png', 'chemistry-nov-2023/page-04.png', 'chemistry-nov-2023/page-05.png', 'chemistry-nov-2023/page-06.png'],
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the molar mass of phosphoric acid, H₃PO₄. Give the unit.',
        marks: 2,
        ph: 'Mr = 98 g mol⁻¹',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'In a can of cola there is 39 g of sucrose. The molar mass of sucrose is 342.3 g mol⁻¹. **Calculate** the number of moles of sucrose in one can of cola. Give your answer to 3 significant figures.',
        marks: 2,
        ph: 'n = 39/342.3 = 0.114 mol',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Determine** the molecular formula of xylitol from the 3D molecular model shown.',
        marks: 3,
        ph: 'C₅H₁₂O₅',
        figImages: ['chemistry-nov-2023/page-04.png', 'chemistry-nov-2023/page-05.png'],
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: '**Select** the name of the highlighted functional group in each structure of aspartame.',
        marks: 2,
        ph: 'Carboxylic acid (COOH), Ester (COO)',
        figImages: ['chemistry-nov-2023/page-05.png', 'chemistry-nov-2023/page-06.png'],
        widget: 'inline_dropdown_select',
        widgetItems: ['First highlighted group', 'Second highlighted group'],
        widgetOptions: ['Alcohol', 'Alkene', 'Carboxylic acid', 'Ester'],
      },
    ],
  },

  // ─── Q3: Aluminium cans (5m, Crit A) ─────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Materials Science',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 5,
    stem: 'For many years, food and drink have been stored in cans to make them easy to transport and store. Most cans were made from tin-plated steel. More recently, aluminium has been used to make cans.',
    figImages: ['chemistry-nov-2023/page-06.png', 'chemistry-nov-2023/page-07.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** the electron configuration of aluminium.',
        marks: 1,
        ph: '2.8.3',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Using the information in the table and your wider MYP studies, explain** two advantages of aluminium cans compared to tin-plated steel cans.',
        marks: 4,
        ph: 'Less reactive (less likely to react with food); lighter (cheaper to transport); recyclable',
      },
    ],
  },

  // ─── Q4: Sugar solubility / candy floss (15m, Crit C) ───────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'States of Matter & Data Processing',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 15,
    stem: 'In cooking, and in particular the manufacture of sweets, the mass of sugar in the stirring mixture will determine what type of sweets can be produced. A student decided to investigate the maximum mass of sugar that can be dissolved in 100 cm³ of water at different temperatures. The student\'s raw data is shown.',
    figImages: ['chemistry-nov-2023/page-08.png', 'chemistry-nov-2023/page-09.png'],
    tasks: [
      {
        label: 'a',
        text: '**Present** the student\'s raw data collected during the experiment in a table.',
        marks: 3,
        ph: 'Two labelled columns with units; data in ascending temperature order',
        figImages: ['chemistry-nov-2023/page-08.png'],
      },
      {
        label: 'b',
        text: '**Present** the data in part (a) in a graph.',
        marks: 5,
        ph: 'Scatter graph; x=Temperature/°C; y=Mass of sugar/g; suitable scale; all points; line of best fit',
        figImages: ['chemistry-nov-2023/page-09.png'],
      },
      {
        label: 'c',
        text: '**Select** the graph that shows the most appropriate line of best fit for the second student\'s data.',
        marks: 1,
        ph: 'Graph C — best straight line through majority of points',
        figImages: ['chemistry-nov-2023/page-10.png'],
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'd',
        text: '**Identify** the data point that is an outlier in part (c). **Suggest** what the expected mass of sugar would be.',
        marks: 2,
        ph: 'Outlier at 60°C; expected mass ≈ 290 g',
        figImages: ['chemistry-nov-2023/page-10.png', 'chemistry-nov-2023/page-11.png'],
      },
      {
        label: 'e',
        text: 'Candy floss is made from pure sugar. The machine melts sugar at 160°C, spins it through holes to form fine threads, and the threads solidify in the collection bowl. **Select** the state and expected behaviour of sugar in each location when the candy floss machine is operating.',
        marks: 4,
        ph: 'Spinning container = liquid (takes shape of container); Collection bowl = solid (no change of shape)',
        figImages: ['chemistry-nov-2023/page-11.png', 'chemistry-nov-2023/page-12.png', 'chemistry-nov-2023/page-13.png'],
        widget: 'inline_dropdown_select',
        widgetItems: [
          'Sugar in spinning container — State',
          'Sugar in collection bowl — State',
          'Sugar in spinning container — Behaviour',
          'Sugar in collection bowl — Behaviour',
        ],
        widgetOptions: [
          'Evaporates',
          'Gas',
          'Liquid',
          'No change of shape when changing container',
          'Solid',
          'Sublimes',
          'Takes the shape of the container',
        ],
      },
    ],
  },

  // ─── Q5: Eggs / Maillard reaction investigation (12m, Crit B) ────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Chemical Reactions & Scientific Inquiry',
    topicCanonical: 'Chemical Equations & Reactions',
    topicGroup: 'Chemical Reactions',
    marks: 12,
    stem: 'Chemical changes take place when food is cooked. When eggs are cooked there is a change in colour, state or even gas produced, all of which are indicators that a chemical change has taken place. The Maillard reaction between sugars and proteins causes browning in foods such as bread and toast.',
    figImages: ['chemistry-nov-2023/page-14.png', 'chemistry-nov-2023/page-15.png', 'chemistry-nov-2023/page-16.png', 'chemistry-nov-2023/page-17.png'],
    tasks: [
      {
        label: 'a',
        text: '**Identify** the variables in the student\'s investigation:\n\nIndependent variable: ___\nDependent variable: ___\nControl variable 1: ___\nControl variable 2: ___',
        marks: 4,
        ph: 'IV=time/duration; DV=how cooked/colour; CV=size of egg; CV=temperature of water',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Suggest** a suitable hypothesis for the investigation in part (a). If... Then... Because...',
        marks: 3,
        ph: 'If time increases, then egg is more cooked/white/solid, because more chemical change',
      },
      {
        label: 'c',
        text: '**Outline** why bread turns brown when toast is made.',
        marks: 3,
        ph: 'Sugar and protein react with heat; Maillard reaction causes brown colour',
        figImages: ['chemistry-nov-2023/page-17.png'],
      },
      {
        label: 'd',
        text: 'A student lowered the temperature of the toaster and heated a piece of bread for the same time. **Predict** how the appearance would be different to the original toast shown. **Justify** your answer.',
        marks: 2,
        ph: 'Less brown; lower temperature → slower/fewer Maillard reactions',
        figImages: ['chemistry-nov-2023/page-17.png'],
      },
    ],
  },

  // ─── Q6: Lemon juice / MR-P / Crit B design (25m, Crit B) ───────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Acids & Scientific Investigation Design',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 25,
    stem: 'Protein is an important part of the human diet. Another method of causing chemical change in food is to use acids from fruit juice. Ceviche uses lemon juice and lime juice to "cook" fish. A company has developed a new laboratory-based meat substitute called MR-P that is cooked using lime juice and lemon juice. After 25 minutes, the product is ready to eat. A student investigated the best juice to cook MR-P by measuring the force needed to break samples cooked in different juices.',
    figImages: ['chemistry-nov-2023/page-18.png', 'chemistry-nov-2023/page-19.png', 'chemistry-nov-2023/page-20.png'],
    tasks: [
      {
        label: 'a',
        text: '**Use** data from the diagrams above to state whether the student\'s hypothesis is correct. **Justify** your answer.',
        marks: 2,
        ph: 'Hypothesis NOT supported; force to break cooked meat is HIGHER than uncooked',
      },
      {
        label: 'b',
        text: '**State** which samples of MR-P would be suitable to eat (breaking force threshold = 280 N). **Justify** your answer using data.',
        marks: 2,
        ph: 'Lime and lemon; lemon and lime — breaking forces > 280 N',
      },
      {
        label: 'c',
        text: '**State** why sample 1 was measured using only juice (no MR-P).',
        marks: 1,
        ph: 'As a control / baseline / for direct comparison',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: '**Outline** an improvement to the method in part (b).',
        marks: 2,
        ph: 'Repeat the experiment; calculate an average to reduce random error',
      },
      {
        label: 'e',
        text: 'The student wanted to know the minimum pH that would cook MR-P, between pH 2.0 and 3.8. They decided to use HCl to model the behaviour of fruit juice. **Suggest** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'What is the effect of pH on (breaking force of MR-P)?',
        figImages: ['chemistry-nov-2023/page-21.png'],
      },
      {
        label: 'f',
        text: '**Design** a method to identify the pH that would cook MR-P. In your answer you should include:\n• the independent, dependent and two control variables\n• a list of equipment you will use\n• details of the method you will use\n• how many measurements you will take to collect sufficient data\n• safety considerations.',
        marks: 17,
        ph: 'IV=pH; DV=breaking force; CVs=size of sample+time; equipment list; ≥5 pH levels; ≥3 trials; acid safety',
        figImages: ['chemistry-nov-2023/page-21.png', 'chemistry-nov-2023/page-22.png'],
      },
    ],
  },

  // ─── Q7: Carbon footprint / plant-based burgers (9m, Crit D) ────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental Chemistry & Societal Impact',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 9,
    stem: 'Many people around the world are choosing to reduce the amount of meat they eat. The graphs show data comparing food production of different diets. Due to increasing demand for meat substitutes, a growing industry provides plant-based products such as beef burgers and chicken nuggets. The table below shows nutritional information for a plant-based burger designed to taste like meat.',
    figImages: ['chemistry-nov-2023/page-22.png', 'chemistry-nov-2023/page-23.png', 'chemistry-nov-2023/page-24.png', 'chemistry-nov-2023/page-25.png'],
    tasks: [
      {
        label: 'a',
        text: '**Using** the graphs above, calculate the carbon footprint from the production of protein in the average US diet.',
        marks: 2,
        ph: '2000 − 950 = 1050 kg CO₂ eq (accept 1050–1100)',
        figImages: ['chemistry-nov-2023/page-23.png', 'chemistry-nov-2023/page-24.png'],
      },
      {
        label: 'b',
        text: '**Using** the graphs in part (a) and the data in the table above, **discuss and evaluate** the advantages and disadvantages of plant-based burgers compared to beef burgers. In your answer you should include:\n• the advantages of the production of plant-based protein compared to meat-based protein\n• a comparison of the nutritional data\n• your opinion of why people may choose plant-based burgers rather than beef burgers.',
        marks: 7,
        ph: 'AD: lower carbon/water/land; Nutritional data: similar energy/protein, less fat; opinion justified',
        figImages: ['chemistry-nov-2023/page-24.png', 'chemistry-nov-2023/page-25.png'],
      },
    ],
  },

  // ─── Q8: Lab-grown meat (15m, Crit D) ───────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science, Technology & Society',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 15,
    stem: 'In the effort to reduce the environmental impact of the meat industry and to meet the demands of a growing global population, companies have developed a process to grow meat in a lab using a small sample of animal cells. The lab-grown cells combine to form muscle tissue. During the growth process, the cells could be harvested from a live animal and then checked for animal borne disease. From one tissue sample, 80,000 burgers can be grown compared to 1,250 from one cow. The cost of a lab-grown burger has reduced significantly to $10 per burger in 2020. In the future, it is anticipated that more people will choose lab-grown burgers and they will become widely available.',
    figImages: ['chemistry-nov-2023/page-26.png', 'chemistry-nov-2023/page-27.png', 'chemistry-nov-2023/page-28.png'],
    tasks: [
      {
        label: '',
        text: '**Using** the information in the video, **discuss and evaluate** the use of lab-grown meat from environmental, ethical, social and economic perspectives. In your answer include an assessment of the potential impact on health.',
        marks: 15,
        ph: 'Environmental: less land/water/emissions; Ethical: animal cells but no slaughter; Socio-economic: cheaper/accessible; Health: tested for disease; justified conclusion',
      },
    ],
  },
]
