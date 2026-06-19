import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2020 · VARIANT 1  (isomorphic to chemistry-nov-2020)
// THEME: deep ocean — hydrothermal vents, dive lights, antifouling, blue carbon.
// Every question re-tests the SAME construct as the source (crit, command term,
// marks, task structure, widget type/counts, tags) in a NEW real-world context,
// with a self-contained data-driven INTERACTIVE artefact in each question's
// context slot. Every numeric answer recomputed. No image files, no markdown tables.
//   Q1 %-by-mass + rock class:  Hawaii lava SiO₂ → hydrothermal-vent chimney silica
//   Q2 noble gases/isotopes:    volcanic gas/Ne → vent gas/krypton (⁸⁴Kr)
//   Q3 alkenes/cracking/incin:  oil plastics → algae bioplastics, cracking dodecane
//   Q4 catalyst/temp vs rate:   glow stick → diver chemiluminescent light stick
//   Q5 Crit B design:           sunscreen ingredient → antifouling-coating additive
//   Q6 Crit C graph:            myporium absorbance → vent pigment "azurine"
//   Q7 redox/balancing/state:   Fe carbonation → Mg mineral carbonation
//   Q8 Crit D evaluate:         CO₂ sinks → ocean-based CO₂ removal systems
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
  id: 'chemistry-nov-2020-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2020,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Hydrothermal-vent chimney silica (Crit A, 7 marks) ────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Hydrothermal vents and SiO₂ in mineral chimneys',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 7,
    stem: "On the deep-ocean floor, superheated mineral-rich water erupts from hydrothermal vents and cools rapidly in near-freezing seawater, building tall chimneys of solid rock. The mineral chimneys are classified by their SiO₂ content by mass: Sulfide-rich 42.0–52.0%, Mixed 52.0–62.0%, Silica-rich 62.0–78.0%. A 2.00 g sample of chimney rock from the East Pacific Rise contained 1.07 g of SiO₂ (53.5%). A 2.00 g sample of chimney rock from the Lost City field contained 1.31 g of SiO₂.",
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Vent fluid cooling: liquid mineral solution → solid chimney rock',
        mode: 'freeze',
        substance: 'dissolved silica',
        states: ['liquid (hot vent fluid)', 'solid (chimney rock)'],
        before: 'In the hot vent fluid the silica particles are dissolved — spaced apart and free to move.',
        after: 'On rapid cooling in cold seawater the particles lock into a fixed, close-packed solid (the chimney).',
        particleCount: 36,
      },
      caption: 'When hot vent fluid meets near-freezing seawater the dissolved minerals turn from a liquid solution into solid rock — a physical change of state.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the physical process that takes place when hot vent fluid cools down to form solid chimney rock.',
        marks: 1,
        ph: 'Choose the correct physical process name',
        widget: 'radio_select',
        widgetOptions: ['Solidification', 'Crystallisation', 'Evaporation', 'Melting'],
      },
      {
        label: 'b',
        text: 'A major component of chimney rock is SiO₂, with oxides of iron and zinc present in different proportions. **Determine** the missing information and complete the table. (Oxide names and formulae: silicon dioxide / SiO₂; zinc oxide / ZnO)',
        marks: 2,
        ph: 'Fill in silicon dioxide and ZnO',
        widget: 'fill_blank',
        widgetItems: ['Oxide name for SiO₂', 'Formula for zinc oxide'],
      },
      {
        label: 'c',
        text: '**Select** the type of chimney rock from the East Pacific Rise (53.5% SiO₂).',
        marks: 1,
        ph: 'Mixed range is 52.0–62.0%',
        widget: 'radio_select',
        widgetOptions: ['Sulfide-rich', 'Mixed', 'Silica-rich'],
      },
      {
        label: 'd',
        text: '**Calculate** the percentage of SiO₂ in the rock sample from the Lost City field. (1.31 g SiO₂ in a 2.00 g sample)',
        marks: 2,
        ph: '1.31/2.00 × 100 = 65.5%',
      },
      {
        label: 'e',
        text: 'Using your answer from part (d), **select** the type of chimney rock from the Lost City field.',
        marks: 1,
        ph: 'Silica-rich range is 62.0–78.0%',
        widget: 'radio_select',
        widgetOptions: ['Sulfide-rich', 'Mixed', 'Silica-rich'],
      },
    ],
  },

  // ─── Q2: Vent gases and noble gases (Crit A, 9 marks) ──────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Hydrothermal-vent gases and noble gases',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 9,
    stem: 'It was once thought that every hydrothermal vent emitted one particular gas. In fact vent fluids are mixtures of dissolved gases — hydrogen sulfide (H₂S), carbon dioxide (CO₂), methane (CH₄) and others. Hydrogen sulfide is a major component, which is why "black smoker" plumes smell of rotten eggs. Trapped within the rising fluids are tiny amounts of the noble gases helium, neon and krypton, which scientists use to trace where the water came from.',
    artefact: {
      component: 'SpectrumSim',
      data: {
        title: 'Noble gases across the periodic table (Group 18)',
        mode: 'scrub',
        bands: ['He (Period 1)', 'Ne (Period 2)', 'Ar (Period 3)', 'Kr (Period 4)', 'Xe (Period 5)'],
        axis: 'increasing period / atomic number →',
        target: 'Kr (Period 4)',
      },
      caption: 'The noble gases sit in Group 18. Scrub across to find which period krypton (Kr) belongs to.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why the seawater immediately around a black-smoker vent can have pH values as low as 1.5.',
        marks: 2,
        ph: 'Acidic gases (H₂S, CO₂) dissolve in water to form acids',
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
        text: 'Use the periodic table to **state** the period of krypton.',
        marks: 1,
        ph: 'Period 4',
      },
      {
        label: 'd',
        text: 'Krypton exists as a mixture of isotopes. **Determine** the number of protons, neutrons, and electrons in an atom of ⁸⁴Kr (atomic number 36).',
        marks: 3,
        ph: 'Protons=36, Neutrons=48, Electrons=36',
      },
      {
        label: 'e',
        text: '**Draw** the electron configuration of argon showing 2 electrons in the first shell, 8 in the second shell and 8 in the outer shell.',
        marks: 2,
        ph: '2 in first shell, 8 in second, 8 in outer (2.8.8)',
      },
    ],
  },

  // ─── Q3: Algae bioplastics and ocean waste (Crit A, 10 marks) ──────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Algae-based plastics and ocean plastic waste',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 10,
    stem: 'Single-use plastics that escape into the ocean break into microplastics that harm marine life. Traditional plastics are made from chemicals obtained from crude oil. Molecules A and B are the small unsaturated building blocks of two common plastics (A = ethene, B = butene). Some plants and algae can now be fermented to make the same building blocks more sustainably. Coastal incinerators recover energy from non-recyclable plastic by burning it — a process that must be tightly controlled to limit pollution.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Biodegradation of three algae-plastic samples in seawater',
        mode: 'saturating',
        xLabel: 'Time / weeks',
        yLabel: 'Mass broken down / %',
        xAxis: { label: 'Time / weeks', min: 0, max: 12, tick: 2 },
        yAxis: { label: 'Mass broken down / %', min: 0, max: 100, tick: 20 },
        series: [
          { label: 'Sample A', color: 'teal', plateau: 96 },
          { label: 'Sample C', color: 'orange', plateau: 70 },
          { label: 'Sample B', color: 'purple', plateau: 40 },
        ],
        note: 'Sample A breaks down fastest — its particles have the largest surface area (smallest particle size).',
      },
      caption: 'Smaller plastic particles have more surface area exposed to microbes, so they biodegrade faster. Compare how far each sample has broken down.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the chemical classification of molecules A (CH₂=CH₂) and B (CH₂=CHCH₂CH₃).',
        marks: 1,
        ph: 'Both contain a C=C double bond',
        widget: 'radio_select',
        widgetOptions: ['Alkene', 'Alkane', 'Alcohol', 'Carboxylic acid'],
      },
      {
        label: 'b',
        text: '**State** the name of each chemical A and B.',
        marks: 2,
        ph: 'A = ethene, B = butene',
        widget: 'fill_blank',
        widgetItems: ['Name of A', 'Name of B'],
      },
      {
        label: 'c',
        text: 'Molecules A and B can be obtained by breaking down long chain molecules such as dodecane, C₁₂H₂₆: C₁₂H₂₆ → C₂H₄ + C₄H₈ + X. **Deduce** the molecular formula of the missing product X.',
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
        text: 'Coastal incineration of waste is subject to strict regulations. **Suggest** one requirement that should be included in order to reduce the environmental impact of the process.',
        marks: 1,
        ph: 'Waste should not contain hazardous materials / emissions controlled / filters fitted',
      },
      {
        label: 'g',
        text: 'There has been a move from non-biodegradable to biodegradable plastics. The rate of biodegradation in seawater was tested for three algae-plastic samples A, B, and C with different particle sizes. **List** the order of the three samples in order of increasing particle size. **Justify** your answer.',
        marks: 3,
        ph: 'A < C < B; smaller particles = greater surface area = faster biodegradation',
      },
    ],
  },

  // ─── Q4: Diver light stick chemiluminescence (Crit B, 17 marks) ────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Diver light sticks and chemiluminescence',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 17,
    stem: 'Scuba divers clip chemiluminescent light sticks to their gear so they can be seen in dark water. The light is produced by a chemical reaction between two solutions, with a copper catalyst speeding it up. The catalyst is kept separate inside a thin glass ampoule until the stick is snapped. A student investigated how the temperature of the surrounding water affects how long a light stick glows, by placing identical light sticks in water baths at different temperatures.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Glow time of a diver light stick versus water temperature',
        xLabel: 'Water temperature',
        yLabel: 'Glow time',
        xUnit: '°C',
        yUnit: 'min',
        xMin: 0,
        xMax: 60,
        yMin: 0,
        yMax: 400,
        xStep: 10,
        yStep: 50,
        dataPoints: [
          { x: 10, y: 360 },
          { x: 20, y: 270 },
          { x: 30, y: 195 },
          { x: 40, y: 130 },
          { x: 50, y: 80 },
        ],
      },
      caption: 'Each point is an average glow time at that water temperature. Warmer water speeds the reaction so the stick glows for less time.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** the function of the copper catalyst in this reaction.',
        marks: 2,
        ph: 'Speeds up reaction / lowers activation energy without being used up',
      },
      {
        label: 'b',
        text: '**Select** the name of the organic functional group highlighted (–COO–) in the diphenyl-oxalate molecule used in the light stick.',
        marks: 1,
        ph: 'Ester linkage (C=O with O–C)',
        widget: 'radio_select',
        widgetOptions: ['Alkene', 'Ester', 'Alcohol', 'Carboxylic acid'],
      },
      {
        label: 'c',
        text: 'The student set up water baths at different temperatures. **Measure** the temperature shown on the thermometer in the figure (the scale runs 0–100 °C with major gridlines every 10 °C).',
        marks: 1,
        ph: '45°C',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 220 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="220" height="300" fill="#ffffff"/><text x="110" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Water-bath thermometer</text><rect x="96" y="35" width="16" height="210" rx="8" fill="#eef4f7" stroke="#5b6b78"/><circle cx="104" cy="258" r="18" fill="#e03131"/><rect x="100" y="150" width="8" height="108" fill="#e03131"/><g font-size="10" fill="#475569" text-anchor="end"><line x1="96" y1="245" x2="86" y2="245" stroke="#5b6b78"/><text x="82" y="248">0</text><line x1="96" y1="224" x2="86" y2="224" stroke="#5b6b78"/><text x="82" y="227">10</text><line x1="96" y1="203" x2="86" y2="203" stroke="#5b6b78"/><text x="82" y="206">20</text><line x1="96" y1="182" x2="86" y2="182" stroke="#5b6b78"/><text x="82" y="185">30</text><line x1="96" y1="161" x2="86" y2="161" stroke="#5b6b78"/><text x="82" y="164">40</text><line x1="96" y1="140" x2="86" y2="140" stroke="#5b6b78"/><text x="82" y="143">50</text><line x1="96" y1="119" x2="86" y2="119" stroke="#5b6b78"/><text x="82" y="122">60</text><line x1="96" y1="98" x2="86" y2="98" stroke="#5b6b78"/><text x="82" y="101">70</text><line x1="96" y1="77" x2="86" y2="77" stroke="#5b6b78"/><text x="82" y="80">80</text><line x1="96" y1="56" x2="86" y2="56" stroke="#5b6b78"/><text x="82" y="59">90</text><line x1="96" y1="35" x2="86" y2="35" stroke="#5b6b78"/><text x="82" y="38">100</text></g><text x="140" y="155" font-size="10" fill="#94a3ad">°C</text></svg>',
          },
          caption: 'Read the level of the red liquid against the scale (each gap = 10 °C).',
        },
      },
      {
        label: 'd',
        text: '**Identify** the independent variable (IV), dependent variable (DV), and two controlled variables (CVs) for this light-stick investigation.',
        marks: 4,
        ph: 'IV: water temperature; DV: glow time; CVs: type/brand of light stick, volume of water in bath',
      },
      {
        label: 'e',
        text: '**Formulate** a hypothesis for this investigation using an If/Then/Because structure.',
        marks: 3,
        ph: 'If temperature increases, then glow time decreases, because reaction rate increases',
      },
      {
        label: 'f',
        text: 'The student plotted average glow time (min) against water temperature (°C). **Predict** the glow time of a light stick used in water at 5 °C.',
        marks: 2,
        ph: '405 ± 15 minutes (extrapolate the curve below 10°C)',
      },
      {
        label: 'g',
        text: 'A diver light stick contains 7.92 × 10⁵ molecules of diphenyl oxalate. At 20 °C the stick stops glowing after 240 minutes. **Calculate** the rate at which the diphenyl-oxalate molecules are used up at this temperature. You should include appropriate units in your answer.',
        marks: 4,
        ph: 'rate = 7.92×10⁵ ÷ 240 = 3300 molecules min⁻¹',
      },
    ],
  },

  // ─── Q5: Antifouling-coating ingredient design (Crit B, 20 marks) ──────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Antifouling boat coatings — investigation design',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 20,
    stem: 'Algae, barnacles and other organisms quickly grow on a ship\'s hull, slowing it down and wasting fuel. To prevent this, hulls are painted with antifouling coatings. A coating called Hull-Guard contains several active compounds including copper oxide, zinc pyrithione and a silicone polymer. A student investigated how much green algae grew on three painted tiles after two weeks in a tank: Hull-Guard (5% of tile covered), Reef-Safe (24% covered) and an unpainted control (90% covered).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Coating tested', 'Tile area covered by algae / %', 'Effectiveness'],
        rows: [
          ['Hull-Guard', '5', 'most effective'],
          ['Reef-Safe', '24', 'moderate'],
          ['Unpainted control', '90', 'least effective'],
        ],
      },
      caption: 'The less algae cover on the tile, the more effective the antifouling coating. Hull-Guard performed best.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** which is the most effective antifouling coating.',
        marks: 1,
        ph: 'Hull-Guard (least algae cover = most effective)',
      },
      {
        label: 'b',
        text: 'The student used a sealed laboratory tank with a single algae species instead of real open seawater. **Outline** why this laboratory tank is not a good model for a real ship\'s hull at sea.',
        marks: 2,
        ph: 'Real seawater has many species/temperatures/currents/light; tank has only one species in still water',
      },
      {
        label: 'c',
        text: 'Using suitable laboratory equipment, **design** an investigation to determine which of the individual active compounds present in Hull-Guard coating provides the best protection against algae growth. In your answer you should include: an identification of the variables, a list of the additional equipment you will use, details of your method for manipulating the variables, details of the data you will collect, and how you will ensure your method is safe.',
        marks: 17,
        ph: 'Crit B design: IV=active compound, DV=% tile area covered by algae, CVs=time/concentration/light/temperature; equipment; repeats & mean; safety (toxic biocides)',
      },
    ],
  },

  // ─── Q6: Vent pigment "azurine" data analysis (Crit C, 10 marks) ───────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Antifouling data analysis and azurine experiment',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 10,
    stem: 'Hull-Guard was one of the coatings investigated in question 5. Hull-Guard contains: copper oxide, zinc pyrithione, a silicone polymer and a blue dye. The research question was: "Is copper oxide the best protector against algae growth?" Chemists are separately analysing a new natural blue pigment from vent bacteria, called azurine, to see whether it could colour eco-friendly coatings. They make different concentrations of azurine and measure the absorbance (AU) of each.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Absorbance of azurine pigment versus concentration',
        mode: 'scatter',
        xLabel: 'Concentration of azurine / μmol dm⁻³',
        yLabel: 'Absorbance / AU',
        xAxis: { label: 'Concentration / μmol dm⁻³', min: 0, max: 100, tick: 20 },
        yAxis: { label: 'Absorbance / AU', min: 0, max: 1, tick: 0.2 },
        lineOfBestFit: true,
        scatterPoints: [
          { x: 0, y: 0.0 },
          { x: 10, y: 0.14 },
          { x: 30, y: 0.44 },
          { x: 50, y: 0.61 },
          { x: 70, y: 0.52 },
          { x: 90, y: 0.88 },
          { x: 100, y: 0.99 },
        ],
        note: 'Absorbance rises with concentration. The point at 70 μmol dm⁻³ does not fit the trend — it is anomalous.',
      },
      caption: 'Plot of absorbance against azurine concentration. One reading does not follow the rising trend.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** how you will use the data from the investigation in question 5 to decide if the research question "Is copper oxide the best protector against algae growth?" is supported.',
        marks: 2,
        ph: 'Compare % algae cover per ingredient; if copper oxide gives the lowest cover, the RQ is supported',
      },
      {
        label: 'b',
        text: '**Suggest** an extension that could be made to the investigation into the effectiveness of the coating ingredients.',
        marks: 1,
        ph: 'Test different concentrations / combinations of ingredients / real seawater / longer time',
      },
      {
        label: 'c',
        text: 'The results show absorbance increasing with concentration (data: 0→0.00, 10→0.14, 30→0.44, 50→0.61, 70→0.52 anomalous, 90→0.88, 100→0.99 AU). **Plot** a graph of absorbance versus concentration of azurine. Label the axes, give your graph a suitable title, and add a line of best fit.',
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

  // ─── Q7: Magnesium mineral carbonation (Crit D, 12 marks) ──────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Climate change, the carbon cycle, and mineral carbonation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 12,
    stem: 'Climate change is a global threat recognised by the IPCC. Rising CO₂ from burning fossil fuels has increased Earth\'s average temperature. In the natural carbon cycle, plants and ocean algae remove CO₂ by photosynthesis: carbon dioxide + water → glucose + oxygen. Destroying kelp forests and seagrass meadows reduces this natural carbon sink. To lock carbon away permanently, scientists propose reacting magnesium-rich rock with CO₂ and water to form solid magnesium carbonate: Mg + CO₂ + H₂O → MgCO₃(s) + H₂(g).',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Carbon flows in a coastal kelp ecosystem (arbitrary units per year)',
        units: 'units',
        flows: [
          { label: 'Photosynthesis by kelp (CO₂ absorbed)', value: 100, kind: 'in' },
          { label: 'Respiration of kelp (CO₂ released)', value: 30, kind: 'out' },
          { label: 'Decay of dead kelp (CO₂ released)', value: 25, kind: 'loss' },
          { label: 'Carbon buried in deep-sea sediment', value: 45, kind: 'out' },
        ],
        conservation: 'CO₂ in (100) = CO₂ released (30 + 25) + carbon stored in sediment (45).',
      },
      caption: 'Kelp forests act as a carbon sink: green = CO₂ absorbed by photosynthesis, red = CO₂ released, with the remainder buried as "blue carbon".',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the photosynthesis equation and your wider MYP studies, **suggest** an impact on a coastal community due to the destruction of kelp forests. **Justify** your answer.',
        marks: 2,
        ph: 'Less food/oxygen, loss of fish habitat, more CO₂; justify: fewer producers = less photosynthesis = less glucose/O₂',
      },
      {
        label: 'b',
        text: 'One way to reduce CO₂ is to react it with other chemicals to form a solid material. **Select** the state symbols for the reactants in the equation if the reaction was at 25°C: Mg(?) + CO₂(?) + H₂O(?) → MgCO₃(s) + H₂(g)',
        marks: 2,
        ph: 'Mg(s), CO₂(g), H₂O(l) at 25°C',
        widget: 'inline_dropdown_select',
        widgetItems: ['Mg', 'CO₂', 'H₂O'],
        widgetOptions: ['(s)', '(l)', '(g)', '(aq)'],
      },
      {
        label: 'c',
        text: '**Select** the name of MgCO₃.',
        marks: 1,
        ph: 'Magnesium carbonate',
        widget: 'radio_select',
        widgetOptions: ['Magnesium carbonate', 'Magnesium bicarbonate', 'Magnesium oxide', 'Magnesium sulfate'],
      },
      {
        label: 'd',
        text: '**Describe** what happens to magnesium in the reaction Mg + CO₂ + H₂O → MgCO₃(s) + H₂(g) in terms of redox chemistry.',
        marks: 3,
        ph: 'Oxidation number increases from 0 to +2; magnesium loses electrons; magnesium is oxidised',
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
        text: '**Outline** why the combustion of hydrogen is better for the environment than the combustion of diesel.',
        marks: 2,
        ph: 'Only product is water / no CO₂, NOx, or SOx; product is non-toxic',
      },
    ],
  },

  // ─── Q8: Ocean-based CO₂ removal systems — essay (Crit D, 15 marks) ────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Ocean-based CO₂ removal systems — evaluation essay',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 15,
    stem: 'Scientists are developing ocean-based systems to remove carbon dioxide from the atmosphere and slow climate change. Three possible systems are: System 1 — Kelp farming (fast-growing kelp absorbs CO₂, then is sunk to the deep seabed where the carbon is locked away; provides jobs and habitat; removal of 50 kg CO₂ costs USD15); System 2 — Enhanced rock weathering (crushed olivine rock is spread on beaches where it reacts with CO₂ and seawater to form stable carbonates; reduces ocean acidity; mining and grinding the rock uses energy; removal of 50 kg CO₂ costs USD20); System 3 — Direct ocean capture (electricity strips dissolved CO₂ from seawater so the ocean can absorb more from the air; works in a compact plant; needs large amounts of clean electricity; removal of 50 kg CO₂ costs USD30).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['System', 'Reacts / treats', 'Cost per 50 kg CO₂ / USD', 'Main resource needed', 'Stage of development'],
        rows: [
          ['1 — Kelp farming', 'CO₂ in seawater', '15', 'sea space + sunlight', 'being trialled'],
          ['2 — Enhanced rock weathering', 'crushed olivine', '20', 'mined rock + energy to grind', 'early research'],
          ['3 — Direct ocean capture', 'seawater', '30', 'clean electricity', 'early research'],
        ],
      },
      caption: 'Use this comparison of cost, resources and development stage to evaluate any two of the three systems.',
    },
    tasks: [
      {
        label: '',
        text: 'Using the information in the table and your wider MYP studies, **discuss** and **evaluate** two of the three systems. In your answer you should include: the need for carbon dioxide removal; the economic impact of each system; the social impact of each system; scientific advantages and disadvantages of each system; a concluding appraisal recommending which is the best system.',
        marks: 15,
        ph: 'Crit D essay: need for CO₂ removal, evaluate 2 systems on economic/social/scientific grounds, concluding appraisal',
      },
    ],
  },
]
