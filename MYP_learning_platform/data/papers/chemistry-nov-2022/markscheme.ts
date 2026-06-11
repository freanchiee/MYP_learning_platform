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
  // ── Q1: Copper / metals ────────────────────────────────────────────────────
  q1_a: { type: 'mcq', correct: 3 },         // Transition metals
  q1_b: {
    marks: 1,
    exemplar: 'Period 4',
    keyConcepts: ['Periodic table', 'Periods'],
    keywords: ['copper period 4', 'row 4', 'transition metal row'],
    feedbackHit: 'Correct — copper is in Period 4 of the periodic table.',
    feedbackMiss: 'Copper (Cu, atomic number 29) is in Period 4 — count the electron shells: 2,8,18,1.',
    blankAnswers: ['4'],
  },
  q1_c: {
    marks: 2,
    exemplar: 'An isotope is an atom of the same element with the same number of protons (and electrons) but a different number of neutrons / different mass number.',
    keyConcepts: ['Isotopes', 'Atomic structure'],
    keywords: ['same atomic number', 'different mass number', 'different neutrons', 'same protons'],
    feedbackHit: 'Correct — isotopes share the same atomic number but differ in neutron count / mass number.',
    feedbackMiss: 'Isotopes have the SAME number of protons (same element) but DIFFERENT numbers of neutrons → different mass numbers.',
  },
  q1_d: {
    marks: 2,
    exemplar: 'Neutrons = 65 − 29 = 36. Electrons = 29 (equal to proton number).',
    keyConcepts: ['Atomic structure', 'Isotopes'],
    keywords: ['neutrons = mass number − atomic number', 'Cu-65', '36 neutrons', '29 electrons'],
    feedbackHit: 'Correct — neutrons = 65−29 = 36; electrons = atomic number = 29.',
    feedbackMiss: 'Neutrons = mass number − atomic number = 65−29 = 36. Electrons always equal the atomic number in a neutral atom = 29.',
  },
  q1_e: { type: 'mcq', correct: 1 },         // Alloy
  q1_f: {
    marks: 2,
    exemplar: 'Bronze has greater resistance to corrosion than pure copper (so it won\'t deteriorate when exposed to weather). Also bronze has a high enough melting point so it can be cast into moulds / bronze is harder so sculptures won\'t be easily destroyed.',
    keyConcepts: ['Alloys', 'Properties of materials'],
    keywords: ['corrosion resistant', 'harder than copper', 'malleable', 'melting point moulds', 'weather resistance'],
    feedbackHit: 'Correct — links a property from the table (corrosion resistance / hardness / melting point) to why it suits sculpture-making.',
    feedbackMiss: 'Use data from the table: e.g. bronze has greater resistance to corrosion (won\'t tarnish) or higher melting point (can be cast in moulds) or is harder (sculptures won\'t be destroyed).',
  },

  // ── Q2: Iron / FeCl₃ bonding ───────────────────────────────────────────────
  q2_a: { type: 'mcq', correct: 3 },         // Oxidation
  q2_b: { type: 'mcq', correct: 0 },         // Option A: O=O (double bond with lone pairs)
  q2_c: {
    marks: 3,
    exemplar: '4 Fe + 3 O₂ → 2 Fe₂O₃',
    keyConcepts: ['Balancing equations', 'Oxidation of iron'],
    keywords: ['4Fe', '3O₂', '2Fe₂O₃', 'balanced equation', 'conservation of atoms'],
    feedbackHit: 'Correct — 4Fe : 3O₂ : 2Fe₂O₃ balances iron and oxygen atoms.',
    feedbackMiss: 'Check atom count: Fe₂O₃ needs 2 Fe and 3 O per formula unit. Try 4Fe + 3O₂ → 2Fe₂O₃: left = 4 Fe, 6 O; right = 4 Fe, 6 O ✓.',
    blankAnswers: ['4', '3', '2'],
  },
  q2_d: {
    marks: 4,
    exemplar: 'n(Fe) = m/Mr = 0.600/56 = 0.0107 mol. From balanced equation, ratio Fe:O₂ = 4:3, so n(O₂) = 0.0107 × (3/4) = 0.00803 mol.',
    keyConcepts: ['Moles calculation', 'Stoichiometry'],
    keywords: ['n = m/Mr', '0.600/56', '4:3 ratio', '0.00803 mol', 'stoichiometry'],
    feedbackHit: 'Correct — moles of Fe divided by 4 then multiplied by 3 gives moles of O₂.',
    feedbackMiss: 'Step 1: n(Fe) = 0.600/56 = 0.0107 mol. Step 2: Use 4Fe:3O₂ ratio → n(O₂) = 0.0107 × 3/4 ≈ 0.00803 mol.',
  },
  q2_e: {
    marks: 2,
    exemplar: 'Gas / slightly soluble / not conductive → Chlorine. Solid / insoluble / conductive → Iron. Solid / soluble / not conductive → Iron(III) chloride.',
    keyConcepts: ['Properties of substances', 'States of matter', 'Conductivity'],
    keywords: ['chlorine gas slightly soluble', 'iron solid conductive', 'FeCl₃ ionic solid soluble'],
    feedbackHit: 'Correct — matched all three substances to their physical properties.',
    feedbackMiss: 'Chlorine is a gas at room temp, slightly soluble, non-conductor (covalent). Iron is a solid, doesn\'t dissolve, conducts (metallic). FeCl₃ is ionic: solid, dissolves, but solution conducts — the solid doesn\'t.',
    blankAnswers: ['Chlorine', 'Iron', 'Iron(III) chloride'],
  },
  q2_f: {
    marks: 1,
    exemplar: '2, 8, 7   (or 1s² 2s² 2p⁶ 3s² 3p⁵)',
    keyConcepts: ['Electron configuration', 'Halogens'],
    keywords: ['2.8.7', 'chlorine 17 electrons', '3s² 3p⁵', 'three shells'],
    feedbackHit: 'Correct — chlorine has 17 electrons arranged 2, 8, 7.',
    feedbackMiss: 'Chlorine (Z=17) has 17 electrons. Shell 1 = 2, shell 2 = 8, shell 3 = 7 → 2.8.7.',
    blankAnswers: ['2.8.7'],
  },
  q2_g: {
    marks: 4,
    exemplar: 'Iron loses 3 electrons to form Fe³⁺ ions. Chlorine gains 1 electron to form Cl⁻ ions. Three Cl⁻ ions are needed per Fe³⁺. An ionic bond is formed by the electrostatic attraction between the oppositely charged Fe³⁺ and Cl⁻ ions.',
    keyConcepts: ['Ionic bonding', 'Electron transfer', 'Electrostatic attraction'],
    keywords: ['Fe loses electrons', 'Fe³⁺ cation', 'Cl gains electron', 'Cl⁻ anion', 'ionic bond', 'electrostatic attraction opposite charges'],
    feedbackHit: 'Correct — described electron transfer from Fe to Cl, forming ions and ionic bond.',
    feedbackMiss: 'In ionic bonding: Fe LOSES 3 electrons → Fe³⁺; each Cl GAINS 1 electron → Cl⁻; the bond is the electrostatic attraction between oppositely charged ions.',
  },
  q2_h: { type: 'mcq', correct: 0 },         // Corrosive

  // ── Q3: Acid rain / marble erosion ─────────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'Average = (3.14 + 2.79 + 2.87) ÷ 3 = 8.80 ÷ 3 = 2.93 g',
    keyConcepts: ['Data processing', 'Mean calculation'],
    keywords: ['average', '2.93 g', '(3.14+2.79+2.87)/3', 'mean vinegar'],
    feedbackHit: 'Correct — evidence of calculation and correctly rounded to 2.93.',
    feedbackMiss: 'Add the three trials: 3.14 + 2.79 + 2.87 = 8.80 g. Divide by 3: 8.80/3 = 2.93 g (3 sig figs).',
    blankAnswers: ['2.93'],
  },
  q3_b: {
    marks: 3,
    exemplar: 'The pH probe gives numerical/quantitative data to 3 significant figures, making it precise and reliable. Universal indicator paper gives a range of colours (qualitative data), and the measured pH depends on interpretation of a colour scale, introducing subjectivity. Therefore the pH probe produces more valid data.',
    keyConcepts: ['Evaluating methods', 'Validity', 'Quantitative vs qualitative data'],
    keywords: ['pH probe quantitative numerical', 'indicator qualitative colour', 'interpretation error', 'pH probe more valid'],
    feedbackHit: 'Correct — contrasted quantitative/precise pH probe with qualitative/interpretation-dependent indicator.',
    feedbackMiss: 'Key points: (1) pH probe = numerical/quantitative data to 3 sig figs; (2) indicator paper = colour range (qualitative) / dependent on colour interpretation; (3) therefore pH probe is more valid.',
  },
  q3_c: {
    marks: 2,
    exemplar: 'Lemon juice had the largest decrease in acidity because it showed the largest average increase in pH (3.49), compared to cola (2.65) and vinegar (2.49). A larger increase in pH means the solution became less acidic.',
    keyConcepts: ['pH scale', 'Acidity', 'Data interpretation'],
    keywords: ['lemon juice', 'largest pH increase', '3.49', 'least acidic after week', 'decrease in acidity'],
    feedbackHit: 'Correct — identified lemon juice and justified with largest average pH increase.',
    feedbackMiss: 'Decrease in acidity = increase in pH. From the table: Vinegar avg ΔpH = 2.49; Cola = 2.65; Lemon juice = 3.49 → Lemon juice had the largest increase in pH = largest decrease in acidity.',
  },
  q3_d: {
    marks: 17,
    exemplar: 'Investigation design (Crit B rubric):\n\nVariables: IV = size of marble chips (e.g. 0–1 mm to 9–12 mm — six sizes); DV = change in mass of marble chips (or volume of CO₂ produced, or pH change); CVs: concentration of H₂SO₄ (0.1 mol·dm⁻³), volume of acid (e.g. 50 cm³), temperature, time.\n\nEquipment: measuring cylinder (100 cm³), conical flask, balance (0.01 g precision), H₂SO₄ (0.1 mol·dm⁻³), marble chips (6 sizes), stopwatch, safety goggles.\n\nSufficient data: ≥ 5 different chip sizes tested; ≥ 3 trials per size; record initial and final mass; calculate mean change in mass.\n\nMethod: (1) Measure 50 cm³ of 0.1 mol·dm⁻³ H₂SO₄ into a conical flask. (2) Record initial mass of marble chips. (3) Add marble chips to the acid, start stopwatch. (4) After set time (e.g. 5 min), remove chips, dry, record final mass. (5) Calculate change in mass. (6) Repeat for all six chip sizes with 3 trials each.\n\nSafety: Wear safety goggles and gloves as H₂SO₄ is corrosive/irritant. Work in a well-ventilated area. Dispose of acid safely in sink with water.',
    keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Method', 'Safety'],
    keywords: ['IV chip size', 'DV mass change or CO₂', 'CVs acid concentration time temperature', 'equipment balance flask', '5 sizes 3 trials', 'step method', 'safety goggles acid corrosive'],
    feedbackHit: 'Strong design — IV/DV/CVs clearly stated, appropriate equipment, sufficient data (5+ sizes, 3+ trials), clear replicable method, acid safety addressed.',
    feedbackMiss: 'Check: Are IV (chip size) and DV (mass change/pH/CO₂ volume) explicitly stated? Are 2+ CVs named? Is equipment listed? Are there ≥5 sizes and ≥3 trials? Is there a step-by-step method? Is acid safety (corrosive/goggles) mentioned?',
  },
  q3_e: {
    marks: 2,
    exemplar: 'Research question: "How does the thickness of a protective coating affect the change in mass of marble chips when exposed to acid?" IV = thickness of coating; DV = change in mass (or volume of gas produced / colour change of sculpture / pH change).',
    keyConcepts: ['Research question', 'Independent and dependent variables'],
    keywords: ['thickness of coating IV', 'change in mass DV', 'pH change', 'volume gas DV', 'research question format'],
    feedbackHit: 'Correct — research question includes thickness of coating as IV and a measurable DV.',
    feedbackMiss: 'The IV must be "thickness of coating". The DV can be any measurable outcome: change in mass, volume of gas produced, pH change, or visual detail/colour of the sculpture.',
  },

  // ── Q4: Fire extinguisher investigation ────────────────────────────────────
  q4_a: {
    marks: 3,
    exemplar: 'IV: Number of teaspoons (or mass) of baking soda. DV: Number of candles extinguished. CV: Volume of vinegar (100 cm³) [or type/size of teapot; distance between spout and flame].',
    keyConcepts: ['Variables', 'Criterion B', 'Experimental design'],
    keywords: ['IV baking soda teaspoons', 'DV candles extinguished', 'CV volume vinegar', 'independent dependent control'],
    feedbackHit: 'Correct — IV (baking soda amount), DV (candles extinguished), and a valid CV identified.',
    feedbackMiss: 'IV = what you change = teaspoons/mass of baking soda. DV = what you measure = number of candles extinguished. CV = what you keep constant = volume of vinegar, type of teapot, or distance from spout to candle.',
    blankAnswers: ['Number of teaspoons of baking soda', 'Number of candles extinguished', 'Volume of vinegar'],
  },
  q4_b: {
    marks: 3,
    exemplar: 'If the mass of baking soda increases, then more candles will be extinguished, because more carbon dioxide is produced.',
    keyConcepts: ['Hypothesis', 'If–Then–Because', 'Carbon dioxide production'],
    keywords: ['if baking soda increases', 'then more candles extinguished', 'because more CO₂ produced', 'hypothesis'],
    feedbackHit: 'Correct hypothesis — If/then/because format with logical reasoning about CO₂.',
    feedbackMiss: 'A hypothesis needs: IF (IV increases) → THEN (DV increases/decreases) → BECAUSE (scientific reason). Here: more baking soda → more CO₂ → more candles extinguished.',
  },
  q4_c: {
    marks: 2,
    exemplar: 'Limitation 1: The mass of baking soda was not measured (only number of spoons given) — spoon sizes can vary. Limitation 2: Only one trial was conducted for each mass, so an average cannot be calculated.',
    keyConcepts: ['Limitations', 'Evaluating methods', 'Criterion C'],
    keywords: ['baking soda not weighed', 'spoon size varies', 'one trial no average', 'lid replacement', 'distance not fixed'],
    feedbackHit: 'Correct — two valid limitations identified from the method.',
    feedbackMiss: 'Look at the method carefully: (1) baking soda measured in spoons (not grams — variable amounts); (2) only one trial per mass (cannot calculate average); (3) distance from spout to candle not specified; (4) no instruction to replace lid quickly.',
  },
  q4_d: {
    marks: 1,
    exemplar: 'Different IV: concentration of the acid (vinegar) / type of acid / volume of acid / surface area of the carbonate / temperature of the solution.',
    keyConcepts: ['Extending investigations', 'Independent variables'],
    keywords: ['concentration of acid', 'type of acid', 'volume acid', 'surface area carbonate', 'temperature'],
    feedbackHit: 'Correct — suggested a valid different IV for the investigation.',
    feedbackMiss: 'Any variable that affects CO₂ production: concentration of acid, type of acid, volume of vinegar, surface area of baking soda, or temperature.',
  },
  q4_e: {
    marks: 3,
    exemplar: 'Table with two columns:\n\n| Mass of baking soda / g | Number of candles extinguished |\n|---|---|\n| 1 | 2 |\n| 2 | 4 |\n| 3 | 8 |\n| 4 | 8 |\n| 5 | 9 |\n\nHeaders include quantity AND units (g). Data in ascending order.',
    keyConcepts: ['Data organisation', 'Tables', 'Criterion C'],
    keywords: ['mass baking soda g', 'candles extinguished', 'two-column table headers units', 'data in order'],
    feedbackHit: 'Correct — table has labelled headers with units, and data presented in order.',
    feedbackMiss: 'Table must have: (1) headers with quantity AND unit (e.g. "Mass of baking soda / g"); (2) 5 rows with data in order; (3) data only in the body (not headers).',
  },
  q4_f: {
    marks: 5,
    exemplar: 'Graph requirements: x-axis = Mass of baking soda / g (0–5); y-axis = Number of candles extinguished (0–9 or more, even scale starting at 0); all 5 data points plotted correctly; line of best fit with approximately equal number of points above and below; axes labelled with quantity and unit.',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Criterion C'],
    keywords: ['x axis mass baking soda', 'y axis candles extinguished', 'even scale from zero', 'all points plotted', 'line of best fit'],
    feedbackHit: 'Correct — scales suitable, all data plotted accurately, line of best fit drawn, axes labelled.',
    feedbackMiss: 'Check: (1) y-axis starts at 0 with even increments; (2) all 5 data points plotted; (3) line of best fit passes through the middle of the data cloud; (4) both axes labelled with quantity and unit.',
  },

  // ── Q5: Fire extinguisher comparison ───────────────────────────────────────
  q5_a: {
    marks: 3,
    exemplar: 'The hanging extinguisher is the heaviest (5.6 kg) AND can only extinguish 3 m², which is not the largest area. The fire extinguisher ball covers the largest area (35 m²) but weighs only 1.3 kg, which is not the heaviest. Therefore the research statement is NOT valid.',
    keyConcepts: ['Evaluating research statements', 'Data interpretation', 'Criterion C'],
    keywords: ['hanging heaviest 5.6 kg covers 3 m²', 'ball 1.3 kg covers 35 m²', 'statement not valid', 'data reference'],
    feedbackHit: 'Correct — used data to show the heaviest extinguisher does NOT cover the largest area.',
    feedbackMiss: 'Must include DATA: Hanging = 5.6 kg → 3 m²; Ball = 1.3 kg → 35 m². The lightest ball covers the MOST area → statement is NOT valid.',
  },
  q5_b: {
    marks: 3,
    exemplar: 'Fire extinguisher ball. Justification (any two): Can be dropped from a height or thrown into the fire; spreads dry powder uniformly in all directions; covers a much larger area (35 m²); lightweight (1.3 kg) and easy to transport; operates automatically when touched by flame; 5-year expiry with low maintenance.',
    keyConcepts: ['Data application', 'Justifying choices', 'Criterion C'],
    keywords: ['fire ball', 'dropped thrown', 'all directions', '35 m² large area', 'lightweight', 'automatic operation'],
    feedbackHit: 'Correct — chose fire ball and justified with two valid data-linked reasons.',
    feedbackMiss: 'Fire extinguisher ball is best for forests: (1) can be thrown into fire without operator being close; (2) covers 35 m² uniformly; (3) lightweight. Must justify with data from the table.',
  },
  q5_c: { type: 'mcq', correct: 3 },         // Exothermic

  // ── Q6: Sleep / caffeine / sleep sprays ────────────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Adenosine: Alcohol (circled –OH group). Caffeine: Alkene (circled C=C double bond in the ring).',
    keyConcepts: ['Functional groups', 'Organic chemistry'],
    keywords: ['OH alcohol adenosine', 'C=C alkene caffeine', 'functional group identification'],
    feedbackHit: 'Correct — adenosine OH = alcohol; caffeine ring C=C = alkene.',
    feedbackMiss: 'Adenosine: the circled group –OH is a hydroxyl group = Alcohol functional group. Caffeine: the circled C=C in the ring is an Alkene functional group.',
    blankAnswers: ['Alcohol', 'Alkene'],
  },
  q6_b: {
    marks: 13,
    exemplar: 'Crit D evaluation (rubric — 13 marks):\n\nImportance of sleep: Bus drivers need adequate sleep (7–8 h) for safe reaction times, decision-making, and situational awareness. Sleep deprivation is linked to accidents, making this especially critical for long-distance drivers.\n\nSleep quality comparison: Spray B (Lavender, basil, jasmine; $0.38/sleep; 6 × interrupted sleep) showed the fewest interruptions among the cheaper options. Spray D or another spray may show superior sleep data if more detail is available. Specific data (interruptions, restless periods) must be referenced for full marks.\n\nEconomic considerations: Compare cost per sleep for all four sprays and total volume. Budget constraints of a hotel chain must be balanced against sleep quality outcomes.\n\nFinal choice (justified): Choose the spray that provides the best sleep quality at a reasonable cost, linking sleep quality data directly to the bus driver safety rationale.',
    keyConcepts: ['Criterion D', 'Societal impact', 'Economic evaluation', 'Sleep science'],
    keywords: ['bus driver safety sleep', 'spray comparison sleep quality', 'cost per sleep economic', 'justified final choice', 'evaluation'],
    feedbackHit: 'Strong Crit D response — outlined importance of sleep for safety, compared sleep quality AND economic data for multiple sprays, and gave a justified final choice.',
    feedbackMiss: 'Ensure you: (1) state why sleep matters for bus driver safety with a specific example; (2) compare sleep quality across more than one spray using data; (3) compare economic cost across sprays; (4) make a final justified choice that links sleep quality AND cost.',
  },

  // ── Q7: Frankincense vs Lavender ───────────────────────────────────────────
  q7_: {
    marks: 9,
    exemplar: 'Crit D discussion (rubric — 9 marks):\n\nSocial impact: Frankincense supports traditional village farmers and sustains centuries-old practices; low transport costs. Lavender is produced by large corporations using highly industrialised methods, limiting benefit to small farmers. Social impact favours frankincense.\n\nEnvironmental impact: Frankincense comes from boswellia trees — an endangered species — harvested by cutting, requiring dry rocky landscape; limited supply. Lavender is easy to replant and harvest repeatedly; needs more water but is not threatened. Environmental impact favours lavender for sustainability.\n\nFinal choice: Lavender is the better choice for the industry — it is significantly cheaper ($30.67 vs $90.67 per 15 ml), more scalable (3264 kg/acre), environmentally sustainable (replantable, not endangered), and can be produced reliably in quantity. Frankincense has strong social benefits but sourcing from an endangered species raises long-term sustainability concerns.',
    keyConcepts: ['Criterion D', 'Social impact', 'Environmental impact', 'Sustainability', 'Ethics'],
    keywords: ['frankincense traditional farmers endangered', 'lavender industrial corporate', 'environmental sustainability replantable', 'cost comparison justified choice'],
    feedbackHit: 'Strong Crit D — discussed social impact (both extracts), environmental impact (both), and gave a justified final choice with supporting evidence.',
    feedbackMiss: 'Need: (1) social impact for BOTH extracts; (2) environmental impact for BOTH extracts; (3) final choice supported by data (cost, scalability, sustainability).',
  },
}
