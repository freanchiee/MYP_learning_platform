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
  // ── Q1 — Combustion & flower chromatography ───────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: '2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O. Reactants correct (2, 13) [1]; Products correct (8, 10) [1].',
    keyConcepts: ['Balancing equations', 'Combustion'],
    keywords: ['2C₄H₁₀', '13O₂', '8CO₂', '10H₂O', 'balanced'],
    feedbackHit: 'Correct coefficients 2,13,8,10 — 2 marks.',
    feedbackMiss: 'Butane combustion: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O. Count H: 2×10=20H left; right side 10×2=20H ✓. Count C: 2×4=8 left; 8CO₂ ✓. Count O: 13×2=26 left; 8×2 + 10 = 26 ✓.',
    blankAnswers: ['2', '13', '8', '10'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'Ester / ester group (–COO–). Do NOT accept hydroxyl or carboxylic acid.',
    keyConcepts: ['Functional groups', 'Esters', 'Organic chemistry'],
    keywords: ['ester', 'ester group', '–COO–', 'organic functional group'],
    feedbackHit: 'Ester / ester group correctly identified — 1 mark.',
    feedbackMiss: 'The –COO– linkage between two carbon chains = ester group. Isoamyl acetate is an ester (banana aroma).',
  },

  q1_c: { type: 'mcq', correct: 1 } as MCQEntry,

  q1_d: { type: 'mcq', correct: 2 } as MCQEntry,

  q1_e: {
    marks: 2,
    exemplar: 'Band 1 = Anthocyanin C (top; highest Rf) [correct]; Band 2 = Flavonoid B; Band 3 = Chlorophyll A (lowest, near petal stain). One correct [1]; all three correct [2].',
    keyConcepts: ['Chromatography', 'Rf values', 'Pigment separation'],
    keywords: ['Band 1 Anthocyanin C', 'Band 2 Flavonoid B', 'Band 3 Chlorophyll A', 'Rf'],
    feedbackHit: 'All three pigments correctly assigned — 2 marks.',
    feedbackMiss: 'The pigment closest to solvent front = highest Rf = Band 1. Pigment nearest application point = lowest Rf = Band 3.',
  },

  q1_f: {
    marks: 3,
    exemplar: 'Solvent front distance from application point = 9.6 cm [1]; Band 1 distance from application point = 8.6 cm [1]; Rf = 8.6/9.6 = 0.90 (±0.01) [1].',
    keyConcepts: ['Rf calculation', 'Chromatography'],
    keywords: ['Rf = 0.90', '9.6 cm', '8.6 cm', 'solvent front', 'distance band'],
    feedbackHit: 'Both distances and Rf = 0.90 — 3 marks.',
    feedbackMiss: 'Rf = (distance band travels from application) ÷ (distance solvent front travels from application). Both measured from the petal stain/application point.',
  },

  // ── Q2 — Baking soda, vinegar, pH ────────────────────────────────────────
  q2_a: { type: 'mcq', correct: 0 } as MCQEntry,

  q2_b: {
    marks: 2,
    exemplar: 'Decrease the pH / increase the acidity [1]; by adding vinegar / acetic acid / any dilute acid [1].',
    keyConcepts: ['pH', 'Acids', 'Neutralisation'],
    keywords: ['decrease pH', 'add acid', 'vinegar', 'acetic acid'],
    feedbackHit: 'Decrease pH by adding acid — 2 marks.',
    feedbackMiss: 'Baking soda solution pH=9 is basic. To reach pH 7 (neutral), lower the pH by adding an acid (e.g. vinegar).',
  },

  q2_c: {
    marks: 2,
    exemplar: 'M(Na₂CO₃) = (2×23) + 12 + (3×16) = 46 + 12 + 48 = 106 g mol⁻¹ [2 marks for correct answer].',
    keyConcepts: ['Molar mass', 'Periodic table', 'Sodium carbonate'],
    keywords: ['106 g/mol', 'M(Na₂CO₃)', '2Na + C + 3O'],
    feedbackHit: '106 g/mol — 2 marks.',
    feedbackMiss: 'M(Na)=23, M(C)=12, M(O)=16. Na₂CO₃ = 2(23)+12+3(16) = 46+12+48 = 106 g mol⁻¹.',
  },

  q2_d: {
    marks: 2,
    exemplar: 'Product A and B: H₂O and CO₂ (accept in either order) [2 marks for both correct].',
    keyConcepts: ['Neutralisation', 'Metal carbonate reactions'],
    keywords: ['H₂O', 'CO₂', 'water', 'carbon dioxide'],
    feedbackHit: 'H₂O and CO₂ both selected — 2 marks.',
    feedbackMiss: 'Acid + metal carbonate → salt + H₂O + CO₂. The two by-products are always water and carbon dioxide.',
  },

  q2_e: {
    marks: 1,
    exemplar: 'NaCl (sodium chloride; correct subscripts required).',
    keyConcepts: ['Salt formation', 'Ionic formula'],
    keywords: ['NaCl', 'sodium chloride'],
    feedbackHit: 'NaCl with correct formula — 1 mark.',
    feedbackMiss: 'HCl provides Cl⁻; NaHCO₃ provides Na⁺ → salt = NaCl.',
  },

  q2_f: {
    marks: 1,
    exemplar: 'pH = 7.',
    keyConcepts: ['pH of salts', 'Neutral solution'],
    keywords: ['pH 7', 'neutral', 'NaCl'],
    feedbackHit: 'pH 7 — 1 mark.',
    feedbackMiss: 'NaCl = salt from strong acid (HCl) + strong base (NaHCO₃ acts as a base here) → neutral salt, pH=7.',
  },

  // ── Q3 — Haber process, gas particles ────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'N₂ + 3H₂ → 2NH₃. Reactants correct: N₂ + 3H₂ [1]; Products correct: 2NH₃ [1].',
    keyConcepts: ['Balancing equations', 'Haber process', 'Ammonia'],
    keywords: ['N₂', '3H₂', '2NH₃', 'balanced'],
    feedbackHit: 'N₂ + 3H₂ → 2NH₃ — 2 marks.',
    feedbackMiss: 'Each N₂ gives 2N; each 2NH₃ has 2N ✓. Need 3H₂ (=6H) for 2NH₃ (=6H) ✓.',
  },

  q3_b: {
    marks: 1,
    exemplar: 'Two or more particles randomly placed and NOT touching each other.',
    keyConcepts: ['Particle model', 'Gas state'],
    keywords: ['randomly placed', 'not touching', 'widely spaced'],
    feedbackHit: 'Particles randomly placed, not touching — 1 mark.',
    feedbackMiss: 'Gas = particles widely spread, random arrangement, NOT touching.',
  },

  q3_c: {
    marks: 2,
    exemplar: 'Random motion [1]; High kinetic energy (accept high speed) [1].',
    keyConcepts: ['Kinetic theory', 'Gas particles'],
    keywords: ['random motion', 'high kinetic energy', 'high speed'],
    feedbackHit: 'Random motion AND high kinetic energy — 2 marks.',
    feedbackMiss: 'Gas particles move randomly at high speed (high kinetic energy).',
  },

  q3_d: {
    marks: 4,
    exemplar: 'Ammonia is a gas [1]; gas particles spread/move/travel out [1]; from an area of high concentration to an area of low concentration [1]; a correct use of the word "diffusion" [1].',
    keyConcepts: ['Diffusion', 'Concentration gradient'],
    keywords: ['diffusion', 'high to low concentration', 'gas spreads', 'concentration gradient'],
    feedbackHit: 'Gas + spreads + high to low concentration + diffusion — 4 marks.',
    feedbackMiss: 'Key: (1) NH₃ is a gas; (2) particles spread out; (3) from high to low concentration; (4) = diffusion.',
  },

  // ── Q4 — Milk protein denaturation ───────────────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'Turbidimeter; because it gives quantitative data OR more accurate/precise data OR removes human error / subjective judgement.',
    keyConcepts: ['Measurement accuracy', 'Quantitative data'],
    keywords: ['turbidimeter', 'quantitative', 'accurate', 'no human error'],
    feedbackHit: 'Turbidimeter + valid reason — 1 mark.',
    feedbackMiss: 'Visual observation is qualitative and subjective. Turbidimeter gives a precise numeric reading.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'If: the concentration of casein is increased [1]; Then: the milk will denature at a lower/higher temperature OR turbidity will change more rapidly [1]; Because: higher concentration of protein changes the thermal stability / more protein–protein interactions [1].',
    keyConcepts: ['Hypothesis', 'Protein denaturation', 'Criterion B'],
    keywords: ['if casein concentration increased', 'then denaturation temperature changes', 'because protein stability'],
    feedbackHit: 'If–Then–Because correctly linking casein concentration to denaturation — 3 marks.',
    feedbackMiss: 'Format: IF [casein concentration increases] THEN [denaturation temperature changes] BECAUSE [protein stability/interactions change].',
  },

  q4_c: {
    marks: 1,
    exemplar: 'Accept any single value in the range 70–78 °C.',
    keyConcepts: ['Denaturation', 'Proteins', 'Temperature'],
    keywords: ['70°C', '78°C', 'whey denaturation temperature'],
    feedbackHit: 'Any value 70–78°C — 1 mark.',
    feedbackMiss: 'Read the temperature shown at the point where the whey protein fraction becomes solid/denatured from the experimental diagram.',
  },

  q4_d: { type: 'mcq', correct: 0 } as MCQEntry,

  q4_e: {
    marks: 3,
    exemplar: 'Accept any single value in the range 70–78 [1]; °C [1]; because that was the maximum temperature at which the individual components denatured / whey denatures first [1].',
    keyConcepts: ['Prediction', 'Denaturation', 'Protein structure'],
    keywords: ['70-78°C', 'whey denatures first', 'lower denaturation temperature'],
    feedbackHit: 'Temperature 70–78°C + unit °C + because individual component (whey) denatures first — 3 marks.',
    feedbackMiss: 'The mixture will denature at the temperature of its most heat-sensitive component. Whey denatures at 70–78°C (lower than casein at 82°C). Must include unit °C and justification.',
  },

  // ── Q5 — Kombucha fermentation ────────────────────────────────────────────
  q5_a: {
    marks: 4,
    exemplar: 'IV: type of tea [1]; DV: pH of kombucha OR acidity score [1]; CV1 + CV2: any two from: volume of tea, mass of SCOBY, amount of sugar, temperature, fermentation time [2].',
    keyConcepts: ['Variables', 'IV/DV/CV', 'Criterion B'],
    keywords: ['type of tea', 'pH kombucha', 'acidity score', 'volume', 'temperature', 'fermentation time'],
    feedbackHit: 'IV, DV, and two valid CVs — 4 marks.',
    feedbackMiss: 'IV = what you change (type of tea); DV = what you measure (pH or acidity score); CVs = volume of tea, mass of SCOBY, temperature, time.',
  },

  q5_b: {
    marks: 2,
    exemplar: 'How does the type of tea affect the final pH of the kombucha / acidity of the fermented drink? (ECF from Q5a — must use IV from 5a.)',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['type of tea', 'pH', 'acidity', 'research question'],
    feedbackHit: 'RQ uses IV from 5a and links to DV — 2 marks.',
    feedbackMiss: 'RQ format: "How does [type of tea] affect [pH / acidity score of kombucha]?"',
  },

  q5_c: {
    marks: 1,
    exemplar: 'The pH decreases / the drink becomes more acidic (bacteria produce organic acids during fermentation).',
    keyConcepts: ['Fermentation', 'pH changes', 'Acids'],
    keywords: ['pH decreases', 'more acidic', 'organic acids produced'],
    feedbackHit: 'pH decreases — 1 mark.',
    feedbackMiss: 'During fermentation, bacteria convert sugars into organic acids (acetic acid, lactic acid) → pH falls below 7.',
  },

  q5_d: {
    marks: 1,
    exemplar: 'Use a new / calibrated pH meter OR use universal indicator paper as a backup measurement.',
    keyConcepts: ['Validity', 'Experimental improvement'],
    keywords: ['new pH meter', 'calibrated', 'universal indicator', 'backup'],
    feedbackHit: 'One valid improvement — 1 mark.',
    feedbackMiss: 'The problem = pH probe failure → solution = replace the probe or use an alternative method (universal indicator).',
  },

  // ── Q6 — Vitamin C in strawberry products ────────────────────────────────
  q6_a: {
    marks: 5,
    exemplar: 'Title: correctly linking vitamin C concentration with product type [1]; x-axis: product type AND y-axis: vitamin C concentration [1]; y-axis scale: evenly spaced increments starting at zero [1]; y-axis unit: mg 100g⁻¹ [1]; Plotting: all five values plotted correctly [1]. Must be a bar chart.',
    keyConcepts: ['Bar chart', 'Data presentation'],
    keywords: ['bar chart', 'title', 'product type', 'mg 100g⁻¹', 'scale from 0'],
    feedbackHit: 'Title + labelled axes + correct scale + units + all 5 bars — 5 marks.',
    feedbackMiss: 'Bar chart (not scatter/line). Title links vitamin C to product type. y-axis: mg 100g⁻¹, scale starts at 0. Plot all 5 values: fresh=59, frozen=48, jam=12, yogurt=21, freeze-dried=53.',
  },

  q6_b: {
    marks: 3,
    exemplar: 'Heat-treated / pasteurised juice [1]; vitamin C is broken down at high temperatures (75°C) [1]; reference to oxidised or denatured [1].',
    keyConcepts: ['Vitamin C stability', 'Heat treatment', 'Oxidation'],
    keywords: ['heat-treated', 'pasteurised', 'broken down at high temperature', 'oxidised', 'denatured'],
    feedbackHit: 'Heat-treated + broken down at high temperature + oxidised/denatured — 3 marks.',
    feedbackMiss: 'Pasteurisation (75°C) destroys vitamin C: it is oxidised/denatured at high temperature → lowest starting concentration.',
  },

  q6_c: {
    marks: 2,
    exemplar: 'Change in vitamin C: 320−298 = 22 mg 100g⁻¹ (±5) [1]; Rate = 22/21 = 1.05 mg 100g⁻¹ day⁻¹ (accept 0.85–1.25) [1].',
    keyConcepts: ['Rate of change', 'Data analysis'],
    keywords: ['22 mg 100g⁻¹', '1.05 mg 100g⁻¹ day⁻¹', 'rate = change/time'],
    feedbackHit: 'Δ concentration ≈ 22 and rate ≈ 1.05 — 2 marks.',
    feedbackMiss: 'Rate = (change in concentration) ÷ (time). Read N₂-atmosphere line: change ≈ 22 mg 100g⁻¹ over 21 days → rate = 22/21 ≈ 1.05.',
  },

  q6_d: {
    marks: 4,
    exemplar: 'The vitamin C will not be oxidised as much OR not oxidised as quickly [1]; because the juice/pulp inside a whole strawberry is not exposed to oxygen / lower exposure to oxygen [1]; due to the protective outer layer/skin of the strawberry [1]; therefore the hypothesis is invalid [1].',
    keyConcepts: ['Hypothesis evaluation', 'Vitamin C oxidation', 'Protective skin'],
    keywords: ['not oxidised as much', 'not exposed to O₂', 'protective skin', 'invalid'],
    feedbackHit: 'Not oxidised + not exposed to O₂ + protective skin + therefore invalid — 4 marks.',
    feedbackMiss: 'The whole strawberry skin protects the pulp from oxygen → vitamin C is NOT oxidised at the same rate → hypothesis is invalid.',
  },

  // ── Q7 — Packaging film degradation design ───────────────────────────────
  q7_: {
    marks: 16,
    exemplar: `Criterion B Investigation Design — 16 marks rubric:

**Variables (1–4 marks):**
| Mark | Descriptor |
|---|---|
| 1 | Method linked to IV or DV only |
| 2 | Method linked to IV and DV but incomplete |
| 3 | Method linked to IV and DV, can be followed, gives results |
| 4 | Method linked to IV and DV, followed and includes details on how to control main CVs |

IV = type of packaging film (polyethylene, cornstarch, cassava, seaweed). DV = mass loss / % degradation. CVs: mass of soil, depth of burial, soil moisture/temperature, time.

**Method (1–4 marks):** same scale. Method must be linked to IV and DV, can be followed to give results, and should include details on controlling CVs.

**Sufficient data (1–4 marks):**
| Mark | Descriptor |
|---|---|
| 1 | Any reference to different film types |
| 2 | At least four film types OR at least three trials |
| 3 | At least four film types and at least three trials |
| 4 | At least four film types, at least three trials, and an average |`,
    keyConcepts: ['Criterion B', 'Investigation design', 'Biodegradation'],
    keywords: ['IV type of film', 'DV mass loss', 'CVs', 'equipment', 'method', '4 film types', '3 trials', 'mean'],
    feedbackHit: 'All four dimensions: variables, equipment, method with repeats, sufficient data — up to 16 marks.',
    feedbackMiss: 'Must include: IV (type of film), DV (mass loss), two CVs, equipment list, step-by-step method, 4 film types + control, 3 repeats, mean mass loss.',
  },

  // ── Q8 — River salinity / fish aquaculture ────────────────────────────────
  q8_a: {
    marks: 2,
    exemplar: 'Na⁺(aq) and Cl⁻(aq) are charged particles [1]; ions are mobile when dissolved in water / ions can conduct electricity [1].',
    keyConcepts: ['Electrical conductivity', 'Ions', 'Dissolved salts'],
    keywords: ['Na⁺', 'Cl⁻', 'charged particles', 'ions mobile', 'conduct electricity'],
    feedbackHit: 'Charged ions + mobile in water = conducts electricity — 2 marks.',
    feedbackMiss: 'Dissolved NaCl → Na⁺ + Cl⁻ ions. Ions are charged and free to move → conduct electricity.',
  },

  q8_b: {
    marks: 2,
    exemplar: 'Mediterranean Sea [1]; highest electrical conductivity (52.4 mS cm⁻¹) OR highest dissolved salt concentration (38 000 mg L⁻¹) [1].',
    keyConcepts: ['Salinity', 'Data interpretation'],
    keywords: ['Mediterranean Sea', 'highest conductivity', '52.4 mS cm⁻¹', 'highest dissolved salt'],
    feedbackHit: 'Mediterranean Sea + highest conductivity — 2 marks.',
    feedbackMiss: 'Compare: Amazon=0.18, Nile=0.52, Baltic=8.3, Mediterranean=52.4 mS cm⁻¹. Mediterranean is highest.',
  },

  q8_c: {
    marks: 1,
    exemplar: '0.8 ±0.15 mmol dm⁻³ (unit not required).',
    keyConcepts: ['Graph reading', 'Optimum conditions'],
    keywords: ['0.8 mmol dm⁻³', 'optimum', 'maximum yield', 'tilapia'],
    feedbackHit: '0.8 ±0.15 mmol dm⁻³ — 1 mark.',
    feedbackMiss: 'Find the tilapia curve. Read the salt concentration at the peak (maximum yield point).',
  },

  q8_d: {
    marks: 3,
    exemplar: 'A correct statement about species A AND species B [1]; correct data for species A (e.g. drops sharply above 0.5 mmol dm⁻³) [1]; correct data for species B (e.g. drops more gradually; peak at higher concentration ~1.2 mmol dm⁻³) [1].',
    keyConcepts: ['Graph analysis', 'Comparison', 'Salinity tolerance'],
    keywords: ['species A sharp decrease', 'species B more tolerant', '0.5 mmol dm⁻³', '1.2 mmol dm⁻³'],
    feedbackHit: 'Comparison + data for A and B — 3 marks.',
    feedbackMiss: 'Read both curves: Species A drops sharply at ~0.5; Species B decreases more slowly, peak at higher concentration. Use specific numbers.',
  },

  // ── Q9 — Atmospheric water generation ────────────────────────────────────
  q9_a: {
    marks: 3,
    exemplar: 'Sub-Saharan Africa OR coastal North Africa OR coastal Chile/Peru [1]; high frequency of coastal fog OR arid/semi-arid climate [1]; very limited access to surface freshwater OR large rural population without clean water [1].',
    keyConcepts: ['Atmospheric water generation', 'Water scarcity', 'Regional data'],
    keywords: ['Sub-Saharan Africa', 'coastal fog', 'arid', 'freshwater scarcity'],
    feedbackHit: 'Region + fog/aridity reason + population/water need — 3 marks.',
    feedbackMiss: 'Identify the region shown in pie/map data. Justification: high fog frequency AND limited surface freshwater AND large population needing water.',
  },

  q9_b: {
    marks: 14,
    exemplar: `Criterion D Discuss and Evaluate — 14 marks rubric:

**Comparison of efficiencies (1–4 marks):**
| 1 | 2 | 3 | 4 |
|---|---|---|---|
| Efficiency of one system stated | Two systems stated | All three compared | All three compared with scientific justification |
Fog-net: passive, no energy input, limited yield (depends on fog density); Condensation: high energy demand, reliable yield regardless of fog; Desiccant: moderate energy, stores water in material.

**Economic impacts (1–4 marks):**
Fog-net: very cheap to build/maintain; Condensation: expensive (energy + refrigeration); Desiccant: moderate.

**Environmental impacts (1–4 marks):**
Fog-net: minimal environmental impact; Condensation: CO₂ emissions from electricity; Desiccant: chemical regeneration energy.

**Appraisal (1–2 marks):**
Fog-net best for remote/low-income communities in high-fog areas; Condensation best where electricity is cheap and fog unreliable.`,
    keyConcepts: ['Criterion D', 'AWG', 'Efficiency', 'Economic impacts', 'Environmental impacts'],
    keywords: ['fog-net', 'condensation', 'desiccant', 'efficiency', 'CO₂', 'economic', 'environmental', 'appraisal'],
    feedbackHit: 'All four dimensions: efficiency + economics + environment + appraisal — up to 14 marks.',
    feedbackMiss: 'Must address: (1) efficiency comparison of all 3 systems; (2) economic impacts; (3) environmental impacts; (4) final appraisal with evidence.',
  },
}
