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
    exemplar: 'Accept any one of: any noble gas (He, Ne, Ar, Kr, Xe, Rn); any element from atomic number 200–294; any actinide except thorium (Th) or uranium (U); Sc, Ga, Ge, or Hf.',
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
    exemplar: 'Number of protons = 20 [1 mark]; Number of neutrons = 28 [1 mark]. Working: protons in Lv = 116; protons in Cm = 96, so protons in X = 116 − 96 = 20 (Ca). Mass of X = (292 + 4) − 248 = 48; neutrons = 48 − 20 = 28.',
    keyConcepts: ['Atomic structure', 'Nuclear fusion', 'Protons and neutrons'],
    keywords: ['protons', 'neutrons', 'mass number', 'atomic number', 'nuclear fusion', '²⁴⁸Cm', '²⁹²Lv', 'calcium'],
    feedbackHit: 'Excellent — you correctly calculated 20 protons and 28 neutrons for element X.',
    feedbackMiss: 'Protons in X = 116 (Lv atomic number) − 96 (Cm atomic number) = 20. Mass of X = (292 + 4 neutrons) − 248 = 48; neutrons = 48 − 20 = 28.',
  },

  q1_d: {
    marks: 1,
    exemplar: 'Calcium / Ca (follow-through from part (c)).',
    keyConcepts: ['Element identification', 'Atomic number'],
    keywords: ['calcium', 'Ca', 'element 20', 'ecf'],
    feedbackHit: 'Correct — element X with 20 protons is calcium (Ca).',
    feedbackMiss: 'The answer is Calcium (Ca). The element with atomic number 20 is calcium.',
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
    exemplar: 'The vog is acidic / contains an acid / has a low pH.',
    keyConcepts: ['Acid-base indicators', 'Universal indicator', 'Acidic solutions'],
    keywords: ['acidic', 'acid', 'low pH', 'universal indicator', 'red', 'vog'],
    feedbackHit: 'Correct — the red colour of universal indicator indicates an acidic solution.',
    feedbackMiss: 'Universal indicator turns red in acidic conditions. The vog therefore has acidic chemical properties (low pH).',
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
    exemplar: 'Molar mass of H₂SO₃ = (2 × 1) + 32 + (3 × 16) = 2 + 32 + 48 = 82 g mol⁻¹. Accept 82 or 0.082 kg mol⁻¹. Unit and value must agree.',
    keyConcepts: ['Molar mass', 'Relative formula mass', 'Sulfurous acid'],
    keywords: ['molar mass', '82 g/mol', 'H₂SO₃', 'sulfurous acid', 'relative formula mass', 'unit'],
    feedbackHit: 'Correct — the molar mass of H₂SO₃ is 82 g mol⁻¹.',
    feedbackMiss: 'Add atomic masses: H(×2) + S + O(×3) = 2 + 32 + 48 = 82 g mol⁻¹. Make sure to include the unit.',
  },

  q2_f: {
    marks: 4,
    exemplar: 'Award 1 mark per correct class + name pair:\n• Molecule A: Alcohol — Methanol\n• Molecule B: Alkane — Propane\n• Molecule C: Carboxylic acid — Ethanoic acid\n• Molecule D: Ester — Methyl methanoate',
    keyConcepts: ['Organic compound classes', 'VOCs', 'Functional groups'],
    keywords: ['alcohol', 'methanol', 'alkane', 'propane', 'carboxylic acid', 'ethanoic acid', 'ester', 'methyl methanoate', 'VOC'],
    feedbackHit: 'Well done — you correctly identified the class and name of each organic compound.',
    feedbackMiss: 'Identify functional groups: alcohol has –OH; alkane has only C–H bonds; carboxylic acid has –COOH; ester has –COO–. Names: methanol (alcohol), propane (alkane), ethanoic acid (carboxylic acid), methyl methanoate (ester).',
  },

  // ── Q3 ────────────────────────────────────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'Any two from: malleable (can be drawn/shaped into tubes); high melting point; strong / rigid; good thermal conductivity.',
    keyConcepts: ['Physical properties of metals', 'Metallic bonding'],
    keywords: ['malleable', 'high melting point', 'strong', 'rigid', 'thermal conductivity', 'metal'],
    feedbackHit: 'Well done — two valid physical properties of metals for bicycle frames.',
    feedbackMiss: 'Metals are suitable for bicycle frames because they are strong/rigid, malleable so they can be shaped into tubes, and have high melting points.',
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
    exemplar: 'Bonding types [2 marks]: ionic (in the anodised aluminium oxide layer) [1 mark]; metallic (in the metal frame) [1 mark]. Advantages discussion [2 marks, award max 2]: the oxide layer forms a hard protective coating [1 mark]; the bare metal can react/form soluble ions but the oxide layer is unreactive/insoluble [1 mark]; the coating prevents further ions forming / stops corrosion [1 mark].',
    keyConcepts: ['Ionic bonding', 'Metallic bonding', 'Anodising', 'Corrosion protection'],
    keywords: ['ionic', 'metallic', 'aluminium oxide', 'protective coating', 'insoluble', 'unreactive', 'corrosion', 'ions'],
    feedbackHit: 'Well done — you correctly stated the bonding types and discussed the advantages of the anodised layer.',
    feedbackMiss: 'The anodised aluminium oxide layer has ionic bonding (metal + non-metal ions); the metal frame has metallic bonding (sea of electrons). The oxide layer is unreactive and insoluble, so it protects the frame and prevents corrosion.',
  },

  // ── Q4 ────────────────────────────────────────────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'Accept any one of: volume or amount of water; type/brand of food colouring; size and shape of glass; not stirring the water; volume of one drop.',
    keyConcepts: ['Control variables', 'Fair test', 'Experimental design'],
    keywords: ['control variable', 'volume of water', 'type of food colouring', 'glass', 'stirring', 'drop'],
    feedbackHit: 'Correct — a valid control variable for the food-colouring diffusion experiment.',
    feedbackMiss: 'A control variable is kept the same throughout the experiment. Valid examples include: volume of water, brand of food colouring, not stirring the water.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'Direction: decreases [1 mark, WTTE]. Reason [award marks independently]: the kinetic energy of the particles increases with increasing temperature [1 mark]; so the dye particles mix with the water molecules more quickly / diffusion occurs more quickly [1 mark].',
    keyConcepts: ['Hypothesis formulation', 'Kinetic theory', 'Diffusion and temperature'],
    keywords: ['decreases', 'kinetic energy', 'temperature', 'diffusion', 'particles', 'faster', 'mix'],
    feedbackHit: 'Well done — hypothesis correctly states that diffusion time decreases and links this to increased kinetic energy at higher temperatures.',
    feedbackMiss: 'As temperature increases, kinetic energy of particles increases, so dye particles diffuse more quickly through the water, meaning the time for the colour to spread evenly decreases.',
    blankAnswers: ['decreases'],
  },

  q4_c: {
    marks: 2,
    exemplar: '400 ± 10 (seconds) [1 mark]. Unit: seconds / s [1 mark]. Award marks separately.',
    keyConcepts: ['Graph reading', 'Prediction', 'Data analysis'],
    keywords: ['400 seconds', 'graph', 'predict', '50°C', 'read', 'interpolate'],
    feedbackHit: 'Correct — you read the graph accurately and included the correct unit.',
    feedbackMiss: 'Read the y-axis value at x = 50 °C. The graph shows approximately 400 s at 50 °C. Remember to include the unit (seconds).',
  },

  q4_d: {
    marks: 3,
    exemplar: 'Award up to 3 marks: record data points at intermediate temperatures (e.g. every 10 °C) [1 mark]; carry out more than one trial at each temperature [1 mark]; calculate an average for each temperature [1 mark].',
    keyConcepts: ['Improving experimental method', 'Non-linear relationships', 'Data reliability'],
    keywords: ['intermediate temperatures', 'more trials', 'average', 'non-linear', 'repeat', 'data points'],
    feedbackHit: 'Well done — you outlined valid improvements to confirm a non-linear relationship.',
    feedbackMiss: 'To confirm a non-linear relationship: collect data at intermediate temperatures; repeat each trial at least 3 times; calculate a mean for each temperature to reduce random error.',
  },

  // ── Q5 ────────────────────────────────────────────────────────────────────
  q5_a: { type: 'mcq', correct: 1 } as MCQEntry,

  q5_b: {
    marks: 2,
    exemplar: 'Working shown: (56.0 + 59.4 + 58.6) / 3 = 174.0 / 3 = 58.0 [1 mark]. Final answer: 58.0 s [1 mark]. Award 2 marks if 58.0 is seen.',
    keyConcepts: ['Mean calculation', 'Data processing', 'Decimal places'],
    keywords: ['mean', 'average', '58.0', 'dissolving time', 'cold water', 'calculation'],
    feedbackHit: 'Correct — the mean dissolving time for cold water is 58.0 s.',
    feedbackMiss: 'Mean = (56.0 + 59.4 + 58.6) ÷ 3 = 174.0 ÷ 3 = 58.0 s (to 1 d.p.).',
  },

  q5_c: {
    marks: 6,
    exemplar: 'Award marks for: scale — evenly spaced increments starting at zero [1 mark]; x-axis label — liquid (the tablet is dropped into) [1 mark]; y-axis label — mean dissolving time [1 mark]; y-axis unit — s (seconds) [1 mark]; plotting — additional mark for all bars plotted correctly [1 mark]; title — correctly links dependent and independent variables [1 mark].',
    keyConcepts: ['Graph construction', 'Bar charts', 'Axis labelling'],
    keywords: ['bar chart', 'scale', 'x-axis', 'y-axis', 'dissolving time', 'liquid', 'title', 'units', 'plotting'],
    feedbackHit: 'Excellent — your graph has a title, labelled axes with units, correct scale and all bars plotted accurately.',
    feedbackMiss: 'A bar chart is appropriate for discrete data (the liquid used). Ensure: title (e.g. "Mean dissolving time of an antacid tablet in different liquids"); x-axis = "Liquid"; y-axis = "Mean dissolving time / s"; scale starts at 0 with even intervals; all bars plotted correctly.',
  },

  q5_d: {
    marks: 2,
    exemplar: 'Independent variable: Temperature of water [1 mark]. Dependent variable: Dissolving time of tablet [1 mark].',
    keyConcepts: ['Independent and dependent variables', 'Experimental variables'],
    keywords: ['independent variable', 'dependent variable', 'temperature of water', 'dissolving time of tablet'],
    feedbackHit: 'Correct — temperature of water (IV) and dissolving time of tablet (DV).',
    feedbackMiss: 'The independent variable (IV) is what is deliberately changed: temperature of water. The dependent variable (DV) is what is measured: dissolving time of tablet.',
    blankAnswers: ['Temperature of water', 'Dissolving time of tablet'],
  },

  q5_e: {
    marks: 3,
    exemplar: 'Whole-tablet method produces more reliable data [1 mark]. Reasoning (award up to 2 marks): crushing gives a different surface area / powder fineness each time [1 mark]; OR the powder dissolves at different rates between trials [1 mark]; crushed-powder results are not reproducible [1 mark]; whole tablets give the most reliable/consistent data [included in first mark].',
    keyConcepts: ['Reliability', 'Reproducibility', 'Method comparison', 'Surface area'],
    keywords: ['whole tablet', 'reliable', 'reproducible', 'crushed', 'powder', 'surface area', 'not reproducible'],
    feedbackHit: 'Well done — you correctly identified the whole-tablet method as more reliable and justified it with reference to reproducibility.',
    feedbackMiss: 'The whole-tablet method produces more reliable data because every tablet is identical. Crushing creates a different surface area each time, so the powder dissolves at different rates, making the results less reproducible.',
  },

  q5_f: {
    marks: 3,
    exemplar: 'Convert times: 1 min 5 s = 65 s; Trial 2 = 17 s; Trial 3 = 20 s [1 mark for method of calculation]. Mean = (65 + 17 + 20) / 3 = 102 / 3 = 34 s [1 mark]. Final answer: 34 s [1 mark]. No ecf if correct answer is seen. Award 2nd mark independently (mean can be incorrect).',
    keyConcepts: ['Mean calculation', 'Unit conversion', 'Time calculations'],
    keywords: ['34 seconds', 'lemon juice', 'mean', 'conversion', 'minutes to seconds', '65 s'],
    feedbackHit: 'Correct — mean dissolving time for lemon juice = 34 s.',
    feedbackMiss: 'Convert all times to seconds: Trial 1 = 1 min 5 s = 65 s; Trial 2 = 17 s; Trial 3 = 20 s. Mean = (65 + 17 + 20) ÷ 3 = 102 ÷ 3 = 34 s.',
  },

  q5_g: {
    marks: 2,
    exemplar: 'Only partly valid [1 mark] because lemon juice (acidic) is faster than cold water, BUT cola (also acidic) is slower than warm water / temperature also affects the rate [1 mark, WTTE].',
    keyConcepts: ['Hypothesis validity', 'Data interpretation', 'Scientific evaluation'],
    keywords: ['partly valid', 'acidic', 'lemon juice', 'cola', 'temperature', 'rate', 'hypothesis'],
    feedbackHit: 'Correct — the hypothesis is only partly valid because temperature, not just acidity, affects the dissolving rate.',
    feedbackMiss: 'The hypothesis says any acidic liquid is faster than water. Lemon juice is fast, but cola (also acidic) is slower than warm water, so temperature also affects the rate — the hypothesis is only partly valid.',
  },

  // ── Q6 ────────────────────────────────────────────────────────────────────
  q6_: {
    marks: 17,
    exemplar: 'Criterion B design rubric (17 marks):\n1. Variables (V) [max 4]: 1=IV or DV identified; 2=IV (type of dip) and DV (time to turn brown) identified; 3=two CVs stated (apple type, piece size, temperature, volume of dip); 4=all key control variables and the comparison to plain water mentioned.\n2. Equipment (E) [max 4]: 1=apples and one dip listed; 2=knife/cutting and at least one dip mentioned; 3=all dips, beakers, pipette/measuring cylinder, timer; 4=full kit to make and measure each dip, all dips measured, time/colour recorded.\n3. Method (Meth) [max 4]: 1=cut apple and dip it; 2=dip in at least one liquid; 3=all dips, record time/colour until brown; 4=all of 3 plus equal pieces cut, each dip measured, fair test controlled.\n4. Measurements (Meas) [max 3]: 1=time/colour for one dip measured; 2=measured for one dip with piece size controlled; 3=measured for all dips with the apple piece size and air exposure controlled.\n5. Sufficient data (D) [max 2]: 1=at least three trials for one dip; 2=at least three trials for all dips and plans to calculate an average.',
    keyConcepts: ['Criterion B design', 'Experimental design', 'Variables', 'Enzymic browning'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'equipment', 'method', 'trials', 'average', 'dips', 'lemon juice', 'timer', 'browning'],
    feedbackHit: 'Well-designed investigation — you identified variables, listed appropriate equipment, described a clear method and planned sufficient data collection.',
    feedbackMiss: 'A strong design identifies IV (type/volume of dip), DV (time to turn brown), CVs (apple type, piece size, temperature, volume of dip); lists all equipment (knife, apples, dips, beakers, pipette, timer/colour chart); gives a step-by-step method; specifies at least 3 trials per dip to calculate a mean.',
  },

  q6_b: { type: 'mcq', correct: 2 } as MCQEntry,

  // ── Q7 ────────────────────────────────────────────────────────────────────
  q7_a: {
    marks: 8,
    exemplar: 'Criterion D evaluation rubric (8 marks — 4 dimensions × 2 marks each):\n1. Impact on landfills/drains [max 2]: 1=mention that waste oil is diverted from disposal/drains; 2=detail, e.g. waste oil that would block drains or go to landfill is collected and reused.\n2. Effects of pollution [max 2]: 1=pollution impact of one route mentioned; 2=pollution compared (waste oil pollutes rivers/drains if dumped vs cleanly converted to fuel) with scientific reasoning.\n3. Use of by-products [max 2]: 1=a by-product is named (glycerol or recycled oil); 2=by-products used productively, e.g. glycerol sold for soap, unreacted oil recycled back.\n4. Re-use of raw materials [max 2]: 1=raw material (oil) is reused rather than wasted; 2=detail that almost all the oil becomes product so little new raw material/fuel is needed.',
    keyConcepts: ['Green chemistry principles', 'Waste prevention', 'Pollution monitoring', 'Biodiesel'],
    keywords: ['waste oil', 'biodiesel', 'drains', 'landfill', 'pollution', 'by-products', 'glycerol', 'raw materials', 'recycled', 'prevention of waste'],
    feedbackHit: 'Excellent evaluation — you addressed all four dimensions (landfills/drains, pollution, by-products, raw materials) with scientific reasoning.',
    feedbackMiss: 'Discuss all four aspects: (1) Landfills/drains — waste oil is collected rather than dumped; (2) Pollution — dumped oil pollutes rivers and blocks drains, but converting it cleanly prevents this; (3) By-products — glycerol is sold and unreacted oil is recycled; (4) Raw materials — almost all the oil becomes product, so less new fuel is needed.',
  },

  q7_b: {
    marks: 2,
    exemplar: 'Any two reasonable responses [2 marks]: recycling aluminium uses far less energy than extracting it from ore; saves raw bauxite ore; produces less mining waste; cheaper / economic savings; fewer emissions than smelting new aluminium.',
    keyConcepts: ['Life cycle assessment', 'Sustainability', 'Aluminium recycling'],
    keywords: ['recycled', 'less energy', 'bauxite', 'raw material', 'mining waste', 'economic', 'life cycle', 'aluminium can', 'sustainability'],
    feedbackHit: 'Correct — two valid reasons why companies benefit from recycling aluminium cans.',
    feedbackMiss: 'Consider the life cycle: recycling aluminium uses about 95% less energy than extracting it from bauxite, saves raw ore and reduces mining waste, lowering both cost and environmental impact.',
  },

  // ── Q8 ────────────────────────────────────────────────────────────────────
  q8_: {
    marks: 17,
    exemplar: 'Criterion D evaluation rubric (17 marks):\n1. Efficiency [max 4]: 1=efficiency of one method; 2=efficiency of both methods; 3=efficiency of both compared (e.g. reverse osmosis 98% vs denitrifying bioreactor 85%); 4=efficiency compared with scientific justification.\n2. Environmental impact [max 3]: 1=environmental impact of one method; 2=environmental impact of both with scientific reasoning; 3=both fully reasoned (e.g. RO brine to dispose of vs bioreactor releasing harmless N₂).\n3. Economic impact [max 2]: 1=economic impact of one method; 2=economic impact of both methods (set-up cost, energy use).\n4. Green chemistry match [max 3]: 1=one aspect of green chemistry mentioned (preventing waste, energy efficiency, renewable/natural processes); 2=two aspects mentioned; 3=two aspects with comparison.\n5. Complexity [max 2]: 1=complexity of one method; 2=complexity of both methods compared.\n6. Final choice with justification [max 2]: 1=final choice stated; 2=final choice with justification.\n\nExample: Compare Reverse osmosis vs Denitrifying bioreactor. Reverse osmosis removes the most nitrate (98%) but uses a lot of energy and produces concentrated brine that must be disposed of. A denitrifying bioreactor removes 85% of nitrate using natural bacteria, very little energy and a low set-up cost, and turns nitrate into harmless nitrogen gas — a much better match for green chemistry. Final choice: the denitrifying bioreactor, because it is cheap, low-energy and produces no harmful waste, even though it removes slightly less nitrate.',
    keyConcepts: ['Water treatment', 'Green chemistry evaluation', 'Eutrophication', 'Nitrate removal', 'Ion exchange', 'Reverse osmosis', 'Denitrifying bacteria'],
    keywords: ['efficiency', 'environmental impact', 'economic impact', 'green chemistry', 'complexity', 'constructed wetland', 'ion exchange', 'reverse osmosis', 'denitrifying bioreactor', 'nitrate ions', 'eutrophication', 'run-off'],
    feedbackHit: 'Excellent evaluation — you compared two processes across all six dimensions and made a justified final recommendation.',
    feedbackMiss: 'Compare two processes (e.g. reverse osmosis vs denitrifying bioreactor) for: efficiency (% nitrate removed), environmental impact (brine waste vs harmless N₂), economic impact (set-up cost, energy use), green chemistry principles (waste prevention, energy use, natural processes), complexity, and final choice with justification.',
  },
}
