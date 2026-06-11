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
  // ── Q1 — Nebulae, atomic structure ─────────────────────────────────────────
  q1_a: { type: 'mcq', correct: 2 } as MCQEntry,   // O: 6 outer electrons → option C ('6')

  q1_b: {
    marks: 2,
    exemplar: 'Group 6 (or Group VIA / 16); Period 3. Award 1 mark for each correct answer.',
    keyConcepts: ['periodic table', 'groups', 'periods'],
    keywords: ['Group 6', 'Period 3', 'sulfur'],
    feedbackHit: 'Correct — sulfur is in Group 6, Period 3.',
    feedbackMiss: 'Count across the periodic table (group) and down (period) to find the position of S.',
  },

  q1_c: { type: 'mcq', correct: 1 } as MCQEntry,   // Ni → Transition metals

  q1_d: {
    marks: 4,
    exemplar: 'Chlorine atoms have 7 electrons in their outer shell / 1 unpaired electron. Each chlorine atom shares 1 electron with the other chlorine to form a single covalent bond (1). This gives both atoms a full outer shell of 8 electrons (1). Argon already has a full outer shell with 8 electrons (1) and therefore does not need to share electrons / does not form bonds / remains monatomic (1).',
    keyConcepts: ['covalent bonding', 'full outer shell', 'noble gas configuration'],
    keywords: ['outer shell', 'shared electrons', 'single bond', 'diatomic', 'noble gas', 'argon'],
    feedbackHit: 'Excellent — correctly contrasted Cl bond formation with Ar noble gas stability.',
    feedbackMiss: 'Cl has 7 outer electrons and needs 1 more → shares 1 electron. Ar has 8 outer electrons (full) → no need to share.',
  },

  q1_e: { type: 'mcq', correct: 3 } as MCQEntry,   // Cl₂ Lewis structure → option D

  // ── Q2 — Mars, isotopes, catalysts ────────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Mass number = protons + neutrons = 7 + 8 = 15. Award 1 mark for correct method, 1 mark for answer of 15.',
    keyConcepts: ['isotopes', 'mass number'],
    keywords: ['mass number', 'protons', 'neutrons', 'nitrogen-15'],
    feedbackHit: 'Correct — mass number is protons + neutrons = 15.',
    feedbackMiss: 'Add proton number (7) to neutron number (8) to get mass number.',
  },

  q2_b: {
    marks: 1,
    exemplar: 'Nitrogen can be produced by non-biological processes such as lightning / photochemical reactions in the atmosphere / volcanic activity. Accept any reference to an abiotic source of atmospheric nitrogen.',
    keyConcepts: ['abiotic processes', 'signs of life'],
    keywords: ['lightning', 'atmospheric chemistry', 'abiotic', 'non-biological'],
    feedbackHit: 'Correct — N₂ forms through abiotic atmospheric processes.',
    feedbackMiss: 'Think about processes like lightning that can generate N₂ without any living organisms.',
  },

  q2_c: {
    marks: 1,
    exemplar: 'RMM = 15 (N) + 16 (O) + 16 (O) = 47. Award 1 mark for 47.',
    keyConcepts: ['relative molecular mass', 'isotopes'],
    keywords: ['RMM', 'molecular mass', 'NO₂', '47'],
    feedbackHit: 'Correct — RMM of NO₂ = 15 + 16 + 16 = 47.',
    feedbackMiss: 'Add the given isotope masses: N-15 + O-16 + O-16.',
  },

  q2_d: {
    marks: 2,
    exemplar: 'pH range: 6.5 to 9.0. Award 1 mark for lower bound (6.5 ± 0.2) and 1 mark for upper bound (9.0 ± 0.2). Both bounds must come from the overlap of indicator A and indicator B colour change ranges.',
    keyConcepts: ['pH indicators', 'pH range'],
    keywords: ['pH', 'indicator', 'colour change', 'range', '6.5', '9.0'],
    feedbackHit: 'Correct pH range from overlapping indicator regions.',
    feedbackMiss: 'Find where both indicator A and B are changing colour — the overlap defines the possible pH range.',
  },

  q2_e: {
    marks: 2,
    exemplar: 'When Mars is closer to the Sun it receives more solar energy / more UV radiation (1). This increases the temperature of the gas particles so more particles have energy equal to or greater than the activation energy — so the rate of the photochemical reaction increases (1). Award also: more frequent effective collisions.',
    keyConcepts: ['reaction rate', 'activation energy', 'temperature'],
    keywords: ['solar energy', 'UV radiation', 'temperature', 'activation energy', 'collision'],
    feedbackHit: 'Correctly linked solar energy → temperature → rate increase.',
    feedbackMiss: 'More solar energy → higher temperature → more molecules exceed activation energy → faster rate.',
  },

  q2_f: {
    marks: 2,
    exemplar: 'A catalyst provides an alternative reaction pathway with a lower activation energy (1). It is not consumed in the reaction / can be used repeatedly (1).',
    keyConcepts: ['catalysts', 'activation energy'],
    keywords: ['catalyst', 'activation energy', 'alternative pathway', 'not consumed'],
    feedbackHit: 'Correct — catalyst lowers activation energy and is not used up.',
    feedbackMiss: 'A catalyst lowers the activation energy without being consumed in the reaction.',
  },

  q2_g: {
    marks: 2,
    exemplar: 'Any two of: to search for signs of past or present microbial life / to study the geological history of Mars and its past water activity / to investigate the possibility of future human settlement / to understand the evolution of planetary atmospheres / to study the chemistry of the thin Martian atmosphere. Award 1 mark each.',
    keyConcepts: ['astrobiology', 'planetary science'],
    keywords: ['life', 'geology', 'water', 'settlement', 'atmosphere'],
    feedbackHit: 'Good scientific reasoning for Mars exploration.',
    feedbackMiss: 'Think about what scientific questions Mars can answer: past life, water, future colonisation.',
  },

  // ── Q3 — Heptane / scented candles ────────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'A = Liquid (molten wax pool around wick); B = Gas (vaporised wax travelling to the flame). Award 1 mark each.',
    keyConcepts: ['states of matter'],
    keywords: ['liquid', 'gas', 'state of matter', 'wax'],
    feedbackHit: 'Correct — melted wax pool is liquid; vapour rising to flame is gas.',
    feedbackMiss: 'The wax melts into a liquid pool; it then evaporates into a gas before burning.',
    blankAnswers: ['Liquid', 'Gas'],
  },

  q3_b: {
    marks: 2,
    exemplar: 'Name: Heptane; Chemical class: Alkane. Award 1 mark each.',
    keyConcepts: ['organic chemistry', 'hydrocarbons', 'alkanes'],
    keywords: ['heptane', 'alkane', 'hydrocarbon'],
    feedbackHit: 'Correct — C₇H₁₆ is heptane, an alkane.',
    feedbackMiss: 'C₇H₁₆: seven carbons = hept-; single bonds only = -ane.',
  },

  q3_c: {
    marks: 2,
    exemplar: 'C₇H₁₆ + 11O₂ → 7CO₂ + 8H₂O. Coefficients: 1, 11, 7, 8. Award 1 mark for C and H balanced; 1 mark for O balanced.',
    keyConcepts: ['combustion', 'balancing equations'],
    keywords: ['combustion', 'balanced equation', 'heptane', 'oxygen'],
    feedbackHit: 'Correctly balanced combustion of heptane.',
    feedbackMiss: 'Balance C first (7 carbons → 7CO₂), then H (16 hydrogens → 8H₂O), then count O on right (14+8=22) and set O₂ = 11.',
    blankAnswers: ['1', '11', '7', '8'],
  },

  q3_d: {
    marks: 3,
    exemplar: 'Direction: decrease. Justification: a draught increases the flow of oxygen to the flame (1), causing the wax to burn faster and be consumed more quickly (1); additionally, the draught removes heat from around the flame / reduces the temperature, increasing heat loss and potentially extinguishing the flame sooner (1). Award up to 3 marks.',
    keyConcepts: ['combustion rate', 'air flow'],
    keywords: ['draught', 'oxygen supply', 'heat loss', 'burn rate', 'decrease'],
    feedbackHit: 'Valid hypothesis with good scientific reasoning about draught effects.',
    feedbackMiss: 'A draught can increase O₂ supply (burns faster) but also removes heat — the net effect on burn time is a decrease (candle burns quicker).',
    blankAnswers: ['decrease'],
  },

  q3_e: {
    marks: 1,
    exemplar: '9.21 × 10⁻² g min⁻¹. Award 1 mark for correct standard form.',
    keyConcepts: ['standard form', 'scientific notation'],
    keywords: ['standard form', '9.21 × 10⁻²', 'scientific notation'],
    feedbackHit: 'Correct standard form.',
    feedbackMiss: '0.0921 in standard form: move decimal 2 places → 9.21 × 10⁻².',
  },

  q3_f: {
    marks: 2,
    exemplar: 'Any two of: axes not labelled / missing units on axes; bar chart used for continuous data (should be line or scatter graph); no title on graph; scale does not start at zero / unequal intervals on axis. Award 1 mark each.',
    keyConcepts: ['scientific graphs', 'data presentation'],
    keywords: ['axis labels', 'units', 'line graph', 'scale', 'title'],
    feedbackHit: 'Two valid graph errors identified.',
    feedbackMiss: 'Check: labels and units on axes? Correct graph type for continuous data? Scale starting at zero?',
  },

  q3_g: {
    marks: 4,
    exemplar: 'The sealed glass cloche restricts the supply of oxygen to the candle flame (1), so combustion is slower / less complete compared to an open room where oxygen is freely available (1). In the open room, unlimited O₂ allows faster, more complete combustion (1). Therefore the rate of wax combustion is lower in the sealed cloche / higher in the open room (1).',
    keyConcepts: ['oxygen availability', 'combustion rate'],
    keywords: ['oxygen', 'sealed', 'open', 'rate', 'combustion'],
    feedbackHit: 'Correctly explained how oxygen availability differs between environments.',
    feedbackMiss: 'Compare oxygen supply: sealed cloche limits O₂ → slower combustion; open room has unlimited O₂ → faster combustion.',
  },

  // ── Q4 — Bergamot vs lavender candles ─────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Independent variable: fragrance type / type of candle (bergamot or lavender). Dependent variable: burn time / number of hours the candle burns. Award 1 mark each.',
    keyConcepts: ['variables', 'experimental design'],
    keywords: ['independent variable', 'dependent variable', 'fragrance', 'burn time'],
    feedbackHit: 'Correct IV and DV identified.',
    feedbackMiss: 'IV = what you change (fragrance); DV = what you measure (burn time in hours).',
  },

  q4_b: {
    marks: 2,
    exemplar: 'Average = (33.0 + 34.5 + 33.0) ÷ 3 = 100.5 ÷ 3 = 33.5 hours. Award 1 mark for correct addition, 1 mark for correct answer of 33.5 h.',
    keyConcepts: ['calculating mean', 'data processing'],
    keywords: ['mean', 'average', 'lavender', '33.5 hours'],
    feedbackHit: 'Correct mean of 33.5 h for lavender candle.',
    feedbackMiss: 'Add the three lavender trials and divide by 3: (33.0 + 34.5 + 33.0) ÷ 3.',
  },

  q4_c: {
    marks: 1,
    exemplar: 'The friend excluded/removed the anomalous result (outlier) of 30.3 hours from the bergamot data before calculating the mean: (25.0 + 26.0) ÷ 2 = 25.5 h.',
    keyConcepts: ['anomalous results', 'outliers'],
    keywords: ['outlier', 'anomalous result', '30.3'],
    feedbackHit: 'Correct — the friend excluded the outlier 30.3 h from the bergamot data.',
    feedbackMiss: 'Which bergamot trial is much higher than the other two? The friend excluded that value.',
  },

  q4_d: {
    marks: 3,
    exemplar: 'The hypothesis is NOT valid (1) because the containers are different (glass jar vs tin) which affects heat conduction and evaporation rate (1), AND the masses of wax are different (190 g vs 130 g) — more wax means longer burn time regardless of fragrance (1). The investigation is not a fair test.',
    keyConcepts: ['validity', 'fair test', 'control variables'],
    keywords: ['not valid', 'different containers', 'different masses', 'fair test'],
    feedbackHit: 'Correctly evaluated the lack of control — container type and wax mass both differ.',
    feedbackMiss: 'A valid test requires all variables except the IV to be the same. What else differs here?',
  },

  q4_e: {
    marks: 2,
    exemplar: 'Improvement: use identical containers (e.g. both glass jars of same dimensions) AND the same mass of wax (e.g. 150 g of each). Justification: controls the effect of container shape and wax mass, making the comparison of fragrances a fair test. Award 1 mark + 1 mark.',
    keyConcepts: ['experimental improvement', 'control variables'],
    keywords: ['same container', 'same mass', 'control', 'fair test'],
    feedbackHit: 'Valid improvement with justification.',
    feedbackMiss: 'Match the containers and match the mass of wax — then fragrance is the only variable.',
  },

  // ── Q5 — Sugarcane bagasse & biomass ──────────────────────────────────────
  q5_a: {
    marks: 2,
    exemplar: 'Correct setup: filter paper placed inside the funnel; beaker positioned under the funnel to collect the filtrate. Award 1 mark for filter paper in funnel; 1 mark for correct beaker position.',
    keyConcepts: ['filtration', 'separation'],
    keywords: ['filter paper', 'funnel', 'beaker', 'filtrate'],
    feedbackHit: 'Correct filtration setup.',
    feedbackMiss: 'Filter paper inside funnel; beaker underneath to collect liquid.',
  },

  q5_b: { type: 'mcq', correct: 3 } as MCQEntry,   // Cl₂ toxic → skull/crossbones = option D

  q5_c: {
    marks: 6,
    exemplar: 'Award marks for: correct type of graph (bar chart) [1]; both axes labelled with units (Biomass type / Energy in MJ tonne⁻¹) [1]; sensible evenly-spaced scale on y-axis starting at 0 [1]; all five bars at correct heights within ±0.5 scale unit [2 marks: 2=all correct, 1=3–4 correct]; bars evenly spaced and correctly labelled [1].',
    keyConcepts: ['bar charts', 'data representation', 'biomass energy'],
    keywords: ['bar chart', 'axes', 'scale', 'label', 'biomass', 'energy'],
    feedbackHit: 'Well-constructed bar chart.',
    feedbackMiss: 'Check: bar chart type, axis labels + units, scale starting at 0, all 5 bars correct heights.',
  },

  q5_d: { type: 'mcq', correct: 1 } as MCQEntry,   // Exothermic

  q5_e: {
    marks: 2,
    exemplar: 'Recycling sugarcane bagasse is important because it reduces the volume of agricultural waste that would otherwise go to landfill or be burned in open fields (1), and provides a renewable biomass fuel that can displace fossil fuel use, reducing net CO₂ emissions / greenhouse gas emissions (1).',
    keyConcepts: ['sustainability', 'waste reduction', 'renewable energy'],
    keywords: ['recycling', 'waste', 'renewable', 'fossil fuels', 'CO₂', 'sugarcane'],
    feedbackHit: 'Good sustainability reasoning for bagasse recycling.',
    feedbackMiss: 'Think about where bagasse goes without recycling (open burning/landfill) and what benefit fuel pellets provide (renewable energy, reduced emissions).',
  },

  // ── Q6 — Design investigation (biomass pellet energy density) ─────────────
  q6_: {
    marks: 16,
    exemplar: `Criterion B: Design Investigation — Biomass Fuel Pellet Energy Density (16 marks)

**Identifying variables (4 marks)**
- Independent variable: type of biomass pellet (eucalyptus, coconut shell, sugarcane bagasse, corn cob, rice husk)
- Dependent variable: temperature increase of water / energy released per gram of pellet burned
- Control variables (2): mass of water (e.g. 100 cm³); mass of pellet burned; distance between pellet and calorimeter; starting temperature of water

**Equipment justification (2 marks)**
- Set-up A (open calorimeter): accessible but more heat lost to surroundings
- Set-up B (enclosed calorimeter): reduces heat loss, giving more accurate and reproducible results — justify for accuracy

**Sufficient data / method (8 marks)**
- Describe step-by-step: weigh pellet before and after burning; record water temperature before and after heating
- Minimum 3 trials per biomass type for reliability
- Same mass of water and same starting temperature for each trial
- Burn same mass of pellet each time (e.g. 2 g)
- Calculate energy using Q = mcΔT; express as kJ g⁻¹
- Results table with headings, units, and space for repeats

**Safety (2 marks)**
- Hazards: open flame, hot pellet ash, smoke/fumes from burning biomass
- Precautions: use tongs to handle burning pellets; work in well-ventilated area or fume cupboard; wear safety goggles and lab coat; use heat-proof mat`,
    keyConcepts: ['experimental design', 'energy density', 'variables', 'calorimetry', 'biomass'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'calorimeter', 'energy', 'method', 'safety'],
    feedbackHit: 'Excellent investigation design covering all required elements.',
    feedbackMiss: 'Include: IV/DV/2 CVs, set-up justification, detailed method with repeats, two safety precautions.',
  },

  // ── Q7 — Water consumption & filtration ───────────────────────────────────
  q7_a: {
    marks: 1,
    exemplar: 'North America. Award 1 mark.',
    keyConcepts: ['graph reading', 'data interpretation'],
    keywords: ['North America', 'second highest', 'water consumption', '2020'],
    feedbackHit: 'Correct — North America has the second highest consumption in 2020.',
    feedbackMiss: 'Rank the regions by consumption at the year 2020; find the second highest.',
  },

  q7_b: {
    marks: 2,
    exemplar: '~500 (± 50) billion m³. Award 1 mark for reading the correct region (Europe); 1 mark for a value in the range 450–550 billion m³.',
    keyConcepts: ['graph reading', 'data interpretation'],
    keywords: ['Europe', '1950', 'billion m³', '500'],
    feedbackHit: 'Correct reading from graph for Europe in 1950.',
    feedbackMiss: 'Find Europe\'s line on the graph and read the value at the year 1950.',
  },

  q7_c: {
    marks: 1,
    exemplar: 'Any one of: rapid population growth in Asia after 1960; expansion of irrigated agriculture; industrialisation and increased water use in manufacturing. Award 1 mark.',
    keyConcepts: ['population', 'industrialisation', 'water demand'],
    keywords: ['population growth', 'agriculture', 'industrialisation', 'Asia'],
    feedbackHit: 'Valid reason for Asia\'s water consumption increase after 1960.',
    feedbackMiss: 'What economic and demographic changes happened in Asia from 1960 onwards that would increase water use?',
  },

  q7_d: { type: 'mcq', correct: 2 } as MCQEntry,   // Pore size

  q7_e: {
    marks: 6,
    exemplar: `Award up to 6 marks for a balanced comparison of biosand vs RO for borehole water:

**Biosand advantages vs RO:**
- Much lower unit cost ($50 vs $200) [1]
- No replacement filter cost ($0 vs $45 per cycle) [1]
- Longer filter life (24+ months vs 12 months) [1]

**Biosand disadvantages vs RO:**
- Much larger pore size (0.1–1.0 μm vs 0.0001 μm) — may not remove viruses or dissolved salts [1]
- Very low water flow rate (0.4–0.6 dm³/min vs 1.5–2.0 dm³/min) — slower water production [1]

**Justified recommendation:**
- For rural borehole water, biosand is more appropriate if viruses are not the primary concern (boreholes are generally protected from surface contamination) and cost is a major factor; RO would be preferable if the borehole water contains dissolved salts or chemical contaminants [1]`,
    keyConcepts: ['water filtration', 'pore size', 'cost-benefit'],
    keywords: ['biosand', 'reverse osmosis', 'pore size', 'cost', 'filter life', 'borehole'],
    feedbackHit: 'Well-structured comparison with justified recommendation for borehole context.',
    feedbackMiss: 'Compare pore size, cost, lifespan, and flow rate — then justify which is best for borehole water.',
  },

  // ── Q8 — Industrial water treatment (riverside pharmaceutical district) ────
  q8_: {
    marks: 13,
    exemplar: `Criterion D: Evaluating water treatment for riverside pharmaceutical district (13 marks)

**Economic implications (3 marks — 1 per technology)**
- Flocculation/sedimentation: low–moderate cost; uses chemical coagulants (e.g. alum) that must be purchased; effective for suspended solids but generates sludge requiring disposal
- UV disinfection: moderate–high capital cost for UV lamps; low chemical cost; ongoing lamp replacement cost; effective against pathogens and some organic compounds
- Ion exchange: high resin cost; expensive regeneration process; particularly effective for heavy metals (Hg, As); spent resin becomes hazardous waste

**Environmental impact (3 marks — 1 per technology)**
- Flocculation/sedimentation: sludge produced contains concentrated pollutants and requires proper disposal; risk to aquatic life if sludge enters waterways
- UV disinfection: no chemical by-products introduced; energy-intensive (electricity for UV lamps contributes to carbon footprint); effective at destroying hormones and some organic solvents
- Ion exchange: resin waste contains concentrated heavy metals (Hg, As) — risk of secondary contamination if not disposed of properly

**Social aspects (3 marks)**
- Creates local employment in operation, maintenance, and monitoring
- Community confidence depends on visible evidence that the plant removes pharmaceutical waste safely
- Siting the plant near residential areas may generate opposition due to odours / truck traffic / visual impact; need for community consultation

**Appraisal of unsuitable technology (4 marks)**
- Flocculation/sedimentation would be the LEAST suitable primary technology for pharmaceutical organic contaminants (hormones, organic solvents) [1]. Flocculation removes suspended particles by making them clump and settle [1], but dissolved organic molecules and hormones remain in solution and are NOT removed by this process [1]. UV disinfection or advanced oxidation would be more effective for the dissolved organic and pharmaceutical compounds in this effluent [1].`,
    keyConcepts: ['water treatment', 'economic analysis', 'environmental impact', 'social considerations'],
    keywords: ['flocculation', 'UV disinfection', 'ion exchange', 'heavy metals', 'pharmaceutical', 'economic', 'environmental', 'social'],
    feedbackHit: 'Comprehensive evaluation with all four required elements.',
    feedbackMiss: 'Include: economic comparison; environmental impact; social aspects; identify unsuitable technology with justification.',
  },
}
