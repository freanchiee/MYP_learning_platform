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
  // ── Q1 — Ethane combustion ────────────────────────────────────────────────
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
    exemplar: '2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O. [1 mark for reactants balanced (7O₂); 1 for products balanced (4CO₂+6H₂O)].',
    keyConcepts: ['Balancing equations', 'Combustion of alkanes'],
    keywords: ['7O₂', '4CO₂', '6H₂O', 'balanced'],
    feedbackHit: 'Balanced equation with 7, 4, 6 — 2 marks.',
    feedbackMiss: 'Count atoms: 2C₂H₆ has 4C and 12H. Products: 4CO₂ and 6H₂O. Balance O: 4×2+6×1=14 → 7O₂.',
    blankAnswers: ['7', '4', '6'],
  },

  q1_c: {
    marks: 2,
    exemplar: 'Molecule A: Ester [1]; Molecule B: Amine [1].',
    keyConcepts: ['Organic families', 'Functional groups'],
    keywords: ['ester', 'amine', 'COO group', 'NH₂ group'],
    feedbackHit: 'Both families correctly named — 2 marks.',
    feedbackMiss: 'Look at the functional group: –COO– = ester; –NH₂ = amine.',
  },

  q1_d: {
    marks: 3,
    exemplar: 'Fine wood pellets have a greater surface area than large logs [1]; a larger surface area means more particles exposed to oxygen → rate of reaction is faster [1]; so energy is released more quickly/efficiently [1].',
    keyConcepts: ['Surface area', 'Rate of reaction', 'Combustion efficiency'],
    keywords: ['surface area', 'rate', 'faster', 'energy released', 'particles'],
    feedbackHit: 'Surface area → faster rate → more energy per time — 3 marks.',
    feedbackMiss: 'Three steps: (1) greater surface area; (2) faster rate; (3) more energy released per time.',
  },

  // ── Q2 — Wave energy / periodic table ────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Ge: Group 4, Period 4 [1]; Sn: Group 4, Period 5 [1].',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['Ge', 'Group 4', 'Period 4', 'Sn', 'Group 4', 'Period 5'],
    feedbackHit: 'Both elements correctly placed — 2 marks.',
    feedbackMiss: 'Find each element in the periodic table. Period = row number. Group = column number.',
  },

  q2_b: {
    marks: 2,
    exemplar: 'No emissions from wave energy (compared with fossil fuels) [1]. Accept any linked reasonable point, e.g.: wave energy is renewable and fossil fuels are finite; wave energy available globally; produces no CO₂ [1].',
    keyConcepts: ['Renewable energy', 'Environmental impact'],
    keywords: ['no emissions', 'renewable', 'fossil fuels', 'CO₂', 'greenhouse'],
    feedbackHit: 'No/less emissions + one further advantage — 2 marks.',
    feedbackMiss: 'Key points: wave energy produces no greenhouse gas emissions; wave energy is renewable; fossil fuels are finite.',
  },

  q2_c: { type: 'mcq', correct: 2 } as MCQEntry,

  q2_d: {
    marks: 3,
    exemplar: 'Both C and Ge are in the same group (Group 4) / have the same number of valence electrons [1]; valence electrons pair up or share electrons [1]; to form 4 covalent bonds (in CH₄ and GeH₄) [1].',
    keyConcepts: ['Covalent bonding', 'Group 4', 'Valence electrons'],
    keywords: ['same group', 'valence electrons', 'covalent bonds', '4 bonds', 'share electrons'],
    feedbackHit: 'Same group → same valence electrons → 4 covalent bonds — 3 marks.',
    feedbackMiss: 'C and Ge are in the same group → same valence electrons → form same number of bonds.',
  },

  // ── Q3 — Hydrogen production (12.80 kg) ──────────────────────────────────
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
    exemplar: 'Molar mass CH₄ = 16 g/mol [1]; 12.80 kg = 12800 g → n(CH₄) = 12800/16 = 800 mol [1]; 1 mol CH₄ reacts to produce 3 mol H₂ [1]; moles of H₂ produced = 800×3 = 2400 mol [1].',
    keyConcepts: ['Moles', 'Stoichiometry', 'Molar mass'],
    keywords: ['16 g/mol', '800 mol', '3 mol H₂', '2400 mol'],
    feedbackHit: '2400 mol H₂ with full working — 4 marks.',
    feedbackMiss: 'Steps: M(CH₄)=16; n=12800/16=800 mol; ratio 1:3; n(H₂)=800×3=2400 mol.',
  },

  q3_d: {
    marks: 1,
    exemplar: 'Ammonia is a liquid at lower pressures so it is easier to store in conventional tanks; OR Ammonia has a higher boiling point than hydrogen so does not require cryogenic storage; OR Ammonia is less energy-intensive to transport.',
    keyConcepts: ['Chemical properties', 'Transport', 'Hydrogen vs ammonia'],
    keywords: ['liquid', 'cryogenic', 'easier to store', 'transport'],
    feedbackHit: 'One valid transport advantage given — 1 mark.',
    feedbackMiss: 'Think about storage: ammonia liquefies at −33°C; hydrogen requires −253°C for liquefaction. Ammonia is far easier to handle.',
  },

  q3_e: {
    marks: 2,
    exemplar: 'Accept any reasonable environmental benefit with justification [max 2]: reduction in environmental damage; reduction in effects of climate change; reduced risk of CO₂ contributing to global warming. Justification: CO₂ from H₂ production is being captured/stored rather than released into the atmosphere.',
    keyConcepts: ['Carbon capture', 'Environmental benefit', 'Blue hydrogen'],
    keywords: ['CO₂ stored', 'carbon capture', 'climate change', 'reduced emissions'],
    feedbackHit: 'Environmental benefit + valid justification — 2 marks.',
    feedbackMiss: 'CO₂ is used in forming CaCO₃ rather than released → less greenhouse gas in atmosphere.',
  },

  // ── Q4 — Frozen smoothies ─────────────────────────────────────────────────
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
    exemplar: 'Measurement = 42 μm (±5 μm) [1]; conversion: 42 × 10⁻⁶ m = 4.2 × 10⁻⁵ m [1]. (Do not allow perimeter or circumference.)',
    keyConcepts: ['Measurement', 'Standard form', 'Unit conversion'],
    keywords: ['42 μm', '4.2×10⁻⁵ m', 'standard form', 'micrometres'],
    feedbackHit: '42 μm and 4.2×10⁻⁵ m — 2 marks.',
    feedbackMiss: 'Measure diameter only. 1 μm = 10⁻⁶ m. So 42 μm = 42×10⁻⁶ = 4.2×10⁻⁵ m.',
  },

  q4_c: {
    marks: 4,
    exemplar: 'x-axis label: Temperature AND °C [1]; y-axis label: Percentage of smoothie frozen [1]; Two points plotted correctly [1]; All data plotted correctly [1].',
    keyConcepts: ['Graph drawing', 'Axes labels', 'Data plotting'],
    keywords: ['x-axis Temperature °C', 'y-axis % frozen', 'data points', 'scale'],
    feedbackHit: 'Labelled axes with units, correct scale, all 5 points correct — 4 marks.',
    feedbackMiss: 'x = Temperature / °C; y = Percentage frozen. Plot all 5 data points correctly. Label units.',
  },

  q4_d: {
    marks: 2,
    exemplar: '−4.5 °C (accept −4 to −5). Minus sign must be included.',
    keyConcepts: ['Graph reading', 'Interpolation'],
    keywords: ['−4.5°C', 'interpolate', '50% frozen', 'read from graph'],
    feedbackHit: '−4.5°C (accept −4 to −5) — 2 marks.',
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
    exemplar: 'Accept any reasonable suggestion: use same units for all entries; all data should have consistent precision; include units in the heading; include mean value.',
    keyConcepts: ['Data presentation', 'Scientific tables'],
    keywords: ['same units', 'consistent precision', 'mean value', 'units in heading'],
    feedbackHit: 'One valid improvement to data presentation — 1 mark.',
    feedbackMiss: 'Look at the table: times use different units (min + s vs hr). Suggest: use all seconds, add mean row, add units in header.',
  },

  q4_g: {
    marks: 2,
    exemplar: 'Yogurt blend melts quickest (not orange blend) [1]; so the hypothesis is not validated / is invalid [1]. (Do not award second mark unless first is awarded.)',
    keyConcepts: ['Hypothesis validation', 'Data interpretation'],
    keywords: ['yogurt blend fastest', 'orange blend slowest', 'hypothesis invalid'],
    feedbackHit: 'States yogurt blend melts first with hypothesis declared invalid — 2 marks.',
    feedbackMiss: 'The hypothesis predicted that higher-fat blends would have the smallest crystals and melt slowest. The data shows yogurt blend (higher fat) actually melts fastest. Therefore: invalid.',
  },

  // ── Q5 — Grit de-icing ────────────────────────────────────────────────────
  q5_a: {
    marks: 1,
    exemplar: 'RQ linking surface area of the ice AND time taken for the ice to melt (with grit). (Do not accept form of ice for surface area.)',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['surface area', 'time', 'melt', 'grit', 'research question'],
    feedbackHit: 'RQ links surface area of ice to time to melt — 1 mark.',
    feedbackMiss: 'RQ format: "How does [surface area of ice] affect [time for ice to melt with grit]?"',
  },

  q5_b: {
    marks: 4,
    exemplar: 'IV: The surface area of the ice [1]; DV: The time taken for the ice to melt [1]; CV1 + CV2: Accept any two from: mass of grit, type of grit, mass of ice, size of container, room temperature [2].',
    keyConcepts: ['Variables', 'IV/DV/CV'],
    keywords: ['surface area', 'time to melt', 'mass of grit', 'mass of ice', 'room temperature'],
    feedbackHit: 'IV, DV, and two valid CVs — 4 marks.',
    feedbackMiss: 'IV = surface area of ice (what you change); DV = time to melt (what you measure); CVs = mass/type of grit, mass of ice, temperature.',
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
    exemplar: 'Blank A (NaCl % remaining): 100.00/200.00 × 100 = 50.00% [1]; Blank B (CaCl₂ % melted): (160.00−112.00)/160.00 × 100 = 48.00/160.00 × 100 = 30.00% [1]; Both values correctly rounded to 2 decimal places [1].',
    keyConcepts: ['Percentage calculation', 'Data analysis'],
    keywords: ['50.00%', '30.00%', 'percentage remaining', 'percentage melted'],
    feedbackHit: '50.00% and 30.00% both correctly calculated and rounded — 3 marks.',
    feedbackMiss: 'Remaining%: (remaining/initial)×100. Melted%: ((initial−remaining)/initial)×100.',
    blankAnswers: ['50.00', '30.00'],
  },

  q5_e: {
    marks: 1,
    exemplar: 'Sodium chloride was the control (or reference) to which all the other substances could be compared.',
    keyConcepts: ['Control variable', 'Experimental controls'],
    keywords: ['control', 'reference', 'comparison'],
    feedbackHit: 'Sodium chloride as control/reference — 1 mark.',
    feedbackMiss: 'A control is the baseline standard. Sodium chloride is the most commonly used de-icer, so it is the reference.',
  },

  q5_f: { type: 'mcq', correct: 1 } as MCQEntry,

  q5_g: {
    marks: 2,
    exemplar: 'Potassium acetate [1]; only substance which does not include chloride AND works below −40°C [1].',
    keyConcepts: ['De-icing', 'Corrosion', 'Data from infographic'],
    keywords: ['potassium acetate', 'no chloride', 'works below −40°C'],
    feedbackHit: 'Potassium acetate + justified by no chloride AND working temperature — 2 marks.',
    feedbackMiss: 'Chlorides damage metal (corrosion). Need no chloride AND effective at −40°C. Only potassium acetate fits both.',
  },

  q5_h: {
    marks: 3,
    exemplar: 'Accept any two relevant points [max 2]: surface area differences; real roads use natural snow; structures are different (machine-made more compact). Accept any reasonable linked justification [1]: machine-made snow is more compact compared to natural; de-icers might pass through natural snow but only act on the surface of machine-made snow.',
    keyConcepts: ['Validity', 'Scientific models', 'Machine-made vs natural snow'],
    keywords: ['machine-made compact', 'natural snow structure', 'surface area', 'validity limited'],
    feedbackHit: 'Two differences + one justified reason for limited validity — 3 marks.',
    feedbackMiss: 'Discuss: (1) structural differences; (2) how de-icers interact differently; (3) whether results transfer to real conditions.',
  },

  // ── Q6 — De-icing design ─────────────────────────────────────────────────
  q6_a: { type: 'mcq', correct: 0 } as MCQEntry,

  q6_b: {
    marks: 16,
    exemplar: `Criterion B Investigation Design — 16 marks rubric:

| Dimension | 1 mark | 2 marks | 3 marks | 4 marks |
|---|---|---|---|---|
| Variables | Some implied | Salt as IV or DV, one CV | Salt as IV and DV, one CV | Salt as IV and DV, melted/CV, and extra CV |
| Equipment | Equipment to measure DV or monitor one CV | Equipment to measure DV and monitor one CV | — | — |
| Sufficient data | Reference to different salts | All five salts or three trials | All five salts and three trials | All five salts and three trials and calculates mean |
| Method | Attempt but not relevant | Attempt at method but time of melting not measured | Method for measuring time of melting or mass of ice melted; described, could be followed | Complete method: measuring time of melting or mass melted; fully explained, could be followed, replicated |
| Safety | A safety concern mentioned | Safety mentioned and linked to specific hazard (e.g. corrosive CaCl₂) | — | — |`,
    keyConcepts: ['Criterion B', 'Investigation design', 'De-icing salts'],
    keywords: ['variables', 'equipment', 'method', 'sufficient data', 'safety'],
    feedbackHit: 'All dimensions addressed: variables, equipment, method with repeats, safety — up to 16 marks.',
    feedbackMiss: 'Must include: IV (salt type), DV (time/mass ice melted), CVs, equipment list, full method, safety (note CaCl₂ is corrosive).',
  },

  // ── Q7 — Nylon / amide bond ───────────────────────────────────────────────
  q7_a: { type: 'mcq', correct: 2 } as MCQEntry,

  q7_b: {
    marks: 7,
    exemplar: `Criterion D — Evaluate fabric suitability for outdoor clothing (0–7 rubric):

| Dimension | 1 mark | 2 marks | 3 marks |
|---|---|---|---|
| Properties | One property stated | Two properties stated, or one with further explanation linked to outdoor clothing | Two or more properties with further explanation linked to outdoor clothing for at least two |
| Comparison | Comparison of 2 fabrics | Comparison of 3 or more fabrics | — |
| Opinion | A choice stated | One choice stated with justification for use as outdoor clothing | — |

Best answers mention: waterproof, breathability, durability, weight, moisture management. Compare Wool, Nylon, Polyester, Cotton. Opinion must be justified by the data in the table.`,
    keyConcepts: ['Criterion D', 'Material properties', 'Outdoor clothing'],
    keywords: ['waterproof', 'durable', 'nylon', 'polyester', 'wool', 'comparison', 'opinion'],
    feedbackHit: 'Properties + 3 fabric comparison + justified opinion — up to 7 marks.',
    feedbackMiss: 'Must: (1) state properties for outdoor use; (2) compare ≥3 fabrics with data; (3) give a justified choice.',
  },

  // ── Q8 — Textile water footprint ─────────────────────────────────────────
  q8_a: {
    marks: 12,
    exemplar: `Criterion D — Discuss/evaluate reducing textile water footprint (0–12 rubric):

| Dimension | 1 mark | 2 marks | 3 marks | 4 marks |
|---|---|---|---|---|
| Environment | A statement of an advantage of reclaiming fibres | A statement with justification, or two advantages | Two advantages, both justified | — |
| Economy | A statement of one impact | Two impacts, or one with justification | Two impacts with further justification for one | Two or more impacts with justifications for at least two |
| Individual | A statement of one impact | Two impacts, or one with justification | Two impacts with further justification | — |
| Appraisal | Appraisal | Appraisal with evidence | — | — |

Top-band answers include: environmental (less water consumed, less chemical pollution, reduced deforestation), economic (new reclaiming industry, reduced water treatment costs, vs job losses in new cotton manufacturing), individual (buy secondhand, wash less, extend garment life), appraisal with evidence from infographic.`,
    keyConcepts: ['Criterion D', 'Sustainability', 'Water footprint', 'Economy'],
    keywords: ['water use', 'reclaiming', 'environment', 'economy', 'individual', 'appraisal', 'fashion'],
    feedbackHit: 'All four dimensions (environment, economy, individual, appraisal) addressed — up to 12 marks.',
    feedbackMiss: 'Must address: (1) environmental advantages of reclaiming; (2) economic impacts; (3) individual choices; (4) final appraisal with evidence.',
  },

  q8_b: {
    marks: 2,
    exemplar: 'Accept any two reasonable suggestions [max 2]: extending the lifetime of clothing; transforming old garments into new useful items; reducing the need to purchase new clothing; personalising clothing to suit changing tastes. (Idea must relate specifically to upcycling, not generic statements.)',
    keyConcepts: ['Sustainability', 'Upcycling', 'Clothing waste'],
    keywords: ['extend lifetime', 'transform', 'upcycle', 'less waste', 'create new'],
    feedbackHit: 'Two valid suggestions for upcycling reducing waste — 2 marks.',
    feedbackMiss: 'Think: what can you do by creatively transforming old clothes? New items from old fabric; alter clothes; reduce new purchases.',
  },
}
