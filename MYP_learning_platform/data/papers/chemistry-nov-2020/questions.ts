export type Widget =
  | 'radio_select'
  | 'inline_dropdown_select'
  | 'variable_classify'
  | 'match_drag_drop'
  | 'fill_blank'

/** Data-driven interactive artefact rendered in the context/stimulus slot. */
export interface ArtefactSpec {
  component: string
  data?: unknown
  caption?: string
}

export interface Task {
  label: string
  text: string
  marks: number
  ph: string
  widget?: Widget
  widgetOptions?: string[]
  widgetItems?: string[]
  artefact?: ArtefactSpec
}

export interface Question {
  id: number
  crit: 'A' | 'B' | 'C' | 'D'
  type: 'extended'
  topic: string
  topicCanonical?: import('@/data/taxonomy/topics').Topic
  topicGroup?: import('@/data/taxonomy/topics').TopicGroup
  marks: number
  stem: string
  artefact?: ArtefactSpec
  tasks: Task[]
}

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
  id: 'chemistry-nov-2020',
  subject: 'Chemistry',
  session: 'November',
  year: 2020,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Volcanoes and SiO₂ in lava',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 7,
    stem: "In May 2018 Kilauea, a volcano on Hawaii's Big Island, erupted. The volcano expelled lava, ash, and toxic gas. Flows of lava from the crater flowed into the ocean. Three types of lava are basaltic, andesitic, and rhyolitic — classified by their SiO₂ content by mass: Basaltic 45.6–55.2%, Andesitic 52.0–63.7%, Rhyolitic 68.3–77.4%. A 2.00 g sample of rock from Kilauea contained 0.994 g of SiO₂ (49.7%). A 2.00 g sample of rock from Mount Vesuvius contained 1.16 g of SiO₂.",
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Type of lava rock', 'SiO₂ content by mass / %'],
        rows: [
          ['Basaltic', '45.6 – 55.2'],
          ['Andesitic', '52.0 – 63.7'],
          ['Rhyolitic', '68.3 – 77.4'],
        ],
      },
      caption: 'Classification of volcanic rock by silicon dioxide (SiO₂) content. Compare a sample\'s %SiO₂ against these ranges to identify the rock type.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the physical process that takes place when lava cools down to form rocks.',
        marks: 1,
        ph: 'Choose the correct physical process name',
        widget: 'radio_select',
        widgetOptions: ['Solidification', 'Crystallisation', 'Evaporation', 'Melting'],
      },
      {
        label: 'b',
        text: 'The major component of lava is SiO₂ with oxides of iron and magnesium present in different proportions. **Determine** the missing information and complete the table. (Oxide names and formulae: silicon dioxide / SiO₂; magnesium oxide / MgO)',
        marks: 2,
        ph: 'Fill in silicon dioxide and MgO',
        widget: 'fill_blank',
        widgetItems: ['Oxide name for SiO₂', 'Formula for magnesium oxide'],
      },
      {
        label: 'c',
        text: '**Select** the type of rock from Kilauea (49.7% SiO₂).',
        marks: 1,
        ph: 'Basaltic range is 45.6–55.2%',
        widget: 'radio_select',
        widgetOptions: ['Basaltic', 'Andesitic', 'Rhyolitic'],
      },
      {
        label: 'd',
        text: '**Calculate** the percentage of SiO₂ in the rock sample from Mount Vesuvius. (1.16 g SiO₂ in a 2.00 g sample)',
        marks: 2,
        ph: '1.16/2.00 × 100 = 58.0%',
      },
      {
        label: 'e',
        text: 'Using your answer from part (d), **select** the type of rock from Mount Vesuvius.',
        marks: 1,
        ph: 'Andesitic range is 52.0–63.7%',
        widget: 'radio_select',
        widgetOptions: ['Basaltic', 'Andesitic', 'Rhyolitic'],
      },
    ],
  },

  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Volcanic gases and noble gases',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 9,
    stem: 'It was once believed each volcano had its own particular type of gas: SO₂ at Mount Etna or HCl at Mount Vesuvius. This proved to be untrue: volcanic gases are mixtures of water vapour, CO₂, H₂S, and others. In the case of Kilauea, gaseous HCl is a major component. Some noble gases such as helium, neon, and argon can also be released.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="220" fill="#ffffff"/><text x="320" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four possible Lewis (dot and cross) structures of H₂S</text><text x="320" y="40" font-size="10" text-anchor="middle" fill="#64748b">● = electron from S    × = electron from H</text>' +
          // Option A (correct): H : S : H with two lone pairs (crosses) above and below S
          '<g><text x="40" y="74" font-size="12" font-weight="700" fill="#0b7285">A</text>' +
          '<text x="120" y="120" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">H</text>' +
          '<text x="150" y="120" font-size="13" text-anchor="middle" fill="#0f766e">●×</text>' +
          '<text x="178" y="120" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">S</text>' +
          '<text x="206" y="120" font-size="13" text-anchor="middle" fill="#0f766e">●×</text>' +
          '<text x="236" y="120" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">H</text>' +
          '<text x="178" y="100" font-size="13" text-anchor="middle" fill="#0f766e">●●</text>' +
          '<text x="178" y="142" font-size="13" text-anchor="middle" fill="#0f766e">●●</text></g>' +
          // Option B: ×H × S ×H (all crosses — wrong: bonding pairs not shared from S)
          '<g><text x="360" y="74" font-size="12" font-weight="700" fill="#1f2d3a">B</text>' +
          '<text x="440" y="120" font-size="13" text-anchor="middle" fill="#475569">×</text>' +
          '<text x="458" y="120" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">H</text>' +
          '<text x="486" y="120" font-size="13" text-anchor="middle" fill="#475569">×</text>' +
          '<text x="512" y="120" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">S</text>' +
          '<text x="538" y="120" font-size="13" text-anchor="middle" fill="#475569">×</text>' +
          '<text x="566" y="120" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">H</text>' +
          '<text x="512" y="100" font-size="13" text-anchor="middle" fill="#475569">××</text>' +
          '<text x="512" y="142" font-size="13" text-anchor="middle" fill="#475569">××</text></g>' +
          // Option C: only one lone pair (wrong — too few electrons on S)
          '<g><text x="40" y="174" font-size="12" font-weight="700" fill="#1f2d3a">C</text>' +
          '<text x="120" y="200" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">H</text>' +
          '<text x="150" y="200" font-size="13" text-anchor="middle" fill="#475569">●×</text>' +
          '<text x="178" y="200" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">S</text>' +
          '<text x="206" y="200" font-size="13" text-anchor="middle" fill="#475569">●×</text>' +
          '<text x="236" y="200" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">H</text>' +
          '<text x="178" y="180" font-size="13" text-anchor="middle" fill="#475569">●</text></g>' +
          // Option D: lone pairs drawn as single dots only (wrong arrangement)
          '<g><text x="360" y="174" font-size="12" font-weight="700" fill="#1f2d3a">D</text>' +
          '<text x="440" y="200" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">H</text>' +
          '<text x="468" y="200" font-size="13" text-anchor="middle" fill="#475569">●</text>' +
          '<text x="512" y="200" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">S</text>' +
          '<text x="556" y="200" font-size="13" text-anchor="middle" fill="#475569">●</text>' +
          '<text x="584" y="200" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">H</text>' +
          '<text x="512" y="180" font-size="13" text-anchor="middle" fill="#475569">●●</text>' +
          '<text x="512" y="222" font-size="13" text-anchor="middle" fill="#475569">●●</text></g>' +
          '</svg>',
      },
      caption: 'Select-the-structure stimulus for H₂S. Sulfur (group 16) needs two shared bonding pairs (one ● and one × each) plus two lone pairs.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why volcano crater lakes typically have pH values as low as 0.1.',
        marks: 2,
        ph: 'Gases dissolve in water to form acids',
      },
      {
        label: 'b',
        text: '**Select** the Lewis (dot and cross) structure of H₂S.',
        marks: 1,
        ph: 'First option shows correct lone pairs on S',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: 'Use the periodic table to **state** the period of argon.',
        marks: 1,
        ph: 'Period 3',
      },
      {
        label: 'd',
        text: 'Neon exists as a mixture of isotopes. **Determine** the number of protons, neutrons, and electrons in an atom of ²²Ne.',
        marks: 3,
        ph: 'Protons=10, Neutrons=12, Electrons=10',
      },
      {
        label: 'e',
        text: '**Draw** the electron configuration of neon showing 2 electrons in the inner shell and 8 in the outer shell.',
        marks: 2,
        ph: '2 electrons inner shell, 8 outer shell',
      },
    ],
  },

  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Plastics and throwaway culture',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 10,
    stem: 'Plastics are synthetic materials with high molecular masses. In the past, synthetic plastics were made using chemicals from oil. Molecules A and B are used to make common plastics (A = ethene, B = propene). Throwaway culture refers to the widespread use of single-use plastics that contribute to a global rubbish problem. Countries have implemented thermovaporization — burning non-recyclable plastic waste to generate electricity.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="220" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two organic compounds used to make common plastics</text>' +
          // Molecule A — ethene  H2C=CH2
          '<g stroke="#334155" stroke-width="1.6"><text x="150" y="56" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">A</text>' +
          '<text x="110" y="92" font-size="16" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">H</text>' +
          '<text x="110" y="160" font-size="16" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">H</text>' +
          '<text x="190" y="92" font-size="16" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">H</text>' +
          '<text x="190" y="160" font-size="16" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">H</text>' +
          '<text x="138" y="130" font-size="17" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">C</text>' +
          '<text x="162" y="130" font-size="17" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">C</text>' +
          '<line x1="120" y1="98" x2="132" y2="118"/><line x1="120" y1="152" x2="132" y2="138"/>' +
          '<line x1="180" y1="98" x2="168" y2="118"/><line x1="180" y1="152" x2="168" y2="138"/>' +
          '<line x1="144" y1="122" x2="156" y2="122"/><line x1="144" y1="130" x2="156" y2="130"/></g>' +
          // Molecule B — propene  CH2=CH-CH3
          '<g stroke="#334155" stroke-width="1.6"><text x="400" y="56" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">B</text>' +
          '<text x="330" y="92" font-size="16" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">H</text>' +
          '<text x="330" y="160" font-size="16" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">H</text>' +
          '<text x="358" y="130" font-size="17" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">C</text>' +
          '<text x="406" y="130" font-size="17" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">C</text>' +
          '<text x="406" y="92" font-size="16" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">H</text>' +
          '<text x="454" y="130" font-size="17" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">C</text>' +
          '<text x="454" y="92" font-size="16" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">H</text>' +
          '<text x="436" y="160" font-size="16" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">H</text>' +
          '<text x="472" y="160" font-size="16" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">H</text>' +
          '<line x1="340" y1="98" x2="352" y2="118"/><line x1="340" y1="152" x2="352" y2="138"/>' +
          '<line x1="364" y1="122" x2="400" y2="122"/><line x1="364" y1="130" x2="400" y2="130"/>' +
          '<line x1="406" y1="118" x2="406" y2="100"/>' +
          '<line x1="412" y1="126" x2="448" y2="126"/>' +
          '<line x1="454" y1="118" x2="454" y2="100"/><line x1="448" y1="134" x2="440" y2="150"/><line x1="460" y1="134" x2="468" y2="150"/></g>' +
          '<text x="280" y="206" font-size="10" text-anchor="middle" fill="#64748b">Each molecule contains a C=C double bond.</text></svg>',
      },
      caption: 'Molecule A (ethene) and molecule B (propene) — the monomers used to make poly(ethene) and poly(propene).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the chemical classification of molecules A and B.',
        marks: 1,
        ph: 'Both have C=C double bonds',
        widget: 'radio_select',
        widgetOptions: ['Alkene', 'Alkane', 'Alcohol', 'Carboxylic acid'],
      },
      {
        label: 'b',
        text: '**State** the name of each chemical A and B.',
        marks: 2,
        ph: 'A = ethene, B = propene',
        widget: 'fill_blank',
        widgetItems: ['Name of A', 'Name of B'],
      },
      {
        label: 'c',
        text: 'Molecules A and B can be obtained by breaking down long chain molecules such as decane, C₁₀H₂₂: C₁₀H₂₂ → C₃H₆ + C₂H₄ + X. **Deduce** the molecular formula of the missing product X.',
        marks: 1,
        ph: 'Balance carbons and hydrogens',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="120" fill="#ffffff"/><text x="260" y="26" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cracking of decane</text><text x="260" y="66" font-size="18" font-weight="700" text-anchor="middle" fill="#1f2d3a">C₁₀H₂₂  →  C₃H₆  +  C₂H₄  +  X</text><text x="260" y="98" font-size="11" text-anchor="middle" fill="#64748b">Balance the carbon and hydrogen atoms to deduce the formula of X.</text></svg>',
          },
          caption: 'Long-chain decane is broken down (cracked) into smaller useful molecules. Deduce the missing product X.',
        },
      },
      {
        label: 'd',
        text: 'During thermovaporization, gases are produced from the burning of plastic. **State** why calcium hydroxide is added to the gases produced during incineration of waste.',
        marks: 1,
        ph: 'Neutralises acidic gases',
      },
      {
        label: 'e',
        text: '**State** the physical change taking place between stages 2 and 3 of the thermovaporization process (water converting to steam).',
        marks: 1,
        ph: 'Boiling / water turns to steam',
      },
      {
        label: 'f',
        text: 'In most countries, incineration of waste is subject to strict regulations. **Suggest** one requirement that should be included in order to reduce the environmental impact of the process.',
        marks: 1,
        ph: 'Waste should not contain hazardous materials / emissions controlled',
      },
      {
        label: 'g',
        text: 'There has been a move from non-biodegradable to biodegradable plastics. The rate of biodegradation was tested for three plastic samples A, B, and C with different particle sizes. **List** the order of the three samples in order of increasing particle size. **Justify** your answer.',
        marks: 3,
        ph: 'A < C < B; smaller particles = greater surface area = faster reaction',
        artefact: {
          component: 'RateSim',
          data: {
            title: 'Biodegradation of three plastic samples buried in soil',
            mode: 'saturating',
            xAxis: { label: 'Time / days', min: 0, max: 50, tick: 10 },
            yAxis: { label: 'Biodegradation / %', min: 0, max: 60, tick: 10 },
            metric: 'Biodegradation / %',
            variable: 'Plastic sample (A, B, C — different particle sizes)',
            series: [
              { label: 'Sample A', color: 'green', plateau: 55, points: [[0, 0], [5, 30], [10, 44], [15, 50], [20, 53], [30, 55], [40, 55], [50, 55]] },
              { label: 'Sample C', color: 'teal', plateau: 44, points: [[0, 0], [5, 18], [10, 28], [15, 35], [20, 39], [30, 42], [40, 43], [50, 44]] },
              { label: 'Sample B', color: 'orange', plateau: 35, points: [[0, 0], [5, 8], [10, 14], [15, 19], [20, 23], [30, 29], [40, 33], [50, 35]] },
            ],
            note: 'Sample A degrades fastest and furthest; sample B is slowest. Faster biodegradation means greater surface area, i.e. smaller particles.',
          },
          caption: 'Biodegradation (%) over 50 days for three samples ground to different particle sizes. The fastest-degrading sample has the smallest particles.',
        },
      },
    ],
  },

  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Glow sticks and chemiluminescence',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 17,
    stem: 'Glow sticks produce light in a chemical reaction called chemiluminescence. One of the chemicals involved is phenyl oxalate — a catalyst is also present. The catalyst is separated from the reactants inside a sealed tube. A student investigated the effect of temperature on how long a glow stick glows by placing glow sticks in beakers of water at different temperatures.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Average time taken for the glow stick to stop glowing',
        xLabel: 'Temperature of water',
        yLabel: 'Time the glow stick glows',
        xUnit: '°C',
        yUnit: 'min',
        xMin: 0,
        xMax: 70,
        yMin: 0,
        yMax: 600,
        xStep: 10,
        yStep: 100,
        dataPoints: [
          { x: 5, y: 535 },
          { x: 10, y: 420 },
          { x: 20, y: 255 },
          { x: 25, y: 200 },
          { x: 30, y: 150 },
          { x: 35, y: 120 },
          { x: 50, y: 75 },
          { x: 65, y: 65 },
        ],
      },
      caption: 'Average glow time falls as water temperature rises. Extrapolate the curve back to read the glow time at low temperatures.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** the function of a catalyst in this reaction.',
        marks: 2,
        ph: 'Speeds up reaction / lowers activation energy without being used up',
      },
      {
        label: 'b',
        text: '**Select** the name of the organic functional group highlighted in the phenyl oxalate molecule.',
        marks: 1,
        ph: 'Ester linkage (C=O with O–C)',
        widget: 'radio_select',
        widgetOptions: ['Alkene', 'Ester', 'Alcohol', 'Carboxylic acid'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="200" fill="#ffffff"/><text x="260" y="24" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Phenyl oxalate (simplified)</text>' +
              // left phenyl ring
              '<polygon points="70,110 90,90 118,98 126,126 106,146 78,138" fill="none" stroke="#334155" stroke-width="1.6"/>' +
              '<circle cx="98" cy="118" r="12" fill="none" stroke="#334155" stroke-width="1.2"/>' +
              // ester linkage region highlighted
              '<rect x="150" y="70" width="120" height="92" rx="8" fill="#fff7ed" stroke="#e8590c" stroke-width="1.5" stroke-dasharray="5 4"/>' +
              '<text x="150" y="124" font-size="14" fill="#334155">O</text>' +
              '<line x1="126" y1="120" x2="150" y2="120" stroke="#334155" stroke-width="1.6"/>' +
              '<line x1="166" y1="120" x2="188" y2="120" stroke="#334155" stroke-width="1.6"/>' +
              '<text x="196" y="124" font-size="14" font-weight="700" fill="#1f2d3a">C</text>' +
              '<text x="196" y="92" font-size="14" fill="#334155">O</text>' +
              '<line x1="198" y1="108" x2="198" y2="96" stroke="#334155" stroke-width="1.6"/>' +
              '<line x1="204" y1="108" x2="204" y2="96" stroke="#334155" stroke-width="1.6"/>' +
              '<text x="232" y="124" font-size="14" fill="#334155">O</text>' +
              '<line x1="210" y1="120" x2="230" y2="120" stroke="#334155" stroke-width="1.6"/>' +
              '<line x1="246" y1="120" x2="266" y2="120" stroke="#334155" stroke-width="1.6"/>' +
              '<text x="186" y="182" font-size="11" font-weight="700" fill="#e8590c">highlighted functional group</text>' +
              // right C=O and phenyl
              '<text x="290" y="124" font-size="14" font-weight="700" fill="#1f2d3a">C</text><text x="290" y="92" font-size="14" fill="#334155">O</text>' +
              '<line x1="292" y1="108" x2="292" y2="96" stroke="#334155" stroke-width="1.6"/><line x1="298" y1="108" x2="298" y2="96" stroke="#334155" stroke-width="1.6"/>' +
              '<text x="320" y="124" font-size="14" fill="#334155">O</text><line x1="304" y1="120" x2="320" y2="120" stroke="#334155" stroke-width="1.6"/>' +
              '<polygon points="360,110 380,90 408,98 416,126 396,146 368,138" fill="none" stroke="#334155" stroke-width="1.6"/><circle cx="388" cy="118" r="12" fill="none" stroke="#334155" stroke-width="1.2"/>' +
              '</svg>',
          },
          caption: 'The dashed box highlights the –O–C(=O)– linkage in phenyl oxalate. Identify this functional group.',
        },
      },
      {
        label: 'c',
        text: 'The student placed glow sticks in beakers at different temperatures. **Measure** the missing temperature from the thermometer shown (one of: 30°C, 35°C, 50°C, ?).',
        marks: 1,
        ph: '65°C',
        artefact: {
          component: 'ThermalSim',
          data: {
            title: 'Water baths used for the glow-stick investigation',
            mode: 'thermometer',
            tempUnit: '°C',
            thermometers: [
              { label: '30', units: 'C' },
              { label: '35', units: 'C' },
              { label: '50', units: 'C' },
              { label: '?', units: 'C', answer: 65 },
            ],
          },
          caption: 'Pick a thermometer and read its scale. Three readings are known (30, 35, 50 °C); measure the missing one.',
        },
      },
      {
        label: 'd',
        text: '**Identify** the independent variable (IV), dependent variable (DV), and two controlled variables (CVs) for the glow stick investigation.',
        marks: 4,
        ph: 'IV: temperature; DV: time glow stick glows; CVs: type of glow stick, volume of water',
      },
      {
        label: 'e',
        text: '**Formulate** a hypothesis for this investigation using an If/Then/Because structure.',
        marks: 3,
        ph: 'If temperature increases, then glow time decreases, because reaction rate increases',
      },
      {
        label: 'f',
        text: 'The student calculated average data and plotted a graph of average time (min) vs temperature (°C). **Predict** the time taken for the glow stick to stop glowing at 15°C.',
        marks: 2,
        ph: '330 ± 10 minutes',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Average time taken for the glow stick to stop glowing',
            xLabel: 'Temperature of water',
            yLabel: 'Time the glow stick glows',
            xUnit: '°C',
            yUnit: 'min',
            xMin: 0,
            xMax: 70,
            yMin: 0,
            yMax: 600,
            xStep: 10,
            yStep: 100,
            dataPoints: [
              { x: 5, y: 535 },
              { x: 10, y: 420 },
              { x: 20, y: 255 },
              { x: 25, y: 200 },
              { x: 30, y: 150 },
              { x: 35, y: 120 },
              { x: 50, y: 75 },
              { x: 65, y: 65 },
            ],
          },
          caption: 'Read the glow time between the 10 °C and 20 °C points to predict the value at 15 °C.',
        },
      },
      {
        label: 'g',
        text: 'A glow stick contains 6.58 × 10⁵ molecules of phenyl oxalate. The time for the reaction to stop at 20°C is 260 minutes. **Calculate** the rate at which the phenyl oxalate molecules are used up at this temperature. You should include appropriate units in your answer.',
        marks: 4,
        ph: 'rate = 6.58×10⁵ ÷ 260 ≈ 2530 molecules min⁻¹',
      },
    ],
  },

  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Sunscreen and UV protection investigation',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 20,
    stem: 'Sunlight is important for producing vitamin D and energy. However, exposure to UV light increases the risk of skin cancer. It is recommended to apply sunscreen every 20–30 minutes. Sunscreen contains several chemical compounds including homosalate, titanium dioxide, zinc oxide, and others. A student investigated how many UV-reactive beads changed colour when protected from UV light by three different sunscreens: Hi-Sun (100% beads changed), Solar Flex (28% changed), Aurum (10% changed).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Sunscreen', 'Active ingredients', 'Beads that changed colour after 20 min in UV light / %'],
        rows: [
          ['Hi-Sun', 'avobenzone, homosalate, octisalate, octocrylene, oxybenzone', '100'],
          ['Solar Flex', 'homosalate, octisalate, octinoxate, titanium dioxide', '28'],
          ['Aurum', 'octinoxate, octisalate, octocrylene, zinc oxide', '10'],
        ],
      },
      caption: 'Fewer beads changing colour means more UV was blocked, so the sunscreen is more effective.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** which is the most effective sunscreen.',
        marks: 1,
        ph: 'Aurum (fewest beads changed colour = best UV block)',
      },
      {
        label: 'b',
        text: 'The experimental method uses a UV lamp as a substitute for natural sunlight. **Outline** why this UV lamp is not a good model for natural sunlight.',
        marks: 2,
        ph: 'Sunlight covers IR, visible and UV; the UV lamp emits only the UV bands, so it omits the IR/visible parts of real sunlight',
        artefact: {
          component: 'SpectrumSim',
          data: {
            title: 'Light emitted by different sources',
            mode: 'sources',
            energyAxis: 'Energy increases →',
            bands: ['IR', 'Visible', 'UVA', 'UVB', 'UVC'],
            sources: [
              { name: 'Heat lamp', covers: ['IR', 'Visible'] },
              { name: 'Light bulb', covers: ['Visible'] },
              { name: 'UV lamp', covers: ['UVA', 'UVB', 'UVC'] },
              { name: 'Sunlight', covers: ['IR', 'Visible', 'UVA', 'UVB', 'UVC'] },
            ],
          },
          caption: 'Toggle each source to see the bands it emits. Sunlight covers the whole range; the UV lamp emits only the UV bands.',
        },
      },
      {
        label: 'c',
        text: 'Using the equipment below, **design** an investigation to determine which of the individual chemical compounds present in Solar Flex sunscreen provides the best protection from the sun. In your answer you should include: an identification of the variables, a list of the additional equipment you will use, details of your method for manipulating the variables, details of the data you will collect, and how you will ensure your method is safe.',
        marks: 17,
        ph: 'Crit B design: IV=sunscreen ingredient, DV=% beads changed, CVs=time/concentration/UV source',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Equipment provided', 'Use'],
            rows: [
              ['UV-reactive beads', 'change colour when exposed to UV light (the dependent measure)'],
              ['UV lamp', 'provides a controlled UV light source'],
              ['Solar Flex ingredients: homosalate, octisalate, octinoxate, titanium dioxide', 'the individual compounds to be tested (the independent variable)'],
              ['Petri dishes / clear sample trays', 'hold a fixed number of beads under each ingredient'],
              ['Stopwatch', 'fix the exposure time for every trial'],
              ['Notebook and pen', 'record how many beads changed colour'],
            ],
          },
          caption: 'Equipment available for the design task. Use it to plan how to test which single ingredient blocks the most UV.',
        },
      },
    ],
  },

  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Sunscreen data analysis and myporium experiment',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 10,
    stem: 'Solar Flex was one of the sunscreens investigated in question 5. Solar Flex contains: Homosalate, Octisalate, Octinoxate, Titanium dioxide. The research question was: "Is titanium dioxide the best blocker of UV light?" Chemists are also analysing a new chemical, myporium, to see if it can be used to block UV light in sunscreens. They make different concentrations of myporium and measure absorbance (AU). Concentrations tested (μmol dm⁻³): 0, 10, 30, 50, 70, 90, 100.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Concentration of myporium / μmol dm⁻³', 'Absorbance / AU'],
        rows: [
          ['0', '0.00'],
          ['10', '0.15'],
          ['30', '0.46'],
          ['50', '0.60'],
          ['70', '0.55'],
          ['90', '0.90'],
          ['100', '1.00'],
        ],
      },
      caption: 'Absorbance of myporium at increasing concentration. Note the 70 μmol dm⁻³ value does not fit the upward trend.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** how you will use the data from the investigation in question 5 to decide if the research question "Is titanium dioxide the best blocker of UV light?" is supported.',
        marks: 2,
        ph: 'Compare beads changed per ingredient; if TiO₂ has fewest changed beads, RQ is supported',
      },
      {
        label: 'b',
        text: '**Suggest** an extension that could be made to the investigation into the effectiveness of the sunscreen ingredients.',
        marks: 1,
        ph: 'Use different concentrations / combinations / expose to real sunlight',
      },
      {
        label: 'c',
        text: 'The results show absorbance increasing with concentration (data: 0→0.00, 10→0.15, 30→0.46, 50→0.60, 70→0.55 anomalous, 90→0.90, 100→1.00 AU). **Plot** a graph of absorbance versus concentration of myporium. Label the axes, give your graph a suitable title, and add a line of best fit.',
        marks: 6,
        ph: 'Title links absorbance and concentration; LOBF from (0,0) through all except 70 μmol dm⁻³',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Absorbance of myporium against concentration',
            xLabel: 'Concentration of myporium',
            yLabel: 'Absorbance',
            xUnit: 'μmol dm⁻³',
            yUnit: 'AU',
            xMin: 0,
            xMax: 100,
            yMin: 0,
            yMax: 1.0,
            xStep: 10,
            yStep: 0.1,
            lobf: true,
            dataPoints: [
              { x: 0, y: 0.0 },
              { x: 10, y: 0.15 },
              { x: 30, y: 0.46 },
              { x: 50, y: 0.6 },
              { x: 70, y: 0.55 },
              { x: 90, y: 0.9 },
              { x: 100, y: 1.0 },
            ],
          },
          caption: 'Plotted absorbance vs concentration with a line of best fit. The 70 μmol dm⁻³ point lies below the line (anomalous).',
        },
      },
      {
        label: 'd',
        text: '**Comment** on the reliability of the data.',
        marks: 1,
        ph: 'Anomalous point at 70 μmol dm⁻³ or only one trial / no averages',
      },
    ],
  },

  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Climate change, carbon cycle, and redox reactions',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 12,
    stem: 'Climate change is a global threat recognised by the IPCC. Increased CO₂ from fossil fuels and industrial processes has raised Earth\'s average temperature. In the natural carbon cycle, CO₂ is removed by photosynthesis: carbon dioxide + water → glucose + oxygen. Extensive deforestation reduces this natural carbon sink. Scientists propose reacting Fe with CO₂ and H₂O to form iron carbonate and hydrogen gas: Fe + CO₂ + H₂O → FeCO₃(s) + H₂(g).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Reactant', 'Melting point / °C', 'Boiling point / °C', 'Physical state at 25 °C'],
        rows: [
          ['Iron, Fe', '1538', '2861', 'solid (s)'],
          ['Carbon dioxide, CO₂', '−78 (sublimes)', '−78', 'gas (g)'],
          ['Water, H₂O', '0', '100', 'liquid (l)'],
        ],
      },
      caption: 'Melting and boiling points fix the physical state of each reactant at 25 °C — use these to choose the correct state symbols.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the photosynthesis equation and your wider MYP studies, **suggest** an impact on the community due to deforestation. **Justify** your answer.',
        marks: 2,
        ph: 'Less food/glucose synthesised / more CO₂; justify: fewer plants = less photosynthesis',
      },
      {
        label: 'b',
        text: 'One way to reduce CO₂ is to react it with other chemicals to form a solid material. **Select** the state symbols for the reactants in the equation if the reaction was at 25°C: Fe(?) + CO₂(?) + H₂O(?) → FeCO₃(s) + H₂(g)',
        marks: 2,
        ph: 'Fe(s), CO₂(g), H₂O(l) at 25°C',
        widget: 'inline_dropdown_select',
        widgetItems: ['Fe', 'CO₂', 'H₂O'],
        widgetOptions: ['(s)', '(l)', '(g)', '(aq)'],
      },
      {
        label: 'c',
        text: '**Select** the name of FeCO₃.',
        marks: 1,
        ph: 'Iron(II) carbonate',
        widget: 'radio_select',
        widgetOptions: ['Iron(II) carbonate', 'Iron(III) carbonate', 'Iron(II) bicarbonate', 'Iron(II) sulfate'],
      },
      {
        label: 'd',
        text: '**Describe** what happens to iron in the reaction Fe + CO₂ + H₂O → FeCO₃(s) + H₂(g) in terms of redox chemistry.',
        marks: 3,
        ph: 'Oxidation number increases from 0 to +2; iron is oxidised (loses electrons)',
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
        text: '**Outline** why the combustion of hydrogen is better for the environment than the combustion of petrol.',
        marks: 2,
        ph: 'Only product is water / no CO₂, NOx, or SOx; product is non-toxic',
      },
    ],
  },

  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'CO₂ reduction systems — evaluation essay',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 15,
    stem: 'Scientists have been developing different systems of carbon dioxide sinks to deal with climate change. Three possible systems are: System 1 — Ferrock (new construction material made from waste iron and glass bottles that absorbs CO₂; harder and more stable than concrete; removal of 50 kg CO₂ costs USD10); System 2 — Carbon dioxide capture (CDC) (dissolves CO₂ in carbonate solution; at early stage; scientists exploring combining trapped CO₂ with H₂ to produce hydrocarbons; removal of 50 kg CO₂ costs USD10); System 3 — Conversion of desert areas (plant growth with cell-wall substances retains water/nutrients; reduces sand storms; removal of 50 kg CO₂ costs USD20).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['System', 'How it removes CO₂', 'Cost to remove 50 kg CO₂ / USD', 'Stage of development', 'Key benefits'],
        rows: [
          ['1 — Ferrock', 'waste iron + glass bottles absorb CO₂ as a building material sets', '10', 'in use', 'recycles waste; harder and more stable than concrete; reuses glass'],
          ['2 — Carbon dioxide capture (CDC)', 'CO₂ dissolved in carbonate solution; may be combined with H₂ to make hydrocarbons', '10', 'early / experimental', 'could produce useful fuels; low cost'],
          ['3 — Conversion of desert areas', 'plant-growth material retains water and nutrients so plants store carbon', '20', 'trialled (e.g. China)', 'frees land for agriculture; reduces sand storms; supports communities'],
        ],
      },
      caption: 'Comparison of three carbon-dioxide-sink systems. Use the cost, development stage and benefits to evaluate any two of them.',
    },
    tasks: [
      {
        label: '',
        text: 'Using the information in the media and your wider MYP studies, **discuss** and **evaluate** two of the three systems. In your answer you should include: the need for carbon dioxide sinks; the economic impact of each system; the social impact of each system; scientific advantages and disadvantages of each system; a concluding appraisal recommending which is the best system.',
        marks: 15,
        ph: 'Crit D essay: discuss need for CO₂ sinks, evaluate 2 systems on economic/social/scientific grounds',
      },
    ],
  },
]
