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
  // ── Q1: Zinc and Germanium ───────────────────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Group 12 (accept Group 2 for the old roman-numeral system); Period 4.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['group 12', 'group 2', 'period 4', 'zinc Zn'],
    feedbackHit: 'Correct — zinc is in Group 12, Period 4.',
    feedbackMiss: 'Locate Zn on the periodic table: count across for group, down for period.',
  },
  q1_b: {
    marks: 4,
    exemplar: 'Equation 1: 2ZnS + 3O₂ → 2ZnO + 2SO₂ (reactants correct 1 mark; products correct 1 mark). Equation 2: 2ZnO + C → 2Zn + CO₂ (reactants correct 1 mark; products correct 1 mark). Note: do NOT accept "?" in place of a blank coefficient.',
    keyConcepts: ['Balancing equations', 'Conservation of atoms'],
    keywords: ['2ZnS', '3O₂', '2ZnO', '2SO₂', '2Zn', 'CO₂', 'balancing'],
    feedbackHit: 'Both zinc extraction equations correctly balanced — atoms are conserved.',
    feedbackMiss: 'Count atoms on each side. Eq1: 2Zn, 2S, 6O each side; Eq2: 2Zn, 2O, 1C each side.',
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
    feedbackHit: 'Correct — two valid metallic properties of zinc.',
    feedbackMiss: 'Think about what all metals share: conduct electricity, conduct heat, can be bent/shaped, shiny appearance.',
  },
  q1_e: {
    marks: 2,
    exemplar: 'Germanium is a metalloid/semi-metal, so it has a different structure; a different structure gives rise to different properties (WTTE — they would be different).',
    keyConcepts: ['Metalloids', 'Semi-metals'],
    keywords: ['metalloid', 'semi-metal', 'different structure', 'different properties', 'germanium'],
    feedbackHit: 'Correct — germanium is a semi-metal with a different atomic structure from zinc.',
    feedbackMiss: 'Germanium is NOT a metal — it is a metalloid. Its structure differs from a metal so its properties differ.',
  },
  q1_f: {
    marks: 2,
    exemplar: 'Zn-64: protons = 30, electrons = 30, neutrons = 34. Zn-70: protons = 30, electrons = 30, neutrons = 40. Mark for: neutrons of Zn-64 = 34 (1 mark); neutrons of Zn-70 = 40 (1 mark).',
    keyConcepts: ['Atomic structure', 'Isotopes'],
    keywords: ['neutrons', 'mass number minus atomic number', '64 − 30', '70 − 30', '34', '40'],
    feedbackHit: 'Correct — neutrons = mass number − atomic number.',
    feedbackMiss: 'Neutrons = atomic mass − atomic number. For Zn-64: 64 − 30 = 34. For Zn-70: 70 − 30 = 40.',
  },
  q1_g: {
    marks: 2,
    exemplar: 'Same electron configuration (1 mark), so the different isotopes will react in the same way (1 mark). Only award the second mark if the first is given.',
    keyConcepts: ['Isotopes', 'Chemical reactivity'],
    keywords: ['same electron configuration', 'same chemical properties', 'react same way', 'isotopes'],
    feedbackHit: 'Correct — isotopes have the same electron arrangement so identical chemical reactivity.',
    feedbackMiss: 'Chemical reactions depend on electrons, not neutrons. All isotopes of zinc have 30 electrons so react identically.',
  },

  // ── Q2: Propanoate Esters and Volatility ────────────────────────────────────
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

  // ── Q3: Metals Reactivity (iron(II) sulfate) ────────────────────────────────
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
    exemplar: 'Rubric marking (max 15). Equipment (1→2→3): some equipment listed → includes thermometer → appropriate complete set (iron(II) sulfate solution, thermometer/probe, test tubes, measuring cylinder). Variables (1→2): one CV → two CVs stated. Method (1→2→3): attempt at method → temperature measured → fine technique details (record temperature when stable, minimise heat loss). Measurements (1→2→3): one metal investigated → more than two → all five metals. Sufficient data (1→2): trials planned → trials + averages planned. Safety (1→2): safety precaution stated → linked to hazard (iron(II) sulfate is harmful/irritant).',
    keyConcepts: ['Criterion B — Inquiry and Design', 'Experimental method'],
    keywords: ['iron(II) sulfate', 'thermometer', 'temperature', 'metals', 'variables', 'safety', 'repeats', 'averages'],
    feedbackHit: 'Well-designed method with clear variables, equipment, and safety consideration.',
    feedbackMiss: 'List all equipment, state IV/DV/CV, describe clear steps, plan repeats, and link safety to the specific hazard (iron(II) sulfate is harmful/an irritant).',
  },
  q3_d: {
    marks: 1,
    exemplar: 'Order (least to most reactive): Tin – Nickel – Zinc – Aluminium – Magnesium. All correct for 1 mark.',
    keyConcepts: ['Reactivity series', 'Displacement reactions'],
    keywords: ['tin', 'nickel', 'zinc', 'aluminium', 'magnesium', 'reactivity order', 'least reactive', 'most reactive'],
    feedbackHit: 'Correct reactivity order — all five metals in the right positions.',
    feedbackMiss: 'More reactive metals produce a larger temperature rise. Use the temperature data: Mg (40°C) > Al (33°C) > Zn (26°C) > Ni (11°C) > Sn (7°C).',
    blankAnswers: ['Tin', 'Nickel', 'Zinc', 'Aluminium', 'Magnesium'],
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
    exemplar: 'Bar graph with: labels for metal on x-axis (Sn, Ni, Zn, Al, Mg) (1 mark); title linking temperature change to different metals (1 mark); data for one metal correctly plotted (1 mark); data for all metals plotted correctly (1 mark); unit °C on y-axis (1 mark).',
    keyConcepts: ['Bar graph', 'Data presentation'],
    keywords: ['bar graph', 'x-axis metals', 'y-axis temperature change', '°C', 'title', 'data plotted'],
    feedbackHit: 'Graph correctly shows all five metals with accurate bars, labels, and title.',
    feedbackMiss: 'Ensure: title mentions temperature change vs metal; x-axis labelled with metal symbols; y-axis has "Temperature change / °C"; all bars at correct heights (Sn=7, Ni=11, Zn=26, Al=33, Mg=40).',
  },
  q3_h: {
    marks: 2,
    exemplar: 'Limited validity as results produced only once are not reliable as errors may occur (WTTE). More than one trial should be carried out to produce an average.',
    keyConcepts: ['Validity', 'Reliability'],
    keywords: ['single trial', 'not reliable', 'limited validity', 'repeat', 'average', 'errors'],
    feedbackHit: 'Correct — single results lack validity; repeats and averaging improve reliability.',
    feedbackMiss: 'The data table shows only one result per metal. This is unreliable — you need repeats to check for errors and calculate averages.',
  },

  // ── Q4: Euro Cent Coins ──────────────────────────────────────────────────────
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
    exemplar: 'If the coin has the thickest copper plating (least exposed steel) then it will react the slowest (1 mark), because copper is the least reactive of the metals present (1 mark). Accept "coins with thinner/worn plating react faster" with appropriate reasoning (1 mark).',
    keyConcepts: ['Hypothesis', 'Reactivity'],
    keywords: ['thickest copper plating', 'least exposed steel', 'slowest reaction', 'least reactive', 'copper', 'hypothesis'],
    feedbackHit: 'Correct hypothesis linking copper plating thickness to the slowest reaction rate.',
    feedbackMiss: 'Link coin composition (exposed steel) to reactivity: the more copper (thicker plating), the less reactive the coin.',
  },
  q4_c: {
    marks: 4,
    exemplar: 'Independent variable: the type/plating thickness of the coin. Dependent variable: the volume of gas produced in a fixed time OR the time taken to produce a fixed volume of gas (do NOT award for volume or time alone). Control variables (any two reasonable): temperature, concentration of acid, type of acid. Do NOT accept pressure.',
    keyConcepts: ['Variables', 'Experimental design'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'coin type', 'volume of gas', 'time', 'temperature'],
    feedbackHit: 'All variables correctly identified with an appropriate DV specification.',
    feedbackMiss: 'IV = what changes (coin type/plating thickness); DV = what you measure (gas volume in fixed time OR time for fixed volume); CV = kept constant (temperature, acid concentration).',
  },
  q4_d: {
    marks: 3,
    exemplar: 'Read the finishing time from the graph, then cross-reference: Coin 1 (~85 s, medium rate) → medium plating → 2-cent medium copper plating (1 mark); Coin 2 (~105 s, slowest of the three) → thickest plating → 5-cent thickest copper plating (1 mark); Coin 3 (~55 s, fastest) → thinnest/worn plating → 1-cent thinnest copper plating (1 mark). Accept "worn 1-cent" for Coin 3 with correct reasoning.',
    keyConcepts: ['Graph interpretation', 'Data analysis'],
    keywords: ['reaction time', 'plating thickness', 'copper-plated steel', '5-cent', '2-cent', '1-cent', 'cross-reference'],
    feedbackHit: 'Correct coin types identified by cross-referencing reaction time with plating thickness.',
    feedbackMiss: 'Read the finishing time: a faster reaction means thinner/worn plating (more exposed steel); a slower reaction means thicker copper plating.',
    blankAnswers: ['2-cent (medium copper plating)', '5-cent (thickest copper plating)', '1-cent (thinnest copper plating)'],
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

  // ── Q5: Silver Hallmarking ───────────────────────────────────────────────────
  q5_a: {
    marks: 2,
    exemplar: '1.20754 × 10⁴ g (accept 1.21 × 10⁴, 1.208 × 10⁴). Award 1 mark for correct coefficient, 1 mark for correct power of 10.',
    keyConcepts: ['Scientific notation', 'Standard form'],
    keywords: ['1.20754', '× 10⁴', 'scientific notation', 'standard form', '12075.4 g'],
    feedbackHit: 'Correct — number expressed in valid scientific notation.',
    feedbackMiss: 'Scientific notation: move the decimal point so the number is between 1 and 10, then × 10^n. 12075.4 = 1.20754 × 10⁴.',
  },
  q5_b: {
    marks: 4,
    exemplar: 'Any three comments about the method (1 mark each): the method is destructive (scratch + acid); the colour can indicate the purity of the silver; no detail of how the acid was measured/applied; no safety precaution given; no repeats possible — not reproducible. Comment about validity of the result (1 mark): the colour judgement is subjective so the result is inconclusive OR the purity could be different.',
    keyConcepts: ['Criterion C — evaluation', 'Scientific method'],
    keywords: ['destructive', 'colour indicates purity', 'subjective', 'no safety', 'no repeats', 'inconclusive'],
    feedbackHit: 'Good evaluation identifying the key limitations of the acid-test method.',
    feedbackMiss: 'Comment on: Is it destructive? Is the colour judgement subjective? Is there safety information? Is it reproducible?',
  },
  q5_c: {
    marks: 2,
    exemplar: 'Any two evaluative points: "react" should be used rather than "dissolve" AND "concentrated" should be used rather than "stronger"; the hypothesis is invalid because silver is slow to react/unreactive; the relationship between the IV (purity) and DV (concentration of acid) is correct.',
    keyConcepts: ['Hypothesis evaluation', 'Scientific accuracy'],
    keywords: ['react not dissolve', 'concentrated not stronger', 'slow to react', 'unreactive', 'relationship correct'],
    feedbackHit: 'Correct evaluation — identifies errors in wording and/or correctness of the relationship.',
    feedbackMiss: 'Check: does silver "dissolve" or "react"? Is the acid "strong" or "concentrated"? Is the purity–concentration relationship correct?',
  },
  q5_d: {
    marks: 2,
    exemplar: '31.1 g (to 3 significant figures). Award 1 mark for the correct value 31.1; 1 mark for the correct unit g.',
    keyConcepts: ['Significant figures', 'Measurement'],
    keywords: ['31.1', 'g', '3 significant figures', 'sig figs', 'mass of silver'],
    feedbackHit: 'Correct — 31.07 g rounded to 3 significant figures is 31.1 g.',
    feedbackMiss: '31.07 rounded to 3 sig figs: the first three significant figures are 3, 1, 0; the next digit, 7, rounds the 0 up to 1 → 31.1 g.',
  },
  q5_e: {
    marks: 1,
    exemplar: '31.07 / 31.10 × 100 = 99.9% (to 3 significant figures).',
    keyConcepts: ['Percentage calculation', 'Purity'],
    keywords: ['percentage', '31.07 / 31.10', '× 100', '99.9%', 'purity'],
    feedbackHit: 'Correct — 31.07/31.10 × 100 = 99.90...% ≈ 99.9%.',
    feedbackMiss: 'Percentage = (mass of silver / total mass) × 100 = (31.07 / 31.10) × 100.',
  },

  // ── Q6: Wetland Carbon Balance ───────────────────────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Grey arrow (1) = fuel + oxygen → carbon dioxide + water. Red arrow (2) = glucose + oxygen → carbon dioxide + water. Green arrow (3) = carbon dioxide + water → glucose + oxygen. Award 1 mark for one correct label; 2 marks for all labels correct.',
    keyConcepts: ['Carbon cycle', 'Photosynthesis', 'Respiration', 'Combustion'],
    keywords: ['combustion', 'respiration', 'photosynthesis', 'carbon dioxide', 'glucose', 'oxygen', 'water'],
    feedbackHit: 'Correct — grey=combustion, red=respiration, green=photosynthesis.',
    feedbackMiss: 'Grey arrows represent combustion (dried peat burning); red arrows represent respiration/decay; green arrows represent photosynthesis (reverse of respiration).',
    blankAnswers: ['fuel + oxygen → carbon dioxide + water', 'glucose + oxygen → carbon dioxide + water', 'carbon dioxide + water → glucose + oxygen'],
  },
  q6_b: {
    marks: 2,
    exemplar: 'Correct answer: 0.37°C. Correct unit: °C. (1 mark each). Reading: ≈ +0.02°C at 1970 and ≈ +0.39°C at 2000, so ΔT = 0.39 − 0.02 = 0.37°C. Accept 0.4°C.',
    keyConcepts: ['Graph reading', 'Temperature anomaly'],
    keywords: ['0.37', '°C', '1970', '2000', 'temperature increase', 'anomaly'],
    feedbackHit: 'Correct — reading the graph at 1970 (≈ +0.02°C) and 2000 (≈ +0.39°C) gives an increase of 0.37°C.',
    feedbackMiss: 'Read the temperature anomaly at 1970 and 2000 from the graph, then subtract: ΔT = T₂₀₀₀ − T₁₉₇₀.',
  },
  q6_c: {
    marks: 12,
    exemplar: 'Rubric (max 12, Crit D). Activities that INCREASE carbon footprint (1→2→3): single mention → relevant activity with emissions/carbon footprint → more than one activity. Activities that DECREASE footprint (1→2→3): single mention → relevant activity decreasing footprint → more than one. Impact on individual/society (1→2→3): general reference → specific reference to individual OR society → specific reference to both individual AND society. Explanations (1→2→3): incomplete scientific explanation → complete explanation of activities that either increase OR decrease → complete explanation of activities that increase AND decrease footprint.',
    keyConcepts: ['Criterion D — societal impact', 'Carbon footprint', 'Sustainability'],
    keywords: ['carbon footprint', 'fossil fuels', 'renewable energy', 'individual', 'society', 'emissions', 'peatland restoration', 'insulation', 'draining wetlands', 'carbon cycle'],
    feedbackHit: 'Strong Crit D response with specific activities, individual and societal impacts, and full scientific explanation.',
    feedbackMiss: 'Address: activities increasing footprint (driving, flying, draining/burning peat); activities decreasing footprint (renewable energy, restoring wetlands, insulation); impact on individuals AND society; explain how each affects the carbon cycle.',
  },

  // ── Q7: Evaluate Electricity-Generation Methods ──────────────────────────────
  q7_: {
    marks: 17,
    exemplar: 'Rubric (max 17, Crit D). Environmental impact (1→2→3→4): one method mentioned → both methods mentioned → both with supporting data → both fully justified with data. Generating costs/economic impact (1→2→3→4): one cost → both methods → both with explicit supporting data → both justified. Fuel sustainability (1→2→3→4): one comment → comment about one fuel with justification OR both → relevant comment for both fuels with justification → both fully justified. Usefulness (1→2→3→4): one general comment → relevant comment for both methods referencing data → more than one relevant comment with supporting data → more than one with explicit data. Appraisal (1→2→3): concluding appraisal linked to the arguments → with some scientific justification → with complete, detailed scientific justification. Note: the student selects two methods from [Coal-fired station, Natural-gas station, Wind farm, Solar farm].',
    keyConcepts: ['Criterion D — evaluation', 'Environmental sustainability', 'Electricity generation'],
    keywords: ['coal', 'natural gas', 'wind farm', 'solar farm', 'CO₂ emissions', 'renewable', 'generating cost', 'fuel sustainability', 'usefulness', 'appraisal'],
    feedbackHit: 'Excellent Crit D evaluation comparing both generation methods across all four dimensions with supporting data and a justified conclusion.',
    feedbackMiss: 'Compare your two methods across: environmental impact (CO₂ per kWh), generating costs (p per kWh), fuel sustainability (renewable vs finite), and usefulness (reliability, intermittency, scale). Support each point with data from the table and include a conclusion.',
  },
}
