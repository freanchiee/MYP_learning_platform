import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — May 2023 · VARIANT 2  (isomorphic to chemistry-may-2023)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context, distinct
// from both the source and variant 1, with a self-contained data-driven
// interactive artefact in each question's context slot. ZERO image files, ZERO
// markdown tables. Answers recomputed throughout.
//   Q1 Combustion/organics/surface area:  propane+coal → octane petrol engine + iron-powder hand-warmer
//   Q2 Periodic/Lewis/covalent bonding:   solar+silicon → hydroelectric + boron/phosphorus doped silicon
//   Q3 Reactivity/catalyst/moles:         steam-reformed hydrogen → biogas-reformed hydrogen (Ca/Mg/Fe), 9.60 kg
//   Q4 States of matter/data/hypothesis:  frozen desserts → artisan gelato ice-crystal texture
//   Q5 Investigation design/data:         road-salt de-icing → railway-track de-icing grit comparison
//   Q6 Hazards + design (Crit D/B):       de-icing salts → pool-sanitiser salt (fastest dissolving) design
//   Q7 Ester/amide bonds + fabric eval:   polyester/sports fabric → Kevlar amide + protective-gear materials
//   Q8 Environmental implications (Crit D):clothing waste → electronic (e-waste) recycling
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'chemistry-may-2023-v2',
  subject: 'Chemistry',
  session: 'May',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (8 marks, Crit A) — Octane petrol engine, organics, iron powder ─────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Combustion, organic families & surface area — petrol & hand-warmers',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 8,
    stem: 'Octane is an alkane. It is a major component of the petrol burned in car engines, where its combustion releases the energy that drives the car. The interactive shows octane and two other organic molecules found in a garage.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="210" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Organic molecules found in a garage</text><g><rect x="24" y="40" width="160" height="150" fill="#f8fafc" stroke="#5b6b78"/><text x="104" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">Octane (petrol)</text><text x="104" y="120" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">C₈H₁₈</text><text x="104" y="150" font-size="10" text-anchor="middle" fill="#64748b">an alkane (only C–C, C–H)</text></g><g><rect x="200" y="40" width="160" height="150" fill="#fff7ed" stroke="#5b6b78"/><text x="280" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#e8590c">Molecule A (screen-wash)</text><text x="280" y="112" font-size="18" font-weight="700" text-anchor="middle" fill="#1f2d3a">CH₃OH</text><text x="280" y="140" font-size="11" text-anchor="middle" fill="#64748b">functional group: –OH</text></g><g><rect x="376" y="40" width="160" height="150" fill="#eef4f7" stroke="#5b6b78"/><text x="456" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">Molecule B (ant-sting first aid)</text><text x="456" y="112" font-size="18" font-weight="700" text-anchor="middle" fill="#1f2d3a">HCOOH</text><text x="456" y="140" font-size="11" text-anchor="middle" fill="#64748b">functional group: –COOH</text></g></svg>',
      },
      caption: 'Octane fuel plus two other organic molecules. Identify each family from its functional group.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the type of energy change when octane burns in air.',
        marks: 1,
        ph: 'Exothermic',
      },
      {
        label: 'b',
        text: '**Complete** the balanced equation for the complete combustion of octane in oxygen:\n\n2C₈H₁₈ + [?]O₂ → [?]CO₂ + [?]H₂O',
        marks: 2,
        ph: '25, 16, 18 (balance oxygen last)',
        widget: 'fill_blank',
        widgetOptions: ['14', '16', '18', '20', '22', '24', '25', '26'],
      },
      {
        label: 'c',
        text: 'The structures of Molecule A and Molecule B are shown in the interactive.\n\n**Identify** the family that each molecule belongs to.',
        marks: 2,
        ph: 'Molecule A: Alcohol (alkanol); Molecule B: Carboxylic acid (organic acid)',
      },
      {
        label: 'd',
        text: 'Disposable hand-warmers heat up when iron powder reacts with oxygen in the air. **Explain** why fine iron powder is used in hand-warmers rather than a solid lump of iron.',
        marks: 3,
        ph: 'Greater surface area → faster rate of reaction → heat released more quickly',
      },
    ],
  },

  // ── Q2 (8 marks, Crit A) — Hydroelectric, doped silicon, periodic table ────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, Lewis structures & covalent bonding — hydroelectric power',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 8,
    stem: 'An alternative to burning fossil fuels is hydroelectric power, which uses falling water to spin turbines and generate electricity. The control electronics in a hydroelectric plant use silicon chips. To control how silicon conducts, tiny amounts of boron (B) and phosphorus (P) are added in a process called doping.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of the periodic table</text><g><rect x="150" y="50" width="64" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="182" y="68" font-size="9" text-anchor="middle" fill="#64748b">Group 13</text><text x="182" y="86" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">B</text><text x="182" y="97" font-size="8" text-anchor="middle" fill="#64748b">boron · 5 · Period 2</text></g><g><rect x="246" y="50" width="64" height="50" fill="#f8fafc" stroke="#5b6b78"/><text x="278" y="68" font-size="9" text-anchor="middle" fill="#64748b">Group 14</text><text x="278" y="86" font-size="16" font-weight="700" text-anchor="middle" fill="#1f2d3a">Si</text><text x="278" y="97" font-size="8" text-anchor="middle" fill="#64748b">silicon · 14 · Period 3</text></g><g><rect x="342" y="50" width="64" height="50" fill="#fff7ed" stroke="#5b6b78"/><text x="374" y="68" font-size="9" text-anchor="middle" fill="#64748b">Group 15</text><text x="374" y="86" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">P</text><text x="374" y="97" font-size="8" text-anchor="middle" fill="#64748b">phosphorus · 15 · Period 3</text></g><text x="280" y="138" font-size="11" text-anchor="middle" fill="#475569">Boron (B) and phosphorus (P) are added to silicon to control conduction.</text><text x="280" y="160" font-size="10" text-anchor="middle" fill="#94a3ad">Group number (main groups) = number of outer-shell electrons.</text><text x="280" y="178" font-size="10" text-anchor="middle" fill="#94a3ad">Period number = number of occupied electron shells.</text></svg>',
      },
      caption: 'Silicon is doped with boron (Group 13) and phosphorus (Group 15). Read off each element\'s group and period.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the periodic table to **identify** the missing information from the table. For boron (B): Group [blank], Period [blank]. For phosphorus (P): Group [blank], Period [blank].',
        marks: 2,
        ph: 'B: Group 3, Period 2; P: Group 5, Period 3',
      },
      {
        label: 'b',
        text: '**Outline** why hydroelectric power is considered better for the environment than fossil fuels.',
        marks: 2,
        ph: 'No combustion emissions from hydroelectric; it is renewable; fossil fuels release CO₂/greenhouse gases',
      },
      {
        label: 'c',
        text: 'A common fossil fuel is methane. Methane is one of the main gases used throughout the world for heating and cooking. **Select** the Lewis structure (also known as a dot diagram or dot cross diagram) for methane.',
        marks: 1,
        ph: 'CH₄ has 4 H atoms bonded to C with 4 single bonds — select A',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="170" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Which dot-cross diagram shows methane, CH₄?</text><g font-size="11" text-anchor="middle"><g><rect x="16" y="32" width="120" height="120" fill="#f8fafc" stroke="#5b6b78"/><text x="76" y="50" font-weight="700" fill="#0b7285">A</text><text x="76" y="98" font-size="13" fill="#1f2d3a">C with 4 H</text><text x="76" y="116" font-size="10" fill="#64748b">4 shared pairs</text></g><g><rect x="148" y="32" width="120" height="120" fill="#f8fafc" stroke="#5b6b78"/><text x="208" y="50" font-weight="700" fill="#64748b">B</text><text x="208" y="98" font-size="13" fill="#1f2d3a">C with 3 H</text><text x="208" y="116" font-size="10" fill="#64748b">3 shared pairs</text></g><g><rect x="280" y="32" width="120" height="120" fill="#f8fafc" stroke="#5b6b78"/><text x="340" y="50" font-weight="700" fill="#64748b">C</text><text x="340" y="98" font-size="13" fill="#1f2d3a">C≡C triple bond</text><text x="340" y="116" font-size="10" fill="#64748b">2 H total</text></g><g><rect x="412" y="32" width="120" height="120" fill="#f8fafc" stroke="#5b6b78"/><text x="472" y="50" font-weight="700" fill="#64748b">D</text><text x="472" y="98" font-size="13" fill="#1f2d3a">N with 3 H</text><text x="472" y="116" font-size="10" fill="#64748b">ammonia</text></g></g></svg>',
          },
          caption: 'Four candidate dot-cross diagrams. Methane needs carbon sharing one pair with each of four hydrogen atoms.',
        },
      },
      {
        label: 'd',
        text: 'Carbon and silicon form compounds with similar formulas. Some examples are methane (CH₄) and silane (SiH₄). **Explain** why methane and silane have similar formulas.',
        marks: 3,
        ph: 'Same group (Group 4) → same valence electrons; share electrons to form 4 covalent bonds',
      },
    ],
  },

  // ── Q3 (12 marks, Crit A/D) — Biogas-reformed hydrogen, moles 9.60 kg ──────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Reactivity, catalysts, moles & implications — biogas hydrogen',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 12,
    stem: 'Hydrogen was discovered by Sir Henry Cavendish in 1766 when he reacted metals with acid. He called the gas produced "inflammable air." We now call this gas hydrogen. In a class practical, a student adds three different metals — calcium, magnesium and iron — to the same dilute acid and notices the gas bubbles off at different rates. On an industrial scale, hydrogen can be made by reforming the methane in biogas from farm waste.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Rate of hydrogen production from three metals in acid',
        xLabel: 'Time / s',
        yLabel: 'Volume of hydrogen / cm³',
        xAxis: { label: 'Time / s', min: 0, max: 120, tick: 20 },
        yAxis: { label: 'Volume of hydrogen / cm³', min: 0, max: 60, tick: 10 },
        options: [
          { label: 'Calcium (most reactive)', color: 'orange', ratePerSec: 1.3, plateauVolume: 55 },
          { label: 'Magnesium', color: 'teal', ratePerSec: 0.7, plateauVolume: 52 },
          { label: 'Iron (least reactive here)', color: 'purple', ratePerSec: 0.22, plateauVolume: 46 },
        ],
        reaction: 'metal + acid → metal salt + hydrogen',
        note: 'A steeper line means a faster reaction — the more reactive the metal, the faster the hydrogen is produced.',
      },
      caption: 'Each metal gives a different reaction curve. The more reactive the metal, the steeper the line.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** why hydrogen was produced at different rates when the three metals reacted with acid.',
        marks: 2,
        ph: 'More reactive metals produce hydrogen more quickly; metals have different reactivities',
      },
      {
        label: 'b',
        text: 'Reforming biogas into hydrogen is carried out in the presence of a nickel catalyst. **Explain** how a catalyst works in a chemical reaction.',
        marks: 3,
        ph: 'Speeds up rate of reaction; by lowering activation energy or providing alternative pathway; without being used up',
      },
      {
        label: 'c',
        text: '**Calculate** the number of moles of hydrogen produced when 9.60 kg of methane from biogas reacts with excess steam.\n\nCH₄(g) + H₂O(g) → CO(g) + 3H₂(g)',
        marks: 4,
        ph: 'M(CH₄)=16; n(CH₄)=9600/16=600 mol; 1 mol CH₄→3 mol H₂; n(H₂)=1800 mol',
      },
      {
        label: 'd',
        text: 'After it is produced, hydrogen must be transported to where it is needed. To allow it to be transported safely, the hydrogen is reacted with nitrogen to form ammonia. **Suggest** why it is safer to transport ammonia rather than hydrogen.',
        marks: 1,
        ph: 'Ammonia not flammable (hydrogen is); ammonia has a distinct smell so leaks detected; ammonia less reactive',
      },
      {
        label: 'e',
        text: 'The reforming process captures the CO₂ produced and combines it with calcium oxide to produce calcium carbonate:\n\nCaO(s) + CO₂(g) → CaCO₃(s)\n\n**State** one environmental benefit of using the carbon dioxide in this process. **Justify** your answer.',
        marks: 2,
        ph: 'CO₂ not released into atmosphere → reduces greenhouse gas emissions; reduces climate change',
      },
    ],
  },

  // ── Q4 (16 marks, Crit C) — Artisan gelato, ice-crystal texture ────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'States of matter, data analysis & hypothesis — artisan gelato',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 16,
    stem: 'Artisan gelato is prized for its dense, smooth texture. Gelato is mostly milk, which is a solution of fats, proteins and sugars in water. As the gelato is churned and chilled, the water inside freezes into ice crystals that trap the other ingredients; smaller crystals give a smoother gelato.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Water particles in gelato — before and after freezing',
        mode: 'freeze',
        substance: 'water in gelato',
        states: ['liquid (before freezing)', 'solid (after freezing)'],
        particleCount: 16,
        before: 'Liquid: irregular arrangement, particles close together but not all touching, sliding past one another.',
        after: 'Solid: regular ordered lattice, particles all in contact, vibrating about fixed positions.',
      },
      caption: 'Toggle between liquid and frozen gelato to compare how the water particles are arranged.',
    },
    tasks: [
      {
        label: 'a',
        text: 'In the boxes below, **draw** a diagram showing the arrangement of at least 10 water molecules before and after freezing.\n\nBefore freezing → After freezing',
        marks: 2,
        ph: 'Before: irregular arrangement, molecules close but not all touching; After: regular arrangement, all molecules in contact',
      },
      {
        label: 'b',
        text: 'A microscope image shows the structure of a frozen gelato sample. The scale bar marked A spans 36 micrometres (μm). **Measure** the size of the ice crystal at A and give your answer in metres using standard form.',
        marks: 2,
        ph: 'Measurement = 36 μm (±5); conversion = 3.6 × 10⁻⁵ m',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="180" fill="#ffffff"/><text x="260" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Frozen gelato (microscope view)</text><rect x="60" y="36" width="400" height="100" fill="#eaf2f7" stroke="#3b6d8a"/><polygon points="160,52 196,84 160,120 124,84" fill="#ffffff" stroke="#57879f"/><polygon points="300,58 330,82 300,110 272,82" fill="#ffffff" stroke="#57879f"/><polygon points="392,66 414,84 392,108 372,84" fill="#ffffff" stroke="#57879f"/><line x1="124" y1="150" x2="196" y2="150" stroke="#1f2d3a" stroke-width="2"/><line x1="124" y1="145" x2="124" y2="155" stroke="#1f2d3a" stroke-width="2"/><line x1="196" y1="145" x2="196" y2="155" stroke="#1f2d3a" stroke-width="2"/><text x="160" y="168" font-size="11" text-anchor="middle" fill="#1f2d3a">scale bar A = 36 μm</text><text x="160" y="88" font-size="12" font-weight="700" text-anchor="middle" fill="#3b6d8a">A</text></svg>',
          },
          caption: 'The crystal marked A is an ice crystal. Use the scale bar to read its width.',
        },
      },
      {
        label: 'c',
        text: 'A gelato maker froze a milk mixture and recorded the temperature against the percentage of the water that had frozen. The interactive shows the results. **Present** this data in a graph (title, axis labels with units, all points plotted).',
        marks: 4,
        ph: 'x-axis: Temperature / °C; y-axis: % water frozen; two points correct; all data plotted correctly',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Temperature / °C', 'Percentage of water frozen / %'],
            rows: [
              ['-1.10', '0'],
              ['-2.10', '10'],
              ['-4.10', '38'],
              ['-7.10', '72'],
              ['-11.10', '88'],
            ],
          },
          caption: 'Freezing data for the gelato mixture. Plot temperature on the x-axis and % frozen on the y-axis.',
        },
      },
      {
        label: 'd',
        text: 'Using your graph from part (c), **estimate** the temperature when 50% of the water would be frozen.',
        marks: 2,
        ph: 'Read from graph at y=50%: approximately −5 °C (accept −4.5 to −5.5)',
      },
      {
        label: 'e',
        text: 'The texture of gelato depends on the size of the ice crystals, which is set by how cold the mixture gets. The colder the mixture, the smaller the ice crystals. Gelato churned in a machine cooled to −35°C is smoother than gelato made by the slow method in part (c).\n\n**Formulate** a hypothesis to test the effect of freezing temperature on the texture of gelato.',
        marks: 3,
        ph: 'If temperature is lower → then texture will be smoother → because ice crystals are smaller/form more quickly',
      },
      {
        label: 'f',
        text: 'A gelato maker compared how quickly three flavours melted at room temperature. The results are shown in the interactive. **Suggest** one way the presentation of this data could be improved.',
        marks: 1,
        ph: 'Use same units throughout; include a mean value; include units in heading; consistent precision',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Gelato flavour', 'Trial 1', 'Trial 2', 'Trial 3'],
            rows: [
              ['Vanilla', '12 min 30 s', '760 s', '13 min'],
              ['Chocolate', '15 min', '0.25 hr', '14 min 40 s'],
              ['Pistachio', '11 min 10 s', '690 s', '11 min'],
            ],
          },
          caption: 'Melting times for three gelato flavours. Note the mixed units between cells.',
        },
      },
      {
        label: 'g',
        text: 'The gelato maker had predicted that the chocolate flavour, which has the most fat, would melt slowest. From the melting data in part (f), **outline** whether the data supports this prediction.',
        marks: 2,
        ph: 'Chocolate does take longest → prediction supported, but units inconsistent / no means → weak support',
      },
    ],
  },

  // ── Q5 (17 marks, Crit B/C) — Railway-track de-icing grit investigation ────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Railway de-icing investigation design & data analysis',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 17,
    stem: 'Railway crews spread de-icing grit to keep points and rails free of ice in winter. A maintenance trainee investigates how quickly a fixed mass of grit melts crushed ice compared with a solid ice block. They set up two trays — crushed ice on one side and a single ice block on the other — and add equal masses of grit to each.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Crushed ice vs solid ice block — surface exposed to the grit',
        mode: 'states',
        containers: ['Crushed ice (large surface area)', 'Solid ice block (small surface area)'],
        particleCount: 24,
        options: ['more exposed surface → faster melting', 'less exposed surface → slower melting'],
      },
      caption: 'Crushed ice exposes far more surface to the de-icing grit than a single block of the same mass.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a research question for the trainee\'s investigation.',
        marks: 1,
        ph: 'How does the surface area of ice affect the time taken for the grit to melt the ice?',
      },
      {
        label: 'b',
        text: '**State** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nControl variable 1:\n\nControl variable 2:',
        marks: 4,
        ph: 'IV: surface area of ice; DV: time for ice to melt; CV1: mass of grit; CV2: type of grit / mass of ice / room temperature',
      },
      {
        label: 'c',
        text: '**State** how the set-up of the investigation in part (a) could be improved.',
        marks: 1,
        ph: 'Same mass of ice used; same surface area each trial; more values of IV; carry out more trials',
      },
      {
        label: 'd',
        text: 'The trainee then compared how much ice three different de-icers melted. The interactive shows the results. The table is incomplete. **Calculate** the missing values to complete the table, giving your values to a suitable number of decimal places.',
        marks: 3,
        ph: 'Blank A: 140/280×100 = 50.00%; Blank B: (250−175)/250×100 = 30.00%',
        artefact: {
          component: 'DataTableInteractive',
          data: {
            title: 'Ice remaining after each de-icer was applied',
            headers: ['De-icer', 'Trial', 'Initial ice mass / g', 'Remaining ice / g', '% remaining', '% melted'],
            rows: [
              ['Rock salt', '1', '280.00', '140.00', '[blank A]', '50.00'],
              ['Calcium chloride', '2', '250.00', '175.00', '70.00', '[blank B]'],
              ['Sand mix', '3', '300.00', '240.00', '80.00', '20.00'],
            ],
            caption: '% remaining = remaining/initial × 100. % melted = (initial − remaining)/initial × 100.',
          },
          caption: 'Two cells are blank. Compute % remaining for rock salt and % melted for calcium chloride.',
        },
      },
      {
        label: 'e',
        text: '**Suggest** why rock salt was used in the investigation in part (d).',
        marks: 1,
        ph: 'Rock salt is the standard railway de-icer — used as the control/reference for comparison',
      },
      {
        label: 'f',
        text: 'The interactive shows the lowest temperature at which several de-icers still work. A mountain railway has average temperatures of −15°C to −2°C, but in exposed cuttings it can reach −45°C. Use the data to **suggest** one de-icing material that would **not** be suitable to clear the track. **Justify** your answer.',
        marks: 2,
        ph: 'Urea — only works above ~−15°C; temperatures can reach −45°C where it is ineffective',
        widget: 'radio_select',
        widgetOptions: ['Urea', 'Sodium chloride', 'Calcium magnesium acetate', 'Calcium chloride', 'Magnesium chloride', 'Potassium acetate'],
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['De-icer', 'Lowest working temperature / °C', 'Contains chloride?'],
            rows: [
              ['Urea', '-12', 'no'],
              ['Sodium chloride', '-9', 'yes'],
              ['Calcium magnesium acetate', '-28', 'no'],
              ['Calcium chloride', '-29', 'yes'],
              ['Magnesium chloride', '-15', 'yes'],
              ['Potassium acetate', '-60', 'no'],
            ],
          },
          caption: 'Lowest effective temperature and chloride content of six de-icers.',
        },
      },
      {
        label: 'g',
        text: 'Chemicals containing chlorides can corrode steel rails and signalling equipment. Using the data from part (f), **state** which substance could be used to de-ice the track and also to protect signal boxes from frost. **Justify** your answer.',
        marks: 2,
        ph: 'Potassium acetate — contains no chloride AND works below −45°C (only substance meeting both criteria)',
      },
      {
        label: 'h',
        text: 'Natural frost forms when water vapour deposits directly onto a cold rail. Machine-made test frost is produced by spraying fine water droplets that freeze into small balls of ice. **Discuss** the validity of using machine-made frost to compare the effects of different de-icers.',
        marks: 3,
        ph: 'Machine-made more compact/different structure than natural frost; de-icers interact differently; limited validity',
      },
    ],
  },

  // ── Q6 (17 marks, Crit D/B) — Pool-sanitiser salt: hazard & design ─────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D/B: Hazards & investigation design — pool-sanitiser salts',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'A swimming-pool operator wants the sanitiser salt that dissolves fastest, so the pool can be treated quickly between sessions. You are provided with the following salts and asked to determine which dissolves fastest in water: sodium hypochlorite (NaOCl), calcium hypochlorite (Ca(OCl)₂), sodium chloride (NaCl), sodium carbonate (Na₂CO₃) and potassium monopersulfate (KHSO₅).',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'How fast each pool-sanitiser salt dissolves (lab trial)',
        mode: 'bars',
        variable: 'Sanitiser salt',
        metric: 'Time for 10 g to fully dissolve / s',
        bars: [
          { label: 'NaOCl', value: 26 },
          { label: 'Ca(OCl)₂', value: 58 },
          { label: 'NaCl', value: 40 },
          { label: 'Na₂CO₃', value: 33 },
          { label: 'KHSO₅', value: 49 },
        ],
        note: 'A shorter bar means the salt dissolves faster — useful for treating the pool quickly.',
      },
      caption: 'Trial dissolving times for five pool-sanitiser salts. Shorter bars dissolve faster.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The image below shows a container of calcium hypochlorite, Ca(OCl)₂, a strong oxidiser used to chlorinate pools. **Select** the hazard represented by the symbol shown on the container.',
        marks: 1,
        ph: 'Flame-over-circle symbol = Oxidising',
        widget: 'radio_select',
        widgetOptions: ['Corrosive', 'Flammable', 'Radioactive', 'Oxidising'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="220" height="200" fill="#ffffff"/><polygon points="110,20 200,110 110,200 20,110" fill="#ffffff" stroke="#d61f26" stroke-width="9"/><circle cx="110" cy="120" r="26" fill="none" stroke="#1f2d3a" stroke-width="6"/><path d="M110 60 q14 26 0 40 q-14 -14 0 -40 Z" fill="#1f2d3a"/><path d="M96 78 q8 16 0 26 q-9 -10 0 -26 Z" fill="#1f2d3a"/><path d="M124 78 q8 16 0 26 q-9 -10 0 -26 Z" fill="#1f2d3a"/><text x="110" y="194" font-size="10" text-anchor="middle" fill="#64748b">GHS symbol on the Ca(OCl)₂ container</text></svg>',
          },
          caption: 'The flame above a circle is the GHS symbol for an oxidiser.',
        },
      },
      {
        label: 'b',
        text: '**Design** an experiment to investigate which pool-sanitiser salt dissolves fastest in water. In your answer, you should include:\n- independent, dependent and control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data\n- any safety precautions you need to take.',
        marks: 16,
        ph: 'Variables (IV: type of salt, DV: time to dissolve, CVs: mass of salt, mass/temperature of water, stirring); equipment; method with 3 repeats; safety (oxidiser/corrosive, ventilation)',
      },
    ],
  },

  // ── Q7 (8 marks, Crit A/D) — Kevlar amide bond & protective-gear materials ─
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Amide bonds, material properties & protective-gear evaluation',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 8,
    stem: 'Protective gear such as motorbike jackets and cut-resistant gloves relies on advanced fibres. Kevlar is an extremely strong synthetic fibre made when a diamine and a dicarboxylic acid react to form an amide linkage. The properties of each protective material differ, so designers must balance strength, weight, heat resistance and cost.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Forming the amide linkage in Kevlar</text><text x="80" y="80" font-size="13" text-anchor="middle" fill="#1f2d3a">H₂N–</text><text x="80" y="98" font-size="9" text-anchor="middle" fill="#64748b">amine</text><text x="160" y="80" font-size="16" text-anchor="middle" fill="#64748b">+</text><text x="250" y="80" font-size="13" text-anchor="middle" fill="#1f2d3a">HOOC–</text><text x="250" y="98" font-size="9" text-anchor="middle" fill="#64748b">carboxylic acid</text><text x="345" y="80" font-size="18" text-anchor="middle" fill="#0b7285">→</text><g><rect x="395" y="52" width="140" height="56" fill="#eef4f7" stroke="#5b6b78"/><text x="465" y="80" font-size="14" font-weight="700" text-anchor="middle" fill="#0b7285">–C(=O)–NH–</text><text x="465" y="98" font-size="9" text-anchor="middle" fill="#64748b">amide linkage</text></g><text x="280" y="150" font-size="11" text-anchor="middle" fill="#475569">An amide linkage is the –C(=O)–NH– group joining two repeat units.</text><text x="280" y="172" font-size="10" text-anchor="middle" fill="#94a3ad">Water is released when the bond forms (condensation polymerisation).</text></svg>',
      },
      caption: 'Kevlar forms by joining an –NH₂ group to a –COOH group, building –C(=O)–NH– amide linkages.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Kevlar is built when an amine group and a carboxylic acid group react to form an amide. **Select** the structure showing the amide linkage formed in this reaction.',
        marks: 1,
        ph: 'Amide linkage = –C(=O)–NH– group; select C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="150" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Which linkage is the amide group in Kevlar?</text><g font-size="13" text-anchor="middle"><g><rect x="16" y="34" width="120" height="96" fill="#f8fafc" stroke="#5b6b78"/><text x="76" y="50" font-size="11" font-weight="700" fill="#64748b">A</text><text x="76" y="92" fill="#1f2d3a">–C(=O)–O–</text><text x="76" y="112" font-size="9" fill="#64748b">ester</text></g><g><rect x="148" y="34" width="120" height="96" fill="#f8fafc" stroke="#5b6b78"/><text x="208" y="50" font-size="11" font-weight="700" fill="#64748b">B</text><text x="208" y="92" fill="#1f2d3a">–O–</text><text x="208" y="112" font-size="9" fill="#64748b">ether</text></g><g><rect x="280" y="34" width="120" height="96" fill="#f8fafc" stroke="#5b6b78"/><text x="340" y="50" font-size="11" font-weight="700" fill="#0b7285">C</text><text x="340" y="92" fill="#1f2d3a">–C(=O)–NH–</text><text x="340" y="112" font-size="9" fill="#64748b">amide</text></g><g><rect x="412" y="34" width="120" height="96" fill="#f8fafc" stroke="#5b6b78"/><text x="472" y="50" font-size="11" font-weight="700" fill="#64748b">D</text><text x="472" y="92" fill="#1f2d3a">–NH₂</text><text x="472" y="112" font-size="9" fill="#64748b">amine</text></g></g></svg>',
          },
          caption: 'Four candidate linkages. The amide group is –C(=O)–NH–.',
        },
      },
      {
        label: 'b',
        text: 'Designers want protective gear that is strong but comfortable to wear. Using the information in the interactive and your wider MYP studies, **discuss** and **evaluate** the suitability of different materials for protective gear. In your answer you should include:\n- properties needed for good protective gear\n- a comparison of at least three different materials\n- your opinion on which material is the most suitable.',
        marks: 7,
        ph: 'Properties: strength/heat resistance/light/flexible; compare Kevlar/leather/nylon/cotton; opinion with justification for at least two',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Material', 'Tensile strength', 'Heat resistance', 'Weight', 'Cost'],
            rows: [
              ['Kevlar fibre', 'very high', 'high', 'light', 'high'],
              ['Leather', 'medium', 'medium', 'heavy', 'medium'],
              ['Nylon', 'high', 'low (melts)', 'light', 'low'],
              ['Cotton drill', 'low', 'medium', 'medium', 'low'],
            ],
          },
          caption: 'Compare at least three of these materials for use in protective gear.',
        },
      },
    ],
  },

  // ── Q8 (14 marks, Crit D) — Electronic (e-waste) recycling ─────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Environmental, economic & individual implications — e-waste',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 14,
    stem: 'The world throws away over 50 million tonnes of electronic waste (e-waste) — phones, laptops and chargers — every year. E-waste contains valuable metals such as copper, gold and lithium, but also toxic ones such as lead and mercury. The interactive compares mining fresh metal from ore with recovering metal by recycling old electronics.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'What happens to 100 units of discarded electronics',
        units: 'units',
        flows: [
          { label: 'Formally recycled (metals recovered)', value: 17, kind: 'out' },
          { label: 'Informally burned / dumped', value: 33, kind: 'loss' },
          { label: 'Sent to landfill', value: 35, kind: 'loss' },
          { label: 'Stored unused in homes', value: 15, kind: 'loss' },
        ],
        conservation: '100 units of e-waste = 17 recycled + 33 burned/dumped + 35 landfilled + 15 stored.',
      },
      caption: 'Green = formally recycled, orange = burned/dumped, landfilled or left unused.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using information from the interactive and your wider knowledge, **discuss** and **evaluate** recycling electronics as a solution to e-waste. In your answer you should include:\n- advantages to the environment of recovering metals compared to mining new ore\n- impacts on the economy of recycling e-waste\n- choices of an individual when reducing their own e-waste\n- a final appraisal on recycling rather than mining new metals.',
        marks: 12,
        ph: 'Environment: less mining/habitat damage/toxic leaching; Economy: recovered-metal value/jobs vs collection cost; Individual: repair/reuse/recycle responsibly; Appraisal with evidence',
      },
      {
        label: 'b',
        text: 'Repair cafés, where volunteers help people fix broken electronics for free, are becoming more popular.\n\n**Suggest** how repair cafés could be part of the solution to reduce e-waste.',
        marks: 2,
        ph: 'Extends the lifetime of devices; fewer devices discarded; less mining and manufacturing needed',
      },
    ],
  },
]
