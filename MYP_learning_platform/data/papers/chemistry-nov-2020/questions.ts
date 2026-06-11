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
  id: 'chemistry-nov-2020',
  subject: 'Chemistry',
  session: 'November',
  year: 2020,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Volcanoes and SiO₂ in lava',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 7,
    stem: "In May 2018 Kilauea, a volcano on Hawaii's Big Island, erupted. The volcano expelled lava, ash, and toxic gas. Flows of lava from the crater flowed into the ocean. Three types of lava are basaltic, andesitic, and rhyolitic — classified by their SiO₂ content by mass: Basaltic 45.6–55.2%, Andesitic 52.0–63.7%, Rhyolitic 68.3–77.4%. A 2.00 g sample of rock from Kilauea contained 0.994 g of SiO₂ (49.7%). A 2.00 g sample of rock from Mount Vesuvius contained 1.16 g of SiO₂.",
    figImages: ['/images/papers/chemistry-nov-2020/page-01.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the physical process that takes place when lava cools down to form rocks.',
        marks: 1,
        ph: 'Choose the correct physical process name',
        widget: 'radio_select',
        widgetOptions: ['Solidification', 'Crystallisation', 'Evaporation', 'Melting'],
      },
      {
        label: 'b',
        text: 'The major component of lava is SiO₂ with oxides of iron and magnesium present in different proportions. **Determine** the missing information and complete the table. (Oxide names and formulae: silicon dioxide / SiO₂; magnesium oxide / MgO)',
        marks: 2,
        ph: 'Fill in silicon dioxide and MgO',
        widget: 'fill_blank',
        widgetItems: ['Oxide name for SiO₂', 'Formula for magnesium oxide'],
      },
      {
        label: 'c',
        text: '**Select** the type of rock from Kilauea (49.7% SiO₂).',
        marks: 1,
        ph: 'Basaltic range is 45.6–55.2%',
        widget: 'radio_select',
        widgetOptions: ['Basaltic', 'Andesitic', 'Rhyolitic'],
      },
      {
        label: 'd',
        text: '**Calculate** the percentage of SiO₂ in the rock sample from Mount Vesuvius. (1.16 g SiO₂ in a 2.00 g sample)',
        marks: 2,
        ph: '1.16/2.00 × 100 = 58.0%',
      },
      {
        label: 'e',
        text: 'Using your answer from part (d), **select** the type of rock from Mount Vesuvius.',
        marks: 1,
        ph: 'Andesitic range is 52.0–63.7%',
        widget: 'radio_select',
        widgetOptions: ['Basaltic', 'Andesitic', 'Rhyolitic'],
      },
    ],
  },

  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Volcanic gases and noble gases',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 9,
    stem: 'It was once believed each volcano had its own particular type of gas: SO₂ at Mount Etna or HCl at Mount Vesuvius. This proved to be untrue: volcanic gases are mixtures of water vapour, CO₂, H₂S, and others. In the case of Kilauea, gaseous HCl is a major component. Some noble gases such as helium, neon, and argon can also be released.',
    figImages: ['/images/papers/chemistry-nov-2020/page-03.png', '/images/papers/chemistry-nov-2020/page-04.png'],
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why volcano crater lakes typically have pH values as low as 0.1.',
        marks: 2,
        ph: 'Gases dissolve in water to form acids',
      },
      {
        label: 'b',
        text: '**Select** the Lewis (dot and cross) structure of H₂S.',
        marks: 1,
        ph: 'First option shows correct lone pairs on S',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['/images/papers/chemistry-nov-2020/page-03.png'],
      },
      {
        label: 'c',
        text: 'Use the periodic table to **state** the period of argon.',
        marks: 1,
        ph: 'Period 3',
      },
      {
        label: 'd',
        text: 'Neon exists as a mixture of isotopes. **Determine** the number of protons, neutrons, and electrons in an atom of ²²Ne.',
        marks: 3,
        ph: 'Protons=10, Neutrons=12, Electrons=10',
      },
      {
        label: 'e',
        text: '**Draw** the electron configuration of neon showing 2 electrons in the inner shell and 8 in the outer shell.',
        marks: 2,
        ph: '2 electrons inner shell, 8 outer shell',
      },
    ],
  },

  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Plastics and throwaway culture',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 10,
    stem: 'Plastics are synthetic materials with high molecular masses. In the past, synthetic plastics were made using chemicals from oil. Molecules A and B are used to make common plastics (A = ethene, B = propene). Throwaway culture refers to the widespread use of single-use plastics that contribute to a global rubbish problem. Countries have implemented thermovaporization — burning non-recyclable plastic waste to generate electricity.',
    figImages: ['/images/papers/chemistry-nov-2020/page-07.png', '/images/papers/chemistry-nov-2020/page-08.png', '/images/papers/chemistry-nov-2020/page-11.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the chemical classification of molecules A and B.',
        marks: 1,
        ph: 'Both have C=C double bonds',
        widget: 'radio_select',
        widgetOptions: ['Alkene', 'Alkane', 'Alcohol', 'Carboxylic acid'],
        figImages: ['/images/papers/chemistry-nov-2020/page-07.png'],
      },
      {
        label: 'b',
        text: '**State** the name of each chemical A and B.',
        marks: 2,
        ph: 'A = ethene, B = propene',
        widget: 'fill_blank',
        widgetItems: ['Name of A', 'Name of B'],
      },
      {
        label: 'c',
        text: 'Molecules A and B can be obtained by breaking down long chain molecules such as decane, C₁₀H₂₂: C₁₀H₂₂ → C₃H₆ + C₂H₄ + X. **Deduce** the molecular formula of the missing product X.',
        marks: 1,
        ph: 'Balance carbons and hydrogens',
        figImages: ['/images/papers/chemistry-nov-2020/page-08.png'],
      },
      {
        label: 'd',
        text: 'During thermovaporization, gases are produced from the burning of plastic. **State** why calcium hydroxide is added to the gases produced during incineration of waste.',
        marks: 1,
        ph: 'Neutralises acidic gases',
      },
      {
        label: 'e',
        text: '**State** the physical change taking place between stages 2 and 3 of the thermovaporization process (water converting to steam).',
        marks: 1,
        ph: 'Boiling / water turns to steam',
      },
      {
        label: 'f',
        text: 'In most countries, incineration of waste is subject to strict regulations. **Suggest** one requirement that should be included in order to reduce the environmental impact of the process.',
        marks: 1,
        ph: 'Waste should not contain hazardous materials / emissions controlled',
      },
      {
        label: 'g',
        text: 'There has been a move from non-biodegradable to biodegradable plastics. The rate of biodegradation was tested for three plastic samples A, B, and C with different particle sizes. **List** the order of the three samples in order of increasing particle size. **Justify** your answer.',
        marks: 3,
        ph: 'A < C < B; smaller particles = greater surface area = faster reaction',
        figImages: ['/images/papers/chemistry-nov-2020/page-11.png'],
      },
    ],
  },

  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Glow sticks and chemiluminescence',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 17,
    stem: 'Glow sticks produce light in a chemical reaction called chemiluminescence. One of the chemicals involved is phenyl oxalate — a catalyst is also present. The catalyst is separated from the reactants inside a sealed tube. A student investigated the effect of temperature on how long a glow stick glows by placing glow sticks in beakers of water at different temperatures.',
    figImages: ['/images/papers/chemistry-nov-2020/page-13.png', '/images/papers/chemistry-nov-2020/page-14.png', '/images/papers/chemistry-nov-2020/page-15.png', '/images/papers/chemistry-nov-2020/page-17.png'],
    tasks: [
      {
        label: 'a',
        text: '**Outline** the function of a catalyst in this reaction.',
        marks: 2,
        ph: 'Speeds up reaction / lowers activation energy without being used up',
      },
      {
        label: 'b',
        text: '**Select** the name of the organic functional group highlighted in the phenyl oxalate molecule.',
        marks: 1,
        ph: 'Ester linkage (C=O with O–C)',
        widget: 'radio_select',
        widgetOptions: ['Alkene', 'Ester', 'Alcohol', 'Carboxylic acid'],
        figImages: ['/images/papers/chemistry-nov-2020/page-13.png'],
      },
      {
        label: 'c',
        text: 'The student placed glow sticks in beakers at different temperatures. **Measure** the missing temperature from the thermometer shown (one of: 30°C, 35°C, 50°C, ?).',
        marks: 1,
        ph: '65°C',
        figImages: ['/images/papers/chemistry-nov-2020/page-14.png'],
      },
      {
        label: 'd',
        text: '**Identify** the independent variable (IV), dependent variable (DV), and two controlled variables (CVs) for the glow stick investigation.',
        marks: 4,
        ph: 'IV: temperature; DV: time glow stick glows; CVs: type of glow stick, volume of water',
      },
      {
        label: 'e',
        text: '**Formulate** a hypothesis for this investigation using an If/Then/Because structure.',
        marks: 3,
        ph: 'If temperature increases, then glow time decreases, because reaction rate increases',
      },
      {
        label: 'f',
        text: 'The student calculated average data and plotted a graph of average time (min) vs temperature (°C). **Predict** the time taken for the glow stick to stop glowing at 15°C.',
        marks: 2,
        ph: '330 ± 10 minutes',
        figImages: ['/images/papers/chemistry-nov-2020/page-17.png'],
      },
      {
        label: 'g',
        text: 'A glow stick contains 6.58 × 10⁵ molecules of phenyl oxalate. The time for the reaction to stop at 20°C is 260 minutes. **Calculate** the rate at which the phenyl oxalate molecules are used up at this temperature. You should include appropriate units in your answer.',
        marks: 4,
        ph: 'rate = 6.58×10⁵ ÷ 260 ≈ 2530 molecules min⁻¹',
      },
    ],
  },

  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Sunscreen and UV protection investigation',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 20,
    stem: 'Sunlight is important for producing vitamin D and energy. However, exposure to UV light increases the risk of skin cancer. It is recommended to apply sunscreen every 20–30 minutes. Sunscreen contains several chemical compounds including homosalate, titanium dioxide, zinc oxide, and others. A student investigated how many UV-reactive beads changed colour when protected from UV light by three different sunscreens: Hi-Sun (100% beads changed), Solar Flex (28% changed), Aurum (10% changed).',
    figImages: ['/images/papers/chemistry-nov-2020/page-19.png', '/images/papers/chemistry-nov-2020/page-20.png', '/images/papers/chemistry-nov-2020/page-21.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** which is the most effective sunscreen.',
        marks: 1,
        ph: 'Aurum (fewest beads changed colour = best UV block)',
        figImages: ['/images/papers/chemistry-nov-2020/page-20.png'],
      },
      {
        label: 'b',
        text: 'The experimental method uses a UV lamp as a substitute for natural sunlight. **Outline** why this UV lamp is not a good model for natural sunlight.',
        marks: 2,
        ph: 'Sunlight has all wavelengths; UV lamp only emits a narrow band / UVA only',
        figImages: ['/images/papers/chemistry-nov-2020/page-21.png'],
      },
      {
        label: 'c',
        text: 'Using the equipment below, **design** an investigation to determine which of the individual chemical compounds present in Solar Flex sunscreen provides the best protection from the sun. In your answer you should include: an identification of the variables, a list of the additional equipment you will use, details of your method for manipulating the variables, details of the data you will collect, and how you will ensure your method is safe.',
        marks: 17,
        ph: 'Crit B design: IV=sunscreen ingredient, DV=% beads changed, CVs=time/concentration/UV source',
        figImages: ['/images/papers/chemistry-nov-2020/page-21.png'],
      },
    ],
  },

  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Sunscreen data analysis and myporium experiment',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 10,
    stem: 'Solar Flex was one of the sunscreens investigated in question 5. Solar Flex contains: Homosalate, Octisalate, Octinoxate, Titanium dioxide. The research question was: "Is titanium dioxide the best blocker of UV light?" Chemists are also analysing a new chemical, myporium, to see if it can be used to block UV light in sunscreens. They make different concentrations of myporium and measure absorbance (AU). Concentrations tested (μmol dm⁻³): 0, 10, 30, 50, 70, 90, 100.',
    figImages: ['/images/papers/chemistry-nov-2020/page-22.png', '/images/papers/chemistry-nov-2020/page-23.png', '/images/papers/chemistry-nov-2020/page-24.png'],
    tasks: [
      {
        label: 'a',
        text: '**Outline** how you will use the data from the investigation in question 5 to decide if the research question "Is titanium dioxide the best blocker of UV light?" is supported.',
        marks: 2,
        ph: 'Compare beads changed per ingredient; if TiO₂ has fewest changed beads, RQ is supported',
      },
      {
        label: 'b',
        text: '**Suggest** an extension that could be made to the investigation into the effectiveness of the sunscreen ingredients.',
        marks: 1,
        ph: 'Use different concentrations / combinations / expose to real sunlight',
      },
      {
        label: 'c',
        text: 'The results show absorbance increasing with concentration (data: 0→0.00, 10→0.15, 30→0.46, 50→0.60, 70→0.55 anomalous, 90→0.90, 100→1.00 AU). **Plot** a graph of absorbance versus concentration of myporium. Label the axes, give your graph a suitable title, and add a line of best fit.',
        marks: 6,
        ph: 'Title links absorbance and concentration; LOBF from (0,0) through all except 70 μmol dm⁻³',
        figImages: ['/images/papers/chemistry-nov-2020/page-23.png', '/images/papers/chemistry-nov-2020/page-24.png'],
      },
      {
        label: 'd',
        text: '**Comment** on the reliability of the data.',
        marks: 1,
        ph: 'Anomalous point at 70 μmol dm⁻³ or only one trial / no averages',
      },
    ],
  },

  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Climate change, carbon cycle, and redox reactions',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 12,
    stem: 'Climate change is a global threat recognised by the IPCC. Increased CO₂ from fossil fuels and industrial processes has raised Earth\'s average temperature. In the natural carbon cycle, CO₂ is removed by photosynthesis: carbon dioxide + water → glucose + oxygen. Extensive deforestation reduces this natural carbon sink. Scientists propose reacting Fe with CO₂ and H₂O to form iron carbonate and hydrogen gas: Fe + CO₂ + H₂O → FeCO₃(s) + H₂(g).',
    figImages: ['/images/papers/chemistry-nov-2020/page-26.png', '/images/papers/chemistry-nov-2020/page-27.png', '/images/papers/chemistry-nov-2020/page-28.png'],
    tasks: [
      {
        label: 'a',
        text: 'Using the photosynthesis equation and your wider MYP studies, **suggest** an impact on the community due to deforestation. **Justify** your answer.',
        marks: 2,
        ph: 'Less food/glucose synthesised / more CO₂; justify: fewer plants = less photosynthesis',
      },
      {
        label: 'b',
        text: 'One way to reduce CO₂ is to react it with other chemicals to form a solid material. **Select** the state symbols for the reactants in the equation if the reaction was at 25°C: Fe(?) + CO₂(?) + H₂O(?) → FeCO₃(s) + H₂(g)',
        marks: 2,
        ph: 'Fe(s), CO₂(g), H₂O(l) at 25°C',
        widget: 'inline_dropdown_select',
        widgetItems: ['Fe', 'CO₂', 'H₂O'],
        widgetOptions: ['(s)', '(l)', '(g)', '(aq)'],
      },
      {
        label: 'c',
        text: '**Select** the name of FeCO₃.',
        marks: 1,
        ph: 'Iron(II) carbonate',
        widget: 'radio_select',
        widgetOptions: ['Iron(II) carbonate', 'Iron(III) carbonate', 'Iron(II) bicarbonate', 'Iron(II) sulfate'],
      },
      {
        label: 'd',
        text: '**Describe** what happens to iron in the reaction Fe + CO₂ + H₂O → FeCO₃(s) + H₂(g) in terms of redox chemistry.',
        marks: 3,
        ph: 'Oxidation number increases from 0 to +2; iron is oxidised (loses electrons)',
      },
      {
        label: 'e',
        text: 'The hydrogen produced could be used as a fuel. **Select** numbers to balance the equation: ?H₂ + ?O₂ → ?H₂O',
        marks: 2,
        ph: '2H₂ + O₂ → 2H₂O',
        widget: 'inline_dropdown_select',
        widgetItems: ['H₂', 'O₂', 'H₂O'],
        widgetOptions: ['1', '2', '3', '4'],
      },
      {
        label: 'f',
        text: '**Outline** why the combustion of hydrogen is better for the environment than the combustion of petrol.',
        marks: 2,
        ph: 'Only product is water / no CO₂, NOx, or SOx; product is non-toxic',
      },
    ],
  },

  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'CO₂ reduction systems — evaluation essay',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 15,
    stem: 'Scientists have been developing different systems of carbon dioxide sinks to deal with climate change. Three possible systems are: System 1 — Ferrock (new construction material made from waste iron and glass bottles that absorbs CO₂; harder and more stable than concrete; removal of 50 kg CO₂ costs USD10); System 2 — Carbon dioxide capture (CDC) (dissolves CO₂ in carbonate solution; at early stage; scientists exploring combining trapped CO₂ with H₂ to produce hydrocarbons; removal of 50 kg CO₂ costs USD10); System 3 — Conversion of desert areas (plant growth with cell-wall substances retains water/nutrients; reduces sand storms; removal of 50 kg CO₂ costs USD20).',
    figImages: ['/images/papers/chemistry-nov-2020/page-29.png', '/images/papers/chemistry-nov-2020/page-30.png', '/images/papers/chemistry-nov-2020/page-31.png', '/images/papers/chemistry-nov-2020/page-32.png'],
    tasks: [
      {
        label: '',
        text: 'Using the information in the media and your wider MYP studies, **discuss** and **evaluate** two of the three systems. In your answer you should include: the need for carbon dioxide sinks; the economic impact of each system; the social impact of each system; scientific advantages and disadvantages of each system; a concluding appraisal recommending which is the best system.',
        marks: 15,
        ph: 'Crit D essay: discuss need for CO₂ sinks, evaluate 2 systems on economic/social/scientific grounds',
      },
    ],
  },
]
