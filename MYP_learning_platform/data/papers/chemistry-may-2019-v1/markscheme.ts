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
    feedbackMiss: 'Name the missing group (lanthanides/actinides or noble gases) AND give a reason linked to that group (e.g. unreactive or not found naturally).',
  },

  q1_c: {
    marks: 2,
    exemplar: 'Number of protons = 28 [1 mark]; Number of neutrons = 35 [1 mark]. Working: Rg atomic number = 111; protons in Bi = 83; protons in X = 111 − 83 = 28 (Ni). Mass of X = 272 − 209 = 63; neutrons = 63 − 28 = 35.',
    keyConcepts: ['Atomic structure', 'Nuclear fusion', 'Protons and neutrons'],
    keywords: ['28 protons', '35 neutrons', 'mass number', 'atomic number', '²⁰⁹Bi', '²⁷²Rg', 'nickel'],
    feedbackHit: 'Excellent — 28 protons and 35 neutrons correctly calculated for element X (Nickel).',
    feedbackMiss: 'Protons: Rg(111) − Bi(83) = 28 (Ni). Mass of X: 272 − 209 = 63; neutrons = 63 − 28 = 35.',
  },

  q1_d: {
    marks: 1,
    exemplar: 'Nickel / Ni (follow-through from part (c)).',
    keyConcepts: ['Element identification', 'Atomic number'],
    keywords: ['nickel', 'Ni', 'element 28'],
    feedbackHit: 'Correct — element X with 28 protons is nickel (Ni).',
    feedbackMiss: 'The answer is Nickel (Ni). Element with atomic number 28 is nickel.',
  },

  // ── Q2 ────────────────────────────────────────────────────────────────────
  q2_a: { type: 'mcq', correct: 0 } as MCQEntry,

  q2_b: {
    marks: 2,
    exemplar: '2SO₂(g) + O₂(g) + 2H₂O(l) → 2H₂SO₄(l). First mark: any two correct coefficients. Second mark: all three coefficients correct (2, 2, 2). Verification: 2S+4O+2O+4H+2O=2S+8O+4H; right: 2H₂SO₄=2S+8O+4H ✓.',
    keyConcepts: ['Balancing equations', 'Sulfur dioxide', 'Acid rain'],
    keywords: ['2SO₂', 'O₂', '2H₂O', '2H₂SO₄', 'balancing', 'sulfuric acid', 'coefficients'],
    feedbackHit: 'Well done — 2SO₂ + O₂ + 2H₂O → 2H₂SO₄ correctly balanced.',
    feedbackMiss: 'Balance by checking atoms: 2S on left → 2H₂SO₄ on right; O: 4(SO₂)+2(O₂)+2(H₂O)=8; right: 2×4=8 ✓; H: 4 each side. All coefficients are 2.',
    blankAnswers: ['2', '2', '2'],
  },

  q2_c: {
    marks: 1,
    exemplar: 'The smog is acidic / contains an acid / has a low pH.',
    keyConcepts: ['Acid-base indicators', 'Acidic smog'],
    keywords: ['acidic', 'acid', 'low pH', 'universal indicator', 'red', 'smog'],
    feedbackHit: 'Correct — red universal indicator indicates acidic conditions.',
    feedbackMiss: 'Universal indicator turns red in acidic conditions. The smog contains acids (H₂SO₄, HNO₃), so it is chemically acidic.',
  },

  q2_d: {
    marks: 2,
    exemplar: 'Group 4 [1 mark]; Period 2 [1 mark]. Do not award if group and period are switched.',
    keyConcepts: ['Periodic table', 'Groups and periods', 'Carbon'],
    keywords: ['Group 4', 'Period 2', 'carbon', 'C', 'periodic table'],
    feedbackHit: 'Correct — carbon is in Group 4, Period 2.',
    feedbackMiss: 'Carbon (C, atomic number 6) is in Group 4 (column) and Period 2 (row) of the periodic table.',
  },

  q2_e: {
    marks: 2,
    exemplar: 'Molar mass of HNO₃ = 1 + 14 + (3 × 16) = 1 + 14 + 48 = 63 g mol⁻¹. Accept 63 or 0.063 kg mol⁻¹. Unit and value must agree.',
    keyConcepts: ['Molar mass', 'Relative formula mass', 'Nitric acid'],
    keywords: ['molar mass', '63 g/mol', 'HNO₃', 'nitric acid', 'relative formula mass'],
    feedbackHit: 'Correct — the molar mass of HNO₃ is 63 g mol⁻¹.',
    feedbackMiss: 'H(×1) + N + O(×3) = 1 + 14 + 48 = 63 g mol⁻¹.',
  },

  q2_f: {
    marks: 4,
    exemplar: 'Award 1 mark per correct class + name pair:\n• Molecule A: Ester — Methyl propanoate\n• Molecule B: Alkane — Hexane\n• Molecule C: Alcohol — Ethanol\n• Molecule D: Carboxylic acid — Butanoic acid',
    keyConcepts: ['Organic compound classes', 'VOCs', 'Functional groups'],
    keywords: ['ester', 'methyl propanoate', 'alkane', 'hexane', 'alcohol', 'ethanol', 'carboxylic acid', 'butanoic acid', 'Beijing smog'],
    feedbackHit: 'Well done — correctly identified all four VOC classes and names.',
    feedbackMiss: 'Identify functional groups: ester(–COO–), alcohol(–OH), carboxylic acid(–COOH), alkane(C–H only). Names: methyl propanoate (ester), hexane (alkane), ethanol (alcohol), butanoic acid (carboxylic acid).',
  },

  // ── Q3 ────────────────────────────────────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'Any two from: good thermal / heat conductivity; malleable; high melting point; rigid / solid. Do not accept electrical conductivity alone.',
    keyConcepts: ['Physical properties of metals', 'Metallic bonding'],
    keywords: ['thermal conductivity', 'malleable', 'high melting point', 'rigid', 'baking tray'],
    feedbackHit: 'Well done — two valid physical properties for baking trays.',
    feedbackMiss: 'Metals suit baking trays because they conduct heat well, have high melting points, and are malleable (can be shaped).',
  },

  q3_b: {
    marks: 3,
    exemplar: 'Charge is +2 or 2+ [1 mark]. Oxidised [1 mark]. Because electrons are lost from the Cu atom / oxidation state increases from 0 to +2 [1 mark]. Accept half equation showing oxidation but the word "oxidised" must be present.',
    keyConcepts: ['Oxidation states', 'Ionic charge', 'Redox', 'Copper'],
    keywords: ['Cu²⁺', '+2', 'oxidised', 'electrons lost', 'oxidation state', 'increases'],
    feedbackHit: 'Correct — Cu²⁺, oxidised, electrons lost.',
    feedbackMiss: 'Copper forms Cu²⁺ (charge = +2). It is oxidised because it loses 2 electrons (Cu → Cu²⁺ + 2e⁻); oxidation state increases from 0 to +2.',
  },

  q3_c: {
    marks: 4,
    exemplar: 'Bonding [2 marks]: covalent (in Teflon™) [1 mark]; metallic (in metal tray) [1 mark]. Advantages [2 marks]: Teflon™ forms a protective coating [1 mark]; metals produce soluble ions OR Teflon™ is insoluble [1 mark]; prevents health issues from ions [conditional on previous].',
    keyConcepts: ['Covalent bonding', 'Metallic bonding', 'Teflon properties'],
    keywords: ['covalent', 'metallic', 'Teflon', 'protective coating', 'soluble ions', 'insoluble', 'health'],
    feedbackHit: 'Well done — bonding types and advantages correctly stated.',
    feedbackMiss: 'Teflon™ has covalent bonding; the metal tray has metallic bonding. Teflon™ is insoluble and does not release harmful metal ions into food, providing a health benefit.',
  },

  // ── Q4 ────────────────────────────────────────────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'Accept any one of: volume of water; mass of coffee; stirring method; size of coffee granules.',
    keyConcepts: ['Control variables', 'Fair test'],
    keywords: ['volume of water', 'mass of coffee', 'stirring', 'control variable'],
    feedbackHit: 'Correct — a valid control variable for the coffee dissolution experiment.',
    feedbackMiss: 'A control variable is kept constant throughout. Examples: volume of water, mass of coffee, stirring.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'Direction: decreases [1 mark, WTTE]. Reason [2 marks independently]: kinetic energy increases with increasing temperature [1 mark]; coffee particles dissolve/mix faster [1 mark].',
    keyConcepts: ['Hypothesis formulation', 'Kinetic theory', 'Dissolution'],
    keywords: ['decreases', 'kinetic energy', 'temperature', 'dissolve', 'faster', 'hypothesis'],
    feedbackHit: 'Well done — hypothesis states dissolution time decreases and links to kinetic energy.',
    feedbackMiss: 'As temperature increases, kinetic energy increases, so coffee particles dissolve faster, meaning the time decreases.',
    blankAnswers: ['decreases'],
  },

  q4_c: {
    marks: 2,
    exemplar: '480 ± 10 (seconds) [1 mark]. Unit: seconds / s [1 mark].',
    keyConcepts: ['Graph reading', 'Prediction'],
    keywords: ['480 seconds', 'graph', 'predict', '40°C', 'read'],
    feedbackHit: 'Correct — approximately 480 s at 40°C with correct unit.',
    feedbackMiss: 'Read the y-axis at x = 40°C from the graph. Expected ~480 s. Include the unit (seconds/s).',
  },

  q4_d: {
    marks: 3,
    exemplar: 'Record data at intermediate temperatures [1 mark]; carry out more than one trial at each temperature [1 mark]; calculate an average [1 mark].',
    keyConcepts: ['Improving experimental method', 'Non-linear relationships'],
    keywords: ['intermediate temperatures', 'more trials', 'average', 'non-linear'],
    feedbackHit: 'Well done — valid improvements outlined.',
    feedbackMiss: 'To confirm non-linear: collect data at more temperature points; repeat each at least 3 times; calculate mean for each temperature.',
  },

  // ── Q5 ────────────────────────────────────────────────────────────────────
  q5_a: { type: 'mcq', correct: 3 } as MCQEntry,

  q5_b: {
    marks: 2,
    exemplar: 'Working: (8.8 + 9.4 + 9.3) / 3 = 27.5 / 3 = 9.166… [1 mark]. Final answer: 9.2 s [1 mark].',
    keyConcepts: ['Mean calculation', 'Data processing'],
    keywords: ['mean', 'average', '9.2', 'lifespan', 'soap film mixture 3'],
    feedbackHit: 'Correct — mean lifespan for mixture 3 is 9.2 s.',
    feedbackMiss: 'Mean = (8.8 + 9.4 + 9.3) ÷ 3 = 27.5 ÷ 3 = 9.2 s (to 1 d.p.).',
  },

  q5_c: {
    marks: 6,
    exemplar: 'Scale (even, starts at 0) [1 mark]; x-axis label (soap film mixture) [1 mark]; y-axis label (lifespan) [1 mark]; y-axis unit (s) [1 mark]; all points plotted correctly [1 mark]; title links DV and IV [1 mark].',
    keyConcepts: ['Graph construction', 'Bar charts'],
    keywords: ['bar chart', 'scale', 'lifespan', 'soap film mixture', 'title', 'units', 'plotting'],
    feedbackHit: 'Excellent graph — title, labelled axes with units, correct scale, all bars plotted accurately.',
    feedbackMiss: 'Bar chart for discrete data. x-axis = "Soap film mixture"; y-axis = "Mean lifespan / s"; title links both; scale starts at 0; all bars correctly plotted.',
  },

  q5_d: {
    marks: 2,
    exemplar: 'Independent variable: Volume of corn syrup [1 mark]. Dependent variable: Lifespan of soap film [1 mark].',
    keyConcepts: ['Independent and dependent variables'],
    keywords: ['independent variable', 'dependent variable', 'volume of corn syrup', 'lifespan of soap film'],
    feedbackHit: 'Correct — volume of corn syrup (IV) and lifespan of soap film (DV).',
    feedbackMiss: 'IV = what is changed = volume of corn syrup. DV = what is measured = lifespan of soap film.',
    blankAnswers: ['Volume of corn syrup', 'Lifespan of soap film'],
  },

  q5_e: {
    marks: 3,
    exemplar: 'Static wire loop / stationary method more reliable [1 mark]. Reasoning: swinging produces films of different sizes [1 mark]; OR affected by air currents/gravity [1 mark]; OR swinging films not reproducible [1 mark]. Max 3.',
    keyConcepts: ['Reliability', 'Reproducibility'],
    keywords: ['static wire', 'reliable', 'reproducible', 'different sizes', 'air currents', 'not reproducible'],
    feedbackHit: 'Well done — stationary method identified as more reliable with valid justification.',
    feedbackMiss: 'Static wire loop gives more reproducible results because swinging produces different-sized films affected by air currents and gravity.',
  },

  q5_f: {
    marks: 3,
    exemplar: 'Convert: 1 min 45 s = 105 s; 1 min 51 s = 111 s; 2 min = 120 s [1 mark for conversion]. Mean = (105 + 111 + 120) / 3 = 336 / 3 = 112 s [1 mark]. Final answer: 112 s [1 mark].',
    keyConcepts: ['Mean calculation', 'Unit conversion'],
    keywords: ['112 seconds', 'vinegar', 'mean', 'conversion', 'minutes to seconds'],
    feedbackHit: 'Correct — mean lifespan for vinegar = 112 s.',
    feedbackMiss: 'Convert: 1 min 45 s = 105 s; 1 min 51 s = 111 s; 2 min = 120 s. Mean = (105+111+120)/3 = 336/3 = 112 s.',
  },

  q5_g: {
    marks: 2,
    exemplar: 'Not valid [1 mark] because the two additives show different trends / vinegar decreases the lifespan of the soap film [1 mark, WTTE].',
    keyConcepts: ['Hypothesis validity', 'Data interpretation'],
    keywords: ['not valid', 'different trends', 'vinegar', 'decrease', 'lifespan', 'hypothesis'],
    feedbackHit: 'Correct — not valid because vinegar decreases lifespan, contrary to the prediction.',
    feedbackMiss: 'The hypothesis predicts all additives increase lifespan, but vinegar decreases it. The two additives show opposite trends, so the hypothesis is not valid.',
  },

  // ── Q6 ────────────────────────────────────────────────────────────────────
  q6_: {
    marks: 17,
    exemplar: 'Criterion B design rubric (17 marks):\n1. Variables [max 4]: IV or DV identified (1); IV and DV identified (2); two CVs stated (3); equipment/method partially mentioned (4).\n2. Equipment [max 4]: wire frame and soap mix listed (1); at least one additive mentioned (2); all additives + timer + measuring equipment (3); full equipment set with all additives measured (4).\n3. Method [max 4]: make films (1); one additive mentioned (2); all additives + time until burst (3); full method with all additives measured and bubble made and timed (4).\n4. Measurements [max 3]: time for one additive (1); time + film size controlled (2); time for all additives + size controlled (3).\n5. Sufficient data [max 2]: at least 3 trials for one additive (1); 3 trials for all additives + mean calculated (2).',
    keyConcepts: ['Criterion B design', 'Experimental design', 'Soap films'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'equipment', 'wire frame', 'stopwatch', 'method', 'trials', 'additives'],
    feedbackHit: 'Well-designed — variables, equipment, method and sufficient data all addressed.',
    feedbackMiss: 'Strong design: IV=type/volume of additive; DV=lifespan of film; CVs=frame size, soap concentration; equipment listed; step-by-step method; ≥3 trials per additive to calculate mean.',
  },

  q6_b: { type: 'mcq', correct: 0 } as MCQEntry,

  // ── Q7 ────────────────────────────────────────────────────────────────────
  q7_a: {
    marks: 8,
    exemplar: 'Criterion D evaluation (8 marks — 4 dimensions × 2):\n1. Landfills [2]: mention of landfills (1); recycling reduces paper/cardboard to landfill significantly (2).\n2. Pollution [2]: environmental impact of one method (1); both methods compared, scientific reasoning (2).\n3. By-products [2]: lignin or recycled pulp as by-product mentioned (1); detailed comparison of by-product use for energy/materials (2).\n4. Raw materials [2]: wood as renewable raw material (1); comparison of virgin vs recycled fibre and raw material savings (2).',
    keyConcepts: ['Green chemistry', 'Paper recycling', 'Life cycle assessment'],
    keywords: ['landfill', 'pollution', 'lignin', 'by-products', 'wood', 'renewable', 'recycled', 'prevention of waste'],
    feedbackHit: 'Excellent — all four green chemistry dimensions addressed with paper recycling context.',
    feedbackMiss: 'Address: (1) Landfills — recycling diverts paper from landfill; (2) Pollution — pulping uses fewer chemicals when recycling; (3) By-products — lignin used for energy; (4) Raw materials — wood is renewable, recycled fibre reduces virgin pulp use.',
  },

  q7_b: {
    marks: 2,
    exemplar: 'Any two: reusable cup can be used many times (reduces waste); fewer chemicals released in production; less material to landfill; economic savings over time; lower carbon footprint per use.',
    keyConcepts: ['Life cycle assessment', 'Sustainability', 'Reusable products'],
    keywords: ['reusable', 'fewer chemicals', 'less waste', 'economic', 'carbon footprint', 'paper cup'],
    feedbackHit: 'Correct — two valid reasons for reusable cups from the life cycle diagram.',
    feedbackMiss: 'From the life cycle: a reusable cup can be used hundreds of times, reducing total material use, chemical processing and waste generated per drink.',
  },

  // ── Q8 ────────────────────────────────────────────────────────────────────
  q8_: {
    marks: 17,
    exemplar: 'Criterion D evaluation rubric (17 marks):\n1. Efficiency [max 4]: one method (1); both (2); compared (3); compared with scientific justification (4).\n2. Environmental [max 3]: one method (1); both with scientific reasoning (2); both with detailed reasoning (3).\n3. Economic [max 2]: one method (1); both (2).\n4. Green chemistry [max 3]: one aspect (1); two aspects (2); two aspects with comparison (3).\n5. Complexity [max 2]: one method (1); both compared (2).\n6. Final choice [max 2]: choice stated (1); choice with justification (2).\n\nExample: Chemisorption removes >99% of Hg²⁺ at low concentrations and is relatively simple to set up. Photocatalysis is experimental but produces no chemical waste and uses solar energy. For gold mining waste water with variable mercury concentrations, chemisorption is recommended due to proven effectiveness, low complexity and low running cost.',
    keyConcepts: ['Mercury water treatment', 'Green chemistry evaluation', 'Chemisorption', 'Photocatalysis'],
    keywords: ['efficiency', 'environmental impact', 'economic', 'green chemistry', 'complexity', 'mercury', 'chemisorption', 'photocatalysis', 'gold mining'],
    feedbackHit: 'Excellent evaluation — all six dimensions compared and final choice justified for mercury removal.',
    feedbackMiss: 'Compare two processes for mercury removal: efficiency, environmental impact, economic impact, green chemistry match, complexity, and final choice with justification.',
  },
}
