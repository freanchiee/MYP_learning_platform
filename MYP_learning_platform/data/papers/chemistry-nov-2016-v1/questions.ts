import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2016 · VARIANT 1  (isomorphic to chemistry-nov-2016)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context, with a
// self-contained data-driven INTERACTIVE artefact on every question (no external
// image files). Every answer recomputed.
//   Q1 Combustion/calorimetry:  butane+ethanol → propane (C₃H₈) + methanol camping stove
//   Q2 Frame materials/alloy:   bike (Al/C/Sc) → racing-drone (Ti/C-fibre/Mg) data cards
//   Q3 Atomic/flame colours:    fireworks → emergency distress flares (forensic salts)
//   Q4 Kinetic theory of gases: helium/hot-air balloon → scuba tank + weather balloon
//   Q5 Acid-resistance (Crit B): battery-case metals → acid-rain roofing metals
//   Q6 Simple cell (Volta):     zinc/copper pile → lemon (fruit) battery
//   Q7 Echem cell sim (Crit B): Mg-anode sim → Zn-anode classroom cell simulation
//   Q8 Concentration in cell:   Cu–Ag cell → Zn–Cu (Daniell) cell dilution
//   Q9 Battery storage (Crit C):Li-ion storage temp → phone battery cycle-life vs charge temp
//   Q10 Water quality (Crit D):  Rio Olympics bay → FIFA World Cup host map + copper-mine runoff
//   Q11 Open-pit mine (Crit D):  Carajás iron → Chuquicamata copper (Chile) evaluation
//   Q12 Recycling (Crit D):      steel reduce/reuse/recycle → aluminium can recycling
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2016-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2016,
  totalMarks: 120,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Camping-stove fuels — combustion & calorimetry (Crit A, 11 marks) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Combustion of Camping-Stove Fuels',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 11,
    stem: 'Hikers choose between two portable cooking fuels: propane (C₃H₈) sold in pressurised canisters, and methanol (CH₃OH) sold as a liquid gel. A student compared the two fuels by burning each in a small stove and measuring the heat energy transferred to 200 g of water. The data collected are shown in the figure.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Fuel', 'Mass of fuel burned / g', 'Energy released / kJ', 'Energy per gram / kJ g⁻¹'],
        rows: [
          ['Propane (C₃H₈)', '2.00', '101.6', '50.8'],
          ['Methanol (CH₃OH)', '4.00', '90.0', '22.5'],
        ],
      },
      caption: 'Burner results: mass of fuel burned and the heat energy delivered to the water for each fuel.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Draw** the Lewis (electron dot) structures for propane and methanol, showing all bonding pairs and lone pairs.',
        marks: 2,
        ph: 'Propane: 2 C–C, 8 C–H bonds; methanol: O–H, C–O, 3 C–H bonds with 2 lone pairs on O',
      },
      {
        label: 'b',
        text: '**Identify** the organic class (homologous series) of each fuel.',
        marks: 2,
        ph: 'Propane = alkane; methanol = alcohol (alkanol)',
      },
      {
        label: 'c',
        text: 'The student calculated that 30.0 kJ of heat energy was transferred to the water when methanol was burned. The specific heat capacity of water is 4.19 J g⁻¹°C⁻¹. Using the data in the figure, **calculate** the mass of methanol burned to produce this energy. Give your answer to three significant figures and state the unit.',
        marks: 5,
        ph: 'mass = energy ÷ energy per gram = 30 000 J ÷ 22.5 kJ g⁻¹; show q=mcΔT; answer ≈ 1.33 g',
      },
      {
        label: 'd',
        text: 'Using your answer from part c and the data provided, **identify** which fuel releases more energy per gram. **Justify** your answer.',
        marks: 2,
        ph: 'Propane (50.8 kJ g⁻¹ > 22.5 kJ g⁻¹); releases more kJ per gram than methanol',
      },
    ],
  },

  // ─── Q2: Racing-drone frame materials (Crit C, 7 marks) ─────────────────────
  {
    id: 2,
    crit: 'C',
    type: 'extended',
    topic: 'Properties of Materials for Racing-Drone Frames',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 7,
    stem: 'Racing-drone frames can be manufactured from titanium (Ti), carbon fibre (C) or magnesium (Mg). The data cards below give information about the properties of each element. A racing drone must be light, stiff and able to survive crashes outdoors.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'Titanium (Ti)', 'Carbon fibre (C)', 'Magnesium (Mg)'],
        rows: [
          ['Density / g cm⁻³', '4.5', '1.8', '1.7'],
          ['Strength-to-weight', 'high', 'very high', 'medium'],
          ['Reaction with air / water', 'very slow (passivates)', 'does not react', 'reacts, burns in air'],
          ['Stiffness', 'high', 'very high (rigid)', 'medium'],
        ],
      },
      caption: 'Data cards: physical and chemical properties of the three candidate frame materials.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Interpret** the data cards. **State** two physical properties of titanium AND two physical properties of carbon that make each of them suitable for use in a drone frame.',
        marks: 4,
        ph: 'Ti: corrosion resistant/passivates + reasonable strength-to-weight; C: very high strength-to-weight + rigid/unreactive',
      },
      {
        label: 'b',
        text: '**Suggest** one reason why magnesium alone would not be suitable for a drone frame.',
        marks: 1,
        ph: 'Mg reacts/burns in air or reacts with water — not durable/safe outdoors',
      },
      {
        label: 'c',
        text: 'Using the graph, **state** the effect of adding increasing amounts of magnesium on the yield strength of the aluminium–magnesium alloy.',
        marks: 2,
        ph: 'Adding Mg increases yield strength (positive correlation on the graph)',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Yield strength of aluminium–magnesium alloy',
            xLabel: 'Magnesium added',
            xUnit: '% by mass',
            yLabel: 'Yield strength',
            yUnit: 'MPa',
            xMin: 0,
            xMax: 6,
            yMin: 0,
            yMax: 300,
            xStep: 1,
            yStep: 50,
            dataPoints: [
              { x: 0, y: 90 },
              { x: 1, y: 130 },
              { x: 2, y: 165 },
              { x: 3, y: 205 },
              { x: 4, y: 240 },
              { x: 5, y: 270 },
            ],
          },
          caption: 'Yield strength of the alloy as the percentage of magnesium added increases.',
        },
      },
    ],
  },

  // ─── Q3: Emergency distress flares — atomic structure (Crit A, 6 marks) ─────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic Structure and Emergency Flare Chemistry',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 6,
    stem: 'Maritime distress flares burn metal salts to produce intense coloured light that can be seen for kilometres. Forensic chemists also use the same flame colours to identify which metal ion is present in an unknown salt. The table shows the colours produced by several salts.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Metal salt', 'Flame colour produced'],
        rows: [
          ['Copper(II) sulfate', 'Blue-green'],
          ['Calcium chloride', 'Orange-red'],
          ['Manganese chloride', 'Yellow-green'],
          ['Strontium nitrate', 'Bright red'],
          ['Barium chloride', 'Apple green'],
        ],
      },
      caption: 'Flame-test colours for five metal salts used in flares and forensic analysis.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the periodic table, **state** the colours produced by the Group 2 elements listed in the table.',
        marks: 1,
        ph: 'Group 2: Ca=orange-red; Sr=bright red; Ba=apple green (all three required)',
      },
      {
        label: 'b',
        text: '**State** whether the ignition of a distress flare is an exothermic or endothermic process. **Justify** your answer.',
        marks: 2,
        ph: 'Exothermic; heat and light energy is released to the surroundings during burning',
      },
      {
        label: 'c',
        text: 'Using the periodic table, **identify** one transition metal from the table.',
        marks: 1,
        ph: 'Cu or Mn — d-block elements in Groups 3–12',
      },
      {
        label: 'd',
        text: '**State** the meaning of the term "isotope".',
        marks: 1,
        ph: 'Same element (same protons), different number of neutrons / different mass numbers',
      },
      {
        label: 'e',
        text: 'Strontium-90 (⁹⁰Sr) is sometimes found as a contaminant. **Calculate** the number of neutrons in a strontium-90 atom (atomic number of Sr = 38).',
        marks: 1,
        ph: 'Neutrons = 90 − 38 = 52',
      },
    ],
  },

  // ─── Q4: Scuba & weather balloons — kinetic theory of gases (Crit A, 9) ─────
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Kinetic Theory and the Behaviour of Gases',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 9,
    stem: 'Scuba divers breathe compressed gas from steel tanks, and meteorologists release weather balloons that climb high into the atmosphere. The behaviour of the gases in both can be explained using kinetic particle theory.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Particle model of a gas',
        mode: 'states',
        states: ['gas'],
        substance: 'breathing gas',
        particleCount: 22,
      },
      caption: 'Gas particles are far apart and move quickly in random directions — animate to see how spacing and speed govern gas behaviour.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A balloon filled with helium rises faster and deflates faster than a balloon of the same size filled with ordinary air. Using your knowledge of kinetic particle theory, **explain** why a helium balloon deflates faster.',
        marks: 3,
        ph: 'Air = N₂+O₂; greater molar mass; moves slower; lighter He moves faster and diffuses through membrane faster',
      },
      {
        label: 'b',
        text: 'A weather balloon is only partly filled with helium before launch, yet it expands as it climbs. Using kinetic particle theory, **explain** why the balloon expands as it rises to high altitude.',
        marks: 4,
        ph: 'External pressure falls with altitude; gas particles still push outward; same mass occupies larger volume; balloon swells',
      },
      {
        label: 'c',
        text: 'A scuba tank is filled with air at high pressure at sea level. **Predict** what would happen to the volume of that air if it were released into a flexible bag at the surface. **Explain** your prediction.',
        marks: 2,
        ph: 'Volume increases/expands; pressure drops from high tank pressure to atmospheric; lower pressure → larger volume',
      },
    ],
  },

  // ─── Q5: Acid-rain roofing metals — Crit B investigation (Crit B/C, 23) ─────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Acid Resistance of Roofing Metals Investigation',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 23,
    stem: 'A roofing company needs to choose which metal best survives attack by acid rain, which is mildly acidic because of dissolved sulfur dioxide. To simulate years of weathering quickly, the company tests samples in dilute sulfuric acid (H₂SO₄). Six metals are available for testing: iron, zinc, lead, copper, tin and nickel.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Rate of attack of six roofing metals by dilute sulfuric acid',
        mode: 'bars',
        variable: 'Metal sample (all same surface area)',
        metric: 'Mass lost after 7 days in acid / mg',
        bars: [
          { label: 'Copper', value: 2 },
          { label: 'Lead', value: 9 },
          { label: 'Tin', value: 18 },
          { label: 'Nickel', value: 31 },
          { label: 'Iron', value: 58 },
          { label: 'Zinc', value: 86 },
        ],
        note: 'The more reactive the metal, the more mass is lost to the acid — copper survives best.',
      },
      caption: 'Mass lost by each roofing metal after seven days in dilute sulfuric acid (smaller bar = more acid-resistant).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Design** a complete investigation to determine which of the six metals is most resistant to sulfuric acid. Your design should include a focused research question, a hypothesis with scientific justification, identification of independent, dependent and controlled variables, a step-by-step experimental method, and appropriate safety precautions.',
        marks: 18,
        ph: 'Crit B: RQ, hypothesis (more reactive metal reacts faster/loses more mass), IV/DV/CVs, method steps, goggles/gloves',
      },
      {
        label: 'b',
        text: 'Criterion C: **Design** a table that could be used to record and process all of the data collected during the investigation.',
        marks: 5,
        ph: 'Table: column for each metal, DV columns (mass lost / rate of bubbling), units, repeats, average',
      },
    ],
  },

  // ─── Q6: Lemon (fruit) battery — simple cell (Crit A, 3 marks) ──────────────
  {
    id: 6,
    crit: 'A',
    type: 'extended',
    topic: 'Electrochemical Cells — The Fruit Battery',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 3,
    stem: 'A popular school demonstration uses a lemon as a battery. A strip of zinc and a strip of copper are pushed into the lemon, and the acidic juice acts as the electrolyte that completes the circuit and lights a small LED.',
    artefact: {
      component: 'EchemCellSim',
      data: {
        title: 'The lemon (fruit) battery as a simple cell',
        fixedAnode: 'Zinc',
        cathodeChoices: ['Copper', 'Silver', 'Iron', 'Zinc'],
        voltages: {
          'Zn-Cu': 1.10,
          'Zn-Ag': 1.56,
          'Zn-Fe': 0.32,
        },
        units: 'V',
        voltmeter: true,
      },
      caption: 'Zinc and a second metal in the lemon juice form a simple cell; the acidic juice is the electrolyte carrying the charge.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the type of charged particles that carry the electric current through the acidic lemon juice.',
        marks: 1,
        ph: 'Ions (charged particles in the electrolyte)',
      },
      {
        label: 'b',
        text: '**Describe** what would happen to the electric current if the two metal strips were pushed into a piece of dry cork instead of the lemon. **Explain** your answer.',
        marks: 2,
        ph: 'Current would stop; no electrolyte so ions cannot move; circuit broken/incomplete',
      },
    ],
  },

  // ─── Q7: Classroom echem-cell simulation (Crit B, 17 marks) ─────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Electrochemical Cell Simulation',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 17,
    stem: 'A student used a computer simulation to investigate electrochemical cells. In this simulation, zinc (Zn) was always used as the anode (negative electrode) and was kept constant. Different metals were placed in the positive electrode (cathode) half-cell. The student recorded the cell potential (voltage) produced for each combination.',
    artefact: {
      component: 'EchemCellSim',
      data: {
        title: 'Cell-potential simulation (fixed zinc anode)',
        fixedAnode: 'Zinc',
        cathodeChoices: ['Copper', 'Silver', 'Iron', 'Lead', 'Zinc'],
        voltages: {
          'Zn-Cu': 1.100,
          'Zn-Ag': 1.562,
          'Zn-Fe': 0.323,
          'Zn-Pb': 0.637,
        },
        units: 'V',
        voltmeter: true,
      },
      caption: 'Pick a cathode metal — the voltmeter reads the cell potential the simulation records for a zinc–metal cell.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student placed copper in the cathode half-cell. **Select** the cell potential shown by the simulation for a zinc–copper cell.',
        marks: 1,
        ph: 'Zn–Cu cell: 1.100 V',
        widget: 'radio_select',
        widgetOptions: ['1.100 V', '1.562 V', '0.323 V', '0.637 V', '0.000 V'],
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
        ph: 'IV=metal in positive cell; DV=cell potential; CVs: electrode size, electrolyte concentration, temperature, Zn always in negative cell',
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
        text: 'A student connects a zinc–copper electrochemical cell. Zinc acts as the anode and copper ions are present in the cathode solution. **Predict** and **explain** what happens to the mass of each electrode during the operation of the cell.',
        marks: 4,
        ph: 'Cathode (Cu): Cu deposited, mass increases; Anode (Zn): Zn dissolves, mass decreases',
      },
    ],
  },

  // ─── Q8: Daniell (Zn–Cu) cell concentration effects (Crit C, 9 marks) ───────
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Concentration Effects in a Daniell Cell',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 9,
    stem: 'A student investigated the effect of changing the concentration of ion solutions on the cell potential of a Daniell cell. The cell consists of a zinc electrode in zinc sulfate solution and a copper electrode in copper sulfate solution, joined by a salt bridge.',
    artefact: {
      component: 'EchemCellSim',
      data: {
        title: 'Daniell cell — zinc anode, copper cathode',
        fixedAnode: 'Zinc',
        cathodeChoices: ['Copper', 'Zinc'],
        voltages: {
          'Zn-Cu': 1.10,
        },
        units: 'V',
        voltmeter: true,
      },
      caption: 'A Daniell cell: zinc in zinc sulfate and copper in copper sulfate. Diluting either solution shifts the recorded voltage.',
    },
    tasks: [
      {
        label: 'a',
        text: 'When the zinc sulfate solution is diluted, **state** the effect on the cell potential.',
        marks: 1,
        ph: 'Cell potential increases when zinc sulfate is diluted (fewer Zn²⁺ at the anode)',
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
        text: '**Formulate** the overall ionic equation for the reaction occurring in the zinc–copper (Daniell) cell. Include state symbols in your equation.',
        marks: 4,
        ph: 'Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s); correct balancing, arrow, state symbols',
      },
    ],
  },

  // ─── Q9: Phone battery cycle-life vs charging temperature (Crit C, 6) ───────
  {
    id: 9,
    crit: 'C',
    type: 'extended',
    topic: 'Smartphone Battery Charging Temperature',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 6,
    stem: 'A phone manufacturer warns that charging a lithium-ion battery at high temperatures shortens its useful life. A student tested this by charging and discharging identical batteries 300 times at different temperatures and measuring the percentage of the original capacity remaining at the end.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Battery capacity remaining after 300 charge cycles',
        xLabel: 'Charging temperature',
        xUnit: '°C',
        yLabel: 'Capacity remaining',
        yUnit: '%',
        xMin: 0,
        xMax: 70,
        yMin: 0,
        yMax: 100,
        xStep: 10,
        yStep: 20,
        dataPoints: [
          { x: 5, y: 96 },
          { x: 15, y: 92 },
          { x: 25, y: 88 },
          { x: 35, y: 80 },
          { x: 45, y: 69 },
        ],
        lobf: true,
      },
      caption: 'Capacity remaining after 300 cycles vs charging temperature. Data were collected from 5°C to 45°C.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** a hypothesis for this investigation.',
        marks: 1,
        ph: 'Higher charging temperature → lower percentage capacity remaining (shorter battery life)',
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
        text: 'Using the graph, **estimate** the percentage capacity remaining for a battery charged at 30°C.',
        marks: 1,
        ph: 'Accept 80–86% (≈ 84%) — interpolation within data',
      },
      {
        label: 'd',
        text: 'Using the graph, **estimate** the percentage capacity remaining for a battery charged at 60°C.',
        marks: 1,
        ph: 'Accept 50–60% (≈ 55%) — extrapolation beyond data',
      },
      {
        label: 'e',
        text: '**Compare** the validity of the estimates made in parts c and d. **Justify** your comparison.',
        marks: 2,
        ph: '30°C=valid (interpolation within data range); 60°C=may be invalid (extrapolation outside data range)',
      },
    ],
  },

  // ─── Q10: Acid-mine runoff and the World Cup host map (Crit D, 8 marks) ─────
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Water Quality and the Football World Cup',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 8,
    stem: 'The FIFA Football World Cup is hosted by a different country every four years. Some host cities lie near rivers polluted by acid mine drainage, where copper-mine waste releases sulfuric acid into the water. The table shows which regions have hosted the World Cup.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Region', 'World Cups hosted', 'Example host years'],
        rows: [
          ['Europe', '11', '1934, 1990, 2006, 2018'],
          ['South America', '5', '1930, 1962, 1978, 2014'],
          ['North & Central America', '3', '1970, 1986, 1994'],
          ['Asia', '2', '2002, 2022'],
          ['Africa', '1', '2010'],
          ['Oceania', '0', '— (none yet)'],
        ],
      },
      caption: 'World Cup hosting by region. Use the pattern to suggest a shared feature of regions yet to host.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** one common feature shared by regions that have rarely or never hosted the Football World Cup.',
        marks: 1,
        ph: 'Fewer wealthy/developed nations / Southern hemisphere / Africa & Oceania under-represented / economic inequality',
      },
      {
        label: 'b',
        text: 'Acid mine drainage from copper mining washes sulfuric acid into a river feeding a host city. **State** the effect of this acidic runoff on the concentration of hydrogen ions (H⁺) in the water. **Justify** your answer.',
        marks: 3,
        ph: 'H⁺ concentration increases; sulfuric acid is acidic; acid releases/adds H⁺ ions, lowering pH',
      },
      {
        label: 'c',
        text: '**Discuss** the consequences of these changes to the water quality for living organisms in the river.',
        marks: 4,
        ph: 'Low pH kills organisms; dissolved metals toxic; fewer species/biodiversity falls; food chains disrupted; less oxygen',
      },
    ],
  },

  // ─── Q11: Open-pit copper mining at Chuquicamata (Crit D, 17 marks) ─────────
  {
    id: 11,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental Impact of Copper Mining at Chuquicamata',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'Chuquicamata in the Atacama Desert, Chile, is one of the world\'s largest open-pit copper mines. It produces hundreds of thousands of tonnes of copper each year, but lies in an extremely dry region where water is scarce. The data show the industrial processes and the impacts of the mine on the surrounding environment and local communities.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Indicator', 'Value', 'Note'],
        rows: [
          ['Copper produced / year', '~340 000 t', 'major export revenue for Chile'],
          ['Water used / year', '~50 million m³', 'in one of the driest deserts on Earth'],
          ['Open-pit depth', '~900 m', 'one of the deepest pits in the world'],
          ['Sulfur dioxide from smelting', 'thousands of t', 'air-quality concern for nearby towns'],
          ['Local jobs supported', 'tens of thousands', 'mining is the region\'s main employer'],
        ],
      },
      caption: 'Key figures for the Chuquicamata open-pit copper mine — economic benefits alongside environmental costs.',
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the positive and negative consequences of the open-pit copper mining operations at Chuquicamata on the environment and on the local community. Use the information provided and your own scientific knowledge to support your evaluation. Include suggestions for the future.',
        marks: 17,
        ph: 'Balanced evaluation: + economy/jobs/infrastructure; − water use/SO₂/dust/habitat; future mitigation using science',
      },
    ],
  },

  // ─── Q12: Aluminium can recycling — sustainability (Crit D, 4 marks) ────────
  {
    id: 12,
    crit: 'D',
    type: 'extended',
    topic: 'Sustainability in Aluminium Production',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 4,
    stem: 'Aluminium is extracted from the ore bauxite by electrolysis, a process that uses enormous amounts of electricity. Recycling aluminium drinks cans uses only a small fraction of that energy. The figure shows data about aluminium recycling and the associated energy savings.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Route to 1 tonne of aluminium', 'Energy used / GJ', 'CO₂ emitted / t'],
        rows: [
          ['From bauxite ore (electrolysis)', '170', '12'],
          ['From recycled cans (remelting)', '8', '0.6'],
        ],
      },
      caption: 'Energy and CO₂ for making aluminium from ore versus from recycled cans — recycling saves about 95% of the energy.',
    },
    tasks: [
      {
        label: '',
        text: '**Suggest** ways in which the principles of reduce, reuse and recycle can be applied to the aluminium industry to minimise its environmental impact. Use the data from the figure to support your answer.',
        marks: 4,
        ph: 'Conserve finite bauxite; recycling uses ~95% less energy and far less CO₂; reduce mining waste; reuse before recycling',
      },
    ],
  },
]
