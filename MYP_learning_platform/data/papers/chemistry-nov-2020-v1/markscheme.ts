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
  // Q1 — Volcanic rocks: Mount Etna and Mount Fuji
  q1_a: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q1_b: {
    marks: 2,
    exemplar: 'Row 1: Oxide = sodium oxide (do not accept sodium monoxide); Row 2: Formula = CaO. One mark each.',
    keyConcepts: ['Naming compounds', 'Chemical formulae'],
    keywords: ['sodium oxide', 'Na₂O', 'CaO', 'calcium oxide'],
    feedbackHit: 'Correct — sodium oxide (Na₂O) and calcium oxide (CaO) are the standard IUPAC names.',
    feedbackMiss: 'Sodium forms Na⁺ ions (Na₂O) and calcium forms Ca²⁺ ions (CaO). Use the metal name + "oxide".',
    blankAnswers: ['sodium oxide', 'CaO'],
  } as MSEntry,

  q1_c: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q1_d: {
    marks: 2,
    exemplar: 'mass SiO₂ / mass sample × 100 = 1.20 / 2.00 × 100 = 60.0% SiO₂. Award 1 mark for correct method (seen or implied), 1 mark for 60.0% (accept 60%).',
    keyConcepts: ['Percentage by mass calculation', 'Criterion C'],
    keywords: ['1.20', '2.00', '100', '60.0', 'percentage', 'SiO₂'],
    feedbackHit: 'Correct — (1.20 ÷ 2.00) × 100 = 60.0% SiO₂.',
    feedbackMiss: 'Use: % = (mass of component / total mass) × 100. Substitute: (1.20 / 2.00) × 100.',
  } as MSEntry,

  q1_e: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,

  // Q2 — Fumarolic gases and noble gas isotopes
  q2_a: {
    marks: 2,
    exemplar: 'The fumarolic gases (H₂S, SO₂, CO₂) dissolve in water to form acids [1m]. These acids lower the pH of the pool water significantly [1m]. Accept: H₂S dissolves to form a weak acid; SO₂ + H₂O → H₂SO₃.',
    keyConcepts: ['Acid formation from non-metal gases', 'pH scale'],
    keywords: ['dissolve', 'water', 'acid', 'H₂S', 'SO₂', 'low pH', 'fumarole'],
    feedbackHit: 'Correct — acidic volcanic gases dissolve in water to form acids, lowering pH.',
    feedbackMiss: 'Think about what happens when gases like SO₂ or H₂S dissolve in water — they form sulfurous acid and hydrosulfuric acid respectively, lowering pH.',
  } as MSEntry,

  q2_b: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q2_c: {
    marks: 1,
    exemplar: 'Period 4.',
    keyConcepts: ['Periodic table', 'Periods'],
    keywords: ['krypton', 'period 4', 'noble gas', 'group 18'],
    feedbackHit: 'Correct — krypton (Kr, atomic number 36) is in Period 4 of the periodic table.',
    feedbackMiss: 'Krypton has atomic number 36. Count the periods down the periodic table — it sits in the 4th row (Period 4).',
  } as MSEntry,

  q2_d: {
    marks: 3,
    exemplar: 'For ⁸⁴Kr: Protons = 36 (atomic number of krypton); Neutrons = 84 − 36 = 48; Electrons = 36 (neutral atom). One mark per correct value.',
    keyConcepts: ['Atomic structure', 'Isotopes', 'Subatomic particles'],
    keywords: ['protons 36', 'neutrons 48', 'electrons 36', 'mass number 84', 'atomic number 36'],
    feedbackHit: 'Correct — protons = atomic number = 36; neutrons = mass number − atomic number = 84 − 36 = 48; electrons = protons = 36.',
    feedbackMiss: 'For ⁸⁴Kr: the top number (84) is the mass number (protons + neutrons); atomic number of krypton is 36 (= protons = electrons for a neutral atom); neutrons = 84 − 36 = 48.',
  } as MSEntry,

  q2_e: {
    marks: 2,
    exemplar: 'Argon has electron configuration 2.8.8: 2 electrons in the first shell, 8 in the second shell, and 8 in the third (outer) shell. Award 1 mark for correct inner shells (2, 8) and 1 mark for correct outer shell (8).',
    keyConcepts: ['Electron configuration', 'Electron shells'],
    keywords: ['2 electrons first shell', '8 electrons second', '8 electrons outer', 'argon', 'filled outer shell', 'noble gas'],
    feedbackHit: 'Correct — argon (atomic number 18) has electron configuration 2, 8, 8: three shells with 2, 8, and 8 electrons.',
    feedbackMiss: 'Argon has 18 electrons. First shell: 2; second shell: 8; third shell: 18 − 2 − 8 = 8. So configuration is 2, 8, 8.',
  } as MSEntry,

  // Q3 — Synthetic rubber and industrial processing
  q3_a: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q3_b: {
    marks: 2,
    exemplar: 'A = butene (also accept but-1-ene / but-2-ene); B = pentene (also accept pent-1-ene). One mark each.',
    keyConcepts: ['Alkene nomenclature', 'Organic chemistry'],
    keywords: ['butene', 'pentene', 'alkene', 'C=C double bond', 'four carbons', 'five carbons'],
    feedbackHit: 'Correct — A (C₄H₈) is butene and B (C₅H₁₀) is pentene.',
    feedbackMiss: 'Count the carbon atoms: A has 4 carbons (but-) and B has 5 carbons (pent-). Both have a C=C double bond so they are alkenes (-ene suffix).',
    blankAnswers: ['butene', 'pentene'],
  } as MSEntry,

  q3_c: {
    marks: 1,
    exemplar: 'C₇H₁₆. From C₁₆H₃₄ → C₄H₈ + C₅H₁₀ + X: C: 16 − 4 − 5 = 7; H: 34 − 8 − 10 = 16. Do not accept heptane or the structural formula.',
    keyConcepts: ['Cracking of hydrocarbons', 'Molecular formula', 'Conservation of atoms'],
    keywords: ['C₇H₁₆', 'cracking', 'hexadecane', 'C₁₆H₃₄', 'balance atoms'],
    feedbackHit: 'Correct — subtracting C₄H₈ and C₅H₁₀ from C₁₆H₃₄ gives C₇H₁₆.',
    feedbackMiss: 'Subtract the carbons: 16 − 4 − 5 = 7. Subtract the hydrogens: 34 − 8 − 10 = 16. So X = C₇H₁₆.',
  } as MSEntry,

  q3_d: {
    marks: 1,
    exemplar: 'Calcium hydroxide neutralises the acidic gases produced during incineration (e.g. SO₂, HCl). Accept: removes toxic acidic gases.',
    keyConcepts: ['Acid–base reactions', 'Neutralisation', 'Air pollution control'],
    keywords: ['neutralise', 'acidic gases', 'calcium hydroxide', 'Ca(OH)₂', 'SO₂'],
    feedbackHit: 'Correct — Ca(OH)₂ is a base that neutralises acidic gases produced during incineration of rubber waste.',
    feedbackMiss: 'Ca(OH)₂ is an alkali (base). It is added to neutralise acidic combustion gases such as SO₂ and HCl.',
  } as MSEntry,

  q3_e: {
    marks: 1,
    exemplar: 'Boiling. Accept: evaporation at the boiling point. Do not accept just "evaporation".',
    keyConcepts: ['Physical changes', 'States of matter', 'Boiling'],
    keywords: ['boiling', 'liquid to gas', 'butene', 'vaporisation'],
    feedbackHit: 'Correct — the physical change from liquid butene to gaseous butene is boiling.',
    feedbackMiss: 'When a liquid is heated to its boiling point and becomes a gas, the physical change is boiling (not evaporation, which is a surface phenomenon).',
  } as MSEntry,

  q3_f: {
    marks: 1,
    exemplar: 'Any one reasonable environmental regulation, e.g.: emissions must pass through scrubbers/filters before release; a minimum combustion temperature must be maintained; waste must not contain heavy metals or halogenated compounds; regular air-quality monitoring must be conducted.',
    keyConcepts: ['Environmental regulations', 'Incineration'],
    keywords: ['scrubbers', 'filters', 'emissions controlled', 'hazardous', 'monitoring', 'temperature minimum'],
    feedbackHit: 'Correct — a valid environmental regulation for industrial incineration.',
    feedbackMiss: 'Think about what harmful outputs come from incineration (SOx, dioxins, heavy metals) and how a regulation could limit them (scrubbers, filters, restrictions on what can be burned).',
  } as MSEntry,

  q3_g: {
    marks: 3,
    exemplar: 'Order (increasing particle size): C — A — B. [1m] C had the fastest rate of biodegradation. [1m] Rate of reaction increases with decreasing particle size (or: smaller particles → higher surface area → faster reaction). [1m]',
    keyConcepts: ['Surface area and reaction rate', 'Biodegradation', 'Data interpretation'],
    keywords: ['C < A < B', 'surface area', 'particle size', 'biodegradation rate', 'faster reaction'],
    feedbackHit: 'Correct — C has the smallest particles (highest surface area, fastest biodegradation); B has the largest particles (slowest).',
    feedbackMiss: 'From the graph, C biodegrades fastest and B slowest. Smaller particles have more surface area for microbial attack, so C must have the smallest particles.',
  } as MSEntry,

  // Q4 — Firefly bioluminescence investigation
  q4_a: {
    marks: 2,
    exemplar: 'Luciferase is a catalyst that speeds up the rate of the bioluminescent reaction [1m] without itself being used up/consumed [1m]. OR: it lowers the activation energy of the oxidation reaction.',
    keyConcepts: ['Catalysts', 'Activation energy', 'Reaction rate'],
    keywords: ['speeds up', 'rate of reaction', 'not used up', 'activation energy', 'enzyme catalyst'],
    feedbackHit: 'Correct — the enzyme catalyst increases reaction rate by lowering activation energy and is not consumed in the process.',
    feedbackMiss: 'A catalyst does two things: (1) increases the rate / lowers activation energy, and (2) is not used up. You need both points for full marks.',
  } as MSEntry,

  q4_b: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,

  q4_c: {
    marks: 1,
    exemplar: '70°C. Accept 70 ± 2°C.',
    keyConcepts: ['Reading measuring instruments', 'Temperature measurement'],
    keywords: ['70', '70°C', 'thermometer reading', 'temperature'],
    feedbackHit: 'Correct — the thermometer reads 70°C.',
    feedbackMiss: 'Read the scale carefully. The adjacent thermometers show 55°C and the next unmarked one — count the scale divisions to find the missing temperature.',
  } as MSEntry,

  q4_d: {
    marks: 4,
    exemplar: 'IV: temperature (of the water bath / solution) [1m]; DV: time taken for the firefly light to stop [1m]; CV1: type/species of firefly extract / source of luciferin [1m]; CV2: volume of extract solution [1m]. Award any two reasonable CVs.',
    keyConcepts: ['Variables', 'Fair test', 'Criterion B'],
    keywords: ['IV temperature', 'DV light duration', 'CV type of extract', 'CV volume', 'controlled variables'],
    feedbackHit: 'Correct — temperature is varied (IV), time light lasts is measured (DV), and type of extract/volume are kept constant (CVs).',
    feedbackMiss: 'IV = what you change; DV = what you measure; CVs = what you keep the same to make it a fair test.',
  } as MSEntry,

  q4_e: {
    marks: 3,
    exemplar: 'If the temperature increases, [1m] then the duration of the firefly light emission will decrease, [1m] because the rate of the bioluminescent reaction increases (at higher temperatures molecules have more kinetic energy and collide more frequently with sufficient energy). [1m]',
    keyConcepts: ['Hypothesis formulation', 'Effect of temperature on reaction rate', 'Criterion B'],
    keywords: ['if temperature increases', 'then light duration decreases', 'because reaction rate', 'collision theory'],
    feedbackHit: 'Correct — a valid If/Then/Because hypothesis with scientific reasoning about temperature and reaction rate.',
    feedbackMiss: 'Structure: If [change in IV] then [expected change in DV] because [scientific reasoning linking temperature to reaction rate].',
  } as MSEntry,

  q4_f: {
    marks: 2,
    exemplar: '440 ± 20 minutes (accept any value in the range 420–460 min). Award 1 mark for correct reading from graph, 1 mark for units (minutes or min).',
    keyConcepts: ['Graph reading', 'Extrapolation', 'Criterion C'],
    keywords: ['440', 'minutes', '10°C', 'graph reading', 'extrapolation'],
    feedbackHit: 'Correct — extrapolating the curve to 10°C gives approximately 440 minutes.',
    feedbackMiss: 'Trace a vertical line from 10°C on the x-axis to the curve (you may need to extrapolate), then read horizontally to the y-axis. The value should be around 440 minutes.',
  } as MSEntry,

  q4_g: {
    marks: 4,
    exemplar: 'Rate = number of molecules / time = 8.64 × 10⁵ / 240 = 3600 molecules min⁻¹. OR: 3600 / 60 = 60 molecules s⁻¹. Award: 1m for formula (rate = molecules/time); 1m for correct substitution; 1m for 3600 (or 60 if in s⁻¹); 1m for correct unit (molecules min⁻¹ or molecules s⁻¹).',
    keyConcepts: ['Rate of reaction', 'Calculation', 'Units', 'Criterion C'],
    keywords: ['3600', '8.64×10⁵', '240', 'molecules per minute', 'rate formula', '60 per second'],
    feedbackHit: 'Correct — 8.64 × 10⁵ ÷ 240 = 3600 molecules min⁻¹.',
    feedbackMiss: 'Rate = total molecules / total time = 8.64 × 10⁵ ÷ 240. Calculate this and give the unit (molecules min⁻¹).',
  } as MSEntry,

  // Q5 — SPF sunscreen investigation
  q5_a: {
    marks: 1,
    exemplar: 'BioBlock. (BioBlock had only 5% of beads change colour = least UV passed through = most effective protection.)',
    keyConcepts: ['Data interpretation', 'Effectiveness of sunscreen'],
    keywords: ['BioBlock', '5%', 'fewest beads changed', 'most effective', 'best blocker'],
    feedbackHit: 'Correct — BioBlock allowed only 5% of beads to change colour, indicating it blocked the most UV light.',
    feedbackMiss: 'The most effective sunscreen is the one where the FEWEST beads change colour (fewer beads changing = more UV blocked). BioBlock = 5% changed.',
  } as MSEntry,

  q5_b: {
    marks: 2,
    exemplar: 'Sunlight consists of all different wavelengths/colours/frequencies of light (visible, IR, UV, etc.) [1m]; whereas the UV LED lamp only emits a narrow band of UV light [1m]. WTTE.',
    keyConcepts: ['Electromagnetic spectrum', 'UV radiation', 'Modelling limitations'],
    keywords: ['sunlight all wavelengths', 'UV lamp narrow band', 'electromagnetic spectrum', 'not complete model'],
    feedbackHit: 'Correct — sunlight contains all wavelengths; the UV lamp only produces a narrow UV range.',
    feedbackMiss: 'Sunlight contains visible, IR, UV-A, UV-B, UV-C; a UV LED lamp only produces UV light, so it is not a complete model of solar radiation.',
  } as MSEntry,

  q5_c: {
    marks: 17,
    exemplar: 'Criterion B rubric (max 17): V (Variables, 0-4): IV = type of sunscreen ingredient in NatureGuard; DV = number/% of UV beads that changed colour; two CVs identified. E (Equipment, 0-3): suitable equipment listed. M (Method, 0-5): complete method described, could be followed by another student, producing relevant data. D (Data, 0-3): plans to use at least 3 repeats per ingredient and calculates a mean. S (Safety, 0-2): safety consideration given and related to a specific hazard (e.g. UV exposure to eyes/skin).',
    keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Fair test', 'Safety'],
    keywords: ['IV sunscreen ingredient', 'DV beads changed', 'CVs time concentration', 'equipment UV lamp', 'safety UV exposure', 'repeats mean'],
    feedbackHit: 'Well-designed investigation with all variables identified, clear method, appropriate data collection, and safety consideration.',
    feedbackMiss: 'Ensure you: (1) identify IV, DV, and at least 2 CVs; (2) list equipment; (3) give a step-by-step method; (4) plan at least 3 repeats to calculate a mean; (5) identify a specific safety hazard.',
  } as MSEntry,

  // Q6 — UV absorbance analysis: ethanolamine
  q6_a: {
    marks: 2,
    exemplar: 'Compare the number of beads that have changed colour after exposure for each chemical/ingredient in NatureGuard. [1m] If avobenzone has the lowest number of beads that have changed colour, then the research question is supported. [1m]',
    keyConcepts: ['Data interpretation', 'Supporting a research question', 'Criterion C'],
    keywords: ['compare beads changed', 'lowest number', 'avobenzone', 'research question supported'],
    feedbackHit: 'Correct — compare data per ingredient; if avobenzone gives fewest changed beads, it is the best blocker and the RQ is supported.',
    feedbackMiss: 'Rank the ingredients by number of beads changed; state the condition under which the RQ would be supported (avobenzone = lowest).',
  } as MSEntry,

  q6_b: {
    marks: 1,
    exemplar: 'Any one reasonable extension, e.g.: testing combinations of ingredients; different lengths of UV exposure; using real sunlight or different light sources; testing different concentrations of each chemical.',
    keyConcepts: ['Extending investigations', 'Experimental design'],
    keywords: ['combinations', 'different exposure time', 'sunlight', 'different concentration', 'new variable'],
    feedbackHit: 'Correct — a valid extension that introduces a new variable or condition.',
    feedbackMiss: 'An extension changes something new — a new variable (concentration, combinations) or condition (sunlight instead of UV lamp). Simply repeating is not an extension.',
  } as MSEntry,

  q6_c: {
    marks: 6,
    exemplar: 'Title: a title linking absorbance and concentration of ethanolamine. [1m] Plot two data points correctly. [1m] Plot all data points correctly. [1m] Line of best fit: starts at (0,0) and goes through all points except the anomalous point at 35 μmol dm⁻³. [1m] Axis labels: concentration of ethanolamine on x-axis and absorbance on y-axis. [1m] Unit: μmol dm⁻³ on x-axis. [1m]',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Axis labels', 'Anomalous data', 'Criterion C'],
    keywords: ['title absorbance concentration', 'LOBF from origin', 'anomalous 35', 'x-axis concentration μmol dm⁻³', 'y-axis absorbance', 'ethanolamine'],
    feedbackHit: 'Excellent graph — title, all points plotted, best-fit line through origin excluding the anomalous point, and correctly labelled axes with units.',
    feedbackMiss: 'Check: (1) title links absorbance and concentration; (2) all points plotted (note 35 μmol dm⁻³ = anomalous); (3) LOBF starts at origin and misses the 35 μmol dm⁻³ point; (4) x-axis = concentration (μmol dm⁻³); (5) y-axis = absorbance.',
  } as MSEntry,

  q6_d: {
    marks: 1,
    exemplar: 'There is an anomalous data point at 35 μmol dm⁻³ (absorbance of 0.50, which is lower than expected based on the trend). OR: only one trial / averages are not shown, reducing reliability.',
    keyConcepts: ['Reliability', 'Anomalous data', 'Criterion C'],
    keywords: ['anomalous', '35 μmol dm⁻³', 'one trial', 'no repeats', 'unreliable', 'outlier'],
    feedbackHit: 'Correct — the data point at 35 μmol dm⁻³ is anomalous (lower than expected trend), reducing reliability.',
    feedbackMiss: 'Look for the data point that does not fit the trend (35 μmol dm⁻³ at 0.50 AU). Also consider whether repeats were performed.',
  } as MSEntry,

  // Q7 — Carbon cycle and Mg-based CO₂ capture
  q7_a: {
    marks: 2,
    exemplar: 'Any one reasonable suggestion, e.g.: lack of fruit/food for local diet; loss of timber resources; loss of habitat for local species; increase in respiratory illness (more CO₂/less O₂). [1m] Justification: fewer trees → less photosynthesis → less glucose/oxygen OR more CO₂ remains in atmosphere. [1m]',
    keyConcepts: ['Deforestation impacts', 'Photosynthesis', 'Criterion D'],
    keywords: ['deforestation', 'fewer trees', 'less photosynthesis', 'less glucose', 'food', 'habitat', 'CO₂ increases'],
    feedbackHit: 'Correct — a valid community impact with justification linked to photosynthesis being reduced by fewer trees.',
    feedbackMiss: 'State one impact (e.g. food shortage, habitat loss) then justify using the photosynthesis equation: fewer plants → less photosynthesis → less oxygen / more CO₂.',
  } as MSEntry,

  q7_b: {
    marks: 2,
    exemplar: 'Mg(s) + CO₂(g) + H₂O(l) → MgCO₃(s) + H₂(g). At 25°C: magnesium is a solid, CO₂ is a gas, water is a liquid. Award 1m for one correct state symbol, 2m for all three correct.',
    keyConcepts: ['State symbols', 'Physical states', 'Equations'],
    keywords: ['Mg(s)', 'CO₂(g)', 'H₂O(l)', 'state symbols', '25°C'],
    feedbackHit: 'Correct — Mg(s), CO₂(g), H₂O(l) at 25°C.',
    feedbackMiss: 'At 25°C: magnesium is a solid (s), CO₂ is a gas (g), and water is a liquid (l).',
    blankAnswers: ['(s)', '(g)', '(l)'],
  } as MSEntry,

  q7_c: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q7_d: {
    marks: 3,
    exemplar: 'The oxidation number of magnesium has increased (from 0 to +2) [1m]. Magnesium has lost electrons [1m]. So magnesium has been oxidised [1m].',
    keyConcepts: ['Redox chemistry', 'Oxidation', 'Oxidation numbers', 'Electron transfer'],
    keywords: ['oxidation number increases', '0 to +2', 'loses electrons', 'oxidised', 'magnesium Mg'],
    feedbackHit: 'Correct — magnesium goes from 0 (in Mg metal) to +2 (in MgCO₃), losing electrons, so it is oxidised.',
    feedbackMiss: 'In Mg metal, oxidation number = 0. In MgCO₃, Mg is +2 (since CO₃²⁻ has charge −2). Increase in oxidation number = loss of electrons = oxidation.',
  } as MSEntry,

  q7_e: {
    marks: 2,
    exemplar: '2Mg + O₂ → 2MgO. Reactants (2Mg + O₂) correct [1m]; product (2MgO) correct [1m].',
    keyConcepts: ['Balancing equations', 'Magnesium combustion'],
    keywords: ['2Mg', 'O₂', '2MgO', 'balanced equation', 'magnesium combustion'],
    feedbackHit: 'Correct — 2Mg + O₂ → 2MgO is the balanced equation for magnesium combustion.',
    feedbackMiss: 'Count atoms: 2 Mg on left must give 2 Mg on right (so 2MgO). Oxygen: 2O on right (in 2MgO), so O₂ = 1 on left. Balanced: 2Mg + O₂ → 2MgO.',
    blankAnswers: ['2', '1', '2'],
  } as MSEntry,

  q7_f: {
    marks: 2,
    exemplar: 'The only solid product is MgO — no gaseous CO₂, NOx, or SOx is released [1m]; MgO is a non-toxic solid that does not contribute to atmospheric pollution or the greenhouse effect [1m]. ORA: petrol combustion releases CO₂, NOx, and SOx which are greenhouse gases / pollutants.',
    keyConcepts: ['Environmental chemistry', 'Combustion products', 'Criterion D'],
    keywords: ['only product MgO solid', 'no CO₂', 'no NOx', 'no SOx', 'non-toxic', 'not atmospheric pollutant'],
    feedbackHit: 'Correct — magnesium combustion only produces MgO (solid), no atmospheric pollutants.',
    feedbackMiss: 'Compare products: petrol → CO₂ + H₂O + NOx + SOx (all pollutants/greenhouse gases). Mg combustion → only MgO (solid, non-toxic, not a greenhouse gas).',
  } as MSEntry,

  // Q8 — Renewable energy systems essay
  q8_: {
    marks: 15,
    exemplar: 'Criterion D rubric (15 marks): Need — Why low-carbon energy alternatives are needed (1-4): 1=attempt; 2=statement about fossil fuels/CO₂; 3=statement supported by science; 4=n/a at this band. Eco — Economic impact (1-4): 1=implied for one system; 2=stated for one; 3=stated for two systems. Soc — Social impact (1-4): 1=implied; 2=stated for one; 3=stated for both. Sci — Scientific advantages/disadvantages (1-4): 1=attempt; 2=advantage or disadvantage of one system; 3=both advantage and disadvantage of one, or A/D for both; 4=advantage AND disadvantage of both systems. Con — Concluding appraisal (1-4): 1=concluding statement; 2=justified conclusion naming a best system. Maximum total = 15 marks.',
    keyConcepts: ['Criterion D', 'Renewable energy', 'CO₂ reduction', 'Scientific appraisal', 'Economic and social impact'],
    keywords: ['solar energy cost USD8', 'wind energy cost USD5', 'tidal energy cost USD15', 'no CO₂ in operation', 'economic impact', 'social impact', 'intermittent supply', 'marine habitat disruption', 'concluding appraisal'],
    feedbackHit: 'Excellent essay — clear explanation of why clean energy is needed, economic and social impacts of both systems, balanced scientific evaluation, and justified conclusion.',
    feedbackMiss: 'Structure: (1) why low-carbon energy is needed (CO₂/climate change); (2) economic impact of each system (costs given); (3) social impact (employment, community disruption); (4) scientific advantages AND disadvantages of each; (5) conclude which system is best and why.',
  } as MSEntry,
}
