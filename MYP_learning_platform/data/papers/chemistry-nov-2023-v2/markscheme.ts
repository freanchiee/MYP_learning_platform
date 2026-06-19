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
  // ── Q1: Home soda-maker / CO₂ / equilibrium ───────────────────────────────
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
    exemplar: 'The soda water becomes less fizzy. The system is no longer at equilibrium because CO₂ escapes from the open bottle. The solubility of CO₂ decreases as the temperature increases (or: diffusion rate increases / concentration of dissolved CO₂ decreases).',
    keyConcepts: ['Equilibrium', 'Solubility', 'Temperature effects'],
    keywords: ['less fizzy', 'not at equilibrium', 'CO₂ escapes', 'solubility decreases with temperature', 'diffusion increases'],
    feedbackHit: 'Correct — less fizzy; equilibrium disrupted; CO₂ less soluble at higher temperature.',
    feedbackMiss: '3 marks: (1) soda water is less fizzy; (2) system not at equilibrium (CO₂ escapes from open bottle); (3) CO₂ solubility decreases as temperature increases OR diffusion increases OR concentration of dissolved CO₂ decreases.',
  },

  // ── Q2: Vinegar / glycerol / propane-1,2-diol / ester ─────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Mr(C₂H₄O₂) = 2(12) + 4(1) + 2(16) = 24 + 4 + 32 = 60 g mol⁻¹',
    keyConcepts: ['Molar mass', 'Relative atomic mass'],
    keywords: ['Mr 60', 'C2H4O2 molar mass', '24+4+32', 'g mol⁻¹'],
    feedbackHit: 'Correct — Mr = 60 g mol⁻¹.',
    feedbackMiss: 'Mr(C₂H₄O₂) = 2×Mr(C) + 4×Mr(H) + 2×Mr(O) = 2(12) + 4(1) + 2(16) = 24 + 4 + 32 = 60 g mol⁻¹. Award 1 mark for method, 1 for the answer with unit.',
  },
  q2_b: {
    marks: 2,
    exemplar: 'n = m/Mr = 23.0 / 92.0 = 0.250 mol (3 s.f.). Award 2 marks if only 0.250 is seen.',
    keyConcepts: ['Moles calculation', 'n = m/Mr'],
    keywords: ['n = m/Mr', '23.0/92.0', '0.250 mol', '0.250', 'moles glycerol'],
    feedbackHit: 'Correct — n = 23.0/92.0 = 0.250 mol (3 s.f.).',
    feedbackMiss: 'n = m/Mr = 23.0 ÷ 92.0 = 0.2500 mol. To 3 s.f. → 0.250 mol. Award 2 marks if only 0.250 is seen.',
    blankAnswers: ['0.250'],
  },
  q2_c: {
    marks: 3,
    exemplar: 'C₃H₈O₂. Count from the 3D model: 3 carbon (black), 8 hydrogen (white), 2 oxygen (red). Formula written in the correct order of elements.',
    keyConcepts: ['Molecular formulae', 'Counting atoms from 3D models'],
    keywords: ['C3H8O2', 'propane-1,2-diol molecular formula', 'count atoms black white red', 'three carbon eight hydrogen two oxygen'],
    feedbackHit: 'Correct — C₃H₈O₂ (elements in correct order).',
    feedbackMiss: '3 marks: (1) correct number of each atom type; (2) correct formula; (3) correctly expressed. Elements must be in the order C, H, O → C₃H₈O₂.',
    blankAnswers: ['C₃H₈O₂'],
  },
  q2_d: {
    marks: 2,
    exemplar: 'First highlighted group: Ester (–COO– linkage). Second highlighted group: Alcohol (–OH).',
    keyConcepts: ['Functional groups', 'Organic chemistry'],
    keywords: ['ester COO linkage', 'alcohol OH group', 'fragrance functional groups'],
    feedbackHit: 'Correct — first group = ester; second group = alcohol.',
    feedbackMiss: 'Ester = –COO– (C double-bonded to O and single-bonded to another O on a carbon chain). Alcohol = –OH (an –OH group bonded to a carbon).',
    blankAnswers: ['Ester', 'Alcohol'],
  },

  // ── Q3: Copper vs galvanised steel water pipes ────────────────────────────
  q3_a: {
    marks: 1,
    exemplar: '2.8.18.2  (Zn, Z = 30)',
    keyConcepts: ['Electron configuration', 'Zinc'],
    keywords: ['2.8.18.2', 'zinc electron configuration', '30 electrons', 'four shells'],
    feedbackHit: 'Correct — Zn (Z=30) electron configuration is 2.8.18.2.',
    feedbackMiss: 'Zinc has 30 electrons: shells fill 2, 8, 18, 2 → 2.8.18.2 (the 3rd shell holds up to 18).',
    blankAnswers: ['2.8.18.2'],
  },
  q3_b: {
    marks: 4,
    exemplar: 'Any two properties from the table, each correctly linked to an advantage [max 4]:\n\n1. Copper reacts very slowly and does not rust → it will not leak or contaminate the drinking water, so the pipe lasts for decades (galvanised steel rusts once the zinc wears away).\n2. Copper is malleable → it can be bent around corners without cracking, making it easier to install.\n3. Copper is an excellent thermal/electrical conductor → useful for hot-water and heating pipes.\n\n[Accept any property from the table correctly linked to an advantage.]',
    keyConcepts: ['Properties of metals', 'Corrosion', 'Materials science'],
    keywords: ['does not rust safe water', 'malleable bends corners', 'good conductor', 'copper pipe advantages'],
    feedbackHit: 'Correct — two properties from the table each linked to a real advantage.',
    feedbackMiss: 'Use data from the table: copper (1) does not rust → no contamination/leaks; (2) is malleable → bends without cracking; (3) is a better conductor. State the property AND the linked advantage for each.',
  },

  // ── Q4: KNO₃ solubility / crystal growing ─────────────────────────────────
  q4_a: {
    marks: 3,
    exemplar: 'Two-column table:\n\nTemperature of water / °C : 0, 20, 40, 60, 80, 100\nMass of KNO₃ / g         : 14, 32, 64, 155, 169, 246\n\nColumns labelled Temperature and Mass of KNO₃. Units in the column headers (not next to each value). Data in ascending temperature order.',
    keyConcepts: ['Data organisation', 'Tables', 'Criterion C'],
    keywords: ['temperature mass KNO₃ table', 'ascending order', 'units header', '14 32 64 155 169 246'],
    feedbackHit: 'Correct — two-column table with labelled headers (including units) and data in ascending temperature order.',
    feedbackMiss: '3 marks: (1) columns labelled Temperature and Mass of KNO₃; (2) units in the headers (not with each value); (3) data in ascending temperature order. Do not accept units written next to the data.',
  },
  q4_b: {
    marks: 5,
    exemplar: 'Scatter graph: x-axis = Temperature / °C (0–100), y-axis = Mass of KNO₃ / g (0–250, even scale from 0); all 6 data points plotted correctly; line of best fit (the 60 °C point lies above the line); axes labelled with quantity AND unit; data uses the majority of the grid.',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Data presentation'],
    keywords: ['x Temperature', 'y mass KNO₃', 'even scale from zero', '6 points plotted', 'line of best fit', 'axes labelled'],
    feedbackHit: 'Correct — both axes labelled with units, suitable scale, all 6 points, line of best fit, majority of grid used.',
    feedbackMiss: '5 marks: (1) x-axis Temperature/°C; (2) y-axis Mass of KNO₃/g; (3) units on both axes; (4) three+ points plotted correctly; (5) ALL 6 points correct AND using the majority of the grid.',
  },
  q4_c: { type: 'mcq', correct: 2 },         // Graph C (0-indexed: A=0, B=1, C=2, D=3)
  q4_d: {
    marks: 2,
    exemplar: 'Outlier: the 60 °C data point (measured 155 g). Expected mass from the line of best fit ≈ 130 ± 15 g.',
    keyConcepts: ['Outliers', 'Line of best fit interpretation'],
    keywords: ['outlier 60°C', 'expected 130 g', 'anomalous data', 'fourth point'],
    feedbackHit: 'Correct — outlier identified at 60 °C; expected mass from the line ≈ 130 g.',
    feedbackMiss: 'The 60 °C point sits furthest above the line of best fit (measured 155 g vs expected ≈ 130 g). Award 1 mark for the correct point, 1 for an expected value of 130 ± 15 g.',
  },
  q4_e: {
    marks: 4,
    exemplar: 'State in hot solution: Liquid. State in cooled crystal: Solid. Behaviour of KNO₃ in the hot solution: Takes the shape of the container. Behaviour of KNO₃ in the cooled crystal: No change of shape when changing container.',
    keyConcepts: ['States of matter', 'Properties of solids and liquids'],
    keywords: ['hot solution liquid', 'cooled crystal solid', 'liquid takes shape', 'solid no change shape'],
    feedbackHit: 'Correct — hot solution: liquid (takes shape); cooled crystal: solid (no change of shape). ECF from the first mark.',
    feedbackMiss: 'Dissolved KNO₃ in hot water behaves as a LIQUID. The grown crystal is a SOLID. A liquid takes the shape of its container; a solid does not change shape when moved. Award ECF from the first mark for each pair.',
    blankAnswers: ['Liquid', 'Solid', 'Takes the shape of the container', 'No change of shape when changing container'],
  },

  // ── Q5: Rusting iron nail / charcoal combustion ──────────────────────────
  q5_a: {
    marks: 4,
    exemplar: 'Independent variable: Time the nail is left outdoors\nDependent variable: How rusted the nail is (area covered / mass of rust)\nControl variable 1: Size / type of nail\nControl variable 2: Amount of moisture (or temperature / amount of air)',
    keyConcepts: ['Variables', 'Criterion B', 'Experimental design'],
    keywords: ['IV time outdoors', 'DV how rusted area mass', 'CV size type nail', 'CV moisture temperature air'],
    feedbackHit: 'Correct — IV = time outdoors; DV = how rusted; two valid CVs.',
    feedbackMiss: 'IV = what is changed = time left outdoors. DV = what is measured = how rusted (area/mass). CVs = any two of: size/type of nail, amount of moisture, temperature, amount of air.',
    blankAnswers: ['Time left outdoors', 'How rusted (area / mass of rust)', 'Size / type of nail', 'Amount of moisture'],
  },
  q5_b: {
    marks: 3,
    exemplar: 'If: the nail is left outdoors for a longer time\nThen: more of the nail will rust (greater rusted area / more rust formed)\nBecause: a greater amount of chemical change takes place (iron + oxygen + water → hydrated iron oxide / rust)',
    keyConcepts: ['Hypothesis', 'If–Then–Because'],
    keywords: ['if longer time', 'then more rust', 'because greater chemical change iron oxygen water', 'WTTE'],
    feedbackHit: 'Correct — If/Then/Because linked to longer time producing more rust (more chemical change).',
    feedbackMiss: 'IF the nail is left out longer → THEN more of it rusts → BECAUSE more chemical change occurs (iron reacts with oxygen and water to form rust).',
  },
  q5_c: {
    marks: 3,
    exemplar: 'The carbon in the charcoal reacts with oxygen from the air. This combustion reaction releases heat, so the charcoal glows. Carbon dioxide gas (C + O₂ → CO₂) is produced and escapes into the air, so the charcoal loses mass.',
    keyConcepts: ['Combustion', 'Chemical change'],
    keywords: ['carbon reacts oxygen', 'combustion releases heat glows', 'carbon dioxide produced escapes', 'mass lost as gas'],
    feedbackHit: 'Correct — carbon burns in oxygen, releasing heat (glows) and producing CO₂ gas that escapes, so mass is lost.',
    feedbackMiss: '3 marks: (1) carbon reacts with oxygen from the air; (2) combustion releases heat so it glows; (3) carbon dioxide gas is produced and escapes, so mass is lost.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'The charcoal would burn more slowly and glow less brightly. Because less air (oxygen) can reach it, the combustion reaction is slower.',
    keyConcepts: ['Rate of reaction', 'Combustion and oxygen supply'],
    keywords: ['burns slower glows less', 'less oxygen air', 'slower combustion', 'prediction justified'],
    feedbackHit: 'Correct — burns more slowly/glows less; less oxygen → slower combustion.',
    feedbackMiss: '2 marks: (1) the charcoal burns more slowly / glows less; (2) because less oxygen reaches it, the combustion reaction is slower.',
  },

  // ── Q6: Acid descaler vs limescale / Crit B design ───────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'The acids removed different masses of limescale (e.g. weak vinegar 0.55 g vs sulfamic-acid descaler 0.98 g). So the hypothesis that all the acids remove the same mass is NOT supported (ORA).',
    keyConcepts: ['Hypothesis evaluation', 'Data interpretation'],
    keywords: ['different masses removed', 'hypothesis not supported', 'ORA mass removed'],
    feedbackHit: 'Correct — the acids removed different masses, so the hypothesis is not supported.',
    feedbackMiss: '2 marks: (1) the acids removed different masses of limescale; (2) therefore the hypothesis (all the same) is NOT supported. Do not award the 2nd mark unless the first is given.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'The citric-acid descaler (0.90 g) and the sulfamic-acid descaler (0.98 g) would fully descale the kettle. Both removed a mass greater than the 0.80 g threshold.',
    keyConcepts: ['Data interpretation', 'Threshold values'],
    keywords: ['citric acid suitable', 'sulfamic acid suitable', 'mass removed > 0.80 g'],
    feedbackHit: 'Correct — citric-acid and sulfamic-acid descalers identified; justified with mass removed above 0.80 g.',
    feedbackMiss: '2 marks: (1) identify citric-acid (0.90 g) and sulfamic-acid (0.98 g); (2) justify using data — both are above the 0.80 g threshold.',
  },
  q6_c: {
    marks: 1,
    exemplar: 'As a control (or for direct comparison, or as a baseline).',
    keyConcepts: ['Control experiment', 'Scientific method'],
    keywords: ['control baseline direct comparison', 'sample 1 acid only', 'reference point'],
    feedbackHit: 'Correct — sample 1 acts as a control / baseline / direct comparison.',
    feedbackMiss: 'Sample 1 (acid only, no disc) is a CONTROL — it gives a baseline/reference to compare the experimental samples against.',
    blankAnswers: ['As a control / for direct comparison / as a baseline'],
  },
  q6_d: {
    marks: 2,
    exemplar: 'Repeat the experiment for each acid (at least 3 times). Calculate an average (mean) mass removed to reduce the effect of random error.',
    keyConcepts: ['Reliability', 'Repeating experiments'],
    keywords: ['repeat experiment', 'calculate average mean', 'reduce random error', 'reliability'],
    feedbackHit: 'Correct — repeat the experiment AND calculate an average.',
    feedbackMiss: '2 marks: (1) repeat the experiment; (2) calculate an average. Both are needed for full marks.',
  },
  q6_e: {
    marks: 1,
    exemplar: '"What is the effect of pH on the mass of limescale removed?" (WTTE — must name pH as the variable and mass removed / whether descaled as the outcome.)',
    keyConcepts: ['Research question', 'Scientific inquiry'],
    keywords: ['effect of pH', 'mass of limescale removed', 'research question pH', 'WTTE'],
    feedbackHit: 'Correct — research question names pH as the variable and a measurable outcome.',
    feedbackMiss: 'The research question must state the IV (pH) and the DV (mass of limescale removed / whether descaled). E.g. "What is the effect of pH on the mass of limescale removed?"',
  },
  q6_f: {
    marks: 17,
    exemplar: 'Crit B design rubric (4 bands):\n\nBand 7–8 (highest): IV = pH AND DV = mass of limescale removed identified; two CVs (e.g. size/mass of disc + reaction time); equipment to measure DV AND CVs (balance + ruler/calipers + stopwatch); method specifies mass measured before and after AND each disc reacted for 25 min AND identical disc size AND disc fully submerged; 3+ trials for at least 5 pH levels (e.g. 1.5, 2.0, 2.5, 3.0 plus one more) AND a plan to calculate a mean; safety precaution explicitly linked to the acidity of the HCl solutions (goggles — corrosive/irritant).\n\nTypical strong method: Prepare 5 HCl solutions of known pH (1.5, 1.9, 2.3, 2.7, 3.0). Use identical limescale-coated discs of equal mass. Weigh each disc, place it in 50 cm³ of solution for 25 minutes at room temperature, dry it, and reweigh to find the mass removed. Repeat 3 times per pH and calculate the mean. Record results in a table. Safety: HCl is corrosive/irritant — wear goggles and wash spills.',
    keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Method'],
    keywords: ['IV pH', 'DV mass removed', 'CVs size time', 'balance', '5 pH levels', '3 trials average', 'acid safety goggles'],
    feedbackHit: 'Strong Crit B design — IV/DV/CVs, equipment, method with 5 pH values + 3 trials, safety linked to acid.',
    feedbackMiss: 'Band descriptors: (1) identify IV or DV; (2) IV AND DV; (3) mass removed measured for multiple pH values + CVs + 3 trials; (4) full method + safety linked to using the acid.',
  },

  // ── Q7: Petrol vs electric car / carbon footprint ────────────────────────
  q7_a: {
    marks: 2,
    exemplar: 'CO₂ from driving the petrol car = (total lifetime) − (emissions from making it). From the chart: 35 − 9 = 26 tonnes CO₂ (accept 24–28). Award 2 marks for the correct answer even with no working shown.',
    keyConcepts: ['Carbon footprint', 'Data from graphs'],
    keywords: ['35-9', '26 tonnes CO₂', 'driving emissions', 'read graph'],
    feedbackHit: 'Correct — about 26 tonnes CO₂ from driving the petrol car.',
    feedbackMiss: 'Read the bar for the petrol car total lifetime (~35) and subtract the value for just making it (~9). 35 − 9 = 26 tonnes CO₂. Accept 24–28. Award 2 marks even without working.',
  },
  q7_b: {
    marks: 7,
    exemplar: 'Crit D evaluation rubric (3 bands):\n\nAdvantages/Disadvantages (A/D): Band 3 = >1 advantage of the electric car stated with supporting evidence (about half the lifetime CO₂ — 18 vs 35 tonnes — and no exhaust fumes in towns) + at least one disadvantage acknowledged (more CO₂ to make it, 12 vs 9 tonnes; shorter range; slow charging; higher purchase price).\n\nData comparison (D): Band 3 = >1 row of the table compared for both cars.\n\nConclusion (C): Band 3 = concluding opinion with justification.\n\nExemplar answer: Over its life the electric car produces much less CO₂ than the petrol car (18 vs 35 tonnes) and gives off no exhaust fumes in towns, which improves air quality. Its energy cost per 100 km is far lower (£4 vs £12). However, making the electric car (especially the battery) produces more CO₂ (12 vs 9 tonnes), it has a shorter range (350 vs 650 km), recharging takes much longer (40 min vs 5 min) and it costs more to buy (£32 000 vs £24 000). People may still choose an electric car for the lower running cost, the lower lifetime emissions and to cut local pollution; others may keep a petrol car for the longer range, faster refuelling and lower purchase price.',
    keyConcepts: ['Criterion D', 'Environmental impact', 'Data comparison', 'Transport and emissions'],
    keywords: ['lower lifetime CO₂', 'no exhaust fumes', 'higher CO₂ to make battery', 'range charging cost comparison', 'justify choice'],
    feedbackHit: 'Strong Crit D — A/D of the electric car with evidence; 2+ data rows compared; justified conclusion.',
    feedbackMiss: '(1) At least one advantage and one disadvantage of the electric car; (2) compare 2+ rows of the table for both cars; (3) concluding opinion with justification.',
  },

  // ── Q8: Hydrogen fuel-cell buses ──────────────────────────────────────────
  q8_: {
    marks: 15,
    exemplar: 'Crit D evaluation rubric (4 bands):\n\nEnvironmental impact (Band 4): >1 impact stated with scientific justification (e.g. "the only emission from the bus is water, so there is no CO₂ or soot from the bus itself, and it converts about 45% of fuel energy into motion vs ~30% for diesel — but it is only truly clean if the hydrogen is made using electricity from renewable sources, not fossil fuels").\n\nEthical (Band 4): ethical issue stated with discussion (e.g. "it is fairer to future generations to make hydrogen using renewable electricity; making hydrogen from fossil-fuel electricity simply moves the pollution elsewhere").\n\nSocio-economic (Band 4): social + economic issue with justification (e.g. "cleaner buses make cities more pleasant and create new jobs, but the buses and the high-pressure refuelling stations are expensive to build, so fares or taxes may rise").\n\nPotential for health (Band 4): health effect clearly stated (e.g. "removing diesel exhaust removes particulates and nitrogen oxides that cause asthma and lung disease, improving health in cities; hydrogen is flammable so must be stored safely under pressure").\n\nConcluding appraisal (Band 4): appraisal with justification (e.g. "Overall, hydrogen fuel-cell buses are a strong option for cutting city air pollution and emissions — provided the hydrogen is made with renewable electricity and the high cost of refuelling infrastructure can be met").',
    keyConcepts: ['Criterion D', 'Hydrogen fuel cells', 'Environmental impact', 'Ethical issues', 'Socio-economic factors'],
    keywords: ['environmental only water no CO₂ renewable hydrogen', 'ethical renewable not fossil', 'socio-economic cost buses refuelling jobs', 'health removes exhaust lung disease flammable', 'justified conclusion'],
    feedbackHit: 'Strong Crit D — environmental + ethical + socio-economic impacts with justification; health impact; concluding appraisal.',
    feedbackMiss: 'Need: (1) environmental impact (stated AND justified); (2) ethical issue (stated AND discussed); (3) social AND economic issue (stated AND justified); (4) potential health impact; (5) concluding appraisal with justification.',
  },
}
