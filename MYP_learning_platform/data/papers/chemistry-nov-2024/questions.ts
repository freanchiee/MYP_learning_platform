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
  id: 'chemistry-nov-2024',
  subject: 'Chemistry',
  session: 'November',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Alchemy / distillation / ethanol / sulfuric acid (9m, Crit A) ────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table, Organic Chemistry & States of Matter',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 9,
    stem: 'One of the main aims of alchemists was to transform metals such as lead and iron into gold. To help with this, alchemists produced acids to react with metals. One such mixture was called aqua regia, a combination of hydrochloric and nitric acid. Aqua regia is still used today in the purification of gold.',
    figImages: ['/images/papers/chemistry-nov-2024/page-01.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the region of the periodic table where gold can be found.',
        marks: 1,
        ph: 'Transition metals',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Noble gases', 'Halogens'],
      },
      {
        label: 'b',
        text: 'Alchemists were interested in how substances could be separated. A technique developed by alchemists is distillation. **Select** the property that allows liquids to be separated by distillation.',
        marks: 1,
        ph: 'Different boiling points',
        widget: 'radio_select',
        widgetOptions: ['Different densities', 'Different boiling points', 'Different solubilities', 'Different melting points'],
      },
      {
        label: 'c',
        text: '**Describe** the state changes that take place from X to Y and from Y to Z on the distillation image. Use particle theory in your answer.',
        marks: 4,
        ph: 'X to Y: liquid evaporates (particles gain energy, escape as gas); Y to Z: gas condenses (particles lose energy, return to liquid)',
        figImages: ['/images/papers/chemistry-nov-2024/page-01.png'],
      },
      {
        label: 'd',
        text: 'When wine is distilled, a pure alcohol called ethanol is obtained. **Select** the diagram showing the structure of ethanol.',
        marks: 1,
        ph: 'B — CH₃CH₂OH: two carbons each with Hs, ending in OH',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['/images/papers/chemistry-nov-2024/page-02.png'],
      },
      {
        label: 'e',
        text: 'Another acid used by alchemists was sulfuric acid. Sulfuric acid (H₂SO₄) was produced through a number of chemical reactions starting with iron vitriol, now known as iron sulfate (FeSO₄). **Calculate** the formula mass for FeSO₄.',
        marks: 2,
        ph: 'Mr = 56+32+4(16) = 152 g/mol',
        widget: 'fill_blank',
      },
    ],
  },

  // ─── Q2: CO₂ / dry ice / champagne / methanol synthesis (11m, Crit A) ─────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Covalent Bonding, Moles & Rates of Reaction',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 11,
    stem: 'Carbon dioxide (CO₂) has many uses, for example to remove caffeine from coffee, in smoke machines, as a component in fire extinguishers, to keep food cold and to make carbonated drinks. CO₂ has a boiling point of −78 °C. Solid CO₂ is known as dry ice.',
    figImages: ['/images/papers/chemistry-nov-2024/page-03.png'],
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
        text: 'CO₂ is soluble in water and acts as a preservative. Champagne contains CO₂ at high pressure. **Explain** why the cork will fly off when a bottle of champagne is opened. In your answer include why champagne bubbles are seen.',
        marks: 3,
        ph: 'Pressure drops on opening; CO₂ comes out of solution; bubbles of CO₂ gas form; expanding gas pushes cork out',
        figImages: ['/images/papers/chemistry-nov-2024/page-04.png'],
      },
      {
        label: 'c',
        text: 'CO₂ in the atmosphere is increasing. One possible solution to reduce atmospheric CO₂ is to produce carbon-neutral methanol using the following reaction:\n\nCO₂(g) + 3H₂(g) → CH₃OH(g) + H₂O(g)\n\n**Calculate** the mass of methanol (CH₃OH) that can be produced from 446 g of CO₂. Give your answer in grams in standard form.',
        marks: 4,
        ph: 'n(CO₂)=446/44=10.14mol; n(CH₃OH)=10.14mol; m=10.14×32=324g=3.24×10² g',
        widget: 'fill_blank',
        figImages: ['/images/papers/chemistry-nov-2024/page-04.png'],
      },
      {
        label: 'd',
        text: 'The rate of production of methanol from hydrogen and carbon dioxide is low. The rate can be increased by using a catalyst. **Explain** how a catalyst works to increase the rate of methanol production.',
        marks: 3,
        ph: 'Catalyst provides alternative reaction pathway with lower activation energy; more particles have sufficient energy; more successful collisions per second; rate increases',
      },
    ],
  },

  // ─── Q3: Noble gases / food packaging / lightbulbs (8m, Crit A) ──────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Noble Gases',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 8,
    stem: 'Some gases have low reactivity with other chemicals. These gases can be used in industry and for the preservation and transportation of food.',
    figImages: ['/images/papers/chemistry-nov-2024/page-05.png'],
    tasks: [
      {
        label: 'a',
        text: 'Apple slices can be packaged and used for snacks. When sliced apples come into contact with air, they turn brown. **Select** which gas in air causes apples to turn brown when sliced.',
        marks: 1,
        ph: 'Oxygen',
        widget: 'radio_select',
        widgetOptions: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
        figImages: ['/images/papers/chemistry-nov-2024/page-05.png'],
      },
      {
        label: 'b',
        text: 'Nitrogen and argon can be added to food packets to remove air. **State** the correct group for nitrogen and the correct period for argon.',
        marks: 2,
        ph: 'Nitrogen group = 15; Argon period = 3',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Explain** why argon does not form compounds. Use the electronic configuration of argon in your answer.',
        marks: 3,
        ph: 'Argon electron config = 2.8.8; full outer shell; no tendency to gain/lose/share electrons; does not bond',
      },
      {
        label: 'd',
        text: 'Some light bulbs can be filled with argon. Over time, the argon leaks from the light bulb and is replaced by air. The images show that a light bulb can explode if the argon is replaced by air. **Outline** why the bulb might explode if argon is replaced by air.',
        marks: 2,
        ph: 'Oxygen in air reacts with hot metal filament; exothermic reaction; rapid gas production/expansion; explosion',
        figImages: ['/images/papers/chemistry-nov-2024/page-06.png'],
      },
    ],
  },

  // ─── Q4: Fluoride ions / tooth fillings / mouthwash investigation (16m, Crit B)
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation & Ionic Compounds',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 16,
    stem: 'Many different materials have been developed to repair teeth and bones. Examples of materials used for filling holes in teeth or both are shown below. The natural material of our teeth is protected by fluoride ions (F⁻) which are present in toothpaste and mouthwash. Areas of the world that have increased F⁻ ions in drinking water have increased tooth decay.',
    figImages: ['/images/papers/chemistry-nov-2024/page-06.png', '/images/papers/chemistry-nov-2024/page-07.png'],
    tasks: [
      {
        label: 'a',
        text: 'A student wanted to investigate whether F⁻ ions protect filling materials in the same way as natural teeth. **State** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'What is the effect of type of filling material on the concentration of F⁻ ions after 10 minutes?',
      },
      {
        label: 'b',
        text: 'A conductivity meter can be used to measure the change in concentration of F⁻ ions. The student uses a solution with a known concentration of F⁻ ions with each filling material and determines how the concentration of F⁻ ions changes after 10 minutes. **Identify** the independent variable, the dependent variable and two control variables in this investigation.\n\nIndependent variable: ___\nDependent variable: ___\nControl variable 1: ___\nControl variable 2: ___',
        marks: 4,
        ph: 'IV=type of filling material; DV=conductivity/concentration of F⁻ ions; CV=time (10 min); CV=initial volume/concentration of F⁻ solution',
        widget: 'fill_blank',
        figImages: ['/images/papers/chemistry-nov-2024/page-07.png'],
      },
      {
        label: 'c',
        text: 'A second student repeated the investigation with a simpler set up (using only one conductivity meter). **Comment** on the validity of the second student\'s method compared with that of the first student. **Justify** your answer.',
        marks: 2,
        ph: 'Second method less valid; cannot measure initial conductivity separately; cannot determine change in F⁻ concentration',
        figImages: ['/images/papers/chemistry-nov-2024/page-08.png'],
      },
      {
        label: 'd',
        text: 'Mouthwash is a common source of F⁻ ions. Mouthwash might be used after brushing with toothpaste to clean teeth further. **Formulate** a testable hypothesis to determine if using mouthwash and toothpaste is more effective at cleaning teeth than toothpaste alone. If… Then… Because…',
        marks: 3,
        ph: 'If mouthwash is used after toothpaste, then more F⁻ ions will be in the mouth, because mouthwash provides additional fluoride beyond toothpaste alone',
        figImages: ['/images/papers/chemistry-nov-2024/page-08.png'],
      },
      {
        label: 'e',
        text: 'The students decided to use the method in part (b) to test different brands of mouthwash on one type of tooth filling material. **Identify** the anomalous result. **Suggest** an experimental reason that may have produced this result.',
        marks: 2,
        ph: 'Identify trial that is furthest from others for same brand; suggest: contamination, measurement error, different temperature',
        figImages: ['/images/papers/chemistry-nov-2024/page-09.png'],
      },
      {
        label: 'f',
        text: '**Calculate** the average conductivity after 10 minutes for Brand D. Give your answer to an appropriate number of significant figures and include the unit.',
        marks: 2,
        ph: 'Average = sum of 3 trials / 3; include mg dm⁻³ unit',
        widget: 'fill_blank',
        figImages: ['/images/papers/chemistry-nov-2024/page-09.png'],
      },
      {
        label: 'g',
        text: '**Use** the data in part (f) to justify the best choice of mouthwash.',
        marks: 1,
        ph: 'Brand with highest conductivity after 10 min = most F⁻ ions remaining = best protection',
        figImages: ['/images/papers/chemistry-nov-2024/page-09.png'],
      },
      {
        label: 'h',
        text: 'F⁻ in low concentrations is good for healthy teeth. Scientists have suggested that 50% of people will suffer unwanted effects with an intake of F⁻ ions above 5 mg kg⁻¹ of body weight. The table shows recommended mass of toothpaste by age. **Suggest** why the recommended mass of toothpaste increases as children grow.',
        marks: 1,
        ph: 'More/larger teeth as children grow; more surface area; higher body mass needs proportionally more fluoride',
        figImages: ['/images/papers/chemistry-nov-2024/page-10.png'],
      },
    ],
  },

  // ─── Q5: Acid rain / roofing materials / Crit B design (20m, Crit B) ──────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Chemical Reactions & Scientific Investigation Design',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 20,
    stem: 'Despite efforts in the industrial world to reduce pollution, acid rain is present. Designing cheap and sustainable shelters that can be long lasting and resist weather conditions is a challenge. A student has been researching rooftops made of recycled material. One of the challenges in using recycled material to build sustainable rooftops is their reaction with acid rain.',
    figImages: ['/images/papers/chemistry-nov-2024/page-10.png', '/images/papers/chemistry-nov-2024/page-11.png'],
    tasks: [
      {
        label: 'a',
        text: 'The student placed a piece of recycled steel roofing in acid. An image of their results is shown. **Select** how you can tell a chemical reaction has taken place in the image.',
        marks: 1,
        ph: 'Change in colour (rust/orange-brown formed)',
        widget: 'radio_select',
        widgetOptions: ['Change in colour', 'Change in size', 'Change in temperature', 'Change in mass'],
        figImages: ['/images/papers/chemistry-nov-2024/page-11.png'],
      },
      {
        label: 'b',
        text: 'You are given a (10 cm × 10 cm) sample of each type of roofing material (asphalt, clay, rubber, steel, slate) to model its rate of reaction with acid rain using 1 mol dm⁻³ HCl. **Design** an experiment that will determine the rate of reaction of HCl with each type of roofing material. In your answer you should include:\n• the independent variable, the dependent variable and two additional control variables\n• a list of equipment you will use\n• details of your method\n• details of the data you will collect\n• how you will ensure that your method is safe.',
        marks: 18,
        ph: 'IV=type of material; DV=rate of reaction (mass lost / bubble production / time); CVs=volume of HCl + temp; equipment + safe method',
        figImages: ['/images/papers/chemistry-nov-2024/page-12.png'],
      },
      {
        label: 'c',
        text: 'Climate conditions are different around the world. Roofing used in one country may not be suitable for a different country. **Suggest** a different independent variable linked to climate that could be investigated.',
        marks: 1,
        ph: 'Temperature of acid / concentration of acid / UV exposure / humidity',
      },
    ],
  },

  // ─── Q6: Electroplated cutlery / NaCl corrosion investigation (13m, Crit C)
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Electrochemistry & Data Analysis',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 13,
    stem: 'Food often contains chemicals which can react with metal over time causing corrosion. Cutlery is made of a metal which is cheap to produce and then plated using electrolysis to give the cutlery a more expensive look. A student wants to model the reaction between electroplated cutlery and sodium chloride (NaCl). To replace the cutlery, the student uses iron nails that have been electroplated with zinc. The student investigated the effect of NaCl concentration on the rate of corrosion by measuring the mass lost by the nail after 7 days.',
    figImages: ['/images/papers/chemistry-nov-2024/page-13.png'],
    tasks: [
      {
        label: 'a',
        text: '**Plot** a graph of concentration and average mass lost. You should include a line of best fit.\n\nData:\n| Concentration / mol dm⁻³ | Average mass lost / mg |\n|---|---|\n| 0.0 | 10 |\n| 0.1 | 18 |\n| 0.3 | 43 |\n| 0.5 | 57 |\n| 0.8 | 86 |',
        marks: 6,
        ph: 'x=NaCl concentration/mol dm⁻³; y=mass lost/mg; 5 points; line of best fit; axes labelled with units',
        figImages: ['/images/papers/chemistry-nov-2024/page-13.png'],
      },
      {
        label: 'b',
        text: '**Describe** the trend shown in the data in part (a). **Suggest** the purpose of the trial at 0.00 mol dm⁻³ NaCl.',
        marks: 3,
        ph: 'As NaCl concentration increases, mass lost increases (positive correlation). 0.00 mol dm⁻³ = control/baseline/reference to show corrosion without NaCl.',
      },
      {
        label: 'c',
        text: 'Before their investigation, the student wrote the following hypothesis:\n"If the NaCl concentration increases, then less mass will be lost from the nail after 7 days because there are more collisions between particles of NaCl in the solution."\n\n**Evaluate** the validity of this hypothesis using the data in part (a).',
        marks: 3,
        ph: 'Hypothesis is INVALID. Data shows MORE mass lost as concentration increases (positive relationship). Reasoning about collisions is also incorrect.',
      },
      {
        label: 'd',
        text: 'The student used iron nails plated with zinc to model the effect of electroplating on cutlery. **Suggest** why nails were used to model cutlery.',
        marks: 1,
        ph: 'Standardised size/shape; same base metal (iron/steel); easier to measure mass change; cheaper to obtain',
      },
    ],
  },

  // ─── Q7: Nuclear fission / radioactive waste transport (10m, Crit D) ──────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Nuclear Chemistry, Energy & Environmental Impact',
    topicCanonical: 'Nuclear Chemistry & Radioactivity',
    topicGroup: 'Nuclear Chemistry',
    marks: 10,
    stem: 'Fossil fuels have been used widely as an energy source in everyday life. This has had a negative impact on the environment and so alternative sources of energy are needed. One alternative source of energy is nuclear fission. Nuclear fission releases an enormous amount of energy but also radioactive waste that must be disposed of. This radioactive waste is extremely dangerous and must be disposed of safely.',
    figImages: ['/images/papers/chemistry-nov-2024/page-14.png'],
    tasks: [
      {
        label: 'a',
        text: 'Energy can be obtained from renewable energy sources such as solar and wind, or non-renewable sources such as fossil fuels. In addition to being renewable and non-renewable, **state** one other difference between these two types of energy source.',
        marks: 1,
        ph: 'Renewable sources do not produce CO₂/greenhouse gases; non-renewable produce CO₂ and pollutants',
      },
      {
        label: 'b',
        text: 'Energy from nuclear fission is produced in nuclear reactors. Nuclear fission happens when a neutron collides with an atom, producing an unstable nucleus which splits into two different atoms, releasing energy. Additional neutrons are also released which can start new fission reactions. **Describe** the chain reaction of nuclear fission shown in the animation. In your answer you should include:\n• what causes the nucleus to become unstable\n• what is released when the nucleus splits\n• how a chain reaction occurs.',
        marks: 3,
        ph: 'Neutron hits nucleus → unstable → splits into 2 smaller nuclei + 2-3 neutrons + energy → neutrons hit more nuclei → chain reaction',
        figImages: ['/images/papers/chemistry-nov-2024/page-15.png'],
      },
      {
        label: 'c',
        text: 'It is necessary to transport radioactive waste from the nuclear reactor to a storage facility. There are several methods of transport that can be used. These include road, trains, rivers and air. **Discuss** the considerations when choosing a method of transport. In your answer you should include:\n• what risks are involved when transporting radioactive waste\n• what precautions should be taken when using each method of transport\n• a conclusion with justification of which is the safest method of transport.',
        marks: 6,
        ph: 'Risks: radiation leak/accident/contamination. Precautions: sealed containers, remote routes, trained staff, monitoring. Conclusion: trains/road with justification.',
        figImages: ['/images/papers/chemistry-nov-2024/page-16.png'],
      },
    ],
  },

  // ─── Q8: Radioactive waste disposal — Crit D essay (13m, Crit D) ──────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Nuclear Waste, Ethics & Societal Impact',
    topicCanonical: 'Nuclear Chemistry & Radioactivity',
    topicGroup: 'Nuclear Chemistry',
    marks: 13,
    stem: 'When energy is produced from the nuclear fission of uranium-235, the by-products are atoms of barium-141 and krypton-92 which are also radioactive. This radioactive waste is extremely dangerous and must be disposed of safely. There are two main methods under discussion: sea dumping and underground storage.\n\nIn sea dumping, the waste is sealed in containers and transported to a port. It is transported on ships away from populated areas where it is placed in oceans. Sea dumping was used for more than 50 years but was banned in 1993. Some organisations became aware of the limitations of dumping waste in seas and oceans and developed new storage methods. Underground storage areas, radioactive nuclear waste is stored in special containers 200 to 1000 metres below Earth\'s surface in materials such as clay to prevent harmful materials seeping out of the sites.',
    figImages: ['/images/papers/chemistry-nov-2024/page-17.png'],
    tasks: [
      {
        label: '',
        text: '**Using** the information above, **discuss and evaluate** one of the two methods for the disposal of radioactive waste. In your answer you should include:\n• the effects of either sea dumping or underground storage on living things\n• the economic impact\n• a justification of your opinion on which is the best method for disposing of radioactive waste.',
        marks: 13,
        ph: 'Sea dumping: marine ecosystem damage/contamination of food chain; economic: cheap to set up, banned internationally. Underground: expensive to build, long-term safe, no ecosystem impact. Justified conclusion: underground better because long-term safety despite cost.',
      },
    ],
  },
]
