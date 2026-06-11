import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2023-v1',
  subject: 'Chemistry',
  session: 'May',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (8 marks, Crit A) — Ethane combustion, organic families, wood pellets ─
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Combustion, organic families & surface area — biofuels',
    marks: 8,
    stem: 'Ethane is an alkane found in natural gas. It is burned as a fuel in some industrial processes. The combustion of ethane releases energy. The structures of some other organic molecules are shown below.',
    tasks: [
      {
        label: 'a',
        text: '**State** the type of energy change when ethane burns in air.',
        marks: 1,
        ph: 'Exothermic',
      },
      {
        label: 'b',
        text: '**Complete** the balanced equation for the complete combustion of ethane in oxygen:\n\n2C₂H₆ + [?]O₂ → [?]CO₂ + [?]H₂O',
        marks: 2,
        ph: '7, 4, 6 (balance oxygen last)',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      },
      {
        label: 'c',
        text: 'The structures of some other organic molecules are shown above.\n\n**Identify** the family that each molecule belongs to.',
        marks: 2,
        ph: 'Molecule A: Ester; Molecule B: Amine',
      },
      {
        label: 'd',
        text: 'Wood pellets are commonly used in biomass power stations to generate electricity. **Explain** why fine wood pellets should be used rather than large wood logs.',
        marks: 3,
        ph: 'Greater surface area → faster rate of reaction → more energy released per unit time',
      },
    ],
  },

  // ── Q2 (8 marks, Crit A) — Wave energy, Ge/Sn, Lewis structure ethane ───────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, Lewis structures & covalent bonding — wave energy',
    marks: 8,
    stem: 'An alternative to the use of fossil fuels is wave energy. Wave energy converters harness the motion of ocean waves to generate electricity. Germanium (Ge) and Tin (Sn) are elements in the same group as silicon (Si) and are used in certain types of semiconductor devices and specialised photovoltaic cells.',
    tasks: [
      {
        label: 'a',
        text: 'Use the periodic table to **identify** the missing information from the table below.\n\n| Element | Ge | Sn |\n|---|---|---|\n| Group | [blank] | [blank] |\n| Period | [blank] | [blank] |',
        marks: 2,
        ph: 'Ge: Group 4, Period 4; Sn: Group 4, Period 5',
      },
      {
        label: 'b',
        text: '**Outline** why wave energy is considered better for the environment than fossil fuels.',
        marks: 2,
        ph: 'No emissions from wave energy; wave energy is renewable; fossil fuels release CO₂/greenhouse gases',
      },
      {
        label: 'c',
        text: 'Another common fossil fuel is ethane, the simplest alkane after methane. **Select** the Lewis structure (also known as a dot diagram or dot cross diagram) for ethane (C₂H₆).',
        marks: 1,
        ph: 'C₂H₆ has 3 H atoms bonded to each C with a C-C single bond — select C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'd',
        text: 'Carbon and germanium form hydrides with similar formulas. Some examples are methane (CH₄) and germane (GeH₄). **Explain** why methane and germane have similar formulas.',
        marks: 3,
        ph: 'Same group (Group 4) → same valence electrons; share electrons to form 4 covalent bonds',
      },
    ],
  },

  // ── Q3 (12 marks, Crit A/D) — Hydrogen: reactivity, catalyst, moles 12.80 kg ─
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Reactivity, catalysts, moles & implications — hydrogen production',
    marks: 12,
    stem: 'Hydrogen was discovered by Sir Henry Cavendish in 1766 when he reacted metals with acid. He called the gas produced "inflammable air." We now call this gas hydrogen. Cavendish placed three different metals: Zinc, Iron and Copper into acid. He observed that hydrogen was produced at different rates. Hydrogen is the most abundant element in the universe, but there is not enough in our atmosphere for it to be used as a renewable energy source. Manufactured hydrogen can be classified into different categories depending on the processes used.',
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
        text: '**Calculate** the number of moles of hydrogen produced when 12.80 kg of methane reacts with excess steam vapour when producing grey and blue hydrogen.\n\nCH₄(g) + H₂O(g) → CO(g) + 3H₂(g)',
        marks: 4,
        ph: 'M(CH₄)=16; n(CH₄)=12800/16=800 mol; 1 mol CH₄→3 mol H₂; n(H₂)=2400 mol',
      },
      {
        label: 'd',
        text: 'After it is produced, hydrogen must be transported to where it is needed. To allow it to be transported safely, the hydrogen is reacted with nitrogen to form ammonia. **Suggest** why it is easier to transport ammonia than hydrogen.',
        marks: 1,
        ph: 'Ammonia is liquid at room temperature; can be stored in standard pressurised tanks; hydrogen requires cryogenic storage',
      },
      {
        label: 'e',
        text: 'The blue hydrogen process uses CO₂ from the reaction of CH₄ and combines it with calcium oxide to produce calcium carbonate:\n\nCaO(s) + CO₂(g) → CaCO₃(s)\n\n**State** one environmental benefit of using the carbon dioxide in this process. **Justify** your answer.',
        marks: 2,
        ph: 'CO₂ not released into atmosphere → reduces greenhouse gas emissions; reduces climate change',
      },
    ],
  },

  // ── Q4 (16 marks, Crit A/B/C) — Frozen smoothies, ice crystals ──────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'States of matter, data analysis & hypothesis — frozen smoothies',
    marks: 16,
    stem: 'Frozen smoothies and chilled blended drinks are popular refreshments around the world. Examples include: Lassi (India, yogurt/fruit/spices), Agua fresca (Mexico, fruit/water/sugar), Smoothie bowl (Australia, frozen fruit/milk), and Granita (Italy, water/fruit juice/sugar). One of the main ingredients of these blended frozen drinks is the liquid base. When the mixture of ingredients is cooled, the water inside freezes producing ice crystals which trap the other ingredients and give the drink its texture.',
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
        text: 'The microscope image shows the structure of a frozen smoothie. **Measure** the size of the ice crystal at A. You should give your measurement in metres using standard form.',
        marks: 2,
        ph: 'Measurement = 42 μm (±5); conversion = 4.2 × 10⁻⁵ m',
        figImages: ['/images/papers/chemistry-may-2023/page-11.png'],
      },
      {
        label: 'c',
        text: 'A student used the following method to make a frozen smoothie at home. While the smoothie was being frozen, the student measured the temperature of the mixture and estimated the percentage of water that had frozen. Their results are shown in the table below.\n\n| Temperature / °C | Percentage of smoothie frozen / % |\n|---|---|\n| −0.95 | 0 |\n| −1.95 | 10 |\n| −3.95 | 45 |\n| −6.95 | 75 |\n| −10.95 | 90 |\n\n**Present** this data in a graph.',
        marks: 4,
        ph: 'x-axis: Temperature / °C; y-axis: % smoothie frozen; two points correct; all data plotted correctly',
        figImages: ['/images/papers/chemistry-may-2023/page-13.png'],
      },
      {
        label: 'd',
        text: 'Using your graph from part (c), **estimate** the temperature when 50% of the water would be frozen.',
        marks: 2,
        ph: 'Read from graph at y=50%: approximately −4.5 °C (accept −4 to −5)',
      },
      {
        label: 'e',
        text: 'The texture of frozen smoothies is affected by the size of the ice crystals they contain. This size is determined by the temperature at which the smoothie is frozen. The colder the mixture becomes, the smaller the ice crystals that form. Smoothies blast-frozen at −80°C will have a smoother texture than those made using the method in part (c).\n\n**Formulate** a hypothesis to test the effect of temperature on the texture of a frozen smoothie.',
        marks: 3,
        ph: 'If temperature is lower → then texture will be smoother → because ice crystals are smaller/form more quickly',
        figImages: ['/images/papers/chemistry-may-2023/page-15.png'],
      },
      {
        label: 'f',
        text: 'A student wanted to investigate how quickly different frozen blended drinks melted. The student collected the following data:\n\n| Frozen blend | Trial 1 | Trial 2 | Trial 3 |\n|---|---|---|---|\n| Yogurt blend | 35 min 14 s | 40 min 02 s | 38 min 45 s |\n| Berry blend | 50 min 28 s | 54 min 16 s | 52 min 03 s |\n| Orange blend | 1 hr 02 min | 59 min 34 s | 1 hr 06 min |\n\n**Suggest** one way that the student\'s data **presentation** could be improved.',
        marks: 1,
        ph: 'Use same units throughout; include mean value; include units in heading; consistent precision',
      },
      {
        label: 'g',
        text: '**Outline** if the data above validates the student\'s hypothesis.',
        marks: 2,
        ph: 'Yogurt blend does not melt slowest (orange blend melts slowest, yogurt blend melts fastest) → hypothesis is invalid',
      },
    ],
  },

  // ── Q5 (17 marks, Crit B/C) — Grit de-icing investigation ──────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Grit de-icing investigation design & data analysis',
    marks: 17,
    stem: 'A student decided to investigate the time taken for grit (crushed rock salt) to melt crushed ice and solid ice. They set up their investigation using crushed ice on one side and a solid ice block on the other, adding equal masses of grit to each.',
    figImages: ['/images/papers/chemistry-may-2023/page-18.png'],
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'How does the surface area of ice affect the time taken for grit to melt ice?',
      },
      {
        label: 'b',
        text: '**State** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nControl variable 1:\n\nControl variable 2:',
        marks: 4,
        ph: 'IV: surface area of ice; DV: time for ice to melt; CV1: mass of grit; CV2: type of grit / mass of ice / room temperature',
      },
      {
        label: 'c',
        text: '**State** how the set-up of the investigation in part (a) could be improved.',
        marks: 1,
        ph: 'Same mass of ice used; same surface area; more values of IV; carry out more trials',
      },
      {
        label: 'd',
        text: 'After studying how grit affects ice, the student wanted to study how quickly different household substances would melt ice. The results for sodium chloride and calcium chloride are shown below. The data table is incomplete. **Calculate** the missing values to complete the table, giving your values to a suitable number of decimal places.\n\n| Substance | Trial | Initial ice mass/g | Remaining ice/g | % remaining | % melted |\n|---|---|---|---|---|---|\n| Sodium chloride | 1 | 200.00 | 100.00 | [blank A] | 50.00 |\n| Calcium chloride | 2 | 160.00 | 112.00 | 70.00 | [blank B] |\n| Potassium chloride | 3 | 175.00 | 140.00 | 80.00 | 20.00 |',
        marks: 3,
        ph: 'Blank A: 100/200×100 = 50.00%; Blank B: (160−112)/160×100 = 30.00%',
        figImages: ['/images/papers/chemistry-may-2023/page-20.png'],
      },
      {
        label: 'e',
        text: '**Suggest** why sodium chloride was used in the investigation in part (d).',
        marks: 1,
        ph: 'Sodium chloride is the control/reference to which all other substances could be compared',
      },
      {
        label: 'f',
        text: 'In some areas of the world, temperatures drop below 0°C. This causes problems for transport. The infographic shows a variety of chemicals that can be used to remove ice and the temperature at which the ice will melt when each chemical is used.\n\nA road authority above the Arctic Circle uses a variety of de-icers depending upon the surface that needs to have ice removed. The average temperatures range from −15°C to −2°C but with the wind it can get as cold as −40°C.\n\nUse the infographic to **suggest** one de-icing material that would **not** be suitable to use to clear the roads. **Justify** your answer.',
        marks: 2,
        ph: 'Sodium chloride — only works above ~−15°C; temperatures can reach −40°C where it is ineffective',
        widget: 'radio_select',
        widgetOptions: ['Urea', 'Sodium chloride', 'Calcium magnesium acetate', 'Calcium chloride', 'Magnesium chloride', 'Potassium acetate'],
        figImages: ['/images/papers/chemistry-may-2023/page-21.png'],
      },
      {
        label: 'g',
        text: 'Chemicals containing chlorides can damage road infrastructure by corrosion. Using information from part (f), **state** which substance could be used to de-ice roads and also could be used to remove any ice from bridge surfaces before cold weather events. **Justify** your answer.',
        marks: 2,
        ph: 'Potassium acetate — contains no chloride AND works below −40°C (only substance meeting both criteria)',
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

  // ── Q6 (17 marks, Crit D/B) — De-icing: CaCl₂ hazard & design ──────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D/B: Hazards & investigation design — de-icing salts',
    marks: 17,
    stem: 'A new company is looking to provide a local community with a better de-icer for roads. You are provided with the following salts and asked to determine which will be the best one for de-icing roads: lithium chloride (LiCl), sodium chloride (NaCl), magnesium chloride (MgCl₂), calcium chloride (CaCl₂), barium chloride (BaCl₂).',
    figImages: ['/images/papers/chemistry-may-2023/page-25.png'],
    tasks: [
      {
        label: 'a',
        text: 'The image below shows a container of calcium chloride, CaCl₂. **Select** the hazard represented by the symbol shown on the container.',
        marks: 1,
        ph: 'GHS05 corrosive symbol = Corrosive',
        widget: 'radio_select',
        widgetOptions: ['Corrosive', 'Flammable', 'Radioactive', 'Toxic'],
      },
      {
        label: 'b',
        text: '**Design** an experiment to investigate which salt would be the best de-icer for roads. In your answer, you should include:\n- independent, dependent and control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data\n- any safety precautions you need to take.',
        marks: 16,
        ph: 'Variables (IV: type of salt, DV: time for ice to melt, CVs); equipment; method (3 repeats, same mass salt, same mass ice); safety (corrosive/irritants)',
      },
    ],
  },

  // ── Q7 (8 marks, Crit A/D) — Nylon amide bond & outdoor fabric comparison ───
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Amide bonds, fabric properties & outdoor clothing evaluation',
    marks: 8,
    stem: 'The fashion industry has evolved to use a variety of textiles. Natural materials such as wool and silk have been used since ancient times. Newer synthetic materials such as nylon and polyester are used in weatherproof clothing. The purpose and properties of each type of material are different. As new materials are developed, we need to consider their sustainability compared to natural sources.',
    figImages: ['/images/papers/chemistry-may-2023/page-26.png'],
    tasks: [
      {
        label: 'a',
        text: 'Nylon is a strong synthetic fibre made when a diamine and a dicarboxylic acid react to form an amide bond. The reaction is shown in a simplified form below.\n\n**Select** the Lewis structure showing the amide linkage formed in this reaction.',
        marks: 1,
        ph: 'Amide linkage = –C(=O)–NH– group; select C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['/images/papers/chemistry-may-2023/page-26.png'],
      },
      {
        label: 'b',
        text: 'Changing weather patterns mean that waterproof and breathable materials are increasingly needed for outdoor clothing. Using information from the table and your wider MYP studies, **discuss** and **evaluate** the suitability of different types of fabric for outdoor clothing. In your answer you should include:\n- properties for fabrics suitable for outdoor clothing\n- a comparison of at least three different fabrics\n- your opinion on which fabric is the most suitable.',
        marks: 7,
        ph: 'Properties: waterproof/breathable/durable; compare Wool/Nylon/Polyester/Cotton; opinion with justification for at least two',
        figImages: ['/images/papers/chemistry-may-2023/page-27.png'],
      },
    ],
  },

  // ── Q8 (14 marks, Crit D) — Fashion water footprint & sustainability ────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Environmental, economic & individual implications — textile water use',
    marks: 14,
    stem: 'The fashion industry consumes enormous quantities of water. It takes approximately 2,700 litres of water to produce one cotton T-shirt and 7,000 litres to produce one pair of jeans. Globally, textile dyeing is responsible for 20% of all industrial water pollution. The infographic below gives some information comparing the water footprint of conventionally grown cotton to the use of reclaimed textile fibres.',
    figImages: ['/images/papers/chemistry-may-2023/page-29.png'],
    tasks: [
      {
        label: 'a',
        text: 'Using information from the infographic and your wider knowledge, **discuss** and **evaluate** reducing the water footprint of the fashion industry as a solution to water pollution. In your answer you should include:\n- advantages to the environment of reclaiming textile fibres compared to growing new cotton\n- impacts on the economy of reducing textile water use\n- choices of an individual when considering how to reduce their clothing water footprint\n- a final appraisal on water-conscious fashion.',
        marks: 12,
        ph: 'Environment: less water/pollution; Economy: new industry/water savings; Individual: buy secondhand/wear longer; Appraisal with evidence',
      },
      {
        label: 'b',
        text: 'In recent years, upcycling old clothing has grown in popularity as a sustainable fashion trend. Upcycling involves creatively transforming unwanted garments into new, useful or artistic items.\n\n**Suggest** how upcycling could be part of the solution to reduce textile waste and water use.',
        marks: 2,
        ph: 'Extends the lifetime of clothing; no need to produce new garments; reduces water/chemical use; personalises clothing',
      },
    ],
  },
]
