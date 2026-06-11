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
  id: 'chemistry-nov-2023-v2',
  subject: 'Chemistry',
  session: 'November',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Soda water / SO₂ equilibrium analogy with CO₂ (10m, Crit A) ─────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Chemical Equilibrium & Bonding',
    marks: 10,
    stem: 'Carbon dioxide (CO₂) is injected under pressure into water to make soda water. Soda water machines allow people to carbonate tap water at home. When the bottle is sealed, an equilibrium is established between dissolved CO₂ and the gas above the liquid.',
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
        text: '**Explain** what will happen to the concentration of dissolved carbon dioxide in a soda water bottle that is left open in a hot car for one hour.',
        marks: 3,
        ph: 'Less fizzy; equilibrium disrupted; CO₂ less soluble at higher temperature / diffusion increases',
      },
    ],
  },

  // ─── Q2: Tartaric acid / mannitol / stevia / novel sweetener (9m, Crit A) ─
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Organic Chemistry & Moles',
    marks: 9,
    stem: 'Tartaric acid (C₄H₆O₆) gives wine and grape juice their characteristic sour taste. Some low-calorie drinks use alternative sweeteners such as mannitol and sucralose to replace sugar without adding calories.',
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the molar mass of tartaric acid, C₄H₆O₆. Give the unit.',
        marks: 2,
        ph: 'Mr = 150 g mol⁻¹',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'A serving of a low-calorie drink contains 12.0 g of mannitol. The molar mass of mannitol is 182 g mol⁻¹. **Calculate** the number of moles of mannitol in the serving. Give your answer to 3 significant figures.',
        marks: 2,
        ph: 'n = 12.0/182 = 0.0659 mol',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Determine** the molecular formula of a sugar alcohol from the 3D molecular model shown.',
        marks: 3,
        ph: 'C₆H₁₄O₆ (mannitol/sorbitol)',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: '**Select** the name of the highlighted functional group in each structure of sucralose.',
        marks: 2,
        ph: 'Alkene (first group), Alcohol (second group)',
        widget: 'inline_dropdown_select',
        widgetItems: ['First highlighted group', 'Second highlighted group'],
        widgetOptions: ['Alcohol', 'Alkene', 'Carboxylic acid', 'Ester'],
      },
    ],
  },

  // ─── Q3: Zinc / galvanizing (5m, Crit A) ─────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Materials Science',
    marks: 5,
    stem: 'To prevent iron and steel from rusting, they can be coated with a thin layer of zinc in a process called galvanizing. Zinc (Zn) and tin are both used to protect steel, but zinc is now more widely preferred. The table below compares properties of zinc-coated steel and tin-coated steel.',
    tasks: [
      {
        label: 'a',
        text: '**State** the electron configuration of zinc.',
        marks: 1,
        ph: '2.8.18.2',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Using the information in the table and your wider MYP studies, explain** two advantages of zinc-coated steel compared to tin-coated steel.',
        marks: 4,
        ph: 'Zinc more reactive (sacrificial protection continues if scratched); more widely available (cheaper); recyclable; lower melting point (easier to apply)',
      },
    ],
  },

  // ─── Q4: Sugar solubility / lollipop production (15m, Crit C) ────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'States of Matter & Data Processing',
    marks: 15,
    stem: 'In the manufacture of lollipops, the concentration of sugar in the mixture determines the hardness of the final product. A student investigated the maximum mass of sucrose that can be dissolved in 100 cm³ of water at different temperatures. The student\'s raw data is shown.',
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
        ph: 'Graph C — balanced straight line of best fit',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'd',
        text: '**Identify** the data point that is an outlier. **Suggest** what the expected mass of sucrose would be.',
        marks: 2,
        ph: 'Outlier at 40°C; expected mass ≈ 215 g',
      },
      {
        label: 'e',
        text: 'Lollipops are made by heating sugar to 150°C until liquid, then pouring into shaped moulds to cool and harden. **Select** the state and expected behaviour of sugar in each location during lollipop manufacture.',
        marks: 4,
        ph: 'Heated pan = liquid (takes shape of container); Mould after cooling = solid (no change of shape)',
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

  // ─── Q5: Shrimp cooking / Maillard reaction investigation (12m, Crit B) ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Chemical Reactions & Scientific Inquiry',
    marks: 12,
    stem: 'Chemical changes take place when food is cooked. When shrimp are cooked in boiling water, they change colour from grey to pink — an indicator that a chemical change has taken place. The Maillard reaction between sugars and proteins causes browning in foods cooked using dry heat such as stir-frying.',
    tasks: [
      {
        label: 'a',
        text: '**Identify** the variables in the student\'s investigation of cooking time and shrimp appearance:\n\nIndependent variable: ___\nDependent variable: ___\nControl variable 1: ___\nControl variable 2: ___',
        marks: 4,
        ph: 'IV=time/duration; DV=colour/how cooked/appearance; CV=size of shrimp; CV=temperature of water',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Suggest** a suitable hypothesis for the investigation in part (a). If... Then... Because...',
        marks: 3,
        ph: 'If time increases, then shrimp is more cooked/pink/firm, because more chemical change/protein denaturation',
      },
      {
        label: 'c',
        text: 'Onion rings are coated in batter containing sugar and protein. **Outline** why onion rings turn golden-brown when deep-fried.',
        marks: 3,
        ph: 'Sugar and protein react with heat; Maillard reaction causes golden-brown colour',
      },
      {
        label: 'd',
        text: 'A student lowered the temperature of the frying oil and cooked new onion rings for the same time. **Predict** how the appearance would be different. **Justify** your answer.',
        marks: 2,
        ph: 'Less brown/golden; lower temperature → slower/fewer Maillard reactions',
      },
    ],
  },

  // ─── Q6: MR-S (seitan strips) / lemon+apple marinade / Crit B design (25m, Crit B)
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Acids & Scientific Investigation Design',
    marks: 25,
    stem: 'A company has produced a seitan-based protein strip (MR-S) as a vegan alternative to fish. When marinated in acidic juice for 25 minutes, the MR-S becomes soft and digestible. A student investigated which juice would best cook the MR-S by measuring the force needed to break samples. A breaking force greater than 300 N indicates the MR-S is cooked.',
    tasks: [
      {
        label: 'a',
        text: '**Use** data from the results to state whether the student\'s hypothesis is correct. **Justify** your answer.',
        marks: 2,
        ph: 'Hypothesis NOT supported; force to break cooked MR-S is HIGHER than uncooked',
      },
      {
        label: 'b',
        text: '**State** which samples of MR-S would be suitable to eat (breaking force threshold = 300 N). **Justify** your answer using data.',
        marks: 2,
        ph: 'Lemon and apple samples; both had breaking forces > 300 N',
      },
      {
        label: 'c',
        text: '**State** why sample 1 was measured using only juice (no MR-S).',
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
        text: 'The student wanted to know the minimum pH that would cook the MR-S, between pH 2.0 and 4.0. They decided to use solutions of tartaric acid. **Suggest** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'What is the effect of pH on the breaking force of MR-S?',
      },
      {
        label: 'f',
        text: '**Design** a method to identify the pH that would cook MR-S. In your answer you should include:\n• the independent, dependent and two control variables\n• a list of equipment you will use\n• details of the method you will use\n• how many measurements you will take to collect sufficient data\n• safety considerations.',
        marks: 17,
        ph: 'IV=pH; DV=breaking force; CVs=size of strip+time; tartaric acid solutions; ≥5 pH levels; ≥3 trials; acid safety',
      },
    ],
  },

  // ─── Q7: Dairy vs plant-based milk carbon footprint (9m, Crit D) ─────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental Chemistry & Societal Impact',
    marks: 9,
    stem: 'Many people are switching from dairy milk to plant-based alternatives such as oat milk, almond milk, and soy milk. The graphs show data comparing the environmental impact of producing different types of milk. The table below shows nutritional information for dairy milk and oat milk.',
    tasks: [
      {
        label: 'a',
        text: '**Using** the graphs above, calculate the carbon footprint from the production of dairy milk protein in the average European diet.',
        marks: 2,
        ph: '1600 − 550 = 1050 kg CO₂ eq (accept range)',
      },
      {
        label: 'b',
        text: '**Using** the graphs in part (a) and the data in the table above, **discuss and evaluate** the advantages and disadvantages of plant-based milk compared to dairy milk. In your answer you should include:\n• the advantages of the production of plant-based milk compared to dairy milk\n• a comparison of the nutritional data\n• your opinion of why people may choose plant-based milk rather than dairy milk.',
        marks: 7,
        ph: 'AD: lower carbon/water/land; Nutritional: less protein and fat in oat milk; calcium may differ; opinion with justification',
      },
    ],
  },

  // ─── Q8: Lab-grown seafood (15m, Crit D) ─────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science, Technology & Society',
    marks: 15,
    stem: 'Overfishing is depleting ocean fish stocks and damaging marine ecosystems. To address this, companies have developed a process to grow fish meat in a laboratory using a small sample of fish cells. The lab-grown cells are cultivated in tanks and combined to form muscle tissue that resembles fish fillets. From one tissue sample, thousands of fillets can be grown without catching any fish. The cost of lab-grown salmon has decreased significantly and is expected to reach supermarket shelves within five years. This technology could protect endangered species such as bluefin tuna from extinction.',
    tasks: [
      {
        label: '',
        text: '**Using** the information provided, **discuss and evaluate** the use of lab-grown seafood from environmental, ethical, social and economic perspectives. In your answer include an assessment of the potential impact on health.',
        marks: 15,
        ph: 'Environmental: reduces overfishing/marine damage; Ethical: cells from fish but no killing/bycatch; Socio-economic: fishing jobs displaced/new lab jobs; Health: safe if tested/no microplastics; justified conclusion',
      },
    ],
  },
]
