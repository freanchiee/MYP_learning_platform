import 'server-only'

export interface MSEntry {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
  blankAnswers?: string[]
}

export interface MCQEntry {
  type: 'mcq'
  correct: number
}

type MSRecord = Record<string, MSEntry | MCQEntry>

export const MS: MSRecord = {

  // ─── Q1: Medieval chemistry / butan-1-ol / MgSO₄ ────────────────────────
  q1_a: {
    type: 'mcq',
    correct: 1,
  },

  q1_b: {
    type: 'mcq',
    correct: 1,
  },

  q1_c: {
    marks: 4,
    exemplar:
      'X→Y: liquid evaporates/boils; particles gain kinetic energy; overcome intermolecular forces; escape as gas/vapour. (2 marks)\n' +
      'Y→Z: gas condenses; particles lose kinetic energy; intermolecular forces pull particles together; form liquid. (2 marks)',
    keyConcepts: ['States of matter', 'Particle theory', 'State changes'],
    keywords: ['evaporation', 'condensation', 'kinetic energy', 'intermolecular forces'],
    feedbackHit: 'Correctly described both state changes with particle-level reasoning.',
    feedbackMiss: 'X→Y is evaporation (liquid→gas); Y→Z is condensation (gas→liquid). Use particle theory in each.',
  },

  q1_d: {
    type: 'mcq',
    correct: 1,
  },

  q1_e: {
    marks: 2,
    exemplar: 'Mr(MgSO₄) = 24 + 32 + 4(16) = 24 + 32 + 64 = 120',
    keyConcepts: ['Formula mass', 'Relative atomic mass'],
    keywords: ['formula mass', 'Mr', 'MgSO₄', '120'],
    feedbackHit: 'Correct formula mass of 120 g/mol for MgSO₄.',
    feedbackMiss: 'Mr(MgSO₄) = Ar(Mg) + Ar(S) + 4×Ar(O) = 24 + 32 + 64 = 120.',
    blankAnswers: ['120'],
  },

  // ─── Q2: CO₂ / sparkling wine / ethanol synthesis ────────────────────────
  q2_a: {
    type: 'mcq',
    correct: 1,
  },

  q2_b: {
    marks: 3,
    exemplar:
      'When bottle is opened, pressure drops. (1)\n' +
      'CO₂ becomes less soluble / comes out of solution. (1)\n' +
      'Bubbles of CO₂ form; fizzing decreases as the dissolved CO₂ is depleted over time. (1)',
    keyConcepts: ['Gas solubility', 'Pressure', 'Dissolution'],
    keywords: ['pressure', 'CO₂', 'solubility', 'bubbles', 'fizzing', 'depleted'],
    feedbackHit: 'Correctly linked pressure drop to CO₂ release and explained decreasing fizz.',
    feedbackMiss: 'Lower pressure → less CO₂ dissolved → bubbles. Fizzing decreases because dissolved CO₂ runs out.',
  },

  q2_c: {
    marks: 4,
    exemplar:
      '2CO₂ + 6H₂ → C₂H₅OH + 3H₂O\n' +
      'n(CO₂) = 264 / 44 = 6 mol\n' +
      'n(C₂H₅OH) = 6 / 2 = 3 mol (ratio 2:1)\n' +
      'm(C₂H₅OH) = 3 × 46 = 138 g = 1.38 × 10² g',
    keyConcepts: ['Moles', 'Stoichiometry', 'Standard form'],
    keywords: ['moles', 'stoichiometry', 'ethanol', '138', '1.38 × 10²'],
    feedbackHit: 'Correct: 6 mol CO₂ → 3 mol ethanol → 138 g = 1.38 × 10² g.',
    feedbackMiss: 'n(CO₂)=264/44=6; ratio 2:1 → n(C₂H₅OH)=3; m=3×46=138g=1.38×10²g.',
    blankAnswers: ['1.38 × 10²'],
  },

  q2_d: {
    marks: 3,
    exemplar:
      'Copper catalyst provides alternative reaction pathway. (1)\n' +
      'This pathway has a lower activation energy. (1)\n' +
      'More reactant molecules have energy ≥ lower activation energy; more successful collisions per unit time; rate increases. (1)',
    keyConcepts: ['Catalysis', 'Activation energy', 'Collision theory'],
    keywords: ['catalyst', 'activation energy', 'pathway', 'collision', 'rate'],
    feedbackHit: 'Correctly explained catalyst mechanism using lower activation energy and increased successful collisions.',
    feedbackMiss: 'Catalyst → alternative pathway → lower activation energy → more successful collisions → increased rate.',
  },

  // ─── Q3: Noble gases / xenon ─────────────────────────────────────────────
  q3_a: {
    type: 'mcq',
    correct: 1,
  },

  q3_b: {
    marks: 2,
    exemplar: 'Nitrogen: Group 15. Xenon: Period 5.',
    keyConcepts: ['Periodic Table', 'Groups and Periods'],
    keywords: ['Group 15', 'Period 5', 'nitrogen', 'xenon'],
    feedbackHit: 'Correct: nitrogen Group 15, xenon Period 5.',
    feedbackMiss: 'Nitrogen has 5 outer electrons → Group 15. Xenon has 5 electron shells → Period 5.',
    blankAnswers: ['15', '5'],
  },

  q3_c: {
    marks: 3,
    exemplar:
      'Xenon electron configuration: 2.8.18.18.8. (1)\n' +
      'Full outer shell / 8 electrons in outermost shell. (1)\n' +
      'No tendency to gain, lose, or share electrons; does not form bonds. (1)',
    keyConcepts: ['Noble gases', 'Electronic configuration', 'Chemical inertness'],
    keywords: ['2.8.18.18.8', 'full outer shell', 'stable', 'no bonding', 'inert'],
    feedbackHit: 'Correctly used 2.8.18.18.8 to explain why xenon does not form compounds.',
    feedbackMiss: 'Xenon = 2.8.18.18.8; full outer shell → no tendency to gain/lose/share electrons → no compounds formed.',
  },

  q3_d: {
    marks: 2,
    exemplar:
      'Oxygen in air reacts with the hot metal filament inside the bulb. (1)\n' +
      'The exothermic reaction rapidly increases temperature/pressure, causing the filament to break or the bulb to crack. (1)',
    keyConcepts: ['Oxidation', 'Combustion', 'Inert atmosphere'],
    keywords: ['oxygen', 'filament', 'oxidation', 'exothermic', 'temperature', 'break'],
    feedbackHit: 'Correctly identified oxygen reacting with filament causing failure.',
    feedbackMiss: 'O₂ reacts with hot metal filament → exothermic → filament overheats and breaks (xenon is inert, so this does not happen).',
  },

  // ─── Q4: Fluoride / dental fillings / Crit B ─────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'What is the effect of the type of dental filling material on the concentration of F⁻ ions in mouthwash solution after 10 minutes?',
    keyConcepts: ['Research question', 'IV', 'DV'],
    keywords: ['filling material', 'F⁻ concentration', 'mouthwash', 'research question'],
    feedbackHit: 'Research question specifies both the IV (filling material) and the DV (F⁻ concentration).',
    feedbackMiss: 'Include what you change (filling material) and what you measure (F⁻ concentration) in a single question.',
  },

  q4_b: {
    marks: 4,
    exemplar:
      'IV: type of filling material\n' +
      'DV: conductivity / concentration of F⁻ ions\n' +
      'CV1: time (10 minutes)\n' +
      'CV2: volume of F⁻ ion solution',
    keyConcepts: ['Variables', 'Scientific investigation'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'filling material', 'conductivity'],
    feedbackHit: 'All four variables correctly identified.',
    feedbackMiss: 'IV = filling material; DV = F⁻ conductivity; CVs = time + volume of solution.',
    blankAnswers: [
      'Type of filling material',
      'Conductivity / concentration of F⁻ ions',
      'Time (10 minutes)',
      'Volume of F⁻ ion solution',
    ],
  },

  q4_c: {
    marks: 2,
    exemplar:
      'Less valid because without a "before" reading there is no baseline. (1)\n' +
      'Cannot determine the change in F⁻ concentration caused by the filling material. (1)',
    keyConcepts: ['Validity', 'Baseline', 'Scientific method'],
    keywords: ['valid', 'baseline', 'before', 'change', 'comparison'],
    feedbackHit: 'Correctly identified missing baseline/initial reading as reason for reduced validity.',
    feedbackMiss: 'Without initial conductivity, you cannot calculate the CHANGE in F⁻ concentration → less valid.',
  },

  q4_d: {
    marks: 3,
    exemplar:
      'If fluoride mouthwash is used twice daily instead of once daily,\n' +
      'then the F⁻ concentration in the mouth will be higher than with once-daily use,\n' +
      'because twice-daily use replenishes fluoride ions more frequently, maintaining a higher protective concentration.',
    keyConcepts: ['Hypothesis', 'Fluoride dosage'],
    keywords: ['If', 'Then', 'Because', 'twice daily', 'fluoride', 'concentration'],
    feedbackHit: 'If/Then/Because hypothesis with mechanistic explanation.',
    feedbackMiss: 'Format: If [change in IV], Then [change in DV], Because [mechanism].',
  },

  q4_e: {
    marks: 2,
    exemplar:
      'Identify: the result furthest from the trend for that brand (anomalous result). (1)\n' +
      'Reason: contamination, air bubble in conductivity probe, sample temperature different from others. (1)',
    keyConcepts: ['Anomalous results', 'Experimental error'],
    keywords: ['anomalous', 'outlier', 'contamination', 'probe', 'temperature'],
    feedbackHit: 'Anomalous result identified and plausible experimental reason given.',
    feedbackMiss: 'Find the value that does not fit the pattern for its brand, then suggest a measurement error.',
  },

  q4_f: {
    marks: 2,
    exemplar: 'Sum of valid Brand D values ÷ number of trials; to 3 significant figures; units = mg dm⁻³ or µS cm⁻¹.',
    keyConcepts: ['Mean', 'Significant figures', 'Units'],
    keywords: ['average', 'Brand D', 'significant figures', 'mg dm⁻³'],
    feedbackHit: 'Average calculated correctly with appropriate sig figs and units.',
    feedbackMiss: 'Sum the valid Brand D readings and divide by the number of valid trials. Include units.',
  },

  q4_g: {
    marks: 1,
    exemplar: 'The brand with the highest conductivity delivers the most F⁻ ions and therefore provides the best fluoride protection for teeth.',
    keyConcepts: ['Data interpretation', 'Fluoride protection'],
    keywords: ['highest conductivity', 'most F⁻', 'best protection'],
    feedbackHit: 'Correctly linked highest conductivity to best fluoride protection.',
    feedbackMiss: 'Highest conductivity = most F⁻ ions = best protection.',
  },

  q4_h: {
    marks: 1,
    exemplar: 'Children grow more teeth / teeth become larger as they age, increasing the surface area that needs fluoride protection. Body mass also increases, allowing proportionally more fluoride within safe limits.',
    keyConcepts: ['Tooth development', 'Fluoride dosage'],
    keywords: ['more teeth', 'surface area', 'body mass', 'fluoride dose'],
    feedbackHit: 'Correctly cited more/larger teeth or increased body mass.',
    feedbackMiss: 'More teeth or larger teeth as children grow → greater surface area → more toothpaste/fluoride needed.',
  },

  // ─── Q5: Acid rain / bridge materials / Crit B design ────────────────────
  q5_a: {
    type: 'mcq',
    correct: 0,
  },

  q5_b: {
    marks: 18,
    exemplar:
      '**0 marks**: No relevant information.\n\n' +
      '**1–2 marks**: Vague reference to testing materials in acid. No structure.\n\n' +
      '**3–6 marks**: IV (type of bridge material) and DV (mass lost or gas produced) stated. Some equipment listed. Safety vague.\n\n' +
      '**7–10 marks**: IV, DV, 2 CVs. Equipment list mostly complete. Method with steps. Data table mentioned. Safety addressed.\n\n' +
      '**11–14 marks**: Variables clearly stated. Full equipment list. Stepwise method: record initial mass of 10×10 cm sample; add to 50 cm³ of 1 mol dm⁻³ H₂SO₄; measure mass/gas volume at intervals; repeat 3×. Data table: material, replicate, initial mass, final mass, mass lost. Safety: H₂SO₄ corrosive → gloves, goggles, acid-resistant mat.\n\n' +
      '**15–18 marks**: As above plus: standardised surface area; gas syringe for CO₂ volume; rate calculated from gradient; graphical comparison planned; justification of acid concentration; discussion of reaction completion; explanation of why some materials (granite) react slowly vs. limestone quickly; improved reliability from repeats.',
    keyConcepts: ['Experimental design', 'Variables', 'Safety', 'Data collection'],
    keywords: ['IV', 'DV', 'CV', 'mass lost', 'gas volume', 'equipment', 'method', 'safety', 'H₂SO₄'],
    feedbackHit: 'Full Crit B design including variables, equipment, method, data, and safety.',
    feedbackMiss: 'Include: IV/DV/2 CVs, equipment, step-by-step method, data to collect, safety precautions.',
  },

  q5_c: {
    marks: 1,
    exemplar: 'Temperature of the acid / concentration of H₂SO₄ / UV irradiance / humidity / freeze-thaw cycles.',
    keyConcepts: ['Climate variables', 'Corrosion factors'],
    keywords: ['temperature', 'concentration', 'UV', 'humidity', 'freeze-thaw'],
    feedbackHit: 'Valid climate-linked independent variable suggested.',
    feedbackMiss: 'Consider climate factors: temperature, acid concentration, UV, humidity.',
  },

  // ─── Q6: Electroplated jewellery / NaCl corrosion / Crit C ───────────────
  q6_a: {
    marks: 6,
    exemplar:
      'Graph: x-axis "Concentration / mol dm⁻³" (0 to 0.8); y-axis "Average mass lost / mg" (0 to 80).\n' +
      'Points: (0.0, 6), (0.1, 12), (0.3, 32), (0.5, 48), (0.8, 70).\n' +
      'Smooth line of best fit. Both axes labelled with units. Even scale.',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Axes labelling'],
    keywords: ['x-axis', 'y-axis', 'line of best fit', 'concentration', 'mass lost', 'units'],
    feedbackHit: 'Graph correctly drawn with labelled axes, accurate points, and line of best fit.',
    feedbackMiss: 'Label both axes with units. Plot all 5 points accurately. Draw a smooth line of best fit.',
  },

  q6_b: {
    marks: 3,
    exemplar:
      'As NaCl concentration increases, the average mass lost increases (positive correlation). (1)\n' +
      'Relationship appears approximately linear. (1)\n' +
      'The 0.00 mol dm⁻³ trial is a control/baseline — shows corrosion without NaCl present. (1)',
    keyConcepts: ['Trend', 'Correlation', 'Control experiment'],
    keywords: ['increases', 'positive correlation', 'control', 'baseline', '0.00'],
    feedbackHit: 'Trend described and control correctly explained.',
    feedbackMiss: 'Higher NaCl → more mass lost. 0.0 = control showing background corrosion rate.',
  },

  q6_c: {
    marks: 3,
    exemplar:
      'The hypothesis is invalid. (1)\n' +
      'Data shows MORE mass is lost as NaCl concentration increases, opposite to the prediction. (1)\n' +
      'NaCl accelerates corrosion rather than preventing it. (1)',
    keyConcepts: ['Hypothesis evaluation', 'Data interpretation'],
    keywords: ['invalid', 'more mass lost', 'contradicts', 'accelerates corrosion'],
    feedbackHit: 'Hypothesis correctly evaluated as invalid with data reference.',
    feedbackMiss: 'Hypothesis says LESS mass lost at higher NaCl — data shows MORE. Hypothesis is invalid.',
  },

  q6_d: {
    marks: 1,
    exemplar: 'Nails provide a standardised size, shape, and surface area — making the experiment fair and results comparable.',
    keyConcepts: ['Standardisation', 'Fair test'],
    keywords: ['standardised', 'uniform', 'size', 'shape', 'surface area'],
    feedbackHit: 'Correctly identified standardisation as the reason for using nails.',
    feedbackMiss: 'Nails are uniform in size and shape, making it easy to control variables.',
  },

  // ─── Q7: Nuclear fission / transport / Crit D ────────────────────────────
  q7_a: {
    marks: 1,
    exemplar:
      'Wind produces no radioactive waste; nuclear produces long-lived radioactive waste that requires costly management.\n' +
      'OR: Wind requires large land area per MW; nuclear uses small land area.\n' +
      'OR: Wind is intermittent (only when wind blows); nuclear provides continuous baseload power.',
    keyConcepts: ['Energy comparison', 'Wind vs nuclear'],
    keywords: ['radioactive waste', 'land area', 'intermittent', 'baseload', 'nuclear'],
    feedbackHit: 'Valid additional difference between wind and nuclear energy.',
    feedbackMiss: 'Think beyond renewable/non-renewable: waste, land use, reliability.',
  },

  q7_b: {
    marks: 3,
    exemplar:
      'A neutron strikes a uranium-235 nucleus, making it unstable. (1)\n' +
      'It splits into two daughter nuclei, releasing energy and 2–3 neutrons. (1)\n' +
      'These neutrons hit further U-235 nuclei → more fission events → self-sustaining chain reaction. (1)',
    keyConcepts: ['Nuclear fission', 'Chain reaction'],
    keywords: ['neutron', 'unstable', 'splits', 'daughter nuclei', 'chain reaction', 'energy'],
    feedbackHit: 'Chain reaction sequence correctly described.',
    feedbackMiss: 'Neutron → U-235 unstable → splits + neutrons + energy → more fission → chain reaction.',
  },

  q7_c: {
    marks: 6,
    exemplar:
      '**Risks**: radiation leakage if container damaged; can cause cancer/mutation in living things. (1)\n\n' +
      '**Road**: accident risk; armoured lead-lined containers; police escort; restricted routes away from populated areas. (1)\n' +
      '**Train**: low derailment risk; dedicated carriages; tracked routing; purpose-built shielded flasks. (1)\n' +
      '**River barge**: risk of sinking; watertight sealed containers; shallow clearly mapped routes. (1)\n' +
      '**Air**: catastrophic crash risk; contaminates large area; NOT recommended for radioactive waste. (1)\n\n' +
      '**Conclusion**: Train is safest — low accident rate, dedicated infrastructure, shielded containers, controlled routing away from populations. (1)',
    keyConcepts: ['Risk assessment', 'Transport safety', 'Radioactive waste'],
    keywords: ['radiation', 'road', 'train', 'river', 'air', 'shielded', 'safest', 'conclusion'],
    feedbackHit: 'Discussed risks and precautions for all four methods with a justified conclusion.',
    feedbackMiss: 'For each transport: risk + precaution. Conclude with safest method and justify.',
  },

  // ─── Q8: Radioactive waste disposal essay / Crit D ────────────────────────
  q8_: {
    marks: 13,
    exemplar:
      '**0 marks**: No relevant information.\n\n' +
      '**1–2 marks**: Superficial description of one proposal.\n\n' +
      '**3–5 marks**: Describes one method with vague environmental or economic reference.\n\n' +
      '**6–8 marks**: Effects on living things described (seabed injection: deep-sea organisms contaminated, food chain; geological: no surface contamination). Economic impact mentioned. Partial evaluation.\n\n' +
      '**9–11 marks**: Thorough effects on living things. Economic impact compared. Clear evaluation with a stated preference.\n\n' +
      '**12–13 marks**: Seabed injection: radioactive materials enter deep-sea food chain → bioaccumulate → reach fish humans eat → cancer/mutation risk; international spread via currents; seemingly cheap but huge long-term remediation cost if contamination occurs. Geological: extremely high construction cost but waste isolated from biosphere for 100,000 years; no contamination of any ecosystem if properly engineered; one-time cost vs. perpetual ocean risk. Justified conclusion: geological is superior because it eliminates risk to living things; economic cost is justified given the irreversible nature of ocean contamination. Conclusion is consistent with evidence presented and clearly justified.',
    keyConcepts: ['Environmental impact', 'Economic analysis', 'Ethical justification', 'Nuclear waste disposal'],
    keywords: ['seabed', 'geological', 'food chain', 'bioaccumulation', 'cost', 'living things', 'justified conclusion'],
    feedbackHit: 'Full Crit D essay: effects on living things, economic impact, well-justified conclusion.',
    feedbackMiss: 'Must include: (1) effects on living things for chosen method, (2) economic impact, (3) justified conclusion from evidence.',
  },
}

export type { MSRecord }
