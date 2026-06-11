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
  // ── Q1 — Fossil fuels ────────────────────────────────────────────────────
  q1_a: {
    marks: 1,
    exemplar: 'Exothermic.',
    keyConcepts: ['Energy changes', 'Combustion'],
    keywords: ['exothermic', 'combustion', 'energy released'],
    feedbackHit: 'Exothermic correctly stated.',
    feedbackMiss: 'Combustion releases energy to surroundings = exothermic.',
  },

  q1_b: {
    marks: 2,
    exemplar: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. [1 mark for reactants balanced (5O₂); 1 for products balanced (3CO₂+4H₂O)].',
    keyConcepts: ['Balancing equations', 'Combustion of alkanes'],
    keywords: ['5O₂', '3CO₂', '4H₂O', 'balanced'],
    feedbackHit: 'Balanced equation with 5, 3, 4 — 2 marks.',
    feedbackMiss: 'Count atoms: C₃H₈ has 3C and 8H. Products: 3CO₂ and 4H₂O. Balance O last: 3×2+4×1=10 O atoms → 5O₂.',
    blankAnswers: ['5', '3', '4'],
  },

  q1_c: {
    marks: 2,
    exemplar: 'Molecule A: Alcohol (or alkanol) [1]; Molecule B: Carboxylic acid (or organic acid) [1].',
    keyConcepts: ['Organic families', 'Functional groups'],
    keywords: ['alcohol', 'alkanol', 'carboxylic acid', 'organic acid', 'OH group', 'COOH'],
    feedbackHit: 'Both families correctly named — 2 marks.',
    feedbackMiss: 'Look at the functional group: –OH = alcohol; –COOH = carboxylic acid.',
  },

  q1_d: {
    marks: 3,
    exemplar: 'Powdered coal has a greater surface area than lumps [1]; a larger surface area means more particles exposed to oxygen → rate of reaction is faster [1]; so energy is released more quickly/efficiently [1].',
    keyConcepts: ['Surface area', 'Rate of reaction', 'Combustion efficiency'],
    keywords: ['surface area', 'rate', 'faster', 'energy released', 'particles'],
    feedbackHit: 'Surface area → faster rate → more energy per time — 3 marks.',
    feedbackMiss: 'Three steps: (1) greater surface area; (2) faster rate; (3) more energy released per time.',
  },

  // ── Q2 — Solar power / periodic table ────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Ga: Group 3, Period 4 [1]; As: Group 5, Period 4 [1].',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['Ga', 'Group 3', 'Period 4', 'As', 'Group 5'],
    feedbackHit: 'Both elements correctly placed — 2 marks.',
    feedbackMiss: 'Find each element in the periodic table. Period = row number. Group = column number.',
  },

  q2_b: {
    marks: 2,
    exemplar: 'No emissions from solar (compared with fossil fuels) [1]. Accept any linked reasonable point, e.g.: solar is renewable and fossil fuels are finite; solar panels available worldwide; legislation promotes use of renewable fuel source [1].',
    keyConcepts: ['Renewable energy', 'Environmental impact'],
    keywords: ['no emissions', 'renewable', 'fossil fuels', 'CO₂', 'greenhouse'],
    feedbackHit: 'No/less emissions + one further advantage — 2 marks.',
    feedbackMiss: 'Key points: solar produces no greenhouse gas emissions; solar is renewable; fossil fuels are finite.',
  },

  q2_c: { type: 'mcq', correct: 0 } as MCQEntry,

  q2_d: {
    marks: 3,
    exemplar: 'Both C and Si are in the same group (Group 4) / have the same number of valence electrons [1]; valence electrons pair up or share electrons [1]; to form 4 covalent bonds (in CH₄ and SiH₄) [1].',
    keyConcepts: ['Covalent bonding', 'Group 4', 'Valence electrons'],
    keywords: ['same group', 'valence electrons', 'covalent bonds', '4 bonds', 'share electrons'],
    feedbackHit: 'Same group → same valence electrons → 4 covalent bonds — 3 marks.',
    feedbackMiss: 'C and Si are in the same group → same valence electrons → form same number of bonds.',
  },

  // ── Q3 — Hydrogen production ──────────────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'More reactive metals produce hydrogen more quickly or at higher rates [1]; the metals react differently because they have different reactivities [1].',
    keyConcepts: ['Metal reactivity', 'Rate of reaction'],
    keywords: ['more reactive', 'higher rate', 'different reactivities'],
    feedbackHit: 'More reactive → faster rate + reason — 2 marks.',
    feedbackMiss: 'Different metals have different positions in the reactivity series → different rates with acid.',
  },

  q3_b: {
    marks: 3,
    exemplar: 'Speeds up the rate of reaction [1]; by lowering the activation energy or providing an alternative reaction pathway [1]; without being used up itself [1].',
    keyConcepts: ['Catalyst', 'Activation energy', 'Reaction rate'],
    keywords: ['rate', 'activation energy', 'alternative pathway', 'not used up'],
    feedbackHit: 'Three-part definition of catalyst — 3 marks.',
    feedbackMiss: 'A catalyst: (1) speeds up rate; (2) lowers activation energy; (3) is not consumed.',
  },

  q3_c: {
    marks: 4,
    exemplar: 'Molar mass CH₄ = 16 g/mol [1]; 8kg = 8000g → n(CH₄) = 8000/16 = 500 mol [1]; 1 mol CH₄ reacts to produce 3 mol H₂ [1]; moles of H₂ produced = 500×3 = 1500 mol [1].',
    keyConcepts: ['Moles', 'Stoichiometry', 'Molar mass'],
    keywords: ['16 g/mol', '500 mol', '3 mol H₂', '1500 mol'],
    feedbackHit: '1500 mol H₂ with full working — 4 marks.',
    feedbackMiss: 'Steps: M(CH₄)=16; n=8000/16=500mol; ratio 1:3; n(H₂)=1500mol.',
  },

  q3_d: {
    marks: 1,
    exemplar: 'Ammonia is not flammable (hydrogen is highly flammable); OR Ammonia has a distinct smell so leaks can be detected; OR Ammonia is less reactive.',
    keyConcepts: ['Chemical properties', 'Safety', 'Hydrogen vs ammonia'],
    keywords: ['not flammable', 'detectable smell', 'less reactive', 'safer'],
    feedbackHit: 'One valid reason given — 1 mark.',
    feedbackMiss: 'Think about: flammability, detectability, reactivity. Ammonia wins on all counts vs hydrogen.',
  },

  q3_e: {
    marks: 2,
    exemplar: 'Accept any reasonable environmental benefit with justification [max 2]: reduction in environmental damage from mining; reduction in effects of climate change; reduced risk of CO₂ leaks. Justification: calcium carbonate — non-renewable material — is produced instead of quarried; OR CO₂ from H₂ production is being used/stored underground.',
    keyConcepts: ['Carbon capture', 'Environmental benefit', 'Blue hydrogen'],
    keywords: ['CO₂ stored', 'carbon capture', 'climate change', 'reduced emissions'],
    feedbackHit: 'Environmental benefit + valid justification — 2 marks.',
    feedbackMiss: 'CO₂ is used in forming CaCO₃ rather than released → less greenhouse gas in atmosphere.',
  },

  // ── Q4 — Frozen desserts / ice cream ─────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Before freezing (Liquid): irregular arrangement of at least 9 molecules fairly close together with at least 2 in contact [1]. After freezing (Solid): regular/ordered arrangement of at least 9 molecules all in contact [1].',
    keyConcepts: ['States of matter', 'Particle arrangement', 'Solid vs liquid'],
    keywords: ['irregular', 'regular', 'close', 'ordered', 'in contact'],
    feedbackHit: 'Liquid = irregular close arrangement; Solid = regular ordered arrangement — 2 marks.',
    feedbackMiss: 'Liquid = random, fairly close; Solid = ordered grid, all touching. Must have ≥9 molecules each.',
  },

  q4_b: {
    marks: 2,
    exemplar: 'Measurement = 55 μm (±5 μm) [1]; conversion: 55 × 10⁻⁶ m = 5.5 × 10⁻⁵ m [1]. (Do not allow perimeter or circumference; do not accept 55 × 10⁶).',
    keyConcepts: ['Measurement', 'Standard form', 'Unit conversion'],
    keywords: ['55 μm', '5.5×10⁻⁵ m', 'standard form', 'micrometres'],
    feedbackHit: '55 μm and 5.5×10⁻⁵ m — 2 marks.',
    feedbackMiss: 'Measure diameter only. 1 μm = 10⁻⁶ m. So 55 μm = 55×10⁻⁶ = 5.5×10⁻⁵ m.',
  },

  q4_c: {
    marks: 4,
    exemplar: 'x-axis label: Temperature AND °C [1]; y-axis label: Percentage of ice cream frozen [1]; Two points plotted correctly [1]; All data plotted correctly [1].',
    keyConcepts: ['Graph drawing', 'Axes labels', 'Data plotting'],
    keywords: ['x-axis Temperature °C', 'y-axis % frozen', 'data points', 'scale'],
    feedbackHit: 'Labelled axes with units, correct scale, all 5 points correct — 4 marks.',
    feedbackMiss: 'x = Temperature / °C; y = Percentage frozen. Plot all 5 data points correctly. Label units.',
  },

  q4_d: {
    marks: 2,
    exemplar: '−6 °C (±0.5). Minus sign must be included.',
    keyConcepts: ['Graph reading', 'Interpolation'],
    keywords: ['−6°C', 'interpolate', '50% frozen', 'read from graph'],
    feedbackHit: '−6°C (accept −5.5 to −6.5) — 2 marks.',
    feedbackMiss: 'Find 50% on y-axis, read across to curve, then down to x-axis. Must include minus sign.',
  },

  q4_e: {
    marks: 3,
    exemplar: 'If the temperature is lower [1]; Then the texture will be smoother [1]; Because the ice crystals are smaller (or form more quickly at lower temperature) [1]. (Marking points 2 and 3 must be correctly linked to temperature.)',
    keyConcepts: ['Hypothesis', 'Ice crystal formation', 'Temperature effect'],
    keywords: ['if temperature lower', 'smoother texture', 'smaller ice crystals', 'form quickly'],
    feedbackHit: 'If–Then–Because with temperature, texture, and crystal size — 3 marks.',
    feedbackMiss: 'Format: IF [temperature condition] THEN [texture prediction] BECAUSE [crystal reason].',
  },

  q4_f: {
    marks: 1,
    exemplar: 'Accept any reasonable suggestion: use same units for all liquids; all data should have consistent precision; include units in the heading; include mean value.',
    keyConcepts: ['Data presentation', 'Scientific tables'],
    keywords: ['same units', 'consistent precision', 'mean value', 'units in heading'],
    feedbackHit: 'One valid improvement to data presentation — 1 mark.',
    feedbackMiss: 'Look at the table: soda/water/milk times use different units. Suggest: use all seconds, add mean row, add units in header.',
  },

  q4_g: {
    marks: 2,
    exemplar: 'Milk does not melt the quickest (or water is the quickest) [1]; so the hypothesis is invalid [1]. (Do not award second mark unless first is awarded.)',
    keyConcepts: ['Hypothesis validation', 'Data interpretation'],
    keywords: ['milk slowest', 'water fastest', 'hypothesis invalid'],
    feedbackHit: 'States milk not fastest with hypothesis declared invalid — 2 marks.',
    feedbackMiss: 'The hypothesis said milk melts quickly. The data shows milk takes longest. Therefore: invalid.',
  },

  // ── Q5 — Salt de-icing ────────────────────────────────────────────────────
  q5_a: {
    marks: 1,
    exemplar: 'RQ linking surface area of the ice AND time taken for the ice to melt (with salt). (Do not accept form of ice for surface area.)',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['surface area', 'time', 'melt', 'salt', 'research question'],
    feedbackHit: 'RQ links surface area of ice to time to melt — 1 mark.',
    feedbackMiss: 'RQ format: "How does [surface area of ice] affect [time for ice to melt with salt]?"',
  },

  q5_b: {
    marks: 4,
    exemplar: 'IV: The surface area of the ice [1]; DV: The time taken for the ice to melt [1]; CV1 + CV2: Accept any two from: mass of salt, type of salt used, mass of ice, size of test tube, room temperature [2].',
    keyConcepts: ['Variables', 'IV/DV/CV'],
    keywords: ['surface area', 'time to melt', 'mass of salt', 'mass of ice', 'room temperature'],
    feedbackHit: 'IV, DV, and two valid CVs — 4 marks.',
    feedbackMiss: 'IV = surface area of ice (what you change); DV = time to melt (what you measure); CVs = mass/type of salt, mass of ice, temperature.',
  },

  q5_c: {
    marks: 1,
    exemplar: 'Accept any reasonable improvement: same mass of ice used; same surface area for each form; use more values of IV; carry out more trials.',
    keyConcepts: ['Experimental design', 'Validity'],
    keywords: ['same mass', 'same surface area', 'more trials', 'more IV values'],
    feedbackHit: 'One valid improvement stated — 1 mark.',
    feedbackMiss: 'Improvements should address fairness (same mass), reproducibility (more trials), or resolution (more IV values).',
  },

  q5_d: {
    marks: 3,
    exemplar: 'Blank A (Salt % remaining): 80.00/150.00 × 100 = 53.33% [1]; Blank B (Sugar % melted): (145.00−100.00)/145.00 × 100 = 45.00/145.00 × 100 = 31.03% [1]; Both values correctly rounded to 2 decimal places [1].',
    keyConcepts: ['Percentage calculation', 'Data analysis'],
    keywords: ['53.33%', '31.03%', 'percentage remaining', 'percentage melted'],
    feedbackHit: '53.33% and 31.03% both correctly calculated and rounded — 3 marks.',
    feedbackMiss: 'Remaining%: (remaining/initial)×100. Melted%: ((initial−remaining)/initial)×100.',
  },

  q5_e: {
    marks: 1,
    exemplar: 'Salt was the control (or reference) to which all the other substances could be compared.',
    keyConcepts: ['Control variable', 'Experimental controls'],
    keywords: ['control', 'reference', 'comparison'],
    feedbackHit: 'Salt as control/reference — 1 mark.',
    feedbackMiss: 'A control is the baseline standard. Salt is the most commonly used de-icer, so it is the reference.',
  },

  q5_f: { type: 'mcq', correct: 0 } as MCQEntry,

  q5_g: {
    marks: 2,
    exemplar: 'Potassium acetate [1]; only substance which does not include chloride AND works below −45°C [1].',
    keyConcepts: ['De-icing', 'Corrosion', 'Data from infographic'],
    keywords: ['potassium acetate', 'no chloride', 'works below −45°C'],
    feedbackHit: 'Potassium acetate + justified by no chloride AND working temperature — 2 marks.',
    feedbackMiss: 'Chlorides damage metal (corrosion). Need no chloride AND effective at −45°C. Only potassium acetate fits both.',
  },

  q5_h: {
    marks: 3,
    exemplar: 'Accept any two relevant points [max 2]: surface area differences; airports use natural snow; structures are different (machine-made more compact). Accept any reasonable linked justification [1]: machine-made snow is more compact compared to natural; de-icers might pass through natural snow but only act on the surface of machine-made snow.',
    keyConcepts: ['Validity', 'Scientific models', 'Machine-made vs natural snow'],
    keywords: ['machine-made compact', 'natural snow structure', 'surface area', 'validity limited'],
    feedbackHit: 'Two differences + one justified reason for limited validity — 3 marks.',
    feedbackMiss: 'Discuss: (1) structural differences; (2) how de-icers interact differently; (3) whether results transfer to real conditions.',
  },

  // ── Q6 — Airport de-icing design ─────────────────────────────────────────
  q6_a: { type: 'mcq', correct: 3 } as MCQEntry,

  q6_b: {
    marks: 16,
    exemplar: `Criterion B Investigation Design — 16 marks rubric:

| Dimension | 1 mark | 2 marks | 3 marks | 4 marks |
|---|---|---|---|---|
| Variables | Some implied | Salt as IV or DV, one CV | Salt as IV and DV, one CV | Salt as IV and DV, melted/CV, and extra CV |
| Equipment | Equipment to measure DV or monitor one CV | Equipment to measure DV and monitor one CV | — | — |
| Sufficient data | Reference to different salts | All five salts or three trials | All five salts and three trials | All five salts and three trials and calculates mean |
| Method | Attempt but not relevant | Attempt at method but time of melting not measured so not likely to give relevant data | Method for measuring time of melting or mass of ice melted; described, could be followed, will produce relevant data | Complete method: measuring time of melting or mass melted; fully explained, could be followed, replicated |
| Safety | A safety concern mentioned | Safety mentioned and linked to specific hazard | — | — |`,
    keyConcepts: ['Criterion B', 'Investigation design', 'De-icing salts'],
    keywords: ['variables', 'equipment', 'method', 'sufficient data', 'safety'],
    feedbackHit: 'All dimensions addressed: variables, equipment, method with repeats, safety — up to 16 marks.',
    feedbackMiss: 'Must include: IV (salt type), DV (time/mass ice melted), CVs, equipment list, full method, safety.',
  },

  // ── Q7 — Textiles ─────────────────────────────────────────────────────────
  q7_a: { type: 'mcq', correct: 1 } as MCQEntry,

  q7_b: {
    marks: 7,
    exemplar: `Criterion D — Evaluate fabric suitability for sports (0–7 rubric):

| Dimension | 1 mark | 2 marks | 3 marks |
|---|---|---|---|
| Properties | One property stated | Two properties stated, or one with further explanation linked to sportswear | Two or more properties with further explanation linked to sportswear for at least two |
| Comparison | Comparison of 2 fabrics | Comparison of 3 or more fabrics | — |
| Opinion | A choice stated | One choice stated with justification for use as sportswear | — |

Best answers mention: breathability, moisture-wicking, comfort, machine-washable, lightweight. Compare Cotton, Polyester, Nylon, Velvet. Opinion must be justified by the data in the table.`,
    keyConcepts: ['Criterion D', 'Material properties', 'Sports clothing'],
    keywords: ['breathable', 'comfort', 'polyester', 'nylon', 'cotton', 'comparison', 'opinion'],
    feedbackHit: 'Properties + 3 fabric comparison + justified opinion — up to 7 marks.',
    feedbackMiss: 'Must: (1) state properties for sports; (2) compare ≥3 fabrics with data; (3) give a justified choice.',
  },

  // ── Q8 — Clothing waste ───────────────────────────────────────────────────
  q8_a: {
    marks: 12,
    exemplar: `Criterion D — Discuss/evaluate reusing clothing (0–12 rubric):

| Dimension | 1 mark | 2 marks | 3 marks | 4 marks |
|---|---|---|---|---|
| Environment | A statement of an advantage of reclaiming | A statement of an advantage with justification, or two advantages | Two advantages, both justified | — |
| Economy | A statement of one impact | Two impacts, or one with justification | Two impacts with further justification for one | Two or more impacts with justifications for at least two |
| Individual | A statement of one impact | Two impacts, or one with justification | Two impacts with further justification | — |
| Appraisal | Appraisal | Appraisal with evidence | — | — |

Top-band answers include: environmental (less deforestation, fewer emissions, water saved), economic (new industry, jobs in reclaiming vs job losses in new manufacturing), individual (extend lifetime, make new clothing to preference, less likely to discard), appraisal with evidence from infographic.`,
    keyConcepts: ['Criterion D', 'Sustainability', 'Environmental impact', 'Economy'],
    keywords: ['reclaiming', 'environment', 'economy', 'individual', 'appraisal', 'fashion waste'],
    feedbackHit: 'All four dimensions (environment, economy, individual, appraisal) addressed — up to 12 marks.',
    feedbackMiss: 'Must address: (1) environmental advantages of reclaiming; (2) economic impacts; (3) individual choices; (4) final appraisal with evidence.',
  },

  q8_b: {
    marks: 2,
    exemplar: 'Accept any two reasonable suggestions: extending the lifetime of clothing; can make new clothing to suit personal preference; less likely to discard clothing. (Do not accept: clothing can be repaired.)',
    keyConcepts: ['Sustainability', 'Sewing machine', 'Clothing waste'],
    keywords: ['extend lifetime', 'personalise', 'less waste', 'repair', 'create'],
    feedbackHit: 'Two valid suggestions for sewing machine reducing waste — 2 marks.',
    feedbackMiss: 'Think: what can you do with a sewing machine? Make new items from old; alter clothes so they fit longer.',
  },
}
