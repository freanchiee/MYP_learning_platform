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
    exemplar: 'Number of protons = 30 [1 mark]; Number of neutrons = 40 [1 mark]. Working: protons in Nh = 113; protons in Bi = 83, so protons in X = 113 − 83 = 30 (Zn). Mass of X = (278 + 1) − 209 = 70; neutrons = 70 − 30 = 40.',
    keyConcepts: ['Atomic structure', 'Nuclear fusion', 'Protons and neutrons'],
    keywords: ['protons', 'neutrons', 'mass number', 'atomic number', 'nuclear fusion', '²⁰⁹Bi', '²⁷⁸Nh', 'zinc'],
    feedbackHit: 'Excellent — you correctly calculated 30 protons and 40 neutrons for element X.',
    feedbackMiss: 'Protons in X = 113 (Nh atomic number) − 83 (Bi atomic number) = 30. Mass of X = (278 + 1 neutron) − 209 = 70; neutrons = 70 − 30 = 40.',
  },

  q1_d: {
    marks: 1,
    exemplar: 'Zinc / Zn (follow-through from part (c)).',
    keyConcepts: ['Element identification', 'Atomic number'],
    keywords: ['zinc', 'Zn', 'element 30', 'ecf'],
    feedbackHit: 'Correct — element X with 30 protons is zinc (Zn).',
    feedbackMiss: 'The answer is Zinc (Zn). The element with atomic number 30 is zinc.',
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
    exemplar: 'The indoor air / moisture is acidic / contains an acid / has a low pH.',
    keyConcepts: ['Acid-base indicators', 'Universal indicator', 'Acidic solutions'],
    keywords: ['acidic', 'acid', 'low pH', 'universal indicator', 'red', 'indoor air'],
    feedbackHit: 'Correct — the red colour of universal indicator indicates an acidic solution.',
    feedbackMiss: 'Universal indicator turns red in acidic conditions. The indoor air/moisture therefore has acidic chemical properties (low pH).',
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
    exemplar: 'Molar mass of HNO₃ = 1 + 14 + (3 × 16) = 1 + 14 + 48 = 63 g mol⁻¹. Accept 63 or 0.063 kg mol⁻¹. Unit and value must agree.',
    keyConcepts: ['Molar mass', 'Relative formula mass', 'Nitric acid'],
    keywords: ['molar mass', '63 g/mol', 'HNO₃', 'nitric acid', 'relative formula mass', 'unit'],
    feedbackHit: 'Correct — the molar mass of HNO₃ is 63 g mol⁻¹.',
    feedbackMiss: 'Add atomic masses: H + N + O(×3) = 1 + 14 + 48 = 63 g mol⁻¹. Make sure to include the unit.',
  },

  q2_f: {
    marks: 4,
    exemplar: 'Award 1 mark per correct class + name pair:\n• Molecule A: Alcohol — Ethanol\n• Molecule B: Alkane — Butane\n• Molecule C: Ester — Ethyl ethanoate\n• Molecule D: Carboxylic acid — Methanoic acid',
    keyConcepts: ['Organic compound classes', 'VOCs', 'Functional groups'],
    keywords: ['alcohol', 'ethanol', 'alkane', 'butane', 'ester', 'ethyl ethanoate', 'carboxylic acid', 'methanoic acid', 'VOC'],
    feedbackHit: 'Well done — you correctly identified the class and name of each organic compound.',
    feedbackMiss: 'Identify functional groups: alcohol has –OH; alkane has only C–H bonds; ester has –COO–; carboxylic acid has –COOH. Names: ethanol (alcohol), butane (alkane), ethyl ethanoate (ester), methanoic acid (carboxylic acid).',
  },

  // ── Q3 ────────────────────────────────────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'Any two from: malleable (can be pressed/shaped into a can); high melting point; strong / rigid; good thermal conductivity.',
    keyConcepts: ['Physical properties of metals', 'Metallic bonding'],
    keywords: ['malleable', 'high melting point', 'strong', 'rigid', 'thermal conductivity', 'metal'],
    feedbackHit: 'Well done — two valid physical properties of metals for drink cans.',
    feedbackMiss: 'Metals are suitable for drink cans because they are malleable so they can be pressed into shape, are strong/rigid and have high melting points.',
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
    exemplar: 'Bonding types [2 marks]: covalent (in the lacquer / polymer layer) [1 mark]; metallic (in the metal can) [1 mark]. Advantages discussion [2 marks, award max 2]: the lacquer forms a protective coating [1 mark]; the bare metal can produce soluble ions but the lacquer is insoluble [1 mark]; the coating stops ions forming, so the drink does not taste metallic / avoids health issues [1 mark].',
    keyConcepts: ['Covalent bonding', 'Metallic bonding', 'Polymer lacquer', 'Health and safety'],
    keywords: ['covalent', 'metallic', 'lacquer', 'protective coating', 'soluble ions', 'insoluble', 'health', 'ions'],
    feedbackHit: 'Well done — you correctly stated the bonding types and discussed the advantages of the lacquer coating.',
    feedbackMiss: 'The lacquer has covalent bonding (non-metal atoms sharing electrons); the metal can has metallic bonding (sea of electrons). The lacquer is insoluble and stops the metal forming ions, so the drink does not taste metallic and health issues are avoided.',
  },

  // ── Q4 ────────────────────────────────────────────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'Accept any one of: volume or amount of water; mass/size of the crystal; size and shape of beaker; not stirring the water.',
    keyConcepts: ['Control variables', 'Fair test', 'Experimental design'],
    keywords: ['control variable', 'volume of water', 'mass of crystal', 'beaker', 'stirring'],
    feedbackHit: 'Correct — a valid control variable for the potassium permanganate diffusion experiment.',
    feedbackMiss: 'A control variable is kept the same throughout the experiment. Valid examples include: volume of water, mass/size of the crystal, not stirring the water.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'Direction: decreases [1 mark, WTTE]. Reason [award marks independently]: the kinetic energy of the particles increases with increasing temperature [1 mark]; so the dissolved particles mix with the water molecules more quickly / diffusion occurs more quickly [1 mark].',
    keyConcepts: ['Hypothesis formulation', 'Kinetic theory', 'Diffusion and temperature'],
    keywords: ['decreases', 'kinetic energy', 'temperature', 'diffusion', 'particles', 'faster', 'mix'],
    feedbackHit: 'Well done — hypothesis correctly states that diffusion time decreases and links this to increased kinetic energy at higher temperatures.',
    feedbackMiss: 'As temperature increases, kinetic energy of particles increases, so the dissolved particles diffuse more quickly through the water, meaning the time for the colour to spread evenly decreases.',
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
    exemplar: 'Working shown: (54.0 + 56.7 + 54.3) / 3 = 165.0 / 3 = 55.0 [1 mark]. Final answer: 55.0 s [1 mark]. Award 2 marks if 55.0 is seen.',
    keyConcepts: ['Mean calculation', 'Data processing', 'Decimal places'],
    keywords: ['mean', 'average', '55.0', 'reaction time', 'hydrochloric acid', 'calculation'],
    feedbackHit: 'Correct — the mean reaction time for dilute hydrochloric acid is 55.0 s.',
    feedbackMiss: 'Mean = (54.0 + 56.7 + 54.3) ÷ 3 = 165.0 ÷ 3 = 55.0 s (to 1 d.p.).',
  },

  q5_c: {
    marks: 6,
    exemplar: 'Award marks for: scale — evenly spaced increments starting at zero [1 mark]; x-axis label — acid (used) [1 mark]; y-axis label — mean reaction time [1 mark]; y-axis unit — s (seconds) [1 mark]; plotting — additional mark for all bars plotted correctly [1 mark]; title — correctly links dependent and independent variables [1 mark].',
    keyConcepts: ['Graph construction', 'Bar charts', 'Axis labelling'],
    keywords: ['bar chart', 'scale', 'x-axis', 'y-axis', 'reaction time', 'acid', 'title', 'units', 'plotting'],
    feedbackHit: 'Excellent — your graph has a title, labelled axes with units, correct scale and all bars plotted accurately.',
    feedbackMiss: 'A bar chart is appropriate for discrete data (the acid used). Ensure: title (e.g. "Mean time for marble chips to stop fizzing in different acids"); x-axis = "Acid"; y-axis = "Mean reaction time / s"; scale starts at 0 with even intervals; all bars plotted correctly.',
  },

  q5_d: {
    marks: 2,
    exemplar: 'Independent variable: Concentration of acid [1 mark]. Dependent variable: Time for chips to stop fizzing [1 mark].',
    keyConcepts: ['Independent and dependent variables', 'Experimental variables'],
    keywords: ['independent variable', 'dependent variable', 'concentration of acid', 'time for chips to stop fizzing'],
    feedbackHit: 'Correct — concentration of acid (IV) and time for chips to stop fizzing (DV).',
    feedbackMiss: 'The independent variable (IV) is what is deliberately changed: concentration of acid. The dependent variable (DV) is what is measured: time for chips to stop fizzing.',
    blankAnswers: ['Concentration of acid', 'Time for chips to stop fizzing'],
  },

  q5_e: {
    marks: 3,
    exemplar: 'Whole-chip method produces more reliable data [1 mark]. Reasoning (award up to 2 marks): grinding gives a different surface area / powder fineness each time [1 mark]; OR the powder reacts at different rates between trials [1 mark]; ground-powder results are not reproducible [1 mark]; whole chips give the most reliable/consistent data [included in first mark].',
    keyConcepts: ['Reliability', 'Reproducibility', 'Method comparison', 'Surface area'],
    keywords: ['whole chip', 'reliable', 'reproducible', 'ground', 'powder', 'surface area', 'not reproducible'],
    feedbackHit: 'Well done — you correctly identified the whole-chip method as more reliable and justified it with reference to reproducibility.',
    feedbackMiss: 'The whole-chip method produces more reliable data because every 5 g portion is similar. Grinding creates a different surface area each time, so the powder reacts at different rates, making the results less reproducible.',
  },

  q5_f: {
    marks: 3,
    exemplar: 'Convert times: 1 min 12 s = 72 s; Trial 2 = 30 s; Trial 3 = 33 s [1 mark for method of calculation]. Mean = (72 + 30 + 33) / 3 = 135 / 3 = 45 s [1 mark]. Final answer: 45 s [1 mark]. No ecf if correct answer is seen. Award 2nd mark independently (mean can be incorrect).',
    keyConcepts: ['Mean calculation', 'Unit conversion', 'Time calculations'],
    keywords: ['45 seconds', 'citric acid', 'mean', 'conversion', 'minutes to seconds', '72 s'],
    feedbackHit: 'Correct — mean reaction time for dilute citric acid = 45 s.',
    feedbackMiss: 'Convert all times to seconds: Trial 1 = 1 min 12 s = 72 s; Trial 2 = 30 s; Trial 3 = 33 s. Mean = (72 + 30 + 33) ÷ 3 = 135 ÷ 3 = 45 s.',
  },

  q5_g: {
    marks: 2,
    exemplar: 'Only partly valid [1 mark] because concentrated HCl is faster than dilute HCl (so concentration matters), BUT dilute citric acid is slower than dilute sulfuric acid, so the type/strength of acid also matters [1 mark, WTTE].',
    keyConcepts: ['Hypothesis validity', 'Data interpretation', 'Scientific evaluation'],
    keywords: ['partly valid', 'concentration', 'hydrochloric acid', 'citric acid', 'type of acid', 'rate', 'hypothesis'],
    feedbackHit: 'Correct — the hypothesis is only partly valid because the type/strength of acid, not just concentration, affects the rate.',
    feedbackMiss: 'The hypothesis says concentration is the only factor. Concentrated HCl is faster than dilute HCl, but different acids at the same dilution (citric vs sulfuric) react at different rates, so the type/strength of acid also matters — the hypothesis is only partly valid.',
  },

  // ── Q6 ────────────────────────────────────────────────────────────────────
  q6_: {
    marks: 17,
    exemplar: 'Criterion B design rubric (17 marks):\n1. Variables (V) [max 4]: 1=IV or DV identified; 2=IV (type/amount of additive) and DV (days flowers stay fresh) identified; 3=two CVs stated (flower type, stem length, volume of water, temperature, light); 4=all key control variables and the comparison to plain water mentioned.\n2. Equipment (E) [max 4]: 1=vases and flowers and one additive listed; 2=at least one additive measured; 3=all additives, balance/measuring cylinder, pipette, ruler; 4=full kit to make and measure each additive, all additives measured, freshness recorded.\n3. Method (Meth) [max 4]: 1=put flowers in water with an additive; 2=at least one additive added; 3=all additives, record wilting/freshness over days; 4=all of 3 plus equal stems cut, each additive measured, fair test controlled.\n4. Measurements (Meas) [max 3]: 1=freshness/days for one additive recorded; 2=recorded for one additive with stem length controlled; 3=recorded for all additives with stem length and conditions controlled.\n5. Sufficient data (D) [max 2]: 1=at least three flowers for one additive; 2=at least three flowers for all additives and plans to calculate an average.',
    keyConcepts: ['Criterion B design', 'Experimental design', 'Variables', 'Cut-flower preservation'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'equipment', 'method', 'trials', 'average', 'additives', 'sugar', 'vase', 'freshness'],
    feedbackHit: 'Well-designed investigation — you identified variables, listed appropriate equipment, described a clear method and planned sufficient data collection.',
    feedbackMiss: 'A strong design identifies IV (type/amount of additive), DV (days flowers stay fresh), CVs (flower type, stem length, volume of water, temperature, light); lists all equipment (vases, flowers, additives, balance, measuring cylinder, pipette, ruler); gives a step-by-step method; uses at least 3 flowers per additive to calculate a mean.',
  },

  q6_b: { type: 'mcq', correct: 2 } as MCQEntry,

  // ── Q7 ────────────────────────────────────────────────────────────────────
  q7_a: {
    marks: 8,
    exemplar: 'Criterion D evaluation rubric (8 marks — 4 dimensions × 2 marks each):\n1. Impact on landfills [max 2]: 1=mention that bottles are diverted from landfill; 2=detail, e.g. millions of bottles that would go to landfill are collected and reused as fibre.\n2. Effects of pollution [max 2]: 1=pollution impact of one route mentioned; 2=pollution compared (plastic dumped in landfill/oceans vs cleanly recycled) with scientific reasoning.\n3. Use of by-products [max 2]: 1=a by-product is named (clean flake or caps/labels); 2=by-products used productively, e.g. flake recycled into new bottles, caps and labels recovered.\n4. Re-use of raw materials [max 2]: 1=raw material (PET/oil) is reused rather than wasted; 2=detail that almost all the PET becomes product so less new crude oil is needed.',
    keyConcepts: ['Green chemistry principles', 'Waste prevention', 'Pollution monitoring', 'PET recycling'],
    keywords: ['PET', 'polyester fibre', 'landfill', 'pollution', 'by-products', 'flake', 'raw materials', 'crude oil', 'recycled', 'prevention of waste'],
    feedbackHit: 'Excellent evaluation — you addressed all four dimensions (landfills, pollution, by-products, raw materials) with scientific reasoning.',
    feedbackMiss: 'Discuss all four aspects: (1) Landfills — bottles are recycled instead of dumped; (2) Pollution — recycling avoids plastic polluting landfill/oceans; (3) By-products — clean flake becomes new bottles and caps/labels are recovered; (4) Raw materials — almost all the PET becomes fibre, so less new crude oil is needed.',
  },

  q7_b: {
    marks: 2,
    exemplar: 'Any two reasonable responses [2 marks]: jars can be washed and refilled directly; less new material is processed; fewer chemicals are released to the environment; less energy is used than making new jars; economic benefits / decrease in production costs.',
    keyConcepts: ['Life cycle assessment', 'Sustainability', 'Glass reuse'],
    keywords: ['reused', 'refilled', 'less material', 'fewer chemicals', 'less energy', 'economic', 'life cycle', 'glass jar', 'sustainability'],
    feedbackHit: 'Correct — two valid reasons why companies benefit from reusing glass jars.',
    feedbackMiss: 'Consider the life cycle: glass jars can be washed and refilled directly, which reduces material consumption, processing energy and chemical use, lowering costs and environmental impact.',
  },

  // ── Q8 ────────────────────────────────────────────────────────────────────
  q8_: {
    marks: 17,
    exemplar: 'Criterion D evaluation rubric (17 marks):\n1. Efficiency [max 4]: 1=efficiency of one method; 2=efficiency of both methods; 3=efficiency of both compared (e.g. reverse osmosis 99% vs ion-exchange resin 96%); 4=efficiency compared with scientific justification.\n2. Environmental impact [max 3]: 1=environmental impact of one method; 2=environmental impact of both with scientific reasoning; 3=both fully reasoned (e.g. RO waste water and high energy vs resin brine to dispose of).\n3. Economic impact [max 2]: 1=economic impact of one method; 2=economic impact of both methods (set-up cost, energy use).\n4. Green chemistry match [max 3]: 1=one aspect of green chemistry mentioned (preventing waste, energy efficiency, reusable materials); 2=two aspects mentioned; 3=two aspects with comparison.\n5. Complexity [max 2]: 1=complexity of one method; 2=complexity of both methods compared.\n6. Final choice with justification [max 2]: 1=final choice stated; 2=final choice with justification.\n\nExample: Compare Ion-exchange resin vs Reverse osmosis. Ion-exchange resin removes 96% of lead using little energy and a medium set-up cost, but produces a concentrated brine that must be disposed of and the resin must be regenerated. Reverse osmosis removes the most lead (99%) but uses a lot of energy, has a high set-up cost and wastes a lot of water. Final choice: ion-exchange resin, because it removes almost as much lead at far lower energy and cost, making it a better match for green chemistry — provided the brine is handled responsibly.',
    keyConcepts: ['Water treatment', 'Green chemistry evaluation', 'Lead removal', 'Precipitation', 'Activated carbon', 'Ion exchange', 'Reverse osmosis'],
    keywords: ['efficiency', 'environmental impact', 'economic impact', 'green chemistry', 'complexity', 'precipitation', 'activated carbon', 'ion exchange', 'reverse osmosis', 'lead ions', 'drinking water', 'lead pipes'],
    feedbackHit: 'Excellent evaluation — you compared two processes across all six dimensions and made a justified final recommendation.',
    feedbackMiss: 'Compare two processes (e.g. ion-exchange resin vs reverse osmosis) for: efficiency (% lead removed), environmental impact (brine/waste water, energy use), economic impact (set-up cost, energy use), green chemistry principles (waste prevention, energy use, reusable materials), complexity, and final choice with justification.',
  },
}
