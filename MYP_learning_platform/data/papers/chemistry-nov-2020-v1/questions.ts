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
  id: 'chemistry-nov-2020-v1',
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
    topic: 'Volcanic rocks — Mount Etna and Mount Fuji',
    marks: 7,
    stem: "Mount Etna in Sicily and Mount Fuji in Japan are two of the world's most studied active volcanoes. Geologists classify igneous rocks by their SiO₂ (silicon dioxide) content: Basaltic 45.6–55.2%, Andesitic 52.0–63.7%, Rhyolitic 68.3–77.4%. A 2.00 g sample of lava from Mount Etna contained 0.976 g of SiO₂ (48.8%). A 2.00 g sample from Mount Fuji contained 1.20 g of SiO₂.",
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the physical process that takes place when molten magma cools slowly underground to form crystals.',
        marks: 1,
        ph: 'Choose the correct physical process name',
        widget: 'radio_select',
        widgetOptions: ['Crystallisation', 'Condensation', 'Evaporation', 'Melting'],
      },
      {
        label: 'b',
        text: 'Volcanic rocks contain a variety of metal oxides. **Determine** the missing information and complete the table. (Oxide names and formulae: sodium oxide / Na₂O; calcium oxide / CaO)',
        marks: 2,
        ph: 'Fill in sodium oxide and CaO',
        widget: 'fill_blank',
        widgetItems: ['Oxide name for Na₂O', 'Formula for calcium oxide'],
      },
      {
        label: 'c',
        text: '**Select** the type of rock from Mount Etna (48.8% SiO₂).',
        marks: 1,
        ph: 'Basaltic range is 45.6–55.2%',
        widget: 'radio_select',
        widgetOptions: ['Basaltic', 'Andesitic', 'Rhyolitic'],
      },
      {
        label: 'd',
        text: '**Calculate** the percentage of SiO₂ in the rock sample from Mount Fuji. (1.20 g SiO₂ in a 2.00 g sample)',
        marks: 2,
        ph: '1.20/2.00 × 100 = 60.0%',
      },
      {
        label: 'e',
        text: 'Using your answer from part (d), **select** the type of rock from Mount Fuji.',
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
    topic: 'Fumarolic gases and noble gas isotopes',
    marks: 9,
    stem: 'Scientists studying Mount Etna have identified fumarolic gases at volcanic vents, including hydrogen sulfide (H₂S), sulfur dioxide (SO₂), and carbon dioxide (CO₂). These gases can dissolve in rainwater or in shallow crater pools. Noble gases such as helium, neon, and krypton are also emitted from volcanic vents and are used to study magma movement.',
    figImages: ['page-03.png', 'page-04.png'],
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why volcanic vent pools near fumaroles typically have very low pH values.',
        marks: 2,
        ph: 'Gases dissolve in water to form acids',
      },
      {
        label: 'b',
        text: '**Select** the Lewis (dot and cross) structure of H₂O.',
        marks: 1,
        ph: 'First option shows correct lone pairs on O',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['page-03.png'],
      },
      {
        label: 'c',
        text: 'Use the periodic table to **state** the period of krypton.',
        marks: 1,
        ph: 'Period 4',
      },
      {
        label: 'd',
        text: 'Krypton exists as a mixture of isotopes. **Determine** the number of protons, neutrons, and electrons in an atom of ⁸⁴Kr.',
        marks: 3,
        ph: 'Protons=36, Neutrons=48, Electrons=36',
      },
      {
        label: 'e',
        text: '**Draw** the electron configuration of argon showing electrons in all three shells.',
        marks: 2,
        ph: '2 inner, 8 second shell, 8 outer shell',
      },
    ],
  },

  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Synthetic rubber and industrial processing',
    marks: 10,
    stem: 'Synthetic rubber is produced from petroleum-derived monomers. Two common monomers used in rubber manufacture are molecule A (butene, C₄H₈) and molecule B (pentene, C₅H₁₀), both obtained from the cracking of longer-chain hydrocarbons. Factories producing synthetic rubber must manage waste gases to minimise environmental impact. Some countries now require that non-recyclable rubber waste is incinerated using a controlled thermovaporization process to generate electricity.',
    figImages: ['page-07.png', 'page-08.png', 'page-11.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the chemical classification of molecules A and B.',
        marks: 1,
        ph: 'Both have C=C double bonds',
        widget: 'radio_select',
        widgetOptions: ['Alkene', 'Alkane', 'Alcohol', 'Carboxylic acid'],
        figImages: ['page-07.png'],
      },
      {
        label: 'b',
        text: '**State** the name of each molecule A and B.',
        marks: 2,
        ph: 'A = butene, B = pentene',
        widget: 'fill_blank',
        widgetItems: ['Name of A', 'Name of B'],
      },
      {
        label: 'c',
        text: 'Molecules A and B are obtained by cracking hexadecane, C₁₆H₃₄: C₁₆H₃₄ → C₄H₈ + C₅H₁₀ + X. **Deduce** the molecular formula of the missing product X.',
        marks: 1,
        ph: 'Balance carbons and hydrogens',
        figImages: ['page-08.png'],
      },
      {
        label: 'd',
        text: 'During thermovaporization of rubber waste, acidic gases are produced. **State** why calcium hydroxide is added to the gases produced during incineration.',
        marks: 1,
        ph: 'Neutralises acidic gases',
      },
      {
        label: 'e',
        text: '**State** the physical change taking place when liquid butene is heated and becomes a gas in the factory production process.',
        marks: 1,
        ph: 'Boiling / liquid turns to gas',
      },
      {
        label: 'f',
        text: 'In most countries, incineration of rubber waste is subject to strict regulations. **Suggest** one requirement that should be included in order to reduce the environmental impact of the process.',
        marks: 1,
        ph: 'Emissions must be filtered / waste must not contain hazardous materials',
      },
      {
        label: 'g',
        text: 'There has been a move from non-biodegradable to biodegradable synthetic rubbers. The rate of biodegradation was tested for three rubber samples A, B, and C with different particle sizes. **List** the order of the three samples in order of increasing particle size. **Justify** your answer.',
        marks: 3,
        ph: 'C < A < B; smaller particles = greater surface area = faster reaction',
        figImages: ['page-11.png'],
      },
    ],
  },

  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Firefly bioluminescence investigation',
    marks: 17,
    stem: 'Fireflies produce light through a bioluminescent reaction. Luciferin (the light-emitting substrate) is oxidised in the presence of luciferase — an enzyme that acts as a catalyst. A student investigated the effect of temperature on the duration of firefly light emission by placing firefly extract solutions in water baths at different temperatures.',
    figImages: ['page-13.png', 'page-14.png', 'page-15.png', 'page-17.png'],
    tasks: [
      {
        label: 'a',
        text: '**Outline** the function of luciferase enzyme as a catalyst in the bioluminescent reaction.',
        marks: 2,
        ph: 'Speeds up reaction / lowers activation energy without being used up',
      },
      {
        label: 'b',
        text: '**Select** the name of the organic functional group highlighted in the luciferin molecule.',
        marks: 1,
        ph: 'Ester linkage (C=O with O–C)',
        widget: 'radio_select',
        widgetOptions: ['Alkene', 'Ester', 'Alcohol', 'Carboxylic acid'],
        figImages: ['page-13.png'],
      },
      {
        label: 'c',
        text: 'The student placed solutions in water baths at different temperatures. **Measure** the missing temperature from the thermometer shown (temperatures used: 30°C, 40°C, 55°C, ?).',
        marks: 1,
        ph: '70°C',
        figImages: ['page-14.png'],
      },
      {
        label: 'd',
        text: '**Identify** the independent variable (IV), dependent variable (DV), and two controlled variables (CVs) for the bioluminescence investigation.',
        marks: 4,
        ph: 'IV: temperature; DV: time light lasts; CVs: type of firefly extract, volume of solution',
      },
      {
        label: 'e',
        text: '**Formulate** a hypothesis for this investigation using an If/Then/Because structure.',
        marks: 3,
        ph: 'If temperature increases, then light duration decreases, because reaction rate increases',
      },
      {
        label: 'f',
        text: 'The student plotted a graph of average light duration (min) vs temperature (°C). **Predict** the time taken for the firefly light to stop at 10°C.',
        marks: 2,
        ph: '440 ± 20 minutes',
        figImages: ['page-17.png'],
      },
      {
        label: 'g',
        text: 'A firefly extract contains 8.64 × 10⁵ molecules of luciferin. The time for the light to stop at 20°C is 240 minutes. **Calculate** the rate at which luciferin molecules are used up at this temperature. You should include appropriate units in your answer.',
        marks: 4,
        ph: 'rate = 8.64×10⁵ ÷ 240 = 3600 molecules min⁻¹',
      },
    ],
  },

  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'SPF sunscreen and UV protection investigation',
    marks: 20,
    stem: 'Prolonged exposure to UV light from the sun can damage skin cells and increase the risk of skin cancer. SPF (Sun Protection Factor) sunscreens contain chemical compounds that absorb or reflect UV radiation. A student investigated how many UV-reactive beads changed colour when covered by three different sunscreens: BioBlock (5% beads changed), NatureGuard (35% changed), SunProtect (68% changed).',
    figImages: ['page-19.png', 'page-20.png', 'page-21.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** which is the most effective sunscreen.',
        marks: 1,
        ph: 'BioBlock (fewest beads changed colour = best UV block)',
        figImages: ['page-20.png'],
      },
      {
        label: 'b',
        text: 'The experimental method uses a UV LED lamp as a substitute for natural sunlight. **Outline** why this UV lamp is not a good model for natural sunlight.',
        marks: 2,
        ph: 'Sunlight has all wavelengths; UV lamp only emits a narrow band',
        figImages: ['page-21.png'],
      },
      {
        label: 'c',
        text: 'Using the equipment below, **design** an investigation to determine which of the individual chemical compounds present in NatureGuard sunscreen provides the best protection from the sun. In your answer you should include: an identification of the variables, a list of the additional equipment you will use, details of your method for manipulating the variables, details of the data you will collect, and how you will ensure your method is safe.',
        marks: 17,
        ph: 'Crit B design: IV=sunscreen ingredient, DV=% beads changed, CVs=time/concentration/UV source',
        figImages: ['page-21.png'],
      },
    ],
  },

  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'UV absorbance analysis — ethanolamine experiment',
    marks: 10,
    stem: 'NatureGuard was one of the sunscreens investigated in question 5. NatureGuard contains: Homosalate, Avobenzone, Titanium dioxide, Zinc oxide. The research question was: "Is avobenzone the best blocker of UV light?" Chemists are also testing a new compound, ethanolamine, to see if it can be used to block UV light in sunscreens. They make different concentrations of ethanolamine and measure absorbance (AU). Concentrations tested (μmol dm⁻³): 0, 5, 15, 25, 35, 45, 50.',
    figImages: ['page-22.png', 'page-23.png', 'page-24.png'],
    tasks: [
      {
        label: 'a',
        text: '**Outline** how you will use the data from the investigation in question 5 to decide if the research question "Is avobenzone the best blocker of UV light?" is supported.',
        marks: 2,
        ph: 'Compare beads changed per ingredient; if avobenzone has fewest changed beads, RQ is supported',
      },
      {
        label: 'b',
        text: '**Suggest** an extension that could be made to the investigation into the effectiveness of the sunscreen ingredients.',
        marks: 1,
        ph: 'Use different concentrations / combinations / expose to real sunlight',
      },
      {
        label: 'c',
        text: 'The results show absorbance increasing with concentration (data: 0→0.00, 5→0.11, 15→0.36, 25→0.54, 35→0.50 anomalous, 45→0.74, 50→0.85 AU). **Plot** a graph of absorbance versus concentration of ethanolamine. Label the axes, give your graph a suitable title, and add a line of best fit.',
        marks: 6,
        ph: 'Title links absorbance and concentration; LOBF from (0,0) through all except 35 μmol dm⁻³',
        figImages: ['page-23.png', 'page-24.png'],
      },
      {
        label: 'd',
        text: '**Comment** on the reliability of the data.',
        marks: 1,
        ph: 'Anomalous point at 35 μmol dm⁻³ or only one trial / no averages',
      },
    ],
  },

  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon cycle, deforestation, and Mg-based CO₂ capture',
    marks: 12,
    stem: "Climate change is driven by increasing atmospheric CO₂. In the natural carbon cycle, CO₂ is removed by photosynthesis. Deforestation removes natural carbon sinks. Scientists are investigating reactions of magnesium (Mg) with CO₂ and H₂O to capture carbon dioxide as a solid mineral: Mg + CO₂ + H₂O → MgCO₃(s) + H₂(g). The H₂ produced could also serve as a clean fuel.",
    figImages: ['page-26.png', 'page-27.png', 'page-28.png'],
    tasks: [
      {
        label: 'a',
        text: 'Using the photosynthesis equation and your wider MYP studies, **suggest** an impact on the community due to deforestation. **Justify** your answer.',
        marks: 2,
        ph: 'Less food/glucose synthesised / more CO₂; justify: fewer plants = less photosynthesis',
      },
      {
        label: 'b',
        text: 'One way to reduce CO₂ is to react it with magnesium to form a solid mineral. **Select** the state symbols for the reactants in the equation if the reaction was at 25°C: Mg(?) + CO₂(?) + H₂O(?) → MgCO₃(s) + H₂(g)',
        marks: 2,
        ph: 'Mg(s), CO₂(g), H₂O(l) at 25°C',
        widget: 'inline_dropdown_select',
        widgetItems: ['Mg', 'CO₂', 'H₂O'],
        widgetOptions: ['(s)', '(l)', '(g)', '(aq)'],
      },
      {
        label: 'c',
        text: '**Select** the name of MgCO₃.',
        marks: 1,
        ph: 'Magnesium carbonate',
        widget: 'radio_select',
        widgetOptions: ['Magnesium carbonate', 'Magnesium hydroxide', 'Magnesium sulfate', 'Magnesium nitrate'],
      },
      {
        label: 'd',
        text: '**Describe** what happens to magnesium in the reaction Mg + CO₂ + H₂O → MgCO₃(s) + H₂(g) in terms of redox chemistry.',
        marks: 3,
        ph: 'Oxidation number increases from 0 to +2; magnesium is oxidised (loses electrons)',
      },
      {
        label: 'e',
        text: 'Magnesium can also be burned as a fuel. **Select** numbers to balance the equation: ?Mg + ?O₂ → ?MgO',
        marks: 2,
        ph: '2Mg + O₂ → 2MgO',
        widget: 'inline_dropdown_select',
        widgetItems: ['Mg', 'O₂', 'MgO'],
        widgetOptions: ['1', '2', '3', '4'],
      },
      {
        label: 'f',
        text: '**Outline** why the combustion of magnesium is better for the environment than the combustion of petrol.',
        marks: 2,
        ph: 'Only product is MgO (solid) / no CO₂, NOx, or SOx released',
      },
    ],
  },

  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Renewable energy systems — evaluation essay',
    marks: 15,
    stem: 'Scientists are developing renewable energy systems to reduce CO₂ emissions from fossil fuels. Three possible systems are: System 1 — Solar energy (photovoltaic panels convert sunlight to electricity; no CO₂ in operation but energy intensive to manufacture; reduces 50 kg CO₂ per year costs USD 8); System 2 — Wind energy (turbines convert kinetic energy of wind to electricity; no CO₂ in operation; intermittent power; reduces 50 kg CO₂ per year costs USD 5); System 3 — Tidal energy (barrages or underwater turbines harness predictable tidal flows; no CO₂ in operation; disrupts marine habitats; reduces 50 kg CO₂ per year costs USD 15).',
    figImages: ['page-29.png', 'page-30.png', 'page-31.png', 'page-32.png'],
    tasks: [
      {
        label: '',
        text: 'Using the information in the media and your wider MYP studies, **discuss** and **evaluate** two of the three renewable energy systems. In your answer you should include: the need for low-carbon energy alternatives; the economic impact of each system; the social impact of each system; scientific advantages and disadvantages of each system; a concluding appraisal recommending which is the best system.',
        marks: 15,
        ph: 'Crit D essay: discuss need for clean energy, evaluate 2 systems on economic/social/scientific grounds',
      },
    ],
  },
]
