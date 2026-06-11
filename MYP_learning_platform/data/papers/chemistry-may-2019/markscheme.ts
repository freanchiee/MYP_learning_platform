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
    exemplar: 'Accept any one of: any noble gas (He, Ne, Ar, Kr, Xe, Rn); any element from atomic number 200–280; any actinide except thorium (Th) or uranium (U); Sc, Ga, Ge, or Hf.',
    keyConcepts: ['Mendeleev\'s periodic table', 'Historical chemistry'],
    keywords: ['noble gas', 'lanthanide', 'actinide', 'Mendeleev', 'periodic table', 'element'],
    feedbackHit: 'Correct — well done for identifying an element not in Mendeleev\'s original table.',
    feedbackMiss: 'The answer should be a noble gas, a lanthanide/actinide (except Th or U), or an element such as Sc, Ga, Ge, or Hf.',
  },

  q1_b: {
    marks: 2,
    exemplar: 'Lanthanides or actinides [1 mark]. Reason must be correctly linked to the named group [1 mark]: very small quantities of these elements exist or many are not naturally occurring; OR noble/inert gases — unreactive or not found in compounds or technology not available to isolate them.',
    keyConcepts: ['Lanthanides and actinides', 'Periodic table history', 'Element occurrence'],
    keywords: ['lanthanide', 'actinide', 'unreactive', 'not naturally occurring', 'noble gas', 'isolate'],
    feedbackHit: 'Well done — you correctly identified the group and gave a valid reason for its absence from Mendeleev\'s table.',
    feedbackMiss: 'Name the missing group (lanthanides/actinides or noble gases) AND give a reason linked specifically to that group (e.g. they are unreactive, or not naturally occurring in large amounts).',
  },

  q1_c: {
    marks: 2,
    exemplar: 'Number of protons = 26 [1 mark]; Number of neutrons = 32 [1 mark]. Working: protons in Pb = 82; protons in X = 108 − 82 = 26 (Fe). Mass of X = 266 − 208 = 58; neutrons = 58 − 26 = 32.',
    keyConcepts: ['Atomic structure', 'Nuclear fusion', 'Protons and neutrons'],
    keywords: ['protons', 'neutrons', 'mass number', 'atomic number', 'nuclear fusion', '²⁰⁸Pb', '²⁶⁶Hs', 'iron'],
    feedbackHit: 'Excellent — you correctly calculated 26 protons and 32 neutrons for element X.',
    feedbackMiss: 'Protons in X = 108 (Hs atomic number) − 82 (Pb atomic number) = 26. Mass of X = 266 − 208 = 58; neutrons = 58 − 26 = 32.',
  },

  q1_d: {
    marks: 1,
    exemplar: 'Iron / Fe (follow-through from part (c)).',
    keyConcepts: ['Element identification', 'Atomic number'],
    keywords: ['iron', 'Fe', 'element 26', 'ecf'],
    feedbackHit: 'Correct — element X with 26 protons is iron (Fe).',
    feedbackMiss: 'The answer is Iron (Fe). Element with atomic number 26 is iron.',
  },

  // ── Q2 ────────────────────────────────────────────────────────────────────
  q2_a: { type: 'mcq', correct: 1 } as MCQEntry,

  q2_b: {
    marks: 2,
    exemplar: '4NO₂(g) + O₂(g) + 2H₂O(l) → 4HNO₃(aq). First mark: any two correct coefficients. Second mark: all three coefficients correct (4, 2, 4).',
    keyConcepts: ['Balancing equations', 'Nitrogen dioxide', 'Acid rain'],
    keywords: ['4NO₂', 'O₂', '2H₂O', '4HNO₃', 'balancing', 'coefficients', 'nitric acid'],
    feedbackHit: 'Well done — the equation is correctly balanced: 4NO₂ + O₂ + 2H₂O → 4HNO₃.',
    feedbackMiss: 'Balance by checking atoms: 4N on left → 4HNO₃ on right; 8O from NO₂ + 2O from O₂ + 2O from water = 12O; right side has 12O in 4HNO₃. Coefficients: 4, 2, 4.',
    blankAnswers: ['4', '2', '4'],
  },

  q2_c: {
    marks: 1,
    exemplar: 'The fog is acidic / contains an acid / has a low pH.',
    keyConcepts: ['Acid-base indicators', 'Universal indicator', 'Acidic solutions'],
    keywords: ['acidic', 'acid', 'low pH', 'universal indicator', 'red', 'fog'],
    feedbackHit: 'Correct — the red colour of universal indicator indicates an acidic solution.',
    feedbackMiss: 'Universal indicator turns red in acidic conditions. The fog therefore has acidic chemical properties (low pH).',
  },

  q2_d: {
    marks: 2,
    exemplar: 'Group 6 [1 mark]; Period 3 [1 mark]. Do not award marks if group and period are switched.',
    keyConcepts: ['Periodic table', 'Groups and periods', 'Sulfur'],
    keywords: ['Group 6', 'Period 3', 'sulfur', 'S', 'periodic table'],
    feedbackHit: 'Correct — sulfur is in Group 6, Period 3 of the periodic table.',
    feedbackMiss: 'Sulfur (S, atomic number 16) is in Group 6 (column) and Period 3 (row) of the periodic table.',
  },

  q2_e: {
    marks: 2,
    exemplar: 'Molar mass of H₂SO₄ = (2 × 1) + 32 + (4 × 16) = 2 + 32 + 64 = 98 g mol⁻¹. Accept 98 or 0.098 kg mol⁻¹. Unit and value must agree.',
    keyConcepts: ['Molar mass', 'Relative formula mass', 'Sulfuric acid'],
    keywords: ['molar mass', '98 g/mol', 'H₂SO₄', 'sulfuric acid', 'relative formula mass', 'unit'],
    feedbackHit: 'Correct — the molar mass of H₂SO₄ is 98 g mol⁻¹.',
    feedbackMiss: 'Add atomic masses: H(×2) + S + O(×4) = 2 + 32 + 64 = 98 g mol⁻¹. Make sure to include the unit.',
  },

  q2_f: {
    marks: 4,
    exemplar: 'Award 1 mark per correct class + name pair:\n• Molecule A: Ester — Ethyl ethanoate\n• Molecule B: Alkane — Pentane\n• Molecule C: Alcohol — Propan-1-ol\n• Molecule D: Carboxylic acid — Pentanoic acid',
    keyConcepts: ['Organic compound classes', 'VOCs', 'Functional groups'],
    keywords: ['ester', 'ethyl ethanoate', 'alkane', 'pentane', 'alcohol', 'propan-1-ol', 'carboxylic acid', 'pentanoic acid', 'VOC'],
    feedbackHit: 'Well done — you correctly identified the class and name of each organic compound.',
    feedbackMiss: 'Identify functional groups: ester has –COO–; alcohol has –OH; carboxylic acid has –COOH; alkane has only C–H bonds. Names: ethyl ethanoate (ester), pentane (alkane), propan-1-ol (alcohol), pentanoic acid (carboxylic acid).',
  },

  // ── Q3 ────────────────────────────────────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'Any two from: good thermal / heat conductivity [do not accept electrical conductivity alone]; malleable (can be shaped); high melting point; rigid / solid.',
    keyConcepts: ['Physical properties of metals', 'Metallic bonding'],
    keywords: ['thermal conductivity', 'malleable', 'high melting point', 'rigid', 'solid', 'metal'],
    feedbackHit: 'Well done — two valid physical properties of metals for cooking pans.',
    feedbackMiss: 'Metals are suitable for cooking pans because they conduct heat well (thermal conductivity), have high melting points, and are malleable so they can be shaped.',
  },

  q3_b: {
    marks: 3,
    exemplar: 'Charge is +3 or 3+ [1 mark]. Oxidised [1 mark]. Because electrons are lost from the Al atom / oxidation state or number increases (from 0 to +3) [1 mark]. Accept half-equation showing oxidation but the word "oxidised" must be present.',
    keyConcepts: ['Oxidation states', 'Ionic charge', 'Redox reactions', 'Aluminium'],
    keywords: ['Al³⁺', '+3', 'oxidised', 'electrons lost', 'oxidation state', 'increases', 'half equation'],
    feedbackHit: 'Excellent — you correctly identified Al³⁺, stated it is oxidised, and explained the electron loss.',
    feedbackMiss: 'Aluminium forms Al³⁺ (charge = +3). It is oxidised because it loses 3 electrons (Al → Al³⁺ + 3e⁻) and its oxidation state increases from 0 to +3.',
  },

  q3_c: {
    marks: 4,
    exemplar: 'Bonding types [2 marks]: covalent (in Teflon™) [1 mark]; metallic (in metal pan) [1 mark]. Ignore "polar". Advantages discussion [2 marks]: Teflon™ forms a protective coating [1 mark]; metals can produce ions which are soluble OR Teflon™ is not soluble [1 mark]; coating prevents ions from forming or avoids health issues from ions [1 mark]. Award max 2 marks for advantages.',
    keyConcepts: ['Covalent bonding', 'Metallic bonding', 'Teflon properties', 'Health and safety'],
    keywords: ['covalent', 'metallic', 'Teflon', 'protective coating', 'soluble ions', 'insoluble', 'health', 'ions'],
    feedbackHit: 'Well done — you correctly stated the bonding types and discussed the advantages of the Teflon™ coating.',
    feedbackMiss: 'Teflon™ has covalent bonding (non-metal atoms sharing electrons); the metal pan has metallic bonding (sea of electrons). Teflon™ is insoluble and does not produce metal ions, preventing potential health issues.',
  },

  // ── Q4 ────────────────────────────────────────────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'Accept any one of: volume or amount of water; constant colour (of solution); type of glass or cup; volume/mass of tea bag.',
    keyConcepts: ['Control variables', 'Fair test', 'Experimental design'],
    keywords: ['control variable', 'volume of water', 'volume', 'amount', 'glass', 'cup', 'type'],
    feedbackHit: 'Correct — a valid control variable for the tea bag diffusion experiment.',
    feedbackMiss: 'A control variable is kept the same throughout the experiment. Valid examples include: volume of water, type of glass/cup, mass of tea bag.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'Direction: decreases [1 mark, WTTE]. Reason [award marks independently]: the kinetic energy increases with increasing temperature [1 mark]; so the tea "particles" mix with the water molecules more quickly / diffusion occurs more quickly [1 mark].',
    keyConcepts: ['Hypothesis formulation', 'Kinetic theory', 'Diffusion and temperature'],
    keywords: ['decreases', 'kinetic energy', 'temperature', 'diffusion', 'particles', 'faster', 'mix'],
    feedbackHit: 'Well done — hypothesis correctly states that diffusion time decreases and links this to increased kinetic energy at higher temperatures.',
    feedbackMiss: 'As temperature increases, kinetic energy of particles increases, so tea particles diffuse more quickly through the water, meaning the time to complete diffusion decreases.',
    blankAnswers: ['decreases'],
  },

  q4_c: {
    marks: 2,
    exemplar: '400 ± 10 (seconds) [1 mark]. Unit: seconds / s [1 mark]. Award marks separately.',
    keyConcepts: ['Graph reading', 'Prediction', 'Data analysis'],
    keywords: ['400 seconds', 'graph', 'predict', '50°C', 'read', 'extrapolate'],
    feedbackHit: 'Correct — you read the graph accurately and included the correct unit.',
    feedbackMiss: 'Read the y-axis value at x = 50°C. The graph shows approximately 400 s at 50°C. Remember to include the unit (seconds).',
  },

  q4_d: {
    marks: 3,
    exemplar: 'Award up to 3 marks: record data points at intermediate temperatures (e.g. every 10°C) [1 mark]; carry out more than one trial at each temperature [1 mark]; calculate an average for each temperature [1 mark].',
    keyConcepts: ['Improving experimental method', 'Non-linear relationships', 'Data reliability'],
    keywords: ['intermediate temperatures', 'more trials', 'average', 'non-linear', 'repeat', 'data points'],
    feedbackHit: 'Well done — you outlined valid improvements to confirm a non-linear relationship.',
    feedbackMiss: 'To confirm a non-linear relationship: collect data at intermediate temperatures; repeat each trial at least 3 times; calculate a mean for each temperature to reduce random error.',
  },

  // ── Q5 ────────────────────────────────────────────────────────────────────
  q5_a: { type: 'mcq', correct: 3 } as MCQEntry,

  q5_b: {
    marks: 2,
    exemplar: 'Working shown: (11.4 + 10.1 + 10.5) / 3 = 32.0 / 3 = 10.666... [1 mark]. Final answer: 10.7 s [1 mark]. Award 2 marks if 10.7 is seen. Please check table for 10.7 in addition to response box.',
    keyConcepts: ['Mean calculation', 'Data processing', 'Decimal places'],
    keywords: ['mean', 'average', '10.7', 'lifespan', 'bubble mixture 2', 'calculation'],
    feedbackHit: 'Correct — the mean lifespan for bubble mixture 2 is 10.7 s.',
    feedbackMiss: 'Mean = (11.4 + 10.1 + 10.5) ÷ 3 = 32.0 ÷ 3 = 10.7 s (to 1 d.p.).',
  },

  q5_c: {
    marks: 6,
    exemplar: 'Award marks for: scale — evenly spaced increments starting at zero [1 mark]; x-axis label — bubble mixture [1 mark]; y-axis label — lifespan [1 mark]; y-axis unit — s (seconds) [1 mark]; plotting — additional mark for all points plotted correctly [1 mark]; title — correctly links dependent and independent variables [1 mark].',
    keyConcepts: ['Graph construction', 'Bar charts', 'Axis labelling'],
    keywords: ['bar chart', 'scale', 'x-axis', 'y-axis', 'lifespan', 'bubble mixture', 'title', 'units', 'plotting'],
    feedbackHit: 'Excellent — your graph has a title, labelled axes with units, correct scale and all points plotted accurately.',
    feedbackMiss: 'A bar chart is appropriate for discrete data (bubble mixture number). Ensure: title (e.g. "Mean lifespan of bubbles for different bubble mixtures"); x-axis = "Bubble mixture"; y-axis = "Mean lifespan / s"; scale starts at 0 with even intervals; all 6 bars plotted correctly.',
  },

  q5_d: {
    marks: 2,
    exemplar: 'Independent variable: Volume of glycerine [1 mark]. Dependent variable: Lifespan of bubble [1 mark].',
    keyConcepts: ['Independent and dependent variables', 'Experimental variables'],
    keywords: ['independent variable', 'dependent variable', 'volume of glycerine', 'lifespan of bubble'],
    feedbackHit: 'Correct — volume of glycerine (IV) and lifespan of bubble (DV).',
    feedbackMiss: 'The independent variable (IV) is what is deliberately changed: volume of glycerine. The dependent variable (DV) is what is measured: lifespan of bubble.',
    blankAnswers: ['Volume of glycerine', 'Lifespan of bubble'],
  },

  q5_e: {
    marks: 3,
    exemplar: 'Straw method (method 1) produces more reliable data [1 mark]. Reasoning (award up to 2 marks): bubbles are different sizes in method 2/wand [1 mark]; OR bubbles are moving in method 2/wand [1 mark]; OR bubbles are affected differently by gravitational field in method 2 [1 mark]; bubbles in method 2/wand are not reproducible [1 mark]; straw/method 1 bubbles will give most reliable data [included in first mark].',
    keyConcepts: ['Reliability', 'Reproducibility', 'Method comparison'],
    keywords: ['straw', 'method 1', 'reliable', 'reproducible', 'wand', 'different sizes', 'gravity', 'not reproducible'],
    feedbackHit: 'Well done — you correctly identified the straw method as more reliable and justified it with reference to reproducibility.',
    feedbackMiss: 'The straw method produces more reliable data because bubbles are formed in a consistent way on a bench. The wand method produces bubbles of different sizes that move around under gravity, making them less reproducible.',
  },

  q5_f: {
    marks: 3,
    exemplar: 'Convert times: 1 min 10 s = 70 s; Trial 2 = 77 s; 1¼ min = 75 s [1 mark for method of calculation]. Mean = (70 + 77 + 75) / 3 = 222 / 3 = 74 s [1 mark]. Final answer: 74 s (accept 1 min 14 s) [1 mark]. No ecf if correct answer is seen. Award 2nd mark independently (mean can be incorrect).',
    keyConcepts: ['Mean calculation', 'Unit conversion', 'Time calculations'],
    keywords: ['74 seconds', '1 min 14 s', 'lemon juice', 'mean', 'conversion', 'minutes to seconds'],
    feedbackHit: 'Correct — mean lifespan for lemon juice = 74 s.',
    feedbackMiss: 'Convert all times to seconds: Trial 1 = 1 min 10 s = 70 s; Trial 2 = 77 s; Trial 3 = 1¼ min = 75 s. Mean = (70 + 77 + 75) ÷ 3 = 74 s.',
  },

  q5_g: {
    marks: 2,
    exemplar: 'Not valid [1 mark] because the two additives show different trends / sugar causes a decrease in the lifespan of the bubble [1 mark, WTTE].',
    keyConcepts: ['Hypothesis validity', 'Data interpretation', 'Scientific evaluation'],
    keywords: ['not valid', 'different trends', 'sugar', 'decrease', 'lifespan', 'hypothesis'],
    feedbackHit: 'Correct — the hypothesis is not valid because sugar decreases bubble lifespan, contradicting the prediction.',
    feedbackMiss: 'The hypothesis states all additives increase lifespan, but sugar actually decreases it. The two additives show different (opposite) trends, so the hypothesis is not valid.',
  },

  // ── Q6 ────────────────────────────────────────────────────────────────────
  q6_: {
    marks: 17,
    exemplar: 'Criterion B design rubric (17 marks):\n1. Variables (V) [max 4]: 1=IV or DV identified; 2=IV and DV identified; 3=two CVs stated; 4=straw or wand and bubble mix mentioned.\n2. Equipment (E) [max 4]: 1=straw or wand and bubble mix listed; 2=add at least one additive mentioned; 3=all additives, timer, measuring equipment; 4=make and measure a bubble solution, all additives, measured, time until burst.\n3. Method (Meth) [max 4]: 1=make bubbles; 2=add at least one additive mentioned; 3=all additives mentioned, time until burst; 4=all criteria for 3 plus all additives are added, a bubble solution is made and all additives are measured.\n4. Measurements (Meas) [max 3]: 1=time for one additive is measured; 2=time for one additive is measured and size of bubble controlled; 3=time for all additives is measured and the size of the bubble is controlled.\n5. Sufficient data (D) [max 2]: 1=at least three trials for an additive; 2=at least three trials for all additives and plans to calculate average.',
    keyConcepts: ['Criterion B design', 'Experimental design', 'Variables', 'Bubble lifespan'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'equipment', 'method', 'trials', 'average', 'additives', 'straw', 'stopwatch', 'lifespan'],
    feedbackHit: 'Well-designed investigation — you identified variables, listed appropriate equipment, described a clear method and planned sufficient data collection.',
    feedbackMiss: 'A strong design identifies IV (type/volume of additive), DV (lifespan), CVs (volume of bubble solution, straw size, method of blowing); lists all equipment (straw, beakers, pipette, stopwatch); gives step-by-step method; specifies at least 3 trials per additive to calculate a mean.',
  },

  q6_b: { type: 'mcq', correct: 2 } as MCQEntry,

  // ── Q7 ────────────────────────────────────────────────────────────────────
  q7_a: {
    marks: 8,
    exemplar: 'Criterion D evaluation rubric (8 marks — 4 dimensions × 2 marks each):\n1. Impact on landfills [max 2]: 1=mention of landfills; 2=recycling only 10% of waste goes to landfill OR 90% reduction in waste going to landfill with recycling.\n2. Effects of pollution [max 2]: 1=environmental impact of one method; 2=environmental impact of both methods, scientific reasoning for both.\n3. Use of by-products [max 2]: 1=if plastics are re-used or recycled, useful by-products are produced; 2=with both method comparison and detail (e.g. electricity generation from plastics, recycled into building material).\n4. Re-use of raw materials [max 2]: 1=same amount of raw material consumed whether recycled or not; 2=same AND detail on whether plastic is recycled — raw material cycles.',
    keyConcepts: ['Green chemistry principles', 'Waste prevention', 'Pollution monitoring', 'Life cycle assessment'],
    keywords: ['landfill', '90%', 'pollution', 'by-products', 'electricity', 'raw materials', 'recycled', 'prevention of waste', 'plastics'],
    feedbackHit: 'Excellent evaluation — you addressed all four dimensions (landfills, pollution, by-products, raw materials) with scientific reasoning.',
    feedbackMiss: 'Discuss all four aspects: (1) Landfills — recycling reduces waste going to landfill; (2) Pollution — generating energy from plastics produces CO₂ but can use filters; (3) By-products — energy and useful materials are produced; (4) Raw materials — plastic is recycled so less new raw material needed.',
  },

  q7_b: {
    marks: 2,
    exemplar: 'Any two reasonable responses [2 marks]: can be reused (put back into washed bottles); can be recycled at end of life; less material is processed; product can be returned (washed bottles); fewer chemicals are released to the environment; economic benefits / decrease in production costs.',
    keyConcepts: ['Life cycle assessment', 'Sustainability', 'Glass reuse'],
    keywords: ['reused', 'recycled', 'less material', 'fewer chemicals', 'economic', 'life cycle', 'glass bottle', 'sustainability'],
    feedbackHit: 'Correct — two valid reasons why companies benefit from reusing glass bottles.',
    feedbackMiss: 'Consider the life cycle: glass bottles can be reused directly (refilled), which reduces material consumption, processing energy and chemical use, lowering costs and environmental impact.',
  },

  // ── Q8 ────────────────────────────────────────────────────────────────────
  q8_: {
    marks: 17,
    exemplar: 'Criterion D evaluation rubric (17 marks):\n1. Efficiency [max 4]: 1=efficiency of one method; 2=efficiency of both methods; 3=efficiency of both compared to each other; 4=efficiency of both with comparison compared and scientific justification.\n2. Environmental impact [max 3]: 1=environmental impact of one method; 2=environmental impact of both methods with scientific reasoning for both; 3=environmental impact of both with scientific reasoning for both.\n3. Economic impact [max 2]: 1=economic impact of one method; 2=economic impact of both methods.\n4. Green chemistry match [max 3]: 1=one aspect of green chemistry mentioned (e.g. preventing waste, energy efficient, renewable materials); 2=two aspects mentioned; 3=two aspects with comparison.\n5. Complexity [max 2]: 1=complexity of one method; 2=complexity of both methods with comparison.\n6. Final choice with justification [max 2]: 1=final choice stated; 2=final choice with justification.\n\nExample: Compare Precipitation vs Electrochemical recovery. Precipitation is simple/cheap but produces waste sludge and requires large volumes of chemical. Electrochemical recovery produces pure metals, is highly efficient and removes specific metals without chemicals — better match for green chemistry. Final choice: electrochemical recovery because it is more efficient, produces no waste chemicals and pure copper can be recovered and resold.',
    keyConcepts: ['Water treatment', 'Green chemistry evaluation', 'Precipitation', 'Electrochemical methods', 'Chemisorption', 'Photocatalysis'],
    keywords: ['efficiency', 'environmental impact', 'economic impact', 'green chemistry', 'complexity', 'precipitation', 'electrochemical', 'chemisorption', 'photocatalysis', 'copper ions', 'waste water', 'PCB'],
    feedbackHit: 'Excellent evaluation — you compared two processes across all six dimensions and made a justified final recommendation.',
    feedbackMiss: 'Compare two processes (e.g. electrochemical vs photocatalysis) for: efficiency (% copper removed), environmental impact (waste produced, chemicals used), economic impact (set-up/running costs), green chemistry principles (waste prevention, energy use, renewable materials), complexity, and final choice with justification.',
  },
}
