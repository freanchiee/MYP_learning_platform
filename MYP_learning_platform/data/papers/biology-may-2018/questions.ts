import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

export const paperMeta: PaperMeta = {
  id: 'biology-may-2018',
  subject: 'Biology',
  session: 'May',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Q1: Natural Selection — Peppered Moths (11 marks, Criterion A) ──────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Natural Selection & Genetics',
    topicCanonical: 'Natural Selection',
    topicGroup: 'Evolution',
    topicsAlso: ['Inheritance & Variation'],
    marks: 11,
    stem: 'This question is about natural selection and genetics. The images show peppered moths on tree bark before and after the industrial revolution.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="300" y="20" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Peppered moth camouflage on tree bark</text><g><rect x="20" y="36" width="270" height="170" fill="#cfd6cf" stroke="#5b6b78"/><g fill="#9fb29a" opacity="0.85"><circle cx="60" cy="70" r="14"/><circle cx="95" cy="90" r="10"/><circle cx="50" cy="120" r="11"/><circle cx="120" cy="60" r="9"/><circle cx="160" cy="100" r="13"/><circle cx="210" cy="75" r="10"/><circle cx="250" cy="120" r="12"/><circle cx="200" cy="150" r="11"/><circle cx="90" cy="160" r="9"/><circle cx="150" cy="170" r="10"/></g><ellipse cx="220" cy="130" rx="26" ry="14" fill="#e7ece6" stroke="#7d8a7c" stroke-width="1"/><text x="220" y="133" font-size="7" text-anchor="middle" fill="#5b6b78">pale moth</text><ellipse cx="95" cy="120" rx="22" ry="12" fill="#3a3a3a"/><text x="95" y="123" font-size="7" text-anchor="middle" fill="#ffffff">dark moth</text></g><text x="155" y="224" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">BEFORE — pale, lichen-covered bark</text><text x="155" y="240" font-size="9" text-anchor="middle" fill="#64748b">Pale moth hidden · dark moth easily seen by birds</text><g><rect x="310" y="36" width="270" height="170" fill="#3b352f" stroke="#5b6b78"/><g fill="#26211c" opacity="0.9"><rect x="320" y="50" width="250" height="6"/><rect x="320" y="90" width="250" height="5"/><rect x="320" y="130" width="250" height="6"/><rect x="320" y="170" width="250" height="5"/></g><ellipse cx="400" cy="120" rx="26" ry="14" fill="#e7ece6" stroke="#9aa3ac" stroke-width="1"/><text x="400" y="123" font-size="7" text-anchor="middle" fill="#5b6b78">pale moth</text><ellipse cx="500" cy="130" rx="22" ry="12" fill="#1c1a17"/><text x="500" y="133" font-size="7" text-anchor="middle" fill="#cfd6cf">dark moth</text></g><text x="445" y="224" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">AFTER — soot-darkened bark</text><text x="445" y="240" font-size="9" text-anchor="middle" fill="#64748b">Dark moth hidden · pale moth easily seen by birds</text><line x1="300" y1="32" x2="300" y2="210" stroke="#cbd5d8" stroke-width="1" stroke-dasharray="3 3"/><text x="300" y="272" font-size="10" text-anchor="middle" fill="#94a3ad">Industrial soot killed the pale lichen and blackened the bark — reversing which moth is camouflaged.</text></svg>',
      },
      caption: 'Before the industrial revolution pale moths were camouflaged on lichen-covered bark; after, soot blackened the bark so dark moths were better hidden from predators.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the meaning of the term *population* in the context of the peppered moths.',
        marks: 1,
        ph: 'A population is organisms of the same species living in the same area.',
      },
      {
        label: 'b',
        text: '**Describe** how natural selection results in the increase in frequency of the black-coloured moths after the industrial revolution.',
        marks: 3,
        ph: 'Reference to survival of fittest; beneficial traits survive to reproduce; frequency of trait increases...',
      },
      {
        label: 'c',
        text: '**Describe** how this change in the environment selected for the black-coloured moths and affected their frequency in the population.',
        marks: 4,
        ph: 'Colour of lichen/tree/background changed; black moths camouflaged; increased survival from predation; produced offspring with same colour...',
      },
      {
        label: 'd',
        text: 'Before the industrial revolution, most peppered moths were grey in colour. The black colour trait in moths is recessive.\n\n**Explain** how the black colour trait remained in the population even though it was an undesirable trait.',
        marks: 3,
        ph: 'Dark trait hidden by grey/allele; not expressed in heterozygous individuals; only homozygous recessive show it...',
      },
    ],
  },

  // ── Q2: Carbon Cycle (6 marks, Criterion A) ──────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Carbon Cycle & Human Impact',
    topicCanonical: 'Nutrient/Carbon/Nitrogen Cycles',
    topicGroup: 'Organisms',
    topicsAlso: ['Human Influences'],
    marks: 6,
    stem: 'The diagram shows the carbon cycle. The graph shows changes in methane and carbon dioxide levels in the atmosphere over time.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#475569"/></marker></defs><rect width="620" height="320" fill="#f4f9ff"/><rect x="0" y="200" width="620" height="120" fill="#e3efe0"/><text x="310" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">The carbon cycle</text><rect x="200" y="40" width="220" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6"/><text x="310" y="65" font-size="13" font-weight="600" text-anchor="middle" fill="#1e3a8a">Carbon dioxide (CO₂) in the atmosphere</text><g fill="#166534"><rect x="70" y="210" width="8" height="40"/><circle cx="74" cy="205" r="22"/></g><text x="74" y="268" font-size="10" text-anchor="middle" fill="#166534">Plants</text><g><ellipse cx="300" cy="245" rx="34" ry="18" fill="#7c3a13"/><circle cx="288" cy="235" r="8" fill="#7c3a13"/></g><text x="300" y="280" font-size="10" text-anchor="middle" fill="#7c3a13">Animals</text><rect x="430" y="220" width="70" height="34" fill="#475569"/><text x="465" y="242" font-size="9" text-anchor="middle" fill="#fff">Factory</text><rect x="525" y="226" width="60" height="28" rx="4" fill="#374151"/><text x="555" y="244" font-size="9" text-anchor="middle" fill="#fff">Car</text><g fill="#5b3a1a"><rect x="430" y="285" width="160" height="22"/></g><text x="510" y="300" font-size="9" text-anchor="middle" fill="#fff">Fossil fuels underground</text><line x1="240" y1="84" x2="100" y2="196" stroke="#16a34a" stroke-width="2" marker-end="url(#ah)"/><text x="150" y="150" font-size="9" fill="#16a34a">photosynthesis</text><line x1="120" y1="200" x2="240" y2="86" stroke="#94a3ad" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#ah)"/><text x="100" y="120" font-size="9" fill="#64748b">respiration</text><line x1="300" y1="220" x2="300" y2="88" stroke="#94a3ad" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#ah)"/><text x="306" y="160" font-size="9" fill="#64748b">respiration</text><line x1="120" y1="225" x2="270" y2="240" stroke="#475569" stroke-width="1.5" marker-end="url(#ah)"/><text x="160" y="222" font-size="9" fill="#475569">feeding</text><line x1="465" y1="218" x2="400" y2="84" stroke="#b45309" stroke-width="2" marker-end="url(#ah)"/><line x1="555" y1="224" x2="420" y2="84" stroke="#b45309" stroke-width="2" marker-end="url(#ah)"/><line x1="510" y1="283" x2="490" y2="256" stroke="#b45309" stroke-width="1.5" marker-end="url(#ah)"/><text x="470" y="150" font-size="9" font-weight="600" fill="#b45309">combustion of fossil fuels</text></svg>',
      },
      caption: 'Carbon moves between the atmosphere, plants, animals and fossil fuels. Burning fossil fuels (combustion) adds extra CO₂ that photosynthesis cannot remove fast enough.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** how plants and animals are connected in the carbon cycle.',
        marks: 3,
        ph: 'Animals eat plants; animals produce CO₂ during respiration; plants use CO₂ in photosynthesis; CO₂ produced when animals/plants decay...',
      },
      {
        label: 'b',
        text: 'Use information from the diagram and graph above to **describe** how human activity has led to a change in the carbon cycle.',
        marks: 3,
        ph: 'Burning fossil fuels / deforestation / cattle rearing; increased carbon in atmosphere; climate change / global warming...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="300" fill="#ffffff"/><text x="240" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Changes in methane and CO₂ in the atmosphere over time</text><line x1="60" y1="40" x2="60" y2="240" stroke="#111" stroke-width="1.5"/><line x1="60" y1="240" x2="430" y2="240" stroke="#111" stroke-width="1.5"/><g font-size="10" fill="#374151" text-anchor="middle"><text x="60" y="256">0</text><text x="153" y="256">500</text><text x="245" y="256">1000</text><text x="338" y="256">1500</text><text x="430" y="256">2000</text></g><text x="245" y="278" font-size="11" font-weight="500" text-anchor="middle" fill="#374151">Year</text><text x="40" y="145" font-size="11" font-weight="500" text-anchor="middle" fill="#374151" transform="rotate(-90 40 145)">Level in atmosphere</text><polyline fill="none" stroke="#111111" stroke-width="2" points="60,170 100,168 140,172 180,167 220,170 260,166 300,171 330,176 355,160 380,120 405,70 425,52"/><polyline fill="none" stroke="#2db1e9" stroke-width="2" points="60,205 110,203 160,200 210,198 260,196 300,193 330,196 355,180 380,135 405,80 425,55"/><g><rect x="320" y="44" width="14" height="3" fill="#111"/><text x="340" y="48" font-size="9" fill="#374151">Carbon dioxide (CO₂)</text><rect x="320" y="58" width="14" height="3" fill="#2db1e9"/><text x="340" y="62" font-size="9" fill="#374151">Methane (CH₄)</text></g><text x="245" y="296" font-size="9" text-anchor="middle" fill="#94a3ad">Both gases rise sharply after about 1800 — the start of the industrial revolution.</text></svg>',
          },
          caption: 'Both CO₂ and methane stay roughly steady for centuries, then rise sharply after ~1800 as fossil-fuel burning and intensive farming increase.',
        },
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><text x="280" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Hormone levels during the menstrual cycle</text><line x1="60" y1="40" x2="60" y2="250" stroke="#111" stroke-width="1.5"/><line x1="60" y1="250" x2="420" y2="250" stroke="#111" stroke-width="1.5"/><g font-size="10" fill="#374151" text-anchor="middle"><text x="60" y="266">0</text><text x="150" y="266">7</text><text x="240" y="266">14</text><text x="330" y="266">21</text><text x="420" y="266">28</text></g><text x="240" y="286" font-size="11" font-weight="500" text-anchor="middle" fill="#374151">Day of cycle</text><text x="40" y="150" font-size="11" font-weight="500" text-anchor="middle" fill="#374151" transform="rotate(-90 40 150)">Hormone level</text><line x1="240" y1="40" x2="240" y2="250" stroke="#cbd5d8" stroke-width="1" stroke-dasharray="4 3"/><text x="240" y="52" font-size="9" text-anchor="middle" fill="#3b82f6">ovulation</text><path d="M60,235 C100,200 130,195 170,210 C200,222 220,238 240,242 C300,246 360,244 420,243" fill="none" stroke="#1d4ed8" stroke-width="2.5"/><path d="M60,243 C120,242 180,238 232,150 C238,138 244,138 250,152 C300,240 360,243 420,243" fill="none" stroke="#dc2626" stroke-width="2.5"/><path d="M60,243 C110,230 150,150 210,120 C225,113 235,114 248,128 C290,175 360,235 420,243" fill="none" stroke="#16a34a" stroke-width="2.5"/><path d="M60,244 C150,244 230,245 260,200 C285,160 300,120 330,118 C360,116 390,150 420,210" fill="none" stroke="#a855f7" stroke-width="2.5"/><g font-size="9"><rect x="438" y="60" width="12" height="3" fill="#dc2626"/><text x="454" y="64" fill="#374151">Luteinising hormone (LH)</text><rect x="438" y="78" width="12" height="3" fill="#16a34a"/><text x="454" y="82" fill="#374151">Estrogen</text><rect x="438" y="96" width="12" height="3" fill="#a855f7"/><text x="454" y="100" fill="#374151">Progesterone</text><rect x="438" y="114" width="12" height="3" fill="#1d4ed8"/><text x="454" y="118" fill="#374151">Follicle stimulating hormone (FSH)</text></g><text x="240" y="306" font-size="9" text-anchor="middle" fill="#94a3ad">FSH rises early, estrogen peaks before ovulation, LH spikes at day ~14, progesterone rises afterwards.</text></svg>',
      },
      caption: 'FSH rises early in the cycle, estrogen peaks just before day 14, LH spikes sharply at ovulation, and progesterone rises after ovulation to maintain the uterus lining.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the process that produces sperm and egg cells in organisms.',
        marks: 1,
        ph: 'Select one option.',
        widget: 'radio_select',
        widgetOptions: ['Mitosis', 'Homeostasis', 'Meiosis', 'Photosynthesis'],
      },
      {
        label: 'b',
        text: '**Outline** how fertilization leads to variation in a population.',
        marks: 3,
        ph: 'Each parent has different genetic material; half genetic material comes from each parent; combination leads to new individual...',
      },
      {
        label: 'c',
        text: 'The table below gives information about the role of hormones involved in the menstrual cycle.\n\n| Hormone | Role |\n|---|---|\n| Estrogen | Stops FSH being produced; causes egg to mature; thickens uterus lining; stimulates pituitary to release LH |\n| FSH (follicle stimulating hormone) | Stimulates the ovaries to release estrogen |\n| LH (luteinising hormone) | Triggers ovulation |\n| Progesterone | Maintains thickening of uterus during middle part of cycle |\n\n**Analyse** the information in the table to label the key of the following graph by dragging the hormone names to the correct positions.',
        marks: 3,
        ph: 'Drag: FSH → first peak early cycle; LH → sharp peak at ovulation; Estrogen → rises then dips; Progesterone → rises after ovulation.',
        widget: 'match_drag_drop',
        widgetItems: ['Follicle stimulating hormone (FSH)', 'Progesterone', 'Luteinising hormone (LH)', 'Estrogen'],
        widgetOptions: ['Key position 1', 'Key position 2', 'Key position 3', 'Key position 4'],
      },
      {
        label: 'd',
        text: 'The graph above shows changing hormone levels during the menstrual cycle.\n\nUse information from the table above to **suggest** one possible result if estrogen did not stop the production of FSH.',
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
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><text x="280" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Activity of five digestive enzymes against pH</text><line x1="60" y1="40" x2="60" y2="250" stroke="#111" stroke-width="1.5"/><line x1="60" y1="250" x2="420" y2="250" stroke="#111" stroke-width="1.5"/><g font-size="9" fill="#374151" text-anchor="middle"><text x="60" y="264">1</text><text x="96" y="264">2</text><text x="132" y="264">3</text><text x="168" y="264">4</text><text x="204" y="264">5</text><text x="240" y="264">6</text><text x="276" y="264">7</text><text x="312" y="264">8</text><text x="348" y="264">9</text><text x="384" y="264">10</text><text x="420" y="264">11</text></g><text x="240" y="282" font-size="11" font-weight="500" text-anchor="middle" fill="#374151">pH</text><g font-size="9" fill="#374151" text-anchor="end"><text x="54" y="253">0</text><text x="54" y="201">25</text><text x="54" y="148">50</text><text x="54" y="96">75</text><text x="54" y="44">100</text></g><g stroke="#e5e7eb" stroke-width="0.5"><line x1="60" y1="198" x2="420" y2="198"/><line x1="60" y1="145" x2="420" y2="145"/><line x1="60" y1="93" x2="420" y2="93"/><line x1="60" y1="41" x2="420" y2="41"/></g><text x="40" y="150" font-size="10" font-weight="500" text-anchor="middle" fill="#374151" transform="rotate(-90 40 150)">% of maximum activity</text><path d="M60,250 C78,120 90,44 96,44 C108,60 132,200 168,250" fill="none" stroke="#dc2626" stroke-width="2.2"/><path d="M96,230 C150,90 168,44 204,44 C240,90 258,230 276,250" fill="none" stroke="#2563eb" stroke-width="2.2"/><path d="M168,250 C210,110 230,44 240,44 C252,80 276,210 312,250" fill="none" stroke="#16a34a" stroke-width="2.2"/><path d="M204,250 C252,100 276,44 288,44 C306,90 330,210 348,250" fill="none" stroke="#f59e0b" stroke-width="2.2"/><path d="M276,250 C324,110 348,44 360,44 C378,90 402,200 420,248" fill="none" stroke="#7c3aed" stroke-width="2.2"/><g font-size="9"><rect x="436" y="58" width="12" height="3" fill="#dc2626"/><text x="452" y="62" fill="#374151">Pepsin</text><rect x="436" y="74" width="12" height="3" fill="#2563eb"/><text x="452" y="78" fill="#374151">Salivary amylase</text><rect x="436" y="90" width="12" height="3" fill="#16a34a"/><text x="452" y="94" fill="#374151">Carbonic anhydrase</text><rect x="436" y="106" width="12" height="3" fill="#f59e0b"/><text x="452" y="110" fill="#374151">Trypsin</text><rect x="436" y="122" width="12" height="3" fill="#7c3aed"/><text x="452" y="126" fill="#374151">Alkaline phosphatase</text></g><text x="240" y="306" font-size="9" text-anchor="middle" fill="#94a3ad">Pepsin peaks at acidic pH 2 (stomach); salivary amylase near pH 7 (mouth); the rest at higher pH (small intestine).</text></svg>',
      },
      caption: 'Each enzyme is most active at a particular pH: pepsin at acidic pH ~2 (stomach), salivary amylase near pH 7 (mouth), trypsin/carbonic anhydrase/alkaline phosphatase at higher pH (small intestine).',
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
        text: 'A group of students investigated the effect of pH on enzyme-based reactions using lactase and lactose at pH 1, 7 and 14 at 37°C. The colour change of an indicator shows when the reaction is complete.\n\n**Formulate** a research question for this investigation.',
        marks: 1,
        ph: 'How does pH affect the rate of colour change / time for colour change of lactase breaking down lactose?',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="300" fill="#ffffff"/><text x="260" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Investigating the effect of pH on lactase activity</text><text x="470" y="44" font-size="10" text-anchor="end" fill="#475569">Temperature: 37°C</text><g><rect x="60" y="60" width="40" height="130" rx="20" fill="#eef4f7" stroke="#5b6b78"/><rect x="62" y="120" width="36" height="68" rx="16" fill="#c7d2e0"/><text x="80" y="208" font-size="11" font-weight="600" text-anchor="middle" fill="#1f2d3a">pH = 1</text><rect x="58" y="230" width="44" height="30" rx="4" fill="#111"/><text x="80" y="250" font-size="11" text-anchor="middle" fill="#34d399">00:00</text></g><g><rect x="240" y="60" width="40" height="130" rx="20" fill="#eef4f7" stroke="#5b6b78"/><rect x="242" y="120" width="36" height="68" rx="16" fill="#c7d2e0"/><text x="260" y="208" font-size="11" font-weight="600" text-anchor="middle" fill="#1f2d3a">pH = 7</text><rect x="238" y="230" width="44" height="30" rx="4" fill="#111"/><text x="260" y="250" font-size="11" text-anchor="middle" fill="#34d399">00:00</text></g><g><rect x="420" y="60" width="40" height="130" rx="20" fill="#eef4f7" stroke="#5b6b78"/><rect x="422" y="120" width="36" height="68" rx="16" fill="#c7d2e0"/><text x="440" y="208" font-size="11" font-weight="600" text-anchor="middle" fill="#1f2d3a">pH = 14</text><rect x="418" y="230" width="44" height="30" rx="4" fill="#111"/><text x="440" y="250" font-size="11" text-anchor="middle" fill="#34d399">00:00</text></g><text x="120" y="105" font-size="8" fill="#475569">10 cm³ enzyme</text><text x="120" y="118" font-size="8" fill="#475569">1.0 g lactose</text><text x="260" y="284" font-size="9" text-anchor="middle" fill="#94a3ad">Each tube: 10 cm³ lactase + 1.0 g lactose at 37°C; only the pH differs. A timer records when an indicator changes colour.</text></svg>',
          },
          caption: 'Three identical tubes (10 cm³ lactase + 1.0 g lactose at 37°C) differ only in pH (1, 7, 14). The timer records when the indicator shows the reaction is complete.',
        },
      },
      {
        label: 'c',
        text: '**Identify** the variables in this investigation.',
        marks: 4,
        ph: 'IV: pH. DV: time for colour change. CV (any 2): amount of lactose, surface area of lactose, amount of enzyme, volume of water, concentration of enzyme, temperature, type of enzyme.',
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: ['pH', 'Time for colour change', 'Amount of lactose/substrate', 'Volume of water', 'Temperature', 'Amount of enzyme/lactase'],
      },
      {
        label: 'd',
        text: 'Lactase is an enzyme present in the human digestive system.\n\n**Explain** why the values of pH chosen in the investigation above will not give sufficient relevant data.',
        marks: 3,
        ph: 'Range not relevant to human body; insufficient number of values; no repeats/minimum 3 trials needed...',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['pH of tube', 'Time for indicator colour change / s', 'Reaction observed?'],
            rows: [
              ['1', '4', 'very slow'],
              ['7', '2', 'fastest'],
              ['14', '4', 'very slow'],
            ],
          },
          caption: 'Only three widely-spaced pH values (1, 7, 14) were tested, with no repeats — too few points across an unrealistic range to reveal the true optimum pH of lactase.',
        },
      },
    ],
  },

  // ── Q5: Lactose Concentration Investigation (21 marks, Criterion A/C) ─────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis — Enzyme Concentration',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    marks: 21,
    stem: 'The students knew that each enzyme molecule could be used multiple times but wondered if the concentration of lactose would affect the time of reaction. The students conducted an investigation changing the concentration of lactose. The students hypothesised that if the concentration of lactose increases, then the time to change colour would be shorter because more lactose would be interacting with the enzyme.\n\n| Concentration of lactose / gdm⁻³ | Time for colour change / s |\n|---|---|\n| 2 | 78 |\n| 4 | 63 |\n| 6 | 64 |\n| 8 | 46 |\n| 10 | 43 |\n| 12 | 42 |\n| 14 | 41 |',
    artefact: {
      component: 'GraphSim',
      data: {
        title: 'Effect of lactose concentration on time for colour change',
        mode: 'readoff',
        xAxis: { label: 'Concentration of lactose / g dm⁻³', min: 0, max: 14, tick: 2 },
        yAxis: { label: 'Time for colour change / s', min: 0, max: 80, tick: 10 },
        points: [
          [2, 78],
          [4, 63],
          [6, 64],
          [8, 46],
          [10, 43],
          [12, 42],
          [14, 41],
        ],
        readouts: [
          { x: 2, note: 'slowest reaction at low concentration' },
          { x: 8, note: 'time still falling steeply' },
          { x: 14, note: 'curve has levelled off (plateau)' },
        ],
        units: 's',
        task: 'Drag the crosshair to read the time at any concentration; note how the curve falls then plateaus.',
      },
      caption: 'As lactose concentration rises the time for colour change falls steeply, then plateaus above ~8 g dm⁻³ once the enzyme active sites are saturated.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the enzyme that breaks down lactose.',
        marks: 1,
        ph: 'The enzyme is...',
      },
      {
        label: 'b',
        text: '**Plot** the data from the table on the axes below, add values to both axes and label the *y* axis.',
        marks: 5,
        ph: 'y-axis: Time for colour change / s (with unit). x-axis values evenly spaced. All 7 points plotted correctly ± 1 unit on candidate\'s scale.',
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
        ph: 'As lactose concentration increases, time decreases (negative trend); more lactose interacts with enzyme; at plateau all active sites occupied; one correct scientific term used (active site, substrate, lactase)...',
      },
      {
        label: 'e',
        text: 'The students hypothesised that if the concentration of lactose increases, then the time to change colour would be shorter because more lactose would be interacting with the enzyme.\n\nUsing the graph, **evaluate** the validity of the students\' hypothesis.',
        marks: 5,
        ph: 'Valid at lower concentrations (time decreasing); not valid at higher concentrations (plateau reached); all active sites being used; hypothesis partly valid...',
      },
      {
        label: 'f',
        text: '**State** one improvement to the investigation. **Justify** your answer.',
        marks: 2,
        ph: 'Improvement: more trials / extend range of concentrations / use spectrometer. Justification: linked to improvement...',
      },
      {
        label: 'g',
        text: 'The action of enzymes is temperature dependent. **State** one extension to the enzyme investigation other than changing the temperature or pH.',
        marks: 1,
        ph: 'Change the concentration of the enzyme/lactase...',
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
    stem: 'In a third enzyme investigation using lactose, the students wanted to study the effects of temperature on enzyme activity.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><text x="280" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Apparatus for testing temperature and enzyme activity</text><text x="280" y="38" font-size="9" text-anchor="middle" fill="#64748b">Same lactase + lactose in every tube; only the water-bath temperature changes.</text><g><g><rect x="40" y="120" width="80" height="70" rx="4" fill="#dbeafe" stroke="#3b82f6"/><rect x="68" y="95" width="24" height="80" rx="10" fill="#eef4f7" stroke="#5b6b78"/><rect x="70" y="135" width="20" height="38" rx="8" fill="#c7d2e0"/><text x="80" y="208" font-size="11" font-weight="600" text-anchor="middle" fill="#1f2d3a">10°C</text></g><g><rect x="150" y="120" width="80" height="70" rx="4" fill="#bfdbfe" stroke="#3b82f6"/><rect x="178" y="95" width="24" height="80" rx="10" fill="#eef4f7" stroke="#5b6b78"/><rect x="180" y="135" width="20" height="38" rx="8" fill="#c7d2e0"/><text x="190" y="208" font-size="11" font-weight="600" text-anchor="middle" fill="#1f2d3a">20°C</text></g><g><rect x="260" y="120" width="80" height="70" rx="4" fill="#fde68a" stroke="#d97706"/><rect x="288" y="95" width="24" height="80" rx="10" fill="#eef4f7" stroke="#5b6b78"/><rect x="290" y="135" width="20" height="38" rx="8" fill="#c7d2e0"/><text x="300" y="208" font-size="11" font-weight="600" text-anchor="middle" fill="#1f2d3a">37°C</text></g><g><rect x="370" y="120" width="80" height="70" rx="4" fill="#fdba74" stroke="#d97706"/><rect x="398" y="95" width="24" height="80" rx="10" fill="#eef4f7" stroke="#5b6b78"/><rect x="400" y="135" width="20" height="38" rx="8" fill="#c7d2e0"/><text x="410" y="208" font-size="11" font-weight="600" text-anchor="middle" fill="#1f2d3a">50°C</text></g><g><rect x="468" y="120" width="80" height="70" rx="4" fill="#fca5a5" stroke="#dc2626"/><rect x="496" y="95" width="24" height="80" rx="10" fill="#eef4f7" stroke="#5b6b78"/><rect x="498" y="135" width="20" height="38" rx="8" fill="#c7d2e0"/><text x="508" y="208" font-size="11" font-weight="600" text-anchor="middle" fill="#1f2d3a">70°C</text></g></g><text x="280" y="234" font-size="10" text-anchor="middle" fill="#475569">Independent variable: temperature · Dependent variable: time for indicator colour change</text><text x="280" y="252" font-size="9" text-anchor="middle" fill="#94a3ad">Activity rises towards an optimum (~37°C) then falls as the enzyme denatures at high temperature.</text></svg>',
      },
      caption: 'A set of water baths at different temperatures, each holding an identical lactase + lactose tube. Time for the indicator to change colour is the dependent variable.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation into the effect of temperature on enzyme activity. In your design, you should:\n\n- identify the independent, dependent and two control variables\n- formulate a testable hypothesis with a scientific explanation\n- describe how you will manipulate the variables\n- describe the method\n- state how you will make sure your method is safe',
        marks: 18,
        ph: 'IV: temperature. DV: time for colour change. CV: amount/concentration of lactose, volume of enzyme solution. Hypothesis: As temperature increases, time to change colour decreases (up to optimal), because enzymes work faster at higher temperatures. Above optimal temperature enzymes denature and reaction stops. Method: set water baths at different temperatures (e.g. 10, 20, 30, 37, 50°C); add 10cm³ enzyme + 1g lactose; record time for colour change; repeat 3 times. Safety: handle glassware carefully; avoid extreme temperatures.',
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
        svg: '<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah7" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#475569"/></marker></defs><rect width="520" height="320" fill="#eaf6ff"/><rect x="0" y="210" width="520" height="110" fill="#6b4423"/><text x="260" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Factors a plant needs to grow</text><circle cx="60" cy="60" r="26" fill="#fcd34d"/><text x="60" y="100" font-size="10" text-anchor="middle" fill="#b45309">Light</text><g stroke="#fcd34d" stroke-width="2"><line x1="60" y1="92" x2="200" y2="150"/></g><g fill="#2f8f3e"><rect x="248" y="120" width="8" height="100"/><ellipse cx="230" cy="120" rx="26" ry="14"/><ellipse cx="274" cy="110" rx="26" ry="14"/><ellipse cx="252" cy="95" rx="24" ry="14"/></g><g stroke="#8b5a2b" stroke-width="2" fill="none"><path d="M252,220 C240,245 230,260 220,285"/><path d="M252,220 C264,245 276,262 288,288"/><path d="M252,225 C252,250 252,270 252,290"/></g><rect x="360" y="48" width="120" height="30" rx="6" fill="#dbeafe" stroke="#3b82f6"/><text x="420" y="68" font-size="10" text-anchor="middle" fill="#1e3a8a">Carbon dioxide (CO₂)</text><line x1="360" y1="63" x2="288" y2="110" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#ah7)"/><rect x="20" y="240" width="90" height="28" rx="6" fill="#bfdbfe" stroke="#2563eb"/><text x="65" y="258" font-size="10" text-anchor="middle" fill="#1e3a8a">Water</text><line x1="110" y1="262" x2="230" y2="285" stroke="#2563eb" stroke-width="1.5" marker-end="url(#ah7)"/><rect x="380" y="250" width="110" height="28" rx="6" fill="#fde68a" stroke="#d97706"/><text x="435" y="268" font-size="10" text-anchor="middle" fill="#92400e">Mineral nutrients</text><line x1="380" y1="264" x2="288" y2="288" stroke="#d97706" stroke-width="1.5" marker-end="url(#ah7)"/><text x="260" y="312" font-size="9" text-anchor="middle" fill="#f1f5f9">Light + water + CO₂ drive photosynthesis; nutrients from the soil build new tissue.</text></svg>',
      },
      caption: 'A growing plant needs light, water and carbon dioxide for photosynthesis, plus mineral nutrients from the soil to build new tissue. (Oxygen and glucose are products, not external requirements.)',
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

  // ── Q8: Terracing vs Vertical Farming — Compare (5 marks, Criterion D) ────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Farming Methods — Compare & Contrast',
    topicCanonical: 'Human Influences',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Habitat Change & Destruction'],
    marks: 5,
    stem: 'Ancient civilisations used landscape terracing to ensure a supply of water. Terraces are still used today in rice-growing areas of South-East Asia. Vertical farming involves growing crops on the outside walls of buildings. Nutrients can be controlled and all waste water is recirculated.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="320" fill="#ffffff"/><text x="310" y="20" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two ways of changing the landscape for farming</text><text x="155" y="42" font-size="12" font-weight="600" text-anchor="middle" fill="#475569">Landscape terracing</text><g><rect x="20" y="52" width="270" height="200" fill="#cfe8ff"/><polygon points="20,252 20,150 290,90 290,252" fill="#8b5a2b"/><g fill="#2f8f3e"><polygon points="40,200 140,178 140,190 40,212"/><polygon points="90,170 200,150 200,162 90,182"/><polygon points="140,142 260,122 260,134 140,154"/><polygon points="40,200 40,212 32,214 32,202"/></g><g stroke="#5b3a1a" stroke-width="3" fill="none"><line x1="40" y1="206" x2="150" y2="184"/><line x1="92" y1="176" x2="205" y2="156"/><line x1="142" y1="148" x2="262" y2="128"/></g><g fill="#3b82f6"><rect x="55" y="205" width="80" height="4"/><rect x="105" y="175" width="85" height="4"/><rect x="155" y="147" width="90" height="4"/></g></g><text x="155" y="272" font-size="9" text-anchor="middle" fill="#64748b">Steps cut at right angles to the slope hold water and reduce soil erosion.</text><text x="465" y="42" font-size="12" font-weight="600" text-anchor="middle" fill="#475569">Vertical farming</text><g><rect x="330" y="52" width="270" height="200" fill="#eef2f7"/><rect x="380" y="70" width="170" height="170" fill="#cbd5e1" stroke="#64748b"/><g fill="#2f8f3e"><rect x="392" y="84" width="146" height="10"/><rect x="392" y="104" width="146" height="10"/><rect x="392" y="124" width="146" height="10"/><rect x="392" y="144" width="146" height="10"/><rect x="392" y="164" width="146" height="10"/><rect x="392" y="184" width="146" height="10"/><rect x="392" y="204" width="146" height="10"/></g><path d="M380,235 C360,200 360,120 392,90" fill="none" stroke="#3b82f6" stroke-width="3"/><path d="M538,90 C570,120 570,200 538,235" fill="none" stroke="#3b82f6" stroke-width="3"/><text x="356" y="160" font-size="8" fill="#2563eb" transform="rotate(-90 356 160)">water recirculated</text></g><text x="465" y="272" font-size="9" text-anchor="middle" fill="#64748b">Crops grown up a building wall; nutrients controlled and all waste water is recirculated.</text><line x1="310" y1="48" x2="310" y2="258" stroke="#cbd5d8" stroke-width="1" stroke-dasharray="3 3"/><text x="310" y="300" font-size="10" text-anchor="middle" fill="#94a3ad">Both methods maximise growing space and the supply of water, light and nutrients to the crops.</text></svg>',
      },
      caption: 'Terracing cuts steps into a slope to hold water and reduce erosion; vertical farming grows crops up a building wall with controlled nutrients and recirculated water. Both maximise space, water, light and nutrients.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Compare and contrast** how the needs of the crops have been met in landscape terracing and vertical farming. **Justify** your answers.',
        marks: 5,
        ph: 'Similarity: both maximize space / improve light / improve water supply. Difference: terracing uses natural light vs vertical can control light; terracing relies on climate vs vertical reuses water; terracing reduces soil erosion vs vertical has no soil erosion...',
      },
    ],
  },

  // ── Q9: Landscape Farming — Discuss & Evaluate (15 marks, Criterion D) ────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Human Impact on Landscape — Evaluation',
    topicCanonical: 'Human Influences',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Mitigation of Adverse Effects'],
    marks: 15,
    stem: 'Using information from the reading passage about terracing and vertical farming.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Way the landscape is changed', 'Advantage', 'Disadvantage', 'Economic / social impact'],
        rows: [
          ['Terracing — steps cut at right angles to the slope', 'Holds water; reduces soil erosion and flooding by absorbing heavy rainfall', 'Unmaintained terraces saturate, leading to mudslides and increased erosion', 'Provides food on steep land but is labour-intensive to maintain'],
          ['Vertical farming — crops on building walls', 'Maximises growing space; nutrients controlled; waste water recirculated (very efficient)', 'High set-up cost; relies on technology and energy for water and lighting', 'Grows food in cities for a rising population; reduces transport of food'],
        ],
      },
      caption: 'Comparison of how terracing and vertical farming change the landscape, with their advantages, disadvantages and wider impacts — use this to structure your discussion and appraisal.',
    },
    tasks: [
      {
        label: '',
        text: 'Using information from the video, **discuss** and **evaluate** how humans have changed their natural landscape to optimise their local environment for farming. In your answer, you should include:\n\n- a discussion of how the landscape has been changed\n- scientific justification of the changes to the landscape\n- advantages of changing the landscape\n- disadvantages of changing the landscape\n- an economic impact or a social impact\n- a concluding appraisal.',
        marks: 15,
        ph: 'Change: terracing creates stepped fields / vertical farming uses building walls. Scientific justification: reduces soil erosion / absorbs heavy rainfall / maximises light. Advantages: more food produced / reduces flooding. Disadvantages: unmaintained terraces lead to mudslides / ground saturation. Economic/social: provides food for growing population / labour intensive. Appraisal: both methods effective but vertical farming more sustainable in urban areas...',
      },
    ],
  },
]
