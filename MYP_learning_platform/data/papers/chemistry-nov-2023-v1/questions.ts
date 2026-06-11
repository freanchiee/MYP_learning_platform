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
  id: 'chemistry-nov-2023-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Sparkling mineral water / CO₂ equilibrium (10m, Crit A) ─────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Chemical Equilibrium & Bonding',
    marks: 10,
    stem: 'Carbon dioxide (CO₂) is dissolved in sparkling mineral water under high pressure to make it fizzy. When the bottle is opened the pressure drops and the CO₂ starts to escape from the liquid.',
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
        ph: 'Carbon centre, two C=O double bonds, lone pairs on each oxygen',
      },
      {
        label: 'd',
        text: '**Select** the symbols below to form an equation showing the equilibrium between dissolved carbon dioxide and the carbon dioxide gas in the space above the liquid: ___ ⇌ ___',
        marks: 2,
        ph: 'CO₂(aq) ⇌ CO₂(g)',
        widget: 'fill_blank',
      },
      {
        label: 'e',
        text: '**Explain** what will happen to the concentration of dissolved carbon dioxide in a bottle of sparkling water left open in a warm room for 30 minutes.',
        marks: 3,
        ph: 'Less fizzy; equilibrium shifts; CO₂ solubility decreases with temperature',
      },
    ],
  },

  // ─── Q2: Citric acid / sorbitol / erythritol / novel sweetener (9m, Crit A)
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Organic Chemistry & Moles',
    marks: 9,
    stem: 'Citric acid (C₆H₈O₇) gives sparkling drinks their sharp flavour. Some varieties of sparkling drinks use sugar-free formulas with alternative sweeteners such as erythritol and neotame.',
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the molar mass of citric acid, C₆H₈O₇. Give the unit.',
        marks: 2,
        ph: 'Mr = 192 g mol⁻¹',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'A bottle of sparkling water contains 18.2 g of sorbitol. The molar mass of sorbitol is 182 g mol⁻¹. **Calculate** the number of moles of sorbitol in the bottle. Give your answer to 3 significant figures.',
        marks: 2,
        ph: 'n = 18.2/182 = 0.100 mol',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Determine** the molecular formula of erythritol from the 3D molecular model shown.',
        marks: 3,
        ph: 'C₄H₁₀O₄',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: '**Select** the name of the highlighted functional group in each structure of neotame.',
        marks: 2,
        ph: 'Ester (first group), Alcohol (second group)',
        widget: 'inline_dropdown_select',
        widgetItems: ['First highlighted group', 'Second highlighted group'],
        widgetOptions: ['Alcohol', 'Alkene', 'Carboxylic acid', 'Ester'],
      },
    ],
  },

  // ─── Q3: Titanium implants (5m, Crit A) ─────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Materials Science',
    marks: 5,
    stem: 'Medical implants such as hip joints and dental implants need to be strong, long-lasting, and safe to use inside the human body. Titanium (Ti) and stainless steel are two metals commonly used for medical implants.',
    tasks: [
      {
        label: 'a',
        text: '**State** the electron configuration of titanium.',
        marks: 1,
        ph: '2.8.10.2',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Using the information in the table and your wider MYP studies, explain** two advantages of titanium implants compared to stainless steel implants.',
        marks: 4,
        ph: 'Titanium is less reactive (biocompatible, less toxic); lower density (lighter, less stress on surrounding bone); strong enough for load-bearing joints',
      },
    ],
  },

  // ─── Q4: Sugar solubility / toffee production (15m, Crit C) ─────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'States of Matter & Data Processing',
    marks: 15,
    stem: 'In the manufacture of toffee and caramel, the concentration of sugar in the mixture determines the type of sweet that can be produced. A student decided to investigate the maximum mass of sucrose that can be dissolved in 100 cm³ of water at different temperatures.',
    tasks: [
      {
        label: 'a',
        text: '**Present** the student\'s raw data collected during the experiment in a table.',
        marks: 3,
        ph: 'Two labelled columns: Temperature/°C and Mass of sucrose/g; data in ascending temperature order',
      },
      {
        label: 'b',
        text: '**Present** the data in part (a) in a graph.',
        marks: 5,
        ph: 'Scatter graph; x=Temperature/°C; y=Mass of sucrose/g; even scale from 0; all 6 points; line of best fit; axes labelled',
      },
      {
        label: 'c',
        text: '**Select** the graph that shows the most appropriate line of best fit for the second student\'s data.',
        marks: 1,
        ph: 'Graph C — balanced line of best fit',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'd',
        text: '**Identify** the data point that is an outlier. **Suggest** what the expected mass of sucrose would be.',
        marks: 2,
        ph: 'Outlier at 60°C; expected mass ≈ 280 g',
      },
      {
        label: 'e',
        text: 'Toffee is made by heating sugar to 140°C (hard-crack stage) where it becomes liquid, then pouring it into moulds to cool and solidify. **Select** the state and expected behaviour of sugar in each location during the toffee-making process.',
        marks: 4,
        ph: 'Heated liquid: takes shape of container; solidified toffee: no change of shape',
        widget: 'inline_dropdown_select',
        widgetItems: [
          'Sugar in the heated pan — State',
          'Sugar in the mould (cooled) — State',
          'Sugar in the heated pan — Behaviour',
          'Sugar in the mould (cooled) — Behaviour',
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

  // ─── Q5: Chicken cooking / Maillard reaction investigation (12m, Crit B) ─
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Chemical Reactions & Scientific Inquiry',
    marks: 12,
    stem: 'Chemical changes take place when food is cooked. When chicken is cooked in boiling water, changes in colour and texture are indicators that a chemical change has taken place. The Maillard reaction between sugars and proteins causes browning in foods cooked using dry heat such as grilling and frying.',
    tasks: [
      {
        label: 'a',
        text: '**Identify** the variables in the student\'s investigation of cooking time and chicken appearance:\n\nIndependent variable: ___\nDependent variable: ___\nControl variable 1: ___\nControl variable 2: ___',
        marks: 4,
        ph: 'IV=time/duration; DV=how cooked/colour/appearance; CV=size of chicken piece; CV=temperature of water',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Suggest** a suitable hypothesis for the investigation in part (a). If... Then... Because...',
        marks: 3,
        ph: 'If time increases, then chicken is more cooked/white/firm, because more chemical change/protein denaturation',
      },
      {
        label: 'c',
        text: 'Pancakes contain both sugar and protein. **Outline** why pancakes turn golden-brown when cooked on a hot griddle.',
        marks: 3,
        ph: 'Sugar and protein react with heat; Maillard reaction causes golden-brown colour',
      },
      {
        label: 'd',
        text: 'A student reduced the temperature of the griddle and cooked a new pancake for the same time. **Predict** how the appearance would be different. **Justify** your answer.',
        marks: 2,
        ph: 'Less brown/golden; lower temperature → slower/fewer Maillard reactions',
      },
    ],
  },

  // ─── Q6: MPPS / pineapple marinade / Crit B design (25m, Crit B) ─────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Acids & Scientific Investigation Design',
    marks: 25,
    stem: 'A food company has developed a plant-based protein strip (MPPS) that is used as a meat alternative in dishes. When marinated in acidic fruit juice for 25 minutes, the MPPS becomes soft and digestible. A student investigated which fruit juice would best cook the MPPS by measuring the force needed to break strips marinated in different juices. A breaking force greater than 290 N indicates the MPPS is cooked.',
    tasks: [
      {
        label: 'a',
        text: '**Use** data from the results to state whether the student\'s hypothesis is correct. **Justify** your answer.',
        marks: 2,
        ph: 'Hypothesis NOT supported; force needed to break cooked MPPS is HIGHER',
      },
      {
        label: 'b',
        text: '**State** which samples of MPPS would be suitable to eat (breaking force threshold = 290 N). **Justify** your answer using data.',
        marks: 2,
        ph: 'Pineapple and lemon samples; both had breaking forces > 290 N',
      },
      {
        label: 'c',
        text: '**State** why sample 1 was measured using only fruit juice (no MPPS).',
        marks: 1,
        ph: 'As a control / baseline / for direct comparison',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: '**Outline** an improvement to the method used.',
        marks: 2,
        ph: 'Repeat the experiment; calculate an average to reduce random error',
      },
      {
        label: 'e',
        text: 'The student wanted to know the minimum pH that would cook the MPPS, between pH 2.5 and 4.0. They decided to use solutions of citric acid. **Suggest** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'What is the effect of pH on the breaking force of MPPS?',
      },
      {
        label: 'f',
        text: '**Design** a method to identify the pH that would cook MPPS. In your answer you should include:\n• the independent, dependent and two control variables\n• a list of equipment you will use\n• details of the method you will use\n• how many measurements you will take to collect sufficient data\n• safety considerations.',
        marks: 17,
        ph: 'IV=pH; DV=breaking force; CVs=size of strip+time; citric acid solutions; ≥5 pH levels; ≥3 trials; acid safety goggles',
      },
    ],
  },

  // ─── Q7: Protein / chicken nuggets carbon footprint (9m, Crit D) ──────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental Chemistry & Societal Impact',
    marks: 9,
    stem: 'Many people are reducing the amount of animal-based protein in their diet. The graphs show data comparing food production of different protein sources. A growing industry produces plant-based versions of popular foods such as chicken nuggets. The table below shows nutritional information for a plant-based chicken nugget compared to a conventional chicken nugget.',
    tasks: [
      {
        label: 'a',
        text: '**Using** the graphs above, calculate the carbon footprint from the production of chicken protein in the average US diet.',
        marks: 2,
        ph: '1800 − 700 = 1100 kg CO₂ eq (accept range)',
      },
      {
        label: 'b',
        text: '**Using** the graphs in part (a) and the data in the table above, **discuss and evaluate** the advantages and disadvantages of plant-based chicken nuggets compared to conventional chicken nuggets. In your answer you should include:\n• the advantages of the production of plant-based protein compared to chicken-based protein\n• a comparison of the nutritional data\n• your opinion of why people may choose plant-based nuggets rather than chicken nuggets.',
        marks: 7,
        ph: 'AD: lower carbon/water/land footprint; Nutritional: similar protein, lower fat; opinion with justification',
      },
    ],
  },

  // ─── Q8: Insect protein (15m, Crit D) ────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science, Technology & Society',
    marks: 15,
    stem: 'In the effort to reduce the environmental impact of the meat industry and to meet the demands of a growing global population, companies have developed products using insect protein. Insects such as crickets and mealworms are rich in protein and can be farmed at low cost. They require far less land, water, and feed compared to cattle. The crickets can be processed into flour that is used in a variety of food products including protein bars, pasta, and burger patties. Cricket farming can be done in small vertical buildings in cities, reducing the need for large-scale farmland.',
    tasks: [
      {
        label: '',
        text: '**Using** the information provided, **discuss and evaluate** the use of insect protein as a meat substitute from environmental, ethical, social and economic perspectives. In your answer include an assessment of the potential impact on health.',
        marks: 15,
        ph: 'Environmental: less land/water/feed/emissions; Ethical: insects farmed differently from cattle; Socio-economic: cheap/accessible urban; Health: high protein but allergy risk; justified conclusion',
      },
    ],
  },
]
