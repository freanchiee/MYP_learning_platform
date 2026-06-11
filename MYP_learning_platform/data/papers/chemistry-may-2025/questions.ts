import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2025',
  subject: 'Chemistry',
  session: 'May',
  year: 2025,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (6 marks, Crit A) — Jewellery: periodic table, moles ────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, moles & chromatography — jewellery materials',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 6,
    stem: 'Jewellery from around the world uses different materials. The table shows three precious materials and their chemical formulas.\n\n| Material | Chemical formula |\n|---|---|\n| Pearl | CaCO₃ |\n| Jade | NaAlSi₂O₆ |\n| Ruby | Al₂O₃ |',
    figImages: ['/images/papers/chemistry-may-2025/page-03.png'],
    tasks: [
      {
        label: 'a',
        text: '**Identify** the group and the period of the element that is present in all three of the jewellery materials.',
        marks: 2,
        ph: 'Oxygen (O); Group 16, Period 2',
      },
      {
        label: 'b',
        text: '**Calculate** the number of moles in a 75 g piece of jade (NaAlSi₂O₆). Give your answer to 2 significant figures.\n\n(Relative atomic masses: Na = 23, Al = 27, Si = 28, O = 16)',
        marks: 3,
        ph: 'M(NaAlSi₂O₆) = 202; n = 75/202 = 0.37 mol',
      },
      {
        label: 'c',
        text: '**Select** the section of the periodic table where chromium (Cr) is found.',
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

  // ── Q2 (7 marks, Crit A) — Thermochromism, CuI, functional groups ──────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Thermochromism, reversible reactions & functional groups — CuI colour-change',
    topicCanonical: 'Chemical Equations & Reactions',
    topicGroup: 'Chemical Reactions',
    marks: 7,
    stem: 'Some T-shirts are made with thermochromic dyes that change colour when the temperature changes. When a warm hand is placed on the T-shirt, the dye changes colour. When the hand is removed, the T-shirt returns to its original colour.\n\nThermochromic compounds contain copper(I) iodide (CuI), which changes colour when heated or cooled. Mugs and other objects can also be made with CuI.',
    figImages: ['/images/papers/chemistry-may-2025/page-06.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of change that occurs when the T-shirt changes colour as a hand is placed on it.',
        marks: 1,
        ph: 'Endothermic',
        widget: 'radio_select',
        widgetOptions: ['Endothermic', 'Exothermic', 'Irreversible', 'Physical'],
      },
      {
        label: 'b',
        text: '**State** the scientific term used to describe the colour change when the T-shirt returns to its original colour.',
        marks: 1,
        ph: 'Reversible',
      },
      {
        label: 'c',
        text: '**State** the chemical formula of copper(I) iodide.',
        marks: 1,
        ph: 'CuI',
      },
      {
        label: 'd',
        text: '**Suggest** the colour of a cup made from CuI in each of the situations below.',
        marks: 3,
        ph: 'Room temp → Brown; Hot coffee → Green; Fridge → Brown',
        widget: 'inline_dropdown_select',
        widgetItems: ['Room temperature', 'Cup of hot coffee', 'In a refrigerator'],
        widgetOptions: ['Brown', 'Green', 'White', 'Yellow'],
      },
      {
        label: 'e',
        text: '**Select** the name of the organic functional group circled in the structure of the thermochromic compound.',
        marks: 1,
        ph: 'Carboxylic acid (–COOH)',
        widget: 'radio_select',
        widgetOptions: ['Carboxylic acid', 'Aldehyde', 'Ketone', 'Ester'],
        figImages: ['/images/papers/chemistry-may-2025/page-08.png'],
      },
    ],
  },

  // ── Q3 (15 marks, Crit A) — Signs, noble gases, isotopes, atmosphere ───────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Oxidation/reduction, noble gases, isotopes & atmospheric layers — illuminated signs',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 15,
    stem: 'Illuminated signs can be made from different materials. Older signs used iron frameworks, while modern signs use light-emitting diodes (LEDs). Some coloured signs use noble gases such as neon, argon, or krypton.',
    figImages: ['/images/papers/chemistry-may-2025/page-10.png'],
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why the material used to make illuminated signs has changed over time.',
        marks: 1,
        ph: 'Lasts longer / more appealing / more modern',
      },
      {
        label: 'b',
        text: '**State** the chemical formula for iron(III) oxide.',
        marks: 1,
        ph: 'Fe₂O₃',
      },
      {
        label: 'c',
        text: '**State** which element is oxidised and which element is reduced when iron reacts with oxygen to form iron(III) oxide.\n\nOxidised:\n\nReduced:',
        marks: 2,
        ph: 'Oxidised: Iron; Reduced: Oxygen',
      },
      {
        label: 'd',
        text: '**Determine** the number of electrons and neutrons in each krypton isotope. The number of protons has been given.\n\n| Isotope | ⁸²₃₆Kr | ⁸⁴₃₆Kr |\n|---|---|---|\n| Electrons | [?] | [?] |\n| Protons | 36 | 36 |\n| Neutrons | [?] | [?] |',
        marks: 3,
        ph: '⁸²Kr: e=36, n=46; ⁸⁴Kr: e=36, n=48',
        widget: 'fill_blank',
        widgetOptions: ['36', '46', '48', '82', '84', '40', '42', '38', '44'],
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
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 17,
    stem: 'Hard water contains dissolved calcium and magnesium salts. A group of students investigated the hardness of five water samples (A–E) by measuring the volume of soap solution needed to produce a lasting lather.\n\nThe students also boiled samples A, C, and E and measured the volume of soap needed again. Their results are shown in the table.',
    figImages: ['/images/papers/chemistry-may-2025/page-23.png'],
    tasks: [
      {
        label: 'a',
        text: '**Determine** the final burette reading for sample D using the photograph. State the reading to 1 decimal place.',
        marks: 2,
        ph: '49.0 cm³',
        figImages: ['/images/papers/chemistry-may-2025/page-25.png'],
      },
      {
        label: 'b',
        text: '**Calculate** the volume of soap solution used for samples B and D.',
        marks: 2,
        ph: 'B = 10.0 cm³; D = 24.0 cm³',
      },
      {
        label: 'c',
        text: '**Classify** each of the samples A, C, and E as temporary hard, permanent hard, or a mixture of both. **Justify** each classification.\n\nAfter boiling — Sample A: 10.0 cm³; Sample C: 25.0 cm³; Sample E: 8.0 cm³',
        marks: 5,
        ph: 'A: temporary (volume halved after boiling); C: permanent (volume unchanged); E: mixture (volume slightly reduced)',
      },
      {
        label: 'd',
        text: '**Formulate** a hypothesis linking the permanent hardness to the dissolved salt concentration in the data table.',
        marks: 2,
        ph: 'If mass/concentration of dissolved salts increases, then permanent hardness increases; because Ca²⁺/Mg²⁺ ions from sulphates cause permanent hardness',
        figImages: ['/images/papers/chemistry-may-2025/page-30.png'],
      },
      {
        label: 'e',
        text: '**Plot** a graph of pH against permanent hardness using the data provided. Label both axes with a quantity and a unit.',
        marks: 4,
        ph: 'Hardness on x-axis (mg dm⁻³); pH on y-axis; even scale; at least 3 points plotted correctly',
        figImages: ['/images/papers/chemistry-may-2025/page-32.png'],
      },
      {
        label: 'f',
        text: 'After analysing the results, the students concluded that hard water is acidic. **Comment** on the validity of their conclusion. **Justify** your answer.',
        marks: 2,
        ph: 'Invalid; hard water is not acidic / is basic; pH of hard water is above 7',
      },
    ],
  },

  // ── Q5 (12 marks, Crit B/C) — Limescale removal investigation ──────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Limescale removal investigation — acid types',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 12,
    stem: 'When water with temporary hardness is boiled, the soluble calcium hydrogen carbonate (Ca(HCO₃)₂) decomposes:\n\nCa(HCO₃)₂(aq) → CaCO₃(s) + CO₂(g) + H₂O(l)\n\nLimescale can be removed by reacting it with an acid:\n\ncalcium carbonate + acid → calcium salt + carbon dioxide + water\n\nA group of students investigated which acid is best for removing limescale from used hot water pipes. They used hydrochloric acid, lactic acid, phosphoric acid, and citric acid. They also tested a shop-bought liquid descaler.',
    figImages: ['/images/papers/chemistry-may-2025/page-37.png'],
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
        figImages: ['/images/papers/chemistry-may-2025/page-41.png'],
      },
      {
        label: 'e',
        text: '**Determine** which acid is most effective at removing limescale using the students\' results. **Justify** your answer.',
        marks: 2,
        ph: 'Hydrochloric acid; the mass changed the most (4.5 g reduction)',
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

  // ── Q6 (19 marks, Crit B) — Ethanoic acid limescale experiment design ───────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — minimum ethanoic acid concentration to remove limescale',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 19,
    stem: 'Limescale inside kettles can reduce their heating efficiency. Students want to help the school community save energy by advising them on how to descale their kettles. Ethanoic acid (vinegar) is commonly available in households. In line with the principles of green chemistry, the students want to find the lowest concentration of ethanoic acid that would remove a given mass of limescale.\n\nTo model limescale, the students use calcium carbonate. They are provided with distilled water, different sized pieces of calcium carbonate, and vinegar with an ethanoic acid concentration of 1.5 mol dm⁻³.',
    figImages: ['/images/papers/chemistry-may-2025/page-44.png'],
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why the students decided to test ethanoic acid rather than hydrochloric acid.',
        marks: 1,
        ph: 'HCl not a common household chemical / ethanoic acid safer / weaker acid / less hazardous / easier to dispose of',
      },
      {
        label: '',
        text: '**Design** an experiment to investigate the minimum concentration of ethanoic acid required to remove a given mass of limescale. In your answer you must include:\n• the independent variable, the dependent variable and two controlled variables\n• a list of the equipment that you will use\n• the method you will follow\n• the details of the measurements you will take to collect sufficient data\n• any safety precautions you will need to take.',
        marks: 18,
        ph: 'IV: ethanoic acid concentration; DV: mass CaCO₃ remaining / time; CVs: mass CaCO₃, temperature, volume acid; equipment: balance, burette/measuring cylinder, beakers, timer; step-by-step method with repeats; measurements; safety: goggles, gloves',
      },
    ],
  },

  // ── Q7 (17 marks, Crit D) — Plastic packaging for liquid soap ──────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Evaluate — plastic types for liquid soap packaging',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'Handwashing with soap reduces the spread of diseases and infections caused by microbes. The COVID-19 pandemic increased the frequency of handwashing globally. This increased the demand for liquid soap and its plastic packaging.\n\nPlastics can be split into two groups: those made from crude oil and those made from plant-based materials. These two groups can be split further into biodegradable and non-biodegradable plastics. The table shows information about three different types of plastic.',
    figImages: ['/images/papers/chemistry-may-2025/page-51.png'],
    tasks: [
      {
        label: 'a',
        text: 'Ethene can be used to produce a crude-oil-based non-biodegradable plastic called polyethene. **Select** the Lewis structure of ethene.',
        marks: 1,
        ph: 'Ethene (C₂H₄) has a C=C double bond with 2H on each carbon; option B',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['/images/papers/chemistry-may-2025/page-50.png'],
      },
      {
        label: '',
        text: '**Discuss** and **evaluate** the different types of plastic used for liquid soap packaging. In your answer you should include:\n• a justification of the **properties** needed for the **plastic** used in liquid soap packaging\n• a comparison of the suitability of the three types of **plastic** for liquid soap packaging\n• the economic impacts of the three types of plastic\n• the environmental impacts of the three types of plastic\n• your choice with justification.',
        marks: 16,
        ph: 'Properties: waterproof/flexible/durable justified; suitability comparison (biodegradability, recyclability); economic impacts all 3 types; environmental impacts all 3 types; reasoned final choice',
      },
    ],
  },

  // ── Q8 (7 marks, Crit D) — Soap types, production & social impacts ─────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Discuss — soap types, production processes and social impacts',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 7,
    stem: 'Traditionally, soaps are made from naturally occurring materials such as animal and plant fats (containing carboxylic acids) and wood ash. A recent technical innovation uses waste plastic as an alternative source of the carboxylic acids used to make soap. The table below gives information about different types of soap.\n\n| | Natural soap | Crude-oil-based soap | Soap from recycled plastic |\n|---|---|---|---|\n| Raw materials | Plant or animal fat | Crude oil | Recycled plastic |\n| Toxic potential | Low (no additives needed) | High (additives needed) | Not yet known |\n| Antimicrobial properties | Naturally occurring | Needs additives | Needs additives |\n| Cost | Intermediate | Lowest | Highest |\n| Availability | Limited | High | Very limited |\n| Allergy risk | Sensitivities to natural ingredients | Sensitivities to additives | Sensitivities to additives |',
    figImages: ['/images/papers/chemistry-may-2025/page-56.png'],
    tasks: [
      {
        label: '',
        text: '**Discuss** the issues an individual would consider when choosing which type of soap to use. In your answer you should include:\n• a comparison between the production processes of soap made using recycled plastic and one other type of soap\n• two social impacts that could be considered when choosing between these two types of soap.',
        marks: 7,
        ph: 'Production: recycled plastic uses waste plastic vs crude oil / animal fat; social: cost difference, toxic potential, allergy risk, environmental ethics, availability',
      },
    ],
  },
]
