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

  // ── Q1 — Watchmaking gemstones / periodic table / moles ─────────────────────

  q1_a: {
    marks: 2,
    exemplar: 'Oxygen (O) is present in all three materials (Al₂O₃, MgAl₂O₄, SiO₂). Group 16 (accept Group 6), Period 2.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['oxygen', 'Group 16', 'Period 2', 'element identification'],
    feedbackHit: 'Correct — oxygen is the element common to all three materials; it is in Group 16, Period 2.',
    feedbackMiss: 'Look for the element that appears in Al₂O₃, MgAl₂O₄ AND SiO₂ — oxygen (O) is present in all three. On the periodic table, O is in Group 16 (or 6), Period 2.',
  },

  q1_b: {
    marks: 3,
    exemplar: 'M(MgAl₂O₄) = 24 + (27 × 2) + (16 × 4) = 24 + 54 + 64 = 142 g mol⁻¹.\nn = m/M = 28.4/142 = 0.20 mol (2 s.f.).\n(Do not award final mark for incorrect rounding; ECF from incorrect molar mass if working is shown.)',
    keyConcepts: ['Molar mass', 'Moles calculation'],
    keywords: ['MgAl₂O₄', 'molar mass 142', 'n = m/M', '0.20 mol'],
    feedbackHit: 'Well done — correct molar mass (142 g mol⁻¹) and division gives exactly 0.20 mol to 2 s.f.',
    feedbackMiss: 'Calculate the molar mass: M = 24 + 2(27) + 4(16) = 142 g mol⁻¹. Then n = 28.4 ÷ 142 = 0.20 mol.',
  },

  q1_c: { type: 'mcq', correct: 2 } as MCQEntry,

  // ── Q2 — Thermochromism / BiI₃ ──────────────────────────────────────────────

  q2_a: { type: 'mcq', correct: 0 } as MCQEntry,

  q2_b: {
    marks: 1,
    exemplar: 'Reversible (reaction / change).',
    keyConcepts: ['Reversible reactions', 'Chemical equilibrium'],
    keywords: ['reversible', 'equilibrium', 'colour change returns'],
    feedbackHit: 'Correct — the colour change is reversible; the handle returns to its original state.',
    feedbackMiss: 'The spoon handle returns to its original colour when the temperature drops, meaning the process can go backwards — this is described as reversible.',
  },

  q2_c: {
    marks: 1,
    exemplar: 'BiI₃ (bismuth has oxidation state +3; iodide is I⁻; formula is BiI₃).',
    keyConcepts: ['Ionic formulae', 'Bismuth compounds'],
    keywords: ['BiI₃', 'bismuth(III) iodide', 'formula'],
    feedbackHit: 'Correct formula: BiI₃.',
    feedbackMiss: 'Bismuth(III) means Bi³⁺; iodide is I⁻. To balance charges: one Bi³⁺ requires three I⁻ → BiI₃.',
  },

  q2_d: {
    marks: 3,
    exemplar: 'In ice water (0 °C) → Brown; At room temperature (20 °C) → Orange; In hot water (above 60 °C) → Yellow.',
    keyConcepts: ['Thermochromism', 'BiI₃ colour changes'],
    keywords: ['brown at very cold', 'orange at room temperature', 'yellow when heated', 'BiI₃ colour'],
    feedbackHit: 'Correct — BiI₃ appears brown when very cold, orange at room temperature, and yellow when heated.',
    feedbackMiss: 'BiI₃ colour varies with temperature: brown below 0 °C, orange at room temperature (~20 °C), and converts to a yellow phase above 60 °C.',
    blankAnswers: ['Brown', 'Orange', 'Yellow'],
  },

  q2_e: { type: 'mcq', correct: 0 } as MCQEntry,

  // ── Q3 — LED billboards, noble gases, xenon isotopes, atmosphere ─────────────

  q3_a: {
    marks: 1,
    exemplar: 'The material has changed as the sign will last longer (e.g. LEDs do not corrode like aluminium frameworks) OR because it is more energy-efficient / more appealing / easier to maintain. (WTTE)',
    keyConcepts: ['Reflecting on impacts of science', 'Materials science'],
    keywords: ['lasts longer', 'energy-efficient', 'more appealing', 'corrosion prevention'],
    feedbackHit: 'Correct — any valid suggestion about durability, energy efficiency, or aesthetics.',
    feedbackMiss: 'Think about why sign materials change: LEDs last longer, do not corrode, or are more energy-efficient compared to aluminium-framed signs.',
  },

  q3_b: {
    marks: 1,
    exemplar: 'Al₂O₃ (correct subscripts must be seen).',
    keyConcepts: ['Ionic formulae', 'Aluminium compounds'],
    keywords: ['Al₂O₃', 'aluminium oxide', 'formula'],
    feedbackHit: 'Correct: Al₂O₃.',
    feedbackMiss: 'Aluminium is Al³⁺; oxide is O²⁻. To balance charges: 2 × Al³⁺ and 3 × O²⁻ → Al₂O₃.',
  },

  q3_c: {
    marks: 2,
    exemplar: 'Oxidised: Aluminium (Al) — it loses electrons / gains oxygen.\nReduced: Oxygen (O) — it gains electrons. (Accept element symbols.)',
    keyConcepts: ['Oxidation and reduction', 'Redox reactions'],
    keywords: ['oxidised: aluminium', 'reduced: oxygen', 'OIL RIG', 'electron transfer'],
    feedbackHit: 'Correct — aluminium is oxidised (gains oxygen / loses electrons) and oxygen is reduced (gains electrons).',
    feedbackMiss: 'In 4Al + 3O₂ → 2Al₂O₃: aluminium gains oxygen so it is oxidised; oxygen gains electrons so it is reduced (OIL RIG).',
  },

  q3_d: {
    marks: 3,
    exemplar: 'Electrons: ¹²⁸Xe = 54; ¹³⁰Xe = 54 (same as proton number for a neutral atom).\nNeutrons: ¹²⁸Xe = 128 − 54 = 74; ¹³⁰Xe = 130 − 54 = 76.',
    keyConcepts: ['Atomic structure', 'Isotopes'],
    keywords: ['electrons = protons', 'neutrons = mass − protons', '¹²⁸Xe: 54e, 74n', '¹³⁰Xe: 54e, 76n'],
    feedbackHit: 'Correct — electrons equal protons (54 each); neutrons = mass number − proton number.',
    feedbackMiss: 'For a neutral atom, electrons = protons = 54. Neutrons = mass number − proton number: ¹²⁸Xe has 128 − 54 = 74 neutrons; ¹³⁰Xe has 130 − 54 = 76 neutrons.',
    blankAnswers: ['54', '54', '74', '76'],
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
    exemplar: '47.5 cm³ (final burette reading, correct to 1 decimal place). Award 2 marks if only "47.5 cm³" seen.',
    keyConcepts: ['Measurement', 'Burette reading'],
    keywords: ['47.5 cm³', 'burette', '1 decimal place', 'meniscus'],
    feedbackHit: 'Correct reading: 47.5 cm³.',
    feedbackMiss: 'Read the burette at the bottom of the meniscus and record to 1 decimal place. The reading shown is 47.5 cm³.',
  },

  q4_b: {
    marks: 2,
    exemplar: 'Sample B: 15.0 − 8.0 = 7.0 cm³.\nSample D: 47.5 − 26.0 = 21.5 cm³. (Award max 1 mark if decimal places not included. ECF from Q4a for D.)',
    keyConcepts: ['Data processing', 'Titration calculations'],
    keywords: ['7.0 cm³', '21.5 cm³', 'final − initial', 'volume calculation'],
    feedbackHit: 'Correct: B = 7.0 cm³; D = 21.5 cm³.',
    feedbackMiss: 'Volume = final reading − initial reading. B: 15.0 − 8.0 = 7.0 cm³; D: 47.5 − 26.0 = 21.5 cm³ (using ECF from Q4a).',
  },

  q4_c: {
    marks: 5,
    exemplar: 'Sample A → Temporary hard (volume reduced from 18.0 to 9.0 cm³ after boiling — exactly halved; temporary hardness is removed by boiling).\nSample C → Permanent hard (volume unchanged at 22.0 cm³ after boiling — permanent hardness is not removed by boiling).\nSample E → Mixture of permanent and temporary hard (volume reduced from 15.0 to 9.0 cm³ — some hardness removed by boiling, some remains).\n(2 marks for correct placements; up to 3 marks for justifications, 1 per sample.)',
    keyConcepts: ['Hard water types', 'Temporary and permanent hardness'],
    keywords: ['temporary hard', 'permanent hard', 'mixture', 'boiling removes', 'volume unchanged'],
    feedbackHit: 'Correct classifications and justifications using the change in volume after boiling.',
    feedbackMiss: 'Temporary hardness is removed by boiling (volume decreases); permanent hardness is unaffected (volume stays same); a mixture shows partial decrease. A: 18.0→9.0 (temporary); C: 22.0→22.0 (permanent); E: 15.0→9.0 (mixture).',
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
    exemplar: 'Graph: Hardness (mg dm⁻³) on x-axis; pH on y-axis. Even increments on both axes. At least 3 data points plotted correctly. (Data points: 12/6.6, 48/7.3, 95/7.7, 180/8.0, 310/8.3.)',
    keyConcepts: ['Graph plotting', 'Data presentation'],
    keywords: ['hardness on x-axis', 'pH on y-axis', 'even scale', 'points plotted', 'axes labelled'],
    feedbackHit: 'Correct graph with appropriate axis labels, even scale, and correctly plotted points.',
    feedbackMiss: 'Plot hardness (mg dm⁻³) on the x-axis and pH on the y-axis with even increments. Plot the 5 data pairs: (12, 6.6), (48, 7.3), (95, 7.7), (180, 8.0), (310, 8.3).',
  },

  q4_f: {
    marks: 2,
    exemplar: 'The conclusion is not valid / invalid. Hard water is not acidic; it is basic / an alkali. The pH of hard water is above 7. (ORA — accept "the data shows pH is above 7 so cannot be acidic".)',
    keyConcepts: ['pH scale', 'Validity of conclusions'],
    keywords: ['invalid', 'hard water not acidic', 'pH above 7', 'basic alkaline'],
    feedbackHit: 'Correct — the conclusion is invalid because pH > 7 means hard water is basic, not acidic.',
    feedbackMiss: 'Look at the pH data: all hard water samples have pH above 7, meaning they are basic (alkaline), not acidic. The students\' conclusion is invalid.',
  },

  // ── Q5 — Limescale removal investigation (phosphoric, citric, acetic, lactic) ─

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
    exemplar: 'Any two from: include the unit of mass / give values to consistent decimal places / show the change in mass column / add a title to the table / give the chemical name of the shop-bought descaler.',
    keyConcepts: ['Data presentation', 'Scientific tables'],
    keywords: ['include units', 'consistent decimal places', 'change in mass', 'add title', 'chemical name'],
    feedbackHit: 'Two valid improvements to data presentation identified.',
    feedbackMiss: 'Think about what makes a good data table: proper column headings with units, consistent decimal places, a title, and clear identification of all reagents.',
  },

  q5_e: {
    marks: 2,
    exemplar: 'Phosphoric acid. The mass changed the most (32.0 − 27.2 = 4.8 g removed, the greatest change in mass of any acid tested).',
    keyConcepts: ['Data analysis', 'Conclusion from data'],
    keywords: ['phosphoric acid', '4.8 g mass change', 'most effective', 'greatest change'],
    feedbackHit: 'Correct — phosphoric acid removed the most mass (4.8 g).',
    feedbackMiss: 'Calculate mass removed for each acid: Phosphoric = 4.8 g; Citric = 3.2 g; Acetic = 2.5 g; Lactic = 1.8 g; Shop-bought = 4.0 g. Phosphoric acid removed the most mass.',
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

  // ── Q6 — Citric acid concentration experiment design ─────────────────────────

  q6_a: {
    marks: 1,
    exemplar: 'Any one from: citric acid is found in food (lemons, oranges) / is food-safe / less hazardous or corrosive / HCl is a strong acid and citric acid is weaker / citric acid is easier to dispose of / less harmful to the environment.',
    keyConcepts: ['Green chemistry', 'Acid properties'],
    keywords: ['food-safe', 'found in lemons', 'weaker acid', 'less hazardous', 'easier to dispose'],
    feedbackHit: 'Valid reason for choosing citric acid over HCl.',
    feedbackMiss: 'Consider: HCl is a strong, corrosive acid not found in the home; citric acid is weaker, food-safe (found in lemons), and easier to dispose of.',
  },

  q6_: {
    marks: 18,
    exemplar: 'Criterion B design rubric (max 18 marks):\n\nVariables (max 4):\n• 1 mk: correctly states IV only or DV only\n• 2 mk: IV and DV\n• 3 mk: IV, DV and one CV\n• 4 mk: IV (citric acid concentration), DV (mass of CaCO₃ remaining or time to dissolve), two CVs (mass of CaCO₃, volume of acid, temperature, surface area)\n\nEquipment (max 4):\n• Must be connected to the IV and DV (e.g. balance for mass, measuring cylinder/burette for volume, stopwatch for time; pipette acceptable)\n\nMethod (max 4):\n• Steps must be in a logical order, linked to IV and DV\n• Must include at least 3 different concentrations and at least 3 trials per concentration\n• A method that does not include how to vary IV is max 3 marks\n\nMeasurements (max 3):\n• At least 3 different values of IV\n• Measurements linked to DV stated\n• 3 trials per IV value for averaging\n\nSafety (max 3):\n• Relevant justified safety precaution(s) e.g. goggles (acid splashes), gloves (irritant), ventilation (CO₂ released)',
    keyConcepts: ['Criterion B', 'Investigation design', 'Citric acid', 'Limescale'],
    keywords: ['IV citric acid concentration', 'DV mass CaCO₃', 'equipment', 'method', 'repeats', 'safety precautions'],
    feedbackHit: 'Well-designed experiment with clear IV/DV/CVs, appropriate equipment, logical method with repeats, relevant measurements, and safety precautions.',
    feedbackMiss: 'A Criterion B design must state: IV (citric acid concentration), DV (mass remaining or time), CVs; list equipment; give a step-by-step method with ≥3 concentrations and ≥3 trials; describe measurements; include safety (goggles, gloves).',
  },

  // ── Q7 — Plastic packaging for haircare products ─────────────────────────────

  q7_a: { type: 'mcq', correct: 2 } as MCQEntry,

  q7_: {
    marks: 16,
    exemplar: 'Criterion D evaluate rubric (max 16 marks):\n\nProperties justified (max 3):\n• 1: states one property (e.g. waterproof, durable, flexible, lightweight)\n• 2: one property with justification OR two properties\n• 3: two properties with justification for both\n(Do NOT accept "stretchy" or "cheap to produce" as properties.)\n\nSuitability comparison (max 3):\n• 1: comparison of ≥2 types\n• 2: comparison of all three OR ≥2 with further support\n• 3: all three with further support for at least one\n(Compare biodegradability or recyclability; NOT physical/environmental/economic impacts.)\n\nEconomic impacts (max 4):\n• 1: impact of one plastic type\n• 2: impacts of two types with support for ≥1\n• 3: impacts of all three with support for ≥2\n• 4: impacts of all three with support for all\n\nEnvironmental impacts (max 4):\n• 1: impact of one plastic type\n• 2: impacts of two types with support for ≥1\n• 3: impacts of all three with support for ≥2\n• 4: impacts of all three with support for all\n\nConclusion / appraisal (max 2):\n• 1: a choice is made\n• 2: choice is justified using factors discussed above',
    keyConcepts: ['Criterion D', 'Evaluate', 'Plastics', 'Sustainability'],
    keywords: ['crude oil', 'plant-based', 'biodegradable', 'economic', 'environmental', 'waterproof', 'recyclable', 'haircare'],
    feedbackHit: 'Strong evaluation with justified properties, full comparison, economic and environmental analysis of all three plastic types, and a reasoned final choice.',
    feedbackMiss: 'Cover all four areas: (1) justify ≥2 physical properties needed; (2) compare all 3 plastics for suitability (biodegradability/recyclability); (3) economic impacts of each; (4) environmental impacts of each; (5) make a justified choice.',
  },

  // ── Q8 — Haircare types, production, social impacts ──────────────────────────

  q8_: {
    marks: 7,
    exemplar: 'Production comparison rubric (max 4):\n• 1: identifies one production aspect of one conditioner type\n• 2: compares one production aspect between plant starch conditioner and one other\n• 3: compares two production aspects between plant starch conditioner and one other type\n• 4: compares two aspects with further justification\n(Examples: plant starch uses fermented starch vs crude oil silicones / plant fats; plant starch conditioner needs additives for conditioning properties; crude oil conditioner is cheapest; plant starch may reduce reliance on fossil fuels.)\n\nSocial impacts rubric (max 3):\n• 1: identifies one social impact\n• 2: identifies two social impacts\n• 3: two social impacts with further justification\n(Examples: crude oil conditioner is cheapest — cost determines choice for lower-income consumers; natural conditioner has no additives — better for allergy-prone users; plant starch conditioner has unknown long-term safety; vegan/cruelty-free preferences may exclude natural lanolin; lower demand for crude oil linked to reduced environmental extraction impacts.)',
    keyConcepts: ['Criterion D', 'Discuss', 'Haircare production', 'Social impacts'],
    keywords: ['production comparison', 'plant starch', 'crude oil silicones', 'social impacts', 'cost', 'allergy risk', 'vegan'],
    feedbackHit: 'Clear comparison of production processes and two justified social impacts.',
    feedbackMiss: 'Compare production: how is plant starch conditioner made vs one other type? Then state two issues people consider (cost, allergy risk, vegan concerns, availability, environmental ethics).',
  },
}
