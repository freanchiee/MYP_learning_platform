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
  // ── Q1 — Volcanic rock & gases ────────────────────────────────────────────
  q1_a: { type: 'mcq', correct: 2 } as MCQEntry, // 4 electrons (Si, Group 4) — index 2

  q1_b: {
    marks: 2,
    exemplar: 'Group 1 (accept Group 1A) [1 mark]; Period 4 [1 mark]. Do not accept if group and period are switched.',
    keyConcepts: ['Periodic table', 'Groups and periods', 'Potassium'],
    keywords: ['Group 1', 'Period 4', 'potassium', 'K', 'periodic table'],
    feedbackHit: 'Correct — potassium is in Group 1, Period 4.',
    feedbackMiss: 'Potassium (K, atomic number 19) is in Group 1 and Period 4 of the periodic table.',
  },

  q1_c: { type: 'mcq', correct: 1 } as MCQEntry, // Transition metals (Ti) — index 1

  q1_d: {
    marks: 4,
    exemplar: 'H atom has one electron (in its outer shell so is electronically unstable) [1 mark]. H atoms need to share electrons in order to gain stability OR to obtain the electron configuration of a noble gas [1 mark]. He (already) has a full outer shell of electrons OR a complete outer shell [1 mark]. (so) there is no need for He to share electrons OR it does not react OR does not bond OR is already stable [1 mark]. Accept "stable electron shell", "noble gas configuration", "complete duplet". Do NOT accept "balanced". Ignore "octet".',
    keyConcepts: ['Covalent bonding', 'Electron configuration', 'Noble gas stability'],
    keywords: ['outer shell', 'electron', 'share', 'stable', 'noble gas', 'duplet', 'helium', 'hydrogen', 'diatomic'],
    feedbackHit: 'Excellent — H needs to share electrons; He already has a full outer shell and does not bond.',
    feedbackMiss: 'H has 1 outer-shell electron (unstable) → shares to get a duplet. He has a full outer shell → no need to share → does not form molecules.',
  },

  q1_e: { type: 'mcq', correct: 1 } as MCQEntry, // Structure B (H₂S: 2 shared pairs + 2 lone pairs) — index 1

  // ── Q2 — Comet & asteroid ices ────────────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Working: mass number = number of protons + number of neutrons = 17 + 20 = 37 [1 mark]. Final answer: mass number = 37 [1 mark]. Award two marks for 37 alone (if working is implied). Chlorine always has 17 protons.',
    keyConcepts: ['Isotopes', 'Mass number', 'Protons and neutrons'],
    keywords: ['mass number', '37', 'protons', 'neutrons', 'isotope', 'chlorine', '17+20'],
    feedbackHit: 'Correct — mass number = protons (17) + neutrons (20) = 37.',
    feedbackMiss: 'Mass number = number of protons + number of neutrons = 17 + 20 = 37. Chlorine always has 17 protons.',
  },

  q2_b: {
    marks: 1,
    exemplar: 'Accept any reasonable response, for example: oxygen can be produced from the decomposition of CO₂ or water; oxygen may form from non-biological (abiotic) chemical reactions; the oxygen formed may not be enough for any biological process. Do NOT accept that oxygen is in water.',
    keyConcepts: ['Abiotic oxygen sources', 'Photosynthesis vs decomposition'],
    keywords: ['decomposition', 'CO₂', 'non-biological', 'abiotic', 'water', 'not enough'],
    feedbackHit: 'Correct — molecular oxygen can be produced abiotically (e.g. from CO₂ decomposition).',
    feedbackMiss: 'Oxygen can form from the decomposition of CO₂ or water without any living organisms being involved.',
  },

  q2_c: {
    marks: 1,
    exemplar: 'Relative molecular mass = 35 + 37 = 72. Ignore units if present.',
    keyConcepts: ['Relative molecular mass', 'Isotopes', 'Chlorine'],
    keywords: ['72', 'relative molecular mass', 'chlorine-35', 'chlorine-37', 'Cl₂'],
    feedbackHit: 'Correct — 35 + 37 = 72.',
    feedbackMiss: 'Add the atomic masses of the two chlorine atoms: Cl-35 (35) + Cl-37 (37) = 72.',
  },

  q2_d: {
    marks: 2,
    exemplar: 'Top of the range = 7 [1 mark]. Range expressed precisely between 4.3–4.5 and 7 [second mark for both correct limits]. Award two marks for the correct answer (4.3–4.5 to 7).',
    keyConcepts: ['pH indicators', 'pH range', 'Acidic solutions'],
    keywords: ['pH', '7', '4.3', '4.5', 'range', 'indicator A', 'indicator B', 'hydrogen chloride solution'],
    feedbackHit: 'Correct — the HCl solution has a pH range of approximately 4.3–4.5 to 7.',
    feedbackMiss: 'Use the chart: find where both indicators give the observed colours. The range is pH 4.3–4.5 to 7.',
  },

  q2_e: {
    marks: 2,
    exemplar: 'The temperature is higher OR there is more heat OR more energy on the comet as it moves closer to the Sun [1 mark]. (so) at higher temperatures the rate of the reaction increases [1 mark].',
    keyConcepts: ['Effect of temperature on reaction rate', 'Kinetic theory'],
    keywords: ['temperature', 'higher', 'energy', 'rate increases', 'Sun', 'closer', 'reaction rate'],
    feedbackHit: 'Well done — higher temperature nearer the Sun increases the rate of decomposition.',
    feedbackMiss: 'Closer to the Sun → higher temperature → more energy → particles collide more frequently/forcefully → rate increases.',
  },

  q2_f: {
    marks: 2,
    exemplar: 'Catalysts increase the rate of a reaction OR speed up a reaction [1 mark]. Any further point: a reaction using a catalyst has a lower (activation) energy; the catalyst provides an alternative reaction pathway; the catalyst is not used up or consumed [1 mark].',
    keyConcepts: ['Catalyst', 'Activation energy', 'Reaction rate'],
    keywords: ['catalyst', 'rate', 'activation energy', 'lower', 'alternative path', 'not consumed', 'speed up'],
    feedbackHit: 'Correct — a catalyst increases the reaction rate by providing a lower-activation-energy pathway.',
    feedbackMiss: 'A catalyst speeds up a reaction by providing an alternative pathway with lower activation energy. It is not consumed.',
  },

  q2_g: {
    marks: 2,
    exemplar: 'Accept any two reasonable suggestions, for example: mine rare metals (e.g. platinum-group metals) from asteroids; learn how the solar system or life began; collect water/ice for future space travel; defend the Earth by learning how to deflect asteroids; national or commercial prestige; test new spacecraft technology.',
    keyConcepts: ['Space exploration', 'Comet and asteroid missions'],
    keywords: ['mine metals', 'asteroid resources', 'origin of solar system', 'water ice', 'planetary defence', 'prestige'],
    feedbackHit: 'Good — two valid reasons for visiting comets and asteroids beyond those in the question.',
    feedbackMiss: 'Valid reasons include: mining rare metals, learning how the solar system or life began, collecting water for space travel, or planetary defence against impacts.',
  },

  // ── Q3 — Paraffin (kerosene) oil lamp ─────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'A: Liquid [1 mark]; B: Gas [1 mark]. In the reservoir the fuel is a liquid; the heat of the flame turns it into a vapour (gas) at the wick tip where it burns.',
    keyConcepts: ['States of matter', 'Evaporation of a liquid fuel'],
    keywords: ['liquid', 'gas', 'paraffin', 'vapour', 'state', 'A', 'B', 'wick'],
    feedbackHit: 'Correct — A (in the reservoir) = Liquid; B (vapour at the wick) = Gas.',
    feedbackMiss: 'The fuel is a liquid in the reservoir (A); the flame vaporises it to a gas at the wick tip (B), where it burns.',
    blankAnswers: ['Liquid', 'Gas'],
  },

  q3_b: {
    marks: 2,
    exemplar: 'Name: Heptane [1 mark]. Chemical class: Alkane [1 mark]. ECF for alkene if heptene was stated as the name. Do NOT accept "?".',
    keyConcepts: ['Organic chemistry', 'Alkanes', 'Homologous series'],
    keywords: ['heptane', 'alkane', 'C₇H₁₆', 'hydrocarbon', 'homologous series'],
    feedbackHit: 'Correct — C₇H₁₆ is heptane, an alkane.',
    feedbackMiss: 'C₇H₁₆ follows the alkane formula (CₙH₂ₙ₊₂). Seven carbons → hept → heptane. Class = alkane.',
  },

  q3_c: {
    marks: 2,
    exemplar: '1 C₇H₁₆(l) + 11 O₂(g) → 7 CO₂(g) + 8 H₂O(g). Reactants correctly balanced [1 mark]; Products correctly balanced [1 mark]. Do NOT accept "?".',
    keyConcepts: ['Balancing equations', 'Combustion reactions', 'Alkanes'],
    keywords: ['1', '11', '7', '8', 'C₇H₁₆', 'O₂', 'CO₂', 'H₂O', 'balanced', 'combustion'],
    feedbackHit: 'Correct — 1 C₇H₁₆ + 11 O₂ → 7 CO₂ + 8 H₂O.',
    feedbackMiss: 'Balance by counting atoms: C: 7→7CO₂✓; H: 16→8H₂O✓; O: 14+8=22=11×2✓. Coefficients: 1, 11, 7, 8.',
    blankAnswers: ['1', '11', '7', '8'],
  },

  q3_d: {
    marks: 3,
    exemplar: 'Hypothesis direction: increase OR decrease (do not award the direction alone). Valid reasons: [Increase] the chimney shelters the flame from draughts so the fuel burns steadily and is not wasted, making it last longer [1 mark]. [Increase] the chimney reduces heat loss so the lamp needs less fuel to stay lit [1 mark]. [Decrease] the chimney increases the draught/airflow so the fuel burns faster and runs out sooner [1 mark]. All direction + reason combinations accepted.',
    keyConcepts: ['Hypothesis formulation', 'Combustion', 'Criterion B'],
    keywords: ['hypothesis', 'increase', 'decrease', 'because', 'glass chimney', 'draught', 'burn time', 'heat loss'],
    feedbackHit: 'Well done — direction stated with a coherent scientific reason linking to the experiment.',
    feedbackMiss: 'State a direction (increase/decrease) AND give a reason: e.g. "The chimney shelters the flame from draughts, so the fuel burns more steadily → the tank lasts longer."',
    blankAnswers: ['increase'],
  },

  q3_e: {
    marks: 1,
    exemplar: '9.40 × 10⁻² (g min⁻¹). Accept 9.4 × 10⁻². Ignore units if present.',
    keyConcepts: ['Standard form', 'Scientific notation'],
    keywords: ['9.40', '10⁻²', 'standard form', 'scientific notation', '3720', 'rate'],
    feedbackHit: 'Correct — 0.0940 = 9.40 × 10⁻² g min⁻¹.',
    feedbackMiss: '0.0940 in standard form: move the decimal right 2 places → 9.40 × 10⁻².',
  },

  q3_f: {
    marks: 2,
    exemplar: 'Accept any two points: the data should show rate decreasing with altitude (a negative correlation); it should be a scatter or line graph because the data is continuous, not a bar chart; the IV (altitude) should be on the x-axis AND the DV (rate) on the y-axis (the axes are swapped); issues with the scale or increments. Accept "line graph".',
    keyConcepts: ['Graph errors', 'Data presentation', 'Axes'],
    keywords: ['axes swapped', 'scatter graph', 'bar chart', 'altitude', 'x-axis', 'y-axis', 'continuous data', 'decreasing'],
    feedbackHit: 'Correct — two valid graph errors identified.',
    feedbackMiss: 'Errors include: (1) altitude (IV) should be on the x-axis and rate (DV) on the y-axis — they are swapped; (2) it should be a scatter/line graph not a bar chart (the data is continuous).',
  },

  q3_g: {
    marks: 4,
    exemplar: 'Accept any two reasons [max 2]: different equipment (chimney vs no chimney); different draught or airflow; different oxygen supply to the flame. WTTE. Correctly linked suggestion of how the rate would be affected [max 2]: Day 1 chimney → strong draught → more air/oxygen → faster combustion; Day 2 no chimney in still air → less airflow → slower combustion. Each effect must be linked to the rate.',
    keyConcepts: ['Experimental variables', 'Oxygen availability', 'Rate of combustion'],
    keywords: ['different equipment', 'draught', 'airflow', 'oxygen', 'chimney', 'rate', 'combustion', 'still air'],
    feedbackHit: 'Well done — two reasons given with a linked suggestion of how the rate is affected.',
    feedbackMiss: 'Day 1 chimney → strong upward draught → more oxygen to the flame → faster combustion. Day 2 no chimney in still air → less airflow → slower combustion.',
  },

  // ── Q4 — Two firelighter-cube brands ──────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Independent variable: the brand of firelighter (accept "type of firelighter") [1 mark]. Dependent variable: the burn time OR the time the cube burns with a steady flame [1 mark].',
    keyConcepts: ['Independent and dependent variables'],
    keywords: ['independent variable', 'brand', 'type', 'dependent variable', 'burn time'],
    feedbackHit: 'Correct — IV = brand/type of firelighter; DV = burn time.',
    feedbackMiss: 'IV = what you deliberately change = the brand (FlameFast vs QuickLight). DV = what you measure = the burn time.',
  },

  q4_b: {
    marks: 2,
    exemplar: 'Working: (14.5 + 12.0 + 13.5) / 3 [1 mark]. Answer: 13.3 min (40.0 ÷ 3 = 13.33, accept 13.3) [1 mark]. ECF from the first marking point for a transcription error.',
    keyConcepts: ['Mean calculation', 'Data processing'],
    keywords: ['13.3', 'mean', 'average', '14.5', '12.0', '13.5', 'QuickLight', 'burn time'],
    feedbackHit: 'Correct — (14.5 + 12.0 + 13.5) ÷ 3 = 13.3 min.',
    feedbackMiss: 'Mean = (14.5 + 12.0 + 13.5) ÷ 3 = 40.0 ÷ 3 = 13.3 min.',
  },

  q4_c: {
    marks: 1,
    exemplar: 'The friend did not include the outlier at 8.5 minutes when calculating the average. WTTE.',
    keyConcepts: ['Outliers', 'Data analysis'],
    keywords: ['outlier', '8.5', 'excluded', 'anomalous', 'different average'],
    feedbackHit: 'Correct — the friend excluded the outlier (8.5 minutes) from the mean calculation.',
    feedbackMiss: 'The friend excluded the outlier value (8.5 minutes): (11.0 + 10.5) ÷ 2 = 10.75 minutes instead of 10.0.',
  },

  q4_d: {
    marks: 3,
    exemplar: 'Not valid because the QuickLight firelighter has the longer burn time (13.3 min vs FlameFast 10.0 min) [1 mark]. Accept any two further points: the two cubes have different masses, so it is not a fair comparison; insufficient data to test the hypothesis; the 8.5 min outlier in the FlameFast data reduces reliability; surface area was not measured. Ignore references to surface area as a justification.',
    keyConcepts: ['Hypothesis validity', 'Data evaluation', 'Fair test'],
    keywords: ['not valid', 'QuickLight', 'longer', 'different mass', 'fair comparison', 'outlier'],
    feedbackHit: 'Well done — not valid; QuickLight burns longer than FlameFast.',
    feedbackMiss: 'The hypothesis is not valid: QuickLight (13.3 min) burns longer than FlameFast (10.0 min), the opposite of the prediction.',
  },

  q4_e: {
    marks: 2,
    exemplar: 'Improvement: use the same mass of fuel in each cube OR compare cubes of equal mass OR carry out additional trials and calculate averages [1 mark]. Justification: this makes it a fair comparison / controls a key variable / reduces random error [1 mark]. WTTE.',
    keyConcepts: ['Validity improvement', 'Experimental design'],
    keywords: ['same mass of fuel', 'fair comparison', 'control variable', 'more trials', 'average', 'random error'],
    feedbackHit: 'Correct — using the same mass of fuel per cube makes the comparison fair, improving validity.',
    feedbackMiss: 'Use the same mass of fuel in each cube so the comparison is fair, or add more trials and average to reduce random error.',
  },

  // ── Q5 — Sawdust / wood-waste pellets ─────────────────────────────────────
  q5_a: {
    marks: 2,
    exemplar: 'Correct arrangement visible (filter paper in the funnel, beaker beneath) [1 mark]. Only filter paper and beaker selected — second mark awarded only if no other equipment is added [1 mark]. The funnel is already provided so should not be counted as additional equipment.',
    keyConcepts: ['Filtration', 'Laboratory equipment', 'Separation techniques'],
    keywords: ['filter paper', 'beaker', 'funnel', 'filtration', 'equipment', 'arrangement'],
    feedbackHit: 'Correct — filter paper in the funnel and a beaker beneath to collect the filtrate.',
    feedbackMiss: 'For filtration: place the filter paper in the funnel (already in the stand) and put a beaker below to collect the filtrate. No other equipment is needed.',
  },

  q5_b: { type: 'mcq', correct: 2 } as MCQEntry, // Symbol C (flammable) — index 2

  q5_c: {
    marks: 6,
    exemplar: 'Bar chart with: y-axis scale with even increments [1 mark]; y-axis scale starting at zero [1 mark]; all data correctly plotted (Wood pellets 16 800, Compost 11 500, Poultry waste 10 800, Straw 14 400, Dried grass 12 200) [1 mark]; a title linking the IV with the DV [1 mark]; x-axis label: Type of biomass / fuel [1 mark]; y-axis label: Energy / MJ tonne⁻¹ [1 mark].',
    keyConcepts: ['Graph construction', 'Bar chart', 'Biomass energy'],
    keywords: ['bar chart', 'y-axis scale', 'zero', 'plotted', 'title', 'type of biomass', 'energy', 'MJ tonne⁻¹'],
    feedbackHit: 'Excellent — bar chart with correct scale, labels, title, and all bars correctly plotted.',
    feedbackMiss: 'Bar chart: x-axis = "Type of biomass/fuel"; y-axis = "Energy / MJ tonne⁻¹"; scale starts at 0 with even increments; all 5 bars correctly plotted; a title links the IV and DV.',
  },

  q5_d: { type: 'mcq', correct: 1 } as MCQEntry, // Exothermic — index 1

  q5_e: {
    marks: 2,
    exemplar: 'Any two linked points: reduces waste [1 mark] + reduces reliance on landfill [1 mark]. OR provides a new fuel source [1 mark] + reduces reliance on fossil fuels [1 mark]. OR can be used as compost/mulch [1 mark] + reduces the need for other materials or reduces waste [1 mark]. WTTE.',
    keyConcepts: ['Green chemistry', 'Waste reduction', 'Sustainability'],
    keywords: ['reduces waste', 'landfill', 'fossil fuels', 'fuel source', 'compost', 'sustainable', 'recycling'],
    feedbackHit: 'Well done — two valid reasons for recycling sawdust and wood waste with justification.',
    feedbackMiss: 'Recycling sawdust: (1) reduces waste → less landfill; (2) provides a new fuel source → reduces reliance on fossil fuels.',
  },

  // ── Q6 — Candle-wax energy density (Crit B design) ────────────────────────
  q6_: {
    marks: 16,
    exemplar: 'Criterion B design rubric (16 marks):\n1. Variables [max 4]: some variables implied (1); wax type as IV OR mass of wax burned as DV OR one CV identified (2); wax type as IV AND mass burned as DV AND one CV (3); wax type as IV AND DV as mass burned AND fixed temperature change AND one CV AND an additional CV (4). Typical CVs: volume of water, fixed temperature rise, distance from flame, same container.\n2. Justification [max 2]: set-up 1 selected with a justification that the temperature change can be measured (1); set-up 2 (shielded) selected with a justification that the temperature change can be measured AND heat losses are minimised (2).\n3. Sufficient data [max 4]: reference to different waxes (1); all five waxes OR three trials (2); all five waxes AND three trials (3); all five waxes AND three trials AND calculates a mean (4).\n4. Method [max 4]: attempt at a method but may not be relevant (1); method mentions temperature change but is not likely to give relevant data (2); method for measuring the mass of wax burned to give a fixed temperature change, described and able to be followed (3); complete method for all five waxes, fully explained and replicable (4).\n5. Safety [max 2]: a safety concern is mentioned (1); a safety concern is mentioned and linked to a specific hazard (e.g. naked flame, hot apparatus, molten wax) (2).',
    keyConcepts: ['Criterion B design', 'Energy density investigation', 'Variables', 'Safety'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'wax type', 'mass burned', 'temperature', 'method', 'safety', 'trials', 'mean'],
    feedbackHit: 'Well-designed investigation — all five dimensions addressed with full method detail.',
    feedbackMiss: 'Strong design: IV = candle wax (A–E); DV = mass of wax burned for a fixed temperature rise; CV = volume of water, temperature change, distance from flame; choose set-up 2 to minimise heat loss; burn each wax 3× and average; safety: heatproof mat, goggles, care with molten wax.',
  },

  // ── Q7 — Global energy demand & well-water filters ────────────────────────
  q7_a: {
    marks: 1,
    exemplar: '1950–1960 (the decade with the smallest rise, only about 40 EJ). Accept "1950s" or the first decade shown.',
    keyConcepts: ['Graph reading', 'Energy demand data'],
    keywords: ['1950–1960', '1950s', 'smallest increase', 'graph reading', 'energy demand'],
    feedbackHit: 'Correct — 1950–1960 shows the smallest increase in energy demand.',
    feedbackMiss: 'Read the graph: the 1950–1960 decade has the shallowest rise (about 100 → 140 EJ).',
  },

  q7_b: {
    marks: 2,
    exemplar: '215 ±20 EJ [1 mark]. Unit: EJ per year (exajoules per year) [1 mark]. Award the second mark only if a unit is given.',
    keyConcepts: ['Graph reading', 'Units', 'Energy demand'],
    keywords: ['215', 'EJ', 'exajoules', '1970', 'read graph', 'units'],
    feedbackHit: 'Correct — approximately 215 EJ per year in 1970.',
    feedbackMiss: 'Read the y-axis at 1970: the value is about 215 EJ per year. Must include units.',
  },

  q7_c: {
    marks: 1,
    exemplar: 'Increase in population OR economic growth / industrialisation raising demand for energy. Do NOT accept a single cause without linking it to higher demand.',
    keyConcepts: ['Energy demand', 'Population and economic growth'],
    keywords: ['population', 'economic growth', 'industrialisation', 'more demand', 'development'],
    feedbackHit: 'Correct — rising population and economic growth drove the increase in energy demand.',
    feedbackMiss: 'The main reason is rising population and economic growth/industrialisation, which increase the demand for energy.',
  },

  q7_d: {
    marks: 2,
    exemplar: 'Pore size [1 mark]. Justification: the pores of the filter need to be smaller than the material that is being removed (e.g. bacteria, parasites, silt) [1 mark]. WTTE.',
    keyConcepts: ['Filtration', 'Pore size', 'Water purification'],
    keywords: ['pore size', 'smaller', 'material', 'removed', 'filter', 'filtration'],
    feedbackHit: 'Correct — pore size is the most important feature; pores must be smaller than the contaminants.',
    feedbackMiss: 'Pore size is most important because the filter pores must be smaller than the particles being removed (bacteria, parasites, silt).',
  },

  q7_e: {
    marks: 6,
    exemplar: 'Criterion D explanation rubric (6 marks):\n1 = an advantage OR disadvantage of the slow sand filter (SSF); 2 = an advantage AND a disadvantage of SSF; 3 = an advantage AND a disadvantage with one supported by scientific reasoning; 4 = an advantage AND a disadvantage with both supported by scientific reasoning. Justification: 1 = a simple justification; 2 = a simple justification with supporting evidence.\n\nExample: SSF advantage — much cheaper ($70 vs $190), a far longer filter life (24 vs 8 months) and a faster flow rate (4.0 vs 2.0 L min⁻¹), so it is cheaper to buy and run. SSF disadvantage — its larger pore size (5 μm) is bigger than E. coli bacteria (0.5 μm), so it does NOT remove bacteria, although it does trap the larger Giardia parasite (8 μm). Membrane advantage — its tiny pore size (0.1 μm) removes both E. coli and Giardia, making the water microbiologically safe. Membrane disadvantage — higher cost, shorter life and slower flow. For a private well, where E. coli contamination is a real risk, the membrane filter is more suitable because only its pore size (0.1 μm) is small enough to remove E. coli (0.5 μm), ensuring the water is safe to drink.',
    keyConcepts: ['Criterion D evaluation', 'Slow sand filtration', 'Membrane filtration', 'Water purification'],
    keywords: ['slow sand filter', 'membrane', 'pore size', 'cost', 'filter life', 'flow rate', 'E. coli', 'Giardia', 'advantage', 'disadvantage'],
    feedbackHit: 'Excellent — advantages and disadvantages of both units with scientific reasoning and a justified recommendation.',
    feedbackMiss: 'Compare the slow sand filter and membrane filter on cost, lifespan, pore size and flow rate. Use the data: only the membrane (0.1 μm) removes E. coli (0.5 μm). Conclude which is suitable for well water.',
  },

  // ── Q8 — Desert town water purification (Crit D evaluation) ────────────────
  q8_: {
    marks: 13,
    exemplar: 'Criterion D evaluation rubric (13 marks):\n1. Economic comparison [max 4]: a statement comparing two technologies (1); a statement comparing all three OR a comparison of two with supporting evidence (2); a comparison of all three with supporting evidence (3); a comparison of all three using the cost data ($85 / $150 / $270 per 100 m³) (4).\n2. Environmental [max 4]: one impact implied (1); a stated impact for one technology (2); a stated impact of at least two technologies (3); a stated impact of all three technologies (4).\n3. Not suitable [max 2]: one technology supported with a reason, possibly incorrect (1); microfiltration is not suitable on its own because it removes neither the dissolved salt nor the pesticides (2).\n4. Social considerations [max 2]: a statement of a social impact (1); a social impact with supporting evidence (2).\n5. Appraisal [max 2]: a concluding appraisal (1); a concluding appraisal linking the issues discussed (2).\n\nExample: Microfiltration ($85, low energy) is the cheapest, but it removes neither the dissolved salt of the brackish groundwater nor the pesticides from the canal, so on its own it is unsuitable for this town. Activated carbon ($150, low energy) removes the pesticides but not the salt, so the water would still be too salty to drink. Reverse osmosis / desalination ($270, high energy) removes both the salt and the pesticides, which is exactly what a desert town relying on brackish groundwater needs. Environmental: microfiltration produces filter waste; activated carbon needs periodic regeneration; reverse osmosis uses a lot of electricity (carbon footprint) and produces a concentrated salty brine that must be disposed of carefully in a dry environment. Social: a desalination plant creates jobs and a reliable water supply but needs significant funding and land. Conclusion: reverse osmosis (desalination) is the most suitable because only it removes the dissolved salt, while microfiltration alone is unsuitable.',
    keyConcepts: ['Criterion D evaluation', 'Water purification technologies', 'Microfiltration', 'Activated carbon', 'Reverse osmosis'],
    keywords: ['economic', 'environmental', 'social', 'microfiltration', 'activated carbon', 'reverse osmosis', 'desalination', 'dissolved salt', 'pesticides', 'not suitable', 'appraisal'],
    feedbackHit: 'Excellent — all five dimensions covered with evidence-based comparison and a justified appraisal.',
    feedbackMiss: 'Address: (1) Economic: compare the costs of all three; (2) Environmental: one impact each; (3) Not suitable: microfiltration removes neither salt nor pesticides; (4) Social: jobs/infrastructure/funding; (5) Appraisal: reverse osmosis best for a desert town with brackish groundwater.',
  },
}
