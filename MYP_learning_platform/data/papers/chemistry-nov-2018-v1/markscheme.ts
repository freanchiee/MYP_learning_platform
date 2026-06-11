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
  // ─── Q1: Nickel ──────────────────────────────────────────────────────────────
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
    exemplar: 'Award 1 mark each for any two of: variable oxidation state / variable oxidation number; forms coloured compounds (e.g. nickel(II) ions are green); any named metallic property such as electrical conductivity, thermal conductivity, malleability, ductility, metallic lustre. Accept "they have colour." Do NOT accept "hard."',
    keyConcepts: ['Transition metal properties', 'Periodic table'],
    keywords: ['variable oxidation state', 'coloured compounds', 'catalyst', 'metallic property', 'transition metals'],
    feedbackHit: 'Correct — variable oxidation state and forming coloured compounds are defining transition metal properties.',
    feedbackMiss: 'Transition metals are characterised by: (1) variable oxidation states (e.g. Ni²⁺, Ni³⁺); (2) forming coloured compounds (Ni²⁺ is green); (3) acting as catalysts; (4) metallic properties.',
  },
  q1_d: {
    marks: 3,
    exemplar: 'Protons = 28 (atomic number unchanged); Neutrons = 58 − 28 = 30; Electrons = 28 − 2 = 26 (Ni²⁺ has lost 2 electrons). Award 1 mark per correct value.',
    keyConcepts: ['Atomic structure', 'Ions'],
    keywords: ['protons 28', 'neutrons 30', 'electrons 26', 'Ni²⁺ ion', 'atomic number', 'mass number'],
    feedbackHit: 'Correct — protons = atomic number (28); neutrons = 58 − 28 = 30; electrons = 28 − 2 = 26.',
    feedbackMiss: 'For Ni²⁺: protons = 28 (always = atomic number); neutrons = 58 − 28 = 30; electrons = 28 − 2 = 26 (ion has lost 2 electrons).',
  },
  q1_e: {
    type: 'mcq',
    correct: 0,
  },
  q1_f: {
    marks: 2,
    exemplar: 'NiO = nickel oxide or nickel(II) oxide. NiCO₃ = nickel carbonate or nickel(II) carbonate. Award 1 mark each. Roman numeral II must be correct if stated.',
    keyConcepts: ['Compound nomenclature', 'Transition metal compounds'],
    keywords: ['nickel oxide', 'nickel(II) oxide', 'nickel carbonate', 'nickel(II) carbonate', 'nomenclature'],
    feedbackHit: 'Correct — NiO is nickel(II) oxide; NiCO₃ is nickel(II) carbonate.',
    feedbackMiss: 'Name the metal ion first, then the anion: NiO = nickel(II) oxide; NiCO₃ = nickel(II) carbonate. The (II) shows the nickel has a +2 charge.',
  },

  // ─── Q2: Glass Recycling — MgO ───────────────────────────────────────────────
  q2_a: {
    marks: 3,
    exemplar: 'Plastic label: dissolves in organic solvent. Steel lid: magnetic. Glass bottle: sinks in water. Award 1 mark per correct property.',
    keyConcepts: ['Separation techniques', 'Physical properties'],
    keywords: ['dissolves in organic solvent', 'magnetic', 'sinks in water', 'plastic', 'steel', 'glass'],
    feedbackHit: 'Correct — each material has a distinct physical property used to separate it.',
    feedbackMiss: 'Match each material: Plastic → dissolves in organic solvent; Steel → magnetic; Glass → sinks in water.',
    blankAnswers: ['dissolves in organic solvent', 'magnetic', 'sinks in water'],
  },
  q2_b: {
    marks: 1,
    exemplar: 'MgO. This is the only compound present in ancient Persian glass but absent from other glass types.',
    keyConcepts: ['Data interpretation', 'Chemical formulae'],
    keywords: ['MgO', 'magnesium oxide', 'ancient Persian glass', 'formula'],
    feedbackHit: 'Correct — MgO (magnesium oxide) is present only in ancient Persian glass.',
    feedbackMiss: 'Scan the table for the compound that only appears in the Ancient Persian glass column. That compound is MgO.',
  },
  q2_c: {
    marks: 3,
    exemplar: 'Mg = 24 AND O = 16 seen or implied (1 mark). Molar mass = 24 + 16 = 40 (1 mark). Unit: g mol⁻¹ or g (1 mark).',
    keyConcepts: ['Molar mass', 'Relative atomic masses'],
    keywords: ['Mg 24', 'O 16', '40 g mol⁻¹', 'molar mass', 'MgO'],
    feedbackHit: 'Correct — Mr(MgO) = 24 + 16 = 40 g mol⁻¹.',
    feedbackMiss: 'Molar mass = sum of all atomic masses. MgO: 1 magnesium atom (24) + 1 oxygen atom (16) = 40 g mol⁻¹.',
  },
  q2_d: {
    marks: 3,
    exemplar: '0.4% of 250 g = 1.0 g of MgO (1 mark). n = m/M = 1.0/40 (1 mark). n = 0.025 mol = 2.50 × 10⁻² mol to 3 significant figures (1 mark).',
    keyConcepts: ['Moles calculation', 'n = m/M'],
    keywords: ['n = m/M', '1.0 g', '40 g/mol', '2.50 × 10⁻²', '3 significant figures'],
    feedbackHit: 'Correct — n = 1.0/40 = 2.50 × 10⁻² mol (3 sig figs).',
    feedbackMiss: 'Step 1: MgO is 0.4% of 250 g → mass = 0.4/100 × 250 = 1.0 g. Step 2: n = m/M = 1.0/40 = 0.025 mol = 2.50 × 10⁻² mol (3 sig figs).',
  },
  q2_e: {
    type: 'mcq',
    correct: 0,
  },
  q2_f: {
    marks: 2,
    exemplar: 'Silicon oxide is insoluble in water (1 mark). Justification: it has a giant covalent structure — the strong covalent bonds throughout the structure mean it will not dissolve in water. Accept reference to glass or sand not being soluble in water (1 mark).',
    keyConcepts: ['Giant covalent structure', 'Solubility'],
    keywords: ['insoluble', 'giant covalent', 'strong bonds', 'silicon oxide', 'SiO₂', 'not dissolve'],
    feedbackHit: 'Correct — SiO₂ is insoluble because its giant covalent network has too many strong bonds to be broken by water molecules.',
    feedbackMiss: 'Silicon oxide (SiO₂) is insoluble because it has a giant covalent structure — all atoms are connected by strong covalent bonds which water cannot break.',
  },
  q2_g: {
    marks: 3,
    exemplar: 'Award any 3 reasonable points, for example: saves / restores beaches; preserves biodiversity (beach/marine ecosystems protected); conserves raw materials (reduces need to mine sand/oil); reduces landfill waste; improves sustainability; reduces CO₂ from manufacturing new materials.',
    keyConcepts: ['Environmental sustainability', 'Recycling'],
    keywords: ['saves beaches', 'biodiversity', 'conserves raw materials', 'landfill', 'sustainability', 'recycling'],
    feedbackHit: 'Good — you identified environmental benefits of recycling over landfilling.',
    feedbackMiss: 'Think about what burying causes (landfill, habitat damage) and what recycling provides (new useful materials, conservation of resources).',
  },

  // ─── Q3: Citrus Drinks pH ─────────────────────────────────────────────────────
  q3_a: {
    marks: 4,
    exemplar: 'IV: type of citrus drink (1 mark). DV: pH (accept "acidity") (1 mark). Control variables — 2 marks for any two of: volume of drink tested; temperature of drink; same equipment/probe used; time allowed before measurement. Do not accept "amount."',
    keyConcepts: ['Variables', 'Criterion B'],
    keywords: ['IV type of citrus drink', 'DV pH', 'CV volume of drink', 'CV temperature', 'CV probe'],
    feedbackHit: 'Correct variables — IV: drink type; DV: pH; CVs: volume of drink, temperature, probe calibration.',
    feedbackMiss: 'IV = what you change (type of citrus drink); DV = what you measure (pH); CVs = what you keep the same (volume of drink, temperature, probe calibration, equipment).',
  },
  q3_b: {
    marks: 1,
    exemplar: 'Accept any clear research question linking type of citrus drink to pH or acidity, for example: "How does the type of citrus drink affect the pH of the drink?" Accept "acidic" as a substitute for pH.',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['research question', 'type of citrus drink', 'pH', 'acidity'],
    feedbackHit: 'Correct — your research question identifies the IV (citrus drink type) and DV (pH).',
    feedbackMiss: 'The research question must link the IV to the DV: "How does the TYPE OF CITRUS DRINK affect the pH of the drink?"',
  },
  q3_c: {
    marks: 3,
    exemplar: 'Lime cordial AND pH = 2.3 (1 mark). It has the lowest pH OR the highest acidity (1 mark). The higher the acidity in the stomach, the more severe the heartburn (1 mark).',
    keyConcepts: ['Data analysis', 'pH and acidity'],
    keywords: ['lime cordial', 'pH 2.3', 'lowest pH', 'highest acidity', 'most severe heartburn'],
    feedbackHit: 'Correct — lime cordial (pH 2.3) has the lowest pH = highest acidity = most severe heartburn.',
    feedbackMiss: 'The lower the pH, the more acidic. Lime cordial has pH 2.3 (lowest), meaning it is most acidic and would cause the most severe heartburn.',
  },
  q3_d: {
    marks: 5,
    exemplar: 'Award 1 mark each for: (1) bar chart selected; (2) data for all five drinks presented correctly; (3) title linking DV to IV (e.g. "pH of different citrus drinks"); (4) x-axis labelled "type of citrus drink" with all 5 drinks named; (5) y-axis labelled "pH" with appropriate scale.',
    keyConcepts: ['Data presentation', 'Bar graph'],
    keywords: ['bar chart', 'title', 'x-axis drink type', 'y-axis pH', 'Lemon 2.8', 'Lime 2.3'],
    feedbackHit: 'Well done — your graph has appropriate type, correct data, title, and labelled axes.',
    feedbackMiss: 'Bar chart checklist: bar chart (not line); title linking pH to citrus drink type; x-axis = drink type; y-axis = pH; bars: Lemon soda 2.8, Orange 3.2, Grapefruit 3.0, Lime cordial 2.3, Pineapple 3.7.',
  },
  q3_e: {
    marks: 1,
    exemplar: 'Accept any reasonable extension, for example: test diluted vs undiluted versions; test the same drinks at different temperatures; investigate different brands of the same drink.',
    keyConcepts: ['Extension', 'Scientific investigation'],
    keywords: ['extension', 'dilution', 'temperature', 'concentration', 'different brands'],
    feedbackHit: 'Good extension — you suggested a new variable to investigate using the same method.',
    feedbackMiss: 'An extension changes one new aspect of the investigation. Suggestions: test diluted vs undiluted, temperature effects, different brands.',
  },
  q3_f: {
    marks: 2,
    exemplar: 'Award 1 mark each: (1) with more than one trial you are able to calculate the mean; (2) reduces experimental errors OR increases accuracy/reliability.',
    keyConcepts: ['Reliability', 'Validity'],
    keywords: ['calculate mean', 'reduce experimental error', 'accuracy', 'reliability', 'anomalous results'],
    feedbackHit: 'Correct — multiple trials allow calculation of a mean and reduce experimental errors.',
    feedbackMiss: 'Multiple trials: (1) allow you to calculate a mean, reducing random error; (2) identify anomalous results; (3) increase reliability.',
  },
  q3_g: {
    marks: 4,
    exemplar: 'pH 3.5 → Red (acidic, below 4); pH 8.5 → Green (alkaline, above 8); pH 5.0 → Orange (pH 4–5); pH 7.0 → Purple (neutral, pH 6–7). Award 1 mark per correct colour.',
    keyConcepts: ['Indicators', 'pH scale'],
    keywords: ['red acidic', 'green alkaline', 'orange', 'purple neutral', 'cherry juice indicator', 'pH colour'],
    feedbackHit: 'Correct — you matched each pH to the right indicator colour using the cherry juice scale.',
    feedbackMiss: 'From the cherry juice scale: red = pH 1–3; orange = pH 4–5; purple = pH 6–7; green = pH 8–12. Apply to: pH 3.5 → Red; pH 8.5 → Green; pH 5.0 → Orange; pH 7.0 → Purple.',
    blankAnswers: ['Red', 'Green', 'Orange', 'Purple'],
  },
  q3_h: {
    marks: 1,
    exemplar: 'Accept either: the indicator gives a range of pH (not exact values); OR the colour change would not be visible in a coloured citrus drink.',
    keyConcepts: ['Indicator limitations', 'pH measurement'],
    keywords: ['range of pH', 'not exact', 'colour not visible', 'coloured drink', 'limitation'],
    feedbackHit: 'Correct — indicators only give a pH range, not an exact value.',
    feedbackMiss: 'Cherry juice changes colour over a range of pH, not at a single value — so you cannot determine the exact pH. Also the indicator colour would not be visible in coloured citrus juices.',
  },

  // ─── Q4: Capsaicin — V1 ──────────────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Correct order from most to least spicy: Carolina Reaper → Ghost pepper → Jalapeño pepper → Bell pepper. Award 1 mark for any two items in the correct position; 2 marks for all correct.',
    keyConcepts: ['Data analysis', 'Ordering from graph'],
    keywords: ['Carolina Reaper', 'Ghost pepper', 'Jalapeño', 'Bell pepper', 'most spicy', 'capsaicin content'],
    feedbackHit: 'Correct order from most to least spicy based on the bar chart data.',
    feedbackMiss: 'Read the capsaicin content from the bar chart for each pepper and rank from highest to lowest. Carolina Reaper has the highest bar; Bell pepper has zero capsaicin.',
    blankAnswers: ['Carolina Reaper', 'Ghost pepper', 'Jalapeño pepper', 'Bell pepper'],
  },
  q4_b: {
    marks: 2,
    exemplar: 'The data show that the Carolina Reaper contains the most capsaicin (1 mark — must reference data). Therefore the prediction is not valid (1 mark — only award if the first mark is awarded).',
    keyConcepts: ['Data validity', 'Hypothesis evaluation'],
    keywords: ['Carolina Reaper most capsaicin', 'prediction not valid', 'data show', 'Ghost pepper second'],
    feedbackHit: 'Correct — the Carolina Reaper has the most capsaicin so Michelle\'s prediction (Ghost pepper) is not valid.',
    feedbackMiss: 'Use the graph data: Carolina Reaper has the highest capsaicin content. Michelle predicted Ghost pepper, so her prediction is NOT valid.',
  },
  q4_c: {
    marks: 2,
    exemplar: 'Award 1 mark each for any two differences: (1) Compound 1 contains a C=C double bond (alkene group); Compound 2 does not. (2) Compound 1 has a longer (carbon) chain OR has one extra carbon atom compared to Compound 2.',
    keyConcepts: ['Molecular structure', 'Organic chemistry'],
    keywords: ['C=C double bond', 'alkene', 'longer carbon chain', 'extra carbon', 'structural difference'],
    feedbackHit: 'Correct — the C=C double bond and longer chain are the two structural differences.',
    feedbackMiss: 'Compare the two structures: (1) Compound 1 has a C=C (double bond/alkene) that Compound 2 lacks; (2) Compound 1 has a longer carbon chain.',
  },
  q4_d: {
    marks: 3,
    exemplar: 'Award 1 mark each: (1) If the pepper is raw OR preparation temperature is low (condition); (2) then the food will be most spicy (prediction); (3) because the capsaicin will not evaporate / be destroyed at low temperature — boiling point is 210 °C so frying destroys it (reason).',
    keyConcepts: ['Hypothesis', 'Criterion B'],
    keywords: ['raw', 'low temperature', 'highest spiciness', 'capsaicin not evaporate', 'bp 210°C'],
    feedbackHit: 'Correct hypothesis — raw preparation retains the most capsaicin.',
    feedbackMiss: 'Hypothesis: condition (raw/steamed at 100°C < bp of 210°C), prediction (most spicy), reason (capsaicin not evaporated as temperature below boiling point of 210°C).',
  },

  // ─── Q5: Heartburn Remedy Design ─────────────────────────────────────────────
  q5_: {
    marks: 19,
    exemplar: 'Full Criterion B design rubric (0–19 marks). Key elements: Variables (IV: type of heartburn remedy — Rennie, charcoal, kaolin, baking soda; DV: time for neutralisation OR pH change; CVs: mass of remedy, volume and concentration of HCl); Additional equipment (stopwatch, balance, pH probe or indicator, measuring cylinder, mortar and pestle for tablets); Method (add a fixed mass of each remedy to 25 cm³ 0.1 mol dm⁻³ HCl; start stopwatch; record time until neutralisation using indicator or pH probe; repeat for all four remedies; carry out at least 3 repeats each); Data (measure time to neutralise; compare means; shortest time = fastest remedy); Assumptions (all of the acid reacts); Safety (HCl is corrosive — wear goggles and gloves, avoid skin contact with acid).',
    keyConcepts: ['Criterion B — Inquiry and Design', 'Neutralisation', 'Metal carbonates'],
    keywords: ['IV remedy type', 'DV neutralisation time', 'CV mass of remedy', 'CV volume HCl', 'stopwatch', 'balance', 'repeats', 'HCl corrosive', 'safety'],
    feedbackHit: 'Excellent design — all elements including variables, equipment, method, data use, assumptions, and safety are addressed.',
    feedbackMiss: 'A full Crit B design needs: IV/DV/CVs; equipment list; step-by-step method; how data will decide the best remedy; assumptions stated; safety precautions for HCl.',
  },

  // ─── Q6: Carbon Footprint — Pork ─────────────────────────────────────────────
  q6_a: {
    marks: 4,
    exemplar: 'Step 1: Read mass of pork from bar chart ≈ 0.8 ± 0.1 kg (1 mark). Step 2: Calculate carbon footprint for pork = 0.8 × 7.6 = 6.08 kgCO₂e (1 mark, ECF from Step 1). Step 3: Total = 6.08 + 0.87 + 0.07 = 7.02 kgCO₂e (1 mark, ECF). Step 4: To 2 significant figures = 7.0 kgCO₂e (1 mark).',
    keyConcepts: ['Carbon footprint calculation', 'Significant figures'],
    keywords: ['0.8 kg pork', '7.0 kgCO₂e', 'carbon footprint', '2 significant figures', 'bar chart reading'],
    feedbackHit: 'Correct — pork mass from chart (~0.8 kg) gives total CF ≈ 7.0 kgCO₂e to 2 sig figs.',
    feedbackMiss: 'Read pork mass from bar chart (~0.8 kg); CF pork = 0.8 × 7.6 = 6.08; add potato (0.87) and broccoli (0.07); total = 7.02 → 7.0 kgCO₂e (2 sig figs).',
  },
  q6_b: {
    marks: 3,
    exemplar: 'Award 1 mark each: (1) State that energy values are similar for both meals (both ~3000 kJ). (2) Environmental impact is higher for pork-based than for vegetable-based. (3) Correct use of data: pork meal CF ≈ 7.0 kgCO₂e vs vegetable-based ≈ 1.9 kgCO₂e (ECF accepted).',
    keyConcepts: ['Environmental impact', 'Carbon footprint comparison'],
    keywords: ['pork higher carbon footprint', '7.0 kgCO₂e', '1.9 kgCO₂e', 'similar energy', 'environmental impact'],
    feedbackHit: 'Correct — both meals provide ~3000 kJ but pork has ~3.7× higher carbon footprint with supporting data.',
    feedbackMiss: 'Both meals provide ~3000 kJ but pork-based meal has higher carbon footprint (~7.0 vs ~1.9 kgCO₂e). Always quote the data values when comparing.',
  },

  // ─── Q7: Ethane + Landfill Biogas ────────────────────────────────────────────
  q7_a: {
    marks: 2,
    exemplar: '2C₂H₆(g) + 7O₂(g) → 4CO₂(g) + 6H₂O(g). Reactants correct: coefficient 2 before C₂H₆ and coefficient 7 before O₂ (1 mark). Products correct: coefficient 4 before CO₂ and coefficient 6 before H₂O (1 mark).',
    keyConcepts: ['Balancing equations', 'Combustion of ethane'],
    keywords: ['2C₂H₆', '7O₂', '4CO₂', '6H₂O', 'balanced equation', 'combustion', 'ethane'],
    feedbackHit: 'Correct — 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O is the balanced combustion equation for ethane.',
    feedbackMiss: 'Balance atoms: 2C₂H₆ has 4C and 12H → need 4CO₂ and 6H₂O on right (4C and 12H). Count O: 4+6=10O on right → need 10O on left = 5O₂... Recheck: 2C₂H₆ gives 4C, 12H → 4CO₂ (8O) + 6H₂O (6O) = 14O total → 7O₂ on left. So: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.',
  },
  q7_b: {
    marks: 14,
    exemplar: 'Full Criterion D rubric (0–14 marks). Key content: Advantages of capturing landfill biogas: reduces methane emissions (potent greenhouse gas, ~25× warming effect of CO₂); generates usable energy (heat/electricity); reduces smell and safety hazards at landfill sites; creates a revenue stream. Disadvantages: infrastructure cost (collection pipes, combustion equipment); not all biogas may be captured (leakage); requires organic waste input (dependent on waste production). Economic impacts: cost savings from energy recovery; creates new jobs; reduces dependence on fossil fuel imports; initial capital investment needed. Environmental advantages: prevents methane from entering atmosphere (methane is 25× more potent than CO₂); produces CO₂ + H₂O on combustion which is preferable to raw methane release; extends useful life of landfill site. Environmental disadvantages: CO₂ still produced on combustion (still adds to greenhouse gas); potential for biogas leaks during collection; landfill sites can still contaminate groundwater. Ethical aspects: using waste as a resource is ethically positive; concerns about encouraging more landfilling; equity issues (landfill sites often near disadvantaged communities). Concluding appraisal: balanced evaluation with personal/societal conclusion about whether capturing landfill biogas is beneficial overall.',
    keyConcepts: ['Criterion D', 'Landfill biogas', 'Environmental sustainability', 'Ethics'],
    keywords: ['landfill', 'biogas', 'methane greenhouse gas', 'economic impact', 'environmental impact', 'ethical aspects', 'appraisal', 'CO₂ emissions'],
    feedbackHit: 'Excellent Criterion D response — you covered all aspects (advantages, disadvantages, economic, environmental, ethical) with a clear concluding appraisal.',
    feedbackMiss: 'Structure: (1) advantages AND disadvantages of landfill biogas; (2) economic impacts; (3) environmental advantages AND disadvantages; (4) ethical aspects; (5) concluding appraisal. Use data from the stimulus.',
  },
}
