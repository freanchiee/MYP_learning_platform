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
  // ── Q1 Combustion of Organic Fuels ──────────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Butane: four carbon atoms joined in a chain, each bonded to hydrogen (10 H total), no lone pairs shown as bond pairs only. Ethanol: H–O–C–C with two lone pairs on O. Both structures show all bonding pairs and lone pairs correctly.',
    keyConcepts: ['Lewis structures', 'Covalent bonding', 'Organic molecules'],
    keywords: ['Lewis', 'dot and cross', 'butane', 'ethanol', 'lone pairs', 'shared pairs'],
    feedbackHit: 'Correct — both Lewis structures show correct bonding with all shared pairs and lone pairs on O.',
    feedbackMiss: 'Butane (C₄H₁₀): 4 C–C bonds and 10 C–H bonds, no lone pairs needed. Ethanol (C₂H₅OH): C–C, C–H, C–O, O–H bonds plus 2 lone pairs on the oxygen atom.',
  },
  q1_b: {
    marks: 2,
    exemplar: 'Butane: alkane (or hydrocarbon). Ethanol: alcohol (alkanol).',
    keyConcepts: ['Organic chemistry', 'Homologous series'],
    keywords: ['alkane', 'alcohol', 'alkanol', 'hydrocarbon', 'homologous series', 'functional group'],
    feedbackHit: 'Correct — butane is an alkane and ethanol is an alcohol.',
    feedbackMiss: 'Butane contains only C–C and C–H bonds → alkane. Ethanol contains an –OH group → alcohol (alkanol).',
  },
  q1_c: {
    marks: 5,
    exemplar: 'Using q = mcΔT to find energy from the data (q = mass of water × 4.19 × ΔT). Energy per gram of ethanol = energy released ÷ mass of ethanol burned (from the experiment). Then mass of ethanol for 30.0 kJ = 30 000 J ÷ energy per gram. Answer: 4.92 g (3 significant figures). Unit required.',
    keyConcepts: ['Calorimetry', 'Heat energy', 'q = mcΔT'],
    keywords: ['q = mcΔT', 'specific heat capacity', '4.19', 'joules', 'kilojoules', '4.92 g', 'three significant figures'],
    feedbackHit: 'Correct — right substitution into q = mcΔT, correct conversion, answer 4.92 g with unit and 3 sig figs.',
    feedbackMiss: 'Step 1: q = m × c × ΔT using data in figure. Step 2: Calculate energy per gram of ethanol = q ÷ mass of ethanol burned. Step 3: Mass for 30.0 kJ = 30 000 ÷ energy per gram ≈ 4.92 g. Always include the unit (g).',
  },
  q1_d: {
    marks: 2,
    exemplar: 'Butane is the more efficient fuel per gram. Butane releases more energy per gram of fuel burned than ethanol (based on the calculated energy values from the data).',
    keyConcepts: ['Combustion', 'Energy comparison'],
    keywords: ['butane', 'more efficient', 'energy per gram', 'greater', 'justify'],
    feedbackHit: 'Correct — butane identified with a valid comparison of energy per gram.',
    feedbackMiss: 'Compare kJ/g for each fuel from the data. Butane has a higher energy per gram value than ethanol, making it more efficient per gram.',
  },

  // ── Q2 Properties of Materials for Bicycle Frames ───────────────────────────
  q2_a: {
    marks: 4,
    exemplar: 'Aluminium: (1) malleable — can be shaped into frame tubes; (2) resistant to corrosion — withstands outdoor use. Carbon: (1) high strength-to-weight ratio — strong but very light; (2) rigid/does not react easily with water or air.',
    keyConcepts: ['Physical properties of metals', 'Materials science'],
    keywords: ['malleable', 'corrosion resistant', 'strength-to-weight', 'rigid', 'unreactive', 'aluminium', 'carbon fibre'],
    feedbackHit: 'Correct — two suitable properties identified for each material from the data cards.',
    feedbackMiss: 'For aluminium: look for properties like malleable, lightweight, corrosion resistant from the data card. For carbon: look for high strength-to-weight ratio, rigidity, or chemical inertness.',
  },
  q2_b: {
    marks: 1,
    exemplar: 'Scandium reacts with air or water, making it unsuitable for outdoor use without protection.',
    keyConcepts: ['Chemical reactivity', 'Metal properties'],
    keywords: ['Sc', 'reacts', 'air', 'water', 'corrodes', 'unsuitable'],
    feedbackHit: 'Correct — Sc reacts with air or water is an accepted reason.',
    feedbackMiss: 'Check the data card for scandium. It reacts with air and water, which would degrade a bicycle frame used outdoors.',
  },
  q2_c: {
    marks: 2,
    exemplar: 'Adding increasing amounts of scandium increases the yield strength of the aluminium alloy. The yield strength increases as the percentage of Sc increases (accept any reference to the positive correlation shown on the graph).',
    keyConcepts: ['Alloys', 'Yield strength'],
    keywords: ['yield strength', 'increases', 'scandium', 'alloy', 'percentage', 'stronger'],
    feedbackHit: 'Correct — clear statement that Sc increases yield strength, supported by graph reference.',
    feedbackMiss: 'Read the y-axis (yield strength) as x-axis (% Sc) increases. The graph shows yield strength rises with increasing Sc content.',
  },

  // ── Q3 Atomic Structure and Firework Chemistry ──────────────────────────────
  q3_a: {
    marks: 1,
    exemplar: 'Orange-red (calcium), bright red (strontium), and green (barium). All three must be stated for the mark.',
    keyConcepts: ['Periodic table', 'Group 2 elements'],
    keywords: ['Group 2', 'calcium', 'strontium', 'barium', 'orange-red', 'bright red', 'green'],
    feedbackHit: 'Correct — all three Group 2 element colours stated.',
    feedbackMiss: 'Group 2 elements in the table are calcium (Ca, Z=20), strontium (Sr, Z=38) and barium (Ba, Z=56). All three colours must be given: orange-red, bright red, green.',
  },
  q3_b: {
    marks: 2,
    exemplar: 'The ignition of fireworks is exothermic. Energy (heat and light) is released to the surroundings during the rapid chemical reaction.',
    keyConcepts: ['Exothermic reactions', 'Energy changes'],
    keywords: ['exothermic', 'energy released', 'heat', 'light', 'surroundings', 'rapid reaction'],
    feedbackHit: 'Correct — exothermic stated with justification involving energy/heat released.',
    feedbackMiss: 'Exothermic reactions release energy. Fireworks produce heat and light → energy goes to surroundings → exothermic.',
  },
  q3_c: {
    marks: 1,
    exemplar: 'Copper (Cu) or iron (Fe). Either is acceptable.',
    keyConcepts: ['Transition metals', 'Periodic table'],
    keywords: ['Cu', 'Fe', 'transition metal', 'd-block', 'Groups 3–12'],
    feedbackHit: 'Correct — Cu or Fe identified as a transition metal.',
    feedbackMiss: 'Transition metals are in the d-block (Groups 3–12). From the table, copper (Cu) and iron (Fe) are transition metals. Calcium, strontium and barium are Group 2 metals.',
  },
  q3_d: {
    marks: 1,
    exemplar: 'Isotopes are atoms of the same element (same atomic number/proton number) that have different numbers of neutrons (and therefore different mass numbers).',
    keyConcepts: ['Isotopes', 'Atomic structure'],
    keywords: ['same element', 'same protons', 'different neutrons', 'different mass number', 'isotope'],
    feedbackHit: 'Correct — same element, different number of neutrons.',
    feedbackMiss: 'Isotopes must be: (1) the same element (same atomic number), and (2) different mass numbers (different number of neutrons).',
  },
  q3_e: {
    marks: 1,
    exemplar: 'Number of neutrons = mass number − atomic number = 24 − 12 = 12 neutrons.',
    keyConcepts: ['Atomic number', 'Mass number', 'Neutrons'],
    keywords: ['neutrons', '12', 'mass number', 'atomic number', '24 − 12'],
    feedbackHit: 'Correct — 12 neutrons (24 − 12).',
    feedbackMiss: 'Neutrons = mass number − proton number (atomic number). For Mg-24: 24 − 12 = 12 neutrons.',
  },

  // ── Q4 Kinetic Theory and Properties of Gases ───────────────────────────────
  q4_a: {
    marks: 3,
    exemplar: 'Air is mostly nitrogen (N₂) and oxygen (O₂), which have much greater molar mass than helium (He). Gas particles with greater mass move more slowly at the same temperature. Helium atoms, being much lighter, move faster and diffuse through the balloon membrane more quickly than nitrogen or oxygen molecules.',
    keyConcepts: ['Kinetic molecular theory', 'Diffusion', 'Molar mass and speed'],
    keywords: ['N₂', 'O₂', 'greater mass', 'moves slower', 'He lighter', 'diffuses faster', 'membrane', 'kinetic energy'],
    feedbackHit: 'Correct — comparison of masses, link to speed, and explanation of faster diffusion for He.',
    feedbackMiss: 'Key points: (1) Air = N₂ + O₂, greater molar mass than He; (2) greater mass → moves more slowly; (3) He moves faster → diffuses through balloon membrane faster than N₂/O₂.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Heating the air increases the kinetic energy of the air molecules. Faster-moving particles exert more force and require more space, so the same mass of air occupies a larger volume. The heated air therefore has a lower density than the cooler surrounding air. A less dense substance rises through a denser medium, so the balloon rises.',
    keyConcepts: ['Kinetic energy', 'Gas pressure and volume', 'Density and buoyancy'],
    keywords: ['kinetic energy increases', 'molecules move faster', 'larger volume', 'same mass', 'lower density', 'rises'],
    feedbackHit: 'Correct — four points: KE increases, volume expands (same mass), density decreases, balloon rises.',
    feedbackMiss: '(1) Heating → KE of air molecules increases. (2) Faster molecules → same mass needs bigger volume. (3) Bigger volume at same mass → lower density than surroundings. (4) Less dense → rises (like a bubble in water).',
  },
  q4_c: {
    marks: 2,
    exemplar: 'The bag will inflate/expand — its size will increase. At high altitude, the external air pressure is lower than at sea level, while the pressure inside the sealed bag remains unchanged. The greater internal pressure pushes the walls outward, causing the bag to expand.',
    keyConcepts: ['Gas pressure', 'Altitude and pressure'],
    keywords: ['bag inflates', 'size increases', 'external pressure decreases', 'internal pressure same', 'expands'],
    feedbackHit: 'Correct — bag inflates/expands with clear explanation using pressure difference.',
    feedbackMiss: '(1) Bag inflates/swells. (2) External atmospheric pressure is lower at altitude; internal pressure is sealed/unchanged → net outward pressure → bag expands.',
  },

  // ── Q5 Acid Resistance of Metals Investigation ──────────────────────────────
  q5_a: {
    marks: 18,
    exemplar: 'Criterion B (1–18): Research question: "Which of the six metals (iron, zinc, lead, copper, tin, chromium) is most resistant to sulfuric acid?" Hypothesis: metals lower in the reactivity series (e.g. copper) will react more slowly with acid. IV: type of metal; DV: mass of metal before and after / volume of gas produced / time for metal to dissolve; CVs: concentration of acid, volume of acid, surface area/mass of metal, temperature. Method: cut each metal into equal pieces (e.g. 1 g each); measure 50 cm³ of 1 mol dm⁻³ H₂SO₄; add metal; measure mass lost after 30 min (or measure gas volume collected); repeat 3 times for each metal; record in table. Safety: wear goggles and gloves; work in fume cupboard. Rubric: 1–2 = partial elements; 3–7 = most elements included; 8–13 = complete design with clear method; 14–18 = fully justified, all variables, safety, scientific reasoning.',
    keyConcepts: ['Criterion B — Inquiry and Design', 'Variables', 'Experimental method', 'Safety'],
    keywords: ['research question', 'hypothesis', 'independent variable', 'dependent variable', 'controlled variable', 'method', 'repeat', 'reliability', 'safety', 'sulfuric acid', 'reactivity'],
    feedbackHit: 'Strong Crit B response — focused RQ, justified hypothesis, all variables, detailed method with repeats and safety.',
    feedbackMiss: 'Ensure: (1) focused research question; (2) hypothesis linked to reactivity series; (3) IV=metal type, DV=mass lost/gas volume, at least 2 CVs; (4) step-by-step method with repeats; (5) safety precautions.',
  },
  q5_b: {
    marks: 5,
    exemplar: 'Table should include: column headings for each metal (iron, zinc, lead, copper, tin, chromium); columns for at least two repeat trials; a column for the calculated average; the dependent variable (mass lost / rate of gas production) with appropriate units; a table title.',
    keyConcepts: ['Data tables', 'Criterion C — Processing'],
    keywords: ['all six metals', 'dependent variable', 'units', 'repeat trials', 'average', 'table heading'],
    feedbackHit: 'Correct — table includes all metals, DV with units, repeat columns, and average column.',
    feedbackMiss: 'Ensure the table has: (1) all six metals listed; (2) dependent variable column(s) with units; (3) at least two repeat columns; (4) average column; (5) clear column headings.',
  },

  // ── Q6 Volta's Battery ───────────────────────────────────────────────────────
  q6_a: {
    marks: 1,
    exemplar: 'Ions (positive and negative ions dissolved in the saltwater electrolyte).',
    keyConcepts: ['Electrolytes', 'Ionic conduction'],
    keywords: ['ions', 'electrolyte', 'charged particles', 'saltwater'],
    feedbackHit: 'Correct — ions carry charge through the electrolyte solution.',
    feedbackMiss: 'In liquids and solutions, electric current is carried by ions (not electrons). The saltwater contains Na⁺ and Cl⁻ ions that migrate to carry charge.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'The electric current would stop / no current would flow. The electrolyte (saltwater) allows ions to move and complete the circuit. Without the electrolyte, ions cannot migrate between the electrodes, so the circuit is broken and no current flows.',
    keyConcepts: ['Electrochemical cells', 'Electrolyte function'],
    keywords: ['no current', 'ions cannot move', 'circuit broken', 'electrolyte', 'incomplete circuit'],
    feedbackHit: 'Correct — current stops because ions cannot move / circuit is broken.',
    feedbackMiss: 'The electrolyte allows ions to flow between the electrodes, completing the circuit. Without it, ionic flow stops → circuit is incomplete → no current.',
  },

  // ── Q7 Electrochemical Cell Simulation ──────────────────────────────────────
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
    exemplar: 'Independent variable (IV): the type/identity of the metal placed in the positive (cathode) half-cell. Dependent variable (DV): the cell potential in volts (V). Controlled variables (CVs): (1) identity of metal in negative cell (always Mg); (2) size/surface area of electrodes; (3) concentration of electrolyte solution; (4) temperature.',
    keyConcepts: ['Variables', 'Inquiry and Design — Criterion B'],
    keywords: ['independent variable', 'dependent variable', 'controlled variable', 'metal in positive cell', 'cell potential', 'electrode size', 'concentration', 'temperature'],
    feedbackHit: 'Correct — IV, DV and two valid CVs all identified.',
    feedbackMiss: 'IV = what you change (metal in positive cell). DV = what you measure (cell potential in V). CVs = what you keep the same (any two from: electrode size, electrolyte concentration, temperature, same Mg in negative cell).',
  },
  q7_d: {
    marks: 4,
    exemplar: 'Possible reasons for discrepancy (any four): (1) conditions are not standard (1 mol dm⁻³ electrolyte, 25°C); (2) actual concentration of electrolyte solution differs; (3) electrode surfaces may be dirty/oxidised; (4) temperature was not controlled at 25°C; (5) heat loss from the solution; (6) junction potential between half-cells.',
    keyConcepts: ['Evaluation', 'Standard conditions', 'Sources of error'],
    keywords: ['non-standard conditions', 'concentration', 'temperature', 'dirty electrodes', 'heat loss', 'standard electrode potential', '25°C', '1 mol dm⁻³'],
    feedbackHit: 'Correct — four valid reasons for discrepancy with standard values.',
    feedbackMiss: 'Standard electrode potentials are measured at 25°C, 1 mol dm⁻³, 1 atm. Real experiments rarely meet all these conditions. Consider: temperature variation, solution concentration, electrode purity.',
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
    keyConcepts: ['Oxidation and reduction', 'Electrodes', 'Electrolysis'],
    keywords: ['anode', 'oxidation', 'electrons lost', 'cathode', 'reduction', 'electrons gained', 'OIL RIG'],
    feedbackHit: 'Correct — anode=oxidation/electrons lost; cathode=reduction/electrons gained.',
    feedbackMiss: 'Remember OIL RIG: Oxidation Is Loss (of electrons) at the Anode; Reduction Is Gain (of electrons) at the Cathode.',
  },
  q7_g: {
    marks: 4,
    exemplar: 'Cathode (silver): silver ions (Ag⁺) from solution are reduced and deposited as solid silver metal. Mass of the cathode electrode increases over time. Anode (copper): copper atoms are oxidised and dissolve into solution as Cu²⁺ ions. Mass of the anode electrode decreases over time.',
    keyConcepts: ['Electrodeposition', 'Anode dissolution', 'Electrode mass changes'],
    keywords: ['cathode', 'silver deposited', 'mass increases', 'anode', 'copper dissolves', 'mass decreases', 'oxidation', 'reduction'],
    feedbackHit: 'Correct — both electrodes described: cathode mass increases (Ag deposited), anode mass decreases (Cu dissolves).',
    feedbackMiss: 'At the cathode: Ag⁺(aq) + e⁻ → Ag(s) — silver is deposited, cathode gains mass. At the anode: Cu(s) → Cu²⁺(aq) + 2e⁻ — copper dissolves, anode loses mass.',
  },

  // ── Q8 Concentration Effects in Electrochemical Cells ───────────────────────
  q8_a: {
    marks: 1,
    exemplar: 'The cell potential increases when the copper sulfate solution is diluted.',
    keyConcepts: ['Cell potential', 'Concentration effects'],
    keywords: ['increases', 'diluted', 'cell potential', 'copper sulfate'],
    feedbackHit: 'Correct — cell potential increases when Cu²⁺ concentration decreases.',
    feedbackMiss: 'When the copper sulfate solution is diluted, the Cu²⁺ ion concentration decreases. This shifts the equilibrium and increases the cell potential.',
  },
  q8_b: {
    marks: 3,
    exemplar: 'The blue colour of the solution becomes paler/lighter as it is diluted. This is because there are fewer Cu²⁺ (copper(II)) ions present per unit volume. The blue colour of copper sulfate solution is due to the Cu²⁺ ions; with fewer ions, the intensity of the blue colour decreases.',
    keyConcepts: ['Colour of solutions', 'Concentration and colour intensity'],
    keywords: ['paler', 'lighter blue', 'fewer Cu²⁺', 'copper ions', 'blue colour', 'diluted', 'concentration decreases'],
    feedbackHit: 'Correct — colour paler, fewer Cu²⁺ ions stated, Cu²⁺ responsible for blue colour.',
    feedbackMiss: '(1) Colour becomes paler/lighter. (2) Fewer Cu²⁺ ions per volume after dilution. (3) The blue colour is caused by Cu²⁺ ions — fewer ions = less intense blue.',
  },
  q8_c: {
    marks: 1,
    exemplar: 'The cell potential decreases when the silver nitrate solution is diluted.',
    keyConcepts: ['Cell potential', 'Concentration effects'],
    keywords: ['decreases', 'diluted', 'silver nitrate', 'cell potential'],
    feedbackHit: 'Correct — cell potential decreases when Ag⁺ concentration decreases.',
    feedbackMiss: 'Diluting silver nitrate reduces [Ag⁺]. This reduces the driving force for Ag⁺ reduction at the cathode, decreasing the overall cell potential.',
  },
  q8_d: {
    marks: 4,
    exemplar: 'Cu(s) + 2Ag⁺(aq) → 2Ag(s) + Cu²⁺(aq). The equation must be: correctly balanced (2 Ag⁺ to balance charges); correct reactants and products; correct arrow (single arrow, not equilibrium); correct state symbols for all species.',
    keyConcepts: ['Ionic equations', 'Redox reactions', 'State symbols'],
    keywords: ['Cu(s)', '2Ag⁺(aq)', '2Ag(s)', 'Cu²⁺(aq)', 'balanced', 'state symbols', 'ionic equation'],
    feedbackHit: 'Correct — Cu(s) + 2Ag⁺(aq) → 2Ag(s) + Cu²⁺(aq) with correct balancing and state symbols.',
    feedbackMiss: 'Step 1: Cu → Cu²⁺ + 2e⁻ (anode); Step 2: 2Ag⁺ + 2e⁻ → 2Ag (cathode — need 2 to balance 2 electrons). Overall: Cu(s) + 2Ag⁺(aq) → 2Ag(s) + Cu²⁺(aq). Include (s) and (aq).',
  },

  // ── Q9 Lithium Battery Storage Temperature ───────────────────────────────────
  q9_a: {
    marks: 1,
    exemplar: 'If the storage temperature is lower, then the percentage charge remaining after six months will be higher (i.e. the battery charge is maintained for longer at lower temperatures).',
    keyConcepts: ['Hypothesis', 'Battery storage', 'Criterion B'],
    keywords: ['lower temperature', 'longer', 'charge maintained', 'hypothesis', 'percentage charge'],
    feedbackHit: 'Correct — hypothesis links lower temperature to longer/greater charge retention.',
    feedbackMiss: 'A hypothesis must include the direction: "Lower temperature → more charge retained" (or equivalent). Ensure both variables are mentioned.',
  },
  q9_b: { type: 'mcq', correct: 0 },

  q9_c: {
    marks: 1,
    exemplar: 'Approximately 70% (accept any value in the range 65–75%).',
    keyConcepts: ['Graph reading', 'Interpolation'],
    keywords: ['70%', 'interpolation', 'scatter graph', '50°C', 'within data range'],
    feedbackHit: 'Correct — value within accepted range of 65–75%.',
    feedbackMiss: 'Read the y-value from the scatter graph at x = 50°C. The accepted range is 65–75%.',
  },
  q9_d: {
    marks: 1,
    exemplar: 'Approximately 30% (accept any value in the range 25–35%).',
    keyConcepts: ['Graph reading', 'Extrapolation'],
    keywords: ['30%', 'extrapolation', '80°C', 'outside data range'],
    feedbackHit: 'Correct — value within accepted range of 25–35%.',
    feedbackMiss: 'Read the y-value from the scatter graph at x = 80°C. Note: this may require extrapolation beyond the data range. The accepted range is 25–35%.',
  },
  q9_e: {
    marks: 2,
    exemplar: 'The estimate at 50°C is more valid because 50°C falls within the data set (interpolation — the data range covers temperatures at or around 50°C). The estimate at 80°C may be less valid because 80°C falls outside the data range and requires extrapolation — the trend shown in the data may not continue beyond the collected data points.',
    keyConcepts: ['Validity', 'Interpolation vs extrapolation'],
    keywords: ['interpolation', 'valid', 'within data range', 'extrapolation', 'invalid', 'outside data range', '50°C', '80°C'],
    feedbackHit: 'Correct — 50°C valid (interpolation); 80°C potentially invalid (extrapolation); both justified.',
    feedbackMiss: '50°C is within the data set → interpolation → valid estimate. 80°C is outside the data range → extrapolation → the trend may not continue → less valid / potentially invalid.',
  },

  // ── Q10 Water Quality and the Olympics ──────────────────────────────────────
  q10_a: {
    marks: 1,
    exemplar: 'Any reasonable answer, e.g.: the majority of countries not yet hosting are less economically developed (LEDCs) / they are politically unstable / they are predominantly in the Southern hemisphere / the Games have been hosted only by wealthy/developed nations, showing an economic inequality.',
    keyConcepts: ['Global inequalities', 'Criterion D — Reflecting on Impacts'],
    keywords: ['LEDC', 'economically developed', 'politically unstable', 'Southern hemisphere', 'wealthy nations', 'inequality'],
    feedbackHit: 'Correct — a valid common feature with reasonable justification.',
    feedbackMiss: 'Examine which regions are unrepresented. Patterns include: most remaining nations are in the Southern hemisphere, Africa, or are LEDCs. Any one valid observation accepted.',
  },
  q10_b: {
    marks: 3,
    exemplar: 'The concentration of hydrogen ions (H⁺) decreases. Iron oxide is a basic (alkaline) oxide. The basic iron oxide reacts with/neutralises the hydrogen ions in the water: Fe₂O₃ dissolves to produce OH⁻ which neutralises H⁺, reducing H⁺ concentration and raising pH.',
    keyConcepts: ['Acids and bases', 'Basic oxides', 'pH'],
    keywords: ['H⁺ decreases', 'pH increases', 'basic oxide', 'alkaline', 'neutralise', 'hydroxide ions', 'iron oxide'],
    feedbackHit: 'Correct — H⁺ decreases; iron oxide is basic; OH⁻ neutralises H⁺.',
    feedbackMiss: 'Iron oxide is a metal oxide → basic oxide → raises pH (lowers H⁺). Three marks: (1) H⁺ concentration decreases; (2) iron oxide is basic/alkaline; (3) it reacts with/neutralises H⁺ in water.',
  },
  q10_c: {
    marks: 4,
    exemplar: 'Water quality changes affect organisms in several ways: (1) A change in pH — living organisms can only survive within a certain pH range; increased pH may kill acid-tolerant species and disrupt ecosystems; (2) A change in colour/clarity — iron oxide particles make the water murky, reducing light penetration, which reduces photosynthesis by aquatic plants, decreasing oxygen produced; (3) Reduced oxygen levels affect aerobic organisms such as fish, which may die or leave; (4) Poor visibility affects predator–prey relationships for aquatic animals.',
    keyConcepts: ['Water quality', 'Ecosystem effects', 'Criterion D'],
    keywords: ['pH change', 'organisms die', 'photosynthesis reduced', 'less light', 'oxygen reduced', 'fish', 'colour', 'clarity', 'aquatic plants'],
    feedbackHit: 'Correct — at least two specific consequences for living organisms with explanation.',
    feedbackMiss: 'Consider: (1) pH change and its effect on aquatic species; (2) colour/turbidity reducing photosynthesis → less O₂; (3) reduced O₂ affecting aerobic organisms; (4) reduced visibility affecting behaviour.',
  },

  // ── Q11 Environmental Impact of Iron Ore Mining ─────────────────────────────
  q11_: {
    marks: 17,
    exemplar: 'Criterion D rubric (0–17):\n1–2: Brief mention of one impact on environment OR community; comment on one industrial process (road building, noise, dust, power demand).\n3–5: Brief account of community impact AND brief account of one industrial process impact.\n6–10: More than one impact on environment; more than one impact on community; more than one industrial process impact described; detailed account of at least one process with specific examples; one suggestion for the future (unsupported by science).\n11–17: Multiple environmental impacts; one positive AND one negative community impact; detailed impact of more than one industrial process (specific examples); consideration of how technology could counteract industrial impacts; more than one science-supported future suggestion; concluding appraisal linking all issues discussed.\n\nPositive consequences: economic development, job creation, infrastructure (roads, schools, hospitals), export revenue, improved standard of living.\nNegative consequences: deforestation/habitat destruction, loss of biodiversity, noise/dust/air pollution from road traffic, power demand, water contamination, displacement of indigenous communities.\nFuture suggestions: use of renewable energy in mining, stricter environmental regulations, reforestation programmes, cleaner production technologies.',
    keyConcepts: ['Criterion D — Reflecting on Impacts', 'Mining impacts', 'Sustainability'],
    keywords: ['positive consequences', 'negative consequences', 'deforestation', 'economic development', 'community', 'industrial process', 'roads', 'noise', 'dust', 'power', 'future suggestion', 'appraisal'],
    feedbackHit: 'High-band response — multiple positive and negative impacts, detailed industrial process analysis, science-supported future suggestions, and a concluding appraisal.',
    feedbackMiss: 'Structure your answer: (1) positive impacts (economic, jobs, infrastructure); (2) negative environmental impacts (deforestation, pollution, habitat loss); (3) negative community impacts; (4) specific industrial processes; (5) science-based future suggestions; (6) overall conclusion.',
  },

  // ── Q12 Sustainability in Steel Production ───────────────────────────────────
  q12_: {
    marks: 4,
    exemplar: 'Any four reasonable points from: (1) conserving finite raw materials by recycling scrap steel; (2) conserving natural resources (iron ore, coal) for other uses; (3) reducing CO₂ emissions and contributing to climate change mitigation; (4) reducing waste material associated with mining and processing; (5) reducing destruction of habitats and biodiversity by minimising new mining; (6) reusing steel products to extend their lifetime before recycling.',
    keyConcepts: ['Sustainability', 'Reduce Reuse Recycle', 'Criterion D'],
    keywords: ['conserve', 'finite resources', 'CO₂', 'recycling', 'waste reduction', 'habitat', 'biodiversity', 'reuse', 'steelmaking'],
    feedbackHit: 'Correct — four valid points about reducing environmental impact through reduce/reuse/recycle.',
    feedbackMiss: 'Think about each principle: Reduce (use less iron ore, less energy); Reuse (use steel products longer); Recycle (melt down scrap steel). Each reduces raw material consumption, CO₂ emissions, and waste.',
  },
}
