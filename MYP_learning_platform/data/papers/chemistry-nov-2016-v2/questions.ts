import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2016 · VARIANT 2  (isomorphic to chemistry-nov-2016)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context — distinct
// from both the source and Variant 1 — with a self-contained data-driven
// INTERACTIVE artefact on every question (no external image files). Answers
// recomputed throughout.
//   Q1 Combustion/calorimetry:  butane+ethanol → methane (CH₄, biogas) + propan-1-ol generator fuels
//   Q2 Frame materials/alloy:   bike (Al/C/Sc) → satellite panel (beryllium Be / carbon fibre / sodium Na)
//   Q3 Atomic/flame colours:    fireworks → school flame-test competition salts (Li / Na / K / Cu / Ca)
//   Q4 Kinetic theory of gases: helium/hot-air balloon → NH₃/HCl diffusion race + hot car tyre
//   Q5 Acid-resistance (Crit B): battery-case metals → geothermal-plant pipe metals in acidic water
//   Q6 Simple cell (Volta):     zinc/copper pile → saltwater (brine) two-electrode cell
//   Q7 Echem cell sim (Crit B): Mg-anode sim → Fe-anode classroom cell simulation
//   Q8 Concentration in cell:   Cu–Ag cell → Mg–Cu cell dilution
//   Q9 Battery storage (Crit C):Li-ion storage temp → rechargeable AA self-discharge vs storage temp
//   Q10 Water quality (Crit D):  Rio Olympics bay → Commonwealth Games map + alkaline red-mud runoff
//   Q11 Open-pit mine (Crit D):  Carajás iron → Hambach lignite (brown coal) mine, Germany
//   Q12 Recycling (Crit D):      steel reduce/reuse/recycle → glass-bottle recycling
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2016-v2',
  subject: 'Chemistry',
  session: 'November',
  year: 2016,
  totalMarks: 120,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Generator fuels — combustion & calorimetry (Crit A, 11 marks) ──────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Combustion of Generator Fuels',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 11,
    stem: 'A remote farm can run its backup generator on methane (CH₄) captured as biogas, or on propan-1-ol (C₃H₇OH) made from fermented crop waste. A student compared the two fuels by burning each in a burner and measuring the heat energy transferred to a fixed mass of water. The data collected are shown in the figure.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Fuel', 'Mass of fuel burned / g', 'Energy released / kJ', 'Energy per gram / kJ g⁻¹'],
        rows: [
          ['Methane (CH₄)', '3.00', '167.4', '55.8'],
          ['Propan-1-ol (C₃H₇OH)', '5.00', '167.5', '33.5'],
        ],
      },
      caption: 'Burner results: mass of fuel burned and the heat energy delivered to the water for each fuel.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Draw** the Lewis (electron dot) structures for methane and propan-1-ol, showing all bonding pairs and lone pairs.',
        marks: 2,
        ph: 'Methane: 4 C–H bonds, no lone pairs; propan-1-ol: 2 C–C, 7 C–H, C–O and O–H bonds with 2 lone pairs on O',
      },
      {
        label: 'b',
        text: '**Identify** the organic class (homologous series) of each fuel.',
        marks: 2,
        ph: 'Methane = alkane; propan-1-ol = alcohol (alkanol)',
      },
      {
        label: 'c',
        text: 'The student calculated that 30.0 kJ of heat energy was transferred to the water when propan-1-ol was burned. The specific heat capacity of water is 4.19 J g⁻¹°C⁻¹. Using the data in the figure, **calculate** the mass of propan-1-ol burned to produce this energy. Give your answer to three significant figures and state the unit.',
        marks: 5,
        ph: 'mass = energy ÷ energy per gram = 30.0 kJ ÷ 33.5 kJ g⁻¹; show q=mcΔT; answer ≈ 0.896 g',
      },
      {
        label: 'd',
        text: 'Using your answer from part c and the data provided, **identify** which fuel releases more energy per gram. **Justify** your answer.',
        marks: 2,
        ph: 'Methane (55.8 kJ g⁻¹ > 33.5 kJ g⁻¹); releases more kJ per gram than propan-1-ol',
      },
    ],
  },

  // ─── Q2: Satellite-panel materials (Crit C, 7 marks) ────────────────────────
  {
    id: 2,
    crit: 'C',
    type: 'extended',
    topic: 'Properties of Materials for Satellite Panels',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 7,
    stem: 'Structural panels for a small satellite can be manufactured from beryllium (Be), carbon fibre (C) or sodium (Na). The data cards below give information about the properties of each element. A satellite panel must be extremely light, stiff and survive the harsh conditions of space.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'Beryllium (Be)', 'Carbon fibre (C)', 'Sodium (Na)'],
        rows: [
          ['Density / g cm⁻³', '1.85', '1.8', '0.97'],
          ['Strength-to-weight', 'very high', 'very high', 'very low (soft)'],
          ['Reaction with air / water', 'very slow', 'does not react', 'reacts violently with water'],
          ['Stiffness', 'very high', 'very high (rigid)', 'very low'],
        ],
      },
      caption: 'Data cards: physical and chemical properties of the three candidate panel materials.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Interpret** the data cards. **State** two physical properties of beryllium AND two physical properties of carbon that make each of them suitable for use in a satellite panel.',
        marks: 4,
        ph: 'Be: very high strength-to-weight + very stiff/low density; C: very high strength-to-weight + rigid/unreactive',
      },
      {
        label: 'b',
        text: '**Suggest** one reason why sodium alone would not be suitable for a satellite panel.',
        marks: 1,
        ph: 'Na is very soft and reacts violently with water — too weak/reactive to be a structural material',
      },
      {
        label: 'c',
        text: 'Using the graph, **state** the effect of adding increasing amounts of copper on the yield strength of the aluminium–copper alloy.',
        marks: 2,
        ph: 'Adding Cu increases yield strength (positive correlation on the graph)',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Yield strength of aluminium–copper alloy',
            xLabel: 'Copper added',
            xUnit: '% by mass',
            yLabel: 'Yield strength',
            yUnit: 'MPa',
            xMin: 0,
            xMax: 5,
            yMin: 0,
            yMax: 400,
            xStep: 1,
            yStep: 50,
            dataPoints: [
              { x: 0, y: 95 },
              { x: 1, y: 160 },
              { x: 2, y: 230 },
              { x: 3, y: 290 },
              { x: 4, y: 345 },
            ],
          },
          caption: 'Yield strength of the alloy as the percentage of copper added increases.',
        },
      },
    ],
  },

  // ─── Q3: Flame-test competition — atomic structure (Crit A, 6 marks) ────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic Structure and Flame-Test Chemistry',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 6,
    stem: 'In a school chemistry competition, students must identify unknown metal salts by the colour each gives to a Bunsen flame. Heating a salt excites its metal ions, which then emit a characteristic colour of light. The table shows the colours produced by several salts.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Metal salt', 'Flame colour produced'],
        rows: [
          ['Lithium chloride', 'Crimson red'],
          ['Sodium chloride', 'Yellow-orange'],
          ['Potassium chloride', 'Lilac'],
          ['Copper(II) chloride', 'Blue-green'],
          ['Calcium chloride', 'Orange-red'],
        ],
      },
      caption: 'Flame-test colours for five metal salts used in the identification competition.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the periodic table, **state** the colours produced by the Group 1 elements listed in the table.',
        marks: 1,
        ph: 'Group 1: Li=crimson red; Na=yellow-orange; K=lilac (all three required)',
      },
      {
        label: 'b',
        text: '**State** whether heating the salt in the Bunsen flame is an exothermic or endothermic process for the salt. **Justify** your answer.',
        marks: 2,
        ph: 'Endothermic; the salt absorbs heat energy from the flame/surroundings to excite the metal ions',
      },
      {
        label: 'c',
        text: 'Using the periodic table, **identify** one transition metal from the table.',
        marks: 1,
        ph: 'Cu (copper) — a d-block element in Groups 3–12',
      },
      {
        label: 'd',
        text: '**State** the meaning of the term "isotope".',
        marks: 1,
        ph: 'Same element (same protons), different number of neutrons / different mass numbers',
      },
      {
        label: 'e',
        text: 'Lithium-7 (⁷Li) is the most common isotope of lithium. **Calculate** the number of neutrons in a lithium-7 atom (atomic number of Li = 3).',
        marks: 1,
        ph: 'Neutrons = 7 − 3 = 4',
      },
    ],
  },

  // ─── Q4: Diffusion race & hot tyre — kinetic theory (Crit A, 9 marks) ───────
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Kinetic Theory and the Behaviour of Gases',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 9,
    stem: 'Gases behave in ways that can be explained using kinetic particle theory: ammonia and hydrogen chloride gases diffuse along a tube to meet as a white ring, a car tyre warms and its pressure rises on a long drive, and a sealed snack bag swells on an aeroplane. Each of these can be explained by the motion of gas particles.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Particle model of a gas',
        mode: 'states',
        states: ['gas'],
        substance: 'gas particles',
        particleCount: 22,
      },
      caption: 'Gas particles are far apart and move quickly in random directions — animate to see how spacing and speed govern gas behaviour.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Ammonia (NH₃) and hydrogen chloride (HCl) gas are released at opposite ends of a glass tube. The white ring of ammonium chloride forms closer to the HCl end. Using your knowledge of kinetic particle theory, **explain** why ammonia diffuses faster than hydrogen chloride.',
        marks: 3,
        ph: 'NH₃ has smaller molar mass than HCl; lighter particles move faster at the same temperature; so NH₃ diffuses further/faster',
      },
      {
        label: 'b',
        text: 'After a long motorway drive, the air inside a car tyre is hotter than when the journey began, and the tyre pressure has risen. Using kinetic particle theory, **explain** why heating the trapped air increases the pressure in the tyre.',
        marks: 4,
        ph: 'Heating increases KE; particles move faster; collide with tyre walls more often and harder; pressure increases at fixed volume',
      },
      {
        label: 'c',
        text: 'A sealed bag of crisps is produced at sea level. **Predict** what will happen to the bag if it is taken on board an aeroplane at high altitude. **Explain** your prediction.',
        marks: 2,
        ph: 'Bag inflates/expands; external (cabin) pressure is lower than at sea level; internal pressure unchanged → bag swells',
      },
    ],
  },

  // ─── Q5: Geothermal-plant pipe metals — Crit B (Crit B/C, 23 marks) ─────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Acid Resistance of Geothermal Pipe Metals Investigation',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 23,
    stem: 'A geothermal power plant pumps naturally acidic hot water from underground, and its engineers must choose a metal for the pipework that best resists this acid. To test candidates quickly they use dilute sulfuric acid (H₂SO₄). Six metals are available for testing: iron, zinc, lead, copper, tin and magnesium.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Rate of attack of six pipe metals by dilute sulfuric acid',
        mode: 'bars',
        variable: 'Metal sample (all same surface area)',
        metric: 'Volume of gas produced in 5 min / cm³',
        bars: [
          { label: 'Copper', value: 0 },
          { label: 'Lead', value: 4 },
          { label: 'Tin', value: 11 },
          { label: 'Iron', value: 26 },
          { label: 'Zinc', value: 48 },
          { label: 'Magnesium', value: 92 },
        ],
        note: 'The more reactive the metal, the faster it reacts and the more hydrogen gas it produces — copper barely reacts.',
      },
      caption: 'Gas produced by each pipe metal in five minutes in dilute sulfuric acid (smaller bar = more acid-resistant).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Design** a complete investigation to determine which of the six metals is most resistant to sulfuric acid. Your design should include a focused research question, a hypothesis with scientific justification, identification of independent, dependent and controlled variables, a step-by-step experimental method, and appropriate safety precautions.',
        marks: 18,
        ph: 'Crit B: RQ, hypothesis (more reactive metal reacts faster/produces more gas), IV/DV/CVs, method steps, goggles/gloves',
      },
      {
        label: 'b',
        text: 'Criterion C: **Design** a table that could be used to record and process all of the data collected during the investigation.',
        marks: 5,
        ph: 'Table: column for each metal, DV columns (gas volume / mass lost), units, repeats, average',
      },
    ],
  },

  // ─── Q6: Saltwater (brine) cell — simple cell (Crit A, 3 marks) ─────────────
  {
    id: 6,
    crit: 'A',
    type: 'extended',
    topic: 'Electrochemical Cells — The Saltwater Battery',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 3,
    stem: 'A simple emergency battery can be built by standing a magnesium strip and a copper strip in a cup of salt water (brine). The dissolved salt makes the water an electrolyte that completes the circuit and powers a small bulb.',
    artefact: {
      component: 'EchemCellSim',
      data: {
        title: 'The saltwater (brine) battery as a simple cell',
        fixedAnode: 'Magnesium',
        cathodeChoices: ['Copper', 'Silver', 'Iron', 'Magnesium'],
        voltages: {
          'Mg-Cu': 2.71,
          'Mg-Ag': 3.17,
          'Mg-Fe': 1.93,
        },
        units: 'V',
        voltmeter: true,
      },
      caption: 'Magnesium and a second metal in brine form a simple cell; the dissolved salt makes the water an electrolyte carrying the charge.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the type of charged particles that carry the electric current through the salt water.',
        marks: 1,
        ph: 'Ions (the Na⁺ and Cl⁻ ions in the brine electrolyte)',
      },
      {
        label: 'b',
        text: '**Describe** what would happen to the electric current if the two metal strips were stood in a cup of pure (distilled) water instead of salt water. **Explain** your answer.',
        marks: 2,
        ph: 'Current would stop/be negligible; pure water has almost no ions; ions cannot carry charge → circuit incomplete',
      },
    ],
  },

  // ─── Q7: Classroom echem-cell simulation — fixed iron anode (Crit B, 17) ────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Electrochemical Cell Simulation',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 17,
    stem: 'A student used a computer simulation to investigate electrochemical cells. In this simulation, iron (Fe) was always used as the anode (negative electrode) and was kept constant. Different metals were placed in the positive electrode (cathode) half-cell. The student recorded the cell potential (voltage) produced for each combination.',
    artefact: {
      component: 'EchemCellSim',
      data: {
        title: 'Cell-potential simulation (fixed iron anode)',
        fixedAnode: 'Iron',
        cathodeChoices: ['Copper', 'Silver', 'Tin', 'Lead', 'Iron'],
        voltages: {
          'Fe-Cu': 0.777,
          'Fe-Ag': 1.239,
          'Fe-Sn': 0.304,
          'Fe-Pb': 0.314,
        },
        units: 'V',
        voltmeter: true,
      },
      caption: 'Pick a cathode metal — the voltmeter reads the cell potential the simulation records for an iron–metal cell.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student placed silver in the cathode half-cell. **Select** the cell potential shown by the simulation for an iron–silver cell.',
        marks: 1,
        ph: 'Fe–Ag cell: 1.239 V',
        widget: 'radio_select',
        widgetOptions: ['1.239 V', '0.777 V', '0.304 V', '0.314 V', '0.000 V'],
      },
      {
        label: 'b',
        text: '**State** a hypothesis for this investigation relating the difference in reactivity of the two metals to the cell potential produced.',
        marks: 1,
        ph: 'Greater difference in reactivity between metals → higher cell potential',
      },
      {
        label: 'c',
        text: '**Identify** the independent variable, the dependent variable and two controlled variables for this investigation.',
        marks: 4,
        ph: 'IV=metal in positive cell; DV=cell potential; CVs: electrode size, electrolyte concentration, temperature, Fe always in negative cell',
      },
      {
        label: 'd',
        text: '**Discuss** at least four reasons why the values recorded in the simulation may differ from published standard electrode potential values.',
        marks: 4,
        ph: 'Non-standard conditions; different concentrations; dirty electrodes; temperature not constant; heat loss',
      },
      {
        label: 'e',
        text: '**State** one safety precaution a student should take when working with acid solutions in a real electrochemical cell experiment.',
        marks: 1,
        ph: 'Wear eye protection / wash hands after use',
      },
      {
        label: 'f',
        text: '**State** the type of reaction occurring at the anode AND the type of reaction occurring at the cathode of an electrochemical cell.',
        marks: 2,
        ph: 'Anode: oxidation (electrons lost); Cathode: reduction (electrons gained)',
      },
      {
        label: 'g',
        text: 'A student connects an iron–copper electrochemical cell. Iron acts as the anode and copper ions are present in the cathode solution. **Predict** and **explain** what happens to the mass of each electrode during the operation of the cell.',
        marks: 4,
        ph: 'Cathode (Cu): Cu deposited, mass increases; Anode (Fe): Fe dissolves, mass decreases',
      },
    ],
  },

  // ─── Q8: Mg–Cu cell concentration effects (Crit C, 9 marks) ─────────────────
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Concentration Effects in a Magnesium–Copper Cell',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 9,
    stem: 'A student investigated the effect of changing the concentration of ion solutions on the cell potential of a magnesium–copper cell. The cell consists of a magnesium electrode in magnesium sulfate solution and a copper electrode in copper sulfate solution, joined by a salt bridge.',
    artefact: {
      component: 'EchemCellSim',
      data: {
        title: 'Magnesium–copper cell — magnesium anode, copper cathode',
        fixedAnode: 'Magnesium',
        cathodeChoices: ['Copper', 'Magnesium'],
        voltages: {
          'Mg-Cu': 2.71,
        },
        units: 'V',
        voltmeter: true,
      },
      caption: 'A magnesium–copper cell: Mg in magnesium sulfate and Cu in copper sulfate. Diluting either solution shifts the recorded voltage.',
    },
    tasks: [
      {
        label: 'a',
        text: 'When the magnesium sulfate solution is diluted, **state** the effect on the cell potential.',
        marks: 1,
        ph: 'Cell potential increases when magnesium sulfate is diluted (fewer Mg²⁺ at the anode)',
      },
      {
        label: 'b',
        text: '**Explain** how diluting the copper sulfate solution changes the colour of that solution. Include the reason for this colour change.',
        marks: 3,
        ph: 'Colour becomes paler/lighter blue; fewer Cu²⁺ ions per volume; Cu²⁺ ions are responsible for the blue colour',
      },
      {
        label: 'c',
        text: 'When the copper sulfate solution is diluted, **state** the effect on the cell potential.',
        marks: 1,
        ph: 'Cell potential decreases when copper sulfate is diluted (fewer Cu²⁺ at the cathode)',
      },
      {
        label: 'd',
        text: '**Formulate** the overall ionic equation for the reaction occurring in the magnesium–copper cell. Include state symbols in your equation.',
        marks: 4,
        ph: 'Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s); correct balancing, arrow, state symbols',
      },
    ],
  },

  // ─── Q9: Rechargeable AA self-discharge vs storage temp (Crit C, 6 marks) ───
  {
    id: 9,
    crit: 'C',
    type: 'extended',
    topic: 'Rechargeable Battery Self-Discharge',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 6,
    stem: 'Rechargeable AA batteries slowly lose charge while sitting unused — a process called self-discharge. A student investigated how storage temperature affects this by charging identical batteries fully, storing them for three months at different temperatures, and measuring the percentage of charge remaining.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Charge remaining after 3 months of storage',
        xLabel: 'Storage temperature',
        xUnit: '°C',
        yLabel: 'Charge remaining',
        yUnit: '%',
        xMin: 0,
        xMax: 70,
        yMin: 0,
        yMax: 100,
        xStep: 10,
        yStep: 20,
        dataPoints: [
          { x: 5, y: 94 },
          { x: 15, y: 88 },
          { x: 25, y: 80 },
          { x: 35, y: 69 },
          { x: 45, y: 55 },
        ],
        lobf: true,
      },
      caption: 'Charge remaining after three months vs storage temperature. Data were collected from 5°C to 45°C.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** a hypothesis for this investigation.',
        marks: 1,
        ph: 'Higher storage temperature → lower percentage charge remaining (faster self-discharge)',
      },
      {
        label: 'b',
        text: '**Select** the most appropriate type of graph to display the results of this investigation.',
        marks: 1,
        ph: 'Scatter (xy) graph — relationship between two continuous variables',
        widget: 'radio_select',
        widgetOptions: ['Scatter (xy) graph', 'Bar chart', 'Pie chart', 'Histogram'],
      },
      {
        label: 'c',
        text: 'Using the graph, **estimate** the percentage charge remaining for a battery stored at 30°C.',
        marks: 1,
        ph: 'Accept 72–78% (≈ 75%) — interpolation within data',
      },
      {
        label: 'd',
        text: 'Using the graph, **estimate** the percentage charge remaining for a battery stored at 60°C.',
        marks: 1,
        ph: 'Accept 33–43% (≈ 38%) — extrapolation beyond data',
      },
      {
        label: 'e',
        text: '**Compare** the validity of the estimates made in parts c and d. **Justify** your comparison.',
        marks: 2,
        ph: '30°C=valid (interpolation within data range); 60°C=may be invalid (extrapolation outside data range)',
      },
    ],
  },

  // ─── Q10: Alkaline red-mud runoff & Commonwealth Games map (Crit D, 8) ──────
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Water Quality and the Commonwealth Games',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 8,
    stem: 'The Commonwealth Games are held every four years in a different host city. Near one host city, a bauxite refinery stores "red mud" — a strongly alkaline waste rich in sodium hydroxide and aluminium oxide. Red mud sometimes leaks into nearby rivers. The table shows which regions have hosted the Commonwealth Games.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Region', 'Games hosted', 'Example host years'],
        rows: [
          ['United Kingdom & Europe', '8', '1934, 1986, 2002, 2014, 2022'],
          ['Australia & New Zealand', '8', '1938, 1962, 1990, 2006, 2018'],
          ['Canada', '4', '1930, 1954, 1978, 1994'],
          ['Asia', '1', '2010'],
          ['Caribbean', '1', '1966'],
          ['Africa', '0', '— (none yet)'],
        ],
      },
      caption: 'Commonwealth Games hosting by region. Use the pattern to suggest a shared feature of regions yet to host.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** one common feature shared by regions that have rarely or never hosted the Commonwealth Games.',
        marks: 1,
        ph: 'Fewer wealthy/developed nations / Africa under-represented / less infrastructure / economic inequality',
      },
      {
        label: 'b',
        text: 'Alkaline red mud leaks into a river feeding a host city. **State** the effect of this alkaline runoff on the concentration of hydrogen ions (H⁺) in the water. **Justify** your answer.',
        marks: 3,
        ph: 'H⁺ concentration decreases; red mud is alkaline/basic (NaOH); OH⁻ neutralises/removes H⁺, raising pH',
      },
      {
        label: 'c',
        text: '**Discuss** the consequences of these changes to the water quality for living organisms in the river.',
        marks: 4,
        ph: 'High pH kills organisms; caustic water damages tissues; biodiversity falls; food chains disrupted; reduced clarity/light',
      },
    ],
  },

  // ─── Q11: Open-pit lignite mining at Hambach (Crit D, 17 marks) ─────────────
  {
    id: 11,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental Impact of Lignite Mining at Hambach',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'The Hambach mine in western Germany is one of Europe\'s largest open-pit lignite (brown coal) mines. Giant excavators strip away soil and forest to reach the coal, which is burned in nearby power stations to generate electricity. The data show the industrial processes and the impacts of the mine on the surrounding environment and local communities.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Indicator', 'Value', 'Note'],
        rows: [
          ['Lignite produced / year', '~40 million t', 'fuels nearby power stations'],
          ['Forest cleared (Hambach Forest)', '~3 900 ha', 'ancient woodland removed for the pit'],
          ['Open-pit depth', '~370 m', 'one of the deepest pits in Europe'],
          ['CO₂ from burning the lignite', 'tens of millions of t', 'lignite is a high-carbon fuel'],
          ['Local jobs supported', 'thousands', 'mining and power are major employers'],
        ],
      },
      caption: 'Key figures for the Hambach open-pit lignite mine — energy and jobs alongside environmental costs.',
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the positive and negative consequences of the open-pit lignite mining operations at Hambach on the environment and on the local community. Use the information provided and your own scientific knowledge to support your evaluation. Include suggestions for the future.',
        marks: 17,
        ph: 'Balanced evaluation: + electricity/jobs/local economy; − deforestation/CO₂/habitat/displacement; future mitigation/renewables',
      },
    ],
  },

  // ─── Q12: Glass-bottle recycling — sustainability (Crit D, 4 marks) ─────────
  {
    id: 12,
    crit: 'D',
    type: 'extended',
    topic: 'Sustainability in Glass Production',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 4,
    stem: 'Glass is made by melting sand, limestone and soda ash together at very high temperature in a furnace. Recycling glass bottles uses recycled glass (cullet), which melts at a lower temperature than raw materials and so saves energy. The figure shows data about glass recycling and the associated energy and CO₂ savings.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Route to 1 tonne of glass', 'Energy used / GJ', 'CO₂ emitted / kg'],
        rows: [
          ['From raw materials (sand, limestone, soda ash)', '8.0', '580'],
          ['From recycled cullet (remelting)', '5.6', '320'],
        ],
      },
      caption: 'Energy and CO₂ for making glass from raw materials versus from recycled cullet — recycling saves energy and CO₂.',
    },
    tasks: [
      {
        label: '',
        text: '**Suggest** ways in which the principles of reduce, reuse and recycle can be applied to the glass industry to minimise its environmental impact. Use the data from the figure to support your answer.',
        marks: 4,
        ph: 'Conserve finite sand/limestone; cullet uses less energy (5.6 vs 8.0 GJ) and less CO₂ (320 vs 580 kg); reuse bottles; reduce waste',
      },
    ],
  },
]
