import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2018 · VARIANT 1  (isomorphic to biology-may-2018)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widgets, tags) in a NEW biological context, with self-contained
// data-driven artefacts (no external image files). Numbers recomputed throughout.
//   Q1 Natural selection: peppered moths → rock pocket mice (dark fur on lava)
//   Q2 Carbon cycle/human impact → Nitrogen cycle / human impact (fertiliser)
//   Q3 Reproduction & hormones → same construct, oestrous/menstrual hormones (new graph)
//   Q4 Enzyme pH (lactase/lactose) → catalase / hydrogen peroxide, pH 2/7/12
//   Q5 Lactose-conc data → substrate (H₂O₂) concentration plateau (new numbers)
//   Q6 Crit B temp-enzyme design → temperature & catalase design
//   Q7 Plant growth factors → photosynthesis requirements (new options)
//   Q8 Terracing vs vertical farming → contour ploughing vs hydroponic greenhouse
//   Q9 Crit D landscape farming → wetland drainage / polder reclamation
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'biology-may-2018-v1',
  subject: 'Biology',
  session: 'May',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Q1: Natural Selection — Rock Pocket Mice (11 marks, Criterion A) ──────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Natural Selection & Genetics',
    topicCanonical: 'Natural Selection',
    topicGroup: 'Evolution',
    topicsAlso: ['Inheritance & Variation'],
    marks: 11,
    stem: 'This question is about natural selection and genetics. In the deserts of the south-western United States, rock pocket mice live on pale, sandy ground but also on dark patches of cooled volcanic lava. The diagram shows pale and dark-furred mice on each background.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sand1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3e2bf"/><stop offset="1" stop-color="#e3c98f"/></linearGradient><linearGradient id="lava1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a5147"/><stop offset="1" stop-color="#2f2a24"/></linearGradient></defs><rect width="600" height="260" fill="#ffffff"/><rect x="20" y="40" width="270" height="180" rx="8" fill="url(#sand1)" stroke="#c9ab6e"/><rect x="310" y="40" width="270" height="180" rx="8" fill="url(#lava1)" stroke="#1f1b16"/><text x="155" y="32" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pale sandy ground</text><text x="445" y="32" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Dark lava rock</text><g><ellipse cx="95" cy="130" rx="34" ry="20" fill="#e7cf9c" stroke="#b89a5d"/><circle cx="128" cy="124" r="13" fill="#e7cf9c" stroke="#b89a5d"/><circle cx="133" cy="120" r="2" fill="#3a2f1a"/><path d="M61,128 q-12,-4 -16,2" stroke="#b89a5d" stroke-width="2" fill="none"/><text x="95" y="178" font-size="11" text-anchor="middle" fill="#7a5f1f">pale mouse (camouflaged)</text></g><g><ellipse cx="210" cy="170" rx="30" ry="17" fill="#4a3f33" stroke="#2c241b"/><circle cx="238" cy="165" r="11" fill="#4a3f33" stroke="#2c241b"/><circle cx="242" cy="162" r="2" fill="#000"/><text x="210" y="205" font-size="11" text-anchor="middle" fill="#5a4a2a">dark mouse (visible)</text></g><g><ellipse cx="385" cy="130" rx="34" ry="20" fill="#e7cf9c" stroke="#b89a5d"/><circle cx="418" cy="124" r="13" fill="#e7cf9c" stroke="#b89a5d"/><circle cx="423" cy="120" r="2" fill="#3a2f1a"/><text x="385" y="178" font-size="11" text-anchor="middle" fill="#ffe9b8">pale mouse (visible)</text></g><g><ellipse cx="500" cy="170" rx="30" ry="17" fill="#3a3128" stroke="#15110c"/><circle cx="528" cy="165" r="11" fill="#3a3128" stroke="#15110c"/><circle cx="532" cy="162" r="2" fill="#fff"/><text x="500" y="205" font-size="11" text-anchor="middle" fill="#d8c9a8">dark mouse (camouflaged)</text></g><path d="M75 235 q15 -8 30 0" stroke="#a07d4f" stroke-width="2" fill="none"/><text x="445" y="248" font-size="11" text-anchor="middle" fill="#9a8c70">owls and hawks hunt by sight from above</text></svg>',
      },
      caption: 'Rock pocket mice with pale or dark fur on sandy ground and on dark lava rock. Predators (owls, hawks) hunt by sight.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the meaning of the term *population* in the context of the rock pocket mice.',
        marks: 1,
        ph: 'A population is organisms of the same species living in the same area.',
      },
      {
        label: 'b',
        text: '**Describe** how natural selection results in the increase in frequency of the dark-furred mice living on the dark lava rock.',
        marks: 3,
        ph: 'Reference to survival of fittest; beneficial traits survive to reproduce; frequency of trait increases...',
      },
      {
        label: 'c',
        text: '**Describe** how living on the dark lava rock selected for the dark-furred mice and affected their frequency in the population.',
        marks: 4,
        ph: 'Background colour is dark; dark mice camouflaged; increased survival from predation; produced offspring with same colour...',
      },
      {
        label: 'd',
        text: 'On the pale sandy ground most rock pocket mice are pale in colour. The dark fur trait in these mice is recessive.\n\n**Explain** how the dark fur trait remained in the population on the sandy ground even though it was an undesirable trait there.',
        marks: 3,
        ph: 'Dark trait hidden by pale/dominant allele; not expressed in heterozygous individuals; only homozygous recessive show it...',
      },
    ],
  },

  // ── Q2: Nitrogen Cycle (6 marks, Criterion A) ────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Carbon Cycle & Human Impact',
    topicCanonical: 'Nutrient/Carbon/Nitrogen Cycles',
    topicGroup: 'Organisms',
    topicsAlso: ['Human Influences'],
    marks: 6,
    stem: 'The diagram shows the nitrogen cycle. The graph shows how the concentration of nitrate dissolved in a river has changed over time as nearby farmland has been intensively fertilised.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ahN" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2f9e44"/></marker></defs><rect width="640" height="320" fill="#ffffff"/><rect x="0" y="230" width="640" height="90" fill="#e7dccb"/><text x="20" y="252" font-size="11" fill="#7a6b53">soil (nitrates)</text><ellipse cx="120" cy="40" rx="50" ry="22" fill="#cfe8f5" stroke="#7fb2c9"/><text x="120" y="45" font-size="12" text-anchor="middle" fill="#2c5468">N₂ in air</text><g><rect x="280" y="150" width="20" height="70" fill="#2f9e44"/><path d="M290 150 q-40 -30 -10 -55 q30 25 10 55" fill="#37b24d"/><path d="M290 130 q40 -25 10 -50 q-30 25 -10 50" fill="#37b24d"/><text x="290" y="238" font-size="11" text-anchor="middle" fill="#2f6b34">plant</text></g><g><ellipse cx="480" cy="180" rx="34" ry="20" fill="#b08968" stroke="#7a5d40"/><circle cx="510" cy="172" r="12" fill="#b08968" stroke="#7a5d40"/><text x="480" y="216" font-size="11" text-anchor="middle" fill="#6b4f33">animal</text></g><path d="M120 64 C 170 120, 230 150, 280 175" stroke="#2f9e44" stroke-width="2" fill="none" marker-end="url(#ahN)"/><text x="150" y="135" font-size="10" fill="#2f6b34">N-fixation → nitrates</text><path d="M305 185 C 360 175, 410 178, 444 180" stroke="#2f9e44" stroke-width="2" fill="none" marker-end="url(#ahN)"/><text x="355" y="170" font-size="10" fill="#2f6b34">eaten</text><path d="M480 200 C 430 245, 360 250, 305 240" stroke="#f08c00" stroke-width="2" fill="none" marker-end="url(#ahN)"/><text x="360" y="270" font-size="10" fill="#b56b00">decay returns nitrates</text><path d="M250 240 C 200 270, 160 200, 130 64" stroke="#0b7285" stroke-width="2" fill="none" marker-end="url(#ahN)"/><text x="170" y="300" font-size="10" fill="#0b7285">denitrification → N₂</text><text x="320" y="18" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">The nitrogen cycle</text></svg>',
      },
      caption: 'The nitrogen cycle: nitrogen fixation, uptake by plants, transfer to animals, decay returning nitrates, and denitrification back to N₂.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** how plants and animals are connected in the nitrogen cycle.',
        marks: 3,
        ph: 'Plants take up nitrates to make protein; animals eat plants to get nitrogen/protein; decay of animals and plants returns nitrates to the soil...',
      },
      {
        label: 'b',
        text: 'Use information from the diagram and graph above to **describe** how human activity has led to a change in the nitrogen cycle.',
        marks: 3,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Nitrate concentration in the river over time',
            xLabel: 'Year',
            yLabel: 'Nitrate concentration',
            yUnit: 'mg dm⁻³',
            dataPoints: [
              { x: 1980, y: 8 },
              { x: 1990, y: 14 },
              { x: 2000, y: 24 },
              { x: 2010, y: 38 },
              { x: 2020, y: 52 },
            ],
            xMin: 1980,
            xMax: 2020,
            yMin: 0,
            yMax: 60,
            xStep: 10,
            yStep: 10,
          },
          caption: 'Nitrate concentration in the river has risen steadily as the surrounding farmland has been fertilised more heavily.',
        },
        ph: 'Adding fertilisers / intensive farming; excess nitrates wash into rivers (leaching); eutrophication / algal bloom / loss of oxygen / dead zones...',
      },
    ],
  },

  // ── Q3: Reproduction & Hormones (8 marks, Criterion A) ───────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Reproduction, Variation & Hormones',
    topicCanonical: 'Reproduction',
    topicGroup: 'Evolution',
    topicsAlso: ['Receptors & Hormones', 'Inheritance & Variation'],
    marks: 8,
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the process that produces sperm and egg cells in organisms.',
        marks: 1,
        ph: 'Select one option.',
        widget: 'radio_select',
        widgetOptions: ['Mitosis', 'Respiration', 'Meiosis', 'Digestion'],
      },
      {
        label: 'b',
        text: '**Outline** how fertilization leads to variation in a population.',
        marks: 3,
        ph: 'Each parent has different genetic material; half genetic material comes from each parent; combination leads to new individual...',
      },
      {
        label: 'c',
        text: 'The table below gives information about the role of hormones involved in the menstrual cycle.\n\n| Hormone | Role |\n|---|---|\n| Oestrogen | Stops FSH being produced; causes egg to mature; thickens uterus lining; stimulates pituitary to release LH |\n| FSH (follicle stimulating hormone) | Stimulates the ovaries to release oestrogen |\n| LH (luteinising hormone) | Triggers ovulation |\n| Progesterone | Maintains thickening of uterus during middle part of cycle |\n\n**Analyse** the information in the table to label the key of the following graph by dragging the hormone names to the correct positions.',
        marks: 3,
        ph: 'Drag: FSH → first peak early cycle; LH → sharp peak at ovulation; Oestrogen → rises then dips; Progesterone → rises after ovulation.',
        widget: 'match_drag_drop',
        widgetItems: ['Follicle stimulating hormone (FSH)', 'Progesterone', 'Luteinising hormone (LH)', 'Oestrogen'],
        widgetOptions: ['Key position 1', 'Key position 2', 'Key position 3', 'Key position 4'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="320" fill="#ffffff"/><line x1="70" y1="270" x2="600" y2="270" stroke="#333" stroke-width="1.5"/><line x1="70" y1="270" x2="70" y2="30" stroke="#333" stroke-width="1.5"/><text x="335" y="305" font-size="12" text-anchor="middle" fill="#1f2d3a">Day of menstrual cycle</text><text x="28" y="150" font-size="12" text-anchor="middle" fill="#1f2d3a" transform="rotate(-90 28 150)">Relative hormone level</text><line x1="335" y1="270" x2="335" y2="40" stroke="#94a3ad" stroke-width="1" stroke-dasharray="4 4"/><text x="335" y="30" font-size="10" text-anchor="middle" fill="#94a3ad">ovulation (~day 14)</text><g font-size="10" fill="#5b6b78"><text x="70" y="286" text-anchor="middle">0</text><text x="202" y="286" text-anchor="middle">7</text><text x="335" y="286" text-anchor="middle">14</text><text x="468" y="286" text-anchor="middle">21</text><text x="600" y="286" text-anchor="middle">28</text></g><path d="M70,210 C160,180 250,175 320,210 C360,235 420,250 600,250" fill="none" stroke="#0b7285" stroke-width="2.5"/><text x="150" y="170" font-size="11" fill="#0b7285">1</text><path d="M70,250 C200,245 300,150 335,90 C370,150 470,245 600,250" fill="none" stroke="#2f9e44" stroke-width="2.5"/><text x="335" y="80" font-size="11" text-anchor="middle" fill="#2f9e44">2</text><path d="M70,255 C150,253 250,252 335,250 C340,250 345,255 350,258" fill="none" stroke="#f08c00" stroke-width="2.5"/><text x="250" y="244" font-size="11" fill="#b56b00">3</text><path d="M335,258 C400,210 460,130 510,120 C560,128 580,180 600,230" fill="none" stroke="#7a4fb5" stroke-width="2.5"/><text x="520" y="110" font-size="11" fill="#7a4fb5">4</text></svg>',
          },
          caption: 'Changing hormone levels through one menstrual cycle. Curves 1–4 must be matched to the four hormones in the key.',
        },
      },
      {
        label: 'd',
        text: 'The graph above shows changing hormone levels during the menstrual cycle.\n\nUse information from the table above to **suggest** one possible result if oestrogen did not stop the production of FSH.',
        marks: 1,
        ph: 'More than one egg could mature; could lead to twins or multiple embryos...',
      },
    ],
  },

  // ── Q4: Enzyme Investigation — pH (12 marks, Criterion B/C) ──────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Enzymes & Investigation Design',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    topicsAlso: ['Digestion'],
    marks: 12,
    stem: 'Enzymes are biological compounds that speed up biochemical reactions in organisms. Enzymes are a type of catalyst.\n\nThe graph below shows data about five enzymes found in the human digestive system.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Rate of reaction of five digestive enzymes against pH',
        xLabel: 'pH',
        yLabel: 'Relative rate of reaction',
        dataPoints: [
          { x: 2, y: 95 },
          { x: 5, y: 40 },
          { x: 7, y: 78 },
          { x: 9, y: 55 },
          { x: 11, y: 20 },
        ],
        xMin: 0,
        xMax: 14,
        yMin: 0,
        yMax: 100,
        xStep: 2,
        yStep: 20,
      },
      caption: 'Each digestive enzyme works fastest at a different optimum pH along the gut (e.g. pepsin at acidic pH ~2, others nearer neutral or alkaline).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Interpret** the graph and use your scientific knowledge to drag and drop the correct enzyme to the correct location in the human body.',
        marks: 4,
        ph: 'Salivary amylase → mouth; Pepsin → stomach; Trypsin → small intestine/pancreas; Carbonic anhydrase → small intestine; Alkaline phosphatase → intestinal wall.',
        widget: 'match_drag_drop',
        widgetItems: ['Salivary amylase', 'Pepsin', 'Trypsin', 'Carbonic anhydrase', 'Alkaline phosphatase'],
        widgetOptions: ['Mouth/Salivary glands', 'Stomach', 'Small intestine (upper)', 'Small intestine / Pancreas', 'Intestinal wall (lower)'],
      },
      {
        label: 'b',
        text: 'A group of students investigated the effect of pH on enzyme-based reactions using catalase and hydrogen peroxide at pH 2, 7 and 12 at 37°C. The volume of oxygen gas given off shows how fast the reaction goes.\n\n**Formulate** a research question for this investigation.',
        marks: 1,
        ph: 'How does pH affect the rate of oxygen produced / the rate of catalase breaking down hydrogen peroxide?',
      },
      {
        label: 'c',
        text: '**Identify** the variables in this investigation.',
        marks: 4,
        ph: 'IV: pH. DV: rate of oxygen produced. CV (any 2): amount of hydrogen peroxide, surface area, amount of catalase, volume of water, concentration of enzyme, temperature, type of enzyme.',
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: ['pH', 'Rate of oxygen produced', 'Amount of hydrogen peroxide/substrate', 'Volume of water', 'Temperature', 'Amount of catalase/enzyme'],
      },
      {
        label: 'd',
        text: 'Catalase is an enzyme present in human and animal cells.\n\n**Explain** why the values of pH chosen in the investigation above will not give sufficient relevant data.',
        marks: 3,
        ph: 'Range too extreme / not relevant to where catalase works; insufficient number of values; no repeats/minimum 3 trials needed...',
      },
    ],
  },

  // ── Q5: Substrate Concentration Investigation (21 marks, Criterion A/C) ───────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis — Enzyme Concentration',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    marks: 21,
    stem: 'The students knew that each enzyme molecule could be used multiple times but wondered if the concentration of hydrogen peroxide would affect the rate of reaction. The students conducted an investigation changing the concentration of hydrogen peroxide and measuring the time taken to collect a fixed volume of oxygen. The students hypothesised that if the concentration of hydrogen peroxide increases, then the time to collect the oxygen would be shorter because more substrate would be interacting with the enzyme.\n\n| Concentration of hydrogen peroxide / gdm⁻³ | Time to collect 20 cm³ oxygen / s |\n|---|---|\n| 2 | 84 |\n| 4 | 68 |\n| 6 | 67 |\n| 8 | 50 |\n| 10 | 46 |\n| 12 | 45 |\n| 14 | 44 |',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Concentration of hydrogen peroxide / g dm⁻³', 'Time to collect 20 cm³ oxygen / s'],
        rows: [
          ['2', '84'],
          ['4', '68'],
          ['6', '67'],
          ['8', '50'],
          ['10', '46'],
          ['12', '45'],
          ['14', '44'],
        ],
      },
      caption: 'Time taken to collect 20 cm³ of oxygen at different hydrogen peroxide concentrations (catalase fixed). The trend falls steeply then plateaus.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the enzyme that breaks down hydrogen peroxide.',
        marks: 1,
        ph: 'The enzyme is...',
      },
      {
        label: 'b',
        text: '**Plot** the data from the table on the axes below, add values to both axes and label the *y* axis.',
        marks: 5,
        ph: 'y-axis: Time to collect 20 cm³ oxygen / s (with unit). x-axis values evenly spaced. All 7 points plotted correctly ± 1 unit on candidate\'s scale.',
      },
      {
        label: 'c',
        text: '**State** the unit that is missing from the *x* axis.',
        marks: 1,
        ph: 'The missing unit is...',
      },
      {
        label: 'd',
        text: 'Use scientific reasoning to **explain** the trend shown by the data in the graph above.',
        marks: 6,
        ph: 'As concentration increases, time decreases (negative trend); more substrate interacts with enzyme; at plateau all active sites occupied; one correct scientific term used (active site, substrate, catalase)...',
      },
      {
        label: 'e',
        text: 'The students hypothesised that if the concentration of hydrogen peroxide increases, then the time to collect the oxygen would be shorter because more substrate would be interacting with the enzyme.\n\nUsing the graph, **evaluate** the validity of the students\' hypothesis.',
        marks: 5,
        ph: 'Valid at lower concentrations (time decreasing); not valid at higher concentrations (plateau reached); all active sites being used; hypothesis partly valid...',
      },
      {
        label: 'f',
        text: '**State** one improvement to the investigation. **Justify** your answer.',
        marks: 2,
        ph: 'Improvement: more trials / extend range of concentrations / use a gas syringe data-logger. Justification: linked to improvement...',
      },
      {
        label: 'g',
        text: 'The action of enzymes is temperature dependent. **State** one extension to the enzyme investigation other than changing the temperature or pH.',
        marks: 1,
        ph: 'Change the concentration of the enzyme/catalase...',
      },
    ],
  },

  // ── Q6: Temperature Enzyme Design Investigation (18 marks, Criterion B) ───────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Temperature & Enzymes',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    marks: 18,
    stem: 'In a third enzyme investigation using catalase and hydrogen peroxide, the students wanted to study the effects of temperature on enzyme activity.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wbath" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe9f6"/><stop offset="1" stop-color="#8fc7e3"/></linearGradient></defs><rect width="600" height="300" fill="#ffffff"/><rect x="40" y="150" width="220" height="110" rx="6" fill="url(#wbath)" stroke="#3f7e98"/><text x="150" y="278" font-size="11" text-anchor="middle" fill="#2c5468">water bath at set temperature</text><rect x="90" y="90" width="40" height="110" rx="6" fill="#eef6fb" stroke="#5b6b78"/><rect x="90" y="150" width="40" height="50" rx="0" fill="#bfe3a8" stroke="#5b6b78"/><text x="110" y="86" font-size="10" text-anchor="middle" fill="#5b6b78">flask: catalase + H₂O₂</text><circle cx="104" cy="170" r="3" fill="#2f9e44"/><circle cx="116" cy="180" r="3" fill="#2f9e44"/><circle cx="110" cy="160" r="3" fill="#2f9e44"/><rect x="178" y="70" width="14" height="130" rx="6" fill="#fbe9ec" stroke="#c0392b"/><rect x="178" y="150" width="14" height="50" fill="#c0392b"/><circle cx="185" cy="205" r="9" fill="#c0392b"/><text x="185" y="60" font-size="10" text-anchor="middle" fill="#c0392b">thermometer</text><path d="M130 120 q60 -20 120 -10" stroke="#5b6b78" stroke-width="2" fill="none"/><rect x="320" y="60" width="150" height="80" rx="6" fill="none" stroke="#0b7285" stroke-width="2"/><text x="395" y="52" font-size="11" text-anchor="middle" fill="#0b7285">gas syringe</text><line x1="320" y1="100" x2="470" y2="100" stroke="#0b7285" stroke-width="1" stroke-dasharray="3 3"/><rect x="320" y="80" width="70" height="40" fill="#cfe8f5"/><text x="490" y="104" font-size="10" fill="#0b7285">O₂ collected</text><text x="300" y="180" font-size="11" fill="#1f2d3a">Measure the time to collect a fixed</text><text x="300" y="198" font-size="11" fill="#1f2d3a">volume of oxygen at each temperature.</text></svg>',
      },
      caption: 'Apparatus to investigate the effect of temperature on catalase activity: a water bath, a flask of catalase and hydrogen peroxide, a thermometer and a gas syringe to collect the oxygen produced.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation into the effect of temperature on enzyme activity. In your design, you should:\n\n- identify the independent, dependent and two control variables\n- formulate a testable hypothesis with a scientific explanation\n- describe how you will manipulate the variables\n- describe the method\n- state how you will make sure your method is safe',
        marks: 18,
        ph: 'IV: temperature. DV: time to collect a fixed volume of oxygen (or volume of oxygen in a fixed time). CV: amount/concentration of hydrogen peroxide, volume/concentration of catalase. Hypothesis: As temperature increases, time to collect the oxygen decreases (up to optimal), because enzymes work faster at higher temperatures. Above optimal temperature enzymes denature and reaction stops. Method: set water baths at different temperatures (e.g. 10, 20, 30, 37, 50°C); add fixed volume of catalase + hydrogen peroxide; record time to collect a fixed volume of oxygen; repeat 3 times. Safety: hydrogen peroxide is an irritant — wear goggles; handle hot water/glassware carefully.',
      },
    ],
  },

  // ── Q7: Plant Growth Factors (4 marks, Criterion A/D) ────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Plant Growth & Photosynthesis',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 4,
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sun7" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="560" height="280" fill="#ffffff"/><circle cx="80" cy="60" r="28" fill="url(#sun7)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="118" y1="58" x2="200" y2="90"/><line x1="118" y1="70" x2="200" y2="102"/></g><text x="80" y="106" font-size="11" text-anchor="middle" fill="#9a7d0f">light</text><rect x="180" y="210" width="200" height="40" rx="6" fill="#cdb892" stroke="#9a8458"/><text x="280" y="236" font-size="11" text-anchor="middle" fill="#6b5a36">soil (water + nutrients)</text><rect x="276" y="120" width="8" height="92" fill="#2f6b34"/><path d="M280 130 q-44 -28 -12 -58 q34 26 12 58" fill="#37b24d"/><path d="M280 110 q44 -24 12 -52 q-34 26 -12 52" fill="#2f9e44"/><path d="M280 150 q-50 -16 -16 -44 q40 22 16 44" fill="#37b24d"/><g><path d="M120 250 l30 -16 l0 32 Z" fill="#9bb9cf"/><text x="105" y="244" font-size="10" fill="#0b7285">water uptake</text></g><g><circle cx="430" cy="120" r="14" fill="#eef6fb" stroke="#5b6b78"/><text x="430" y="124" font-size="10" text-anchor="middle" fill="#5b6b78">CO₂</text><path d="M414 120 q-30 0 -50 -6" stroke="#5b6b78" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/></g><text x="430" y="150" font-size="10" text-anchor="middle" fill="#5b6b78">carbon dioxide from air</text><text x="280" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Factors a plant needs to grow</text></svg>',
      },
      caption: 'A green plant receives light, water and nutrients from the soil, and carbon dioxide from the air.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** all the factors needed for plant growth.',
        marks: 2,
        ph: 'Light, Water, Nutrients and Carbon dioxide.',
        widget: 'radio_select',
        widgetOptions: [
          'Light, Water, Nutrients and Carbon dioxide',
          'Glucose, Light, Oxygen and Water',
          'Light, Oxygen, Nutrients and Carbon dioxide',
          'Glucose, Water, Nutrients and Oxygen',
        ],
      },
      {
        label: 'b',
        text: 'For **one** of the factors you selected in part (a), **outline** the role of this factor in plant growth.',
        marks: 2,
        ph: 'e.g. Light: used in photosynthesis to produce glucose for energy and growth...',
      },
    ],
  },

  // ── Q8: Contour Ploughing vs Hydroponics — Compare (5 marks, Criterion D) ─────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Farming Methods — Compare & Contrast',
    topicCanonical: 'Human Influences',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Habitat Change & Destruction'],
    marks: 5,
    stem: 'Farmers on sloping land use contour ploughing — cutting furrows that follow the curve of the hillside — to hold rainwater and reduce soil being washed away. In a hydroponic greenhouse, crops are grown without soil, with their roots bathed in a nutrient solution; the temperature, light and nutrients are all controlled and the water is recirculated.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="hill8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe0a8"/><stop offset="1" stop-color="#7fae5c"/></linearGradient></defs><rect width="640" height="280" fill="#ffffff"/><text x="160" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Contour ploughing</text><path d="M30 220 Q160 60 300 220 Z" fill="url(#hill8)" stroke="#5f8a3e"/><g stroke="#5f7a3a" stroke-width="2" fill="none"><path d="M70 190 Q160 140 250 190"/><path d="M85 160 Q160 120 235 160"/><path d="M100 135 Q160 105 215 135"/></g><path d="M150 90 l8 -4 l0 8 Z" fill="#9bb9cf"/><text x="170" y="92" font-size="10" fill="#0b7285">rain held by furrows</text><text x="160" y="244" font-size="11" text-anchor="middle" fill="#5f7a3a">furrows follow the slope, holding water and soil</text><text x="480" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Hydroponic greenhouse</text><polygon points="360,200 600,200 600,90 480,50 360,90" fill="#eaf6fb" stroke="#7fb2c9"/><line x1="480" y1="50" x2="480" y2="200" stroke="#bcd9e6" stroke-width="1"/><rect x="380" y="160" width="200" height="14" fill="#0b7285" opacity="0.5"/><text x="480" y="158" font-size="10" text-anchor="middle" fill="#0b7285">recirculated nutrient solution</text><g fill="#2f9e44"><rect x="400" y="138" width="4" height="20"/><rect x="430" y="138" width="4" height="20"/><rect x="460" y="138" width="4" height="20"/><rect x="490" y="138" width="4" height="20"/><rect x="520" y="138" width="4" height="20"/><rect x="550" y="138" width="4" height="20"/></g><circle cx="395" cy="70" r="9" fill="#f0c419"/><text x="480" y="244" font-size="11" text-anchor="middle" fill="#0b7285">no soil; light, heat and nutrients controlled</text></svg>',
      },
      caption: 'Contour ploughing on a hillside (left) and a soil-free hydroponic greenhouse (right).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Compare and contrast** how the needs of the crops have been met in contour ploughing and hydroponic farming. **Justify** your answers.',
        marks: 5,
        ph: 'Similarity: both improve water/nutrient supply to crops / maximise yield. Difference: contour uses natural light vs hydroponic can control light; contour relies on climate/rain vs hydroponic recirculates water; contour reduces soil erosion vs hydroponic has no soil/erosion; nutrients from soil vs controlled nutrient solution...',
      },
    ],
  },

  // ── Q9: Wetland Drainage — Discuss & Evaluate (15 marks, Criterion D) ─────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Human Impact on Landscape — Evaluation',
    topicCanonical: 'Human Influences',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Mitigation of Adverse Effects'],
    marks: 15,
    stem: 'Using information from the reading passage about how people drain wetlands to create farmland (polders) and build flood defences.',
    tasks: [
      {
        label: '',
        text: 'Using information from the video, **discuss** and **evaluate** how humans have changed their natural landscape by draining wetlands to optimise their local environment for farming. In your answer, you should include:\n\n- a discussion of how the landscape has been changed\n- scientific justification of the changes to the landscape\n- advantages of changing the landscape\n- disadvantages of changing the landscape\n- an economic impact or a social impact\n- a concluding appraisal.',
        marks: 15,
        ph: 'Change: wetlands drained with ditches/pumps to make flat fertile farmland (polders); dykes/levees built. Scientific justification: lowers water table / fertile silt soil / controls flooding. Advantages: more farmland / higher food production / flood protection. Disadvantages: loss of wetland habitat & biodiversity / soil shrinkage / increased flood risk if defences fail / release of stored carbon. Economic/social: jobs and food for growing population / cost of maintaining pumps and dykes. Appraisal: effective for farming but trades off habitat and long-term sustainability...',
      },
    ],
  },
]
