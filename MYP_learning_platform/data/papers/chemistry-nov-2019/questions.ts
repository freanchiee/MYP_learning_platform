import type { Question } from '@/lib/types'

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
  id: 'chemistry-nov-2019',
  subject: 'Chemistry',
  session: 'November',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Terracotta / Nacrite clay (4 marks, Crit A) ─────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic structure & the periodic table',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 4,
    stem: 'Terracotta is made from baked clay. Clay is composed of a number of minerals including kaolin. One of the main compounds found in kaolin is nacrite. The formula for nacrite is Al₂Si₂O₅(OH)₄.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="260" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of the periodic table — Period 3</text><g font-size="9" fill="#64748b" text-anchor="middle"><text x="70" y="44">Group 1</text><text x="130" y="44">Group 2</text><text x="250" y="44">Group 3</text><text x="310" y="44">Group 4</text><text x="370" y="44">Group 5</text><text x="430" y="44">Group 6</text><text x="490" y="44">Group 7</text></g><g><rect x="40" y="52" width="60" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="70" y="80" font-size="16" font-weight="700" text-anchor="middle" fill="#475569">Na</text><text x="70" y="95" font-size="8" text-anchor="middle" fill="#64748b">11</text></g><g><rect x="100" y="52" width="60" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="130" y="80" font-size="16" font-weight="700" text-anchor="middle" fill="#475569">Mg</text><text x="130" y="95" font-size="8" text-anchor="middle" fill="#64748b">12</text></g><g><rect x="220" y="52" width="60" height="50" fill="#fff7ed" stroke="#5b6b78"/><text x="250" y="74" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Al</text><text x="250" y="88" font-size="8" text-anchor="middle" fill="#64748b">aluminium · 13</text><text x="250" y="98" font-size="7" text-anchor="middle" fill="#94a3ad">Group 3 · Period 3</text></g><g><rect x="280" y="52" width="60" height="50" fill="#e6fcf5" stroke="#5b6b78"/><text x="310" y="74" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">Si</text><text x="310" y="88" font-size="8" text-anchor="middle" fill="#64748b">silicon · 14</text><text x="310" y="98" font-size="7" text-anchor="middle" fill="#94a3ad">Group 4 · Period 3</text></g><g><rect x="340" y="52" width="60" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="370" y="80" font-size="16" font-weight="700" text-anchor="middle" fill="#475569">P</text><text x="370" y="95" font-size="8" text-anchor="middle" fill="#64748b">15</text></g><g><rect x="400" y="52" width="60" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="430" y="80" font-size="16" font-weight="700" text-anchor="middle" fill="#475569">S</text><text x="430" y="95" font-size="8" text-anchor="middle" fill="#64748b">16</text></g><g><rect x="460" y="52" width="60" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="490" y="80" font-size="16" font-weight="700" text-anchor="middle" fill="#475569">Cl</text><text x="490" y="95" font-size="8" text-anchor="middle" fill="#64748b">17</text></g><text x="40" y="130" font-size="11" fill="#475569">Period number = the row (number of occupied electron shells).</text><text x="40" y="148" font-size="11" fill="#475569">Group number (main groups) = number of outer-shell electrons.</text><line x1="40" y1="162" x2="520" y2="162" stroke="#e2e8f0"/><text x="280" y="184" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Bonding in the Group-4 oxides</text><g font-size="10"><text x="60" y="208" fill="#0b7285" font-weight="700">CO₂ — simple molecular</text><text x="60" y="224" fill="#475569">O=C=O · discrete molecules, weak forces between them</text><text x="60" y="240" fill="#e8590c" font-weight="700">SiO₂ — giant covalent</text><text x="60" y="256" fill="#475569">every Si bonded to 4 O in a continuous 3-D network</text></g></svg>',
      },
      caption: 'Aluminium (Group 3) and silicon (Group 4) both sit in Period 3; carbon and silicon are both Group 4, so CO₂ and SiO₂ share a formula type but differ in structure.',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: 'State the number of oxygen atoms in nacrite, Al₂Si₂O₅(OH)₄.',
        marks: 1,
        ph: 'Count all O in formula',
      },
      {
        label: 'b',
        text: 'Two of the elements in nacrite are aluminium and silicon. Identify the group and period of each element in the periodic table.',
        marks: 2,
        ph: 'Al: Group 3 Period 3; Si: Group 4 Period 3',
        widget: 'inline_dropdown_select',
        widgetItems: ['Aluminium – Group', 'Aluminium – Period', 'Silicon – Group', 'Silicon – Period'],
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7'],
      },
      {
        label: 'c',
        text: 'Silica has the chemical formula SiO₂. Silicon is in the same group as carbon and their oxides have similar formulas. Silica has a giant covalent structure but carbon dioxide has a simple molecular structure. Select the diagram that shows the Lewis electron dot structure of carbon dioxide.',
        marks: 1,
        ph: 'Shared pairs; double bonds on C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><text x="280" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four possible Lewis (electron-dot) structures for CO₂</text><g font-size="9" fill="#94a3ad" text-anchor="middle"><text x="280" y="36">In CO₂ each O shares two pairs with C (a double bond) — count 8 electrons round every atom</text></g><!-- ===== Panel A : single bonds, incomplete octet (WRONG) ===== --><g><rect x="20" y="50" width="255" height="115" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="34" y="70" font-size="13" font-weight="700" fill="#475569">A</text><text x="148" y="118" font-size="22" text-anchor="middle" fill="#1f2d3a">O — C — O</text><g fill="#dc2626"><circle cx="86" cy="100" r="2.6"/><circle cx="96" cy="100" r="2.6"/><circle cx="86" cy="136" r="2.6"/><circle cx="96" cy="136" r="2.6"/><circle cx="200" cy="100" r="2.6"/><circle cx="210" cy="100" r="2.6"/><circle cx="200" cy="136" r="2.6"/><circle cx="210" cy="136" r="2.6"/></g><text x="148" y="156" font-size="9" text-anchor="middle" fill="#94a3ad">single bonds — carbon has only 4 shared electrons</text></g><!-- ===== Panel B : two double bonds, full octets (CORRECT) ===== --><g><rect x="285" y="50" width="255" height="115" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="299" y="70" font-size="13" font-weight="700" fill="#475569">B</text><text x="413" y="118" font-size="22" text-anchor="middle" fill="#1f2d3a">O = C = O</text><g fill="#dc2626"><circle cx="350" cy="100" r="2.6"/><circle cx="360" cy="100" r="2.6"/><circle cx="350" cy="136" r="2.6"/><circle cx="360" cy="136" r="2.6"/><circle cx="466" cy="100" r="2.6"/><circle cx="476" cy="100" r="2.6"/><circle cx="466" cy="136" r="2.6"/><circle cx="476" cy="136" r="2.6"/></g><text x="413" y="156" font-size="9" text-anchor="middle" fill="#94a3ad">two C=O double bonds — every atom has a full octet</text></g><!-- ===== Panel C : triple bonds (WRONG) ===== --><g><rect x="20" y="180" width="255" height="115" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="34" y="200" font-size="13" font-weight="700" fill="#475569">C</text><text x="148" y="248" font-size="22" text-anchor="middle" fill="#1f2d3a">O ≡ C ≡ O</text><g fill="#dc2626"><circle cx="86" cy="232" r="2.6"/><circle cx="96" cy="232" r="2.6"/><circle cx="200" cy="232" r="2.6"/><circle cx="210" cy="232" r="2.6"/></g><text x="148" y="286" font-size="9" text-anchor="middle" fill="#94a3ad">triple bonds — too many electrons around carbon</text></g><!-- ===== Panel D : double bonds but lone pairs on C (WRONG) ===== --><g><rect x="285" y="180" width="255" height="115" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="299" y="200" font-size="13" font-weight="700" fill="#475569">D</text><text x="413" y="248" font-size="22" text-anchor="middle" fill="#1f2d3a">O = C = O</text><g fill="#dc2626"><circle cx="408" cy="226" r="2.6"/><circle cx="418" cy="226" r="2.6"/><circle cx="408" cy="262" r="2.6"/><circle cx="418" cy="262" r="2.6"/></g><text x="413" y="286" font-size="9" text-anchor="middle" fill="#94a3ad">lone pairs wrongly placed on the central carbon</text></g></svg>',
          },
          caption: 'Choose the structure where carbon forms two double bonds (O=C=O) and every atom has a complete octet. Option B is the correct Lewis structure of CO₂.',
        },
      },
    ],
  },

  // ─── Q2: Slinky / Steel + Lead cooling curve (11 marks, Crit A) ──────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Properties of metals & mixtures',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 11,
    stem: 'The Slinky was invented in 1943 and was made of a type of high carbon steel. High carbon steel is composed of iron with carbon and manganese. In the 1970s, plastic became more common and a large number of cheaper Slinkys were produced from this new material.',
    artefact: {
      component: 'ThermalSim',
      data: {
        title: 'Cooling curve of a sample of lead',
        mode: 'cool',
        substance: 'lead',
        timeUnit: 'minutes',
        tempUnit: '°C',
        timeMin: 0,
        totalTime: 20,
        yMinC: 300,
        yMaxC: 350,
        yTicksC: [300, 310, 320, 330, 340, 350],
        startTempC: 350,
        endTempC: 305,
        plateaus: [{ atC: 327, label: 'freezing', fromTime: 2, toTime: 11 }],
        markers: [
          { id: 'A', time: 1, tempC: 338, state: 'liquid' },
          { id: 'B', time: 14, tempC: 320, state: 'solid' },
        ],
      },
      caption: 'Press play or scrub time to draw the cooling curve. Point A is on the steep liquid section; the flat plateau is the freezing point; point B is on the solid section after the plateau.',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: 'Select the term used to describe the mixture of iron, carbon and manganese that makes up steel.',
        marks: 1,
        ph: 'A mixture of metals / non-metals',
        widget: 'radio_select',
        widgetOptions: ['Allotrope', 'Alloy', 'Compound', 'Ester'],
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Type of steel', '% carbon', '% manganese', '% iron', 'Property'],
            rows: [
              ['Low carbon', '0.25', '0.40', '99.35', 'soft — loses its shape'],
              ['Medium carbon', '0.54', '1.65', '97.81', 'ductile'],
              ['High carbon', '0.95', '0.90', '98.15', 'springy — holds its shape'],
              ['Very high carbon', '2.10', '0.00', '97.90', 'hard but brittle — snaps'],
            ],
          },
          caption: 'Carbon-steel grades used for the original Slinky: more carbon makes the steel harder but more brittle.',
        },
      },
      {
        label: 'b',
        text: 'Suggest why low carbon steel and very high carbon steel would both be unsuitable materials to make a Slinky.',
        marks: 2,
        ph: 'Low C: too soft/malleable; Very high C: too brittle',
      },
      {
        label: 'c',
        text: 'The original Slinky was made from 24.4 m of high carbon steel wire. The mass of a Slinky is 0.405 kg. Calculate the number of moles of iron needed to make a Slinky, assuming that all the wire is made of iron. Give your answer to 2 significant figures.',
        marks: 4,
        ph: 'n = 405/56 = 7.2 mol',
      },
      {
        label: 'd',
        text: 'Old toy figures were sometimes made from lead. The graph below shows how the temperature of a sample of lead changes over time as it cools and solidifies. State the physical state of lead at point B on the graph.',
        marks: 1,
        ph: 'Solid',
      },
      {
        label: 'e',
        text: 'In the boxes below, draw the arrangement of particles at point A and point B on the cooling curve.',
        marks: 2,
        ph: 'A: irregular liquid arrangement; B: regular solid lattice',
      },
      {
        label: 'f',
        text: 'State the melting point of lead from the graph.',
        marks: 1,
        ph: '327 °C (accept ±1 °C)',
      },
    ],
  },

  // ─── Q3: Radioactive toys / Atomic Energy Lab (10 marks, Crit A) ─────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Radioactivity & atomic structure',
    topicCanonical: 'Nuclear Chemistry & Radioactivity',
    topicGroup: 'Nuclear Chemistry',
    marks: 10,
    stem: 'The Gilbert U-238 Atomic Energy Lab was a chemistry set produced in the 1950s. It contained real radioactive samples including strontium-90 and radium-226, alongside other materials such as zinc sulphide.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Sample in the kit', 'Symbol', 'Atomic number (Z)', 'Mass number (A)', 'Radioactive?'],
        rows: [
          ['Strontium-90', '⁹⁰Sr', '38', '90', 'yes'],
          ['Radium-226', '²²⁶Ra', '88', '226', 'yes'],
          ['Polonium-210', '²¹⁰Po', '84', '210', 'yes'],
          ['Lead-210', '²¹⁰Pb', '82', '210', 'yes'],
          ['Zinc sulphide', 'ZnS', '—', '—', 'no'],
        ],
      },
      caption: 'Samples supplied with the Atomic Energy Lab. Use Z and A to work out protons, neutrons and electrons: protons = Z, neutrons = A − Z, electrons = Z (neutral atom).',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: 'Strontium carbonate reacts with nitric acid. State the names of the products of this reaction.',
        marks: 2,
        ph: 'Strontium nitrate + carbon dioxide + water',
      },
      {
        label: 'b',
        text: 'Write a balanced symbol equation for the reaction of strontium carbonate with nitric acid.',
        marks: 3,
        ph: 'SrCO₃ + 2HNO₃ → Sr(NO₃)₂ + CO₂ + H₂O',
      },
      {
        label: 'c',
        text: 'Outline why having toys with zinc sulphide would be better for your health than those containing radium.',
        marks: 2,
        ph: 'ZnS not radioactive; radiation damages body cells',
      },
      {
        label: 'd',
        text: 'The Atomic Energy Lab also contained samples of polonium-210 (²¹⁰Po) and lead-210 (²¹⁰Pb). Determine the number of protons, neutrons and electrons in an atom of ²¹⁰Po and ²¹⁰Pb.',
        marks: 2,
        ph: 'Po: p=84,n=126,e=84; Pb: p=82,n=128,e=82',
        widget: 'inline_dropdown_select',
        widgetItems: ['Protons – ²¹⁰Po', 'Neutrons – ²¹⁰Po', 'Electrons – ²¹⁰Po', 'Protons – ²¹⁰Pb', 'Neutrons – ²¹⁰Pb', 'Electrons – ²¹⁰Pb'],
        widgetOptions: ['82', '83', '84', '85', '86', '126', '127', '128', '129', '130'],
      },
      {
        label: 'e',
        text: 'Select the hazard symbol used to warn people about radioactive materials.',
        marks: 1,
        ph: 'Trefoil radioactive symbol = C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four hazard symbols — which warns of radioactive material?</text><!-- ===== A : flammable (flame) ===== --><g><text x="70" y="48" font-size="13" font-weight="700" text-anchor="middle" fill="#475569">A</text><rect x="33" y="56" width="74" height="74" transform="rotate(45 70 93)" fill="#fff" stroke="#1f2d3a" stroke-width="2"/><path d="M70 70 C 60 84 80 88 70 104 C 84 100 86 84 76 76 C 78 82 74 84 70 80 C 72 76 70 72 70 70 Z" fill="#ea580c"/><text x="70" y="150" font-size="9" text-anchor="middle" fill="#94a3ad">flammable</text></g><!-- ===== B : toxic (skull and crossbones) ===== --><g><text x="210" y="48" font-size="13" font-weight="700" text-anchor="middle" fill="#475569">B</text><rect x="173" y="56" width="74" height="74" transform="rotate(45 210 93)" fill="#fff" stroke="#1f2d3a" stroke-width="2"/><g fill="#1f2d3a"><circle cx="210" cy="86" r="13"/><circle cx="205" cy="84" r="2.6" fill="#fff"/><circle cx="215" cy="84" r="2.6" fill="#fff"/><rect x="207" y="96" width="6" height="6"/><line x1="196" y1="106" x2="224" y2="118" stroke="#1f2d3a" stroke-width="3"/><line x1="224" y1="106" x2="196" y2="118" stroke="#1f2d3a" stroke-width="3"/></g><text x="210" y="150" font-size="9" text-anchor="middle" fill="#94a3ad">toxic</text></g><!-- ===== C : radioactive (trefoil) — CORRECT ===== --><g><text x="350" y="48" font-size="13" font-weight="700" text-anchor="middle" fill="#475569">C</text><rect x="313" y="56" width="74" height="74" transform="rotate(45 350 93)" fill="#fde047" stroke="#1f2d3a" stroke-width="2"/><g fill="#1f2d3a"><circle cx="350" cy="93" r="6"/><path d="M350 93 L341 77 A 18 18 0 0 1 359 77 Z"/><path d="M350 93 L366 102 A 18 18 0 0 1 357 118 Z"/><path d="M350 93 L343 118 A 18 18 0 0 1 334 102 Z"/></g><text x="350" y="150" font-size="9" text-anchor="middle" fill="#94a3ad">radioactive</text></g><!-- ===== D : corrosive (hand/surface + drips) ===== --><g><text x="490" y="48" font-size="13" font-weight="700" text-anchor="middle" fill="#475569">D</text><rect x="453" y="56" width="74" height="74" transform="rotate(45 490 93)" fill="#fff" stroke="#1f2d3a" stroke-width="2"/><g stroke="#1f2d3a" stroke-width="2" fill="none"><line x1="468" y1="100" x2="512" y2="100"/><path d="M476 100 L474 88 L478 88 Z" fill="#1f2d3a" stroke="none"/><path d="M492 100 L490 84 L494 84 Z" fill="#1f2d3a" stroke="none"/></g><path d="M470 104 q4 8 8 0" stroke="#1f2d3a" stroke-width="2" fill="none"/><text x="490" y="150" font-size="9" text-anchor="middle" fill="#94a3ad">corrosive</text></g></svg>',
          },
          caption: 'The radioactive warning is the three-bladed trefoil on a yellow background — option C. A is flammable, B is toxic, D is corrosive.',
        },
      },
    ],
  },

  // ─── Q4: Hydrogels experiment (16 marks, Crit B/C) ────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Scientific investigation – hydrogels',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 16,
    stem: 'A student investigates how much water different hydrogels can absorb. The student measures 400 cm³ of water into a beaker, adds a fixed mass of hydrogel, stirs for 5 minutes, and then pours the mixture through a filter. The volume of water left over is recorded.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Hydrogel', 'Volume of water remaining / cm³ (trial 1)', 'Trial 2', 'Trial 3', 'Mean / cm³'],
        rows: [
          ['Hydrogel 1', '62', '59', '59', '60'],
          ['Hydrogel 2', '81', '79', '80', '80'],
          ['Hydrogel 3', '69', '67', '68', '68'],
          ['Hydrogel 4', '151', '149', '150', '150'],
          ['Hydrogel 5', '122', '119', '119', '120'],
        ],
      },
      caption: 'Raw data: each hydrogel was added to 400 cm³ of water. Volume absorbed = 400 − volume remaining (so Hydrogel 1 absorbs 400 − 60 = 340 cm³).',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: 'Identify the independent variable (IV), dependent variable (DV) and two controlled variables (CVs) for this investigation.',
        marks: 4,
        ph: 'IV=type of hydrogel; DV=volume water absorbed; CVs=mass, temperature',
      },
      {
        label: 'b',
        text: 'The student collects the following data. Organise the raw data into a suitable table.',
        marks: 4,
        ph: 'Table: hydrogel type | volume water remaining (cm³) | 3 trials',
      },
      {
        label: 'c',
        text: 'Using the data in the table, draw a suitable graph to display the results.',
        marks: 4,
        ph: 'Bar chart; title; x=hydrogel type; y=volume/cm³; data plotted',
      },
      {
        label: 'd',
        text: 'A student says the graph directly answers the research question "Which hydrogel absorbs the most water?" Is the student correct? Explain your answer.',
        marks: 1,
        ph: 'No — raw data is water NOT absorbed; must process',
        widget: 'radio_select',
        widgetOptions: ['Yes', 'No'],
      },
      {
        label: 'e',
        text: 'Using the data in part (b), explain which hydrogel you could use to absorb 340 cm³ of water. You should use calculations to support your answer.',
        marks: 3,
        ph: 'Hydrogel 1: 400−60=340 cm³ absorbed; most water absorbed',
      },
    ],
  },

  // ─── Q5: Disposable vs reusable nappies (20 marks, Crit D+B) ─────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Environmental impact & experimental design',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 20,
    stem: 'The main absorbent material in disposable nappies is hydrogel. In the UK, 2–3 % of all household waste is estimated to be disposable nappies. This is approximately 3 × 10⁹ nappies, equivalent to approximately 5 × 10⁵ kg of waste (nappy + body waste) each year. The alternative is reusable nappies, which reduce demands on landfill but require energy and water for washing.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Factor (per child)', 'Disposable nappies', 'Reusable cotton nappies'],
        rows: [
          ['Made of', 'plastic backing, hydrogel, paper', 'cotton with wool or plastic outer'],
          ['Pesticides used?', 'no', 'yes (cotton growing)'],
          ['Mass of fluff pulp used / kg', '108', '0'],
          ['Mass of cotton used / kg', '0', '2.3'],
          ['Energy used in production / kWh', '338', '57'],
          ['Water polluted in production / dm³', '10500', '1100'],
          ['Total raw materials used / kg', '123', '2.3'],
          ['Times each nappy is reused', '1', '167'],
          ['Laundry energy per nappy / kWh', 'none', '141'],
          ['Detergent used / kg', '0', '32'],
          ['Water polluted in use / dm³', '1500', '6200'],
          ['Waste mass to landfill / kg', '221', '30'],
        ],
      },
      caption: 'Life-cycle comparison of disposable and reusable nappies (production + use). Each column has environmental costs — use the data to weigh up which causes less harm.',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: 'Discuss the environmental impacts and advantages and disadvantages of using disposable nappies compared to reusable nappies. Include a conclusion that appraises which type causes less harm to the environment.',
        marks: 5,
        ph: 'Disposable: landfill/waste/energy in production; Reusable: water/energy for washing; balanced conclusion',
      },
      {
        label: 'b',
        text: 'Design an investigation to test which of five different nappy brands absorbs the most water. Your investigation should include the independent and dependent variables, how you will control variables, the equipment needed, sufficient data collection, and a method that could be replicated to produce relevant data.',
        marks: 15,
        ph: 'IV=nappy brand; DV=volume absorbed; CVs=mass, temp, time; 5 brands×3 trials; detailed replicable method',
      },
    ],
  },

  // ─── Q6: Nappy brand data analysis (8 marks, Crit C+B) ──────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data analysis – nappy absorbency',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 8,
    stem: 'A student investigates different brands of nappy. Each nappy contains a different mass of hydrogel and a different mass of fluff pulp (cellulose material). The student measures the total volume of water each brand absorbs.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Nappy composition', 'Pugs', 'Hamps', 'Little Angels', 'Little Ones', 'Cuties'],
        rows: [
          ['Fluff pulp / g', '6.20', '1.95', '3.10', '5.40', '4.10'],
          ['Hydrogel / g', '4.10', '4.30', '5.65', '6.10', '5.20'],
          ['Total mass of fluff pulp + hydrogel / g', '10.30', '6.25', '8.75', '11.50', '9.30'],
          ['Water absorbed by fluff pulp / g', '62.0', '19.5', '31.0', '54.0', '41.0'],
          ['Water absorbed by hydrogel / g', '182.6', '118.8', '139.2', '173.5', '156.5'],
          ["Nappy's total absorption / g", '244.6', '138.3', '170.2', '227.5', '197.5'],
        ],
      },
      caption: 'Composition and absorption of five nappy brands. Note that Pugs absorbs the most water overall yet contains the least hydrogel.',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: 'Using the data, make three statements about the relationship between the nappy components and the volume of water absorbed.',
        marks: 3,
        ph: 'Not supported: Pugs most absorbent; Pugs least hydrogel; fluff pulp also affects absorption',
      },
      {
        label: 'b',
        text: 'A student suggests that the mass of hydrogel determines the volume of water absorbed. Using an if–then–because framework, explain how the data supports or does not support this suggestion.',
        marks: 3,
        ph: 'If hydrogel increases, then water absorbed increases, because hydrogel absorbs water; OR data shows Pugs contradicts this',
      },
      {
        label: 'c',
        text: 'Fluff pulp is found in nappies alongside hydrogel. Suggest how fluff pulp helps the hydrogel absorb urine.',
        marks: 2,
        ph: 'Fluff pulp removes ions; hydrogel absorbs pure water',
      },
    ],
  },

  // ─── Q7: Chromatography of nappy dyes (8 marks, Crit C) ─────────────────
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Chromatography & data interpretation',
    topicCanonical: 'Separation & Purification',
    topicGroup: 'States of Matter',
    marks: 8,
    stem: 'A scientist investigates the dyes used to colour disposable nappies. The scientist tests four different dyes (A, B, C and D) and a sample from the nappy using chromatography.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="330" fill="#ffffff"/><text x="280" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Chromatogram of nappy dyes</text><!-- solvent front --><line x1="40" y1="132" x2="490" y2="132" stroke="#94a3ad" stroke-width="1.5" stroke-dasharray="6 4"/><text x="494" y="135" font-size="9" fill="#94a3ad">solvent front (3.7 cm)</text><!-- baseline --><line x1="40" y1="280" x2="490" y2="280" stroke="#cbd5e1" stroke-width="1.5"/><text x="494" y="283" font-size="9" fill="#94a3ad">baseline (0 cm)</text><!-- lane labels --><g font-size="9" text-anchor="middle"><text x="80" y="300" fill="#1f2d3a" font-weight="700">Recalled</text><text x="80" y="311" fill="#475569">nappy sample</text><text x="165" y="300" fill="#1f2d3a" font-weight="700">Dye A</text><text x="165" y="311" fill="#16a34a">not harmful</text><text x="250" y="300" fill="#1f2d3a" font-weight="700">Dye B</text><text x="250" y="311" fill="#16a34a">not harmful</text><text x="335" y="300" fill="#1f2d3a" font-weight="700">Dye C</text><text x="335" y="311" fill="#dc2626">irritant</text><text x="420" y="300" fill="#1f2d3a" font-weight="700">Dye D</text><text x="420" y="311" fill="#16a34a">not harmful</text></g><!-- baseline origin crosses --><g stroke="#dc2626" stroke-width="1.5"><line x1="74" y1="280" x2="86" y2="280"/><line x1="80" y1="274" x2="80" y2="286"/><line x1="159" y1="280" x2="171" y2="280"/><line x1="165" y1="274" x2="165" y2="286"/><line x1="244" y1="280" x2="256" y2="280"/><line x1="250" y1="274" x2="250" y2="286"/><line x1="329" y1="280" x2="341" y2="280"/><line x1="335" y1="274" x2="335" y2="286"/><line x1="414" y1="280" x2="426" y2="280"/><line x1="420" y1="274" x2="420" y2="286"/></g><!-- Recalled sample: red 2.95cm, yellow 1.78cm, green 0.90cm --><g><ellipse cx="80" cy="162" rx="9" ry="13" fill="#ef4444" opacity="0.85"/><ellipse cx="80" cy="209" rx="9" ry="13" fill="#facc15" opacity="0.9"/><ellipse cx="80" cy="244" rx="9" ry="13" fill="#22c55e" opacity="0.85"/></g><!-- Dye A: single orange spot (2.4cm) --><g><ellipse cx="165" cy="184" rx="9" ry="13" fill="#fb923c" opacity="0.9"/></g><!-- Dye B: red 2.95cm + green 0.90cm (missing the irritant yellow) --><g><ellipse cx="250" cy="162" rx="9" ry="13" fill="#ef4444" opacity="0.85"/><ellipse cx="250" cy="244" rx="9" ry="13" fill="#22c55e" opacity="0.85"/></g><!-- Dye C: red 2.95 + yellow 1.78 + green 0.90 — matches sample --><g><ellipse cx="335" cy="162" rx="9" ry="13" fill="#ef4444" opacity="0.85"/><ellipse cx="335" cy="209" rx="9" ry="13" fill="#facc15" opacity="0.9"/><ellipse cx="335" cy="244" rx="9" ry="13" fill="#22c55e" opacity="0.85"/></g><!-- Dye D: red, yellow, green + extra blue 3.3cm --><g><ellipse cx="420" cy="148" rx="9" ry="13" fill="#3b82f6" opacity="0.85"/><ellipse cx="420" cy="162" rx="9" ry="13" fill="#ef4444" opacity="0.85"/><ellipse cx="420" cy="209" rx="9" ry="13" fill="#facc15" opacity="0.9"/><ellipse cx="420" cy="244" rx="9" ry="13" fill="#22c55e" opacity="0.85"/></g><!-- ruler 0-4 cm, 40px per cm, baseline=280 --><g><rect x="514" y="124" width="22" height="164" fill="#fef9c3" stroke="#b45309"/><g font-size="8" fill="#7c2d12" text-anchor="end"><text x="532" y="283">0</text><text x="532" y="243">1</text><text x="532" y="203">2</text><text x="532" y="163">3</text><text x="532" y="135">4</text></g><g stroke="#b45309" stroke-width="0.8"><line x1="514" y1="280" x2="522" y2="280"/><line x1="514" y1="240" x2="522" y2="240"/><line x1="514" y1="200" x2="522" y2="200"/><line x1="514" y1="160" x2="522" y2="160"/><line x1="514" y1="132" x2="522" y2="132"/></g></g></svg>',
      },
      caption: 'Five lanes run side by side. The recalled-sample pattern matches Dye C (red + yellow + green spots). Use the ruler (1 cm = the marked divisions): the yellow irritant spot in Dye C travels 1.78 cm and the solvent front travels 3.7 cm, so Rf = 1.78 ÷ 3.7 ≈ 0.48.',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: 'Identify the dye that the nappy sample contains. Justify your answer.',
        marks: 2,
        ph: 'Dye C; same spot pattern / same pigment components',
        widget: 'radio_select',
        widgetOptions: ['Dye A', 'Dye B', 'Dye C', 'Dye D'],
      },
      {
        label: 'b',
        text: 'For each of the other dyes, explain why they are not contained in the nappy sample.',
        marks: 3,
        ph: 'Other dyes lack same components; B has only 2 in common; D has extra pigment not in sample',
      },
      {
        label: 'c',
        text: 'The Rf value compares the distance moved by each spot with the distance moved by the solvent front. Calculate the Rf value of the spot responsible for the irritation in Dye C.',
        marks: 3,
        ph: 'Yellow spot distance ÷ solvent front; Rf ≈ 0.48',
      },
    ],
  },

  // ─── Q8: Plastics — functional groups & PET vs PLA (10 marks, Crit A+D) ──
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Organic chemistry – polymers & plastics',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 10,
    stem: 'Plastic is a synthetic material made from a variety of organic polymers. Polymers are made up from a large number of monomers that are chemically bonded together.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property (per 300 cm³ coffee cup)', 'PET', 'PLA'],
        rows: [
          ['Will it biodegrade?', 'no', 'yes, in managed composting facilities'],
          ['Made from', 'oil', 'annually renewable plants'],
          ['Should single-use bottles be refilled?', 'no, not recommended', 'yes'],
          ['Can be recycled?', 'yes, where facilities exist', 'no, then biodegrades and returns to nature'],
          ['Releases harmful toxins when incinerated?', 'yes', 'no'],
          ['Greenhouse-gas saving during production', '0 %', '60 % less than PET'],
          ['Oil saved', '—', '1 dm³ for every 24 cups produced vs PET'],
          ['Production capacity / k tonnes y⁻¹ (2015–2016)', '990', '220'],
          ['Cost / £ kg⁻¹', '0.9', '2'],
          ['Temperature at which it starts to melt / °C', '260', '160'],
          ['Specific heat capacity / J kg⁻¹ °C⁻¹', '1000', '1800'],
        ],
      },
      caption: 'Comparison of PET and PLA for take-away coffee cups. PLA is renewable and biodegradable but melts at a lower temperature, has lower production capacity and costs more.',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: 'Below are three different monomers used to make different types of plastic. Select the class name of the group that is circled in each monomer.',
        marks: 3,
        ph: 'A=Ester; B=Alcohol; C=Alkene',
        widget: 'inline_dropdown_select',
        widgetItems: ['Monomer A', 'Monomer B', 'Monomer C'],
        widgetOptions: ['Alkane', 'Alcohol', 'Ester', 'Carboxylic acid', 'Alkene'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="220" fill="#ffffff"/><text x="280" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Three monomers — name the circled functional group</text><!-- Monomer A: ester group circled --><g><text x="95" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">A</text><text x="60" y="120" font-size="14" fill="#1f2d3a">CH₂=CH—C</text><text x="150" y="105" font-size="14" fill="#1f2d3a">O</text><line x1="142" y1="112" x2="142" y2="100" stroke="#1f2d3a" stroke-width="1.2"/><line x1="145" y1="112" x2="145" y2="100" stroke="#1f2d3a" stroke-width="1.2"/><text x="150" y="135" font-size="14" fill="#1f2d3a">O—CH₃</text><ellipse cx="150" cy="118" rx="34" ry="28" fill="none" stroke="#dc2626" stroke-width="2"/></g><!-- Monomer B: alcohol -OH circled --><g><text x="280" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">B</text><text x="240" y="120" font-size="14" fill="#1f2d3a">CH₂=CH—O—H</text><ellipse cx="320" cy="116" rx="26" ry="20" fill="none" stroke="#dc2626" stroke-width="2"/></g><!-- Monomer C: alkene C=C circled --><g><text x="470" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">C</text><text x="430" y="120" font-size="14" fill="#1f2d3a">CH₂=CH₂</text><ellipse cx="466" cy="116" rx="40" ry="22" fill="none" stroke="#dc2626" stroke-width="2"/></g><text x="280" y="185" font-size="10" text-anchor="middle" fill="#94a3ad">The red ring marks the functional group to classify in each monomer.</text></svg>',
          },
          caption: 'Monomer A has the —COO— ester linkage circled; monomer B has the —OH alcohol group circled; monomer C has the C=C alkene double bond circled.',
        },
      },
      {
        label: 'b',
        text: 'Michelle, Yuri and Paul are excited to open their own new coffee shop. They are deciding which type of cup to use and want their cups to be environmentally friendly, practical to use and inexpensive to maximise profit. Using the table above, explain the advantages and disadvantages of using PLA compared to PET for the take-away cups in the coffee shop. In your answer you should outline the physical properties required in a coffee cup, describe the advantages and disadvantages that PLA has compared to PET, and justify whether PLA would make a suitable replacement for PET.',
        marks: 7,
        ph: 'PET properties; PLA biodegrade/renewable; PLA limited capacity/more expensive; justified conclusion',
      },
    ],
  },

  // ─── Q9: Algae-based plastics essay (13 marks, Crit D) ───────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Sustainability – algae-based vs oil-based plastics',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 13,
    stem: 'Most plastics are made from chemicals that come from oil. Scientists are finding innovative solutions to produce plastics that have less impact on the environment. One solution is to produce plastic using algae. Oil-based plastics are made from fossil fuels and have unlimited uses but they release greenhouse gases. Algae-based plastics can be made into new plastic alternatively it can be reused and made into household items. In some areas of the ocean, plastics form large islands of waste that pose threats to wildlife.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Consideration', 'Oil-based plastics', 'Algae-based plastics'],
        rows: [
          ['Raw material', 'crude oil (finite fossil fuel)', 'algae (renewable, grown on water/land)'],
          ['Sustainability of production', 'unsustainable — oil will run out', 'sustainable — algae regrows quickly'],
          ['Greenhouse gases from production', 'high — releases stored carbon', 'lower — algae absorb CO₂ as they grow'],
          ['End of use', 'persists for centuries; ocean waste islands', 'biodegradable; can be reused or returned to nature'],
          ['Range of uses', 'very wide; well-established', 'developing; fewer applications so far'],
          ['Cost to produce', 'low (mature industry)', 'higher (newer technology)'],
          ['Social impact', 'jobs in oil industry; pollution harms health', 'new green jobs; less plastic pollution'],
        ],
      },
      caption: 'Oil-based versus algae-based plastics across sustainability, environmental and social dimensions — use this to structure and justify your evaluation.',
    },
    figImages: [],
    tasks: [
      {
        label: '',
        text: 'Using your experience from your wider MYP studies and the information above, discuss and evaluate the impact of algae-based biodegradable plastics as a replacement for oil-based plastics. In your answer you should consider the sustainability of production of algae-based and oil-based plastics, the environmental impacts of the production and end of use of algae-based and oil-based plastics, the social impacts of the production, use and end of use of algae-based and oil-based plastics, and your opinion about replacing oil-based with algae-based plastics.',
        marks: 13,
        ph: 'Sustainability, environmental impacts, social impacts, justified conclusion on replacement',
      },
    ],
  },
]
