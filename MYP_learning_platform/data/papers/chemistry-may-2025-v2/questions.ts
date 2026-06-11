import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2025-v2',
  subject: 'Chemistry',
  session: 'May',
  year: 2025,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (6 marks, Crit A) — Pottery minerals: periodic table, moles ──────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, moles & chromatography — pottery minerals',
    marks: 6,
    stem: 'Pottery and ceramics are made from naturally occurring minerals. The table shows three minerals used in traditional and modern ceramics and their chemical formulae.\n\n| Material | Chemical formula |\n|---|---|\n| Feldspar | KAlSi₃O₈ |\n| Hematite | Fe₂O₃ |\n| Calcite | CaCO₃ |',
    tasks: [
      {
        label: 'a',
        text: '**Identify** the group and the period of the element that is present in all three of the ceramic minerals.',
        marks: 2,
        ph: 'Oxygen (O); Group 16, Period 2',
      },
      {
        label: 'b',
        text: '**Calculate** the number of moles in a 55.6 g sample of feldspar (KAlSi₃O₈). Give your answer to 2 significant figures.\n\n(Relative atomic masses: K = 39, Al = 27, Si = 28, O = 16)',
        marks: 3,
        ph: 'M(KAlSi₃O₈) = 278; n = 55.6/278 = 0.20 mol',
      },
      {
        label: 'c',
        text: '**Select** the section of the periodic table where cobalt (Co) is found.',
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

  // ── Q2 (7 marks, Crit A) — Thermochromism, CeI₃, functional groups ──────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Thermochromism, reversible reactions & functional groups — CeI₃ colour-change',
    marks: 7,
    stem: 'Some medical thermometers use thermochromic strips that change colour when the temperature changes. When a warm surface is detected, the strip changes colour. When the temperature returns to normal, the strip returns to its original colour.\n\nThermochromic strips contain cerium(III) iodide (CeI₃), which changes colour when heated or cooled. Adhesive temperature indicators on laboratory equipment can also be made with CeI₃.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of change that occurs when the thermochromic strip changes colour as it detects a warm surface.',
        marks: 1,
        ph: 'Endothermic',
        widget: 'radio_select',
        widgetOptions: ['Endothermic', 'Exothermic', 'Irreversible', 'Physical'],
      },
      {
        label: 'b',
        text: '**State** the scientific term used to describe the colour change when the strip returns to its original colour.',
        marks: 1,
        ph: 'Reversible',
      },
      {
        label: 'c',
        text: '**State** the chemical formula of cerium(III) iodide.',
        marks: 1,
        ph: 'CeI₃',
      },
      {
        label: 'd',
        text: '**Suggest** the colour of a label made from CeI₃ in each of the situations below.',
        marks: 3,
        ph: 'Cold → Orange; Room temp → Yellow; Hot → White',
        widget: 'inline_dropdown_select',
        widgetItems: ['In ice water (0 °C)', 'At room temperature (20 °C)', 'In hot water (above 70 °C)'],
        widgetOptions: ['Orange', 'Yellow', 'White', 'Blue'],
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

  // ── Q3 (15 marks, Crit A) — LED street signs, noble gases, argon, atmosphere ─
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Oxidation/reduction, noble gases, isotopes & atmospheric layers — LED street lighting',
    marks: 15,
    stem: 'LED street lights have replaced older iron-framed gas-discharge lamps. Modern LED units require no iron framework and last significantly longer. Some decorative street signs use noble gases such as neon, argon, or krypton sealed in glass tubes.',
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why the material used to make street lighting has changed over time.',
        marks: 1,
        ph: 'Lasts longer / more energy-efficient / does not rust',
      },
      {
        label: 'b',
        text: '**State** the chemical formula for iron(II) oxide.',
        marks: 1,
        ph: 'FeO',
      },
      {
        label: 'c',
        text: '**State** which element is oxidised and which element is reduced when iron reacts with oxygen to form iron(II) oxide.\n\nOxidised:\n\nReduced:',
        marks: 2,
        ph: 'Oxidised: Iron; Reduced: Oxygen',
      },
      {
        label: 'd',
        text: '**Determine** the number of electrons and neutrons in each argon isotope. The number of protons has been given.\n\n| Isotope | ³⁶₁₈Ar | ³⁸₁₈Ar |\n|---|---|---|\n| Electrons | [?] | [?] |\n| Protons | 18 | 18 |\n| Neutrons | [?] | [?] |',
        marks: 3,
        ph: '³⁶Ar: e=18, n=18; ³⁸Ar: e=18, n=20',
        widget: 'fill_blank',
        widgetOptions: ['18', '20', '36', '38', '16', '22', '14', '24', '26'],
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
    stem: 'Hard water contains dissolved calcium and magnesium salts. A group of students investigated the hardness of five water samples (A–E) from different river and reservoir sources by measuring the volume of soap solution needed to produce a lasting lather.\n\nThe students also boiled samples A, C, and E and measured the volume of soap needed again. Their results are shown in the table.',
    tasks: [
      {
        label: 'a',
        text: '**Determine** the final burette reading for sample D using the photograph. State the reading to 1 decimal place.',
        marks: 2,
        ph: '42.5 cm³',
      },
      {
        label: 'b',
        text: '**Calculate** the volume of soap solution used for samples B and D.\n\nSample B: initial reading = 5.0 cm³, final reading = 16.5 cm³\nSample D: initial reading = 22.0 cm³',
        marks: 2,
        ph: 'B = 11.5 cm³; D = 20.5 cm³',
      },
      {
        label: 'c',
        text: '**Classify** each of the samples A, C, and E as temporary hard, permanent hard, or a mixture of both. **Justify** each classification.\n\nAfter boiling — Sample A: 8.0 cm³; Sample C: 23.0 cm³; Sample E: 12.0 cm³\nBefore boiling — Sample A: 16.0 cm³; Sample C: 23.0 cm³; Sample E: 18.0 cm³',
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

  // ── Q5 (12 marks, Crit B) — Limescale removal with sulfamic acid ─────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Limescale removal investigation — sulfamic, HCl, acetic, citric acids',
    marks: 12,
    stem: 'When water with temporary hardness is boiled, the soluble calcium hydrogen carbonate (Ca(HCO₃)₂) decomposes:\n\nCa(HCO₃)₂(aq) → CaCO₃(s) + CO₂(g) + H₂O(l)\n\nLimescale can be removed by reacting it with an acid:\n\ncalcium carbonate + acid → calcium salt + carbon dioxide + water\n\nA group of students investigated which acid is best for removing limescale from used hot water pipes. They used sulfamic acid, hydrochloric acid, acetic acid, and citric acid. They also tested lemon juice.',
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
        ph: 'Include unit of mass / give values to consistent d.p. / show change in mass / add title / give chemical name of lemon juice',
      },
      {
        label: 'e',
        text: '**Determine** which acid is most effective at removing limescale using the students\' results. **Justify** your answer.',
        marks: 2,
        ph: 'Sulfamic acid; the mass changed the most (5.1 g reduction)',
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

  // ── Q6 (19 marks, Crit B) — Lactic acid concentration experiment design ──────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — minimum lactic acid concentration to remove limescale',
    marks: 19,
    stem: 'Limescale builds up inside dairy processing equipment, reducing efficiency and increasing energy costs. Students want to advise dairy factories on how to descale equipment using food-safe chemicals. Lactic acid, produced naturally during fermentation, is already present in many dairy environments. In line with the principles of green chemistry, the students want to find the lowest concentration of lactic acid that would remove a given mass of limescale.\n\nTo model limescale, the students use calcium carbonate. They are provided with distilled water, different sized pieces of calcium carbonate, and a stock solution of lactic acid with a concentration of 1.2 mol dm⁻³.',
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why the students decided to test lactic acid rather than hydrochloric acid.',
        marks: 1,
        ph: 'Lactic acid is food-safe / found in dairy / naturally produced / HCl not food-grade / lactic acid is less hazardous / weaker acid / easier to dispose of in food environment',
      },
      {
        label: '',
        text: '**Design** an experiment to investigate the minimum concentration of lactic acid required to remove a given mass of limescale. In your answer you must include:\n• the independent variable, the dependent variable and two controlled variables\n• a list of the equipment that you will use\n• the method you will follow\n• the details of the measurements you will take to collect sufficient data\n• any safety precautions you will need to take.',
        marks: 18,
        ph: 'IV: lactic acid concentration; DV: mass CaCO₃ remaining / time; CVs: mass CaCO₃, temperature, volume acid; equipment: balance, burette/measuring cylinder, beakers, timer; step-by-step method with repeats; measurements; safety: goggles, gloves',
      },
    ],
  },

  // ── Q7 (17 marks, Crit D) — Plastic packaging for hand sanitiser ─────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Evaluate — plastic types for hand sanitiser packaging',
    marks: 17,
    stem: 'The COVID-19 pandemic dramatically increased the global demand for hand sanitiser and its plastic packaging. Millions of small plastic bottles were produced and discarded, raising environmental concerns. Manufacturers are now evaluating alternative packaging materials.\n\nPlastics can be split into two groups: those made from crude oil and those made from plant-based materials. These two groups can be split further into biodegradable and non-biodegradable plastics. The table shows information about three different types of plastic.',
    tasks: [
      {
        label: 'a',
        text: 'Vinyl chloride (chloroethene, C₂H₃Cl) is used to produce a crude-oil-based non-biodegradable plastic called polyvinyl chloride (PVC). **Select** the Lewis structure of vinyl chloride.',
        marks: 1,
        ph: 'Vinyl chloride has a C=C double bond with one Cl and one H on the second carbon; option D',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: '',
        text: '**Discuss** and **evaluate** the different types of plastic used for hand sanitiser packaging. In your answer you should include:\n• a justification of the **properties** needed for the **plastic** used in hand sanitiser packaging\n• a comparison of the suitability of the three types of **plastic** for hand sanitiser packaging\n• the economic impacts of the three types of plastic\n• the environmental impacts of the three types of plastic\n• your choice with justification.',
        marks: 16,
        ph: 'Properties: waterproof/flexible/durable/alcohol-resistant justified; suitability comparison (biodegradability, recyclability); economic impacts all 3 types; environmental impacts all 3 types; reasoned final choice',
      },
    ],
  },

  // ── Q8 (7 marks, Crit D) — Cleaning product types, production & social impacts
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Discuss — cleaning product types, production processes and social impacts',
    marks: 7,
    stem: 'Traditionally, household detergents are made from plant-based surfactants derived from vegetable oils (containing carboxylic acids) and minerals. Most modern detergents use petroleum-derived surfactants. A recent innovation produces detergents from bio-ethanol fermented from agricultural waste. The table below gives information about different types of liquid cleaning detergent.\n\n| | Plant-based detergent | Petroleum-based detergent | Bio-ethanol–based detergent |\n|---|---|---|---|\n| Raw materials | Vegetable oils / plant fats | Crude oil (petrochemicals) | Fermented agricultural waste |\n| Toxic potential | Low (biodegradable surfactants) | Moderate (additives needed) | Not yet established |\n| Cleaning properties | Naturally occurring | Requires additives | Requires additives |\n| Cost | Intermediate | Lowest | Highest |\n| Availability | Limited | High | Very limited |\n| Allergy risk | Sensitivities to plant-based ingredients | Sensitivities to synthetic surfactants | Sensitivities to fermentation by-products |',
    tasks: [
      {
        label: '',
        text: '**Discuss** the issues an individual would consider when choosing which type of cleaning detergent to use. In your answer you should include:\n• a comparison between the production processes of bio-ethanol–based detergent and one other type of detergent\n• two social impacts that could be considered when choosing between these two types of detergent.',
        marks: 7,
        ph: 'Production: bio-ethanol uses fermented waste vs crude oil (petrochemicals) / plant fats; social: cost difference, toxic potential, allergy risk, environmental ethics, availability in developing regions',
      },
    ],
  },
]
