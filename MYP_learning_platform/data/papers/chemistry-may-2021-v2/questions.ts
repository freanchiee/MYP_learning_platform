import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — May 2021 · VARIANT 2  (isomorphic to chemistry-may-2021)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context — distinct
// from both the source and variant 1 — with a self-contained data-driven
// INTERACTIVE artefact on every question (no image files, no markdown tables).
// Answers recomputed throughout.
//   Q1 Atomic structure/periodic:   rocky/gas planets → volcanic rock + volcanic gas
//   Q2 Isotopes/rate/catalyst:      exoplanet oxygen → comet & asteroid ices (chlorine)
//   Q3 States/combustion/altitude:  candles → paraffin (kerosene) oil lamp
//   Q4 Variables/data eval:         vanilla vs strawberry candle → two firelighter-cube brands
//   Q5 Separation/biomass:          coffee grounds → sawdust / wood-waste pellets
//   Q6 Crit B design:               solid fuels A–E → five candle waxes (energy per gram)
//   Q7 Graph + filtration:          water consumption → global energy demand + well-water filters
//   Q8 Crit D water tech:           coastal city → desert town
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'chemistry-may-2021-v2',
  subject: 'Chemistry',
  session: 'May',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (9 marks, Crit A) — Volcanic rock & gases, atomic structure ───────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic structure & periodic table',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 9,
    stem: 'A volcano is a window into the chemistry of the Earth. The cooled lava rock is rich in silicon (Si), titanium (Ti) and potassium (K). The gases that hiss out of the vents and fumaroles include helium (He), hydrogen (H₂) and hydrogen sulfide (H₂S), which gives the "rotten egg" smell.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="230" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of the periodic table</text><g><rect x="40" y="40" width="58" height="46" fill="#eef4f7" stroke="#5b6b78"/><text x="69" y="55" font-size="8" text-anchor="middle" fill="#64748b">Group 1</text><text x="69" y="72" font-size="15" font-weight="700" text-anchor="middle" fill="#0b7285">K</text><text x="69" y="83" font-size="7.5" text-anchor="middle" fill="#64748b">potassium · 19</text></g><g><rect x="120" y="40" width="58" height="46" fill="#fef9c3" stroke="#5b6b78"/><text x="149" y="55" font-size="8" text-anchor="middle" fill="#64748b">d-block</text><text x="149" y="72" font-size="15" font-weight="700" text-anchor="middle" fill="#a16207">Ti</text><text x="149" y="83" font-size="7.5" text-anchor="middle" fill="#64748b">titanium · 22</text></g><g><rect x="280" y="40" width="58" height="46" fill="#ecfeff" stroke="#5b6b78"/><text x="309" y="55" font-size="8" text-anchor="middle" fill="#64748b">Group 4</text><text x="309" y="72" font-size="15" font-weight="700" text-anchor="middle" fill="#0e7490">Si</text><text x="309" y="83" font-size="7.5" text-anchor="middle" fill="#64748b">silicon · 14</text></g><g><rect x="440" y="40" width="58" height="46" fill="#fff7ed" stroke="#5b6b78"/><text x="469" y="55" font-size="8" text-anchor="middle" fill="#64748b">Group 0</text><text x="469" y="72" font-size="15" font-weight="700" text-anchor="middle" fill="#c2410c">He</text><text x="469" y="83" font-size="7.5" text-anchor="middle" fill="#64748b">helium · 2</text></g><text x="40" y="120" font-size="11" fill="#475569">K — reactive metal, Group 1, one outer-shell electron.</text><text x="40" y="140" font-size="11" fill="#475569">Ti — transition metal (d-block), Period 4.</text><text x="40" y="160" font-size="11" fill="#475569">Si — metalloid, Group 4, four outer-shell electrons.</text><text x="40" y="180" font-size="11" fill="#475569">He — noble gas, Group 0, full outer shell.</text><text x="40" y="206" font-size="10" fill="#94a3ad">Group number (main groups) = number of outer-shell electrons; Period = number of occupied shells.</text></svg>',
      },
      caption: 'Potassium, titanium, silicon and helium shown in the periodic table. Group number gives the number of outer-shell electrons.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the number of electrons in the outer shell of an atom of silicon.',
        marks: 1,
        ph: 'Select number of outer shell electrons for Si',
        widget: 'radio_select',
        widgetOptions: ['1', '2', '4', '8'],
      },
      {
        label: 'b',
        text: 'Using the periodic table, **state** the group and period of potassium.\n\nGroup:\n\nPeriod:',
        marks: 2,
        ph: 'State group number and period number for K',
      },
      {
        label: 'c',
        text: '**Select** the region of the periodic table where titanium is located.',
        marks: 1,
        ph: 'Select the region of the periodic table for titanium',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Noble gases', 'Halogens'],
      },
      {
        label: 'd',
        text: 'Some of the volcanic gases are helium (He), hydrogen (H₂) and hydrogen sulfide (H₂S). **Explain** why hydrogen occurs as diatomic molecules, but helium does not.',
        marks: 4,
        ph: 'Explain electron sharing vs full outer shell for H vs He',
      },
      {
        label: 'e',
        text: '**Select** the diagram that shows the Lewis structure (electron dot or dot cross diagram) of hydrogen sulfide, H₂S.',
        marks: 1,
        ph: 'Select correct Lewis structure for H₂S',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="170" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Candidate Lewis structures for H₂S</text><g font-size="9" fill="#475569"><text x="70" y="40" text-anchor="middle" font-weight="700" fill="#0b7285">A</text><text x="70" y="95" text-anchor="middle" font-size="20" fill="#1f2d3a">S</text><text x="70" y="58" text-anchor="middle">H–S–H, S with</text><text x="70" y="120" text-anchor="middle">no lone pairs</text></g><g font-size="9" fill="#475569"><text x="210" y="40" text-anchor="middle" font-weight="700" fill="#0b7285">B</text><text x="210" y="58" text-anchor="middle">2 H, each sharing one pair</text><text x="210" y="95" text-anchor="middle" font-size="20" fill="#1f2d3a">S</text><text x="210" y="120" text-anchor="middle">with S; S keeps 2 lone pairs</text></g><g font-size="9" fill="#475569"><text x="350" y="40" text-anchor="middle" font-weight="700" fill="#0b7285">C</text><text x="350" y="58" text-anchor="middle">S sharing one pair</text><text x="350" y="95" text-anchor="middle" font-size="20" fill="#1f2d3a">S</text><text x="350" y="120" text-anchor="middle">with only 1 H</text></g><g font-size="9" fill="#475569"><text x="490" y="40" text-anchor="middle" font-weight="700" fill="#0b7285">D</text><text x="490" y="58" text-anchor="middle">ionic: 2 H⁺ and S²⁻</text><text x="490" y="95" text-anchor="middle" font-size="20" fill="#1f2d3a">S</text><text x="490" y="120" text-anchor="middle">no shared pairs</text></g><text x="280" y="150" font-size="9" fill="#94a3ad" text-anchor="middle">Sulfur shares one electron pair with each of two hydrogens and keeps two lone pairs.</text></svg>',
          },
          caption: 'Four candidate dot-and-cross diagrams for hydrogen sulfide. Only one shows sulfur sharing a pair with each of two hydrogens and keeping two lone pairs.',
        },
      },
    ],
  },

  // ── Q2 (12 marks, Crit A) — Comet & asteroid ices, isotopes, catalysts ───────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Isotopes, reactions & catalysts',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 12,
    stem: 'Comets and asteroids are frozen leftovers from the birth of the solar system. As a comet swings close to the Sun, its ices warm up and stream away as a tail. Spacecraft that have flown through these tails detect chlorine-containing salts, and the dust grains contain several isotopes of chlorine.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Surface temperature of a comet at different distances from the Sun',
        mode: 'bars',
        variable: 'Distance from the Sun (closer →)',
        metric: 'Comet surface temperature / K',
        bars: [
          { label: '5 AU', value: 120 },
          { label: '3 AU', value: 160 },
          { label: '1 AU', value: 280 },
          { label: '0.5 AU', value: 400 },
        ],
        note: 'The closer the comet is to the Sun, the hotter its surface — and the faster any reaction in the ices will go.',
      },
      caption: 'A comet is hottest when closest to the Sun; temperature controls the rate of reactions in its ices.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Chlorine occurs as a mixture of isotopes, which have 18, 20 and 22 neutrons respectively. **Calculate** the mass number of the isotope which has 20 neutrons.',
        marks: 2,
        ph: 'Mass number = protons + neutrons; protons = 17',
      },
      {
        label: 'b',
        text: 'If a probe ever detected molecular oxygen in a comet\'s tail it would cause great excitement, because on Earth oxygen is linked to life. **Suggest** why the presence of molecular oxygen does not necessarily indicate the presence of life.',
        marks: 1,
        ph: 'Oxygen can come from non-biological sources',
      },
      {
        label: 'c',
        text: '**Calculate** the relative molecular mass of a chlorine molecule (Cl₂) containing one atom of chlorine-35 and one atom of chlorine-37.',
        marks: 1,
        ph: 'Add atomic masses: 35 + 37',
      },
      {
        label: 'd',
        text: 'When hydrogen chloride gas from a comet dissolves in melted ice it forms an acidic solution. One way to test if a solution is acidic is to use an indicator to determine its pH. Different indicators change colour over different ranges of pH. The chart shows the colour-change ranges of two indicators, indicator A and indicator B. Use information from the chart to **determine** the **range** of pH possible for the hydrogen-chloride solution.',
        marks: 2,
        ph: 'Read where both indicators overlap; range 4.3–7',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Colour-change ranges of two indicators</text><g font-size="9" fill="#64748b"><text x="40" y="175" text-anchor="middle">0</text><text x="100" y="175" text-anchor="middle">2</text><text x="160" y="175" text-anchor="middle">4</text><text x="220" y="175" text-anchor="middle">6</text><text x="280" y="175" text-anchor="middle">8</text><text x="340" y="175" text-anchor="middle">10</text><text x="400" y="175" text-anchor="middle">12</text><text x="460" y="175" text-anchor="middle">14</text></g><line x1="40" y1="160" x2="490" y2="160" stroke="#5b6b78" stroke-width="1.2"/><text x="265" y="195" font-size="10" font-weight="600" text-anchor="middle" fill="#1f2d3a">pH</text><g><text x="40" y="55" font-size="10" font-weight="700" fill="#0b7285">Indicator A</text><rect x="40" y="62" width="89" height="16" fill="#fca5a5"/><rect x="129" y="62" width="22" height="16" fill="#fcd34d"/><rect x="151" y="62" width="339" height="16" fill="#86efac"/><text x="84" y="74" font-size="8" text-anchor="middle" fill="#7f1d1d">red</text><text x="320" y="74" font-size="8" text-anchor="middle" fill="#14532d">yellow (above pH ≈ 4.5)</text></g><g><text x="40" y="105" font-size="10" font-weight="700" fill="#be185d">Indicator B</text><rect x="40" y="112" width="170" height="16" fill="#fda4af"/><rect x="210" y="112" width="20" height="16" fill="#c4b5fd"/><rect x="230" y="112" width="260" height="16" fill="#93c5fd"/><text x="125" y="124" font-size="8" text-anchor="middle" fill="#831843">pink (below pH 7)</text><text x="360" y="124" font-size="8" text-anchor="middle" fill="#1e3a8a">blue</text></g><text x="265" y="148" font-size="9" fill="#94a3ad" text-anchor="middle">A turns yellow above pH ≈ 4.3–4.5; B stays pink below pH 7. Both observed colours overlap in one band.</text></svg>',
          },
          caption: 'Indicator A turns yellow above pH ≈ 4.3–4.5; indicator B is pink below pH 7. Find the pH band consistent with both.',
        },
      },
      {
        label: 'e',
        text: 'There is evidence of specific chemical reactions in the warming ices of a comet. One of these reactions is the decomposition of carbon dioxide:\n\n2CO₂(g) → 2CO(g) + O₂(g)\n\n**Suggest** why the rate of the decomposition reaction increases as the comet moves closer to the Sun.',
        marks: 2,
        ph: 'Higher temperature near the Sun → faster reaction rate',
      },
      {
        label: 'f',
        text: 'Carbon dioxide can be re-formed in the presence of catalysts:\n\n2CO(g) + O₂(g) → 2CO₂(g)\n\n**Outline** the role of a catalyst in a chemical reaction.',
        marks: 2,
        ph: 'Catalyst speeds up reaction, not consumed',
      },
      {
        label: 'g',
        text: 'Several space agencies are planning new missions to comets and asteroids. So far, only a few probes have flown past or briefly landed on them. Future missions could involve returning samples to Earth or even mining metals from asteroids.\n\n**Suggest** two additional reasons why nations and companies are interested in visiting comets and asteroids, and are funding these missions.',
        marks: 2,
        ph: 'Suggest two reasons beyond those in the text',
      },
    ],
  },

  // ── Q3 (16 marks, Crit A/B/C) — Paraffin (kerosene) oil lamp ─────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'States of matter, combustion & data analysis',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 16,
    stem: 'In places without mains electricity, a paraffin (kerosene) oil lamp gives light by burning a liquid hydrocarbon fuel that is drawn up a cotton wick. How long one tank of fuel lasts will determine how useful the lamp is for an evening of study.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Fuel in a paraffin oil lamp',
        mode: 'states',
        substance: 'paraffin (kerosene)',
        states: ['Liquid paraffin (in the fuel tank)', 'Paraffin vapour (gas, burning at the wick tip)'],
        containers: ['In the fuel reservoir', 'At the wick tip'],
        note: 'The fuel is a liquid in the tank; the heat of the flame turns it to a vapour (gas) at the wick, where it burns.',
      },
      caption: 'Paraffin is a liquid in the lamp\'s tank and becomes a vapour (gas) at the wick, where it combusts.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Several changes occur as the fuel travels from the tank to the flame.\n\n**Select** the state of the fuel at A (in the fuel reservoir) and B (in the vapour just above the lit wick tip).',
        marks: 2,
        ph: 'A = liquid (in the tank); B = gas (vapour burning at the wick)',
        widget: 'inline_dropdown_select',
        widgetItems: ['A', 'B'],
        widgetOptions: ['Solid', 'Liquid', 'Gas'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="190" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Fuel path in a paraffin oil lamp</text><path d="M180 170 L180 110 Q180 90 210 90 L350 90 Q380 90 380 110 L380 170 Z" fill="#fef3c7" stroke="#5b6b78" stroke-width="1.5"/><rect x="185" y="130" width="190" height="38" fill="#fbbf24" opacity="0.7"/><text x="280" y="153" font-size="10" text-anchor="middle" fill="#78350f">liquid paraffin</text><text x="280" y="183" font-size="9" text-anchor="middle" fill="#475569">fuel reservoir</text><circle cx="280" cy="150" r="7" fill="#b45309"/><text x="280" y="153" font-size="9" font-weight="700" text-anchor="middle" fill="#ffffff">A</text><rect x="272" y="50" width="16" height="42" fill="#e5e7eb" stroke="#9ca3af"/><text x="305" y="70" font-size="9" fill="#475569">wick</text><path d="M270 50 q10 -34 20 0 q8 -22 16 8 q-22 14 -36 -8 Z" fill="#f59e0b"/><circle cx="280" cy="44" r="7" fill="#ea580c"/><text x="280" y="47" font-size="9" font-weight="700" text-anchor="middle" fill="#ffffff">B</text><text x="330" y="40" font-size="9" fill="#9a3412">vapour burns</text></svg>',
          },
          caption: 'A is the liquid fuel in the reservoir; B is the vapour burning just above the wick tip.',
        },
      },
      {
        label: 'b',
        text: 'A typical molecule in the paraffin fuel is C₁₂H₂₆. Another hydrocarbon in the same class is C₇H₁₆. **State** the name and chemical class of C₇H₁₆.\n\nName:\n\nChemical class:',
        marks: 2,
        ph: 'Heptane; Alkane',
      },
      {
        label: 'c',
        text: '**Select** numbers to balance the equation showing complete combustion of C₇H₁₆.\n\n[?] C₇H₁₆(l) + [?] O₂(g) → [?] CO₂(g) + [?] H₂O(g)',
        marks: 2,
        ph: 'Coefficients: 1, 11, 7, 8',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '6', '7', '8', '9', '11', '12'],
      },
      {
        label: 'd',
        text: 'A student wanted to compare how long two lamps burned from identical tanks. One lamp had a glass chimney fitted over the flame and the other did not.\n\n**Formulate** a hypothesis for the student\'s question.\n\nIf the lamp has a glass chimney fitted then the time taken for the fuel to burn will [blank] because:',
        marks: 3,
        ph: 'Direction: increase or decrease; give scientific reason',
        widget: 'fill_blank',
        widgetOptions: ['increase', 'decrease'],
      },
      {
        label: 'e',
        text: 'A student wanted to investigate the effect of altitude on how quickly the lamp uses fuel. Her processed data is shown in the table above the answer box. **State** the rate of fuel use at an altitude of 3720 m in standard form.',
        marks: 1,
        ph: '9.40 × 10⁻² g min⁻¹',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Altitude / m', 'Rate of fuel use / g min⁻¹'],
            rows: [
              ['990', '0.143'],
              ['2700', '0.115'],
              ['3200', '0.101'],
              ['3720', '0.0940'],
              ['4700', '0.0802'],
            ],
          },
          caption: 'Processed data: rate of oil-lamp fuel use at five altitudes. Read the 3720 m value and convert to standard form.',
        },
      },
      {
        label: 'f',
        text: 'The student produced a graph of her results. The artefact above the answer box reproduces the graph she drew. **Identify** two errors in the presentation of the data in this graph.',
        marks: 2,
        ph: 'Axes swapped; should be scatter/line not bar chart',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="230" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">The student\'s graph (drawn incorrectly)</text><line x1="70" y1="190" x2="520" y2="190" stroke="#5b6b78" stroke-width="1.5"/><line x1="70" y1="40" x2="70" y2="190" stroke="#5b6b78" stroke-width="1.5"/><text x="295" y="220" font-size="10" text-anchor="middle" fill="#475569">Rate of fuel use / g min⁻¹ (plotted on x-axis)</text><text x="30" y="115" font-size="10" text-anchor="middle" fill="#475569" transform="rotate(-90 30 115)">Altitude / m</text><rect x="100" y="150" width="40" height="40" fill="#f59e0b"/><rect x="180" y="120" width="40" height="70" fill="#f59e0b"/><rect x="260" y="95" width="40" height="95" fill="#f59e0b"/><rect x="340" y="85" width="40" height="105" fill="#f59e0b"/><rect x="420" y="60" width="40" height="130" fill="#f59e0b"/><text x="280" y="55" font-size="9" fill="#b91c1c" text-anchor="middle">Bar chart used for continuous data; axes swapped.</text></svg>',
          },
          caption: 'The graph the student drew. Look at the axis variables and the chart type chosen.',
        },
      },
      {
        label: 'g',
        text: 'The student repeated the experiment the following day. The equipment set up on each day is shown in the artefact above the answer box.\n\nDay 1: lamp fitted with a tall glass chimney. Day 2: same lamp with no chimney, in still air.\n\n**Outline** why the sets of results are different and **suggest** how the **rate** of fuel combustion would be affected.',
        marks: 4,
        ph: 'Different equipment / draught / oxygen availability; state direction of rate change',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="140" y="22" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Day 1 — tall glass chimney</text><rect x="120" y="40" width="40" height="100" fill="none" stroke="#93c5fd" stroke-width="2"/><rect x="125" y="150" width="30" height="14" fill="#fbbf24"/><path d="M132 150 q8 -28 16 0 q6 -16 12 6 q-18 10 -28 -6 Z" fill="#f97316"/><line x1="140" y1="40" x2="140" y2="30" stroke="#93c5fd" stroke-width="2"/><text x="200" y="90" font-size="9" fill="#475569">chimney draws air</text><text x="140" y="185" font-size="9" text-anchor="middle" fill="#475569">strong upward draught</text><text x="420" y="22" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Day 2 — no chimney, still air</text><rect x="405" y="150" width="30" height="14" fill="#fbbf24"/><path d="M412 150 q8 -22 16 0 q6 -12 12 5 q-18 9 -28 -5 Z" fill="#fb923c"/><text x="420" y="185" font-size="9" text-anchor="middle" fill="#475569">little airflow to flame</text></svg>',
          },
          caption: 'Two equipment set-ups: a lamp with a tall glass chimney (Day 1) versus the same lamp with no chimney in still air (Day 2). Compare the airflow to the flame.',
        },
      },
    ],
  },

  // ── Q4 (10 marks, Crit C) — Two firelighter-cube brands ──────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Investigation variables & data evaluation',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 10,
    stem: 'Firelighter cubes are small blocks of compressed fuel used to start a campfire or wood-burning stove. A student compared two brands to see which burns for longer with a steady flame: brand "FlameFast" and brand "QuickLight".',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Firelighter', 'Cube mass / g', 'Trial 1 / min', 'Trial 2 / min', 'Trial 3 / min', 'Average / min'],
        rows: [
          ['FlameFast (small cube)', '8', '11.0', '8.5', '10.5', '10.0'],
          ['QuickLight (large cube)', '12', '14.5', '12.0', '13.5', 'not shown'],
        ],
      },
      caption: 'Time each firelighter cube burned with a steady flame across three trials. One average has been left blank for you to calculate.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the independent variable and the dependent variable in **this** investigation.\n\nIndependent variable:\n\nDependent variable:',
        marks: 2,
        ph: 'IV = brand of firelighter; DV = burn time',
      },
      {
        label: 'b',
        text: '**Calculate** the average burn time for the QuickLight firelighter.',
        marks: 2,
        ph: '(14.5 + 12.0 + 13.5) ÷ 3 = 13.3 min',
      },
      {
        label: 'c',
        text: 'The student\'s friend examined the data and suggested that the average burn time for the FlameFast firelighter should be 10.75 minutes and not 10.0 minutes. **Suggest** a reason for this different average time.',
        marks: 1,
        ph: 'Friend excluded the outlier 8.5 minutes',
      },
      {
        label: 'd',
        text: 'The student hypothesised that the FlameFast firelighter would burn for a longer time because it had a smaller surface area. Use the data in the table above part (a) to **evaluate** the validity of the student\'s hypothesis.',
        marks: 3,
        ph: 'Not valid — QuickLight burns longer; ignore surface area references',
      },
      {
        label: 'e',
        text: '**Suggest** one improvement to increase the validity of the method. **Justify** your answer.\n\nImprovement:\n\nJustification:',
        marks: 2,
        ph: 'Same mass of fuel per cube; gives a fair comparison of burn time',
      },
    ],
  },

  // ── Q5 (12 marks, Crit C) — Sawdust / wood-waste pellets ─────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Separation, energy & green chemistry',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 12,
    stem: 'Sawmills and furniture factories produce huge piles of sawdust and wood offcuts as waste. Companies now compress this waste into solid fuel "wood pellets". The first stage is to treat the damp sawdust with an organic solvent, which dissolves out the sticky resins and oils. The mixture is then filtered, producing a liquid fraction and a solid fraction.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Mass flow when 100 kg of sawdust is processed into wood pellets',
        units: 'kg',
        flows: [
          { label: 'Damp sawdust in', value: 100, kind: 'in' },
          { label: 'Water removed by drying', value: 48, kind: 'loss' },
          { label: 'Resins and oils dissolved into solvent', value: 7, kind: 'out' },
          { label: 'Solid wood pellets produced', value: 45, kind: 'out' },
        ],
        conservation: 'Mass in (100 kg) = water removed (48) + resins to solvent (7) + wood pellets (45).',
      },
      caption: 'Processing 100 kg of damp sawdust: water is driven off and the dried solid becomes wood pellets.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Organise** the equipment below to show how to separate the solid and liquid fractions from the sawdust/solvent mixture.\n\nNote: the filter funnel stand is already provided; drag the filter paper and correct beaker to complete the setup.',
        marks: 2,
        ph: 'Drag filter paper into funnel; place beaker underneath',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Filtration set-up (drag the missing parts)</text><line x1="150" y1="60" x2="150" y2="140" stroke="#5b6b78" stroke-width="3"/><line x1="120" y1="140" x2="180" y2="140" stroke="#5b6b78" stroke-width="3"/><path d="M250 55 L320 55 L292 105 L278 105 Z" fill="none" stroke="#5b6b78" stroke-width="2"/><text x="285" y="48" font-size="9" text-anchor="middle" fill="#475569">funnel (provided in stand)</text><rect x="250" y="130" width="80" height="50" rx="3" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 4"/><text x="290" y="160" font-size="9" text-anchor="middle" fill="#94a3b8">beaker?</text><path d="M420 58 L470 58 L451 90 L439 90 Z" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 4"/><text x="445" y="50" font-size="9" text-anchor="middle" fill="#94a3b8">filter paper?</text><text x="280" y="195" font-size="9" fill="#94a3ad" text-anchor="middle">Place the filter paper inside the funnel and the beaker beneath to collect the filtrate.</text></svg>',
          },
          caption: 'Filtration apparatus with the filter paper and collecting beaker missing — arrange them correctly.',
        },
      },
      {
        label: 'b',
        text: 'Organic solvents are chemicals which can be used to dissolve a solute. Propanone (acetone) is an example of an organic solvent. **Select** the hazard symbol for propanone.',
        marks: 1,
        ph: 'Propanone is flammable — select flammable symbol',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="150" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Candidate GHS hazard symbols</text><g><text x="70" y="42" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">A</text><rect x="45" y="50" width="50" height="50" transform="rotate(45 70 75)" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="70" cy="78" r="9" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M70 60 q6 8 0 14 q-6 -6 0 -14" fill="#1f2937"/><text x="70" y="120" font-size="8" text-anchor="middle" fill="#475569">oxidising</text></g><g><text x="210" y="42" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">B</text><rect x="185" y="50" width="50" height="50" transform="rotate(45 210 75)" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="210" y="84" font-size="20" font-weight="800" text-anchor="middle" fill="#1f2937">!</text><text x="210" y="120" font-size="8" text-anchor="middle" fill="#475569">harmful/irritant</text></g><g><text x="350" y="42" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">C</text><rect x="325" y="50" width="50" height="50" transform="rotate(45 350 75)" fill="none" stroke="#dc2626" stroke-width="2.5"/><path d="M350 58 q-7 12 0 16 q-9 4 0 14 q9 -4 0 -14 q7 -4 0 -16" fill="#ea580c"/><text x="350" y="120" font-size="8" text-anchor="middle" fill="#475569">flammable</text></g><g><text x="490" y="42" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">D</text><rect x="465" y="50" width="50" height="50" transform="rotate(45 490 75)" fill="none" stroke="#dc2626" stroke-width="2.5"/><path d="M478 72 l8 6 m6 -10 q6 10 -2 14" stroke="#1f2937" stroke-width="2" fill="none"/><text x="490" y="120" font-size="8" text-anchor="middle" fill="#475569">corrosive</text></g></svg>',
          },
          caption: 'Four GHS hazard symbols. Choose the one warning that propanone catches fire easily.',
        },
      },
      {
        label: 'c',
        text: 'Once the sawdust has been treated with the organic solvent, it can be dried and compressed to produce solid fuel (wood pellets). The artefact above the answer box shows data for different forms of biomass compared with wood pellets.\n\n**Plot** the energy content of the biomass fuels shown in the table. You should **label** the axes and use the tools in the drawing palette to create your graph.',
        marks: 6,
        ph: 'Bar chart; x=biomass type; y=energy/MJ tonne⁻¹; even scale from 0; all 5 bars correct',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Biomass', 'Energy / MJ tonne⁻¹'],
            rows: [
              ['Wood pellets', '16 800'],
              ['Compost', '11 500'],
              ['Poultry waste', '10 800'],
              ['Straw', '14 400'],
              ['Dried grass', '12 200'],
            ],
          },
          caption: 'Energy content of five biomass fuels. Plot these as a bar chart with labelled axes.',
        },
      },
      {
        label: 'd',
        text: 'The wood pellets and the resins obtained from the sawdust can be used to produce energy. **Select** the type of process used to produce energy.',
        marks: 1,
        ph: 'Burning fuel is an exothermic process',
        widget: 'radio_select',
        widgetOptions: ['Endothermic', 'Exothermic', 'Photosynthesis', 'Fermentation'],
      },
      {
        label: 'e',
        text: '**Suggest** why it is important to recycle sawdust and wood waste. **Justify** your answer.',
        marks: 2,
        ph: 'Reduces waste, reduces landfill, provides fuel source; justify with linked reason',
      },
    ],
  },

  // ── Q6 (16 marks, Crit B) — Design: candle-wax energy density ────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design (fuel energy density)',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 16,
    stem: 'Candles can be made from different waxes — paraffin wax, beeswax, soy wax and others — and each releases a different amount of energy as it burns. Energy density can be determined by measuring the mass of wax burned to produce a specific temperature increase in a fixed volume of water. A student wants to investigate the energy density of five candle waxes: A, B, C, D and E.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="240" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two equipment set-ups for measuring energy density</text><text x="150" y="48" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">Set-up 1 — open</text><line x1="150" y1="60" x2="150" y2="110" stroke="#5b6b78" stroke-width="2"/><ellipse cx="150" cy="110" rx="45" ry="12" fill="none" stroke="#5b6b78" stroke-width="2"/><path d="M105 110 q45 60 90 0" fill="#dbeafe" stroke="#5b6b78" stroke-width="2"/><text x="150" y="138" font-size="9" text-anchor="middle" fill="#1e3a8a">water</text><rect x="143" y="178" width="14" height="20" fill="#fde68a"/><path d="M147 178 q3 -10 6 0 q-3 -5 -6 0 Z" fill="#f97316"/><text x="150" y="218" font-size="9" text-anchor="middle" fill="#475569">candle burns in open air</text><text x="410" y="48" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">Set-up 2 — shielded</text><rect x="345" y="58" width="130" height="150" rx="6" fill="none" stroke="#94a3b8" stroke-width="2"/><line x1="410" y1="68" x2="410" y2="108" stroke="#5b6b78" stroke-width="2"/><ellipse cx="410" cy="108" rx="40" ry="11" fill="none" stroke="#5b6b78" stroke-width="2"/><path d="M370 108 q40 55 80 0" fill="#dbeafe" stroke="#5b6b78" stroke-width="2"/><text x="410" y="135" font-size="9" text-anchor="middle" fill="#1e3a8a">water</text><rect x="403" y="172" width="14" height="18" fill="#fde68a"/><path d="M407 172 q3 -9 6 0 q-3 -4 -6 0 Z" fill="#f97316"/><text x="410" y="202" font-size="9" text-anchor="middle" fill="#475569">draught shield reduces heat loss</text></svg>',
      },
      caption: 'Two ways to set up the equipment: an open candle versus a shielded candle that minimises heat loss.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to find out which candle wax has the highest energy density. In your answer, you should include:\n- an identification of the independent, dependent and two control variables\n- a justification of which equipment set-up you will use\n- details of the method to allow you to collect sufficient data\n- how you will ensure that your method is safe.',
        marks: 16,
        ph: 'Variables, set-up justification, method, safety; all five waxes, repeated trials, standard heating procedure',
      },
    ],
  },

  // ── Q7 (12 marks, Crit C/D) — Global energy demand & well-water filters ──────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Water purification & filtration evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 12,
    stem: 'Global primary energy demand has changed dramatically over the last 70 years. The graph below shows the change in annual energy demand during this period.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Global primary energy demand',
        xLabel: 'Year',
        yLabel: 'Energy demand',
        yUnit: 'EJ per year',
        xMin: 1950,
        xMax: 2020,
        yMin: 0,
        yMax: 700,
        xStep: 10,
        yStep: 100,
        dataPoints: [
          { x: 1950, y: 100 },
          { x: 1960, y: 140 },
          { x: 1970, y: 215 },
          { x: 1980, y: 300 },
          { x: 1990, y: 370 },
          { x: 2000, y: 420 },
          { x: 2010, y: 540 },
          { x: 2020, y: 600 },
        ],
      },
      caption: 'Annual global energy demand rising over 70 years. Read values off the curve where the questions ask.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the graph to **identify** the decade in which energy demand showed the smallest increase between 1950 and 1980.',
        marks: 1,
        ph: 'Read graph; smallest increase = 1950–1960',
      },
      {
        label: 'b',
        text: 'Use the graph to **state** the global energy demand in 1970.',
        marks: 2,
        ph: 'Read graph at 1970; ~215 EJ per year',
      },
      {
        label: 'c',
        text: '**Suggest** a reason why global energy demand has increased dramatically during the period shown on the graph.',
        marks: 1,
        ph: 'Population/economic growth increase (not just one industry)',
      },
      {
        label: 'd',
        text: 'Priya and Tom live in a rural home supplied by a private well. They need to purchase a filtration device to make the well water safe for drinking.\n\n**Select** the most important feature of the filter that is needed in a filtration device. **Justify** your answer.\n\nJustification:',
        marks: 2,
        ph: 'Pore size — must be smaller than material being filtered out',
        widget: 'radio_select',
        widgetOptions: ['Cost of unit', 'Filter life span', 'Pore size', 'Water flow rate'],
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Feature', 'Slow sand filter', 'Membrane filter'],
            rows: [
              ['Cost of unit / $', '70', '190'],
              ['Filter life span / months', '24', '8'],
              ['Pore size / μm', '5', '0.1'],
              ['Water flow rate / L min⁻¹', '4.0', '2.0'],
            ],
          },
          caption: 'Two well-water filtration units compared on cost, lifespan, pore size and flow rate.',
        },
      },
      {
        label: 'e',
        text: 'Using the information in the table above, **explain** the advantages and disadvantages of using a slow sand filter compared to a membrane filter for personal drinking, when obtaining water from a private well. In your answer, you should:\n- describe the advantages and disadvantages of a slow sand filter compared to the membrane filter\n- justify which would be the most suitable filter for Priya and Tom.',
        marks: 6,
        ph: 'Compare cost, lifespan, pore size, flow rate; justify choice for well water',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Feature', 'Slow sand filter', 'Membrane filter'],
            rows: [
              ['Cost of unit / $', '70', '190'],
              ['Filter life span / months', '24', '8'],
              ['Pore size / μm', '5', '0.1'],
              ['Water flow rate / L min⁻¹', '4.0', '2.0'],
              ['Removes bacteria (e.g. E. coli, 0.5 μm)', 'no', 'yes'],
              ['Removes Giardia parasite (8 μm)', 'yes', 'yes'],
            ],
          },
          caption: 'Fuller comparison of the two units, including removal of E. coli bacteria and the Giardia parasite.',
        },
      },
    ],
  },

  // ── Q8 (13 marks, Crit D) — Desert town water purification evaluation ────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Water purification technologies',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 13,
    stem: 'The planners of a fast-growing desert town are preparing for population growth over the next 10 years. With very little rainfall, the town depends on deep groundwater that is naturally salty (brackish), and the only nearby surface water is an irrigation canal carrying farm run-off.\n\nUsing your knowledge of water purification techniques, the information in the artefact, and your wider MYP studies, discuss and evaluate the different technologies available for water treatment. In your answer, you should include:\n- a comparison of the economic implications of each of the three technologies\n- an example of the environmental impact of each of the three technologies\n- an outline of the social aspects of the building and running of a water purification facility\n- an appraisal of which technology would not be suitable for the town.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Technology', 'Cost / $ per 100 m³', 'Removes dissolved salt', 'Removes farm pesticides', 'Energy use'],
        rows: [
          ['Microfiltration', '85', 'no', 'no', 'low'],
          ['Activated carbon', '150', 'no', 'yes', 'low'],
          ['Reverse osmosis (desalination)', '270', 'yes', 'yes', 'high'],
        ],
      },
      caption: 'Three water-treatment technologies compared on cost, what each removes, and energy use, for a desert town.',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the different technologies available for water treatment for the desert town.',
        marks: 13,
        ph: 'Economic/environmental/social comparison of microfiltration/activated carbon/reverse osmosis; identify unsuitable technology with justification',
      },
    ],
  },
]
