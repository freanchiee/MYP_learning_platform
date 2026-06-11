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
  // ── Q1 ────────────────────────────────────────────────────────────────────
  q1_a: {
    marks: 1,
    exemplar: 'Accept any one of: any noble gas (He, Ne, Ar, Kr, Xe, Rn); any element from atomic number 200–280; any actinide except Th or U; Sc, Ga, Ge, or Hf.',
    keyConcepts: ['Mendeleev\'s periodic table', 'Historical chemistry'],
    keywords: ['noble gas', 'lanthanide', 'actinide', 'Mendeleev', 'element'],
    feedbackHit: 'Correct — well done for identifying an element absent from Mendeleev\'s original table.',
    feedbackMiss: 'The answer should be a noble gas, or a lanthanide/actinide (except Th or U), or an element such as Sc, Ga, Ge, or Hf.',
  },

  q1_b: {
    marks: 2,
    exemplar: 'Lanthanides or actinides [1 mark]. Reason: very small quantities exist or many are not naturally occurring; OR noble/inert gases — unreactive or not found in compounds [1 mark].',
    keyConcepts: ['Lanthanides and actinides', 'Periodic table history'],
    keywords: ['lanthanide', 'actinide', 'unreactive', 'not naturally occurring', 'noble gas'],
    feedbackHit: 'Well done — correct group identified with valid reason.',
    feedbackMiss: 'Name the missing group AND give a reason linked to it (e.g. not naturally occurring, unreactive).',
  },

  q1_c: {
    marks: 2,
    exemplar: 'Number of protons = 27 [1 mark]; Number of neutrons = 33 [1 mark]. Working: Mt atomic number = 109; protons in Pb = 82; protons in X = 109 − 82 = 27 (Co). Mass of X = 268 − 208 = 60; neutrons = 60 − 27 = 33.',
    keyConcepts: ['Atomic structure', 'Nuclear fusion', 'Protons and neutrons'],
    keywords: ['27 protons', '33 neutrons', 'mass number', 'atomic number', '²⁰⁸Pb', '²⁶⁸Mt', 'cobalt'],
    feedbackHit: 'Excellent — 27 protons and 33 neutrons correctly calculated for element X (Cobalt).',
    feedbackMiss: 'Protons: Mt(109) − Pb(82) = 27 (Co). Mass of X: 268 − 208 = 60; neutrons = 60 − 27 = 33.',
  },

  q1_d: {
    marks: 1,
    exemplar: 'Cobalt / Co (follow-through from part (c)).',
    keyConcepts: ['Element identification', 'Atomic number'],
    keywords: ['cobalt', 'Co', 'element 27'],
    feedbackHit: 'Correct — element X with 27 protons is cobalt (Co).',
    feedbackMiss: 'The answer is Cobalt (Co). Element with atomic number 27 is cobalt.',
  },

  // ── Q2 ────────────────────────────────────────────────────────────────────
  q2_a: { type: 'mcq', correct: 2 } as MCQEntry,

  q2_b: {
    marks: 2,
    exemplar: '3NO₂(g) + H₂O(l) → 2HNO₃(aq) + NO(g). First mark: any two correct coefficients. Second mark: all three coefficients correct (3, 2, 1). Verification: N: 3=2+1 ✓; O: 6+1=7; right: 6+1=7 ✓; H: 2=2 ✓.',
    keyConcepts: ['Balancing equations', 'Nitrogen dioxide disproportionation'],
    keywords: ['3NO₂', 'H₂O', '2HNO₃', 'NO', 'balancing', 'disproportionation', 'coefficients'],
    feedbackHit: 'Well done — 3NO₂ + H₂O → 2HNO₃ + NO correctly balanced.',
    feedbackMiss: 'Balance: N: 3=2+1 ✓; O: 6+1=7; right: 6+1=7 ✓; H: 2=2 ✓. Coefficients: 3, 2, 1.',
    blankAnswers: ['3', '2', '1'],
  },

  q2_c: {
    marks: 1,
    exemplar: 'The smog is acidic / contains an acid / has a low pH.',
    keyConcepts: ['Acid-base indicators', 'Acidic smog'],
    keywords: ['acidic', 'acid', 'low pH', 'universal indicator', 'red', 'smog'],
    feedbackHit: 'Correct — red universal indicator indicates acid conditions.',
    feedbackMiss: 'Universal indicator turns red in acidic conditions. The smog contains HNO₃ and HNO₂, so it is acidic.',
  },

  q2_d: {
    marks: 2,
    exemplar: 'Group 7 [1 mark]; Period 3 [1 mark]. Do not award if group and period are switched.',
    keyConcepts: ['Periodic table', 'Groups and periods', 'Chlorine'],
    keywords: ['Group 7', 'Period 3', 'chlorine', 'Cl', 'periodic table'],
    feedbackHit: 'Correct — chlorine is in Group 7, Period 3.',
    feedbackMiss: 'Chlorine (Cl, atomic number 17) is in Group 7 (halogens) and Period 3 of the periodic table.',
  },

  q2_e: {
    marks: 2,
    exemplar: 'Molar mass of H₂S = (2 × 1) + 32 = 2 + 32 = 34 g mol⁻¹. Accept 34 or 0.034 kg mol⁻¹. Unit and value must agree.',
    keyConcepts: ['Molar mass', 'Relative formula mass', 'Hydrogen sulfide'],
    keywords: ['molar mass', '34 g/mol', 'H₂S', 'hydrogen sulfide', 'relative formula mass'],
    feedbackHit: 'Correct — the molar mass of H₂S is 34 g mol⁻¹.',
    feedbackMiss: 'H₂S: 2(1) + 32 = 34 g mol⁻¹. Include the unit.',
  },

  q2_f: {
    marks: 4,
    exemplar: 'Award 1 mark per correct class + name pair:\n• Molecule A: Ester — Propyl methanoate\n• Molecule B: Alkane — Butane\n• Molecule C: Alcohol — Propan-2-ol\n• Molecule D: Carboxylic acid — Ethanoic acid',
    keyConcepts: ['Organic compound classes', 'VOCs', 'Functional groups'],
    keywords: ['ester', 'propyl methanoate', 'alkane', 'butane', 'alcohol', 'propan-2-ol', 'carboxylic acid', 'ethanoic acid', 'Los Angeles smog'],
    feedbackHit: 'Well done — correctly identified all four VOC classes and names.',
    feedbackMiss: 'Identify functional groups: ester(–COO–), alcohol(–OH), carboxylic acid(–COOH), alkane(C–H only). Names: propyl methanoate, butane, propan-2-ol, ethanoic acid.',
  },

  // ── Q3 ────────────────────────────────────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'Any two from: good thermal / heat conductivity; lightweight (low density); high melting point; malleable; rigid / solid.',
    keyConcepts: ['Physical properties of metals', 'Camping cookware'],
    keywords: ['thermal conductivity', 'lightweight', 'high melting point', 'malleable', 'rigid'],
    feedbackHit: 'Well done — two valid physical properties for camping cookware.',
    feedbackMiss: 'Metals suit camping cookware for: heat conductivity, high melting point, and being lightweight/malleable for ease of use outdoors.',
  },

  q3_b: {
    marks: 3,
    exemplar: 'Charge is +4 or 4+ [1 mark]. Oxidised [1 mark]. Because electrons are lost from the Ti atom / oxidation state increases from 0 to +4 [1 mark]. Accept half equation but "oxidised" must be stated.',
    keyConcepts: ['Oxidation states', 'Ionic charge', 'Redox', 'Titanium'],
    keywords: ['Ti⁴⁺', '+4', 'oxidised', 'electrons lost', 'oxidation state', 'increases'],
    feedbackHit: 'Correct — Ti⁴⁺, oxidised, electrons lost (0 → +4).',
    feedbackMiss: 'Titanium forms Ti⁴⁺ (charge = +4). It is oxidised because it loses 4 electrons; oxidation state rises from 0 to +4.',
  },

  q3_c: {
    marks: 4,
    exemplar: 'Bonding [2 marks]: ionic (in Al₂O₃ anodised layer) [1 mark]; metallic (in metal cookware) [1 mark]. Advantages [2 marks]: anodised layer forms a protective coating [1 mark]; prevents metal ions dissolving into food OR ceramic layer is insoluble [1 mark]; harder surface or heat resistant [conditional].',
    keyConcepts: ['Ionic bonding', 'Metallic bonding', 'Anodised aluminium'],
    keywords: ['ionic', 'metallic', 'Al₂O₃', 'anodised', 'protective layer', 'insoluble', 'hard', 'heat resistant'],
    feedbackHit: 'Well done — ionic/metallic bonding and advantages of anodised layer correctly stated.',
    feedbackMiss: 'The Al₂O₃ anodised layer has ionic bonding; the metal cookware has metallic bonding. The ceramic layer is insoluble and hard, preventing metal ions from entering food and providing scratch resistance.',
  },

  // ── Q4 ────────────────────────────────────────────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'Accept any one of: volume of ink drop; type/brand of container; volume of water; size of beaker.',
    keyConcepts: ['Control variables', 'Fair test'],
    keywords: ['volume of ink', 'container', 'volume of water', 'control variable'],
    feedbackHit: 'Correct — a valid control variable for the inkdrop diffusion experiment.',
    feedbackMiss: 'A control variable is kept constant: e.g. volume of ink drop, type of container, volume of water.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'Direction: decreases [1 mark, WTTE]. Reason [2 marks independently]: kinetic energy increases with increasing temperature [1 mark]; ink particles diffuse/mix with water molecules faster [1 mark].',
    keyConcepts: ['Hypothesis formulation', 'Kinetic theory', 'Diffusion'],
    keywords: ['decreases', 'kinetic energy', 'temperature', 'diffuse', 'faster', 'hypothesis'],
    feedbackHit: 'Well done — direction correct (decreases) with kinetic energy justification.',
    feedbackMiss: 'Higher temperature → more kinetic energy → ink particles move faster through water → time for dispersion decreases.',
    blankAnswers: ['decreases'],
  },

  q4_c: {
    marks: 2,
    exemplar: '200 ± 10 (seconds) [1 mark]. Unit: seconds / s [1 mark].',
    keyConcepts: ['Graph reading', 'Prediction'],
    keywords: ['200 seconds', 'graph', 'predict', '70°C', 'read'],
    feedbackHit: 'Correct — approximately 200 s at 70°C with unit.',
    feedbackMiss: 'Read the y-axis at x = 70°C from the graph. Expected ~200 s. Include the unit (seconds).',
  },

  q4_d: {
    marks: 3,
    exemplar: 'Record data at more temperature points / intermediate temperatures [1 mark]; carry out more than one trial at each temperature [1 mark]; calculate average for each temperature [1 mark].',
    keyConcepts: ['Improving experimental method', 'Non-linear relationships'],
    keywords: ['more temperatures', 'more trials', 'average', 'non-linear'],
    feedbackHit: 'Well done — valid improvements to confirm non-linear relationship.',
    feedbackMiss: 'To confirm non-linear: measure at more temperature intervals; repeat ≥3 times at each; calculate mean.',
  },

  // ── Q5 ────────────────────────────────────────────────────────────────────
  q5_a: { type: 'mcq', correct: 3 } as MCQEntry,

  q5_b: {
    marks: 2,
    exemplar: 'Working: (4.1 + 4.6 + 3.8) / 3 = 12.5 / 3 = 4.166… [1 mark]. Final answer: 4.2 s [1 mark].',
    keyConcepts: ['Mean calculation', 'Data processing'],
    keywords: ['mean', 'average', '4.2', 'lifespan', 'foam mixture 4'],
    feedbackHit: 'Correct — mean lifespan for foam mixture 4 is 4.2 s.',
    feedbackMiss: 'Mean = (4.1 + 4.6 + 3.8) ÷ 3 = 12.5 ÷ 3 = 4.2 s (to 1 d.p.).',
  },

  q5_c: {
    marks: 6,
    exemplar: 'Scale (even, starts at 0) [1 mark]; x-axis label (foam mixture) [1 mark]; y-axis label (lifespan) [1 mark]; y-axis unit (s) [1 mark]; all points plotted correctly [1 mark]; title links DV and IV [1 mark].',
    keyConcepts: ['Graph construction', 'Bar charts'],
    keywords: ['bar chart', 'scale', 'lifespan', 'foam mixture', 'title', 'units', 'plotting'],
    feedbackHit: 'Excellent graph — title, labelled axes, correct scale, all bars accurate.',
    feedbackMiss: 'Bar chart: x-axis = "Foam mixture"; y-axis = "Mean lifespan / s"; starts at 0; title links variables; all bars correctly plotted.',
  },

  q5_d: {
    marks: 2,
    exemplar: 'Independent variable: Volume of honey [1 mark]. Dependent variable: Lifespan of foam [1 mark].',
    keyConcepts: ['Independent and dependent variables'],
    keywords: ['independent variable', 'dependent variable', 'volume of honey', 'lifespan of foam'],
    feedbackHit: 'Correct — volume of honey (IV) and lifespan of foam (DV).',
    feedbackMiss: 'IV = what is deliberately changed = volume of honey. DV = what is measured = lifespan of foam.',
    blankAnswers: ['Volume of honey', 'Lifespan of foam'],
  },

  q5_e: {
    marks: 3,
    exemplar: 'Shaking sealed tube more reliable [1 mark]. Reasoning: blowing produces variable amounts of foam [1 mark]; OR foam from blowing is different each time / uneven [1 mark]; OR shaking gives reproducible foam volumes [1 mark]. Max 3.',
    keyConcepts: ['Reliability', 'Reproducibility'],
    keywords: ['shaking', 'reliable', 'reproducible', 'variable', 'blowing', 'uneven'],
    feedbackHit: 'Well done — shaking method identified as more reliable with valid justification.',
    feedbackMiss: 'Shaking a sealed tube gives more reproducible foam because the same volume of gas is used each time. Blowing varies the volume and force, giving inconsistent results.',
  },

  q5_f: {
    marks: 3,
    exemplar: 'Working shown [1 mark]. Mean = (31 + 38 + 36) / 3 = 105 / 3 = 35 s [1 mark]. Final answer: 35 s [1 mark].',
    keyConcepts: ['Mean calculation'],
    keywords: ['35 seconds', 'baking soda', 'mean', 'calculation'],
    feedbackHit: 'Correct — mean lifespan for baking soda = 35 s.',
    feedbackMiss: 'Mean = (31 + 38 + 36) ÷ 3 = 105 ÷ 3 = 35 s.',
  },

  q5_g: {
    marks: 2,
    exemplar: 'Not valid [1 mark] because the two additives show different trends / baking soda decreases the lifespan of foam [1 mark, WTTE].',
    keyConcepts: ['Hypothesis validity', 'Data interpretation'],
    keywords: ['not valid', 'different trends', 'baking soda', 'decrease', 'lifespan', 'hypothesis'],
    feedbackHit: 'Correct — not valid because baking soda decreases foam lifespan, opposite to the prediction.',
    feedbackMiss: 'The hypothesis states all additives increase lifespan, but baking soda decreases it. The two additives show opposite trends → hypothesis not valid.',
  },

  // ── Q6 ────────────────────────────────────────────────────────────────────
  q6_: {
    marks: 17,
    exemplar: 'Criterion B design rubric (17 marks):\n1. Variables [max 4]: IV or DV (1); IV and DV (2); two CVs (3); equipment/method with variables contextualised (4).\n2. Equipment [max 4]: container and detergent mix (1); one additive (2); all additives + timer + measuring (3); full set measured (4).\n3. Method [max 4]: make foam (1); one additive mentioned (2); all additives + time until collapse (3); all additives measured, foam made and timed fully (4).\n4. Measurements [max 3]: time for one additive (1); time + foam volume controlled (2); time for all additives + volume controlled (3).\n5. Sufficient data [max 2]: 3 trials for one additive (1); 3 trials for all additives + mean (2).',
    keyConcepts: ['Criterion B design', 'Foam stability investigation'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'equipment', 'foam', 'stopwatch', 'method', 'trials', 'honey', 'glycerine'],
    feedbackHit: 'Well-designed — all five aspects addressed.',
    feedbackMiss: 'Strong design: IV = type/volume of additive; DV = lifespan of foam; CVs = volume of detergent, shaking force; equipment; step-by-step method; ≥3 trials per additive.',
  },

  q6_b: { type: 'mcq', correct: 2 } as MCQEntry,

  // ── Q7 ────────────────────────────────────────────────────────────────────
  q7_a: {
    marks: 8,
    exemplar: 'Criterion D evaluation (8 marks — 4 dimensions × 2):\n1. Landfills [2]: mention of e-waste/landfill (1); recycling reduces toxic e-waste in landfill significantly (2).\n2. Pollution [2]: one method (1); both compared with scientific reasoning (2).\n3. By-products [2]: recovered metals (gold, copper) as by-products (1); detailed comparison of value/use of recovered metals vs incineration by-products (2).\n4. Raw materials [2]: metals as finite/scarce raw materials (1); recycling reuses these materials, reducing mining demand (2).',
    keyConcepts: ['Green chemistry', 'E-waste recycling', 'Life cycle assessment'],
    keywords: ['landfill', 'toxic', 'recovered metals', 'gold', 'copper', 'by-products', 'raw materials', 'mining', 'prevention of waste'],
    feedbackHit: 'Excellent — all four green chemistry dimensions addressed with e-waste context.',
    feedbackMiss: 'Address: (1) Landfills — toxic metals prevented from leaching; (2) Pollution — chemical processing monitored; (3) By-products — recovered gold/copper sold; (4) Raw materials — finite metals reused, less mining.',
  },

  q7_b: {
    marks: 2,
    exemplar: 'Any two: metals (gold, silver, copper) can be recovered and reused; toxic substances (lead, mercury) prevented from entering landfill; economic benefit from recovered precious metals; reduces demand for primary mining.',
    keyConcepts: ['Life cycle assessment', 'E-waste', 'Metal recovery'],
    keywords: ['metals recovered', 'toxic', 'landfill', 'economic', 'gold', 'silver', 'mining'],
    feedbackHit: 'Correct — two valid reasons for phone take-back from the life cycle diagram.',
    feedbackMiss: 'Take-back schemes recover valuable metals (gold, copper) and prevent toxic substances (lead, mercury) from reaching landfill, providing economic and environmental benefits.',
  },

  // ── Q8 ────────────────────────────────────────────────────────────────────
  q8_: {
    marks: 17,
    exemplar: 'Criterion D evaluation rubric (17 marks):\n1. Efficiency [max 4]: one method (1); both (2); compared (3); compared with scientific justification (4).\n2. Environmental [max 3]: one method (1); both with reasoning (2); both with detailed reasoning (3).\n3. Economic [max 2]: one method (1); both compared (2).\n4. Green chemistry [max 3]: one aspect (1); two aspects (2); two with comparison (3).\n5. Complexity [max 2]: one method (1); both compared (2).\n6. Final choice [max 2]: stated (1); with justification (2).\n\nExample: Precipitation is simple/cheap but produces sludge containing arsenic compounds which must be safely disposed of. Chemisorption adsorbs arsenic onto iron-oxide surfaces efficiently at low concentrations, produces no hazardous liquid waste and uses no additional chemicals — better green chemistry match. Final choice: chemisorption because it efficiently removes arsenic, is environmentally safer (no sludge), and aligns with green chemistry principles of waste prevention.',
    keyConcepts: ['Arsenic water treatment', 'Green chemistry evaluation', 'Precipitation', 'Chemisorption'],
    keywords: ['efficiency', 'environmental', 'economic', 'green chemistry', 'complexity', 'arsenic', 'precipitation', 'chemisorption', 'photocatalysis', 'agricultural waste water'],
    feedbackHit: 'Excellent — all six dimensions covered and final choice justified for arsenic removal.',
    feedbackMiss: 'Compare two processes for arsenic removal across: efficiency, environmental impact, economic impact, green chemistry, complexity, and final justified choice.',
  },
}
