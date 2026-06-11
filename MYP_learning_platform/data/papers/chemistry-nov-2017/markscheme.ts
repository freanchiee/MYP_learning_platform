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
  // ── Q1: Lead and Arsenic ────────────────────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Group 4 (accept Group 14); Period 6.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['group 4', 'group 14', 'period 6', 'lead Pb'],
    feedbackHit: 'Correct — lead is in Group 4/14, Period 6.',
    feedbackMiss: 'Use the periodic table: count across (group) and down (period) to locate Pb.',
  },
  q1_b: {
    marks: 4,
    exemplar: 'Equation 1: 2PbS + 3O₂ → 2PbO + 2SO₂ (reactants correct 1 mark; products correct 1 mark). Equation 2: 2PbO + C → 2Pb + CO₂ (reactants correct 1 mark; products correct 1 mark). Note: do NOT accept "?" in place of a blank coefficient.',
    keyConcepts: ['Balancing equations', 'Conservation of atoms'],
    keywords: ['2PbS', '3O₂', '2PbO', '2SO₂', '2PbO', '2Pb', 'CO₂', 'balancing'],
    feedbackHit: 'Both equations correctly balanced — atoms and charges are conserved.',
    feedbackMiss: 'Count atoms on each side: the number of each element must be equal on left and right.',
    blankAnswers: ['2', '3', '2', '2', '2', '1', '2', '1'],
  },
  q1_c: {
    marks: 2,
    exemplar: 'SO₂ is formed which contributes to the formation of acid rain (1 mark). OR CO₂ is formed which contributes to climate change (1 mark). Do NOT accept "toxic fumes" as this is not specific enough.',
    keyConcepts: ['Pollution', 'Acid rain', 'Climate change'],
    keywords: ['SO₂', 'acid rain', 'CO₂', 'climate change', 'sulfur dioxide', 'carbon dioxide'],
    feedbackHit: 'Correct — SO₂ → acid rain; CO₂ → climate change.',
    feedbackMiss: 'Name the specific gas produced (SO₂ or CO₂) and its environmental consequence.',
  },
  q1_d: {
    marks: 2,
    exemplar: 'Any two from: electrical conductivity, thermal conductivity, malleability, appearance (metallic lustre). Do NOT accept high melting point for lead.',
    keyConcepts: ['Metallic properties', 'Physical properties'],
    keywords: ['electrical conductivity', 'thermal conductivity', 'malleability', 'lustre', 'appearance'],
    feedbackHit: 'Correct — two valid metallic properties of lead.',
    feedbackMiss: 'Think about what all metals share: conduct electricity, conduct heat, can be bent/shaped, shiny appearance.',
  },
  q1_e: {
    marks: 2,
    exemplar: 'Arsenic is a metalloid/semi-metal, so it would have different structure; different structure gives rise to different properties (WTTE — would be different).',
    keyConcepts: ['Metalloids', 'Semi-metals'],
    keywords: ['metalloid', 'semi-metal', 'different structure', 'different properties', 'arsenic'],
    feedbackHit: 'Correct — arsenic is a semi-metal with a different atomic structure from lead.',
    feedbackMiss: 'Arsenic is NOT a metal — it is a metalloid. Its structure differs from metals so its properties differ.',
  },
  q1_f: {
    marks: 2,
    exemplar: 'As-65: protons = 33, electrons = 33, neutrons = 32. As-70: protons = 33, electrons = 33, neutrons = 37. Mark for: neutrons of As-65 = 32 (1 mark); neutrons of As-70 = 37 (1 mark).',
    keyConcepts: ['Atomic structure', 'Isotopes'],
    keywords: ['neutrons', 'mass number minus atomic number', '65 − 33', '70 − 33', '32', '37'],
    feedbackHit: 'Correct — neutrons = mass number − atomic number.',
    feedbackMiss: 'Neutrons = atomic mass − atomic number. For As-65: 65 − 33 = 32. For As-70: 70 − 33 = 37.',
  },
  q1_g: {
    marks: 2,
    exemplar: 'Same electron configuration (1 mark), so the different isotopes will react in the same way (1 mark). WTTE — only award second mark if first is given.',
    keyConcepts: ['Isotopes', 'Chemical reactivity'],
    keywords: ['same electron configuration', 'same chemical properties', 'react same way', 'isotopes'],
    feedbackHit: 'Correct — isotopes have the same electron arrangement so identical chemical reactivity.',
    feedbackMiss: 'Chemical reactions depend on electrons, not neutrons. All isotopes of arsenic have 33 electrons so react identically.',
  },

  // ── Q2: Esters and Volatility ───────────────────────────────────────────────
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
    exemplar: 'Independent variable: ester OR length of the carbon chain. Dependent variable: time (to completely evaporate). Control variables (any three reasonable, 2 max): temperature, surface area, container size or shape, volume or mass of sample, wind.',
    keyConcepts: ['Variables', 'Experimental design'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'temperature', 'surface area', 'volume'],
    feedbackHit: 'Variables correctly identified with IV, DV, and at least two CVs.',
    feedbackMiss: 'IV = what you change; DV = what you measure; CV = what you keep the same. Do NOT accept pressure alone as DV.',
  },
  q2_d: {
    marks: 4,
    exemplar: 'Cold: low temperature — no heat added, so avoids breakdown of the ester, OR position of equilibrium remains towards the right-hand side/shifts right. Dry: avoids adding water to the equilibrium mixture, no change in water concentration, so avoids breakdown of the ester, OR position of equilibrium remains towards the right. Accept correct answers relating to intermolecular forces for first two marking points.',
    keyConcepts: ['Reversible reactions', 'Equilibrium', 'Hydrolysis'],
    keywords: ['low temperature', 'cold', 'ester breakdown', 'equilibrium', 'dry', 'no water', 'shifts right'],
    feedbackHit: 'Correct — cold prevents ester hydrolysis; dry prevents water shifting equilibrium left.',
    feedbackMiss: 'Think about Le Chatelier\'s principle: adding heat or water would reverse the ester-forming reaction.',
  },
  q2_e: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  // ── Q3: Metals Reactivity ───────────────────────────────────────────────────
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
    exemplar: 'Rubric marking (max 15). Equipment (1→2→3): some equipment listed → includes thermometer → appropriate complete set (copper sulfate solutions, thermometer/probe, test tubes, measuring cylinder). Variables (1→2): one CV → two CVs stated. Method (1→2→3): attempt at method → temperature measured → fine technique details (record temp when stable, minimise heat loss). Measurements (1→2→3): one metal investigated → more than two → all five metals. Sufficient data (1→2): trials planned → trials + averages planned. Safety (1→2): safety precaution stated → linked to hazard.',
    keyConcepts: ['Criterion B — Inquiry and Design', 'Experimental method'],
    keywords: ['copper sulfate', 'thermometer', 'temperature', 'metals', 'variables', 'safety', 'repeats', 'averages'],
    feedbackHit: 'Well-designed method with clear variables, equipment, and safety consideration.',
    feedbackMiss: 'Ensure you list all equipment, state IV/DV/CV, describe clear steps, plan repeats, and link safety to the specific hazard (copper sulfate is toxic).',
  },
  q3_d: {
    marks: 1,
    exemplar: 'Order (least to most reactive): Lead – Iron – Zinc – Aluminium – Magnesium. All correct for 1 mark.',
    keyConcepts: ['Reactivity series', 'Displacement reactions'],
    keywords: ['lead', 'iron', 'zinc', 'aluminium', 'magnesium', 'reactivity order', 'least reactive', 'most reactive'],
    feedbackHit: 'Correct reactivity order — all five metals in the right positions.',
    feedbackMiss: 'More reactive metals produce a larger temperature rise. Use the temperature data: Mg (46°C) > Al (39°C) > Zn (32°C) > Fe (16°C) > Pb (12°C).',
    blankAnswers: ['Lead', 'Iron', 'Zinc', 'Aluminium', 'Magnesium'],
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
    exemplar: 'Bar graph with: labels for metal on x-axis (Pb, Fe, Zn, Al, Mg) (1 mark); title linking temperature change to different metals (1 mark); data for one metal correctly plotted (1 mark); data for all metals plotted correctly (1 mark); unit °C on y-axis (1 mark).',
    keyConcepts: ['Bar graph', 'Data presentation'],
    keywords: ['bar graph', 'x-axis metals', 'y-axis temperature change', '°C', 'title', 'data plotted'],
    feedbackHit: 'Graph correctly shows all five metals with accurate bars, labels, and title.',
    feedbackMiss: 'Ensure: title mentions temperature change vs metal; x-axis labelled with metal symbols; y-axis has "Temperature change / °C"; all bars at correct heights (Pb=12, Fe=16, Zn=32, Al=39, Mg=46).',
  },
  q3_h: {
    marks: 2,
    exemplar: 'Limited validity as results produced once only are not reliable as errors may occur (WTTE). More than one trial should be carried out to produce an average.',
    keyConcepts: ['Validity', 'Reliability'],
    keywords: ['single trial', 'not reliable', 'limited validity', 'repeat', 'average', 'errors'],
    feedbackHit: 'Correct — single results lack validity; repeats and averaging improve reliability.',
    feedbackMiss: 'The data table shows only one result per metal. This is unreliable — you need repeats to check for errors and calculate averages.',
  },

  // ── Q4: US Penny Coins ───────────────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Test with lit splint/spill/stick (1 mark). Gas burns with a squeaky pop — so it is hydrogen (1 mark). Accept any reasonable alternative description of splint.',
    keyConcepts: ['Hydrogen gas test', 'Chemical testing'],
    keywords: ['lit splint', 'squeaky pop', 'burns', 'hydrogen', 'test tube'],
    feedbackHit: 'Correct — lit splint gives squeaky pop confirming hydrogen.',
    feedbackMiss: 'The test for hydrogen: hold a lit splint near the mouth of the test tube — hydrogen burns with a squeaky pop.',
  },
  q4_b: {
    marks: 3,
    exemplar: 'If the coin is 100% copper then it will react the slowest (1 mark), because copper is the least reactive of these metals (1 mark). Accept "newer coins will react the fastest" with appropriate reasoning (1 mark).',
    keyConcepts: ['Hypothesis', 'Reactivity'],
    keywords: ['100% copper', 'slowest reaction', 'least reactive', 'copper', 'hypothesis'],
    feedbackHit: 'Correct hypothesis linking copper composition to slowest reaction rate.',
    feedbackMiss: 'Link coin composition (% copper) to reactivity: the more copper, the less reactive the coin.',
  },
  q4_c: {
    marks: 4,
    exemplar: 'Independent variable: the composition of the coin OR the date of the coin. Dependent variable: the volume of gas produced in a fixed time OR the time taken to produce a fixed volume of gas (do NOT award for volume or time alone). Control variables (any two reasonable): temperature, concentration of acid, type of acid. Do NOT accept pressure.',
    keyConcepts: ['Variables', 'Experimental design'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'coin composition', 'volume of gas', 'time', 'temperature'],
    feedbackHit: 'All variables correctly identified with appropriate DV specification.',
    feedbackMiss: 'IV = what changes (coin composition/date); DV = what you measure (gas volume in fixed time OR time for fixed volume); CV = kept constant (temperature, acid concentration).',
  },
  q4_d: {
    marks: 3,
    exemplar: 'Using the bar chart to identify coin composition, then cross-reference with year-composition graph/table: Coin 1 (~80 s) → Cu/Ni composition → 1857–1865 (1 mark); Coin 2 (~100 s) → Cu/Sn composition → 1857–1865 (accept 1849–1857) (1 mark); Coin 3 (~70 s) → Cu/Zn/Sn composition → 1962–1982 (1 mark).',
    keyConcepts: ['Graph interpretation', 'Data analysis'],
    keywords: ['bar chart', 'composition', 'date', '1857–1865', '1962–1982', 'cross-reference'],
    feedbackHit: 'Correct years identified by cross-referencing reaction time with composition graph.',
    feedbackMiss: 'Read the time from the simulation, find that time on the bar chart to identify composition, then use the composition-year table to find the date range.',
    blankAnswers: ['1857–1865', '1857–1865', '1962–1982'],
  },
  q4_e: {
    marks: 3,
    exemplar: 'Any three reasonable points: the coins may not be the exact percentages as indicated in the chart; the results in the calibration graph were for averages and not specific coins; no repeats were possible so there may have been experimental errors; the collection of the gas was inaccurate.',
    keyConcepts: ['Evaluation', 'Sources of error'],
    keywords: ['averages', 'not exact percentages', 'no repeats', 'experimental errors', 'gas collection', 'calibration'],
    feedbackHit: 'Three valid sources of discrepancy correctly identified.',
    feedbackMiss: 'Consider: were your coins exactly the same percentages as the graph? Were there repeats? Could any gas have escaped?',
  },
  q4_f: {
    marks: 2,
    exemplar: 'Destructive method (WTTE) — so cannot keep the coin OR cannot repeat results.',
    keyConcepts: ['Evaluation', 'Experimental limitations'],
    keywords: ['destructive', 'cannot keep coin', 'cannot repeat', 'acid dissolves coin'],
    feedbackHit: 'Correct — the method destroys the coin so it cannot be preserved or retested.',
    feedbackMiss: 'Once the coin is placed in nitric acid, it reacts and is destroyed — it cannot be kept as a collectible or used for repeat tests.',
  },

  // ── Q5: Gold Nugget ─────────────────────────────────────────────────────────
  q5_a: {
    marks: 2,
    exemplar: '2.32183 × 10⁴ g (accept 2.32 × 10⁴, 2.322 × 10⁴, 2.3218 × 10⁴). Award 1 mark for correct coefficient, 1 mark for correct power of 10.',
    keyConcepts: ['Scientific notation', 'Standard form'],
    keywords: ['2.32183', '× 10⁴', 'scientific notation', 'standard form', '23218.3 g'],
    feedbackHit: 'Correct — number expressed in valid scientific notation.',
    feedbackMiss: 'Scientific notation: move decimal point so number is between 1 and 10, then × 10^n. 23218.3 = 2.32183 × 10⁴.',
  },
  q5_b: {
    marks: 4,
    exemplar: 'Any three comments about the method (1 mark each): method is destructive; the method is able to prove the metal is gold; no details of how the solution was measured; no safety precaution given; no repeats possible — method is not reproducible. Comment about validity of the result (1 mark): result is inconclusive OR gold could be less than 24K.',
    keyConcepts: ['Criterion C — evaluation', 'Scientific method'],
    keywords: ['destructive', 'proves gold', 'no safety', 'no repeats', 'inconclusive', 'less than 24K'],
    feedbackHit: 'Good evaluation identifying key limitations of the touchstone method.',
    feedbackMiss: 'Comment on: Is it destructive? Is it reproducible? Is there safety information? Does it give a definitive result?',
  },
  q5_c: {
    marks: 2,
    exemplar: 'Any two evaluative points: "react" should be used rather than "dissolve" AND "concentrated" should be used rather than "stronger" (or accept "strong"); the hypothesis is invalid because gold is slow to react/unreactive; the relationship between the IV (purity/Karat) and DV (concentration of acid) is correct — allow use of concentration or strength for the last marking point.',
    keyConcepts: ['Hypothesis evaluation', 'Scientific accuracy'],
    keywords: ['react not dissolve', 'concentrated not stronger', 'slow to react', 'unreactive', 'relationship correct'],
    feedbackHit: 'Correct evaluation — identifies errors in wording and/or correctness of relationship.',
    feedbackMiss: 'Check: does gold "dissolve" or "react"? Is the acid "strong" or "concentrated"? Is the relationship between purity and acid strength correct?',
  },
  q5_d: {
    marks: 2,
    exemplar: '7.32 g (to 3 significant figures). Award 1 mark for correct value 7.32; 1 mark for correct unit g.',
    keyConcepts: ['Significant figures', 'Measurement'],
    keywords: ['7.32', 'g', '3 significant figures', 'sig figs', 'mass of gold'],
    feedbackHit: 'Correct — 7.32381 g rounded to 3 significant figures is 7.32 g.',
    feedbackMiss: '7.32381 rounded to 3 sig figs: count 3 significant figures from the left: 7, 3, 2 → 7.32 g.',
  },
  q5_e: {
    marks: 1,
    exemplar: '7.32 / 7.89 × 100 = 92.8% (to 3 significant figures).',
    keyConcepts: ['Percentage calculation', 'Purity'],
    keywords: ['percentage', '7.32 / 7.89', '× 100', '92.8%', 'purity'],
    feedbackHit: 'Correct — 7.32/7.89 × 100 = 92.77...% ≈ 92.8%.',
    feedbackMiss: 'Percentage = (mass of gold / total mass) × 100 = (7.32 / 7.89) × 100.',
  },

  // ── Q6: Carbon Cycle ─────────────────────────────────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Grey arrow (1) = fuel + oxygen → carbon dioxide + water. Red arrow (2) = glucose + oxygen → carbon dioxide + water. Green arrow (3) = carbon dioxide + water → glucose + oxygen. Award 1 mark for one correct label; 2 marks for all labels correct.',
    keyConcepts: ['Carbon cycle', 'Photosynthesis', 'Respiration', 'Combustion'],
    keywords: ['fuel combustion', 'respiration', 'photosynthesis', 'carbon dioxide', 'glucose', 'oxygen', 'water'],
    feedbackHit: 'Correct — grey=combustion, red=respiration, green=photosynthesis.',
    feedbackMiss: 'Grey arrows represent combustion (fuel burning); red arrows represent cellular respiration; green arrows represent photosynthesis (reverse of respiration).',
    blankAnswers: ['fuel + oxygen → carbon dioxide + water', 'glucose + oxygen → carbon dioxide + water', 'carbon dioxide + water → glucose + oxygen'],
  },
  q6_b: {
    marks: 2,
    exemplar: 'Correct answer: 0.44°C. Correct unit: °C. (1 mark each)',
    keyConcepts: ['Graph reading', 'Temperature anomaly'],
    keywords: ['0.44', '°C', '1980', '2010', 'temperature increase', 'GISS'],
    feedbackHit: 'Correct — reading graph at 1980 (≈ 0.00°C) and 2010 (≈ +0.44°C), increase = 0.44°C.',
    feedbackMiss: 'Read the temperature anomaly at 1980 and 2010 from the graph, then subtract: ΔT = T₂₀₁₀ − T₁₉₈₀.',
  },
  q6_c: {
    marks: 12,
    exemplar: 'Rubric (max 12, Crit D). Activities that INCREASE carbon footprint (1→2→3): single mention → relevant activity with emissions / carbon footprint → more than one activity. Activities that DECREASE footprint (1→2→3): single mention → relevant activity decreasing footprint → more than one. Impact on individual/society (1→2→3): general reference → specific reference to individual OR society → specific reference to both individual AND society. Explanations (1→2→3): incomplete scientific explanation → complete explanation of activities that either increase OR decrease → complete explanation of activities that increase AND decrease footprint.',
    keyConcepts: ['Criterion D — societal impact', 'Carbon footprint', 'Sustainability'],
    keywords: ['carbon footprint', 'fossil fuels', 'renewable energy', 'individual', 'society', 'emissions', 'electric car', 'insulation', 'deforestation', 'carbon cycle'],
    feedbackHit: 'Strong Crit D response with specific activities, individual and societal impacts, and full scientific explanation.',
    feedbackMiss: 'Address: activities increasing footprint (driving petrol cars, flying, meat consumption); activities decreasing footprint (renewable energy, EVs, insulation); impact on individuals AND society; explain the science of how each affects the carbon cycle.',
  },

  // ── Q7: Evaluate Car Types ───────────────────────────────────────────────────
  q7_: {
    marks: 17,
    exemplar: 'Rubric (max 17, Crit D). Environmental impact (1→2→3→4): one car mentioned → both cars mentioned → both with supporting data → both with supporting data. Running costs/economic impact (1→2→3→4): one economic impact → both cars → both with explicit supporting data → both with supporting data. Fuel sustainability (1→2→3→4): one comment about sustainability → comment about one fuel with justification OR relevant comment about both → relevant comment about sustainability for both fuels with justification → both with justification. Usefulness (1→2→3→4): one general comment → relevant comment about usefulness for both cars with reference to data → more than one relevant comment about usefulness for both with supporting data → more than one relevant with explicit supporting data. Appraisal (1→2→3): concluding appraisal linked to previous arguments → with some scientific justification → with complete and detailed scientific justification. Note: student selects two car types from [Petrol, Electric, Hybrid, Plug-in hybrid].',
    keyConcepts: ['Criterion D — evaluation', 'Environmental sustainability', 'Life cycle analysis'],
    keywords: ['petrol', 'electric', 'hybrid', 'plug-in hybrid', 'emissions', 'CO₂', 'renewable', 'running cost', 'range', 'charging', 'fuel sustainability', 'appraisal'],
    feedbackHit: 'Excellent Crit D evaluation comparing both car types across all four dimensions with supporting data and a justified conclusion.',
    feedbackMiss: 'Compare your two cars across: environmental impact (emissions, CO₂), running costs (fuel, maintenance), fuel sustainability (renewable vs finite), and usefulness (range, charging time, practicality). Support each point with data from the emission graph and include a conclusion.',
  },
}
