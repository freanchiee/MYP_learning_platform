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
  // Q1 — Volcanoes and SiO₂ in lava
  q1_a: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q1_b: {
    marks: 2,
    exemplar: 'Row 1: Oxide = silicon dioxide (do not accept silicon oxide); Row 2: Formula = MgO. One mark each.',
    keyConcepts: ['Naming compounds', 'Chemical formulae'],
    keywords: ['silicon dioxide', 'SiO₂', 'MgO', 'magnesium oxide'],
    feedbackHit: 'Correct — silicon dioxide (SiO₂) and magnesium oxide (MgO) are the standard IUPAC names.',
    feedbackMiss: 'Take care: "silicon oxide" is not accepted — use "silicon dioxide" (Si has oxidation state +4, so it forms a dioxide).',
    blankAnswers: ['silicon dioxide', 'MgO'],
  } as MSEntry,

  q1_c: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q1_d: {
    marks: 2,
    exemplar: 'mass SiO₂ / mass sample × 100 = 1.16 / 2.00 × 100 = 58.0 % SiO₂. Award 1 mark for correct method (seen or implied), 1 mark for 58.0% (accept 58%).',
    keyConcepts: ['Percentage by mass calculation', 'Criterion C'],
    keywords: ['1.16', '2.00', '100', '58.0', 'percentage', 'SiO₂'],
    feedbackHit: 'Correct — (1.16 ÷ 2.00) × 100 = 58.0% SiO₂.',
    feedbackMiss: 'Use: % = (mass of component / total mass) × 100. Substitute: (1.16 / 2.00) × 100.',
  } as MSEntry,

  q1_e: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,

  // Q2 — Volcanic gases and noble gases
  q2_a: {
    marks: 2,
    exemplar: 'The gases (SO₂, HCl, CO₂, H₂S) dissolve in water to form acids. These acids lower the pH to approximately 0.1 (highly acidic).',
    keyConcepts: ['Acid formation from non-metal oxides', 'pH scale'],
    keywords: ['dissolve', 'water', 'acid', 'SO₂', 'HCl', 'low pH', '0.1'],
    feedbackHit: 'Correct — acidic volcanic gases dissolve in rainwater or crater lake water to form acids, lowering pH.',
    feedbackMiss: 'Think about what happens when gases like SO₂ or HCl dissolve in water — they form sulfuric acid and hydrochloric acid respectively.',
  } as MSEntry,

  q2_b: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q2_c: {
    marks: 1,
    exemplar: 'Period 3.',
    keyConcepts: ['Periodic table', 'Periods'],
    keywords: ['argon', 'period 3', 'noble gas', 'group 18'],
    feedbackHit: 'Correct — argon (Ar, atomic number 18) is in Period 3 of the periodic table.',
    feedbackMiss: 'Argon has atomic number 18. Count the periods down the periodic table — it sits in the 3rd row (Period 3).',
  } as MSEntry,

  q2_d: {
    marks: 3,
    exemplar: 'For ²²Ne: Protons = 10 (atomic number of neon); Neutrons = 22 − 10 = 12; Electrons = 10 (neutral atom). One mark per correct value.',
    keyConcepts: ['Atomic structure', 'Isotopes', 'Subatomic particles'],
    keywords: ['protons 10', 'neutrons 12', 'electrons 10', 'mass number 22', 'atomic number 10'],
    feedbackHit: 'Correct — protons = atomic number = 10; neutrons = mass number − atomic number = 22 − 10 = 12; electrons = protons = 10.',
    feedbackMiss: 'For ²²Ne: the top number (22) is the mass number (protons + neutrons); the bottom number (10) is the atomic number (= protons = electrons for a neutral atom).',
  } as MSEntry,

  q2_e: {
    marks: 2,
    exemplar: 'Neon has electron configuration 2.8: 2 electrons in the inner (first) shell and 8 electrons in the outer (second) shell. Award 1 mark for 2 in inner shell and 1 mark for 8 in outer shell.',
    keyConcepts: ['Electron configuration', 'Electron shells'],
    keywords: ['2 electrons inner', '8 electrons outer', 'neon', 'filled outer shell', 'noble gas'],
    feedbackHit: 'Correct — neon (atomic number 10) has electron configuration 2, 8: inner shell holds 2 and outer shell holds 8.',
    feedbackMiss: 'Neon has 10 electrons. The first shell holds a maximum of 2 electrons; the second shell holds up to 8. So 2 inner, 8 outer.',
  } as MSEntry,

  // Q3 — Plastics and throwaway culture
  q3_a: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q3_b: {
    marks: 2,
    exemplar: 'A = ethene (also accept eth-1-ene); B = propene (also accept prop-1-ene). One mark each.',
    keyConcepts: ['Alkene nomenclature', 'Organic chemistry'],
    keywords: ['ethene', 'propene', 'alkene', 'C=C double bond'],
    feedbackHit: 'Correct — A (CH₂=CH₂) is ethene and B (CH₂=CHCH₃) is propene.',
    feedbackMiss: 'Count the carbon atoms: A has 2 carbons (eth-) and B has 3 carbons (prop-). Both have a C=C double bond so they are alkenes (-ene suffix).',
    blankAnswers: ['ethene', 'propene'],
  } as MSEntry,

  q3_c: {
    marks: 1,
    exemplar: 'C₅H₁₂. From C₁₀H₂₂ → C₃H₆ + C₂H₄ + X: C: 10−3−2 = 5; H: 22−6−4 = 12. Do not accept pentane, CH₃(CH₂)₃CH₃.',
    keyConcepts: ['Cracking of hydrocarbons', 'Molecular formula', 'Conservation of atoms'],
    keywords: ['C₅H₁₂', 'cracking', 'decane', 'C₁₀H₂₂', 'balance atoms', 'pentane'],
    feedbackHit: 'Correct — subtracting C₃H₆ and C₂H₄ from C₁₀H₂₂ gives C₅H₁₂.',
    feedbackMiss: 'Subtract the carbons: 10 − 3 − 2 = 5. Subtract the hydrogens: 22 − 6 − 4 = 12. So X = C₅H₁₂.',
  } as MSEntry,

  q3_d: {
    marks: 1,
    exemplar: 'Calcium hydroxide neutralises the acidic gases produced during incineration (e.g. HCl, SO₂). Accept: removes toxic gases.',
    keyConcepts: ['Acid–base reactions', 'Neutralisation', 'Air pollution control'],
    keywords: ['neutralise', 'acidic gases', 'calcium hydroxide', 'Ca(OH)₂', 'HCl', 'SO₂'],
    feedbackHit: 'Correct — Ca(OH)₂ is a base that neutralises acidic gases such as HCl and SO₂ produced when plastics containing chlorine or sulfur are incinerated.',
    feedbackMiss: 'Think about what type of substance Ca(OH)₂ is (a base/alkali) and what gases from burning plastics need to be removed (acids).',
  } as MSEntry,

  q3_e: {
    marks: 1,
    exemplar: 'Boiling. Accept: water turning into steam. Do not accept evaporation.',
    keyConcepts: ['Physical changes', 'States of matter', 'Boiling'],
    keywords: ['boiling', 'water to steam', 'liquid to gas', 'thermovaporization'],
    feedbackHit: 'Correct — the physical change from liquid water to steam (gas) at 100°C is boiling.',
    feedbackMiss: 'The thermovaporization process uses hot water converting to high-pressure steam. The physical change of liquid to gas at a specific temperature is boiling (not evaporation).',
  } as MSEntry,

  q3_f: {
    marks: 1,
    exemplar: 'Any one reasonable environmental regulation, e.g.: waste should not contain materials that could produce hazardous/toxic/explosive substances during incineration; atmospheric emissions should be controlled using proper equipment (filters/scrubbers); temperature of combustion must reach a minimum level.',
    keyConcepts: ['Environmental regulations', 'Incineration'],
    keywords: ['hazardous', 'toxic', 'emissions controlled', 'filters', 'scrubbers', 'regulation'],
    feedbackHit: 'Correct — a valid environmental regulation for incineration.',
    feedbackMiss: 'Think about what harmful outputs come from incineration (toxic emissions, heavy metals, dioxins) and how regulations might limit them.',
  } as MSEntry,

  q3_g: {
    marks: 3,
    exemplar: 'Order (increasing particle size): A — C — B. [1m] A had the fastest rate of biodegradability/breakdown. [1m] Rate of reaction increases with decreasing particle size (or: smaller particles → higher surface area → faster reaction). [1m] Accept correct decreasing order only if explained in words.',
    keyConcepts: ['Surface area and reaction rate', 'Biodegradation', 'Data interpretation'],
    keywords: ['A < C < B', 'surface area', 'particle size', 'biodegradation rate', 'faster reaction'],
    feedbackHit: 'Correct — A has the smallest particles (highest surface area, fastest biodegradation); B has the largest particles (slowest biodegradation).',
    feedbackMiss: 'From the graph, A biodegrades fastest and B slowest. Smaller particles have more surface area for microbial attack, so A must have the smallest particles.',
  } as MSEntry,

  // Q4 — Glow sticks and chemiluminescence
  q4_a: {
    marks: 2,
    exemplar: 'A catalyst is a chemical that speeds up the rate of a reaction (1m) without itself being used up/consumed (1m). OR: it lowers the activation energy of the reaction without being permanently changed.',
    keyConcepts: ['Catalysts', 'Activation energy', 'Reaction rate'],
    keywords: ['speeds up', 'rate of reaction', 'not used up', 'activation energy', 'catalyst'],
    feedbackHit: 'Correct — a catalyst increases reaction rate by lowering activation energy and is not consumed.',
    feedbackMiss: 'A catalyst does two things: (1) increases the rate / lowers activation energy, and (2) is not used up in the process. You need both points for full marks.',
  } as MSEntry,

  q4_b: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,

  q4_c: {
    marks: 1,
    exemplar: '65°C. Accept 65 ± 2°C.',
    keyConcepts: ['Reading measuring instruments', 'Temperature measurement'],
    keywords: ['65', '65°C', 'thermometer reading', 'temperature'],
    feedbackHit: 'Correct — the thermometer reads 65°C.',
    feedbackMiss: 'Read the scale carefully. The adjacent thermometers show 50°C and (the next unlabelled one), so count the scale divisions carefully.',
  } as MSEntry,

  q4_d: {
    marks: 4,
    exemplar: 'IV: temperature (of the water/beaker) [1m]; DV: time taken for the glow stick to stop glowing [1m]; CV1: type or colour of glow stick [1m]; CV2: volume of water / time to equilibrate [1m]. Do not accept "amount of water" for CV. Award any two reasonable CVs.',
    keyConcepts: ['Variables', 'Fair test', 'Criterion B'],
    keywords: ['IV temperature', 'DV time', 'CV type of glow stick', 'CV volume of water', 'controlled variables', 'independent', 'dependent'],
    feedbackHit: 'Correct — temperature is varied (IV), time the glow stick glows is measured (DV), and type of glow stick and volume of water are kept constant (CVs).',
    feedbackMiss: 'IV = what you change; DV = what you measure; CVs = what you keep the same to make it a fair test.',
  } as MSEntry,

  q4_e: {
    marks: 3,
    exemplar: 'If the temperature increases, [1m] then the length of time the glow stick will glow will decrease, [1m] because the rate of the chemical reaction increases (at higher temperatures, molecules have more energy and collide more frequently). [1m]',
    keyConcepts: ['Hypothesis formulation', 'Effect of temperature on reaction rate', 'Criterion B'],
    keywords: ['if temperature increases', 'then glow time decreases', 'because reaction rate', 'collision theory'],
    feedbackHit: 'Correct — a valid If/Then/Because hypothesis with scientific reasoning about temperature and reaction rate.',
    feedbackMiss: 'Structure: If [change in IV] then [expected change in DV] because [scientific reasoning]. The Because must link temperature increase to increased reaction rate.',
  } as MSEntry,

  q4_f: {
    marks: 2,
    exemplar: '330 ± 10 minutes (accept any value in the range 320–340 min). Award 1 mark for correct reading from graph, 1 mark for units (minutes or min).',
    keyConcepts: ['Graph reading', 'Interpolation', 'Criterion C'],
    keywords: ['330', 'minutes', '15°C', 'graph reading', 'interpolation'],
    feedbackHit: 'Correct — reading from the curve at 15°C gives approximately 330 minutes.',
    feedbackMiss: 'Trace a vertical line from 15°C on the x-axis until it meets the curve, then read horizontally to the y-axis. The value should be around 330 minutes.',
  } as MSEntry,

  q4_g: {
    marks: 4,
    exemplar: 'Rate = number of molecules / time = 6.58 × 10⁵ / 260 = 2530 molecules min⁻¹ (accept 2530 ± 5 molecules min⁻¹). OR: 2530 / 60 = 42.2 molecules s⁻¹. Award: 1m for formula (rate = molecules/time, seen or implied); 1m for correct substitution; 1m for 2530 (or 42.2); 1m for correct unit (molecules min⁻¹ or molecules s⁻¹) — award the unit mark separately.',
    keyConcepts: ['Rate of reaction', 'Calculation with large numbers', 'Units', 'Criterion C'],
    keywords: ['2530', '6.58×10⁵', '260', 'molecules per minute', 'rate formula', '42.2 per second'],
    feedbackHit: 'Correct — 6.58 × 10⁵ ÷ 260 = 2530 molecules min⁻¹.',
    feedbackMiss: 'Rate = total molecules / total time = 6.58 × 10⁵ ÷ 260. Calculate this and give the unit (molecules min⁻¹).',
  } as MSEntry,

  // Q5 — Sunscreen and UV protection
  q5_a: {
    marks: 1,
    exemplar: 'Aurum. (Aurum had only 10% of beads change colour = least UV passed through = most effective protection.)',
    keyConcepts: ['Data interpretation', 'Effectiveness of sunscreen'],
    keywords: ['Aurum', '10%', 'fewest beads changed', 'most effective', 'best blocker'],
    feedbackHit: 'Correct — Aurum allowed only 10% of beads to change colour, indicating it blocked the most UV light.',
    feedbackMiss: 'The most effective sunscreen is the one where the FEWEST beads change colour (because fewer beads changing = more UV blocked). Aurum = 10% changed.',
  } as MSEntry,

  q5_b: {
    marks: 2,
    exemplar: 'Sunlight consists of all different wavelengths/colours/frequencies of light (visible, IR, UV, etc.) [1m]; whereas the UV lamp only emits a narrow band of light (UVA only) [1m]. WTTE (words to that effect).',
    keyConcepts: ['Electromagnetic spectrum', 'UV radiation', 'Modelling limitations'],
    keywords: ['sunlight all wavelengths', 'UV lamp narrow band', 'UVA only', 'electromagnetic spectrum'],
    feedbackHit: 'Correct — sunlight contains all wavelengths; the UV lamp only produces a narrow range.',
    feedbackMiss: 'Think about the electromagnetic spectrum: sunlight contains visible, IR, UV-A, UV-B, UV-C; a UV lamp only produces UV light (usually UVA), so it is not a complete model of solar radiation.',
  } as MSEntry,

  q5_c: {
    marks: 17,
    exemplar: 'Criterion B rubric (max 17): V (Variables, 0-4): IV = type/brand of sunscreen ingredient; DV = number/% of UV beads that changed colour; two CVs identified. E (Equipment, 0-3): suitable equipment to monitor variables (UV lamp, UV beads, ruler, thermometer). M (Method, 0-5): complete method described, could be followed by another student, producing relevant data. D (Data, 0-3): plans to use at least 3 samples per ingredient and calculates a mean. S (Safety, 0-2): safety consideration given and related to a specific hazard (e.g. UV exposure to eyes/skin).',
    keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Fair test', 'Safety'],
    keywords: ['IV sunscreen ingredient', 'DV beads changed', 'CVs time concentration', 'equipment UV lamp', 'safety UV exposure', 'repeats mean'],
    feedbackHit: 'Well-designed investigation with all variables identified, clear method, appropriate data collection, and safety consideration.',
    feedbackMiss: 'Ensure you: (1) identify IV, DV, and at least 2 CVs; (2) list equipment; (3) give a step-by-step method another student could follow; (4) plan at least 3 repeats to calculate a mean; (5) identify a specific safety hazard.',
  } as MSEntry,

  // Q6 — Sunscreen data analysis and myporium
  q6_a: {
    marks: 2,
    exemplar: 'Compare the number of beads that have changed colour after exposure for each chemical/ingredient. [1m] If titanium dioxide has the lowest number of beads that have changed colour, then the research question is supported. [1m]',
    keyConcepts: ['Data interpretation', 'Supporting a research question', 'Criterion C'],
    keywords: ['compare beads changed', 'lowest number', 'titanium dioxide', 'research question supported'],
    feedbackHit: 'Correct — compare data per ingredient; if TiO₂ gives fewest changed beads, it is the best blocker and the RQ is supported.',
    feedbackMiss: 'Outline a comparison method: rank the ingredients by number of beads changed, then state the condition under which the RQ would be supported (TiO₂ = lowest).',
  } as MSEntry,

  q6_b: {
    marks: 1,
    exemplar: 'Any one reasonable extension, e.g.: testing combinations of ingredients/compounds; different lengths of time of exposure; using real sunlight/different light sources; testing different concentrations of each chemical. Do not accept repeating the same experiment.',
    keyConcepts: ['Extending investigations', 'Experimental design'],
    keywords: ['combinations', 'different time', 'sunlight', 'different concentration', 'new variable'],
    feedbackHit: 'Correct — a valid extension that goes beyond the original investigation.',
    feedbackMiss: 'An extension changes something new — either a new variable (concentration, combinations) or a different condition (sunlight instead of UV lamp). Simply repeating is not an extension.',
  } as MSEntry,

  q6_c: {
    marks: 6,
    exemplar: 'Title: a title that links absorbance and concentration of chemical X (myporium). [1m] Plot two data points correctly. [1m] Plot all data points correctly. [1m] Line of best fit: starts at (0,0) and goes through all points except the anomalous point at 70 μmol dm⁻³. [1m] Axis labels: concentration of myporium on x-axis and absorbance on y-axis. [1m] Unit of concentration: μmol dm⁻³. [1m] Ignore any units of absorbance.',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Axis labels', 'Anomalous data', 'Criterion C'],
    keywords: ['title absorbance concentration', 'LOBF from origin', 'anomalous 70', 'x-axis concentration μmol dm⁻³', 'y-axis absorbance'],
    feedbackHit: 'Excellent graph — title, all points plotted, best-fit line through origin excluding the anomalous point, and correctly labelled axes with units.',
    feedbackMiss: 'Check: (1) title links absorbance and concentration; (2) all points plotted (note 70 μmol dm⁻³ = anomalous); (3) LOBF starts at origin and misses the 70 μmol dm⁻³ point; (4) x-axis = concentration (μmol dm⁻³); (5) y-axis = absorbance.',
  } as MSEntry,

  q6_d: {
    marks: 1,
    exemplar: 'There is an anomalous data point at 70 μmol dm⁻³ (absorbance of 0.55, which is lower than expected based on the trend). OR: there is only one trial / averages are not plotted, reducing reliability. No ecf from incorrect plotting in part (c).',
    keyConcepts: ['Reliability', 'Anomalous data', 'Criterion C'],
    keywords: ['anomalous', '70 μmol dm⁻³', 'one trial', 'no repeats', 'unreliable', 'outlier'],
    feedbackHit: 'Correct — the data point at 70 μmol dm⁻³ is anomalous (lower than the trend), reducing reliability.',
    feedbackMiss: 'Look for the data point that does not fit the trend (70 μmol dm⁻³ at 0.55 AU). Also consider whether repeats were performed.',
  } as MSEntry,

  // Q7 — Climate change, carbon cycle, and redox
  q7_a: {
    marks: 2,
    exemplar: 'Any one reasonable suggestion, e.g.: lack of fruit/food for local diet; lack of medical products from plants; loss of species/habitat; impact on respiratory health (more CO₂/less O₂). [1m] Justification: (because) fewer plants, so less photosynthesis takes place; less glucose synthesised; or increase in the level of carbon dioxide. [1m]',
    keyConcepts: ['Deforestation impacts', 'Photosynthesis', 'Criterion D', 'Community impact'],
    keywords: ['deforestation', 'fewer plants', 'less photosynthesis', 'less glucose', 'food', 'habitat', 'CO₂ increases'],
    feedbackHit: 'Correct — a valid community impact with justification linked to photosynthesis.',
    feedbackMiss: 'State one impact (e.g. food shortage, habitat loss) then justify using the photosynthesis equation: fewer plants → less photosynthesis → less glucose/oxygen for the community.',
  } as MSEntry,

  q7_b: {
    marks: 2,
    exemplar: 'Fe(s) + CO₂(g) + H₂O(l) → FeCO₃(s) + H₂(g). At 25°C: iron is a solid, CO₂ is a gas, water is a liquid. Award 1m for one correct state symbol, 2m for all correct. Do not accept H₂O(aq).',
    keyConcepts: ['State symbols', 'Physical states', 'Equations'],
    keywords: ['Fe(s)', 'CO₂(g)', 'H₂O(l)', 'state symbols', '25°C', 'solid gas liquid'],
    feedbackHit: 'Correct — Fe(s), CO₂(g), H₂O(l) at 25°C.',
    feedbackMiss: 'At 25°C: iron is a solid (s), CO₂ is a gas (g), and water is a liquid (l) — not (aq) which implies dissolved in water.',
    blankAnswers: ['(s)', '(g)', '(l)'],
  } as MSEntry,

  q7_c: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q7_d: {
    marks: 3,
    exemplar: 'The oxidation number of iron has increased (from 0 to +2) [1m]. Iron has lost electrons [1m]. So iron has been oxidised [1m].',
    keyConcepts: ['Redox chemistry', 'Oxidation', 'Oxidation numbers', 'Electron transfer'],
    keywords: ['oxidation number increases', '0 to +2', 'loses electrons', 'oxidised', 'iron Fe'],
    feedbackHit: 'Correct — iron goes from 0 (in Fe metal) to +2 (in FeCO₃), losing electrons, so it is oxidised.',
    feedbackMiss: 'In Fe metal, iron has oxidation number 0. In FeCO₃, iron is +2 (since CO₃²⁻ has charge −2). Increase in oxidation number = loss of electrons = oxidation.',
  } as MSEntry,

  q7_e: {
    marks: 2,
    exemplar: '2H₂ + O₂ → 2H₂O. All reactants correct (2H₂ + O₂) [1m]; product correct (2H₂O) [1m]. Do not accept O₂ without coefficient (implies 1, which is correct but must be stated). Accept if O₂ shown as ?1? = O₂.',
    keyConcepts: ['Balancing equations', 'Combustion of hydrogen'],
    keywords: ['2H₂', 'O₂', '2H₂O', 'balanced equation', 'hydrogen combustion'],
    feedbackHit: 'Correct — 2H₂ + O₂ → 2H₂O is the balanced equation for hydrogen combustion.',
    feedbackMiss: 'Count atoms: 4H on left (2×H₂), must have 4H on right (2×H₂O). Oxygen: 2O on right, so O₂ = 1 on left. Balanced: 2H₂ + O₂ → 2H₂O.',
    blankAnswers: ['2', '1', '2'],
  } as MSEntry,

  q7_f: {
    marks: 2,
    exemplar: 'Only product is water (no CO₂, no NOx, no SOx is produced) [1m]; water is non-toxic/not a pollutant [1m]. ORA: combustion of petrol produces CO₂/NOx/SOx which are pollutants — accept for the second mark.',
    keyConcepts: ['Environmental chemistry', 'Combustion products', 'Criterion D'],
    keywords: ['only product water', 'no CO₂', 'no NOx', 'no SOx', 'non-toxic', 'not pollutant'],
    feedbackHit: 'Correct — hydrogen combustion only produces water, which is non-toxic and not an atmospheric pollutant.',
    feedbackMiss: 'Compare products: petrol combustion → CO₂ + H₂O + NOx + SOx (all pollutants/greenhouse gases). Hydrogen combustion → only H₂O (not a pollutant).',
  } as MSEntry,

  // Q8 — CO₂ reduction systems essay
  q8_: {
    marks: 15,
    exemplar: 'Criterion D rubric (15 marks): Carb — Why there is a need for CO₂ sinks (1-4): 1=attempt; 2=statement about need; 3=statement supported by science; 4=not explicitly used at this band. Eco — Economic impact (1-4): 1=implied for one system; 2=stated for one; 3=stated for both. Soc — Social impact (1-4): 1=implied; 2=stated for one; 3=stated for both. Sci — Scientific advantages/disadvantages (1-4): 1=attempt; 2=advantage or disadvantage of one; 3=advantage and disadvantage of one system or an advantage/disadvantage of both; 4=advantage AND disadvantage of both. Con — Concluding appraisal (1-4): 1=concluding statement; 2=concluding choice with justification. Maximum total = 15 marks.',
    keyConcepts: ['Criterion D', 'CO₂ sinks', 'Climate change', 'Scientific appraisal', 'Economic and social impact'],
    keywords: ['CO₂ sink', 'greenhouse effect', 'Ferrock', 'carbon capture CDC', 'desert conversion', 'economic cost', 'social impact', 'scientific advantage', 'concluding appraisal'],
    feedbackHit: 'Excellent essay — clear need for CO₂ sinks, economic and social impacts of both chosen systems, balanced scientific evaluation, and justified conclusion.',
    feedbackMiss: 'Structure your essay: (1) why CO₂ sinks are needed (climate change evidence); (2) economic impact of each system (costs given); (3) social impact of each system (employment, community); (4) scientific advantages AND disadvantages of each; (5) conclude which system is best and why.',
  } as MSEntry,
}
