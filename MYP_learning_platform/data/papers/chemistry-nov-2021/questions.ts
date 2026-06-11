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
  id: 'chemistry-nov-2021',
  subject: 'Chemistry',
  session: 'November',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1 (7 marks, Crit A) ─── Ancient toothpaste / calcium carbonate / Na & F ───
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table — toothpaste ingredients',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 7,
    stem: 'The ingredients of ancient toothpastes changed over time and were very different to modern varieties. Ingredients used by Ancient Egyptians included a powder of cow hoof ashes and burnt eggshells, which was combined with pumice, a type of crumbly rock. The Greeks and Romans preferred more abrasive substances and their toothpaste ingredients included crushed bones and oyster shells. In Asia a wide variety of substances such as ginseng and salt were found in toothpaste.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the formula of calcium carbonate.',
        marks: 1,
        ph: 'Select one formula',
        widget: 'radio_select',
        widgetOptions: ['CaO', 'CaCO₃', 'Ca(OH)₂', 'CaSO₄'],
      },
      {
        label: 'b',
        text: 'Modern toothpaste can contain sodium fluoride. Use the periodic table to **state** the group and period of sodium. Group: ___ Period: ___',
        marks: 2,
        ph: 'Group 1, Period 3',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**State** the electron configuration of fluorine.',
        marks: 1,
        ph: '2.7 or 1s² 2s² 2p⁵',
      },
      {
        label: 'd',
        text: 'The diagram below shows the Bohr model of a sodium atom and a lithium atom. Using the Bohr model, **explain** why sodium is more reactive than lithium.',
        marks: 3,
        ph: 'More electron shells → outer e⁻ further from nucleus → less attraction → easier to remove',
        figImages: ['papers/chemistry-nov-2021/page-02.png'],
      },
    ],
  },

  // ─── Q2 (9 marks, Crit A) ─── Teeth whitening / hydrogen peroxide ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Bonding and chemical equations — hydrogen peroxide',
    topicCanonical: 'Chemical Equations & Reactions',
    topicGroup: 'Chemical Reactions',
    marks: 9,
    stem: 'Personal hygiene products have changed as a result of developments over time. Recently, people have been using more teeth whitening products. Many of these teeth whitening products contain hydrogen peroxide as the active ingredient.',
    figImages: ['papers/chemistry-nov-2021/page-03.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of bonds in hydrogen peroxide (H₂O₂).',
        marks: 1,
        ph: 'Covalent',
        widget: 'radio_select',
        widgetOptions: ['Ionic', 'Covalent', 'Metallic', 'Coordinate'],
      },
      {
        label: 'b',
        text: '**Select** the Lewis structure (dot cross diagram) of hydrogen peroxide.',
        marks: 1,
        ph: 'Option C — H bonded to O, lone pairs on each O, single O–O bond',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['papers/chemistry-nov-2021/page-03.png'],
      },
      {
        label: 'c',
        text: 'Hydrogen peroxide is unstable and decomposes slowly. As it decomposes, the teeth whitening process is less effective. When hydrogen peroxide decomposes, it forms water and oxygen. **Write down** the balanced equation for the decomposition of hydrogen peroxide. You should include state symbols in your answer.',
        marks: 3,
        ph: '2H₂O₂(aq) → 2H₂O(l) + O₂(g)',
      },
      {
        label: 'd',
        text: '**Select** the hazard symbol for hydrogen peroxide.',
        marks: 1,
        ph: 'Option D — oxidising (flame over circle)',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['papers/chemistry-nov-2021/page-04.png'],
      },
      {
        label: 'e',
        text: 'Different teeth whitening products vary in hydrogen peroxide concentration. Using information from the video and your knowledge of collision theory, **explain** how concentration affects the rate at which the teeth are whitened.',
        marks: 3,
        ph: 'Higher concentration → more H₂O₂ particles → more successful collisions → faster rate',
      },
    ],
  },

  // ─── Q3 (12 marks, Crit A/C) ─── Deodorants / atmosphere / diffusion ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Atmosphere and particle theory — deodorants',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 12,
    stem: 'Deodorants are used daily throughout the world and many types of these release gases into the air.',
    tasks: [
      {
        label: 'a',
        text: 'Use the diagram below to **state** the two most common gases in the atmosphere and their percentage. Gas 1: ___ Percentage: ___% Gas 2: ___ Percentage: ___%',
        marks: 2,
        ph: 'Nitrogen 78%, Oxygen 20.9%',
        widget: 'fill_blank',
        figImages: ['papers/chemistry-nov-2021/page-05.png'],
      },
      {
        label: 'b',
        text: 'Most of the gases in the atmosphere are diatomic or polyatomic. Noble gases, however, are monatomic. **Select** the correct location for the draggable items to classify each molecule as Monatomic gas, Diatomic gas, or Polyatomic gas.',
        marks: 3,
        ph: 'Helium→Monatomic; Carbon dioxide→Polyatomic; Oxygen→Diatomic',
        widget: 'match_drag_drop',
        widgetItems: ['Helium', 'Carbon dioxide', 'Oxygen'],
        widgetOptions: ['Monatomic gas', 'Polyatomic gas', 'Diatomic gas'],
      },
      {
        label: 'c',
        text: '**State** a reason why noble gases are found naturally as a monatomic gas.',
        marks: 1,
        ph: 'Unreactive — full outer electron shell; do not bond with other atoms',
      },
      {
        label: 'd',
        text: 'Aerosol sprays, like deodorants, are filled with a compressed gas that mixes with the deodorant liquid and sprays the liquid out of the can onto your skin. In the past, the compressed gases used in aerosols were chlorofluorocarbons (CFCs), like Freon® (chemical name trichlorotrifluoroethane). Here is the structure of Freon®. Use the periodic table to **calculate** the relative molecular mass of Freon®.',
        marks: 2,
        ph: '2(12) + 3(35.5) + 3(19) = 187.5',
        figImages: ['papers/chemistry-nov-2021/page-07.png'],
      },
      {
        label: 'e',
        text: 'Deodorant sprays diffuse in the air, so that after some time the scent spreads further and will even fill small rooms. Using particle theory, **explain** why it takes longer for the scent to fill a room at 4°C compared to a room at 20°C.',
        marks: 3,
        ph: 'Higher temperature → particles have more kinetic energy → move faster → diffuse more quickly',
      },
      {
        label: 'f',
        text: 'CFCs cause gradual thinning of the ozone layer of the atmosphere and therefore contribute to climate change. Today, industries have replaced CFCs with other gases such as propane C₃H₈. **Draw** the structure of propane.',
        marks: 1,
        ph: '3 carbon chain, each C fully bonded to H atoms (C₃H₈ full structural formula)',
      },
    ],
  },

  // ─── Q4 (12 marks, Crit B/C) ─── Gallium melting point / brass alloys ───
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Melting points and alloys — gallium and brass',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 12,
    stem: 'State of matter is a physical characteristic which allows materials to be classified and grouped together. Melting point is a useful property which is an important characteristic of materials. Two students wanted to check the melting point of the metal gallium. One student used a thermometer and the other used a temperature probe. The samples of gallium are placed in boiling tubes which are placed in water baths as shown in the diagram below. As the temperature of the water increased, the students observed the change in state of the gallium.',
    figImages: ['papers/chemistry-nov-2021/page-08.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** the temperature shown on the thermometer for Student A.',
        marks: 1,
        ph: '28.1°C',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'Student B used a temperature probe and plotted a graph. **Determine** the melting point of gallium from Student B\'s graph.',
        marks: 1,
        ph: '29.7°C',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**State** which student has measured the melting point correctly and justify your answer.',
        marks: 2,
        ph: 'Student B — measured temperature when all gallium had melted and temperature was steady',
      },
      {
        label: 'd',
        text: 'The table shows the melting points of different brass alloys with varying percentages of zinc. **State** the trend in melting point as the percentage of zinc increases.',
        marks: 1,
        ph: 'Melting point decreases as percentage of zinc increases',
      },
      {
        label: 'e',
        text: 'Using the data from the table, **formulate** a hypothesis to predict how the density of a brass alloy changes as the percentage of zinc increases. Use the If/Then/Because format.',
        marks: 3,
        ph: 'If zinc % increases then density decreases because zinc has lower density than copper',
        figImages: ['papers/chemistry-nov-2021/page-09.png'],
      },
      {
        label: 'f',
        text: 'Using the graph, **predict** the melting point of a brass alloy made of 80% copper and 20% zinc.',
        marks: 2,
        ph: '1000°C (±10)',
        widget: 'fill_blank',
        figImages: ['papers/chemistry-nov-2021/page-10.png'],
      },
      {
        label: 'g',
        text: '**Select** the type of brass most suitable for use in a space where temperatures can exceed 1050°C and justify your choice.',
        marks: 2,
        ph: 'Type A — melting point 1066°C which is above 1050°C so it will not melt',
      },
    ],
  },

  // ─── Q5 (7 marks, Crit A/B) ─── Freezing point depression / soda ───
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Freezing point depression — carbonated drinks investigation',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 7,
    stem: 'A student placed salt water, sugar water, carbonated water, tap water and pure water into a freezer to investigate their freezing points.',
    tasks: [
      {
        label: 'a',
        text: '**State** the gas that is added to drinks to make them carbonated.',
        marks: 1,
        ph: 'Carbon dioxide (CO₂)',
      },
      {
        label: 'b',
        text: '**State** the variables in the student\'s experiment. Independent variable: ___ Dependent variable: ___',
        marks: 2,
        ph: 'IV: type of solute; DV: freezing point / freezing temperature',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Suggest** two control variables for this experiment.',
        marks: 2,
        ph: 'Any two: volume/size of ice cube; amount/concentration of solute; temperature of freezer; starting temperature',
      },
      {
        label: 'd',
        text: '**Formulate** a research question for this experiment.',
        marks: 2,
        ph: 'How does the type of solute affect the freezing point/temperature of the solution?',
      },
    ],
  },

  // ─── Q6 (14 marks, Crit C) ─── Chocolate tempering / Form V data analysis ───
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data analysis — chocolate tempering and Form V',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 14,
    stem: 'Chocolate is a mixture of cocoa, cocoa butter and other substances. The process of melting and cooling chocolate at specific temperatures, called tempering, allows the chocolate to form crystals. There are different forms of crystals possible, with Form V producing the best tasting chocolate. The table shows the melting points of chocolate samples with different percentages of cocoa for three different forms.',
    figImages: ['papers/chemistry-nov-2021/page-16.png'],
    tasks: [
      {
        label: 'a',
        text: '**Plot** the data for Sample B on the graph provided. Your graph should include: missing data points, a title linking temperature change with time, and correct axis labels (time in s, temperature in °C).',
        marks: 5,
        ph: 'Plot all Sample B data points; title: Temperature of chocolate sample B vs time; x-axis: time (s); y-axis: temperature (°C)',
        figImages: ['papers/chemistry-nov-2021/page-17.png'],
      },
      {
        label: 'b',
        text: '**Determine** which sample is Form V chocolate and justify your answer using the graph.',
        marks: 2,
        ph: 'Sample B — graph shows steady plateau at 35°C which is the melting/solidification temperature of Form V',
      },
      {
        label: 'c',
        text: '**Calculate** the average melting point of the three samples with 60% cocoa.',
        marks: 3,
        ph: '(37.0 + 36.0 + 37.0) / 3 = 36.7°C',
        widget: 'fill_blank',
        figImages: ['papers/chemistry-nov-2021/page-18.png'],
      },
      {
        label: 'd',
        text: '**Determine** the melting point at 50% cocoa from the graph.',
        marks: 2,
        ph: '43°C (±0.5)',
        widget: 'fill_blank',
        figImages: ['papers/chemistry-nov-2021/page-18.png'],
      },
      {
        label: 'e',
        text: '**Suggest** why the data point for 37% cocoa chocolate might be an outlier.',
        marks: 1,
        ph: 'Melting point not measured correctly; incorrect % cocoa used; water bath at wrong temperature',
      },
      {
        label: 'f',
        text: '**Suggest** how the experiment could be improved to better understand the trend.',
        marks: 1,
        ph: 'Investigate samples with intermediate percentages between 30% and 60% cocoa',
      },
    ],
  },

  // ─── Q7 (15 marks, Crit B) ─── Chocolate sugar investigation design ───
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation design — effect of sugar on chocolate melting point',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 15,
    stem: 'A student wants to investigate how the amount of sugar in chocolate affects its melting point. **Design** a complete investigation to test this. Your design should include: variables (independent, dependent, control), equipment, a clear method, sufficient data collection, and a safety precaution.',
    tasks: [
      {
        label: '',
        text: '**Design** a full investigation into how the amount of sugar in chocolate affects its melting point. Include: (1) identification of independent and dependent variables and at least two control variables; (2) equipment needed; (3) a clear step-by-step method; (4) a plan for sufficient data; (5) a safety precaution linked to a specific hazard.',
        marks: 15,
        ph: 'IV: % sugar in chocolate; DV: melting point (°C); CVs: cocoa %, mass of chocolate, water bath setup; Method: boiling tube in water bath, temperature probe, heat until all chocolate melts; Sufficient data: ≥3 trials for each chocolate, plan to calculate averages; Safety: hot water burns — use tongs',
      },
    ],
  },

  // ─── Q8 (12 marks, Crit D/A/C) ─── Lithium batteries / electric cars ───
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Lithium batteries — environmental evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 12,
    stem: 'Lithium-ion batteries are used to power electric cars. Lithium is extracted by mining. The relative atomic mass of lithium is 6.94.',
    tasks: [
      {
        label: 'a',
        text: '**Write** the symbol for a lithium ion.',
        marks: 1,
        ph: 'Li⁺',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'A lithium-ion car battery has a mass of 12 kg and is made entirely of lithium. **Calculate** the number of moles of lithium in this battery.',
        marks: 2,
        ph: 'n = 12000 / 6.94 = 1714.3 mol',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Evaluate** the environmental and social consequences of using lithium-ion batteries in electric cars compared to using crude oil (petrol/diesel) as a fuel. In your answer, consider advantages and disadvantages of both options and state your conclusion.',
        marks: 9,
        ph: 'Env: Li mining — habitat loss, water pollution vs crude oil — CO₂, SO₂, NOₓ emissions, spills; Social: Li mining — local communities, water scarcity vs petrol — health effects, economic dependency; Conclusion: both have impacts; Li batteries preferable for urban air quality but mining impacts must be managed',
      },
    ],
  },

  // ─── Q9 (12 marks, Crit D) ─── Circular vs linear economy ───
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Circular vs linear economy — resource use and sustainability',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 12,
    stem: 'The linear economy model follows a "take-make-dispose" approach: raw materials are extracted, manufactured into products, and then thrown away. The circular economy model aims to keep resources in use for as long as possible, recover and regenerate products at the end of their service life.',
    tasks: [
      {
        label: '',
        text: '**Evaluate** the circular economy model compared to the linear economy model. In your answer, consider economic aspects, use of resources, social impacts, and state a justified conclusion.',
        marks: 12,
        ph: 'Economic: circular reduces raw material costs but higher recycling investment; Resources: circular keeps materials in use longer, reduces waste; Social: circular creates new jobs in recycling, reduces pollution in communities; Conclusion: circular economy is more sustainable in the long term',
      },
    ],
  },
]
