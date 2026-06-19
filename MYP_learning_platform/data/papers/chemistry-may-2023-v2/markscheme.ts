import 'server-only'

interface MSEntry {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
  blankAnswers?: string[]
}

interface MCQEntry {
  type: 'mcq'
  correct: number
}

type MSRecord = Record<string, MSEntry | MCQEntry>

export const MS: MSRecord = {
  // ── Q1 — Petrol & hand-warmers (octane, iron powder) ─────────────────────
  q1_a: {
    marks: 1,
    exemplar: 'Exothermic.',
    keyConcepts: ['Energy changes', 'Combustion'],
    keywords: ['exothermic', 'combustion', 'energy released'],
    feedbackHit: 'Exothermic correctly stated.',
    feedbackMiss: 'Combustion releases energy to the surroundings = exothermic.',
  },

  q1_b: {
    marks: 2,
    exemplar: '2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O. [1 mark for reactant balanced (25O₂); 1 for products balanced (16CO₂ + 18H₂O)].',
    keyConcepts: ['Balancing equations', 'Combustion of alkanes'],
    keywords: ['25O₂', '16CO₂', '18H₂O', 'balanced'],
    feedbackHit: 'Balanced equation with 25, 16, 18 — 2 marks.',
    feedbackMiss: 'Two octane = 16C and 36H → 16CO₂ and 18H₂O. Balance O last: 16×2 + 18×1 = 50 O atoms → 25O₂.',
    blankAnswers: ['25', '16', '18'],
  },

  q1_c: {
    marks: 2,
    exemplar: 'Molecule A (CH₃OH): Alcohol (or alkanol) [1]; Molecule B (HCOOH): Carboxylic acid (or organic acid) [1].',
    keyConcepts: ['Organic families', 'Functional groups'],
    keywords: ['alcohol', 'alkanol', 'carboxylic acid', 'organic acid', 'OH group', 'COOH'],
    feedbackHit: 'Both families correctly named — 2 marks.',
    feedbackMiss: 'Look at the functional group: –OH = alcohol; –COOH = carboxylic acid.',
  },

  q1_d: {
    marks: 3,
    exemplar: 'Fine iron powder has a greater surface area than a solid lump [1]; a larger surface area means more iron particles are exposed to oxygen → rate of reaction is faster [1]; so the warmer heats up / releases its heat more quickly [1].',
    keyConcepts: ['Surface area', 'Rate of reaction', 'Oxidation'],
    keywords: ['surface area', 'rate', 'faster', 'heat released', 'particles exposed'],
    feedbackHit: 'Surface area → faster rate → heat released more quickly — 3 marks.',
    feedbackMiss: 'Three steps: (1) greater surface area; (2) more particles exposed → faster rate; (3) heat released more quickly.',
  },

  // ── Q2 — Hydroelectric / periodic table ──────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'B: Group 3, Period 2 [1]; P: Group 5, Period 3 [1]. (Accept Group 13 for B and Group 15 for P.)',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['B', 'Group 3', 'Period 2', 'P', 'Group 5', 'Period 3'],
    feedbackHit: 'Both elements correctly placed — 2 marks.',
    feedbackMiss: 'Find each element in the periodic table. Period = row number. Group = column number (main-group count).',
  },

  q2_b: {
    marks: 2,
    exemplar: 'No combustion emissions from hydroelectric (compared with fossil fuels) [1]. Accept any linked reasonable point [1]: hydroelectric is renewable while fossil fuels are finite; water flow is continuously available; reduces greenhouse-gas emissions.',
    keyConcepts: ['Renewable energy', 'Environmental impact'],
    keywords: ['no emissions', 'renewable', 'fossil fuels', 'CO₂', 'greenhouse'],
    feedbackHit: 'No/less emissions + one further advantage — 2 marks.',
    feedbackMiss: 'Key points: hydroelectric produces no combustion gases; it is renewable; fossil fuels are finite and release CO₂.',
  },

  q2_c: { type: 'mcq', correct: 0 } as MCQEntry,

  q2_d: {
    marks: 3,
    exemplar: 'Both C and Si are in the same group (Group 4) / have the same number of valence electrons [1]; valence electrons pair up or are shared [1]; to form 4 covalent bonds (in CH₄ and SiH₄) [1].',
    keyConcepts: ['Covalent bonding', 'Group 4', 'Valence electrons'],
    keywords: ['same group', 'valence electrons', 'covalent bonds', '4 bonds', 'share electrons'],
    feedbackHit: 'Same group → same valence electrons → 4 covalent bonds — 3 marks.',
    feedbackMiss: 'C and Si are in the same group → same number of valence electrons → form the same number of bonds.',
  },

  // ── Q3 — Biogas-reformed hydrogen ────────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'More reactive metals produce hydrogen more quickly / at higher rates [1]; the three metals react at different rates because they have different reactivities (Ca > Mg > Fe) [1].',
    keyConcepts: ['Metal reactivity', 'Rate of reaction'],
    keywords: ['more reactive', 'higher rate', 'different reactivities', 'calcium fastest'],
    feedbackHit: 'More reactive → faster rate + reason — 2 marks.',
    feedbackMiss: 'Different metals sit at different positions in the reactivity series → different rates with the same acid.',
  },

  q3_b: {
    marks: 3,
    exemplar: 'Speeds up the rate of reaction [1]; by lowering the activation energy or providing an alternative reaction pathway [1]; without being used up itself [1].',
    keyConcepts: ['Catalyst', 'Activation energy', 'Reaction rate'],
    keywords: ['rate', 'activation energy', 'alternative pathway', 'not used up'],
    feedbackHit: 'Three-part definition of a catalyst — 3 marks.',
    feedbackMiss: 'A catalyst: (1) speeds up the rate; (2) lowers the activation energy; (3) is not consumed.',
  },

  q3_c: {
    marks: 4,
    exemplar: 'Molar mass CH₄ = 16 g/mol [1]; 9.60 kg = 9600 g → n(CH₄) = 9600/16 = 600 mol [1]; 1 mol CH₄ produces 3 mol H₂ [1]; n(H₂) = 600 × 3 = 1800 mol [1].',
    keyConcepts: ['Moles', 'Stoichiometry', 'Molar mass'],
    keywords: ['16 g/mol', '600 mol', '3 mol H₂', '1800 mol'],
    feedbackHit: '1800 mol H₂ with full working — 4 marks.',
    feedbackMiss: 'Steps: M(CH₄)=16; n=9600/16=600 mol; ratio 1:3; n(H₂)=1800 mol.',
  },

  q3_d: {
    marks: 1,
    exemplar: 'Ammonia is not flammable (hydrogen is highly flammable); OR ammonia has a distinct smell so leaks can be detected; OR ammonia is less reactive.',
    keyConcepts: ['Chemical properties', 'Safety', 'Hydrogen vs ammonia'],
    keywords: ['not flammable', 'detectable smell', 'less reactive', 'safer'],
    feedbackHit: 'One valid reason given — 1 mark.',
    feedbackMiss: 'Think about flammability, detectability and reactivity — ammonia is safer than hydrogen on all counts.',
  },

  q3_e: {
    marks: 2,
    exemplar: 'Environmental benefit [1]: the CO₂ is captured/stored rather than released into the atmosphere. Justification [1]: this reduces greenhouse-gas emissions and therefore reduces climate change. Accept: locks carbon into solid CaCO₃ so it cannot enter the air.',
    keyConcepts: ['Carbon capture', 'Environmental benefit', 'Reforming'],
    keywords: ['CO₂ stored', 'carbon capture', 'climate change', 'reduced emissions', 'CaCO₃'],
    feedbackHit: 'Environmental benefit + valid justification — 2 marks.',
    feedbackMiss: 'CO₂ is locked into CaCO₃ rather than released → less greenhouse gas in the atmosphere.',
  },

  // ── Q4 — Artisan gelato ──────────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Before freezing (liquid): irregular arrangement of at least 9 molecules fairly close together with at least 2 in contact [1]. After freezing (solid): regular/ordered arrangement of at least 9 molecules all in contact [1].',
    keyConcepts: ['States of matter', 'Particle arrangement', 'Solid vs liquid'],
    keywords: ['irregular', 'regular', 'close', 'ordered', 'in contact'],
    feedbackHit: 'Liquid = irregular close arrangement; solid = regular ordered arrangement — 2 marks.',
    feedbackMiss: 'Liquid = random, fairly close; solid = ordered grid, all touching. Show ≥9 molecules in each box.',
  },

  q4_b: {
    marks: 2,
    exemplar: 'Measurement = 36 μm (±5 μm) [1]; conversion: 36 × 10⁻⁶ m = 3.6 × 10⁻⁵ m [1]. (Do not allow perimeter; do not accept 36 × 10⁶.)',
    keyConcepts: ['Measurement', 'Standard form', 'Unit conversion'],
    keywords: ['36 μm', '3.6×10⁻⁵ m', 'standard form', 'micrometres'],
    feedbackHit: '36 μm and 3.6×10⁻⁵ m — 2 marks.',
    feedbackMiss: 'Read the width from the scale bar. 1 μm = 10⁻⁶ m, so 36 μm = 36×10⁻⁶ = 3.6×10⁻⁵ m.',
  },

  q4_c: {
    marks: 4,
    exemplar: 'x-axis label: Temperature AND °C [1]; y-axis label: Percentage of water frozen [1]; two points plotted correctly [1]; all five data points plotted correctly [1].',
    keyConcepts: ['Graph drawing', 'Axes labels', 'Data plotting'],
    keywords: ['x-axis Temperature °C', 'y-axis % frozen', 'data points', 'scale'],
    feedbackHit: 'Labelled axes with units, correct scale, all 5 points correct — 4 marks.',
    feedbackMiss: 'x = Temperature / °C; y = Percentage frozen. Plot all five points: (−1.1,0) (−2.1,10) (−4.1,38) (−7.1,72) (−11.1,88).',
  },

  q4_d: {
    marks: 2,
    exemplar: '−5 °C (accept −4.5 to −5.5). The minus sign must be included.',
    keyConcepts: ['Graph reading', 'Interpolation'],
    keywords: ['−5°C', 'interpolate', '50% frozen', 'read from graph'],
    feedbackHit: '−5°C (accept −4.5 to −5.5) — 2 marks.',
    feedbackMiss: 'Find 50% on the y-axis, read across to the curve, then down to the x-axis. Include the minus sign.',
  },

  q4_e: {
    marks: 3,
    exemplar: 'If the freezing temperature is lower [1]; then the texture will be smoother [1]; because the ice crystals are smaller (or form more quickly at lower temperature) [1]. (Marking points 2 and 3 must be linked to temperature.)',
    keyConcepts: ['Hypothesis', 'Ice crystal formation', 'Temperature effect'],
    keywords: ['if temperature lower', 'smoother texture', 'smaller ice crystals', 'form quickly'],
    feedbackHit: 'If–Then–Because with temperature, texture and crystal size — 3 marks.',
    feedbackMiss: 'Format: IF [temperature condition] THEN [texture prediction] BECAUSE [crystal-size reason].',
  },

  q4_f: {
    marks: 1,
    exemplar: 'Accept any reasonable suggestion: use the same units for every time; convert all times to one unit (e.g. seconds); add a mean column; include units in the heading; keep consistent precision.',
    keyConcepts: ['Data presentation', 'Scientific tables'],
    keywords: ['same units', 'consistent precision', 'mean value', 'units in heading'],
    feedbackHit: 'One valid improvement to data presentation — 1 mark.',
    feedbackMiss: 'The flavours mix minutes, seconds, hours and decimal hours. Suggest one consistent unit and adding a mean.',
  },

  q4_g: {
    marks: 2,
    exemplar: 'Chocolate does take the longest to melt, so the data supports the prediction [1]; the support is weak because the units are inconsistent and there are no clear means [1]. Accept a clearly reasoned "not supported" that cites the inconsistent presentation.',
    keyConcepts: ['Hypothesis validation', 'Data interpretation'],
    keywords: ['chocolate slowest', 'most fat', 'inconsistent units', 'supported'],
    feedbackHit: 'States whether the data supports the prediction with a justification — 2 marks.',
    feedbackMiss: 'Compare the melting times. Does the chocolate (most fat) melt slowest? Note any weakness in how the data is presented.',
  },

  // ── Q5 — Railway de-icing grit ───────────────────────────────────────────
  q5_a: {
    marks: 1,
    exemplar: 'RQ linking the surface area of the ice AND the time taken for the grit to melt it. e.g. "How does the surface area of the ice affect the time taken for the grit to melt it?"',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['surface area', 'time', 'melt', 'grit', 'research question'],
    feedbackHit: 'RQ links surface area of ice to time to melt — 1 mark.',
    feedbackMiss: 'RQ format: "How does [surface area of ice] affect [time for the grit to melt the ice]?"',
  },

  q5_b: {
    marks: 4,
    exemplar: 'IV: the surface area of the ice [1]; DV: the time taken for the ice to melt [1]; CV1 + CV2: any two from — mass of grit, type of grit, mass of ice, room temperature, tray size [2].',
    keyConcepts: ['Variables', 'IV/DV/CV'],
    keywords: ['surface area', 'time to melt', 'mass of grit', 'mass of ice', 'room temperature'],
    feedbackHit: 'IV, DV and two valid CVs — 4 marks.',
    feedbackMiss: 'IV = surface area of ice (what you change); DV = time to melt (what you measure); CVs = mass/type of grit, mass of ice, temperature.',
  },

  q5_c: {
    marks: 1,
    exemplar: 'Accept any reasonable improvement: use the same mass of ice on each tray; keep the same exposed surface area; test more values of the IV; carry out more trials.',
    keyConcepts: ['Experimental design', 'Validity'],
    keywords: ['same mass', 'same surface area', 'more trials', 'more IV values'],
    feedbackHit: 'One valid improvement stated — 1 mark.',
    feedbackMiss: 'Improvements should address fairness (same mass), reproducibility (more trials) or resolution (more IV values).',
  },

  q5_d: {
    marks: 3,
    exemplar: 'Blank A (rock salt % remaining): 140.00/280.00 × 100 = 50.00% [1]; Blank B (calcium chloride % melted): (250.00 − 175.00)/250.00 × 100 = 75.00/250.00 × 100 = 30.00% [1]; both values correctly given to 2 decimal places [1].',
    keyConcepts: ['Percentage calculation', 'Data analysis'],
    keywords: ['50.00%', '30.00%', 'percentage remaining', 'percentage melted'],
    feedbackHit: '50.00% and 30.00% both correctly calculated and rounded — 3 marks.',
    feedbackMiss: '% remaining = (remaining/initial)×100. % melted = ((initial−remaining)/initial)×100.',
  },

  q5_e: {
    marks: 1,
    exemplar: 'Rock salt is the standard railway de-icer, so it is used as the control (reference) to which the other de-icers are compared.',
    keyConcepts: ['Control variable', 'Experimental controls'],
    keywords: ['control', 'reference', 'comparison', 'standard de-icer'],
    feedbackHit: 'Rock salt as control/reference — 1 mark.',
    feedbackMiss: 'A control is the baseline standard. Rock salt is the usual railway de-icer, so it is the reference.',
  },

  q5_f: { type: 'mcq', correct: 0 } as MCQEntry,

  q5_g: {
    marks: 2,
    exemplar: 'Potassium acetate [1]; it is the only substance that contains no chloride AND works below −45°C (lowest working temperature −60°C) [1].',
    keyConcepts: ['De-icing', 'Corrosion', 'Data from table'],
    keywords: ['potassium acetate', 'no chloride', 'works below −45°C', '−60°C'],
    feedbackHit: 'Potassium acetate + justified by no chloride AND working temperature — 2 marks.',
    feedbackMiss: 'Chlorides corrode steel. You need no chloride AND effectiveness at −45°C — only potassium acetate (−60°C, no chloride) fits both.',
  },

  q5_h: {
    marks: 3,
    exemplar: 'Up to two relevant points [2]: machine-made frost is more compact / has a different structure to natural deposited frost; the surface area exposed differs; rails actually face natural frost. One linked justification [1]: a de-icer might soak through natural frost but only reach the surface of the denser machine-made frost, so results may not transfer — limited validity.',
    keyConcepts: ['Validity', 'Scientific models', 'Machine-made vs natural frost'],
    keywords: ['machine-made compact', 'natural frost structure', 'surface area', 'validity limited'],
    feedbackHit: 'Two differences + one justified reason for limited validity — 3 marks.',
    feedbackMiss: 'Discuss: (1) structural differences; (2) how de-icers interact differently; (3) whether the results transfer to real frost.',
  },

  // ── Q6 — Pool-sanitiser salts ────────────────────────────────────────────
  q6_a: { type: 'mcq', correct: 3 } as MCQEntry,

  q6_b: {
    marks: 16,
    exemplar: `Criterion B Investigation Design — 16-mark rubric (dissolving pool-sanitiser salts):

Variables (1→2→3→4): some implied → salt as IV or time as DV, one CV → salt as IV and time-to-dissolve as DV, one CV → IV, DV and two or more CVs (mass of salt, mass/temperature of water, stirring, particle size).
Equipment (1→2): equipment to measure the DV (stopwatch) or monitor one CV (balance/thermometer) → equipment to measure the DV and monitor at least one CV.
Sufficient data (1→2→3→4): reference to different salts → all five salts or three trials → all five salts and three trials → all five salts, three trials, and calculates a mean.
Method (1→2→3→4): an attempt but not relevant → time-to-dissolve not actually measured → a method that measures time to fully dissolve, could be followed, gives relevant data → a complete, replicable method with fixed mass of salt, fixed mass and temperature of water, and controlled stirring.
Safety (1→2): a safety concern mentioned (goggles, gloves) → safety linked to a specific hazard (calcium hypochlorite is a strong oxidiser/corrosive; avoid contact, keep away from acids and ignition sources, work in ventilation).`,
    keyConcepts: ['Criterion B', 'Investigation design', 'Dissolving rate'],
    keywords: ['variables', 'equipment', 'method', 'sufficient data', 'safety', 'time to dissolve'],
    feedbackHit: 'All dimensions addressed: variables, equipment, method with repeats and means, safety — up to 16 marks.',
    feedbackMiss: 'Must include: IV (salt type), DV (time to fully dissolve), CVs (mass of salt, mass/temperature of water, stirring), equipment list, full method with repeats, and safety linked to the oxidiser/corrosive hazard.',
  },

  // ── Q7 — Kevlar / protective gear ────────────────────────────────────────
  q7_a: { type: 'mcq', correct: 2 } as MCQEntry,

  q7_b: {
    marks: 7,
    exemplar: `Criterion D — Evaluate material suitability for protective gear (0–7 rubric):

Properties (1→2→3): one property stated → two properties, or one with explanation linked to protective gear → two or more properties each explained for protective gear (tensile strength, heat/cut resistance, light weight, flexibility/comfort).
Comparison (1→2): comparison of 2 materials → comparison of 3 or more materials using the table data.
Opinion (1→2): a choice stated → a justified choice referencing the data (e.g. Kevlar chosen for very high strength and heat resistance despite cost; leather for moderate all-round protection).

Best answers weigh tensile strength, heat resistance, weight and cost across Kevlar, leather, nylon and cotton drill, then justify a choice.`,
    keyConcepts: ['Criterion D', 'Material properties', 'Protective gear'],
    keywords: ['tensile strength', 'heat resistance', 'light', 'Kevlar', 'leather', 'comparison', 'opinion'],
    feedbackHit: 'Properties + 3-material comparison + justified opinion — up to 7 marks.',
    feedbackMiss: 'Must: (1) state properties needed for protective gear; (2) compare ≥3 materials with the table data; (3) give a justified choice.',
  },

  // ── Q8 — E-waste recycling ───────────────────────────────────────────────
  q8_a: {
    marks: 12,
    exemplar: `Criterion D — Discuss/evaluate recycling electronics (0–12 rubric):

Environment (1→2→3): one advantage of recycling stated → an advantage with justification, or two advantages → two advantages, both justified (less mining and habitat damage, less toxic leaching of lead/mercury, less energy than extracting from ore).
Economy (1→2→3→4): one impact → two impacts or one justified → two impacts with justification for one → two or more impacts justified (value of recovered gold/copper/lithium and recycling jobs vs collection and safe-processing costs).
Individual (1→2→3): one choice → two choices, or one justified → two choices justified (repair, reuse/pass on, recycle responsibly rather than bin or hoard).
Appraisal (1→2): a concluding appraisal → an appraisal supported by evidence from the interactive (only 17 of 100 units are formally recycled, so recycling alone is not enough).`,
    keyConcepts: ['Criterion D', 'Sustainability', 'Environmental impact', 'Economy'],
    keywords: ['recycling', 'mining', 'toxic metals', 'economy', 'individual', 'appraisal', 'e-waste'],
    feedbackHit: 'All four dimensions (environment, economy, individual, appraisal) addressed — up to 12 marks.',
    feedbackMiss: 'Must address: (1) environmental advantages of recovering metals vs mining; (2) economic impacts; (3) individual choices; (4) a final appraisal using the data.',
  },

  q8_b: {
    marks: 2,
    exemplar: 'Accept any two reasonable suggestions: repair cafés extend the working lifetime of devices; fewer devices are thrown away; less new mining and manufacturing is needed; people keep using what they already own.',
    keyConcepts: ['Sustainability', 'Repair cafés', 'E-waste'],
    keywords: ['extend lifetime', 'fewer discarded', 'less mining', 'reduce waste'],
    feedbackHit: 'Two valid suggestions for repair cafés reducing e-waste — 2 marks.',
    feedbackMiss: 'Think: fixing a device means it is not thrown away and no new device (and its mined metals) is needed.',
  },
}
