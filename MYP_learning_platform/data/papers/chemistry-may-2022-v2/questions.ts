import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2022-v2',
  subject: 'Chemistry',
  session: 'May',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (9 marks, Crit A) — Iron Age meteorite tools, hydrated salt ────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, compounds & moles — Iron Age meteorite iron-nickel tools',
    marks: 9,
    stem: 'Some of the earliest iron tools were made from meteoritic iron — a natural alloy of iron (Fe) and nickel (Ni). Archaeological sites in Egypt revealed iron-nickel daggers that had barely corroded after 5,000 years. Analysis of the meteorite rock showed it contained nickel oxide (NiO), iron sulfide and traces of an unknown element W. The site also yielded iron(II) sulfate heptahydrate (FeSO₄·7H₂O) — a green hydrated salt. Hydrated salts are ionic compounds with a constant number of water molecules as part of their structure.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 580 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="580" height="230" fill="#ffffff"/><text x="290" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Elements found in the meteorite rock</text><g><rect x="40" y="42" width="64" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="72" y="56" font-size="8" text-anchor="middle" fill="#64748b">26 · Group 8</text><text x="72" y="74" font-size="17" font-weight="700" text-anchor="middle" fill="#0b7285">Fe</text><text x="72" y="88" font-size="8" text-anchor="middle" fill="#64748b">iron</text></g><g><rect x="120" y="42" width="64" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="152" y="56" font-size="8" text-anchor="middle" fill="#64748b">28 · Group 10</text><text x="152" y="74" font-size="17" font-weight="700" text-anchor="middle" fill="#0b7285">Ni</text><text x="152" y="88" font-size="8" text-anchor="middle" fill="#64748b">nickel</text></g><g><rect x="430" y="42" width="64" height="50" fill="#fff7ed" stroke="#5b6b78"/><text x="462" y="56" font-size="8" text-anchor="middle" fill="#64748b">16 · Group 6</text><text x="462" y="74" font-size="17" font-weight="700" text-anchor="middle" fill="#e8590c">W?</text><text x="462" y="88" font-size="8" text-anchor="middle" fill="#64748b">unknown</text></g><text x="40" y="120" font-size="11" fill="#475569">Fe and Ni are transition metals (Period 4).</text><text x="40" y="138" font-size="11" fill="#475569">Element W: electron configuration 2, 8, 6 → Period 3, Group 6.</text><line x1="40" y1="152" x2="540" y2="152" stroke="#e2e8f0" stroke-width="1"/><text x="40" y="172" font-size="11" font-weight="700" fill="#1f2d3a">Hydrated salt: FeSO₄·7H₂O</text><text x="40" y="190" font-size="10" fill="#94a3ad">1 mol FeSO₄ is bonded to 7 mol of water molecules.</text><text x="40" y="206" font-size="10" fill="#94a3ad">Molar mass of water = 18 g/mol.</text><text x="40" y="222" font-size="10" fill="#94a3ad">Mass number = protons + neutrons.</text></svg>',
      },
      caption: 'The metals (Fe, Ni) and the unknown element W from the meteorite, plus the hydrated-salt and isotope facts needed for the calculations.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** a reason why the iron-nickel daggers remained intact for thousands of years.',
        marks: 1,
        ph: 'High nickel content resists corrosion — nickel-iron alloy less reactive than pure iron',
        widget: 'radio_select',
        widgetOptions: ['The high nickel content makes it resistant to corrosion', 'Iron is a transition metal', 'Iron is ductile', 'Iron is magnetic'],
      },
      {
        label: 'b',
        text: 'Two compounds present in the meteorite rock are listed below. **Write down** the missing name and formula.\n\n| Name | Formula |\n|---|---|\n| [blank] | NiO |\n| Iron sulfide | [blank] |',
        marks: 2,
        ph: 'Nickel oxide; FeS',
        widget: 'fill_blank',
        widgetOptions: ['Nickel oxide', 'Nickel(II) oxide', 'Iron sulfide', 'FeS', 'NiO', 'Fe₂S₃', 'NiO₂'],
      },
      {
        label: 'c',
        text: 'Traces of unknown element W were also found. The electron configuration of element W is 2, 8, 6.\n\n**Identify** element W.',
        marks: 1,
        ph: 'Sulfur (S) — 16 electrons, Group 6, Period 3',
      },
      {
        label: 'd',
        text: 'Analysis showed that one isotope of element W had 18 neutrons. **Determine** the mass number of this isotope.',
        marks: 2,
        ph: 'Protons = 16; mass number = 16 + 18 = 34',
      },
      {
        label: 'e',
        text: 'The formula FeSO₄·7H₂O means that one mole of FeSO₄ contains seven moles of water molecules. **Calculate** the mass of water present in 4 moles of the hydrated salt.',
        marks: 3,
        ph: '4 mol × 7 = 28 mol H₂O; molar mass H₂O = 18 g/mol; 28 × 18 = 504 g',
      },
    ],
  },

  // ── Q2 (15 marks, Crit A) — Painted murals, HCl, molecular models ─────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Transition metals, moles, molecular models & acids — mineral pigment murals',
    marks: 15,
    stem: 'Prehistoric cave painters and ancient Egyptians used mineral pigments — mostly transition metal compounds — to create murals that survive thousands of years. Today, conservators apply lactic acid solution to remove mineral deposits from mural surfaces before restoration. Lactic acid (IUPAC: 2-hydroxypropanoic acid, C₃H₆O₃) is a mild organic acid. Mural plaster typically contains SiO₂, Na₂O and magnesium oxide (MgO) fused together.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Compound in a 50.0 g plaster sample', 'Mass / g', 'Group of metal', 'Period of metal'],
        rows: [
          ['Silicon dioxide, SiO₂', '38.0', '14 (Si)', '3'],
          ['Sodium oxide, Na₂O', '7.0', '1 (Na)', '3'],
          ['Magnesium oxide, MgO', 'remainder', '2 (Mg)', '3'],
        ],
      },
      caption: 'Composition of a 50.0 g mural-plaster sample. The MgO mass is the remainder once SiO₂ and Na₂O are subtracted (M(MgO) = 40 g/mol).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** one of the transition metals used in mineral pigments, giving the name of the metal and its symbol.',
        marks: 1,
        ph: 'Iron and Fe / Cobalt and Co / Chromium and Cr (any one)',
      },
      {
        label: 'b',
        text: '**Identify** the element in these compounds that is in group 2 and period 3.',
        marks: 1,
        ph: 'Magnesium or Mg',
      },
      {
        label: 'c',
        text: 'A 50.0 g sample of mural plaster contains 38.0 g of SiO₂ and 7.0 g of Na₂O; the remainder is MgO. **Calculate** the number of moles of magnesium oxide in the sample. Give your answer to two significant figures.',
        marks: 4,
        ph: 'Mass MgO = 50.0−38.0−7.0 = 5.0 g; M(MgO) = 40 g/mol; n = 5.0/40 = 0.13 mol',
      },
      {
        label: 'd',
        text: 'Lactic acid (2-hydroxypropanoic acid) is applied as a cleaning solution. Its molecular formula is C₃H₆O₃.\n\nIn the following models, C atoms are black, H atoms are white and O atoms are red. **Select** the model showing lactic acid.',
        marks: 1,
        ph: 'Select model A — correct structure for C₃H₆O₃ (3 C, 6 H, 3 O)',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="360" fill="#ffffff"/><text x="310" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four molecular models — which is lactic acid, C₃H₆O₃?</text><text x="310" y="38" font-size="10" text-anchor="middle" fill="#64748b">C = black · H = white (outlined) · O = red. Count the atoms.</text><g font-size="9" fill="#475569"><circle cx="360" cy="44" r="6" fill="#1f2937" stroke="#111"/><text x="372" y="47">C</text><circle cx="402" cy="44" r="6" fill="#ffffff" stroke="#94a3b8"/><text x="414" y="47">H</text><circle cx="444" cy="44" r="6" fill="#dc2626" stroke="#991b1b"/><text x="456" y="47">O</text></g><!-- A: C3H6O3 lactic acid CH3-CH(OH)-COOH (correct) --><g><rect x="20" y="58" width="280" height="130" rx="8" fill="#ecfdf5" stroke="#34d399"/><text x="34" y="78" font-size="12" font-weight="800" fill="#0f172a">A</text><text x="160" y="78" font-size="9" text-anchor="middle" fill="#64748b">3 C · 6 H · 3 O</text><g stroke="#475569" stroke-width="2"><line x1="78" y1="130" x2="130" y2="130"/><line x1="130" y1="130" x2="182" y2="130"/><line x1="182" y1="130" x2="225" y2="108"/><line x1="182" y1="130" x2="225" y2="152"/><line x1="130" y1="130" x2="130" y2="92"/><line x1="78" y1="130" x2="52" y2="108"/><line x1="78" y1="130" x2="52" y2="152"/><line x1="78" y1="130" x2="78" y2="168"/><line x1="225" y1="108" x2="258" y2="92"/></g><circle cx="78" cy="130" r="13" fill="#1f2937"/><circle cx="130" cy="130" r="13" fill="#1f2937"/><circle cx="182" cy="130" r="13" fill="#1f2937"/><circle cx="225" cy="108" r="11" fill="#dc2626"/><circle cx="225" cy="152" r="11" fill="#dc2626"/><circle cx="130" cy="92" r="11" fill="#dc2626"/><circle cx="52" cy="108" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="52" cy="152" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="78" cy="168" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="130" cy="78" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="258" cy="92" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="206" cy="124" r="8" fill="#fff" stroke="#94a3b8"/></g><!-- B: C2H4O2 (acetic acid, wrong: 2 C, 2 O) --><g><rect x="320" y="58" width="280" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="334" y="78" font-size="12" font-weight="800" fill="#0f172a">B</text><text x="460" y="78" font-size="9" text-anchor="middle" fill="#64748b">2 C · 4 H · 2 O</text><g stroke="#475569" stroke-width="2"><line x1="410" y1="130" x2="470" y2="130"/><line x1="470" y1="130" x2="515" y2="105"/><line x1="470" y1="130" x2="515" y2="155"/><line x1="410" y1="130" x2="380" y2="105"/><line x1="410" y1="130" x2="380" y2="155"/><line x1="410" y1="130" x2="410" y2="170"/><line x1="515" y1="105" x2="550" y2="90"/></g><circle cx="410" cy="130" r="13" fill="#1f2937"/><circle cx="470" cy="130" r="13" fill="#1f2937"/><circle cx="515" cy="105" r="11" fill="#dc2626"/><circle cx="515" cy="155" r="11" fill="#dc2626"/><circle cx="380" cy="105" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="380" cy="155" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="410" cy="170" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="550" cy="90" r="8" fill="#fff" stroke="#94a3b8"/></g><!-- C: C3H6O (propanal, wrong: 1 O) --><g><rect x="20" y="200" width="280" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="34" y="220" font-size="12" font-weight="800" fill="#0f172a">C</text><text x="160" y="220" font-size="9" text-anchor="middle" fill="#64748b">3 C · 6 H · 1 O</text><g stroke="#475569" stroke-width="2"><line x1="75" y1="275" x2="130" y2="275"/><line x1="130" y1="275" x2="185" y2="275"/><line x1="185" y1="275" x2="230" y2="252"/><line x1="75" y1="275" x2="50" y2="252"/><line x1="75" y1="275" x2="50" y2="298"/><line x1="75" y1="275" x2="100" y2="305"/><line x1="130" y1="275" x2="115" y2="305"/><line x1="130" y1="275" x2="145" y2="305"/><line x1="185" y1="275" x2="185" y2="308"/></g><circle cx="75" cy="275" r="13" fill="#1f2937"/><circle cx="130" cy="275" r="13" fill="#1f2937"/><circle cx="185" cy="275" r="13" fill="#1f2937"/><circle cx="230" cy="252" r="11" fill="#dc2626"/><circle cx="50" cy="252" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="50" cy="298" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="100" cy="305" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="115" cy="305" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="145" cy="305" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="185" cy="308" r="8" fill="#fff" stroke="#94a3b8"/></g><!-- D: C3H4O2 (acrylic acid, wrong: 4 H, 2 O) --><g><rect x="320" y="200" width="280" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="334" y="220" font-size="12" font-weight="800" fill="#0f172a">D</text><text x="460" y="220" font-size="9" text-anchor="middle" fill="#64748b">3 C · 4 H · 2 O</text><g stroke="#475569" stroke-width="2"><line x1="360" y1="275" x2="410" y2="271"/><line x1="360" y1="279" x2="410" y2="275"/><line x1="410" y1="273" x2="460" y2="273"/><line x1="460" y1="273" x2="505" y2="250"/><line x1="460" y1="273" x2="505" y2="296"/><line x1="505" y1="250" x2="540" y2="236"/><line x1="360" y1="277" x2="332" y2="252"/><line x1="360" y1="277" x2="332" y2="300"/><line x1="410" y1="273" x2="410" y2="310"/></g><circle cx="360" cy="277" r="13" fill="#1f2937"/><circle cx="410" cy="273" r="13" fill="#1f2937"/><circle cx="460" cy="273" r="13" fill="#1f2937"/><circle cx="505" cy="250" r="11" fill="#dc2626"/><circle cx="505" cy="296" r="11" fill="#dc2626"/><circle cx="332" cy="252" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="332" cy="300" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="410" cy="310" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="540" cy="236" r="8" fill="#fff" stroke="#94a3b8"/></g></svg>',
          },
          caption: 'Four candidate ball-and-stick models (A–D). Lactic acid is C₃H₆O₃ (CH₃–CH(OH)–COOH): exactly 3 carbon, 6 hydrogen and 3 oxygen atoms. Only model A has 3 C, 6 H and 3 O.',
        },
      },
      {
        label: 'e',
        text: 'The conservator wants to find the most acidic H₂SO₄ concentration for removing carbonate deposits. **Select** the most acidic option from the list below.',
        marks: 1,
        ph: 'Most acidic = lowest pH = H₂SO₄ (pH = 0.5)',
        widget: 'radio_select',
        widgetOptions: ['H₂SO₄ (pH = 3.0)', 'H₂SO₄ (pH = 0.5)', 'H₂SO₄ (pH = 2.0)', 'H₂SO₄ (pH = 1.5)'],
      },
      {
        label: 'f',
        text: 'The conservator added HCl to water for a test reaction. Before adding HCl the temperature was 25°C; after dissolving it was 42°C.\n\n**Measure** the temperature after the HCl was added and **calculate** the temperature change.',
        marks: 2,
        ph: 'Temperature after = 42°C; temperature change = +17°C',
      },
      {
        label: 'g',
        text: 'Using your answer from part (f), **state** the type of reaction when HCl dissolves in water.',
        marks: 1,
        ph: 'Exothermic (temperature increased)',
      },
      {
        label: 'h',
        text: 'After the lactic acid cleaning is complete, the excess acid is neutralised using magnesium hydroxide Mg(OH)₂. Select the options to **complete** the balanced equation:\n\n[?] HCl + [?] Mg(OH)₂ → [?] [?] + [?] H₂O',
        marks: 4,
        ph: '2HCl + Mg(OH)₂ → 1MgCl₂ + 2H₂O; blanks: 2, 1, MgCl₂, 2',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', 'MgCl₂', 'MgCl', 'Mg(OH)₂', 'HCl'],
      },
    ],
  },

  // ── Q3 (6 marks, Crit C/D) — NaOCl wound cleaning ───────────────────────
  {
    id: 3,
    crit: 'C',
    type: 'extended',
    topic: 'NaOCl hazards, Lewis structures & disinfectant effectiveness',
    marks: 6,
    stem: 'Sodium hypochlorite (NaOCl) is a common disinfectant used in hospitals to clean wounds and surfaces. It must be diluted carefully before use as concentrated NaOCl is corrosive. NaOCl kills bacteria by releasing active chlorine that oxidises bacterial cell walls. Hospitals compare a one-step and a two-step disinfection process for medical equipment.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Bacteria remaining during disinfection',
        xAxis: { label: 'Time / hours', min: 0, max: 10, tick: 2 },
        yAxis: { label: 'Bacteria remaining / %', min: 0, max: 100, tick: 20 },
        xLabel: 'Time / hours',
        yLabel: 'Bacteria remaining / %',
        options: [
          {
            label: 'One-step process',
            color: 'orange',
            points: [[0, 100], [1, 32], [2, 10], [4, 5], [6, 4], [8, 3.5], [10, 3]],
          },
          {
            label: 'Two-step process',
            color: 'teal',
            points: [[0, 100], [1, 18], [2, 6], [4, 2.5], [6, 1.5], [8, 1], [10, 0.6]],
          },
        ],
        note: 'Drag the cursor along a curve to read the % bacteria remaining at any time. The two-step process reaches 1% (99% removed) at about 8 hours.',
      },
      caption: 'Percentage of bacteria remaining on medical equipment over time for the one-step and two-step disinfection processes.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Concentrated NaOCl damages skin and tissue. **Select** which of the following hazard symbols you would expect to find on a bottle of concentrated NaOCl.',
        marks: 1,
        ph: 'NaOCl concentrated damages skin/tissue = corrosive — select symbol A',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="180" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Hazard pictograms — which belongs on a bottle of concentrated NaOCl?</text><!-- A corrosive (correct) --><g><polygon points="70,50 110,90 70,130 30,90" fill="#ffffff" stroke="#16a34a" stroke-width="5"/><path d="M52 82 h12 l3 8 h-18 Z" fill="#334155"/><path d="M76 82 h12 l-3 8 h-6 Z" fill="#334155"/><line x1="60" y1="98" x2="60" y2="108" stroke="#334155" stroke-width="2"/><line x1="82" y1="96" x2="82" y2="106" stroke="#334155" stroke-width="2"/><rect x="48" y="108" width="44" height="4" fill="#334155"/><text x="70" y="152" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">A</text><text x="70" y="168" font-size="9" text-anchor="middle" fill="#64748b">corrosive</text></g><!-- B flammable --><g><polygon points="200,50 240,90 200,130 160,90" fill="#ffffff" stroke="#dc2626" stroke-width="5"/><path d="M200 70 q-12 16 0 32 q12 -14 0 -32 Z" fill="#f97316"/><path d="M200 78 q-7 10 0 22 q7 -9 0 -22 Z" fill="#fbbf24"/><text x="200" y="152" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">B</text><text x="200" y="168" font-size="9" text-anchor="middle" fill="#64748b">flammable</text></g><!-- C oxidiser (flame over circle) --><g><polygon points="330,50 370,90 330,130 290,90" fill="#ffffff" stroke="#dc2626" stroke-width="5"/><circle cx="330" cy="100" r="13" fill="none" stroke="#334155" stroke-width="3"/><path d="M330 70 q-10 12 0 24 q10 -10 0 -24 Z" fill="#f97316"/><text x="330" y="152" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">C</text><text x="330" y="168" font-size="9" text-anchor="middle" fill="#64748b">oxidiser</text></g><!-- D toxic skull --><g><polygon points="460,50 500,90 460,130 420,90" fill="#ffffff" stroke="#dc2626" stroke-width="5"/><circle cx="460" cy="88" r="13" fill="#334155"/><circle cx="455" cy="86" r="3" fill="#fff"/><circle cx="465" cy="86" r="3" fill="#fff"/><rect x="452" y="100" width="16" height="6" rx="2" fill="#334155"/><line x1="446" y1="112" x2="474" y2="118" stroke="#334155" stroke-width="3"/><line x1="474" y1="112" x2="446" y2="118" stroke="#334155" stroke-width="3"/><text x="460" y="152" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">D</text><text x="460" y="168" font-size="9" text-anchor="middle" fill="#64748b">toxic</text></g></svg>',
          },
          caption: 'Four hazard pictograms (A corrosive, B flammable, C oxidiser, D toxic). Concentrated sodium hypochlorite damages skin and tissue, so the corrosive symbol (A) applies.',
        },
      },
      {
        label: 'b',
        text: '**Select** which of the following diagrams represents the Lewis structure (electron dot or dot cross diagram) of HCl.',
        marks: 1,
        ph: 'HCl = H–Cl single bond with three lone pairs on Cl — select C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Which dot-and-cross diagram is HCl (H–Cl)?</text><text x="300" y="38" font-size="9.5" text-anchor="middle" fill="#64748b">HCl: 1 shared pair (H–Cl bond) + 3 lone pairs on Cl. H needs just 1 shared pair.</text><!-- A wrong: H-Cl but no lone pairs on Cl --><g><rect x="20" y="52" width="270" height="110" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="34" y="72" font-size="12" font-weight="800" fill="#0f172a">A</text><g font-size="15" fill="#0f172a" text-anchor="middle"><text x="120" y="118">H</text><text x="190" y="118">Cl</text></g><g stroke="#334155" stroke-width="1.6"><line x1="134" y1="113" x2="176" y2="113"/></g><text x="155" y="150" font-size="9" text-anchor="middle" fill="#64748b">no lone pairs shown on Cl</text></g><!-- B wrong: H=Cl double bond --><g><rect x="310" y="52" width="270" height="110" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="324" y="72" font-size="12" font-weight="800" fill="#0f172a">B</text><g font-size="15" fill="#0f172a" text-anchor="middle"><text x="410" y="118">H</text><text x="480" y="118">Cl</text></g><g stroke="#334155" stroke-width="1.6"><line x1="424" y1="109" x2="466" y2="109"/><line x1="424" y1="117" x2="466" y2="117"/></g><g fill="#dc2626"><circle cx="498" cy="100" r="2.4"/><circle cx="510" cy="100" r="2.4"/><circle cx="498" cy="126" r="2.4"/><circle cx="510" cy="126" r="2.4"/></g><text x="455" y="150" font-size="9" text-anchor="middle" fill="#64748b">double bond (incorrect for HCl)</text></g><!-- C correct: H-Cl single bond, 3 lone pairs on Cl --><g><rect x="20" y="178" width="270" height="115" rx="8" fill="#ecfdf5" stroke="#34d399"/><text x="34" y="198" font-size="12" font-weight="800" fill="#0f172a">C</text><g font-size="15" fill="#0f172a" text-anchor="middle"><text x="120" y="244">H</text><text x="190" y="244">Cl</text></g><g stroke="#334155" stroke-width="1.6"><line x1="134" y1="239" x2="176" y2="239"/></g><g fill="#dc2626"><circle cx="206" cy="226" r="2.4"/><circle cx="218" cy="226" r="2.4"/><circle cx="206" cy="252" r="2.4"/><circle cx="218" cy="252" r="2.4"/><circle cx="224" cy="233" r="2.4"/><circle cx="224" cy="245" r="2.4"/></g><text x="155" y="280" font-size="9" text-anchor="middle" fill="#64748b">1 bond + 3 lone pairs on Cl</text></g><!-- D wrong: Cl-Cl (chlorine molecule) --><g><rect x="310" y="178" width="270" height="115" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="324" y="198" font-size="12" font-weight="800" fill="#0f172a">D</text><g font-size="15" fill="#0f172a" text-anchor="middle"><text x="420" y="244">Cl</text><text x="500" y="244">Cl</text></g><g stroke="#334155" stroke-width="1.6"><line x1="438" y1="239" x2="482" y2="239"/></g><g fill="#dc2626"><circle cx="398" cy="232" r="2.4"/><circle cx="398" cy="246" r="2.4"/><circle cx="412" cy="226" r="2.4"/><circle cx="424" cy="226" r="2.4"/><circle cx="520" cy="232" r="2.4"/><circle cx="520" cy="246" r="2.4"/><circle cx="496" cy="226" r="2.4"/><circle cx="508" cy="226" r="2.4"/></g><text x="455" y="280" font-size="9" text-anchor="middle" fill="#64748b">this is Cl₂ (two chlorine atoms)</text></g></svg>',
          },
          caption: 'Four candidate Lewis (dot-and-cross) diagrams. In HCl, hydrogen and chlorine share one pair of electrons (the H–Cl bond) and chlorine carries three lone pairs — shown in diagram C.',
        },
      },
      {
        label: 'c',
        text: 'A researcher compared two disinfection processes on medical instruments. Results are shown in the graph.\n\n**State** the percentage of bacteria remaining on equipment after using a one-step disinfection process for 2 hours.',
        marks: 1,
        ph: 'Read graph at 2h for one-step: approximately 8–12% bacteria remaining',
      },
      {
        label: 'd',
        text: '**State** the time required to remove 99% of bacteria using the two-step process.',
        marks: 1,
        ph: 'Read graph: two-step reaches 1% remaining at ≈ 8 hours',
      },
      {
        label: 'e',
        text: 'Use the data in the graph to **justify** which process and time you would recommend for disinfecting medical equipment.',
        marks: 2,
        ph: 'Recommend two-step; removes more bacteria; cite specific data values from graph',
      },
    ],
  },

  // ── Q4 (18 marks, Crit A/B/C) — MnO₂ catalyst H₂O₂ decomposition ─────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Decomposition, hypothesis, variables & data analysis — MnO₂ variants on H₂O₂',
    marks: 18,
    stem: 'Manganese dioxide (MnO₂) is one of the most effective catalysts for H₂O₂ decomposition. Researchers want to compare different forms and concentrations of MnO₂ to find the most effective variant:\n\n2H₂O₂(aq) → 2H₂O(l) + O₂(g)\n\nThe research team has MnO₂ in powder, granule and solution forms. They want to find which gives the greatest rate of O₂ production.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'O₂ collected in 30 s for five forms of MnO₂ catalyst',
        mode: 'bars',
        variable: 'Form of MnO₂ catalyst (independent variable)',
        metric: 'Volume of O₂ collected in 30 s / cm³',
        bars: [
          { label: 'fine powder', value: 50 },
          { label: 'coarse powder', value: 41 },
          { label: 'small granules', value: 33 },
          { label: 'large granules', value: 24 },
          { label: 'solution', value: 46 },
        ],
        note: 'The taller the bar, the more O₂ produced in the fixed 30 s window — and the faster the catalysed reaction.',
      },
      caption: 'Volume of oxygen collected in a eudiometer over 30 s for each form of MnO₂ catalyst (same mass of catalyst and same H₂O₂ each time).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** how you would test that oxygen was produced in the decomposition reaction.',
        marks: 2,
        ph: 'Collect gas in test tube; hold glowing splint at mouth — it relights',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis to test which particle size of MnO₂ (powder or granule) will give the greatest increase in rate of reaction. You should use collision theory in your answer.',
        marks: 3,
        ph: 'If MnO₂ is powder → larger surface area → more frequent collisions with H₂O₂ → faster rate',
      },
      {
        label: 'c',
        text: 'A researcher compared five forms of MnO₂ catalyst, measuring O₂ volume collected in a eudiometer over 30 seconds.\n\n**Identify** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nControl variable one:\n\nControl variable two:',
        marks: 4,
        ph: 'IV=form/type of MnO₂; DV=volume O₂ in 30s; CV1=mass MnO₂; CV2=volume/concentration H₂O₂',
      },
      {
        label: 'd',
        text: 'The researcher formulated the hypothesis:\n\n*"The best MnO₂ form will produce the darkest colour change because the most oxygen is produced."*\n\n**State** and **justify** whether this hypothesis is valid.',
        marks: 3,
        ph: 'Invalid: colour change of MnO₂ does not measure rate; O₂ volume over time is the valid measure',
      },
      {
        label: 'e',
        text: 'A second researcher measured O₂ volume after 30 s for three trials:\n\n| Volume from trial one / cm³ | Volume from trial two / cm³ | Volume from trial three / cm³ |\n|---|---|---|\n| 48 | 50 | 52 |\n\n**Calculate** the average volume of oxygen collected and **determine** the rate of oxygen production.',
        marks: 3,
        ph: 'Average = (48+50+52)/3 = 50 cm³; rate = 50÷30 = 1.67 cm³ s⁻¹',
      },
      {
        label: 'f',
        text: 'The researcher carried out a fourth trial and collected 65 cm³ of O₂. The equipment for trial 4 is shown below.\n\n**Suggest** two reasons why the result for trial 4 was not consistent with the previous trials. **Justify** your answer.',
        marks: 3,
        ph: 'Bung not sealed / extra H₂O₂ added / time exceeded 30s; justification: additional O₂ captured',
      },
    ],
  },

  // ── Q5 (16 marks, Crit B) — Design: MnO₂ form comparison ─────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — H₂O₂ decomposition rate with 5 MnO₂ forms',
    marks: 16,
    stem: 'The researchers decided to compare five forms of MnO₂ catalyst: fine powder, coarse powder, small granules, large granules, and MnO₂ solution.\n\n2H₂O₂(aq) → 2H₂O(l) + O₂(g)\n\nYou are provided with a eudiometer, stopwatch, five forms of MnO₂, and a 1.0 mol/dm³ H₂O₂ solution. The independent variable in your investigation is the form of MnO₂ used. One control variable is the concentration of hydrogen peroxide.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Investigation element', 'Detail provided'],
        rows: [
          ['Independent variable', 'Form of MnO₂ (5 levels: fine powder, coarse powder, small granules, large granules, solution)'],
          ['Dependent variable', 'Volume of O₂ collected in a fixed time (rate of decomposition)'],
          ['Fixed (control) variable', 'Concentration of H₂O₂ = 1.0 mol/dm³'],
          ['Equipment provided', 'Eudiometer, stopwatch, five forms of MnO₂, 1.0 mol/dm³ H₂O₂'],
          ['Reaction', '2H₂O₂(aq) → 2H₂O(l) + O₂(g)'],
        ],
      },
      caption: 'The variables and apparatus supplied for the investigation you must design.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to determine the rate of H₂O₂ decomposition with each MnO₂ form. In your answer, you should include:\n- the independent variable, the dependent variable and one other control variable\n- a list of additional equipment you will use\n- details of the method to allow you to collect sufficient data\n- how you will ensure that your method is safe.',
        marks: 16,
        ph: 'Variables; equipment (balance, stopwatch); method (3 repeats, same mass catalyst, 30s window); safety (H₂O₂ oxidiser/irritant)',
      },
    ],
  },

  // ── Q6 (11 marks, Crit C) — Hair dye colorimetry ─────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data interpretation, graphing & validity — hair dye oxidant concentration',
    marks: 11,
    stem: 'Hair dyes contain an oxidant (usually H₂O₂) which opens hair cuticles and allows colour pigment to bond. The concentration of oxidant affects how much the cuticle opens — too low and colour does not absorb, too high and hair is damaged. Quality control labs use a spectrophotometer to measure oxidant concentration in dye batches.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Spectrophotometer calibration: signal vs oxidant concentration',
        xLabel: 'Oxidant concentration',
        yLabel: 'Signal strength',
        xUnit: '%',
        xMin: 0,
        xMax: 10,
        yMin: 0,
        yMax: 5000,
        xStep: 1,
        yStep: 1000,
        dataPoints: [
          { x: 1, y: 400 },
          { x: 2, y: 1100 },
          { x: 3, y: 1900 },
          { x: 4, y: 2800 },
          { x: 6, y: 3950 },
          { x: 8, y: 4350 },
          { x: 10, y: 4800 },
        ],
      },
      caption: 'Calibration curve from the part (b) data. The signal rises steeply at low concentration then levels off; read between 4% (2800) and 6% (3950) to predict the 5% value.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Interpret** these results and **explain** them using scientific reasoning.',
        marks: 3,
        ph: 'Higher oxidant concentration → more cuticles opened → more pigment absorbed → stronger colour; levels off at high concentration',
      },
      {
        label: 'b',
        text: 'The results for different known oxidant concentrations are shown in the table below.\n\n| Oxidant concentration / % | Signal strength |\n|---|---|\n| 1 | 400 |\n| 2 | 1100 |\n| 3 | 1900 |\n| 4 | 2800 |\n| 6 | 3950 |\n| 8 | 4350 |\n| 10 | 4800 |\n\n**Present** this data using a graph. Label the axes and add a title.',
        marks: 5,
        ph: 'Scatter/line graph; x=oxidant conc (%); y=signal strength; title; scale; 5+ points correct',
      },
      {
        label: 'c',
        text: 'Use your graph in part (b) to **predict** the signal output expected for a 5% oxidant solution.',
        marks: 1,
        ph: 'Interpolate between 4% (2800) and 6% (3950) → approximately 3375 ± 200',
      },
      {
        label: 'd',
        text: 'A cosmetics supplier provided six batches of oxidant solution. The average signal output was 2650. The lab needs to confirm no individual batch exceeds 4% concentration.\n\n**Comment** on the validity of using an average.',
        marks: 2,
        ph: 'Not valid: average does not show individual batch signals; one batch could be above 4% while average appears below',
      },
    ],
  },

  // ── Q7 (9 marks, Crit A/D) — Parchment vs coated paper properties ─────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Parchment material properties & long-term cultural preservation',
    marks: 9,
    stem: 'Parchment (made from animal skin) was used for centuries to record legal documents, religious texts and maps. Medieval parchment survives in archives around the world. Modern archives use acid-free paper for documents intended to last more than 200 years. Some documents are also coated with thin polymeric films for extra protection.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'Parchment (animal skin)', 'Acid-free paper'],
        rows: [
          ['Main material', 'collagen from animal skin', 'cellulose, pH-neutralised'],
          ['Flexibility', 'high — rolls into a scroll without cracking', 'moderate — folds but creases'],
          ['Lifespan (typical)', '1000+ years if kept dry', '200+ years (designed)'],
          ['Sensitivity to humidity', 'high — swells and cockles', 'low — stable when buffered'],
          ['Relative cost', 'high', 'low'],
          ['Thickness', 'thick, robust', 'thin'],
        ],
      },
      caption: 'Comparison of parchment and acid-free paper for long-term document preservation.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** one property of parchment that allows it to be rolled into a scroll for storage.',
        marks: 1,
        ph: 'Flexible / malleable / resilient — can bend without cracking',
      },
      {
        label: 'b',
        text: '**Suggest** a reason why some archive papers are coated with a thin polymeric film.',
        marks: 1,
        ph: 'Waterproofing / protection from humidity and air pollutants / physical strength',
      },
      {
        label: 'c',
        text: 'UV ozone (O₃) treatment is an alternative to chlorine (Cl₂) for bleaching archive paper. **State** a reason why conservators would choose O₃ over Cl₂ for archive paper restoration.',
        marks: 1,
        ph: 'O₃ produces O₂ which is non-toxic; Cl₂ produces toxic by-products that could degrade paper fibres',
      },
      {
        label: 'd',
        text: 'A researcher argues that medieval parchment is superior to acid-free paper for preserving historical documents. Use information and knowledge from your wider MYP studies to **discuss** this suggestion. In your answer, you should include:\n- the advantages and disadvantages of parchment\n- the advantages and disadvantages of acid-free paper\n- a conclusion, with justification, on which is best for long-term preservation.',
        marks: 6,
        ph: 'Parchment: adv=resilient/animal collagen; disadv=expensive/susceptible to humidity. Acid-free: adv=cheap/stable pH; disadv=thinner/shorter lifespan. Justified conclusion.',
      },
    ],
  },

  // ── Q8 (10 marks, Crit D) — Sugarcane bagasse vs tree paper implications ──
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Environmental & economic implications — sugarcane bagasse vs tree paper',
    marks: 10,
    stem: 'Sugarcane bagasse is the fibrous residue left after sugarcane juice is extracted. It is an agricultural by-product that can be processed into paper. The infographic below compares "bagasse-to-paper" and "tree-to-paper" production processes.',
    artefact: {
      component: 'InfoGraphicPanel',
      data: {
        title: 'Bagasse-to-paper vs tree-to-paper',
        intro: 'Two routes to make paper, compared on raw material, environment and economy. Tap a panel to focus it.',
        layout: 'grid',
        blocks: [
          {
            icon: '🌾',
            heading: 'Bagasse-to-paper',
            items: [
              'Raw material: sugarcane bagasse (a waste by-product)',
              'No new trees felled — avoids deforestation',
              'Re-uses material that is often burned otherwise',
              'Needs new processing plants and supply chains',
              'Limited to sugarcane-growing regions',
            ],
          },
          {
            icon: '🌳',
            heading: 'Tree-to-paper',
            items: [
              'Raw material: timber from forests/plantations',
              'Causes deforestation and habitat loss',
              'Trees take many years to regrow',
              'Established, large-scale industry and jobs',
              'Higher energy and water use in pulping',
            ],
          },
          {
            icon: '⚖️',
            heading: 'Decide',
            note: 'Weigh environmental impact against economic factors to judge which process is best for paper production.',
          },
        ],
      },
      caption: 'Infographic comparing the bagasse-to-paper and tree-to-paper production processes.',
    },
    tasks: [
      {
        label: '',
        text: 'Using the infographic and knowledge from your wider MYP studies, **discuss** the implications of both types of paper production. In your answer, you should include:\n- a comparison of the impacts on the environment\n- a comparison of the impacts on the economy\n- your conclusion, with justification, on which paper production process is best.',
        marks: 10,
        ph: 'Environment: bagasse=uses waste/no deforestation vs tree=deforestation/habitat loss; Economy: bagasse=new industry vs tree=established; Justified conclusion',
      },
    ],
  },

  // ── Q9 (6 marks, Crit D) — Cave paintings vs electronic archives ──────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Cultural advantages — cave art preservation vs electronic archives',
    marks: 6,
    stem: "Prehistoric cave paintings represent some of humanity's earliest cultural expression. Conservators are increasingly digitising these images and storing them in cloud-based archives.",
    artefact: {
      component: 'InfoGraphicPanel',
      data: {
        title: 'Preserving cave art: physical vs digital',
        intro: 'Cultural advantages and disadvantages of keeping cave paintings in place versus storing them as digital archives. Tap a panel to focus it.',
        layout: 'grid',
        blocks: [
          {
            icon: '🪨',
            heading: 'Physical preservation (in the cave)',
            items: [
              'Authentic, original, irreplaceable artefact',
              'Tangible link to the culture and place that made it',
              'Fragile — damaged by humidity, light and visitors',
              'Access is limited and location-bound',
            ],
          },
          {
            icon: '☁️',
            heading: 'Digital / cloud archive',
            items: [
              'Shared globally — anyone can view and study it',
              'Searchable and easily copied or restored',
              'Depends on technology and power to access',
              'Loses the physical, in-place cultural experience',
            ],
          },
        ],
      },
      caption: 'Cultural advantages and disadvantages of preserving cave paintings physically versus through electronic digital archiving.',
    },
    tasks: [
      {
        label: '',
        text: '**Suggest** and **justify** the **cultural** advantages and disadvantages of preserving cave paintings physically and through electronic digital archiving.',
        marks: 6,
        ph: 'Physical: authentic/tangible/irreplaceable; disadv=fragile/access limited. Digital: global sharing/searchable; disadv=technology dependence/cultural gap. Justified conclusion.',
      },
    ],
  },
]
