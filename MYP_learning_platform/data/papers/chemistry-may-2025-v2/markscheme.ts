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

  // ── Q1 — Pottery minerals / periodic table / moles ──────────────────────────

  q1_a: {
    marks: 2,
    exemplar: 'Oxygen (O) is present in all three minerals (KAlSi₃O₈, Fe₂O₃, CaCO₃). Group 16 (accept Group 6), Period 2.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['oxygen', 'Group 16', 'Period 2', 'element identification'],
    feedbackHit: 'Correct — oxygen is the element common to all three minerals; it is in Group 16, Period 2.',
    feedbackMiss: 'Look for the element in KAlSi₃O₈, Fe₂O₃ AND CaCO₃ — oxygen (O) is present in all three. On the periodic table, O is in Group 16 (or 6), Period 2.',
  },

  q1_b: {
    marks: 3,
    exemplar: 'M(KAlSi₃O₈) = 39 + 27 + (28 × 3) + (16 × 8) = 39 + 27 + 84 + 128 = 278 g mol⁻¹.\nn = m/M = 55.6/278 = 0.20 mol (2 s.f.).\n(Do not award final mark for incorrect rounding; ECF from incorrect molar mass if working is shown.)',
    keyConcepts: ['Molar mass', 'Moles calculation'],
    keywords: ['KAlSi₃O₈', 'molar mass 278', 'n = m/M', '0.20 mol'],
    feedbackHit: 'Well done — correct molar mass (278 g mol⁻¹) and division gives exactly 0.20 mol to 2 s.f.',
    feedbackMiss: 'Calculate the molar mass: M = 39 + 27 + 3(28) + 8(16) = 278 g mol⁻¹. Then n = 55.6 ÷ 278 = 0.20 mol.',
  },

  q1_c: { type: 'mcq', correct: 2 } as MCQEntry,

  // ── Q2 — Thermochromism / CeI₃ ──────────────────────────────────────────────

  q2_a: { type: 'mcq', correct: 0 } as MCQEntry,

  q2_b: {
    marks: 1,
    exemplar: 'Reversible (reaction / change).',
    keyConcepts: ['Reversible reactions', 'Chemical equilibrium'],
    keywords: ['reversible', 'equilibrium', 'colour change returns'],
    feedbackHit: 'Correct — the colour change is reversible; the strip returns to its original state.',
    feedbackMiss: 'The thermochromic strip returns to its original colour when the temperature normalises — this means the process can go backwards, which is described as reversible.',
  },

  q2_c: {
    marks: 1,
    exemplar: 'CeI₃ (cerium has oxidation state +3; iodide is I⁻; formula is CeI₃).',
    keyConcepts: ['Ionic formulae', 'Cerium compounds'],
    keywords: ['CeI₃', 'cerium(III) iodide', 'formula'],
    feedbackHit: 'Correct formula: CeI₃.',
    feedbackMiss: 'Cerium(III) means Ce³⁺; iodide is I⁻. To balance charges: one Ce³⁺ requires three I⁻ → CeI₃.',
  },

  q2_d: {
    marks: 3,
    exemplar: 'In ice water (0 °C) → Orange; At room temperature (20 °C) → Yellow; In hot water (above 70 °C) → White.',
    keyConcepts: ['Thermochromism', 'CeI₃ colour changes'],
    keywords: ['orange at cold', 'yellow at room temperature', 'white when heated', 'CeI₃ colour'],
    feedbackHit: 'Correct — CeI₃ appears orange when cold, yellow at room temperature, and converts to near-colourless/white when heated above 70 °C.',
    feedbackMiss: 'CeI₃ colour varies with temperature: orange in ice water, yellow at room temperature (~20 °C), and converts to a white/colourless phase above 70 °C.',
    blankAnswers: ['Orange', 'Yellow', 'White'],
  },

  q2_e: { type: 'mcq', correct: 0 } as MCQEntry,

  // ── Q3 — LED street signs, noble gases, argon isotopes, atmosphere ───────────

  q3_a: {
    marks: 1,
    exemplar: 'The material has changed as the sign will last longer (e.g. LEDs do not rust like iron frameworks) OR because it is more energy-efficient / more appealing / lower maintenance cost. (WTTE)',
    keyConcepts: ['Reflecting on impacts of science', 'Materials science'],
    keywords: ['lasts longer', 'energy-efficient', 'no rust', 'lower maintenance'],
    feedbackHit: 'Correct — any valid suggestion about durability, energy efficiency, or reduced maintenance.',
    feedbackMiss: 'Think about why sign materials change: LEDs last longer, do not rust, or are more energy-efficient compared to iron-framed gas-discharge lamps.',
  },

  q3_b: {
    marks: 1,
    exemplar: 'FeO (correct formula must be seen; accept iron(II) oxide).',
    keyConcepts: ['Ionic formulae', 'Iron compounds'],
    keywords: ['FeO', 'iron(II) oxide', 'formula'],
    feedbackHit: 'Correct: FeO.',
    feedbackMiss: 'Iron(II) is Fe²⁺; oxide is O²⁻. The charges balance with one of each: FeO.',
  },

  q3_c: {
    marks: 2,
    exemplar: 'Oxidised: Iron (Fe) — it loses electrons / gains oxygen.\nReduced: Oxygen (O) — it gains electrons. (Accept element symbols.)',
    keyConcepts: ['Oxidation and reduction', 'Redox reactions'],
    keywords: ['oxidised: iron', 'reduced: oxygen', 'OIL RIG', 'electron transfer'],
    feedbackHit: 'Correct — iron is oxidised (gains oxygen / loses electrons) and oxygen is reduced (gains electrons).',
    feedbackMiss: 'In 2Fe + O₂ → 2FeO: iron gains oxygen so it is oxidised; oxygen gains electrons so it is reduced (OIL RIG).',
  },

  q3_d: {
    marks: 3,
    exemplar: 'Electrons: ³⁶Ar = 18; ³⁸Ar = 18 (same as proton number for a neutral atom).\nNeutrons: ³⁶Ar = 36 − 18 = 18; ³⁸Ar = 38 − 18 = 20.',
    keyConcepts: ['Atomic structure', 'Isotopes'],
    keywords: ['electrons = protons', 'neutrons = mass − protons', '³⁶Ar: 18e, 18n', '³⁸Ar: 18e, 20n'],
    feedbackHit: 'Correct — electrons equal protons (18 each); neutrons = mass number − proton number.',
    feedbackMiss: 'For a neutral atom, electrons = protons = 18. Neutrons = mass number − proton number: ³⁶Ar has 36 − 18 = 18 neutrons; ³⁸Ar has 38 − 18 = 20 neutrons.',
    blankAnswers: ['18', '18', '18', '20'],
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
    keywords: ['2,6', 'oxygen electronic configuration', '8 electrons'],
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
    feedbackMiss: 'From Diagram A (composition vs height), oxygen percentage is highest in the thermosphere. Since the green light comes from energised oxygen, that is the expected location.',
  },

  // ── Q4 — Hard water / soap titration ────────────────────────────────────────

  q4_a: {
    marks: 2,
    exemplar: '42.5 cm³ (final burette reading, correct to 1 decimal place). Award 2 marks if only "42.5 cm³" seen.',
    keyConcepts: ['Measurement', 'Burette reading'],
    keywords: ['42.5 cm³', 'burette', '1 decimal place', 'meniscus'],
    feedbackHit: 'Correct reading: 42.5 cm³.',
    feedbackMiss: 'Read the burette at the bottom of the meniscus and record to 1 decimal place. The reading shown is 42.5 cm³.',
  },

  q4_b: {
    marks: 2,
    exemplar: 'Sample B: 16.5 − 5.0 = 11.5 cm³.\nSample D: 42.5 − 22.0 = 20.5 cm³. (Award max 1 mark if decimal places not included. ECF from Q4a for D.)',
    keyConcepts: ['Data processing', 'Titration calculations'],
    keywords: ['11.5 cm³', '20.5 cm³', 'final − initial', 'volume calculation'],
    feedbackHit: 'Correct: B = 11.5 cm³; D = 20.5 cm³.',
    feedbackMiss: 'Volume = final reading − initial reading. B: 16.5 − 5.0 = 11.5 cm³; D: 42.5 − 22.0 = 20.5 cm³ (using ECF from Q4a).',
  },

  q4_c: {
    marks: 5,
    exemplar: 'Sample A → Temporary hard (volume reduced from 16.0 to 8.0 cm³ after boiling — exactly halved; temporary hardness is removed by boiling).\nSample C → Permanent hard (volume unchanged at 23.0 cm³ after boiling — permanent hardness is not removed by boiling).\nSample E → Mixture of permanent and temporary hard (volume reduced from 18.0 to 12.0 cm³ — some hardness removed by boiling, some remains).\n(2 marks for correct placements; up to 3 marks for justifications, 1 per sample.)',
    keyConcepts: ['Hard water types', 'Temporary and permanent hardness'],
    keywords: ['temporary hard', 'permanent hard', 'mixture', 'boiling removes', 'volume unchanged'],
    feedbackHit: 'Correct classifications and justifications using the change in volume after boiling.',
    feedbackMiss: 'Temporary hardness is removed by boiling (volume decreases); permanent hardness is unaffected (volume stays same); a mixture shows partial decrease. A: 16.0→8.0 (temporary); C: 23.0→23.0 (permanent); E: 18.0→12.0 (mixture).',
  },

  q4_d: {
    marks: 2,
    exemplar: 'If the mass / concentration of (sulphate) salts or ions increases, then the permanent hardness will increase. (Because Ca²⁺/Mg²⁺ ions from sulphates contribute to permanent hardness.)',
    keyConcepts: ['Hypothesis formulation', 'Permanent hardness'],
    keywords: ['if-then-because', 'dissolved salts increase', 'permanent hardness increases', 'Ca²⁺ Mg²⁺ sulphate'],
    feedbackHit: 'Correct hypothesis linking dissolved salt concentration to permanent hardness.',
    feedbackMiss: 'A hypothesis links IV to DV: "If the concentration of dissolved (sulphate) salts increases, then permanent hardness increases, because Ca²⁺ and Mg²⁺ ions from sulphates cause permanent hardness."',
  },

  q4_e: {
    marks: 4,
    exemplar: 'Graph: Hardness (mg dm⁻³) on x-axis; pH on y-axis. Even increments on both axes. At least 3 data points plotted correctly. (Data points: 9/6.5, 38/7.2, 85/7.6, 165/7.9, 305/8.2.)',
    keyConcepts: ['Graph plotting', 'Data presentation'],
    keywords: ['hardness on x-axis', 'pH on y-axis', 'even scale', 'points plotted', 'axes labelled'],
    feedbackHit: 'Correct graph with appropriate axis labels, even scale, and correctly plotted points.',
    feedbackMiss: 'Plot hardness (mg dm⁻³) on the x-axis and pH on the y-axis with even increments. Plot the 5 data pairs: (9, 6.5), (38, 7.2), (85, 7.6), (165, 7.9), (305, 8.2).',
  },

  q4_f: {
    marks: 2,
    exemplar: 'The conclusion is not valid / invalid. Hard water is not acidic; it is basic / an alkali. The pH of hard water is above 7. (ORA — accept "the data shows pH is above 7 so cannot be acidic".)',
    keyConcepts: ['pH scale', 'Validity of conclusions'],
    keywords: ['invalid', 'hard water not acidic', 'pH above 7', 'basic alkaline'],
    feedbackHit: 'Correct — the conclusion is invalid because pH > 7 means hard water is basic, not acidic.',
    feedbackMiss: 'Look at the pH data: all hard water samples have pH above 7, meaning they are basic (alkaline), not acidic. The students\' conclusion is invalid.',
  },

  // ── Q5 — Limescale removal investigation (sulfamic, HCl, acetic, citric) ─────

  q5_a: { type: 'mcq', correct: 0 } as MCQEntry,

  q5_b: {
    marks: 1,
    exemplar: 'How does the type of acid affect how quickly the limescale or calcium carbonate is removed? (Must link IV and DV; do not accept non-measurable DV.)',
    keyConcepts: ['Research question', 'Investigation design'],
    keywords: ['type of acid', 'rate of limescale removal', 'research question', 'IV and DV linked'],
    feedbackHit: 'Correct — research question links the type of acid (IV) to a measurable DV.',
    feedbackMiss: 'A research question must name the IV (type of acid) and a measurable DV (time to dissolve OR change in mass). E.g. "How does the type of acid affect the time required to remove a given mass of limescale?"',
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
    exemplar: 'Any two from: include the unit of mass / give values to consistent decimal places / show the change in mass column / add a title to the table / clarify what "lemon juice" means in chemical terms.',
    keyConcepts: ['Data presentation', 'Scientific tables'],
    keywords: ['include units', 'consistent decimal places', 'change in mass', 'add title', 'chemical name'],
    feedbackHit: 'Two valid improvements to data presentation identified.',
    feedbackMiss: 'Think about what makes a good data table: proper column headings with units, consistent decimal places, a title, and clear identification of all reagents.',
  },

  q5_e: {
    marks: 2,
    exemplar: 'Sulfamic acid. The mass changed the most (28.0 − 22.9 = 5.1 g removed, the greatest change in mass of any acid tested).',
    keyConcepts: ['Data analysis', 'Conclusion from data'],
    keywords: ['sulfamic acid', '5.1 g mass change', 'most effective', 'greatest change'],
    feedbackHit: 'Correct — sulfamic acid removed the most mass (5.1 g).',
    feedbackMiss: 'Calculate mass removed for each acid: Sulfamic = 5.1 g; HCl = 3.6 g; Acetic = 2.2 g; Citric = 1.9 g; Lemon juice = 3.0 g. Sulfamic acid removed the most mass.',
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

  // ── Q6 — Lactic acid concentration experiment design ─────────────────────────

  q6_a: {
    marks: 1,
    exemplar: 'Any one from: lactic acid is food-safe / found naturally in dairy products / produced by fermentation / HCl is not food-grade / lactic acid is less hazardous / weaker acid / easier or safer to dispose of in a food environment.',
    keyConcepts: ['Green chemistry', 'Acid properties'],
    keywords: ['food-safe', 'dairy/fermentation', 'weaker acid', 'less hazardous', 'HCl not food-grade'],
    feedbackHit: 'Valid reason for choosing lactic acid over HCl.',
    feedbackMiss: 'Consider: HCl is a strong, corrosive acid not suitable for a food environment; lactic acid is naturally produced, food-grade, weaker, and easier to dispose of safely.',
  },

  q6_: {
    marks: 18,
    exemplar: 'Criterion B design rubric (max 18 marks):\n\nVariables (max 4):\n• 1 mk: correctly states IV only or DV only\n• 2 mk: IV and DV\n• 3 mk: IV, DV and one CV\n• 4 mk: IV (lactic acid concentration), DV (mass of CaCO₃ remaining or time to dissolve), two CVs (mass of CaCO₃, volume of acid, temperature, surface area)\n\nEquipment (max 4):\n• Must be connected to the IV and DV (e.g. balance for mass, measuring cylinder/burette for volume, stopwatch for time; pipette acceptable)\n\nMethod (max 4):\n• Steps must be in a logical order, linked to IV and DV\n• Must include at least 3 different concentrations and at least 3 trials per concentration\n• A method that does not include how to vary IV is max 3 marks\n\nMeasurements (max 3):\n• At least 3 different values of IV\n• Measurements linked to DV stated\n• 3 trials per IV value for averaging\n\nSafety (max 3):\n• Relevant justified safety precaution(s) e.g. goggles (acid splashes), gloves (irritant), ventilation (CO₂ released)',
    keyConcepts: ['Criterion B', 'Investigation design', 'Lactic acid', 'Limescale'],
    keywords: ['IV lactic acid concentration', 'DV mass CaCO₃', 'equipment', 'method', 'repeats', 'safety precautions'],
    feedbackHit: 'Well-designed experiment with clear IV/DV/CVs, appropriate equipment, logical method with repeats, relevant measurements, and safety precautions.',
    feedbackMiss: 'A Criterion B design must state: IV (lactic acid concentration), DV (mass remaining or time), CVs; list equipment; give a step-by-step method with ≥3 concentrations and ≥3 trials; describe measurements; include safety (goggles, gloves).',
  },

  // ── Q7 — Plastic packaging for hand sanitiser ────────────────────────────────

  q7_a: { type: 'mcq', correct: 3 } as MCQEntry,

  q7_: {
    marks: 16,
    exemplar: 'Criterion D evaluate rubric (max 16 marks):\n\nProperties justified (max 3):\n• 1: states one property (e.g. waterproof, durable, flexible, alcohol-resistant, lightweight)\n• 2: one property with justification OR two properties\n• 3: two properties with justification for both\n(Do NOT accept "stretchy" or "cheap to produce" as properties.)\n\nSuitability comparison (max 3):\n• 1: comparison of ≥2 types\n• 2: comparison of all three OR ≥2 with further support\n• 3: all three with further support for at least one\n(Compare biodegradability or recyclability; NOT physical/environmental/economic impacts.)\n\nEconomic impacts (max 4):\n• 1: impact of one plastic type\n• 2: impacts of two types with support for ≥1\n• 3: impacts of all three with support for ≥2\n• 4: impacts of all three with support for all\n\nEnvironmental impacts (max 4):\n• 1: impact of one plastic type\n• 2: impacts of two types with support for ≥1\n• 3: impacts of all three with support for ≥2\n• 4: impacts of all three with support for all\n\nConclusion / appraisal (max 2):\n• 1: a choice is made\n• 2: choice is justified using factors discussed above',
    keyConcepts: ['Criterion D', 'Evaluate', 'Plastics', 'Sustainability'],
    keywords: ['crude oil', 'plant-based', 'biodegradable', 'economic', 'environmental', 'alcohol-resistant', 'recyclable', 'hand sanitiser'],
    feedbackHit: 'Strong evaluation with justified properties, full comparison, economic and environmental analysis of all three plastic types, and a reasoned final choice.',
    feedbackMiss: 'Cover all four areas: (1) justify ≥2 physical properties needed (including alcohol resistance for hand sanitiser); (2) compare all 3 plastics for suitability; (3) economic impacts; (4) environmental impacts; (5) make a justified choice.',
  },

  // ── Q8 — Cleaning product types, production, social impacts ──────────────────

  q8_: {
    marks: 7,
    exemplar: 'Production comparison rubric (max 4):\n• 1: identifies one production aspect of one detergent type\n• 2: compares one production aspect between bio-ethanol detergent and one other\n• 3: compares two production aspects between bio-ethanol detergent and one other type\n• 4: compares two aspects with further justification\n(Examples: bio-ethanol detergent uses fermented agricultural waste vs crude oil (petrochemicals) / vegetable oils; bio-ethanol detergent needs additives for cleaning properties; petroleum-based is cheapest; bio-ethanol process may reduce agricultural waste.)\n\nSocial impacts rubric (max 3):\n• 1: identifies one social impact\n• 2: identifies two social impacts\n• 3: two social impacts with further justification\n(Examples: petroleum-based detergent is cheapest — cost may determine choice for lower-income households; plant-based detergent is biodegradable — better for environmentally conscious consumers; bio-ethanol detergent has unknown long-term safety; allergen risk from fermentation by-products; agricultural waste re-use may support rural economies.)',
    keyConcepts: ['Criterion D', 'Discuss', 'Detergent production', 'Social impacts'],
    keywords: ['production comparison', 'bio-ethanol', 'petroleum', 'social impacts', 'cost', 'allergy risk', 'agricultural waste'],
    feedbackHit: 'Clear comparison of production processes and two justified social impacts.',
    feedbackMiss: 'Compare production: how is bio-ethanol detergent made vs one other type? Then state two issues people consider (cost, allergy risk, availability, environmental ethics, agricultural impact).',
  },
}
