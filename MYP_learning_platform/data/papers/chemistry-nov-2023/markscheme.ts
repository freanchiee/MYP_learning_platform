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
  // ── Q1: Cola / CO₂ / equilibrium ──────────────────────────────────────────
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
    exemplar: 'The cola is less fizzy. The system is no longer at equilibrium because some CO₂ escapes. The solubility of CO₂ decreases as temperature increases (or: diffusion rate increases / concentration of dissolved CO₂ decreases).',
    keyConcepts: ['Equilibrium', 'Solubility', 'Temperature effects'],
    keywords: ['less fizzy', 'not at equilibrium', 'CO₂ escapes', 'solubility decreases with temperature', 'diffusion increases'],
    feedbackHit: 'Correct — less fizzy; equilibrium disrupted; CO₂ less soluble at higher temperature.',
    feedbackMiss: '3 marks: (1) cola is less fizzy; (2) system not at equilibrium (CO₂ escapes); (3) CO₂ solubility decreases with temperature OR diffusion increases OR concentration of dissolved CO₂ decreases.',
  },

  // ── Q2: Phosphoric acid / sucrose / xylitol / aspartame ───────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Mr(H₃PO₄) = 3(1) + 31 + 4(16) = 3 + 31 + 64 = 98 g mol⁻¹',
    keyConcepts: ['Molar mass', 'Relative atomic mass'],
    keywords: ['Mr 98', 'H3PO4 molar mass', '3+31+64', 'g mol⁻¹'],
    feedbackHit: 'Correct — Mr = 98 g mol⁻¹.',
    feedbackMiss: 'Mr(H₃PO₄) = 3×Mr(H) + Mr(P) + 4×Mr(O) = 3(1) + 31 + 4(16) = 98 g mol⁻¹. Award 1 mark for correct method, 1 for correct answer with unit.',
  },
  q2_b: {
    marks: 2,
    exemplar: 'n = m/Mr = 39/342.3 = 0.114 mol (3 s.f.). Award 2 marks if only 0.114 is seen.',
    keyConcepts: ['Moles calculation', 'n = m/Mr'],
    keywords: ['n = m/Mr', '39/342.3', '0.114 mol', '0.114', 'moles sucrose'],
    feedbackHit: 'Correct — n = 39/342.3 = 0.114 mol (3 s.f.).',
    feedbackMiss: 'n = m/Mr = 39 ÷ 342.3 = 0.11397… Round to 3 s.f. → 0.114 mol. Award 2 marks if only 0.114 is seen.',
    blankAnswers: ['0.114'],
  },
  q2_c: {
    marks: 3,
    exemplar: 'C₅H₁₂O₅. Count from the 3D model: 5 carbon (grey), 12 hydrogen (white), 5 oxygen (red). Formula must be in the correct order of elements.',
    keyConcepts: ['Molecular formulae', 'Counting atoms from 3D models'],
    keywords: ['C5H12O5', 'xylitol molecular formula', 'count atoms grey white red', 'five carbon twelve hydrogen five oxygen'],
    feedbackHit: 'Correct — C₅H₁₂O₅ (elements in correct order).',
    feedbackMiss: '3 marks: (1) correct number of each atom type; (2) correct formula; (3) correctly expressed. Elements must be in correct order: C, H, O.',
    blankAnswers: ['C₅H₁₂O₅'],
  },
  q2_d: {
    marks: 2,
    exemplar: 'First highlighted group: Carboxylic acid (–COOH). Second highlighted group: Ester (–COO– linkage).',
    keyConcepts: ['Functional groups', 'Organic chemistry'],
    keywords: ['carboxylic acid COOH', 'ester COO linkage', 'aspartame functional groups'],
    feedbackHit: 'Correct — first group = carboxylic acid; second group = ester.',
    feedbackMiss: 'Carboxylic acid = –COOH (C double-bonded to O and single-bonded to OH). Ester = –COO– (C double-bonded to O and single-bonded to another O attached to a carbon chain).',
    blankAnswers: ['Carboxylic acid', 'Ester'],
  },

  // ── Q3: Aluminium cans ────────────────────────────────────────────────────
  q3_a: {
    marks: 1,
    exemplar: '2.8.3  (or 1s² 2s² 2p⁶ 3s² 3p¹)',
    keyConcepts: ['Electron configuration', 'Aluminium'],
    keywords: ['2.8.3', 'aluminium electron configuration', '13 electrons', 'three shells'],
    feedbackHit: 'Correct — Al (Z=13) electron configuration is 2.8.3.',
    feedbackMiss: 'Aluminium has 13 electrons: shell 1 = 2, shell 2 = 8, shell 3 = 3 → 2.8.3.',
    blankAnswers: ['2.8.3'],
  },
  q3_b: {
    marks: 4,
    exemplar: 'Any two properties from the table plus correctly linked explanations [max 4]:\n\n1. Aluminium is less reactive → less likely to react with food stored in the can.\n2. Aluminium is less dense/lighter → cheaper to transport (lower fuel costs).\n3. Aluminium is more readily available → can be recycled more easily / lower cost.\n\n[Accept any property correctly linked to an advantage]',
    keyConcepts: ['Properties of aluminium', 'Alloys and metals', 'Sustainability'],
    keywords: ['less reactive food safe', 'less dense lighter transport', 'readily available recyclable', 'aluminium advantages'],
    feedbackHit: 'Correct — two properties from the table each linked to a real advantage.',
    feedbackMiss: 'Use data from the table: aluminium (1) is less reactive → safe with food; (2) is less dense → easier/cheaper to transport; (3) is more readily available → can be recycled. State the property AND the linked advantage for each.',
  },

  // ── Q4: Sugar solubility / candy floss ───────────────────────────────────
  q4_a: {
    marks: 3,
    exemplar: 'Table with two columns:\n\n| Temperature of water (°C) | Mass of sugar (g) |\n|---|---|\n| 0 | 200 |\n| 20 | 210 |\n| 40 | 250 |\n| 60 | 365 |\n| 80 | 370 |\n| 100 | 480 |\n\nColumns labelled as Temperature and mass. Units in column header. Data arranged in increasing order.',
    keyConcepts: ['Data organisation', 'Tables', 'Criterion C'],
    keywords: ['temperature mass sugar table', 'ascending order', 'units header', '200 210 250 365 370 480'],
    feedbackHit: 'Correct — two-column table with labelled headers (including units) and data in ascending temperature order.',
    feedbackMiss: '3 marks: (1) columns labelled Temperature and mass (with units); (2) units in header (not with data); (3) data in ascending order. Do not accept units with data values.',
  },
  q4_b: {
    marks: 5,
    exemplar: 'Scatter graph: x-axis = Temperature / °C (0–100), y-axis = Mass of sugar / g (0–500+, even scale); all 6 data points plotted correctly; line of best fit (can be curve); axes labelled with quantity and unit; data uses majority of grid.',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Data presentation'],
    keywords: ['x Temperature', 'y mass sugar', 'even scale zero', '6 points plotted', 'line of best fit', 'axes labelled'],
    feedbackHit: 'Correct — both axes labelled with units, suitable scale, all 6 points, line of best fit, majority of grid used.',
    feedbackMiss: '5 marks: (1) x-axis labelled Temperature/°C; (2) y-axis labelled mass of sugar/g; (3) units on both axes; (4) three+ points plotted correctly; (5) ALL points plotted correctly AND using majority of the graph grid.',
  },
  q4_c: { type: 'mcq', correct: 2 },         // Graph C (0-indexed: A=0, B=1, C=2, D=3)
  q4_d: {
    marks: 2,
    exemplar: 'Outlier: 60°C data point. Expected mass = 290 ± 10 g (accept 4th point / 60°C). Read expected value from line of best fit in graph C at 60°C.',
    keyConcepts: ['Outliers', 'Line of best fit interpretation'],
    keywords: ['outlier 60°C', 'expected 290 g', 'fourth point outlier', 'anomalous data'],
    feedbackHit: 'Correct — outlier identified at 60°C; expected mass from line ≈ 290 g.',
    feedbackMiss: 'Look at graph C: the 60°C point is furthest from the line of best fit (measured=365g vs expected≈290g). Award 1 mark for correct point, 1 for expected value 290±10g.',
  },
  q4_e: {
    marks: 4,
    exemplar: 'State in spinning container: Liquid. State in collection bowl: Solid. Behaviour of liquid sugar in spinning container: Takes the shape of the container. Behaviour of solid sugar in collection bowl: No change of shape when changing container.',
    keyConcepts: ['States of matter', 'Properties of solids and liquids'],
    keywords: ['spinning container liquid', 'collection bowl solid', 'liquid takes shape', 'solid no change shape'],
    feedbackHit: 'Correct — spinning container: liquid (takes shape); collection bowl: solid (no change of shape). ECF from first mark.',
    feedbackMiss: 'Sugar is melted at 160°C in spinning container → LIQUID. Threads solidify in collection bowl → SOLID. Liquid takes shape of container; solid does not change shape when moved. Award ECF from first mark for each pair.',
    blankAnswers: ['Liquid', 'Solid', 'Takes the shape of the container', 'No change of shape when changing container'],
  },

  // ── Q5: Eggs / Maillard reaction ─────────────────────────────────────────
  q5_a: {
    marks: 4,
    exemplar: 'Independent variable: Time (or duration of cooking)\nDependent variable: How cooked / appearance (solid or white)\nControl variable 1: Size of egg\nControl variable 2: Type of egg (or temperature of water / volume of water / colour of shell)',
    keyConcepts: ['Variables', 'Criterion B', 'Experimental design'],
    keywords: ['IV time duration', 'DV how cooked solid white appearance', 'CV size egg', 'CV type egg temperature water'],
    feedbackHit: 'Correct — IV = time/duration; DV = how cooked/appearance; two valid CVs.',
    feedbackMiss: 'IV = what is changed = time or duration of cooking. DV = what is measured = how cooked / solid / white / appearance change. CVs = any two of: size of egg, type of egg, temperature of water, volume of water, colour of shell.',
    blankAnswers: ['Time / duration of cooking', 'How cooked / solid or white', 'Size of egg', 'Type of egg'],
  },
  q5_b: {
    marks: 3,
    exemplar: 'If: the egg is heated or cooked for a longer time\nThen: the egg will be more solid or white (more cooked)\nBecause: there is a greater amount of chemical change',
    keyConcepts: ['Hypothesis', 'If–Then–Because'],
    keywords: ['if longer time', 'then more solid white', 'because greater chemical change', 'WTTE'],
    feedbackHit: 'Correct — If/Then/Because linked to more cooking time producing more chemical change.',
    feedbackMiss: 'IF egg is cooked for longer → THEN it will be more solid/white → BECAUSE there is a greater amount of chemical change (proteins denature more).',
  },
  q5_c: {
    marks: 3,
    exemplar: 'Sugar and protein react with heat. The Maillard reaction takes place. This reaction causes the brown colour in toast.',
    keyConcepts: ['Maillard reaction', 'Chemical changes in food'],
    keywords: ['sugar protein react heat', 'Maillard reaction', 'brown colour', 'caramelisation'],
    feedbackHit: 'Correct — sugar and protein react with heat via Maillard reaction causing brown colour.',
    feedbackMiss: '3 marks: (1) sugars and proteins react; (2) with heat; (3) Maillard reaction causes brown colour.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'The colour of the bread would be less brown. Because lower temperature gives fewer/slower Maillard reactions (WTTE: accept rate is slower).',
    keyConcepts: ['Temperature and reaction rate', 'Maillard reaction'],
    keywords: ['less brown colour', 'lower temperature fewer Maillard', 'rate slower', 'less chemical change'],
    feedbackHit: 'Correct — less brown colour; lower temperature → slower/fewer Maillard reactions.',
    feedbackMiss: '2 marks: (1) colour is less brown; (2) lower temperature → fewer/slower Maillard reactions (or: less chemical change occurs).',
  },

  // ── Q6: Lemon juice / MR-P / Crit B design ───────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'The force needed to break cooked meat is HIGHER than uncooked meat. So the hypothesis is NOT supported (ORA).',
    keyConcepts: ['Hypothesis evaluation', 'Data interpretation'],
    keywords: ['force higher cooked', 'hypothesis not supported', 'ORA breaking force'],
    feedbackHit: 'Correct — force to break cooked meat is higher, so hypothesis not supported.',
    feedbackMiss: '2 marks: (1) force needed to break cooked meat is higher; (2) therefore hypothesis is NOT supported. Do not award 2nd mark unless first is awarded.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'Lime and lemon, and lemon and lime samples could be eaten. Both had breaking forces greater than 280 N.',
    keyConcepts: ['Data interpretation', 'Threshold values'],
    keywords: ['lime and lemon suitable', 'lemon and lime suitable', 'breaking force > 280 N'],
    feedbackHit: 'Correct — lime+lemon and lime samples identified; justified with forces > 280 N.',
    feedbackMiss: '2 marks: (1) identify the correct sample(s) with force > 280 N; (2) justify using data (force values > threshold of 280 N).',
  },
  q6_c: {
    marks: 1,
    exemplar: 'As a control (or for direct comparison, or as a baseline).',
    keyConcepts: ['Control experiment', 'Scientific method'],
    keywords: ['control baseline direct comparison', 'sample 1 juice only', 'reference point'],
    feedbackHit: 'Correct — sample 1 acts as a control / baseline / direct comparison.',
    feedbackMiss: 'Sample 1 (juice only, no MR-P) is a CONTROL — it provides a reference/baseline to compare against the experimental samples.',
    blankAnswers: ['As a control / for direct comparison / as a baseline'],
  },
  q6_d: {
    marks: 2,
    exemplar: 'Repeat the experiment (at least 3 trials per pH). Calculate an average (mean) to reduce the effect of random error.',
    keyConcepts: ['Reliability', 'Repeating experiments'],
    keywords: ['repeat experiment', 'calculate average mean', 'reduce random error', 'reliability'],
    feedbackHit: 'Correct — repeat the experiment AND calculate an average.',
    feedbackMiss: '2 marks: (1) repeat the experiment; (2) calculate an average. Both needed for full marks.',
  },
  q6_e: {
    marks: 1,
    exemplar: '"What is the effect of pH on the breaking force of MR-P?" (WTTE — must mention pH and breaking force or similar measurable outcome)',
    keyConcepts: ['Research question', 'Scientific inquiry'],
    keywords: ['effect of pH', 'breaking force MR-P', 'research question pH', 'WTTE'],
    feedbackHit: 'Correct — research question clearly mentions pH as the variable and a measurable outcome.',
    feedbackMiss: 'Research question must state the IV (pH) and DV (breaking force / whether cooked). E.g. "What is the effect of pH on the breaking force of MR-P?"',
  },
  q6_f: {
    marks: 17,
    exemplar: 'Crit B design rubric (4 bands):\n\nBand 4 (highest): IV = pH AND DV = breaking force identified; two CVs (e.g. size/mass of sample + time submerged); equipment to measure DV AND CV (force meter + stopwatch); Force measured AND at least 15 mins AND same size of sample AND sample submerged in acid; 3+ trials for at least 5 pH levels AND plan to calculate average; safety precaution explicitly linked to acidity of solutions.\n\nTypical Band 3 method: Use 5 HCl solutions of different pH (e.g. 2.0, 2.5, 3.0, 3.5, 3.8). Cut identical-sized MR-P samples (e.g. 2cm × 2cm). Submerge each sample in 50 cm³ of solution for 25 minutes at room temperature. Measure the force required to break the sample using a force meter. Repeat at least 3 times per pH. Record results in a table and calculate mean. Safety: HCl is corrosive/irritant — wear goggles and lab coat.',
    keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Method'],
    keywords: ['IV pH', 'DV breaking force', 'CVs size time', 'force meter', '5 pH levels', '3 trials average', 'acid safety'],
    feedbackHit: 'Strong Crit B design — IV/DV/CVs, equipment, method with 5 pH values + 3 trials, safety linked to acid.',
    feedbackMiss: 'Band descriptors: (1) identify IV or DV; (2) IV AND DV; (3) force measured for multiple pH + CVs + 3 trials; (4) full method + safety linked to acid use.',
  },

  // ── Q7: Carbon footprint / plant-based burgers ─────────────────────────────
  q7_a: {
    marks: 2,
    exemplar: 'Carbon footprint from protein production in US diet = total (beef + others) − vegetarian contribution. Reading from the graph: approximately 2000 − 950 = 1050 kg CO₂ eq (accept answers in range 1050–1100). Award 2 marks for correct answer with no working shown.',
    keyConcepts: ['Carbon footprint', 'Data from graphs'],
    keywords: ['2000-950', '1050 kg CO₂', 'carbon footprint US diet', 'read graph'],
    feedbackHit: 'Correct — approximately 1050–1100 kg CO₂ equivalent from graph reading.',
    feedbackMiss: 'Read the carbon footprint bar for average US diet (~2000) and subtract the vegetarian or non-meat component (~950). Answer = ~1050 kg CO₂ eq. Accept 1050–1100. Award 2 marks for correct answer even without working.',
  },
  q7_b: {
    marks: 7,
    exemplar: 'Crit D evaluation rubric (3 bands):\n\nAdvantages/Disadvantages (A/D): Band 3 = >1 production advantage or disadvantage of plant-based protein stated with supporting evidence for at least one (lower carbon, water, farmland) + at least one disadvantage acknowledged.\n\nNutritional Data (D): Band 3 = >1 category of nutritional data compared for both burgers.\n\nConclusion (C): Band 3 = concluding appraisal with justification.\n\nExemplar answer: Producing plant-based protein creates significantly less carbon dioxide per kg of protein compared to beef (graph data). Water and farmland requirements are also lower. This is better for the environment and contributes less to climate change. However, plant-based burgers may contain more sodium, and some people find the taste/texture less appealing. Nutritionally, the energy content (436 vs 277 kJ) is slightly higher for the plant burger, protein content is similar, and total fat is less than beef (23g vs 27g). People may choose plant-based burgers due to ethical concerns about animal welfare, environmental reasons, or dietary preferences. However, if cost is a major factor, plant-based burgers are currently more expensive in some regions.',
    keyConcepts: ['Criterion D', 'Environmental impact', 'Nutritional analysis', 'Plant-based diet'],
    keywords: ['lower carbon water land', 'nutritional comparison energy protein fat', 'animal welfare ethics', 'justify choice'],
    feedbackHit: 'Strong Crit D — AD of plant protein production with evidence; 2+ nutritional categories compared; justified conclusion.',
    feedbackMiss: '(1) At least one advantage and one disadvantage of plant protein production; (2) compare 2+ nutritional data categories for both burger types; (3) concluding opinion with justification.',
  },

  // ── Q8: Lab-grown meat ─────────────────────────────────────────────────────
  q8_: {
    marks: 15,
    exemplar: 'Crit D evaluation rubric (4 bands):\n\nEnvironmental impact (Band 4): >1 impact stated with scientific justification (e.g. "less land and water required and production of fewer greenhouse gases compared to farming — supported by bar chart showing 99% reduction in land use").\n\nEthical (Band 4): Ethical issue stated with further discussion (e.g. "cells are taken from a living animal — while no killing occurs, some argue this still uses animals; others argue it is the ethical solution as it eliminates slaughter").\n\nSocio-economic (Band 4): Social + economic issue stated with justification (e.g. "cost per burger dropped to $10; labs can be built anywhere eliminating need for large farms; however, factory farming jobs would be lost").\n\nPotential for health (Band 4): Potential health effect clearly stated (e.g. "cells tested for animal-borne diseases — may be safer than farmed meat; however, long-term effects unknown").\n\nConcluding appraisal (Band 4): Appraisal with justification (e.g. "Overall, lab-grown meat appears a promising solution — environmental benefits are clear; ethical concerns exist but are smaller than those of conventional farming; the key barrier remains scaling production to make it widely affordable").',
    keyConcepts: ['Criterion D', 'Lab-grown meat', 'Environmental impact', 'Ethical issues', 'Socio-economic factors'],
    keywords: ['environmental land water emissions', 'ethical animal cells no slaughter', 'socio-economic cost $10 jobs', 'health disease testing', 'justified conclusion'],
    feedbackHit: 'Strong Crit D — environmental + ethical + socio-economic impacts with justification; health impact; concluding appraisal.',
    feedbackMiss: 'Need: (1) environmental impact (stated AND justified); (2) ethical issue (stated AND discussed); (3) social AND economic issue (stated AND justified); (4) potential health impact; (5) concluding appraisal with justification.',
  },
}
