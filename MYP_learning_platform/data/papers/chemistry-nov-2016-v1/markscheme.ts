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
  // ── Q1 Propane and Methanol ──────────────────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Propane (C₃H₈): three carbon atoms in a chain with 2 C–C bonds and 8 C–H bonds, no lone pairs needed on carbon or hydrogen. Methanol (CH₃OH): one carbon with 3 C–H bonds, one C–O bond, one O–H bond, and two lone pairs on the oxygen.',
    keyConcepts: ['Lewis structures', 'Covalent bonding'],
    keywords: ['Lewis dot structure', 'propane', 'methanol', 'bonding pairs', 'lone pairs', 'C–H', 'C–O', 'O–H'],
    feedbackHit: 'Correct — both Lewis structures show correct bonding and lone pairs on oxygen in methanol.',
    feedbackMiss: 'Propane (C₃H₈): 3C in a chain, 8H atoms, 2 C–C and 8 C–H bonds. Methanol (CH₃OH): 1C, C–O, O–H bonds and 2 lone pairs on the O atom.',
  },
  q1_b: {
    marks: 2,
    exemplar: 'Propane: alkane (hydrocarbon, all single C–C and C–H bonds). Methanol: alcohol (alkanol, contains –OH functional group).',
    keyConcepts: ['Homologous series', 'Functional groups'],
    keywords: ['alkane', 'alcohol', 'alkanol', 'propane', 'methanol', 'functional group', '–OH'],
    feedbackHit: 'Correct — propane=alkane, methanol=alcohol.',
    feedbackMiss: 'Propane has only C–H and C–C bonds with no other groups → alkane. Methanol has an –OH (hydroxyl) group → alcohol (alkanol).',
  },
  q1_c: {
    marks: 5,
    exemplar: 'Using the data in the figure with q = mcΔT to find total energy from the data. Energy per gram of methanol = total energy released ÷ mass of methanol burned. Mass for 30.0 kJ = 30 000 J ÷ 7500 J g⁻¹ = 4.00 g. Answer: 4.00 g. Unit required.',
    keyConcepts: ['Calorimetry', 'q = mcΔT', 'Energy per gram'],
    keywords: ['q = mcΔT', '4.19', 'energy per gram', '7.5 kJ/g', '4.00 g', 'three significant figures', 'unit'],
    feedbackHit: 'Correct — substitution into q = mcΔT, correct energy per gram from data, answer 4.00 g with unit.',
    feedbackMiss: 'Step 1: Use figure data in q = m × c × ΔT to find energy. Step 2: energy per gram = q ÷ mass burned ≈ 7.50 kJ/g. Step 3: mass for 30.0 kJ = 30.0 ÷ 7.50 = 4.00 g. Include unit (g).',
  },
  q1_d: {
    marks: 2,
    exemplar: 'Propane is more efficient. The energy per gram of propane is greater than the energy per gram of methanol (based on experimental data in the figure), so propane releases more energy per gram burned.',
    keyConcepts: ['Combustion', 'Fuel efficiency'],
    keywords: ['propane', 'more efficient', 'energy per gram', 'greater', 'comparison', 'justify'],
    feedbackHit: 'Correct — propane identified with clear energy-per-gram justification.',
    feedbackMiss: 'Identify the fuel with higher kJ/g from the data. Propane has higher energy per gram than methanol, so propane is more efficient as a fuel.',
  },

  // ── Q2 Bicycle Frame Materials ───────────────────────────────────────────────
  q2_a: {
    marks: 4,
    exemplar: 'Aluminium: (1) malleable — can be shaped into frame tubes; (2) resistant to corrosion — forms protective oxide layer, durable outdoors. Carbon: (1) high strength-to-weight ratio — very strong yet light; (2) rigid — resists bending under cycling forces / does not react with moisture or air.',
    keyConcepts: ['Physical properties', 'Materials selection'],
    keywords: ['malleable', 'corrosion resistant', 'oxide layer', 'strength-to-weight', 'rigid', 'unreactive', 'aluminium', 'carbon'],
    feedbackHit: 'Correct — two valid properties for Al and two for C, all relevant to bicycle use.',
    feedbackMiss: 'Aluminium data card: look for malleable/ductile, low density, corrosion resistant. Carbon data card: look for very high strength-to-weight, rigid, chemically inert.',
  },
  q2_b: {
    marks: 1,
    exemplar: 'Vanadium forms brittle oxides when exposed to air, making structural components prone to fracture. Accept: vanadium corrodes/reacts in moist conditions.',
    keyConcepts: ['Chemical reactivity', 'Material suitability'],
    keywords: ['vanadium', 'brittle', 'oxide', 'corrodes', 'reacts with air', 'unsuitable'],
    feedbackHit: 'Correct — vanadium brittle/forms brittle oxides/reacts with air stated.',
    feedbackMiss: 'Check the vanadium data card. It forms brittle compounds on exposure to air and moisture, making a pure vanadium frame prone to cracking.',
  },
  q2_c: {
    marks: 2,
    exemplar: 'Adding increasing amounts of vanadium increases the yield strength of the aluminium–vanadium alloy. There is a positive correlation between % vanadium and yield strength on the graph.',
    keyConcepts: ['Alloys', 'Yield strength'],
    keywords: ['vanadium', 'yield strength', 'increases', 'positive correlation', 'alloy'],
    feedbackHit: 'Correct — increasing vanadium → increasing yield strength stated clearly.',
    feedbackMiss: 'Read the graph: as % V increases (x-axis), yield strength (y-axis) also increases. State the direction of the relationship clearly.',
  },

  // ── Q3 Chinese New Year Fireworks ────────────────────────────────────────────
  q3_a: {
    marks: 1,
    exemplar: 'Potassium produces lilac, rubidium produces red-violet, and caesium produces blue-violet. All three must be stated for the mark.',
    keyConcepts: ['Group 1 elements', 'Periodic table'],
    keywords: ['Group 1', 'potassium lilac', 'rubidium red-violet', 'caesium blue-violet', 'alkali metals'],
    feedbackHit: 'Correct — all three Group 1 colours stated.',
    feedbackMiss: 'Group 1 elements (alkali metals): K (Z=19), Rb (Z=37), Cs (Z=55). Their colours from the table: K=lilac, Rb=red-violet, Cs=blue-violet. All three required.',
  },
  q3_b: {
    marks: 2,
    exemplar: 'Exothermic. The ignition of fireworks releases heat and light energy to the surroundings. The reaction occurs rapidly and produces more energy than is absorbed.',
    keyConcepts: ['Exothermic reactions'],
    keywords: ['exothermic', 'heat released', 'light energy', 'to surroundings', 'rapid combustion'],
    feedbackHit: 'Correct — exothermic stated with justification involving energy/heat released.',
    feedbackMiss: 'Exothermic = energy released. Fireworks produce heat and light → energy goes to surroundings → exothermic.',
  },
  q3_c: {
    marks: 1,
    exemplar: 'Copper (Cu) or iron (Fe). Either accepted.',
    keyConcepts: ['Transition metals'],
    keywords: ['Cu copper', 'Fe iron', 'd-block', 'Groups 3–12', 'transition metal'],
    feedbackHit: 'Correct — Cu or Fe identified as transition metal.',
    feedbackMiss: 'Transition metals occupy the d-block (Groups 3–12). From the table, Cu and Fe are transition metals. K, Rb, Cs are Group 1 (alkali metals).',
  },
  q3_d: {
    marks: 1,
    exemplar: 'Isotopes are atoms of the same element (same atomic/proton number) with different numbers of neutrons (different mass numbers).',
    keyConcepts: ['Isotopes', 'Atomic structure'],
    keywords: ['same element', 'same protons', 'different neutrons', 'different mass number'],
    feedbackHit: 'Correct — same element, different neutrons.',
    feedbackMiss: 'Isotopes: same atomic number (protons) but different mass numbers (due to different neutron count).',
  },
  q3_e: {
    marks: 1,
    exemplar: 'Neutrons = mass number − atomic number = 40 − 20 = 20 neutrons.',
    keyConcepts: ['Neutrons', 'Mass number', 'Atomic number'],
    keywords: ['20 neutrons', 'calcium-40', '40 − 20', 'mass number', 'atomic number'],
    feedbackHit: 'Correct — 20 neutrons (40 − 20).',
    feedbackMiss: 'Neutrons = mass number − proton number. For Ca-40: Z=20, so neutrons = 40 − 20 = 20.',
  },

  // ── Q4 Hydrogen Weather Balloons ─────────────────────────────────────────────
  q4_a: {
    marks: 3,
    exemplar: 'Air is mostly nitrogen (N₂) and oxygen (O₂), which have much greater molar mass (average ~29 g/mol) than hydrogen gas (H₂, molar mass = 2 g/mol). At the same temperature, H₂ molecules move much faster than N₂ and O₂. Hydrogen molecules therefore diffuse through the balloon membrane much more rapidly, causing faster deflation.',
    keyConcepts: ['Kinetic molecular theory', 'Diffusion', 'Molar mass and speed'],
    keywords: ['N₂', 'O₂', 'molar mass 29', 'H₂ molar mass 2', 'moves faster', 'diffuses faster', 'membrane'],
    feedbackHit: 'Correct — air is heavier (N₂+O₂), H₂ is lighter → moves faster → diffuses through membrane faster.',
    feedbackMiss: '(1) Air = N₂ + O₂, average molar mass ~29 g/mol; (2) H₂ molar mass = 2 g/mol — much lighter; (3) lighter molecules move faster at same T; (4) H₂ diffuses through membrane much faster.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Warming the air increases the kinetic energy of air molecules, so they move faster. Faster molecules require more space → the same mass of air expands to a larger volume. The heated air has a lower density than the cooler surrounding air. A less dense substance rises through a denser medium, so the balloon rises.',
    keyConcepts: ['Kinetic energy', 'Gas density', 'Buoyancy'],
    keywords: ['kinetic energy', 'faster molecules', 'same mass', 'larger volume', 'lower density', 'rises'],
    feedbackHit: 'Correct — KE increases, volume expands (same mass), density decreases, balloon rises.',
    feedbackMiss: '(1) KE increases; (2) same mass needs bigger volume; (3) bigger volume at same mass → lower density; (4) lower density than surroundings → rises.',
  },
  q4_c: {
    marks: 2,
    exemplar: 'The cling film covering would bulge outward and the bag would expand. At high altitude, the atmospheric (external) pressure is lower. The internal pressure of the trapped air remains the same as at ground level. The greater internal pressure pushes the cling film outward, causing it to bulge.',
    keyConcepts: ['Gas pressure', 'Altitude and atmospheric pressure'],
    keywords: ['bulges outward', 'expands', 'external pressure decreases', 'internal pressure unchanged', 'net outward force'],
    feedbackHit: 'Correct — cling film bulges/bag expands with explanation using pressure difference.',
    feedbackMiss: '(1) Cling film bulges out/bag expands. (2) External atmospheric pressure falls at altitude; internal air pressure is sealed and unchanged → net outward pressure.',
  },

  // ── Q5 Corrosion Investigation ───────────────────────────────────────────────
  q5_a: {
    marks: 18,
    exemplar: 'Criterion B (1–18): Research question: "Which of the six metals (iron, zinc, copper, aluminium, tin, nickel) is most resistant to hydrochloric acid?" Hypothesis: metals lower in the reactivity series (e.g. copper, nickel) will react less with HCl; less reactive metals are more resistant. IV: type of metal. DV: mass of metal lost after 30 minutes / volume of gas produced / time for visible reaction. CVs: concentration of HCl, volume of HCl, surface area/mass of metal, temperature. Method: cut/weigh 1 g pieces of each metal; add to 50 cm³ of 1 mol dm⁻³ HCl; measure mass loss after 30 min (or gas volume); repeat 3 times. Safety: HCl is corrosive — wear goggles and gloves; work in fume cupboard. Rubric bands: 1–2 partial; 3–7 most elements; 8–13 complete with method; 14–18 fully justified.',
    keyConcepts: ['Criterion B — Inquiry and Design', 'Experimental method', 'Safety'],
    keywords: ['research question', 'hypothesis', 'IV metal type', 'DV mass lost', 'CV concentration', 'HCl corrosive', 'goggles', 'reactivity series'],
    feedbackHit: 'Strong Crit B — focused RQ, justified hypothesis, all variables, detailed method with repeats and safety.',
    feedbackMiss: 'Include: (1) RQ naming all 6 metals and HCl; (2) hypothesis citing reactivity series; (3) IV/DV/CVs; (4) step-by-step method; (5) HCl safety precautions.',
  },
  q5_b: {
    marks: 5,
    exemplar: 'Table: headers for each of the six metals; columns for repeat trial 1, trial 2, trial 3; average column; dependent variable (mass lost in g or gas volume in cm³) with unit; table title.',
    keyConcepts: ['Data tables', 'Processing data'],
    keywords: ['all six metals', 'repeat columns', 'average', 'units', 'DV column heading'],
    feedbackHit: 'Correct — all metals, DV with units, repeats, average column all present.',
    feedbackMiss: 'Ensure table has: (1) all 6 metals; (2) DV column with unit; (3) at least 2 repeat columns; (4) average column; (5) clear headings.',
  },

  // ── Q6 Lemon Battery ─────────────────────────────────────────────────────────
  q6_a: {
    marks: 1,
    exemplar: 'Ions (positive and negative ions from citric acid dissociation in the lemon juice).',
    keyConcepts: ['Electrolytes', 'Ionic conduction'],
    keywords: ['ions', 'citric acid', 'electrolyte', 'charged particles'],
    feedbackHit: 'Correct — ions carry charge through the citric acid electrolyte.',
    feedbackMiss: 'In electrolyte solutions, electric current is carried by ions, not electrons. Citric acid dissolves in the lemon juice to produce H⁺ and citrate ions.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'No current would flow / the current would stop. A dry rubber eraser does not contain an electrolyte solution. Without ions that can move between the electrodes, the circuit is incomplete and charge cannot flow.',
    keyConcepts: ['Electrolyte function', 'Circuit completion'],
    keywords: ['no current', 'no electrolyte', 'ions cannot move', 'circuit incomplete', 'rubber is not a conductor'],
    feedbackHit: 'Correct — current stops because rubber has no electrolyte/ions → circuit broken.',
    feedbackMiss: 'An electrolyte is needed to allow ions to flow between electrodes. Rubber is an insulator and has no ions → no ionic flow → circuit broken → no current.',
  },

  // ── Q7 Electrochemical Cell Simulation (Zn anode) ───────────────────────────
  q7_a: { type: 'mcq', correct: 0 },

  q7_b: {
    marks: 1,
    exemplar: 'The greater the difference in reactivity between the two metals, the higher the cell potential produced by the electrochemical cell.',
    keyConcepts: ['Hypothesis', 'Reactivity and cell potential'],
    keywords: ['reactivity difference', 'cell potential', 'greater', 'higher voltage', 'hypothesis'],
    feedbackHit: 'Correct — hypothesis links reactivity difference to cell potential.',
    feedbackMiss: 'State both variables: "If the difference in reactivity between the cathode metal and zinc increases, then the cell potential will increase."',
  },
  q7_c: {
    marks: 4,
    exemplar: 'IV: identity/type of metal in the cathode half-cell. DV: cell potential in volts (V). CVs (any two): size/surface area of electrodes; concentration of electrolyte; temperature; zinc always in the anode half-cell; volume of electrolyte solution.',
    keyConcepts: ['Variables', 'Criterion B'],
    keywords: ['independent variable', 'dependent variable', 'controlled variable', 'metal in cathode', 'cell potential', 'electrode size', 'electrolyte concentration'],
    feedbackHit: 'Correct — IV, DV and two valid CVs all clearly stated.',
    feedbackMiss: 'IV = what changes (metal in cathode). DV = what is measured (cell potential in V). CVs = any two: electrode size, electrolyte concentration, temperature, Zn always in anode.',
  },
  q7_d: {
    marks: 4,
    exemplar: '(1) Conditions are not standard (25°C, 1 mol dm⁻³); (2) actual electrolyte concentration may differ; (3) electrode surfaces may have oxide layers (dirty/corroded); (4) temperature was not controlled at 25°C; (5) heat generated warms the solution, changing cell potential.',
    keyConcepts: ['Evaluation', 'Standard electrode potential', 'Sources of error'],
    keywords: ['non-standard conditions', 'temperature', 'concentration', 'corroded electrodes', 'heat', 'standard', '25°C', '1 mol dm⁻³'],
    feedbackHit: 'Correct — four valid reasons for discrepancy with standard values.',
    feedbackMiss: 'Standard electrode potentials: 25°C, 1 mol dm⁻³, 1 atm. Real experiments rarely achieve these. Consider: T variation, solution concentration, electrode purity, heat loss.',
  },
  q7_e: {
    marks: 1,
    exemplar: 'Wear safety goggles at all times when handling acid solutions. Accept: wash hands after use; handle acid carefully.',
    keyConcepts: ['Laboratory safety'],
    keywords: ['goggles', 'eye protection', 'wash hands', 'acid', 'corrosive', 'safety'],
    feedbackHit: 'Correct — specific, relevant safety precaution stated.',
    feedbackMiss: 'Acid solutions are corrosive and can damage eyes and skin. Always wear goggles when using acid electrolyte solutions.',
  },
  q7_f: {
    marks: 2,
    exemplar: 'Anode: oxidation — metal atoms lose electrons (Zn → Zn²⁺ + 2e⁻). Cathode: reduction — metal ions in solution gain electrons (e.g. Ag⁺ + e⁻ → Ag).',
    keyConcepts: ['Oxidation and reduction', 'Anode and cathode'],
    keywords: ['anode', 'oxidation', 'electrons lost', 'cathode', 'reduction', 'electrons gained'],
    feedbackHit: 'Correct — anode=oxidation/electrons lost; cathode=reduction/electrons gained.',
    feedbackMiss: 'OIL RIG: Oxidation Is Loss at the Anode; Reduction Is Gain at the Cathode.',
  },
  q7_g: {
    marks: 4,
    exemplar: 'Cathode (copper): Cu²⁺ ions from solution are reduced and deposited as solid copper metal. Mass of the copper cathode electrode increases. Anode (iron): iron atoms are oxidised and dissolve into solution as Fe²⁺ ions. Mass of the iron anode electrode decreases.',
    keyConcepts: ['Electrodeposition', 'Electrode mass changes'],
    keywords: ['cathode Cu deposited', 'mass increases', 'anode Fe dissolves', 'mass decreases', 'Cu²⁺ reduced', 'Fe oxidised'],
    feedbackHit: 'Correct — cathode (Cu) gains mass; anode (Fe) loses mass, with correct explanation.',
    feedbackMiss: 'Cathode: Cu²⁺(aq) + 2e⁻ → Cu(s) — copper deposits, cathode gains mass. Anode: Fe(s) → Fe²⁺(aq) + 2e⁻ — iron dissolves, anode loses mass.',
  },

  // ── Q8 Concentration Effects — Fe-Ag Cell ────────────────────────────────────
  q8_a: {
    marks: 1,
    exemplar: 'The cell potential increases when the iron(II) sulfate solution is diluted.',
    keyConcepts: ['Cell potential', 'Concentration effect'],
    keywords: ['increases', 'diluted', 'iron sulfate', 'cell potential'],
    feedbackHit: 'Correct — cell potential increases when Fe²⁺ concentration decreases.',
    feedbackMiss: 'Diluting the iron sulfate reduces [Fe²⁺], shifting the equilibrium and increasing the cell potential.',
  },
  q8_b: {
    marks: 3,
    exemplar: 'The pale green colour of the iron(II) sulfate solution becomes paler/lighter as it is diluted. This is because there are fewer Fe²⁺ (iron(II)) ions per unit volume. The pale green colour is due to the Fe²⁺ ions; fewer ions produce a less intense colour.',
    keyConcepts: ['Colour of solutions', 'Dilution and ion concentration'],
    keywords: ['paler green', 'lighter colour', 'fewer Fe²⁺', 'iron(II) ions', 'pale green colour', 'diluted'],
    feedbackHit: 'Correct — colour paler; fewer Fe²⁺ ions; Fe²⁺ responsible for pale green colour.',
    feedbackMiss: '(1) Colour becomes paler/lighter green. (2) Fewer Fe²⁺ ions per volume. (3) Fe²⁺ ions cause the pale green colour — fewer ions = less intense colour.',
  },
  q8_c: {
    marks: 1,
    exemplar: 'The cell potential decreases when the silver nitrate solution is diluted.',
    keyConcepts: ['Cell potential', 'Ag⁺ concentration'],
    keywords: ['decreases', 'silver nitrate diluted', 'Ag⁺ concentration'],
    feedbackHit: 'Correct — cell potential decreases when Ag⁺ concentration decreases.',
    feedbackMiss: 'Diluting AgNO₃ reduces [Ag⁺], reducing the driving force for Ag⁺ reduction → cell potential decreases.',
  },
  q8_d: {
    marks: 4,
    exemplar: 'Fe(s) + 2Ag⁺(aq) → 2Ag(s) + Fe²⁺(aq). The equation must be correctly balanced (2 Ag⁺ needed to balance 2 electrons from Fe → Fe²⁺), with correct arrow and state symbols for all species.',
    keyConcepts: ['Ionic equations', 'Redox', 'State symbols'],
    keywords: ['Fe(s)', '2Ag⁺(aq)', '2Ag(s)', 'Fe²⁺(aq)', 'balanced', 'state symbols'],
    feedbackHit: 'Correct — Fe(s) + 2Ag⁺(aq) → 2Ag(s) + Fe²⁺(aq) with correct balancing and state symbols.',
    feedbackMiss: 'Anode: Fe → Fe²⁺ + 2e⁻. Cathode: 2Ag⁺ + 2e⁻ → 2Ag. Overall: Fe(s) + 2Ag⁺(aq) → 2Ag(s) + Fe²⁺(aq). Note (s) and (aq) state symbols.',
  },

  // ── Q9 NiMH Battery Storage ──────────────────────────────────────────────────
  q9_a: {
    marks: 1,
    exemplar: 'If the storage temperature is lower, then the percentage charge remaining after six months will be higher.',
    keyConcepts: ['Hypothesis', 'Battery storage'],
    keywords: ['lower temperature', 'higher percentage charge', 'maintained', 'hypothesis'],
    feedbackHit: 'Correct — hypothesis clearly links lower temperature to higher charge retention.',
    feedbackMiss: 'State both variables and direction: "Lower temperature → more charge retained."',
  },
  q9_b: { type: 'mcq', correct: 0 },

  q9_c: {
    marks: 1,
    exemplar: 'Approximately 85% (accept 80–90%).',
    keyConcepts: ['Graph reading', 'Interpolation'],
    keywords: ['85%', 'interpolation', '40°C', 'within data range', 'scatter graph'],
    feedbackHit: 'Correct — value within range 80–90%.',
    feedbackMiss: 'Read the y-value from the scatter graph at x = 40°C. Accepted range: 80–90%.',
  },
  q9_d: {
    marks: 1,
    exemplar: 'Approximately 10% (accept 5–15%).',
    keyConcepts: ['Graph reading', 'Extrapolation'],
    keywords: ['10%', 'extrapolation', '90°C', 'outside data range'],
    feedbackHit: 'Correct — value within range 5–15%.',
    feedbackMiss: 'Read the scatter graph at x = 90°C. This may require extrapolation if 90°C is beyond the data range. Accepted: 5–15%.',
  },
  q9_e: {
    marks: 2,
    exemplar: 'The estimate at 40°C is more valid because it falls within the data range (interpolation). The estimate at 90°C is less valid/may be invalid because it requires extrapolation beyond the data range — the trend shown in the data may not continue at higher temperatures.',
    keyConcepts: ['Validity', 'Interpolation vs extrapolation'],
    keywords: ['40°C valid', 'interpolation', 'within range', '90°C invalid', 'extrapolation', 'beyond range'],
    feedbackHit: 'Correct — 40°C valid (interpolation), 90°C invalid/less reliable (extrapolation), both justified.',
    feedbackMiss: '40°C is within the data set → interpolation → valid estimate. 90°C is outside → extrapolation → less valid.',
  },

  // ── Q10 Paris Olympics Water Quality ─────────────────────────────────────────
  q10_a: {
    marks: 1,
    exemplar: 'Any reasonable answer, e.g.: majority are less economically developed (LEDCs) / politically unstable / predominantly in the Southern hemisphere / the Games have been hosted predominantly by wealthy, developed nations.',
    keyConcepts: ['Global inequalities', 'Criterion D'],
    keywords: ['LEDC', 'wealthy nations', 'Southern hemisphere', 'political instability', 'economic inequality'],
    feedbackHit: 'Correct — a valid common feature identified.',
    feedbackMiss: 'Look at which regions are unrepresented. Most unhosted nations are in Africa, Asia, or South America and tend to be LEDCs or have political instability.',
  },
  q10_b: {
    marks: 3,
    exemplar: 'The concentration of H⁺ ions decreases (pH increases). Zinc oxide is a basic (alkaline) oxide. It reacts with / neutralises the H⁺ ions in the water: ZnO dissolves to produce OH⁻ ions which react with H⁺, reducing their concentration.',
    keyConcepts: ['Basic oxides', 'pH', 'Neutralisation'],
    keywords: ['H⁺ decreases', 'pH increases', 'ZnO basic oxide', 'alkaline', 'OH⁻ neutralises H⁺'],
    feedbackHit: 'Correct — H⁺ decreases; ZnO is basic; OH⁻ neutralises H⁺.',
    feedbackMiss: '(1) H⁺ concentration decreases; (2) ZnO is a basic metal oxide; (3) ZnO reacts with/neutralises H⁺ ions in water.',
  },
  q10_c: {
    marks: 4,
    exemplar: 'Changes to water quality affect organisms: (1) pH change — aquatic organisms survive only in a narrow pH range; alkaline water harms acid-adapted species; (2) clarity/colour change — zinc oxide particles increase turbidity, reducing light penetration and photosynthesis by aquatic plants, decreasing O₂ production; (3) reduced oxygen levels cause aerobic organisms (fish, invertebrates) to suffocate; (4) poor visibility impairs predator–prey interactions.',
    keyConcepts: ['Water quality', 'Ecological effects', 'Criterion D'],
    keywords: ['pH change', 'organisms die', 'turbidity', 'photosynthesis', 'less light', 'oxygen reduced', 'fish', 'predator prey'],
    feedbackHit: 'Correct — at least two specific consequences for organisms, each explained.',
    feedbackMiss: '(1) pH effect on survival range; (2) turbidity → less light → less photosynthesis → less O₂; (3) O₂ reduction affects aerobic organisms; (4) visibility effects on behaviour.',
  },

  // ── Q11 Atacama Copper Mining ─────────────────────────────────────────────────
  q11_: {
    marks: 17,
    exemplar: 'Criterion D rubric (0–17):\n1–2: Brief mention of one environmental OR community impact; comment on one industrial process (heavy vehicles, dust, water use).\n3–5: Brief account of community impact AND brief account of one industrial process impact.\n6–10: Multiple environmental impacts; multiple community impacts; more than one industrial process; detailed account of at least one with specific examples; one future suggestion (unsupported by science).\n11–17: Multiple environmental impacts; positive AND negative community impacts; detailed impact of more than one industrial process (dust, water depletion, energy, ore transport); consideration of how technology could counter impacts; science-based future suggestions; concluding appraisal.\n\nPositive: export revenue, jobs, economic development, road/infrastructure building, investment in local schools/healthcare.\nNegative: extremely high water use in driest desert on Earth → threatens local water supply; dust and particulate pollution; soil contamination from copper tailings; displacement of indigenous communities; noise/vibration from blasting.\nFuture: desalination for water supply; solar power (Atacama Desert has highest solar radiation on Earth); stricter environmental regulation; water recycling in ore processing.',
    keyConcepts: ['Criterion D', 'Mining impacts', 'Sustainability'],
    keywords: ['water scarcity', 'Atacama Desert', 'copper tailings', 'economic development', 'community displacement', 'dust', 'energy', 'solar power', 'future suggestions'],
    feedbackHit: 'High-band response — multiple positive/negative impacts, detailed industrial processes, science-based future suggestions, concluding appraisal.',
    feedbackMiss: 'Structure: (1) positive economic impacts; (2) water scarcity negative impact (unique to Atacama); (3) other environmental negatives; (4) community impacts; (5) science-based future suggestions including water/energy alternatives; (6) conclusion.',
  },

  // ── Q12 Aluminium Recycling ──────────────────────────────────────────────────
  q12_: {
    marks: 4,
    exemplar: 'Any four reasonable points from: (1) conserving finite bauxite ore reserves; (2) recycling uses only ~5% of the energy of primary smelting, saving vast amounts of electricity; (3) significantly reduces CO₂ emissions and contribution to climate change; (4) reduces waste material and tailings from bauxite mining; (5) reduces land destruction and habitat loss from mining; (6) reusing aluminium products (e.g. cans, foil) before recycling extends their useful life.',
    keyConcepts: ['Sustainability', 'Reduce Reuse Recycle', 'Criterion D'],
    keywords: ['bauxite conservation', '5% energy', 'CO₂ reduction', 'recycling aluminium', 'land destruction', 'habitat', 'waste reduction'],
    feedbackHit: 'Correct — four valid sustainability points with reference to graphs.',
    feedbackMiss: 'Reduce: use fewer aluminium products. Reuse: use cans/containers multiple times. Recycle: melt scrap aluminium (saves 95% energy). Each reduces resource use and environmental damage.',
  },
}
