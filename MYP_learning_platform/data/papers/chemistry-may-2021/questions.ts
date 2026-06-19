import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2021',
  subject: 'Chemistry',
  session: 'May',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (9 marks, Crit A) — Rocky/gas-rich planets, atomic structure ──────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic structure & periodic table',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 9,
    stem: 'All of the planets in our solar system orbit around the Sun, which is a star. Rocky planets consist mainly of magnesium (Mg), silicon (Si) and iron (Fe). Gas-rich planets have major components including helium (He), hydrogen (H₂) and ammonia (NH₃).',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sun21" cx="0.3" cy="0.5" r="0.9"><stop offset="0" stop-color="#fff3b0"/><stop offset="0.5" stop-color="#ffb703"/><stop offset="1" stop-color="#fb8500"/></radialGradient></defs><rect width="620" height="230" fill="#0b1026"/><text x="310" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#e2e8f0">Planets of the solar system</text><path d="M70 120 a250 60 0 0 0 480 0" fill="none" stroke="#27314f" stroke-width="1"/><circle cx="34" cy="120" r="60" fill="url(#sun21)"/><text x="34" y="200" font-size="10" text-anchor="middle" fill="#ffd166">Sun (a star)</text><line x1="110" y1="60" x2="300" y2="60" stroke="#7dd3fc" stroke-width="1"/><text x="205" y="52" font-size="11" font-weight="700" text-anchor="middle" fill="#7dd3fc">Rocky</text><line x1="330" y1="60" x2="580" y2="60" stroke="#fca5a5" stroke-width="1"/><text x="455" y="52" font-size="11" font-weight="700" text-anchor="middle" fill="#fca5a5">Gas-rich</text><g><circle cx="120" cy="120" r="6" fill="#b08968"/><text x="120" y="148" font-size="8.5" text-anchor="middle" fill="#cbd5e1">Mercury</text></g><g><circle cx="165" cy="120" r="8" fill="#e9c46a"/><text x="165" y="150" font-size="8.5" text-anchor="middle" fill="#cbd5e1">Venus</text></g><g><circle cx="215" cy="120" r="8.5" fill="#48cae4"/><text x="215" y="150" font-size="8.5" text-anchor="middle" fill="#cbd5e1">Earth</text></g><g><circle cx="262" cy="120" r="7" fill="#e76f51"/><text x="262" y="148" font-size="8.5" text-anchor="middle" fill="#cbd5e1">Mars</text></g><g><circle cx="350" cy="120" r="20" fill="#d9a066"/><text x="350" y="156" font-size="8.5" text-anchor="middle" fill="#cbd5e1">Jupiter</text></g><g><circle cx="425" cy="120" r="16" fill="#e9d8a6"/><ellipse cx="425" cy="120" rx="26" ry="6" fill="none" stroke="#cbb885" stroke-width="2"/><text x="425" y="156" font-size="8.5" text-anchor="middle" fill="#cbd5e1">Saturn</text></g><g><circle cx="495" cy="120" r="12" fill="#9bd1e5"/><text x="495" y="152" font-size="8.5" text-anchor="middle" fill="#cbd5e1">Uranus</text></g><g><circle cx="555" cy="120" r="12" fill="#5e7ce2"/><text x="555" y="152" font-size="8.5" text-anchor="middle" fill="#cbd5e1">Neptune</text></g><text x="205" y="180" font-size="9" text-anchor="middle" fill="#7dd3fc">mainly Mg, Si, Fe</text><text x="455" y="180" font-size="9" text-anchor="middle" fill="#fca5a5">mainly He, H₂, NH₃</text></svg>',
      },
      caption: 'The rocky planets (Mercury, Venus, Earth, Mars) and gas-rich planets (Jupiter, Saturn, Uranus, Neptune) orbit the Sun.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the number of electrons in the outer shell of an atom of magnesium.',
        marks: 1,
        ph: 'Select number of outer shell electrons for Mg',
        widget: 'radio_select',
        widgetOptions: ['1', '2', '4', '8'],
      },
      {
        label: 'b',
        text: 'Using the periodic table, **state** the group and period of silicon.\n\nGroup:\n\nPeriod:',
        marks: 2,
        ph: 'State group number and period number for Si',
      },
      {
        label: 'c',
        text: '**Select** the region of the periodic table where iron is located.',
        marks: 1,
        ph: 'Select the region of the periodic table for iron',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Noble gases', 'Halogens'],
      },
      {
        label: 'd',
        text: 'Some of the major components of gas-rich planets are helium (He), hydrogen (H₂) and ammonia (NH₃). **Explain** why hydrogen occurs as diatomic molecules, but helium does not.',
        marks: 4,
        ph: 'Explain electron sharing vs full outer shell for H vs He',
      },
      {
        label: 'e',
        text: '**Select** the diagram that shows the Lewis structure (electron dot or dot cross diagram) of ammonia, NH₃.',
        marks: 1,
        ph: 'Select correct Lewis structure for NH₃',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="210" fill="#ffffff"/><text x="310" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Possible Lewis (dot-and-cross) structures for ammonia, NH₃</text><text x="310" y="38" font-size="9.5" text-anchor="middle" fill="#64748b">• = electron from N    × = electron from H</text>' +
              '<g font-size="20" font-weight="700" fill="#1f2d3a" text-anchor="middle">' +
              // ── A: three bonds but NO lone pair on N (only 6 e⁻ round N) — WRONG ──
              '<text x="100" y="68" font-size="13" fill="#0b7285">A</text>' +
              '<text x="58" y="122">H</text><text x="100" y="122">N</text><text x="142" y="122">H</text><text x="100" y="156">H</text>' +
              '<g fill="#1f2d3a"><circle cx="80" cy="116" r="2.3"/><circle cx="120" cy="116" r="2.3"/><circle cx="100" cy="138" r="2.3"/></g>' +
              '<g stroke="#c2255c" stroke-width="1.5"><path d="M84 112 l5 5 M89 112 l-5 5"/><path d="M116 112 l5 5 M121 112 l-5 5"/><path d="M96 142 l5 5 M101 142 l-5 5"/></g>' +
              // ── B: only two bonds drawn (one H not bonded) — WRONG ──
              '<text x="255" y="68" font-size="13" fill="#0b7285">B</text>' +
              '<text x="213" y="122">H</text><text x="255" y="122">N</text><text x="297" y="122">H</text><text x="255" y="156">H</text>' +
              '<g fill="#1f2d3a"><circle cx="235" cy="116" r="2.3"/><circle cx="275" cy="116" r="2.3"/><circle cx="247" cy="92" r="2.3"/><circle cx="263" cy="92" r="2.3"/></g>' +
              '<g stroke="#c2255c" stroke-width="1.5"><path d="M239 112 l5 5 M244 112 l-5 5"/><path d="M271 112 l5 5 M276 112 l-5 5"/></g>' +
              // ── C: three bonding pairs (• + ×) + one lone pair (••) on N — CORRECT ──
              '<text x="410" y="68" font-size="13" fill="#0b7285">C</text>' +
              '<text x="368" y="122">H</text><text x="410" y="122">N</text><text x="452" y="122">H</text><text x="410" y="156">H</text>' +
              '<g fill="#1f2d3a"><circle cx="390" cy="116" r="2.3"/><circle cx="430" cy="116" r="2.3"/><circle cx="410" cy="138" r="2.3"/><circle cx="402" cy="92" r="2.3"/><circle cx="418" cy="92" r="2.3"/></g>' +
              '<g stroke="#c2255c" stroke-width="1.5"><path d="M394 112 l5 5 M399 112 l-5 5"/><path d="M426 112 l5 5 M431 112 l-5 5"/><path d="M406 142 l5 5 M411 142 l-5 5"/></g>' +
              // ── D: three bonds + TWO lone pairs on N (10 e⁻ round N) — WRONG ──
              '<text x="560" y="68" font-size="13" fill="#0b7285">D</text>' +
              '<text x="518" y="122">H</text><text x="560" y="122">N</text><text x="602" y="122">H</text><text x="560" y="156">H</text>' +
              '<g fill="#1f2d3a"><circle cx="540" cy="116" r="2.3"/><circle cx="580" cy="116" r="2.3"/><circle cx="560" cy="138" r="2.3"/><circle cx="552" cy="92" r="2.3"/><circle cx="568" cy="92" r="2.3"/><circle cx="582" cy="100" r="2.3"/><circle cx="586" cy="106" r="2.3"/></g>' +
              '<g stroke="#c2255c" stroke-width="1.5"><path d="M544 112 l5 5 M549 112 l-5 5"/><path d="M576 112 l5 5 M581 112 l-5 5"/><path d="M556 142 l5 5 M561 142 l-5 5"/></g>' +
              '</g><text x="310" y="196" font-size="10" text-anchor="middle" fill="#94a3ad">N shares one pair with each of the three H atoms (three bonds) and keeps one lone pair: eight electrons around N.</text></svg>',
          },
          caption: 'Four candidate dot-and-cross diagrams (A–D) for the ammonia molecule.',
        },
      },
    ],
  },

  // ── Q2 (12 marks, Crit A) — Oxygen on exoplanets, isotopes, catalysts ────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Isotopes, reactions & catalysts',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 12,
    stem: 'Scientists studying space wonder whether life would be possible on planets other than the Earth. Most believe that, if molecular oxygen is present on a planet, then life is possible on this planet. But molecular oxygen itself is not a sign of life on a planet, because it might have formed from water. Samples collected from the Moon contain several isotopes of oxygen.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Isotope of oxygen', 'Protons', 'Neutrons', 'Electrons'],
        rows: [
          ['oxygen-16', 8, 8, 8],
          ['oxygen-?', 8, 9, 8],
          ['oxygen-18', 8, 10, 8],
        ],
      },
      caption: 'The three naturally occurring isotopes of oxygen found in Moon samples. Every oxygen atom has 8 protons; only the number of neutrons differs.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Oxygen occurs as a mixture of three isotopes, which have 8, 9 and 10 neutrons respectively. **Calculate** the mass number of the isotope which has 9 neutrons.',
        marks: 2,
        ph: 'Mass number = protons + neutrons; protons = 8',
      },
      {
        label: 'b',
        text: 'Molecular oxygen has been found on the Moon and detected on exoplanets. For life to exist, an atmosphere of at least 16% must be present. **Suggest** why the presence of molecular oxygen does not necessarily indicate the presence of life.',
        marks: 1,
        ph: 'Oxygen can come from non-biological sources',
      },
      {
        label: 'c',
        text: '**Calculate** the relative molecular mass of carbon dioxide containing one atom of oxygen-16 and one atom of oxygen-18.',
        marks: 1,
        ph: 'Add atomic masses: 12 + 16 + 18',
      },
      {
        label: 'd',
        text: 'Carbon dioxide gas is soluble in water. One way to test if a solution contains carbon dioxide is to use an indicator to determine its pH. Different indicators change colour over different ranges of pH.\n\nThe chart below shows the colour changes for two indicators, indicator A and indicator B.\n\nUse information from the chart to **determine** the **range** of pH possible for the carbon dioxide solution.',
        marks: 2,
        ph: 'Read where both indicators overlap; range 4.3–7',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="240" fill="#ffffff"/><text x="310" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Colour change of two indicators with pH</text><!-- geometry: x=60 is pH 0, each pH unit = 38px, pH14 at x=592 --><!-- Indicator A: Red 0–4.3, Yellow 4.3–14 --><text x="30" y="78" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">A</text><rect x="60" y="58" width="163.4" height="34" fill="#e03131"/><text x="141" y="80" font-size="11" text-anchor="middle" fill="#ffffff">Red</text><rect x="223.4" y="58" width="368.6" height="34" fill="#f7d50a"/><text x="407" y="80" font-size="11" text-anchor="middle" fill="#5b4b00">Yellow</text><!-- Indicator B: Yellow 0–7, Blue 7–14 --><text x="30" y="138" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">B</text><rect x="60" y="118" width="266" height="34" fill="#f7d50a"/><text x="193" y="140" font-size="11" text-anchor="middle" fill="#5b4b00">Yellow</text><rect x="326" y="118" width="266" height="34" fill="#1971c2"/><text x="459" y="140" font-size="11" text-anchor="middle" fill="#ffffff">Blue</text><!-- pH axis --><line x1="60" y1="170" x2="592" y2="170" stroke="#1f2d3a" stroke-width="1.5"/><g font-size="9.5" fill="#475569" text-anchor="middle">' +
              '<line x1="60" y1="170" x2="60" y2="175" stroke="#1f2d3a"/><text x="60" y="188">0</text>' +
              '<line x1="98" y1="170" x2="98" y2="175" stroke="#1f2d3a"/><text x="98" y="188">1</text>' +
              '<line x1="136" y1="170" x2="136" y2="175" stroke="#1f2d3a"/><text x="136" y="188">2</text>' +
              '<line x1="174" y1="170" x2="174" y2="175" stroke="#1f2d3a"/><text x="174" y="188">3</text>' +
              '<line x1="212" y1="170" x2="212" y2="175" stroke="#1f2d3a"/><text x="212" y="188">4</text>' +
              '<line x1="250" y1="170" x2="250" y2="175" stroke="#1f2d3a"/><text x="250" y="188">5</text>' +
              '<line x1="288" y1="170" x2="288" y2="175" stroke="#1f2d3a"/><text x="288" y="188">6</text>' +
              '<line x1="326" y1="170" x2="326" y2="175" stroke="#1f2d3a"/><text x="326" y="188">7</text>' +
              '<line x1="364" y1="170" x2="364" y2="175" stroke="#1f2d3a"/><text x="364" y="188">8</text>' +
              '<line x1="402" y1="170" x2="402" y2="175" stroke="#1f2d3a"/><text x="402" y="188">9</text>' +
              '<line x1="440" y1="170" x2="440" y2="175" stroke="#1f2d3a"/><text x="440" y="188">10</text>' +
              '<line x1="478" y1="170" x2="478" y2="175" stroke="#1f2d3a"/><text x="478" y="188">11</text>' +
              '<line x1="516" y1="170" x2="516" y2="175" stroke="#1f2d3a"/><text x="516" y="188">12</text>' +
              '<line x1="554" y1="170" x2="554" y2="175" stroke="#1f2d3a"/><text x="554" y="188">13</text>' +
              '<line x1="592" y1="170" x2="592" y2="175" stroke="#1f2d3a"/><text x="592" y="188">14</text>' +
              '</g><text x="326" y="208" font-size="11" text-anchor="middle" fill="#1f2d3a">pH</text><text x="310" y="230" font-size="10" text-anchor="middle" fill="#94a3ad">Indicator A turns at pH 4.3; indicator B turns at pH 7.</text></svg>',
          },
          caption: 'Colour-change ranges of indicator A (red→yellow at pH 4.3) and indicator B (yellow→blue at pH 7).',
        },
      },
      {
        label: 'e',
        text: 'There is evidence of specific chemical reactions on the surface of some exoplanets. One of these reactions is the decomposition of carbon dioxide:\n\n2CO₂(g) → 2CO(g) + O₂(g)\n\n**Suggest** why the rate of the decomposition reaction increases the closer the exoplanet is to the star it orbits.',
        marks: 2,
        ph: 'Higher temperature near star → faster reaction rate',
      },
      {
        label: 'f',
        text: 'Carbon dioxide can be re-formed in the presence of catalysts:\n\n2CO(g) + O₂(g) → 2CO₂(g)\n\n**Outline** the role of a catalyst in a chemical reaction.',
        marks: 2,
        ph: 'Catalyst speeds up reaction, not consumed',
      },
      {
        label: 'g',
        text: 'Several nations are showing renewed interest in going back to the Moon. So far, they have sent un-manned probes to orbit or land on the Moon. Future missions could involve building a space station or mining the Moon\'s resources.\n\n**Suggest** two additional reasons why nations are interested in going back to the Moon, and are launching these missions.',
        marks: 2,
        ph: 'Suggest two reasons beyond those in the text',
      },
    ],
  },

  // ── Q3 (16 marks, Crit A/B/C) — Candles ─────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'States of matter, combustion & data analysis',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 16,
    stem: 'Candles can be used for a variety of reasons, such as relaxing or in ceremonies. The length of time that a candle burns will determine its use.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="fl21" cx="0.5" cy="0.75" r="0.7"><stop offset="0" stop-color="#fff3b0"/><stop offset="0.4" stop-color="#ffb703"/><stop offset="1" stop-color="#fb8500"/></radialGradient></defs><rect width="560" height="300" fill="#11151c"/><text x="280" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#e2e8f0">A burning candle</text><!-- candle body --><rect x="220" y="170" width="120" height="100" rx="6" fill="#f1f0ec"/><rect x="220" y="190" width="120" height="80" rx="6" fill="#e7e2d4"/><!-- molten pool near wick --><ellipse cx="280" cy="178" rx="56" ry="12" fill="#cbb98a"/><!-- wick --><rect x="277" y="150" width="6" height="30" fill="#3a342b"/><!-- flame --><path d="M280 70 C262 110 260 140 280 152 C300 140 298 110 280 70 Z" fill="url(#fl21)"/><path d="M280 110 C272 128 272 142 280 150 C288 142 288 128 280 110 Z" fill="#3b82f6" opacity="0.7"/><!-- labels --><line x1="120" y1="96" x2="262" y2="96" stroke="#9aa3b2" stroke-width="1"/><text x="118" y="92" font-size="11" text-anchor="end" fill="#cbd5e1">Water vapour and carbon dioxide</text><line x1="200" y1="178" x2="260" y2="178" stroke="#9aa3b2" stroke-width="1"/><text x="186" y="182" font-size="13" font-weight="700" text-anchor="middle" fill="#fca5a5">B</text><line x1="160" y1="240" x2="222" y2="240" stroke="#9aa3b2" stroke-width="1"/><text x="146" y="244" font-size="13" font-weight="700" text-anchor="middle" fill="#7dd3fc">A</text><text x="280" y="292" font-size="10" text-anchor="middle" fill="#94a3ad">A = base of the candle · B = wax just below the flame</text></svg>',
      },
      caption: 'A burning candle. Point A is the cool base of the candle; point B is the wax just below the flame.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Several changes occur when a candle burns.\n\n**Select** the state of the candle at A and B in the diagram above.',
        marks: 2,
        ph: 'A = solid wax base; B = liquid wax near wick',
        widget: 'inline_dropdown_select',
        widgetItems: ['A', 'B'],
        widgetOptions: ['Solid', 'Liquid', 'Gas'],
      },
      {
        label: 'b',
        text: 'Wax is composed of hydrocarbons with the formula C₂₅H₅₂. Another hydrocarbon in the same class is C₅H₁₂. **State** the name and chemical class of C₅H₁₂.\n\nName:\n\nChemical class:',
        marks: 2,
        ph: 'Pentane; Alkane',
      },
      {
        label: 'c',
        text: '**Select** numbers to balance the equation showing complete combustion of C₅H₁₂.\n\n[?] C₅H₁₂(l) + [?] O₂(g) → [?] CO₂(g) + [?] H₂O(g)',
        marks: 2,
        ph: 'Coefficients: 1, 8, 5, 6',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      },
      {
        label: 'd',
        text: 'A student wanted to compare the time it took different candles to burn. One candle was in a metal holder and the other candle was not.\n\n**Formulate** a hypothesis for the student\'s question.\n\nIf the candle is contained in a metal holder then the time taken for the candle to burn will [blank] because:',
        marks: 3,
        ph: 'Direction: increase or decrease; give scientific reason',
        widget: 'fill_blank',
        widgetOptions: ['increase', 'decrease'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="fl21b" cx="0.5" cy="0.7" r="0.7"><stop offset="0" stop-color="#fff3b0"/><stop offset="0.45" stop-color="#ffb703"/><stop offset="1" stop-color="#fb8500"/></radialGradient></defs><rect width="560" height="240" fill="#11151c"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#e2e8f0">Two identical candles</text><!-- LEFT: candle in a metal holder --><g><path d="M150 70 C140 96 140 112 150 120 C160 112 160 96 150 70 Z" fill="url(#fl21b)"/><rect x="147" y="118" width="6" height="22" fill="#3a342b"/><!-- metal holder cup --><path d="M104 140 L196 140 L184 196 L116 196 Z" fill="#9aa3b2" stroke="#6b7280" stroke-width="2"/><path d="M104 140 L196 140 L192 152 L108 152 Z" fill="#cbd5e1"/><text x="150" y="220" font-size="11" text-anchor="middle" fill="#cbd5e1">in a metal holder</text></g><!-- RIGHT: candle, no holder --><g><path d="M410 70 C400 96 400 112 410 120 C420 112 420 96 410 70 Z" fill="url(#fl21b)"/><rect x="407" y="118" width="6" height="22" fill="#3a342b"/><!-- bare candle disc --><path d="M366 140 L454 140 L448 192 L372 192 Z" fill="#f1f0ec" stroke="#cbb98a" stroke-width="1.5"/><text x="410" y="220" font-size="11" text-anchor="middle" fill="#cbd5e1">no holder</text></g></svg>',
          },
          caption: 'Two identical candles: the left one sits in a metal holder, the right one has no holder.',
        },
      },
      {
        label: 'e',
        text: 'A student wanted to investigate the effect of altitude on how quickly a candle burns. Her processed data is shown in the table below.\n\n| Altitude / m | Rate of wax combustion / g min⁻¹ |\n|---|---|\n| 990 | 0.161 |\n| 2700 | 0.130 |\n| 3200 | 0.110 |\n| 3720 | 0.106 |\n| 4700 | 0.0906 |\n\n**State** the rate of wax combustion at an altitude of 3720 m in standard form.',
        marks: 1,
        ph: '1.06 × 10⁻¹ g min⁻¹',
      },
      {
        label: 'f',
        text: 'The student produced a graph of her results. **Identify** two errors in the presentation of the data in the graph above.',
        marks: 2,
        ph: 'Axes swapped; should be scatter/line not bar chart',
        artefact: {
          component: 'RateSim',
          data: {
            title: "The student's graph of her results",
            mode: 'bars',
            metric: 'Altitude / m',
            variable: 'Rate of wax combustion / g min⁻¹',
            bars: [
              { label: '0.161', value: 990 },
              { label: '0.130', value: 2700 },
              { label: '0.110', value: 3200 },
              { label: '0.106', value: 3720 },
              { label: '0.0906', value: 4700 },
            ],
            note: 'The student plotted altitude (the dependent measure here) on the vertical axis against rate of combustion on the horizontal axis, and used a bar chart for continuous numerical data.',
          },
          caption: "The student's graph: altitude on the vertical axis, rate of wax combustion treated as categories on the horizontal axis, drawn as bars.",
        },
      },
      {
        label: 'g',
        text: 'The student repeated the experiment the following day. The equipment set up on each day is shown.\n\nDay 1: lantern (enclosed flame). Day 2: open tea-light candle.\n\n**Outline** why the sets of results are different and **suggest** how the **rate** of wax combustion would be affected.',
        marks: 4,
        ph: 'Different equipment / weather / oxygen availability; state direction of rate change',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="320" fill="#ffffff"/><text x="310" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Rate of wax combustion measured on two days</text><!-- data table --><g font-size="10.5" fill="#1f2d3a"><rect x="40" y="38" width="240" height="160" fill="none" stroke="#94a3ad"/><line x1="40" y1="64" x2="280" y2="64" stroke="#94a3ad"/><line x1="120" y1="38" x2="120" y2="198" stroke="#94a3ad"/><line x1="200" y1="38" x2="200" y2="198" stroke="#94a3ad"/><text x="80" y="56" text-anchor="middle" font-weight="700">Altitude / m</text><text x="160" y="52" text-anchor="middle" font-weight="700">Day 1</text><text x="240" y="52" text-anchor="middle" font-weight="700">Day 2</text><text x="160" y="62" text-anchor="middle" font-size="8" fill="#64748b">g min⁻¹</text><text x="240" y="62" text-anchor="middle" font-size="8" fill="#64748b">g min⁻¹</text>' +
              '<text x="80" y="82" text-anchor="middle">990</text><text x="160" y="82" text-anchor="middle">0.161</text><text x="240" y="82" text-anchor="middle">0.148</text>' +
              '<text x="80" y="108" text-anchor="middle">2700</text><text x="160" y="108" text-anchor="middle">0.130</text><text x="240" y="108" text-anchor="middle">0.119</text>' +
              '<text x="80" y="134" text-anchor="middle">3200</text><text x="160" y="134" text-anchor="middle">0.110</text><text x="240" y="134" text-anchor="middle">0.108</text>' +
              '<text x="80" y="160" text-anchor="middle">3720</text><text x="160" y="160" text-anchor="middle">0.106</text><text x="240" y="160" text-anchor="middle">0.095</text>' +
              '<text x="80" y="186" text-anchor="middle">4700</text><text x="160" y="186" text-anchor="middle">0.0906</text><text x="240" y="186" text-anchor="middle">0.082</text>' +
              '<line x1="40" y1="90" x2="280" y2="90" stroke="#e2e8f0"/><line x1="40" y1="116" x2="280" y2="116" stroke="#e2e8f0"/><line x1="40" y1="142" x2="280" y2="142" stroke="#e2e8f0"/><line x1="40" y1="168" x2="280" y2="168" stroke="#e2e8f0"/></g>' +
              '<!-- Day 1 lantern (enclosed flame) --><text x="380" y="52" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">Day 1: lantern</text><rect x="352" y="64" width="56" height="80" rx="4" fill="none" stroke="#6b7280" stroke-width="2"/><rect x="358" y="74" width="44" height="60" fill="#dbeafe" opacity="0.5"/><path d="M380 96 C374 110 374 120 380 126 C386 120 386 110 380 96 Z" fill="#ffb703"/><rect x="364" y="60" width="32" height="8" rx="3" fill="#6b7280"/><path d="M372 64 L380 52 L388 64" fill="none" stroke="#6b7280" stroke-width="2"/><text x="380" y="160" font-size="9" text-anchor="middle" fill="#94a3ad">enclosed flame</text>' +
              '<!-- Day 2 open tea-light --><text x="530" y="52" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">Day 2: tea-light</text><path d="M510 110 C504 124 504 134 510 140 C516 134 516 124 510 110 Z" fill="#ffb703"/><rect x="507" y="138" width="6" height="12" fill="#3a342b"/><path d="M488 150 L532 150 L526 168 L494 168 Z" fill="#f1f0ec" stroke="#cbb98a"/><text x="510" y="186" font-size="9" text-anchor="middle" fill="#94a3ad">open flame</text>' +
              '<text x="310" y="232" font-size="10" text-anchor="middle" fill="#64748b">On Day 1 the flame was enclosed in a lantern; on Day 2 the candle burned in the open air.</text>' +
              '<text x="310" y="252" font-size="10" text-anchor="middle" fill="#64748b">At every altitude the Day 2 rate is lower than the Day 1 rate.</text></svg>',
          },
          caption: 'Day 1 / Day 2 combustion-rate data at each altitude, with the two equipment set-ups (enclosed lantern vs open tea-light).',
        },
      },
    ],
  },

  // ── Q4 (10 marks, Crit B/C) — Vanilla vs strawberry candles ─────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Investigation variables & data evaluation',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 10,
    stem: 'Some candles have fragrance added to them to provide relaxation or a memory of an experience. A student did a comparison between two candles: one fragranced with vanilla and one fragranced with strawberry.\n\nVanilla candle (in a glass jar): 185 g; trials 29.0, 24.3, 28.0 hours; average 27.1 hours.\nStrawberry candle (in a glass container): 114 g; trials 32.0, 28.5, 29.5 hours; average not shown.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Candle (container)', 'Mass / g', 'Burn time trial 1 / h', 'Burn time trial 2 / h', 'Burn time trial 3 / h', 'Average / h'],
        rows: [
          ['Vanilla (glass jar)', 185, 29.0, 24.3, 28.0, 27.1],
          ['Strawberry (glass container)', 114, 32.0, 28.5, 29.5, '—'],
        ],
      },
      caption: "The student's results for the vanilla candle (in a glass jar) and the strawberry candle (in a glass container). The strawberry average is left for you to calculate.",
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the independent variable and the dependent variable in **this** investigation.\n\nIndependent variable:\n\nDependent variable:',
        marks: 2,
        ph: 'IV = fragrance type; DV = burn time',
      },
      {
        label: 'b',
        text: '**Calculate** the average burn time for the strawberry candle.',
        marks: 2,
        ph: '(32.0 + 28.5 + 29.5) ÷ 3 = 30.0 hours',
      },
      {
        label: 'c',
        text: 'The student\'s friend examined the data and suggested that the average burn time for a vanilla candle should be 28.5 hours and not 27.1 hours. **Suggest** a reason for this different average time.',
        marks: 1,
        ph: 'Friend excluded the outlier 24.3 hours',
      },
      {
        label: 'd',
        text: 'The student hypothesized that the candle with vanilla fragrance would take a longer time to burn because the candle had a smaller surface area. Use the data in the tables above part (a) to **evaluate** the validity of the student\'s hypothesis.',
        marks: 3,
        ph: 'Not valid — strawberry burns longer; ignore surface area references',
      },
      {
        label: 'e',
        text: '**Suggest** one improvement to increase the validity of the method. **Justify** your answer.\n\nImprovement:\n\nJustification:',
        marks: 2,
        ph: 'Same container type or same mass of wax; gives identical heat transfer',
      },
    ],
  },

  // ── Q5 (12 marks, Crit A/B/C/D) — Coffee grounds & biomass ──────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Separation, energy & green chemistry',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 12,
    stem: 'Coffee is one of the most widely consumed drinks in the world. Coffee is produced by grinding coffee beans and then extracting the coffee from the grounds by filtration. This generates approximately six million tonnes of waste coffee grounds. The first stage of making coffee logs is to treat the grounds with an organic solvent. Esters, which give the coffee smell, dissolve in the solvent. The mixture is then filtered, producing a liquid fraction and a solid fraction.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="220" fill="#ffffff"/><text x="310" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Processing waste coffee grounds into fuels</text><!-- coffee grounds --><circle cx="80" cy="110" r="42" fill="#6f4e37"/><circle cx="80" cy="110" r="42" fill="none" stroke="#4a3220" stroke-width="2"/><text x="80" y="114" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Coffee</text><text x="80" y="166" font-size="10" text-anchor="middle" fill="#4a3220">waste grounds</text><!-- arrow --><line x1="124" y1="110" x2="176" y2="110" stroke="#94a3ad" stroke-width="2" marker-end="url(#a21)"/><defs><marker id="a21" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#94a3ad"/></marker></defs><!-- organic solvent box --><rect x="180" y="88" width="86" height="44" rx="6" fill="#eef4f7" stroke="#5b6b78"/><text x="223" y="106" font-size="10" text-anchor="middle" fill="#0b7285">Organic</text><text x="223" y="120" font-size="10" text-anchor="middle" fill="#0b7285">solvent</text><line x1="266" y1="110" x2="300" y2="110" stroke="#94a3ad" stroke-width="2" marker-end="url(#a21)"/><!-- filter --><rect x="304" y="88" width="60" height="44" rx="6" fill="#fff7ed" stroke="#e8590c"/><text x="334" y="114" font-size="11" font-weight="700" text-anchor="middle" fill="#e8590c">Filter</text><!-- split arrows --><line x1="364" y1="100" x2="430" y2="64" stroke="#2f9e44" stroke-width="2" marker-end="url(#a21g)"/><line x1="364" y1="120" x2="430" y2="156" stroke="#6f4e37" stroke-width="2" marker-end="url(#a21b)"/><defs><marker id="a21g" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2f9e44"/></marker><marker id="a21b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#6f4e37"/></marker></defs><!-- liquid fraction --><rect x="434" y="44" width="120" height="40" rx="6" fill="#e9f7ef" stroke="#2f9e44"/><text x="494" y="60" font-size="10" font-weight="700" text-anchor="middle" fill="#2f9e44">Liquid fraction</text><text x="494" y="76" font-size="9" text-anchor="middle" fill="#2f9e44">→ biodiesel</text><!-- solid fraction --><rect x="434" y="136" width="120" height="40" rx="6" fill="#f3ece4" stroke="#6f4e37"/><text x="494" y="152" font-size="10" font-weight="700" text-anchor="middle" fill="#6f4e37">Solid fraction</text><text x="494" y="168" font-size="9" text-anchor="middle" fill="#6f4e37">→ coffee logs</text></svg>',
      },
      caption: 'Waste coffee grounds are treated with an organic solvent, then filtered into a liquid fraction (biodiesel) and a solid fraction (coffee logs).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Organise** the equipment below to show how to separate the solid and liquid fractions from the coffee ground/solvent mixture.\n\nNote: the filter funnel stand is already provided; drag the filter paper and correct beaker to complete the setup.',
        marks: 2,
        ph: 'Drag filter paper into funnel; place beaker underneath',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="280" fill="#ffffff"/><text x="310" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Equipment for separating the mixture</text><!-- LEFT: funnel stand (provided) --><text x="160" y="50" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">Already provided: filter-funnel stand</text><!-- stand --><line x1="80" y1="240" x2="240" y2="240" stroke="#6b7280" stroke-width="3"/><line x1="100" y1="240" x2="100" y2="90" stroke="#6b7280" stroke-width="3"/><line x1="100" y1="120" x2="170" y2="120" stroke="#6b7280" stroke-width="3"/><circle cx="170" cy="120" r="6" fill="none" stroke="#6b7280" stroke-width="3"/><!-- funnel (empty) --><path d="M148 92 L192 92 L176 122 L172 150 L168 150 L164 122 Z" fill="#eef4f7" stroke="#5b6b78" stroke-width="2"/><text x="170" y="170" font-size="9" text-anchor="middle" fill="#94a3ad">funnel (empty)</text><!-- RIGHT: draggable items --><text x="450" y="50" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">Draggable items</text><!-- filter paper (cone/triangle) --><path d="M330 70 L380 70 L355 112 Z" fill="#ffffff" stroke="#94a3ad" stroke-width="1.5"/><text x="355" y="128" font-size="9" text-anchor="middle" fill="#475569">filter paper</text><!-- thermometer --><rect x="418" y="68" width="6" height="44" rx="3" fill="#e2e8f0" stroke="#94a3ad"/><circle cx="421" cy="116" r="6" fill="#e03131"/><text x="421" y="136" font-size="9" text-anchor="middle" fill="#475569">thermometer</text><!-- balance --><rect x="470" y="92" width="60" height="18" rx="3" fill="#cbd5e1" stroke="#6b7280"/><rect x="486" y="80" width="28" height="12" rx="2" fill="#9aa3b2"/><text x="500" y="128" font-size="9" text-anchor="middle" fill="#475569">balance</text><!-- 150 mL beaker --><path d="M330 178 L370 178 L368 230 L332 230 Z" fill="none" stroke="#5b6b78" stroke-width="2"/><line x1="334" y1="200" x2="344" y2="200" stroke="#5b6b78"/><text x="350" y="248" font-size="9" text-anchor="middle" fill="#475569">beaker (150 mL)</text><!-- 500 mL beaker --><path d="M430 168 L482 168 L479 232 L433 232 Z" fill="none" stroke="#5b6b78" stroke-width="2"/><line x1="436" y1="190" x2="448" y2="190" stroke="#5b6b78"/><text x="456" y="248" font-size="9" text-anchor="middle" fill="#475569">beaker (500 mL)</text></svg>',
          },
          caption: 'The funnel stand is provided. Drag the filter paper into the funnel and place a beaker underneath to collect the liquid fraction.',
        },
      },
      {
        label: 'b',
        text: 'Organic solvents are chemicals which can be used to dissolve a solute. Hexane is an example of an organic solvent. **Select** the hazard symbol for hexane.',
        marks: 1,
        ph: 'Hexane is flammable — select flammable symbol',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="200" fill="#ffffff"/><text x="310" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Hazard symbols A–D</text><!-- A: explosive --><text x="90" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">A</text><rect x="50" y="58" width="80" height="80" transform="rotate(45 90 98)" fill="#ffffff" stroke="#e03131" stroke-width="4"/><g transform="translate(90 98)"><circle r="9" fill="#1f2d3a"/><g stroke="#1f2d3a" stroke-width="3"><line x1="0" y1="-9" x2="0" y2="-22"/><line x1="6" y1="-7" x2="15" y2="-16"/><line x1="9" y1="0" x2="22" y2="0"/><line x1="6" y1="7" x2="15" y2="16"/><line x1="-6" y1="7" x2="-15" y2="16"/></g></g><text x="90" y="166" font-size="9" text-anchor="middle" fill="#475569">explosive</text>' +
              '<!-- B: corrosive --><text x="235" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">B</text><rect x="195" y="58" width="80" height="80" transform="rotate(45 235 98)" fill="#ffffff" stroke="#e03131" stroke-width="4"/><g transform="translate(235 96)"><rect x="-22" y="-2" width="14" height="4" fill="#1f2d3a"/><rect x="8" y="-2" width="14" height="4" fill="#1f2d3a"/><path d="M-18 2 q3 14 3 14" stroke="#1f2d3a" stroke-width="2" fill="none"/><path d="M18 2 q-3 14 -3 14" stroke="#1f2d3a" stroke-width="2" fill="none"/><path d="M-26 22 l10 4 M22 22 l-10 4" stroke="#1f2d3a" stroke-width="2"/><rect x="-24" y="26" width="48" height="3" fill="#1f2d3a"/></g><text x="235" y="166" font-size="9" text-anchor="middle" fill="#475569">corrosive</text>' +
              '<!-- C: flammable (correct) --><text x="380" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">C</text><rect x="340" y="58" width="80" height="80" transform="rotate(45 380 98)" fill="#ffffff" stroke="#e03131" stroke-width="4"/><g transform="translate(380 98)"><path d="M0 -24 C12 -8 16 -2 8 12 C16 4 18 -4 12 -14 C14 0 8 8 2 14 C8 4 -2 4 0 -24 Z" fill="#fb8500" stroke="#c44a00" stroke-width="1"/><rect x="-16" y="16" width="32" height="3" fill="#1f2d3a"/></g><text x="380" y="166" font-size="9" text-anchor="middle" fill="#475569">flammable</text>' +
              '<!-- D: radioactive --><text x="525" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">D</text><rect x="485" y="58" width="80" height="80" transform="rotate(45 525 98)" fill="#fff3b0" stroke="#1f2d3a" stroke-width="3"/><g transform="translate(525 98)" fill="#1f2d3a"><circle r="6"/><path d="M0 0 L0 -26 A26 26 0 0 1 22.5 13 Z" transform="rotate(0)"/><path d="M0 0 L0 -26 A26 26 0 0 1 22.5 13 Z" transform="rotate(120)"/><path d="M0 0 L0 -26 A26 26 0 0 1 22.5 13 Z" transform="rotate(240)"/><circle r="7" fill="#fff3b0"/><circle r="5"/></g><text x="525" y="166" font-size="9" text-anchor="middle" fill="#475569">radioactive</text></svg>',
          },
          caption: 'Four hazard pictograms (A–D). Hexane evaporates easily and catches fire readily.',
        },
      },
      {
        label: 'c',
        text: 'Once the coffee grounds have been treated with the organic solvent, they can be treated further to produce biodiesel or solid fuel (coffee logs). The table below shows data for different forms of biomass compared with coffee logs.\n\n| Biomass | Energy / MJ tonne⁻¹ |\n|---|---|\n| Coffee logs | 18 000 |\n| Compost | 11 500 |\n| Poultry waste | 10 800 |\n| Straw | 14 400 |\n| Wood chips | 13 000 |\n\n**Plot** the energy content of biomass fuels data shown in the table. You should **label** the axes and use the tools in the drawing palette to create your graph.',
        marks: 6,
        ph: 'Bar chart; x=biomass type; y=energy/MJ tonne⁻¹; even scale from 0; all 5 bars correct',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Biomass', 'Energy / MJ tonne⁻¹'],
            rows: [
              ['Coffee logs', '18 000'],
              ['Compost', '11 500'],
              ['Poultry waste', '10 800'],
              ['Straw', '14 400'],
              ['Wood chips', '13 000'],
            ],
          },
          caption: 'Energy content of different biomass fuels. Use these values to plot your bar chart (biomass type on the x-axis, energy on the y-axis).',
        },
      },
      {
        label: 'd',
        text: 'The coffee logs and the biodiesel obtained from coffee grounds can be used to produce energy. **Select** the type of process used to produce energy.',
        marks: 1,
        ph: 'Burning fuel is an exothermic process',
        widget: 'radio_select',
        widgetOptions: ['Endothermic', 'Exothermic', 'Photosynthesis', 'Fermentation'],
      },
      {
        label: 'e',
        text: '**Suggest** why it is important to recycle coffee grounds. **Justify** your answer.',
        marks: 2,
        ph: 'Reduces waste, reduces landfill, provides fuel source; justify with linked reason',
      },
    ],
  },

  // ── Q6 (16 marks, Crit B) — Design: fuel energy density investigation ─────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design (fuel energy density)',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 16,
    stem: 'Different fuels release different amounts of energy when they burn, depending on their chemical composition. Energy density can be determined by measuring the mass change of the fuel burned to produce a specific temperature increase. The diagram shows two ways to set up equipment to determine the energy density of a liquid fuel. A student wants to investigate the energy density of five new solid fuels A, B, C, D and E.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="320" fill="#ffffff"/><text x="320" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two ways to measure the energy density of a fuel</text><!-- SET-UP ONE: beaker on tripod/gauze --><text x="160" y="48" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">Set-up one</text><!-- thermometer --><rect x="158" y="60" width="5" height="50" rx="2" fill="#e2e8f0" stroke="#94a3ad"/><circle cx="160" cy="112" r="4" fill="#e03131"/><line x1="170" y1="66" x2="220" y2="66" stroke="#94a3ad"/><text x="224" y="69" font-size="9" fill="#475569">Thermometer</text><!-- beaker of water --><path d="M120 96 L200 96 L196 150 L124 150 Z" fill="#dbeafe" stroke="#5b6b78" stroke-width="2"/><line x1="206" y1="120" x2="240" y2="120" stroke="#94a3ad"/><text x="244" y="123" font-size="9" fill="#475569">Water</text><!-- tripod + gauze --><line x1="112" y1="156" x2="208" y2="156" stroke="#6b7280" stroke-width="2"/><text x="40" y="160" font-size="9" fill="#475569">Gauze</text><line x1="125" y1="156" x2="115" y2="210" stroke="#6b7280" stroke-width="2"/><line x1="195" y1="156" x2="205" y2="210" stroke="#6b7280" stroke-width="2"/><line x1="160" y1="156" x2="160" y2="210" stroke="#6b7280" stroke-width="2"/><text x="244" y="186" font-size="9" fill="#475569">Tripod</text><!-- spirit burner --><rect x="146" y="186" width="28" height="22" rx="3" fill="#9aa3b2" stroke="#6b7280"/><path d="M160 176 C155 184 155 188 160 192 C165 188 165 184 160 176 Z" fill="#ffb703"/><text x="100" y="200" font-size="9" fill="#475569">Spirit burner</text><!-- balance --><rect x="120" y="232" width="80" height="16" rx="3" fill="#cbd5e1" stroke="#6b7280"/><text x="244" y="244" font-size="9" fill="#475569">Balance</text><!-- SET-UP TWO: insulated can calorimeter --><text x="470" y="48" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">Set-up two</text><!-- outer coffee can --><rect x="410" y="96" width="120" height="150" rx="8" fill="#e9ecef" stroke="#6b7280" stroke-width="2"/><text x="540" y="150" font-size="9" fill="#475569">Coffee can</text><!-- inner metal can with water --><rect x="438" y="108" width="64" height="60" rx="4" fill="#dbeafe" stroke="#5b6b78" stroke-width="1.5"/><text x="538" y="116" font-size="9" fill="#475569">Small metal can</text><line x1="502" y1="132" x2="528" y2="124" stroke="#94a3ad"/><text x="408" y="138" font-size="9" text-anchor="end" fill="#475569">Water</text><!-- thermometer + glass rod --><rect x="466" y="74" width="4" height="40" fill="#e2e8f0" stroke="#94a3ad"/><circle cx="468" cy="116" r="3.5" fill="#e03131"/><line x1="470" y1="80" x2="528" y2="80" stroke="#94a3ad"/><text x="532" y="83" font-size="9" fill="#475569">Thermometer</text><line x1="480" y1="78" x2="480" y2="118" stroke="#94a3ad" stroke-width="2"/><text x="532" y="100" font-size="9" fill="#475569">Glass rod</text><!-- burner with air holes --><rect x="454" y="196" width="32" height="24" rx="3" fill="#9aa3b2" stroke="#6b7280"/><circle cx="460" cy="208" r="2" fill="#1f2d3a"/><circle cx="480" cy="208" r="2" fill="#1f2d3a"/><path d="M470 184 C465 192 465 196 470 200 C475 196 475 192 470 184 Z" fill="#ffb703"/><text x="408" y="210" font-size="9" text-anchor="end" fill="#475569">Spirit burner</text><text x="470" y="240" font-size="8.5" text-anchor="middle" fill="#475569">Air holes</text><!-- balance --><rect x="430" y="256" width="80" height="16" rx="3" fill="#cbd5e1" stroke="#6b7280"/><text x="538" y="268" font-size="9" fill="#475569">Balance</text></svg>',
      },
      caption: 'Set-up one heats a beaker of water on a tripod and gauze; set-up two uses an insulated can-within-a-can to reduce heat loss. Both stand on a balance.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to find out which fuel has the highest energy density. In your answer, you should include:\n- an identification of the independent, dependent and two control variables\n- a justification of which equipment set-up you will use\n- details of the method to allow you to collect sufficient data\n- how you will ensure that your method is safe.',
        marks: 16,
        ph: 'Variables, set-up justification, method, safety; all five fuels, repeated trials, standard heating procedure',
      },
    ],
  },

  // ── Q7 (12 marks, Crit C/D) — Global water consumption & filtration ──────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Water purification & filtration evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 12,
    stem: 'Global water consumption has changed dramatically over the last 120 years. The graph below shows the change in water consumption for each region during this period.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="380" fill="#ffffff"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Water consumption by region, 1900–2020</text><!-- plot area: x 70..470 (1900..2020), y 40..300 (3500..0). xs(year)=70+(year-1900)/120*400 ; ys(v)=300-v/3500*260 --><!-- gridlines + y ticks --><g font-size="9" fill="#64748b" text-anchor="end">' +
              '<line x1="70" y1="300" x2="470" y2="300" stroke="#e2e8f0"/><text x="64" y="303">0</text>' +
              '<line x1="70" y1="263" x2="470" y2="263" stroke="#e2e8f0"/><text x="64" y="266">500</text>' +
              '<line x1="70" y1="226" x2="470" y2="226" stroke="#e2e8f0"/><text x="64" y="229">1000</text>' +
              '<line x1="70" y1="189" x2="470" y2="189" stroke="#e2e8f0"/><text x="64" y="192">1500</text>' +
              '<line x1="70" y1="152" x2="470" y2="152" stroke="#e2e8f0"/><text x="64" y="155">2000</text>' +
              '<line x1="70" y1="115" x2="470" y2="115" stroke="#e2e8f0"/><text x="64" y="118">2500</text>' +
              '<line x1="70" y1="78" x2="470" y2="78" stroke="#e2e8f0"/><text x="64" y="81">3000</text>' +
              '<line x1="70" y1="41" x2="470" y2="41" stroke="#e2e8f0"/><text x="64" y="44">3500</text></g>' +
              '<!-- axes --><line x1="70" y1="40" x2="70" y2="300" stroke="#1f2d3a" stroke-width="1.5"/><line x1="70" y1="300" x2="470" y2="300" stroke="#1f2d3a" stroke-width="1.5"/>' +
              '<!-- x ticks every 20y --><g font-size="9" fill="#64748b" text-anchor="middle">' +
              '<line x1="70" y1="300" x2="70" y2="305" stroke="#1f2d3a"/><text x="70" y="318">1900</text>' +
              '<line x1="137" y1="300" x2="137" y2="305" stroke="#1f2d3a"/><text x="137" y="318">1920</text>' +
              '<line x1="203" y1="300" x2="203" y2="305" stroke="#1f2d3a"/><text x="203" y="318">1940</text>' +
              '<line x1="270" y1="300" x2="270" y2="305" stroke="#1f2d3a"/><text x="270" y="318">1960</text>' +
              '<line x1="337" y1="300" x2="337" y2="305" stroke="#1f2d3a"/><text x="337" y="318">1980</text>' +
              '<line x1="403" y1="300" x2="403" y2="305" stroke="#1f2d3a"/><text x="403" y="318">2000</text>' +
              '<line x1="470" y1="300" x2="470" y2="305" stroke="#1f2d3a"/><text x="470" y="318">2020</text></g>' +
              '<text x="270" y="338" font-size="11" text-anchor="middle" fill="#1f2d3a">Year</text>' +
              '<text x="22" y="170" font-size="11" text-anchor="middle" fill="#1f2d3a" transform="rotate(-90 22 170)">Billion cubic metres per year</text>' +
              '<!-- Asia (dark blue): passes through ~2150 (y≈140) at 1905, rising to ~3400 at 2020 --><polyline fill="none" stroke="#1e40af" stroke-width="2.5" points="70,144 87,140 103,138 137,133 170,128 203,122 237,114 270,107 303,98 337,88 370,77 403,66 437,57 470,47"/>' +
              '<!-- North America (red) --><polyline fill="none" stroke="#e03131" stroke-width="2" points="70,293 137,289 203,283 253,278 270,270 303,256 337,248 370,252 403,242 437,238 470,239"/>' +
              '<!-- Europe (amber) --><polyline fill="none" stroke="#f08c00" stroke-width="2" points="70,297 137,294 203,290 253,282 270,272 303,266 337,265 403,261 470,257"/>' +
              '<!-- Africa (green) --><polyline fill="none" stroke="#2f9e44" stroke-width="2" points="70,299 203,296 270,290 337,283 403,277 470,272"/>' +
              '<!-- South America (purple) --><polyline fill="none" stroke="#9c36b5" stroke-width="2" points="70,299 270,294 337,290 403,287 470,285"/>' +
              '<!-- Australia & Oceania (light blue) --><polyline fill="none" stroke="#4dabf7" stroke-width="2" points="70,300 270,297 337,295 403,294 470,293"/>' +
              '<!-- legend --><g font-size="10" fill="#1f2d3a"><text x="494" y="44" font-weight="700">Key:</text>' +
              '<rect x="494" y="56" width="14" height="8" fill="#1e40af"/><text x="512" y="64">Asia</text>' +
              '<rect x="494" y="76" width="14" height="8" fill="#e03131"/><text x="512" y="84">North America</text>' +
              '<rect x="494" y="96" width="14" height="8" fill="#f08c00"/><text x="512" y="104">Europe</text>' +
              '<rect x="494" y="116" width="14" height="8" fill="#2f9e44"/><text x="512" y="124">Africa</text>' +
              '<rect x="494" y="136" width="14" height="8" fill="#9c36b5"/><text x="512" y="144">South America</text>' +
              '<rect x="494" y="156" width="14" height="8" fill="#4dabf7"/><text x="512" y="164">Australia and</text><text x="512" y="176">Oceania</text></g></svg>',
      },
      caption: 'Water consumption (billion m³ per year) for each world region from 1900 to 2020. Asia (dark blue) is by far the largest consumer, rising from about 2150 in 1905 to over 3000 by 2020; Australia and Oceania (light blue) changes the least.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the graph to **identify** the region that had the smallest increase in water consumption between 1900 and 1980.',
        marks: 1,
        ph: 'Read graph; smallest increase = Australia and Oceania',
      },
      {
        label: 'b',
        text: 'Use the graph to **state** the water consumption in Asia in 1905.',
        marks: 2,
        ph: 'Read graph at 1905; ~2150 billion m³',
      },
      {
        label: 'c',
        text: '**Suggest** a reason why the water consumption in Asia has increased dramatically during the period shown on the graph.',
        marks: 1,
        ph: 'Population increase (do not accept industrialisation alone)',
      },
      {
        label: 'd',
        text: 'Kamal and Sandra have moved into a home in the USA that has a private water well. They need to purchase a filtration device to use in their home to make their water safe for drinking. \n\n**Select** the most important feature of the filter that is needed in a filtration device. **Justify** your answer.\n\nJustification:',
        marks: 2,
        ph: 'Pore size — must be smaller than material being filtered out',
        widget: 'radio_select',
        widgetOptions: ['Cost of unit', 'Filter life span', 'Pore size', 'Water flow rate'],
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Contaminant', 'Size / µm', 'Source', 'Symptoms or diseases'],
            rows: [
              ['E. coli', '0.5–2', 'Bacteria from waste food contamination or broken sewage pipes', 'Diarrhea, urinary tract infections, pneumonia'],
              ['Giardia', '4–6', 'Parasites from broken sewage pipes', 'Diarrhea, cramping, nausea, vomiting'],
              ['Hepatitis A', '0.055–0.065', 'A virus from broken sewage pipes', 'Can cause major liver disease'],
              ['Heavy metals', '<0.001', 'Mineral deposits, plumbing, mining', 'Liver damage, kidney damage or cancer'],
              ['Fuel', '<0.005', 'Industrial areas or fuel dumping', 'Irritation to digestive system'],
              ['Nitrates', '<0.005', 'Fertilizers', "Can reduce the blood's ability to carry oxygen; in infants, can be fatal"],
            ],
          },
          caption: 'Common drinking-water contaminants and their sizes. The filter must trap particles down to the size of the material being removed.',
        },
      },
      {
        label: 'e',
        text: 'Using the information in the tables above, **explain** the advantages and disadvantages of using a ceramic core unit compared to an activated carbon unit for personal drinking, when obtaining water from a private well. In your answer, you should:\n- describe the advantages and disadvantages of a ceramic core unit compared to the activated carbon unit\n- justify which would be the most suitable filter for Kamal and Sandra.',
        marks: 6,
        ph: 'Compare cost, lifespan, pore size, flow rate; justify choice for well water',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Feature', 'Ceramic core unit', 'Activated carbon unit'],
            rows: [
              ['Cost of unit / US$', '166.00', '92.00'],
              ['Cost of filters / US$', '67', '26'],
              ['Filter life span / months', '12', '6'],
              ['Water flow / dm³ min⁻¹', '1.8–3.8', '1.2–2.5'],
              ['Filter pore size / µm', '0.22', '0.60'],
              ['Operating temperature / °C', '5–30', '−1–51'],
            ],
          },
          caption: 'Comparison of a ceramic core filtration unit and an activated carbon filtration unit.',
        },
      },
    ],
  },

  // ── Q8 (13 marks, Crit D) — Water purification technology evaluation ──────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Water purification technologies',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 13,
    stem: 'The city planners in a coastal region are planning for expansion over the next 10 years. One of their priorities is to ensure an adequate water supply for the increased population. The city is located next to the ocean with farming land next to the city boundaries. The main industry in the city is metal recycling.\n\nUsing your knowledge of water purification techniques, information from the video and your wider MYP studies, discuss and evaluate the different technologies available for water treatment. In your answer, you should include:\n- a comparison of the economic implications of each of the three technologies\n- an example of the environmental impact of each of the three technologies\n- an outline of the social aspects of the building and running of a water purification facility\n- an appraisal of which technology would not be suitable for the city.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Method', 'Filter', 'Functionality', 'Lifespan', 'Output / m³ per day', 'Initial building cost / US$ per 100 m³', 'Replacement parts', 'Labour cost & skill', 'Total cost'],
        rows: [
          ['Microfiltration and ultrafiltration', 'Metal screen filter', 'Removes suspended solids and microorganisms', '15 years', '8 000', '0.15', '0.00', '0.03 (low skill)', '0.18'],
          ['Nanofiltration', 'Polyester membrane', 'Removes suspended solids, microorganisms and nickel and lead ions', '3–5 years', '100 000', '6.27', '2.34', '0.30 (low skill)', '8.91'],
          ['Desalination by reverse osmosis', 'Membrane', 'Removes suspended solids, microorganisms and nickel and lead ions; can be used with salt water', '2–3 years', '250 000', '3.66', '0.12', '1.47 (high skill)', '5.25'],
        ],
      },
      caption: 'Comparison of three water-treatment technologies. (For scale, an Olympic-sized swimming pool holds about 25 000 m³.)',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the different technologies available for water treatment for the coastal city.',
        marks: 13,
        ph: 'Economic/environmental/social comparison of micro/nanofiltration and desalination; identify unsuitable technology with justification',
      },
    ],
  },
]
