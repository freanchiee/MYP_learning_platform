import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2025-v1',
  subject: 'Chemistry',
  session: 'May',
  year: 2025,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (6 marks, Crit A) — Watchmaking gemstones: periodic table, moles ─────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, moles & chromatography — watchmaking gemstones',
    marks: 6,
    stem: 'Watchmakers use precious gemstones and minerals in the construction of timepieces. The table shows three materials used in watch components and their chemical formulae.\n\n| Material | Chemical formula |\n|---|---|\n| Sapphire | Al₂O₃ |\n| Spinel | MgAl₂O₄ |\n| Quartz | SiO₂ |',
    tasks: [
      {
        label: 'a',
        text: '**Identify** the group and the period of the element that is present in all three of the watch materials.',
        marks: 2,
        ph: 'Oxygen (O); Group 16, Period 2',
      },
      {
        label: 'b',
        text: '**Calculate** the number of moles in a 28.4 g sample of spinel (MgAl₂O₄). Give your answer to 2 significant figures.\n\n(Relative atomic masses: Mg = 24, Al = 27, O = 16)',
        marks: 3,
        ph: 'M(MgAl₂O₄) = 142; n = 28.4/142 = 0.20 mol',
      },
      {
        label: 'c',
        text: '**Select** the section of the periodic table where nickel (Ni) is found.',
        marks: 1,
        ph: 'Transition metals (d-block)',
        widget: 'radio_select',
        widgetOptions: [
          's-block / Groups 1–2',
          'p-block / Groups 13–18',
          'd-block / transition metals',
          'f-block / lanthanides and actinides',
        ],
      },
    ],
  },

  // ── Q2 (7 marks, Crit A) — Thermochromism, BiI₃, functional groups ──────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Thermochromism, reversible reactions & functional groups — BiI₃ colour-change',
    marks: 7,
    stem: 'Baby feeding spoons are made with thermochromic handles that change colour when the temperature changes. When the spoon is placed in hot food, the handle changes colour to warn parents. When the food cools, the handle returns to its original colour.\n\nThermochromic spoons contain bismuth(III) iodide (BiI₃), which changes colour at different temperatures. Other objects such as packaging labels can also be made with BiI₃.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of change that occurs when the spoon handle changes colour as it is placed in hot food.',
        marks: 1,
        ph: 'Endothermic',
        widget: 'radio_select',
        widgetOptions: ['Endothermic', 'Exothermic', 'Irreversible', 'Physical'],
      },
      {
        label: 'b',
        text: '**State** the scientific term used to describe the colour change when the spoon handle returns to its original colour.',
        marks: 1,
        ph: 'Reversible',
      },
      {
        label: 'c',
        text: '**State** the chemical formula of bismuth(III) iodide.',
        marks: 1,
        ph: 'BiI₃',
      },
      {
        label: 'd',
        text: '**Suggest** the colour of a spoon handle made from BiI₃ in each of the situations below.',
        marks: 3,
        ph: 'Ice water → Brown; Room temp → Orange; Hot water → Yellow',
        widget: 'inline_dropdown_select',
        widgetItems: ['In ice water (0 °C)', 'At room temperature (20 °C)', 'In hot water (above 60 °C)'],
        widgetOptions: ['Brown', 'Orange', 'Yellow', 'Green'],
      },
      {
        label: 'e',
        text: '**Select** the name of the organic functional group circled in the structure of the thermochromic compound.',
        marks: 1,
        ph: 'Carboxylic acid (–COOH)',
        widget: 'radio_select',
        widgetOptions: ['Carboxylic acid', 'Aldehyde', 'Ketone', 'Ester'],
      },
    ],
  },

  // ── Q3 (15 marks, Crit A) — LED billboards, noble gases, xenon, atmosphere ──
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Oxidation/reduction, noble gases, isotopes & atmospheric layers — LED billboards',
    marks: 15,
    stem: 'LED billboards have replaced older painted and illuminated signs. Older billboard structures used aluminium frameworks, while modern LED panels use minimal metallic components. Some coloured lighting effects use noble gases such as neon, xenon, or krypton sealed in glass tubes.',
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why the material used to make large outdoor signs has changed over time.',
        marks: 1,
        ph: 'Lasts longer / more energy-efficient / more appealing',
      },
      {
        label: 'b',
        text: '**State** the chemical formula for aluminium oxide.',
        marks: 1,
        ph: 'Al₂O₃',
      },
      {
        label: 'c',
        text: '**State** which element is oxidised and which element is reduced when aluminium reacts with oxygen to form aluminium oxide.\n\nOxidised:\n\nReduced:',
        marks: 2,
        ph: 'Oxidised: Aluminium; Reduced: Oxygen',
      },
      {
        label: 'd',
        text: '**Determine** the number of electrons and neutrons in each xenon isotope. The number of protons has been given.\n\n| Isotope | ¹²⁸₅₄Xe | ¹³⁰₅₄Xe |\n|---|---|---|\n| Electrons | [?] | [?] |\n| Protons | 54 | 54 |\n| Neutrons | [?] | [?] |',
        marks: 3,
        ph: '¹²⁸Xe: e=54, n=74; ¹³⁰Xe: e=54, n=76',
        widget: 'fill_blank',
        widgetOptions: ['54', '74', '76', '128', '130', '64', '68', '72', '80'],
      },
      {
        label: 'e',
        text: '**Outline** why noble gases do not cause fires.',
        marks: 1,
        ph: 'Have full/complete outer electron shells; do not react',
      },
      {
        label: 'f',
        text: '**State** the electronic configuration of an oxygen atom.',
        marks: 1,
        ph: '2,6',
      },
      {
        label: 'g',
        text: '**Outline** the bonding found in oxygen molecules (O₂).',
        marks: 2,
        ph: 'Covalent bonding; electrons shared between the two oxygen atoms',
      },
      {
        label: 'h',
        text: '**Identify** which layer of the atmosphere contains particles with the highest kinetic energy. **Justify** your answer.',
        marks: 2,
        ph: 'Exosphere; highest temperature → highest kinetic energy',
        figImages: ['/images/papers/chemistry-may-2025/page-19.png'],
      },
      {
        label: 'i',
        text: 'When oxygen gains energy from solar flares it becomes unstable. The gained energy is lost naturally and released as green light. **Suggest** which layer of the atmosphere you would expect to find the green lights in. **Justify** your answer.',
        marks: 2,
        ph: 'Thermosphere; this is where the most oxygen is found',
        figImages: ['/images/papers/chemistry-may-2025/page-18.png'],
      },
    ],
  },

  // ── Q4 (17 marks, Crit C) — Hard water, soap titration ─────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Hard water classification — soap titration data processing',
    marks: 17,
    stem: 'Hard water contains dissolved calcium and magnesium salts. A group of students investigated the hardness of five water samples (A–E) from different tap water sources by measuring the volume of soap solution needed to produce a lasting lather.\n\nThe students also boiled samples A, C, and E and measured the volume of soap needed again. Their results are shown in the table.',
    tasks: [
      {
        label: 'a',
        text: '**Determine** the final burette reading for sample D using the photograph. State the reading to 1 decimal place.',
        marks: 2,
        ph: '47.5 cm³',
      },
      {
        label: 'b',
        text: '**Calculate** the volume of soap solution used for samples B and D.\n\nSample B: initial reading = 8.0 cm³, final reading = 15.0 cm³\nSample D: initial reading = 26.0 cm³',
        marks: 2,
        ph: 'B = 7.0 cm³; D = 21.5 cm³',
      },
      {
        label: 'c',
        text: '**Classify** each of the samples A, C, and E as temporary hard, permanent hard, or a mixture of both. **Justify** each classification.\n\nAfter boiling — Sample A: 9.0 cm³; Sample C: 22.0 cm³; Sample E: 9.0 cm³\nBefore boiling — Sample A: 18.0 cm³; Sample C: 22.0 cm³; Sample E: 15.0 cm³',
        marks: 5,
        ph: 'A: temporary (halved after boiling); C: permanent (unchanged); E: mixture (reduced but not halved)',
      },
      {
        label: 'd',
        text: '**Formulate** a hypothesis linking the permanent hardness to the dissolved salt concentration in the data table.',
        marks: 2,
        ph: 'If mass/concentration of dissolved salts increases, then permanent hardness increases; because Ca²⁺/Mg²⁺ ions from sulphates cause permanent hardness',
      },
      {
        label: 'e',
        text: '**Plot** a graph of pH against permanent hardness using the data provided. Label both axes with a quantity and a unit.',
        marks: 4,
        ph: 'Hardness on x-axis (mg dm⁻³); pH on y-axis; even scale; at least 3 points plotted correctly',
      },
      {
        label: 'f',
        text: 'After analysing the results, the students concluded that hard water is acidic. **Comment** on the validity of their conclusion. **Justify** your answer.',
        marks: 2,
        ph: 'Invalid; hard water is not acidic / is basic; pH of hard water is above 7',
      },
    ],
  },

  // ── Q5 (12 marks, Crit B) — Limescale removal with different acids ──────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Limescale removal investigation — phosphoric, citric, acetic, lactic acids',
    marks: 12,
    stem: 'When water with temporary hardness is boiled, the soluble calcium hydrogen carbonate (Ca(HCO₃)₂) decomposes:\n\nCa(HCO₃)₂(aq) → CaCO₃(s) + CO₂(g) + H₂O(l)\n\nLimescale can be removed by reacting it with an acid:\n\ncalcium carbonate + acid → calcium salt + carbon dioxide + water\n\nA group of students investigated which acid is best for removing limescale from used hot water pipes. They used phosphoric acid, citric acid, acetic acid, and lactic acid. They also tested a shop-bought liquid descaler.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the hazard represented by the symbol shown.',
        marks: 1,
        ph: 'Corrosive',
        widget: 'radio_select',
        widgetOptions: ['Corrosive', 'Flammable', 'Toxic', 'Oxidising'],
        figImages: ['/images/papers/chemistry-may-2025/page-39.png'],
      },
      {
        label: 'b',
        text: '**Formulate** a research question for the students\' investigation.',
        marks: 1,
        ph: 'How does the type of acid affect the time / mass of limescale or calcium carbonate removed?',
      },
      {
        label: 'c',
        text: '**State** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nTwo controlled variables:',
        marks: 4,
        ph: 'IV: type of acid; DV: time or mass; CVs: volume of acid, concentration of acid, temperature, length of pipe',
      },
      {
        label: 'd',
        text: 'The students presented their data in the table below (mass of pipe before and after descaling for each acid). **Suggest** two ways in which the data **presentation** could be improved.',
        marks: 2,
        ph: 'Include unit of mass / give values to consistent d.p. / show change in mass / add title / give chemical name of shop-bought descaler',
      },
      {
        label: 'e',
        text: '**Determine** which acid is most effective at removing limescale using the students\' results. **Justify** your answer.',
        marks: 2,
        ph: 'Phosphoric acid; the mass changed the most (4.8 g reduction)',
      },
      {
        label: 'f',
        text: 'A second group of students noticed that the masses before descaling in the table were all different. **Suggest** a reason why the masses before descaling were different.',
        marks: 1,
        ph: 'Different masses of limescale / different lengths of pipe were used',
      },
      {
        label: 'g',
        text: 'The students only carried out this investigation once. **Comment** on how this will affect the validity of the data collected.',
        marks: 1,
        ph: 'Data not valid / should have more trials / cannot calculate average / cannot exclude outliers',
      },
    ],
  },

  // ── Q6 (19 marks, Crit B) — Citric acid kettle descaling experiment ─────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — minimum citric acid concentration to remove limescale',
    marks: 19,
    stem: 'Limescale inside kettles reduces their heating efficiency. Students want to advise the school community on how to descale their kettles using safe, household chemicals. Citric acid (found in lemons and many household cleaners) is widely available. In line with the principles of green chemistry, the students want to find the lowest concentration of citric acid that would remove a given mass of limescale.\n\nTo model limescale, the students use calcium carbonate. They are provided with distilled water, different sized pieces of calcium carbonate, and a stock solution of citric acid with a concentration of 0.8 mol dm⁻³.',
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why the students decided to test citric acid rather than hydrochloric acid.',
        marks: 1,
        ph: 'Citric acid is food-safe / found in fruit / HCl not a household chemical / citric acid is less hazardous / weaker acid / easier to dispose of',
      },
      {
        label: '',
        text: '**Design** an experiment to investigate the minimum concentration of citric acid required to remove a given mass of limescale. In your answer you must include:\n• the independent variable, the dependent variable and two controlled variables\n• a list of the equipment that you will use\n• the method you will follow\n• the details of the measurements you will take to collect sufficient data\n• any safety precautions you will need to take.',
        marks: 18,
        ph: 'IV: citric acid concentration; DV: mass CaCO₃ remaining / time; CVs: mass CaCO₃, temperature, volume acid; equipment: balance, burette/measuring cylinder, beakers, timer; step-by-step method with repeats; measurements; safety: goggles, gloves',
      },
    ],
  },

  // ── Q7 (17 marks, Crit D) — Plastic packaging for haircare products ─────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Evaluate — plastic types for haircare product packaging',
    marks: 17,
    stem: 'The global personal care industry produces billions of plastic containers each year. Haircare products such as shampoo and conditioner are sold in plastic bottles. The increased environmental awareness of consumers has driven demand for more sustainable packaging options.\n\nPlastics can be split into two groups: those made from crude oil and those made from plant-based materials. These two groups can be split further into biodegradable and non-biodegradable plastics. The table shows information about three different types of plastic.',
    tasks: [
      {
        label: 'a',
        text: 'Propene can be used to produce a crude-oil-based non-biodegradable plastic called polypropene. **Select** the Lewis structure of propene (C₃H₆).',
        marks: 1,
        ph: 'Propene (C₃H₆) has a C=C double bond with a methyl group; option C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: '',
        text: '**Discuss** and **evaluate** the different types of plastic used for haircare product packaging. In your answer you should include:\n• a justification of the **properties** needed for the **plastic** used in haircare packaging\n• a comparison of the suitability of the three types of **plastic** for haircare packaging\n• the economic impacts of the three types of plastic\n• the environmental impacts of the three types of plastic\n• your choice with justification.',
        marks: 16,
        ph: 'Properties: waterproof/flexible/durable justified; suitability comparison (biodegradability, recyclability); economic impacts all 3 types; environmental impacts all 3 types; reasoned final choice',
      },
    ],
  },

  // ── Q8 (7 marks, Crit D) — Haircare types, production & social impacts ──────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Discuss — haircare product types, production processes and social impacts',
    marks: 7,
    stem: 'Traditionally, conditioners and hair treatments are made from naturally occurring materials such as plant oils, beeswax, and lanolin (an animal-derived fat containing carboxylic acids). A recent technical innovation uses bio-based polymers derived from plant starch as an alternative to petrochemical ingredients. The table below gives information about different types of conditioner.\n\n| | Natural conditioner | Crude-oil-based conditioner | Plant starch–based conditioner |\n|---|---|---|---|\n| Raw materials | Plant oils / beeswax / lanolin | Crude oil (silicones) | Fermented plant starch |\n| Toxic potential | Low (no additives needed) | Moderate (additives needed) | Not yet established |\n| Conditioning properties | Naturally occurring | Needs additives | Needs additives |\n| Cost | Intermediate | Lowest | Highest |\n| Availability | Limited | High | Very limited |\n| Allergy risk | Sensitivities to natural ingredients | Sensitivities to silicone additives | Sensitivities to polymer additives |',
    tasks: [
      {
        label: '',
        text: '**Discuss** the issues an individual would consider when choosing which type of conditioner to use. In your answer you should include:\n• a comparison between the production processes of conditioner made using plant starch and one other type of conditioner\n• two social impacts that could be considered when choosing between these two types of conditioner.',
        marks: 7,
        ph: 'Production: plant starch uses fermented starch vs crude oil (silicones) / plant oils; social: cost difference, toxic potential, allergy risk, availability, vegan/ethical concerns',
      },
    ],
  },
]
