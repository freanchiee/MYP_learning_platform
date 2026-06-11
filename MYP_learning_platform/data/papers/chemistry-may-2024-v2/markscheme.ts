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
  // ── Q1 — Ethane combustion & leaf chromatography ──────────────────────────
  q1_a: {
    marks: 2,
    exemplar: '2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O. Reactants correct (2, 7) [1]; Products correct (4, 6) [1].',
    keyConcepts: ['Balancing equations', 'Combustion of alkanes'],
    keywords: ['2C₂H₆', '7O₂', '4CO₂', '6H₂O', 'balanced'],
    feedbackHit: 'Correct coefficients 2,7,4,6 — 2 marks.',
    feedbackMiss: 'Ethane combustion: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O. Count C: 2×2=4 left; 4CO₂ ✓. Count H: 2×6=12 left; 6×2=12 ✓. Count O: 7×2=14 left; 4×2+6=14 ✓.',
    blankAnswers: ['2', '7', '4', '6'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'Aldehyde / aldehyde group (–CHO). Do NOT accept carboxylic acid or ketone.',
    keyConcepts: ['Functional groups', 'Aldehydes', 'Organic chemistry'],
    keywords: ['aldehyde', 'aldehyde group', '–CHO', 'carbonyl'],
    feedbackHit: 'Aldehyde / aldehyde group correctly identified — 1 mark.',
    feedbackMiss: 'The –CHO group at the end of a carbon chain = aldehyde group. Vanillin contains an aldehyde.',
  },

  q1_c: { type: 'mcq', correct: 3 } as MCQEntry,

  q1_d: { type: 'mcq', correct: 0 } as MCQEntry,

  q1_e: {
    marks: 2,
    exemplar: 'Band 1 = Carotene C (top; highest Rf); Band 2 = Lutein B; Band 3 = Chlorophyll A (lowest, near leaf stain). One correct [1]; all three correct [2].',
    keyConcepts: ['Chromatography', 'Rf values', 'Pigment separation'],
    keywords: ['Band 1 Carotene C', 'Band 2 Lutein B', 'Band 3 Chlorophyll A', 'Rf'],
    feedbackHit: 'All three pigments correctly assigned — 2 marks.',
    feedbackMiss: 'Pigment closest to solvent front = highest Rf = Band 1 (Carotene C). Pigment nearest application point = Band 3 (Chlorophyll A).',
  },

  q1_f: {
    marks: 3,
    exemplar: 'Solvent front distance from application point = 8.4 cm [1]; Band 1 distance from application point = 7.1 cm [1]; Rf = 7.1/8.4 = 0.85 (±0.01) [1].',
    keyConcepts: ['Rf calculation', 'Chromatography'],
    keywords: ['Rf = 0.85', '8.4 cm', '7.1 cm', 'solvent front', 'distance band'],
    feedbackHit: 'Both distances and Rf = 0.85 — 3 marks.',
    feedbackMiss: 'Rf = (distance band travels from application) ÷ (distance solvent front travels from application). Measure both from application/leaf stain point.',
  },

  // ── Q2 — Limestone, acid rain, pH ────────────────────────────────────────
  q2_a: { type: 'mcq', correct: 1 } as MCQEntry,

  q2_b: {
    marks: 2,
    exemplar: 'Decrease the acidity / increase the pH [1]; by adding a base / alkali such as NaOH / Ca(OH)₂ / calcium hydroxide [1].',
    keyConcepts: ['pH', 'Bases', 'Neutralisation'],
    keywords: ['increase pH', 'add base/alkali', 'NaOH', 'calcium hydroxide'],
    feedbackHit: 'Increase pH by adding a base/alkali — 2 marks.',
    feedbackMiss: 'HNO₃ solution pH=4 is acidic. To reach pH=7 (neutral), raise the pH by adding a base (e.g. NaOH).',
  },

  q2_c: {
    marks: 2,
    exemplar: 'M(K₂CO₃) = (2×39) + 12 + (3×16) = 78 + 12 + 48 = 138 g mol⁻¹ [2 marks for correct answer].',
    keyConcepts: ['Molar mass', 'Periodic table', 'Potassium carbonate'],
    keywords: ['138 g/mol', 'M(K₂CO₃)', '2K + C + 3O'],
    feedbackHit: '138 g/mol — 2 marks.',
    feedbackMiss: 'M(K)=39, M(C)=12, M(O)=16. K₂CO₃ = 2(39)+12+3(16) = 78+12+48 = 138 g mol⁻¹.',
  },

  q2_d: {
    marks: 2,
    exemplar: 'Product A and B: H₂O and CO₂ (accept in either order) [2 marks for both correct].',
    keyConcepts: ['Neutralisation', 'Metal carbonate reactions'],
    keywords: ['H₂O', 'CO₂', 'water', 'carbon dioxide'],
    feedbackHit: 'H₂O and CO₂ both selected — 2 marks.',
    feedbackMiss: 'Acid + metal carbonate → salt + H₂O + CO₂. The two by-products are water and carbon dioxide.',
  },

  q2_e: {
    marks: 1,
    exemplar: 'Ca(NO₃)₂ (calcium nitrate; correct subscripts required).',
    keyConcepts: ['Salt formation', 'Ionic formula'],
    keywords: ['Ca(NO₃)₂', 'calcium nitrate'],
    feedbackHit: 'Ca(NO₃)₂ with correct formula — 1 mark.',
    feedbackMiss: 'HNO₃ provides NO₃⁻; CaCO₃ provides Ca²⁺. Ca²⁺ needs 2 × NO₃⁻ → Ca(NO₃)₂.',
  },

  q2_f: {
    marks: 1,
    exemplar: 'pH = 7.',
    keyConcepts: ['pH of salts', 'Neutral solution'],
    keywords: ['pH 7', 'neutral', 'Ca(NO₃)₂'],
    feedbackHit: 'pH 7 — 1 mark.',
    feedbackMiss: 'Ca(NO₃)₂ = salt from strong acid (HNO₃) + carbonate base → neutral salt, pH=7.',
  },

  // ── Q3 — Car exhaust, water formation, diffusion ──────────────────────────
  q3_a: {
    marks: 2,
    exemplar: '2H₂ + O₂ → 2H₂O. Reactants correct: 2H₂ + O₂ [1]; Products correct: 2H₂O [1].',
    keyConcepts: ['Balancing equations', 'Water formation', 'Catalytic converter'],
    keywords: ['2H₂', 'O₂', '2H₂O', 'balanced'],
    feedbackHit: '2H₂ + O₂ → 2H₂O — 2 marks.',
    feedbackMiss: 'Each H₂ has 2H; 2H₂O needs 4H so need 2H₂ ✓. O₂ has 2O; 2H₂O has 2O ✓.',
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
    exemplar: 'Carbon monoxide is a gas [1]; gas particles spread/move/travel out [1]; from an area of high concentration to an area of low concentration [1]; a correct use of the word "diffusion" [1].',
    keyConcepts: ['Diffusion', 'Concentration gradient'],
    keywords: ['diffusion', 'high to low concentration', 'gas spreads', 'CO'],
    feedbackHit: 'Gas + spreads + high to low concentration + diffusion — 4 marks.',
    feedbackMiss: 'Key: (1) CO is a gas; (2) particles spread out; (3) from high to low concentration; (4) = diffusion.',
  },

  // ── Q4 — Rennet, milk coagulation ─────────────────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'Conductivity meter; because it gives quantitative data OR more accurate/precise data OR removes human error / subjective judgement.',
    keyConcepts: ['Measurement accuracy', 'Quantitative data'],
    keywords: ['conductivity meter', 'quantitative', 'accurate', 'no human error'],
    feedbackHit: 'Conductivity meter + valid reason — 1 mark.',
    feedbackMiss: 'Visual observation is qualitative and subjective. Conductivity meter gives a precise numeric reading.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'If: the concentration of rennet is increased [1]; Then: the time taken for milk to coagulate will decrease / coagulation will be faster [1]; Because: more enzyme molecules means more collisions with substrate per unit time [1].',
    keyConcepts: ['Hypothesis', 'Enzyme kinetics', 'Criterion B'],
    keywords: ['if rennet concentration increased', 'then coagulation faster', 'because more enzyme-substrate collisions'],
    feedbackHit: 'If–Then–Because correctly linking rennet concentration to coagulation time — 3 marks.',
    feedbackMiss: 'Format: IF [rennet concentration increases] THEN [coagulation time decreases] BECAUSE [more enzyme collisions per unit time].',
  },

  q4_c: {
    marks: 1,
    exemplar: 'Accept any single value in the range 36–42 °C.',
    keyConcepts: ['Coagulation', 'Proteins', 'Temperature'],
    keywords: ['36°C', '42°C', 'low-fat milk coagulation'],
    feedbackHit: 'Any value 36–42°C — 1 mark.',
    feedbackMiss: 'Read the temperature at which the low-fat milk fraction coagulates from the experimental diagram.',
  },

  q4_d: { type: 'mcq', correct: 0 } as MCQEntry,

  q4_e: {
    marks: 3,
    exemplar: 'Accept any single value in the range 36–42 [1]; °C [1]; because that is the lowest temperature at which either of the two components coagulated / lower-fat fraction coagulates first [1].',
    keyConcepts: ['Prediction', 'Coagulation temperature', 'Protein structure'],
    keywords: ['36-42°C', 'low-fat coagulates first', 'lower coagulation temperature'],
    feedbackHit: 'Temperature 36–42°C + unit °C + because low-fat fraction coagulates first — 3 marks.',
    feedbackMiss: 'The mixture will coagulate at the temperature of its most heat-sensitive component. Low-fat milk coagulates at 36–42°C (lower than full-fat at 38°C). Include unit °C and justification.',
  },

  // ── Q5 — Marinating chicken ────────────────────────────────────────────────
  q5_a: {
    marks: 4,
    exemplar: 'IV: concentration of citric acid [1]; DV: texture score OR tenderness [1]; CV1 + CV2: any two from: mass of chicken, temperature, time of marination, size of chicken pieces, type of chicken cut [2].',
    keyConcepts: ['Variables', 'IV/DV/CV', 'Criterion B'],
    keywords: ['citric acid concentration', 'texture score', 'tenderness', 'mass of chicken', 'temperature', 'time'],
    feedbackHit: 'IV, DV, and two valid CVs — 4 marks.',
    feedbackMiss: 'IV = concentration of citric acid; DV = texture score or tenderness; CVs = mass, temperature, time, cut of chicken.',
  },

  q5_b: {
    marks: 2,
    exemplar: 'How does the concentration of citric acid affect the tenderness of marinated chicken breast? (ECF from Q5a — must use IV from 5a.)',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['citric acid concentration', 'tenderness', 'research question'],
    feedbackHit: 'RQ uses IV and links to DV — 2 marks.',
    feedbackMiss: 'RQ format: "How does [citric acid concentration] affect [tenderness / texture score of chicken]?"',
  },

  q5_c: {
    marks: 1,
    exemplar: 'Texture score increases / chicken becomes more tender as citric acid concentration increases (from 0.5% to 2.0%).',
    keyConcepts: ['Protein denaturation', 'Marination'],
    keywords: ['texture score increases', 'more tender', 'acid denatures proteins'],
    feedbackHit: 'Texture score increases with concentration (up to 2%) — 1 mark.',
    feedbackMiss: 'Acid denatures muscle proteins → chicken becomes more tender. Trend from table: 0.5%→5.2; 2.0%→7.8.',
  },

  q5_d: {
    marks: 1,
    exemplar: 'Use a texture analyser instrument OR use a new / calibrated probe to obtain the missing data.',
    keyConcepts: ['Validity', 'Experimental improvement'],
    keywords: ['texture analyser', 'calibrated probe', 'objective measurement'],
    feedbackHit: 'One valid improvement — 1 mark.',
    feedbackMiss: 'The problem = missing data for 1.0% citric acid → solution = use a texture analyser to get an objective measurement.',
  },

  // ── Q6 — Lycopene in cooked vs raw tomatoes ───────────────────────────────
  q6_a: {
    marks: 5,
    exemplar: 'Title: correctly linking lycopene concentration with product type [1]; x-axis: product type AND y-axis: lycopene concentration [1]; y-axis scale: evenly spaced increments starting at zero [1]; y-axis unit: mg 100g⁻¹ [1]; Plotting: all five values plotted correctly [1]. Must be a bar chart.',
    keyConcepts: ['Bar chart', 'Data presentation'],
    keywords: ['bar chart', 'title', 'product type', 'mg 100g⁻¹', 'scale from 0'],
    feedbackHit: 'Title + labelled axes + correct scale + units + all 5 bars — 5 marks.',
    feedbackMiss: 'Bar chart (not scatter). Title links lycopene to product type. y-axis: mg 100g⁻¹ starting at 0. Plot all 5: raw=3.0, sauce=9.7, paste=42.2, sun-dried=45.9, ketchup=17.3.',
  },

  q6_b: {
    marks: 3,
    exemplar: 'Room-temperature (20°C) storage [1]; lycopene is broken down / oxidised more rapidly at higher temperatures [1]; oxygen reacts with lycopene faster at 20°C / reference to oxidation/degradation [1].',
    keyConcepts: ['Lycopene stability', 'Temperature', 'Oxidation'],
    keywords: ['room temperature', '20°C', 'broken down at higher temperature', 'oxidised'],
    feedbackHit: 'Room temperature + broken down/oxidised faster at 20°C + reference to oxidation — 3 marks.',
    feedbackMiss: 'Higher temperature increases lycopene oxidation rate → most lycopene lost at 20°C storage.',
  },

  q6_c: {
    marks: 2,
    exemplar: 'Change in lycopene: 9.7−7.1 = 2.6 mg 100g⁻¹ (±0.5) [1]; Rate = 2.6/21 = 0.12 mg 100g⁻¹ day⁻¹ (accept 0.10–0.15) [1].',
    keyConcepts: ['Rate of change', 'Data analysis'],
    keywords: ['2.6 mg 100g⁻¹', '0.12 mg 100g⁻¹ day⁻¹', 'rate = change/time'],
    feedbackHit: 'Δ lycopene ≈ 2.6 and rate ≈ 0.12 — 2 marks.',
    feedbackMiss: 'Rate = (change in lycopene) ÷ (time). Read room-temperature line: change ≈ 2.6 mg 100g⁻¹ over 21 days → rate = 2.6/21 ≈ 0.12.',
  },

  q6_d: {
    marks: 4,
    exemplar: 'The lycopene inside the tomato will not be oxidised as much [1]; because the flesh is not exposed to oxygen / protected by skin [1]; due to the protective layer of the tomato skin [1]; therefore the hypothesis is invalid [1].',
    keyConcepts: ['Hypothesis evaluation', 'Lycopene oxidation', 'Tomato skin protection'],
    keywords: ['not oxidised as much', 'not exposed to O₂', 'protective skin', 'invalid'],
    feedbackHit: 'Not oxidised + not exposed to O₂ + tomato skin protection + invalid — 4 marks.',
    feedbackMiss: 'The whole tomato skin protects the flesh from oxygen → lycopene is NOT oxidised at the same rate → hypothesis is invalid.',
  },

  // ── Q7 — Bioplastic degradation design ───────────────────────────────────
  q7_: {
    marks: 16,
    exemplar: `Criterion B Investigation Design — 16 marks rubric:

**Variables (1–4 marks):**
IV = type of bioplastic (PLA, PHA, TPS, conventional plastic control). DV = mass loss / % degradation after set time. CVs: mass of sample, depth in compost, moisture level, temperature, time.

**Method (1–4 marks):** Method must be linked to IV and DV and can be followed, including details on controlling CVs.

**Sufficient data (1–4 marks):**
| Mark | Descriptor |
|---|---|
| 1 | Reference to different bioplastic types |
| 2 | At least three types OR at least three trials |
| 3 | At least three types and at least three trials |
| 4 | At least three types, at least three trials, and an average |`,
    keyConcepts: ['Criterion B', 'Investigation design', 'Biodegradation', 'Bioplastics'],
    keywords: ['IV type of bioplastic', 'DV mass loss', 'CVs', 'compost', 'method', '3+ bioplastic types', '3 repeats', 'mean'],
    feedbackHit: 'All four dimensions: variables, equipment, method, sufficient data — up to 16 marks.',
    feedbackMiss: 'Must include: IV (type of bioplastic), DV (mass loss/%), two CVs, equipment list, step-by-step method, 3+ plastic types + control, 3 repeats, mean.',
  },

  // ── Q8 — Lake salinity / mangrove tolerance ───────────────────────────────
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
    exemplar: 'Open sea [1]; highest electrical conductivity (51.8 mS cm⁻¹) OR highest dissolved salt concentration (38.5 g L⁻¹) [1].',
    keyConcepts: ['Salinity', 'Data interpretation'],
    keywords: ['Open sea', 'highest conductivity', '51.8 mS cm⁻¹', '38.5 g L⁻¹'],
    feedbackHit: 'Open sea + highest conductivity/dissolved salt — 2 marks.',
    feedbackMiss: 'Compare: river=0.05, estuary=12.4, lagoon=28.7, open sea=51.8 mS cm⁻¹. Open sea is highest.',
  },

  q8_c: {
    marks: 1,
    exemplar: '25 ±3 g L⁻¹ (unit not required).',
    keyConcepts: ['Graph reading', 'Optimum conditions'],
    keywords: ['25 g L⁻¹', 'optimum', 'maximum biomass', 'species C'],
    feedbackHit: '25 ±3 g L⁻¹ — 1 mark.',
    feedbackMiss: 'Find species C curve. Read the salt concentration at the peak (maximum biomass point).',
  },

  q8_d: {
    marks: 3,
    exemplar: 'A correct statement about species A AND species B [1]; correct data for species A (peaks at ~10 g L⁻¹; falls sharply above 20 g L⁻¹) [1]; correct data for species B (peaks at ~30 g L⁻¹; decreases more gradually) [1].',
    keyConcepts: ['Graph analysis', 'Comparison', 'Salinity tolerance'],
    keywords: ['species A peaks at 10 g/L', 'species B peaks at 30 g/L', 'species B more salt tolerant'],
    feedbackHit: 'Comparison + specific data for A and B — 3 marks.',
    feedbackMiss: 'Read both curves: Species A peaks ~10, drops sharply above 20; Species B peaks ~30, decreases more gradually. Use specific numbers.',
  },

  // ── Q9 — Fog water collection ─────────────────────────────────────────────
  q9_a: {
    marks: 3,
    exemplar: 'Coastal sub-Saharan Africa OR coastal Chile/Peru OR coastal North Africa [1]; high frequency of coastal fog [1]; very limited surface freshwater OR large rural population without clean water [1].',
    keyConcepts: ['Fog water collection', 'Water scarcity', 'Regional data'],
    keywords: ['coastal sub-Saharan Africa', 'coastal fog', 'limited freshwater', 'population'],
    feedbackHit: 'Region + fog/coastal reason + freshwater need — 3 marks.',
    feedbackMiss: 'Region with most fog + least freshwater + largest population needing water. Two justifications required.',
  },

  q9_b: {
    marks: 14,
    exemplar: `Criterion D Discuss and Evaluate — 14 marks rubric:

**Comparison of efficiencies (1–4 marks):**
| 1 | 2 | 3 | 4 |
|---|---|---|---|
| Efficiency of one system stated | Two systems stated | All three compared | All three compared with scientific justification |
Passive mesh: no energy, yield limited by fog density; Electrostatic: high energy demand, higher yield; Solar-assisted: moderate energy, moderate yield.

**Economic impacts (1–4 marks):**
Mesh: cheapest (low build + no energy cost); Electrostatic: expensive (electricity + equipment); Solar-assisted: moderate (panels + materials).

**Environmental impacts (1–4 marks):**
Mesh: minimal impact; Electrostatic: CO₂ from electricity; Solar-assisted: minimal once installed.

**Appraisal (1–2 marks):**
Mesh best for low-income/remote communities in high-fog areas; Electrostatic best where electricity is cheap and reliable.`,
    keyConcepts: ['Criterion D', 'Fog water collection', 'Efficiency', 'Economic impacts', 'Environmental impacts'],
    keywords: ['passive mesh', 'electrostatic', 'solar-assisted', 'efficiency', 'CO₂', 'economic', 'environmental', 'appraisal'],
    feedbackHit: 'All four dimensions: efficiency + economics + environment + appraisal — up to 14 marks.',
    feedbackMiss: 'Must address: (1) efficiency of all 3 systems compared; (2) economic impacts; (3) environmental impacts; (4) final appraisal with evidence.',
  },
}
