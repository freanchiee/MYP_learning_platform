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
  // Q1 — Martian rock silica content
  q1_a: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q1_b: {
    marks: 2,
    exemplar: 'Row 1: Oxide = silicon dioxide (do not accept silicon oxide); Row 2: Formula = CaO. One mark each.',
    keyConcepts: ['Naming compounds', 'Chemical formulae'],
    keywords: ['silicon dioxide', 'SiO₂', 'CaO', 'calcium oxide'],
    feedbackHit: 'Correct — silicon dioxide (SiO₂) and calcium oxide (CaO) are the standard IUPAC names/formulae.',
    feedbackMiss: 'Take care: "silicon oxide" is not accepted — use "silicon dioxide" (Si is +4, so it forms a dioxide). Calcium oxide is CaO (Ca²⁺ with O²⁻).',
    blankAnswers: ['silicon dioxide', 'CaO'],
  } as MSEntry,

  q1_c: {
    type: 'mcq',
    correct: 2,
  } as MCQEntry,

  q1_d: {
    marks: 2,
    exemplar: 'mass SiO₂ / mass sample × 100 = 1.07 / 2.00 × 100 = 53.5 % SiO₂. Award 1 mark for correct method (seen or implied), 1 mark for 53.5% (accept 53.5).',
    keyConcepts: ['Percentage by mass calculation', 'Criterion C'],
    keywords: ['1.07', '2.00', '100', '53.5', 'percentage', 'SiO₂'],
    feedbackHit: 'Correct — (1.07 ÷ 2.00) × 100 = 53.5% SiO₂.',
    feedbackMiss: 'Use: % = (mass of component / total mass) × 100. Substitute: (1.07 / 2.00) × 100.',
  } as MSEntry,

  q1_e: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,

  // Q2 — Martian atmosphere gases and noble gases
  q2_a: {
    marks: 2,
    exemplar: 'The acidic gases (SO₂, H₂S) dissolve in the rain water to form acids. These acids lower the pH to approximately 1.0 (highly acidic).',
    keyConcepts: ['Acid formation from non-metal oxides', 'pH scale'],
    keywords: ['dissolve', 'water', 'acid', 'SO₂', 'H₂S', 'low pH', '1.0'],
    feedbackHit: 'Correct — acidic volcanic gases dissolve in water to form acids, lowering the pH.',
    feedbackMiss: 'Think about what happens when gases like SO₂ or H₂S dissolve in water — they form acidic solutions, which lowers the pH.',
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
    exemplar: 'For ⁴⁰Ar: Protons = 18 (atomic number of argon); Neutrons = 40 − 18 = 22; Electrons = 18 (neutral atom). One mark per correct value.',
    keyConcepts: ['Atomic structure', 'Isotopes', 'Subatomic particles'],
    keywords: ['protons 18', 'neutrons 22', 'electrons 18', 'mass number 40', 'atomic number 18'],
    feedbackHit: 'Correct — protons = atomic number = 18; neutrons = mass number − atomic number = 40 − 18 = 22; electrons = protons = 18.',
    feedbackMiss: 'For ⁴⁰Ar: the mass number (40) = protons + neutrons; the atomic number (18) = protons = electrons for a neutral atom. So neutrons = 40 − 18 = 22.',
  } as MSEntry,

  q2_e: {
    marks: 2,
    exemplar: 'Neon (atomic number 10) has electron configuration 2.8: 2 electrons in the first shell and 8 electrons in the outer shell. Award 1 mark for 2 in the first shell and 1 mark for 8 in the outer shell.',
    keyConcepts: ['Electron configuration', 'Electron shells'],
    keywords: ['2 electrons first shell', '8 electrons outer', 'neon', 'filled outer shell', '2.8'],
    feedbackHit: 'Correct — neon (10 electrons) has configuration 2.8: 2 in the first shell and 8 in the outer shell.',
    feedbackMiss: 'Neon has 10 electrons. The first shell holds a maximum of 2; the second (outer) shell holds up to 8. So 2 inner, 8 outer.',
  } as MSEntry,

  // Q3 — Recycling spacecraft plastics
  q3_a: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q3_b: {
    marks: 2,
    exemplar: 'A = propene (also accept prop-1-ene); B = ethene (also accept eth-1-ene). One mark each.',
    keyConcepts: ['Alkene nomenclature', 'Organic chemistry'],
    keywords: ['propene', 'ethene', 'alkene', 'C=C double bond'],
    feedbackHit: 'Correct — A (CH₂=CHCH₃) is propene and B (CH₂=CH₂) is ethene.',
    feedbackMiss: 'Count the carbon atoms: A has 3 carbons (prop-) and B has 2 carbons (eth-). Both have a C=C double bond, so they are alkenes (-ene suffix).',
    blankAnswers: ['propene', 'ethene'],
  } as MSEntry,

  q3_c: {
    marks: 1,
    exemplar: 'C₅H₁₂. From C₁₀H₂₂ → C₃H₆ + C₂H₄ + X: C: 10 − 3 − 2 = 5; H: 22 − 6 − 4 = 12. Do not accept pentane / a structural formula.',
    keyConcepts: ['Cracking of hydrocarbons', 'Molecular formula', 'Conservation of atoms'],
    keywords: ['C₅H₁₂', 'cracking', 'decane', 'C₁₀H₂₂', 'balance atoms', 'pentane'],
    feedbackHit: 'Correct — subtracting C₃H₆ and C₂H₄ from C₁₀H₂₂ gives C₅H₁₂.',
    feedbackMiss: 'Subtract the carbons: 10 − 3 − 2 = 5. Subtract the hydrogens: 22 − 6 − 4 = 12. So X = C₅H₁₂.',
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
    exemplar: 'Any one reasonable requirement, e.g.: waste should not contain materials that could produce hazardous/toxic substances on burning; exhaust emissions should be filtered/scrubbed before release into the habitat; the combustion temperature must reach a minimum level.',
    keyConcepts: ['Environmental regulations', 'Incineration'],
    keywords: ['hazardous', 'toxic', 'emissions controlled', 'filters', 'scrubbers', 'requirement'],
    feedbackHit: 'Correct — a valid requirement to reduce the environmental impact of incineration.',
    feedbackMiss: 'Think about what harmful outputs come from incineration (toxic emissions, particulates) and how a requirement could limit them.',
  } as MSEntry,

  q3_g: {
    marks: 3,
    exemplar: 'Order (increasing particle size): A — C — B. [1m] A had the fastest rate of breakdown. [1m] Rate of reaction increases with decreasing particle size (smaller particles → higher surface area → faster reaction). [1m] Accept correct decreasing order only if explained in words.',
    keyConcepts: ['Surface area and reaction rate', 'Biodegradation', 'Data interpretation'],
    keywords: ['A < C < B', 'surface area', 'particle size', 'breakdown rate', 'faster reaction'],
    feedbackHit: 'Correct — A has the smallest particles (highest surface area, fastest breakdown); B has the largest particles (slowest).',
    feedbackMiss: 'From the graph, A breaks down fastest and B slowest. Smaller particles have more surface area for microbes, so A must have the smallest particles.',
  } as MSEntry,

  // Q4 — Chemical hand-warmer
  q4_a: {
    marks: 2,
    exemplar: 'The salt catalyst speeds up the rate of the reaction (1m) without itself being used up/consumed (1m). OR: it lowers the activation energy of the reaction without being permanently changed.',
    keyConcepts: ['Catalysts', 'Activation energy', 'Reaction rate'],
    keywords: ['speeds up', 'rate of reaction', 'not used up', 'activation energy', 'salt catalyst'],
    feedbackHit: 'Correct — a catalyst increases reaction rate by lowering activation energy and is not consumed.',
    feedbackMiss: 'A catalyst does two things: (1) increases rate / lowers activation energy, and (2) is not used up. You need both points for full marks.',
  } as MSEntry,

  q4_b: {
    type: 'mcq',
    correct: 3,
  } as MCQEntry,

  q4_c: {
    marks: 1,
    exemplar: '35°C. Accept 35 ± 2°C.',
    keyConcepts: ['Reading measuring instruments', 'Temperature measurement'],
    keywords: ['35', '35°C', 'thermometer reading', 'temperature'],
    feedbackHit: 'Correct — the thermometer reads 35°C (halfway between the 30 and 40 gridlines).',
    feedbackMiss: 'Read the scale carefully — the liquid sits halfway between the 30°C and 40°C gridlines, so the reading is 35°C.',
  } as MSEntry,

  q4_d: {
    marks: 4,
    exemplar: 'IV: surrounding temperature [1m]; DV: time the hand-warmer stays hot [1m]; CV1: type/mass of hand-warmer [1m]; CV2: mass of iron powder / amount of air available [1m]. Do not accept "amount of iron" without specifying mass. Award any two reasonable CVs.',
    keyConcepts: ['Variables', 'Fair test', 'Criterion B'],
    keywords: ['IV temperature', 'DV time hot', 'CV type of hand-warmer', 'CV mass of iron', 'controlled variables', 'independent', 'dependent'],
    feedbackHit: 'Correct — surrounding temperature is varied (IV), time staying hot is measured (DV), and type of warmer and mass of iron are kept constant (CVs).',
    feedbackMiss: 'IV = what you change (temperature); DV = what you measure (time staying hot); CVs = what you keep the same to make it a fair test.',
  } as MSEntry,

  q4_e: {
    marks: 3,
    exemplar: 'If the surrounding temperature increases, [1m] then the time the hand-warmer stays hot will decrease, [1m] because the rate of the iron–oxygen reaction increases (particles have more energy and collide more frequently/successfully at higher temperature). [1m]',
    keyConcepts: ['Hypothesis formulation', 'Effect of temperature on reaction rate', 'Criterion B'],
    keywords: ['if temperature increases', 'then time hot decreases', 'because reaction rate', 'collision theory'],
    feedbackHit: 'Correct — a valid If/Then/Because hypothesis linking temperature to reaction rate.',
    feedbackMiss: 'Structure: If [change in IV] then [expected change in DV] because [scientific reasoning]. The Because must link higher temperature to a faster reaction.',
  } as MSEntry,

  q4_f: {
    marks: 2,
    exemplar: 'Approximately 395 minutes (accept any value in the range 380–410 min). Award 1 mark for a sensible extrapolation of the curve below 10°C, 1 mark for units (minutes / min).',
    keyConcepts: ['Graph reading', 'Extrapolation', 'Criterion C'],
    keywords: ['395', 'minutes', '5°C', 'extrapolation', 'graph reading'],
    feedbackHit: 'Correct — extending the curve below 10°C gives roughly 395 minutes at 5°C.',
    feedbackMiss: 'The curve rises as temperature falls. Extend it past 10°C (350 min) down to 5°C — the time should be a little under 400 minutes.',
  } as MSEntry,

  q4_g: {
    marks: 4,
    exemplar: 'Rate = number of sites / time = 5.46 × 10⁵ / 210 = 2600 sites min⁻¹ (accept 2600 ± 5). OR 2600 / 60 ≈ 43.3 sites s⁻¹. Award: 1m for formula (rate = sites/time, seen or implied); 1m for correct substitution; 1m for 2600 (or 43.3); 1m for correct unit (sites min⁻¹ or sites s⁻¹).',
    keyConcepts: ['Rate of reaction', 'Calculation with large numbers', 'Units', 'Criterion C'],
    keywords: ['2600', '5.46×10⁵', '210', 'sites per minute', 'rate formula', '43.3 per second'],
    feedbackHit: 'Correct — 5.46 × 10⁵ ÷ 210 = 2600 sites min⁻¹.',
    feedbackMiss: 'Rate = total sites / total time = 5.46 × 10⁵ ÷ 210. Calculate this and give the unit (sites min⁻¹).',
  } as MSEntry,

  // Q5 — Radiation-shielding coating design
  q5_a: {
    marks: 1,
    exemplar: 'Cosmo-Shield. (Cosmo-Shield let only 8% of the film dots darken = best shielding.)',
    keyConcepts: ['Data interpretation', 'Effectiveness of coating'],
    keywords: ['Cosmo-Shield', '8%', 'fewest dots darkened', 'most effective', 'best shield'],
    feedbackHit: 'Correct — Cosmo-Shield let only 8% of dots darken, so it blocked the most radiation.',
    feedbackMiss: 'The most effective coating is the one where the FEWEST dots darken (fewer darkened = more radiation blocked). Cosmo-Shield = 8% darkened.',
  } as MSEntry,

  q5_b: {
    marks: 2,
    exemplar: 'Real cosmic radiation contains many types of particle (protons, heavy ions, gamma rays) over a wide range of energies [1m]; whereas the laboratory source gives only one type of radiation at one energy [1m], so it cannot represent the full range a spacecraft really meets. WTTE.',
    keyConcepts: ['Modelling limitations', 'Types of radiation', 'Validity'],
    keywords: ['cosmic radiation many particles energies', 'lab source one type', 'narrow energy', 'not realistic model'],
    feedbackHit: 'Correct — a single lab source of one type/energy does not reproduce the many particle types and energies of real cosmic radiation.',
    feedbackMiss: 'Compare the model to reality: cosmic radiation has many particle types over a wide energy range; a single laboratory source gives only one type at one energy.',
  } as MSEntry,

  q5_c: {
    marks: 17,
    exemplar: 'Criterion B rubric (max 17): V (Variables, 0-4): IV = the individual active compound being tested (boron carbide / hydrogen-rich polymer / tungsten powder); DV = % of radiation-sensitive film dots that darken after a fixed time; two CVs identified (exposure time, panel thickness, source distance, source type). E (Equipment, 0-3): suitable equipment named (radiation source, identical panels of each compound, film dot detectors, ruler, timer). M (Method, 0-5): full reproducible method — make panels of equal thickness from each compound, expose them at the same distance from the same source for the same time, then count % dots darkened. D (Data, 0-3): at least 3 panels per compound and a calculated mean. S (Safety, 0-2): a specific hazard addressed (radiation exposure — use shielding/distance/lead apron, minimise exposure time).',
    keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Fair test', 'Safety'],
    keywords: ['IV active compound', 'DV % dots darkened', 'CVs time thickness distance', 'equipment panels source detector', 'safety radiation shielding distance', 'repeats mean'],
    feedbackHit: 'Well-designed investigation: all variables identified, clear reproducible method, repeats with a mean, and a specific safety consideration.',
    feedbackMiss: 'Ensure you: (1) identify IV (active compound), DV (% dots darkened) and ≥2 CVs; (2) list equipment; (3) give a step-by-step method; (4) plan ≥3 repeats and a mean; (5) state a specific hazard (radiation exposure).',
  } as MSEntry,

  // Q6 — Stellarine data analysis
  q6_a: {
    marks: 2,
    exemplar: 'Compare the percentage of film dots that darkened for each individual ingredient. [1m] If boron carbide gives the lowest % of darkened dots, then the research question is supported. [1m]',
    keyConcepts: ['Data interpretation', 'Supporting a research question', 'Criterion C'],
    keywords: ['compare % dots darkened', 'lowest darkened', 'boron carbide', 'research question supported'],
    feedbackHit: 'Correct — compare data per ingredient; if boron carbide gives the fewest darkened dots, it is the best blocker and the RQ is supported.',
    feedbackMiss: 'Outline a comparison: rank the ingredients by % darkened dots, then state the condition under which the RQ is supported (boron carbide = lowest).',
  } as MSEntry,

  q6_b: {
    marks: 1,
    exemplar: 'Any one reasonable extension, e.g.: test combinations of ingredients; test different panel thicknesses; use a different radiation source / longer exposure; test different concentrations of each compound. Do not accept simply repeating the same experiment.',
    keyConcepts: ['Extending investigations', 'Experimental design'],
    keywords: ['combinations', 'different thickness', 'different source', 'longer time', 'new variable'],
    feedbackHit: 'Correct — a valid extension that goes beyond the original investigation.',
    feedbackMiss: 'An extension changes something new — a new variable (thickness, combinations) or a new condition (different source). Simply repeating is not an extension.',
  } as MSEntry,

  q6_c: {
    marks: 6,
    exemplar: 'Title: a title that links absorbance and concentration of stellarine. [1m] Plot two data points correctly. [1m] Plot all data points correctly. [1m] Line of best fit: starts at (0,0) and goes through all points except the anomalous point at 70 μmol dm⁻³. [1m] Axis labels: concentration of stellarine on the x-axis and absorbance on the y-axis. [1m] Unit of concentration: μmol dm⁻³. [1m] Ignore any unit of absorbance.',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Axis labels', 'Anomalous data', 'Criterion C'],
    keywords: ['title absorbance concentration', 'LOBF from origin', 'anomalous 70', 'x-axis concentration μmol dm⁻³', 'y-axis absorbance'],
    feedbackHit: 'Excellent graph — title, all points plotted, best-fit line from the origin excluding the anomalous point, and correctly labelled axes with units.',
    feedbackMiss: 'Check: (1) title links absorbance and concentration; (2) all points plotted (70 μmol dm⁻³ = anomalous); (3) LOBF from origin missing the 70 point; (4) x-axis = concentration (μmol dm⁻³); (5) y-axis = absorbance.',
  } as MSEntry,

  q6_d: {
    marks: 1,
    exemplar: 'There is an anomalous data point at 70 μmol dm⁻³ (absorbance 0.50, lower than the trend predicts). OR: there is only one trial / no averages are plotted, which reduces reliability. No ecf from incorrect plotting in part (c).',
    keyConcepts: ['Reliability', 'Anomalous data', 'Criterion C'],
    keywords: ['anomalous', '70 μmol dm⁻³', 'one trial', 'no repeats', 'unreliable', 'outlier'],
    feedbackHit: 'Correct — the point at 70 μmol dm⁻³ is anomalous (below the trend), reducing reliability.',
    feedbackMiss: 'Look for the point that does not fit the trend (70 μmol dm⁻³ at 0.50 AU). Also consider whether repeats were carried out.',
  } as MSEntry,

  // Q7 — Calcium in-situ resource carbonation
  q7_a: {
    marks: 2,
    exemplar: 'Any one reasonable impact, e.g.: the crew would run short of food; oxygen levels would fall; CO₂ would build up in the habitat. [1m] Justification: (because) without the crops less photosynthesis takes place, so less glucose and oxygen are produced and less CO₂ is removed from the air. [1m]',
    keyConcepts: ['Crop/plant loss', 'Photosynthesis', 'Criterion D', 'Community impact'],
    keywords: ['greenhouse crops destroyed', 'fewer plants', 'less photosynthesis', 'less glucose oxygen', 'food shortage', 'CO₂ increases'],
    feedbackHit: 'Correct — a valid crew impact justified using photosynthesis.',
    feedbackMiss: 'State one impact (e.g. food/oxygen shortage, CO₂ build-up) then justify using the photosynthesis equation: fewer plants → less photosynthesis → less glucose/oxygen and less CO₂ removed.',
  } as MSEntry,

  q7_b: {
    marks: 2,
    exemplar: 'Ca(s) + CO₂(g) + H₂O(l) → CaCO₃(s) + H₂(g). At 25°C: calcium is a solid, CO₂ is a gas, water is a liquid. Award 1m for one correct state symbol, 2m for all three correct. Do not accept H₂O(aq).',
    keyConcepts: ['State symbols', 'Physical states', 'Equations'],
    keywords: ['Ca(s)', 'CO₂(g)', 'H₂O(l)', 'state symbols', '25°C', 'solid gas liquid'],
    feedbackHit: 'Correct — Ca(s), CO₂(g), H₂O(l) at 25°C.',
    feedbackMiss: 'At 25°C: calcium is a solid (s), CO₂ is a gas (g) and water is a liquid (l) — not (aq), which means dissolved in water.',
    blankAnswers: ['(s)', '(g)', '(l)'],
  } as MSEntry,

  q7_c: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  q7_d: {
    marks: 3,
    exemplar: 'The oxidation number of calcium increases (from 0 to +2) [1m]. Calcium loses electrons (2 electrons) [1m]. So calcium has been oxidised [1m].',
    keyConcepts: ['Redox chemistry', 'Oxidation', 'Oxidation numbers', 'Electron transfer'],
    keywords: ['oxidation number increases', '0 to +2', 'loses electrons', 'oxidised', 'calcium Ca'],
    feedbackHit: 'Correct — Ca goes from 0 (in Ca metal) to +2 (in CaCO₃), losing electrons, so it is oxidised.',
    feedbackMiss: 'In Ca metal, calcium has oxidation number 0. In CaCO₃ it is +2 (since CO₃²⁻ has charge −2). Increase in oxidation number = loss of electrons = oxidation.',
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
    exemplar: 'The only product of hydrogen combustion is water (no CO₂, no NOx, no SOx) [1m]; water is non-toxic / will not pollute the sealed habitat air [1m]. ORA: kerosene combustion produces CO₂/NOx/SOx which are toxic pollutants — accept for the second mark.',
    keyConcepts: ['Environmental chemistry', 'Combustion products', 'Criterion D'],
    keywords: ['only product water', 'no CO₂', 'no NOx', 'no SOx', 'non-toxic', 'sealed habitat'],
    feedbackHit: 'Correct — hydrogen combustion only produces water, which is non-toxic and safe in a sealed habitat.',
    feedbackMiss: 'Compare products: kerosene combustion → CO₂ + H₂O + NOx + SOx (toxic pollutants). Hydrogen combustion → only H₂O (not a pollutant).',
  } as MSEntry,

  // Q8 — Carbon-utilisation systems essay
  q8_: {
    marks: 15,
    exemplar: 'Criterion D rubric (15 marks): Need — Why capturing CO₂ is needed (1-4): 1=attempt; 2=statement about need; 3=statement supported by science (greenhouse effect; making fuel/resources off-Earth). Eco — Economic impact (1-4): 1=implied for one system; 2=stated for one; 3=stated for both (using the USD costs given). Soc — Social impact (1-4): 1=implied; 2=stated for one; 3=stated for both (food, fuel security, energy demand). Sci — Scientific advantages/disadvantages (1-4): 1=attempt; 2=advantage or disadvantage of one; 3=for both / both an advantage and disadvantage of one; 4=advantage AND disadvantage of both systems. Con — Concluding appraisal (1-4): 1=concluding statement; 2=justified concluding choice. Maximum total = 15 marks.',
    keyConcepts: ['Criterion D', 'CO₂ capture and utilisation', 'Climate change', 'Scientific appraisal', 'Economic and social impact'],
    keywords: ['CO₂ utilisation', 'greenhouse effect', 'Sabatier reactor methane', 'mineralisation carbonate', 'algae bioreactor', 'economic cost USD', 'social impact', 'scientific advantage', 'concluding appraisal'],
    feedbackHit: 'Excellent essay — clear need for CO₂ capture, economic and social impacts of both chosen systems, balanced scientific evaluation, and a justified conclusion.',
    feedbackMiss: 'Structure your essay: (1) why CO₂ capture is needed; (2) economic impact of each system (use the USD costs); (3) social impact of each; (4) scientific advantages AND disadvantages of each; (5) conclude which system is best and why.',
  } as MSEntry,
}
