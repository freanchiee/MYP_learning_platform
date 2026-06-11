import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2023',
  subject: 'Chemistry',
  session: 'May',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (8 marks, Crit A) — Fossil fuels: propane, coal combustion ─────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Combustion, organic families & surface area — fossil fuels',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 8,
    stem: 'Propane is an alkane. It is a fossil fuel widely used as a domestic heating gas. The combustion of propane releases energy. The structures of some other organic molecules are shown below.',
    figImages: ['/images/papers/chemistry-may-2023/page-02.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** the type of energy change when propane burns in air.',
        marks: 1,
        ph: 'Exothermic',
      },
      {
        label: 'b',
        text: '**Complete** the balanced equation for the complete combustion of propane in oxygen:\n\nC₃H₈ + [?]O₂ → [?]CO₂ + [?]H₂O',
        marks: 2,
        ph: '5, 3, 4 (balance oxygen last)',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7', '8'],
      },
      {
        label: 'c',
        text: 'The structures of some other organic molecules are shown above.\n\n**Identify** the family that each molecule belongs to.',
        marks: 2,
        ph: 'Molecule A: Alcohol (alkanol); Molecule B: Carboxylic acid (organic acid)',
      },
      {
        label: 'd',
        text: 'Coal is commonly used in power plants to generate electricity. **Explain** why powdered coal should be used rather than lumps of solid coal.',
        marks: 3,
        ph: 'Greater surface area → faster rate of reaction → more energy released per unit time',
      },
    ],
  },

  // ── Q2 (8 marks, Crit A) — Solar power, silicon, periodic table ───────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, Lewis structures & covalent bonding — solar panels',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 8,
    stem: 'An alternative to the use of fossil fuels is solar power. Solar panels capture the Sun\'s energy and convert it into electricity. Silicon (Si) is used in 95% of the panels sold today. Elements like gallium (Ga), arsenic (As) and tellurium (Te) can also be used in solar panels.',
    figImages: ['/images/papers/chemistry-may-2023/page-03.png'],
    tasks: [
      {
        label: 'a',
        text: 'Use the periodic table to **identify** the missing information from the table below.\n\n| Element | Ga | As |\n|---|---|---|\n| Group | [blank] | [blank] |\n| Period | [blank] | [blank] |',
        marks: 2,
        ph: 'Ga: Group 3, Period 4; As: Group 5, Period 4',
      },
      {
        label: 'b',
        text: '**Outline** why solar power is considered better for the environment than fossil fuels.',
        marks: 2,
        ph: 'No emissions from solar; solar is renewable; fossil fuels release CO₂/greenhouse gases',
      },
      {
        label: 'c',
        text: 'Another common fossil fuel is methane. Methane is one of the main gases used throughout the world for heating and cooking. **Select** the Lewis structure (also known as a dot diagram or dot cross diagram) for methane.',
        marks: 1,
        ph: 'CH₄ has 4 H atoms bonded to C with 4 single bonds — select A',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['/images/papers/chemistry-may-2023/page-04.png'],
      },
      {
        label: 'd',
        text: 'Carbon and silicon form compounds with similar formulas. Some examples are methane (CH₄) and silane (SiH₄). **Explain** why methane and silane have similar formulas.',
        marks: 3,
        ph: 'Same group (Group 4) → same valence electrons; share electrons to form 4 covalent bonds',
      },
    ],
  },

  // ── Q3 (12 marks, Crit A/D) — Hydrogen gas: production, catalysts, ammonia ─
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Reactivity, catalysts, moles & implications — hydrogen production',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 12,
    stem: 'Hydrogen was discovered by Sir Henry Cavendish in 1766 when he reacted metals with acid. He called the gas produced "inflammable air." We now call this gas hydrogen. Cavendish placed three different metals: Zinc, Iron and Tin into acid. He observed that hydrogen was produced at different rates. Hydrogen is the most abundant element in the universe, but there is not enough in our atmosphere for it to be used as a renewable energy source. Manufactured hydrogen can be classified into different categories depending on the processes used.',
    figImages: ['/images/papers/chemistry-may-2023/page-05.png'],
    tasks: [
      {
        label: 'a',
        text: '**Outline** why hydrogen was produced at different rates when Cavendish reacted the three metals with acid.',
        marks: 2,
        ph: 'More reactive metals produce hydrogen more quickly; metals have different reactivities',
      },
      {
        label: 'b',
        text: 'Grey and blue hydrogen are produced in the presence of a nickel catalyst. **Explain** how a catalyst works in a chemical reaction.',
        marks: 3,
        ph: 'Speeds up rate of reaction; by lowering activation energy or providing alternative pathway; without being used up',
      },
      {
        label: 'c',
        text: '**Calculate** the number of moles of hydrogen produced when 8.00 kg of methane reacts with excess steam vapour when producing grey and blue hydrogen.\n\nCH₄(g) + H₂O(g) → CO(g) + 3H₂(g)',
        marks: 4,
        ph: 'M(CH₄)=16; n(CH₄)=8000/16=500 mol; 1 mol CH₄→3 mol H₂; n(H₂)=1500 mol',
      },
      {
        label: 'd',
        text: 'After it is produced, hydrogen must be transported to where it is needed. To allow it to be transported safely, the hydrogen is reacted with nitrogen to form ammonia. **Suggest** why it is safer to transport ammonia rather than hydrogen.',
        marks: 1,
        ph: 'Ammonia not flammable (hydrogen is); ammonia has distinct smell so leaks detected; ammonia less reactive',
      },
      {
        label: 'e',
        text: 'The blue hydrogen process uses CO₂ from the reaction of CH₄ and combines it with calcium oxide to produce calcium carbonate:\n\nCaO(s) + CO₂(g) → CaCO₃(s)\n\n**State** one environmental benefit of using the carbon dioxide in this process. **Justify** your answer.',
        marks: 2,
        ph: 'CO₂ not released into atmosphere → reduces greenhouse gas emissions; reduces climate change',
      },
    ],
  },

  // ── Q4 (16 marks, Crit A/B/C) — Frozen desserts, ice crystals ─────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'States of matter, data analysis & hypothesis — frozen desserts',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 16,
    stem: 'Frozen desserts come in a variety of types depending on the country. Some examples are shown: Kulfi (India, boiled milk with pistachio/saffron), Paleta (Mexico, fruit/sugar/milk), Ice cream (United Kingdom, cream/egg/sugar/milk), and Mochi (Japan, ice cream wrapped in coloured rice flour sheets). One of the main ingredients of these various frozen desserts is milk. Milk is a solution of protein, fats and other substances in water. When the milk and other ingredients in frozen desserts are cooled, the water inside the milk freezes producing ice crystals which trap the other ingredients.',
    figImages: ['/images/papers/chemistry-may-2023/page-09.png'],
    tasks: [
      {
        label: 'a',
        text: 'In the boxes below, **draw** a diagram showing the arrangement of at least 10 water molecules before and after freezing.\n\nBefore freezing → After freezing',
        marks: 2,
        ph: 'Before: irregular arrangement, molecules close but not all touching; After: regular arrangement, all molecules in contact',
      },
      {
        label: 'b',
        text: 'The microscope image shows the structure of a frozen dessert. **Measure** the size of the ice crystal at A. You should give your measurement in metres using standard form.',
        marks: 2,
        ph: 'Measurement = 55 μm (±5); conversion = 5.5 × 10⁻⁵ m',
        figImages: ['/images/papers/chemistry-may-2023/page-11.png'],
      },
      {
        label: 'c',
        text: 'A student used the following method to make ice cream at home. While the ice cream was being made, the student measured the temperature of the mixture and estimated the percentage of water that had frozen. Their results are shown in the table below.\n\n| Temperature / °C | Percentage of ice cream frozen / % |\n|---|---|\n| −1.38 | 0 |\n| −2.38 | 8 |\n| −4.38 | 40 |\n| −7.38 | 80 |\n| −11.38 | 90 |\n\n**Present** this data in a graph.',
        marks: 4,
        ph: 'x-axis: Temperature / °C; y-axis: % ice cream frozen; two points correct; all data plotted correctly',
        figImages: ['/images/papers/chemistry-may-2023/page-13.png'],
      },
      {
        label: 'd',
        text: 'Using your graph from part (c), **estimate** the temperature when 50% of the water would be frozen.',
        marks: 2,
        ph: 'Read from graph at y=50%: approximately −6 °C (accept −6 ± 0.5)',
      },
      {
        label: 'e',
        text: 'The texture of ice cream is affected by the size of the ice crystals it contains. This size is determined by the temperature it is made at. The colder the ice cream mixture becomes, the smaller the size of the ice crystals. Ice cream made using liquid nitrogen (at −196°C) will have a smoother texture than ice cream made using the method in part (c).\n\n**Formulate** a hypothesis to test the effect of temperature on the texture of ice cream.',
        marks: 3,
        ph: 'If temperature is lower → then texture will be smoother → because ice crystals are smaller/form more quickly',
        figImages: ['/images/papers/chemistry-may-2023/page-15.png'],
      },
      {
        label: 'f',
        text: 'A student wanted to investigate the mixtures found in frozen desserts. They were interested in how quickly different frozen desserts containing soda, water or milk melted. The student collected the following data:\n\n| Frozen ingredient | Trial 1 | Trial 2 | Trial 3 |\n|---|---|---|---|\n| Soda | 45 min 54 s | 38 min 02 s | 44 min 45 s |\n| Water | 42 min 31 s | 48 min 56 s | 43 min 22 s |\n| Milk | 1 hr 02 min | 1 hr 06 min | 56 min 34 s |\n\n**Suggest** one way that the student\'s data **presentation** could be improved.',
        marks: 1,
        ph: 'Use same units throughout; include mean value; include units in heading; consistent precision',
      },
      {
        label: 'g',
        text: '**Outline** if the data above validates the student\'s hypothesis.',
        marks: 2,
        ph: 'Milk does not melt quickest (water melts quickest) → hypothesis is invalid',
      },
    ],
  },

  // ── Q5 (17 marks, Crit B/C) — Salt & ice: melting investigation ──────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Salt de-icing investigation design & data analysis',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 17,
    stem: 'The student decided to investigate the time taken for salt (sodium chloride, NaCl) to melt crushed ice and solid ice. They set up their investigation as shown in the diagram — using crushed ice on one side and an ice cube on the other.',
    figImages: ['/images/papers/chemistry-may-2023/page-18.png'],
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'How does the surface area of ice affect the time taken for salt to melt ice?',
      },
      {
        label: 'b',
        text: '**State** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nControl variable 1:\n\nControl variable 2:',
        marks: 4,
        ph: 'IV: surface area of ice; DV: time for ice to melt; CV1: mass of salt; CV2: type of salt / mass of ice / room temperature',
      },
      {
        label: 'c',
        text: '**State** how the set-up of the investigation in part (a) could be improved.',
        marks: 1,
        ph: 'Same mass of ice used; same surface area; more values of IV; carry out more trials',
      },
      {
        label: 'd',
        text: 'After studying how salt affects ice, the student wanted to study how quickly different household substances would melt ice compared to salt. The results for salt and sugar are shown below. The data table above is incomplete. **Calculate** the missing values to complete the table, giving your values to a suitable number of decimal places.\n\n| Substance | Trial | Initial ice mass/g | Remaining ice/g | % remaining | % melted |\n|---|---|---|---|---|---|\n| Salt | 1 | 150.00 | 80.00 | [blank A] | 46.67 |\n| Sugar | 2 | 145.00 | 100.00 | 68.97 | [blank B] |\n| Coffee powder | 3 | 160.00 | 120.00 | 75.00 | 25.00 |',
        marks: 3,
        ph: 'Blank A: 80/150×100 = 53.33%; Blank B: (145−100)/145×100 = 31.03%',
        figImages: ['/images/papers/chemistry-may-2023/page-20.png'],
      },
      {
        label: 'e',
        text: '**Suggest** why salt was used in the investigation in part (d).',
        marks: 1,
        ph: 'Salt is the control/reference to which all other substances could be compared',
      },
      {
        label: 'f',
        text: 'In some areas of the world, temperatures drop below 0°C. This causes problems for transport. The infographic shows a variety of chemicals that can be used to remove ice and the temperature at which the ice will melt when each chemical is used.\n\nAn airport which is based above the Arctic Circle uses a variety of de-icers depending upon the surface that needs to have ice removed. The average temperatures range from −15°C to −2°C but with the wind it can get as cold as −45°C.\n\nUse the infographic to **suggest** one de-icing material that would **not** be suitable to use to clear the airport runways and surrounding roads. **Justify** your answer.',
        marks: 2,
        ph: 'Urea — only works above ~−15°C; temperatures can reach −45°C where it is ineffective',
        widget: 'radio_select',
        widgetOptions: ['Urea', 'Sodium chloride', 'Calcium magnesium acetate', 'Calcium chloride', 'Magnesium chloride', 'Potassium acetate'],
        figImages: ['/images/papers/chemistry-may-2023/page-21.png'],
      },
      {
        label: 'g',
        text: 'Chemicals containing chlorides can damage airplane surfaces by corrosion. Using information from part (f), **state** which substance could be used to de-ice runways and also could be used to remove any ice from airplane wings before flight. **Justify** your answer.',
        marks: 2,
        ph: 'Potassium acetate — contains no chloride AND works below −45°C (only substance meeting both criteria)',
      },
      {
        label: 'h',
        text: 'Natural snow is produced when water droplets fall at specific temperatures forming crystals in different patterns. Machine-made snow is produced by forcing water droplets into the air. The water droplets then become coated with more water and form small balls of ice. **Discuss** the validity of using machine-made snow to compare the effects of different de-icers.',
        marks: 3,
        ph: 'Machine-made more compact than natural; structures different; de-icers pass through natural but act on surface of machine-made; limited validity',
        figImages: ['/images/papers/chemistry-may-2023/page-24.png'],
      },
    ],
  },

  // ── Q6 (17 marks, Crit D/B) — Airport de-icing: hazards & design ──────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D/B: Hazards & investigation design — de-icing salts',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'A new company is looking to provide a local community with a better de-icer for roads. You are provided with the following salts and asked to determine which will be the best one for de-icing roads: lithium chloride (LiCl), potassium chloride (KCl), magnesium chloride (MgCl₂), calcium chloride (CaCl₂), strontium chloride (SrCl₂).',
    figImages: ['/images/papers/chemistry-may-2023/page-25.png'],
    tasks: [
      {
        label: 'a',
        text: 'The image below shows a bottle of strontium chloride, SrCl₂. **Select** the hazard represented by this symbol.',
        marks: 1,
        ph: 'Skull and crossbones symbol = Toxic',
        widget: 'radio_select',
        widgetOptions: ['Corrosive', 'Flammable', 'Radioactive', 'Toxic'],
      },
      {
        label: 'b',
        text: '**Design** an experiment to investigate which salt would be the best de-icer for roads. In your answer, you should include:\n- independent, dependent and control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data\n- any safety precautions you need to take.',
        marks: 16,
        ph: 'Variables (IV: type of salt, DV: time for ice to melt, CVs); equipment; method (3 repeats, same mass salt, same mass ice); safety (ionic irritants)',
      },
    ],
  },

  // ── Q7 (8 marks, Crit A/D) — Textiles: polyester and fabric comparison ─────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Ester bonds, fabric properties & sports clothing evaluation',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 8,
    stem: 'The fashion industry has evolved to use a variety of textiles. Natural materials such as cotton and hemp have been used since ancient times. Newer synthetic materials such as polyester and nylon are used in weatherproof clothing. The purpose and properties of each type of material are different. As new materials are developed, we need to consider their sustainability compared to natural sources.',
    figImages: ['/images/papers/chemistry-may-2023/page-26.png'],
    tasks: [
      {
        label: 'a',
        text: 'Polyester is a strong synthetic fibre made when an alcohol and a carboxylic acid react to form an ester. The reaction is shown in a simplified form below.\n\n**Select** the Lewis structure showing the ester linkage formed in this reaction.',
        marks: 1,
        ph: 'Ester linkage = –C(=O)–O– group; select model B',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['/images/papers/chemistry-may-2023/page-26.png'],
      },
      {
        label: 'b',
        text: 'Global warming causes our planet\'s temperature to increase, therefore light and breathable materials are needed for clothing. Using information from the table and your wider MYP studies, **discuss** and **evaluate** the suitability of different types of fabric for sports clothing. In your answer you should include:\n- properties for fabrics suitable for sports clothing\n- a comparison of at least three different fabrics\n- your opinion on which fabric is the most suitable.',
        marks: 7,
        ph: 'Properties: breathable/comfort; compare Cotton/Velvet/Polyester/Nylon; opinion with justification for at least two',
        figImages: ['/images/papers/chemistry-may-2023/page-27.png'],
      },
    ],
  },

  // ── Q8 (14 marks, Crit D) — Clothing waste & sustainability ─────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Environmental, economic & individual implications — clothing waste',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 14,
    stem: 'The fashion industry has evolved to use a variety of textiles. Buying clothes is cheaper and more accessible than ever before. In 2011, 80 billion items of clothing were manufactured. The fashion industry is also responsible for 10% of all greenhouse gas emissions. The infographic below gives some information comparing the use of cotton to the use of fibres from reclaimed clothing.',
    figImages: ['/images/papers/chemistry-may-2023/page-29.png'],
    tasks: [
      {
        label: 'a',
        text: 'Using information from the video and the infographic, **discuss** and **evaluate** reusing clothing as a solution to the waste created by the fashion industry. In your answer you should include:\n- advantages to the environment of reclaiming compared to manufacturing new clothing\n- impacts on the economy of reclaiming\n- choices of an individual when considering how to reuse clothing\n- a final appraisal on reusing rather than manufacturing new clothing.',
        marks: 12,
        ph: 'Environment: less deforestation/emissions; Economy: new industry/job creation; Individual: extend lifetime/make new items; Appraisal with evidence',
      },
      {
        label: 'b',
        text: 'In the nineteenth century, sewing machines were first developed. By 1876, almost a million homes in the US owned a sewing machine. Nowadays, owning a sewing machine is again growing in popularity.\n\n**Suggest** how the sewing machine could be part of the solution to reduce clothing waste.',
        marks: 2,
        ph: 'Extending the lifetime of clothing; can make new clothing to suit personal preference; less likely to discard clothing',
      },
    ],
  },
]
