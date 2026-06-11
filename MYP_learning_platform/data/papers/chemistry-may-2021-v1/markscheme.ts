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
  // ── Q1 — Comets, atomic structure ──────────────────────────────────────────
  q1_a: { type: 'mcq', correct: 0 } as MCQEntry,

  q1_b: {
    marks: 2,
    exemplar: 'Group 5 (or Group VA / 15); Period 3. Award 1 mark for each correct answer.',
    keyConcepts: ['periodic table', 'groups', 'periods'],
    keywords: ['Group 5', 'Period 3', 'phosphorus'],
    feedbackHit: 'Correct — phosphorus is in Group 5, Period 3.',
    feedbackMiss: 'Check the position of P on the periodic table: count across (group) and down (period).',
  },

  q1_c: { type: 'mcq', correct: 1 } as MCQEntry,

  q1_d: {
    marks: 4,
    exemplar: 'Nitrogen atoms have 5 electrons in their outer shell / 3 unpaired electrons. Each nitrogen atom shares 3 electrons with the other nitrogen to form a triple covalent bond (1). This gives both atoms a full outer shell of 8 electrons (1). Helium already has a full outer shell with 2 electrons (1) and therefore does not need to share electrons and does not form bonds / remains monatomic (1).',
    keyConcepts: ['covalent bonding', 'full outer shell', 'noble gas configuration'],
    keywords: ['outer shell', 'shared electrons', 'triple bond', 'diatomic', 'noble gas'],
    feedbackHit: 'Excellent explanation of covalent bonding vs noble gas stability.',
    feedbackMiss: 'Focus on electron sharing: N needs 3 more electrons; He already has 2, which is its full outer shell.',
  },

  q1_e: { type: 'mcq', correct: 1 } as MCQEntry,

  // ── Q2 — Titan, isotopes, catalysts ───────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Mass number = protons + neutrons = 6 + 8 = 14. Award 1 mark for correct method, 1 mark for answer of 14.',
    keyConcepts: ['isotopes', 'mass number'],
    keywords: ['mass number', 'protons', 'neutrons', 'carbon-14'],
    feedbackHit: 'Correct — mass number is protons + neutrons = 14.',
    feedbackMiss: 'Add proton number (6) to neutron number (8) to get mass number.',
  },

  q2_b: {
    marks: 1,
    exemplar: 'Methane can be produced by non-biological (geological/volcanic) processes such as volcanic eruptions or chemical reactions between water and rocks (serpentinisation). Accept any reference to abiotic source of methane.',
    keyConcepts: ['abiotic processes', 'signs of life'],
    keywords: ['geological', 'volcanic', 'abiotic', 'serpentinisation'],
    feedbackHit: 'Correct — methane forms through geological processes, not just biological ones.',
    feedbackMiss: 'Think about volcanic or geological processes that can also produce methane without life.',
  },

  q2_c: {
    marks: 1,
    exemplar: 'RMM = 1 (H) + 13 (C) + 14 (N) = 28. Award 1 mark for 28.',
    keyConcepts: ['relative molecular mass', 'isotopes'],
    keywords: ['RMM', 'molecular mass', 'HCN'],
    feedbackHit: 'Correct — RMM of HCN = 1 + 13 + 14 = 28.',
    feedbackMiss: 'Add the given isotope masses: H-1 + C-13 + N-14.',
  },

  q2_d: {
    marks: 2,
    exemplar: 'pH range: 5.0 to 8.0. Award 1 mark for lower bound (5.0 ± 0.2) and 1 mark for upper bound (8.0 ± 0.2). Both bounds must be justified by where the two indicator colour changes overlap.',
    keyConcepts: ['pH indicators', 'pH range'],
    keywords: ['pH', 'indicator', 'colour change', 'range'],
    feedbackHit: 'Correct pH range read from overlapping indicator regions.',
    feedbackMiss: 'Find where both indicator A and indicator B change colour — the overlap gives the pH range.',
  },

  q2_e: {
    marks: 2,
    exemplar: 'When Titan is closer to the Sun it receives more solar energy / more UV radiation (1). This increases the temperature / energy of the gas particles so more particles have energy above the activation energy — so the rate increases (1). Award also: more frequent collisions with sufficient energy.',
    keyConcepts: ['reaction rate', 'activation energy', 'temperature'],
    keywords: ['solar energy', 'temperature', 'activation energy', 'collision frequency'],
    feedbackHit: 'Good — linked increased solar energy to higher temperature and faster reaction rate.',
    feedbackMiss: 'More solar energy → higher temperature → more particles exceed activation energy → rate increases.',
  },

  q2_f: {
    marks: 2,
    exemplar: 'A catalyst provides an alternative reaction pathway with a lower activation energy (1). It is not consumed in the reaction and can be used repeatedly (1).',
    keyConcepts: ['catalysts', 'activation energy'],
    keywords: ['catalyst', 'activation energy', 'alternative pathway', 'not consumed'],
    feedbackHit: 'Correct — catalyst lowers activation energy and is not consumed.',
    feedbackMiss: 'A catalyst lowers activation energy; it is not used up in the reaction.',
  },

  q2_g: {
    marks: 2,
    exemplar: 'Any two of: to search for signs of (ancient) life / to study Titan\'s unique hydrocarbon chemistry / to understand how Earth\'s early atmosphere formed / to investigate liquid methane lakes as a potential environment for exotic life / to study the organic chemistry of the atmosphere. Award 1 mark each.',
    keyConcepts: ['astrobiology', 'scientific exploration'],
    keywords: ['life', 'atmosphere', 'hydrocarbon lakes', 'astrobiology'],
    feedbackHit: 'Good scientific reasoning for Titan exploration.',
    feedbackMiss: 'Think about what makes Titan scientifically interesting: hydrocarbon lakes, complex organic chemistry, potential for life.',
  },

  // ── Q3 — Camping fuel tablets ─────────────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'A = Solid; B = Liquid. Award 1 mark each.',
    keyConcepts: ['states of matter'],
    keywords: ['solid', 'liquid', 'state of matter'],
    feedbackHit: 'Correct — unlit tablet is solid; melted fuel near flame is liquid.',
    feedbackMiss: 'The unlit fuel tablet is solid; when it melts it becomes liquid before vaporising.',
    blankAnswers: ['Solid', 'Liquid'],
  },

  q3_b: {
    marks: 2,
    exemplar: 'Name: Propane; Chemical class: Alkane. Award 1 mark each.',
    keyConcepts: ['organic chemistry', 'hydrocarbons', 'alkanes'],
    keywords: ['propane', 'alkane', 'hydrocarbon'],
    feedbackHit: 'Correct — C₃H₈ is propane, an alkane.',
    feedbackMiss: 'C₃H₈: three carbons = prop-; single bonds only = -ane.',
  },

  q3_c: {
    marks: 2,
    exemplar: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Coefficients: 1, 5, 3, 4. Award 1 mark for C and H balanced; 1 mark for O balanced.',
    keyConcepts: ['combustion', 'balancing equations'],
    keywords: ['combustion', 'balanced equation', 'propane', 'oxygen'],
    feedbackHit: 'Correctly balanced combustion of propane.',
    feedbackMiss: 'Balance C first (3 carbons → 3CO₂), then H (8 hydrogens → 4H₂O), then count O atoms on right and balance O₂ on left.',
    blankAnswers: ['1', '5', '3', '4'],
  },

  q3_d: {
    marks: 3,
    exemplar: 'Direction: increase. Justification: a wind shield reduces heat loss to the surroundings / maintains a higher temperature around the tablet (1); this increases the rate of combustion (1); and reduces oxygen depletion by trapping hot combustion gases (1). Award up to 3 marks for coherent scientific reasoning.',
    keyConcepts: ['combustion rate', 'insulation'],
    keywords: ['wind shield', 'heat loss', 'temperature', 'rate', 'increase'],
    feedbackHit: 'Good hypothesis with valid scientific reasoning.',
    feedbackMiss: 'A wind shield reduces heat loss — so the temperature around the tablet is higher, maintaining a faster rate of combustion.',
    blankAnswers: ['increase'],
  },

  q3_e: {
    marks: 1,
    exemplar: '8.50 × 10⁻² g min⁻¹. Award 1 mark for correct standard form (coefficient 1 ≤ x < 10 with correct power of 10).',
    keyConcepts: ['standard form', 'scientific notation'],
    keywords: ['standard form', '8.50 × 10⁻²', 'scientific notation'],
    feedbackHit: 'Correct standard form.',
    feedbackMiss: 'Move the decimal point so the number is between 1 and 10: 0.0850 = 8.50 × 10⁻².',
  },

  q3_f: {
    marks: 2,
    exemplar: 'Any two of: axes are not labelled / missing units; bars should be a line or scatter plot (continuous data); no title; scale does not start at zero / unequal intervals; data points not shown as points. Award 1 mark each.',
    keyConcepts: ['scientific graphs', 'data presentation'],
    keywords: ['axis labels', 'units', 'line graph', 'scale', 'title'],
    feedbackHit: 'Two valid graph errors identified.',
    feedbackMiss: 'Check: Do axes have labels and units? Is the correct graph type used for continuous data? Does the scale start at zero?',
  },

  q3_g: {
    marks: 4,
    exemplar: 'The enclosed lantern restricts the flow of oxygen to the combustion (1), reducing the rate of combustion compared to the open tray holder (1). In the open tray, oxygen is freely available so combustion is more complete and faster (1). Therefore the rate of fuel combustion would be lower in the enclosed lantern / higher in the open tray (1).',
    keyConcepts: ['oxygen availability', 'combustion rate'],
    keywords: ['oxygen', 'enclosed', 'open', 'rate', 'combustion'],
    feedbackHit: 'Correctly explained how oxygen availability differs between set-ups.',
    feedbackMiss: 'Compare oxygen supply in an enclosed lantern vs an open tray — which allows more O₂ to reach the burning tablet?',
  },

  // ── Q4 — Rose vs jasmine wax melts ────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Independent variable: fragrance type / type of wax melt (rose or jasmine). Dependent variable: burn duration / time taken to melt completely. Award 1 mark each.',
    keyConcepts: ['variables', 'experimental design'],
    keywords: ['independent variable', 'dependent variable', 'fragrance', 'burn time'],
    feedbackHit: 'Correct IV and DV identified.',
    feedbackMiss: 'IV = what you change (fragrance type); DV = what you measure (burn time).',
  },

  q4_b: {
    marks: 2,
    exemplar: 'Average = (27.0 + 30.0 + 27.0) ÷ 3 = 84.0 ÷ 3 = 28.0 hours. Award 1 mark for correct addition, 1 mark for correct answer of 28.0 h.',
    keyConcepts: ['calculating mean', 'data processing'],
    keywords: ['mean', 'average', 'jasmine', '28.0 hours'],
    feedbackHit: 'Correct mean calculation of 28.0 h.',
    feedbackMiss: 'Add the three jasmine trials and divide by 3: (27.0 + 30.0 + 27.0) ÷ 3.',
  },

  q4_c: {
    marks: 1,
    exemplar: 'The friend excluded/removed the anomalous result (outlier) of 36.2 hours from the rose data before calculating the mean: (31.0 + 32.5) ÷ 2 = 31.75 h.',
    keyConcepts: ['anomalous results', 'outliers'],
    keywords: ['outlier', 'anomalous result', '36.2'],
    feedbackHit: 'Correct — the friend removed the outlier 36.2 h.',
    feedbackMiss: 'Which rose trial value is very different from the other two? The friend removed that value.',
  },

  q4_d: {
    marks: 3,
    exemplar: 'The hypothesis is NOT valid (1) because the containers are different (ceramic dish vs glass dish) which affects heat transfer / evaporation rate (1), AND the masses of wax are different (175 g vs 120 g) which directly affects burn duration — more wax = longer burn time regardless of fragrance (1). The investigation is therefore not a fair test. Award up to 3 marks.',
    keyConcepts: ['validity', 'fair test', 'control variables'],
    keywords: ['not valid', 'different containers', 'different masses', 'fair test'],
    feedbackHit: 'Correctly evaluated the lack of control variables.',
    feedbackMiss: 'A valid investigation needs all variables except the IV kept the same. What else differs between the two wax melts?',
  },

  q4_e: {
    marks: 2,
    exemplar: 'Improvement: use the same type and size of dish/container for both wax melts AND use the same mass (e.g. 150 g) of each wax melt. Justification: this controls the dish type and mass of wax as variables, making the comparison of fragrances fair / isolating the effect of fragrance on burn duration. Award 1 mark for valid improvement + 1 mark for justification.',
    keyConcepts: ['experimental improvement', 'control variables'],
    keywords: ['same container', 'same mass', 'control', 'fair test'],
    feedbackHit: 'Valid improvement with clear justification.',
    feedbackMiss: 'Identify what was different between the two set-ups (dish, mass) and say how to make those the same.',
  },

  // ── Q5 — Tea leaves & biomass ─────────────────────────────────────────────
  q5_a: {
    marks: 2,
    exemplar: 'Correct setup: filter paper placed inside the funnel; beaker positioned under the funnel to collect the filtrate. Award 1 mark for filter paper in funnel; 1 mark for collecting beaker in correct position.',
    keyConcepts: ['filtration', 'separation'],
    keywords: ['filter paper', 'funnel', 'beaker', 'filtrate'],
    feedbackHit: 'Correct filtration setup.',
    feedbackMiss: 'Filter paper goes inside the funnel; place a beaker underneath to collect the liquid that passes through.',
  },

  q5_b: { type: 'mcq', correct: 0 } as MCQEntry,

  q5_c: {
    marks: 6,
    exemplar: 'Award marks for: correct type of graph (bar chart) [1]; both axes labelled with units (Biomass type / Energy in MJ tonne⁻¹) [1]; sensible and evenly spaced scale on y-axis starting at 0 [1]; all five bars correct height within ±0.5 of scale unit [2 marks: 2 if all correct, 1 if 3-4 correct]; bars evenly spaced and correctly labelled [1].',
    keyConcepts: ['bar charts', 'data representation', 'biomass energy'],
    keywords: ['bar chart', 'axes', 'scale', 'label', 'biomass', 'energy'],
    feedbackHit: 'Well-constructed bar chart with all elements.',
    feedbackMiss: 'Check: bar chart type, axis labels + units, scale from 0, all 5 bars at correct heights.',
  },

  q5_d: { type: 'mcq', correct: 1 } as MCQEntry,

  q5_e: {
    marks: 2,
    exemplar: 'It is important to recycle spent tea leaves because it reduces the volume of organic waste sent to landfill (1), and converts a waste material into a renewable fuel source that can reduce dependence on fossil fuels / reduce CO₂ emissions from non-renewable energy (1).',
    keyConcepts: ['sustainability', 'waste reduction', 'renewable energy'],
    keywords: ['recycling', 'landfill', 'renewable fuel', 'sustainability', 'fossil fuels'],
    feedbackHit: 'Good sustainability reasoning for recycling tea leaves.',
    feedbackMiss: 'Think about where tea leaves go if not recycled (landfill) and what benefit turning them into fuel provides.',
  },

  // ── Q6 — Design investigation (wax energy density) ────────────────────────
  q6_: {
    marks: 16,
    exemplar: `Criterion B: Design Investigation — Wax Energy Density (16 marks)

**Identifying variables (4 marks)**
- Independent variable: type of wax (soy, paraffin, beeswax, coconut, carnauba)
- Dependent variable: temperature increase of water / energy released per gram of wax burned
- Control variables (2): volume/mass of water; distance between flame and calorimeter; mass of wax used; duration of burning

**Equipment justification (2 marks)**
- Set-up A (open calorimeter): allows easier handling but greater heat loss
- Set-up B (enclosed calorimeter): reduces heat loss, more accurate energy measurement — justify choice with reference to reducing heat loss

**Sufficient data / method (8 marks)**
- Describe step-by-step method: measure mass of wax before and after burning; record temperature of water before and after
- At least 3 trials per wax type for reliability
- Use same mass of water (e.g. 100 cm³) and same starting temperature for each trial
- Allow same burn time (e.g. 60 s) or burn same mass of wax
- Calculate energy: Q = mcΔT; express as energy per gram of wax burned
- Include how to record results in a table

**Safety (2 marks)**
- Identify at least two hazards: fire/burns from open flame; wax vapour; hot equipment
- State corresponding precautions: use tongs / heat-proof mat; keep flammable materials away; use safety goggles`,
    keyConcepts: ['experimental design', 'energy density', 'variables', 'calorimetry'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'method', 'safety', 'calorimeter', 'energy'],
    feedbackHit: 'Excellent investigation design with all required elements.',
    feedbackMiss: 'Make sure to include: IV/DV/2 CVs, equipment set-up justification, detailed method with repeats, and safety precautions.',
  },

  // ── Q7 — Water consumption & filtration ───────────────────────────────────
  q7_a: {
    marks: 1,
    exemplar: 'Asia. Award 1 mark.',
    keyConcepts: ['graph reading', 'data interpretation'],
    keywords: ['Asia', 'largest increase', 'water consumption'],
    feedbackHit: 'Correct — Asia shows the largest increase from 1900 to 2020.',
    feedbackMiss: 'Look at which region starts low in 1900 and reaches the highest value by 2020.',
  },

  q7_b: {
    marks: 2,
    exemplar: '~1000 (± 100) billion m³. Award 1 mark for reading the correct region (North America); 1 mark for a value in the range 900–1100 billion m³.',
    keyConcepts: ['graph reading', 'data interpretation'],
    keywords: ['North America', '1960', 'billion m³'],
    feedbackHit: 'Correct reading from graph for North America in 1960.',
    feedbackMiss: 'Find North America\'s line on the graph and read off the value at the year 1960.',
  },

  q7_c: {
    marks: 1,
    exemplar: 'Any one of: rapid industrialisation in Asia after 1960; population growth; expansion of agriculture requiring irrigation; economic development. Award 1 mark.',
    keyConcepts: ['population', 'industrialisation', 'water demand'],
    keywords: ['population growth', 'industrialisation', 'agriculture', 'irrigation'],
    feedbackHit: 'Valid reason for Asia\'s dramatic water consumption increase.',
    feedbackMiss: 'Think about what was happening economically and demographically in Asia from the 1960s onwards.',
  },

  q7_d: { type: 'mcq', correct: 2 } as MCQEntry,

  q7_e: {
    marks: 6,
    exemplar: `Award up to 6 marks for a balanced comparison that covers advantages AND disadvantages of each filter for mountain spring water:

**Hollow fiber advantages vs GAC:**
- Smaller pore size (0.2 μm) removes bacteria/protozoa more effectively than GAC (0.5–1.0 μm) [1]
- Longer filter life (9 months vs 4 months) — fewer replacement purchases needed [1]

**Hollow fiber disadvantages vs GAC:**
- Higher unit cost ($145 vs $70) [1]
- Higher filter replacement cost ($35 vs $15) [1]
- Lower water flow rate (1.5–2.5 vs 3.0–4.0 dm³/min) [1]

**Justified recommendation:**
- Hollow fiber is most suitable for mountain spring water because its smaller pore size (0.2 μm) is more likely to remove pathogenic bacteria/protozoa/parasites from an uncontrolled spring water source, despite the higher cost [1]`,
    keyConcepts: ['water filtration', 'pore size', 'cost-benefit analysis'],
    keywords: ['pore size', 'filter life', 'cost', 'bacteria', 'hollow fiber', 'GAC'],
    feedbackHit: 'Well-structured comparison with justified recommendation.',
    feedbackMiss: 'Compare pore size, cost (unit + filter), lifespan, and flow rate — then recommend based on what matters most for spring water safety.',
  },

  // ── Q8 — Industrial water treatment ──────────────────────────────────────
  q8_: {
    marks: 13,
    exemplar: `Criterion D: Evaluating water treatment technologies for inland industrial district (13 marks)

**Economic implications (3 marks — 1 per technology)**
- Activated sludge: moderate capital cost; high operating cost (energy for aeration, biosolids disposal); effective for organic waste
- Advanced oxidation (UV/H₂O₂): high capital and reagent cost; UV lamps need regular replacement; effective for hormones and organic solvents
- Ion exchange: moderate–high cost for resin; high regeneration cost when loaded with heavy metals; very effective for chromium/lead

**Environmental impact (3 marks — 1 per technology)**
- Activated sludge: produces biosolids (sludge) that require safe disposal; risk of eutrophication if effluent released early
- Advanced oxidation: UV radiation energy consumption; H₂O₂ must be handled and stored safely; no chemical sludge
- Ion exchange: spent resin loaded with heavy metals is hazardous waste; potential secondary pollution if not managed

**Social aspects (3 marks)**
- Jobs created in operation and maintenance of the facility
- Local community requires safe drinking water — proximity to industrial zone creates public concern
- Education and transparency needed to build public trust; noise/odour from facility may affect nearby residents

**Appraisal of unsuitable technology (4 marks)**
- Activated sludge would NOT be the most suitable primary technology for heavy metals (Cr, Pb) and organic solvents. Biological processes are not designed to remove heavy metals — these would pass through into the effluent [1]. While it is good for organic matter [1], the textile waste stream has high metal content requiring physicochemical treatment [1]. Ion exchange or advanced oxidation is more appropriate for these contaminants [1].`,
    keyConcepts: ['water treatment', 'economic analysis', 'environmental impact', 'social considerations'],
    keywords: ['activated sludge', 'advanced oxidation', 'ion exchange', 'heavy metals', 'economic', 'environmental', 'social'],
    feedbackHit: 'Comprehensive evaluation with all four required elements.',
    feedbackMiss: 'Include: economic comparison of all 3 technologies; environmental impact of each; social aspects; and identify which technology is unsuitable with justification.',
  },
}
