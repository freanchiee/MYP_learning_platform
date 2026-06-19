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
  // ── Q1 Combustion of Generator Fuels ─────────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Methane (CH₄): one carbon with 4 C–H bonds, no lone pairs (carbon and hydrogen are fully bonded). Propan-1-ol (C₃H₇OH): three carbons joined by 2 C–C bonds with 7 C–H bonds; one carbon also bonds to oxygen (C–O), and the oxygen carries 1 O–H bond and 2 lone pairs. Both structures show all bonding pairs and the lone pairs on O.',
    keyConcepts: ['Lewis structures', 'Covalent bonding', 'Organic molecules'],
    keywords: ['Lewis', 'dot and cross', 'methane', 'propan-1-ol', 'lone pairs', 'shared pairs'],
    feedbackHit: 'Correct — both Lewis structures show correct bonding with all shared pairs and the lone pairs on O.',
    feedbackMiss: 'Methane (CH₄): 4 C–H bonds, no lone pairs. Propan-1-ol (C₃H₇OH): 2 C–C, 7 C–H, 1 C–O and 1 O–H bond plus 2 lone pairs on the oxygen.',
  },
  q1_b: {
    marks: 2,
    exemplar: 'Methane: alkane (or hydrocarbon). Propan-1-ol: alcohol (alkanol).',
    keyConcepts: ['Organic chemistry', 'Homologous series'],
    keywords: ['alkane', 'alcohol', 'alkanol', 'hydrocarbon', 'homologous series', 'functional group'],
    feedbackHit: 'Correct — methane is an alkane and propan-1-ol is an alcohol.',
    feedbackMiss: 'Methane contains only C–H bonds → alkane. Propan-1-ol contains an –OH group → alcohol (alkanol).',
  },
  q1_c: {
    marks: 5,
    exemplar: 'From the figure, propan-1-ol releases 33.5 kJ per gram. Mass needed for 30.0 kJ = energy ÷ energy per gram = 30.0 kJ ÷ 33.5 kJ g⁻¹ = 0.8955… g ≈ 0.896 g (3 s.f.). (The q = mcΔT relationship underlies the figure: q = mass of water × 4.19 × ΔT gives the energy released, which was divided by the fuel mass burned to obtain 33.5 kJ g⁻¹.) Unit (g) required.',
    keyConcepts: ['Calorimetry', 'Heat energy', 'q = mcΔT'],
    keywords: ['q = mcΔT', 'specific heat capacity', '4.19', '33.5 kJ g⁻¹', '30.0 kJ', '0.896 g', 'three significant figures'],
    feedbackHit: 'Correct — 30.0 kJ ÷ 33.5 kJ g⁻¹ = 0.896 g, with unit and to 3 sig figs.',
    feedbackMiss: 'Use the figure: propan-1-ol gives 33.5 kJ per gram. Mass for 30.0 kJ = 30.0 ÷ 33.5 = 0.896 g (3 s.f.). Always include the unit (g).',
  },
  q1_d: {
    marks: 2,
    exemplar: 'Methane is the more efficient fuel per gram. Methane releases 55.8 kJ g⁻¹ compared with 33.5 kJ g⁻¹ for propan-1-ol, so methane releases more energy per gram of fuel burned.',
    keyConcepts: ['Combustion', 'Energy comparison'],
    keywords: ['methane', 'more efficient', 'energy per gram', '55.8', '33.5', 'greater', 'justify'],
    feedbackHit: 'Correct — methane identified with a valid comparison of energy per gram (55.8 vs 33.5 kJ g⁻¹).',
    feedbackMiss: 'Compare kJ/g for each fuel from the data: methane 55.8 kJ g⁻¹ vs propan-1-ol 33.5 kJ g⁻¹. Methane has the higher energy per gram.',
  },

  // ── Q2 Properties of Materials for Satellite Panels ─────────────────────────
  q2_a: {
    marks: 4,
    exemplar: 'Beryllium: (1) very high strength-to-weight ratio — strong yet very light; (2) very stiff with a low density (1.85 g cm⁻³) — keeps the panel rigid without adding mass. Carbon: (1) very high strength-to-weight ratio — extremely strong but very light (1.8 g cm⁻³); (2) rigid/stiff and does not react with air or water.',
    keyConcepts: ['Physical properties of materials', 'Materials science'],
    keywords: ['beryllium', 'strength-to-weight', 'low density', 'stiff', 'carbon fibre', 'rigid', 'unreactive'],
    feedbackHit: 'Correct — two suitable properties identified for each material from the data cards.',
    feedbackMiss: 'For beryllium: very high strength-to-weight, low density, high stiffness. For carbon: very high strength-to-weight ratio, rigidity, chemical inertness.',
  },
  q2_b: {
    marks: 1,
    exemplar: 'Sodium is very soft (very low strength/stiffness) and reacts violently with water, so it would be far too weak and far too reactive to use as a structural panel.',
    keyConcepts: ['Chemical reactivity', 'Metal properties'],
    keywords: ['Na', 'sodium', 'soft', 'reacts violently', 'water', 'too reactive', 'unsuitable'],
    feedbackHit: 'Correct — Na is too soft and/or reacts violently with water is an accepted reason.',
    feedbackMiss: 'Check the sodium data card: it is very soft and reacts violently with water — unsuitable as a structural material.',
  },
  q2_c: {
    marks: 2,
    exemplar: 'Adding increasing amounts of copper increases the yield strength of the aluminium alloy. The graph shows yield strength rising from about 95 MPa (0% Cu) to about 345 MPa (4% Cu) — a positive correlation.',
    keyConcepts: ['Alloys', 'Yield strength'],
    keywords: ['yield strength', 'increases', 'copper', 'alloy', 'percentage', 'stronger', 'positive correlation'],
    feedbackHit: 'Correct — clear statement that Cu increases yield strength, supported by graph reference.',
    feedbackMiss: 'Read the y-axis (yield strength) as the x-axis (% Cu) increases. The graph shows yield strength rises with increasing copper content.',
  },

  // ── Q3 Atomic Structure and Flame-Test Chemistry ────────────────────────────
  q3_a: {
    marks: 1,
    exemplar: 'Crimson red (lithium), yellow-orange (sodium), and lilac (potassium). All three must be stated for the mark.',
    keyConcepts: ['Periodic table', 'Group 1 elements'],
    keywords: ['Group 1', 'lithium', 'sodium', 'potassium', 'crimson red', 'yellow-orange', 'lilac'],
    feedbackHit: 'Correct — all three Group 1 element colours stated.',
    feedbackMiss: 'Group 1 elements in the table are lithium (Li, Z=3), sodium (Na, Z=11) and potassium (K, Z=19). All three colours must be given: crimson red, yellow-orange, lilac.',
  },
  q3_b: {
    marks: 2,
    exemplar: 'For the salt, heating in the Bunsen flame is endothermic. The salt absorbs heat energy from the flame (the surroundings) to excite the metal ions, which then emit the coloured light.',
    keyConcepts: ['Endothermic processes', 'Energy changes'],
    keywords: ['endothermic', 'absorbs energy', 'heat', 'flame', 'surroundings', 'excite ions'],
    feedbackHit: 'Correct — endothermic stated with justification that the salt absorbs heat energy.',
    feedbackMiss: 'The salt takes in (absorbs) heat energy from the flame to excite its metal ions → energy is absorbed → endothermic for the salt.',
  },
  q3_c: {
    marks: 1,
    exemplar: 'Copper (Cu).',
    keyConcepts: ['Transition metals', 'Periodic table'],
    keywords: ['Cu', 'copper', 'transition metal', 'd-block', 'Groups 3–12'],
    feedbackHit: 'Correct — Cu identified as a transition metal.',
    feedbackMiss: 'Transition metals are in the d-block (Groups 3–12). From the table, copper (Cu) is the transition metal. Lithium, sodium and potassium are Group 1; calcium is Group 2.',
  },
  q3_d: {
    marks: 1,
    exemplar: 'Isotopes are atoms of the same element (same atomic number/proton number) that have different numbers of neutrons (and therefore different mass numbers).',
    keyConcepts: ['Isotopes', 'Atomic structure'],
    keywords: ['same element', 'same protons', 'different neutrons', 'different mass number', 'isotope'],
    feedbackHit: 'Correct — same element, different number of neutrons.',
    feedbackMiss: 'Isotopes must be: (1) the same element (same atomic number), and (2) have different mass numbers (different number of neutrons).',
  },
  q3_e: {
    marks: 1,
    exemplar: 'Number of neutrons = mass number − atomic number = 7 − 3 = 4 neutrons.',
    keyConcepts: ['Atomic number', 'Mass number', 'Neutrons'],
    keywords: ['neutrons', '4', 'mass number', 'atomic number', '7 − 3', 'lithium-7'],
    feedbackHit: 'Correct — 4 neutrons (7 − 3).',
    feedbackMiss: 'Neutrons = mass number − proton number (atomic number). For Li-7: 7 − 3 = 4 neutrons.',
  },

  // ── Q4 Kinetic Theory and the Behaviour of Gases ────────────────────────────
  q4_a: {
    marks: 3,
    exemplar: 'Ammonia (NH₃) has a smaller molar mass than hydrogen chloride (HCl). At the same temperature, lighter gas particles travel faster than heavier ones. Because NH₃ molecules are lighter and faster, they diffuse along the tube further/faster than the heavier HCl molecules, so the white ring forms nearer the HCl end.',
    keyConcepts: ['Kinetic molecular theory', 'Diffusion', 'Molar mass and speed'],
    keywords: ['NH₃', 'HCl', 'smaller molar mass', 'lighter', 'moves faster', 'diffuses faster', 'same temperature'],
    feedbackHit: 'Correct — comparison of molar masses, link to speed, and explanation of faster diffusion for NH₃.',
    feedbackMiss: 'Key points: (1) NH₃ has a smaller molar mass than HCl; (2) lighter particles move faster at the same temperature; (3) NH₃ therefore diffuses further/faster, so the ring forms nearer the HCl end.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Heating the trapped air increases the kinetic energy of the gas particles, so they move faster. Faster particles collide with the inside walls of the tyre more often and with greater force. The volume of the tyre is fixed, so more frequent and harder collisions per unit area mean a greater force per area — the pressure inside the tyre increases.',
    keyConcepts: ['Kinetic energy', 'Gas pressure', 'Collisions'],
    keywords: ['kinetic energy increases', 'particles move faster', 'collide more often', 'greater force', 'fixed volume', 'pressure increases'],
    feedbackHit: 'Correct — four points: KE increases, particles faster, collisions more frequent/harder, pressure rises at fixed volume.',
    feedbackMiss: '(1) Heating → KE of air particles increases. (2) Particles move faster. (3) They hit the tyre walls more often and harder. (4) At fixed volume this greater force per area → higher pressure.',
  },
  q4_c: {
    marks: 2,
    exemplar: 'The bag will inflate/expand — its size will increase. At high altitude in the aeroplane cabin, the external air pressure is lower than at sea level, while the pressure of the sealed gas inside the bag remains unchanged. The greater internal pressure pushes the walls outward, so the bag expands.',
    keyConcepts: ['Gas pressure', 'Altitude and pressure'],
    keywords: ['bag inflates', 'size increases', 'external pressure decreases', 'internal pressure same', 'expands', 'altitude'],
    feedbackHit: 'Correct — bag inflates/expands with a clear explanation using the pressure difference.',
    feedbackMiss: '(1) The bag inflates/swells. (2) External cabin pressure is lower at altitude; the sealed internal pressure is unchanged → net outward pressure → bag expands.',
  },

  // ── Q5 Acid Resistance of Geothermal Pipe Metals Investigation ──────────────
  q5_a: {
    marks: 18,
    exemplar: 'Criterion B (1–18): Research question: "Which of the six metals (iron, zinc, lead, copper, tin, magnesium) is most resistant to attack by dilute sulfuric acid?" Hypothesis: metals lower in the reactivity series (e.g. copper) will react more slowly and produce less hydrogen gas, because less reactive metals are attacked more slowly. IV: type of metal; DV: volume of hydrogen gas produced in a fixed time (or mass of metal lost / time to dissolve); CVs: concentration of acid, volume of acid, surface area/mass of metal, temperature, time. Method: cut each metal into samples of equal surface area; add to 50 cm³ of the same H₂SO₄; collect the gas in a measuring cylinder/gas syringe and record the volume after a fixed time (or re-mass the metal); repeat 3 times per metal; record in a table. Safety: wear goggles and gloves; handle acid carefully; collect/ventilate the hydrogen safely. Rubric: 1–2 = partial elements; 3–7 = most elements; 8–13 = complete design with clear method; 14–18 = fully justified, all variables, safety and scientific reasoning.',
    keyConcepts: ['Criterion B — Inquiry and Design', 'Variables', 'Experimental method', 'Safety'],
    keywords: ['research question', 'hypothesis', 'independent variable', 'dependent variable', 'controlled variable', 'method', 'repeat', 'reliability', 'safety', 'sulfuric acid', 'reactivity', 'gas volume'],
    feedbackHit: 'Strong Crit B response — focused RQ, justified hypothesis, all variables, detailed method with repeats and safety.',
    feedbackMiss: 'Ensure: (1) focused research question; (2) hypothesis linked to the reactivity series; (3) IV=metal type, DV=gas volume/mass lost, at least 2 CVs; (4) step-by-step method with repeats; (5) safety precautions.',
  },
  q5_b: {
    marks: 5,
    exemplar: 'Table should include: column headings for each metal (iron, zinc, lead, copper, tin, magnesium); columns for at least two repeat trials; a column for the calculated average; the dependent variable (gas volume in cm³, or mass lost) with appropriate units; a clear table title.',
    keyConcepts: ['Data tables', 'Criterion C — Processing'],
    keywords: ['all six metals', 'dependent variable', 'units', 'repeat trials', 'average', 'table heading'],
    feedbackHit: 'Correct — table includes all metals, DV with units, repeat columns, and average column.',
    feedbackMiss: 'Ensure the table has: (1) all six metals listed; (2) dependent variable column(s) with units; (3) at least two repeat columns; (4) average column; (5) clear column headings.',
  },

  // ── Q6 The Saltwater Battery (simple cell) ──────────────────────────────────
  q6_a: {
    marks: 1,
    exemplar: 'Ions (the Na⁺ and Cl⁻ ions dissolved in the salt water).',
    keyConcepts: ['Electrolytes', 'Ionic conduction'],
    keywords: ['ions', 'electrolyte', 'charged particles', 'salt water', 'Na⁺', 'Cl⁻', 'brine'],
    feedbackHit: 'Correct — ions carry charge through the brine electrolyte.',
    feedbackMiss: 'In solutions, electric current is carried by ions (not electrons). The salt water contains Na⁺ and Cl⁻ ions that migrate to carry charge.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'The electric current would stop / would be negligible. The dissolved salt provides the ions that let charge move and complete the circuit. Pure (distilled) water has almost no dissolved ions, so charge cannot be carried between the metals, the circuit is incomplete and no current flows.',
    keyConcepts: ['Electrochemical cells', 'Electrolyte function'],
    keywords: ['no current', 'ions cannot move', 'circuit broken', 'electrolyte', 'pure water', 'no ions'],
    feedbackHit: 'Correct — current stops because pure water has no ions to carry charge.',
    feedbackMiss: 'The salt makes the water an electrolyte with mobile ions. Pure water has almost no ions → charge cannot move → circuit incomplete → no current.',
  },

  // ── Q7 Electrochemical Cell Simulation (fixed iron anode) ───────────────────
  q7_a: { type: 'mcq', correct: 0 },

  q7_b: {
    marks: 1,
    exemplar: 'The greater the difference in reactivity between the two metals, the higher the cell potential produced.',
    keyConcepts: ['Hypothesis', 'Electrochemical series', 'Reactivity'],
    keywords: ['reactivity difference', 'cell potential', 'voltage', 'greater difference', 'higher voltage'],
    feedbackHit: 'Correct — hypothesis links reactivity difference to cell potential.',
    feedbackMiss: 'A good hypothesis: "If the difference in reactivity between the two metals increases, then the cell potential will increase." Include both variables.',
  },
  q7_c: {
    marks: 4,
    exemplar: 'Independent variable (IV): the identity of the metal placed in the positive (cathode) half-cell. Dependent variable (DV): the cell potential in volts (V). Controlled variables (CVs): (1) the metal in the negative cell (always Fe); (2) size/surface area of the electrodes; (3) concentration of electrolyte solution; (4) temperature.',
    keyConcepts: ['Variables', 'Inquiry and Design — Criterion B'],
    keywords: ['independent variable', 'dependent variable', 'controlled variable', 'metal in positive cell', 'cell potential', 'electrode size', 'concentration', 'temperature'],
    feedbackHit: 'Correct — IV, DV and two valid CVs all identified.',
    feedbackMiss: 'IV = what you change (metal in positive cell). DV = what you measure (cell potential in V). CVs = what you keep the same (any two from: electrode size, electrolyte concentration, temperature, same Fe in negative cell).',
  },
  q7_d: {
    marks: 4,
    exemplar: 'Possible reasons for discrepancy (any four): (1) conditions are not standard (1 mol dm⁻³ electrolyte, 25°C, 1 atm); (2) the actual concentration of the electrolyte solution differs; (3) electrode surfaces may be dirty/oxidised; (4) temperature was not controlled at 25°C; (5) heat loss from the solution; (6) junction potential between the half-cells.',
    keyConcepts: ['Evaluation', 'Standard conditions', 'Sources of error'],
    keywords: ['non-standard conditions', 'concentration', 'temperature', 'dirty electrodes', 'heat loss', 'standard electrode potential', '25°C', '1 mol dm⁻³'],
    feedbackHit: 'Correct — four valid reasons for discrepancy with standard values.',
    feedbackMiss: 'Standard electrode potentials are measured at 25°C, 1 mol dm⁻³, 1 atm. Real experiments rarely meet all these conditions: temperature, solution concentration, electrode purity.',
  },
  q7_e: {
    marks: 1,
    exemplar: 'Wear eye protection (safety goggles) at all times. Accept: wash hands after use; handle acid carefully to avoid skin contact.',
    keyConcepts: ['Laboratory safety', 'Hazard assessment'],
    keywords: ['eye protection', 'goggles', 'wash hands', 'acid', 'safety'],
    feedbackHit: 'Correct — a specific, relevant safety precaution stated.',
    feedbackMiss: 'Acid solutions are corrosive. Appropriate precautions include wearing safety goggles/gloves or washing hands after handling acid.',
  },
  q7_f: {
    marks: 2,
    exemplar: 'Anode: oxidation occurs — metal atoms lose electrons (M → Mⁿ⁺ + ne⁻). Cathode: reduction occurs — metal ions gain electrons (Mⁿ⁺ + ne⁻ → M).',
    keyConcepts: ['Oxidation and reduction', 'Electrodes', 'Redox'],
    keywords: ['anode', 'oxidation', 'electrons lost', 'cathode', 'reduction', 'electrons gained', 'OIL RIG'],
    feedbackHit: 'Correct — anode=oxidation/electrons lost; cathode=reduction/electrons gained.',
    feedbackMiss: 'Remember OIL RIG: Oxidation Is Loss (of electrons) at the Anode; Reduction Is Gain (of electrons) at the Cathode.',
  },
  q7_g: {
    marks: 4,
    exemplar: 'Cathode (copper): copper ions (Cu²⁺) from solution are reduced and deposited as solid copper metal. Mass of the cathode electrode increases over time. Anode (iron): iron atoms are oxidised and dissolve into solution as Fe²⁺ ions. Mass of the anode electrode decreases over time.',
    keyConcepts: ['Electrodeposition', 'Anode dissolution', 'Electrode mass changes'],
    keywords: ['cathode', 'copper deposited', 'mass increases', 'anode', 'iron dissolves', 'mass decreases', 'oxidation', 'reduction'],
    feedbackHit: 'Correct — cathode mass increases (Cu deposited), anode mass decreases (Fe dissolves).',
    feedbackMiss: 'At the cathode: Cu²⁺(aq) + 2e⁻ → Cu(s) — copper is deposited, cathode gains mass. At the anode: Fe(s) → Fe²⁺(aq) + 2e⁻ — iron dissolves, anode loses mass.',
  },

  // ── Q8 Concentration Effects in a Magnesium–Copper Cell ─────────────────────
  q8_a: {
    marks: 1,
    exemplar: 'The cell potential increases when the magnesium sulfate solution is diluted.',
    keyConcepts: ['Cell potential', 'Concentration effects'],
    keywords: ['increases', 'diluted', 'cell potential', 'magnesium sulfate', 'Mg²⁺'],
    feedbackHit: 'Correct — cell potential increases when Mg²⁺ concentration at the anode decreases.',
    feedbackMiss: 'Diluting the magnesium sulfate lowers [Mg²⁺] at the anode. This favours magnesium dissolving, increasing the overall cell potential.',
  },
  q8_b: {
    marks: 3,
    exemplar: 'The blue colour of the copper sulfate solution becomes paler/lighter as it is diluted. This is because there are fewer Cu²⁺ (copper(II)) ions present per unit volume. The blue colour is caused by the Cu²⁺ ions; with fewer ions per volume, the intensity of the blue colour decreases.',
    keyConcepts: ['Colour of solutions', 'Concentration and colour intensity'],
    keywords: ['paler', 'lighter blue', 'fewer Cu²⁺', 'copper ions', 'blue colour', 'diluted', 'concentration decreases'],
    feedbackHit: 'Correct — colour paler, fewer Cu²⁺ ions stated, Cu²⁺ responsible for the blue colour.',
    feedbackMiss: '(1) Colour becomes paler/lighter. (2) Fewer Cu²⁺ ions per volume after dilution. (3) The blue colour is caused by Cu²⁺ ions — fewer ions = less intense blue.',
  },
  q8_c: {
    marks: 1,
    exemplar: 'The cell potential decreases when the copper sulfate solution is diluted.',
    keyConcepts: ['Cell potential', 'Concentration effects'],
    keywords: ['decreases', 'diluted', 'copper sulfate', 'cell potential', 'Cu²⁺'],
    feedbackHit: 'Correct — cell potential decreases when Cu²⁺ concentration at the cathode decreases.',
    feedbackMiss: 'Diluting the copper sulfate reduces [Cu²⁺]. This reduces the driving force for Cu²⁺ reduction at the cathode, decreasing the overall cell potential.',
  },
  q8_d: {
    marks: 4,
    exemplar: 'Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s). The equation must be: correctly balanced (one Mg to one Cu²⁺, charges balance); correct reactants and products; correct single arrow (not equilibrium); correct state symbols for all species.',
    keyConcepts: ['Ionic equations', 'Redox reactions', 'State symbols'],
    keywords: ['Mg(s)', 'Cu²⁺(aq)', 'Mg²⁺(aq)', 'Cu(s)', 'balanced', 'state symbols', 'ionic equation'],
    feedbackHit: 'Correct — Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s) with correct balancing and state symbols.',
    feedbackMiss: 'Anode: Mg → Mg²⁺ + 2e⁻; cathode: Cu²⁺ + 2e⁻ → Cu. Overall: Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s). Include (s) and (aq).',
  },

  // ── Q9 Rechargeable Battery Self-Discharge ──────────────────────────────────
  q9_a: {
    marks: 1,
    exemplar: 'If the storage temperature is higher, then the percentage charge remaining after three months will be lower (i.e. self-discharge is faster at higher temperatures).',
    keyConcepts: ['Hypothesis', 'Self-discharge', 'Criterion C'],
    keywords: ['higher temperature', 'lower charge', 'self-discharge', 'hypothesis', 'percentage charge'],
    feedbackHit: 'Correct — hypothesis links higher storage temperature to lower charge retention.',
    feedbackMiss: 'A hypothesis must include the direction: "Higher storage temperature → lower charge remaining" (or equivalent). Mention both variables.',
  },
  q9_b: { type: 'mcq', correct: 0 },

  q9_c: {
    marks: 1,
    exemplar: 'Approximately 75% (accept any value in the range 72–78%).',
    keyConcepts: ['Graph reading', 'Interpolation'],
    keywords: ['75%', 'interpolation', 'scatter graph', '30°C', 'within data range'],
    feedbackHit: 'Correct — value within accepted range of 72–78%.',
    feedbackMiss: 'Read the y-value from the graph at x = 30°C (between the 25°C and 35°C points). The accepted range is 72–78%.',
  },
  q9_d: {
    marks: 1,
    exemplar: 'Approximately 38% (accept any value in the range 33–43%).',
    keyConcepts: ['Graph reading', 'Extrapolation'],
    keywords: ['38%', 'extrapolation', '60°C', 'outside data range'],
    feedbackHit: 'Correct — value within accepted range of 33–43%.',
    feedbackMiss: 'Read the y-value at x = 60°C. Note: this requires extrapolation beyond the 45°C data limit. The accepted range is 33–43%.',
  },
  q9_e: {
    marks: 2,
    exemplar: 'The estimate at 30°C is more valid because 30°C falls within the data set (interpolation — the data range covers 5°C to 45°C). The estimate at 60°C is less valid because 60°C falls outside the data range and requires extrapolation — the trend shown may not continue beyond the collected data points.',
    keyConcepts: ['Validity', 'Interpolation vs extrapolation'],
    keywords: ['interpolation', 'valid', 'within data range', 'extrapolation', 'invalid', 'outside data range', '30°C', '60°C'],
    feedbackHit: 'Correct — 30°C valid (interpolation); 60°C potentially invalid (extrapolation); both justified.',
    feedbackMiss: '30°C is within the data set (5–45°C) → interpolation → valid. 60°C is outside the data range → extrapolation → the trend may not continue → less valid.',
  },

  // ── Q10 Water Quality and the Commonwealth Games ────────────────────────────
  q10_a: {
    marks: 1,
    exemplar: 'Any reasonable answer, e.g.: regions that rarely or never host (Africa, much of Asia and the Caribbean) contain fewer wealthy/developed nations / have less sporting infrastructure / the Games have mostly gone to richer member nations, showing economic inequality.',
    keyConcepts: ['Global inequalities', 'Criterion D — Reflecting on Impacts'],
    keywords: ['developed nations', 'wealthy', 'Africa', 'infrastructure', 'inequality', 'under-represented'],
    feedbackHit: 'Correct — a valid common feature with reasonable justification.',
    feedbackMiss: 'Examine which regions are under-represented (Africa never, Asia/Caribbean once each). Patterns include: fewer wealthy/developed nations, less infrastructure. Any one valid observation accepted.',
  },
  q10_b: {
    marks: 3,
    exemplar: 'The concentration of hydrogen ions (H⁺) decreases. Red mud is alkaline (basic) because it contains sodium hydroxide and aluminium oxide. The base provides OH⁻ ions that react with/neutralise the H⁺ ions in the water, so the H⁺ concentration falls and the pH rises.',
    keyConcepts: ['Bases', 'pH', 'Neutralisation'],
    keywords: ['H⁺ decreases', 'pH increases', 'alkaline', 'basic', 'sodium hydroxide', 'OH⁻', 'neutralise', 'red mud'],
    feedbackHit: 'Correct — H⁺ decreases; red mud is alkaline; OH⁻ neutralises H⁺, raising pH.',
    feedbackMiss: 'Red mud is alkaline/basic (NaOH, Al₂O₃) → it adds OH⁻ → lowers H⁺ → raises pH. Three marks: (1) H⁺ concentration decreases; (2) the runoff is alkaline/basic; (3) OH⁻ neutralises/removes H⁺.',
  },
  q10_c: {
    marks: 4,
    exemplar: 'Water quality changes affect organisms in several ways: (1) The rise in pH — living organisms can only survive within a certain pH range; strongly alkaline (caustic) water kills sensitive species and disrupts ecosystems; (2) The caustic water can damage the tissues, gills or skin of aquatic animals; (3) Loss of sensitive species reduces biodiversity and breaks food chains; (4) Suspended red-mud particles cloud the water, reducing light for aquatic plants and lowering oxygen produced.',
    keyConcepts: ['Water quality', 'Ecosystem effects', 'Criterion D'],
    keywords: ['pH change', 'alkaline', 'organisms die', 'caustic', 'biodiversity', 'food chain', 'clarity', 'light', 'fish'],
    feedbackHit: 'Correct — at least two specific consequences for living organisms with explanation.',
    feedbackMiss: 'Consider: (1) high pH and its effect on aquatic species; (2) caustic damage to tissues/gills; (3) loss of biodiversity / broken food chains; (4) cloudy water reducing light and photosynthesis.',
  },

  // ── Q11 Environmental Impact of Lignite Mining at Hambach ───────────────────
  q11_: {
    marks: 17,
    exemplar: 'Criterion D rubric (0–17):\n1–2: Brief mention of one impact on environment OR community; comment on one industrial process (excavation, burning, dust, power demand).\n3–5: Brief account of community impact AND brief account of one industrial process impact.\n6–10: More than one environmental impact; more than one community impact; more than one industrial process impact described; detailed account of at least one process with specific examples; one suggestion for the future (unsupported by science).\n11–17: Multiple environmental impacts; one positive AND one negative community impact; detailed impact of more than one industrial process (specific examples, e.g. ~3 900 ha forest cleared, tens of millions of t CO₂ from burning lignite); consideration of how technology could counteract impacts; more than one science-supported future suggestion; concluding appraisal linking all issues.\n\nPositive consequences: electricity generation, jobs (thousands), local economy, energy security.\nNegative consequences: clearing of ancient Hambach Forest (~3 900 ha) and habitat loss, huge CO₂ emissions from burning lignite (a high-carbon fuel), dust and noise from a ~370 m open pit, displacement of villages.\nFuture suggestions: switch to renewables (wind/solar), carbon capture, reforestation and pit rehabilitation, stricter emissions regulation, phasing out lignite.',
    keyConcepts: ['Criterion D — Reflecting on Impacts', 'Mining impacts', 'Sustainability'],
    keywords: ['positive consequences', 'negative consequences', 'deforestation', 'Hambach Forest', 'CO₂', 'lignite', 'electricity', 'community', 'open pit', 'future suggestion', 'appraisal', 'renewables'],
    feedbackHit: 'High-band response — multiple positive and negative impacts, detailed industrial-process analysis, science-supported future suggestions, and a concluding appraisal.',
    feedbackMiss: 'Structure your answer: (1) positive impacts (electricity, jobs, economy); (2) negative environmental impacts (forest cleared, CO₂ from burning lignite, the pit); (3) community impacts (displacement); (4) specific industrial processes; (5) science-based future suggestions (renewables, carbon capture, rehabilitation); (6) overall conclusion.',
  },

  // ── Q12 Sustainability in Glass Production ──────────────────────────────────
  q12_: {
    marks: 4,
    exemplar: 'Any four reasonable points using the data: (1) Making glass from recycled cullet uses only 5.6 GJ per tonne versus 8.0 GJ from raw materials — a clear energy saving — so recycle used glass; (2) Recycling emits only 320 kg CO₂ versus 580 kg — far less greenhouse gas, helping mitigate climate change; (3) Recycling conserves finite raw materials (sand, limestone, soda ash); (4) Reduce by using less glass / lighter bottles; (5) Reuse glass bottles (refill them) before recycling to extend their life; (6) Less quarrying means less waste and habitat destruction.',
    keyConcepts: ['Sustainability', 'Reduce Reuse Recycle', 'Criterion D'],
    keywords: ['conserve', 'finite raw materials', 'energy saving', 'CO₂', 'cullet', 'recycling', 'reduce', 'reuse', 'refill', 'waste'],
    feedbackHit: 'Correct — four valid points about reducing environmental impact through reduce/reuse/recycle, supported by the data.',
    feedbackMiss: 'Use each principle with the data: Recycle (5.6 GJ vs 8.0 GJ energy; 320 kg vs 580 kg CO₂); Reduce (lighter/less glass); Reuse (refill bottles). Each conserves raw materials, energy and reduces CO₂ and quarrying waste.',
  },
}
