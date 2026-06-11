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
  // ── Q1 Hexane and Propan-1-ol ─────────────────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Hexane (C₆H₁₄): six carbon atoms in a chain with 5 C–C bonds and 14 C–H bonds, no lone pairs needed on carbon or hydrogen. Propan-1-ol (C₃H₇OH): three-carbon chain with C–C, C–H, C–O, and O–H bonds, and two lone pairs on the oxygen.',
    keyConcepts: ['Lewis structures', 'Covalent bonding'],
    keywords: ['Lewis dot structure', 'hexane', 'propan-1-ol', 'bonding pairs', 'lone pairs on O', 'C–O', 'O–H'],
    feedbackHit: 'Correct — both Lewis structures show correct bonding and lone pairs on oxygen in propan-1-ol.',
    feedbackMiss: 'Hexane (C₆H₁₄): 6C in a chain, 14H, 5 C–C and 14 C–H bonds. Propan-1-ol (C₃H₇OH): C–C–C–OH chain with C–O and O–H bonds plus 2 lone pairs on O.',
  },
  q1_b: {
    marks: 2,
    exemplar: 'Hexane: alkane (hydrocarbon, all single bonds, CₙH₂ₙ₊₂ formula). Propan-1-ol: alcohol (alkanol, contains the –OH functional group).',
    keyConcepts: ['Homologous series', 'Functional groups'],
    keywords: ['alkane', 'alcohol', 'alkanol', 'hexane', 'propanol', 'functional group', '–OH'],
    feedbackHit: 'Correct — hexane=alkane, propan-1-ol=alcohol.',
    feedbackMiss: 'Hexane: only C–H and C–C bonds → alkane. Propan-1-ol has an –OH group → alcohol (alkanol).',
  },
  q1_c: {
    marks: 5,
    exemplar: 'Using data in the figure with q = mcΔT to calculate total energy. Energy per gram of propan-1-ol = total energy ÷ mass burned. Mass for 30.0 kJ = 30 000 J ÷ 10 000 J g⁻¹ = 3.00 g. Answer: 3.00 g. Unit required.',
    keyConcepts: ['Calorimetry', 'q = mcΔT', 'Energy per gram'],
    keywords: ['q = mcΔT', '4.19', '10.0 kJ/g', '3.00 g', 'three significant figures', 'unit'],
    feedbackHit: 'Correct — correct use of q = mcΔT, energy per gram calculation, answer 3.00 g with unit.',
    feedbackMiss: 'Step 1: q = m × c × ΔT from figure data. Step 2: energy per gram of propanol ≈ 10.0 kJ/g. Step 3: mass = 30.0 ÷ 10.0 = 3.00 g. Include unit (g).',
  },
  q1_d: {
    marks: 2,
    exemplar: 'Hexane is more efficient. The energy per gram of hexane is greater than the energy per gram of propan-1-ol (based on experimental data in the figure), so hexane releases more energy per gram burned.',
    keyConcepts: ['Combustion', 'Fuel efficiency'],
    keywords: ['hexane', 'more efficient', 'energy per gram', 'greater', 'comparison', 'justify'],
    feedbackHit: 'Correct — hexane identified with energy-per-gram justification.',
    feedbackMiss: 'Compare kJ/g values from the data. Hexane has higher energy per gram than propanol → hexane more efficient.',
  },

  // ── Q2 Satellite Materials ───────────────────────────────────────────────────
  q2_a: {
    marks: 4,
    exemplar: 'Titanium: (1) lightweight (low density for its strength) — reduces satellite mass; (2) excellent corrosion resistance — withstands space environment without degrading. Carbon: (1) extremely high strength-to-weight ratio — strongest per gram; (2) rigid — does not flex under mechanical stress / does not react with oxygen.',
    keyConcepts: ['Physical properties', 'Materials selection'],
    keywords: ['titanium', 'lightweight', 'corrosion resistant', 'carbon fibre', 'strength-to-weight', 'rigid', 'unreactive', 'satellite'],
    feedbackHit: 'Correct — two valid properties for Ti and two for C relevant to satellite use.',
    feedbackMiss: 'Titanium data card: lightweight, corrosion resistant, high strength. Carbon data card: highest strength-to-weight, rigid, chemically inert.',
  },
  q2_b: {
    marks: 1,
    exemplar: 'Molybdenum has an extremely high melting point (2620°C), making it very difficult to process and shape into structural components. Accept: very brittle at room temperature / too dense for satellite use.',
    keyConcepts: ['Physical properties', 'Processing of metals'],
    keywords: ['molybdenum', 'high melting point', 'difficult to process', 'brittle', 'dense', 'unsuitable'],
    feedbackHit: 'Correct — Mo high melting point/brittle/dense stated as reason.',
    feedbackMiss: 'Molybdenum melts at 2620°C — too difficult to shape into structural parts. It is also quite brittle at lower temperatures.',
  },
  q2_c: {
    marks: 2,
    exemplar: 'Adding increasing amounts of molybdenum increases the yield strength of the titanium–molybdenum alloy. Yield strength increases as the percentage of molybdenum in the alloy increases.',
    keyConcepts: ['Alloys', 'Yield strength'],
    keywords: ['molybdenum', 'yield strength', 'increases', 'Ti-Mo alloy', 'positive correlation'],
    feedbackHit: 'Correct — Mo increases yield strength of Ti alloy, stated clearly.',
    feedbackMiss: 'Read the graph. As % Mo (x-axis) increases, yield strength (y-axis) increases. State the positive trend.',
  },

  // ── Q3 Diwali Fireworks ──────────────────────────────────────────────────────
  q3_a: {
    marks: 1,
    exemplar: 'Lithium produces crimson, sodium produces yellow, and potassium produces lilac. All three must be stated for the mark.',
    keyConcepts: ['Group 1 elements', 'Periodic table'],
    keywords: ['Group 1', 'lithium crimson', 'sodium yellow', 'potassium lilac', 'alkali metals'],
    feedbackHit: 'Correct — all three Group 1 colours stated.',
    feedbackMiss: 'Group 1 in the table: Li (Z=3)=crimson, Na (Z=11)=yellow, K (Z=19)=lilac. All three required.',
  },
  q3_b: {
    marks: 2,
    exemplar: 'Exothermic. The combustion reaction in fireworks releases heat and light energy to the surroundings.',
    keyConcepts: ['Exothermic reactions'],
    keywords: ['exothermic', 'heat released', 'light', 'surroundings', 'combustion'],
    feedbackHit: 'Correct — exothermic with justification.',
    feedbackMiss: 'Fireworks release heat and light → energy to surroundings → exothermic.',
  },
  q3_c: {
    marks: 1,
    exemplar: 'Copper (Cu) or manganese (Mn). Either accepted.',
    keyConcepts: ['Transition metals'],
    keywords: ['Cu copper', 'Mn manganese', 'd-block', 'transition metal'],
    feedbackHit: 'Correct — Cu or Mn identified as transition metal.',
    feedbackMiss: 'Cu and Mn are d-block elements (Groups 3–12). Li, Na, K are Group 1 (not transition metals).',
  },
  q3_d: {
    marks: 1,
    exemplar: 'Isotopes are atoms of the same element with the same atomic (proton) number but different numbers of neutrons (different mass numbers).',
    keyConcepts: ['Isotopes'],
    keywords: ['same element', 'same proton number', 'different neutrons', 'different mass number'],
    feedbackHit: 'Correct — same element, different neutrons.',
    feedbackMiss: 'Isotopes: same Z (protons) but different A (mass number), meaning different number of neutrons.',
  },
  q3_e: {
    marks: 1,
    exemplar: 'Neutrons = mass number − atomic number = 20 − 10 = 10 neutrons.',
    keyConcepts: ['Neutrons', 'Mass number'],
    keywords: ['10 neutrons', 'neon-20', '20 − 10', 'atomic number 10'],
    feedbackHit: 'Correct — 10 neutrons (20 − 10).',
    feedbackMiss: 'Neutrons = A − Z. For Ne-20: Z = 10, so neutrons = 20 − 10 = 10.',
  },

  // ── Q4 Noble Gas Balloons ────────────────────────────────────────────────────
  q4_a: {
    marks: 3,
    exemplar: 'Neon (Ne) has a molar mass of 20 g/mol, which is smaller than argon (Ar) at 40 g/mol. At the same temperature, lighter particles move faster. Neon atoms move faster than argon atoms and therefore diffuse through the balloon membrane more rapidly, causing the neon balloon to deflate faster.',
    keyConcepts: ['Kinetic molecular theory', 'Molar mass and speed', 'Diffusion'],
    keywords: ['Ne molar mass 20', 'Ar molar mass 40', 'Ne moves faster', 'diffuses faster', 'membrane', 'lighter particles'],
    feedbackHit: 'Correct — Ne lighter (20 < 40), moves faster, diffuses through membrane faster.',
    feedbackMiss: '(1) Ne molar mass = 20; Ar molar mass = 40; (2) Ne moves faster at same T; (3) Ne diffuses through membrane faster → deflates faster.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Warming the air increases the kinetic energy of air molecules, causing them to move faster. The faster-moving particles occupy a larger volume (same mass, more space). The heated air has a lower density than the cooler surrounding air. Because the hot air is less dense, it rises through the denser cold surrounding air — the balloon rises.',
    keyConcepts: ['Kinetic energy', 'Gas density and buoyancy'],
    keywords: ['KE increases', 'faster movement', 'larger volume', 'same mass', 'lower density', 'rises'],
    feedbackHit: 'Correct — four points: KE up, volume expands, density lower, balloon rises.',
    feedbackMiss: '(1) Heating → KE increases; (2) same mass, bigger volume; (3) lower density than surroundings; (4) less dense → rises.',
  },
  q4_c: {
    marks: 2,
    exemplar: 'The cling film would bulge outward. At high altitude, external atmospheric pressure is lower than at sea level. The internal pressure of the trapped air remains the same. The higher internal pressure pushes the cling film outward, causing it to bulge.',
    keyConcepts: ['Gas pressure', 'Altitude'],
    keywords: ['bulges outward', 'external pressure decreases', 'internal pressure unchanged', 'net outward force', 'altitude'],
    feedbackHit: 'Correct — cling film bulges out; external pressure decreases; internal pressure unchanged.',
    feedbackMiss: '(1) Cling film bulges outward. (2) External pressure lower at altitude; internal pressure is sealed and constant → net outward push.',
  },

  // ── Q5 Pipeline Corrosion Investigation ──────────────────────────────────────
  q5_a: {
    marks: 18,
    exemplar: 'Criterion B (1–18): Research question: "Which of the six metals (iron, copper, lead, zinc, aluminium, chromium) is most resistant to citric acid solution?" Hypothesis: metals lower in the reactivity series (e.g. copper, chromium) will resist acid better than reactive metals like zinc. IV: type of metal. DV: mass of metal lost after 30 minutes. CVs: concentration of citric acid, volume of acid, surface area of metal, temperature. Method: cut/weigh 1 g of each metal; add to 50 cm³ of 0.5 mol dm⁻³ citric acid; record mass before and after 30 min; repeat 3 times. Safety: wear goggles; citric acid is mild irritant. Rubric: 1–2 partial; 3–7 most elements; 8–13 complete method; 14–18 fully justified.',
    keyConcepts: ['Criterion B — Inquiry and Design', 'Experimental design'],
    keywords: ['research question', 'hypothesis', 'IV metal type', 'DV mass lost', 'CV concentration', 'citric acid', 'goggles', 'method'],
    feedbackHit: 'Strong Crit B — focused RQ, justified hypothesis, all variables, method with repeats, safety.',
    feedbackMiss: 'Include: (1) RQ naming 6 metals and citric acid; (2) hypothesis (less reactive → more resistant); (3) IV/DV/CVs; (4) step-by-step method; (5) safety precautions.',
  },
  q5_b: {
    marks: 5,
    exemplar: 'Table: column heading for each of the six metals; repeat columns (trials 1, 2, 3); average column; DV (mass lost in g) with unit; table title.',
    keyConcepts: ['Data tables', 'Processing'],
    keywords: ['all six metals', 'repeat columns', 'average', 'units', 'DV heading'],
    feedbackHit: 'Correct — all metals, DV with units, repeats, average all present.',
    feedbackMiss: 'Ensure: (1) all 6 metals; (2) DV with unit; (3) ≥2 repeat columns; (4) average column; (5) clear headings.',
  },

  // ── Q6 Zinc-Air Button Battery ────────────────────────────────────────────────
  q6_a: {
    marks: 1,
    exemplar: 'Ions (K⁺ and OH⁻ ions from the potassium hydroxide electrolyte solution carry the current).',
    keyConcepts: ['Electrolytes', 'Ionic conduction'],
    keywords: ['ions', 'KOH', 'K⁺', 'OH⁻', 'electrolyte', 'charged particles'],
    feedbackHit: 'Correct — ions carry charge through the KOH electrolyte.',
    feedbackMiss: 'In electrolyte solutions, ions carry electric current. KOH dissociates into K⁺ and OH⁻ ions that migrate to carry charge.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'The current would stop / be negligible. Pure distilled water contains almost no ions (only very few from self-ionisation). Without an adequate supply of ions to carry charge between the electrodes, the circuit cannot be completed and no significant current flows.',
    keyConcepts: ['Electrolyte function', 'Pure water vs electrolyte'],
    keywords: ['no current', 'pure water', 'almost no ions', 'cannot carry charge', 'circuit fails', 'negligible'],
    feedbackHit: 'Correct — current stops/negligible because pure water has almost no ions.',
    feedbackMiss: 'Pure water has extremely few ions (autoionisation produces very low [H⁺] and [OH⁻]). Without ions, the electrolyte cannot carry charge → circuit fails.',
  },

  // ── Q7 Electrochemical Cell Simulation (Fe anode) ───────────────────────────
  q7_a: { type: 'mcq', correct: 0 },

  q7_b: {
    marks: 1,
    exemplar: 'The greater the difference in reactivity between the cathode metal and iron (the anode), the higher the cell potential produced.',
    keyConcepts: ['Hypothesis', 'Reactivity and cell potential'],
    keywords: ['reactivity difference', 'cell potential', 'greater', 'higher', 'hypothesis'],
    feedbackHit: 'Correct — hypothesis links reactivity difference to cell potential.',
    feedbackMiss: 'State both variables and direction: "If the difference in reactivity between the two metals increases, then the cell potential will increase."',
  },
  q7_c: {
    marks: 4,
    exemplar: 'IV: the identity/type of metal placed in the cathode half-cell. DV: the cell potential (voltage) measured in volts. CVs (any two): electrode size/surface area; concentration of electrolyte solution; temperature; iron always in anode; volume of electrolyte.',
    keyConcepts: ['Variables', 'Criterion B'],
    keywords: ['IV metal in cathode', 'DV cell potential', 'CV electrode size', 'CV concentration', 'CV temperature', 'Fe always anode'],
    feedbackHit: 'Correct — IV, DV and two CVs all clearly stated.',
    feedbackMiss: 'IV = what you change (metal in cathode). DV = cell potential (V). CVs = any two: electrode size, concentration, temperature, Fe always anode.',
  },
  q7_d: {
    marks: 4,
    exemplar: '(1) Non-standard conditions (not 25°C, not 1 mol dm⁻³); (2) actual concentration of electrolyte differs from standard; (3) electrode surfaces may be oxidised/corroded; (4) temperature not controlled at exactly 25°C; (5) heat generated by the cell reaction changes conditions.',
    keyConcepts: ['Evaluation', 'Standard electrode potential', 'Error sources'],
    keywords: ['non-standard', 'temperature', 'concentration', 'corroded', 'oxidised', 'standard conditions', '25°C'],
    feedbackHit: 'Correct — four valid reasons for discrepancy with standard values.',
    feedbackMiss: 'Standard conditions: 25°C, 1 mol dm⁻³, 1 atm. Real experiments may differ in temperature, concentration, or electrode cleanliness.',
  },
  q7_e: {
    marks: 1,
    exemplar: 'Wear safety goggles. Accept: wash hands after use; handle acid with care.',
    keyConcepts: ['Laboratory safety'],
    keywords: ['goggles', 'eye protection', 'acid', 'wash hands', 'safety'],
    feedbackHit: 'Correct — specific safety precaution stated.',
    feedbackMiss: 'Acid electrolytes are corrosive. Wear goggles to protect eyes from splashes.',
  },
  q7_f: {
    marks: 2,
    exemplar: 'Anode: oxidation occurs — metal atoms lose electrons (Fe → Fe²⁺ + 2e⁻). Cathode: reduction occurs — metal ions in solution gain electrons (e.g. Cu²⁺ + 2e⁻ → Cu).',
    keyConcepts: ['Oxidation and reduction', 'Electrodes'],
    keywords: ['anode', 'oxidation', 'electrons lost', 'cathode', 'reduction', 'electrons gained', 'OIL RIG'],
    feedbackHit: 'Correct — anode=oxidation/electrons lost; cathode=reduction/electrons gained.',
    feedbackMiss: 'OIL RIG: Oxidation Is Loss (at Anode); Reduction Is Gain (at Cathode).',
  },
  q7_g: {
    marks: 4,
    exemplar: 'Cathode (silver): Ag⁺ ions from solution are reduced and deposited as solid silver. Mass of the silver cathode electrode increases. Anode (nickel): nickel atoms are oxidised and dissolve as Ni²⁺ ions into solution. Mass of the nickel anode electrode decreases.',
    keyConcepts: ['Electrodeposition', 'Electrode mass changes'],
    keywords: ['cathode Ag deposited', 'mass increases', 'anode Ni dissolves', 'mass decreases', 'Ag⁺ reduced', 'Ni oxidised'],
    feedbackHit: 'Correct — cathode (Ag) gains mass; anode (Ni) loses mass; both explained.',
    feedbackMiss: 'Cathode: Ag⁺(aq) + e⁻ → Ag(s) — Ag deposits, mass increases. Anode: Ni(s) → Ni²⁺(aq) + 2e⁻ — Ni dissolves, mass decreases.',
  },

  // ── Q8 Concentration Effects — Ni-Ag Cell ─────────────────────────────────────
  q8_a: {
    marks: 1,
    exemplar: 'The cell potential increases when the nickel(II) sulfate solution is diluted.',
    keyConcepts: ['Cell potential', 'Concentration effect'],
    keywords: ['increases', 'diluted', 'nickel sulfate', 'cell potential'],
    feedbackHit: 'Correct — cell potential increases when Ni²⁺ concentration decreases.',
    feedbackMiss: 'Diluting the nickel(II) sulfate reduces [Ni²⁺], which increases the cell potential.',
  },
  q8_b: {
    marks: 3,
    exemplar: 'The green colour of the nickel(II) sulfate solution becomes paler/lighter as it is diluted. This is because there are fewer Ni²⁺ (nickel(II)) ions per unit volume. The green colour is due to the Ni²⁺ ions; fewer ions produce a less intense green colour.',
    keyConcepts: ['Colour of solutions', 'Dilution'],
    keywords: ['paler green', 'fewer Ni²⁺', 'nickel ions', 'green colour', 'diluted', 'less intense'],
    feedbackHit: 'Correct — colour paler; fewer Ni²⁺ ions; Ni²⁺ responsible for green colour.',
    feedbackMiss: '(1) Colour becomes paler green. (2) Fewer Ni²⁺ ions per volume. (3) Ni²⁺ causes the green colour — fewer ions = lighter colour.',
  },
  q8_c: {
    marks: 1,
    exemplar: 'The cell potential decreases when the silver nitrate solution is diluted.',
    keyConcepts: ['Cell potential', 'Ag⁺ concentration'],
    keywords: ['decreases', 'silver nitrate diluted', 'Ag⁺'],
    feedbackHit: 'Correct — cell potential decreases when Ag⁺ concentration decreases.',
    feedbackMiss: 'Diluting AgNO₃ reduces [Ag⁺], reducing the cathode half-cell potential → overall cell potential decreases.',
  },
  q8_d: {
    marks: 4,
    exemplar: 'Ni(s) + 2Ag⁺(aq) → 2Ag(s) + Ni²⁺(aq). Correctly balanced (2 Ag⁺ to balance 2e⁻ from Ni → Ni²⁺), correct arrow, and state symbols for all species.',
    keyConcepts: ['Ionic equations', 'Redox', 'State symbols'],
    keywords: ['Ni(s)', '2Ag⁺(aq)', '2Ag(s)', 'Ni²⁺(aq)', 'balanced', 'state symbols'],
    feedbackHit: 'Correct — Ni(s) + 2Ag⁺(aq) → 2Ag(s) + Ni²⁺(aq) with correct balancing and state symbols.',
    feedbackMiss: 'Anode: Ni → Ni²⁺ + 2e⁻. Cathode: 2Ag⁺ + 2e⁻ → 2Ag. Overall: Ni(s) + 2Ag⁺(aq) → 2Ag(s) + Ni²⁺(aq). Include (s) and (aq).',
  },

  // ── Q9 Alkaline Battery Storage ──────────────────────────────────────────────
  q9_a: {
    marks: 1,
    exemplar: 'If the storage temperature is lower, then the percentage charge remaining after six months will be higher.',
    keyConcepts: ['Hypothesis', 'Battery storage'],
    keywords: ['lower temperature', 'higher percentage charge', 'retained', 'hypothesis'],
    feedbackHit: 'Correct — hypothesis links lower temperature to more charge retained.',
    feedbackMiss: 'Include both variables and direction: "Lower temperature → more charge retained."',
  },
  q9_b: { type: 'mcq', correct: 0 },

  q9_c: {
    marks: 1,
    exemplar: 'Approximately 75% (accept 70–80%).',
    keyConcepts: ['Graph reading', 'Interpolation'],
    keywords: ['75%', 'interpolation', '45°C', 'within data range'],
    feedbackHit: 'Correct — value within 70–80%.',
    feedbackMiss: 'Read the scatter graph at x = 45°C. Accepted range: 70–80%.',
  },
  q9_d: {
    marks: 1,
    exemplar: 'Approximately 25% (accept 20–30%).',
    keyConcepts: ['Graph reading', 'Extrapolation'],
    keywords: ['25%', 'extrapolation', '85°C', 'outside data range'],
    feedbackHit: 'Correct — value within 20–30%.',
    feedbackMiss: 'Read the scatter graph at x = 85°C. May require extrapolation. Accepted: 20–30%.',
  },
  q9_e: {
    marks: 2,
    exemplar: 'The estimate at 45°C is more valid because it falls within the data range (interpolation). The estimate at 85°C is less valid/potentially invalid because it requires extrapolation beyond the measured data range — the trend may not continue at higher temperatures.',
    keyConcepts: ['Validity', 'Interpolation vs extrapolation'],
    keywords: ['45°C valid', 'interpolation', '85°C invalid', 'extrapolation', 'beyond data range'],
    feedbackHit: 'Correct — 45°C valid (interpolation), 85°C invalid/less reliable (extrapolation), both justified.',
    feedbackMiss: '45°C within data → interpolation → valid. 85°C beyond data → extrapolation → less reliable.',
  },

  // ── Q10 Tokyo Olympics Water Quality ─────────────────────────────────────────
  q10_a: {
    marks: 1,
    exemplar: 'Any reasonable answer, e.g.: majority of unhosted countries are less economically developed (LEDCs) / politically unstable / in the Southern hemisphere / Olympic Games hosted predominantly by wealthy developed nations.',
    keyConcepts: ['Global inequalities', 'Criterion D'],
    keywords: ['LEDC', 'politically unstable', 'Southern hemisphere', 'wealthy nations', 'economic inequality'],
    feedbackHit: 'Correct — valid common feature identified.',
    feedbackMiss: 'Look for patterns in which nations have NOT hosted. LEDC, political instability, geographic region are all valid observations.',
  },
  q10_b: {
    marks: 3,
    exemplar: 'The concentration of H⁺ ions in the water decreases (pH increases). Copper oxide is a basic (alkaline) oxide. It reacts with / neutralises the hydrogen ions in the water: CuO produces OH⁻ ions that react with H⁺, reducing H⁺ concentration.',
    keyConcepts: ['Basic oxides', 'Neutralisation', 'pH'],
    keywords: ['H⁺ decreases', 'pH increases', 'CuO basic oxide', 'alkaline', 'OH⁻ neutralises H⁺'],
    feedbackHit: 'Correct — H⁺ decreases; CuO is basic; OH⁻ neutralises H⁺.',
    feedbackMiss: '(1) H⁺ concentration decreases; (2) CuO is a basic metal oxide; (3) reacts with/neutralises H⁺.',
  },
  q10_c: {
    marks: 4,
    exemplar: 'Changes in water quality affect organisms: (1) pH increase — aquatic species can only survive in a narrow pH range; more alkaline water harms acid-tolerant organisms; (2) copper toxicity — Cu²⁺ ions from CuO dissolution are directly toxic to many aquatic organisms, causing mortality; (3) reduced clarity — particles reduce light penetration, reducing photosynthesis in aquatic plants, decreasing O₂ production; (4) reduced oxygen — aerobic organisms such as fish and invertebrates are affected, potentially causing death or migration.',
    keyConcepts: ['Water pollution', 'Aquatic ecosystem', 'Criterion D'],
    keywords: ['pH change', 'copper toxic', 'Cu²⁺', 'photosynthesis', 'less O₂', 'organisms die', 'turbidity', 'fish'],
    feedbackHit: 'Correct — at least two specific consequences with explanation, including copper toxicity if possible.',
    feedbackMiss: 'Consider: (1) pH change affecting organisms; (2) copper toxicity from Cu²⁺; (3) reduced photosynthesis from turbidity; (4) reduced O₂ for aerobic organisms.',
  },

  // ── Q11 Sulawesi Nickel Mining ────────────────────────────────────────────────
  q11_: {
    marks: 17,
    exemplar: 'Criterion D rubric (0–17):\n1–2: Brief account of one environmental OR community impact; comment on one industrial process (ore extraction, smelting, road building).\n3–5: Brief account of community AND brief account of one industrial process impact.\n6–10: Multiple environmental impacts; multiple community impacts; more than one industrial process; detailed account of at least one process with specific examples; one future suggestion.\n11–17: Multiple environmental and community impacts (positive and negative); detailed impact of more than one industrial process; consideration of technology to mitigate impacts; multiple science-based future suggestions; concluding appraisal linking all issues.\n\nPositive: employment and economic development; infrastructure building; export revenue for Indonesia; supply chain for electric vehicles (reduced fossil fuel use globally).\nNegative: rainforest deforestation — loss of biodiversity and CO₂ absorption; river pollution from ore washing/tailings; displacement of indigenous communities; nickel smelting releases SO₂/air pollution; high energy consumption for smelting.\nFuture: renewable energy for smelting; reforestation programmes; stricter environmental regulations; improved tailings water management; circular economy for nickel battery recycling.',
    keyConcepts: ['Criterion D', 'Mining impacts', 'Sustainability'],
    keywords: ['rainforest deforestation', 'nickel', 'EV battery', 'economic development', 'displacement', 'SO₂ pollution', 'biodiversity loss', 'future suggestions', 'renewable energy'],
    feedbackHit: 'High-band response — multiple positive/negative impacts, detailed industrial processes, science-based suggestions, concluding appraisal.',
    feedbackMiss: 'Structure: (1) positive economic impacts; (2) positive global impact (EV batteries); (3) negative: rainforest loss/biodiversity; (4) negative: river/air pollution; (5) community displacement; (6) science-based future solutions; (7) conclusion.',
  },

  // ── Q12 Copper Recycling ──────────────────────────────────────────────────────
  q12_: {
    marks: 4,
    exemplar: 'Any four reasonable points from: (1) conserving finite copper ore (chalcopyrite/chalcocite) reserves which are limited; (2) recycling copper scrap uses significantly less energy than smelting new ore, reducing fossil fuel consumption; (3) reduces CO₂ and SO₂ emissions from smelting; (4) reduces acid mine drainage and waste tailings; (5) reduces land destruction and ecosystem damage from open-pit copper mining; (6) reusing copper products (electrical cables, plumbing) before recycling extends useful life.',
    keyConcepts: ['Sustainability', 'Reduce Reuse Recycle', 'Criterion D'],
    keywords: ['finite ore', 'less energy', 'CO₂ reduction', 'SO₂', 'acid mine drainage', 'land destruction', 'copper recycling'],
    feedbackHit: 'Correct — four valid sustainability points with data reference.',
    feedbackMiss: 'Reduce: design electronics with less copper. Reuse: refurbish cables. Recycle: melt scrap copper (saves 85%+ energy vs smelting). Each reduces mining damage and emissions.',
  },
}
