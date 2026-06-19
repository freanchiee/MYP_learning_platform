import type { PaperMeta } from '@/data/papers/chemistry-nov-2019/questions'
import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2019 · VARIANT 2  (isomorphic to chemistry-nov-2019)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context — DIFFERENT
// from variant 1 — with a self-contained data-driven INTERACTIVE artefact on
// EVERY question (zero raster images, zero markdown tables). Recomputed throughout.
//   THEME: aviation, space & the science lab.
//   Q1 Silicate mineral / periodic table:  nacrite clay → olivine Mg₂SiO₄ (meteorite / mantle)
//   Q2 Alloy + cooling curve:              steel Slinky → titanium aircraft spring + aluminium casting curve
//   Q3 Radioactivity / atomic structure:   1950s atom-lab → thorium camping gas mantles
//   Q4 Absorbency investigation (Crit C):  hydrogels → sodium-polyacrylate cat-litter granules
//   Q5 Sustainability + design (Crit B/D):  nappies → single-use vs reusable surgical gowns
//   Q6 Composition data (Crit C):          nappy components → absorbent-pad granule/fibre composition
//   Q7 Chromatography (Crit C):            nappy dyes → inks in marker pens
//   Q8 Polymers / functional groups:       PET vs PLA cups → HDPE vs PLA drink bottles
//   Q9 Sustainability essay (Crit D):      algae vs oil plastics → mushroom-mycelium vs polystyrene packaging
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2019-v2',
  subject: 'Chemistry',
  session: 'November',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Olivine Mg₂SiO₄ / meteorite mineral (4 marks, Crit A) ───────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic structure & the periodic table',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 4,
    stem: 'Olivine is a green silicate mineral found in the Earth\'s mantle and in some stony meteorites that fall from space. Geologists use it to study how rocky planets form. The most common form of olivine is forsterite, with the chemical formula Mg₂SiO₄.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 430" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="430" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Olivine (forsterite)  Mg₂SiO₄</text><g font-size="12" fill="#334155"><rect x="40" y="48" width="120" height="108" rx="8" fill="#eef4f7" stroke="#5b6b78"/><text x="100" y="72" text-anchor="middle" font-weight="700" fill="#0b7285">Atoms per formula</text><text x="100" y="100" text-anchor="middle">Mg ×2</text><text x="100" y="122" text-anchor="middle">Si ×1</text><text x="100" y="144" text-anchor="middle">O  ×4</text></g><g><rect x="220" y="60" width="60" height="46" fill="#fef2f2" stroke="#5b6b78"/><text x="250" y="76" font-size="9" text-anchor="middle" fill="#64748b">Group 2</text><text x="250" y="92" font-size="16" font-weight="700" text-anchor="middle" fill="#b91c1c">Mg</text><text x="250" y="104" font-size="8" text-anchor="middle" fill="#64748b">magnesium · 12</text></g><g><rect x="300" y="60" width="60" height="46" fill="#eef4f7" stroke="#5b6b78"/><text x="330" y="76" font-size="9" text-anchor="middle" fill="#64748b">Group 14</text><text x="330" y="92" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">Si</text><text x="330" y="104" font-size="8" text-anchor="middle" fill="#64748b">silicon · 14</text></g><text x="220" y="134" font-size="11" fill="#475569">Mg and Si both sit in Period 3.</text><text x="220" y="152" font-size="10" fill="#94a3ad">Period = row number · Group = column number.</text><text x="220" y="176" font-size="10" fill="#94a3ad">Older group labels: Mg = Group 2, Si = Group 4.</text><line x1="30" y1="198" x2="530" y2="198" stroke="#cbd5e1" stroke-width="1"/><text x="280" y="220" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part (c): which diagram is the Lewis (electron dot) structure of CO₂?</text><g font-size="11"><g><rect x="40" y="236" width="110" height="92" rx="6" fill="#f8fafc" stroke="#94a3ad"/><text x="50" y="252" font-weight="700" fill="#0b7285">A</text><text x="95" y="290" font-size="15" text-anchor="middle" fill="#1f2d3a">O–C–O</text><text x="95" y="312" font-size="9" text-anchor="middle" fill="#94a3ad">single bonds only</text></g><g><rect x="160" y="236" width="110" height="92" rx="6" fill="#f8fafc" stroke="#94a3ad"/><text x="170" y="252" font-weight="700" fill="#0b7285">B</text><text x="215" y="290" font-size="15" text-anchor="middle" fill="#1f2d3a">O=C=O</text><text x="215" y="276" font-size="13" text-anchor="middle" fill="#475569">:Ö=C=Ö:</text><text x="215" y="312" font-size="9" text-anchor="middle" fill="#94a3ad">two double bonds</text></g><g><rect x="280" y="236" width="110" height="92" rx="6" fill="#f8fafc" stroke="#94a3ad"/><text x="290" y="252" font-weight="700" fill="#0b7285">C</text><text x="335" y="290" font-size="15" text-anchor="middle" fill="#1f2d3a">O≡C–O</text><text x="335" y="312" font-size="9" text-anchor="middle" fill="#94a3ad">one triple, one single</text></g><g><rect x="400" y="236" width="110" height="92" rx="6" fill="#f8fafc" stroke="#94a3ad"/><text x="410" y="252" font-weight="700" fill="#0b7285">D</text><text x="455" y="290" font-size="15" text-anchor="middle" fill="#1f2d3a">O=C:–O</text><text x="455" y="312" font-size="9" text-anchor="middle" fill="#94a3ad">lone pair on C</text></g></g><text x="40" y="360" font-size="12" font-weight="700" fill="#1f2d3a">In CO₂ each oxygen shares two pairs with carbon (a double bond)</text><text x="40" y="378" font-size="11" fill="#475569">so carbon has 8 shared electrons and no lone pairs, and each O keeps 2 lone pairs.</text><text x="40" y="402" font-size="10" fill="#94a3ad">A double bond = 2 shared pairs (4 electrons) shown as = between the atoms.</text></svg>',
      },
      caption: 'Olivine, Mg₂SiO₄ — count each element, locate magnesium and silicon on the table, and (for part c) choose the correct Lewis structure of CO₂ from diagrams A–D.',
    },
    tasks: [
      {
        label: 'a',
        text: 'State the number of oxygen atoms in olivine, Mg₂SiO₄.',
        marks: 1,
        ph: 'Count all O in formula',
      },
      {
        label: 'b',
        text: 'Two of the elements in olivine are magnesium and silicon. Identify the group and period of each element in the periodic table.',
        marks: 2,
        ph: 'Mg: Group 2 Period 3; Si: Group 4 Period 3',
        widget: 'inline_dropdown_select',
        widgetItems: ['Magnesium – Group', 'Magnesium – Period', 'Silicon – Group', 'Silicon – Period'],
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7'],
      },
      {
        label: 'c',
        text: 'Silica has the chemical formula SiO₂. Silicon is in the same group as carbon and their oxides have similar formulas. Silica has a giant covalent structure but carbon dioxide has a simple molecular structure. Select the diagram that shows the Lewis electron dot structure of carbon dioxide.',
        marks: 1,
        ph: 'Shared pairs; double bonds on C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
    ],
  },

  // ─── Q2: Titanium aircraft spring + aluminium casting cooling curve (11 marks, Crit A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Properties of metals & mixtures',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 11,
    stem: 'The landing-gear springs of an aircraft are made from a titanium alloy, a mixture of titanium with aluminium and a small amount of vanadium. The blend is chosen because it is strong, springy and very resistant to corrosion. In the same factory, aluminium parts are cast by pouring molten aluminium into moulds and letting it cool and solidify.',
    artefact: {
      component: 'ThermalSim',
      data: {
        title: 'Cooling curve of molten cast aluminium',
        mode: 'cool',
        substance: 'aluminium',
        timeUnit: 's',
        tempUnit: '°C',
        startTempC: 760,
        endTempC: 500,
        totalTime: 100,
        yMinC: 480,
        yMaxC: 800,
        yTicksC: [500, 560, 620, 660, 720, 800],
        plateaus: [{ atC: 660, label: 'freezing (solidifying)', fromTime: 35, toTime: 60 }],
        markers: [
          { id: 'A', time: 18, tempC: 720, state: 'liquid' },
          { id: 'B', time: 80, tempC: 560, state: 'solid' },
        ],
        note: 'The flat part (plateau) is where the aluminium freezes. Point A is before it; point B is after it.',
      },
      caption: 'Temperature of a sample of cast aluminium as it cools and solidifies. Read point A, point B and the plateau.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Select the term used to describe the mixture of titanium, aluminium and vanadium that makes up the spring.',
        marks: 1,
        ph: 'A mixture of metals',
        widget: 'radio_select',
        widgetOptions: ['Allotrope', 'Alloy', 'Compound', 'Ester'],
      },
      {
        label: 'b',
        text: 'Suggest why pure titanium and a very brittle vanadium-rich blend would both be unsuitable materials to make a landing-gear spring.',
        marks: 2,
        ph: 'Pure Ti: too soft/bends; very brittle blend: cracks/snaps under load',
      },
      {
        label: 'c',
        text: 'A cast aluminium bracket has a mass of 0.486 kg. Calculate the number of moles of aluminium in the bracket, assuming that it is pure aluminium (M(Al) = 27 g mol⁻¹). Give your answer to 2 significant figures.',
        marks: 4,
        ph: 'n = 486/27 = 18 mol',
      },
      {
        label: 'd',
        text: 'Aluminium parts are cast by cooling molten metal. The graph shows how the temperature of a sample of aluminium changes over time as it cools and solidifies. State the physical state of the aluminium at point B on the graph.',
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
        text: 'State the freezing point of the aluminium from the graph.',
        marks: 1,
        ph: '660 °C (accept ±3 °C)',
      },
    ],
  },

  // ─── Q3: Thorium camping gas mantles (10 marks, Crit A) ──────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Radioactivity & atomic structure',
    topicCanonical: 'Nuclear Chemistry & Radioactivity',
    topicGroup: 'Nuclear Chemistry',
    marks: 10,
    stem: 'Old camping lanterns used a fabric "mantle" soaked in thorium compounds, which glowed brightly when heated in the flame. The thorium was added as thorium carbonate. Thorium-232 is weakly radioactive, so modern mantles instead use non-radioactive yttrium compounds to produce the glow.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Isotope', 'Atomic number (Z)', 'Mass number (A)', 'Protons', 'Neutrons', 'Electrons'],
        rows: [
          ['Radium-228 (²²⁸Ra)', '88', '228', '88', '140', '88'],
          ['Actinium-228 (²²⁸Ac)', '89', '228', '89', '139', '89'],
        ],
      },
      caption: 'Reference data for two isotopes in the thorium decay chain (protons = Z, neutrons = A − Z, electrons = Z in a neutral atom).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Thorium carbonate reacts with nitric acid. State the names of the products of this reaction.',
        marks: 2,
        ph: 'Thorium nitrate + carbon dioxide + water',
      },
      {
        label: 'b',
        text: 'Magnesium carbonate is also present in the mantle ash. Write a balanced symbol equation for the reaction of magnesium carbonate with nitric acid.',
        marks: 3,
        ph: 'MgCO₃ + 2HNO₃ → Mg(NO₃)₂ + CO₂ + H₂O',
      },
      {
        label: 'c',
        text: 'Outline why modern mantles made with non-radioactive yttrium compounds would be better for your health than those made with thorium.',
        marks: 2,
        ph: 'Yttrium not radioactive; radiation damages body cells',
      },
      {
        label: 'd',
        text: 'The thorium decay chain passes through thorium-232 (²³²Th) and protactinium-234 (²³⁴Pa). Determine the number of protons, neutrons and electrons in an atom of ²³²Th and ²³⁴Pa.',
        marks: 2,
        ph: 'Th: p=90,n=142,e=90; Pa: p=91,n=143,e=91',
        widget: 'inline_dropdown_select',
        widgetItems: ['Protons – ²³²Th', 'Neutrons – ²³²Th', 'Electrons – ²³²Th', 'Protons – ²³⁴Pa', 'Neutrons – ²³⁴Pa', 'Electrons – ²³⁴Pa'],
        widgetOptions: ['88', '89', '90', '91', '92', '141', '142', '143', '144', '145'],
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
            svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="170" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Which hazard symbol warns of radioactive materials?</text><g><rect x="40" y="36" width="110" height="110" rx="8" fill="#fffbeb" stroke="#94a3ad"/><text x="50" y="54" font-size="12" font-weight="700" fill="#0b7285">A</text><path d="M95 70 q-16 22 0 44 q16 -22 0 -44 Z" fill="#f97316" stroke="#c2410c"/><path d="M95 78 q-9 14 0 28 q9 -14 0 -28 Z" fill="#fde68a"/><text x="95" y="138" font-size="9" text-anchor="middle" fill="#94a3ad">flame</text></g><g><rect x="160" y="36" width="110" height="110" rx="8" fill="#f8fafc" stroke="#94a3ad"/><text x="170" y="54" font-size="12" font-weight="700" fill="#0b7285">B</text><circle cx="215" cy="86" r="16" fill="none" stroke="#334155" stroke-width="3"/><circle cx="209" cy="82" r="2.5" fill="#334155"/><circle cx="221" cy="82" r="2.5" fill="#334155"/><line x1="200" y1="104" x2="230" y2="104" stroke="#334155" stroke-width="3"/><line x1="206" y1="102" x2="224" y2="116" stroke="#334155" stroke-width="3"/><line x1="224" y1="102" x2="206" y2="116" stroke="#334155" stroke-width="3"/><text x="215" y="138" font-size="9" text-anchor="middle" fill="#94a3ad">skull &amp; crossbones</text></g><g><rect x="280" y="36" width="110" height="110" rx="8" fill="#fefce8" stroke="#94a3ad"/><text x="290" y="54" font-size="12" font-weight="700" fill="#0b7285">C</text><circle cx="335" cy="90" r="30" fill="#facc15"/><circle cx="335" cy="90" r="5" fill="#1f2937"/><path d="M335 90 L335 60 A30 30 0 0 1 361 105 Z" fill="#1f2937"/><path d="M335 90 L361 105 A30 30 0 0 1 309 105 Z" fill="#1f2937"/><path d="M335 90 L309 105 A30 30 0 0 1 335 60 Z" fill="#1f2937"/><circle cx="335" cy="90" r="6" fill="#facc15"/><text x="335" y="138" font-size="9" text-anchor="middle" fill="#94a3ad">trefoil</text></g><g><rect x="400" y="36" width="110" height="110" rx="8" fill="#f8fafc" stroke="#94a3ad"/><text x="410" y="54" font-size="12" font-weight="700" fill="#0b7285">D</text><line x1="425" y1="112" x2="485" y2="112" stroke="#334155" stroke-width="3"/><path d="M438 112 l-4 -22 l4 -2 l4 22 Z" fill="#334155"/><path d="M455 112 l0 -26 l4 0 l0 26 Z" fill="#334155"/><circle cx="445" cy="74" r="3" fill="#334155"/><circle cx="452" cy="78" r="3" fill="#334155"/><text x="455" y="138" font-size="9" text-anchor="middle" fill="#94a3ad">corrosive</text></g></svg>',
          },
          caption: 'Four hazard symbols A–D. Pick the one used internationally to warn that a material is radioactive.',
        },
      },
    ],
  },

  // ─── Q4: Cat-litter granule absorbency investigation (16 marks, Crit C) ──
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Scientific investigation – litter granule absorbency',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 16,
    stem: 'Clumping cat litter is made from sodium-polyacrylate granules that swell as they soak up liquid. A student investigates how much water different litter granules can absorb. The student measures 400 cm³ of water into a beaker, adds a fixed mass of one type of granule, stirs for 5 minutes, then pours the mixture through a sieve and records the volume of water left over.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Water remaining after each granule has been stirred and sieved',
        mode: 'bars',
        variable: 'Granule type (each starts with 400 cm³ of water)',
        metric: 'Volume of water remaining / cm³',
        bars: [
          { label: 'Granule 1', value: 60 },
          { label: 'Granule 2', value: 140 },
          { label: 'Granule 3', value: 250 },
        ],
        note: 'Water absorbed = 400 − water remaining. The smaller the bar, the more water that granule absorbed.',
      },
      caption: 'Raw result for each granule: the volume of water left over after sieving (mean of three trials).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Identify the independent variable (IV), dependent variable (DV) and two controlled variables (CVs) for this investigation.',
        marks: 4,
        ph: 'IV=type of granule; DV=volume water absorbed; CVs=mass, temperature',
      },
      {
        label: 'b',
        text: 'The student collects the following data. Organise the raw data into a suitable table.',
        marks: 4,
        ph: 'Table columns — granule type, volume water remaining (cm³), 3 trials',
      },
      {
        label: 'c',
        text: 'Using the data in the table, draw a suitable graph to display the results.',
        marks: 4,
        ph: 'Bar chart; title; x=granule type; y=volume/cm³; data plotted',
      },
      {
        label: 'd',
        text: 'A student says the graph directly answers the research question "Which granule absorbs the most water?" Is the student correct? Explain your answer.',
        marks: 1,
        ph: 'No — raw data is water NOT absorbed; must process',
        widget: 'radio_select',
        widgetOptions: ['Yes', 'No'],
      },
      {
        label: 'e',
        text: 'Using the data in part (b), explain which granule you could use to absorb 340 cm³ of water. You should use calculations to support your answer.',
        marks: 3,
        ph: 'Granule 1: 400−60=340 cm³ absorbed; most water absorbed',
      },
    ],
  },

  // ─── Q5: Single-use vs reusable surgical gowns (20 marks, Crit B/D) ─────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Environmental impact & experimental design',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 20,
    stem: 'Hospitals use surgical gowns made from absorbent material to keep surgeons dry and sterile. Most are single-use gowns made from spun-bonded plastic fibres. In one country roughly 2–3 % of clinical waste is estimated to be used gowns, around 3 × 10⁹ gowns, equivalent to about 5 × 10⁵ kg of waste each year. The alternative is reusable cotton-blend gowns, which reduce landfill but require energy, water and sterilisation between operations.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Factor', 'Single-use gown', 'Reusable gown'],
        rows: [
          ['Made from', 'spun-bonded plastic fibre', 'cotton-polyester blend'],
          ['Typical lifetime', '1 operation', '50–75 washes'],
          ['End of life', 'clinical-waste incineration', 'landfill after many uses'],
          ['Main ongoing demand', 'replacement manufacture', 'hot water, energy + sterilisation'],
        ],
      },
      caption: 'Two ways to gown a surgeon: a single-use gown vs a reusable gown. Each carries a different environmental cost.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Discuss the environmental impacts and advantages and disadvantages of using single-use gowns compared to reusable gowns. Include a conclusion that appraises which type causes less harm to the environment.',
        marks: 5,
        ph: 'Single-use: incineration/waste/energy in production; Reusable: water/energy/sterilisation; balanced conclusion',
      },
      {
        label: 'b',
        text: 'Design an investigation to test which of five different gown materials absorbs the most water. Your investigation should include the independent and dependent variables, how you will control variables, the equipment needed, sufficient data collection, and a method that could be replicated to produce relevant data.',
        marks: 15,
        ph: 'IV=gown material; DV=volume absorbed; CVs=mass, temp, time; 5 materials×3 trials; detailed replicable method',
      },
    ],
  },

  // ─── Q6: Absorbent-pad composition data analysis (8 marks, Crit C) ──────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data analysis – absorbent pad performance',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 8,
    stem: 'A student investigates different brands of absorbent surgical pad. Each pad contains a different mass of super-absorbent polymer granules and a different mass of cotton fibre. The student measures the total volume of water each brand absorbs.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Brand', 'Mass of polymer granules / g', 'Mass of cotton fibre / g', 'Volume of water absorbed / cm³'],
        rows: [
          ['MediDry', '18', '6', '240'],
          ['SafeGuard', '12', '14', '300'],
          ['ClinicPad', '20', '4', '210'],
          ['UltraSoak', '8', '22', '355'],
        ],
      },
      caption: 'For each brand: the masses of granules and fibre and the total water absorbed. UltraSoak absorbs the most yet has the fewest polymer granules.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the data, make three statements about the relationship between the pad components and the volume of water absorbed.',
        marks: 3,
        ph: 'Not supported: UltraSoak most absorbent; UltraSoak least polymer; cotton fibre also affects absorption',
      },
      {
        label: 'b',
        text: 'A student suggests that the mass of polymer granules determines the volume of water absorbed. Using an if–then–because framework, explain how the data supports or does not support this suggestion.',
        marks: 3,
        ph: 'If polymer increases, then water absorbed increases, because polymer absorbs water; OR data shows UltraSoak contradicts this',
      },
      {
        label: 'c',
        text: 'Cotton fibre is found in the pad alongside the polymer granules. Suggest how the cotton fibre helps the polymer granules absorb body fluid.',
        marks: 2,
        ph: 'Cotton wicks/spreads fluid to the granules; granules absorb the water',
      },
    ],
  },

  // ─── Q7: Marker-pen ink chromatography (8 marks, Crit C) ────────────────
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Chromatography & data interpretation',
    topicCanonical: 'Separation & Purification',
    topicGroup: 'States of Matter',
    marks: 8,
    stem: 'A scientist investigates the inks used in black marker pens. The scientist tests four known inks (A, B, C and D) and a sample taken from an unknown pen using paper chromatography. The sample is placed alongside the four known inks and the chromatogram is developed.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Chromatogram of four inks and the unknown pen sample</text><rect x="60" y="44" width="440" height="230" fill="#fcfcf7" stroke="#5b6b78"/><line x1="60" y1="58" x2="500" y2="58" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5 4"/><text x="386" y="54" font-size="9" fill="#2563eb">solvent front (42 mm)</text><line x1="60" y1="258" x2="500" y2="258" stroke="#94a3ad" stroke-width="1"/><text x="408" y="270" font-size="9" fill="#94a3ad">start line (0 mm)</text><g font-size="10" text-anchor="middle" fill="#334155"><text x="110" y="290">Ink A</text><text x="190" y="290">Ink B</text><text x="270" y="290">Ink C</text><text x="350" y="290">Ink D</text><text x="440" y="290" font-weight="700" fill="#0b7285">Sample</text></g><g><circle cx="110" cy="135" r="9" fill="#e11d48"/><circle cx="110" cy="205" r="9" fill="#7c3aed"/></g><g><circle cx="190" cy="135" r="9" fill="#e11d48"/><circle cx="190" cy="170" r="9" fill="#0891b2"/></g><g><circle cx="270" cy="135" r="9" fill="#e11d48"/><circle cx="270" cy="170" r="9" fill="#0891b2"/><circle cx="270" cy="205" r="9" fill="#7c3aed"/></g><g><circle cx="350" cy="135" r="9" fill="#e11d48"/><circle cx="350" cy="170" r="9" fill="#0891b2"/><circle cx="350" cy="205" r="9" fill="#7c3aed"/><circle cx="350" cy="100" r="9" fill="#16a34a"/></g><g><circle cx="440" cy="135" r="9" fill="#e11d48"/><circle cx="440" cy="170" r="9" fill="#0891b2"/><circle cx="440" cy="205" r="9" fill="#7c3aed"/></g><text x="20" y="172" font-size="10" fill="#94a3ad" transform="rotate(-90 20 172)">distance travelled →</text></svg>',
      },
      caption: 'Paper chromatogram. In Ink C and the sample, the cyan (blue) spot sits 21 mm above the start line; the solvent front is at 42 mm.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Identify the ink that the unknown pen sample contains. Justify your answer.',
        marks: 2,
        ph: 'Ink C; same three spots in the same positions as the sample',
        widget: 'radio_select',
        widgetOptions: ['Ink A', 'Ink B', 'Ink C', 'Ink D'],
      },
      {
        label: 'b',
        text: 'For each of the other inks, explain why they are not contained in the unknown pen sample.',
        marks: 3,
        ph: 'A has only 2 spots (missing cyan); B missing the purple spot; D has an extra green spot not in the sample',
      },
      {
        label: 'c',
        text: 'The Rf value compares the distance moved by each spot with the distance moved by the solvent front. Calculate the Rf value of the cyan (blue) spot in Ink C.',
        marks: 3,
        ph: 'Cyan spot 21 mm ÷ solvent front 42 mm; Rf = 0.50',
      },
    ],
  },

  // ─── Q8: Polymers — functional groups & HDPE vs PLA bottles (10 marks, Crit A/D) ──
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Organic chemistry – polymers & plastics',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 10,
    stem: 'Drinks bottles are made from a variety of organic polymers. Polymers are made up from a large number of monomers that are chemically bonded together. A smoothie company is choosing between high-density polyethene (HDPE) bottles and polylactic acid (PLA) bottles for its chilled drinks.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'HDPE (high-density polyethene)', 'PLA (polylactic acid)'],
        rows: [
          ['Softening temperature / °C', '120', '60'],
          ['Cost per 1000 bottles / £', '30', '52'],
          ['Made from', 'crude oil (finite)', 'plant starch (renewable)'],
          ['Biodegradable?', 'no', 'yes (industrial compost)'],
          ['Recycling', 'widely recycled', 'limited / separate stream'],
        ],
      },
      caption: 'Comparison of HDPE and PLA for chilled-drink bottles. HDPE is cheaper and widely recycled; PLA is renewable and compostable but softer and pricier.',
    },
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
            svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Name the class of the circled group in each monomer</text><g><rect x="24" y="40" width="166" height="140" rx="8" fill="#f8fafc" stroke="#94a3ad"/><text x="36" y="60" font-size="12" font-weight="700" fill="#0b7285">Monomer A</text><text x="107" y="112" font-size="15" text-anchor="middle" fill="#1f2d3a">CH₂=C(CH₃)–C(=O)–O–CH₃</text><ellipse cx="140" cy="108" rx="34" ry="20" fill="none" stroke="#dc2626" stroke-width="2.2"/><text x="107" y="160" font-size="10" text-anchor="middle" fill="#94a3ad">circled: –C(=O)–O–</text></g><g><rect x="198" y="40" width="166" height="140" rx="8" fill="#f8fafc" stroke="#94a3ad"/><text x="210" y="60" font-size="12" font-weight="700" fill="#0b7285">Monomer B</text><text x="281" y="112" font-size="15" text-anchor="middle" fill="#1f2d3a">CH₂=CH–CH₂–OH</text><ellipse cx="330" cy="108" rx="22" ry="18" fill="none" stroke="#dc2626" stroke-width="2.2"/><text x="281" y="160" font-size="10" text-anchor="middle" fill="#94a3ad">circled: –OH</text></g><g><rect x="372" y="40" width="166" height="140" rx="8" fill="#f8fafc" stroke="#94a3ad"/><text x="384" y="60" font-size="12" font-weight="700" fill="#0b7285">Monomer C</text><text x="455" y="112" font-size="15" text-anchor="middle" fill="#1f2d3a">CH₂=CH–CH₃</text><ellipse cx="430" cy="108" rx="28" ry="18" fill="none" stroke="#dc2626" stroke-width="2.2"/><text x="455" y="160" font-size="10" text-anchor="middle" fill="#94a3ad">circled: C=C</text></g></svg>',
          },
          caption: 'Three monomers, each with one functional group circled in red. Identify the class of each circled group (e.g. alkene, alcohol, ester).',
        },
      },
      {
        label: 'b',
        text: 'Leila, Sam and Noor run a smoothie company. They want their bottles to be environmentally friendly, practical for chilled drinks and inexpensive to maximise profit. Using the table above, explain the advantages and disadvantages of using PLA compared to HDPE for the chilled-drink bottles. In your answer you should outline the physical properties required in a drinks bottle, describe the advantages and disadvantages that PLA has compared to HDPE, and justify whether PLA would make a suitable replacement for HDPE.',
        marks: 7,
        ph: 'HDPE properties (cheap, recycled); PLA biodegrade/renewable; PLA softer/more expensive/limited recycling; justified conclusion',
      },
    ],
  },

  // ─── Q9: Mushroom-mycelium vs polystyrene packaging essay (13 marks, Crit D) ──
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Sustainability – mycelium-based vs polystyrene packaging',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 13,
    stem: 'Most protective packaging for electronics is expanded polystyrene foam, made from chemicals that come from oil. Scientists are finding innovative solutions to produce packaging that has less impact on the environment. One solution is to grow packaging from mushroom mycelium, the root-like threads of fungi, around farm waste. Polystyrene is made from fossil fuels and protects goods well but it is rarely recycled and persists for centuries. Mycelium packaging is grown in days and can be composted at home after use. Polystyrene that escapes into the environment breaks into tiny pieces that harm wildlife.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Carbon footprint of producing 1 kg of protective packaging (arbitrary units of CO₂)',
        units: 'units',
        flows: [
          { label: 'Polystyrene — fossil feedstock + foaming', value: 55, kind: 'loss' },
          { label: 'Polystyrene — end of life (persists / landfill)', value: 22, kind: 'out' },
          { label: 'Mycelium — CO₂ absorbed as fungus + crop waste grew', value: 35, kind: 'in' },
          { label: 'Mycelium — growing + drying energy', value: 15, kind: 'out' },
          { label: 'Mycelium — composted (CO₂ returned)', value: 10, kind: 'out' },
        ],
        conservation: 'Mycelium and its crop-waste substrate first remove CO₂ as they grow (35 in), so the net footprint is far smaller than polystyrene (77 out).',
      },
      caption: 'Where the carbon goes for each type of packaging. Mycelium absorbs CO₂ as it grows; polystyrene only emits it.',
    },
    tasks: [
      {
        label: '',
        text: 'Using your experience from your wider MYP studies and the information above, discuss and evaluate the impact of mushroom-mycelium compostable packaging as a replacement for polystyrene packaging. In your answer you should consider the sustainability of production of mycelium-based and polystyrene packaging, the environmental impacts of the production and end of use of mycelium-based and polystyrene packaging, the social impacts of the production, use and end of use of mycelium-based and polystyrene packaging, and your opinion about replacing polystyrene with mycelium-based packaging.',
        marks: 13,
        ph: 'Sustainability, environmental impacts, social impacts, justified conclusion on replacement',
      },
    ],
  },
]
