import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — May 2021 · VARIANT 1  (isomorphic to chemistry-may-2021)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context, with a
// self-contained data-driven INTERACTIVE artefact on every question (no image
// files, no markdown tables). Answers recomputed throughout.
//   Q1 Atomic structure/periodic:   rocky/gas planets → seawater minerals + natural gas
//   Q2 Isotopes/rate/catalyst:      exoplanet oxygen → deep-sea hydrothermal vent sulfur
//   Q3 States/combustion/altitude:  candles → camping-stove butane canisters
//   Q4 Variables/data eval:         vanilla vs strawberry candle → two hand-warmer brands
//   Q5 Separation/biomass:          coffee grounds → spent tea leaves (tea logs)
//   Q6 Crit B design:               solid fuels A–E → five brands of BBQ charcoal
//   Q7 Graph + filtration:          water consumption → global plastic + rainwater filters
//   Q8 Crit D water tech:           coastal city → alpine mountain town
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'chemistry-may-2021-v1',
  subject: 'Chemistry',
  session: 'May',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (9 marks, Crit A) — Seawater minerals & natural gas, atomic structure ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic structure & periodic table',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 9,
    stem: 'Seawater is a vast chemical store. When it evaporates in coastal salt pans it leaves behind solid minerals rich in sodium (Na), chlorine (Cl) and calcium (Ca). The natural gas trapped beneath the same seabed is a mixture whose lighter components include helium (He), hydrogen (H₂) and methane (CH₄).',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="230" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of the periodic table</text><g><rect x="40" y="40" width="58" height="46" fill="#eef4f7" stroke="#5b6b78"/><text x="69" y="55" font-size="8" text-anchor="middle" fill="#64748b">Group 1</text><text x="69" y="72" font-size="15" font-weight="700" text-anchor="middle" fill="#0b7285">Na</text><text x="69" y="83" font-size="7.5" text-anchor="middle" fill="#64748b">sodium · 11</text></g><g><rect x="120" y="40" width="58" height="46" fill="#f0fdf4" stroke="#5b6b78"/><text x="149" y="55" font-size="8" text-anchor="middle" fill="#64748b">Group 2</text><text x="149" y="72" font-size="15" font-weight="700" text-anchor="middle" fill="#15803d">Ca</text><text x="149" y="83" font-size="7.5" text-anchor="middle" fill="#64748b">calcium · 20</text></g><g><rect x="360" y="40" width="58" height="46" fill="#fdf2f8" stroke="#5b6b78"/><text x="389" y="55" font-size="8" text-anchor="middle" fill="#64748b">Group 7</text><text x="389" y="72" font-size="15" font-weight="700" text-anchor="middle" fill="#be185d">Cl</text><text x="389" y="83" font-size="7.5" text-anchor="middle" fill="#64748b">chlorine · 17</text></g><g><rect x="440" y="40" width="58" height="46" fill="#fff7ed" stroke="#5b6b78"/><text x="469" y="55" font-size="8" text-anchor="middle" fill="#64748b">Group 0</text><text x="469" y="72" font-size="15" font-weight="700" text-anchor="middle" fill="#c2410c">He</text><text x="469" y="83" font-size="7.5" text-anchor="middle" fill="#64748b">helium · 2</text></g><text x="40" y="120" font-size="11" fill="#475569">Na — reactive metal, Group 1, one outer-shell electron.</text><text x="40" y="140" font-size="11" fill="#475569">Ca — reactive metal, Group 2, two outer-shell electrons.</text><text x="40" y="160" font-size="11" fill="#475569">Cl — reactive non-metal, Group 7, seven outer-shell electrons.</text><text x="40" y="180" font-size="11" fill="#475569">He — noble gas, Group 0, full outer shell.</text><text x="40" y="206" font-size="10" fill="#94a3ad">Group number (main groups) = number of outer-shell electrons; Period = number of occupied shells.</text></svg>',
      },
      caption: 'Sodium, calcium, chlorine and helium shown in the periodic table. Group number gives the number of outer-shell electrons.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the number of electrons in the outer shell of an atom of calcium.',
        marks: 1,
        ph: 'Select number of outer shell electrons for Ca',
        widget: 'radio_select',
        widgetOptions: ['1', '2', '4', '8'],
      },
      {
        label: 'b',
        text: 'Using the periodic table, **state** the group and period of sodium.\n\nGroup:\n\nPeriod:',
        marks: 2,
        ph: 'State group number and period number for Na',
      },
      {
        label: 'c',
        text: '**Select** the region of the periodic table where chlorine is located.',
        marks: 1,
        ph: 'Select the region of the periodic table for chlorine',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Noble gases', 'Halogens'],
      },
      {
        label: 'd',
        text: 'Some of the lighter components of the natural gas are helium (He), hydrogen (H₂) and methane (CH₄). **Explain** why hydrogen occurs as diatomic molecules, but helium does not.',
        marks: 4,
        ph: 'Explain electron sharing vs full outer shell for H vs He',
      },
      {
        label: 'e',
        text: '**Select** the diagram that shows the Lewis structure (electron dot or dot cross diagram) of methane, CH₄.',
        marks: 1,
        ph: 'Select correct Lewis structure for CH₄',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="170" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Candidate Lewis structures for CH₄</text><g font-size="9" fill="#475569"><text x="70" y="40" text-anchor="middle" font-weight="700" fill="#0b7285">A</text><text x="70" y="95" text-anchor="middle" font-size="20" fill="#1f2d3a">C</text><text x="70" y="60" text-anchor="middle">H : C : H</text><text x="70" y="120" text-anchor="middle">only 2 shared pairs</text></g><g font-size="9" fill="#475569"><text x="210" y="40" text-anchor="middle" font-weight="700" fill="#0b7285">B</text><text x="210" y="58" text-anchor="middle">4 H, each sharing</text><text x="210" y="95" text-anchor="middle" font-size="20" fill="#1f2d3a">C</text><text x="210" y="120" text-anchor="middle">one pair with C (8 e⁻ on C)</text></g><g font-size="9" fill="#475569"><text x="350" y="40" text-anchor="middle" font-weight="700" fill="#0b7285">C</text><text x="350" y="58" text-anchor="middle">C with a lone pair</text><text x="350" y="95" text-anchor="middle" font-size="20" fill="#1f2d3a">C</text><text x="350" y="120" text-anchor="middle">+ 3 H (6 e⁻ on C)</text></g><g font-size="9" fill="#475569"><text x="490" y="40" text-anchor="middle" font-weight="700" fill="#0b7285">D</text><text x="490" y="58" text-anchor="middle">ionic: C⁴⁺ and 4 H⁻</text><text x="490" y="95" text-anchor="middle" font-size="20" fill="#1f2d3a">C</text><text x="490" y="120" text-anchor="middle">no shared pairs</text></g><text x="280" y="150" font-size="9" fill="#94a3ad" text-anchor="middle">Carbon shares one electron pair with each of four hydrogen atoms.</text></svg>',
          },
          caption: 'Four candidate dot-and-cross diagrams for methane. Only one shows carbon sharing a pair with each of four hydrogens.',
        },
      },
    ],
  },

  // ── Q2 (12 marks, Crit A) — Deep-sea hydrothermal vents, isotopes, catalysts ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Isotopes, reactions & catalysts',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 12,
    stem: 'Deep-sea hydrothermal vents on the ocean floor pour out superheated, mineral-rich water. Biologists wonder whether life on Earth first began at such vents, far from sunlight, fed by chemicals rather than light. The fluids are loaded with sulfur compounds, and the rock around the vents contains several isotopes of sulfur.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Temperature of vent fluid with distance from a hydrothermal vent',
        mode: 'bars',
        variable: 'Distance from vent mouth →',
        metric: 'Temperature of the vent fluid / °C',
        bars: [
          { label: 'At mouth', value: 370 },
          { label: '0.5 m', value: 110 },
          { label: '2 m', value: 40 },
          { label: '10 m', value: 4 },
        ],
        note: 'The closer to the vent, the hotter the water — and the faster any chemical reaction in the fluid will go.',
      },
      caption: 'Vent fluid is hottest at the mouth and cools rapidly with distance; temperature controls reaction rate.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Sulfur occurs as a mixture of three isotopes, which have 16, 17 and 18 neutrons respectively. **Calculate** the mass number of the isotope which has 17 neutrons.',
        marks: 2,
        ph: 'Mass number = protons + neutrons; protons = 16',
      },
      {
        label: 'b',
        text: 'Colonies of bacteria thrive around the vents even though no sunlight reaches them. For most surface ecosystems, an atmosphere containing molecular oxygen is needed. **Suggest** why the presence of molecular oxygen does not necessarily indicate the presence of life.',
        marks: 1,
        ph: 'Oxygen can come from non-biological sources',
      },
      {
        label: 'c',
        text: '**Calculate** the relative molecular mass of sulfur dioxide containing one atom of sulfur-32 and two atoms of oxygen-16.',
        marks: 1,
        ph: 'Add atomic masses: 32 + 16 + 16',
      },
      {
        label: 'd',
        text: 'Hydrogen sulfide gas from the vents dissolves in seawater to form a weakly acidic solution. One way to test if a solution is acidic is to use an indicator to determine its pH. Different indicators change colour over different ranges of pH. The chart shows the colour-change ranges of two indicators, indicator A and indicator B. Use information from the chart to **determine** the **range** of pH possible for the hydrogen-sulfide solution.',
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
        text: 'There is evidence of specific chemical reactions in the hot fluid at the vents. One of these reactions is the decomposition of carbon dioxide:\n\n2CO₂(g) → 2CO(g) + O₂(g)\n\n**Suggest** why the rate of the decomposition reaction increases the closer the fluid is to the mouth of the vent.',
        marks: 2,
        ph: 'Higher temperature near the vent → faster reaction rate',
      },
      {
        label: 'f',
        text: 'Carbon dioxide can be re-formed in the presence of catalysts:\n\n2CO(g) + O₂(g) → 2CO₂(g)\n\n**Outline** the role of a catalyst in a chemical reaction.',
        marks: 2,
        ph: 'Catalyst speeds up reaction, not consumed',
      },
      {
        label: 'g',
        text: 'Several nations are funding new expeditions to explore the deep ocean floor. So far, most of the seabed has been mapped only by un-crewed submersibles, with very few crewed dives. Future missions could involve building seafloor research stations or mining the metal-rich vent deposits.\n\n**Suggest** two additional reasons why nations are interested in exploring the deep ocean, and are funding these missions.',
        marks: 2,
        ph: 'Suggest two reasons beyond those in the text',
      },
    ],
  },

  // ── Q3 (16 marks, Crit A/B/C) — Camping-stove butane canisters ──────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'States of matter, combustion & data analysis',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 16,
    stem: 'Portable camping stoves burn a liquefied hydrocarbon fuel stored under pressure in a metal canister. How long one canister lasts will determine whether it is suitable for a weekend trip or a longer expedition.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Fuel inside a camping-stove canister',
        mode: 'states',
        substance: 'butane',
        states: ['Liquid butane (stored under pressure)', 'Gaseous butane (released to the burner)'],
        containers: ['Inside the sealed canister', 'At the burner jet'],
        note: 'Under pressure the fuel is a liquid; when released to the burner it becomes a gas that burns in air.',
      },
      caption: 'Butane is stored as a pressurised liquid and released as a gas to the burner, where it combusts.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Several changes occur as the fuel travels from the canister to the flame.\n\n**Select** the state of the fuel at A (deep inside the sealed canister) and B (in the pipe just before the burner jet).',
        marks: 2,
        ph: 'A = liquid (stored under pressure); B = gas (released to burner)',
        widget: 'inline_dropdown_select',
        widgetItems: ['A', 'B'],
        widgetOptions: ['Solid', 'Liquid', 'Gas'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="180" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Fuel path from canister to flame</text><rect x="60" y="50" width="120" height="90" rx="10" fill="#dbeafe" stroke="#5b6b78" stroke-width="1.5"/><rect x="60" y="100" width="120" height="40" fill="#60a5fa" opacity="0.6"/><text x="120" y="126" font-size="10" text-anchor="middle" fill="#1e3a8a">liquid fuel</text><text x="120" y="45" font-size="9" text-anchor="middle" fill="#475569">sealed canister</text><circle cx="120" cy="120" r="7" fill="#1d4ed8"/><text x="120" y="123" font-size="9" font-weight="700" text-anchor="middle" fill="#ffffff">A</text><line x1="180" y1="95" x2="300" y2="95" stroke="#5b6b78" stroke-width="6"/><text x="240" y="85" font-size="9" text-anchor="middle" fill="#475569">supply pipe</text><circle cx="300" cy="95" r="7" fill="#ea580c"/><text x="300" y="98" font-size="9" font-weight="700" text-anchor="middle" fill="#ffffff">B</text><path d="M390 95 q14 -40 28 0 q14 -25 26 5 q-30 18 -54 -5 Z" fill="#f97316"/><text x="430" y="105" font-size="9" fill="#9a3412">flame</text></svg>',
          },
          caption: 'A is deep inside the sealed canister; B is in the pipe just before the burner jet.',
        },
      },
      {
        label: 'b',
        text: 'The fuel in the canister is butane, with the formula C₄H₁₀. Another hydrocarbon in the same class is C₆H₁₄. **State** the name and chemical class of C₆H₁₄.\n\nName:\n\nChemical class:',
        marks: 2,
        ph: 'Hexane; Alkane',
      },
      {
        label: 'c',
        text: '**Select** numbers to balance the equation showing complete combustion of C₄H₁₀.\n\n[?] C₄H₁₀(g) + [?] O₂(g) → [?] CO₂(g) + [?] H₂O(g)',
        marks: 2,
        ph: 'Coefficients: 2, 13, 8, 10',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '5', '8', '10', '11', '12', '13', '15'],
      },
      {
        label: 'd',
        text: 'A camper wanted to compare how long two stoves ran from identical canisters. One stove had a metal windshield fitted around the burner and the other did not.\n\n**Formulate** a hypothesis for the camper\'s question.\n\nIf the stove has a metal windshield fitted then the running time of the canister will [blank] because:',
        marks: 3,
        ph: 'Direction: increase or decrease; give scientific reason',
        widget: 'fill_blank',
        widgetOptions: ['increase', 'decrease'],
      },
      {
        label: 'e',
        text: 'A camper wanted to investigate the effect of altitude on how quickly the fuel is used up. Her processed data is shown in the table above the answer box. **State** the rate of fuel use at an altitude of 3720 m in standard form.',
        marks: 1,
        ph: '1.18 × 10⁻¹ g min⁻¹',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Altitude / m', 'Rate of fuel use / g min⁻¹'],
            rows: [
              ['990', '0.182'],
              ['2700', '0.146'],
              ['3200', '0.124'],
              ['3720', '0.118'],
              ['4700', '0.101'],
            ],
          },
          caption: 'Processed data: rate of camping-stove fuel use at five altitudes. Read the 3720 m value and convert to standard form.',
        },
      },
      {
        label: 'f',
        text: 'The camper produced a graph of her results. The artefact above the answer box reproduces the graph she drew. **Identify** two errors in the presentation of the data in this graph.',
        marks: 2,
        ph: 'Axes swapped; should be scatter/line not bar chart',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="230" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">The camper\'s graph (drawn incorrectly)</text><line x1="70" y1="190" x2="520" y2="190" stroke="#5b6b78" stroke-width="1.5"/><line x1="70" y1="40" x2="70" y2="190" stroke="#5b6b78" stroke-width="1.5"/><text x="295" y="220" font-size="10" text-anchor="middle" fill="#475569">Rate of fuel use / g min⁻¹ (plotted on x-axis)</text><text x="30" y="115" font-size="10" text-anchor="middle" fill="#475569" transform="rotate(-90 30 115)">Altitude / m</text><rect x="100" y="150" width="40" height="40" fill="#60a5fa"/><rect x="180" y="120" width="40" height="70" fill="#60a5fa"/><rect x="260" y="95" width="40" height="95" fill="#60a5fa"/><rect x="340" y="85" width="40" height="105" fill="#60a5fa"/><rect x="420" y="60" width="40" height="130" fill="#60a5fa"/><text x="280" y="55" font-size="9" fill="#b91c1c" text-anchor="middle">Bar chart used for continuous data; axes swapped.</text></svg>',
          },
          caption: 'The graph the camper drew. Look at the axis variables and the chart type chosen.',
        },
      },
      {
        label: 'g',
        text: 'The camper repeated the experiment the following day. The equipment set up on each day is shown in the artefact above the answer box.\n\nDay 1: stove fully enclosed by a tight windshield. Day 2: open stove in a light breeze.\n\n**Outline** why the sets of results are different and **suggest** how the **rate** of fuel combustion would be affected.',
        marks: 4,
        ph: 'Different equipment / weather / oxygen availability; state direction of rate change',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="140" y="22" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Day 1 — enclosed windshield</text><rect x="70" y="40" width="140" height="120" rx="8" fill="none" stroke="#5b6b78" stroke-width="2"/><rect x="120" y="120" width="40" height="40" fill="#94a3b8"/><path d="M130 120 q10 -30 20 0 q8 -18 16 6 q-22 12 -36 -6 Z" fill="#f97316"/><text x="140" y="180" font-size="9" text-anchor="middle" fill="#475569">limited fresh air around flame</text><text x="420" y="22" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Day 2 — open, light breeze</text><rect x="400" y="120" width="40" height="40" fill="#94a3b8"/><path d="M410 120 q10 -34 20 0 q8 -22 16 8 q-22 14 -36 -8 Z" fill="#fb923c"/><line x1="350" y1="80" x2="395" y2="92" stroke="#93c5fd" stroke-width="2"/><line x1="350" y1="100" x2="395" y2="108" stroke="#93c5fd" stroke-width="2"/><text x="420" y="180" font-size="9" text-anchor="middle" fill="#475569">breeze brings more air to flame</text></svg>',
          },
          caption: 'Two equipment set-ups: an enclosed windshield (Day 1) versus an open stove in a breeze (Day 2). Compare oxygen supply to the flame.',
        },
      },
    ],
  },

  // ── Q4 (10 marks, Crit C) — Two hand-warmer brands ───────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Investigation variables & data evaluation',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 10,
    stem: 'Disposable hand-warmers release heat when the iron powder inside them slowly oxidises in air. A student compared two brands to see which stays warm for longer: brand "PolarPro" and brand "TrailHeat".',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Hand-warmer', 'Iron mass / g', 'Trial 1 / hours', 'Trial 2 / hours', 'Trial 3 / hours', 'Average / hours'],
        rows: [
          ['PolarPro (small sachet)', '50', '8.0', '6.3', '7.6', '7.3'],
          ['TrailHeat (large sachet)', '72', '9.5', '8.0', '8.5', 'not shown'],
        ],
      },
      caption: 'Time each hand-warmer stayed above 40 °C across three trials. One average has been left blank for you to calculate.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the independent variable and the dependent variable in **this** investigation.\n\nIndependent variable:\n\nDependent variable:',
        marks: 2,
        ph: 'IV = brand of hand-warmer; DV = time stays warm',
      },
      {
        label: 'b',
        text: '**Calculate** the average warm time for the TrailHeat hand-warmer.',
        marks: 2,
        ph: '(9.5 + 8.0 + 8.5) ÷ 3 = 8.7 hours',
      },
      {
        label: 'c',
        text: 'The student\'s friend examined the data and suggested that the average warm time for the PolarPro hand-warmer should be 7.8 hours and not 7.3 hours. **Suggest** a reason for this different average time.',
        marks: 1,
        ph: 'Friend excluded the outlier 6.3 hours',
      },
      {
        label: 'd',
        text: 'The student hypothesised that the PolarPro hand-warmer would stay warm for a longer time because it had a smaller surface area. Use the data in the table above part (a) to **evaluate** the validity of the student\'s hypothesis.',
        marks: 3,
        ph: 'Not valid — TrailHeat stays warm longer; ignore surface area references',
      },
      {
        label: 'e',
        text: '**Suggest** one improvement to increase the validity of the method. **Justify** your answer.\n\nImprovement:\n\nJustification:',
        marks: 2,
        ph: 'Same mass of iron in each sachet; gives a fair comparison of warm time',
      },
    ],
  },

  // ── Q5 (12 marks, Crit C) — Spent tea leaves & biomass ──────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Separation, energy & green chemistry',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 12,
    stem: 'Tea is one of the most widely consumed drinks in the world. After brewing, factories and homes throw away millions of tonnes of spent tea leaves every year. Scientists are turning this waste into solid fuel "tea logs". The first stage is to treat the wet leaves with an organic solvent, which dissolves out the oily flavour compounds. The mixture is then filtered, producing a liquid fraction and a solid fraction.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Mass flow when 100 kg of spent tea leaves is processed into tea logs',
        units: 'kg',
        flows: [
          { label: 'Spent tea leaves in', value: 100, kind: 'in' },
          { label: 'Water removed by drying', value: 55, kind: 'loss' },
          { label: 'Oily compounds dissolved into solvent', value: 8, kind: 'out' },
          { label: 'Solid tea logs produced', value: 37, kind: 'out' },
        ],
        conservation: 'Mass in (100 kg) = water removed (55) + oils to solvent (8) + tea logs (37).',
      },
      caption: 'Processing 100 kg of spent tea leaves: most mass is water; the dried solid becomes tea logs.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Organise** the equipment below to show how to separate the solid and liquid fractions from the tea-leaf/solvent mixture.\n\nNote: the filter funnel stand is already provided; drag the filter paper and correct beaker to complete the setup.',
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
        text: 'Organic solvents are chemicals which can be used to dissolve a solute. Ethanol is an example of an organic solvent. **Select** the hazard symbol for ethanol.',
        marks: 1,
        ph: 'Ethanol is flammable — select flammable symbol',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="150" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Candidate GHS hazard symbols</text><g><text x="70" y="42" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">A</text><rect x="45" y="50" width="50" height="50" transform="rotate(45 70 75)" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="70" cy="78" r="9" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M70 60 q6 8 0 14 q-6 -6 0 -14" fill="#1f2937"/><text x="70" y="120" font-size="8" text-anchor="middle" fill="#475569">oxidising</text></g><g><text x="210" y="42" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">B</text><rect x="185" y="50" width="50" height="50" transform="rotate(45 210 75)" fill="none" stroke="#dc2626" stroke-width="2.5"/><path d="M210 58 q-7 12 0 16 q-9 4 0 14 q9 -4 0 -14 q7 -4 0 -16" fill="#ea580c"/><text x="210" y="120" font-size="8" text-anchor="middle" fill="#475569">flammable</text></g><g><text x="350" y="42" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">C</text><rect x="325" y="50" width="50" height="50" transform="rotate(45 350 75)" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="350" y="84" font-size="20" font-weight="800" text-anchor="middle" fill="#1f2937">!</text><text x="350" y="120" font-size="8" text-anchor="middle" fill="#475569">harmful/irritant</text></g><g><text x="490" y="42" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">D</text><rect x="465" y="50" width="50" height="50" transform="rotate(45 490 75)" fill="none" stroke="#dc2626" stroke-width="2.5"/><path d="M478 72 l8 6 m6 -10 q6 10 -2 14" stroke="#1f2937" stroke-width="2" fill="none"/><text x="490" y="120" font-size="8" text-anchor="middle" fill="#475569">corrosive</text></g></svg>',
          },
          caption: 'Four GHS hazard symbols. Choose the one warning that ethanol catches fire easily.',
        },
      },
      {
        label: 'c',
        text: 'Once the tea leaves have been treated with the organic solvent, they can be dried and pressed to produce solid fuel (tea logs). The artefact above the answer box shows data for different forms of biomass compared with tea logs.\n\n**Plot** the energy content of the biomass fuels shown in the table. You should **label** the axes and use the tools in the drawing palette to create your graph.',
        marks: 6,
        ph: 'Bar chart; x=biomass type; y=energy/MJ tonne⁻¹; even scale from 0; all 5 bars correct',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Biomass', 'Energy / MJ tonne⁻¹'],
            rows: [
              ['Tea logs', '17 200'],
              ['Compost', '11 500'],
              ['Poultry waste', '10 800'],
              ['Straw', '14 400'],
              ['Wood chips', '13 000'],
            ],
          },
          caption: 'Energy content of five biomass fuels. Plot these as a bar chart with labelled axes.',
        },
      },
      {
        label: 'd',
        text: 'The tea logs and the oils obtained from the tea leaves can be used to produce energy. **Select** the type of process used to produce energy.',
        marks: 1,
        ph: 'Burning fuel is an exothermic process',
        widget: 'radio_select',
        widgetOptions: ['Endothermic', 'Exothermic', 'Photosynthesis', 'Fermentation'],
      },
      {
        label: 'e',
        text: '**Suggest** why it is important to recycle spent tea leaves. **Justify** your answer.',
        marks: 2,
        ph: 'Reduces waste, reduces landfill, provides fuel source; justify with linked reason',
      },
    ],
  },

  // ── Q6 (16 marks, Crit B) — Design: BBQ charcoal energy density ──────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design (fuel energy density)',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 16,
    stem: 'Different barbecue charcoals release different amounts of energy when they burn, depending on the wood they are made from. Energy density can be determined by measuring the mass of charcoal burned to produce a specific temperature increase in a fixed volume of water. A student wants to investigate the energy density of five brands of BBQ charcoal: A, B, C, D and E.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="240" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two equipment set-ups for measuring energy density</text><text x="150" y="48" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">Set-up 1 — open</text><line x1="150" y1="60" x2="150" y2="110" stroke="#5b6b78" stroke-width="2"/><ellipse cx="150" cy="110" rx="45" ry="12" fill="none" stroke="#5b6b78" stroke-width="2"/><path d="M105 110 q45 60 90 0" fill="#dbeafe" stroke="#5b6b78" stroke-width="2"/><text x="150" y="138" font-size="9" text-anchor="middle" fill="#1e3a8a">water</text><rect x="135" y="175" width="30" height="18" fill="#1f2937"/><path d="M140 175 q10 -22 20 0 q-10 -10 -20 0 Z" fill="#f97316"/><text x="150" y="215" font-size="9" text-anchor="middle" fill="#475569">charcoal burns in open air</text><text x="410" y="48" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">Set-up 2 — shielded</text><rect x="345" y="58" width="130" height="150" rx="6" fill="none" stroke="#94a3b8" stroke-width="2"/><line x1="410" y1="68" x2="410" y2="108" stroke="#5b6b78" stroke-width="2"/><ellipse cx="410" cy="108" rx="40" ry="11" fill="none" stroke="#5b6b78" stroke-width="2"/><path d="M370 108 q40 55 80 0" fill="#dbeafe" stroke="#5b6b78" stroke-width="2"/><text x="410" y="135" font-size="9" text-anchor="middle" fill="#1e3a8a">water</text><rect x="396" y="170" width="28" height="16" fill="#1f2937"/><path d="M401 170 q9 -20 18 0 q-9 -9 -18 0 Z" fill="#f97316"/><text x="410" y="200" font-size="9" text-anchor="middle" fill="#475569">draught shield reduces heat loss</text></svg>',
      },
      caption: 'Two ways to set up the equipment: an open burner versus a shielded burner that minimises heat loss.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to find out which charcoal has the highest energy density. In your answer, you should include:\n- an identification of the independent, dependent and two control variables\n- a justification of which equipment set-up you will use\n- details of the method to allow you to collect sufficient data\n- how you will ensure that your method is safe.',
        marks: 16,
        ph: 'Variables, set-up justification, method, safety; all five charcoals, repeated trials, standard heating procedure',
      },
    ],
  },

  // ── Q7 (12 marks, Crit C/D) — Global plastic production & rainwater filters ──
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Water purification & filtration evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 12,
    stem: 'Global plastic production has changed dramatically over the last 70 years. The graph below shows the change in annual plastic production during this period.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Annual plastic production worldwide',
        xLabel: 'Year',
        yLabel: 'Plastic produced',
        yUnit: 'million tonnes',
        xMin: 1950,
        xMax: 2020,
        yMin: 0,
        yMax: 160,
        xStep: 10,
        yStep: 20,
        dataPoints: [
          { x: 1950, y: 2 },
          { x: 1960, y: 8 },
          { x: 1970, y: 35 },
          { x: 1980, y: 70 },
          { x: 1990, y: 95 },
          { x: 2000, y: 120 },
          { x: 2010, y: 140 },
          { x: 2020, y: 150 },
        ],
      },
      caption: 'Annual plastic production rising over 70 years. Read values off the curve where the questions ask.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the graph to **identify** the decade in which plastic production showed the smallest increase between 1950 and 1980.',
        marks: 1,
        ph: 'Read graph; smallest increase = 1950–1960',
      },
      {
        label: 'b',
        text: 'Use the graph to **state** the annual plastic production in 1970.',
        marks: 2,
        ph: 'Read graph at 1970; ~35 million tonnes',
      },
      {
        label: 'c',
        text: '**Suggest** a reason why plastic production has increased dramatically during the period shown on the graph.',
        marks: 1,
        ph: 'Population/consumer demand increase (not just one industry)',
      },
      {
        label: 'd',
        text: 'Amara and Joel collect rainwater from their roof into a tank and need to make it safe for drinking. They need to purchase a filtration device for their home.\n\n**Select** the most important feature of the filter that is needed in a filtration device. **Justify** your answer.\n\nJustification:',
        marks: 2,
        ph: 'Pore size — must be smaller than material being filtered out',
        widget: 'radio_select',
        widgetOptions: ['Cost of unit', 'Filter life span', 'Pore size', 'Water flow rate'],
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Feature', 'Reverse-osmosis unit', 'UV unit'],
            rows: [
              ['Cost of unit / $', '210', '130'],
              ['Filter life span / months', '12', '9'],
              ['Pore size / μm', '0.0001', 'none (UV light)'],
              ['Water flow rate / L min⁻¹', '1.5', '6.0'],
            ],
          },
          caption: 'Two rainwater filtration units compared on cost, lifespan, pore size and flow rate.',
        },
      },
      {
        label: 'e',
        text: 'Using the information in the table above, **explain** the advantages and disadvantages of using a reverse-osmosis unit compared to a UV unit for personal drinking, when collecting rainwater from a roof. In your answer, you should:\n- describe the advantages and disadvantages of a reverse-osmosis unit compared to the UV unit\n- justify which would be the most suitable filter for Amara and Joel.',
        marks: 6,
        ph: 'Compare cost, lifespan, pore size, flow rate; justify choice for rooftop rainwater',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Feature', 'Reverse-osmosis unit', 'UV unit'],
            rows: [
              ['Cost of unit / $', '210', '130'],
              ['Filter life span / months', '12', '9'],
              ['Pore size / μm', '0.0001', 'none (UV light)'],
              ['Water flow rate / L min⁻¹', '1.5', '6.0'],
              ['Removes dissolved metals (e.g. lead from roof)', 'yes', 'no'],
              ['Kills bacteria (e.g. E. coli)', 'yes', 'yes'],
            ],
          },
          caption: 'Fuller comparison of the two units, including removal of dissolved metals and bacteria.',
        },
      },
    ],
  },

  // ── Q8 (13 marks, Crit D) — Alpine town water purification evaluation ────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Water purification technologies',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 13,
    stem: 'The council of an alpine mountain town is planning for a growing population of skiers and residents over the next 10 years. One of their priorities is to ensure a clean drinking-water supply. The town sits high in the mountains, fed by a glacier-melt river that carries fine rock silt, and surrounded by farmland where fertiliser run-off can reach the water.\n\nUsing your knowledge of water purification techniques, the information in the artefact, and your wider MYP studies, discuss and evaluate the different technologies available for water treatment. In your answer, you should include:\n- a comparison of the economic implications of each of the three technologies\n- an example of the environmental impact of each of the three technologies\n- an outline of the social aspects of the building and running of a water purification facility\n- an appraisal of which technology would not be suitable for the town.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Technology', 'Cost / $ per 100 m³', 'Removes rock silt', 'Removes fertiliser nitrates', 'Energy use'],
        rows: [
          ['Sand filtration', '90', 'yes', 'no', 'low'],
          ['Nanofiltration', '180', 'yes', 'yes', 'medium'],
          ['Reverse osmosis', '260', 'yes', 'yes', 'high'],
        ],
      },
      caption: 'Three water-treatment technologies compared on cost, what each removes, and energy use, for an alpine town.',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the different technologies available for water treatment for the alpine mountain town.',
        marks: 13,
        ph: 'Economic/environmental/social comparison of sand/nano/reverse osmosis; identify unsuitable technology with justification',
      },
    ],
  },
]
