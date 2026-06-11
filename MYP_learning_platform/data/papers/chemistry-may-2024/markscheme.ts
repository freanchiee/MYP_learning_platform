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
  // ── Q1 — Photosynthesis, chromatography ──────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: '6H₂O + 6CO₂ → C₆H₁₂O₆ + 6O₂. Reactants correct (6,6) [1]; Products correct (1,6) [1]. Do NOT accept ? in front of glucose.',
    keyConcepts: ['Balancing equations', 'Photosynthesis'],
    keywords: ['6H₂O', '6CO₂', 'C₆H₁₂O₆', '6O₂', 'balanced'],
    feedbackHit: 'Correct coefficients 6,6,1,6 — 2 marks.',
    feedbackMiss: 'Photosynthesis: 6H₂O + 6CO₂ → C₆H₁₂O₆ + 6O₂. Balance reactants first (6,6), then products (1,6).',
    blankAnswers: ['6', '6', '1', '6'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'Alcohol / hydroxyl (accept hydroxyl; do NOT accept hydroxide).',
    keyConcepts: ['Functional groups', 'Organic chemistry', 'Alcohols'],
    keywords: ['alcohol', 'hydroxyl', '-OH group'],
    feedbackHit: 'Alcohol / hydroxyl correctly identified — 1 mark.',
    feedbackMiss: 'The –OH group attached to a carbon chain = alcohol / hydroxyl group.',
  },

  q1_c: { type: 'mcq', correct: 2 } as MCQEntry,

  q1_d: { type: 'mcq', correct: 1 } as MCQEntry,

  q1_e: {
    marks: 2,
    exemplar: 'Band 1 = Pigment C [top band; highest Rf]; Band 2 = Pigment B; Band 3 = Pigment A [lowest band near leaf stain]. One correct [1]; all three correct [2].',
    keyConcepts: ['Chromatography', 'Rf values', 'Pigment separation'],
    keywords: ['Band 1 Pigment C', 'Band 2 Pigment B', 'Band 3 Pigment A', 'Rf'],
    feedbackHit: 'All three pigments correctly assigned to bands — 2 marks.',
    feedbackMiss: 'Pigment closest to solvent front = highest Rf = travels furthest = Band 1. Pigment nearest leaf stain = lowest Rf = Band 3.',
  },

  q1_f: {
    marks: 3,
    exemplar: 'Measurement of solvent front from application point = 10.0 [1]; Measurement of band 1 from application point = 9.8 [1]; Rf = 9.8/10.0 = 0.98 (±0.01) [1].',
    keyConcepts: ['Rf value calculation', 'Chromatography'],
    keywords: ['Rf = distance band / distance solvent', '0.98', '10.0', '9.8'],
    feedbackHit: 'Both distances measured correctly and Rf = 0.98 — 3 marks.',
    feedbackMiss: 'Rf = (distance band travels from application) ÷ (distance solvent front travels from application). Measure both from the leaf stain/application point.',
  },

  // ── Q2 — Hydrangea, pH, CaCO₃ ────────────────────────────────────────────
  q2_a: { type: 'mcq', correct: 2 } as MCQEntry,

  q2_b: {
    marks: 2,
    exemplar: 'Increase the acidity of the soil OR decrease the pH [1]; by adding sulfuric acid / H₂SO₄ (accept any acid) [1]. Award second mark only if first is awarded.',
    keyConcepts: ['pH', 'Acids', 'Soil chemistry'],
    keywords: ['decrease pH', 'add acid', 'sulfuric acid', 'increase acidity'],
    feedbackHit: 'Decrease pH by adding acid — 2 marks.',
    feedbackMiss: 'Blue flowers need pH ≤5.5. Current pH=6 → too high → lower it by adding an acid (e.g. H₂SO₄).',
  },

  q2_c: {
    marks: 2,
    exemplar: 'M(CaCO₃) = 100 g mol⁻¹ (accept g/mol) [2].',
    keyConcepts: ['Molar mass', 'Periodic table', 'Calcium carbonate'],
    keywords: ['100 g/mol', 'M(CaCO₃)', 'Ca+C+3O'],
    feedbackHit: '100 g/mol — 2 marks.',
    feedbackMiss: 'M(Ca)=40, M(C)=12, M(O)=16. CaCO₃ = 40+12+(3×16) = 40+12+48 = 100 g mol⁻¹.',
  },

  q2_d: {
    marks: 2,
    exemplar: 'Product A and B: H₂O and CO₂ (accept in either order) [2 marks for both correct].',
    keyConcepts: ['Neutralisation', 'Metal carbonate reactions', 'Products'],
    keywords: ['H₂O', 'CO₂', 'water', 'carbon dioxide', 'neutralisation'],
    feedbackHit: 'H₂O and CO₂ both selected — 2 marks.',
    feedbackMiss: 'Acid + metal carbonate → salt + H₂O + CO₂. The two products besides the salt are always water and carbon dioxide.',
  },

  q2_e: {
    marks: 1,
    exemplar: 'CaSO₄ (correct subscripts required).',
    keyConcepts: ['Salt formation', 'Ionic formulae'],
    keywords: ['CaSO₄', 'calcium sulfate'],
    feedbackHit: 'CaSO₄ with correct subscripts — 1 mark.',
    feedbackMiss: 'H₂SO₄ provides SO₄²⁻ ion; CaCO₃ provides Ca²⁺ ion → salt = CaSO₄.',
  },

  q2_f: {
    marks: 1,
    exemplar: 'pH = 7.',
    keyConcepts: ['Neutral salts', 'pH of salt solutions'],
    keywords: ['pH 7', 'neutral', 'CaSO₄'],
    feedbackHit: 'pH 7 — 1 mark.',
    feedbackMiss: 'CaSO₄ is formed from a strong acid (H₂SO₄) and a carbonate salt → the resulting salt is neutral, pH=7.',
  },

  // ── Q3 — Tractor emissions / gas particles ────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'N₂ + O₂ → 2NO. Reactants correct: N₂ + O₂ [1]; Products correct: 2NO [1].',
    keyConcepts: ['Balancing equations', 'Nitrogen monoxide formation'],
    keywords: ['N₂', 'O₂', '2NO', 'balanced'],
    feedbackHit: 'N₂ + O₂ → 2NO — 2 marks.',
    feedbackMiss: 'Each N₂ has 2N and each O₂ has 2O. Products: 2NO to balance both N and O.',
  },

  q3_b: {
    marks: 1,
    exemplar: 'Two or more particles randomly placed and NOT touching each other.',
    keyConcepts: ['Particle model', 'Gas state'],
    keywords: ['randomly placed', 'not touching', 'widely spaced', 'gas particles'],
    feedbackHit: 'Particles randomly placed, not touching — 1 mark.',
    feedbackMiss: 'Gas = particles widely spread, random arrangement, NOT touching (unlike liquids and solids).',
  },

  q3_c: {
    marks: 2,
    exemplar: 'Random motion [1]; High kinetic energy (accept high speed) [1].',
    keyConcepts: ['Kinetic theory', 'Gas particles', 'Motion'],
    keywords: ['random motion', 'high kinetic energy', 'high speed', 'all directions'],
    feedbackHit: 'Random motion AND high kinetic energy — 2 marks.',
    feedbackMiss: 'Gas particles move in random directions at high speed (high kinetic energy).',
  },

  q3_d: {
    marks: 4,
    exemplar: 'Nitrogen monoxide or the emission is a gas or a gas is produced [1]; Gas particles spread OR move OR travel out [1]; From an area of high concentration to an area of low concentration [1]; A correct use of the word "diffusion" [1]. (Movement can be implied; accept WTTE.)',
    keyConcepts: ['Diffusion', 'Concentration gradient', 'Gas behaviour'],
    keywords: ['diffusion', 'high concentration to low', 'gas spreads', 'concentration gradient'],
    feedbackHit: 'Gas produced + spreads + from high to low concentration + diffusion — 4 marks.',
    feedbackMiss: 'Key points: (1) NO is a gas; (2) gas particles spread out; (3) from high to low concentration; (4) call this process diffusion.',
  },

  // ── Q4 — Egg yolk / denaturation ─────────────────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'Colorimeter; because it gives quantitative data OR more accurate/precise data OR removes human error. (ORA = colorimeter is better — must give reason.)',
    keyConcepts: ['Measurement accuracy', 'Quantitative data'],
    keywords: ['colorimeter', 'quantitative', 'accurate', 'precise', 'no human error'],
    feedbackHit: 'Colorimeter + valid reason (quantitative/removes human error) — 1 mark.',
    feedbackMiss: 'YolkFan is qualitative and subjective (human eye). Colorimeter gives a precise numeric value.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'If: the concentration of red pigment OR yellow pigment is increased [1]; Then: the yolk colour will become darker/deeper/more orange/closer to 16 on the YolkFan scale [1]; Because: the pigment changes the colour of the yolk [1]. (Accept response in any box or in a single box.)',
    keyConcepts: ['Hypothesis', 'Criterion B', 'Pigments'],
    keywords: ['if concentration increased', 'then colour darker', 'because pigment changes colour'],
    feedbackHit: 'If–Then–Because correctly linking pigment concentration to yolk colour — 3 marks.',
    feedbackMiss: 'Format: IF [pigment concentration increases] THEN [colour becomes darker/more orange] BECAUSE [pigment changes colour].',
  },

  q4_c: {
    marks: 1,
    exemplar: 'Accept any single value in the range 62–70 °C.',
    keyConcepts: ['Denaturation', 'Proteins', 'Temperature measurement'],
    keywords: ['62°C', '70°C', 'denaturation temperature', 'egg white'],
    feedbackHit: 'Any value 62–70 °C — 1 mark.',
    feedbackMiss: 'Read the temperature shown at the point where the egg white becomes solid from the experimental diagram.',
  },

  q4_d: { type: 'mcq', correct: 1 } as MCQEntry,

  q4_e: {
    marks: 3,
    exemplar: 'Accept any single value in the range 62–70 [1]; °C [1]; Because that was the maximum temperature that the individual components of the egg denatured [1].',
    keyConcepts: ['Prediction', 'Denaturation', 'Protein structure'],
    keywords: ['62-70°C', 'maximum temperature', 'individual components denatured'],
    feedbackHit: 'Temperature in range 62–70°C + unit + because individual components denatured at that maximum — 3 marks.',
    feedbackMiss: 'The yolk denatures at 76°C and the white at ~62–70°C. The mixture will denature at the lower of the two temperatures (white sets first). Must include unit °C and justification.',
  },

  // ── Q5 — Pickling eggs ────────────────────────────────────────────────────
  q5_a: {
    marks: 4,
    exemplar: 'IV: type of vinegar [1]; DV: pH of egg white OR tenderness of the egg OR taste score [1]; CV1 + CV2: any two from: volume of solution, temperature, size of egg, initial concentration of solution, % of salt, time, type of egg [2]. Do not accept amount for IV.',
    keyConcepts: ['Variables', 'IV/DV/CV', 'Criterion B'],
    keywords: ['type of vinegar', 'pH egg white', 'tenderness', 'volume', 'temperature'],
    feedbackHit: 'IV, DV, and two valid CVs — 4 marks.',
    feedbackMiss: 'IV = what you change (type of vinegar); DV = what you measure (pH of egg white or tenderness); CVs = volume, temperature, size of egg, time.',
  },

  q5_b: {
    marks: 2,
    exemplar: 'How does the type of vinegar affect [the final pH of the egg whites / the tenderness of the egg]? (ECF from Q5a — must use chosen IV from 5a.)',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['type of vinegar', 'pH', 'tenderness', 'research question'],
    feedbackHit: 'RQ uses IV from 5a and links to DV — 2 marks.',
    feedbackMiss: 'RQ format: "How does [type of vinegar] affect [pH of egg white / tenderness]?"',
  },

  q5_c: {
    marks: 1,
    exemplar: 'The pH decreases (accept any values that imply a decrease in pH, e.g. "pH goes from 7 to below 7").',
    keyConcepts: ['Acids', 'pH changes'],
    keywords: ['pH decreases', 'more acidic', 'below 7'],
    feedbackHit: 'pH decreases — 1 mark.',
    feedbackMiss: 'Apple cider vinegar is acidic (pH 3.1). Pickling makes the egg white absorb the acid → pH of egg white falls from 7.',
  },

  q5_d: {
    marks: 1,
    exemplar: 'Repeat the investigation with a new pH meter OR use a method to determine the pH such as universal indicator. (WTTE)',
    keyConcepts: ['Validity', 'Experimental design'],
    keywords: ['new pH meter', 'universal indicator', 'repeat', 'validity'],
    feedbackHit: 'One valid improvement stated — 1 mark.',
    feedbackMiss: 'The problem = pH meter not working → solution = use a replacement meter OR a different method (universal indicator) to get a pH reading.',
  },

  // ── Q6 — Vitamin C ────────────────────────────────────────────────────────
  q6_a: {
    marks: 5,
    exemplar: 'Title: correctly linking Vitamin C concentration with juice type [1]; x-axis: juice type AND y-axis: vitamin C concentration [1]; y-axis scale: evenly spaced increments that start at zero [1]; y-axis unit: mg 100cm⁻³ [1]; Plotting: all values plotted correctly [1]. Do NOT accept a scatter graph — must be a bar chart.',
    keyConcepts: ['Graph drawing', 'Bar chart', 'Data presentation'],
    keywords: ['bar chart', 'title', 'juice type', 'vit C concentration', 'mg 100cm⁻³'],
    feedbackHit: 'Title + labelled axes + correct scale + correct units + all bars correct — 5 marks.',
    feedbackMiss: 'Bar chart (not scatter). Title links vitamin C to juice type. x-axis = juice type; y-axis = vitamin C concentration / mg 100cm⁻³. Scale starts at 0. Plot all 5 values.',
  },

  q6_b: {
    marks: 3,
    exemplar: 'Heat-treated juice (pasteurized) [1]; Vitamin C is broken down at high temperatures [1]; Reference to oxidized or denatured [1]. Loss of vitamin C must be linked to high temperature. Do NOT accept "evaporated" or "killed".',
    keyConcepts: ['Vitamin C stability', 'Heat treatment', 'Oxidation'],
    keywords: ['heat-treated', 'pasteurized', 'broken down at high temperature', 'oxidized', 'denatured'],
    feedbackHit: 'Heat-treated + broken down at high temperatures + oxidized/denatured — 3 marks.',
    feedbackMiss: 'Heat treatment (70°C) destroys vitamin C: it is oxidized/denatured at high temperatures → lowest starting concentration.',
  },

  q6_c: {
    marks: 2,
    exemplar: 'Change in vitamin C concentration: 375−350 = 25 (±5) μg cm⁻³ [1]; Rate of change: 25/21 = 1.19 μg cm⁻³ day⁻¹ (accept values in range 0.95–1.43) [1].',
    keyConcepts: ['Rate of change', 'Data analysis', 'Graph reading'],
    keywords: ['25 μg cm⁻³', '1.19 μg cm⁻³ day⁻¹', 'rate = change/time'],
    feedbackHit: 'Δ concentration = 25 and rate = 1.19 μg cm⁻³ day⁻¹ — 2 marks.',
    feedbackMiss: 'Rate = (change in concentration) ÷ (time). Read start/end values from CO₂-treated line: change ≈ 25 μg cm⁻³ over 21 days → rate = 25/21 ≈ 1.19.',
  },

  q6_d: {
    marks: 4,
    exemplar: 'The vitamin C will not be oxidized OR oxidized as much [1]; Because the pulp or juice is not exposed to oxygen OR lower exposure to oxygen [1]; Due to protective layer of the peel [1]; Therefore invalid [1]. (Award 4th mark only if marking points 2 or 3 are scored.)',
    keyConcepts: ['Hypothesis evaluation', 'Vitamin C oxidation', 'Orange peel protection'],
    keywords: ['not oxidized as much', 'not exposed to oxygen', 'protective peel', 'invalid'],
    feedbackHit: 'Not oxidized + not exposed to O₂ + peel protection + therefore invalid — 4 marks.',
    feedbackMiss: 'The hypothesis says the whole orange will lose vitamin C to oxidation. BUT: the pulp is protected by the peel and not exposed to oxygen → vitamin C is NOT oxidized → hypothesis is invalid.',
  },

  // ── Q7 — Can material design ──────────────────────────────────────────────
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

