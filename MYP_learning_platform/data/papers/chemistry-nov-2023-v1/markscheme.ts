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
  // ── Q1: Sparkling mineral water / CO₂ / equilibrium ───────────────────────
  q1_a: {
    marks: 1,
    exemplar: '2',
    keyConcepts: ['Molecular formulae', 'Atoms in molecules'],
    keywords: ['two oxygen atoms', '2 oxygen', 'CO₂ two O'],
    feedbackHit: 'Correct — CO₂ contains 2 oxygen atoms.',
    feedbackMiss: 'CO₂ = 1 carbon + 2 oxygen atoms. The subscript 2 after O means 2 oxygen atoms.',
    blankAnswers: ['2'],
  },
  q1_b: {
    marks: 1,
    exemplar: 'CO₂ (subscript 2 required)',
    keyConcepts: ['Chemical formulae', 'Carbon dioxide'],
    keywords: ['CO₂', 'CO2', 'carbon dioxide formula'],
    feedbackHit: 'Correct — CO₂ with a subscript 2.',
    feedbackMiss: 'Carbon dioxide formula: C for carbon, O for oxygen, subscript 2 → CO₂.',
    blankAnswers: ['CO₂'],
  },
  q1_c: {
    marks: 3,
    exemplar: 'O::×C×::O — Carbon in the centre flanked by two oxygen atoms. Both C=O double bonds shown correctly with dots and crosses. Lone pairs (dots) correctly placed around each oxygen atom (2 lone pairs per O).',
    keyConcepts: ['Covalent bonding', 'Dot-and-cross diagrams'],
    keywords: ['CO₂ dot cross', 'double bond C=O', 'lone pairs oxygen', 'carbon centre'],
    feedbackHit: 'Correct — C in centre, two C=O double bonds, lone pairs on each O.',
    feedbackMiss: '3 marks: (1) C in centre with O either side; (2) both double bonds shown with dots AND crosses; (3) two lone pairs (dots) on each O.',
  },
  q1_d: {
    marks: 2,
    exemplar: 'CO₂(aq) ⇌ CO₂(g). Both state symbols correct. Equilibrium arrow (⇌) present. Accept either direction.',
    keyConcepts: ['Equilibrium', 'State symbols', 'Dissolution of gases'],
    keywords: ['CO₂(aq)', 'CO₂(g)', 'equilibrium arrow', 'state symbols', 'reversible reaction'],
    feedbackHit: 'Correct — CO₂(aq) ⇌ CO₂(g) with correct states and equilibrium arrow.',
    feedbackMiss: 'Need: (1) both state symbols (aq) and (g) correct; (2) equilibrium arrow ⇌ (not →). Accept either direction.',
    blankAnswers: ['CO₂(aq)', 'CO₂(g)'],
  },
  q1_e: {
    marks: 3,
    exemplar: 'The sparkling water becomes less fizzy. The system is no longer at equilibrium because CO₂ escapes from the open bottle. The solubility of CO₂ decreases as the temperature increases (or: diffusion rate increases / concentration of dissolved CO₂ decreases).',
    keyConcepts: ['Equilibrium', 'Solubility', 'Temperature effects'],
    keywords: ['less fizzy', 'not at equilibrium', 'CO₂ escapes', 'solubility decreases with temperature', 'diffusion increases'],
    feedbackHit: 'Correct — less fizzy; equilibrium disrupted; CO₂ less soluble at higher temperature.',
    feedbackMiss: '3 marks: (1) water is less fizzy; (2) system not at equilibrium (CO₂ escapes from open bottle); (3) CO₂ solubility decreases as temperature increases OR diffusion increases OR concentration of dissolved CO₂ decreases.',
  },

  // ── Q2: Citric acid / sorbitol / erythritol / neotame ─────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Mr(C₆H₈O₇) = 6(12) + 8(1) + 7(16) = 72 + 8 + 112 = 192 g mol⁻¹',
    keyConcepts: ['Molar mass', 'Relative atomic mass'],
    keywords: ['Mr 192', 'C6H8O7 molar mass', '72+8+112', 'g mol⁻¹'],
    feedbackHit: 'Correct — Mr = 192 g mol⁻¹.',
    feedbackMiss: 'Mr(C₆H₈O₇) = 6×Mr(C) + 8×Mr(H) + 7×Mr(O) = 6(12) + 8(1) + 7(16) = 72 + 8 + 112 = 192 g mol⁻¹. Award 1 mark for method, 1 for the answer with unit.',
  },
  q2_b: {
    marks: 2,
    exemplar: 'n = m/Mr = 18.2 / 182.0 = 0.100 mol (3 s.f.). Award 2 marks if only 0.100 is seen.',
    keyConcepts: ['Moles calculation', 'n = m/Mr'],
    keywords: ['n = m/Mr', '18.2/182.0', '0.100 mol', '0.100', 'moles sorbitol'],
    feedbackHit: 'Correct — n = 18.2/182.0 = 0.100 mol (3 s.f.).',
    feedbackMiss: 'n = m/Mr = 18.2 ÷ 182.0 = 0.1000 mol. To 3 s.f. → 0.100 mol. Award 2 marks if only 0.100 is seen.',
    blankAnswers: ['0.100'],
  },
  q2_c: {
    marks: 3,
    exemplar: 'C₄H₁₀O₄. Count from the 3D model: 4 carbon (black), 10 hydrogen (white), 4 oxygen (red). Formula written in the correct order of elements.',
    keyConcepts: ['Molecular formulae', 'Counting atoms from 3D models'],
    keywords: ['C4H10O4', 'erythritol molecular formula', 'count atoms black white red', 'four carbon ten hydrogen four oxygen'],
    feedbackHit: 'Correct — C₄H₁₀O₄ (elements in correct order).',
    feedbackMiss: '3 marks: (1) correct number of each atom type; (2) correct formula; (3) correctly expressed. Elements must be in the order C, H, O → C₄H₁₀O₄.',
    blankAnswers: ['C₄H₁₀O₄'],
  },
  q2_d: {
    marks: 2,
    exemplar: 'First highlighted group: Carboxylic acid (–COOH). Second highlighted group: Ester (–COO– linkage).',
    keyConcepts: ['Functional groups', 'Organic chemistry'],
    keywords: ['carboxylic acid COOH', 'ester COO linkage', 'neotame functional groups'],
    feedbackHit: 'Correct — first group = carboxylic acid; second group = ester.',
    feedbackMiss: 'Carboxylic acid = –COOH (C double-bonded to O and single-bonded to OH). Ester = –COO– (C double-bonded to O and single-bonded to another O on a carbon chain).',
    blankAnswers: ['Carboxylic acid', 'Ester'],
  },

  // ── Q3: Titanium medical implants ─────────────────────────────────────────
  q3_a: {
    marks: 1,
    exemplar: '2.8.10.2  (Ti, Z = 22)',
    keyConcepts: ['Electron configuration', 'Titanium'],
    keywords: ['2.8.10.2', 'titanium electron configuration', '22 electrons', 'four shells'],
    feedbackHit: 'Correct — Ti (Z=22) electron configuration is 2.8.10.2.',
    feedbackMiss: 'Titanium has 22 electrons: shells fill 2, 8, 10, 2 → 2.8.10.2 (the 3rd shell holds 10 here as it fills toward 18).',
    blankAnswers: ['2.8.10.2'],
  },
  q3_b: {
    marks: 4,
    exemplar: 'Any two properties from the table, each correctly linked to an advantage [max 4]:\n\n1. Titanium does not react with body fluids (biocompatible) → it is safe in the body and will not corrode or release harmful ions, so the implant lasts longer.\n2. Titanium has a lower density (4.5 vs 8.0 g cm⁻³) → it is lighter, putting less stress on the surrounding bone and being more comfortable.\n3. Titanium has a very low allergy/rejection risk (no nickel) → fewer patients react to it than to stainless steel.\n\n[Accept any property from the table correctly linked to an advantage.]',
    keyConcepts: ['Properties of metals', 'Biocompatibility', 'Materials science'],
    keywords: ['less reactive biocompatible safe', 'lower density lighter bone', 'low allergy no nickel', 'titanium advantages'],
    feedbackHit: 'Correct — two properties from the table each linked to a real advantage.',
    feedbackMiss: 'Use data from the table: titanium (1) does not react with body fluids → safe/no corrosion; (2) has lower density → lighter, less stress on bone; (3) has lower allergy risk than nickel-containing steel. State the property AND the linked advantage for each.',
  },

  // ── Q4: Sugar solubility / toffee production ──────────────────────────────
  q4_a: {
    marks: 3,
    exemplar: 'Two-column table:\n\nTemperature of water / °C : 0, 20, 40, 60, 80, 100\nMass of sucrose / g      : 180, 200, 240, 350, 360, 390\n\nColumns labelled Temperature and Mass of sucrose. Units in the column headers (not next to each value). Data in ascending temperature order.',
    keyConcepts: ['Data organisation', 'Tables', 'Criterion C'],
    keywords: ['temperature mass sucrose table', 'ascending order', 'units header', '180 200 240 350 360 390'],
    feedbackHit: 'Correct — two-column table with labelled headers (including units) and data in ascending temperature order.',
    feedbackMiss: '3 marks: (1) columns labelled Temperature and Mass of sucrose; (2) units in the headers (not with each value); (3) data in ascending temperature order. Do not accept units written next to the data.',
  },
  q4_b: {
    marks: 5,
    exemplar: 'Scatter graph: x-axis = Temperature / °C (0–100), y-axis = Mass of sucrose / g (0–400, even scale from 0); all 6 data points plotted correctly; line of best fit (the 60 °C point lies above the line); axes labelled with quantity AND unit; data uses the majority of the grid.',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Data presentation'],
    keywords: ['x Temperature', 'y mass sucrose', 'even scale from zero', '6 points plotted', 'line of best fit', 'axes labelled'],
    feedbackHit: 'Correct — both axes labelled with units, suitable scale, all 6 points, line of best fit, majority of grid used.',
    feedbackMiss: '5 marks: (1) x-axis Temperature/°C; (2) y-axis Mass of sucrose/g; (3) units on both axes; (4) three+ points plotted correctly; (5) ALL 6 points correct AND using the majority of the grid.',
  },
  q4_c: { type: 'mcq', correct: 2 },         // Graph C (0-indexed: A=0, B=1, C=2, D=3)
  q4_d: {
    marks: 2,
    exemplar: 'Outlier: the 60 °C data point (measured 350 g). Expected mass from the line of best fit ≈ 300 ± 15 g.',
    keyConcepts: ['Outliers', 'Line of best fit interpretation'],
    keywords: ['outlier 60°C', 'expected 300 g', 'anomalous data', 'fourth point'],
    feedbackHit: 'Correct — outlier identified at 60 °C; expected mass from the line ≈ 300 g.',
    feedbackMiss: 'The 60 °C point sits furthest above the line of best fit (measured 350 g vs expected ≈ 300 g). Award 1 mark for the correct point, 1 for an expected value of 300 ± 15 g.',
  },
  q4_e: {
    marks: 4,
    exemplar: 'State in heated pan: Liquid. State in cooled mould: Solid. Behaviour of liquid sugar in the heated pan: Takes the shape of the container. Behaviour of solid sugar in the cooled mould: No change of shape when changing container.',
    keyConcepts: ['States of matter', 'Properties of solids and liquids'],
    keywords: ['heated pan liquid', 'cooled mould solid', 'liquid takes shape', 'solid no change shape'],
    feedbackHit: 'Correct — heated pan: liquid (takes shape); cooled mould: solid (no change of shape). ECF from the first mark.',
    feedbackMiss: 'Sugar heated to 140 °C in the pan → LIQUID. Sugar set in the mould → SOLID. Liquid takes the shape of its container; a solid does not change shape when moved. Award ECF from the first mark for each pair.',
    blankAnswers: ['Liquid', 'Solid', 'Takes the shape of the container', 'No change of shape when changing container'],
  },

  // ── Q5: Chicken cooking / Maillard reaction ──────────────────────────────
  q5_a: {
    marks: 4,
    exemplar: 'Independent variable: Time (or duration of cooking)\nDependent variable: How cooked the chicken is (colour / firmness / appearance)\nControl variable 1: Size (mass) of the chicken piece\nControl variable 2: Temperature of the water (or volume of water / type of chicken)',
    keyConcepts: ['Variables', 'Criterion B', 'Experimental design'],
    keywords: ['IV time duration', 'DV how cooked colour firmness appearance', 'CV size mass chicken', 'CV temperature volume water'],
    feedbackHit: 'Correct — IV = time/duration; DV = how cooked/appearance; two valid CVs.',
    feedbackMiss: 'IV = what is changed = cooking time. DV = what is measured = how cooked (colour/firmness). CVs = any two of: size/mass of chicken piece, temperature of water, volume of water, type of chicken.',
    blankAnswers: ['Time / duration of cooking', 'How cooked / colour / firmness', 'Size (mass) of chicken piece', 'Temperature of water'],
  },
  q5_b: {
    marks: 3,
    exemplar: 'If: the chicken is cooked for a longer time\nThen: the chicken will be more cooked (more white and firmer)\nBecause: a greater amount of chemical change (protein denaturation) takes place',
    keyConcepts: ['Hypothesis', 'If–Then–Because'],
    keywords: ['if longer time', 'then more cooked white firm', 'because greater chemical change protein', 'WTTE'],
    feedbackHit: 'Correct — If/Then/Because linked to more cooking time producing more chemical change.',
    feedbackMiss: 'IF chicken is cooked for longer → THEN it will be more cooked/white/firm → BECAUSE there is a greater amount of chemical change (proteins denature more).',
  },
  q5_c: {
    marks: 3,
    exemplar: 'Sugars and proteins in the pancake batter react together. Heat from the griddle drives this reaction (the Maillard reaction). The Maillard reaction produces the golden-brown colour.',
    keyConcepts: ['Maillard reaction', 'Chemical changes in food'],
    keywords: ['sugar protein react', 'heat griddle', 'Maillard reaction', 'golden-brown colour'],
    feedbackHit: 'Correct — sugars and proteins react with heat via the Maillard reaction to give a golden-brown colour.',
    feedbackMiss: '3 marks: (1) sugars and proteins react; (2) heat drives the reaction; (3) the Maillard reaction produces the brown colour.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'The new pancake would be less golden-brown. Because a lower griddle temperature gives slower/fewer Maillard reactions (less chemical change in the same time).',
    keyConcepts: ['Temperature and reaction rate', 'Maillard reaction'],
    keywords: ['less brown golden', 'lower temperature fewer Maillard', 'rate slower', 'less chemical change'],
    feedbackHit: 'Correct — less golden-brown; lower temperature → slower/fewer Maillard reactions.',
    feedbackMiss: '2 marks: (1) the pancake is less golden-brown; (2) lower temperature → fewer/slower Maillard reactions (less chemical change in the same time).',
  },

  // ── Q6: MPPS / citric acid / Crit B design ───────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'The force needed to break the soaked (cooked) MPPS is HIGHER than for water (e.g. 310–330 N vs 150 N). So the hypothesis that soaking makes the strip weaker is NOT supported (ORA).',
    keyConcepts: ['Hypothesis evaluation', 'Data interpretation'],
    keywords: ['force higher cooked', 'hypothesis not supported', 'ORA breaking force'],
    feedbackHit: 'Correct — the breaking force of cooked MPPS is higher, so the hypothesis is not supported.',
    feedbackMiss: '2 marks: (1) the force needed to break soaked MPPS is higher than the water control; (2) therefore the hypothesis is NOT supported. Do not award the 2nd mark unless the first is given.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'Lemon juice (310 N) and pineapple juice (330 N) samples would be suitable to eat. Both have breaking forces greater than the 290 N threshold.',
    keyConcepts: ['Data interpretation', 'Threshold values'],
    keywords: ['lemon suitable', 'pineapple suitable', 'breaking force > 290 N'],
    feedbackHit: 'Correct — lemon and pineapple identified; justified with forces above 290 N.',
    feedbackMiss: '2 marks: (1) identify lemon (310 N) and pineapple (330 N); (2) justify using data — both are above the 290 N threshold.',
  },
  q6_c: {
    marks: 1,
    exemplar: 'As a control (or for direct comparison, or as a baseline).',
    keyConcepts: ['Control experiment', 'Scientific method'],
    keywords: ['control baseline direct comparison', 'sample 1 juice only', 'reference point'],
    feedbackHit: 'Correct — sample 1 acts as a control / baseline / direct comparison.',
    feedbackMiss: 'Sample 1 (juice only, no MPPS) is a CONTROL — it gives a baseline/reference to compare the experimental samples against.',
    blankAnswers: ['As a control / for direct comparison / as a baseline'],
  },
  q6_d: {
    marks: 2,
    exemplar: 'Repeat the experiment for each juice (at least 3 times). Calculate an average (mean) breaking force to reduce the effect of random error.',
    keyConcepts: ['Reliability', 'Repeating experiments'],
    keywords: ['repeat experiment', 'calculate average mean', 'reduce random error', 'reliability'],
    feedbackHit: 'Correct — repeat the experiment AND calculate an average.',
    feedbackMiss: '2 marks: (1) repeat the experiment; (2) calculate an average. Both are needed for full marks.',
  },
  q6_e: {
    marks: 1,
    exemplar: '"What is the effect of pH on the breaking force of MPPS?" (WTTE — must name pH as the variable and breaking force / whether it is cooked as the outcome.)',
    keyConcepts: ['Research question', 'Scientific inquiry'],
    keywords: ['effect of pH', 'breaking force MPPS', 'research question pH', 'WTTE'],
    feedbackHit: 'Correct — research question names pH as the variable and a measurable outcome.',
    feedbackMiss: 'The research question must state the IV (pH) and the DV (breaking force / whether cooked). E.g. "What is the effect of pH on the breaking force of MPPS?"',
  },
  q6_f: {
    marks: 17,
    exemplar: 'Crit B design rubric (4 bands):\n\nBand 7–8 (highest): IV = pH AND DV = breaking force identified; two CVs (e.g. size/mass of strip + soaking time); equipment to measure DV AND CVs (force meter + balance/ruler + stopwatch); method specifies force measured AND each strip soaked for 25 min AND identical strip size AND strip fully submerged; 3+ trials for at least 5 pH levels (e.g. 2.5, 3.0, 3.5, 4.0 plus one more) AND a plan to calculate a mean; safety precaution explicitly linked to the acidity of the citric-acid solutions (goggles — irritant).\n\nTypical strong method: Prepare 5 citric-acid solutions of known pH (2.5, 2.9, 3.3, 3.7, 4.0). Cut identical MPPS strips (e.g. 2 cm × 2 cm × 0.5 cm). Soak each strip in 50 cm³ of solution for 25 minutes at room temperature. Measure the force needed to break each strip with a force meter. Repeat 3 times per pH and calculate the mean. Record results in a table. Safety: citric acid is an irritant — wear goggles and wash spills.',
    keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Method'],
    keywords: ['IV pH', 'DV breaking force', 'CVs size time', 'force meter', '5 pH levels', '3 trials average', 'acid safety goggles'],
    feedbackHit: 'Strong Crit B design — IV/DV/CVs, equipment, method with 5 pH values + 3 trials, safety linked to acid.',
    feedbackMiss: 'Band descriptors: (1) identify IV or DV; (2) IV AND DV; (3) force measured for multiple pH values + CVs + 3 trials; (4) full method + safety linked to using the acid.',
  },

  // ── Q7: Plant-based chicken nuggets / carbon footprint ────────────────────
  q7_a: {
    marks: 2,
    exemplar: 'Carbon footprint from chicken protein = (average US diet) − (US diet with chicken removed). From the chart: 1800 − 700 = 1100 kg CO₂ eq (accept 1050–1150). Award 2 marks for the correct answer even with no working shown.',
    keyConcepts: ['Carbon footprint', 'Data from graphs'],
    keywords: ['1800-700', '1100 kg CO₂', 'carbon footprint chicken', 'read graph'],
    feedbackHit: 'Correct — about 1100 kg CO₂ equivalent from the chart reading.',
    feedbackMiss: 'Read the bar for the average US diet (~1800) and subtract the value with chicken removed (~700). 1800 − 700 = 1100 kg CO₂ eq. Accept 1050–1150. Award 2 marks even without working.',
  },
  q7_b: {
    marks: 7,
    exemplar: 'Crit D evaluation rubric (3 bands):\n\nAdvantages/Disadvantages (A/D): Band 3 = >1 production advantage of plant protein stated with supporting evidence (lower carbon footprint from the chart, plus lower water/land) + at least one disadvantage acknowledged.\n\nNutritional Data (D): Band 3 = >1 category of nutritional data compared for both nuggets.\n\nConclusion (C): Band 3 = concluding opinion with justification.\n\nExemplar answer: Producing plant-based protein has a much lower carbon footprint than chicken protein (400 vs ~1100 kg CO₂ eq per kg, from the chart), and usually needs less water and land — so it is better for the environment. Nutritionally the two nuggets are similar: energy is close (930 vs 1010 kJ), protein is almost the same (14.0 vs 15.0 g), the plant nugget has less total fat (11.0 vs 14.0 g) and half the saturated fat (1.5 vs 3.0 g) and far more fibre (4.5 vs 0.5 g), but it has more salt (1.4 vs 0.9 g). People may choose plant-based nuggets for environmental reasons, animal welfare/ethics, or the lower saturated fat and higher fibre; however some may prefer chicken for taste, lower salt, or lower cost.',
    keyConcepts: ['Criterion D', 'Environmental impact', 'Nutritional analysis', 'Plant-based diet'],
    keywords: ['lower carbon water land', 'nutritional comparison energy protein fat salt fibre', 'animal welfare ethics', 'justify choice'],
    feedbackHit: 'Strong Crit D — A/D of plant protein production with evidence; 2+ nutritional categories compared; justified conclusion.',
    feedbackMiss: '(1) At least one advantage and one disadvantage of plant protein production; (2) compare 2+ nutritional categories for both nuggets; (3) concluding opinion with justification.',
  },

  // ── Q8: Farmed insect protein ─────────────────────────────────────────────
  q8_: {
    marks: 15,
    exemplar: 'Crit D evaluation rubric (4 bands):\n\nEnvironmental impact (Band 4): >1 impact stated with scientific justification (e.g. "crickets convert ~45% of feed into edible protein vs ~10% for cattle, and use about 12× less land and 8× less water — they can even be reared on food waste, lowering greenhouse-gas emissions").\n\nEthical (Band 4): ethical issue stated with discussion (e.g. "insects are still farmed and killed, but most people regard insect welfare as a smaller concern than that of mammals; others object to eating insects on cultural grounds").\n\nSocio-economic (Band 4): social + economic issue with justification (e.g. "cricket flour is cheap to produce and farms can be stacked vertically inside cities, creating local jobs and food security; however, acceptance is currently low in many cultures, limiting demand").\n\nPotential for health (Band 4): health effect clearly stated (e.g. "insect protein is high in protein and micronutrients such as iron; however, it can trigger allergies in people allergic to shellfish, and farming hygiene must be controlled").\n\nConcluding appraisal (Band 4): appraisal with justification (e.g. "Overall, farmed insect protein is a promising, low-impact protein source — the environmental and economic case is strong; the main barriers are cultural acceptance and allergy risk rather than the science").',
    keyConcepts: ['Criterion D', 'Insect protein', 'Environmental impact', 'Ethical issues', 'Socio-economic factors'],
    keywords: ['environmental land water feed emissions', 'ethical insects farmed killed welfare', 'socio-economic cheap vertical farms acceptance', 'health protein iron allergy shellfish', 'justified conclusion'],
    feedbackHit: 'Strong Crit D — environmental + ethical + socio-economic impacts with justification; health impact; concluding appraisal.',
    feedbackMiss: 'Need: (1) environmental impact (stated AND justified); (2) ethical issue (stated AND discussed); (3) social AND economic issue (stated AND justified); (4) potential health impact; (5) concluding appraisal with justification.',
  },
}
