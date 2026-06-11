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
  // ─── Q1: Manganese ───────────────────────────────────────────────────────────
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
    exemplar: 'Award 1 mark each for any two of: variable oxidation state / variable oxidation number; forms coloured compounds (e.g. Mn²⁺ ions are pale pink; MnO₄⁻ is purple); any named metallic property such as electrical conductivity, thermal conductivity, malleability, ductility, metallic lustre. Accept "they have colour." Do NOT accept "hard."',
    keyConcepts: ['Transition metal properties', 'Periodic table'],
    keywords: ['variable oxidation state', 'coloured compounds', 'catalyst', 'metallic property', 'transition metals'],
    feedbackHit: 'Correct — variable oxidation state and forming coloured compounds are defining transition metal properties.',
    feedbackMiss: 'Transition metals are characterised by: (1) variable oxidation states (Mn can be +2 to +7); (2) forming coloured compounds (MnO₄⁻ is purple); (3) acting as catalysts; (4) metallic properties.',
  },
  q1_d: {
    marks: 3,
    exemplar: 'Protons = 25 (atomic number unchanged); Neutrons = 55 − 25 = 30; Electrons = 25 − 2 = 23 (Mn²⁺ has lost 2 electrons). Award 1 mark per correct value.',
    keyConcepts: ['Atomic structure', 'Ions'],
    keywords: ['protons 25', 'neutrons 30', 'electrons 23', 'Mn²⁺ ion', 'atomic number', 'mass number'],
    feedbackHit: 'Correct — protons = atomic number (25); neutrons = 55 − 25 = 30; electrons = 25 − 2 = 23.',
    feedbackMiss: 'For Mn²⁺: protons = 25 (always = atomic number); neutrons = 55 − 25 = 30; electrons = 25 − 2 = 23 (ion has lost 2 electrons).',
  },
  q1_e: {
    type: 'mcq',
    correct: 0,
  },
  q1_f: {
    marks: 2,
    exemplar: 'MnO = manganese oxide or manganese(II) oxide. MnCO₃ = manganese carbonate or manganese(II) carbonate. Award 1 mark each. Roman numeral II must be correct if stated.',
    keyConcepts: ['Compound nomenclature', 'Transition metal compounds'],
    keywords: ['manganese oxide', 'manganese(II) oxide', 'manganese carbonate', 'manganese(II) carbonate', 'nomenclature'],
    feedbackHit: 'Correct — MnO is manganese(II) oxide; MnCO₃ is manganese(II) carbonate.',
    feedbackMiss: 'Name the metal ion first, then the anion: MnO = manganese(II) oxide; MnCO₃ = manganese(II) carbonate. The (II) shows the manganese has a +2 charge.',
  },

  // ─── Q2: Glass Recycling — TiO₂ ─────────────────────────────────────────────
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
    exemplar: 'TiO₂. This is the only compound present in ancient Byzantine mosaic glass but absent from other glass types.',
    keyConcepts: ['Data interpretation', 'Chemical formulae'],
    keywords: ['TiO₂', 'titanium dioxide', 'ancient Byzantine glass', 'formula'],
    feedbackHit: 'Correct — TiO₂ (titanium dioxide) is present only in ancient Byzantine mosaic glass.',
    feedbackMiss: 'Scan the table for the compound that only appears in the ancient Byzantine mosaic glass column. That compound is TiO₂.',
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
    exemplar: '0.6% of 500 g = 3.0 g of TiO₂ (1 mark). n = m/M = 3.0/80 (1 mark). n = 0.0375 mol = 3.75 × 10⁻² mol to 3 significant figures (1 mark).',
    keyConcepts: ['Moles calculation', 'n = m/M'],
    keywords: ['n = m/M', '3.0 g', '80 g/mol', '3.75 × 10⁻²', '3 significant figures'],
    feedbackHit: 'Correct — n = 3.0/80 = 3.75 × 10⁻² mol (3 sig figs).',
    feedbackMiss: 'Step 1: TiO₂ is 0.6% of 500 g → mass = 0.6/100 × 500 = 3.0 g. Step 2: n = m/M = 3.0/80 = 0.0375 mol = 3.75 × 10⁻² mol (3 sig figs).',
  },
  q2_e: {
    type: 'mcq',
    correct: 0,
  },
  q2_f: {
    marks: 2,
    exemplar: 'Silicon oxide is insoluble in water (1 mark). Justification: it has a giant covalent structure — the strong covalent bonds throughout the structure mean it will not dissolve in water (1 mark).',
    keyConcepts: ['Giant covalent structure', 'Solubility'],
    keywords: ['insoluble', 'giant covalent', 'strong bonds', 'silicon oxide', 'SiO₂', 'not dissolve'],
    feedbackHit: 'Correct — SiO₂ is insoluble because its giant covalent network cannot be broken by water.',
    feedbackMiss: 'Silicon oxide (SiO₂) is insoluble because it has a giant covalent structure — all atoms are connected by strong covalent bonds which water cannot break.',
  },
  q2_g: {
    marks: 3,
    exemplar: 'Award any 3 reasonable points: saves/restores beaches; preserves biodiversity; conserves raw materials; reduces landfill waste; improves sustainability; reduces CO₂ from manufacturing new materials.',
    keyConcepts: ['Environmental sustainability', 'Recycling'],
    keywords: ['saves beaches', 'biodiversity', 'conserves raw materials', 'landfill', 'sustainability', 'recycling'],
    feedbackHit: 'Good — you identified environmental benefits of recycling over landfilling.',
    feedbackMiss: 'Think about what burying causes (landfill, habitat damage) and what recycling provides (new useful materials, conservation of resources).',
  },

  // ─── Q3: Carbonated Drinks pH ─────────────────────────────────────────────────
  q3_a: {
    marks: 4,
    exemplar: 'IV: type of carbonated drink (1 mark). DV: pH (accept "acidity") (1 mark). Control variables — 2 marks for any two of: volume of drink tested; temperature of drink; same equipment/probe used; same brand used; time allowed before measurement.',
    keyConcepts: ['Variables', 'Criterion B'],
    keywords: ['IV type of carbonated drink', 'DV pH', 'CV volume', 'CV temperature', 'CV probe'],
    feedbackHit: 'Correct variables — IV: drink type; DV: pH; CVs: volume, temperature, probe calibration.',
    feedbackMiss: 'IV = what you change (type of carbonated drink); DV = what you measure (pH); CVs = what you keep the same (volume, temperature, probe calibration, equipment).',
  },
  q3_b: {
    marks: 1,
    exemplar: 'Accept any clear research question linking type of carbonated drink to pH or acidity, for example: "How does the type of carbonated drink affect the pH of the drink?"',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['research question', 'type of carbonated drink', 'pH', 'acidity'],
    feedbackHit: 'Correct — your research question identifies the IV (carbonated drink type) and DV (pH).',
    feedbackMiss: 'The research question must link the IV to the DV: "How does the TYPE OF CARBONATED DRINK affect the pH?"',
  },
  q3_c: {
    marks: 3,
    exemplar: 'Cola AND pH = 2.5 (1 mark). It has the lowest pH OR the highest acidity (1 mark). The higher the acidity in the stomach, the more severe the heartburn (1 mark).',
    keyConcepts: ['Data analysis', 'pH and acidity'],
    keywords: ['cola', 'pH 2.5', 'lowest pH', 'highest acidity', 'most severe heartburn'],
    feedbackHit: 'Correct — cola (pH 2.5) has the lowest pH = highest acidity = most severe heartburn.',
    feedbackMiss: 'The lower the pH, the more acidic. Cola has pH 2.5 (lowest), meaning it is most acidic and would cause the most severe heartburn.',
  },
  q3_d: {
    marks: 5,
    exemplar: 'Award 1 mark each: (1) bar chart; (2) all five drinks presented correctly; (3) title (e.g. "pH of different carbonated drinks"); (4) x-axis labelled with all 5 drinks; (5) y-axis = pH with appropriate scale.',
    keyConcepts: ['Data presentation', 'Bar graph'],
    keywords: ['bar chart', 'title', 'x-axis drink type', 'y-axis pH', 'Cola 2.5', 'Sparkling water 4.2'],
    feedbackHit: 'Well done — your graph has appropriate type, correct data, title, and labelled axes.',
    feedbackMiss: 'Bar chart checklist: bar chart (not line); title; x-axis = drink type; y-axis = pH; bars: Cola 2.5, Lemon-lime 2.7, Ginger beer 2.9, Tonic 3.0, Sparkling 4.2.',
  },
  q3_e: {
    marks: 1,
    exemplar: 'Accept any reasonable extension: flat vs carbonated versions; different temperatures; same drink at different ages/storage times; effect of adding ice.',
    keyConcepts: ['Extension', 'Scientific investigation'],
    keywords: ['extension', 'flat vs carbonated', 'temperature', 'storage', 'different brands'],
    feedbackHit: 'Good extension — you suggested a new variable to investigate.',
    feedbackMiss: 'An extension changes one new aspect. Suggestions: test flat vs carbonated versions, temperature effect, different storage times.',
  },
  q3_f: {
    marks: 2,
    exemplar: 'Award 1 mark each: (1) with more than one trial you can calculate the mean; (2) reduces experimental errors OR increases accuracy/reliability.',
    keyConcepts: ['Reliability', 'Validity'],
    keywords: ['calculate mean', 'reduce experimental error', 'accuracy', 'reliability'],
    feedbackHit: 'Correct — multiple trials allow calculation of a mean and reduce experimental errors.',
    feedbackMiss: 'Multiple trials: (1) allow calculation of a mean; (2) identify anomalous results; (3) increase reliability.',
  },
  q3_g: {
    marks: 4,
    exemplar: 'pH 2.8 → Red (acidic, below 4); pH 9.0 → Green (alkaline, above 8); pH 6.0 → Purple (neutral range, pH 6–7); pH 4.5 → Orange (pH 4–5). Award 1 mark per correct colour.',
    keyConcepts: ['Indicators', 'pH scale'],
    keywords: ['red acidic', 'green alkaline', 'purple neutral', 'orange', 'cherry juice indicator', 'pH colour'],
    feedbackHit: 'Correct — you matched each pH to the right cherry juice indicator colour.',
    feedbackMiss: 'From the cherry juice scale: red = pH 1–3; orange = pH 4–5; purple = pH 6–7; green = pH 8–12. Apply to: pH 2.8 → Red; pH 9.0 → Green; pH 6.0 → Purple; pH 4.5 → Orange.',
    blankAnswers: ['Red', 'Green', 'Purple', 'Orange'],
  },
  q3_h: {
    marks: 1,
    exemplar: 'Accept either: the indicator gives a range of pH (not exact values); OR the colour change would not be visible in a dark carbonated drink.',
    keyConcepts: ['Indicator limitations', 'pH measurement'],
    keywords: ['range of pH', 'not exact', 'colour not visible', 'dark drink', 'limitation'],
    feedbackHit: 'Correct — indicators only give a pH range, not an exact value.',
    feedbackMiss: 'Cherry juice changes colour over a pH range, not at a single value — so you cannot determine the exact pH. Also colour may not be visible in dark drinks.',
  },

  // ─── Q4: Capsaicin — V2 ──────────────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Correct order from most to least spicy: Trinidad Moruga Scorpion → Habanero pepper → Cayenne pepper → Pasilla pepper. Award 1 mark for any two items in the correct position; 2 marks for all correct.',
    keyConcepts: ['Data analysis', 'Ordering from graph'],
    keywords: ['Trinidad Moruga Scorpion', 'Habanero', 'Cayenne', 'Pasilla', 'most spicy', 'capsaicin content'],
    feedbackHit: 'Correct order from most to least spicy.',
    feedbackMiss: 'Read the capsaicin content from the bar chart for each pepper and rank from highest to lowest. Trinidad Moruga Scorpion has the highest bar; Pasilla has the lowest.',
    blankAnswers: ['Trinidad Moruga Scorpion', 'Habanero pepper', 'Cayenne pepper', 'Pasilla pepper'],
  },
  q4_b: {
    marks: 2,
    exemplar: 'The data show that the Trinidad Moruga Scorpion contains the most capsaicin (1 mark — must reference data). Therefore the prediction is not valid (1 mark).',
    keyConcepts: ['Data validity', 'Hypothesis evaluation'],
    keywords: ['Trinidad Moruga Scorpion most capsaicin', 'prediction not valid', 'data show', 'Cayenne third'],
    feedbackHit: 'Correct — the Scorpion has the most capsaicin so Michelle\'s prediction (Cayenne) is not valid.',
    feedbackMiss: 'Use the graph: Trinidad Moruga Scorpion has the highest capsaicin. Michelle predicted Cayenne, so her prediction is NOT valid.',
  },
  q4_c: {
    marks: 2,
    exemplar: 'Award 1 mark each: (1) Compound 1 contains a C=C double bond (alkene group); Compound 2 does not. (2) Compound 1 has a longer (carbon) chain OR has one extra carbon atom.',
    keyConcepts: ['Molecular structure', 'Organic chemistry'],
    keywords: ['C=C double bond', 'alkene', 'longer carbon chain', 'extra carbon', 'structural difference'],
    feedbackHit: 'Correct — the C=C double bond and longer chain are the two structural differences.',
    feedbackMiss: 'Compare the structures: (1) Compound 1 has a C=C double bond not present in Compound 2; (2) Compound 1 has a longer carbon chain.',
  },
  q4_d: {
    marks: 3,
    exemplar: 'Award 1 mark each: (1) If the Habanero is used raw OR simmered at 90 °C (low temperature condition); (2) then the food will be most spicy (prediction); (3) because the capsaicin will not evaporate / be destroyed — boiling point is 210 °C so stir-frying destroys it (reason).',
    keyConcepts: ['Hypothesis', 'Criterion B'],
    keywords: ['raw', 'simmered 90°C', 'highest spiciness', 'capsaicin not evaporate', 'bp 210°C'],
    feedbackHit: 'Correct hypothesis — raw or low-temperature preparation retains the most capsaicin.',
    feedbackMiss: 'Hypothesis: condition (raw/simmered at 90°C < bp of 210°C), prediction (most spicy), reason (capsaicin not evaporated as temperature below bp of 210°C; stir-frying exceeds bp so destroys capsaicin).',
  },

  // ─── Q5: Heartburn Remedy Design ─────────────────────────────────────────────
  q5_: {
    marks: 19,
    exemplar: 'Full Criterion B design rubric (0–19 marks). Key elements: Variables (IV: type of heartburn remedy — milk of magnesia, calcium carbonate tablets, Alka-Seltzer, dolomite; DV: time for neutralisation OR pH change; CVs: mass of remedy, volume and concentration of HCl); Additional equipment (stopwatch, balance, pH probe or indicator, measuring cylinder, mortar and pestle for tablets); Method (add a fixed mass of each remedy to 25 cm³ 0.1 mol dm⁻³ HCl; start stopwatch; record time until neutralisation; repeat for all four remedies; carry out at least 3 repeats each); Data (measure time to neutralise; compare means; shortest time = fastest remedy); Assumptions (all acid reacts with remedy); Safety (HCl corrosive — goggles and gloves required; some remedies may fizz/splatter).',
    keyConcepts: ['Criterion B — Inquiry and Design', 'Neutralisation', 'Antacid investigation'],
    keywords: ['IV remedy type', 'DV neutralisation time', 'CV mass of remedy', 'CV volume HCl', 'stopwatch', 'balance', 'repeats', 'HCl corrosive', 'safety'],
    feedbackHit: 'Excellent design — all elements including variables, equipment, method, data use, assumptions, and safety are addressed.',
    feedbackMiss: 'A full Crit B design needs: IV/DV/CVs; equipment list; step-by-step method; how data will decide the best remedy; assumptions stated; safety precautions for HCl and fizzing reactions.',
  },

  // ─── Q6: Carbon Footprint — Chicken ──────────────────────────────────────────
  q6_a: {
    marks: 4,
    exemplar: 'Step 1: Read mass of chicken from bar chart ≈ 0.6 ± 0.1 kg (1 mark). Step 2: CF chicken = 0.6 × 6.9 = 4.14 kgCO₂e (1 mark, ECF). Step 3: Total = 4.14 + 0.54 + 0.22 = 4.90 kgCO₂e (1 mark, ECF). Step 4: To 2 significant figures = 4.9 kgCO₂e (1 mark).',
    keyConcepts: ['Carbon footprint calculation', 'Significant figures'],
    keywords: ['0.6 kg chicken', '4.9 kgCO₂e', 'carbon footprint', '2 significant figures', 'bar chart reading'],
    feedbackHit: 'Correct — chicken mass from chart (~0.6 kg) gives total CF ≈ 4.9 kgCO₂e to 2 sig figs.',
    feedbackMiss: 'Read chicken mass from bar chart (~0.6 kg); CF chicken = 0.6 × 6.9 = 4.14; add rice (0.54) and tomato (0.22); total = 4.90 → 4.9 kgCO₂e (2 sig figs).',
  },
  q6_b: {
    marks: 3,
    exemplar: 'Award 1 mark each: (1) Energy values are similar for both meals (~3000 kJ). (2) Environmental impact is higher for chicken-based than vegetable-based. (3) Correct data: chicken CF ≈ 4.9 kgCO₂e vs vegetable-based ≈ 1.9 kgCO₂e (ECF accepted).',
    keyConcepts: ['Environmental impact', 'Carbon footprint comparison'],
    keywords: ['chicken higher carbon footprint', '4.9 kgCO₂e', '1.9 kgCO₂e', 'similar energy', 'environmental impact'],
    feedbackHit: 'Correct — both meals provide ~3000 kJ but chicken has ~2.6× higher carbon footprint, with supporting data.',
    feedbackMiss: 'Both meals ~3000 kJ but chicken-based meal has higher CF (~4.9 vs ~1.9 kgCO₂e). Always quote data values when comparing.',
  },

  // ─── Q7: Ethanol + Biomass ────────────────────────────────────────────────────
  q7_a: {
    marks: 2,
    exemplar: 'C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(g). Reactants correct: coefficient 1 (implied) before C₂H₅OH and coefficient 3 before O₂ (1 mark). Products correct: coefficient 2 before CO₂ and coefficient 3 before H₂O (1 mark).',
    keyConcepts: ['Balancing equations', 'Combustion of ethanol'],
    keywords: ['C₂H₅OH', '3O₂', '2CO₂', '3H₂O', 'balanced equation', 'combustion', 'ethanol'],
    feedbackHit: 'Correct — C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O is the balanced combustion equation for ethanol.',
    feedbackMiss: 'Count atoms in C₂H₅OH: 2C, 6H, 1O. Products need 2CO₂ (4O) + 3H₂O (3O) = 7O total. O from ethanol = 1, so O₂ provides 6O → 3O₂. Balanced: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.',
  },
  q7_b: {
    marks: 14,
    exemplar: 'Full Criterion D rubric (0–14 marks). Key content: Advantages of burning biomass for heating: renewable energy source (crops regrow); potentially carbon neutral (CO₂ released = CO₂ absorbed during growth); reduces dependence on fossil fuels; uses agricultural waste. Disadvantages of intensive biomass farming: requires large areas of land; may compete with food production; monoculture reduces biodiversity; transportation of biomass adds to emissions. Economic impacts: can reduce household energy bills; creates agricultural jobs; initial stove/boiler installation costs; costs of growing and harvesting biomass. Environmental advantages: reduces net CO₂ (if managed sustainably); less SO₂ than coal; reduces waste from agriculture. Environmental disadvantages: burning produces particulates (air pollution); if forests cleared = net CO₂ increase; water use for crops; soil erosion. Ethical aspects: using farmland for energy rather than food raises food security questions; air quality impacts on nearby communities; ethical responsibility to current and future generations. Concluding appraisal: balanced evaluation with personal/societal conclusion.',
    keyConcepts: ['Criterion D', 'Biomass energy', 'Environmental sustainability', 'Ethics'],
    keywords: ['biomass', 'wood pellets', 'carbon neutral', 'land use', 'economic impact', 'environmental impact', 'ethical aspects', 'appraisal', 'food security'],
    feedbackHit: 'Excellent Criterion D response covering all aspects with a clear appraisal.',
    feedbackMiss: 'Structure: (1) advantages AND disadvantages of intensive biomass farming; (2) economic impacts; (3) environmental advantages AND disadvantages; (4) ethical aspects (food vs fuel, air quality); (5) concluding appraisal.',
  },
}
