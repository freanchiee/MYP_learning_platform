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
  // ── Q1 Combustion of Camping-Stove Fuels ─────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Propane (C₃H₈): three carbon atoms in a chain joined by 2 C–C bonds, with 8 C–H bonds in total; no lone pairs shown (only shared pairs). Methanol (CH₃OH): one carbon with 3 C–H bonds and 1 C–O bond; the oxygen has 1 O–H bond and 2 lone pairs. Both structures show all bonding pairs and the lone pairs on O.',
    keyConcepts: ['Lewis structures', 'Covalent bonding', 'Organic molecules'],
    keywords: ['Lewis', 'dot and cross', 'propane', 'methanol', 'lone pairs', 'shared pairs'],
    feedbackHit: 'Correct — both Lewis structures show correct bonding with all shared pairs and the lone pairs on O.',
    feedbackMiss: 'Propane (C₃H₈): 2 C–C bonds and 8 C–H bonds, no lone pairs. Methanol (CH₃OH): 3 C–H, 1 C–O and 1 O–H bond plus 2 lone pairs on the oxygen.',
  },
  q1_b: {
    marks: 2,
    exemplar: 'Propane: alkane (or hydrocarbon). Methanol: alcohol (alkanol).',
    keyConcepts: ['Organic chemistry', 'Homologous series'],
    keywords: ['alkane', 'alcohol', 'alkanol', 'hydrocarbon', 'homologous series', 'functional group'],
    feedbackHit: 'Correct — propane is an alkane and methanol is an alcohol.',
    feedbackMiss: 'Propane contains only C–C and C–H bonds → alkane. Methanol contains an –OH group → alcohol (alkanol).',
  },
  q1_c: {
    marks: 5,
    exemplar: 'From the figure, methanol releases 22.5 kJ per gram. Mass needed for 30.0 kJ = energy ÷ energy per gram = 30.0 kJ ÷ 22.5 kJ g⁻¹ = 1.333… g ≈ 1.33 g (3 s.f.). (The q = mcΔT relationship underlies the figure: q = mass of water × 4.19 × ΔT gives the energy that was then divided by the fuel mass burned to obtain 22.5 kJ g⁻¹.) Unit (g) required.',
    keyConcepts: ['Calorimetry', 'Heat energy', 'q = mcΔT'],
    keywords: ['q = mcΔT', 'specific heat capacity', '4.19', '22.5 kJ g⁻¹', '30.0 kJ', '1.33 g', 'three significant figures'],
    feedbackHit: 'Correct — 30.0 kJ ÷ 22.5 kJ g⁻¹ = 1.33 g, with unit and to 3 sig figs.',
    feedbackMiss: 'Use the figure: methanol gives 22.5 kJ per gram. Mass for 30.0 kJ = 30.0 ÷ 22.5 = 1.33 g (3 s.f.). Always include the unit (g).',
  },
  q1_d: {
    marks: 2,
    exemplar: 'Propane is the more efficient fuel per gram. Propane releases 50.8 kJ g⁻¹ compared with 22.5 kJ g⁻¹ for methanol, so propane releases more energy per gram of fuel burned.',
    keyConcepts: ['Combustion', 'Energy comparison'],
    keywords: ['propane', 'more efficient', 'energy per gram', '50.8', '22.5', 'greater', 'justify'],
    feedbackHit: 'Correct — propane identified with a valid comparison of energy per gram (50.8 vs 22.5 kJ g⁻¹).',
    feedbackMiss: 'Compare kJ/g for each fuel from the data: propane 50.8 kJ g⁻¹ vs methanol 22.5 kJ g⁻¹. Propane has the higher energy per gram.',
  },

  // ── Q2 Properties of Materials for Racing-Drone Frames ──────────────────────
  q2_a: {
    marks: 4,
    exemplar: 'Titanium: (1) resistant to corrosion / passivates — withstands outdoor crashes and weather; (2) high strength-to-weight ratio — strong yet not too heavy. Carbon: (1) very high strength-to-weight ratio — extremely strong but very light; (2) rigid/stiff and does not react with air or water.',
    keyConcepts: ['Physical properties of materials', 'Materials science'],
    keywords: ['titanium', 'corrosion resistant', 'passivates', 'strength-to-weight', 'carbon fibre', 'rigid', 'stiff', 'unreactive'],
    feedbackHit: 'Correct — two suitable properties identified for each material from the data cards.',
    feedbackMiss: 'For titanium: corrosion resistant/passivates, good strength-to-weight. For carbon: very high strength-to-weight ratio, rigidity, chemical inertness.',
  },
  q2_b: {
    marks: 1,
    exemplar: 'Magnesium reacts with (or burns in) air, and reacts with water, so it would corrode or even ignite — unsuitable for outdoor use.',
    keyConcepts: ['Chemical reactivity', 'Metal properties'],
    keywords: ['Mg', 'magnesium', 'reacts', 'burns in air', 'water', 'corrodes', 'unsuitable'],
    feedbackHit: 'Correct — Mg reacts/burns in air or reacts with water is an accepted reason.',
    feedbackMiss: 'Check the magnesium data card: it reacts with air (can burn) and water, which would damage a drone used outdoors.',
  },
  q2_c: {
    marks: 2,
    exemplar: 'Adding increasing amounts of magnesium increases the yield strength of the aluminium alloy. The graph shows yield strength rising from about 90 MPa (0% Mg) to about 270 MPa (5% Mg) — a positive correlation.',
    keyConcepts: ['Alloys', 'Yield strength'],
    keywords: ['yield strength', 'increases', 'magnesium', 'alloy', 'percentage', 'stronger', 'positive correlation'],
    feedbackHit: 'Correct — clear statement that Mg increases yield strength, supported by graph reference.',
    feedbackMiss: 'Read the y-axis (yield strength) as the x-axis (% Mg) increases. The graph shows yield strength rises with increasing magnesium content.',
  },

  // ── Q3 Atomic Structure and Emergency Flare Chemistry ───────────────────────
  q3_a: {
    marks: 1,
    exemplar: 'Orange-red (calcium), bright red (strontium), and apple green (barium). All three must be stated for the mark.',
    keyConcepts: ['Periodic table', 'Group 2 elements'],
    keywords: ['Group 2', 'calcium', 'strontium', 'barium', 'orange-red', 'bright red', 'apple green'],
    feedbackHit: 'Correct — all three Group 2 element colours stated.',
    feedbackMiss: 'Group 2 elements in the table are calcium (Ca, Z=20), strontium (Sr, Z=38) and barium (Ba, Z=56). All three colours must be given: orange-red, bright red, apple green.',
  },
  q3_b: {
    marks: 2,
    exemplar: 'The ignition of a distress flare is exothermic. Energy (heat and light) is released to the surroundings during the rapid chemical reaction.',
    keyConcepts: ['Exothermic reactions', 'Energy changes'],
    keywords: ['exothermic', 'energy released', 'heat', 'light', 'surroundings', 'rapid reaction'],
    feedbackHit: 'Correct — exothermic stated with justification involving energy/heat released.',
    feedbackMiss: 'Exothermic reactions release energy. A flare produces intense heat and light → energy goes to the surroundings → exothermic.',
  },
  q3_c: {
    marks: 1,
    exemplar: 'Copper (Cu) or manganese (Mn). Either is acceptable.',
    keyConcepts: ['Transition metals', 'Periodic table'],
    keywords: ['Cu', 'Mn', 'transition metal', 'd-block', 'Groups 3–12'],
    feedbackHit: 'Correct — Cu or Mn identified as a transition metal.',
    feedbackMiss: 'Transition metals are in the d-block (Groups 3–12). From the table, copper (Cu) and manganese (Mn) are transition metals. Calcium, strontium and barium are Group 2 metals.',
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
    exemplar: 'Number of neutrons = mass number − atomic number = 90 − 38 = 52 neutrons.',
    keyConcepts: ['Atomic number', 'Mass number', 'Neutrons'],
    keywords: ['neutrons', '52', 'mass number', 'atomic number', '90 − 38', 'strontium-90'],
    feedbackHit: 'Correct — 52 neutrons (90 − 38).',
    feedbackMiss: 'Neutrons = mass number − proton number (atomic number). For Sr-90: 90 − 38 = 52 neutrons.',
  },

  // ── Q4 Kinetic Theory and the Behaviour of Gases ────────────────────────────
  q4_a: {
    marks: 3,
    exemplar: 'Air is mostly nitrogen (N₂) and oxygen (O₂), which have much greater molar mass than helium (He). Gas particles with greater mass move more slowly at the same temperature. Helium atoms, being much lighter, move faster and diffuse out through the balloon membrane more quickly than the heavier nitrogen or oxygen molecules.',
    keyConcepts: ['Kinetic molecular theory', 'Diffusion', 'Molar mass and speed'],
    keywords: ['N₂', 'O₂', 'greater mass', 'moves slower', 'He lighter', 'diffuses faster', 'membrane', 'kinetic energy'],
    feedbackHit: 'Correct — comparison of masses, link to speed, and explanation of faster diffusion for He.',
    feedbackMiss: 'Key points: (1) Air = N₂ + O₂, greater molar mass than He; (2) greater mass → moves more slowly; (3) He moves faster → diffuses through the membrane faster.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'As the balloon rises, the surrounding (external) atmospheric pressure falls. The gas particles inside continue to move and collide with the inside of the balloon, exerting an outward pressure. With less external pressure pushing in, the same mass of gas spreads out so the gas occupies a larger volume — the balloon expands. (If author wishes: fewer collisions on the outside than inside means the net outward force inflates the balloon.)',
    keyConcepts: ['Gas pressure and volume', 'Altitude and pressure', 'Kinetic theory'],
    keywords: ['external pressure decreases', 'altitude', 'particles push outward', 'same mass', 'larger volume', 'expands'],
    feedbackHit: 'Correct — four points: external pressure falls, particles still exert outward pressure, same mass occupies larger volume, balloon expands.',
    feedbackMiss: '(1) At altitude the external air pressure is lower. (2) Gas particles inside still collide with the walls, pushing out. (3) Less external pressure → same mass of gas spreads into a bigger volume. (4) So the balloon expands.',
  },
  q4_c: {
    marks: 2,
    exemplar: 'The volume of the air would increase (the bag would expand/fill up). Inside the tank the air is at very high pressure; when released to the surface it is at much lower (atmospheric) pressure. Lower pressure means the same amount of gas occupies a larger volume (pressure and volume are inversely related).',
    keyConcepts: ['Gas pressure', 'Pressure and volume'],
    keywords: ['volume increases', 'expands', 'high pressure tank', 'lower atmospheric pressure', 'inverse relationship'],
    feedbackHit: 'Correct — volume increases/expands with a clear explanation using the pressure drop.',
    feedbackMiss: '(1) The released air expands — its volume increases. (2) Pressure drops from the high tank pressure to atmospheric pressure; lower pressure → larger volume.',
  },

  // ── Q5 Acid Resistance of Roofing Metals Investigation ──────────────────────
  q5_a: {
    marks: 18,
    exemplar: 'Criterion B (1–18): Research question: "Which of the six metals (iron, zinc, lead, copper, tin, nickel) is most resistant to attack by dilute sulfuric acid?" Hypothesis: metals lower in the reactivity series (e.g. copper) will react more slowly and lose less mass to the acid, because less reactive metals are attacked more slowly. IV: type of metal; DV: mass of metal lost after a fixed time (or volume of gas produced / time to dissolve); CVs: concentration of acid, volume of acid, surface area/mass of metal, temperature, time in acid. Method: cut each metal into samples of equal surface area; measure 50 cm³ of the same H₂SO₄; record starting mass; submerge for the same time; remove, dry and re-mass to find mass lost; repeat 3 times per metal; record in a table. Safety: wear goggles and gloves; handle acid carefully; work in a ventilated area. Rubric: 1–2 = partial elements; 3–7 = most elements; 8–13 = complete design with clear method; 14–18 = fully justified, all variables, safety and scientific reasoning.',
    keyConcepts: ['Criterion B — Inquiry and Design', 'Variables', 'Experimental method', 'Safety'],
    keywords: ['research question', 'hypothesis', 'independent variable', 'dependent variable', 'controlled variable', 'method', 'repeat', 'reliability', 'safety', 'sulfuric acid', 'reactivity', 'mass lost'],
    feedbackHit: 'Strong Crit B response — focused RQ, justified hypothesis, all variables, detailed method with repeats and safety.',
    feedbackMiss: 'Ensure: (1) focused research question; (2) hypothesis linked to the reactivity series; (3) IV=metal type, DV=mass lost/gas volume, at least 2 CVs; (4) step-by-step method with repeats; (5) safety precautions.',
  },
  q5_b: {
    marks: 5,
    exemplar: 'Table should include: column headings for each metal (iron, zinc, lead, copper, tin, nickel); columns for at least two repeat trials; a column for the calculated average; the dependent variable (mass lost in mg, or rate) with appropriate units; a clear table title.',
    keyConcepts: ['Data tables', 'Criterion C — Processing'],
    keywords: ['all six metals', 'dependent variable', 'units', 'repeat trials', 'average', 'table heading'],
    feedbackHit: 'Correct — table includes all metals, DV with units, repeat columns, and average column.',
    feedbackMiss: 'Ensure the table has: (1) all six metals listed; (2) dependent variable column(s) with units; (3) at least two repeat columns; (4) average column; (5) clear column headings.',
  },

  // ── Q6 The Fruit Battery (simple cell) ──────────────────────────────────────
  q6_a: {
    marks: 1,
    exemplar: 'Ions (the positive and negative ions dissolved in the acidic lemon juice).',
    keyConcepts: ['Electrolytes', 'Ionic conduction'],
    keywords: ['ions', 'electrolyte', 'charged particles', 'lemon juice', 'acid'],
    feedbackHit: 'Correct — ions carry charge through the acidic electrolyte.',
    feedbackMiss: 'In liquids and solutions, electric current is carried by ions (not electrons). The acidic lemon juice contains ions that migrate to carry charge.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'The electric current would stop / no current would flow. The acidic lemon juice acts as the electrolyte that lets ions move and complete the circuit. Dry cork has no electrolyte, so ions cannot migrate between the metals, the circuit is broken and no current flows.',
    keyConcepts: ['Electrochemical cells', 'Electrolyte function'],
    keywords: ['no current', 'ions cannot move', 'circuit broken', 'electrolyte', 'incomplete circuit', 'dry cork'],
    feedbackHit: 'Correct — current stops because ions cannot move / circuit is broken.',
    feedbackMiss: 'The electrolyte (lemon juice) lets ions flow between the electrodes, completing the circuit. Dry cork has no mobile ions → circuit incomplete → no current.',
  },

  // ── Q7 Electrochemical Cell Simulation (fixed zinc anode) ───────────────────
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
    exemplar: 'Independent variable (IV): the identity of the metal placed in the positive (cathode) half-cell. Dependent variable (DV): the cell potential in volts (V). Controlled variables (CVs): (1) the metal in the negative cell (always Zn); (2) size/surface area of the electrodes; (3) concentration of electrolyte solution; (4) temperature.',
    keyConcepts: ['Variables', 'Inquiry and Design — Criterion B'],
    keywords: ['independent variable', 'dependent variable', 'controlled variable', 'metal in positive cell', 'cell potential', 'electrode size', 'concentration', 'temperature'],
    feedbackHit: 'Correct — IV, DV and two valid CVs all identified.',
    feedbackMiss: 'IV = what you change (metal in positive cell). DV = what you measure (cell potential in V). CVs = what you keep the same (any two from: electrode size, electrolyte concentration, temperature, same Zn in negative cell).',
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
    exemplar: 'Cathode (copper): copper ions (Cu²⁺) from solution are reduced and deposited as solid copper metal. Mass of the cathode electrode increases over time. Anode (zinc): zinc atoms are oxidised and dissolve into solution as Zn²⁺ ions. Mass of the anode electrode decreases over time.',
    keyConcepts: ['Electrodeposition', 'Anode dissolution', 'Electrode mass changes'],
    keywords: ['cathode', 'copper deposited', 'mass increases', 'anode', 'zinc dissolves', 'mass decreases', 'oxidation', 'reduction'],
    feedbackHit: 'Correct — cathode mass increases (Cu deposited), anode mass decreases (Zn dissolves).',
    feedbackMiss: 'At the cathode: Cu²⁺(aq) + 2e⁻ → Cu(s) — copper is deposited, cathode gains mass. At the anode: Zn(s) → Zn²⁺(aq) + 2e⁻ — zinc dissolves, anode loses mass.',
  },

  // ── Q8 Concentration Effects in a Daniell Cell ──────────────────────────────
  q8_a: {
    marks: 1,
    exemplar: 'The cell potential increases when the zinc sulfate solution is diluted.',
    keyConcepts: ['Cell potential', 'Concentration effects'],
    keywords: ['increases', 'diluted', 'cell potential', 'zinc sulfate', 'Zn²⁺'],
    feedbackHit: 'Correct — cell potential increases when Zn²⁺ concentration at the anode decreases.',
    feedbackMiss: 'Diluting the zinc sulfate lowers [Zn²⁺] at the anode. This favours zinc dissolving, increasing the overall cell potential.',
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
    exemplar: 'Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s). The equation must be: correctly balanced (one Zn to one Cu²⁺, charges balance); correct reactants and products; correct single arrow (not equilibrium); correct state symbols for all species.',
    keyConcepts: ['Ionic equations', 'Redox reactions', 'State symbols'],
    keywords: ['Zn(s)', 'Cu²⁺(aq)', 'Zn²⁺(aq)', 'Cu(s)', 'balanced', 'state symbols', 'ionic equation'],
    feedbackHit: 'Correct — Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s) with correct balancing and state symbols.',
    feedbackMiss: 'Anode: Zn → Zn²⁺ + 2e⁻; cathode: Cu²⁺ + 2e⁻ → Cu. Overall: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s). Include (s) and (aq).',
  },

  // ── Q9 Smartphone Battery Charging Temperature ──────────────────────────────
  q9_a: {
    marks: 1,
    exemplar: 'If the charging temperature is higher, then the percentage capacity remaining after 300 cycles will be lower (i.e. charging at high temperature shortens the battery life).',
    keyConcepts: ['Hypothesis', 'Battery degradation', 'Criterion C'],
    keywords: ['higher temperature', 'lower capacity', 'capacity maintained', 'hypothesis', 'percentage capacity'],
    feedbackHit: 'Correct — hypothesis links higher charging temperature to lower capacity retention.',
    feedbackMiss: 'A hypothesis must include the direction: "Higher charging temperature → lower capacity remaining" (or equivalent). Mention both variables.',
  },
  q9_b: { type: 'mcq', correct: 0 },

  q9_c: {
    marks: 1,
    exemplar: 'Approximately 84% (accept any value in the range 80–86%).',
    keyConcepts: ['Graph reading', 'Interpolation'],
    keywords: ['84%', 'interpolation', 'scatter graph', '30°C', 'within data range'],
    feedbackHit: 'Correct — value within accepted range of 80–86%.',
    feedbackMiss: 'Read the y-value from the graph at x = 30°C (between the 25°C and 35°C points). The accepted range is 80–86%.',
  },
  q9_d: {
    marks: 1,
    exemplar: 'Approximately 55% (accept any value in the range 50–60%).',
    keyConcepts: ['Graph reading', 'Extrapolation'],
    keywords: ['55%', 'extrapolation', '60°C', 'outside data range'],
    feedbackHit: 'Correct — value within accepted range of 50–60%.',
    feedbackMiss: 'Read the y-value at x = 60°C. Note: this requires extrapolation beyond the 45°C data limit. The accepted range is 50–60%.',
  },
  q9_e: {
    marks: 2,
    exemplar: 'The estimate at 30°C is more valid because 30°C falls within the data set (interpolation — the data range covers 5°C to 45°C). The estimate at 60°C is less valid because 60°C falls outside the data range and requires extrapolation — the trend shown may not continue beyond the collected data points.',
    keyConcepts: ['Validity', 'Interpolation vs extrapolation'],
    keywords: ['interpolation', 'valid', 'within data range', 'extrapolation', 'invalid', 'outside data range', '30°C', '60°C'],
    feedbackHit: 'Correct — 30°C valid (interpolation); 60°C potentially invalid (extrapolation); both justified.',
    feedbackMiss: '30°C is within the data set (5–45°C) → interpolation → valid. 60°C is outside the data range → extrapolation → the trend may not continue → less valid.',
  },

  // ── Q10 Water Quality and the Football World Cup ────────────────────────────
  q10_a: {
    marks: 1,
    exemplar: 'Any reasonable answer, e.g.: regions that rarely or never host (Africa, Oceania) contain fewer wealthy/developed nations / are in the Southern hemisphere / the tournament has mostly been hosted by economically developed nations, showing economic inequality.',
    keyConcepts: ['Global inequalities', 'Criterion D — Reflecting on Impacts'],
    keywords: ['developed nations', 'wealthy', 'Southern hemisphere', 'Africa', 'Oceania', 'inequality', 'under-represented'],
    feedbackHit: 'Correct — a valid common feature with reasonable justification.',
    feedbackMiss: 'Examine which regions are under-represented (Africa hosted once, Oceania never). Patterns include: fewer wealthy/developed nations, Southern-hemisphere regions. Any one valid observation accepted.',
  },
  q10_b: {
    marks: 3,
    exemplar: 'The concentration of hydrogen ions (H⁺) increases. Acid mine drainage is acidic because it contains sulfuric acid. Sulfuric acid releases/adds H⁺ ions when it dissolves in the river water, so the H⁺ concentration rises and the pH falls.',
    keyConcepts: ['Acids', 'pH', 'Hydrogen ion concentration'],
    keywords: ['H⁺ increases', 'pH decreases', 'sulfuric acid', 'acidic', 'releases H⁺', 'acid mine drainage'],
    feedbackHit: 'Correct — H⁺ increases; sulfuric acid is acidic; acid adds H⁺ ions, lowering pH.',
    feedbackMiss: 'Sulfuric acid is an acid → adds H⁺ ions → lowers pH. Three marks: (1) H⁺ concentration increases; (2) the runoff is acidic / contains sulfuric acid; (3) acid releases/adds H⁺ ions to the water.',
  },
  q10_c: {
    marks: 4,
    exemplar: 'Water quality changes affect organisms in several ways: (1) The fall in pH — living organisms can only survive within a certain pH range; acidic water kills sensitive species and disrupts ecosystems; (2) Dissolved metals from the mine waste are toxic and accumulate in organisms; (3) Loss of sensitive species reduces biodiversity and breaks food chains; (4) Acidic, metal-laden water lowers dissolved oxygen and harms aerobic organisms such as fish.',
    keyConcepts: ['Water quality', 'Ecosystem effects', 'Criterion D'],
    keywords: ['pH change', 'organisms die', 'toxic metals', 'biodiversity', 'food chain', 'oxygen reduced', 'fish', 'aquatic life'],
    feedbackHit: 'Correct — at least two specific consequences for living organisms with explanation.',
    feedbackMiss: 'Consider: (1) low pH and its effect on aquatic species; (2) toxic dissolved metals; (3) loss of biodiversity / broken food chains; (4) reduced oxygen affecting fish.',
  },

  // ── Q11 Environmental Impact of Copper Mining at Chuquicamata ───────────────
  q11_: {
    marks: 17,
    exemplar: 'Criterion D rubric (0–17):\n1–2: Brief mention of one impact on environment OR community; comment on one industrial process (water use, smelting, dust, power demand).\n3–5: Brief account of community impact AND brief account of one industrial process impact.\n6–10: More than one environmental impact; more than one community impact; more than one industrial process impact described; detailed account of at least one process with specific examples; one suggestion for the future (unsupported by science).\n11–17: Multiple environmental impacts; one positive AND one negative community impact; detailed impact of more than one industrial process (specific examples, e.g. ~50 million m³ water in a desert, SO₂ from smelting); consideration of how technology could counteract impacts; more than one science-supported future suggestion; concluding appraisal linking all issues.\n\nPositive consequences: economic development, jobs (tens of thousands), export revenue (~340 000 t copper/year), infrastructure.\nNegative consequences: huge water use (~50 million m³) in the Atacama Desert, SO₂ air pollution from smelting, dust and a ~900 m open pit destroying landscape/habitat, displacement of communities.\nFuture suggestions: water recycling/desalination, SO₂ scrubbing and acid recovery, renewable (solar) energy in the desert, stricter regulation and rehabilitation.',
    keyConcepts: ['Criterion D — Reflecting on Impacts', 'Mining impacts', 'Sustainability'],
    keywords: ['positive consequences', 'negative consequences', 'water use', 'desert', 'SO₂', 'smelting', 'economic development', 'community', 'open pit', 'future suggestion', 'appraisal', 'copper'],
    feedbackHit: 'High-band response — multiple positive and negative impacts, detailed industrial-process analysis, science-supported future suggestions, and a concluding appraisal.',
    feedbackMiss: 'Structure your answer: (1) positive impacts (economy, jobs, exports); (2) negative environmental impacts (water use in the desert, SO₂, dust, the pit); (3) community impacts; (4) specific industrial processes; (5) science-based future suggestions (water recycling, SO₂ scrubbing, solar power); (6) overall conclusion.',
  },

  // ── Q12 Sustainability in Aluminium Production ──────────────────────────────
  q12_: {
    marks: 4,
    exemplar: 'Any four reasonable points using the data: (1) Recycling cans uses only 8 GJ per tonne versus 170 GJ from ore — about 95% less energy — so recycle scrap aluminium; (2) Recycling emits only 0.6 t CO₂ versus 12 t — far less greenhouse gas, helping mitigate climate change; (3) Recycling conserves the finite ore bauxite for the future; (4) Reduce by using less aluminium / thinner cans; (5) Reuse aluminium products before recycling to extend their life; (6) Less mining means less waste and habitat destruction.',
    keyConcepts: ['Sustainability', 'Reduce Reuse Recycle', 'Criterion D'],
    keywords: ['conserve', 'finite bauxite', '95% less energy', 'CO₂', 'recycling', 'remelting', 'reduce', 'reuse', 'waste', 'habitat'],
    feedbackHit: 'Correct — four valid points about reducing environmental impact through reduce/reuse/recycle, supported by the data.',
    feedbackMiss: 'Use each principle with the data: Recycle (8 GJ vs 170 GJ — ~95% energy saving; 0.6 t vs 12 t CO₂); Reduce (use less aluminium); Reuse (use products longer). Each conserves bauxite, energy and reduces CO₂ and mining waste.',
  },
}
