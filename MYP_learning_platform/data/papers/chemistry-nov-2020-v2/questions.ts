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
  id: 'chemistry-nov-2020-v2',
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
    topic: 'Iceland geothermal springs and SiO₂ in rock deposits',
    marks: 7,
    stem: "Iceland sits on the Mid-Atlantic Ridge and has abundant geothermal activity. Hot spring water deposits minerals as it cools and evaporates. Geologists classify igneous rocks by their SiO₂ (silicon dioxide) content: Basaltic 45.6–55.2%, Andesitic 52.0–63.7%, Rhyolitic 68.3–77.4%. A 2.00 g sample from a rhyolitic formation near Reykjavik contained SiO₂ at 72.1%. A 2.00 g sample from a nearby andesitic dyke contained 1.14 g of SiO₂.",
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the physical process that takes place when water vapour from a hot spring cools and becomes liquid water.',
        marks: 1,
        ph: 'Gas to liquid = condensation',
        widget: 'radio_select',
        widgetOptions: ['Solidification', 'Condensation', 'Evaporation', 'Sublimation'],
      },
      {
        label: 'b',
        text: 'Hot spring deposits also contain metal oxides. **Determine** the missing information and complete the table. (Oxide names and formulae: potassium oxide / K₂O; aluminium oxide / Al₂O₃)',
        marks: 2,
        ph: 'Fill in potassium oxide and Al₂O₃',
        widget: 'fill_blank',
        widgetItems: ['Oxide name for K₂O', 'Formula for aluminium oxide'],
      },
      {
        label: 'c',
        text: '**Select** the type of rock in the Reykjavik formation (72.1% SiO₂).',
        marks: 1,
        ph: 'Rhyolitic range is 68.3–77.4%',
        widget: 'radio_select',
        widgetOptions: ['Basaltic', 'Andesitic', 'Rhyolitic'],
      },
      {
        label: 'd',
        text: '**Calculate** the percentage of SiO₂ in the andesitic dyke sample. (1.14 g SiO₂ in a 2.00 g sample)',
        marks: 2,
        ph: '1.14/2.00 × 100 = 57.0%',
      },
      {
        label: 'e',
        text: 'Using your answer from part (d), **select** the type of rock from the andesitic dyke.',
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
    topic: 'Karst cave dissolved gases and noble gas isotopes',
    marks: 9,
    stem: 'Water flowing through limestone karst caves dissolves gases including hydrogen sulfide (H₂S), carbon dioxide (CO₂), and hydrogen chloride (HCl). Springs emerging from karst systems often have very low pH. Xenon, a noble gas, is also found dissolved in some deep karst groundwater and is used by scientists as a tracer to study water movement.',
    figImages: ['page-03.png', 'page-04.png'],
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why springs emerging from karst cave systems typically have very low pH values.',
        marks: 2,
        ph: 'Gases dissolve in water to form acids',
      },
      {
        label: 'b',
        text: '**Select** the Lewis (dot and cross) structure of HCl.',
        marks: 1,
        ph: 'First option shows correct lone pairs on Cl',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['page-03.png'],
      },
      {
        label: 'c',
        text: 'Use the periodic table to **state** the period of xenon.',
        marks: 1,
        ph: 'Period 5',
      },
      {
        label: 'd',
        text: 'Xenon exists as a mixture of isotopes. **Determine** the number of protons, neutrons, and electrons in an atom of ¹³¹Xe.',
        marks: 3,
        ph: 'Protons=54, Neutrons=77, Electrons=54',
      },
      {
        label: 'e',
        text: '**Draw** the electron configuration of sulfur, showing electrons in all three shells.',
        marks: 2,
        ph: '2 inner, 8 second shell, 6 outer shell',
      },
    ],
  },

  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Biofuel monomers and industrial processing',
    marks: 10,
    stem: 'Biofuels can be made from plant-derived alkenes. Two key monomers used in biopolymer production are molecule A (pent-1-ene, C₅H₁₀) and molecule B (hex-1-ene, C₆H₁₂). These are obtained by cracking longer-chain hydrocarbons from plant-based oils. Factories producing biofuel polymers must manage waste gases to minimise environmental impact. Non-recyclable polymer waste can be incinerated using a controlled thermovaporization process to generate electricity.',
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
        ph: 'A = pent-1-ene, B = hex-1-ene',
        widget: 'fill_blank',
        widgetItems: ['Name of A', 'Name of B'],
      },
      {
        label: 'c',
        text: 'Molecules A and B are obtained by cracking pentadecane, C₁₅H₃₂: C₁₅H₃₂ → C₅H₁₀ + C₆H₁₂ + X. **Deduce** the molecular formula of the missing product X.',
        marks: 1,
        ph: 'Balance carbons and hydrogens',
        figImages: ['page-08.png'],
      },
      {
        label: 'd',
        text: 'During thermovaporization of biopolymer waste, acidic gases are produced. **State** why calcium hydroxide is added to the gases produced during incineration.',
        marks: 1,
        ph: 'Neutralises acidic gases',
      },
      {
        label: 'e',
        text: '**State** the physical change taking place when liquid hex-1-ene is heated and becomes a gas in the factory production process.',
        marks: 1,
        ph: 'Boiling / liquid turns to gas',
      },
      {
        label: 'f',
        text: 'In most countries, incineration of biopolymer waste is subject to strict regulations. **Suggest** one requirement that should be included in order to reduce the environmental impact of the process.',
        marks: 1,
        ph: 'Emissions must be filtered / waste must not contain hazardous materials',
      },
      {
        label: 'g',
        text: 'There has been a move from non-biodegradable to biodegradable biopolymers. The rate of biodegradation was tested for three biopolymer samples A, B, and C with different particle sizes. **List** the order of the three samples in order of increasing particle size. **Justify** your answer.',
        marks: 3,
        ph: 'B < C < A; smaller particles = greater surface area = faster reaction',
        figImages: ['page-11.png'],
      },
    ],
  },

  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Deep-sea bioluminescent bacteria investigation',
    marks: 17,
    stem: 'Deep-sea bacteria produce light through a bioluminescent reaction. A substrate molecule (bacterial luciferin) is oxidised in the presence of bacterial luciferase — an enzyme that acts as a catalyst. A student investigated the effect of temperature on how long a bacterial culture glows by placing cultures in water baths at different temperatures.',
    figImages: ['page-13.png', 'page-14.png', 'page-15.png', 'page-17.png'],
    tasks: [
      {
        label: 'a',
        text: '**Outline** the function of bacterial luciferase enzyme as a catalyst in the bioluminescent reaction.',
        marks: 2,
        ph: 'Speeds up reaction / lowers activation energy without being used up',
      },
      {
        label: 'b',
        text: '**Select** the name of the organic functional group highlighted in the bacterial luciferin molecule.',
        marks: 1,
        ph: 'Ester linkage (C=O with O–C)',
        widget: 'radio_select',
        widgetOptions: ['Alkene', 'Ester', 'Alcohol', 'Carboxylic acid'],
        figImages: ['page-13.png'],
      },
      {
        label: 'c',
        text: 'The student placed cultures in water baths at different temperatures. **Measure** the missing temperature from the thermometer shown (temperatures used: 30°C, 40°C, ?, 70°C).',
        marks: 1,
        ph: '55°C',
        figImages: ['page-14.png'],
      },
      {
        label: 'd',
        text: '**Identify** the independent variable (IV), dependent variable (DV), and two controlled variables (CVs) for the bioluminescence investigation.',
        marks: 4,
        ph: 'IV: temperature; DV: time light lasts; CVs: species of bacteria, volume of culture',
      },
      {
        label: 'e',
        text: '**Formulate** a hypothesis for this investigation using an If/Then/Because structure.',
        marks: 3,
        ph: 'If temperature increases, then glow duration decreases, because reaction rate increases',
      },
      {
        label: 'f',
        text: 'The student plotted a graph of average glow duration (min) vs temperature (°C). **Predict** the time taken for the bacterial glow to stop at 25°C.',
        marks: 2,
        ph: '220 ± 20 minutes',
        figImages: ['page-17.png'],
      },
      {
        label: 'g',
        text: 'A bacterial culture contains 7.56 × 10⁵ molecules of luciferin substrate. The time for the light to stop at 20°C is 180 minutes. **Calculate** the rate at which the luciferin molecules are used up at this temperature. You should include appropriate units in your answer.',
        marks: 4,
        ph: 'rate = 7.56×10⁵ ÷ 180 = 4200 molecules min⁻¹',
      },
    ],
  },

  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Mineral sunscreen and UV protection investigation',
    marks: 20,
    stem: 'Mineral sunscreens contain physical UV blockers such as zinc oxide and titanium dioxide. These reflect and scatter UV radiation before it can penetrate the skin. A student investigated how many UV-reactive beads changed colour when covered by three different mineral sunscreens: UltraGuard (8% beads changed), SunSmart (24% changed), UrbanScreen (45% changed).',
    figImages: ['page-19.png', 'page-20.png', 'page-21.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** which is the most effective mineral sunscreen.',
        marks: 1,
        ph: 'UltraGuard (fewest beads changed colour = best UV block)',
        figImages: ['page-20.png'],
      },
      {
        label: 'b',
        text: 'The experimental method uses a UV fluorescent lamp as a substitute for natural sunlight. **Outline** why this UV lamp is not a good model for natural sunlight.',
        marks: 2,
        ph: 'Sunlight has all wavelengths; UV lamp only emits a narrow UV band',
        figImages: ['page-21.png'],
      },
      {
        label: 'c',
        text: 'Using the equipment below, **design** an investigation to determine which of the individual chemical compounds present in SunSmart sunscreen provides the best protection from the sun. In your answer you should include: an identification of the variables, a list of the additional equipment you will use, details of your method for manipulating the variables, details of the data you will collect, and how you will ensure your method is safe.',
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
    topic: 'UV absorbance analysis — octinoxate experiment',
    marks: 10,
    stem: 'SunSmart was one of the sunscreens investigated in question 5. SunSmart contains: Zinc oxide, Titanium dioxide, Iron oxide, Silica. The research question was: "Is zinc oxide the best blocker of UV light?" Chemists are also analysing a new compound, octinoxate, to see if it can be used to block UV light in sunscreens. They make different concentrations of octinoxate and measure absorbance (AU). Concentrations tested (μmol dm⁻³): 0, 8, 16, 24, 32, 40, 50.',
    figImages: ['page-22.png', 'page-23.png', 'page-24.png'],
    tasks: [
      {
        label: 'a',
        text: '**Outline** how you will use the data from the investigation in question 5 to decide if the research question "Is zinc oxide the best blocker of UV light?" is supported.',
        marks: 2,
        ph: 'Compare beads changed per ingredient; if ZnO has fewest changed beads, RQ is supported',
      },
      {
        label: 'b',
        text: '**Suggest** an extension that could be made to the investigation into the effectiveness of the mineral sunscreen ingredients.',
        marks: 1,
        ph: 'Use different concentrations / combinations / expose to real sunlight',
      },
      {
        label: 'c',
        text: 'The results show absorbance increasing with concentration (data: 0→0.00, 8→0.16, 16→0.34, 24→0.50, 32→0.69, 40→0.62 anomalous, 50→0.82 AU). **Plot** a graph of absorbance versus concentration of octinoxate. Label the axes, give your graph a suitable title, and add a line of best fit.',
        marks: 6,
        ph: 'Title links absorbance and concentration; LOBF from (0,0) through all except 40 μmol dm⁻³',
        figImages: ['page-23.png', 'page-24.png'],
      },
      {
        label: 'd',
        text: '**Comment** on the reliability of the data.',
        marks: 1,
        ph: 'Anomalous point at 40 μmol dm⁻³ or only one trial / no averages',
      },
    ],
  },

  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Climate change, deforestation, and Zn-based CO₂ capture',
    marks: 12,
    stem: "Rising atmospheric CO₂ is the principal driver of climate change. In the natural carbon cycle, forests remove CO₂ by photosynthesis. Widespread deforestation has reduced this natural carbon sink. Scientists are investigating reactions of zinc (Zn) with CO₂ and H₂O to capture carbon dioxide as a solid carbonate mineral: Zn + CO₂ + H₂O → ZnCO₃(s) + H₂(g). The H₂ produced can also be used as a clean fuel.",
    figImages: ['page-26.png', 'page-27.png', 'page-28.png'],
    tasks: [
      {
        label: 'a',
        text: 'Using the photosynthesis equation and your wider MYP studies, **suggest** an impact on the community due to deforestation. **Justify** your answer.',
        marks: 2,
        ph: 'Less food/oxygen synthesised / more CO₂; justify: fewer plants = less photosynthesis',
      },
      {
        label: 'b',
        text: 'One way to reduce CO₂ is to react it with zinc to form a solid mineral. **Select** the state symbols for the reactants in the equation if the reaction was at 25°C: Zn(?) + CO₂(?) + H₂O(?) → ZnCO₃(s) + H₂(g)',
        marks: 2,
        ph: 'Zn(s), CO₂(g), H₂O(l) at 25°C',
        widget: 'inline_dropdown_select',
        widgetItems: ['Zn', 'CO₂', 'H₂O'],
        widgetOptions: ['(s)', '(l)', '(g)', '(aq)'],
      },
      {
        label: 'c',
        text: '**Select** the name of ZnCO₃.',
        marks: 1,
        ph: 'Zinc carbonate',
        widget: 'radio_select',
        widgetOptions: ['Zinc carbonate', 'Zinc hydroxide', 'Zinc sulfate', 'Zinc chloride'],
      },
      {
        label: 'd',
        text: '**Describe** what happens to zinc in the reaction Zn + CO₂ + H₂O → ZnCO₃(s) + H₂(g) in terms of redox chemistry.',
        marks: 3,
        ph: 'Oxidation number increases from 0 to +2; zinc is oxidised (loses electrons)',
      },
      {
        label: 'e',
        text: 'Hydrogen peroxide can be decomposed using a catalyst to release oxygen. **Select** numbers to balance the equation: ?H₂O₂ → ?H₂O + ?O₂',
        marks: 2,
        ph: '2H₂O₂ → 2H₂O + O₂',
        widget: 'inline_dropdown_select',
        widgetItems: ['H₂O₂', 'H₂O', 'O₂'],
        widgetOptions: ['1', '2', '3', '4'],
      },
      {
        label: 'f',
        text: '**Outline** why the combustion of hydrogen (produced in the Zn reaction) is better for the environment than the combustion of petrol.',
        marks: 2,
        ph: 'Only product is water / no CO₂, NOx, or SOx; product is non-toxic',
      },
    ],
  },

  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Ocean acidification solutions — evaluation essay',
    marks: 15,
    stem: "Ocean acidification occurs when the ocean absorbs atmospheric CO₂, forming carbonic acid. Three possible systems to address ocean acidification are: System 1 — Ocean liming (adding calcium oxide (CaO) to the ocean to neutralise carbonic acid; CaO reacts with CO₂ + H₂O; removes 50 kg CO₂ at a cost of USD 18); System 2 — Seagrass restoration (planting seagrass meadows to absorb dissolved CO₂ by photosynthesis; slow-growing; removes 50 kg CO₂ at a cost of USD 7); System 3 — Shipping emission controls (IMO regulations requiring low-sulfur fuels on ships reduce CO₂ and SO₂; costly for shipping companies; removes 50 kg CO₂ equivalent at a cost of USD 12).",
    figImages: ['page-29.png', 'page-30.png', 'page-31.png', 'page-32.png'],
    tasks: [
      {
        label: '',
        text: 'Using the information in the media and your wider MYP studies, **discuss** and **evaluate** two of the three systems. In your answer you should include: the need to address ocean acidification; the economic impact of each system; the social impact of each system; scientific advantages and disadvantages of each system; a concluding appraisal recommending which is the best system.',
        marks: 15,
        ph: 'Crit D essay: discuss need to address ocean acidification, evaluate 2 systems on economic/social/scientific grounds',
      },
    ],
  },
]
