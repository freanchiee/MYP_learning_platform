import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2022',
  subject: 'Chemistry',
  session: 'May',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (9 marks, Crit A) — Ancient mirrors, compounds, isotopes, hydrates ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, compounds & moles — ancient mirrors',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 9,
    stem: 'Ancient objects can provide information about human progress. The first mirrors were made from polished metals such as gold. Archaeologists also found mirrors made from polished volcanic rock (obsidian). Samples of the volcanic rock were found to contain iron oxide, aluminium oxide and traces of an unknown element X. Some scientists believe the first man-made mirror was a slab of selenite found in Egypt. Selenite is hydrated calcium sulfate, CaSO₄·2H₂O. Hydrated salts are ionic compounds with a constant number of water molecules as part of their structure.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="250" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Elements found in the ancient mirrors</text><g><rect x="40" y="44" width="68" height="50" fill="#fff7ed" stroke="#5b6b78"/><text x="74" y="58" font-size="8" text-anchor="middle" fill="#64748b">Group 13</text><text x="74" y="78" font-size="18" font-weight="700" text-anchor="middle" fill="#e8590c">Al</text><text x="74" y="90" font-size="8" text-anchor="middle" fill="#64748b">aluminium · 13</text></g><g><rect x="124" y="44" width="68" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="158" y="58" font-size="8" text-anchor="middle" fill="#64748b">Group 16</text><text x="158" y="78" font-size="18" font-weight="700" text-anchor="middle" fill="#0b7285">O</text><text x="158" y="90" font-size="8" text-anchor="middle" fill="#64748b">oxygen · 8</text></g><g><rect x="208" y="44" width="68" height="50" fill="#fef3c7" stroke="#5b6b78"/><text x="242" y="58" font-size="8" text-anchor="middle" fill="#64748b">Group 17</text><text x="242" y="78" font-size="18" font-weight="700" text-anchor="middle" fill="#b45309">X</text><text x="242" y="90" font-size="8" text-anchor="middle" fill="#64748b">2, 8, 7</text></g><g><rect x="292" y="44" width="68" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="326" y="58" font-size="8" text-anchor="middle" fill="#64748b">Group 2</text><text x="326" y="78" font-size="18" font-weight="700" text-anchor="middle" fill="#b8860b">Ca</text><text x="326" y="90" font-size="8" text-anchor="middle" fill="#64748b">calcium · 20</text></g><g><rect x="376" y="44" width="68" height="50" fill="#fdecef" stroke="#5b6b78"/><text x="410" y="58" font-size="8" text-anchor="middle" fill="#64748b">period 4</text><text x="410" y="78" font-size="18" font-weight="700" text-anchor="middle" fill="#c2255c">Fe</text><text x="410" y="90" font-size="8" text-anchor="middle" fill="#64748b">iron · 26</text></g><g><rect x="460" y="44" width="68" height="50" fill="#fff7ed" stroke="#5b6b78"/><text x="494" y="58" font-size="8" text-anchor="middle" fill="#64748b">period 6</text><text x="494" y="78" font-size="18" font-weight="700" text-anchor="middle" fill="#9c6b00">Au</text><text x="494" y="90" font-size="8" text-anchor="middle" fill="#64748b">gold · 79</text></g><line x1="40" y1="120" x2="560" y2="120" stroke="#e2e8f0" stroke-width="1"/><text x="40" y="142" font-size="11" fill="#475569">Element X: electron structure 2, 8, 7 → 17 electrons → 17 protons.</text><text x="40" y="160" font-size="11" fill="#475569">Outer shell holds 7 electrons → Group 17 (halogens).</text><text x="40" y="178" font-size="11" fill="#475569">Selenite = hydrated calcium sulfate, CaSO₄·2H₂O.</text><text x="40" y="200" font-size="10" fill="#94a3ad">Mass number = number of protons + number of neutrons.</text><text x="40" y="216" font-size="10" fill="#94a3ad">M(H₂O) = 18 g mol⁻¹; each formula unit traps 2 H₂O molecules.</text></svg>',
      },
      caption: 'The elements detected in the obsidian and selenite mirrors. Use element X’s electron structure (2, 8, 7) to identify it and to work out its isotope mass number.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** a reason for the perfect condition of the gold mirrors found in ancient Egypt.',
        marks: 1,
        ph: 'Gold is unreactive — does not corrode or tarnish',
        widget: 'radio_select',
        widgetOptions: ['Gold is conductive', 'Gold is ductile', 'Gold is malleable', 'Gold is unreactive'],
      },
      {
        label: 'b',
        text: 'Two compounds present in the volcanic rock are listed below. **Write down** the missing name and formula.\n\n| Name | Formula |\n|---|---|\n| [blank] | Al₂O₃ |\n| Iron oxide | [blank] |',
        marks: 2,
        ph: 'Aluminium oxide; Fe₂O₃',
        widget: 'fill_blank',
        widgetOptions: ['Aluminium oxide', 'Aluminium(III) oxide', 'Iron oxide', 'Fe₂O₃', 'Al₂O₃', 'FeO', 'Fe₃O₄'],
      },
      {
        label: 'c',
        text: 'Samples of the volcanic rock were found to contain traces of an unknown element X. The electron structure of element X is 2, 8, 7.\n\n**Identify** element X.',
        marks: 1,
        ph: 'Chlorine (Cl) — 17 electrons, Group 7',
      },
      {
        label: 'd',
        text: 'Analysis showed that one isotope of element X had 20 neutrons. **Determine** the mass number of this isotope.',
        marks: 2,
        ph: 'Protons = 17; mass number = 17 + 20 = 37',
      },
      {
        label: 'e',
        text: 'The formula CaSO₄·2H₂O means that one mole of CaSO₄ contains two moles of water molecules as part of its structure. **Calculate** the mass of water present in 5 moles of the hydrated salt.',
        marks: 3,
        ph: '5 mol × 2 = 10 mol H₂O; molar mass H₂O = 18 g/mol; 10 × 18 = 180 g',
      },
    ],
  },

  // ── Q2 (15 marks, Crit A) — Stained glass, acrylic acid, HF etching ────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Transition metals, moles, molecular models & acids — glass art',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 15,
    stem: 'Stained glass windows are one example of artwork using glass. The chemicals used to colour glass are mostly oxides of transition metals. Nowadays, most artists make stained glass using acrylic paint. The images below show some artwork using etched glass. Glass etching involves the use of hydrogen fluoride (HF), also known as hydrofluoric acid. Glass is a material that contains a mixture of compounds, such as silicon dioxide (SiO₂), sodium oxide (Na₂O) and calcium oxide (CaO), melted together at high temperatures.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="250" fill="#ffffff"/><text x="310" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Periodic table — metals used to colour glass</text><text x="60" y="44" font-size="11" font-weight="700" fill="#0b7285">Transition metals (block colours glass)</text><g font-size="9" text-anchor="middle"><rect x="60" y="52" width="56" height="44" fill="#e0f2fe" stroke="#5b6b78"/><text x="88" y="74" font-size="16" font-weight="700" fill="#0369a1">Cu</text><text x="88" y="90" fill="#64748b">copper · 29</text><rect x="120" y="52" width="56" height="44" fill="#e0f2fe" stroke="#5b6b78"/><text x="148" y="74" font-size="16" font-weight="700" fill="#0369a1">Fe</text><text x="148" y="90" fill="#64748b">iron · 26</text><rect x="180" y="52" width="56" height="44" fill="#e0f2fe" stroke="#5b6b78"/><text x="208" y="74" font-size="16" font-weight="700" fill="#0369a1">W</text><text x="208" y="90" fill="#64748b">tungsten · 74</text><rect x="240" y="52" width="56" height="44" fill="#fef9c3" stroke="#5b6b78"/><text x="268" y="74" font-size="16" font-weight="700" fill="#a16207">Au</text><text x="268" y="90" fill="#64748b">gold · 79</text></g><text x="380" y="44" font-size="11" font-weight="700" fill="#475569">Main-group elements in glass</text><g font-size="9" text-anchor="middle"><rect x="380" y="52" width="56" height="44" fill="#f1f5f9" stroke="#5b6b78"/><text x="408" y="66" font-size="7" fill="#64748b">Gp 1 · P3</text><text x="408" y="80" font-size="15" font-weight="700" fill="#334155">Na</text><rect x="440" y="52" width="56" height="44" fill="#dcfce7" stroke="#5b6b78"/><text x="468" y="66" font-size="7" fill="#16a34a">Gp 2 · P4</text><text x="468" y="80" font-size="15" font-weight="700" fill="#15803d">Ca</text><rect x="500" y="52" width="56" height="44" fill="#f1f5f9" stroke="#5b6b78"/><text x="528" y="66" font-size="7" fill="#64748b">Gp 14 · P3</text><text x="528" y="80" font-size="15" font-weight="700" fill="#334155">Si</text></g><line x1="60" y1="116" x2="560" y2="116" stroke="#e2e8f0"/><text x="60" y="138" font-size="11" fill="#475569">Transition metals (Cu, Fe, W, Au) give glass its colour; their oxides are the pigments.</text><text x="60" y="156" font-size="11" fill="#475569">Calcium (Ca) is the element in Group 2 and Period 4.</text><text x="60" y="174" font-size="11" fill="#475569">Glass = SiO₂ + Na₂O + CaO melted together.</text><text x="60" y="196" font-size="10" fill="#94a3ad">Group number = outer-shell electrons · Period number = number of electron shells.</text><text x="60" y="212" font-size="10" fill="#94a3ad">Etching acid HF neutralised by Ca(OH)₂: 2HF + Ca(OH)₂ → CaF₂ + 2H₂O.</text></svg>',
      },
      caption: 'Transition metals (Cu, Fe, W, Au) colour the glass; Na, Ca and Si form the glass itself. Use the table to identify a transition metal and the Group 2 / Period 4 element.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** one of the transition metals pictured in the periodic table, giving the name of the metal and its symbol.',
        marks: 1,
        ph: 'Copper and Cu / Tungsten and W / Gold and Au (any one)',
      },
      {
        label: 'b',
        text: '**Identify** the element in these compounds that is in group 2 and period 4.',
        marks: 1,
        ph: 'Calcium or Ca',
      },
      {
        label: 'c',
        text: 'A 35.0 g sample of commercial glass contains 26.3 g of SiO₂ and 3.4 g of CaO; the remainder is Na₂O. **Calculate** the number of moles of sodium oxide in the sample. Give your answer to two significant figures.',
        marks: 4,
        ph: 'Mass Na₂O = 35.0−26.3−3.4 = 5.3g; M(Na₂O) = 62g/mol; n = 5.3/62 = 0.085 mol',
      },
      {
        label: 'd',
        text: 'One of the components of acrylic paint is acrylic acid (IUPAC name: propenoic acid). The molecular formula is C₃H₄O₂.\n\nIn the following models, C atoms are black, H atoms are white and O atoms are red. **Select** the model showing acrylic acid.',
        marks: 1,
        ph: 'Select model B — correct structure for C₃H₄O₂ (CH₂=CH–COOH): 3 C, 4 H, 2 O',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="360" fill="#ffffff"/><text x="310" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four molecular models — which is acrylic acid, C₃H₄O₂?</text><text x="310" y="38" font-size="10" text-anchor="middle" fill="#64748b">C = black · H = white (outlined) · O = red. Count the atoms.</text><g font-size="9" fill="#475569"><circle cx="360" cy="44" r="6" fill="#1f2937" stroke="#111"/><text x="372" y="47">C</text><circle cx="402" cy="44" r="6" fill="#ffffff" stroke="#94a3b8"/><text x="414" y="47">H</text><circle cx="444" cy="44" r="6" fill="#dc2626" stroke="#991b1b"/><text x="456" y="47">O</text></g><!-- A: C2H4O2 (acetic acid, wrong: 2 C) --><g><rect x="20" y="58" width="280" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="34" y="78" font-size="12" font-weight="800" fill="#0f172a">A</text><text x="160" y="78" font-size="9" text-anchor="middle" fill="#64748b">2 C · 4 H · 2 O</text><g stroke="#475569" stroke-width="2"><line x1="110" y1="130" x2="170" y2="130"/><line x1="170" y1="130" x2="215" y2="105"/><line x1="170" y1="130" x2="215" y2="155"/><line x1="110" y1="130" x2="80" y2="105"/><line x1="110" y1="130" x2="80" y2="155"/><line x1="110" y1="130" x2="110" y2="170"/><line x1="215" y1="105" x2="250" y2="90"/></g><circle cx="110" cy="130" r="13" fill="#1f2937"/><circle cx="170" cy="130" r="13" fill="#1f2937"/><circle cx="215" cy="105" r="11" fill="#dc2626"/><circle cx="215" cy="155" r="11" fill="#dc2626"/><circle cx="80" cy="105" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="80" cy="155" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="110" cy="170" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="250" cy="90" r="8" fill="#fff" stroke="#94a3b8"/></g><!-- B: C3H4O2 acrylic acid CH2=CH-COOH (correct) --><g><rect x="320" y="58" width="280" height="130" rx="8" fill="#ecfdf5" stroke="#34d399"/><text x="334" y="78" font-size="12" font-weight="800" fill="#0f172a">B</text><text x="460" y="78" font-size="9" text-anchor="middle" fill="#64748b">3 C · 4 H · 2 O</text><g stroke="#475569" stroke-width="2"><line x1="360" y1="135" x2="410" y2="135"/><line x1="360" y1="131" x2="410" y2="131"/><line x1="410" y1="135" x2="460" y2="135"/><line x1="460" y1="135" x2="505" y2="112"/><line x1="460" y1="135" x2="505" y2="158"/><line x1="505" y1="112" x2="540" y2="98"/><line x1="360" y1="135" x2="332" y2="112"/><line x1="360" y1="135" x2="332" y2="158"/><line x1="410" y1="135" x2="410" y2="172"/></g><circle cx="360" cy="135" r="13" fill="#1f2937"/><circle cx="410" cy="135" r="13" fill="#1f2937"/><circle cx="460" cy="135" r="13" fill="#1f2937"/><circle cx="505" cy="112" r="11" fill="#dc2626"/><circle cx="505" cy="158" r="11" fill="#dc2626"/><circle cx="332" cy="112" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="332" cy="158" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="410" cy="172" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="540" cy="98" r="8" fill="#fff" stroke="#94a3b8"/></g><!-- C: C3H6O (propanal, wrong: 1 O, 6 H) --><g><rect x="20" y="200" width="280" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="34" y="220" font-size="12" font-weight="800" fill="#0f172a">C</text><text x="160" y="220" font-size="9" text-anchor="middle" fill="#64748b">3 C · 6 H · 1 O</text><g stroke="#475569" stroke-width="2"><line x1="75" y1="275" x2="130" y2="275"/><line x1="130" y1="275" x2="185" y2="275"/><line x1="185" y1="275" x2="230" y2="252"/><line x1="75" y1="275" x2="50" y2="252"/><line x1="75" y1="275" x2="50" y2="298"/><line x1="75" y1="275" x2="100" y2="305"/><line x1="130" y1="275" x2="115" y2="305"/><line x1="130" y1="275" x2="145" y2="305"/><line x1="185" y1="275" x2="185" y2="308"/></g><circle cx="75" cy="275" r="13" fill="#1f2937"/><circle cx="130" cy="275" r="13" fill="#1f2937"/><circle cx="185" cy="275" r="13" fill="#1f2937"/><circle cx="230" cy="252" r="11" fill="#dc2626"/><circle cx="50" cy="252" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="50" cy="298" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="100" cy="305" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="115" cy="305" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="145" cy="305" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="185" cy="308" r="8" fill="#fff" stroke="#94a3b8"/></g><!-- D: C3H8O3 (glycerol-like, wrong: 3 O) --><g><rect x="320" y="200" width="280" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="334" y="220" font-size="12" font-weight="800" fill="#0f172a">D</text><text x="460" y="220" font-size="9" text-anchor="middle" fill="#64748b">3 C · 5 H · 3 O</text><g stroke="#475569" stroke-width="2"><line x1="375" y1="275" x2="430" y2="275"/><line x1="430" y1="275" x2="485" y2="275"/><line x1="375" y1="275" x2="350" y2="250"/><line x1="430" y1="275" x2="430" y2="240"/><line x1="485" y1="275" x2="510" y2="250"/><line x1="375" y1="275" x2="360" y2="305"/><line x1="430" y1="275" x2="430" y2="308"/><line x1="485" y1="275" x2="500" y2="305"/></g><circle cx="375" cy="275" r="13" fill="#1f2937"/><circle cx="430" cy="275" r="13" fill="#1f2937"/><circle cx="485" cy="275" r="13" fill="#1f2937"/><circle cx="350" cy="250" r="11" fill="#dc2626"/><circle cx="430" cy="240" r="11" fill="#dc2626"/><circle cx="510" cy="250" r="11" fill="#dc2626"/><circle cx="360" cy="305" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="430" cy="308" r="8" fill="#fff" stroke="#94a3b8"/><circle cx="500" cy="305" r="8" fill="#fff" stroke="#94a3b8"/></g></svg>',
          },
          caption: 'Four candidate ball-and-stick models (A–D). Acrylic acid is C₃H₄O₂ (CH₂=CH–COOH): exactly 3 carbon, 4 hydrogen and 2 oxygen atoms with a C=C double bond and a –COOH group.',
        },
      },
      {
        label: 'e',
        text: 'The artist wants to work on a piece of glass. She knows that the best results are obtained with a specific pH. **Select** the most acidic chemical from the options below.',
        marks: 1,
        ph: 'Most acidic = lowest pH = HF (pH = 2.1)',
        widget: 'radio_select',
        widgetOptions: ['HF (pH = 4.5)', 'HF (pH = 3.5)', 'HF (pH = 3.2)', 'HF (pH = 2.1)'],
      },
      {
        label: 'f',
        text: 'The artist added HF to water. The diagram shows the temperature of the water before (25°C) and after adding HF.\n\nBefore adding the HF, the reading on the thermometer was 25°C. **Measure** the temperature after the HF was added and **calculate** the temperature change.',
        marks: 2,
        ph: 'Temperature after = 39°C; temperature change = +14°C',
        artefact: {
          component: 'ThermalSim',
          data: {
            title: 'Water temperature before and after adding HF',
            mode: 'thermometer',
            thermometers: [
              { label: 'Before', units: 'C', answer: 25 },
              { label: '?', units: 'C', answer: 39 },
            ],
          },
          caption: 'Read the "After" thermometer (click to magnify) and subtract the "Before" reading of 25 °C to find the temperature change.',
        },
      },
      {
        label: 'g',
        text: 'Using your answer from part (f), **state** the type of reaction when HF dissolves in water.',
        marks: 1,
        ph: 'Exothermic (temperature increased)',
      },
      {
        label: 'h',
        text: 'After the etching process is complete, the excess HF needs to be removed using an alkaline solution. Select the options to **complete** the balanced equation if HF was removed with calcium hydroxide Ca(OH)₂:\n\n[?] HF + Ca(OH)₂ → [?] [?] + [?] H₂O',
        marks: 4,
        ph: '2HF + Ca(OH)₂ → 1CaF₂ + 2H₂O; blanks: 2, 1, CaF₂, 2',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', 'CaF₂', 'CaCl₂', 'Ca(OH)₂', 'HF'],
      },
    ],
  },

  // ── Q3 (6 marks, Crit C/D) — H₂O₂ hazards & contact lens cleaning ─────────
  {
    id: 3,
    crit: 'C',
    type: 'extended',
    topic: 'H₂O₂ hazards, Lewis structures & contact lens bacteria removal',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 6,
    stem: 'Hydrogen peroxide (H₂O₂) has a number of uses which include household cleaning and cleaning wounds, removing stains, making hair colour lighter and as a high-power rocket fuel. H₂O₂ is commonly used to clean contact lenses. If the H₂O₂ is not fully removed after cleaning, it will cause irritation to the eyes. Contact lenses must be cleaned to remove any bacteria that may be attached to the surface. They can be cleaned in either a one-step or a two-step process.',
    artefact: {
      component: 'RateSim',
      data: {
        title: '% bacteria remaining on lens vs cleaning time',
        xLabel: 'Time / hours',
        yLabel: '% bacteria remaining on lens',
        xAxis: { label: 'Time / hours', min: 0, max: 8, tick: 1 },
        yAxis: { label: '% bacteria remaining', min: 0, max: 100, tick: 10 },
        variable: 'cleaning process',
        series: [
          {
            label: 'one-step',
            color: '#2563eb',
            points: [
              [0, 100],
              [1, 96],
              [2, 96],
              [3, 94],
              [4, 94],
              [6, 93],
              [8, 93],
            ],
          },
          {
            label: 'two-step',
            color: '#dc2626',
            points: [
              [0, 100],
              [1, 95],
              [2, 80],
              [3, 55],
              [4, 20],
              [6, 5],
              [8, 2],
            ],
          },
        ],
      },
      caption: 'Percentage of bacteria remaining for the one-step (blue) and two-step (red) cleaning processes over 8 hours. Drag the read-off cursor and toggle each process to read values off the curves for parts (c)–(e).',
    },
    tasks: [
      {
        label: 'a',
        text: 'H₂O₂ is placed between the contact lens and the surface of the eye. **Select** which of the following hazard symbols you would expect to find on a bottle of H₂O₂.',
        marks: 1,
        ph: 'H₂O₂ is an oxidiser — select symbol C (flame over a circle)',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="180" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Hazard pictograms — which belongs on a bottle of H₂O₂?</text><!-- A flammable --><g><polygon points="70,50 110,90 70,130 30,90" fill="#ffffff" stroke="#dc2626" stroke-width="5"/><path d="M70 70 q-12 16 0 32 q12 -14 0 -32 Z" fill="#f97316"/><path d="M70 78 q-7 10 0 22 q7 -9 0 -22 Z" fill="#fbbf24"/><text x="70" y="152" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">A</text><text x="70" y="168" font-size="9" text-anchor="middle" fill="#64748b">flammable</text></g><!-- B corrosive --><g><polygon points="200,50 240,90 200,130 160,90" fill="#ffffff" stroke="#dc2626" stroke-width="5"/><path d="M182 82 h12 l3 8 h-18 Z" fill="#334155"/><path d="M206 82 h12 l-3 8 h-6 Z" fill="#334155"/><line x1="190" y1="98" x2="190" y2="108" stroke="#334155" stroke-width="2"/><line x1="212" y1="96" x2="212" y2="106" stroke="#334155" stroke-width="2"/><rect x="178" y="108" width="44" height="4" fill="#334155"/><text x="200" y="152" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">B</text><text x="200" y="168" font-size="9" text-anchor="middle" fill="#64748b">corrosive</text></g><!-- C oxidiser (flame over circle) correct --><g><polygon points="330,50 370,90 330,130 290,90" fill="#ffffff" stroke="#dc2626" stroke-width="5"/><circle cx="330" cy="100" r="13" fill="none" stroke="#334155" stroke-width="3"/><path d="M330 70 q-10 12 0 24 q10 -10 0 -24 Z" fill="#f97316"/><text x="330" y="152" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">C</text><text x="330" y="168" font-size="9" text-anchor="middle" fill="#64748b">oxidiser</text></g><!-- D toxic skull --><g><polygon points="460,50 500,90 460,130 420,90" fill="#ffffff" stroke="#dc2626" stroke-width="5"/><circle cx="460" cy="88" r="13" fill="#334155"/><circle cx="455" cy="86" r="3" fill="#fff"/><circle cx="465" cy="86" r="3" fill="#fff"/><rect x="452" y="100" width="16" height="6" rx="2" fill="#334155"/><line x1="446" y1="112" x2="474" y2="118" stroke="#334155" stroke-width="3"/><line x1="474" y1="112" x2="446" y2="118" stroke="#334155" stroke-width="3"/><text x="460" y="152" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">D</text><text x="460" y="168" font-size="9" text-anchor="middle" fill="#64748b">toxic</text></g></svg>',
          },
          caption: 'Four hazard pictograms (A flammable, B corrosive, C oxidiser, D toxic). Hydrogen peroxide is a strong oxidising agent.',
        },
      },
      {
        label: 'b',
        text: '**Select** which of the following diagrams represents the Lewis structure (electron dot or dot cross diagram) of H₂O₂.',
        marks: 1,
        ph: 'H₂O₂ = H–O–O–H; each O has 2 bonding pairs and 2 lone pairs — select A',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Which dot-and-cross diagram is H₂O₂ (H–O–O–H)?</text><text x="300" y="38" font-size="9.5" text-anchor="middle" fill="#64748b">Each O: 2 shared pairs (bonds) + 2 lone pairs. Each H: 1 shared pair.</text><!-- A correct: H-O-O-H, each O 2 lone pairs --><g><rect x="20" y="52" width="270" height="110" rx="8" fill="#ecfdf5" stroke="#34d399"/><text x="34" y="72" font-size="12" font-weight="800" fill="#0f172a">A</text><g font-size="15" fill="#0f172a" text-anchor="middle"><text x="70" y="118">H</text><text x="130" y="118">O</text><text x="190" y="118">O</text><text x="250" y="118">H</text></g><g stroke="#334155" stroke-width="1.6"><line x1="84" y1="113" x2="116" y2="113"/><line x1="144" y1="113" x2="176" y2="113"/><line x1="204" y1="113" x2="236" y2="113"/></g><g fill="#dc2626"><circle cx="124" cy="94" r="2.4"/><circle cx="136" cy="94" r="2.4"/><circle cx="124" cy="134" r="2.4"/><circle cx="136" cy="134" r="2.4"/><circle cx="184" cy="94" r="2.4"/><circle cx="196" cy="94" r="2.4"/><circle cx="184" cy="134" r="2.4"/><circle cx="196" cy="134" r="2.4"/></g><text x="155" y="152" font-size="9" text-anchor="middle" fill="#64748b">H–O–O–H, lone pairs on each O</text></g><!-- B wrong: H-O-H (water) --><g><rect x="310" y="52" width="270" height="110" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="324" y="72" font-size="12" font-weight="800" fill="#0f172a">B</text><g font-size="15" fill="#0f172a" text-anchor="middle"><text x="400" y="118">H</text><text x="460" y="118">O</text><text x="520" y="118">H</text></g><g stroke="#334155" stroke-width="1.6"><line x1="414" y1="113" x2="446" y2="113"/><line x1="474" y1="113" x2="506" y2="113"/></g><g fill="#dc2626"><circle cx="454" cy="94" r="2.4"/><circle cx="466" cy="94" r="2.4"/><circle cx="454" cy="134" r="2.4"/><circle cx="466" cy="134" r="2.4"/></g><text x="460" y="152" font-size="9" text-anchor="middle" fill="#64748b">this is water, H₂O</text></g><!-- C wrong: O=O double bond no H --><g><rect x="20" y="178" width="270" height="115" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="34" y="198" font-size="12" font-weight="800" fill="#0f172a">C</text><g font-size="15" fill="#0f172a" text-anchor="middle"><text x="120" y="244">O</text><text x="190" y="244">O</text></g><g stroke="#334155" stroke-width="1.6"><line x1="134" y1="236" x2="176" y2="236"/><line x1="134" y1="244" x2="176" y2="244"/></g><g fill="#dc2626"><circle cx="108" cy="232" r="2.4"/><circle cx="108" cy="244" r="2.4"/><circle cx="202" cy="232" r="2.4"/><circle cx="202" cy="244" r="2.4"/></g><text x="155" y="278" font-size="9" text-anchor="middle" fill="#64748b">this is O₂ (double bond, no H)</text></g><!-- D wrong: H-O-O-H but O=O double, missing lone pairs --><g><rect x="310" y="178" width="270" height="115" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="324" y="198" font-size="12" font-weight="800" fill="#0f172a">D</text><g font-size="15" fill="#0f172a" text-anchor="middle"><text x="380" y="244">H</text><text x="440" y="244">O</text><text x="500" y="244">O</text><text x="560" y="244">H</text></g><g stroke="#334155" stroke-width="1.6"><line x1="394" y1="239" x2="426" y2="239"/><line x1="454" y1="235" x2="486" y2="235"/><line x1="454" y1="243" x2="486" y2="243"/><line x1="514" y1="239" x2="546" y2="239"/></g><text x="475" y="278" font-size="9" text-anchor="middle" fill="#64748b">O=O double bond (incorrect for H₂O₂)</text></g></svg>',
          },
          caption: 'Four candidate Lewis (dot-and-cross) diagrams. In H₂O₂ the two oxygen atoms are joined by a single O–O bond, each O carries two lone pairs, and an H is bonded to each O.',
        },
      },
      {
        label: 'c',
        text: 'A scientist covered contact lenses with bacteria and then compared the two processes. The results are shown in the graph above.\n\n**State** the percentage of bacteria remaining on the lens after using a one-step cleaning process for 4 hours.',
        marks: 1,
        ph: 'Read graph at 4h for one-step (blue): approximately 94% bacteria remaining',
      },
      {
        label: 'd',
        text: '**State** the time required to remove 95% of the bacteria using the two-step process.',
        marks: 1,
        ph: 'Read graph: two-step reaches 5% remaining (95% removed) at ≥ 6 hours',
      },
      {
        label: 'e',
        text: 'Use the data in the graph to **justify** which process and time you would recommend to clean contact lenses.',
        marks: 2,
        ph: 'Recommend two-step; removes more bacteria during same time period; 4 hours and over',
      },
    ],
  },

  // ── Q4 (18 marks, Crit A/B/C) — Catalyst investigation for H₂O₂ decomposition
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Decomposition, hypothesis, variables & data analysis — H₂O₂ catalysts',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 18,
    stem: 'Oxygen and water are produced when hydrogen peroxide (H₂O₂) breaks down. The chemical term for this process is decomposition. The decomposition of H₂O₂ happens naturally at a slow rate, as shown in the equation:\n\n2H₂O₂(aq) → 2H₂O(l) + O₂(g)\n\nH₂O₂ decomposes faster when a catalyst is added. A catalyst is a substance which increases the rate of reaction without being used up itself. A student has a catalyst in two states: a solid and a solution.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="280" fill="#ffffff"/><text x="320" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Rocket-engine model: catalyst decomposes H₂O₂ to drive a flame</text><g><rect x="40" y="120" width="90" height="90" rx="6" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/><rect x="40" y="180" width="90" height="30" rx="0" fill="#bae6fd"/><text x="85" y="200" font-size="9" text-anchor="middle" fill="#0c4a6e">H₂O₂</text><circle cx="85" cy="150" r="6" fill="#475569"/><text x="85" y="112" font-size="8" text-anchor="middle" fill="#475569">catalyst</text><text x="85" y="228" font-size="9" text-anchor="middle" fill="#1f2d3a">1. container</text></g><path d="M140 165 h40" stroke="#dc2626" stroke-width="2" marker-end="url(#ar4)"/><defs><marker id="ar4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><g><rect x="190" y="120" width="90" height="90" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/><circle cx="235" cy="150" r="10" fill="#f59e0b" opacity="0.7"/><text x="235" y="200" font-size="8" text-anchor="middle" fill="#92400e">gas + O₂</text><text x="235" y="228" font-size="9" text-anchor="middle" fill="#1f2d3a">2. gas produced</text></g><path d="M290 165 h40" stroke="#dc2626" stroke-width="2" marker-end="url(#ar4)"/><g><rect x="340" y="120" width="90" height="90" rx="6" fill="#fff7ed" stroke="#c2410c" stroke-width="1.5"/><path d="M385 122 q-14 22 0 40 q14 -18 0 -40 Z" fill="#f97316"/><path d="M385 128 q-8 14 0 26 q8 -12 0 -26 Z" fill="#fbbf24"/><text x="385" y="200" font-size="8" text-anchor="middle" fill="#9a3412">flame burns</text><text x="385" y="228" font-size="9" text-anchor="middle" fill="#1f2d3a">3. flame at the top</text></g><path d="M440 165 h40" stroke="#dc2626" stroke-width="2" marker-end="url(#ar4)"/><g><rect x="490" y="120" width="110" height="90" rx="6" fill="#ecfeff" stroke="#0e7490" stroke-width="1.5"/><rect x="500" y="135" width="40" height="22" rx="3" fill="#0e7490"/><text x="520" y="150" font-size="9" text-anchor="middle" fill="#ffffff">⏱</text><text x="545" y="150" font-size="8" fill="#155e75">stopwatch</text><text x="545" y="200" font-size="8" text-anchor="middle" fill="#155e75">time the flame</text><text x="545" y="228" font-size="9" text-anchor="middle" fill="#1f2d3a">4. measure burn time</text></g><line x1="40" y1="248" x2="600" y2="248" stroke="#e2e8f0"/><text x="40" y="266" font-size="10" fill="#475569">Each catalyst is tested with the same volume of H₂O₂; the time the flame burns is recorded, then the test is repeated for the next catalyst.</text></svg>',
      },
      caption: 'The student’s rocket-engine model: a catalyst decomposes H₂O₂, the gas drives a flame, and a stopwatch times how long the flame burns. Use it to identify the variables.',
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
        text: '**Formulate** a hypothesis to test which state of catalyst (solid or solution) will give the greatest increase in rate of reaction. You should use collision theory in your answer.',
        marks: 3,
        ph: 'If catalyst is solution → rate higher because particles move freely → more frequent collisions',
      },
      {
        label: 'c',
        text: 'A student wanted to investigate a number of catalysts to determine which one would decompose H₂O₂ the fastest. The student set up their equipment modelled on a rocket engine. The equipment and method are shown in the diagram above.\n\n**Identify** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nControl variable one:\n\nControl variable two:',
        marks: 4,
        ph: 'IV=type of catalyst; DV=time for flame to burn/stop; CV1=mass of catalyst; CV2=volume H₂O₂',
      },
      {
        label: 'd',
        text: 'The student formulated the following hypothesis:\n\n*"The best catalyst will produce the flame that burns the longest because more oxygen is released."*\n\n**State** and **justify** whether this hypothesis is valid.',
        marks: 3,
        ph: 'Invalid: longer burn time ≠ faster rate of O₂ production; total O₂ released same for all; good catalyst = quicker rate not longer flame',
      },
      {
        label: 'e',
        text: 'A second student suggested an alternative method — using a eudiometer to measure the volume of oxygen produced. The volume of gas collected after 30 seconds for three trials is shown in the table.\n\n| Volume from trial one / cm³ | Volume from trial two / cm³ | Volume from trial three / cm³ |\n|---|---|---|\n| 42 | 44 | 46 |\n\n**Calculate** the average volume of oxygen collected for this experiment and **determine** the rate of oxygen production.',
        marks: 3,
        ph: 'Average = (42+44+46)/3 = 44 cm³; rate = 44÷30 = 1.47 cm³ s⁻¹',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Trial', 'Volume of O₂ after 30 s / cm³'],
            rows: [
              ['Trial one', '42'],
              ['Trial two', '44'],
              ['Trial three', '46'],
            ],
          },
          caption: 'Oxygen collected in the eudiometer after 30 s for three trials. Average the three volumes, then divide by the 30 s collection time to find the rate.',
        },
      },
      {
        label: 'f',
        text: 'The student carried out a fourth trial and their equipment is shown below. The volume of oxygen collected was 50 cm³.\n\n**Suggest** two reasons why the result for this trial was not consistent with the trials above. **Justify** your answer.',
        marks: 3,
        ph: 'Stopper not inserted / tubing not in eudiometer / timing > 30s; justification: extra gas collected',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="320" fill="#ffffff"/><text x="260" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Fourth-trial set-up (the inconsistent trial)</text><rect x="70" y="40" width="46" height="210" rx="6" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/><rect x="70" y="150" width="46" height="100" rx="0" fill="#bfdbfe"/><g font-size="8" fill="#1e3a8a" text-anchor="end"><text x="66" y="64">50</text><text x="66" y="104">40</text><text x="66" y="144">30</text><text x="66" y="184">20</text><text x="66" y="224">10</text></g><line x1="116" y1="60" x2="122" y2="60" stroke="#1e3a8a"/><line x1="116" y1="100" x2="122" y2="100" stroke="#1e3a8a"/><line x1="116" y1="140" x2="122" y2="140" stroke="#1e3a8a"/><line x1="116" y1="180" x2="122" y2="180" stroke="#1e3a8a"/><line x1="116" y1="220" x2="122" y2="220" stroke="#1e3a8a"/><text x="93" y="270" font-size="9" text-anchor="middle" fill="#1e3a8a">eudiometer</text><circle cx="93" cy="155" r="2.4" fill="#60a5fa"/><circle cx="100" cy="170" r="2.4" fill="#60a5fa"/><circle cx="86" cy="185" r="2.4" fill="#60a5fa"/><path d="M116 235 C 170 235 190 250 210 255" fill="none" stroke="#64748b" stroke-width="3"/><text x="180" y="278" font-size="9" fill="#dc2626" text-anchor="middle">delivery tube NOT in the eudiometer</text><rect x="230" y="200" width="120" height="70" rx="4" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/><rect x="230" y="235" width="120" height="35" fill="#bae6fd"/><text x="290" y="258" font-size="9" text-anchor="middle" fill="#0c4a6e">H₂O₂ + catalyst</text><rect x="276" y="184" width="28" height="18" rx="3" fill="#fca5a5" stroke="#dc2626"/><text x="290" y="180" font-size="8" text-anchor="middle" fill="#dc2626">stopper left off</text><line x1="290" y1="202" x2="290" y2="200" stroke="#dc2626" stroke-dasharray="2 2"/><rect x="380" y="60" width="60" height="30" rx="4" fill="#0e7490"/><text x="410" y="80" font-size="11" text-anchor="middle" fill="#ffffff">⏱ &gt; 30 s</text><text x="410" y="104" font-size="8" text-anchor="middle" fill="#155e75">timed too long</text><text x="60" y="306" font-size="10" fill="#475569">Gas can escape (no stopper / tube not collecting it) yet 50 cm³ was recorded — more than the 42–46 cm³ trials.</text></svg>',
          },
          caption: 'The fourth-trial apparatus: the stopper is left off and the delivery tube does not reach the eudiometer, so gas can escape — yet a larger volume (50 cm³) was recorded. Use this to suggest why the trial is inconsistent.',
        },
      },
    ],
  },

  // ── Q5 (16 marks, Crit B) — Design: H₂O₂ catalyst comparison ────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — H₂O₂ decomposition rate with 5 catalysts',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 16,
    stem: 'The students decided to use the method in the picture to compare the effect of different catalysts on the decomposition of H₂O₂ and measuring the volume of the oxygen produced.\n\n2H₂O₂(aq) → 2H₂O(l) + O₂(g)\n\nYou are provided with a eudiometer, stopwatch, five catalysts: MnO₂(s), ZnO(s), CuCl₂(s), FeCl₃(s) and NiCl₂(s), and a solution of hydrogen peroxide. The independent variable in your investigation is the type of catalyst used. One control variable in your investigation is the concentration of hydrogen peroxide.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 540 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="540" height="320" fill="#ffffff"/><text x="270" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Eudiometer method for comparing catalysts</text><rect x="60" y="38" width="44" height="220" rx="6" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/><rect x="60" y="150" width="44" height="108" rx="0" fill="#bfdbfe"/><g font-size="8" fill="#1e3a8a" text-anchor="end"><text x="56" y="62">50</text><text x="56" y="102">40</text><text x="56" y="142">30</text><text x="56" y="182">20</text><text x="56" y="222">10</text></g><line x1="104" y1="58" x2="110" y2="58" stroke="#1e3a8a"/><line x1="104" y1="98" x2="110" y2="98" stroke="#1e3a8a"/><line x1="104" y1="138" x2="110" y2="138" stroke="#1e3a8a"/><line x1="104" y1="178" x2="110" y2="178" stroke="#1e3a8a"/><line x1="104" y1="218" x2="110" y2="218" stroke="#1e3a8a"/><text x="82" y="276" font-size="9" text-anchor="middle" fill="#1e3a8a">eudiometer</text><circle cx="80" cy="160" r="2.4" fill="#60a5fa"/><circle cx="88" cy="175" r="2.4" fill="#60a5fa"/><circle cx="74" cy="190" r="2.4" fill="#60a5fa"/><path d="M104 245 C 150 245 165 258 185 262" fill="none" stroke="#64748b" stroke-width="3"/><rect x="200" y="210" width="120" height="64" rx="4" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/><rect x="200" y="240" width="120" height="34" fill="#bae6fd"/><text x="260" y="262" font-size="9" text-anchor="middle" fill="#0c4a6e">H₂O₂ + catalyst</text><rect x="246" y="196" width="28" height="16" rx="3" fill="#94a3b8" stroke="#475569"/><text x="260" y="190" font-size="8" text-anchor="middle" fill="#475569">stopper</text><rect x="360" y="48" width="60" height="30" rx="4" fill="#0e7490"/><text x="390" y="68" font-size="11" text-anchor="middle" fill="#ffffff">⏱</text><text x="390" y="92" font-size="8" text-anchor="middle" fill="#155e75">stopwatch</text><g font-size="9.5"><rect x="360" y="120" width="160" height="150" rx="6" fill="#f8fafc" stroke="#e2e8f0"/><text x="440" y="138" font-size="10" font-weight="700" text-anchor="middle" fill="#1f2d3a">Five catalysts to test</text><text x="372" y="160" fill="#0369a1" font-weight="700">MnO₂ (s)</text><text x="372" y="182" fill="#0369a1" font-weight="700">ZnO (s)</text><text x="372" y="204" fill="#0369a1" font-weight="700">CuCl₂ (s)</text><text x="372" y="226" fill="#0369a1" font-weight="700">FeCl₃ (s)</text><text x="372" y="248" fill="#0369a1" font-weight="700">NiCl₂ (s)</text></g><text x="40" y="306" font-size="10" fill="#475569">Same H₂O₂; swap the catalyst (IV); measure O₂ volume in the eudiometer vs time (DV).</text></svg>',
      },
      caption: 'The eudiometer apparatus and the five catalysts (MnO₂, ZnO, CuCl₂, FeCl₃, NiCl₂). The catalyst is the independent variable; the volume of oxygen collected over time is the dependent variable.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to determine the rate of decomposition of hydrogen peroxide with each catalyst. In your answer, you should include:\n- the independent variable, the dependent variable and one other control variable\n- a list of additional equipment you will use\n- details of the method to allow you to collect sufficient data\n- how you will ensure that your method is safe.',
        marks: 16,
        ph: 'Variables; equipment (balance, stopwatch); method (3 repeats, same mass catalyst, same time); safety (H₂O₂ oxidiser/irritant)',
      },
    ],
  },

  // ── Q6 (11 marks, Crit C) — H₂O₂ hair bleaching, graphing, validity ───────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data interpretation, graphing & validity — H₂O₂ hair bleaching',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 11,
    stem: 'Hydrogen peroxide (H₂O₂) is used to change hair colour by removing the natural colour pigments in hair follicles. H₂O₂ is placed on the hair and then left for a set time. The results of an investigation using five different natural hair colours are shown below. The concentration of H₂O₂ used in the beauty industry is important. It is sold in different concentrations. Suppliers to the beauty industry are often not regulated. Analytical chemistry can be used to check the concentration of H₂O₂ using a spectrophotometer — the signal output is proportional to the concentration of H₂O₂.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Time / min', 'Sample 1 (black)', 'Sample 2 (dark brown)', 'Sample 3 (mid brown)', 'Sample 4 (dark blonde)', 'Sample 5 (light blonde)'],
        rows: [
          ['0', 'black', 'dark brown', 'mid brown', 'dark blonde', 'light blonde'],
          ['30', 'dark brown', 'mid brown', 'light brown', 'blonde', 'pale blonde'],
          ['60', 'mid brown', 'light brown', 'dark blonde', 'light blonde', 'very pale blonde'],
          ['90', 'light brown', 'dark blonde', 'blonde', 'pale blonde', 'almost white'],
        ],
      },
      caption: 'Colour of five hair samples after H₂O₂ is left on for 0, 30, 60 and 90 minutes. Each sample lightens as time increases; darker starting colours need longer to lighten.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Interpret** these results and **explain** them using scientific reasoning.',
        marks: 3,
        ph: 'As time increases, H₂O₂ reacts with hair pigment → more pigment removed → lighter colour; darker hair takes longer',
      },
      {
        label: 'b',
        text: 'The results for different known H₂O₂ concentrations are shown in the table below.\n\n| H₂O₂ concentration / % | Signal strength |\n|---|---|\n| 1 | 500 |\n| 2 | 1450 |\n| 3 | 2150 |\n| 4 | 3050 |\n| 6 | 4050 |\n| 8 | 4400 |\n| 10 | 4750 |\n\n**Present** this data using a graph. Label the axes and add a title.',
        marks: 5,
        ph: 'Scatter/line graph; x=H₂O₂ conc (%); y=signal strength; title linking both; scale; 5+ points correct',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['H₂O₂ concentration / %', 'Signal strength'],
            rows: [
              ['1', '500'],
              ['2', '1450'],
              ['3', '2150'],
              ['4', '3050'],
              ['6', '4050'],
              ['8', '4400'],
              ['10', '4750'],
            ],
          },
          caption: 'Calibration data: spectrophotometer signal strength for known H₂O₂ concentrations. Plot signal strength (y) against concentration (x), then read off the value at 5 % for part (c).',
        },
      },
      {
        label: 'c',
        text: 'Use your graph in part (b) to **predict** the signal output expected for a 5% solution of H₂O₂.',
        marks: 1,
        ph: 'Interpolate between 4% (3050) and 6% (4050) → approximately 3500 ± 200',
      },
      {
        label: 'd',
        text: 'The scientists have been provided with four bottles of H₂O₂ from a hair salon owner. They need to test each bottle to see if the solution in any of them has a concentration above 4%.\n\nThe average signal output of the four bottles was 2960. **Comment** on the validity of using an average.',
        marks: 2,
        ph: 'Not valid: average does not give value of each individual bottle; each could be higher or lower than average',
      },
    ],
  },

  // ── Q7 (9 marks, Crit A/D) — Paper properties & preservation ────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Paper properties, chemistry & long-term preservation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 9,
    stem: 'Paper comes in different sizes, thicknesses, colours, textures and chemical compositions. It can be used for writing, drawing, painting and printing. Origami is an art form associated with Japan. Museums and libraries have collected documents throughout history. Written information has been found on a variety of materials, which have varying quality of preservation. Modern documents expected to be kept for a long time are printed on high quality "acid-free" paper.',
    artefact: {
      component: 'InfoGraphicPanel',
      data: {
        title: 'Papyrus vs acid-free paper for long-term preservation',
        layout: 'grid',
        blocks: [
          {
            icon: '📜',
            heading: 'Papyrus — advantages',
            items: [
              'Surviving sheets are thousands of years old',
              'Made from a natural, renewable reed',
              'Stable in a dry climate',
            ],
          },
          {
            icon: '⚠️',
            heading: 'Papyrus — disadvantages',
            items: [
              'Brittle and fragile — cracks when folded',
              'Damaged by damp / humidity',
              'Slow and expensive to make by hand',
              'Rough, uneven writing surface',
            ],
          },
          {
            icon: '📄',
            heading: 'Acid-free paper — advantages',
            items: [
              'Neutral pH — does not yellow / self-destruct',
              'Cheap to mass-produce',
              'Smooth, even printing surface',
              'Flexible — folds without cracking',
            ],
          },
          {
            icon: '⚠️',
            heading: 'Acid-free paper — disadvantages',
            items: [
              'Only proven for ~100+ years, not millennia',
              'Still damaged by water, fire and light',
              'Made from trees (deforestation)',
            ],
          },
        ],
      },
      caption: 'The advantages and disadvantages of papyrus and acid-free paper for long-term document preservation. Hover or tap a panel, then discuss which is best.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** one property of paper that allows it to be used for origami.',
        marks: 1,
        ph: 'Malleable / easy to fold / keeps its shape / strong / can be coloured',
      },
      {
        label: 'b',
        text: '**Suggest** a reason why some papers are coated with an extra layer of plastic or wax.',
        marks: 1,
        ph: 'Waterproofing / gives a glossy appearance / to protect (from air, heat)',
      },
      {
        label: 'c',
        text: 'Chlorine is a common chemical used in the production of paper. Chlorine is used to turn the paper white. An alternative method to turn the paper white uses hydrogen peroxide (H₂O₂). **State** a reason why paper manufacturers would choose to use H₂O₂ instead of chlorine.',
        marks: 1,
        ph: '(Using H₂O₂) oxygen produced is not toxic; (using chlorine) a toxic gas is produced',
      },
      {
        label: 'd',
        text: 'A researcher has suggested that papyrus from ancient Egyptian times is the best material for long-term preservation of documents. Use the information in the graphic and knowledge from your wider MYP studies to **discuss** this suggestion. In your answer, you should include:\n- the advantages and disadvantages of papyrus\n- the advantages and disadvantages of acid-free paper\n- a conclusion, with justification, on which paper type is best for long-term preservation.',
        marks: 6,
        ph: 'Papyrus: adv=lasts 1000s years; disadv=brittle/fragile/expensive. Acid-free: adv=stable pH/cheap; disadv=not as durable. Conclusion with justification.',
      },
    ],
  },

  // ── Q8 (10 marks, Crit D) — Implications of paper production processes ────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Environmental & economic implications of paper production',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 10,
    stem: 'Over the centuries, paper has been made from a wide variety of materials, such as cotton, bamboo, wood, linen rags and hemp. Today, fibre comes mainly from two sources: wood and used paper. Using paper is a way to record our thoughts and ideas. The infographic below shows the "from tree to paper" and "from paper to paper" (recycling) processes.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="360" fill="#ffffff"/><defs><marker id="arP" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#16a34a"/></marker><marker id="arB" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#2563eb"/></marker></defs><text x="320" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two ways to make paper</text><text x="20" y="52" font-size="12" font-weight="700" fill="#15803d">From tree to paper (virgin / new fibre)</text><g font-size="9.5" text-anchor="middle"><rect x="20" y="62" width="92" height="46" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="66" y="82" fill="#14532d">1. Fell trees</text><text x="66" y="96" fill="#14532d">cut &amp; debark</text><rect x="148" y="62" width="92" height="46" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="194" y="82" fill="#14532d">2. Pulp with</text><text x="194" y="96" fill="#14532d">heat &amp; chemicals</text><rect x="276" y="62" width="92" height="46" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="322" y="82" fill="#14532d">3. Bleach</text><text x="322" y="96" fill="#14532d">&amp; clean</text><rect x="404" y="62" width="92" height="46" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="450" y="82" fill="#14532d">4. Press, dry</text><text x="450" y="96" fill="#14532d">&amp; roll</text><rect x="532" y="62" width="88" height="46" rx="6" fill="#bbf7d0" stroke="#16a34a"/><text x="576" y="82" fill="#14532d">5. New</text><text x="576" y="96" fill="#14532d">paper</text></g><line x1="112" y1="85" x2="146" y2="85" stroke="#16a34a" stroke-width="2" marker-end="url(#arP)"/><line x1="240" y1="85" x2="274" y2="85" stroke="#16a34a" stroke-width="2" marker-end="url(#arP)"/><line x1="368" y1="85" x2="402" y2="85" stroke="#16a34a" stroke-width="2" marker-end="url(#arP)"/><line x1="496" y1="85" x2="530" y2="85" stroke="#16a34a" stroke-width="2" marker-end="url(#arP)"/><text x="20" y="142" font-size="9.5" fill="#b91c1c">Impacts: deforestation · high energy &amp; water use · bleaching chemicals · CO₂ from machinery.</text><text x="20" y="186" font-size="12" font-weight="700" fill="#1d4ed8">From paper to paper (recycling)</text><g font-size="9.5" text-anchor="middle"><rect x="20" y="196" width="92" height="46" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="66" y="216" fill="#1e3a8a">1. Collect &amp;</text><text x="66" y="230" fill="#1e3a8a">sort used paper</text><rect x="148" y="196" width="92" height="46" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="194" y="216" fill="#1e3a8a">2. Shred &amp;</text><text x="194" y="230" fill="#1e3a8a">pulp in water</text><rect x="276" y="196" width="92" height="46" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="322" y="216" fill="#1e3a8a">3. De-ink</text><text x="322" y="230" fill="#1e3a8a">&amp; clean</text><rect x="404" y="196" width="92" height="46" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="450" y="216" fill="#1e3a8a">4. Press, dry</text><text x="450" y="230" fill="#1e3a8a">&amp; roll</text><rect x="532" y="196" width="88" height="46" rx="6" fill="#bfdbfe" stroke="#2563eb"/><text x="576" y="216" fill="#1e3a8a">5. Recycled</text><text x="576" y="230" fill="#1e3a8a">paper</text></g><line x1="112" y1="219" x2="146" y2="219" stroke="#2563eb" stroke-width="2" marker-end="url(#arB)"/><line x1="240" y1="219" x2="274" y2="219" stroke="#2563eb" stroke-width="2" marker-end="url(#arB)"/><line x1="368" y1="219" x2="402" y2="219" stroke="#2563eb" stroke-width="2" marker-end="url(#arB)"/><line x1="496" y1="219" x2="530" y2="219" stroke="#2563eb" stroke-width="2" marker-end="url(#arB)"/><path d="M576 242 v22 h-510 v-22" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#arB)"/><text x="320" y="278" font-size="9" fill="#2563eb" text-anchor="middle">used paper fed back in</text><text x="20" y="300" font-size="9.5" fill="#b91c1c">Impacts: saves trees · less energy/water · still needs de-inking chemicals · fibres weaken each cycle.</text><line x1="20" y1="314" x2="620" y2="314" stroke="#e2e8f0"/><text x="20" y="334" font-size="10" fill="#475569">Compare the two routes on environment (trees, energy, chemicals) and economy (machinery, jobs, raw-material cost).</text></svg>',
      },
      caption: 'The "from tree to paper" (virgin fibre, green) and "from paper to paper" (recycling, blue) production routes, with their environmental impacts. Use both to discuss the implications for environment and economy.',
    },
    tasks: [
      {
        label: '',
        text: 'Using the infographic and knowledge from your wider MYP studies, **discuss** the implications of both types of paper production. In your answer, you should include:\n- a comparison of the impacts on the environment\n- a comparison of the impacts on the economy\n- your conclusion, with justification, on which paper production process is best.',
        marks: 10,
        ph: 'Environment: deforestation (virgin) vs water/chemical use (recycled); Economy: cost of machinery/employment; Conclusion with justification',
      },
    ],
  },

  // ── Q9 (6 marks, Crit D) — Cultural advantages of paper vs electronic ─────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Cultural advantages — paper vs electronic storage',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 6,
    stem: 'Prior to the 20th century, most information was stored in the form of paper documents. There is now a trend to save information by using cloud storage or other electronic methods.',
    artefact: {
      component: 'InfoGraphicPanel',
      data: {
        title: 'Storing information: paper vs electronic',
        layout: 'grid',
        blocks: [
          {
            icon: '📜',
            heading: 'Paper — cultural advantages',
            items: [
              'Original artefact has historical value',
              'Readable without any technology',
              'Tangible heritage in museums / libraries',
              'Calligraphy / art form preserved',
            ],
          },
          {
            icon: '⚠️',
            heading: 'Paper — cultural disadvantages',
            items: [
              'Hard to copy / share widely',
              'Lost or damaged by fire, water, decay',
              'Takes physical space to store',
            ],
          },
          {
            icon: '☁️',
            heading: 'Electronic — cultural advantages',
            items: [
              'Shared instantly across the world',
              'Backed up — safe from physical damage',
              'Searchable, interactive, multimedia',
              'Tiny physical storage footprint',
            ],
          },
          {
            icon: '⚠️',
            heading: 'Electronic — cultural disadvantages',
            items: [
              'Needs power, devices & the internet',
              'File formats become obsolete',
              'No original artefact / loses heritage feel',
            ],
          },
        ],
      },
      caption: 'Cultural advantages and disadvantages of storing information on paper versus electronically. Hover or tap a panel to focus it, then suggest and justify your answer.',
    },
    tasks: [
      {
        label: '',
        text: '**Suggest** and **justify** the **cultural** advantages and disadvantages of paper and electronic information storage.',
        marks: 6,
        ph: 'Paper: cultural/historical preservation, accessible without tech; Electronic: interactive, safe from physical damage; conclusion linked to culture',
      },
    ],
  },
]
