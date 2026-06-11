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

  // ── Q1 — Jewellery / periodic table / moles ─────────────────────────────────

  q1_a: {
    marks: 2,
    exemplar: 'Oxygen (O) is present in all three materials (CaCO₃, NaAlSi₂O₆, Al₂O₃). Group 16 (accept Group 6), Period 2.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['oxygen', 'Group 16', 'Period 2', 'element identification'],
    feedbackHit: 'Correct — oxygen is the element common to all three materials; it is in Group 16, Period 2.',
    feedbackMiss: 'Look for the element that appears in CaCO₃, NaAlSi₂O₆ AND Al₂O₃ — oxygen (O) is present in all three. On the periodic table, O is in Group 16 (or 6), Period 2.',
  },

  q1_b: {
    marks: 3,
    exemplar: 'M(NaAlSi₂O₆) = 23 + 27 + (28 × 2) + (16 × 6) = 23 + 27 + 56 + 96 = 202 g mol⁻¹.\nn = m/M = 75/202 = 0.37 mol (2 s.f.).\n(Do not award final mark for 0.40 mol; ECF from incorrect molar mass if working is shown.)',
    keyConcepts: ['Molar mass', 'Moles calculation'],
    keywords: ['NaAlSi₂O₆', 'molar mass 202', 'n = m/M', '0.37 mol'],
    feedbackHit: 'Well done — correct molar mass and division gives 0.37 mol to 2 s.f.',
    feedbackMiss: 'Calculate the molar mass: M = 23 + 27 + 2(28) + 6(16) = 202 g mol⁻¹. Then n = 75 ÷ 202 = 0.37 mol.',
  },

  q1_c: { type: 'mcq', correct: 2 } as MCQEntry,

  // ── Q2 — Thermochromism / CuI ───────────────────────────────────────────────

  q2_a: { type: 'mcq', correct: 0 } as MCQEntry,

  q2_b: {
    marks: 1,
    exemplar: 'Reversible (reaction / change).',
    keyConcepts: ['Reversible reactions', 'Chemical equilibrium'],
    keywords: ['reversible', 'equilibrium', 'colour change returns'],
    feedbackHit: 'Correct — the colour change is reversible; the T-shirt returns to its original state.',
    feedbackMiss: 'The T-shirt returns to its original colour, meaning the process can go backwards — this is described as reversible.',
  },

  q2_c: {
    marks: 1,
    exemplar: 'CuI (accept Cu(I)I if the equation is unbalanced — allow CuI).',
    keyConcepts: ['Ionic formulae', 'Copper compounds'],
    keywords: ['CuI', 'copper(I) iodide', 'formula'],
    feedbackHit: 'Correct formula: CuI.',
    feedbackMiss: 'Copper(I) means Cu⁺; iodide is I⁻. The formula is CuI (one Cu and one I).',
  },

  q2_d: {
    marks: 3,
    exemplar: 'Room temperature → Brown; Cup of hot coffee → Green; In a refrigerator → Brown.',
    keyConcepts: ['Thermochromism', 'CuI colour changes'],
    keywords: ['brown at room temperature', 'green when hot', 'brown when cold', 'CuI colour'],
    feedbackHit: 'Correct — CuI is brown at room/cold temperatures and turns green when heated.',
    feedbackMiss: 'CuI changes colour with temperature: it is brown when cool (room temp or fridge) and turns green when heated (hot coffee).',
    blankAnswers: ['Brown', 'Green', 'Brown'],
  },

  q2_e: { type: 'mcq', correct: 0 } as MCQEntry,

  // ── Q3 — Signs, noble gases, isotopes, atmosphere ───────────────────────────

  q3_a: {
    marks: 1,
    exemplar: 'The material has changed as the sign will last longer (e.g. LEDs vs iron do not rust) OR because it is more appealing / more modern / more energy-efficient. (WTTE)',
    keyConcepts: ['Reflecting on impacts of science', 'Materials science'],
    keywords: ['lasts longer', 'more appealing', 'energy efficient', 'rust prevention'],
    feedbackHit: 'Correct — any valid suggestion about durability, aesthetics, or environmental benefits.',
    feedbackMiss: 'Think about why sign materials change: LEDs last longer, do not rust, or are more energy-efficient compared to older neon/iron signs.',
  },

  q3_b: {
    marks: 1,
    exemplar: 'Fe₂O₃ (correct subscripts must be seen).',
    keyConcepts: ['Ionic formulae', 'Iron compounds'],
    keywords: ['Fe₂O₃', 'iron(III) oxide', 'formula'],
    feedbackHit: 'Correct: Fe₂O₃.',
    feedbackMiss: 'Iron(III) is Fe³⁺; oxide is O²⁻. To balance charges: 2 × Fe³⁺ and 3 × O²⁻ → Fe₂O₃.',
  },

  q3_c: {
    marks: 2,
    exemplar: 'Oxidised: Iron (Fe) — it loses electrons / gains oxygen.\nReduced: Oxygen (O) — it gains electrons. (Accept element symbols.)',
    keyConcepts: ['Oxidation and reduction', 'Redox reactions'],
    keywords: ['oxidised: iron', 'reduced: oxygen', 'OIL RIG', 'electron transfer'],
    feedbackHit: 'Correct — iron is oxidised (gains oxygen / loses electrons) and oxygen is reduced (gains electrons).',
    feedbackMiss: 'In 4Fe + 3O₂ → 2Fe₂O₃: iron gains oxygen so it is oxidised; oxygen gains electrons so it is reduced (OIL RIG).',
  },

  q3_d: {
    marks: 3,
    exemplar: 'Electrons: ⁸²Kr = 36; ⁸⁴Kr = 36 (same as proton number for neutral atom).\nNeutrons: ⁸²Kr = 82 − 36 = 46; ⁸⁴Kr = 84 − 36 = 48.',
    keyConcepts: ['Atomic structure', 'Isotopes'],
    keywords: ['electrons = protons', 'neutrons = mass − protons', '⁸²Kr: 36e, 46n', '⁸⁴Kr: 36e, 48n'],
    feedbackHit: 'Correct — electrons equal protons (36 each); neutrons = mass number − proton number.',
    feedbackMiss: 'For a neutral atom, electrons = protons = 36. Neutrons = mass number − proton number: ⁸²Kr has 82 − 36 = 46 neutrons; ⁸⁴Kr has 84 − 36 = 48 neutrons.',
    blankAnswers: ['36', '36', '46', '48'],
  },

  q3_e: {
    marks: 1,
    exemplar: 'Noble gases have full / complete outer electron shells (so they do not react). Accept: stable electronic configuration / full octet (accept reference to 2 electrons for helium).',
    keyConcepts: ['Noble gases', 'Electronic configuration'],
    keywords: ['full outer shell', 'stable', 'do not react', 'complete octet'],
    feedbackHit: 'Correct — noble gases have full outer shells and are unreactive.',
    feedbackMiss: 'Noble gases are unreactive because their outer electron shell is full — there is no tendency to gain or lose electrons to start a reaction.',
  },

  q3_f: {
    marks: 1,
    exemplar: '2,6 (accept 1s² 2s² 2p⁴ or K²L⁶).',
    keyConcepts: ['Electronic configuration', 'Oxygen'],
    keywords: ['2,6', '1s² 2s² 2p⁴', 'oxygen electronic configuration'],
    feedbackHit: 'Correct — oxygen has 8 electrons arranged 2,6.',
    feedbackMiss: 'Oxygen has atomic number 8 (8 electrons). First shell holds 2, second shell holds 6: electronic configuration = 2,6.',
  },

  q3_g: {
    marks: 2,
    exemplar: 'Covalent bonding. Electrons are shared between the two oxygen atoms (accept: shared pair/pairs of electrons; double bond).',
    keyConcepts: ['Covalent bonding', 'Oxygen molecule'],
    keywords: ['covalent', 'shared electrons', 'double bond', 'O₂'],
    feedbackHit: 'Correct — O₂ has a covalent (double) bond formed by sharing electrons.',
    feedbackMiss: 'O₂ forms a covalent bond: both oxygen atoms share electrons so each achieves a full outer shell. O₂ has a double bond (4 shared electrons).',
  },

  q3_h: {
    marks: 2,
    exemplar: 'Exosphere. This layer has the highest temperature (from Diagram B). (Accept "top of the thermosphere" but NOT "thermosphere" alone.)',
    keyConcepts: ['Atmospheric layers', 'Kinetic energy and temperature'],
    keywords: ['exosphere', 'highest temperature', 'kinetic energy', 'atmosphere layers'],
    feedbackHit: 'Correct — the exosphere has the highest temperature, so particles have the highest kinetic energy.',
    feedbackMiss: 'Higher temperature means higher average kinetic energy. From Diagram B, the exosphere (top layer) has the highest temperature — particles there have the most kinetic energy.',
  },

  q3_i: {
    marks: 2,
    exemplar: 'Thermosphere. (Because) this is where the most oxygen is found (from Diagram A).',
    keyConcepts: ['Atmospheric composition', 'Oxygen in atmosphere'],
    keywords: ['thermosphere', 'most oxygen', 'Diagram A', 'solar flares', 'green light'],
    feedbackHit: 'Correct — the thermosphere has the highest proportion of oxygen, making it the most likely layer for green auroral light.',
    feedbackMiss: 'From Diagram A (composition vs height), oxygen percentage is highest in the thermosphere (~100–500 km). Since the green light comes from energised oxygen, that is the expected location.',
  },

  // ── Q4 — Hard water / soap titration ────────────────────────────────────────

  q4_a: {
    marks: 2,
    exemplar: '49.0 cm³ (final burette reading, correct to 1 decimal place). Award 2 marks if only "49.0 cm³" seen.',
    keyConcepts: ['Measurement', 'Burette reading'],
    keywords: ['49.0 cm³', 'burette', '1 decimal place', 'meniscus'],
    feedbackHit: 'Correct reading: 49.0 cm³.',
    feedbackMiss: 'Read the burette at the bottom of the meniscus and record to 1 decimal place. The reading shown is 49.0 cm³.',
  },

  q4_b: {
    marks: 2,
    exemplar: 'Sample B: 21.0 − 11.0 = 10.0 cm³.\nSample D: 49.0 − 25.0 = 24.0 cm³. (Award max 1 mark if decimal places not included. ECF from Q4a for D.)',
    keyConcepts: ['Data processing', 'Titration calculations'],
    keywords: ['10.0 cm³', '24.0 cm³', 'final − initial', 'volume calculation'],
    feedbackHit: 'Correct: B = 10.0 cm³; D = 24.0 cm³.',
    feedbackMiss: 'Volume = final reading − initial reading. B: 21.0 − 11.0 = 10.0 cm³; D: 49.0 − 25.0 = 24.0 cm³ (using ECF from Q4a).',
  },

  q4_c: {
    marks: 5,
    exemplar: 'Sample A → Temporary hard (volume reduced from 20.0 to 10.0 cm³ after boiling — temporary hardness is removed by boiling).\nSample C → Permanent hard (volume unchanged at 25.0 cm³ after boiling — permanent hardness is not removed by boiling).\nSample E → Mixture of permanent and temporary hard (volume slightly reduced from 13.0 to 8.0 cm³ — some hardness removed by boiling, some remains).\n(2 marks for correct placements; up to 3 marks for justifications, 1 per sample.)',
    keyConcepts: ['Hard water types', 'Temporary and permanent hardness'],
    keywords: ['temporary hard', 'permanent hard', 'mixture', 'boiling removes', 'volume unchanged'],
    feedbackHit: 'Correct classifications and justifications using the change in volume after boiling.',
    feedbackMiss: 'Temporary hardness is removed by boiling (volume decreases); permanent hardness is unaffected (volume stays same); a mixture shows partial decrease. A: 20→10 (temporary); C: 25→25 (permanent); E: 13→8 (mixture).',
  },

  q4_d: {
    marks: 2,
    exemplar: 'If the mass / concentration of (sulphate) salts or ions increases, then the permanent hardness will increase. (Because Ca²⁺/Mg²⁺ ions from sulphates contribute to permanent hardness. Accept increase in salts for mp2.)',
    keyConcepts: ['Hypothesis formulation', 'Permanent hardness'],
    keywords: ['if-then-because', 'dissolved salts increase', 'permanent hardness increases', 'Ca²⁺ Mg²⁺ sulphate'],
    feedbackHit: 'Correct hypothesis linking dissolved salt concentration to permanent hardness.',
    feedbackMiss: 'A hypothesis links IV to DV: "If the concentration of dissolved (sulphate) salts increases, then permanent hardness increases, because Ca²⁺ and Mg²⁺ ions from sulphates cause permanent hardness."',
  },

  q4_e: {
    marks: 4,
    exemplar: 'Graph: Hardness (mg dm⁻³) on x-axis; pH on y-axis. Even increments on both axes. At least 3 data points plotted correctly. (Data points: 11/6.5, 44/7.4, 90/7.6, 170/7.8, 300/8.2.)',
    keyConcepts: ['Graph plotting', 'Data presentation'],
    keywords: ['hardness on x-axis', 'pH on y-axis', 'even scale', 'points plotted', 'axes labelled'],
    feedbackHit: 'Correct graph with appropriate axis labels, even scale, and correctly plotted points.',
    feedbackMiss: 'Plot hardness (mg dm⁻³) on the x-axis and pH on the y-axis with even increments. Plot the 5 data pairs: (11, 6.5), (44, 7.4), (90, 7.6), (170, 7.8), (300, 8.2).',
  },

  q4_f: {
    marks: 2,
    exemplar: 'The conclusion is not valid / invalid. (No mark for stating validity without reason.) Hard water is not acidic; it is basic / an alkali. The pH of hard water is above 7. (ORA — accept "the data shows pH is above 7 so cannot be acidic".)',
    keyConcepts: ['pH scale', 'Validity of conclusions'],
    keywords: ['invalid', 'hard water not acidic', 'pH above 7', 'basic alkaline'],
    feedbackHit: 'Correct — the conclusion is invalid because pH > 7 means hard water is basic, not acidic.',
    feedbackMiss: 'Look at the pH data: all hard water samples have pH above 7, meaning they are basic (alkaline), not acidic. The students\' conclusion is invalid.',
  },

  // ── Q5 — Limescale removal investigation ───────────────────────────────────

  q5_a: { type: 'mcq', correct: 0 } as MCQEntry,

  q5_b: {
    marks: 1,
    exemplar: 'How does the type of acid affect how quickly the limescale or calcium carbonate or deposit is removed? (Or: How does the type of acid affect the change in mass of limescale over time? Must link IV and DV; do not accept non-measurable DV.)',
    keyConcepts: ['Research question', 'Investigation design'],
    keywords: ['type of acid', 'rate of limescale removal', 'research question', 'IV and DV linked'],
    feedbackHit: 'Correct — research question links the type of acid (IV) to a measurable DV (time or mass).',
    feedbackMiss: 'A research question must name the IV (type of acid) and a measurable DV (time to dissolve limescale OR change in mass). E.g. "How does the type of acid affect the time required to remove a given mass of limescale?"',
  },

  q5_c: {
    marks: 4,
    exemplar: 'Independent variable (IV): type of acid.\nDependent variable (DV): time (for limescale to dissolve) OR mass (of limescale/pipe after descaling). Do NOT accept "amount".\nAny two controlled variables (max 2): volume of acid / concentration of acid / temperature / mass of pipe / length of pipe / surface area of limescale.',
    keyConcepts: ['Variables', 'Fair test'],
    keywords: ['IV type of acid', 'DV time or mass', 'CVs concentration volume temperature'],
    feedbackHit: 'Correct IV, DV, and two valid CVs stated.',
    feedbackMiss: 'IV = what you change (type of acid). DV = what you measure (time or mass removed). CVs = what you keep the same (e.g. volume of acid, concentration, temperature, length of pipe).',
  },

  q5_d: {
    marks: 2,
    exemplar: 'Any two from: include the unit of mass / give values to consistent decimal places / show the change in mass column / add a title to the table / give the chemical name of the shop-bought descaler.',
    keyConcepts: ['Data presentation', 'Scientific tables'],
    keywords: ['include units', 'consistent decimal places', 'change in mass', 'add title', 'chemical name'],
    feedbackHit: 'Two valid improvements to data presentation identified.',
    feedbackMiss: 'Think about what makes a good data table: proper column headings with units, consistent decimal places, a title, and clear identification of all reagents.',
  },

  q5_e: {
    marks: 2,
    exemplar: 'Hydrochloric acid. The mass changed the most (28 − 23.5 = 4.5 g removed, the greatest change in mass of any acid).',
    keyConcepts: ['Data analysis', 'Conclusion from data'],
    keywords: ['hydrochloric acid', '4.5 g mass change', 'most effective', 'greatest change'],
    feedbackHit: 'Correct — hydrochloric acid removed the most mass (4.5 g).',
    feedbackMiss: 'Calculate mass removed for each acid: HCl = 4.5 g; Lactic = 2.6 g; Phosphoric = 3 g; Citric = 1.5 g; Shop-bought = 4.0 g. HCl removed the most mass.',
  },

  q5_f: {
    marks: 1,
    exemplar: 'Different masses of limescale were present (in the different pipe sections) OR different lengths of pipe were used.',
    keyConcepts: ['Experimental validity', 'Controlled variables'],
    keywords: ['different masses of limescale', 'different pipe lengths', 'unequal starting mass'],
    feedbackHit: 'Correct — different pipe sections had different amounts of limescale.',
    feedbackMiss: 'The pipes came from different parts of the water system, so they had different amounts of limescale deposited or were different lengths.',
  },

  q5_g: {
    marks: 1,
    exemplar: 'The data is not valid because there is only one trial — there should have been more trials to calculate an average and to identify and exclude outliers.',
    keyConcepts: ['Validity', 'Reliability', 'Repeats'],
    keywords: ['one trial', 'not valid', 'more repeats', 'cannot calculate average', 'outliers'],
    feedbackHit: 'Correct — one trial means data validity and reliability cannot be confirmed.',
    feedbackMiss: 'With only one trial, you cannot calculate an average or identify outliers, making the data unreliable and less valid.',
  },

  // ── Q6 — Ethanoic acid experiment design ────────────────────────────────────

  q6_a: {
    marks: 1,
    exemplar: 'Any one from: HCl is not a common household chemical / ethanoic acid is safer (less hazardous / corrosive) / HCl might react with the metal pipe rather than the limescale / ethanoic acid is a weak acid (HCl is a strong acid) / easier or less harmful to dispose of ethanoic acid. (Accept "ethanoic acid for vinegar" throughout. Do NOT accept vague references to "green chemistry" since this is in the question stem.)',
    keyConcepts: ['Green chemistry', 'Acid properties'],
    keywords: ['household vinegar', 'ethanoic acid safer', 'HCl corrosive', 'weak acid', 'less hazardous'],
    feedbackHit: 'Valid reason for choosing ethanoic acid over HCl.',
    feedbackMiss: 'Consider: HCl is a strong, corrosive acid not found in the home; ethanoic acid (vinegar) is weaker, safer, and easier to dispose of.',
  },

  q6_: {
    marks: 18,
    exemplar: 'Criterion B design rubric (max 18 marks):\n\nVariables (max 4):\n• 1 mk: correctly states IV only or DV only\n• 2 mk: IV and DV\n• 3 mk: IV, DV and one CV\n• 4 mk: IV (ethanoic acid concentration), DV (mass of CaCO₃ remaining or time to dissolve), two CVs (mass of CaCO₃, volume of acid, temperature, surface area)\n\nEquipment (max 4):\n• Must be connected to the IV and DV (e.g. balance for mass, measuring cylinder/burette for volume, stopwatch for time; pipette acceptable)\n\nMethod (max 4):\n• Steps must be in a logical order, linked to IV and DV\n• Must include at least 3 different concentrations and at least 3 trials per concentration\n• A method that does not include how to vary IV is max 3 marks\n\nMeasurements (max 3):\n• At least 3 different values of IV\n• Measurements linked to DV stated (e.g. measure mass before and after; record time until no more fizzing)\n• 3 trials per IV value for averaging\n\nSafety (max 3):\n• Relevant justified safety precaution(s) e.g. goggles (acid splashes), gloves (corrosive/irritant), work in fume cupboard (CO₂ released)',
    keyConcepts: ['Criterion B', 'Investigation design', 'Ethanoic acid', 'Limescale'],
    keywords: ['IV ethanoic acid concentration', 'DV mass CaCO₃', 'equipment', 'method', 'repeats', 'safety precautions'],
    feedbackHit: 'Well-designed experiment with clear IV/DV/CVs, appropriate equipment, logical method with repeats, relevant measurements, and safety precautions.',
    feedbackMiss: 'A Criterion B design must state: IV (ethanoic acid concentration), DV (mass remaining or time), CVs; list equipment; give a step-by-step method with ≥3 concentrations and ≥3 trials; describe measurements; include safety (goggles, gloves).',
  },

  // ── Q7 — Plastics for soap packaging ────────────────────────────────────────

  q7_a: { type: 'mcq', correct: 1 } as MCQEntry,

  q7_: {
    marks: 16,
    exemplar: 'Criterion D evaluate rubric (max 16 marks):\n\nProperties justified (max 3):\n• 1: states one property (e.g. waterproof, durable, flexible, lightweight)\n• 2: one property with justification OR two properties\n• 3: two properties with justification for both\n(Do NOT accept "stretchy" or "cheap to produce" as properties.)\n\nSuitability comparison (max 3):\n• 1: comparison of ≥2 types\n• 2: comparison of all three OR ≥2 with further support\n• 3: all three with further support for at least one\n(Compare biodegradability or recyclability; NOT physical/environmental/economic impacts.)\n\nEconomic impacts (max 4):\n• 1: impact of one plastic type\n• 2: impacts of two types with support for ≥1\n• 3: impacts of all three with support for ≥2\n• 4: impacts of all three with support for all\n\nEnvironmental impacts (max 4):\n• 1: impact of one plastic type\n• 2: impacts of two types with support for ≥1\n• 3: impacts of all three with support for ≥2\n• 4: impacts of all three with support for all\n\nConclusion / appraisal (max 2):\n• 1: a choice is made\n• 2: choice is justified using factors discussed above',
    keyConcepts: ['Criterion D', 'Evaluate', 'Plastics', 'Sustainability'],
    keywords: ['crude oil', 'plant-based', 'biodegradable', 'economic', 'environmental', 'waterproof', 'recyclable'],
    feedbackHit: 'Strong evaluation with justified properties, full comparison, economic and environmental analysis of all three plastic types, and a reasoned final choice.',
    feedbackMiss: 'Cover all four areas: (1) justify ≥2 physical properties needed; (2) compare all 3 plastics for suitability (biodegradability/recyclability); (3) economic impacts of each type; (4) environmental impacts of each; (5) make a justified choice.',
  },

  // ── Q8 — Soap types, production, social impacts ──────────────────────────────

  q8_: {
    marks: 7,
    exemplar: 'Production comparison rubric (max 4):\n• 1: identifies one production aspect of one soap type\n• 2: compares one production aspect between recycled-plastic soap and one other\n• 3: compares two production aspects between recycled-plastic soap and one other type\n• 4: compares two aspects with further justification\n(Examples: recycled plastic uses waste plastic as raw material vs crude oil / animal fat; recycled plastic soap needs additives for antimicrobial properties; crude oil soap has lower cost; recycled plastic processes may reduce plastic pollution.)\n\nSocial impacts rubric (max 3):\n• 1: identifies one social impact\n• 2: identifies two social impacts\n• 3: two social impacts with further justification\n(Examples: crude oil soap is cheapest — cost may determine choice; natural soap has no additives — suits allergy sufferers; recycled plastic soap has unknown toxicity — concern for children/sensitive skin; religious groups/vegans may avoid animal-fat soap; lower crude oil demand linked to fewer extraction impacts on society.)',
    keyConcepts: ['Criterion D', 'Discuss', 'Soap production', 'Social impacts'],
    keywords: ['production comparison', 'recycled plastic', 'crude oil', 'social impacts', 'cost', 'toxicity', 'allergy risk'],
    feedbackHit: 'Clear comparison of production processes and two justified social impacts.',
    feedbackMiss: 'Compare production: how is soap from recycled plastic made vs one other type? Then state two issues people consider (cost, toxicity, allergy risk, availability, ethical/environmental concerns).',
  },
}
