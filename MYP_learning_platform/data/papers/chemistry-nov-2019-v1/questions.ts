import type { PaperMeta } from '@/data/papers/chemistry-nov-2019/questions'
import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2019 · VARIANT 1  (isomorphic to chemistry-nov-2019)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context, with a
// self-contained data-driven INTERACTIVE artefact on EVERY question (zero raster
// images, zero markdown tables). Answers recomputed throughout.
//   THEME: heritage materials & the workshop bench.
//   Q1 Silicate mineral / periodic table:  nacrite clay → orthoclase feldspar (stained-glass kiln)
//   Q2 Alloy + cooling curve:              steel Slinky → nickel-bronze guitar string + tin-solder curve
//   Q3 Radioactivity / atomic structure:   1950s atom-lab → 1920s radium luminous watch dials
//   Q4 Absorbency investigation (Crit C):  hydrogels → silica-gel desiccant sachets
//   Q5 Sustainability + design (Crit B/D):  nappies → single-use vs washable kitchen sponges
//   Q6 Composition data (Crit C):          nappy components → sponge cellulose/foam composition
//   Q7 Chromatography (Crit C):            nappy dyes → food colourings in coated sweets
//   Q8 Polymers / functional groups:       PET vs PLA cups → PP vs PLA food tubs
//   Q9 Sustainability essay (Crit D):      algae vs oil plastics → seaweed vs oil-based films
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2019-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Orthoclase feldspar / stained-glass kiln (4 marks, Crit A) ──────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic structure & the periodic table',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 4,
    stem: 'Stained-glass studios fire their glass on shelves coated with a mineral wash to stop pieces sticking. One mineral used is orthoclase, a type of feldspar found in granite. Orthoclase is a framework silicate with the chemical formula KAlSi₃O₈.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 430" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="430" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Orthoclase feldspar  KAlSi₃O₈</text><g font-size="12" fill="#334155"><rect x="40" y="42" width="120" height="120" rx="8" fill="#eef4f7" stroke="#5b6b78"/><text x="100" y="66" text-anchor="middle" font-weight="700" fill="#0b7285">Atoms per formula</text><text x="100" y="92" text-anchor="middle">K  ×1</text><text x="100" y="112" text-anchor="middle">Al ×1</text><text x="100" y="132" text-anchor="middle">Si ×3</text><text x="100" y="152" text-anchor="middle">O  ×8</text></g><g><rect x="220" y="60" width="60" height="46" fill="#fff7ed" stroke="#5b6b78"/><text x="250" y="76" font-size="9" text-anchor="middle" fill="#64748b">Group 13</text><text x="250" y="92" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Al</text><text x="250" y="104" font-size="8" text-anchor="middle" fill="#64748b">aluminium · 13</text></g><g><rect x="300" y="60" width="60" height="46" fill="#eef4f7" stroke="#5b6b78"/><text x="330" y="76" font-size="9" text-anchor="middle" fill="#64748b">Group 14</text><text x="330" y="92" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">Si</text><text x="330" y="104" font-size="8" text-anchor="middle" fill="#64748b">silicon · 14</text></g><text x="220" y="134" font-size="11" fill="#475569">Al and Si sit next to each other in Period 3.</text><text x="220" y="152" font-size="10" fill="#94a3ad">Period = row number · Group = column number.</text><text x="220" y="176" font-size="10" fill="#94a3ad">Older group labels: Al = Group 3, Si = Group 4.</text><line x1="30" y1="198" x2="530" y2="198" stroke="#cbd5e1" stroke-width="1"/><text x="280" y="220" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part (c): which diagram is the Lewis (electron dot) structure of CO₂?</text><g font-size="11"><g><rect x="40" y="236" width="110" height="92" rx="6" fill="#f8fafc" stroke="#94a3ad"/><text x="50" y="252" font-weight="700" fill="#0b7285">A</text><text x="95" y="290" font-size="15" text-anchor="middle" fill="#1f2d3a">O–C–O</text><text x="95" y="312" font-size="9" text-anchor="middle" fill="#94a3ad">single bonds only</text></g><g><rect x="160" y="236" width="110" height="92" rx="6" fill="#f8fafc" stroke="#94a3ad"/><text x="170" y="252" font-weight="700" fill="#0b7285">B</text><text x="215" y="290" font-size="15" text-anchor="middle" fill="#1f2d3a">O=C=O</text><text x="215" y="276" font-size="13" text-anchor="middle" fill="#475569">:Ö=C=Ö:</text><text x="215" y="312" font-size="9" text-anchor="middle" fill="#94a3ad">two double bonds</text></g><g><rect x="280" y="236" width="110" height="92" rx="6" fill="#f8fafc" stroke="#94a3ad"/><text x="290" y="252" font-weight="700" fill="#0b7285">C</text><text x="335" y="290" font-size="15" text-anchor="middle" fill="#1f2d3a">O≡C–O</text><text x="335" y="312" font-size="9" text-anchor="middle" fill="#94a3ad">one triple, one single</text></g><g><rect x="400" y="236" width="110" height="92" rx="6" fill="#f8fafc" stroke="#94a3ad"/><text x="410" y="252" font-weight="700" fill="#0b7285">D</text><text x="455" y="290" font-size="15" text-anchor="middle" fill="#1f2d3a">O=C:–O</text><text x="455" y="312" font-size="9" text-anchor="middle" fill="#94a3ad">lone pair on C</text></g></g><text x="40" y="360" font-size="12" font-weight="700" fill="#1f2d3a">In CO₂ each oxygen shares two pairs with carbon (a double bond)</text><text x="40" y="378" font-size="11" fill="#475569">so carbon has 8 shared electrons and no lone pairs, and each O keeps 2 lone pairs.</text><text x="40" y="402" font-size="10" fill="#94a3ad">A double bond = 2 shared pairs (4 electrons) shown as = between the atoms.</text></svg>',
      },
      caption: 'Orthoclase, KAlSi₃O₈ — count each element, locate aluminium and silicon on the table, and (for part c) choose the correct Lewis structure of CO₂ from diagrams A–D.',
    },
    tasks: [
      {
        label: 'a',
        text: 'State the number of oxygen atoms in orthoclase, KAlSi₃O₈.',
        marks: 1,
        ph: 'Count all O in formula',
      },
      {
        label: 'b',
        text: 'Two of the elements in orthoclase are aluminium and silicon. Identify the group and period of each element in the periodic table.',
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
      },
    ],
  },

  // ─── Q2: Nickel-bronze guitar string + tin-solder cooling curve (11 marks, Crit A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Properties of metals & mixtures',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 11,
    stem: 'The wound strings of an electric guitar are made from nickel-bronze, a mixture of copper with nickel and a small amount of zinc. The blend is chosen because it is springy and resists corrosion from a player\'s fingers. On the workbench, the same guitar maker uses tin-based solder, which melts at a low temperature to join the string ends to the bridge.',
    artefact: {
      component: 'ThermalSim',
      data: {
        title: 'Cooling curve of molten tin solder',
        mode: 'cool',
        substance: 'tin solder',
        timeUnit: 's',
        tempUnit: '°C',
        startTempC: 300,
        endTempC: 120,
        totalTime: 100,
        yMinC: 100,
        yMaxC: 320,
        yTicksC: [120, 160, 200, 232, 280, 320],
        plateaus: [{ atC: 232, label: 'freezing (solidifying)', fromTime: 35, toTime: 60 }],
        markers: [
          { id: 'A', time: 18, tempC: 270, state: 'liquid' },
          { id: 'B', time: 80, tempC: 165, state: 'solid' },
        ],
        note: 'The flat part (plateau) is where the solder freezes. Point A is before it; point B is after it.',
      },
      caption: 'Temperature of a sample of tin solder as it cools and solidifies. Read point A, point B and the plateau.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Select the term used to describe the mixture of copper, nickel and zinc that makes up the guitar string.',
        marks: 1,
        ph: 'A mixture of metals',
        widget: 'radio_select',
        widgetOptions: ['Allotrope', 'Alloy', 'Compound', 'Ester'],
      },
      {
        label: 'b',
        text: 'Suggest why pure copper and a very hard nickel-rich blend would both be unsuitable materials to make a guitar string.',
        marks: 2,
        ph: 'Pure Cu: too soft/stretches; very hard blend: too brittle/snaps',
      },
      {
        label: 'c',
        text: 'A wound guitar string uses 1.16 m of copper wire of mass 0.448 kg. Calculate the number of moles of copper in the string, assuming that all the wire is copper (M(Cu) = 64 g mol⁻¹). Give your answer to 2 significant figures.',
        marks: 4,
        ph: 'n = 448/64 = 7.0 mol',
      },
      {
        label: 'd',
        text: 'The solder used to fix the string is mostly tin. The graph shows how the temperature of a sample of tin solder changes over time as it cools and solidifies. State the physical state of the solder at point B on the graph.',
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
        text: 'State the freezing point of the tin solder from the graph.',
        marks: 1,
        ph: '232 °C (accept ±2 °C)',
      },
    ],
  },

  // ─── Q3: Radium luminous watch dials (10 marks, Crit A) ──────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Radioactivity & atomic structure',
    topicCanonical: 'Nuclear Chemistry & Radioactivity',
    topicGroup: 'Nuclear Chemistry',
    marks: 10,
    stem: 'In the 1920s, watch and clock dials were hand-painted with a glowing paint. The paint mixed radium-226 with zinc sulphide so that the dial would glow in the dark. The radium was supplied as radium carbonate. Modern luminous dials instead use a non-radioactive phosphor that simply stores light.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Isotope', 'Atomic number (Z)', 'Mass number (A)', 'Protons', 'Neutrons', 'Electrons'],
        rows: [
          ['Bismuth-210 (²¹⁰Bi)', '83', '210', '83', '127', '83'],
          ['Polonium-214 (²¹⁴Po)', '84', '214', '84', '130', '84'],
        ],
      },
      caption: 'Reference data for two isotopes in the radium decay chain (protons = Z, neutrons = A − Z, electrons = Z in a neutral atom).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Radium carbonate reacts with hydrochloric acid. State the names of the products of this reaction.',
        marks: 2,
        ph: 'Radium chloride + carbon dioxide + water',
      },
      {
        label: 'b',
        text: 'Write a balanced symbol equation for the reaction of radium carbonate with hydrochloric acid.',
        marks: 3,
        ph: 'RaCO₃ + 2HCl → RaCl₂ + CO₂ + H₂O',
      },
      {
        label: 'c',
        text: 'Outline why modern watches with a non-radioactive phosphor would be better for your health than those painted with radium.',
        marks: 2,
        ph: 'Phosphor not radioactive; radiation damages body cells',
      },
      {
        label: 'd',
        text: 'The radium decay chain also passes through lead-210 (²¹⁰Pb) and bismuth-214 (²¹⁴Bi). Determine the number of protons, neutrons and electrons in an atom of ²¹⁰Pb and ²¹⁴Bi.',
        marks: 2,
        ph: 'Pb: p=82,n=128,e=82; Bi: p=83,n=131,e=83',
        widget: 'inline_dropdown_select',
        widgetItems: ['Protons – ²¹⁰Pb', 'Neutrons – ²¹⁰Pb', 'Electrons – ²¹⁰Pb', 'Protons – ²¹⁴Bi', 'Neutrons – ²¹⁴Bi', 'Electrons – ²¹⁴Bi'],
        widgetOptions: ['80', '81', '82', '83', '84', '128', '129', '130', '131', '132'],
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

  // ─── Q4: Silica-gel desiccant absorbency investigation (16 marks, Crit C) ──
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Scientific investigation – desiccant absorbency',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 16,
    stem: 'Silica-gel sachets are packed with electronics and dried food to keep them dry by absorbing water vapour. A student investigates how much water different silica-gel desiccants can absorb. The student measures 400 cm³ of water into a beaker, adds a fixed mass of one desiccant, stirs for 5 minutes, then pours the mixture through a filter and records the volume of water left over.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Water remaining after each desiccant has been stirred and filtered',
        mode: 'bars',
        variable: 'Desiccant type (each starts with 400 cm³ of water)',
        metric: 'Volume of water remaining / cm³',
        bars: [
          { label: 'Desiccant 1', value: 60 },
          { label: 'Desiccant 2', value: 140 },
          { label: 'Desiccant 3', value: 250 },
        ],
        note: 'Water absorbed = 400 − water remaining. The smaller the bar, the more water that desiccant absorbed.',
      },
      caption: 'Raw result for each desiccant: the volume of water left over after filtering (mean of three trials).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Identify the independent variable (IV), dependent variable (DV) and two controlled variables (CVs) for this investigation.',
        marks: 4,
        ph: 'IV=type of desiccant; DV=volume water absorbed; CVs=mass, temperature',
      },
      {
        label: 'b',
        text: 'The student collects the following data. Organise the raw data into a suitable table.',
        marks: 4,
        ph: 'Table columns — desiccant type, volume water remaining (cm³), 3 trials',
      },
      {
        label: 'c',
        text: 'Using the data in the table, draw a suitable graph to display the results.',
        marks: 4,
        ph: 'Bar chart; title; x=desiccant type; y=volume/cm³; data plotted',
      },
      {
        label: 'd',
        text: 'A student says the graph directly answers the research question "Which desiccant absorbs the most water?" Is the student correct? Explain your answer.',
        marks: 1,
        ph: 'No — raw data is water NOT absorbed; must process',
        widget: 'radio_select',
        widgetOptions: ['Yes', 'No'],
      },
      {
        label: 'e',
        text: 'Using the data in part (b), explain which desiccant you could use to absorb 340 cm³ of water. You should use calculations to support your answer.',
        marks: 3,
        ph: 'Desiccant 1: 400−60=340 cm³ absorbed; most water absorbed',
      },
    ],
  },

  // ─── Q5: Single-use vs washable kitchen sponges (20 marks, Crit B/D) ─────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Environmental impact & experimental design',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 20,
    stem: 'Most single-use kitchen sponges are made from a cellulose foam with a synthetic scouring layer. In the UK roughly 2–3 % of household plastic waste is estimated to be discarded cleaning sponges, around 3 × 10⁹ sponges, equivalent to about 5 × 10⁵ kg of waste each year. The alternative is washable sponges, which reduce landfill but require energy and hot water for boiling or machine-washing between uses.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Factor', 'Single-use sponge', 'Washable sponge'],
        rows: [
          ['Made from', 'cellulose foam + plastic scourer', 'cellulose + loofah / silicone'],
          ['Typical lifetime', '2–4 weeks', '6–12 months'],
          ['End of life', 'landfill / incineration', 'compost or landfill'],
          ['Main ongoing demand', 'replacement manufacture', 'hot water + energy to wash'],
        ],
      },
      caption: 'Two ways to clean a kitchen: a single-use sponge vs a washable sponge. Each has a different environmental cost.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Discuss the environmental impacts and advantages and disadvantages of using single-use sponges compared to washable sponges. Include a conclusion that appraises which type causes less harm to the environment.',
        marks: 5,
        ph: 'Single-use: landfill/waste/energy in production; Washable: water/energy for washing; balanced conclusion',
      },
      {
        label: 'b',
        text: 'Design an investigation to test which of five different sponge brands absorbs the most water. Your investigation should include the independent and dependent variables, how you will control variables, the equipment needed, sufficient data collection, and a method that could be replicated to produce relevant data.',
        marks: 15,
        ph: 'IV=sponge brand; DV=volume absorbed; CVs=mass, temp, time; 5 brands×3 trials; detailed replicable method',
      },
    ],
  },

  // ─── Q6: Sponge composition data analysis (8 marks, Crit C) ─────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data analysis – sponge absorbency',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 8,
    stem: 'A student investigates different brands of kitchen sponge. Each sponge contains a different mass of cellulose foam and a different mass of polyurethane foam. The student measures the total volume of water each brand absorbs.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Brand', 'Mass of cellulose foam / g', 'Mass of polyurethane foam / g', 'Volume of water absorbed / cm³'],
        rows: [
          ['SoakUp', '18', '6', '240'],
          ['ScrubMax', '12', '14', '300'],
          ['CleanPro', '20', '4', '210'],
          ['SpongeKing', '8', '22', '355'],
        ],
      },
      caption: 'For each brand: the masses of the two foams and the total water absorbed. SpongeKing absorbs the most yet has the least cellulose foam.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the data, make three statements about the relationship between the sponge components and the volume of water absorbed.',
        marks: 3,
        ph: 'Not supported: SpongeKing most absorbent; SpongeKing least cellulose; polyurethane foam also affects absorption',
      },
      {
        label: 'b',
        text: 'A student suggests that the mass of cellulose foam determines the volume of water absorbed. Using an if–then–because framework, explain how the data supports or does not support this suggestion.',
        marks: 3,
        ph: 'If cellulose increases, then water absorbed increases, because cellulose absorbs water; OR data shows SpongeKing contradicts this',
      },
      {
        label: 'c',
        text: 'Polyurethane foam is found in sponges alongside the cellulose foam. Suggest how the polyurethane foam helps the sponge absorb dirty water.',
        marks: 2,
        ph: 'Polyurethane open pores trap grease/particles; cellulose absorbs the water',
      },
    ],
  },

  // ─── Q7: Food colouring chromatography of sweets (8 marks, Crit C) ──────
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Chromatography & data interpretation',
    topicCanonical: 'Separation & Purification',
    topicGroup: 'States of Matter',
    marks: 8,
    stem: 'A scientist investigates the food colourings used to coat brightly coloured sweets. The scientist tests four known food dyes (A, B, C and D) and a sample washed from a sweet using paper chromatography. The sample is placed alongside the four known dyes and the chromatogram is developed.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Chromatogram of four dyes and the sweet sample</text><rect x="60" y="44" width="440" height="230" fill="#fcfcf7" stroke="#5b6b78"/><line x1="60" y1="60" x2="500" y2="60" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5 4"/><text x="382" y="56" font-size="9" fill="#2563eb">solvent front (37 mm)</text><line x1="60" y1="258" x2="500" y2="258" stroke="#94a3ad" stroke-width="1"/><text x="408" y="270" font-size="9" fill="#94a3ad">start line (0 mm)</text><g font-size="10" text-anchor="middle" fill="#334155"><text x="110" y="290">Dye A</text><text x="190" y="290">Dye B</text><text x="270" y="290">Dye C</text><text x="350" y="290">Dye D</text><text x="440" y="290" font-weight="700" fill="#0b7285">Sample</text></g><g><circle cx="110" cy="130" r="9" fill="#e11d48"/><circle cx="110" cy="210" r="9" fill="#2563eb"/></g><g><circle cx="190" cy="130" r="9" fill="#e11d48"/><circle cx="190" cy="170" r="9" fill="#f59e0b"/></g><g><circle cx="270" cy="130" r="9" fill="#e11d48"/><circle cx="270" cy="170" r="9" fill="#f59e0b"/><circle cx="270" cy="210" r="9" fill="#2563eb"/></g><g><circle cx="350" cy="130" r="9" fill="#e11d48"/><circle cx="350" cy="170" r="9" fill="#f59e0b"/><circle cx="350" cy="210" r="9" fill="#2563eb"/><circle cx="350" cy="95" r="9" fill="#16a34a"/></g><g><circle cx="440" cy="130" r="9" fill="#e11d48"/><circle cx="440" cy="170" r="9" fill="#f59e0b"/><circle cx="440" cy="210" r="9" fill="#2563eb"/></g><text x="20" y="172" font-size="10" fill="#94a3ad" transform="rotate(-90 20 172)">distance travelled →</text></svg>',
      },
      caption: 'Paper chromatogram. In Dye C and the sample, the amber (yellow) spot sits 18 mm above the start line; the solvent front is at 37 mm.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Identify the dye that the sweet sample contains. Justify your answer.',
        marks: 2,
        ph: 'Dye C; same three spots in the same positions as the sample',
        widget: 'radio_select',
        widgetOptions: ['Dye A', 'Dye B', 'Dye C', 'Dye D'],
      },
      {
        label: 'b',
        text: 'For each of the other dyes, explain why they are not contained in the sweet sample.',
        marks: 3,
        ph: 'A has only 2 spots (missing amber); B missing the blue spot; D has an extra green spot not in the sample',
      },
      {
        label: 'c',
        text: 'The Rf value compares the distance moved by each spot with the distance moved by the solvent front. Calculate the Rf value of the amber (yellow) spot in Dye C.',
        marks: 3,
        ph: 'Amber spot 18 mm ÷ solvent front 37 mm; Rf ≈ 0.49',
      },
    ],
  },

  // ─── Q8: Polymers — functional groups & PP vs PLA tubs (10 marks, Crit A/D) ──
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Organic chemistry – polymers & plastics',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 10,
    stem: 'Plastic food tubs are made from a variety of organic polymers. Polymers are made up from a large number of monomers that are chemically bonded together. A take-away restaurant is choosing between polypropylene (PP) tubs and polylactic acid (PLA) tubs for its hot meals.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'PP (polypropylene)', 'PLA (polylactic acid)'],
        rows: [
          ['Softening temperature / °C', '160', '60'],
          ['Cost per 1000 tubs / £', '22', '38'],
          ['Made from', 'crude oil (finite)', 'plant starch (renewable)'],
          ['Biodegradable?', 'no', 'yes (industrial compost)'],
          ['Microwave / hot food', 'good', 'softens with very hot food'],
        ],
      },
      caption: 'Comparison of PP and PLA for hot-food tubs. PP tolerates hotter food and costs less; PLA is renewable and compostable but softens sooner.',
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
        text: 'Aisha, Tom and Wei run a busy take-away. They want their tubs to be environmentally friendly, practical for hot food and inexpensive to maximise profit. Using the table above, explain the advantages and disadvantages of using PLA compared to PP for the hot-food tubs. In your answer you should outline the physical properties required in a hot-food tub, describe the advantages and disadvantages that PLA has compared to PP, and justify whether PLA would make a suitable replacement for PP.',
        marks: 7,
        ph: 'PP properties (heat, cheap); PLA biodegrade/renewable; PLA softens at 60°C/more expensive; justified conclusion',
      },
    ],
  },

  // ─── Q9: Seaweed-based vs oil-based films essay (13 marks, Crit D) ───────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Sustainability – seaweed-based vs oil-based plastic films',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 13,
    stem: 'Most cling films and sachet wrappers are made from chemicals that come from oil. Scientists are finding innovative solutions to produce films that have less impact on the environment. One solution is to make edible or compostable films from seaweed. Oil-based films are made from fossil fuels and have many uses but they release greenhouse gases and persist for centuries. Seaweed-based films can dissolve in warm water or be composted at home. In some areas of the ocean, plastic films collect into drifting rafts of waste that threaten marine wildlife.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Carbon footprint of producing 1 kg of packaging film (arbitrary units of CO₂)',
        units: 'units',
        flows: [
          { label: 'Oil-based film — fossil feedstock + processing', value: 60, kind: 'loss' },
          { label: 'Oil-based film — end of life (persists / incinerated)', value: 25, kind: 'out' },
          { label: 'Seaweed film — CO₂ absorbed as seaweed grows', value: 40, kind: 'in' },
          { label: 'Seaweed film — processing energy', value: 18, kind: 'out' },
          { label: 'Seaweed film — composted (CO₂ returned)', value: 12, kind: 'out' },
        ],
        conservation: 'Seaweed first removes CO₂ as it grows (40 in), so its net footprint is far smaller than the oil-based film (85 out).',
      },
      caption: 'Where the carbon goes for each type of film. Seaweed absorbs CO₂ as it grows; oil-based film only emits it.',
    },
    tasks: [
      {
        label: '',
        text: 'Using your experience from your wider MYP studies and the information above, discuss and evaluate the impact of seaweed-based compostable films as a replacement for oil-based plastic films. In your answer you should consider the sustainability of production of seaweed-based and oil-based films, the environmental impacts of the production and end of use of seaweed-based and oil-based films, the social impacts of the production, use and end of use of seaweed-based and oil-based films, and your opinion about replacing oil-based with seaweed-based films.',
        marks: 13,
        ph: 'Sustainability, environmental impacts, social impacts, justified conclusion on replacement',
      },
    ],
  },
]
