import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — May 2023 · VARIANT 1  (isomorphic to chemistry-may-2023)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context, with a
// self-contained data-driven interactive artefact in each question's context
// slot. ZERO image files, ZERO markdown tables. Answers recomputed throughout.
//   Q1 Combustion/organics/surface area:  propane+coal → butane camping stove + charcoal briquettes
//   Q2 Periodic/Lewis/covalent bonding:   solar+silicon → geothermal + germanium thermoelectrics
//   Q3 Reactivity/catalyst/moles:         steam-reformed hydrogen → electrolytic "green" hydrogen plant
//   Q4 States of matter/data/hypothesis:  frozen desserts → freeze-dried instant coffee crystals
//   Q5 Investigation design/data:         road-salt de-icing → airport runway anti-icing fluids
//   Q6 Hazards + design (Crit D/B):       de-icing salts → fertiliser salts for a hydroponics farm
//   Q7 Ester/amide bonds + fabric eval:   polyester/sports fabric → PLA bioplastic + food packaging films
//   Q8 Environmental implications (Crit D):clothing waste → single-use plastic packaging waste
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'chemistry-may-2023-v1',
  subject: 'Chemistry',
  session: 'May',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (8 marks, Crit A) — Butane camping stove, organic families, charcoal ─
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Combustion, organic families & surface area — camping fuels',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 8,
    stem: 'Butane is an alkane. It is a fossil fuel sold in pressurised canisters as a portable fuel for camping stoves. The combustion of butane releases energy. The interactive shows butane and two other organic molecules carried by campers.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="210" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Organic molecules carried by a camper</text><g><rect x="24" y="40" width="160" height="150" fill="#f8fafc" stroke="#5b6b78"/><text x="104" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">Butane (fuel)</text><text x="104" y="120" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">C₄H₁₀</text><text x="104" y="150" font-size="10" text-anchor="middle" fill="#64748b">an alkane (only C–C, C–H)</text></g><g><rect x="200" y="40" width="160" height="150" fill="#fff7ed" stroke="#5b6b78"/><text x="280" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#e8590c">Molecule A (stove de-greaser)</text><text x="280" y="112" font-size="18" font-weight="700" text-anchor="middle" fill="#1f2d3a">CH₃CH₂OH</text><text x="280" y="140" font-size="11" text-anchor="middle" fill="#64748b">functional group: –OH</text></g><g><rect x="376" y="40" width="160" height="150" fill="#eef4f7" stroke="#5b6b78"/><text x="456" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">Molecule B (vinegar wipe)</text><text x="456" y="112" font-size="18" font-weight="700" text-anchor="middle" fill="#1f2d3a">CH₃COOH</text><text x="456" y="140" font-size="11" text-anchor="middle" fill="#64748b">functional group: –COOH</text></g></svg>',
      },
      caption: 'Butane fuel plus two other organic molecules. Identify each family from its functional group.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the type of energy change when butane burns in air.',
        marks: 1,
        ph: 'Exothermic',
      },
      {
        label: 'b',
        text: '**Complete** the balanced equation for the complete combustion of butane in oxygen:\n\n2C₄H₁₀ + [?]O₂ → [?]CO₂ + [?]H₂O',
        marks: 2,
        ph: '13, 8, 10 (balance oxygen last)',
        widget: 'fill_blank',
        widgetOptions: ['6', '8', '9', '10', '11', '12', '13', '14'],
      },
      {
        label: 'c',
        text: 'The structures of Molecule A and Molecule B are shown in the interactive.\n\n**Identify** the family that each molecule belongs to.',
        marks: 2,
        ph: 'Molecule A: Alcohol (alkanol); Molecule B: Carboxylic acid (organic acid)',
      },
      {
        label: 'd',
        text: 'Charcoal is burned in barbecues for cooking. **Explain** why powdered charcoal briquettes light more easily than large lumps of charcoal.',
        marks: 3,
        ph: 'Greater surface area → faster rate of reaction → ignites/releases energy more quickly',
      },
    ],
  },

  // ── Q2 (8 marks, Crit A) — Geothermal power, Ge thermoelectrics, periodic ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, Lewis structures & covalent bonding — geothermal power',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 8,
    stem: 'An alternative to burning fossil fuels is geothermal power, which uses heat from deep underground to generate electricity. Some geothermal plants use thermoelectric modules built from germanium (Ge). Elements like gallium (Ga), arsenic (As) and selenium (Se) can also be used in these heat-to-electricity devices.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of the periodic table</text><g><rect x="120" y="50" width="64" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="152" y="68" font-size="9" text-anchor="middle" fill="#64748b">Group 13</text><text x="152" y="86" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">Ga</text><text x="152" y="97" font-size="8" text-anchor="middle" fill="#64748b">gallium · 31</text></g><g><rect x="188" y="50" width="64" height="50" fill="#fff7ed" stroke="#5b6b78"/><text x="220" y="68" font-size="9" text-anchor="middle" fill="#64748b">Group 14</text><text x="220" y="86" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Ge</text><text x="220" y="97" font-size="8" text-anchor="middle" fill="#64748b">germanium · 32</text></g><g><rect x="256" y="50" width="64" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="288" y="68" font-size="9" text-anchor="middle" fill="#64748b">Group 15</text><text x="288" y="86" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">As</text><text x="288" y="97" font-size="8" text-anchor="middle" fill="#64748b">arsenic · 33</text></g><g><rect x="324" y="50" width="64" height="50" fill="#fff7ed" stroke="#5b6b78"/><text x="356" y="68" font-size="9" text-anchor="middle" fill="#64748b">Group 16</text><text x="356" y="86" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Se</text><text x="356" y="97" font-size="8" text-anchor="middle" fill="#64748b">selenium · 34</text></g><text x="280" y="138" font-size="11" text-anchor="middle" fill="#475569">All four are in Period 4 (4 occupied electron shells).</text><text x="280" y="160" font-size="10" text-anchor="middle" fill="#94a3ad">Group number (main groups) = number of outer-shell electrons.</text><text x="280" y="178" font-size="10" text-anchor="middle" fill="#94a3ad">Period number = number of occupied electron shells.</text></svg>',
      },
      caption: 'Ga, Ge, As and Se all sit in Period 4. Read off the group and period of each element.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the periodic table to **identify** the missing information from the table. For gallium (Ga): Group [blank], Period [blank]. For arsenic (As): Group [blank], Period [blank].',
        marks: 2,
        ph: 'Ga: Group 3, Period 4; As: Group 5, Period 4',
      },
      {
        label: 'b',
        text: '**Outline** why geothermal power is considered better for the environment than fossil fuels.',
        marks: 2,
        ph: 'No combustion emissions from geothermal; geothermal is renewable; fossil fuels release CO₂/greenhouse gases',
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
            svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="170" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Which dot-cross diagram shows methane, CH₄?</text><g font-size="11" text-anchor="middle"><g><rect x="16" y="32" width="120" height="120" fill="#f8fafc" stroke="#5b6b78"/><text x="76" y="50" font-weight="700" fill="#0b7285">A</text><text x="76" y="98" font-size="13" fill="#1f2d3a">C with 4 H</text><text x="76" y="116" font-size="10" fill="#64748b">4 shared pairs</text></g><g><rect x="148" y="32" width="120" height="120" fill="#f8fafc" stroke="#5b6b78"/><text x="208" y="50" font-weight="700" fill="#64748b">B</text><text x="208" y="98" font-size="13" fill="#1f2d3a">C with 2 H</text><text x="208" y="116" font-size="10" fill="#64748b">2 shared pairs</text></g><g><rect x="280" y="32" width="120" height="120" fill="#f8fafc" stroke="#5b6b78"/><text x="340" y="50" font-weight="700" fill="#64748b">C</text><text x="340" y="98" font-size="13" fill="#1f2d3a">C=C double bond</text><text x="340" y="116" font-size="10" fill="#64748b">4 H total</text></g><g><rect x="412" y="32" width="120" height="120" fill="#f8fafc" stroke="#5b6b78"/><text x="472" y="50" font-weight="700" fill="#64748b">D</text><text x="472" y="98" font-size="13" fill="#1f2d3a">C with 3 H + OH</text><text x="472" y="116" font-size="10" fill="#64748b">methanol</text></g></g></svg>',
          },
          caption: 'Four candidate dot-cross diagrams. Methane needs carbon sharing one pair with each of four hydrogen atoms.',
        },
      },
      {
        label: 'd',
        text: 'Carbon and germanium form compounds with similar formulas. Some examples are methane (CH₄) and germane (GeH₄). **Explain** why methane and germane have similar formulas.',
        marks: 3,
        ph: 'Same group (Group 4) → same valence electrons; share electrons to form 4 covalent bonds',
      },
    ],
  },

  // ── Q3 (12 marks, Crit A/D) — Green electrolytic hydrogen, moles 6.40 kg ────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Reactivity, catalysts, moles & implications — green hydrogen',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 12,
    stem: 'Hydrogen was discovered by Sir Henry Cavendish in 1766 when he reacted metals with acid. He called the gas produced "inflammable air." We now call this gas hydrogen. To demonstrate his discovery a teacher places three different metals — magnesium, aluminium and zinc — into the same dilute acid. The gas is produced at different rates. Today, "green" hydrogen can be made by splitting water using renewable electricity, while "blue" hydrogen is still made from methane.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Rate of hydrogen production from three metals in acid',
        xLabel: 'Time / s',
        yLabel: 'Volume of hydrogen / cm³',
        xAxis: { label: 'Time / s', min: 0, max: 120, tick: 20 },
        yAxis: { label: 'Volume of hydrogen / cm³', min: 0, max: 60, tick: 10 },
        options: [
          { label: 'Magnesium (most reactive)', color: 'orange', ratePerSec: 1.1, plateauVolume: 54 },
          { label: 'Aluminium', color: 'teal', ratePerSec: 0.55, plateauVolume: 50 },
          { label: 'Zinc (least reactive here)', color: 'purple', ratePerSec: 0.32, plateauVolume: 48 },
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
        text: 'Blue hydrogen is produced in the presence of a nickel catalyst. **Explain** how a catalyst works in a chemical reaction.',
        marks: 3,
        ph: 'Speeds up rate of reaction; by lowering activation energy or providing alternative pathway; without being used up',
      },
      {
        label: 'c',
        text: '**Calculate** the number of moles of hydrogen produced when 6.40 kg of methane reacts with excess steam to make blue hydrogen.\n\nCH₄(g) + H₂O(g) → CO(g) + 3H₂(g)',
        marks: 4,
        ph: 'M(CH₄)=16; n(CH₄)=6400/16=400 mol; 1 mol CH₄→3 mol H₂; n(H₂)=1200 mol',
      },
      {
        label: 'd',
        text: 'After it is produced, hydrogen must be transported to where it is needed. To allow it to be transported safely, the hydrogen is reacted with nitrogen to form ammonia. **Suggest** why it is safer to transport ammonia rather than hydrogen.',
        marks: 1,
        ph: 'Ammonia not flammable (hydrogen is); ammonia has a distinct smell so leaks detected; ammonia less reactive',
      },
      {
        label: 'e',
        text: 'The blue hydrogen process captures the CO₂ from the methane reaction and combines it with calcium oxide to produce calcium carbonate:\n\nCaO(s) + CO₂(g) → CaCO₃(s)\n\n**State** one environmental benefit of using the carbon dioxide in this process. **Justify** your answer.',
        marks: 2,
        ph: 'CO₂ not released into atmosphere → reduces greenhouse gas emissions; reduces climate change',
      },
    ],
  },

  // ── Q4 (16 marks, Crit C) — Freeze-dried instant coffee, crystal size ───────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'States of matter, data analysis & hypothesis — freeze-dried coffee',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 16,
    stem: 'Instant coffee is made by freeze-drying. Brewed coffee is a solution of flavour compounds in water. The coffee is first frozen, then placed under low pressure so the ice turns straight to vapour, leaving solid coffee granules behind. When the coffee solution is cooled, the water inside freezes to form ice crystals which shape the granules.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Water particles in coffee — before and after freezing',
        mode: 'freeze',
        substance: 'water in coffee',
        states: ['liquid (before freezing)', 'solid (after freezing)'],
        particleCount: 16,
        before: 'Liquid: irregular arrangement, particles close together but not all touching, sliding past one another.',
        after: 'Solid: regular ordered lattice, particles all in contact, vibrating about fixed positions.',
      },
      caption: 'Toggle between liquid and frozen coffee to compare how the water particles are arranged.',
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
        text: 'A microscope image shows the structure of a freeze-dried coffee granule. The scale bar marked A spans 48 micrometres (μm). **Measure** the size of the ice-crystal cavity at A and give your answer in metres using standard form.',
        marks: 2,
        ph: 'Measurement = 48 μm (±5); conversion = 4.8 × 10⁻⁵ m',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="180" fill="#ffffff"/><text x="260" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Freeze-dried coffee granule (microscope view)</text><rect x="60" y="36" width="400" height="100" fill="#f5efe6" stroke="#8a6d3b"/><ellipse cx="170" cy="86" rx="46" ry="34" fill="#fffaf2" stroke="#a98b57"/><ellipse cx="300" cy="74" rx="30" ry="24" fill="#fffaf2" stroke="#a98b57"/><ellipse cx="380" cy="104" rx="22" ry="18" fill="#fffaf2" stroke="#a98b57"/><line x1="124" y1="150" x2="216" y2="150" stroke="#1f2d3a" stroke-width="2"/><line x1="124" y1="145" x2="124" y2="155" stroke="#1f2d3a" stroke-width="2"/><line x1="216" y1="145" x2="216" y2="155" stroke="#1f2d3a" stroke-width="2"/><text x="170" y="168" font-size="11" text-anchor="middle" fill="#1f2d3a">scale bar A = 48 μm</text><text x="170" y="90" font-size="12" font-weight="700" text-anchor="middle" fill="#8a6d3b">A</text></svg>',
          },
          caption: 'The cavity marked A is a former ice crystal. Use the scale bar to read its width.',
        },
      },
      {
        label: 'c',
        text: 'A technician froze a coffee solution and recorded the temperature against the percentage of the water that had frozen. The interactive shows the results. **Present** this data in a graph (title, axis labels with units, all points plotted).',
        marks: 4,
        ph: 'x-axis: Temperature / °C; y-axis: % water frozen; two points correct; all data plotted correctly',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Temperature / °C', 'Percentage of water frozen / %'],
            rows: [
              ['-0.80', '0'],
              ['-1.80', '12'],
              ['-3.80', '42'],
              ['-6.80', '78'],
              ['-10.80', '90'],
            ],
          },
          caption: 'Freezing data for the coffee solution. Plot temperature on the x-axis and % frozen on the y-axis.',
        },
      },
      {
        label: 'd',
        text: 'Using your graph from part (c), **estimate** the temperature when 50% of the water would be frozen.',
        marks: 2,
        ph: 'Read from graph at y=50%: approximately −4.5 °C (accept −4 to −5)',
      },
      {
        label: 'e',
        text: 'The texture of freeze-dried coffee depends on the size of the ice crystals, which is set by the freezing temperature. The colder the solution becomes, the smaller the ice crystals. Coffee flash-frozen at −50°C dissolves more smoothly than coffee frozen slowly in part (c).\n\n**Formulate** a hypothesis to test the effect of freezing temperature on the texture of freeze-dried coffee.',
        marks: 3,
        ph: 'If temperature is lower → then texture will be smoother → because ice crystals are smaller/form more quickly',
      },
      {
        label: 'f',
        text: 'A technician compared how quickly three brands of instant-coffee granule dissolved in hot water. The results are shown in the interactive. **Suggest** one way the presentation of this data could be improved.',
        marks: 1,
        ph: 'Use same units throughout; include a mean value; include units in heading; consistent precision',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Coffee brand', 'Trial 1', 'Trial 2', 'Trial 3'],
            rows: [
              ['Brand X', '45 s', '38 s', '44 s'],
              ['Brand Y', '1 min 12 s', '68 s', '1 min 05 s'],
              ['Brand Z', '52 s', '0.9 min', '50 s'],
            ],
          },
          caption: 'Dissolving times for three coffee brands. Note the mixed units between rows.',
        },
      },
      {
        label: 'g',
        text: 'The technician had predicted that finer granules would dissolve fastest. From the dissolving data in part (f), **outline** whether the data supports this prediction.',
        marks: 2,
        ph: 'Brand X (finest) does dissolve fastest OR data inconsistent with mixed units → comment on whether prediction is supported',
      },
    ],
  },

  // ── Q5 (17 marks, Crit B/C) — Runway anti-icing fluids investigation ────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Runway anti-icing investigation design & data analysis',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 17,
    stem: 'Airport ground crews spray anti-icing fluids onto runways before frost forms. A trainee technician investigates how quickly a fixed mass of de-icing fluid melts crushed ice compared with a solid ice block. They set up two trays — crushed ice on one side and a single ice block on the other — and add equal masses of fluid to each.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Crushed ice vs solid ice block — surface exposed to the fluid',
        mode: 'states',
        containers: ['Crushed ice (large surface area)', 'Solid ice block (small surface area)'],
        particleCount: 24,
        options: ['more exposed surface → faster melting', 'less exposed surface → slower melting'],
      },
      caption: 'Crushed ice exposes far more surface to the de-icing fluid than a single block of the same mass.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a research question for the technician\'s investigation.',
        marks: 1,
        ph: 'How does the surface area of ice affect the time taken for the de-icing fluid to melt the ice?',
      },
      {
        label: 'b',
        text: '**State** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nControl variable 1:\n\nControl variable 2:',
        marks: 4,
        ph: 'IV: surface area of ice; DV: time for ice to melt; CV1: mass of fluid; CV2: type of fluid / mass of ice / room temperature',
      },
      {
        label: 'c',
        text: '**State** how the set-up of the investigation in part (a) could be improved.',
        marks: 1,
        ph: 'Same mass of ice used; same surface area each trial; more values of IV; carry out more trials',
      },
      {
        label: 'd',
        text: 'The technician then compared how much ice three different de-icing fluids melted. The interactive shows the results. The table is incomplete. **Calculate** the missing values to complete the table, giving your values to a suitable number of decimal places.',
        marks: 3,
        ph: 'Blank A: 120/240×100 = 50.00%; Blank B: (180−126)/180×100 = 30.00%',
        artefact: {
          component: 'DataTableInteractive',
          data: {
            title: 'Ice remaining after each de-icing fluid was applied',
            headers: ['Fluid', 'Trial', 'Initial ice mass / g', 'Remaining ice / g', '% remaining', '% melted'],
            rows: [
              ['Potassium acetate', '1', '240.00', '120.00', '[blank A]', '50.00'],
              ['Propylene glycol', '2', '180.00', '126.00', '70.00', '[blank B]'],
              ['Urea', '3', '200.00', '160.00', '80.00', '20.00'],
            ],
            caption: '% remaining = remaining/initial × 100. % melted = (initial − remaining)/initial × 100.',
          },
          caption: 'Two cells are blank. Compute % remaining for potassium acetate and % melted for propylene glycol.',
        },
      },
      {
        label: 'e',
        text: '**Suggest** why potassium acetate was used in the investigation in part (d).',
        marks: 1,
        ph: 'Potassium acetate is the standard runway de-icer — used as the control/reference for comparison',
      },
      {
        label: 'f',
        text: 'The interactive shows the lowest temperature at which several de-icers still work. An airport above the Arctic Circle has average temperatures of −15°C to −2°C, but wind-chill can reach −45°C. Use the data to **suggest** one de-icing material that would **not** be suitable to clear the runways. **Justify** your answer.',
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
        text: 'Chemicals containing chlorides can corrode aircraft and runway metal. Using the data from part (f), **state** which substance could be used to de-ice runways and also to remove ice from aircraft wings before flight. **Justify** your answer.',
        marks: 2,
        ph: 'Potassium acetate — contains no chloride AND works below −45°C (only substance meeting both criteria)',
      },
      {
        label: 'h',
        text: 'Natural frost forms when water vapour deposits directly onto a cold surface. Machine-made test frost is produced by spraying fine water droplets that freeze into small balls of ice. **Discuss** the validity of using machine-made frost to compare the effects of different de-icers.',
        marks: 3,
        ph: 'Machine-made more compact/different structure than natural frost; de-icers interact differently; limited validity',
      },
    ],
  },

  // ── Q6 (17 marks, Crit D/B) — Hydroponics fertiliser salt: hazard & design ──
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D/B: Hazards & investigation design — fertiliser salts',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'A hydroponics farm grows lettuce in nutrient solution and wants the fertiliser salt that dissolves fastest so the nutrients are available to the roots most quickly. You are provided with the following salts and asked to determine which dissolves fastest in water: ammonium nitrate (NH₄NO₃), potassium nitrate (KNO₃), magnesium sulfate (MgSO₄), calcium nitrate (Ca(NO₃)₂) and potassium chloride (KCl).',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'How fast each fertiliser salt dissolves (lab trial)',
        mode: 'bars',
        variable: 'Fertiliser salt',
        metric: 'Time for 10 g to fully dissolve / s',
        bars: [
          { label: 'NH₄NO₃', value: 28 },
          { label: 'KNO₃', value: 46 },
          { label: 'MgSO₄', value: 61 },
          { label: 'Ca(NO₃)₂', value: 34 },
          { label: 'KCl', value: 52 },
        ],
        note: 'A shorter bar means the salt dissolves faster — useful for getting nutrients to the roots quickly.',
      },
      caption: 'Trial dissolving times for five fertiliser salts. Shorter bars dissolve faster.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The image below shows a container of ammonium nitrate, NH₄NO₃, which is an oxidiser. **Select** the hazard represented by the symbol shown on the container.',
        marks: 1,
        ph: 'Flame-over-circle symbol = Oxidising',
        widget: 'radio_select',
        widgetOptions: ['Corrosive', 'Flammable', 'Radioactive', 'Oxidising'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="220" height="200" fill="#ffffff"/><polygon points="110,20 200,110 110,200 20,110" fill="#ffffff" stroke="#d61f26" stroke-width="9"/><circle cx="110" cy="120" r="26" fill="none" stroke="#1f2d3a" stroke-width="6"/><path d="M110 60 q14 26 0 40 q-14 -14 0 -40 Z" fill="#1f2d3a"/><path d="M96 78 q8 16 0 26 q-9 -10 0 -26 Z" fill="#1f2d3a"/><path d="M124 78 q8 16 0 26 q-9 -10 0 -26 Z" fill="#1f2d3a"/><text x="110" y="194" font-size="10" text-anchor="middle" fill="#64748b">GHS symbol on the NH₄NO₃ container</text></svg>',
          },
          caption: 'The flame above a circle is the GHS symbol for an oxidiser.',
        },
      },
      {
        label: 'b',
        text: '**Design** an experiment to investigate which fertiliser salt dissolves fastest in water. In your answer, you should include:\n- independent, dependent and control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data\n- any safety precautions you need to take.',
        marks: 16,
        ph: 'Variables (IV: type of salt, DV: time to dissolve, CVs: mass of salt, mass/temperature of water, stirring); equipment; method with 3 repeats; safety (irritant/oxidiser)',
      },
    ],
  },

  // ── Q7 (8 marks, Crit A/D) — PLA bioplastic ester bond & packaging films ────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Ester bonds, polymer properties & food-packaging evaluation',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 8,
    stem: 'Food packaging is moving away from oil-based plastics towards compostable alternatives. PLA (polylactic acid) is a bioplastic made from plant starch: lactic acid molecules join when an alcohol group and a carboxylic acid group react to form an ester linkage. The properties of each packaging film differ, so manufacturers must weigh up cost, strength and how the material breaks down.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Forming the ester linkage in PLA</text><text x="80" y="80" font-size="13" text-anchor="middle" fill="#1f2d3a">–OH</text><text x="80" y="98" font-size="9" text-anchor="middle" fill="#64748b">alcohol</text><text x="160" y="80" font-size="16" text-anchor="middle" fill="#64748b">+</text><text x="250" y="80" font-size="13" text-anchor="middle" fill="#1f2d3a">HOOC–</text><text x="250" y="98" font-size="9" text-anchor="middle" fill="#64748b">carboxylic acid</text><text x="345" y="80" font-size="18" text-anchor="middle" fill="#0b7285">→</text><g><rect x="395" y="52" width="140" height="56" fill="#eef4f7" stroke="#5b6b78"/><text x="465" y="80" font-size="14" font-weight="700" text-anchor="middle" fill="#0b7285">–C(=O)–O–</text><text x="465" y="98" font-size="9" text-anchor="middle" fill="#64748b">ester linkage</text></g><text x="280" y="150" font-size="11" text-anchor="middle" fill="#475569">An ester linkage is the –C(=O)–O– group joining two repeat units.</text><text x="280" y="172" font-size="10" text-anchor="middle" fill="#94a3ad">Water is released when the bond forms (condensation polymerisation).</text></svg>',
      },
      caption: 'PLA forms by joining an –OH group to a –COOH group, building –C(=O)–O– ester linkages.',
    },
    tasks: [
      {
        label: 'a',
        text: 'PLA is built when an alcohol group and a carboxylic acid group react to form an ester. **Select** the structure showing the ester linkage formed in this reaction.',
        marks: 1,
        ph: 'Ester linkage = –C(=O)–O– group; select B',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="150" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Which linkage is the ester group in PLA?</text><g font-size="13" text-anchor="middle"><g><rect x="16" y="34" width="120" height="96" fill="#f8fafc" stroke="#5b6b78"/><text x="76" y="50" font-size="11" font-weight="700" fill="#64748b">A</text><text x="76" y="92" fill="#1f2d3a">–C(=O)–NH–</text><text x="76" y="112" font-size="9" fill="#64748b">amide</text></g><g><rect x="148" y="34" width="120" height="96" fill="#f8fafc" stroke="#5b6b78"/><text x="208" y="50" font-size="11" font-weight="700" fill="#0b7285">B</text><text x="208" y="92" fill="#1f2d3a">–C(=O)–O–</text><text x="208" y="112" font-size="9" fill="#64748b">ester</text></g><g><rect x="280" y="34" width="120" height="96" fill="#f8fafc" stroke="#5b6b78"/><text x="340" y="50" font-size="11" font-weight="700" fill="#64748b">C</text><text x="340" y="92" fill="#1f2d3a">–O–</text><text x="340" y="112" font-size="9" fill="#64748b">ether</text></g><g><rect x="412" y="34" width="120" height="96" fill="#f8fafc" stroke="#5b6b78"/><text x="472" y="50" font-size="11" font-weight="700" fill="#64748b">D</text><text x="472" y="92" fill="#1f2d3a">–OH</text><text x="472" y="112" font-size="9" fill="#64748b">alcohol</text></g></g></svg>',
          },
          caption: 'Four candidate linkages. The ester group is –C(=O)–O–.',
        },
      },
      {
        label: 'b',
        text: 'Supermarkets want packaging that protects food but does not pollute. Using the information in the interactive and your wider MYP studies, **discuss** and **evaluate** the suitability of different materials for food-packaging film. In your answer you should include:\n- properties needed for good food-packaging film\n- a comparison of at least three different materials\n- your opinion on which material is the most suitable.',
        marks: 7,
        ph: 'Properties: barrier/strength/compostability; compare PLA/PET/LDPE/paper; opinion with justification for at least two',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Packaging film', 'Moisture barrier', 'Strength', 'Compostable?', 'Cost'],
            rows: [
              ['PLA bioplastic', 'good', 'medium', 'yes (industrial)', 'high'],
              ['PET (oil plastic)', 'excellent', 'high', 'no', 'low'],
              ['LDPE (oil plastic)', 'good', 'medium', 'no', 'low'],
              ['Coated paper', 'poor', 'low', 'partly', 'medium'],
            ],
          },
          caption: 'Compare at least three of these films for use as food packaging.',
        },
      },
    ],
  },

  // ── Q8 (14 marks, Crit D) — Single-use plastic packaging waste ──────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Environmental, economic & individual implications — plastic waste',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 14,
    stem: 'The world produces over 400 million tonnes of plastic every year, and around 40% of it is single-use packaging. Most ends up in landfill or the ocean, where it can take centuries to break down. The interactive compares making new plastic from crude oil with recycling used plastic into new packaging.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'What happens to 100 units of single-use plastic packaging',
        units: 'units',
        flows: [
          { label: 'Recycled into new products', value: 14, kind: 'out' },
          { label: 'Incinerated for energy', value: 25, kind: 'loss' },
          { label: 'Sent to landfill', value: 40, kind: 'loss' },
          { label: 'Leaks into the environment', value: 21, kind: 'loss' },
        ],
        conservation: '100 units of packaging = 14 recycled + 25 incinerated + 40 landfilled + 21 leaked.',
      },
      caption: 'Green = recycled, orange = lost to incineration/landfill/the environment.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using information from the interactive and your wider knowledge, **discuss** and **evaluate** recycling plastic packaging as a solution to plastic waste. In your answer you should include:\n- advantages to the environment of recycling compared to making new plastic from oil\n- impacts on the economy of recycling plastic\n- choices of an individual when reducing their own plastic packaging waste\n- a final appraisal on recycling rather than making new plastic.',
        marks: 12,
        ph: 'Environment: less crude oil/emissions/ocean pollution; Economy: recycling industry/jobs vs cost; Individual: refill/reuse/avoid single-use; Appraisal with evidence',
      },
      {
        label: 'b',
        text: 'Refill stations, where shoppers bring their own containers to buy products loose, are becoming more common in supermarkets.\n\n**Suggest** how refill stations could be part of the solution to reduce plastic packaging waste.',
        marks: 2,
        ph: 'Avoids single-use packaging entirely; container reused many times; less plastic produced and discarded',
      },
    ],
  },
]
