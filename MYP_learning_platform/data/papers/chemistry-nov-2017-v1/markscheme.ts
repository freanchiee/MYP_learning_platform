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
  // ── Q1: Tin and Antimony ─────────────────────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Group 4 (accept Group 14); Period 5.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['group 4', 'group 14', 'period 5', 'tin Sn'],
    feedbackHit: 'Correct — tin is in Group 4/14, Period 5.',
    feedbackMiss: 'Locate Sn on the periodic table: count across for group, down for period.',
  },
  q1_b: {
    marks: 4,
    exemplar: 'Equation 1: 2SnS + 3O₂ → 2SnO + 2SO₂ (reactants correct 1 mark; products correct 1 mark). Equation 2: 2SnO + C → 2Sn + CO₂ (reactants correct 1 mark; products correct 1 mark). Note: do NOT accept "?" in place of a blank coefficient.',
    keyConcepts: ['Balancing equations', 'Conservation of atoms'],
    keywords: ['2SnS', '3O₂', '2SnO', '2SO₂', '2Sn', 'CO₂', 'balancing'],
    feedbackHit: 'Both tin extraction equations correctly balanced — atoms are conserved.',
    feedbackMiss: 'Count atoms on each side. Eq1: 2Sn, 2S, 6O each side; Eq2: 2Sn, 2O, 1C each side.',
    blankAnswers: ['2', '3', '2', '2', '2', '1', '2', '1'],
  },
  q1_c: {
    marks: 2,
    exemplar: 'SO₂ is formed which contributes to the formation of acid rain (1 mark). OR CO₂ is formed which contributes to climate change (1 mark). Do NOT accept "toxic fumes" — not specific enough.',
    keyConcepts: ['Pollution', 'Acid rain', 'Climate change'],
    keywords: ['SO₂', 'acid rain', 'CO₂', 'climate change', 'sulfur dioxide', 'carbon dioxide'],
    feedbackHit: 'Correct — SO₂ → acid rain; CO₂ → climate change.',
    feedbackMiss: 'Name the specific gas produced (SO₂ or CO₂) and its environmental consequence.',
  },
  q1_d: {
    marks: 2,
    exemplar: 'Any two from: electrical conductivity, thermal conductivity, malleability, appearance (metallic lustre).',
    keyConcepts: ['Metallic properties', 'Physical properties'],
    keywords: ['electrical conductivity', 'thermal conductivity', 'malleability', 'lustre', 'appearance'],
    feedbackHit: 'Correct — two valid metallic properties of tin.',
    feedbackMiss: 'Think about what all metals share: conduct electricity, conduct heat, can be bent/shaped, shiny appearance.',
  },
  q1_e: {
    marks: 2,
    exemplar: 'Antimony is a metalloid/semi-metal, so it has a different structure; a different structure gives rise to different properties (WTTE — they would be different).',
    keyConcepts: ['Metalloids', 'Semi-metals'],
    keywords: ['metalloid', 'semi-metal', 'different structure', 'different properties', 'antimony'],
    feedbackHit: 'Correct — antimony is a semi-metal with a different atomic structure from tin.',
    feedbackMiss: 'Antimony is NOT a metal — it is a metalloid. Its structure differs from a metal so its properties differ.',
  },
  q1_f: {
    marks: 2,
    exemplar: 'Sn-112: protons = 50, electrons = 50, neutrons = 62. Sn-124: protons = 50, electrons = 50, neutrons = 74. Mark for: neutrons of Sn-112 = 62 (1 mark); neutrons of Sn-124 = 74 (1 mark).',
    keyConcepts: ['Atomic structure', 'Isotopes'],
    keywords: ['neutrons', 'mass number minus atomic number', '112 − 50', '124 − 50', '62', '74'],
    feedbackHit: 'Correct — neutrons = mass number − atomic number.',
    feedbackMiss: 'Neutrons = atomic mass − atomic number. For Sn-112: 112 − 50 = 62. For Sn-124: 124 − 50 = 74.',
  },
  q1_g: {
    marks: 2,
    exemplar: 'Same electron configuration (1 mark), so the different isotopes will react in the same way (1 mark). Only award the second mark if the first is given.',
    keyConcepts: ['Isotopes', 'Chemical reactivity'],
    keywords: ['same electron configuration', 'same chemical properties', 'react same way', 'isotopes'],
    feedbackHit: 'Correct — isotopes have the same electron arrangement so identical chemical reactivity.',
    feedbackMiss: 'Chemical reactions depend on electrons, not neutrons. All isotopes of tin have 50 electrons so react identically.',
  },

  // ── Q2: Ethanoate Esters and Volatility ─────────────────────────────────────
  q2_a: {
    marks: 1,
    exemplar: 'WTTE — must relate to volatility of esters. Example: "How does the volatility of esters depend on the length of their hydrocarbon chain?"',
    keyConcepts: ['Research question', 'Inquiry'],
    keywords: ['volatility', 'ester', 'carbon chain length', 'evaporate', 'research question'],
    feedbackHit: 'Good research question — clearly identifies what is being investigated.',
    feedbackMiss: 'Your RQ must mention the esters and what aspect of them you are testing (volatility).',
  },
  q2_b: {
    marks: 3,
    exemplar: 'WTTE — ECF from part (a). If the length of the carbon chain increases, then the volatility of the ester will reduce, because the intermolecular forces are stronger. Accept "bonds are stronger".',
    keyConcepts: ['Hypothesis', 'Intermolecular forces'],
    keywords: ['carbon chain increases', 'volatility decreases', 'intermolecular forces stronger', 'evaporate slower'],
    feedbackHit: 'Complete hypothesis — links longer chain → stronger IMFs → lower volatility.',
    feedbackMiss: 'Your hypothesis must state: direction of change in IV (chain length), direction of change in DV (volatility), and a reason (intermolecular forces).',
  },
  q2_c: {
    marks: 4,
    exemplar: 'Independent variable: ester OR length of the carbon chain. Dependent variable: time (to completely evaporate). Control variables (any two reasonable): temperature, surface area, container size or shape, volume or mass of sample, air flow.',
    keyConcepts: ['Variables', 'Experimental design'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'temperature', 'surface area', 'volume'],
    feedbackHit: 'Variables correctly identified with IV, DV, and at least two CVs.',
    feedbackMiss: 'IV = what you change; DV = what you measure; CV = what you keep the same.',
  },
  q2_d: {
    marks: 4,
    exemplar: 'Cold: low temperature — no heat added, so avoids breakdown/hydrolysis of the ester, OR the position of equilibrium remains towards the right-hand side. Dry: avoids adding water to the equilibrium mixture, no change in water concentration, so avoids breakdown of the ester, OR position of equilibrium remains towards the right. Accept correct answers relating to intermolecular forces for the first two marking points.',
    keyConcepts: ['Reversible reactions', 'Equilibrium', 'Hydrolysis'],
    keywords: ['low temperature', 'cold', 'ester breakdown', 'equilibrium', 'dry', 'no water', 'shifts right'],
    feedbackHit: 'Correct — cold prevents ester hydrolysis; dry prevents water shifting the equilibrium left.',
    feedbackMiss: 'Think about Le Chatelier\'s principle: adding heat or water would reverse the ester-forming reaction.',
  },
  q2_e: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  // ── Q3: Metals Reactivity (silver nitrate) ──────────────────────────────────
  q3_a: {
    type: 'mcq',
    correct: 2,
  } as MCQEntry,
  q3_b: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,
  q3_c: {
    marks: 15,
    exemplar: 'Rubric marking (max 15). Equipment (1→2→3): some equipment listed → includes thermometer → appropriate complete set (silver nitrate solution, thermometer/probe, test tubes, measuring cylinder). Variables (1→2): one CV → two CVs stated. Method (1→2→3): attempt at method → temperature measured → fine technique details (record temperature when stable, minimise heat loss). Measurements (1→2→3): one metal investigated → more than two → all five metals. Sufficient data (1→2): trials planned → trials + averages planned. Safety (1→2): safety precaution stated → linked to hazard (silver nitrate is toxic/irritant; stains skin).',
    keyConcepts: ['Criterion B — Inquiry and Design', 'Experimental method'],
    keywords: ['silver nitrate', 'thermometer', 'temperature', 'metals', 'variables', 'safety', 'repeats', 'averages'],
    feedbackHit: 'Well-designed method with clear variables, equipment, and safety consideration.',
    feedbackMiss: 'List all equipment, state IV/DV/CV, describe clear steps, plan repeats, and link safety to the specific hazard (silver nitrate is toxic and stains).',
  },
  q3_d: {
    marks: 1,
    exemplar: 'Order (least to most reactive): Tin – Iron – Zinc – Aluminium – Magnesium. All correct for 1 mark.',
    keyConcepts: ['Reactivity series', 'Displacement reactions'],
    keywords: ['tin', 'iron', 'zinc', 'aluminium', 'magnesium', 'reactivity order', 'least reactive', 'most reactive'],
    feedbackHit: 'Correct reactivity order — all five metals in the right positions.',
    feedbackMiss: 'More reactive metals produce a larger temperature rise. Use the temperature data: Mg (42°C) > Al (35°C) > Zn (28°C) > Fe (14°C) > Sn (9°C).',
    blankAnswers: ['Tin', 'Iron', 'Zinc', 'Aluminium', 'Magnesium'],
  },
  q3_e: {
    marks: 2,
    exemplar: 'The order of reactivity is based on the temperature rise (WTTE). The larger the temperature change/rise, the more reactive the metal is.',
    keyConcepts: ['Reactivity', 'Scientific reasoning'],
    keywords: ['temperature rise', 'more reactive', 'larger temperature change', 'exothermic'],
    feedbackHit: 'Correct scientific reasoning linking temperature change to reactivity.',
    feedbackMiss: 'State explicitly: larger temperature change = more reactive. Reference the data values if possible.',
  },
  q3_f: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,
  q3_g: {
    marks: 5,
    exemplar: 'Bar graph with: labels for metal on x-axis (Sn, Fe, Zn, Al, Mg) (1 mark); title linking temperature change to different metals (1 mark); data for one metal correctly plotted (1 mark); data for all metals plotted correctly (1 mark); unit °C on y-axis (1 mark).',
    keyConcepts: ['Bar graph', 'Data presentation'],
    keywords: ['bar graph', 'x-axis metals', 'y-axis temperature change', '°C', 'title', 'data plotted'],
    feedbackHit: 'Graph correctly shows all five metals with accurate bars, labels, and title.',
    feedbackMiss: 'Ensure: title mentions temperature change vs metal; x-axis labelled with metal symbols; y-axis has "Temperature change / °C"; all bars at correct heights (Sn=9, Fe=14, Zn=28, Al=35, Mg=42).',
  },
  q3_h: {
    marks: 2,
    exemplar: 'Limited validity as results produced only once are not reliable as errors may occur (WTTE). More than one trial should be carried out to produce an average.',
    keyConcepts: ['Validity', 'Reliability'],
    keywords: ['single trial', 'not reliable', 'limited validity', 'repeat', 'average', 'errors'],
    feedbackHit: 'Correct — single results lack validity; repeats and averaging improve reliability.',
    feedbackMiss: 'The data table shows only one result per metal. This is unreliable — you need repeats to check for errors and calculate averages.',
  },

  // ── Q4: UK Penny Coins ───────────────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Test with a lit splint/spill/stick (1 mark). Gas burns with a squeaky pop — so it is hydrogen (1 mark). Accept any reasonable alternative description of splint.',
    keyConcepts: ['Hydrogen gas test', 'Chemical testing'],
    keywords: ['lit splint', 'squeaky pop', 'burns', 'hydrogen', 'test tube'],
    feedbackHit: 'Correct — lit splint gives a squeaky pop confirming hydrogen.',
    feedbackMiss: 'The test for hydrogen: hold a lit splint near the mouth of the test tube — hydrogen burns with a squeaky pop.',
  },
  q4_b: {
    marks: 3,
    exemplar: 'If the coin is solid bronze (mostly copper, no steel core) then it will react the slowest (1 mark), because copper is the least reactive of the metals present (1 mark). Accept "newer copper-plated coins will react faster" with appropriate reasoning (1 mark).',
    keyConcepts: ['Hypothesis', 'Reactivity'],
    keywords: ['solid bronze', 'mostly copper', 'slowest reaction', 'least reactive', 'copper', 'hypothesis'],
    feedbackHit: 'Correct hypothesis linking copper composition to the slowest reaction rate.',
    feedbackMiss: 'Link coin composition (% exposed steel) to reactivity: the more copper, the less reactive the coin.',
  },
  q4_c: {
    marks: 4,
    exemplar: 'Independent variable: the composition/type OR date of the coin. Dependent variable: the volume of gas produced in a fixed time OR the time taken to produce a fixed volume of gas (do NOT award for volume or time alone). Control variables (any two reasonable): temperature, concentration of acid, type of acid. Do NOT accept pressure.',
    keyConcepts: ['Variables', 'Experimental design'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'coin composition', 'volume of gas', 'time', 'temperature'],
    feedbackHit: 'All variables correctly identified with an appropriate DV specification.',
    feedbackMiss: 'IV = what changes (coin composition/date); DV = what you measure (gas volume in fixed time OR time for fixed volume); CV = kept constant (temperature, acid concentration).',
  },
  q4_d: {
    marks: 3,
    exemplar: 'Read the finishing time from the graph, then cross-reference: Coin 1 (~90 s, medium rate) → some exposed steel → 1992–1998 copper-plated steel (1 mark); Coin 2 (~110 s, slowest of the three) → least exposed steel → 1971–1992 bronze (1 mark); Coin 3 (~60 s, fastest) → most exposed steel → 2011–present copper-plated steel (1 mark). Accept adjacent date bands with correct reasoning.',
    keyConcepts: ['Graph interpretation', 'Data analysis'],
    keywords: ['reaction time', 'composition', 'date', 'copper-plated steel', 'bronze', 'cross-reference'],
    feedbackHit: 'Correct coin types identified by cross-referencing reaction time with composition.',
    feedbackMiss: 'Read the finishing time from the graph: a faster reaction means more exposed steel (newer copper-plated coin); a slower reaction means more copper (older bronze coin).',
    blankAnswers: ['1992–1998 (copper-plated steel)', '1971–1992 (bronze, decimal)', '2011–present (copper-plated steel)'],
  },
  q4_e: {
    marks: 3,
    exemplar: 'Any three reasonable points: the coins may not have exactly the plating thickness assumed; the results in the calibration graph were averages not specific coins; no repeats were possible so there may have been experimental errors; the collection of the gas was inaccurate (some gas escaped).',
    keyConcepts: ['Evaluation', 'Sources of error'],
    keywords: ['averages', 'plating thickness varies', 'no repeats', 'experimental errors', 'gas collection', 'calibration'],
    feedbackHit: 'Three valid sources of discrepancy correctly identified.',
    feedbackMiss: 'Consider: was the plating thickness identical to the graph? Were there repeats? Could any gas have escaped during collection?',
  },
  q4_f: {
    marks: 2,
    exemplar: 'Destructive method (WTTE) — so the coin cannot be kept OR the results cannot be repeated on the same coin.',
    keyConcepts: ['Evaluation', 'Experimental limitations'],
    keywords: ['destructive', 'cannot keep coin', 'cannot repeat', 'acid dissolves coin'],
    feedbackHit: 'Correct — the method destroys the coin so it cannot be preserved or retested.',
    feedbackMiss: 'Once the coin reacts with acid, it is partly destroyed — it cannot be kept or used for repeat tests.',
  },

  // ── Q5: Platinum Recovery ────────────────────────────────────────────────────
  q5_a: {
    marks: 2,
    exemplar: '1.86427 × 10⁴ g (accept 1.86 × 10⁴, 1.864 × 10⁴). Award 1 mark for correct coefficient, 1 mark for correct power of 10.',
    keyConcepts: ['Scientific notation', 'Standard form'],
    keywords: ['1.86427', '× 10⁴', 'scientific notation', 'standard form', '18642.7 g'],
    feedbackHit: 'Correct — number expressed in valid scientific notation.',
    feedbackMiss: 'Scientific notation: move the decimal point so the number is between 1 and 10, then × 10^n. 18642.7 = 1.86427 × 10⁴.',
  },
  q5_b: {
    marks: 4,
    exemplar: 'Any three comments about the method (1 mark each): the method is destructive; the method can prove the metal is platinum of a certain purity; no detail of how the solution was measured/applied; no safety precaution given; no repeats possible — not reproducible. Comment about validity of the result (1 mark): the result is inconclusive OR the purity could be lower than 999.',
    keyConcepts: ['Criterion C — evaluation', 'Scientific method'],
    keywords: ['destructive', 'proves platinum', 'no safety', 'no repeats', 'inconclusive', 'lower purity'],
    feedbackHit: 'Good evaluation identifying the key limitations of the acid-test method.',
    feedbackMiss: 'Comment on: Is it destructive? Is it reproducible? Is there safety information? Does it give a definitive purity?',
  },
  q5_c: {
    marks: 2,
    exemplar: 'Any two evaluative points: "react" should be used rather than "dissolve" AND "concentrated" should be used rather than "stronger"; the hypothesis is invalid because platinum is slow to react/unreactive; the relationship between the IV (purity) and DV (concentration of acid) is correct.',
    keyConcepts: ['Hypothesis evaluation', 'Scientific accuracy'],
    keywords: ['react not dissolve', 'concentrated not stronger', 'slow to react', 'unreactive', 'relationship correct'],
    feedbackHit: 'Correct evaluation — identifies errors in wording and/or correctness of the relationship.',
    feedbackMiss: 'Check: does platinum "dissolve" or "react"? Is the acid "strong" or "concentrated"? Is the purity–concentration relationship correct?',
  },
  q5_d: {
    marks: 2,
    exemplar: '31.1 g (to 3 significant figures). Award 1 mark for the correct value 31.1; 1 mark for the correct unit g.',
    keyConcepts: ['Significant figures', 'Measurement'],
    keywords: ['31.1', 'g', '3 significant figures', 'sig figs', 'mass of platinum'],
    feedbackHit: 'Correct — 31.06845 g rounded to 3 significant figures is 31.1 g.',
    feedbackMiss: '31.06845 rounded to 3 sig figs: the first three significant figures are 3, 1, 0 (the next digit, 6, rounds the 0 up to 1) → 31.1 g.',
  },
  q5_e: {
    marks: 1,
    exemplar: '31.06845 / 31.10 × 100 = 99.9% (to 3 significant figures). Using the rounded mass: 31.1 / 31.10 × 100 = 100% is also accepted; the unrounded calculation gives 99.9%.',
    keyConcepts: ['Percentage calculation', 'Purity'],
    keywords: ['percentage', '31.06845 / 31.10', '× 100', '99.9%', 'purity'],
    feedbackHit: 'Correct — 31.06845/31.10 × 100 = 99.89...% ≈ 99.9%.',
    feedbackMiss: 'Percentage = (mass of platinum / total mass) × 100 = (31.06845 / 31.10) × 100.',
  },

  // ── Q6: Forest Carbon Balance ────────────────────────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Grey arrow (1) = fuel + oxygen → carbon dioxide + water. Red arrow (2) = glucose + oxygen → carbon dioxide + water. Green arrow (3) = carbon dioxide + water → glucose + oxygen. Award 1 mark for one correct label; 2 marks for all labels correct.',
    keyConcepts: ['Carbon cycle', 'Photosynthesis', 'Respiration', 'Combustion'],
    keywords: ['combustion', 'respiration', 'photosynthesis', 'carbon dioxide', 'glucose', 'oxygen', 'water'],
    feedbackHit: 'Correct — grey=combustion, red=respiration, green=photosynthesis.',
    feedbackMiss: 'Grey arrows represent combustion (timber burning); red arrows represent respiration/decay; green arrows represent photosynthesis (reverse of respiration).',
    blankAnswers: ['fuel + oxygen → carbon dioxide + water', 'glucose + oxygen → carbon dioxide + water', 'carbon dioxide + water → glucose + oxygen'],
  },
  q6_b: {
    marks: 2,
    exemplar: 'Correct answer: 0.62°C. Correct unit: °C. (1 mark each). Reading: ≈ −0.01°C at 1975 and ≈ +0.61°C at 2015, so ΔT = 0.61 − (−0.01) = 0.62°C. Accept 0.6°C.',
    keyConcepts: ['Graph reading', 'Temperature anomaly'],
    keywords: ['0.62', '°C', '1975', '2015', 'temperature increase', 'anomaly'],
    feedbackHit: 'Correct — reading the graph at 1975 (≈ −0.01°C) and 2015 (≈ +0.61°C) gives an increase of 0.62°C.',
    feedbackMiss: 'Read the temperature anomaly at 1975 and 2015 from the graph, then subtract: ΔT = T₂₀₁₅ − T₁₉₇₅.',
  },
  q6_c: {
    marks: 12,
    exemplar: 'Rubric (max 12, Crit D). Activities that INCREASE carbon footprint (1→2→3): single mention → relevant activity with emissions/carbon footprint → more than one activity. Activities that DECREASE footprint (1→2→3): single mention → relevant activity decreasing footprint → more than one. Impact on individual/society (1→2→3): general reference → specific reference to individual OR society → specific reference to both individual AND society. Explanations (1→2→3): incomplete scientific explanation → complete explanation of activities that either increase OR decrease → complete explanation of activities that increase AND decrease footprint.',
    keyConcepts: ['Criterion D — societal impact', 'Carbon footprint', 'Sustainability'],
    keywords: ['carbon footprint', 'fossil fuels', 'renewable energy', 'individual', 'society', 'emissions', 'reforestation', 'insulation', 'deforestation', 'carbon cycle'],
    feedbackHit: 'Strong Crit D response with specific activities, individual and societal impacts, and full scientific explanation.',
    feedbackMiss: 'Address: activities increasing footprint (driving, flying, burning fossil fuels); activities decreasing footprint (renewable energy, tree planting, insulation); impact on individuals AND society; explain how each affects the carbon cycle.',
  },

  // ── Q7: Evaluate Home-Heating Systems ────────────────────────────────────────
  q7_: {
    marks: 17,
    exemplar: 'Rubric (max 17, Crit D). Environmental impact (1→2→3→4): one system mentioned → both systems mentioned → both with supporting data → both fully justified with data. Running costs/economic impact (1→2→3→4): one cost → both systems → both with explicit supporting data → both justified. Fuel sustainability (1→2→3→4): one comment → comment about one fuel with justification OR both → relevant comment for both fuels with justification → both fully justified. Usefulness (1→2→3→4): one general comment → relevant comment for both systems referencing data → more than one relevant comment with supporting data → more than one with explicit data. Appraisal (1→2→3): concluding appraisal linked to the arguments → with some scientific justification → with complete, detailed scientific justification. Note: the student selects two systems from [Gas boiler, Electric heat pump, Wood-pellet (biomass) boiler, Solar thermal].',
    keyConcepts: ['Criterion D — evaluation', 'Environmental sustainability', 'Domestic heating'],
    keywords: ['gas boiler', 'heat pump', 'biomass', 'solar thermal', 'CO₂ emissions', 'renewable', 'running cost', 'fuel sustainability', 'usefulness', 'appraisal'],
    feedbackHit: 'Excellent Crit D evaluation comparing both heating systems across all four dimensions with supporting data and a justified conclusion.',
    feedbackMiss: 'Compare your two systems across: environmental impact (CO₂ per year), running costs, fuel sustainability (renewable vs finite), and usefulness (reliability, installation, suitability). Support each point with data from the table and include a conclusion.',
  },
}
