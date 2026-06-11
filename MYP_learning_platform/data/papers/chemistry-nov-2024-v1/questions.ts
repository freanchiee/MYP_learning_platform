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
  id: 'chemistry-nov-2024-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Ancient metallurgy / distillation / propan-1-ol / iron chloride (9m, Crit A)
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table, Organic Chemistry & States of Matter',
    marks: 9,
    stem: 'Ancient civilisations used metals such as silver and copper in coins and jewellery. Metallurgists developed acid mixtures to dissolve and purify metals. One such acid mixture was called "spirit of salt" (hydrochloric acid), which was used to remove copper impurities from silver. Hydrochloric acid is still used today in the industrial purification of silver (Ag).',
    figImages: ['chemistry-nov-2024/page-01.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the region of the periodic table where silver can be found.',
        marks: 1,
        ph: 'Transition metals',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Noble gases', 'Halogens'],
      },
      {
        label: 'b',
        text: 'Metallurgists were interested in separating liquid mixtures. A technique used is distillation. **Select** the property that allows liquids to be separated by distillation.',
        marks: 1,
        ph: 'Different boiling points',
        widget: 'radio_select',
        widgetOptions: ['Different densities', 'Different boiling points', 'Different solubilities', 'Different melting points'],
      },
      {
        label: 'c',
        text: '**Describe** the state changes that take place from X to Y and from Y to Z on the distillation apparatus image. Use particle theory in your answer.',
        marks: 4,
        ph: 'X to Y: liquid evaporates (particles gain energy, escape as gas); Y to Z: gas condenses (particles lose energy, return to liquid)',
        figImages: ['chemistry-nov-2024/page-01.png'],
      },
      {
        label: 'd',
        text: 'Distillation of fermented grain produces propan-1-ol. **Select** the diagram showing the structure of propan-1-ol.',
        marks: 1,
        ph: 'B — CH₃CH₂CH₂OH: three carbons with Hs, ending in OH',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['chemistry-nov-2024/page-02.png'],
      },
      {
        label: 'e',
        text: 'Hydrochloric acid reacts with iron to form iron(II) chloride (FeCl₂). **Calculate** the formula mass for FeCl₂.',
        marks: 2,
        ph: 'Mr = 56+2(35.5) = 127 g/mol',
        widget: 'fill_blank',
      },
    ],
  },

  // ─── Q2: CO₂ / pressurised sparkling water / methane synthesis (11m, Crit A)
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Covalent Bonding, Moles & Rates of Reaction',
    marks: 11,
    stem: 'Carbon dioxide (CO₂) has many uses, for example in carbonated water machines, in the food industry to quick-freeze products, and as a fire suppressant. CO₂ has a boiling point of −78 °C. Solid CO₂ is known as dry ice.',
    figImages: ['chemistry-nov-2024/page-03.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of bonding in a molecule of carbon dioxide.',
        marks: 1,
        ph: 'Covalent bonding',
        widget: 'radio_select',
        widgetOptions: ['Ionic bonding', 'Covalent bonding', 'Metallic bonding', 'Hydrogen bonding'],
      },
      {
        label: 'b',
        text: 'CO₂ is dissolved in sparkling water under high pressure. **Explain** why bubbles appear when a sparkling water bottle is opened. In your answer include why the bottle makes a hissing sound.',
        marks: 3,
        ph: 'Pressure drops on opening; CO₂ comes out of solution; bubbles of CO₂ form; escaping gas makes hissing sound',
        figImages: ['chemistry-nov-2024/page-04.png'],
      },
      {
        label: 'c',
        text: 'Scientists have developed a way to convert CO₂ into methane (CH₄) as a carbon-neutral fuel:\n\nCO₂(g) + 4H₂(g) → CH₄(g) + 2H₂O(g)\n\n**Calculate** the mass of methane (CH₄) that can be produced from 528 g of CO₂. Give your answer in grams in standard form.',
        marks: 4,
        ph: 'n(CO₂)=528/44=12mol; n(CH₄)=12mol; m=12×16=192g=1.92×10² g',
        widget: 'fill_blank',
        figImages: ['chemistry-nov-2024/page-04.png'],
      },
      {
        label: 'd',
        text: 'The rate of methane production from CO₂ and H₂ is low. The rate can be increased by using a nickel catalyst. **Explain** how the nickel catalyst works to increase the rate of methane production.',
        marks: 3,
        ph: 'Catalyst provides alternative reaction pathway with lower activation energy; more particles have sufficient energy; more successful collisions per second; rate increases',
      },
    ],
  },

  // ─── Q3: Noble gases / food packaging / neon lights (8m, Crit A) ─────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Noble Gases',
    marks: 8,
    stem: 'Some gases have very low reactivity with other chemicals. These gases are used in industry and in the preservation of food. Krypton (Kr) and nitrogen (N₂) can be used in food packaging to preserve freshness.',
    figImages: ['chemistry-nov-2024/page-05.png'],
    tasks: [
      {
        label: 'a',
        text: 'Avocado slices turn brown when exposed to air. **Select** which gas in air causes avocados to turn brown when sliced.',
        marks: 1,
        ph: 'Oxygen',
        widget: 'radio_select',
        widgetOptions: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Krypton'],
        figImages: ['chemistry-nov-2024/page-05.png'],
      },
      {
        label: 'b',
        text: 'Nitrogen and krypton can be added to food packets to remove air. **State** the correct group for nitrogen and the correct period for krypton.',
        marks: 2,
        ph: 'Nitrogen group = 15; Krypton period = 4',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Explain** why krypton does not form compounds. Use the electronic configuration of krypton in your answer.',
        marks: 3,
        ph: 'Krypton electron config = 2.8.18.8; full outer shell; no tendency to gain/lose/share electrons; does not bond',
      },
      {
        label: 'd',
        text: 'Krypton is used in some specialist laser systems. Over time, krypton can leak from the laser tube and is replaced by air. The tube can overheat and rupture if krypton is replaced by air. **Outline** why the laser tube might rupture if krypton is replaced by air.',
        marks: 2,
        ph: 'Oxygen in air reacts with hot metal inside laser; exothermic reaction; rapid gas expansion; rupture/explosion',
        figImages: ['chemistry-nov-2024/page-06.png'],
      },
    ],
  },

  // ─── Q4: Fluoride / dental fillings / mouthwash investigation (16m, Crit B)
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation & Ionic Compounds',
    marks: 16,
    stem: 'Various materials are used to repair damaged teeth. The table below shows four materials used for filling holes in teeth. The natural material of teeth is protected by fluoride ions (F⁻) which are present in toothpaste and fluoridated mouthwash. Regions with naturally high fluoride levels in water have been found to have lower rates of tooth decay.',
    figImages: ['chemistry-nov-2024/page-06.png', 'chemistry-nov-2024/page-07.png'],
    tasks: [
      {
        label: 'a',
        text: 'A student wanted to investigate whether F⁻ ions protect filling materials in the same way as natural teeth. **State** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'What is the effect of type of dental filling material on the concentration of F⁻ ions after 10 minutes?',
      },
      {
        label: 'b',
        text: 'A conductivity meter can be used to measure the change in concentration of F⁻ ions. The student uses a solution with a known concentration of F⁻ ions with each filling material and determines how the concentration of F⁻ ions changes after 10 minutes. **Identify** the independent variable, the dependent variable and two control variables in this investigation.\n\nIndependent variable: ___\nDependent variable: ___\nControl variable 1: ___\nControl variable 2: ___',
        marks: 4,
        ph: 'IV=type of filling material; DV=conductivity/concentration of F⁻ ions; CV=time (10 min); CV=initial concentration of F⁻ solution',
        widget: 'fill_blank',
        figImages: ['chemistry-nov-2024/page-07.png'],
      },
      {
        label: 'c',
        text: 'A second student repeated the investigation with a simpler set up using only one conductivity meter. **Comment** on the validity of the second student\'s method compared with that of the first student. **Justify** your answer.',
        marks: 2,
        ph: 'Less valid; cannot measure initial conductivity separately; cannot determine change in F⁻ concentration without baseline',
        figImages: ['chemistry-nov-2024/page-08.png'],
      },
      {
        label: 'd',
        text: 'Fluoride mouthwash might be used after brushing with toothpaste to provide additional protection. **Formulate** a testable hypothesis to determine if using fluoride mouthwash and toothpaste is more effective than toothpaste alone. If… Then… Because…',
        marks: 3,
        ph: 'If mouthwash is used after toothpaste, then higher F⁻ concentration in mouth, because mouthwash delivers additional fluoride ions beyond toothpaste',
        figImages: ['chemistry-nov-2024/page-08.png'],
      },
      {
        label: 'e',
        text: 'The students tested different brands of fluoride mouthwash on one type of tooth filling material. **Identify** the anomalous result. **Suggest** an experimental reason that may have produced this result.',
        marks: 2,
        ph: 'Identify trial furthest from others for same brand; suggest contamination, measurement error, or temperature variation',
        figImages: ['chemistry-nov-2024/page-09.png'],
      },
      {
        label: 'f',
        text: '**Calculate** the average conductivity after 10 minutes for Brand D. Give your answer to an appropriate number of significant figures and include the unit.',
        marks: 2,
        ph: 'Average = sum of trials / 3 (excluding anomaly if identified); include mg dm⁻³',
        widget: 'fill_blank',
        figImages: ['chemistry-nov-2024/page-09.png'],
      },
      {
        label: 'g',
        text: '**Use** the data in part (f) to justify the best choice of mouthwash.',
        marks: 1,
        ph: 'Brand with highest conductivity = most F⁻ ions = best protection',
        figImages: ['chemistry-nov-2024/page-09.png'],
      },
      {
        label: 'h',
        text: 'Scientists suggest that 50% of people will suffer unwanted effects with F⁻ intake above 5 mg kg⁻¹ of body weight. The recommended mass of toothpaste increases with age. **Suggest** why the recommended mass of toothpaste increases as children grow.',
        marks: 1,
        ph: 'More/larger teeth; greater surface area; higher body mass allows proportionally more fluoride',
        figImages: ['chemistry-nov-2024/page-10.png'],
      },
    ],
  },

  // ─── Q5: Acid rain / concrete / Crit B design (20m, Crit B) ──────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Chemical Reactions & Scientific Investigation Design',
    marks: 20,
    stem: 'Acid rain corrodes building materials and structures, causing costly damage. Engineers are designing new construction materials that are more resistant to acid rain. A student investigated the rate at which different building materials react with hydrochloric acid to model the effects of acid rain.',
    figImages: ['chemistry-nov-2024/page-10.png', 'chemistry-nov-2024/page-11.png'],
    tasks: [
      {
        label: 'a',
        text: 'The student placed a piece of limestone in hydrochloric acid. An image of the results is shown. **Select** how you can tell a chemical reaction has taken place in the image.',
        marks: 1,
        ph: 'Change in colour',
        widget: 'radio_select',
        widgetOptions: ['Change in colour', 'Change in size', 'Change in temperature', 'Change in mass'],
        figImages: ['chemistry-nov-2024/page-11.png'],
      },
      {
        label: 'b',
        text: 'You are given a (10 cm × 10 cm) sample of each type of building material (limestone, sandstone, marble, concrete, brick) to model its rate of reaction with acid rain using 1 mol dm⁻³ HCl. **Design** an experiment that will determine the rate of reaction of HCl with each type of building material. In your answer you should include:\n• the independent variable, the dependent variable and two additional control variables\n• a list of equipment you will use\n• details of your method\n• details of the data you will collect\n• how you will ensure that your method is safe.',
        marks: 18,
        ph: 'IV=type of building material; DV=mass lost/gas volume/rate; CVs=volume HCl + temp; equipment; method with repeats; corrosive HCl safety',
        figImages: ['chemistry-nov-2024/page-12.png'],
      },
      {
        label: 'c',
        text: 'Climate conditions differ around the world. Building materials used in one region may not be suitable for another. **Suggest** a different independent variable linked to climate that could be investigated.',
        marks: 1,
        ph: 'Temperature of acid / concentration of acid / UV exposure',
      },
    ],
  },

  // ─── Q6: Electroplated pans / NaCl corrosion data (13m, Crit C) ──────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Electrochemistry & Data Analysis',
    marks: 13,
    stem: 'Cooking pans can be made from inexpensive metals and then coated with a non-stick material through electroplating. A student modelled the corrosion of electroplated iron pans by cooking with salt solutions. They used iron nails electroplated with nickel to model the pan, and measured the mass lost by the nail after 5 days in different concentrations of NaCl solution.',
    figImages: ['chemistry-nov-2024/page-13.png'],
    tasks: [
      {
        label: 'a',
        text: '**Plot** a graph of concentration and average mass lost. You should include a line of best fit.\n\nData:\n| Concentration / mol dm⁻³ | Average mass lost / mg |\n|---|---|\n| 0.0 | 8 |\n| 0.1 | 14 |\n| 0.3 | 36 |\n| 0.5 | 51 |\n| 0.8 | 75 |',
        marks: 6,
        ph: 'x=NaCl concentration/mol dm⁻³; y=mass lost/mg; 5 points; line of best fit; axes labelled with units',
        figImages: ['chemistry-nov-2024/page-13.png'],
      },
      {
        label: 'b',
        text: '**Describe** the trend shown in the data in part (a). **Suggest** the purpose of the trial at 0.00 mol dm⁻³ NaCl.',
        marks: 3,
        ph: 'As NaCl concentration increases, mass lost increases (positive correlation). 0.00 = control to show corrosion without NaCl.',
      },
      {
        label: 'c',
        text: 'Before their investigation, the student wrote the following hypothesis:\n"If the NaCl concentration increases, then less mass will be lost from the nail after 5 days because NaCl molecules coat the nail and prevent corrosion."\n\n**Evaluate** the validity of this hypothesis using the data in part (a).',
        marks: 3,
        ph: 'Hypothesis invalid; data shows MORE mass lost as concentration increases; NaCl accelerates corrosion, not prevents it',
      },
      {
        label: 'd',
        text: 'The student used iron nails plated with nickel to model electroplated iron pans. **Suggest** why nails were used to model the pans.',
        marks: 1,
        ph: 'Standardised shape/size; same base metal (iron); easier to weigh; cheaper',
      },
    ],
  },

  // ─── Q7: Nuclear fission / radioactive waste transport (10m, Crit D) ──────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Nuclear Chemistry, Energy & Environmental Impact',
    marks: 10,
    stem: 'The burning of fossil fuels for energy production is a major contributor to climate change. As an alternative, nuclear fission is used in nuclear power stations to generate large amounts of electricity. However, nuclear fission produces radioactive waste that requires very careful management and disposal.',
    figImages: ['chemistry-nov-2024/page-14.png'],
    tasks: [
      {
        label: 'a',
        text: 'Nuclear power stations use uranium as a fuel. Solar power uses sunlight to generate electricity. In addition to being renewable and non-renewable, **state** one other difference between solar energy and nuclear energy as power sources.',
        marks: 1,
        ph: 'Solar produces no waste/pollution; nuclear produces radioactive waste. OR solar is free/inexhaustible; nuclear fuel will run out.',
      },
      {
        label: 'b',
        text: 'In nuclear fission, a neutron collides with a uranium-235 nucleus. The nucleus becomes unstable and splits, releasing energy and additional neutrons. These neutrons can cause further fission reactions. **Describe** the chain reaction of nuclear fission. In your answer you should include:\n• what causes the nucleus to become unstable\n• what is released when the nucleus splits\n• how a chain reaction occurs.',
        marks: 3,
        ph: 'Neutron hits nucleus → unstable → splits into 2 smaller nuclei + 2-3 neutrons + energy → neutrons hit more nuclei → chain reaction',
        figImages: ['chemistry-nov-2024/page-15.png'],
      },
      {
        label: 'c',
        text: 'It is necessary to transport radioactive waste from a nuclear reactor to a storage facility. There are several methods of transport: road, trains, rivers and air. **Discuss** the considerations when choosing a method of transport. In your answer you should include:\n• what risks are involved when transporting radioactive waste\n• what precautions should be taken when using each method of transport\n• a conclusion with justification of which is the safest method of transport.',
        marks: 6,
        ph: 'Risks: radiation leak on accident. Precautions per method. Conclusion: trains with justification (controlled routes, less frequent accidents).',
        figImages: ['chemistry-nov-2024/page-16.png'],
      },
    ],
  },

  // ─── Q8: Radioactive waste disposal — Crit D essay (13m, Crit D) ──────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Nuclear Waste, Ethics & Societal Impact',
    marks: 13,
    stem: 'The radioactive by-products of nuclear fission include atoms of caesium-137 and strontium-90, both of which emit harmful radiation for many decades. Various methods have been proposed for safe long-term disposal.\n\nIn ocean disposal, sealed radioactive waste containers are transported by ship and dropped into deep ocean trenches. This method was used extensively before being banned internationally in 1993. Critics argued it risked contaminating marine food chains and causing long-term ocean pollution.\n\nDeep geological disposal involves burying waste containers 200–1000 metres below ground in stable rock formations such as granite. The sites are engineered to contain radioactivity for over 10,000 years. This is currently the favoured method in most countries, though construction costs are extremely high.',
    figImages: ['chemistry-nov-2024/page-17.png'],
    tasks: [
      {
        label: '',
        text: '**Using** the information above, **discuss and evaluate** one of the two methods for the disposal of radioactive waste. In your answer you should include:\n• the effects of either ocean disposal or deep geological disposal on living things\n• the economic impact\n• a justification of your opinion on which is the best method for disposing of radioactive waste.',
        marks: 13,
        ph: 'Ocean: food chain contamination, globally spread; cheap but banned. Geological: very expensive, long-term safe; no ecosystem impact if contained. Justified: geological better despite cost because safety is paramount.',
      },
    ],
  },
]
