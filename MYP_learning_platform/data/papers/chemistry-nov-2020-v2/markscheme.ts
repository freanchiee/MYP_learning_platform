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

export type { MSRecord }

export const MS: MSRecord = {
  // Q1 — Iceland geothermal springs and SiO₂ classification
  q1_a: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,

  q1_b: {
    marks: 2,
    exemplar: 'Row 1: Oxide = potassium oxide (do not accept potassium monoxide); Row 2: Formula = Al₂O₃. One mark each.',
    keyConcepts: ['Naming compounds', 'Chemical formulae'],
    keywords: ['potassium oxide', 'K₂O', 'Al₂O₃', 'aluminium oxide'],
    feedbackHit: 'Correct — potassium oxide (K₂O) and aluminium oxide (Al₂O₃) are the correct IUPAC names and formulae.',
    feedbackMiss: 'Potassium forms K⁺ ions (two K⁺ per O²⁻ → K₂O). Aluminium forms Al³⁺ ions (two Al³⁺ balance three O²⁻ → Al₂O₃).',
    blankAnswers: ['potassium oxide', 'Al₂O₃'],
  } as MSEntry,

  q1_c: {
    type: 'mcq',
    correct: 2,
  } as MCQEntry,

  q1_d: {
    marks: 2,
    exemplar: 'mass SiO₂ / mass sample × 100 = 1.14 / 2.00 × 100 = 57.0% SiO₂. Award 1 mark for correct method (seen or implied), 1 mark for 57.0% (accept 57%).',
    keyConcepts: ['Percentage by mass calculation', 'Criterion C'],
    keywords: ['1.14', '2.00', '100', '57.0', 'percentage', 'SiO₂'],
    feedbackHit: 'Correct — (1.14 ÷ 2.00) × 100 = 57.0% SiO₂.',
    feedbackMiss: 'Use: % = (mass of component / total mass) × 100. Substitute: (1.14 / 2.00) × 100.',
  } as MSEntry,

  q1_e: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,

  // Q2 — Karst cave dissolved gases and noble gas isotopes
  q2_a: {
    marks: 2,
    exemplar: 'The dissolved gases (H₂S, CO₂, HCl) dissolve in the groundwater to form acids [1m]. These acids lower the pH of the spring water significantly [1m]. Accept: CO₂ + H₂O ⇌ H₂CO₃ (carbonic acid); H₂S dissociates to form H⁺ ions.',
    keyConcepts: ['Acid formation from dissolved gases', 'pH scale'],
    keywords: ['dissolve', 'water', 'acid', 'H₂S', 'CO₂', 'HCl', 'low pH', 'karst spring'],
    feedbackHit: 'Correct — dissolved acidic gases lower the pH of the spring water.',
    feedbackMiss: 'Think about what happens when H₂S, CO₂, or HCl dissolve in water — they form weak or strong acids, releasing H⁺ ions and lowering pH.',
  } as MSEntry,

  q2_b: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q2_c: {
    marks: 1,
    exemplar: 'Period 5.',
    keyConcepts: ['Periodic table', 'Periods'],
    keywords: ['xenon', 'period 5', 'noble gas', 'group 18'],
    feedbackHit: 'Correct — xenon (Xe, atomic number 54) is in Period 5 of the periodic table.',
    feedbackMiss: 'Xenon has atomic number 54. Count the periods down the periodic table — it sits in the 5th row (Period 5).',
  } as MSEntry,

  q2_d: {
    marks: 3,
    exemplar: 'For ¹³¹Xe: Protons = 54 (atomic number of xenon); Neutrons = 131 − 54 = 77; Electrons = 54 (neutral atom). One mark per correct value.',
    keyConcepts: ['Atomic structure', 'Isotopes', 'Subatomic particles'],
    keywords: ['protons 54', 'neutrons 77', 'electrons 54', 'mass number 131', 'atomic number 54'],
    feedbackHit: 'Correct — protons = atomic number = 54; neutrons = 131 − 54 = 77; electrons = 54 for neutral atom.',
    feedbackMiss: 'For ¹³¹Xe: the top number (131) is the mass number; atomic number of xenon = 54 (= protons = electrons); neutrons = 131 − 54 = 77.',
  } as MSEntry,

  q2_e: {
    marks: 2,
    exemplar: 'Sulfur has electron configuration 2.8.6: 2 electrons in the first shell, 8 in the second shell, and 6 in the third (outer) shell. Award 1 mark for correct inner shells (2, 8) and 1 mark for correct outer shell (6).',
    keyConcepts: ['Electron configuration', 'Electron shells'],
    keywords: ['2 electrons first shell', '8 electrons second', '6 electrons outer', 'sulfur', 'three shells'],
    feedbackHit: 'Correct — sulfur (atomic number 16) has electron configuration 2, 8, 6.',
    feedbackMiss: 'Sulfur has 16 electrons. First shell: 2; second shell: 8; third shell: 16 − 2 − 8 = 6. Configuration: 2, 8, 6.',
  } as MSEntry,

  // Q3 — Biofuel monomers and industrial processing
  q3_a: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q3_b: {
    marks: 2,
    exemplar: 'A = pent-1-ene (accept pentene); B = hex-1-ene (accept hexene). One mark each.',
    keyConcepts: ['Alkene nomenclature', 'Organic chemistry'],
    keywords: ['pent-1-ene', 'hex-1-ene', 'alkene', 'C=C double bond', 'five carbons', 'six carbons'],
    feedbackHit: 'Correct — A (C₅H₁₀) is pent-1-ene and B (C₆H₁₂) is hex-1-ene.',
    feedbackMiss: 'Count the carbon atoms: A has 5 carbons (pent-) and B has 6 carbons (hex-). Both have a C=C double bond so they are alkenes (-ene suffix).',
    blankAnswers: ['pent-1-ene', 'hex-1-ene'],
  } as MSEntry,

  q3_c: {
    marks: 1,
    exemplar: 'C₄H₁₀. From C₁₅H₃₂ → C₅H₁₀ + C₆H₁₂ + X: C: 15 − 5 − 6 = 4; H: 32 − 10 − 12 = 10. Do not accept butane or the structural formula.',
    keyConcepts: ['Cracking of hydrocarbons', 'Molecular formula', 'Conservation of atoms'],
    keywords: ['C₄H₁₀', 'cracking', 'pentadecane', 'C₁₅H₃₂', 'balance atoms'],
    feedbackHit: 'Correct — subtracting C₅H₁₀ and C₆H₁₂ from C₁₅H₃₂ gives C₄H₁₀.',
    feedbackMiss: 'Subtract the carbons: 15 − 5 − 6 = 4. Subtract the hydrogens: 32 − 10 − 12 = 10. So X = C₄H₁₀.',
  } as MSEntry,

  q3_d: {
    marks: 1,
    exemplar: 'Calcium hydroxide neutralises the acidic gases produced during incineration (e.g. HCl, SO₂). Accept: removes toxic acidic gases / acts as a base.',
    keyConcepts: ['Acid–base reactions', 'Neutralisation', 'Air pollution control'],
    keywords: ['neutralise', 'acidic gases', 'calcium hydroxide', 'Ca(OH)₂'],
    feedbackHit: 'Correct — Ca(OH)₂ is a base that neutralises acidic combustion gases.',
    feedbackMiss: 'Ca(OH)₂ is an alkali (base). It is added to neutralise acidic gases such as HCl and SO₂ produced during incineration.',
  } as MSEntry,

  q3_e: {
    marks: 1,
    exemplar: 'Boiling. Accept: vaporisation at the boiling point. Do not accept just "evaporation".',
    keyConcepts: ['Physical changes', 'States of matter', 'Boiling'],
    keywords: ['boiling', 'liquid to gas', 'hex-1-ene', 'vaporisation'],
    feedbackHit: 'Correct — the physical change from liquid hex-1-ene to gas is boiling.',
    feedbackMiss: 'When a liquid is heated to its boiling point and becomes a gas, the physical change is boiling.',
  } as MSEntry,

  q3_f: {
    marks: 1,
    exemplar: 'Any one reasonable environmental regulation, e.g.: emissions must pass through scrubbers/filters before release; minimum combustion temperature must be maintained; waste must not contain halogenated compounds; regular air-quality monitoring must be conducted.',
    keyConcepts: ['Environmental regulations', 'Incineration'],
    keywords: ['scrubbers', 'filters', 'emissions controlled', 'hazardous', 'monitoring'],
    feedbackHit: 'Correct — a valid environmental regulation for industrial incineration.',
    feedbackMiss: 'Think about harmful outputs from incineration (dioxins, acid gases) and how a regulation could limit them (scrubbers, temperature minimums, restrictions on materials).',
  } as MSEntry,

  q3_g: {
    marks: 3,
    exemplar: 'Order (increasing particle size): B — C — A. [1m] B had the fastest rate of biodegradation. [1m] Rate of reaction increases with decreasing particle size (or: smaller particles → higher surface area → faster reaction). [1m]',
    keyConcepts: ['Surface area and reaction rate', 'Biodegradation', 'Data interpretation'],
    keywords: ['B < C < A', 'surface area', 'particle size', 'biodegradation rate', 'faster reaction'],
    feedbackHit: 'Correct — B has the smallest particles (fastest biodegradation); A has the largest particles (slowest).',
    feedbackMiss: 'From the graph, B biodegrades fastest and A slowest. Smaller particles have more surface area, so B must have the smallest particles.',
  } as MSEntry,

  // Q4 — Deep-sea bioluminescent bacteria investigation
  q4_a: {
    marks: 2,
    exemplar: 'Bacterial luciferase is a catalyst that speeds up the rate of the bioluminescent reaction [1m] without itself being used up/consumed [1m]. OR: it lowers the activation energy of the oxidation reaction.',
    keyConcepts: ['Catalysts', 'Activation energy', 'Reaction rate'],
    keywords: ['speeds up', 'rate of reaction', 'not used up', 'activation energy', 'enzyme catalyst'],
    feedbackHit: 'Correct — the enzyme catalyst increases reaction rate by lowering activation energy and is not consumed.',
    feedbackMiss: 'A catalyst: (1) increases the rate / lowers activation energy, AND (2) is not used up. Both points required for full marks.',
  } as MSEntry,

  q4_b: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,

  q4_c: {
    marks: 1,
    exemplar: '55°C. Accept 55 ± 2°C.',
    keyConcepts: ['Reading measuring instruments', 'Temperature measurement'],
    keywords: ['55', '55°C', 'thermometer reading', 'temperature'],
    feedbackHit: 'Correct — the thermometer reads 55°C.',
    feedbackMiss: 'Read the scale carefully. The adjacent thermometers show 40°C and 70°C — count the divisions to find the missing temperature.',
  } as MSEntry,

  q4_d: {
    marks: 4,
    exemplar: 'IV: temperature (of the water bath / culture) [1m]; DV: time taken for the bacterial glow to stop [1m]; CV1: species / strain of bioluminescent bacteria [1m]; CV2: volume of bacterial culture [1m]. Award any two reasonable CVs.',
    keyConcepts: ['Variables', 'Fair test', 'Criterion B'],
    keywords: ['IV temperature', 'DV glow duration', 'CV bacteria species', 'CV volume culture', 'controlled variables'],
    feedbackHit: 'Correct — temperature is varied (IV), glow duration is measured (DV), and species/volume are kept constant (CVs).',
    feedbackMiss: 'IV = what you change; DV = what you measure; CVs = what you keep the same to make it a fair test.',
  } as MSEntry,

  q4_e: {
    marks: 3,
    exemplar: 'If the temperature increases, [1m] then the duration of the bacterial glow will decrease, [1m] because the rate of the bioluminescent reaction increases (at higher temperatures molecules have more kinetic energy and collide more frequently). [1m]',
    keyConcepts: ['Hypothesis formulation', 'Effect of temperature on reaction rate', 'Criterion B'],
    keywords: ['if temperature increases', 'then glow duration decreases', 'because reaction rate', 'collision theory'],
    feedbackHit: 'Correct — a valid If/Then/Because hypothesis with scientific reasoning about temperature and reaction rate.',
    feedbackMiss: 'Structure: If [change in IV] then [expected change in DV] because [scientific reasoning linking temperature to reaction rate].',
  } as MSEntry,

  q4_f: {
    marks: 2,
    exemplar: '220 ± 20 minutes (accept any value in the range 200–240 min). Award 1 mark for correct reading from graph, 1 mark for units (minutes or min).',
    keyConcepts: ['Graph reading', 'Interpolation', 'Criterion C'],
    keywords: ['220', 'minutes', '25°C', 'graph reading', 'interpolation'],
    feedbackHit: 'Correct — reading from the curve at 25°C gives approximately 220 minutes.',
    feedbackMiss: 'Trace a vertical line from 25°C on the x-axis until it meets the curve, then read horizontally to the y-axis. The value should be around 220 minutes.',
  } as MSEntry,

  q4_g: {
    marks: 4,
    exemplar: 'Rate = number of molecules / time = 7.56 × 10⁵ / 180 = 4200 molecules min⁻¹. OR: 4200 / 60 = 70 molecules s⁻¹. Award: 1m for formula; 1m for correct substitution; 1m for 4200 (or 70 if s⁻¹); 1m for correct unit.',
    keyConcepts: ['Rate of reaction', 'Calculation', 'Units', 'Criterion C'],
    keywords: ['4200', '7.56×10⁵', '180', 'molecules per minute', 'rate formula', '70 per second'],
    feedbackHit: 'Correct — 7.56 × 10⁵ ÷ 180 = 4200 molecules min⁻¹.',
    feedbackMiss: 'Rate = total molecules / total time = 7.56 × 10⁵ ÷ 180. Calculate and give the unit (molecules min⁻¹).',
  } as MSEntry,

  // Q5 — Mineral sunscreen investigation
  q5_a: {
    marks: 1,
    exemplar: 'UltraGuard. (UltraGuard had only 8% of beads change colour = least UV passed through = most effective protection.)',
    keyConcepts: ['Data interpretation', 'Effectiveness of sunscreen'],
    keywords: ['UltraGuard', '8%', 'fewest beads changed', 'most effective', 'best blocker'],
    feedbackHit: 'Correct — UltraGuard allowed only 8% of beads to change colour, indicating it blocked the most UV light.',
    feedbackMiss: 'The most effective sunscreen is the one where the FEWEST beads change colour. UltraGuard = 8% changed (fewest).',
  } as MSEntry,

  q5_b: {
    marks: 2,
    exemplar: 'Sunlight consists of all different wavelengths/frequencies of light (visible, IR, UV, etc.) [1m]; whereas the UV fluorescent lamp only emits UV light in a narrow band [1m]. WTTE.',
    keyConcepts: ['Electromagnetic spectrum', 'UV radiation', 'Modelling limitations'],
    keywords: ['sunlight all wavelengths', 'UV lamp narrow band', 'electromagnetic spectrum', 'not complete model'],
    feedbackHit: 'Correct — sunlight contains all wavelengths; the UV lamp only produces a narrow UV range.',
    feedbackMiss: 'Sunlight contains visible, IR, UV-A, UV-B, UV-C; a UV fluorescent lamp only produces UV light, so it is not a complete model of solar radiation.',
  } as MSEntry,

  q5_c: {
    marks: 17,
    exemplar: 'Criterion B rubric (max 17): V (Variables, 0-4): IV = type of mineral sunscreen ingredient in SunSmart; DV = number/% of UV beads that changed colour; two CVs identified. E (Equipment, 0-3): suitable equipment listed. M (Method, 0-5): complete, repeatable method described. D (Data, 0-3): plans at least 3 repeats per ingredient to calculate a mean. S (Safety, 0-2): safety consideration linked to a specific hazard (e.g. UV exposure to eyes/skin).',
    keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Fair test', 'Safety'],
    keywords: ['IV mineral ingredient', 'DV beads changed', 'CVs concentration time', 'equipment UV lamp', 'safety UV exposure', 'repeats mean'],
    feedbackHit: 'Well-designed investigation with all variables identified, clear method, data collection plan, and safety consideration.',
    feedbackMiss: 'Ensure you: (1) identify IV, DV, and at least 2 CVs; (2) list equipment; (3) give a step-by-step method; (4) plan at least 3 repeats; (5) identify a specific safety hazard.',
  } as MSEntry,

  // Q6 — UV absorbance: octinoxate
  q6_a: {
    marks: 2,
    exemplar: 'Compare the number of beads that have changed colour after exposure for each ingredient in SunSmart. [1m] If zinc oxide has the lowest number of beads that have changed colour, then the research question is supported. [1m]',
    keyConcepts: ['Data interpretation', 'Supporting a research question', 'Criterion C'],
    keywords: ['compare beads changed', 'lowest number', 'zinc oxide', 'research question supported'],
    feedbackHit: 'Correct — compare data per ingredient; if ZnO gives fewest changed beads, the RQ is supported.',
    feedbackMiss: 'Rank the ingredients by number of beads changed; state the condition under which the RQ would be supported (ZnO = lowest).',
  } as MSEntry,

  q6_b: {
    marks: 1,
    exemplar: 'Any one reasonable extension, e.g.: testing combinations of ingredients; different lengths of UV exposure; using real sunlight; testing different concentrations of each compound.',
    keyConcepts: ['Extending investigations', 'Experimental design'],
    keywords: ['combinations', 'different exposure time', 'sunlight', 'different concentration', 'new variable'],
    feedbackHit: 'Correct — a valid extension that introduces a new variable or condition.',
    feedbackMiss: 'An extension introduces a new variable or condition — simply repeating the same experiment is not an extension.',
  } as MSEntry,

  q6_c: {
    marks: 6,
    exemplar: 'Title: a title linking absorbance and concentration of octinoxate. [1m] Plot two data points correctly. [1m] Plot all data points correctly. [1m] Line of best fit: starts at (0,0) and goes through all points except the anomalous point at 40 μmol dm⁻³. [1m] Axis labels: concentration of octinoxate on x-axis and absorbance on y-axis. [1m] Unit: μmol dm⁻³ on x-axis. [1m]',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Axis labels', 'Anomalous data', 'Criterion C'],
    keywords: ['title absorbance concentration', 'LOBF from origin', 'anomalous 40', 'x-axis concentration μmol dm⁻³', 'y-axis absorbance', 'octinoxate'],
    feedbackHit: 'Excellent graph — title, all points plotted, best-fit line through origin excluding anomalous point, correctly labelled axes with units.',
    feedbackMiss: 'Check: (1) title links absorbance and concentration; (2) all points plotted (note 40 μmol dm⁻³ = anomalous); (3) LOBF starts at origin and misses the 40 μmol dm⁻³ point; (4) x-axis = concentration (μmol dm⁻³); (5) y-axis = absorbance.',
  } as MSEntry,

  q6_d: {
    marks: 1,
    exemplar: 'There is an anomalous data point at 40 μmol dm⁻³ (absorbance of 0.62, which is lower than expected based on the trend). OR: only one trial / averages are not shown, reducing reliability.',
    keyConcepts: ['Reliability', 'Anomalous data', 'Criterion C'],
    keywords: ['anomalous', '40 μmol dm⁻³', 'one trial', 'no repeats', 'unreliable', 'outlier'],
    feedbackHit: 'Correct — the data point at 40 μmol dm⁻³ is anomalous (lower than the trend), reducing reliability.',
    feedbackMiss: 'Look for the data point that does not fit the trend (40 μmol dm⁻³ at 0.62 AU). Also consider whether repeats were performed.',
  } as MSEntry,

  // Q7 — Climate change and Zn-based CO₂ capture
  q7_a: {
    marks: 2,
    exemplar: 'Any one reasonable suggestion, e.g.: loss of habitat for local wildlife; reduction in food crops; increased flooding (fewer tree roots); increased CO₂ / reduced O₂ for local populations. [1m] Justification: fewer trees → less photosynthesis → less glucose and oxygen produced / more CO₂ remains in atmosphere. [1m]',
    keyConcepts: ['Deforestation impacts', 'Photosynthesis', 'Criterion D'],
    keywords: ['deforestation', 'fewer trees', 'less photosynthesis', 'less oxygen', 'habitat loss', 'CO₂ increases'],
    feedbackHit: 'Correct — a valid community impact with justification linked to reduced photosynthesis.',
    feedbackMiss: 'State one impact (e.g. habitat loss, food shortage) then justify: fewer plants → less photosynthesis → less oxygen / more CO₂.',
  } as MSEntry,

  q7_b: {
    marks: 2,
    exemplar: 'Zn(s) + CO₂(g) + H₂O(l) → ZnCO₃(s) + H₂(g). At 25°C: zinc is a solid, CO₂ is a gas, water is a liquid. Award 1m for one correct state symbol, 2m for all three correct.',
    keyConcepts: ['State symbols', 'Physical states', 'Equations'],
    keywords: ['Zn(s)', 'CO₂(g)', 'H₂O(l)', 'state symbols', '25°C'],
    feedbackHit: 'Correct — Zn(s), CO₂(g), H₂O(l) at 25°C.',
    feedbackMiss: 'At 25°C: zinc is a solid (s), CO₂ is a gas (g), and water is a liquid (l).',
    blankAnswers: ['(s)', '(g)', '(l)'],
  } as MSEntry,

  q7_c: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q7_d: {
    marks: 3,
    exemplar: 'The oxidation number of zinc has increased (from 0 to +2) [1m]. Zinc has lost electrons [1m]. So zinc has been oxidised [1m].',
    keyConcepts: ['Redox chemistry', 'Oxidation', 'Oxidation numbers', 'Electron transfer'],
    keywords: ['oxidation number increases', '0 to +2', 'loses electrons', 'oxidised', 'zinc Zn'],
    feedbackHit: 'Correct — zinc goes from 0 (in Zn metal) to +2 (in ZnCO₃), losing electrons, so it is oxidised.',
    feedbackMiss: 'In Zn metal, oxidation number = 0. In ZnCO₃, Zn is +2 (since CO₃²⁻ has charge −2). Increase in oxidation number = loss of electrons = oxidation.',
  } as MSEntry,

  q7_e: {
    marks: 2,
    exemplar: '2H₂O₂ → 2H₂O + O₂. Reactant (2H₂O₂) correct [1m]; products (2H₂O + O₂) correct [1m].',
    keyConcepts: ['Balancing equations', 'Decomposition of hydrogen peroxide'],
    keywords: ['2H₂O₂', '2H₂O', 'O₂', 'balanced equation', 'hydrogen peroxide decomposition'],
    feedbackHit: 'Correct — 2H₂O₂ → 2H₂O + O₂ is the balanced decomposition equation for hydrogen peroxide.',
    feedbackMiss: 'Count atoms: 2 O on left in H₂O₂ × 2 molecules = 4 O total. Right side: 2×H₂O gives 2O, plus O₂ gives 2O → 4O total ✓. H: 2×2 = 4 on left = 2×2 on right ✓. Balanced: 2H₂O₂ → 2H₂O + O₂.',
    blankAnswers: ['2', '2', '1'],
  } as MSEntry,

  q7_f: {
    marks: 2,
    exemplar: 'The only product of hydrogen combustion is water (no CO₂, no NOx, no SOx produced) [1m]; water is non-toxic and not an atmospheric pollutant / does not contribute to the greenhouse effect [1m]. ORA: petrol combustion produces CO₂, NOx, and SOx which are greenhouse gases / pollutants.',
    keyConcepts: ['Environmental chemistry', 'Combustion products', 'Criterion D'],
    keywords: ['only product water', 'no CO₂', 'no NOx', 'no SOx', 'non-toxic', 'not pollutant'],
    feedbackHit: 'Correct — hydrogen combustion only produces water, which is non-toxic and not an atmospheric pollutant.',
    feedbackMiss: 'Compare products: petrol → CO₂ + H₂O + NOx + SOx (pollutants/greenhouse gases). Hydrogen → only H₂O (not a pollutant).',
  } as MSEntry,

  // Q8 — Ocean acidification solutions essay
  q8_: {
    marks: 15,
    exemplar: 'Criterion D rubric (15 marks): Need — Why addressing ocean acidification matters (1-4): 1=attempt; 2=statement about CO₂/carbonic acid; 3=supported by science (e.g. coral bleaching, effects on marine organisms). Eco — Economic impact (1-4): 1=implied for one system; 2=stated for one; 3=stated for both. Soc — Social impact (1-4): 1=implied; 2=stated for one; 3=stated for both. Sci — Scientific advantages/disadvantages (1-4): 1=attempt; 2=advantage or disadvantage of one system; 3=both advantage and disadvantage of one, or A/D for both; 4=advantage AND disadvantage of both. Con — Concluding appraisal (1-4): 1=concluding statement; 2=justified conclusion naming the best system. Maximum total = 15 marks.',
    keyConcepts: ['Criterion D', 'Ocean acidification', 'Carbon chemistry', 'Scientific appraisal', 'Economic and social impact'],
    keywords: ['ocean liming USD18', 'seagrass USD7', 'shipping controls USD12', 'carbonic acid CO₂', 'coral marine impact', 'economic cost', 'social fishing communities', 'scientific advantage disadvantage', 'concluding appraisal'],
    feedbackHit: 'Excellent essay — clear explanation of why ocean acidification needs to be addressed, economic and social impacts of both chosen systems, balanced scientific evaluation, and justified conclusion.',
    feedbackMiss: 'Structure: (1) why ocean acidification is a problem (CO₂ → carbonic acid → pH drop → harm to marine life); (2) economic impact of each system (costs given); (3) social impact (fishing, employment); (4) scientific advantages AND disadvantages; (5) conclude which system is best and why.',
  } as MSEntry,
}
