import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2023-v2',
  subject: 'Chemistry',
  session: 'May',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (8 marks, Crit A) — Methanol combustion, organic families, biomass ───
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Combustion, organic families & surface area — biomass energy',
    marks: 8,
    stem: 'Methanol is an alcohol that can be produced from biomass and used as a fuel. It is burned to generate heat and electricity in some renewable energy plants. The combustion of methanol releases energy. The structures of some other organic molecules are shown below.',
    tasks: [
      {
        label: 'a',
        text: '**State** the type of energy change when methanol burns in air.',
        marks: 1,
        ph: 'Exothermic',
      },
      {
        label: 'b',
        text: '**Complete** the balanced equation for the complete combustion of methanol in oxygen:\n\n2CH₃OH + [?]O₂ → [?]CO₂ + [?]H₂O',
        marks: 2,
        ph: '3, 2, 4 (balance oxygen last)',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7', '8'],
      },
      {
        label: 'c',
        text: 'The structures of some other organic molecules are shown above.\n\n**Identify** the family that each molecule belongs to.',
        marks: 2,
        ph: 'Molecule A: Amine; Molecule B: Ester',
      },
      {
        label: 'd',
        text: 'Sawdust is a by-product of the timber industry and can be burned as a biomass fuel. **Explain** why fine sawdust should be used rather than large wood blocks.',
        marks: 3,
        ph: 'Greater surface area → faster rate of reaction → more energy released per unit time',
      },
    ],
  },

  // ── Q2 (8 marks, Crit A) — Geothermal energy, Sn/Bi, Lewis structure H₂O ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, Lewis structures & covalent bonding — geothermal energy',
    marks: 8,
    stem: 'An alternative to the use of fossil fuels is geothermal energy. Geothermal power plants use heat from beneath the Earth\'s surface to generate steam, which drives turbines to produce electricity. Tin (Sn) and bismuth (Bi) are elements used in low-temperature alloys and in thermoelectric materials that convert heat directly into electricity.',
    tasks: [
      {
        label: 'a',
        text: 'Use the periodic table to **identify** the missing information from the table below.\n\n| Element | Sn | Bi |\n|---|---|---|\n| Group | [blank] | [blank] |\n| Period | [blank] | [blank] |',
        marks: 2,
        ph: 'Sn: Group 4, Period 5; Bi: Group 5, Period 6',
      },
      {
        label: 'b',
        text: '**Outline** why geothermal energy is considered better for the environment than fossil fuels.',
        marks: 2,
        ph: 'No emissions from geothermal; geothermal is renewable; fossil fuels release CO₂/greenhouse gases',
      },
      {
        label: 'c',
        text: 'Water is used to produce steam in both conventional and geothermal power plants. **Select** the Lewis structure (also known as a dot diagram or dot cross diagram) for water (H₂O).',
        marks: 1,
        ph: 'H₂O has 2 O-H bonds and 2 lone pairs on O — select B',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'd',
        text: 'Carbon and tin form compounds with similar formulas. Some examples are methane (CH₄) and stannane (SnH₄). **Explain** why methane and stannane have similar formulas.',
        marks: 3,
        ph: 'Same group (Group 4) → same valence electrons; share electrons to form 4 covalent bonds',
      },
    ],
  },

  // ── Q3 (12 marks, Crit A/D) — Hydrogen: reactivity, catalyst, moles 9.60 kg ─
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Reactivity, catalysts, moles & implications — hydrogen production',
    marks: 12,
    stem: 'Hydrogen was discovered by Sir Henry Cavendish in 1766 when he reacted metals with acid. He called the gas produced "inflammable air." We now call this gas hydrogen. Cavendish placed three different metals: Zinc, Iron and Nickel into acid. He observed that hydrogen was produced at different rates. Hydrogen is the most abundant element in the universe, but there is not enough in our atmosphere for it to be used as a renewable energy source. Manufactured hydrogen can be classified into different categories depending on the processes used.',
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
        text: '**Calculate** the number of moles of hydrogen produced when 9.60 kg of methane reacts with excess steam vapour when producing grey and blue hydrogen.\n\nCH₄(g) + H₂O(g) → CO(g) + 3H₂(g)',
        marks: 4,
        ph: 'M(CH₄)=16; n(CH₄)=9600/16=600 mol; 1 mol CH₄→3 mol H₂; n(H₂)=1800 mol',
      },
      {
        label: 'd',
        text: 'After it is produced, hydrogen must be transported to where it is needed. To allow it to be transported safely, the hydrogen is reacted with nitrogen to form ammonia. **Suggest** one advantage of transporting ammonia rather than hydrogen.',
        marks: 1,
        ph: 'Ammonia is not flammable; has detectable smell; less reactive; easier to liquefy and store',
      },
      {
        label: 'e',
        text: 'The blue hydrogen process uses CO₂ from the reaction of CH₄ and combines it with calcium oxide to produce calcium carbonate:\n\nCaO(s) + CO₂(g) → CaCO₃(s)\n\n**State** one environmental benefit of using the carbon dioxide in this process. **Justify** your answer.',
        marks: 2,
        ph: 'CO₂ not released into atmosphere → reduces greenhouse gas emissions; reduces climate change',
      },
    ],
  },

  // ── Q4 (16 marks, Crit A/B/C) — Frozen sorbets, ice crystals ───────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'States of matter, data analysis & hypothesis — frozen sorbets',
    marks: 16,
    stem: 'Frozen sorbets and iced desserts are popular around the world. Examples include: Granita (Italy, flavoured water ice), Sherbet (Middle East, fruit juice/sugar), Palate cleanser sorbet (France, citrus/sugar), and Kakigori (Japan, shaved ice with flavoured syrup). One of the main ingredients of these frozen desserts is fruit juice or flavoured water. When the mixture is cooled, the water freezes producing ice crystals that determine the texture of the dessert.',
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
        text: 'The microscope image shows the structure of a frozen sorbet. **Measure** the size of the ice crystal at A. You should give your measurement in metres using standard form.',
        marks: 2,
        ph: 'Measurement = 66 μm (±5); conversion = 6.6 × 10⁻⁵ m',
        figImages: ['/images/papers/chemistry-may-2023/page-11.png'],
      },
      {
        label: 'c',
        text: 'A student used the following method to make a lemon sorbet at home. While the sorbet was being made, the student measured the temperature of the mixture and estimated the percentage of water that had frozen. Their results are shown in the table below.\n\n| Temperature / °C | Percentage of sorbet frozen / % |\n|---|---|\n| −1.05 | 0 |\n| −2.05 | 12 |\n| −4.05 | 50 |\n| −7.05 | 82 |\n| −10.05 | 95 |\n\n**Present** this data in a graph.',
        marks: 4,
        ph: 'x-axis: Temperature / °C; y-axis: % sorbet frozen; two points correct; all data plotted correctly',
        figImages: ['/images/papers/chemistry-may-2023/page-13.png'],
      },
      {
        label: 'd',
        text: 'Using your graph from part (c), **estimate** the temperature when 60% of the water would be frozen.',
        marks: 2,
        ph: 'Read from graph at y=60%: approximately −5 °C (accept −4.5 to −5.5)',
      },
      {
        label: 'e',
        text: 'The texture of sorbet is affected by the size of the ice crystals it contains. This size is determined by the temperature at which it is frozen. The colder the mixture becomes, the smaller the ice crystals that form. Sorbets frozen at −70°C will have a smoother texture than sorbets made using the method in part (c).\n\n**Formulate** a hypothesis to test the effect of temperature on the texture of a frozen sorbet.',
        marks: 3,
        ph: 'If temperature is lower → then texture will be smoother → because ice crystals are smaller/form more quickly',
        figImages: ['/images/papers/chemistry-may-2023/page-15.png'],
      },
      {
        label: 'f',
        text: 'A student wanted to investigate how quickly different frozen desserts melted. The student collected the following data:\n\n| Frozen dessert | Trial 1 | Trial 2 | Trial 3 |\n|---|---|---|---|\n| Grape granita | 33 min 42 s | 37 min 08 s | 35 min 24 s |\n| Lemon sorbet | 47 min 55 s | 52 min 03 s | 49 min 36 s |\n| Coconut sorbet | 1 hr 04 min | 1 hr 02 min | 58 min 17 s |\n\n**Suggest** one way that the student\'s data **presentation** could be improved.',
        marks: 1,
        ph: 'Use same units throughout; include mean value; include units in heading; consistent precision',
      },
      {
        label: 'g',
        text: '**Outline** if the data above validates the student\'s hypothesis.',
        marks: 2,
        ph: 'Grape granita does not melt slowest (coconut sorbet melts slowest, grape granita melts fastest) → does not confirm predicted order → hypothesis is invalid',
      },
    ],
  },

  // ── Q5 (17 marks, Crit B/C) — Antifreeze de-icing investigation ─────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Antifreeze de-icing investigation design & data analysis',
    marks: 17,
    stem: 'A student decided to investigate the time taken for a de-icing solution (sodium chloride, NaCl) to melt crushed ice and solid ice. They set up their investigation using crushed ice on one side and an ice block on the other, adding equal masses of de-icing solution to each.',
    figImages: ['/images/papers/chemistry-may-2023/page-18.png'],
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'How does the surface area of ice affect the time taken for a de-icing solution to melt ice?',
      },
      {
        label: 'b',
        text: '**State** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nControl variable 1:\n\nControl variable 2:',
        marks: 4,
        ph: 'IV: surface area of ice; DV: time for ice to melt; CV1: mass of de-icing solution; CV2: concentration of solution / mass of ice / room temperature',
      },
      {
        label: 'c',
        text: '**State** how the set-up of the investigation in part (a) could be improved.',
        marks: 1,
        ph: 'Same mass of ice used; same surface area; more values of IV; carry out more trials',
      },
      {
        label: 'd',
        text: 'After studying how the de-icing solution affects ice, the student wanted to study how quickly different substances would melt ice. The results for sodium chloride and magnesium chloride are shown below. The data table is incomplete. **Calculate** the missing values to complete the table, giving your values to a suitable number of decimal places.\n\n| Substance | Trial | Initial ice mass/g | Remaining ice/g | % remaining | % melted |\n|---|---|---|---|---|---|\n| Sodium chloride | 1 | 180.00 | 126.00 | [blank A] | 30.00 |\n| Magnesium chloride | 2 | 120.00 | 78.00 | 65.00 | [blank B] |\n| Calcium acetate | 3 | 150.00 | 105.00 | 70.00 | 30.00 |',
        marks: 3,
        ph: 'Blank A: 126/180×100 = 70.00%; Blank B: (120−78)/120×100 = 35.00%',
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
        text: 'In some areas of the world, temperatures drop below 0°C. This causes problems for transport. The infographic shows a variety of chemicals that can be used to remove ice and the temperature at which the ice will melt when each chemical is used.\n\nA mountain resort above 2000 m altitude uses a variety of de-icers. The average temperatures range from −20°C to −5°C but with wind chill it can get as cold as −35°C.\n\nUse the infographic to **suggest** one de-icing material that would **not** be suitable to use to clear the resort roads. **Justify** your answer.',
        marks: 2,
        ph: 'Calcium magnesium acetate — only works above ~−27°C; temperatures can reach −35°C where it is ineffective',
        widget: 'radio_select',
        widgetOptions: ['Urea', 'Sodium chloride', 'Calcium magnesium acetate', 'Calcium chloride', 'Magnesium chloride', 'Potassium acetate'],
        figImages: ['/images/papers/chemistry-may-2023/page-21.png'],
      },
      {
        label: 'g',
        text: 'Chemicals containing chlorides can damage vehicle underbodies by corrosion. Using information from part (f), **state** which substance could be used to de-ice resort roads and also could be used safely near metal infrastructure. **Justify** your answer.',
        marks: 2,
        ph: 'Potassium acetate — contains no chloride AND works below −35°C (only substance meeting both criteria)',
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

  // ── Q6 (17 marks, Crit D/B) — De-icing: BaCl₂ hazard & design ──────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D/B: Hazards & investigation design — de-icing salts',
    marks: 17,
    stem: 'A new company is looking to provide a local community with a better de-icer for roads. You are provided with the following salts and asked to determine which will be the best one for de-icing roads: lithium chloride (LiCl), potassium chloride (KCl), strontium chloride (SrCl₂), calcium chloride (CaCl₂), barium chloride (BaCl₂).',
    figImages: ['/images/papers/chemistry-may-2023/page-25.png'],
    tasks: [
      {
        label: 'a',
        text: 'The image below shows a container of barium chloride, BaCl₂. **Select** the hazard represented by the symbol shown on the container.',
        marks: 1,
        ph: 'Skull and crossbones symbol = Toxic',
        widget: 'radio_select',
        widgetOptions: ['Corrosive', 'Flammable', 'Radioactive', 'Toxic'],
      },
      {
        label: 'b',
        text: '**Design** an experiment to investigate which salt would be the best de-icer for roads. In your answer, you should include:\n- independent, dependent and control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data\n- any safety precautions you need to take.',
        marks: 16,
        ph: 'Variables (IV: type of salt, DV: time for ice to melt, CVs); equipment; method (3 repeats, same mass salt, same mass ice); safety (toxic BaCl₂)',
      },
    ],
  },

  // ── Q7 (8 marks, Crit A/D) — Polyamide peptide bond & moisture-wicking ──────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Peptide bonds, fabric properties & sports clothing evaluation',
    marks: 8,
    stem: 'The fashion industry has evolved to use a variety of textiles. Natural materials such as cotton and silk have been used since ancient times. Newer synthetic materials such as polyamide and elastane are used in performance sportswear. The purpose and properties of each type of material are different. As new materials are developed, we need to consider their sustainability compared to natural sources.',
    figImages: ['/images/papers/chemistry-may-2023/page-26.png'],
    tasks: [
      {
        label: 'a',
        text: 'Proteins are natural polyamides. They are formed when amino acids react together to form peptide bonds. The reaction is shown in a simplified form below.\n\n**Select** the Lewis structure showing the peptide bond linkage formed in this reaction.',
        marks: 1,
        ph: 'Peptide bond = –C(=O)–NH– group; select A',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['/images/papers/chemistry-may-2023/page-26.png'],
      },
      {
        label: 'b',
        text: 'Rising global temperatures mean that lightweight, moisture-wicking materials are increasingly needed for sports clothing. Using information from the table and your wider MYP studies, **discuss** and **evaluate** the suitability of different types of fabric for sports clothing. In your answer you should include:\n- properties for fabrics suitable for sports clothing\n- a comparison of at least three different fabrics\n- your opinion on which fabric is the most suitable.',
        marks: 7,
        ph: 'Properties: moisture-wicking/lightweight/breathable; compare Merino wool/Polyester/Nylon/Cotton; opinion with justification for at least two',
        figImages: ['/images/papers/chemistry-may-2023/page-27.png'],
      },
    ],
  },

  // ── Q8 (14 marks, Crit D) — Electronic textiles & e-waste sustainability ────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Environmental, economic & individual implications — e-textile waste',
    marks: 14,
    stem: 'Electronic textiles (e-textiles) are fabrics that incorporate electronic components such as LEDs, sensors, or flexible circuits. They are used in wearable technology, medical monitoring garments, and smart sportswear. As this technology grows, the disposal of e-textiles creates a new category of electronic waste that is difficult to recycle. The infographic below gives some information comparing the environmental impact of manufacturing new e-textiles versus refurbishing and reusing existing ones.',
    figImages: ['/images/papers/chemistry-may-2023/page-29.png'],
    tasks: [
      {
        label: 'a',
        text: 'Using information from the infographic and your wider knowledge, **discuss** and **evaluate** refurbishing e-textiles as a solution to the waste created by the smart fashion industry. In your answer you should include:\n- advantages to the environment of refurbishing compared to manufacturing new e-textiles\n- impacts on the economy of a refurbishing industry\n- choices of an individual when considering how to manage their e-textile products\n- a final appraisal on refurbishing rather than manufacturing new e-textiles.',
        marks: 12,
        ph: 'Environment: less electronic waste/emissions; Economy: repair industry/specialist skills; Individual: extend lifetime/return to manufacturer; Appraisal with evidence',
      },
      {
        label: 'b',
        text: 'In recent years, repair cafés have become popular community events where people can bring broken or worn garments and electronic devices to be mended by volunteers.\n\n**Suggest** how repair cafés could be part of the solution to reduce e-textile waste.',
        marks: 2,
        ph: 'Extend lifetime of e-textile garments; reduce need for new manufacturing; support local economy; teach repair skills',
      },
    ],
  },
]
