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
  // ─── Q1: Chromium ────────────────────────────────────────────────────────────
  q1_a: {
    type: 'mcq',
    correct: 3,
  },
  q1_b: {
    type: 'mcq',
    correct: 1,
  },
  q1_c: {
    marks: 2,
    exemplar: 'Award 1 mark each for any two of: variable oxidation state / variable oxidation number; forms coloured compounds (e.g. chromium compounds are green, orange or violet); acts as a catalyst; any named metallic property such as electrical conductivity, thermal conductivity, malleability, ductility, metallic lustre. Accept "they have colour." Do NOT accept "hard."',
    keyConcepts: ['Transition metal properties', 'Periodic table'],
    keywords: ['variable oxidation state', 'coloured compounds', 'catalyst', 'metallic property', 'transition metals'],
    feedbackHit: 'Correct — variable oxidation state and forming coloured compounds are defining transition metal properties.',
    feedbackMiss: 'Transition metals are characterised by: (1) variable oxidation states (e.g. Cr²⁺, Cr³⁺); (2) forming coloured compounds; (3) acting as catalysts; (4) metallic properties (conductivity, malleability).',
  },
  q1_d: {
    marks: 3,
    exemplar: 'Protons = 24 (atomic number unchanged); Neutrons = 52 − 24 = 28; Electrons = 24 − 2 = 22 (Cr²⁺ has lost 2 electrons). Award 1 mark per correct value.',
    keyConcepts: ['Atomic structure', 'Ions'],
    keywords: ['protons 24', 'neutrons 28', 'electrons 22', 'Cr²⁺ ion', 'atomic number', 'mass number'],
    feedbackHit: 'Correct — protons = atomic number; neutrons = mass − protons; electrons = protons − charge.',
    feedbackMiss: 'For Cr²⁺: protons = 24 (always = atomic number); neutrons = 52 − 24 = 28; electrons = 24 − 2 = 22 (ion has lost 2 electrons).',
  },
  q1_e: {
    type: 'mcq',
    correct: 0,
  },
  q1_f: {
    marks: 2,
    exemplar: 'CrO = chromium oxide or chromium(II) oxide. CrCO₃ = chromium carbonate or chromium(II) carbonate. Award 1 mark each. Roman numeral II must be correct if stated.',
    keyConcepts: ['Compound nomenclature', 'Transition metal compounds'],
    keywords: ['chromium oxide', 'chromium(II) oxide', 'chromium carbonate', 'chromium(II) carbonate', 'nomenclature'],
    feedbackHit: 'Correct — CrO is chromium(II) oxide; CrCO₃ is chromium(II) carbonate.',
    feedbackMiss: 'Name the metal ion first, then the anion: CrO = chromium(II) oxide; CrCO₃ = chromium(II) carbonate. The (II) shows the chromium has a +2 charge.',
  },

  // ─── Q2: E-waste Screen Glass Recycling ──────────────────────────────────────
  q2_a: {
    marks: 3,
    exemplar: 'Plastic backing film: dissolves in organic solvent. Steel screws in frame: magnetic. Glass screen: sinks in water. Award 1 mark per correct property.',
    keyConcepts: ['Separation techniques', 'Physical properties'],
    keywords: ['dissolves in organic solvent', 'magnetic', 'sinks in water', 'plastic', 'steel', 'glass'],
    feedbackHit: 'Correct — each material has a distinct physical property used to separate it.',
    feedbackMiss: 'Match each material to its separable property: Plastic film → dissolves in organic solvent; Steel screws → magnetic; Glass → sinks in water.',
    blankAnswers: ['dissolves in organic solvent', 'magnetic', 'sinks in water'],
  },
  q2_b: {
    marks: 1,
    exemplar: 'TiO₂. This is the only additive present in the anti-glare coated glass column but absent from the other three glasses.',
    keyConcepts: ['Data interpretation', 'Chemical formulae'],
    keywords: ['TiO₂', 'titanium dioxide', 'anti-glare coated glass', 'formula'],
    feedbackHit: 'Correct — TiO₂ (titanium dioxide) is present only in the anti-glare coated glass.',
    feedbackMiss: 'Scan the table for the compound that only appears in the anti-glare coated glass column. That compound is TiO₂.',
  },
  q2_c: {
    marks: 3,
    exemplar: 'Ti = 48 AND O = 16 seen or implied (1 mark). Molar mass = 48 + 2(16) = 48 + 32 = 80 (1 mark). Unit: g mol⁻¹ or g (1 mark).',
    keyConcepts: ['Molar mass', 'Relative atomic masses'],
    keywords: ['Ti 48', 'O 16', '80 g mol⁻¹', 'molar mass', 'TiO₂'],
    feedbackHit: 'Correct — Mr(TiO₂) = 48 + 2×16 = 80 g mol⁻¹.',
    feedbackMiss: 'Molar mass = sum of all atomic masses. TiO₂: 1 titanium atom (48) + 2 oxygen atoms (16 each) = 48 + 32 = 80 g mol⁻¹.',
  },
  q2_d: {
    marks: 3,
    exemplar: '5% of 250 g = 12.5 g of TiO₂ (1 mark). n = m/M = 12.5/80 seen or implied (1 mark). Final answer: n = 0.156 mol to 3 significant figures (1 mark). Accept 0.15625 mol rounded to 0.156 mol.',
    keyConcepts: ['Moles calculation', 'n = m/M'],
    keywords: ['n = m/M', '12.5 g', '80 g/mol', '0.156 mol', '3 significant figures'],
    feedbackHit: 'Correct — n = 12.5/80 = 0.156 mol (3 sig figs).',
    feedbackMiss: 'Step 1: TiO₂ is 5% of 250 g → mass = 12.5 g. Step 2: n = m/M = 12.5/80 = 0.15625 mol. To 3 sig figs = 0.156 mol.',
  },
  q2_e: {
    type: 'mcq',
    correct: 0,
  },
  q2_f: {
    marks: 2,
    exemplar: 'Silicon dioxide is insoluble in water (1 mark). Justification: it has a giant covalent structure — the strong covalent bonds throughout the structure mean it will not dissolve in water. Accept reference to sand or glass not dissolving in water as evidence (1 mark).',
    keyConcepts: ['Giant covalent structure', 'Solubility'],
    keywords: ['insoluble', 'giant covalent', 'strong bonds', 'silicon dioxide', 'SiO₂', 'not dissolve'],
    feedbackHit: 'Correct — SiO₂ is insoluble because its giant covalent network has too many strong bonds to be broken by water molecules.',
    feedbackMiss: 'Silicon dioxide (SiO₂) is insoluble because it has a giant covalent structure — all atoms are connected by strong covalent bonds which water cannot break.',
  },
  q2_g: {
    marks: 3,
    exemplar: 'Award any 3 reasonable points, for example: conserves raw materials (less sand mined for glass, less bauxite/ore for aluminium); avoids toxic e-waste leaching heavy metals into soil and water; saves the energy needed to make new glass and smelt new metal; reduces CO₂ from manufacturing new materials; improves sustainability.',
    keyConcepts: ['Environmental sustainability', 'Recycling'],
    keywords: ['conserves raw materials', 'avoids e-waste leaching', 'saves energy', 'sustainability', 'recycling', 'lower CO₂'],
    feedbackHit: 'Good — you identified environmental benefits of recycling e-waste over landfilling it.',
    feedbackMiss: 'Think about what e-waste landfill causes (toxic leaching, wasted resources) and what recycling provides (conserved raw materials, energy savings, lower emissions).',
  },

  // ─── Q3: Fizzy Soft Drink pH ─────────────────────────────────────────────────
  q3_a: {
    marks: 4,
    exemplar: 'IV: type of fizzy drink (1 mark). DV: pH (accept "acidity") (1 mark). Control variables — 2 marks for any two of: volume of drink tested; temperature; settling/standing time; same pH probe/equipment used. Do not accept "amount."',
    keyConcepts: ['Variables', 'Criterion B'],
    keywords: ['IV type of drink', 'DV pH', 'CV volume', 'CV temperature', 'CV settling time'],
    feedbackHit: 'Correct variables — IV: drink type; DV: pH; CVs: volume, temperature, settling time.',
    feedbackMiss: 'IV = what you change (type of drink); DV = what you measure (pH); CVs = what you keep the same (volume, temperature, settling time, equipment).',
  },
  q3_b: {
    marks: 1,
    exemplar: 'Accept any clear research question linking type of fizzy drink to pH or acidity, for example: "How does the type of fizzy drink affect the pH of the drink?" Accept "acidity" as a substitute for pH.',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['research question', 'type of drink', 'pH', 'acidity'],
    feedbackHit: 'Correct — your research question identifies the IV (drink type) and DV (pH).',
    feedbackMiss: 'The research question must link the IV to the DV: "How does the TYPE OF FIZZY DRINK affect the pH?"',
  },
  q3_c: {
    marks: 3,
    exemplar: 'Cola AND pH = 2.5 (1 mark). It has the lowest pH OR the highest acidity (1 mark). The lower the pH, the more acid attacks the tooth enamel, so it is the most damaging (1 mark — this third mark can be awarded for any drink if the student correctly links acidity to enamel damage).',
    keyConcepts: ['Data analysis', 'pH and acidity'],
    keywords: ['cola', 'pH 2.5', 'lowest pH', 'highest acidity', 'tooth enamel damage'],
    feedbackHit: 'Correct — cola (pH 2.5) has the lowest pH = highest acidity = most enamel damage.',
    feedbackMiss: 'The lower the pH, the more acidic. Cola has pH 2.5 (lowest), meaning it is most acidic and would damage tooth enamel the most.',
  },
  q3_d: {
    marks: 5,
    exemplar: 'Award 1 mark each for: (1) bar chart selected (not line graph); (2) data for all five drinks presented correctly; (3) title that links DV with IV (e.g. "pH of different fizzy drinks"); (4) x-axis labelled "type of drink" with all 5 drinks named; (5) y-axis labelled "pH" with appropriate scale.',
    keyConcepts: ['Data presentation', 'Bar graph'],
    keywords: ['bar chart', 'title', 'x-axis type of drink', 'y-axis pH', 'Cola 2.5', 'Tonic 3.9'],
    feedbackHit: 'Well done — your graph has appropriate type, correct data, title, and labelled axes.',
    feedbackMiss: 'Bar chart checklist: bar chart (not line); title linking pH to drink type; x-axis = type of drink; y-axis = pH with scale; all 5 bars: Cola 2.5, Lemonade 3.0, Orange 3.3, Energy 2.8, Tonic 3.9.',
  },
  q3_e: {
    marks: 1,
    exemplar: 'Accept any reasonable extension, for example: test the sugar-free version of each drink; investigate how the pH changes as the drink goes flat (loses CO₂); investigate the effect of temperature on the pH reading.',
    keyConcepts: ['Extension', 'Scientific investigation'],
    keywords: ['extension', 'sugar-free', 'going flat', 'temperature effect'],
    feedbackHit: 'Good extension — you suggested a new variable to investigate using the same method.',
    feedbackMiss: 'An extension changes one new aspect of the investigation. Suggestions: sugar-free versions, effect of going flat, effect of temperature.',
  },
  q3_f: {
    marks: 2,
    exemplar: 'Award 1 mark each: (1) with more than one trial you are able to calculate the mean; (2) reduces experimental errors OR increases accuracy/reliability.',
    keyConcepts: ['Reliability', 'Validity'],
    keywords: ['calculate mean', 'reduce experimental error', 'accuracy', 'reliability', 'anomalous results'],
    feedbackHit: 'Correct — multiple trials allow calculation of a mean and reduce experimental errors.',
    feedbackMiss: 'Multiple trials: (1) allow you to calculate a mean (average), reducing the effect of random error; (2) identify anomalous results; (3) increase reliability.',
  },
  q3_g: {
    marks: 4,
    exemplar: 'pH 1.5 → Red (strong acid, pH 1–3); pH 9.0 → Yellow (alkaline, pH 8–12); pH 7.0 → Purple (neutral, pH 6–7); pH 4.0 → Magenta (weak acid, pH 4–5). Award 1 mark per correct colour.',
    keyConcepts: ['Indicators', 'pH scale'],
    keywords: ['red strong acid', 'yellow alkaline', 'purple neutral', 'magenta weak acid', 'beetroot indicator'],
    feedbackHit: 'Correct — you matched each pH to the right indicator colour using the beetroot scale.',
    feedbackMiss: 'From the beetroot scale: red = pH 1–3; magenta = pH 4–5; purple = pH 6–7 (neutral); yellow = pH 8–12 (alkaline). Apply this to each beaker.',
    blankAnswers: ['Red', 'Yellow', 'Purple', 'Magenta'],
  },
  q3_h: {
    marks: 1,
    exemplar: 'Accept either: the indicator gives a range of pH (not exact values); OR the colour change would not be visible in a coloured drink (e.g. cola or orange soda).',
    keyConcepts: ['Indicator limitations', 'pH measurement'],
    keywords: ['range of pH', 'not exact', 'colour not visible', 'coloured drink', 'limitation'],
    feedbackHit: 'Correct — indicators only give a pH range, not an exact value.',
    feedbackMiss: 'Beetroot extract (like all indicators) changes colour over a range of pH, not at a single value — so you cannot determine the exact pH.',
  },

  // ─── Q4: Theobromine ─────────────────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Correct order from most to least theobromine (based on bar chart): Cocoa nibs → Dark chocolate → Milk chocolate → White chocolate. Award 1 mark for any two items in the correct position; 2 marks for all correct.',
    keyConcepts: ['Data analysis', 'Ordering from graph'],
    keywords: ['cocoa nibs', 'dark chocolate', 'milk chocolate', 'white chocolate', 'most theobromine', 'theobromine content'],
    feedbackHit: 'Correct order from most to least theobromine based on the bar chart data.',
    feedbackMiss: 'Read the theobromine content (mg per 50 g) from the bar chart for each product and rank from highest to lowest. Cocoa nibs has the highest bar.',
    blankAnswers: ['Cocoa nibs', 'Dark chocolate', 'Milk chocolate', 'White chocolate'],
  },
  q4_b: {
    marks: 2,
    exemplar: 'The data show that cocoa nibs contain the most theobromine (1 mark — must reference data). Therefore Tom\'s prediction (that milk chocolate has the most theobromine) is not valid (1 mark — only award if the first mark is awarded).',
    keyConcepts: ['Data validity', 'Hypothesis evaluation'],
    keywords: ['cocoa nibs most theobromine', 'prediction not valid', 'data show', 'milk chocolate incorrect'],
    feedbackHit: 'Correct — cocoa nibs have the most theobromine so Tom\'s prediction (milk chocolate most) is not valid.',
    feedbackMiss: 'Use the graph data: cocoa nibs have the highest theobromine content. Tom predicted milk chocolate would have the most, so the prediction is NOT valid.',
  },
  q4_c: {
    marks: 2,
    exemplar: 'Award 1 mark each for any two differences: (1) Compound 1 has an extra methyl (–CH₃) group compared with Compound 2 (three methyls versus two). (2) Compound 1 has a methyl group attached to a nitrogen (N–CH₃) where Compound 2 has an N–H. Accept "Compound 1 has one more carbon/methyl group."',
    keyConcepts: ['Molecular structure', 'Organic chemistry'],
    keywords: ['extra methyl group', 'CH₃', 'N–CH₃', 'N–H', 'structural difference'],
    feedbackHit: 'Correct — the extra –CH₃ group and the N–CH₃ vs N–H substitution are the two structural differences.',
    feedbackMiss: 'Compare the two structures carefully: (1) Compound 1 has one more –CH₃ (methyl) group; (2) Compound 1 has an N–CH₃ where Compound 2 has an N–H.',
  },
  q4_d: {
    marks: 3,
    exemplar: 'Award 1 mark each: (1) If the milk temperature is high (boiled, ~90 °C) (condition); (2) then the theobromine content of the drink will be the highest OR will increase (prediction); (3) because more theobromine dissolves into hotter milk/water (solubility increases with temperature) (reason).',
    keyConcepts: ['Hypothesis', 'Criterion B'],
    keywords: ['hot milk', '90 °C boiled', 'highest theobromine', 'more dissolves', 'solubility increases'],
    feedbackHit: 'Correct hypothesis — hotter milk dissolves the most theobromine.',
    feedbackMiss: 'A hypothesis needs: condition (high temperature / boiled milk), prediction (most theobromine), reason (theobromine is more soluble in hotter liquid, so more dissolves out of the cocoa).',
  },

  // ─── Q5: Swimming-Pool Acid Neutraliser Design ───────────────────────────────
  q5_: {
    marks: 19,
    exemplar: 'Full Criterion B design rubric (0–19 marks). Key elements for each band: Variables (IV: type of carbonate; DV: time for the acid to be neutralised OR rate of CO₂ released OR time for the pH to reach 7; CVs: mass of carbonate, volume of acid, concentration of acid, temperature, particle size of carbonate); Additional equipment (stopwatch, balance, measuring cylinder, pH probe, gas syringe or top-pan balance to follow CO₂ loss); Method (add a fixed mass of each carbonate to a fixed volume of the acidic water at the same concentration; time how long until the pH reaches 7 / the fizzing stops; OR measure the volume of CO₂ collected in a fixed time; repeat each carbonate several times; calculate means); Data (compare the neutralisation times or CO₂ volumes; the carbonate with the shortest time / steepest curve neutralises fastest; use means to decide); Assumptions (each carbonate sample is pure and of equal mass/particle size; the acid is at the same concentration each time); Safety (sulfuric acid is irritant/corrosive — wear goggles and gloves, avoid skin contact, work in a ventilated area as CO₂ is released).',
    keyConcepts: ['Criterion B — Inquiry and Design', 'Neutralisation', 'Metal carbonates'],
    keywords: ['IV carbonate type', 'DV neutralisation time', 'CV mass of carbonate', 'CV volume of acid', 'CV concentration', 'stopwatch', 'pH probe', 'repeats', 'acid corrosive', 'safety'],
    feedbackHit: 'Excellent design — all elements including variables, equipment, method, data use, assumptions, and safety are addressed.',
    feedbackMiss: 'A full Crit B design needs: IV/DV/CVs; equipment list; step-by-step method; how data will decide the fastest carbonate; assumptions stated; safety precautions for the acid.',
  },

  // ─── Q6: Carbon Footprint ────────────────────────────────────────────────────
  q6_a: {
    marks: 4,
    exemplar: 'Step 1: Read the concrete embodied-carbon factor = 0.16 kgCO₂e per kg (1 mark). Step 2: Multiply by the 4000 kg mass needed: 0.16 × 4000 (1 mark). Step 3: = 640 kgCO₂e (1 mark). Step 4: Final value given to 2 significant figures = 640 kgCO₂e (1 mark).',
    keyConcepts: ['Carbon footprint calculation', 'Significant figures'],
    keywords: ['0.16 kgCO₂e per kg', '4000 kg', '640 kgCO₂e', '2 significant figures'],
    feedbackHit: 'Correct calculation — 0.16 kgCO₂e/kg × 4000 kg = 640 kgCO₂e to 2 sig figs.',
    feedbackMiss: 'Multiply the embodied-carbon factor by the mass needed: 0.16 kgCO₂e/kg × 4000 kg = 640 kgCO₂e. To 2 sig figs that is 640 kgCO₂e.',
  },
  q6_b: {
    marks: 3,
    exemplar: 'Award 1 mark each: (1) State that both walls are equally strong / do the same job. (2) The reinforced-concrete wall has a higher carbon footprint / greater environmental impact than the timber wall. (3) Correct use of data: concrete = 640 kgCO₂e versus timber = 450 kgCO₂e — concrete emits about 40% more; also credit noting that growing timber removes CO₂ from the air (carbon storage). Do not award the third mark if no data is given.',
    keyConcepts: ['Environmental impact', 'Carbon footprint comparison'],
    keywords: ['concrete higher footprint', '640 kgCO₂e', '450 kgCO₂e', 'timber stores carbon', 'environmental impact'],
    feedbackHit: 'Correct — you identified that both walls do the same job but concrete has the higher footprint, with supporting data.',
    feedbackMiss: 'Both walls are equally strong, but the concrete wall emits 640 kgCO₂e versus 450 kgCO₂e for timber — and timber also stores carbon as it grows. Always quote the data values when comparing.',
  },

  // ─── Q7: Landfill Methane ────────────────────────────────────────────────────
  q7_a: {
    marks: 2,
    exemplar: 'CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g). Reactants correct (2 before O₂) (1 mark). Products correct (2 before H₂O) (1 mark).',
    keyConcepts: ['Balancing equations', 'Combustion of methane'],
    keywords: ['CH₄', '2O₂', 'CO₂', '2H₂O', 'balanced equation', 'combustion'],
    feedbackHit: 'Correct — CH₄ + 2O₂ → CO₂ + 2H₂O is the balanced combustion equation.',
    feedbackMiss: 'Balance by counting atoms: 1C, 4H, 4O on left → need 2O₂ on left and 2H₂O on right. Balanced: CH₄ + 2O₂ → CO₂ + 2H₂O.',
  },
  q7_b: {
    marks: 14,
    exemplar: 'Full Criterion D rubric (0–14 marks). Key content: Advantages of running landfill sites: simple, low-cost way to dispose of large amounts of waste; the captured gas can be turned into useful electricity. Disadvantages: landfills take up land, can smell, attract pests and leak liquids (leachate) and methane. Economic impacts: a gas-to-energy scheme creates jobs and sells electricity; the wells, pipes and engine are expensive to build; can lower a community\'s energy bills and earn carbon credits. Environmental advantages of burning landfill gas: captures methane (a greenhouse gas ~25× more potent than CO₂) that would otherwise escape; generates electricity that displaces fossil-fuel power; burning converts CH₄ to less-harmful CO₂ + H₂O. Environmental disadvantages: CO₂ is still produced on combustion; some methane still leaks unburned from the site; it does nothing to reduce the amount of waste sent to landfill in the first place. Ethical aspects: relying on landfill gas may discourage reducing, reusing and recycling waste; fairness of siting landfills near poorer communities; is it right to build energy systems that depend on producing more buried waste? Concluding appraisal: a balanced, justified conclusion on whether the benefits outweigh the costs. Higher bands: balanced account with at least one advantage AND disadvantage, economic AND environmental AND ethical points justified, concluding appraisal present.',
    keyConcepts: ['Criterion D', 'Methane capture', 'Environmental sustainability', 'Ethics'],
    keywords: ['landfill', 'methane capture', 'gas to energy', 'electricity', 'economic impact', 'environmental impact', 'ethical aspects', 'appraisal', 'CO₂ emissions'],
    feedbackHit: 'Excellent Criterion D response — you covered all aspects (advantages, disadvantages, economic, environmental, ethical) with a clear concluding appraisal.',
    feedbackMiss: 'Structure your answer: (1) advantages AND disadvantages of running landfill sites; (2) economic impacts; (3) environmental advantages AND disadvantages of burning landfill gas; (4) ethical aspects; (5) concluding appraisal. Include data from the stimulus.',
  },
}
