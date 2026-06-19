import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2020 · VARIANT 2  (isomorphic to chemistry-nov-2020)
// THEME: space exploration — Mars rocks, the Martian atmosphere, in-situ
// resource use, hand warmers, radiation shielding, planting Mars.
// Every question re-tests the SAME construct as the source (crit, command term,
// marks, task structure, widget type/counts, tags) in a NEW real-world context,
// with a self-contained data-driven INTERACTIVE artefact in each question's
// context slot. Every numeric answer recomputed. No image files, no markdown tables.
//   Q1 %-by-mass + rock class:  Hawaii lava SiO₂ → Martian rock / meteorite silica
//   Q2 noble gases/isotopes:    volcanic gas/Ne → Mars atmosphere gas/argon (⁴⁰Ar)
//   Q3 alkenes/cracking/incin:  oil plastics → recycled spacecraft plastics, cracking
//   Q4 catalyst/temp vs rate:   glow stick → chemical hand-warmer (iron oxidation)
//   Q5 Crit B design:           sunscreen ingredient → radiation-shielding additive
//   Q6 Crit C graph:            myporium absorbance → new dye "stellarine"
//   Q7 redox/balancing/state:   Fe carbonation → Ca in-situ resource carbonation
//   Q8 Crit D evaluate:         CO₂ sinks → carbon-utilisation systems for Mars/Earth
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string
  subject: string
  session: string
  year: number
  totalMarks: number
  durationMinutes: number
  criteria: string[]
}

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2020-v2',
  subject: 'Chemistry',
  session: 'November',
  year: 2020,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Martian rock silica content (Crit A, 7 marks) ─────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Martian rocks and SiO₂ content',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 7,
    stem: "Rovers exploring Mars heat and analyse rock samples to learn how the planet formed. Volcanic rocks on Mars solidified from molten magma billions of years ago. The rocks are classified by their SiO₂ content by mass: Basaltic 44.0–53.0%, Intermediate 53.0–63.0%, Felsic 63.0–76.0%. A 2.00 g sample of rock studied by the Perseverance rover in Jezero Crater contained 1.45 g of SiO₂ (72.5%). A 2.00 g meteorite sample that fell to Earth from Mars contained 1.07 g of SiO₂.",
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Martian magma cooling: liquid magma → solid rock',
        mode: 'freeze',
        substance: 'molten rock',
        states: ['liquid (molten magma)', 'solid (rock)'],
        before: 'In hot molten magma the particles are spaced apart and free to move past one another.',
        after: 'As the magma cools the particles lose energy and lock into a fixed, close-packed solid rock.',
        particleCount: 36,
      },
      caption: 'When molten Martian magma cools it changes from a liquid into solid rock — a physical change of state.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the physical process that takes place when molten magma cools down to form solid rock.',
        marks: 1,
        ph: 'Choose the correct physical process name',
        widget: 'radio_select',
        widgetOptions: ['Solidification', 'Crystallisation', 'Evaporation', 'Melting'],
      },
      {
        label: 'b',
        text: 'A major component of Martian rock is SiO₂, with oxides of iron and calcium present in different proportions. **Determine** the missing information and complete the table. (Oxide names and formulae: silicon dioxide / SiO₂; calcium oxide / CaO)',
        marks: 2,
        ph: 'Fill in silicon dioxide and CaO',
        widget: 'fill_blank',
        widgetItems: ['Oxide name for SiO₂', 'Formula for calcium oxide'],
      },
      {
        label: 'c',
        text: '**Select** the type of rock studied by Perseverance in Jezero Crater (72.5% SiO₂).',
        marks: 1,
        ph: 'Felsic range is 63.0–76.0%',
        widget: 'radio_select',
        widgetOptions: ['Basaltic', 'Intermediate', 'Felsic'],
      },
      {
        label: 'd',
        text: '**Calculate** the percentage of SiO₂ in the Martian meteorite sample. (1.07 g SiO₂ in a 2.00 g sample)',
        marks: 2,
        ph: '1.07/2.00 × 100 = 53.5%',
      },
      {
        label: 'e',
        text: 'Using your answer from part (d), **select** the type of the Martian meteorite rock.',
        marks: 1,
        ph: 'Intermediate range is 53.0–63.0%',
        widget: 'radio_select',
        widgetOptions: ['Basaltic', 'Intermediate', 'Felsic'],
      },
    ],
  },

  // ─── Q2: Martian atmosphere gases and noble gases (Crit A, 9 marks) ────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'The Martian atmosphere and noble gases',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 9,
    stem: 'The thin Martian atmosphere is mostly carbon dioxide (CO₂), but it also contains small amounts of other gases including nitrogen (N₂), sulfur dioxide (SO₂) and hydrogen sulfide (H₂S) released by ancient volcanoes. Mars also has more of the noble gas argon than Earth does, along with traces of neon and krypton. Scientists measure these noble gases to work out how Mars lost most of its atmosphere to space.',
    artefact: {
      component: 'SpectrumSim',
      data: {
        title: 'Noble gases across the periodic table (Group 18)',
        mode: 'scrub',
        bands: ['He (Period 1)', 'Ne (Period 2)', 'Ar (Period 3)', 'Kr (Period 4)', 'Xe (Period 5)'],
        axis: 'increasing period / atomic number →',
        target: 'Ar (Period 3)',
      },
      caption: 'The noble gases sit in Group 18. Scrub across to find which period argon (Ar) belongs to.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why rain falling through an ancient Martian volcanic atmosphere could have had pH values as low as 1.0.',
        marks: 2,
        ph: 'Acidic gases (SO₂, H₂S) dissolve in water to form acids',
      },
      {
        label: 'b',
        text: '**Select** the Lewis (dot and cross) structure of H₂S.',
        marks: 1,
        ph: 'Correct structure shows 2 bonding pairs and 2 lone pairs on S',
        widget: 'radio_select',
        widgetOptions: [
          'A — S with 2 bonding pairs to H and 2 lone pairs',
          'B — S with 2 bonding pairs to H and no lone pairs',
          'C — S with 1 bonding pair and 3 lone pairs',
          'D — S double-bonded to one H',
        ],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="150" fill="#ffffff"/><text x="260" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four proposed dot-and-cross structures for H₂S</text><g font-size="13" text-anchor="middle"><text x="65" y="58" fill="#0b7285" font-weight="700">A</text><text x="65" y="92" fill="#334155">H : S : H</text><text x="65" y="110" fill="#94a3ad" font-size="9">2 lone pairs on S</text><text x="195" y="58" fill="#0b7285" font-weight="700">B</text><text x="195" y="92" fill="#334155">H : S : H</text><text x="195" y="110" fill="#94a3ad" font-size="9">0 lone pairs on S</text><text x="325" y="58" fill="#0b7285" font-weight="700">C</text><text x="325" y="92" fill="#334155">H : S (3 lone pairs)</text><text x="325" y="110" fill="#94a3ad" font-size="9">1 bond only</text><text x="455" y="58" fill="#0b7285" font-weight="700">D</text><text x="455" y="92" fill="#334155">H = S</text><text x="455" y="110" fill="#94a3ad" font-size="9">double bond</text></g></svg>',
          },
          caption: 'S has 6 outer electrons: it forms 2 single bonds to H and keeps 2 lone pairs.',
        },
      },
      {
        label: 'c',
        text: 'Use the periodic table to **state** the period of argon.',
        marks: 1,
        ph: 'Period 3',
      },
      {
        label: 'd',
        text: 'Argon exists as a mixture of isotopes. **Determine** the number of protons, neutrons, and electrons in an atom of ⁴⁰Ar (atomic number 18).',
        marks: 3,
        ph: 'Protons=18, Neutrons=22, Electrons=18',
      },
      {
        label: 'e',
        text: '**Draw** the electron configuration of neon showing 2 electrons in the first shell and 8 in the outer shell.',
        marks: 2,
        ph: '2 electrons in first shell, 8 in outer shell (2.8)',
      },
    ],
  },

  // ─── Q3: Recycling spacecraft plastics (Crit A, 10 marks) ──────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Recycling spacecraft plastics and waste',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 10,
    stem: 'On a long space mission every kilogram of waste matters, so astronauts recycle plastic packaging into new parts using onboard 3D printers. Traditional plastics are made from chemicals obtained from crude oil. Molecules A and B are the small unsaturated building blocks of two common plastics (A = propene, B = ethene). A space habitat also burns some non-recyclable waste in a sealed high-temperature incinerator to recover energy, with the exhaust gases carefully cleaned before release.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Breakdown of three recycled-plastic samples in a compost reactor',
        mode: 'saturating',
        xLabel: 'Time / weeks',
        yLabel: 'Mass broken down / %',
        xAxis: { label: 'Time / weeks', min: 0, max: 12, tick: 2 },
        yAxis: { label: 'Mass broken down / %', min: 0, max: 100, tick: 20 },
        series: [
          { label: 'Sample A', color: 'teal', plateau: 94 },
          { label: 'Sample C', color: 'orange', plateau: 68 },
          { label: 'Sample B', color: 'purple', plateau: 38 },
        ],
        note: 'Sample A breaks down fastest — its particles have the largest surface area (smallest particle size).',
      },
      caption: 'Smaller plastic particles have more surface area for microbes, so they break down faster. Compare how far each sample has degraded.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the chemical classification of molecules A (CH₂=CHCH₃) and B (CH₂=CH₂).',
        marks: 1,
        ph: 'Both contain a C=C double bond',
        widget: 'radio_select',
        widgetOptions: ['Alkene', 'Alkane', 'Alcohol', 'Carboxylic acid'],
      },
      {
        label: 'b',
        text: '**State** the name of each chemical A and B.',
        marks: 2,
        ph: 'A = propene, B = ethene',
        widget: 'fill_blank',
        widgetItems: ['Name of A', 'Name of B'],
      },
      {
        label: 'c',
        text: 'Molecules A and B can be obtained by breaking down long chain molecules such as decane, C₁₀H₂₂: C₁₀H₂₂ → C₃H₆ + C₂H₄ + X. **Deduce** the molecular formula of the missing product X.',
        marks: 1,
        ph: 'Balance carbons and hydrogens',
      },
      {
        label: 'd',
        text: 'During incineration, gases are produced from the burning of plastic. **State** why calcium hydroxide is added to the gases produced during incineration of waste.',
        marks: 1,
        ph: 'Neutralises acidic gases',
      },
      {
        label: 'e',
        text: 'In the incinerator, hot exhaust gas is used to heat water in a boiler. **State** the physical change taking place when this liquid water is converted to steam in the boiler.',
        marks: 1,
        ph: 'Boiling / water turns to steam',
      },
      {
        label: 'f',
        text: 'Incineration of waste on a space habitat is subject to strict requirements. **Suggest** one requirement that should be included in order to reduce the environmental impact of the process.',
        marks: 1,
        ph: 'Waste should not contain hazardous materials / emissions controlled / filters fitted',
      },
      {
        label: 'g',
        text: 'There has been a move from non-biodegradable to biodegradable plastics. The rate of breakdown in a compost reactor was tested for three plastic samples A, B, and C with different particle sizes. **List** the order of the three samples in order of increasing particle size. **Justify** your answer.',
        marks: 3,
        ph: 'A < C < B; smaller particles = greater surface area = faster breakdown',
      },
    ],
  },

  // ─── Q4: Chemical hand-warmer (Crit B, 17 marks) ───────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Chemical hand-warmers and reaction rate',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 17,
    stem: 'Astronauts and mountaineers use disposable chemical hand-warmers to keep warm. Inside the pouch, powdered iron slowly reacts with oxygen from the air to make iron oxide, releasing heat: iron + oxygen → iron oxide. A small amount of salt acts as a catalyst to speed the reaction up. A student investigated how the surrounding temperature affects how long a hand-warmer stays hot, by placing identical hand-warmers in air at different temperatures.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Time a hand-warmer stays hot versus surrounding temperature',
        xLabel: 'Surrounding temperature',
        yLabel: 'Time staying hot',
        xUnit: '°C',
        yUnit: 'min',
        xMin: 0,
        xMax: 60,
        yMin: 0,
        yMax: 400,
        xStep: 10,
        yStep: 50,
        dataPoints: [
          { x: 10, y: 350 },
          { x: 20, y: 260 },
          { x: 30, y: 185 },
          { x: 40, y: 125 },
          { x: 50, y: 75 },
        ],
      },
      caption: 'Each point is an average time the warmer stayed hot. A warmer surrounding speeds the iron–oxygen reaction so the heat is used up sooner.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** the function of the salt catalyst in this reaction.',
        marks: 2,
        ph: 'Speeds up reaction / lowers activation energy without being used up',
      },
      {
        label: 'b',
        text: '**Select** the name of the organic functional group highlighted (–COOH) in the citric-acid molecule also added to the hand-warmer mixture.',
        marks: 1,
        ph: 'Carboxylic acid (–COOH)',
        widget: 'radio_select',
        widgetOptions: ['Alkene', 'Ester', 'Alcohol', 'Carboxylic acid'],
      },
      {
        label: 'c',
        text: 'The student set up the hand-warmers in air at different temperatures. **Measure** the temperature shown on the thermometer in the figure (the scale runs 0–100 °C with major gridlines every 10 °C).',
        marks: 1,
        ph: '35°C',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 220 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="220" height="300" fill="#ffffff"/><text x="110" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Laboratory thermometer</text><rect x="96" y="35" width="16" height="210" rx="8" fill="#eef4f7" stroke="#5b6b78"/><circle cx="104" cy="258" r="18" fill="#e03131"/><rect x="100" y="171" width="8" height="87" fill="#e03131"/><g font-size="10" fill="#475569" text-anchor="end"><line x1="96" y1="245" x2="86" y2="245" stroke="#5b6b78"/><text x="82" y="248">0</text><line x1="96" y1="224" x2="86" y2="224" stroke="#5b6b78"/><text x="82" y="227">10</text><line x1="96" y1="203" x2="86" y2="203" stroke="#5b6b78"/><text x="82" y="206">20</text><line x1="96" y1="182" x2="86" y2="182" stroke="#5b6b78"/><text x="82" y="185">30</text><line x1="96" y1="161" x2="86" y2="161" stroke="#5b6b78"/><text x="82" y="164">40</text><line x1="96" y1="140" x2="86" y2="140" stroke="#5b6b78"/><text x="82" y="143">50</text><line x1="96" y1="119" x2="86" y2="119" stroke="#5b6b78"/><text x="82" y="122">60</text><line x1="96" y1="98" x2="86" y2="98" stroke="#5b6b78"/><text x="82" y="101">70</text><line x1="96" y1="77" x2="86" y2="77" stroke="#5b6b78"/><text x="82" y="80">80</text><line x1="96" y1="56" x2="86" y2="56" stroke="#5b6b78"/><text x="82" y="59">90</text><line x1="96" y1="35" x2="86" y2="35" stroke="#5b6b78"/><text x="82" y="38">100</text></g><text x="140" y="155" font-size="10" fill="#94a3ad">°C</text></svg>',
          },
          caption: 'Read the level of the red liquid against the scale (each gap = 10 °C).',
        },
      },
      {
        label: 'd',
        text: '**Identify** the independent variable (IV), dependent variable (DV), and two controlled variables (CVs) for this hand-warmer investigation.',
        marks: 4,
        ph: 'IV: surrounding temperature; DV: time the warmer stays hot; CVs: type/mass of hand-warmer, mass of iron powder',
      },
      {
        label: 'e',
        text: '**Formulate** a hypothesis for this investigation using an If/Then/Because structure.',
        marks: 3,
        ph: 'If temperature increases, then time staying hot decreases, because reaction rate increases',
      },
      {
        label: 'f',
        text: 'The student plotted the average time staying hot (min) against surrounding temperature (°C). **Predict** the time a hand-warmer would stay hot in air at 5 °C.',
        marks: 2,
        ph: '395 ± 15 minutes (extrapolate the curve below 10°C)',
      },
      {
        label: 'g',
        text: 'A hand-warmer pouch contains 5.46 × 10⁵ "active sites" of iron powder. At 20 °C the warmer stops giving out heat after 210 minutes. **Calculate** the rate at which the iron active sites are used up at this temperature. You should include appropriate units in your answer.',
        marks: 4,
        ph: 'rate = 5.46×10⁵ ÷ 210 = 2600 sites min⁻¹',
      },
    ],
  },

  // ─── Q5: Radiation-shielding coating design (Crit B, 20 marks) ─────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Spacecraft radiation-shielding coatings — investigation design',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 20,
    stem: 'Beyond Earth\'s magnetic field, astronauts are exposed to harmful cosmic radiation, so spacecraft walls are painted with shielding coatings. A coating called Cosmo-Shield contains several active compounds including boron carbide, a hydrogen-rich polymer and tungsten powder. A student investigated how many radiation-sensitive film dots darkened after one hour behind three coated panels: Cosmo-Shield (8% of dots darkened), Lite-Guard (35% darkened) and an uncoated control panel (95% darkened).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Coating tested', 'Film dots darkened / %', 'Effectiveness'],
        rows: [
          ['Cosmo-Shield', '8', 'most effective'],
          ['Lite-Guard', '35', 'moderate'],
          ['Uncoated control', '95', 'least effective'],
        ],
      },
      caption: 'The fewer film dots that darken, the more radiation the coating has blocked. Cosmo-Shield performed best.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** which is the most effective radiation-shielding coating.',
        marks: 1,
        ph: 'Cosmo-Shield (fewest dots darkened = most effective)',
      },
      {
        label: 'b',
        text: 'The student used a single laboratory radiation source instead of real cosmic radiation in space. **Outline** why this laboratory source is not a good model for real cosmic radiation.',
        marks: 2,
        ph: 'Cosmic radiation contains many particle types and energies; lab source gives one type/energy only',
      },
      {
        label: 'c',
        text: 'Using suitable laboratory equipment, **design** an investigation to determine which of the individual active compounds present in Cosmo-Shield coating provides the best protection from the radiation source. In your answer you should include: an identification of the variables, a list of the additional equipment you will use, details of your method for manipulating the variables, details of the data you will collect, and how you will ensure your method is safe.',
        marks: 17,
        ph: 'Crit B design: IV=active compound, DV=% film dots darkened, CVs=time/thickness/distance/source; equipment; repeats & mean; safety (radiation exposure)',
      },
    ],
  },

  // ─── Q6: New dye "stellarine" data analysis (Crit C, 10 marks) ─────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Shielding data analysis and stellarine experiment',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 10,
    stem: 'Cosmo-Shield was one of the coatings investigated in question 5. Cosmo-Shield contains: boron carbide, a hydrogen-rich polymer, tungsten powder and a coloured marker dye. The research question was: "Is boron carbide the best blocker of radiation?" Chemists are separately analysing a new fluorescent marker dye, called stellarine, that could show astronauts how much radiation a surface has received. They make different concentrations of stellarine and measure the absorbance (AU) of each.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Absorbance of stellarine dye versus concentration',
        mode: 'scatter',
        xLabel: 'Concentration of stellarine / μmol dm⁻³',
        yLabel: 'Absorbance / AU',
        xAxis: { label: 'Concentration / μmol dm⁻³', min: 0, max: 100, tick: 20 },
        yAxis: { label: 'Absorbance / AU', min: 0, max: 1, tick: 0.2 },
        lineOfBestFit: true,
        scatterPoints: [
          { x: 0, y: 0.0 },
          { x: 10, y: 0.13 },
          { x: 30, y: 0.42 },
          { x: 50, y: 0.63 },
          { x: 70, y: 0.50 },
          { x: 90, y: 0.86 },
          { x: 100, y: 0.97 },
        ],
        note: 'Absorbance rises with concentration. The point at 70 μmol dm⁻³ does not fit the trend — it is anomalous.',
      },
      caption: 'Plot of absorbance against stellarine concentration. One reading does not follow the rising trend.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** how you will use the data from the investigation in question 5 to decide if the research question "Is boron carbide the best blocker of radiation?" is supported.',
        marks: 2,
        ph: 'Compare % dots darkened per ingredient; if boron carbide gives the fewest darkened dots, the RQ is supported',
      },
      {
        label: 'b',
        text: '**Suggest** an extension that could be made to the investigation into the effectiveness of the coating ingredients.',
        marks: 1,
        ph: 'Test different thicknesses / combinations of ingredients / different radiation sources / longer time',
      },
      {
        label: 'c',
        text: 'The results show absorbance increasing with concentration (data: 0→0.00, 10→0.13, 30→0.42, 50→0.63, 70→0.50 anomalous, 90→0.86, 100→0.97 AU). **Plot** a graph of absorbance versus concentration of stellarine. Label the axes, give your graph a suitable title, and add a line of best fit.',
        marks: 6,
        ph: 'Title links absorbance and concentration; LOBF from (0,0) through all points except 70 μmol dm⁻³',
      },
      {
        label: 'd',
        text: '**Comment** on the reliability of the data.',
        marks: 1,
        ph: 'Anomalous point at 70 μmol dm⁻³ or only one trial / no averages',
      },
    ],
  },

  // ─── Q7: Calcium in-situ resource carbonation (Crit D, 12 marks) ───────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Climate change, the carbon cycle, and in-situ resource use',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 12,
    stem: 'Climate change is a global threat recognised by the IPCC. Rising CO₂ from burning fossil fuels has increased Earth\'s average temperature. In the natural carbon cycle, plants remove CO₂ by photosynthesis: carbon dioxide + water → glucose + oxygen. Large-scale deforestation reduces this natural carbon sink. Engineers planning a Mars base want to turn the CO₂-rich Martian air into useful solids and fuel by reacting calcium-rich rock with CO₂ and water to form solid calcium carbonate: Ca + CO₂ + H₂O → CaCO₃(s) + H₂(g).',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Carbon flows in a sealed Mars-base greenhouse (arbitrary units per day)',
        units: 'units',
        flows: [
          { label: 'Photosynthesis by crops (CO₂ absorbed)', value: 100, kind: 'in' },
          { label: 'Respiration of crops (CO₂ released)', value: 35, kind: 'out' },
          { label: 'Respiration of astronauts (CO₂ released)', value: 25, kind: 'loss' },
          { label: 'Carbon stored in new plant growth', value: 40, kind: 'out' },
        ],
        conservation: 'CO₂ in (100) = CO₂ released (35 + 25) + carbon stored in plant growth (40).',
      },
      caption: 'Inside a sealed Mars greenhouse, crops act as a carbon sink: green = CO₂ absorbed by photosynthesis, red = CO₂ released by respiration.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the photosynthesis equation and your wider MYP studies, **suggest** an impact on a Mars-base crew if their greenhouse crops were destroyed. **Justify** your answer.',
        marks: 2,
        ph: 'Less food/oxygen, CO₂ builds up; justify: fewer plants = less photosynthesis = less glucose/O₂',
      },
      {
        label: 'b',
        text: 'One way to reduce CO₂ is to react it with other chemicals to form a solid material. **Select** the state symbols for the reactants in the equation if the reaction was at 25°C: Ca(?) + CO₂(?) + H₂O(?) → CaCO₃(s) + H₂(g)',
        marks: 2,
        ph: 'Ca(s), CO₂(g), H₂O(l) at 25°C',
        widget: 'inline_dropdown_select',
        widgetItems: ['Ca', 'CO₂', 'H₂O'],
        widgetOptions: ['(s)', '(l)', '(g)', '(aq)'],
      },
      {
        label: 'c',
        text: '**Select** the name of CaCO₃.',
        marks: 1,
        ph: 'Calcium carbonate',
        widget: 'radio_select',
        widgetOptions: ['Calcium carbonate', 'Calcium bicarbonate', 'Calcium oxide', 'Calcium sulfate'],
      },
      {
        label: 'd',
        text: '**Describe** what happens to calcium in the reaction Ca + CO₂ + H₂O → CaCO₃(s) + H₂(g) in terms of redox chemistry.',
        marks: 3,
        ph: 'Oxidation number increases from 0 to +2; calcium loses electrons; calcium is oxidised',
      },
      {
        label: 'e',
        text: 'The hydrogen produced could be used as a fuel. **Select** numbers to balance the equation: ?H₂ + ?O₂ → ?H₂O',
        marks: 2,
        ph: '2H₂ + O₂ → 2H₂O',
        widget: 'inline_dropdown_select',
        widgetItems: ['H₂', 'O₂', 'H₂O'],
        widgetOptions: ['1', '2', '3', '4'],
      },
      {
        label: 'f',
        text: '**Outline** why the combustion of hydrogen is better for a sealed habitat than the combustion of kerosene.',
        marks: 2,
        ph: 'Only product is water / no CO₂, NOx, or SOx; product is non-toxic',
      },
    ],
  },

  // ─── Q8: Carbon-utilisation systems — essay (Crit D, 15 marks) ─────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon-utilisation systems — evaluation essay',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 15,
    stem: 'Scientists are developing systems that capture carbon dioxide and turn it into something useful, both to fight climate change on Earth and to make resources on Mars. Three possible systems are: System 1 — Sabatier reactor (reacts captured CO₂ with hydrogen to make methane fuel and water; the technology already works on the Space Station; needs a supply of hydrogen; removal of 50 kg CO₂ costs USD12); System 2 — Mineralisation (reacts CO₂ with crushed rock to make solid carbonate that locks carbon away permanently; very stable; mining and grinding rock uses energy; removal of 50 kg CO₂ costs USD18); System 3 — Algae bioreactor (grows algae that absorb CO₂ and can be processed into food or fuel; also releases oxygen; needs light, water and space; removal of 50 kg CO₂ costs USD25).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['System', 'Useful product', 'Cost per 50 kg CO₂ / USD', 'Main resource needed', 'Stage of development'],
        rows: [
          ['1 — Sabatier reactor', 'methane fuel + water', '12', 'hydrogen supply', 'in use on the ISS'],
          ['2 — Mineralisation', 'solid carbonate rock', '18', 'mined rock + energy to grind', 'early research'],
          ['3 — Algae bioreactor', 'food / fuel + oxygen', '25', 'light + water + space', 'being trialled'],
        ],
      },
      caption: 'Use this comparison of product, cost, resources and development stage to evaluate any two of the three systems.',
    },
    tasks: [
      {
        label: '',
        text: 'Using the information in the table and your wider MYP studies, **discuss** and **evaluate** two of the three systems. In your answer you should include: the need for capturing carbon dioxide; the economic impact of each system; the social impact of each system; scientific advantages and disadvantages of each system; a concluding appraisal recommending which is the best system.',
        marks: 15,
        ph: 'Crit D essay: need for CO₂ capture, evaluate 2 systems on economic/social/scientific grounds, concluding appraisal',
      },
    ],
  },
]
