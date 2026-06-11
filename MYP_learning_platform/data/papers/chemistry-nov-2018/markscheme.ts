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
  // ─── Q1: Cobalt ──────────────────────────────────────────────────────────────
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
    exemplar: 'Award 1 mark each for any two of: variable oxidation state / variable oxidation number; forms coloured compounds (e.g. cobalt(II) ions are pink); any named metallic property such as electrical conductivity, thermal conductivity, malleability, ductility, metallic lustre. Accept "they have colour." Do NOT accept "hard."',
    keyConcepts: ['Transition metal properties', 'Periodic table'],
    keywords: ['variable oxidation state', 'coloured compounds', 'catalyst', 'metallic property', 'transition metals'],
    feedbackHit: 'Correct — variable oxidation state and forming coloured compounds are defining transition metal properties.',
    feedbackMiss: 'Transition metals are characterised by: (1) variable oxidation states (e.g. Co²⁺, Co³⁺); (2) forming coloured compounds; (3) acting as catalysts; (4) metallic properties (conductivity, malleability).',
  },
  q1_d: {
    marks: 3,
    exemplar: 'Protons = 27 (atomic number unchanged); Neutrons = 59 − 27 = 32; Electrons = 27 − 2 = 25 (Co²⁺ has lost 2 electrons). Award 1 mark per correct value.',
    keyConcepts: ['Atomic structure', 'Ions'],
    keywords: ['protons 27', 'neutrons 32', 'electrons 25', 'Co²⁺ ion', 'atomic number', 'mass number'],
    feedbackHit: 'Correct — protons = atomic number; neutrons = mass − protons; electrons = protons − charge.',
    feedbackMiss: 'For Co²⁺: protons = 27 (always = atomic number); neutrons = 59 − 27 = 32; electrons = 27 − 2 = 25 (ion has lost 2 electrons).',
  },
  q1_e: {
    type: 'mcq',
    correct: 0,
  },
  q1_f: {
    marks: 2,
    exemplar: 'CoO = cobalt oxide or cobalt(II) oxide. CoCO₃ = cobalt carbonate or cobalt(II) carbonate. Award 1 mark each. Roman numeral II must be correct if stated. ECF from part (e) if "cobalt monoxide" given.',
    keyConcepts: ['Compound nomenclature', 'Transition metal compounds'],
    keywords: ['cobalt oxide', 'cobalt(II) oxide', 'cobalt carbonate', 'cobalt(II) carbonate', 'nomenclature'],
    feedbackHit: 'Correct — CoO is cobalt(II) oxide; CoCO₃ is cobalt(II) carbonate.',
    feedbackMiss: 'Name the metal ion first, then the anion: CoO = cobalt(II) oxide; CoCO₃ = cobalt(II) carbonate. The (II) shows the cobalt has a +2 charge.',
  },

  // ─── Q2: Glass Recycling ─────────────────────────────────────────────────────
  q2_a: {
    marks: 3,
    exemplar: 'Plastic label: dissolves in organic solvent. Steel lid: magnetic. Glass jar: sinks in water. Award 1 mark per correct property.',
    keyConcepts: ['Separation techniques', 'Physical properties'],
    keywords: ['dissolves in organic solvent', 'magnetic', 'sinks in water', 'plastic', 'steel', 'glass'],
    feedbackHit: 'Correct — each material has a distinct physical property used to separate it.',
    feedbackMiss: 'Match each material to its separable property: Plastic → dissolves in organic solvent; Steel → magnetic; Glass → sinks in water.',
    blankAnswers: ['dissolves in organic solvent', 'magnetic', 'sinks in water'],
  },
  q2_b: {
    marks: 1,
    exemplar: 'Fe₂O₃. This is the only compound present in the Ancient Roman glass column but absent from other glass types.',
    keyConcepts: ['Data interpretation', 'Chemical formulae'],
    keywords: ['Fe₂O₃', 'iron oxide', 'ancient Roman glass', 'formula'],
    feedbackHit: 'Correct — Fe₂O₃ (iron(III) oxide) is present only in ancient Roman glass.',
    feedbackMiss: 'Scan the table for the compound that only appears in the Ancient Roman glass column. That compound is Fe₂O₃.',
  },
  q2_c: {
    marks: 3,
    exemplar: 'Fe = 56 AND O = 16 seen or implied (1 mark). Molar mass = 2(56) + 3(16) = 112 + 48 = 160 (1 mark). Unit: g mol⁻¹ or g (1 mark).',
    keyConcepts: ['Molar mass', 'Relative atomic masses'],
    keywords: ['Fe 56', 'O 16', '160 g mol⁻¹', 'molar mass', 'Fe₂O₃'],
    feedbackHit: 'Correct — Mr(Fe₂O₃) = 2×56 + 3×16 = 160 g mol⁻¹.',
    feedbackMiss: 'Molar mass = sum of all atomic masses. Fe₂O₃: 2 iron atoms (56 each) + 3 oxygen atoms (16 each) = 112 + 48 = 160 g mol⁻¹.',
  },
  q2_d: {
    marks: 3,
    exemplar: '0.5% of 100 g = 0.5 g of Fe₂O₃ (or n = m/M implied). n = 0.5/160 seen or implied (1 mark). n = 3.125 × 10⁻³ mol (1 mark). Final answer: 3.13 × 10⁻³ mol or 0.00313 mol to 3 significant figures (1 mark). Award 1 mark only if answer is 320 (from 0.5/160 × 1000 error).',
    keyConcepts: ['Moles calculation', 'n = m/M'],
    keywords: ['n = m/M', '0.5 g', '160 g/mol', '3.13 × 10⁻³', '3 significant figures'],
    feedbackHit: 'Correct — n = 0.5/160 = 3.13 × 10⁻³ mol (3 sig figs).',
    feedbackMiss: 'Step 1: Fe₂O₃ is 0.5% of 100 g → mass = 0.5 g. Step 2: n = m/M = 0.5/160 = 3.125 × 10⁻³ mol. To 3 sig figs = 3.13 × 10⁻³ mol.',
  },
  q2_e: {
    type: 'mcq',
    correct: 0,
  },
  q2_f: {
    marks: 2,
    exemplar: 'Silicon oxide is insoluble in water (1 mark). Justification: it has a giant covalent structure — the strong covalent bonds throughout the structure mean it will not dissolve in water. Accept reference to glass or sand not being soluble in water as evidence (1 mark).',
    keyConcepts: ['Giant covalent structure', 'Solubility'],
    keywords: ['insoluble', 'giant covalent', 'strong bonds', 'silicon oxide', 'SiO₂', 'not dissolve'],
    feedbackHit: 'Correct — SiO₂ is insoluble because its giant covalent network has too many strong bonds to be broken by water molecules.',
    feedbackMiss: 'Silicon oxide (SiO₂) is insoluble because it has a giant covalent structure — all atoms are connected by strong covalent bonds which water cannot break.',
  },
  q2_g: {
    marks: 3,
    exemplar: 'Award any 3 reasonable points, for example: saves / restores beaches (prevents coastal erosion); preserves biodiversity (beach/marine ecosystems protected); conserves raw materials (reduces need to mine sand/oil); reduces landfill waste; improves sustainability; reduces CO₂ from manufacturing new materials.',
    keyConcepts: ['Environmental sustainability', 'Recycling'],
    keywords: ['saves beaches', 'biodiversity', 'conserves raw materials', 'landfill', 'sustainability', 'recycling'],
    feedbackHit: 'Good — you identified environmental benefits of recycling over landfilling.',
    feedbackMiss: 'Think about what burying causes (landfill problems, habitat damage) and what recycling provides (new useful materials, conservation of resources).',
  },

  // ─── Q3: Fruit Juice pH ──────────────────────────────────────────────────────
  q3_a: {
    marks: 4,
    exemplar: 'IV: type of fruit (1 mark). DV: pH (accept "acidity") (1 mark). Control variables — 2 marks for any two of: mass of fruit used; time of mixing fruit; same volume of water added; same volume of mixture tested; same equipment used. Do not accept "amount."',
    keyConcepts: ['Variables', 'Criterion B'],
    keywords: ['IV type of fruit', 'DV pH', 'CV mass of fruit', 'CV volume of water', 'CV time mixing'],
    feedbackHit: 'Correct variables — IV: fruit type; DV: pH; CVs: mass of fruit, volume of water, mixing time.',
    feedbackMiss: 'IV = what you change (type of fruit); DV = what you measure (pH); CVs = what you keep the same (mass of fruit, volume of water added, mixing time, equipment).',
  },
  q3_b: {
    marks: 1,
    exemplar: 'Accept any clear research question linking type of fruit to pH or acidity, for example: "How does the type of fruit affect the pH of the fruit juice?" Accept "acidic" as a substitute for pH.',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['research question', 'type of fruit', 'pH', 'acidity'],
    feedbackHit: 'Correct — your research question identifies the IV (fruit type) and DV (pH).',
    feedbackMiss: 'The research question must link the IV to the DV: "How does the TYPE OF FRUIT affect the pH of the juice?"',
  },
  q3_c: {
    marks: 3,
    exemplar: 'Cranberry AND pH = 2.4 (1 mark). It has the lowest pH OR the highest acidity (1 mark). The higher the acidity in the stomach, the more severe the heartburn (1 mark — this third mark can be awarded for any juice if the student correctly links acidity to heartburn severity).',
    keyConcepts: ['Data analysis', 'pH and acidity'],
    keywords: ['cranberry', 'pH 2.4', 'lowest pH', 'highest acidity', 'most severe heartburn'],
    feedbackHit: 'Correct — cranberry (pH 2.4) has the lowest pH = highest acidity = most severe heartburn.',
    feedbackMiss: 'The lower the pH, the more acidic. Cranberry has pH 2.4 (lowest), meaning it is most acidic and would cause the most severe heartburn.',
  },
  q3_d: {
    marks: 5,
    exemplar: 'Award 1 mark each for: (1) bar chart selected (not line graph); (2) data for all five juices presented correctly; (3) title that links DV with IV (e.g. "pH of different fruit juices"); (4) x-axis labelled "type of fruit juice" with all 5 fruits named; (5) y-axis labelled "pH" with appropriate scale.',
    keyConcepts: ['Data presentation', 'Bar graph'],
    keywords: ['bar chart', 'title', 'x-axis type of fruit', 'y-axis pH', 'Apple 3.5', 'Cranberry 2.4'],
    feedbackHit: 'Well done — your graph has appropriate type, correct data, title, and labelled axes.',
    feedbackMiss: 'Bar chart checklist: bar chart (not line); title linking pH to fruit type; x-axis = type of fruit juice; y-axis = pH with scale; all 5 bars: Apple 3.5, Pear 3.8, Grape 2.8, Cranberry 2.4, Tomato 4.1.',
  },
  q3_e: {
    marks: 1,
    exemplar: 'Accept any reasonable extension, for example: test different varieties of the same fruit; change the length of time the fruit is blended; test different ripeness of fruit; investigate the effect of dilution on pH.',
    keyConcepts: ['Extension', 'Scientific investigation'],
    keywords: ['extension', 'varieties', 'ripeness', 'blending time', 'dilution'],
    feedbackHit: 'Good extension — you suggested a new variable to investigate using the same method.',
    feedbackMiss: 'An extension changes one new aspect of the investigation. Suggestions: different varieties of fruit, varying ripeness, different blending times.',
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
    exemplar: 'pH 3.2 → Red (acidic, below 4); pH 9.5 → Green (alkaline, above 8); pH 7.0 → Purple (neutral); pH 3.6 → Red (acidic, below 4). Award 1 mark per correct colour.',
    keyConcepts: ['Indicators', 'pH scale'],
    keywords: ['red acidic', 'green alkaline', 'purple neutral', 'cherry juice indicator', 'pH colour'],
    feedbackHit: 'Correct — you matched each pH to the right indicator colour using the cherry juice scale.',
    feedbackMiss: 'From the cherry juice scale: red = pH 1–3 (acidic); orange = pH 4–5; purple = pH 6–7 (neutral); green = pH 8–12 (alkaline). Apply this to each beaker.',
    blankAnswers: ['Red', 'Green', 'Purple', 'Red'],
  },
  q3_h: {
    marks: 1,
    exemplar: 'Accept either: the indicator gives a range of pH (not exact values); OR the colour change would not be visible in a coloured fruit juice.',
    keyConcepts: ['Indicator limitations', 'pH measurement'],
    keywords: ['range of pH', 'not exact', 'colour not visible', 'coloured juice', 'limitation'],
    feedbackHit: 'Correct — indicators only give a pH range, not an exact value.',
    feedbackMiss: 'Cherry juice (like all indicators) changes colour over a range of pH, not at a single value — so you cannot determine the exact pH.',
  },

  // ─── Q4: Capsaicin ───────────────────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Correct order from most to least spicy (based on bar chart): Habanero → Cayenne → Jalapeño → Red chilli. Award 1 mark for any two items in the correct position; 2 marks for all correct.',
    keyConcepts: ['Data analysis', 'Ordering from graph'],
    keywords: ['Habanero', 'Cayenne', 'Jalapeño', 'Red chilli', 'most spicy', 'capsaicin content'],
    feedbackHit: 'Correct order from most to least spicy based on the bar chart data.',
    feedbackMiss: 'Read the capsaicin content (mg dm⁻³) from the bar chart for each pepper and rank from highest to lowest. Habanero has the highest bar.',
    blankAnswers: ['Habanero pepper', 'Cayenne pepper', 'Jalapeño pepper', 'Red chilli pepper'],
  },
  q4_b: {
    marks: 2,
    exemplar: 'The data show that habanero peppers contain the most capsaicin (1 mark — must reference data). Therefore the prediction is not valid (1 mark — only award if the first mark is awarded).',
    keyConcepts: ['Data validity', 'Hypothesis evaluation'],
    keywords: ['habanero most capsaicin', 'prediction not valid', 'data show', 'red chilli incorrect'],
    feedbackHit: 'Correct — the habanero has the most capsaicin so Michelle\'s prediction (red chilli most spicy) is not valid.',
    feedbackMiss: 'Use the graph data: habanero has the highest capsaicin content. Michelle predicted red chilli would be most spicy, so her prediction is NOT valid.',
  },
  q4_c: {
    marks: 2,
    exemplar: 'Award 1 mark each for any two differences: (1) Compound 1 contains a C=C double bond (alkene group); Compound 2 does not. (2) Compound 1 has a longer (carbon) chain OR has one extra carbon atom compared to Compound 2.',
    keyConcepts: ['Molecular structure', 'Organic chemistry'],
    keywords: ['C=C double bond', 'alkene', 'longer carbon chain', 'extra carbon', 'structural difference'],
    feedbackHit: 'Correct — the C=C double bond and longer chain are the two structural differences.',
    feedbackMiss: 'Compare the two structures carefully: (1) Compound 1 has a C=C (double bond/alkene) that Compound 2 lacks; (2) Compound 1 has a longer carbon chain (one extra carbon).',
  },
  q4_d: {
    marks: 3,
    exemplar: 'Award 1 mark each: (1) If the temperature of the method is low OR the pepper is raw (condition); (2) then the spiciness will be the highest OR the spiciness will increase (prediction); (3) because the capsaicin will not melt/boil/evaporate/be destroyed at low temperatures (reason).',
    keyConcepts: ['Hypothesis', 'Criterion B'],
    keywords: ['raw', 'low temperature', 'highest spiciness', 'capsaicin not evaporate', 'not destroyed'],
    feedbackHit: 'Correct hypothesis — raw/low-temperature preparation retains capsaicin best.',
    feedbackMiss: 'A hypothesis needs: condition (raw/low temp), prediction (most spicy), reason (capsaicin not evaporated/destroyed at low temperatures; bp = 210°C so frying destroys it).',
  },

  // ─── Q5: Heartburn Remedy Design ─────────────────────────────────────────────
  q5_: {
    marks: 19,
    exemplar: 'Full Criterion B design rubric (0–19 marks). Key elements for each band: Variables (IV: type of heartburn remedy; DV: time for neutralisation; CVs: mass of remedy, volume of acid, concentration of acid); Additional equipment (stopwatch, balance, measuring cylinder 25 cm³, mortar and pestle for powders); Method (add a fixed mass of each remedy to 25 cm³ 0.1 mol dm⁻³ HCl; record time until neutralisation; repeat for all treatments; carry out repeats; plan to calculate means); Data (measure time to neutralise; compare times for all treatments; use means to decide which is fastest); Assumptions (all of the acid has reacted with carbonate); Safety (HCl is corrosive — wear goggles and gloves, avoid skin contact).',
    keyConcepts: ['Criterion B — Inquiry and Design', 'Neutralisation', 'Metal carbonates'],
    keywords: ['IV remedy type', 'DV neutralisation time', 'CV mass of remedy', 'CV volume of acid', 'stopwatch', 'balance', 'repeats', 'HCl corrosive', 'safety'],
    feedbackHit: 'Excellent design — all elements including variables, equipment, method, data use, assumptions, and safety are addressed.',
    feedbackMiss: 'A full Crit B design needs: IV/DV/CVs; equipment list; step-by-step method; how data will decide the best remedy; assumptions stated; safety precautions for HCl.',
  },

  // ─── Q6: Carbon Footprint ────────────────────────────────────────────────────
  q6_a: {
    marks: 4,
    exemplar: 'Step 1: Read mass of beef from bar chart ≈ 2.9 ± 0.2 kg (1 mark). Step 2: Calculate carbon footprint for potato — value in range 0.65–0.74 kgCO₂e (1 mark, ECF from Step 1). Step 3: Total carbon footprint for meat meal = 11.32 ± 0.04 kgCO₂e (1 mark, ECF). Step 4: Final value given to 2 significant figures (1 mark) = 11 kgCO₂e.',
    keyConcepts: ['Carbon footprint calculation', 'Significant figures'],
    keywords: ['2.9 kg beef', '11 kgCO₂e', 'carbon footprint', '2 significant figures', 'bar chart reading'],
    feedbackHit: 'Correct calculation — beef mass from graph (~2.9 kg) gives total CF ≈ 11 kgCO₂e to 2 sig figs.',
    feedbackMiss: 'Read beef mass from bar chart (~2.9 kg); calculate potato CF using emissions/kg; sum all components; give total to 2 sig figs ≈ 11 kgCO₂e.',
  },
  q6_b: {
    marks: 3,
    exemplar: 'Award 1 mark each: (1) State that energy values are similar for both meals (both ~3000 kJ). (2) Environmental impact is higher for meat-based than for vegetable-based. (3) Correct use of data: meat-based CF ≈ 11.32 kgCO₂e vs vegetable-based ≈ 1.91 kgCO₂e (using 11.32 for meat and ~1.91 for vegetable). Do not award the third mark if no data is given.',
    keyConcepts: ['Environmental impact', 'Carbon footprint comparison'],
    keywords: ['meat higher carbon footprint', '11.32 kgCO₂e', '1.91 kgCO₂e', 'similar energy', 'environmental impact'],
    feedbackHit: 'Correct — you identified that both meals have similar energy but meat has much higher carbon footprint, with supporting data.',
    feedbackMiss: 'Both meals provide ~3000 kJ but the meat-based meal has a much higher carbon footprint (~11 vs ~1.91 kgCO₂e). Always quote the data values when comparing.',
  },

  // ─── Q7: Methane ─────────────────────────────────────────────────────────────
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
    exemplar: 'Full Criterion D rubric (0–14 marks). Key content: Advantages of intensive cattle farming: produces food efficiently; low cost; provides employment for 1.3 billion; contributes 40% of global agricultural GDP. Disadvantages: methane emissions (14% of global harmful gases); land use; water use; animal welfare concerns. Economic impacts: cow methane capture could generate income; reduce energy costs; create new industries. Environmental advantages of CH₄ capture: reduces methane (potent greenhouse gas, 25× CO₂ effect) entering atmosphere; methane is clean-burning fuel producing only CO₂ + H₂O. Environmental disadvantages: CO₂ still produced on combustion; infrastructure needed. Ethical aspects: using animals as fuel sources raises welfare questions; interferes with natural processes; could improve or worsen animal conditions. Concluding appraisal: balanced evaluation with personal/societal conclusion about whether benefits outweigh costs. Higher bands: balanced account with at least one advantage AND disadvantage, economic AND environmental AND ethical points justified, concluding appraisal present.',
    keyConcepts: ['Criterion D', 'Methane capture', 'Environmental sustainability', 'Ethics'],
    keywords: ['intensive farming', 'methane greenhouse gas', 'CH₄ capture', 'economic impact', 'environmental impact', 'ethical aspects', 'appraisal', 'CO₂ emissions'],
    feedbackHit: 'Excellent Criterion D response — you covered all aspects (advantages, disadvantages, economic, environmental, ethical) with a clear concluding appraisal.',
    feedbackMiss: 'Structure your answer: (1) advantages AND disadvantages of intensive farming; (2) economic impacts; (3) environmental advantages AND disadvantages of CH₄ capture; (4) ethical aspects; (5) concluding appraisal. Include data from the stimulus.',
  },
}
