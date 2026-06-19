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
  // Q1 — Hydrothermal-vent chimney silica
  q1_a: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q1_b: {
    marks: 2,
    exemplar: 'Row 1: Oxide = silicon dioxide (do not accept silicon oxide); Row 2: Formula = ZnO. One mark each.',
    keyConcepts: ['Naming compounds', 'Chemical formulae'],
    keywords: ['silicon dioxide', 'SiO₂', 'ZnO', 'zinc oxide'],
    feedbackHit: 'Correct — silicon dioxide (SiO₂) and zinc oxide (ZnO) are the standard IUPAC names/formulae.',
    feedbackMiss: 'Take care: "silicon oxide" is not accepted — use "silicon dioxide" (Si is +4, so it forms a dioxide). Zinc oxide is ZnO (Zn²⁺ with O²⁻).',
    blankAnswers: ['silicon dioxide', 'ZnO'],
  } as MSEntry,

  q1_c: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,

  q1_d: {
    marks: 2,
    exemplar: 'mass SiO₂ / mass sample × 100 = 1.31 / 2.00 × 100 = 65.5 % SiO₂. Award 1 mark for correct method (seen or implied), 1 mark for 65.5% (accept 65.5).',
    keyConcepts: ['Percentage by mass calculation', 'Criterion C'],
    keywords: ['1.31', '2.00', '100', '65.5', 'percentage', 'SiO₂'],
    feedbackHit: 'Correct — (1.31 ÷ 2.00) × 100 = 65.5% SiO₂.',
    feedbackMiss: 'Use: % = (mass of component / total mass) × 100. Substitute: (1.31 / 2.00) × 100.',
  } as MSEntry,

  q1_e: {
    type: 'mcq',
    correct: 2,
  } as MCQEntry,

  // Q2 — Vent gases and noble gases
  q2_a: {
    marks: 2,
    exemplar: 'The acidic gases (H₂S, CO₂) dissolve in the seawater to form acids. These acids lower the pH to approximately 1.5 (highly acidic).',
    keyConcepts: ['Acid formation from non-metal compounds', 'pH scale'],
    keywords: ['dissolve', 'water', 'acid', 'H₂S', 'CO₂', 'low pH', '1.5'],
    feedbackHit: 'Correct — acidic vent gases dissolve in seawater to form acids, lowering the pH.',
    feedbackMiss: 'Think about what happens when gases like H₂S or CO₂ dissolve in water — they form acidic solutions, which lowers the pH.',
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
    feedbackMiss: 'For ⁸⁴Kr: the mass number (84) = protons + neutrons; the atomic number (36) = protons = electrons for a neutral atom. So neutrons = 84 − 36 = 48.',
  } as MSEntry,

  q2_e: {
    marks: 2,
    exemplar: 'Argon (atomic number 18) has electron configuration 2.8.8: 2 in the first shell, 8 in the second shell and 8 in the outer shell. Award 1 mark for 2 in the first shell, and 1 mark for 8 in each of the second and outer shells.',
    keyConcepts: ['Electron configuration', 'Electron shells'],
    keywords: ['2 first shell', '8 second shell', '8 outer shell', 'argon', '2.8.8', 'noble gas'],
    feedbackHit: 'Correct — argon (18 electrons) has configuration 2.8.8: 2 in the first shell, 8 in the second and 8 in the outer.',
    feedbackMiss: 'Argon has 18 electrons. Fill shells in order: first shell 2, second shell 8, leaving 8 for the outer shell → 2.8.8.',
  } as MSEntry,

  // Q3 — Algae bioplastics
  q3_a: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q3_b: {
    marks: 2,
    exemplar: 'A = ethene (also accept eth-1-ene); B = butene (also accept but-1-ene). One mark each.',
    keyConcepts: ['Alkene nomenclature', 'Organic chemistry'],
    keywords: ['ethene', 'butene', 'alkene', 'C=C double bond'],
    feedbackHit: 'Correct — A (CH₂=CH₂) is ethene and B (CH₂=CHCH₂CH₃) is butene.',
    feedbackMiss: 'Count the carbon atoms: A has 2 carbons (eth-) and B has 4 carbons (but-). Both have a C=C double bond, so they are alkenes (-ene suffix).',
    blankAnswers: ['ethene', 'butene'],
  } as MSEntry,

  q3_c: {
    marks: 1,
    exemplar: 'C₆H₁₄. From C₁₂H₂₆ → C₂H₄ + C₄H₈ + X: C: 12 − 2 − 4 = 6; H: 26 − 4 − 8 = 14. Do not accept hexane / a structural formula.',
    keyConcepts: ['Cracking of hydrocarbons', 'Molecular formula', 'Conservation of atoms'],
    keywords: ['C₆H₁₄', 'cracking', 'dodecane', 'C₁₂H₂₆', 'balance atoms', 'hexane'],
    feedbackHit: 'Correct — subtracting C₂H₄ and C₄H₈ from C₁₂H₂₆ gives C₆H₁₄.',
    feedbackMiss: 'Subtract the carbons: 12 − 2 − 4 = 6. Subtract the hydrogens: 26 − 4 − 8 = 14. So X = C₆H₁₄.',
  } as MSEntry,

  q3_d: {
    marks: 1,
    exemplar: 'Calcium hydroxide neutralises the acidic gases produced during incineration (e.g. HCl, SO₂). Accept: removes acidic/toxic gases.',
    keyConcepts: ['Acid–base reactions', 'Neutralisation', 'Air pollution control'],
    keywords: ['neutralise', 'acidic gases', 'calcium hydroxide', 'Ca(OH)₂', 'HCl', 'SO₂'],
    feedbackHit: 'Correct — Ca(OH)₂ is a base that neutralises acidic gases such as HCl and SO₂ produced when plastics are burned.',
    feedbackMiss: 'Think about what type of substance Ca(OH)₂ is (a base/alkali) and what gases from burning plastics need to be removed (acidic gases).',
  } as MSEntry,

  q3_e: {
    marks: 1,
    exemplar: 'Boiling. Accept: water turning into steam. Do not accept evaporation.',
    keyConcepts: ['Physical changes', 'States of matter', 'Boiling'],
    keywords: ['boiling', 'water to steam', 'liquid to gas', 'boiler'],
    feedbackHit: 'Correct — the physical change from liquid water to steam (gas) in the boiler is boiling.',
    feedbackMiss: 'The boiler heats liquid water until it turns to high-pressure steam. The change of liquid to gas at a fixed temperature is boiling (not evaporation).',
  } as MSEntry,

  q3_f: {
    marks: 1,
    exemplar: 'Any one reasonable environmental regulation, e.g.: waste should not contain materials that could produce hazardous/toxic substances on burning; atmospheric emissions should be controlled with filters/scrubbers; the combustion temperature must reach a minimum level.',
    keyConcepts: ['Environmental regulations', 'Incineration'],
    keywords: ['hazardous', 'toxic', 'emissions controlled', 'filters', 'scrubbers', 'regulation'],
    feedbackHit: 'Correct — a valid environmental regulation for incineration.',
    feedbackMiss: 'Think about what harmful outputs come from incineration (toxic emissions, heavy metals, dioxins) and how a regulation could limit them.',
  } as MSEntry,

  q3_g: {
    marks: 3,
    exemplar: 'Order (increasing particle size): A — C — B. [1m] A had the fastest rate of biodegradation. [1m] Rate of reaction increases with decreasing particle size (smaller particles → higher surface area → faster reaction). [1m] Accept correct decreasing order only if explained in words.',
    keyConcepts: ['Surface area and reaction rate', 'Biodegradation', 'Data interpretation'],
    keywords: ['A < C < B', 'surface area', 'particle size', 'biodegradation rate', 'faster reaction'],
    feedbackHit: 'Correct — A has the smallest particles (highest surface area, fastest biodegradation); B has the largest particles (slowest).',
    feedbackMiss: 'From the graph, A breaks down fastest and B slowest. Smaller particles have more surface area for microbes, so A must have the smallest particles.',
  } as MSEntry,

  // Q4 — Diver light sticks
  q4_a: {
    marks: 2,
    exemplar: 'A catalyst speeds up the rate of the reaction (1m) without itself being used up/consumed (1m). OR: it lowers the activation energy of the reaction without being permanently changed.',
    keyConcepts: ['Catalysts', 'Activation energy', 'Reaction rate'],
    keywords: ['speeds up', 'rate of reaction', 'not used up', 'activation energy', 'copper catalyst'],
    feedbackHit: 'Correct — a catalyst increases reaction rate by lowering activation energy and is not consumed.',
    feedbackMiss: 'A catalyst does two things: (1) increases rate / lowers activation energy, and (2) is not used up. You need both points for full marks.',
  } as MSEntry,

  q4_b: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,

  q4_c: {
    marks: 1,
    exemplar: '45°C. Accept 45 ± 2°C.',
    keyConcepts: ['Reading measuring instruments', 'Temperature measurement'],
    keywords: ['45', '45°C', 'thermometer reading', 'temperature'],
    feedbackHit: 'Correct — the thermometer reads 45°C (halfway between the 40 and 50 gridlines).',
    feedbackMiss: 'Read the scale carefully — the liquid sits halfway between the 40°C and 50°C gridlines, so the reading is 45°C.',
  } as MSEntry,

  q4_d: {
    marks: 4,
    exemplar: 'IV: temperature of the water bath [1m]; DV: time the light stick glows / glow time [1m]; CV1: type or brand of light stick [1m]; CV2: volume of water in the bath / time left to equilibrate [1m]. Do not accept "amount of water" for CV. Award any two reasonable CVs.',
    keyConcepts: ['Variables', 'Fair test', 'Criterion B'],
    keywords: ['IV temperature', 'DV glow time', 'CV type of light stick', 'CV volume of water', 'controlled variables', 'independent', 'dependent'],
    feedbackHit: 'Correct — water temperature is varied (IV), glow time is measured (DV), and type of light stick and volume of water are kept constant (CVs).',
    feedbackMiss: 'IV = what you change (temperature); DV = what you measure (glow time); CVs = what you keep the same to make it a fair test.',
  } as MSEntry,

  q4_e: {
    marks: 3,
    exemplar: 'If the water temperature increases, [1m] then the length of time the light stick glows will decrease, [1m] because the rate of the chemical reaction increases (particles have more energy and collide more frequently/successfully at higher temperature). [1m]',
    keyConcepts: ['Hypothesis formulation', 'Effect of temperature on reaction rate', 'Criterion B'],
    keywords: ['if temperature increases', 'then glow time decreases', 'because reaction rate', 'collision theory'],
    feedbackHit: 'Correct — a valid If/Then/Because hypothesis linking temperature to reaction rate.',
    feedbackMiss: 'Structure: If [change in IV] then [expected change in DV] because [scientific reasoning]. The Because must link higher temperature to a faster reaction.',
  } as MSEntry,

  q4_f: {
    marks: 2,
    exemplar: 'Approximately 405 minutes (accept any value in the range 390–420 min). Award 1 mark for a sensible extrapolation of the curve below 10°C, 1 mark for units (minutes / min).',
    keyConcepts: ['Graph reading', 'Extrapolation', 'Criterion C'],
    keywords: ['405', 'minutes', '5°C', 'extrapolation', 'graph reading'],
    feedbackHit: 'Correct — extending the curve below 10°C gives roughly 405 minutes at 5°C.',
    feedbackMiss: 'The curve rises as temperature falls. Extend it past 10°C (360 min) down to 5°C — the glow time should be a little over 400 minutes.',
  } as MSEntry,

  q4_g: {
    marks: 4,
    exemplar: 'Rate = number of molecules / time = 7.92 × 10⁵ / 240 = 3300 molecules min⁻¹ (accept 3300 ± 5). OR 3300 / 60 = 55 molecules s⁻¹. Award: 1m for formula (rate = molecules/time, seen or implied); 1m for correct substitution; 1m for 3300 (or 55); 1m for correct unit (molecules min⁻¹ or molecules s⁻¹).',
    keyConcepts: ['Rate of reaction', 'Calculation with large numbers', 'Units', 'Criterion C'],
    keywords: ['3300', '7.92×10⁵', '240', 'molecules per minute', 'rate formula', '55 per second'],
    feedbackHit: 'Correct — 7.92 × 10⁵ ÷ 240 = 3300 molecules min⁻¹.',
    feedbackMiss: 'Rate = total molecules / total time = 7.92 × 10⁵ ÷ 240. Calculate this and give the unit (molecules min⁻¹).',
  } as MSEntry,

  // Q5 — Antifouling coating design
  q5_a: {
    marks: 1,
    exemplar: 'Hull-Guard. (Hull-Guard had only 5% of the tile covered by algae = best protection.)',
    keyConcepts: ['Data interpretation', 'Effectiveness of coating'],
    keywords: ['Hull-Guard', '5%', 'least algae cover', 'most effective', 'best protector'],
    feedbackHit: 'Correct — Hull-Guard allowed only 5% algae cover, so it protected the tile best.',
    feedbackMiss: 'The most effective coating is the one with the LEAST algae cover (less growth = better protection). Hull-Guard = 5% covered.',
  } as MSEntry,

  q5_b: {
    marks: 2,
    exemplar: 'Real seawater contains many different fouling species, varying temperature, currents and changing light [1m]; whereas the sealed tank has only one algae species in still water under fixed conditions [1m], so it cannot represent the full range of organisms/conditions a real hull meets. WTTE.',
    keyConcepts: ['Modelling limitations', 'Marine biofouling', 'Validity'],
    keywords: ['real seawater many species', 'currents temperature light', 'tank one species still water', 'not realistic model'],
    feedbackHit: 'Correct — a tank with one species in still water does not reproduce the many organisms and changing conditions of real seawater.',
    feedbackMiss: 'Compare the model to reality: open seawater has many fouling species, currents, changing temperature and light; a sealed single-species tank does not.',
  } as MSEntry,

  q5_c: {
    marks: 17,
    exemplar: 'Criterion B rubric (max 17): V (Variables, 0-4): IV = the individual active compound being tested (copper oxide / zinc pyrithione / silicone polymer); DV = % of tile area covered by algae after a fixed time; two CVs identified (light, temperature, time, algae concentration, tile area). E (Equipment, 0-3): suitable equipment named (tank, identical tiles, the active compounds, algae culture, lamp, grid/ImageJ to measure % cover, balance). M (Method, 0-5): full reproducible method — coat identical tiles with each compound at the same concentration, expose them in identical tanks for the same time, then measure % cover. D (Data, 0-3): at least 3 tiles per compound and a calculated mean. S (Safety, 0-2): a specific hazard addressed (biocides are toxic/irritant — wear gloves, avoid skin contact, dispose of waste safely).',
    keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Fair test', 'Safety'],
    keywords: ['IV active compound', 'DV % algae cover', 'CVs light time temperature', 'equipment tiles tank lamp', 'safety toxic biocide gloves', 'repeats mean'],
    feedbackHit: 'Well-designed investigation: all variables identified, clear reproducible method, repeats with a mean, and a specific safety consideration.',
    feedbackMiss: 'Ensure you: (1) identify IV (active compound), DV (% algae cover) and ≥2 CVs; (2) list equipment; (3) give a step-by-step method; (4) plan ≥3 repeats and a mean; (5) state a specific hazard (the biocides are toxic).',
  } as MSEntry,

  // Q6 — Azurine data analysis
  q6_a: {
    marks: 2,
    exemplar: 'Compare the percentage of tile area covered by algae for each individual ingredient. [1m] If copper oxide gives the lowest % algae cover, then the research question is supported. [1m]',
    keyConcepts: ['Data interpretation', 'Supporting a research question', 'Criterion C'],
    keywords: ['compare % algae cover', 'lowest cover', 'copper oxide', 'research question supported'],
    feedbackHit: 'Correct — compare data per ingredient; if copper oxide gives the least algae cover, it is the best protector and the RQ is supported.',
    feedbackMiss: 'Outline a comparison: rank the ingredients by % algae cover, then state the condition under which the RQ is supported (copper oxide = lowest cover).',
  } as MSEntry,

  q6_b: {
    marks: 1,
    exemplar: 'Any one reasonable extension, e.g.: test combinations of ingredients; test different concentrations of each compound; use real seawater / longer exposure time; test against different fouling species. Do not accept simply repeating the same experiment.',
    keyConcepts: ['Extending investigations', 'Experimental design'],
    keywords: ['combinations', 'different concentration', 'real seawater', 'longer time', 'new variable'],
    feedbackHit: 'Correct — a valid extension that goes beyond the original investigation.',
    feedbackMiss: 'An extension changes something new — a new variable (concentration, combinations) or a new condition (real seawater). Simply repeating is not an extension.',
  } as MSEntry,

  q6_c: {
    marks: 6,
    exemplar: 'Title: a title that links absorbance and concentration of azurine. [1m] Plot two data points correctly. [1m] Plot all data points correctly. [1m] Line of best fit: starts at (0,0) and goes through all points except the anomalous point at 70 μmol dm⁻³. [1m] Axis labels: concentration of azurine on the x-axis and absorbance on the y-axis. [1m] Unit of concentration: μmol dm⁻³. [1m] Ignore any unit of absorbance.',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Axis labels', 'Anomalous data', 'Criterion C'],
    keywords: ['title absorbance concentration', 'LOBF from origin', 'anomalous 70', 'x-axis concentration μmol dm⁻³', 'y-axis absorbance'],
    feedbackHit: 'Excellent graph — title, all points plotted, best-fit line from the origin excluding the anomalous point, and correctly labelled axes with units.',
    feedbackMiss: 'Check: (1) title links absorbance and concentration; (2) all points plotted (70 μmol dm⁻³ = anomalous); (3) LOBF from origin missing the 70 point; (4) x-axis = concentration (μmol dm⁻³); (5) y-axis = absorbance.',
  } as MSEntry,

  q6_d: {
    marks: 1,
    exemplar: 'There is an anomalous data point at 70 μmol dm⁻³ (absorbance 0.52, lower than the trend predicts). OR: there is only one trial / no averages are plotted, which reduces reliability. No ecf from incorrect plotting in part (c).',
    keyConcepts: ['Reliability', 'Anomalous data', 'Criterion C'],
    keywords: ['anomalous', '70 μmol dm⁻³', 'one trial', 'no repeats', 'unreliable', 'outlier'],
    feedbackHit: 'Correct — the point at 70 μmol dm⁻³ is anomalous (below the trend), reducing reliability.',
    feedbackMiss: 'Look for the point that does not fit the trend (70 μmol dm⁻³ at 0.52 AU). Also consider whether repeats were carried out.',
  } as MSEntry,

  // Q7 — Magnesium mineral carbonation
  q7_a: {
    marks: 2,
    exemplar: 'Any one reasonable impact, e.g.: loss of fish/seafood as habitat is destroyed; loss of coastal protection from waves; loss of jobs in fishing/tourism; rise in atmospheric CO₂. [1m] Justification: (because) fewer kelp/algae means less photosynthesis takes place, so less glucose and oxygen are produced and less CO₂ is removed. [1m]',
    keyConcepts: ['Kelp/ecosystem loss', 'Photosynthesis', 'Criterion D', 'Community impact'],
    keywords: ['kelp destruction', 'fewer producers', 'less photosynthesis', 'less glucose oxygen', 'fish habitat', 'CO₂ increases'],
    feedbackHit: 'Correct — a valid community impact justified using photosynthesis.',
    feedbackMiss: 'State one impact (e.g. loss of fish habitat, more CO₂) then justify using the photosynthesis equation: fewer kelp → less photosynthesis → less glucose/oxygen and less CO₂ removed.',
  } as MSEntry,

  q7_b: {
    marks: 2,
    exemplar: 'Mg(s) + CO₂(g) + H₂O(l) → MgCO₃(s) + H₂(g). At 25°C: magnesium is a solid, CO₂ is a gas, water is a liquid. Award 1m for one correct state symbol, 2m for all three correct. Do not accept H₂O(aq).',
    keyConcepts: ['State symbols', 'Physical states', 'Equations'],
    keywords: ['Mg(s)', 'CO₂(g)', 'H₂O(l)', 'state symbols', '25°C', 'solid gas liquid'],
    feedbackHit: 'Correct — Mg(s), CO₂(g), H₂O(l) at 25°C.',
    feedbackMiss: 'At 25°C: magnesium is a solid (s), CO₂ is a gas (g) and water is a liquid (l) — not (aq), which means dissolved in water.',
    blankAnswers: ['(s)', '(g)', '(l)'],
  } as MSEntry,

  q7_c: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q7_d: {
    marks: 3,
    exemplar: 'The oxidation number of magnesium increases (from 0 to +2) [1m]. Magnesium loses electrons (2 electrons) [1m]. So magnesium has been oxidised [1m].',
    keyConcepts: ['Redox chemistry', 'Oxidation', 'Oxidation numbers', 'Electron transfer'],
    keywords: ['oxidation number increases', '0 to +2', 'loses electrons', 'oxidised', 'magnesium Mg'],
    feedbackHit: 'Correct — Mg goes from 0 (in Mg metal) to +2 (in MgCO₃), losing electrons, so it is oxidised.',
    feedbackMiss: 'In Mg metal, magnesium has oxidation number 0. In MgCO₃ it is +2 (since CO₃²⁻ has charge −2). Increase in oxidation number = loss of electrons = oxidation.',
  } as MSEntry,

  q7_e: {
    marks: 2,
    exemplar: '2H₂ + O₂ → 2H₂O. Reactants correct (2H₂ + O₂) [1m]; product correct (2H₂O) [1m]. O₂ has an implied coefficient of 1.',
    keyConcepts: ['Balancing equations', 'Combustion of hydrogen'],
    keywords: ['2H₂', 'O₂', '2H₂O', 'balanced equation', 'hydrogen combustion'],
    feedbackHit: 'Correct — 2H₂ + O₂ → 2H₂O is the balanced equation for hydrogen combustion.',
    feedbackMiss: 'Count atoms: 4 H on the left (2×H₂) needs 4 H on the right (2×H₂O). That gives 2 O on the right, so O₂ = 1. Balanced: 2H₂ + O₂ → 2H₂O.',
    blankAnswers: ['2', '1', '2'],
  } as MSEntry,

  q7_f: {
    marks: 2,
    exemplar: 'The only product of hydrogen combustion is water (no CO₂, no NOx, no SOx) [1m]; water is non-toxic / not a pollutant [1m]. ORA: diesel combustion produces CO₂/NOx/SOx which are pollutants/greenhouse gases — accept for the second mark.',
    keyConcepts: ['Environmental chemistry', 'Combustion products', 'Criterion D'],
    keywords: ['only product water', 'no CO₂', 'no NOx', 'no SOx', 'non-toxic', 'not pollutant'],
    feedbackHit: 'Correct — hydrogen combustion only produces water, which is non-toxic and not an atmospheric pollutant.',
    feedbackMiss: 'Compare products: diesel combustion → CO₂ + H₂O + NOx + SOx (pollutants/greenhouse gases). Hydrogen combustion → only H₂O (not a pollutant).',
  } as MSEntry,

  // Q8 — Ocean-based CO₂ removal essay
  q8_: {
    marks: 15,
    exemplar: 'Criterion D rubric (15 marks): Need — Why CO₂ removal is needed (1-4): 1=attempt; 2=statement about need; 3=statement supported by science (greenhouse effect, ocean acidification). Eco — Economic impact (1-4): 1=implied for one system; 2=stated for one; 3=stated for both (using the USD costs given). Soc — Social impact (1-4): 1=implied; 2=stated for one; 3=stated for both (jobs, fishing, beaches, energy demand). Sci — Scientific advantages/disadvantages (1-4): 1=attempt; 2=advantage or disadvantage of one; 3=for both / both an advantage and disadvantage of one; 4=advantage AND disadvantage of both systems. Con — Concluding appraisal (1-4): 1=concluding statement; 2=justified concluding choice. Maximum total = 15 marks.',
    keyConcepts: ['Criterion D', 'CO₂ removal', 'Climate change', 'Scientific appraisal', 'Economic and social impact'],
    keywords: ['CO₂ removal', 'greenhouse effect', 'kelp farming', 'enhanced weathering olivine', 'direct ocean capture', 'economic cost USD', 'social impact', 'scientific advantage', 'concluding appraisal'],
    feedbackHit: 'Excellent essay — clear need for CO₂ removal, economic and social impacts of both chosen systems, balanced scientific evaluation, and a justified conclusion.',
    feedbackMiss: 'Structure your essay: (1) why CO₂ removal is needed; (2) economic impact of each system (use the USD costs); (3) social impact of each; (4) scientific advantages AND disadvantages of each; (5) conclude which system is best and why.',
  } as MSEntry,
}
