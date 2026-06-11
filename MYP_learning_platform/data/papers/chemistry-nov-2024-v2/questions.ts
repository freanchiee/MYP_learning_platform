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
  id: 'chemistry-nov-2024-v2',
  subject: 'Chemistry',
  session: 'November',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Medieval chemistry / distillation / butan-1-ol / Epsom salt (9m, Crit A)
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table, Organic Chemistry & States of Matter',
    marks: 9,
    stem: 'Medieval chemists called alchemists attempted to turn common metals into gold and silver. They also refined and purified medicinal compounds. One technique they developed was distillation, used to purify plant extracts and produce concentrated alcohol for medicines. Magnesium sulfate (MgSO₄), known as "bitter salt" or Epsom salt, was discovered through analysis of natural spring water.',
    figImages: ['/images/papers/chemistry-nov-2024/page-01.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the region of the periodic table where copper can be found.',
        marks: 1,
        ph: 'Transition metals',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Noble gases', 'Halogens'],
      },
      {
        label: 'b',
        text: 'Alchemists developed techniques to separate and purify liquid mixtures. **Select** the property that allows liquids to be separated by distillation.',
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
        figImages: ['/images/papers/chemistry-nov-2024/page-01.png'],
      },
      {
        label: 'd',
        text: 'Distillation of fermented grain can produce butan-1-ol. **Select** the diagram showing the structure of butan-1-ol.',
        marks: 1,
        ph: 'B — CH₃CH₂CH₂CH₂OH: four carbons with Hs, ending in OH',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['/images/papers/chemistry-nov-2024/page-02.png'],
      },
      {
        label: 'e',
        text: 'Epsom salt (magnesium sulfate, MgSO₄) was used medicinally by alchemists. **Calculate** the formula mass for MgSO₄.',
        marks: 2,
        ph: 'Mr = 24+32+4(16) = 120 g/mol',
        widget: 'fill_blank',
      },
    ],
  },

  // ─── Q2: CO₂ / sparkling wine / ethanol synthesis (11m, Crit A) ───────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Covalent Bonding, Moles & Rates of Reaction',
    marks: 11,
    stem: 'Carbon dioxide (CO₂) is produced naturally during fermentation and has many industrial uses, including carbonating beverages, preserving food, and as a supercritical solvent to decaffeinate coffee. CO₂ has a boiling point of −78 °C and can exist as "dry ice" in solid form.',
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
        text: 'CO₂ is dissolved in sparkling wine under high pressure. **Explain** why the liquid foams and bubbles are seen when a bottle of sparkling wine is opened and poured. In your answer include why the fizzing decreases over time.',
        marks: 3,
        ph: 'Pressure drops on opening; CO₂ escapes from solution; bubbles form; fizzing decreases as dissolved CO₂ is depleted',
        figImages: ['/images/papers/chemistry-nov-2024/page-04.png'],
      },
      {
        label: 'c',
        text: 'Scientists are researching converting atmospheric CO₂ into ethanol (C₂H₅OH) as a renewable fuel using the equation:\n\n2CO₂(g) + 6H₂(g) → C₂H₅OH(g) + 3H₂O(g)\n\n**Calculate** the mass of ethanol (C₂H₅OH) that can be produced from 264 g of CO₂. Give your answer in grams in standard form.',
        marks: 4,
        ph: 'n(CO₂)=264/44=6mol; n(C₂H₅OH)=6/2=3mol; m=3×46=138g=1.38×10² g',
        widget: 'fill_blank',
        figImages: ['/images/papers/chemistry-nov-2024/page-04.png'],
      },
      {
        label: 'd',
        text: 'The rate of ethanol production from CO₂ and H₂ is very low without a catalyst. **Explain** how a copper catalyst works to increase the rate of ethanol production.',
        marks: 3,
        ph: 'Catalyst provides alternative pathway with lower activation energy; more molecules have sufficient energy; more successful collisions; rate increases',
      },
    ],
  },

  // ─── Q3: Noble gases / food packaging / xenon (8m, Crit A) ──────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Noble Gases',
    marks: 8,
    stem: 'Noble gases are used in many applications including food preservation, lighting, and anaesthesia. Nitrogen and xenon (Xe) are sometimes used in food packaging to maintain freshness.',
    figImages: ['/images/papers/chemistry-nov-2024/page-05.png'],
    tasks: [
      {
        label: 'a',
        text: 'Sliced mushrooms turn brown when exposed to air. **Select** which gas in air causes mushrooms to turn brown when sliced.',
        marks: 1,
        ph: 'Oxygen',
        widget: 'radio_select',
        widgetOptions: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Xenon'],
        figImages: ['/images/papers/chemistry-nov-2024/page-05.png'],
      },
      {
        label: 'b',
        text: 'Nitrogen and xenon can be added to food packets to remove air. **State** the correct group for nitrogen and the correct period for xenon.',
        marks: 2,
        ph: 'Nitrogen group = 15; Xenon period = 5',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Explain** why xenon does not form compounds. Use the electronic configuration of xenon in your answer.',
        marks: 3,
        ph: 'Xenon electron config = 2.8.18.18.8; full outer shell; no tendency to gain/lose/share electrons; does not bond',
      },
      {
        label: 'd',
        text: 'Xenon is used in some high-intensity car headlights. If xenon leaks from the headlight bulb over time and is replaced by air, the bulb filament can fail suddenly. **Outline** why the bulb might fail if xenon is replaced by air.',
        marks: 2,
        ph: 'Oxygen in air reacts with hot metal filament; exothermic reaction; rapid heating/expansion; filament breaks',
        figImages: ['/images/papers/chemistry-nov-2024/page-06.png'],
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
    stem: 'Dental filling materials must be safe, durable, and compatible with the natural chemistry of the mouth. Fluoride ions (F⁻) protect natural tooth enamel against acid erosion. A dentist proposed that F⁻ ions from fluoridated mouthwash might also protect dental filling materials.',
    figImages: ['/images/papers/chemistry-nov-2024/page-06.png', '/images/papers/chemistry-nov-2024/page-07.png'],
    tasks: [
      {
        label: 'a',
        text: 'A student wanted to investigate whether F⁻ ions from mouthwash protect filling materials. **State** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'What is the effect of type of filling material on the concentration of F⁻ ions in mouthwash solution after 10 minutes?',
      },
      {
        label: 'b',
        text: 'A conductivity meter measures the change in concentration of F⁻ ions. The student submerges each filling material in a known concentration of F⁻ ion solution for 10 minutes and measures conductivity before and after. **Identify** the independent variable, the dependent variable and two control variables in this investigation.\n\nIndependent variable: ___\nDependent variable: ___\nControl variable 1: ___\nControl variable 2: ___',
        marks: 4,
        ph: 'IV=type of filling material; DV=conductivity/F⁻ concentration; CV=time (10 min); CV=volume of F⁻ solution',
        widget: 'fill_blank',
        figImages: ['/images/papers/chemistry-nov-2024/page-07.png'],
      },
      {
        label: 'c',
        text: 'A second student simplified the setup by omitting the "before" conductivity reading. **Comment** on the validity of the second student\'s method. **Justify** your answer.',
        marks: 2,
        ph: 'Less valid; without initial reading cannot determine change in F⁻ concentration; no baseline for comparison',
        figImages: ['/images/papers/chemistry-nov-2024/page-08.png'],
      },
      {
        label: 'd',
        text: 'A dental hygienist suggested using fluoride mouthwash both morning and evening instead of once daily. **Formulate** a testable hypothesis to determine whether twice-daily mouthwash use increases F⁻ protection. If… Then… Because…',
        marks: 3,
        ph: 'If mouthwash used twice daily, then higher F⁻ concentration maintained in mouth, because twice daily replenishes fluoride more frequently',
        figImages: ['/images/papers/chemistry-nov-2024/page-08.png'],
      },
      {
        label: 'e',
        text: 'Students tested four mouthwash brands on the same filling material. **Identify** the anomalous result in the data. **Suggest** an experimental reason that may have produced this result.',
        marks: 2,
        ph: 'Identify trial furthest from others for same brand; contamination, air bubble in meter probe, temperature change',
        figImages: ['/images/papers/chemistry-nov-2024/page-09.png'],
      },
      {
        label: 'f',
        text: '**Calculate** the average conductivity after 10 minutes for Brand D. Give your answer to an appropriate number of significant figures and include the unit.',
        marks: 2,
        ph: 'Average = sum of valid trials / number of trials; mg dm⁻³',
        widget: 'fill_blank',
        figImages: ['/images/papers/chemistry-nov-2024/page-09.png'],
      },
      {
        label: 'g',
        text: '**Use** the data in part (f) to justify the best choice of mouthwash.',
        marks: 1,
        ph: 'Brand with highest conductivity = most F⁻ remaining = best fluoride delivery to teeth',
        figImages: ['/images/papers/chemistry-nov-2024/page-09.png'],
      },
      {
        label: 'h',
        text: 'Dentists recommend different amounts of fluoride toothpaste for different age groups. **Suggest** why the recommended mass of toothpaste increases as children grow.',
        marks: 1,
        ph: 'More/larger teeth as children grow; greater tooth surface area; body mass increases so more fluoride within safe limit',
        figImages: ['/images/papers/chemistry-nov-2024/page-10.png'],
      },
    ],
  },

  // ─── Q5: Acid rain / bridge materials / Crit B design (20m, Crit B) ───────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Chemical Reactions & Scientific Investigation Design',
    marks: 20,
    stem: 'Bridges are built from materials that must resist weathering and chemical attack, including from acid rain. Civil engineers need to select the most acid-resistant materials for use in bridge construction. A student investigated the rate at which different bridge-building materials react with dilute sulfuric acid to model the effects of acid rain.',
    figImages: ['/images/papers/chemistry-nov-2024/page-10.png', '/images/papers/chemistry-nov-2024/page-11.png'],
    tasks: [
      {
        label: 'a',
        text: 'The student placed a piece of iron (steel) bridge railing in sulfuric acid. An image of the results is shown. **Select** how you can tell a chemical reaction has taken place in the image.',
        marks: 1,
        ph: 'Change in colour',
        widget: 'radio_select',
        widgetOptions: ['Change in colour', 'Change in size', 'Change in temperature', 'Change in mass'],
        figImages: ['/images/papers/chemistry-nov-2024/page-11.png'],
      },
      {
        label: 'b',
        text: 'You are given a (10 cm × 10 cm) sample of each type of bridge material (steel, aluminium, limestone, granite, concrete) to model its rate of reaction with acid rain using 1 mol dm⁻³ H₂SO₄. **Design** an experiment that will determine the rate of reaction of H₂SO₄ with each type of bridge material. In your answer you should include:\n• the independent variable, the dependent variable and two additional control variables\n• a list of equipment you will use\n• details of your method\n• details of the data you will collect\n• how you will ensure that your method is safe.',
        marks: 18,
        ph: 'IV=type of bridge material; DV=mass lost/bubble volume/rate; CVs=volume H₂SO₄ + temp; equipment; method with repeats; corrosive acid safety',
        figImages: ['/images/papers/chemistry-nov-2024/page-12.png'],
      },
      {
        label: 'c',
        text: 'Climate conditions vary globally. Bridge materials used in one region may not be suitable for another. **Suggest** a different independent variable linked to climate that could be investigated.',
        marks: 1,
        ph: 'Temperature of acid / concentration of sulfuric acid / UV irradiance',
      },
    ],
  },

  // ─── Q6: Electroplated jewellery / NaCl corrosion data (13m, Crit C) ──────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Electrochemistry & Data Analysis',
    marks: 13,
    stem: 'Gold-plated jewellery is made by electroplating a base metal (copper or zinc) with a thin layer of gold. Over time, the gold layer can wear away and the base metal corrodes when exposed to sweat (which contains NaCl). A student modelled this corrosion by measuring mass lost from gold-plated zinc nails in different concentrations of NaCl solution after 7 days.',
    figImages: ['/images/papers/chemistry-nov-2024/page-13.png'],
    tasks: [
      {
        label: 'a',
        text: '**Plot** a graph of concentration and average mass lost. You should include a line of best fit.\n\nData:\n| Concentration / mol dm⁻³ | Average mass lost / mg |\n|---|---|\n| 0.0 | 6 |\n| 0.1 | 12 |\n| 0.3 | 32 |\n| 0.5 | 48 |\n| 0.8 | 70 |',
        marks: 6,
        ph: 'x=NaCl concentration/mol dm⁻³; y=mass lost/mg; 5 points; line of best fit; axes labelled with units',
        figImages: ['/images/papers/chemistry-nov-2024/page-13.png'],
      },
      {
        label: 'b',
        text: '**Describe** the trend shown in the data in part (a). **Suggest** the purpose of the trial at 0.00 mol dm⁻³ NaCl.',
        marks: 3,
        ph: 'As NaCl concentration increases, mass lost increases. 0.00 = control/baseline to compare corrosion without NaCl.',
      },
      {
        label: 'c',
        text: 'Before the investigation, the student wrote the following hypothesis:\n"If the NaCl concentration increases, then less mass will be lost because higher NaCl concentration reduces the rate of corrosion by blocking the metal surface."\n\n**Evaluate** the validity of this hypothesis using the data in part (a).',
        marks: 3,
        ph: 'Hypothesis invalid; data shows MORE mass lost at higher NaCl concentration; NaCl promotes corrosion, not prevents it',
      },
      {
        label: 'd',
        text: 'The student used gold-plated zinc nails to model gold-plated zinc jewellery. **Suggest** why nails were used to model jewellery.',
        marks: 1,
        ph: 'Uniform size/shape; same metal; easier to measure mass precisely; cheaper; standardised experiment',
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
    stem: 'Wind energy and nuclear energy are two alternatives to fossil fuels. Both can generate large amounts of electricity but have very different impacts on the environment and society. Nuclear fission generates a large amount of electricity per kilogram of fuel but produces long-lived radioactive waste that must be carefully managed.',
    figImages: ['/images/papers/chemistry-nov-2024/page-14.png'],
    tasks: [
      {
        label: 'a',
        text: 'Wind energy is renewable. Nuclear energy from uranium is non-renewable. In addition to being renewable and non-renewable, **state** one other difference between wind energy and nuclear energy as power sources.',
        marks: 1,
        ph: 'Wind produces no radioactive waste; nuclear produces radioactive waste. OR wind needs large land area; nuclear uses small land area per MW.',
      },
      {
        label: 'b',
        text: 'In a nuclear power station, a neutron is fired at a uranium-235 nucleus. The nucleus becomes unstable and splits into two smaller nuclei, releasing energy and additional neutrons. These neutrons cause further fission reactions. **Describe** the chain reaction of nuclear fission. In your answer you should include:\n• what causes the nucleus to become unstable\n• what is released when the nucleus splits\n• how a chain reaction occurs.',
        marks: 3,
        ph: 'Neutron hits U-235 nucleus → unstable → splits into 2 smaller nuclei + 2-3 neutrons + large energy → neutrons hit more nuclei → sustained chain reaction',
        figImages: ['/images/papers/chemistry-nov-2024/page-15.png'],
      },
      {
        label: 'c',
        text: 'Radioactive waste from nuclear power stations must be transported safely to storage facilities. Transport options include road, train, river barge, and air. **Discuss** the considerations when choosing a method of transport. In your answer you should include:\n• what risks are involved when transporting radioactive waste\n• what precautions should be taken when using each method of transport\n• a conclusion with justification of which is the safest method of transport.',
        marks: 6,
        ph: 'Risks: radiation leak if accident. Per method precautions. Conclusion: trains safest (controlled route, low accident rate, purpose-built containers).',
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
    marks: 13,
    stem: 'Nuclear power stations in many countries produce thousands of tonnes of radioactive waste each year. This waste remains hazardous for thousands of years. Scientists and governments are debating the safest and most ethical methods of disposal.\n\nProposal 1 — Deep seabed injection: Some scientists propose injecting liquid radioactive waste under pressure into deep seabed sediments far from human populations. Supporters argue this is far cheaper than land-based alternatives. Critics warn that ocean currents could gradually spread contamination, and the impact on deep-sea ecosystems is not fully understood.\n\nProposal 2 — Deep geological repositories: Many countries (e.g. Finland, Sweden) are constructing underground repositories several hundred metres deep in stable granite bedrock. These facilities are engineered to isolate waste for over 100,000 years. Construction costs are very high, but no significant surface contamination has been recorded.',
    figImages: ['/images/papers/chemistry-nov-2024/page-17.png'],
    tasks: [
      {
        label: '',
        text: '**Using** the information above, **discuss and evaluate** one of the two proposals for the disposal of radioactive waste. In your answer you should include:\n• the effects of either seabed injection or deep geological disposal on living things\n• the economic impact\n• a justification of your opinion on which is the best method for disposing of radioactive waste.',
        marks: 13,
        ph: 'Seabed: deep-sea contamination/food chain spread; cheap but unknown long-term risk. Geological: very expensive, 100,000-year isolation, no ecosystem risk. Justified: geological better because safety for living things outweighs high cost.',
      },
    ],
  },
]
