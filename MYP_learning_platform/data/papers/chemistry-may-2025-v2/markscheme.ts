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

  // ── Q1 — Stained-glass pigments / periodic table / moles ───────────────────

  q1_a: {
    marks: 2,
    exemplar: 'Oxygen (O) is present in all three pigments (CoAl₂O₄, Cr₂O₃, Cu₂O). Group 16 (accept Group 6), Period 2.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['oxygen', 'Group 16', 'Period 2', 'element identification'],
    feedbackHit: 'Correct — oxygen is the element common to all three pigments; it is in Group 16, Period 2.',
    feedbackMiss: 'Look for the element that appears in CoAl₂O₄, Cr₂O₃ AND Cu₂O — oxygen (O) is present in all three. On the periodic table, O is in Group 16 (or 6), Period 2.',
  },

  q1_b: {
    marks: 3,
    exemplar: 'M(Cr₂O₃) = (52 × 2) + (16 × 3) = 104 + 48 = 152 g mol⁻¹.\nn = m/M = 38/152 = 0.25 mol (2 s.f.).\n(ECF from an incorrect molar mass if working is shown.)',
    keyConcepts: ['Molar mass', 'Moles calculation'],
    keywords: ['Cr₂O₃', 'molar mass 152', 'n = m/M', '0.25 mol'],
    feedbackHit: 'Well done — correct molar mass (152) and division gives 0.25 mol to 2 s.f.',
    feedbackMiss: 'Calculate the molar mass: M = 2(52) + 3(16) = 152 g mol⁻¹. Then n = 38 ÷ 152 = 0.25 mol.',
  },

  q1_c: { type: 'mcq', correct: 2 } as MCQEntry,

  // ── Q2 — Smart window / vanadium(IV) oxide ─────────────────────────────────

  q2_a: { type: 'mcq', correct: 0 } as MCQEntry,

  q2_b: {
    marks: 1,
    exemplar: 'Reversible (reaction / change).',
    keyConcepts: ['Reversible reactions', 'Chemical equilibrium'],
    keywords: ['reversible', 'equilibrium', 'colour change returns'],
    feedbackHit: 'Correct — the colour change is reversible; the film returns to its original pale state.',
    feedbackMiss: 'The film returns to its original pale state as it cools, meaning the process can go backwards — this is described as reversible.',
  },

  q2_c: {
    marks: 1,
    exemplar: 'VO₂ (correct subscript must be seen).',
    keyConcepts: ['Ionic formulae', 'Vanadium compounds'],
    keywords: ['VO₂', 'vanadium(IV) oxide', 'formula'],
    feedbackHit: 'Correct formula: VO₂.',
    feedbackMiss: 'Vanadium(IV) means V⁴⁺; oxide is O²⁻. To balance charges you need two O²⁻, so the formula is VO₂.',
  },

  q2_d: {
    marks: 3,
    exemplar: 'Room temperature → Pale; Under a hot mug → Darker; In a refrigerator → Pale.',
    keyConcepts: ['Reversible colour change', 'VO₂ thermochromism'],
    keywords: ['pale at room temperature', 'darker when hot', 'pale when cold', 'VO₂ colour'],
    feedbackHit: 'Correct — the VO₂ film is pale at room/cold temperatures and turns darker when heated.',
    feedbackMiss: 'VO₂ changes shade with temperature: it is pale when cool (room temp or fridge) and turns darker when heated (under a hot mug).',
    blankAnswers: ['Pale', 'Darker', 'Pale'],
  },

  q2_e: { type: 'mcq', correct: 0 } as MCQEntry,

  // ── Q3 — Rescue flares, noble gases, isotopes, atmosphere ──────────────────

  q3_a: {
    marks: 1,
    exemplar: 'The material has changed as the beacon will last longer / is safer (no explosive charge, does not rust) OR because it is reusable / more energy-efficient / needs less maintenance. (WTTE)',
    keyConcepts: ['Reflecting on impacts of science', 'Materials science'],
    keywords: ['lasts longer', 'safer', 'reusable', 'energy efficient'],
    feedbackHit: 'Correct — any valid suggestion about durability, safety, reusability, or efficiency.',
    feedbackMiss: 'Think about why beacon materials change: modern electronic/LED beacons last longer, are safer (no explosive charge), do not rust, and are more energy-efficient than iron-mortar rockets.',
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
    exemplar: 'Electrons: ³⁶Ar = 18; ⁴⁰Ar = 18 (same as proton number for a neutral atom).\nNeutrons: ³⁶Ar = 36 − 18 = 18; ⁴⁰Ar = 40 − 18 = 22.',
    keyConcepts: ['Atomic structure', 'Isotopes'],
    keywords: ['electrons = protons', 'neutrons = mass − protons', '³⁶Ar: 18e, 18n', '⁴⁰Ar: 18e, 22n'],
    feedbackHit: 'Correct — electrons equal protons (18 each); neutrons = mass number − proton number.',
    feedbackMiss: 'For a neutral atom, electrons = protons = 18. Neutrons = mass number − proton number: ³⁶Ar has 36 − 18 = 18 neutrons; ⁴⁰Ar has 40 − 18 = 22 neutrons.',
    blankAnswers: ['18', '18', '18', '22'],
  },

  q3_e: {
    marks: 1,
    exemplar: 'Noble gases have full / complete outer electron shells (so they do not react). Accept: stable electronic configuration / full octet.',
    keyConcepts: ['Noble gases', 'Electronic configuration'],
    keywords: ['full outer shell', 'stable', 'do not react', 'complete octet'],
    feedbackHit: 'Correct — noble gases have full outer shells and are unreactive.',
    feedbackMiss: 'Argon is unreactive because its outer electron shell is full — there is no tendency to gain or lose electrons to start a reaction.',
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
    exemplar: 'Exosphere. This layer has the highest temperature (from the temperature–height profile), so particles have the highest kinetic energy. (Accept "top of the thermosphere" but NOT "thermosphere" alone.)',
    keyConcepts: ['Atmospheric layers', 'Kinetic energy and temperature'],
    keywords: ['exosphere', 'highest temperature', 'kinetic energy', 'atmosphere layers'],
    feedbackHit: 'Correct — the exosphere has the highest temperature, so particles have the highest kinetic energy.',
    feedbackMiss: 'Higher temperature means higher average kinetic energy. From the temperature–height profile, the highest layer (exosphere) has the highest temperature — particles there have the most kinetic energy.',
  },

  q3_i: {
    marks: 2,
    exemplar: 'Thermosphere. (Because) this is where the most oxygen is found (60% from the composition table).',
    keyConcepts: ['Atmospheric composition', 'Oxygen in atmosphere'],
    keywords: ['thermosphere', 'most oxygen', 'composition table', 'solar flares', 'green light'],
    feedbackHit: 'Correct — the thermosphere has the highest proportion of oxygen, making it the most likely layer for green auroral light.',
    feedbackMiss: 'From the composition table, oxygen content is highest in the thermosphere (60%). Since the green light comes from energised oxygen, that is the expected location.',
  },

  // ── Q4 — Boiler-scale hardness / washing-soda titration ────────────────────

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
    exemplar: 'Sample A → Temporary hard (solution volume reduced from 20.0 to 10.0 cm³ after boiling — temporary hardness is removed by boiling).\nSample C → Permanent hard (solution volume unchanged at 25.0 cm³ after boiling — permanent hardness is not removed by boiling).\nSample E → Mixture of permanent and temporary hard (solution volume slightly reduced from 13.0 to 8.0 cm³ — some hardness removed by boiling, some remains).\n(2 marks for correct placements; up to 3 marks for justifications, 1 per sample.)',
    keyConcepts: ['Hard water types', 'Temporary and permanent hardness'],
    keywords: ['temporary hard', 'permanent hard', 'mixture', 'boiling removes', 'volume unchanged'],
    feedbackHit: 'Correct classifications and justifications using the change in titration volume after boiling.',
    feedbackMiss: 'Temporary hardness is removed by boiling (volume decreases); permanent hardness is unaffected (volume stays the same); a mixture shows a partial decrease. A: 20→10 (temporary); C: 25→25 (permanent); E: 13→8 (mixture).',
  },

  q4_d: {
    marks: 2,
    exemplar: 'If the concentration of dissolved (sulphate) salts increases, then the permanent hardness will increase. (Because Ca²⁺/Mg²⁺ ions from sulphates contribute to permanent hardness.)',
    keyConcepts: ['Hypothesis formulation', 'Permanent hardness'],
    keywords: ['if-then-because', 'dissolved sulphate increases', 'permanent hardness increases', 'Ca²⁺ Mg²⁺ sulphate'],
    feedbackHit: 'Correct hypothesis linking dissolved sulphate concentration to permanent hardness.',
    feedbackMiss: 'A hypothesis links IV to DV: "If the concentration of dissolved sulphate salts increases, then permanent hardness increases, because Ca²⁺ and Mg²⁺ ions from sulphates cause permanent hardness." The data support this: C (110 mg dm⁻³) has the most permanent hardness.',
  },

  q4_e: {
    marks: 4,
    exemplar: 'Graph: Permanent hardness (mg dm⁻³) on x-axis; pH on y-axis. Even increments on both axes. At least 3 data points plotted correctly. (Data points: 15/6.6, 48/7.4, 95/7.6, 160/7.9, 290/8.3.)',
    keyConcepts: ['Graph plotting', 'Data presentation'],
    keywords: ['hardness on x-axis', 'pH on y-axis', 'even scale', 'points plotted', 'axes labelled'],
    feedbackHit: 'Correct graph with appropriate axis labels, even scale, and correctly plotted points.',
    feedbackMiss: 'Plot hardness (mg dm⁻³) on the x-axis and pH on the y-axis with even increments. Plot the 5 data pairs: (15, 6.6), (48, 7.4), (95, 7.6), (160, 7.9), (290, 8.3).',
  },

  q4_f: {
    marks: 2,
    exemplar: 'The conclusion is not valid / invalid. (No mark for stating validity without reason.) Hard water is not acidic; it is basic / an alkali. The pH of every sample is above 7. (ORA.)',
    keyConcepts: ['pH scale', 'Validity of conclusions'],
    keywords: ['invalid', 'hard water not acidic', 'pH above 7', 'basic alkaline'],
    feedbackHit: 'Correct — the conclusion is invalid because pH > 7 means hard water is basic, not acidic.',
    feedbackMiss: 'Look at the pH data: all hard water samples have pH above 7, meaning they are basic (alkaline), not acidic. The conclusion is invalid.',
  },

  // ── Q5 — Seashell-dissolving investigation ─────────────────────────────────

  q5_a: { type: 'mcq', correct: 0 } as MCQEntry,

  q5_b: {
    marks: 1,
    exemplar: 'How does the type of acid affect how quickly the seashell (calcium carbonate) dissolves? (Or: How does the type of acid affect the change in mass of shell dissolved? Must link IV and DV; do not accept a non-measurable DV.)',
    keyConcepts: ['Research question', 'Investigation design'],
    keywords: ['type of acid', 'rate of shell dissolving', 'research question', 'IV and DV linked'],
    feedbackHit: 'Correct — research question links the type of acid (IV) to a measurable DV (time or mass).',
    feedbackMiss: 'A research question must name the IV (type of acid) and a measurable DV (time to dissolve the shell OR change in mass). E.g. "How does the type of acid affect the mass of seashell dissolved?"',
  },

  q5_c: {
    marks: 4,
    exemplar: 'Independent variable (IV): type of acid.\nDependent variable (DV): time (for the shell to dissolve) OR mass (of shell after treatment). Do NOT accept "amount".\nAny two controlled variables (max 2): volume of acid / concentration of acid / temperature / mass or size of shell piece / surface area.',
    keyConcepts: ['Variables', 'Fair test'],
    keywords: ['IV type of acid', 'DV time or mass', 'CVs concentration volume temperature'],
    feedbackHit: 'Correct IV, DV, and two valid CVs stated.',
    feedbackMiss: 'IV = what you change (type of acid). DV = what you measure (time or mass dissolved). CVs = what you keep the same (e.g. volume of acid, concentration, temperature, mass of shell).',
  },

  q5_d: {
    marks: 2,
    exemplar: 'Any two from: include the unit of mass / give values to consistent decimal places / show a change-in-mass column / add a title to the table / give the concentration of the acidified seawater.',
    keyConcepts: ['Data presentation', 'Scientific tables'],
    keywords: ['include units', 'consistent decimal places', 'change in mass', 'add title', 'concentration of seawater'],
    feedbackHit: 'Two valid improvements to data presentation identified.',
    feedbackMiss: 'Think about what makes a good data table: proper column headings with units, consistent decimal places, a title, and clear identification of all reagents.',
  },

  q5_e: {
    marks: 2,
    exemplar: 'Hydrochloric acid. The mass changed the most (8 − 3.5 = 4.5 g dissolved, the greatest change in mass of any acid).',
    keyConcepts: ['Data analysis', 'Conclusion from data'],
    keywords: ['hydrochloric acid', '4.5 g mass change', 'most effective', 'greatest change'],
    feedbackHit: 'Correct — hydrochloric acid dissolved the most shell (4.5 g).',
    feedbackMiss: 'Calculate mass dissolved for each acid: HCl = 4.5 g; Ethanoic = 2.6 g; Sulfuric = 1.8 g; Carbonic = 0.8 g; Acid seawater = 0.4 g. HCl dissolved the most.',
  },

  q5_f: {
    marks: 1,
    exemplar: 'Different masses / sizes of shell pieces were used.',
    keyConcepts: ['Experimental validity', 'Controlled variables'],
    keywords: ['different shell masses', 'different shell sizes', 'unequal starting mass'],
    feedbackHit: 'Correct — different shell pieces had different starting masses.',
    feedbackMiss: 'The shell pieces were broken from different shells, so they had different starting masses or sizes.',
  },

  q5_g: {
    marks: 1,
    exemplar: 'The data is not valid because there is only one trial — there should have been more trials to calculate an average and to identify and exclude outliers.',
    keyConcepts: ['Validity', 'Reliability', 'Repeats'],
    keywords: ['one trial', 'not valid', 'more repeats', 'cannot calculate average', 'outliers'],
    feedbackHit: 'Correct — one trial means data validity and reliability cannot be confirmed.',
    feedbackMiss: 'With only one trial, you cannot calculate an average or identify outliers, making the data unreliable and less valid.',
  },

  // ── Q6 — Acetic acid / marble experiment design ────────────────────────────

  q6_a: {
    marks: 1,
    exemplar: 'Any one from: HCl is not a common household chemical / acetic acid is safer (less hazardous / corrosive) / acetic acid (vinegar) better models the weak acids in acid rain / acetic acid is a weak acid (HCl is a strong acid) / easier or less harmful to dispose of acetic acid. (Do NOT accept vague references to "green chemistry" since this is in the question stem.)',
    keyConcepts: ['Green chemistry', 'Acid properties'],
    keywords: ['household vinegar', 'acetic acid safer', 'models acid rain', 'weak acid', 'less hazardous'],
    feedbackHit: 'Valid reason for choosing acetic acid over HCl.',
    feedbackMiss: 'Consider: HCl is a strong, corrosive acid not found in the home; acetic acid (vinegar) is weaker, safer, and better models the weak acids in acid rain.',
  },

  q6_: {
    marks: 18,
    exemplar: 'Criterion B design rubric (max 18 marks):\n\nVariables (max 4):\n• 1 mk: correctly states IV only or DV only\n• 2 mk: IV and DV\n• 3 mk: IV, DV and one CV\n• 4 mk: IV (acetic acid concentration), DV (mass of marble remaining or time to dissolve), two CVs (mass of marble, volume of acid, temperature, surface area / chip size)\n\nEquipment (max 4):\n• Must be connected to the IV and DV (e.g. balance for mass, measuring cylinder/burette/pipette for volume, stopwatch for time)\n\nMethod (max 4):\n• Steps in a logical order, linked to IV and DV\n• Must include at least 3 different concentrations and at least 3 trials per concentration\n• A method that does not include how to vary the IV is max 3 marks\n\nMeasurements (max 3):\n• At least 3 different values of IV\n• Measurements linked to DV stated (e.g. measure marble mass before and after; record time until no more fizzing)\n• 3 trials per IV value for averaging\n\nSafety (max 3):\n• Relevant justified safety precaution(s) e.g. goggles (acid splashes), gloves (irritant), work in a ventilated area (CO₂ released)',
    keyConcepts: ['Criterion B', 'Investigation design', 'Acetic acid', 'Marble'],
    keywords: ['IV acetic acid concentration', 'DV mass marble', 'equipment', 'method', 'repeats', 'safety precautions'],
    feedbackHit: 'Well-designed experiment with clear IV/DV/CVs, appropriate equipment, logical method with repeats, relevant measurements, and safety precautions.',
    feedbackMiss: 'A Criterion B design must state: IV (acetic acid concentration), DV (mass remaining or time), CVs; list equipment; give a step-by-step method with ≥3 concentrations and ≥3 trials; describe measurements; include safety (goggles, gloves).',
  },

  // ── Q7 — Plastics for food containers ──────────────────────────────────────

  q7_a: { type: 'mcq', correct: 1 } as MCQEntry,

  q7_: {
    marks: 16,
    exemplar: 'Criterion D evaluate rubric (max 16 marks):\n\nProperties justified (max 3):\n• 1: states one property (e.g. waterproof, heat-resistant, food-safe, durable)\n• 2: one property with justification OR two properties\n• 3: two properties with justification for both\n(Do NOT accept "stretchy" or "cheap to produce" as properties.)\n\nSuitability comparison (max 3):\n• 1: comparison of ≥2 types\n• 2: comparison of all three OR ≥2 with further support\n• 3: all three with further support for at least one\n(Compare biodegradability or recyclability; PP vs bagasse vs PLA.)\n\nEconomic impacts (max 4):\n• 1: impact of one plastic type\n• 2: impacts of two types with support for ≥1\n• 3: impacts of all three with support for ≥2\n• 4: impacts of all three with support for all\n\nEnvironmental impacts (max 4):\n• 1: impact of one plastic type\n• 2: impacts of two types with support for ≥1\n• 3: impacts of all three with support for ≥2\n• 4: impacts of all three with support for all\n\nConclusion / appraisal (max 2):\n• 1: a choice is made\n• 2: choice is justified using factors discussed above',
    keyConcepts: ['Criterion D', 'Evaluate', 'Plastics', 'Sustainability'],
    keywords: ['polypropylene PP', 'bagasse fibre', 'PLA', 'biodegradable', 'economic', 'environmental', 'heat-resistant', 'recyclable'],
    feedbackHit: 'Strong evaluation with justified properties, full comparison, economic and environmental analysis of all three materials, and a reasoned final choice.',
    feedbackMiss: 'Cover all four areas: (1) justify ≥2 physical properties needed (waterproof, heat-resistant, food-safe); (2) compare all 3 materials for suitability (biodegradability/recyclability); (3) economic impacts of each type; (4) environmental impacts of each; (5) make a justified choice.',
  },

  // ── Q8 — Detergent types, production, social impacts ───────────────────────

  q8_: {
    marks: 7,
    exemplar: 'Production comparison rubric (max 4):\n• 1: identifies one production aspect of one detergent type\n• 2: compares one production aspect between yeast detergent and one other type\n• 3: compares two production aspects between yeast detergent and one other type\n• 4: compares two aspects with further justification\n(Examples: yeast detergent is made by fermenting sugar with engineered yeast vs crude-oil detergent refined from petroleum / soap-based detergent made from animal or plant fat; yeast fermentation uses renewable sugar; crude-oil detergent is cheapest and cleans well in hard water.)\n\nSocial impacts rubric (max 3):\n• 1: identifies one social impact\n• 2: identifies two social impacts\n• 3: two social impacts with further justification\n(Examples: crude-oil detergent is cheapest — cost may determine choice; soap-based detergent forms scum in hard water — poor performance; some detergents contain additives that irritate skin — allergy concern; yeast detergent toxicity is unknown — caution for sensitive skin; some communities avoid animal-fat soaps for ethical/religious reasons.)',
    keyConcepts: ['Criterion D', 'Discuss', 'Detergent production', 'Social impacts'],
    keywords: ['production comparison', 'yeast detergent', 'crude oil detergent', 'soap-based detergent', 'social impacts', 'cost', 'toxicity', 'allergy risk'],
    feedbackHit: 'Clear comparison of production processes and two justified social impacts.',
    feedbackMiss: 'Compare production: how is yeast detergent made (fermenting sugar) vs one other type (crude-oil refining or fat-based soap)? Then state two issues people consider (cost, toxicity, performance in hard water, allergy risk, ethical concerns).',
  },
}