**Method (1–4 marks):**
| Mark | Descriptor |
|---|---|
| 1 | Method is linked to IV or DV |
| 2 | Method is linked to IV and DV but is incomplete |
| 3 | Method linked to IV and DV and can be followed to give results |
| 4 | Method linked to IV and DV and can be followed and include details on how to control main CVs |

**Sufficient data (1–4 marks):**
| Mark | Descriptor |
|---|---|
| 1 | Any reference made to different variations of the IV |
| 2 | At least five variations of the IV or at least three trials |
| 3 | At least five values of the IV and at least three trials |
| 4 | At least five values of the IV and at least three trials and an average |

IV = type of material (steel, tin-coated, chromium-coated, can-x, control). DV = amount of corrosion, mass change, or change in soft drink acidity. CVs: volume of soft drink, mass of sample, time, temperature. Method: immerse samples in soft drink; measure mass before and after; use 3 repeats; calculate mean.`,
    keyConcepts: ['Criterion B', 'Investigation design', 'Corrosion', 'Materials'],
    keywords: ['IV type of material', 'DV corrosion/mass change', 'CVs', 'equipment', 'method', '5 variations', '3 trials', 'mean'],
    feedbackHit: 'All four dimensions addressed: variables, equipment, method with repeats, sufficient data — up to 16 marks.',
    feedbackMiss: 'Must include: IV (type of material), DV (mass change/corrosion), two CVs, equipment list, step-by-step method, 5 material variations, 3 repeats, calculate mean.',
  },

  // ── Q8 — Saline water / crops ─────────────────────────────────────────────
  q8_a: {
    marks: 2,
    exemplar: 'Na⁺(aq) and Cl⁻(aq) are charged particles [1]; ions are mobile when dissolved in water / ions can conduct electricity [1]. (Accept explanations using other ionic salts and ions.)',
    keyConcepts: ['Electrical conductivity', 'Ions', 'Dissolved salts'],
    keywords: ['Na⁺', 'Cl⁻', 'charged particles', 'ions mobile', 'conduct electricity'],
    feedbackHit: 'Charged ions + mobile in water = conducts electricity — 2 marks.',
    feedbackMiss: 'Dissolved NaCl splits into Na⁺ and Cl⁻ ions. Ions are charged and free to move → they can conduct electricity.',
  },

  q8_b: {
    marks: 2,
    exemplar: 'Pacific (ocean) water [1]; Highest electrical conductivity OR highest dissolved salts [1].',
    keyConcepts: ['Salinity', 'Electrical conductivity', 'Data interpretation'],
    keywords: ['Pacific', 'highest conductivity', 'highest dissolved salts', '15 S m⁻¹'],
    feedbackHit: 'Pacific + highest conductivity — 2 marks.',
    feedbackMiss: 'Compare conductivity values: Andes=0.45, Colorado=0.13, Napa=0.35, Pacific=15 S m⁻¹. Pacific is highest → most salty.',
  },

  q8_c: {
    marks: 1,
    exemplar: '1.4 ±0.2 mmol dm⁻³ (unit not required).',
    keyConcepts: ['Graph reading', 'Optimum conditions'],
    keywords: ['1.4 mmol dm⁻³', 'optimum', 'maximum yield', 'plant C'],
    feedbackHit: '1.4 ±0.2 mmol dm⁻³ — 1 mark.',
    feedbackMiss: 'Find plant C on the graph. Read the salt concentration at the peak of the plant C curve (maximum yield point).',
  },

  q8_d: {
    marks: 3,
    exemplar: 'A correct statement about crop A AND crop B [1]; A correct use of data for crop A (e.g. decreases rapidly to 20% at low salinity of 0.5 mmol dm⁻³; decrease in % yield starts at 0.15 mmol dm⁻³) [1]; A correct use of data for crop B (e.g. yield starts decreasing at a higher concentration; at 0.8 mmol dm⁻³; decrease in % yield starts at lower rate) [1].',
    keyConcepts: ['Graph analysis', 'Comparison', 'Crop yield'],
    keywords: ['plant A decreases rapidly', 'plant B more tolerant', '0.5 mmol dm⁻³', '0.8 mmol dm⁻³'],
    feedbackHit: 'Comparison + data for both A and B — 3 marks.',
    feedbackMiss: 'Read both curves: Plant A drops fast at ~0.5 mmol dm⁻³; Plant B decreases more slowly, starting at higher concentration. Use specific numbers from the graph.',
  },

  // ── Q9 — Desalination ─────────────────────────────────────────────────────
  q9_a: {
    marks: 3,
    exemplar: 'Latin America AND Caribbean [1]; Surrounded by saline water OR little surface water suitable for drinking or irrigation [1]; Freshwater required for high populations [1].',
    keyConcepts: ['Desalination', 'Water scarcity', 'Regional data'],
    keywords: ['Latin America', 'Caribbean', 'surrounded by ocean', 'saline water', 'freshwater'],
    feedbackHit: 'Region identified + two justifications (geography + population) — 3 marks.',
    feedbackMiss: 'Pie chart shows Latin America & Caribbean with most systems. Reason: surrounded by ocean (saline) water; large population needing freshwater.',
  },

  q9_b: {
    marks: 14,
    exemplar: `Criterion D Discuss and Evaluate — 14 marks rubric:

**Comparison of efficiencies (1–4 marks):**
| 1 | 2 | 3 | 4 |
|---|---|---|---|
| Efficiency of two systems stated | Efficiency of all three systems stated OR two compared to each other | Efficiency of all three compared to each other | Efficiency of all three compared with scientific justification |
Example justifications: thermal operates at high temperatures → inefficient re energy; membrane low energy → efficient; solar uses renewable energy directly.

**Economic impacts (1–4 marks):**
| 1 | 2 | 3 | 4 |
|---|---|---|---|
| One system stated | Two systems stated | All three, or comparison of any two | Comparison of all three economic impacts |
Examples: membrane expensive to build + maintain (clogging); thermal not expensive to build but uses energy; solar cheapest — simple construction.

**Environmental impacts (1–4 marks):**
| 1 | 2 | 3 | 4 |
|---|---|---|---|
| One system stated | Two systems stated | All three or comparison of any two | Comparison of all three environmental impacts |
Examples: thermal CO₂ emission = 24 kg CO₂ per m³ fresh water; membrane = 0.3 kg CO₂ per m³; solar = ~0 kg CO₂; thermal heat pollution.

**Appraisal (1–2 marks):**
| 1 | 2 |
|---|---|
| Simple concluding statement | Concluding appraisal with evidence or justified choice |
Example: thermal is most efficient for large-scale industrial use; solar best for small-scale domestic use. Do NOT accept CO₂ as a scientific justification for efficiency.`,
    keyConcepts: ['Criterion D', 'Desalination', 'Efficiency', 'Economic impacts', 'Environmental impacts'],
    keywords: ['thermal', 'membrane', 'solar', 'efficiency', 'CO₂', 'economic', 'environmental', 'appraisal'],
    feedbackHit: 'All four dimensions: efficiency comparison + economics + environment + appraisal with evidence — up to 14 marks.',
    feedbackMiss: 'Must address: (1) efficiency of all three systems compared; (2) economic impacts (build/maintain costs, energy); (3) environmental impacts (CO₂ emissions); (4) final appraisal with evidence.',
  },
}
