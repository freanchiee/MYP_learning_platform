import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2023',
  subject: 'Biology',
  session: 'May',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2023 (real on-screen exam)
// Context, questions, marks and widgets are UNCHANGED. Every copyrighted
// screenshot figure has been replaced with an ORIGINAL data-driven interactive
// artefact authored from the figure's real values, and every question now
// carries a context artefact in its stimulus slot. Zero external image files.
// ════════════════════════════════════════════════════════════════════════════

export const questions: Question[] = [
  // ─── Q1: Bones, Joints & Muscles (Crit A, 8 marks) ─────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Bones, Joints & Muscles',
    topicCanonical: 'Tissues, Organs & Systems',
    topicGroup: 'Cells',
    topicsAlso: ['Physiology'],
    marks: 8,
    stem: 'The skeleton consists of bones, joints and cartilage. A diagram of the elbow joint is shown below.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><text x="280" y="24" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">The elbow — a hinge joint</text><!-- upper arm bone (humerus) --><rect x="250" y="48" width="46" height="150" rx="18" fill="#f3e6d2" stroke="#b08d57" stroke-width="2"/><text x="305" y="120" font-size="12" fill="#6b5836">humerus</text><!-- forearm bones rotated --><g transform="rotate(38 273 200)"><rect x="252" y="196" width="40" height="150" rx="16" fill="#f3e6d2" stroke="#b08d57" stroke-width="2"/></g><text x="150" y="300" font-size="12" fill="#6b5836">forearm (radius + ulna)</text><!-- joint capsule / cartilage --><circle cx="273" cy="200" r="20" fill="#cfe8e2" stroke="#5b9e92" stroke-width="2"/><text x="296" y="205" font-size="11" fill="#3f7e72">cartilage</text><!-- muscle X (biceps, front, flexor) --><path d="M262 70 C238 110 238 160 256 196 C246 150 246 110 262 70 Z" fill="#e07a6b" stroke="#b8463a" stroke-width="2"/><text x="196" y="135" font-size="13" font-weight="700" fill="#b8463a">X</text><line x1="214" y1="138" x2="248" y2="140" stroke="#b8463a" stroke-width="1"/><!-- muscle Y (triceps, back, extensor) --><path d="M298 70 C320 110 322 160 304 198 C314 150 314 110 298 70 Z" fill="#7fa9d8" stroke="#3a6ea5" stroke-width="2"/><text x="352" y="135" font-size="13" font-weight="700" fill="#3a6ea5">Y</text><line x1="346" y1="138" x2="312" y2="140" stroke="#3a6ea5" stroke-width="1"/><text x="40" y="305" font-size="10" fill="#94a3ad"></text></svg>',
      },
      caption: 'The elbow is a hinge joint. Muscle X (front) flexes the forearm; muscle Y (back) extends it. They form an antagonistic pair.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of one other hinge joint in the human body.',
        marks: 1,
        ph: 'Think of another joint that bends in one plane.',
      },
      {
        label: 'b',
        text: '**Select** the name of muscle X from the diagram.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Bicep', 'Deltoid', 'Humerus', 'Quadricep'],
        ph: 'Muscle X flexes the forearm.',
      },
      {
        label: 'c',
        text: '**Outline** how the two muscles, X and Y, in the diagram above work together to move the arm.',
        marks: 2,
        ph: 'One contracts, the other extends — antagonistic pair.',
      },
      {
        label: 'd',
        text: '**Outline** one similarity and one difference between aerobic and anaerobic cellular respiration in humans.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Feature', 'Aerobic respiration', 'Anaerobic respiration'],
            rows: [
              ['Glucose used as fuel', 'Yes', 'Yes'],
              ['Oxygen required', 'Yes', 'No'],
              ['Energy released per glucose', 'Large', 'Small'],
              ['Main waste product (in muscle)', 'Carbon dioxide + water', 'Lactic acid'],
            ],
          },
          caption: 'Compare the two pathways: both release energy from glucose, but only aerobic respiration requires oxygen.',
        },
        ph: 'Similarity: both use glucose/release energy. Difference: oxygen requirement.',
      },
      {
        label: 'e',
        text: '**Outline** the skeleton\'s functions in the boxes below. The first two boxes (Support and posture; Storage of minerals) have been completed. Complete the "How does this happen?" explanations for Protection and Blood cell production.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Function', 'How does this happen?'],
            rows: [
              ['Support and posture', 'Muscles attached to bones in the legs work together to support the body when standing.'],
              ['Storage of minerals', 'Minerals such as calcium and iron are stored in bones and released into the blood when needed by the body.'],
              ['Protection', '?'],
              ['Blood cell production', '?'],
            ],
          },
          caption: 'Two boxes are completed for you. Complete the "How does this happen?" cells for Protection and Blood cell production.',
        },
        ph: 'Protection: hard bones absorb impact. Blood cell production: bone marrow/stem cells.',
      },
    ],
  },

  // ─── Q2: Active Packaging & Food Storage (Crit A, 8 marks) ─────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Active Packaging & Food Storage',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    marks: 8,
    stem: 'Scientists are looking for ways to keep food fresh for longer. Active packaging changes the conditions inside the packaging to extend the time food stays in good condition and is safe to eat. As bananas ripen, they produce a gas that speeds up the ripening process. The image below shows how active packaging can absorb and remove this gas.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="360" fill="#ffffff"/><!-- Standard packaging row --><text x="20" y="30" font-size="14" font-weight="700" fill="#1f2d3a">Standard packaging</text><rect x="20" y="44" width="150" height="100" rx="6" fill="#eef4f7" stroke="#5b6b78"/><ellipse cx="70" cy="100" rx="34" ry="12" transform="rotate(-20 70 100)" fill="#f4d03f" stroke="#caa61e"/><circle cx="125" cy="100" r="16" fill="#e0392b"/><circle cx="60" cy="70" r="3" fill="#9aa7b0"/><circle cx="110" cy="62" r="3" fill="#9aa7b0"/><circle cx="140" cy="120" r="3" fill="#9aa7b0"/><text x="200" y="100" font-size="14" fill="#475569">Time →</text><rect x="280" y="44" width="150" height="100" rx="6" fill="#eef4f7" stroke="#5b6b78"/><ellipse cx="330" cy="100" rx="34" ry="12" transform="rotate(-20 330 100)" fill="#a87f23" stroke="#7a5a16"/><circle cx="385" cy="100" r="16" fill="#b03326"/><text x="280" y="166" font-size="11" fill="#94a3ad">Ripening gas builds up → fruit over-ripens quickly.</text><!-- Active packaging row --><text x="20" y="208" font-size="14" font-weight="700" fill="#1f2d3a">Active packaging</text><rect x="20" y="222" width="150" height="100" rx="6" fill="#eafaf1" stroke="#3a9d6e"/><ellipse cx="70" cy="278" rx="34" ry="12" transform="rotate(-20 70 278)" fill="#f4d03f" stroke="#caa61e"/><circle cx="125" cy="278" r="16" fill="#e0392b"/><rect x="30" y="232" width="14" height="14" rx="3" fill="#e8590c"/><text x="48" y="244" font-size="9" fill="#7a3d12">absorber</text><text x="200" y="278" font-size="14" fill="#475569">Time →</text><rect x="280" y="222" width="150" height="100" rx="6" fill="#eafaf1" stroke="#3a9d6e"/><ellipse cx="330" cy="278" rx="34" ry="12" transform="rotate(-20 330 278)" fill="#f4d03f" stroke="#caa61e"/><circle cx="385" cy="278" r="16" fill="#e0392b"/><rect x="290" y="232" width="14" height="14" rx="3" fill="#e8590c"/><text x="280" y="344" font-size="11" fill="#3a9d6e">Absorber removes the gas → fruit stays fresh longer.</text><!-- Key --><rect x="448" y="44" width="140" height="92" rx="6" fill="#fbfdfe" stroke="#cbd5e1"/><text x="458" y="62" font-size="11" font-weight="700" fill="#1f2d3a">Key</text><rect x="458" y="74" width="12" height="12" rx="3" fill="#e8590c"/><text x="476" y="84" font-size="10" fill="#475569">Gas absorber</text><line x1="458" y1="104" x2="470" y2="104" stroke="#caa61e" stroke-width="3"/><text x="476" y="108" font-size="10" fill="#475569">Coating to prevent</text><text x="476" y="122" font-size="10" fill="#475569">growth of microbes</text></svg>',
      },
      caption: 'Standard vs active packaging. The gas absorber and antimicrobial coating extend how long the fruit stays fresh.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** two benefits of using active packaging when transporting fruit.',
        marks: 2,
        ph: 'Think about ripening speed, microbial growth, shelf life.',
      },
      {
        label: 'b',
        text: '**Describe** why many foods are stored between 3°C and 5°C.',
        marks: 3,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Bacterial growth rate vs storage temperature',
            xLabel: 'Storage temperature',
            yLabel: 'Relative bacterial growth rate',
            xUnit: '°C',
            xMin: 0,
            xMax: 40,
            yMin: 0,
            yMax: 100,
            xStep: 5,
            yStep: 20,
            dataPoints: [
              { x: 0, y: 3 },
              { x: 4, y: 8 },
              { x: 10, y: 20 },
              { x: 20, y: 45 },
              { x: 30, y: 80 },
              { x: 37, y: 100 },
              { x: 40, y: 78 },
            ],
          },
          caption: 'Microbial activity is very slow at 3–5°C and rises sharply toward body temperature (≈37°C). Fridge temperatures slow spoilage without freezing the food.',
        },
        ph: 'Low temperature slows microorganism activity; does not freeze; prevents deterioration.',
      },
      {
        label: 'c',
        text: '**Describe** why bacteria on salted meat have changed their form and no longer have a smooth surface.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="280" fill="#ffffff"/><text x="130" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Fresh meat</text><text x="390" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Salted meat</text><!-- fresh bacterium: smooth, turgid --><ellipse cx="130" cy="140" rx="70" ry="46" fill="#cfe4f5" stroke="#3a6ea5" stroke-width="2.5"/><text x="130" y="146" font-size="11" text-anchor="middle" fill="#3a6ea5">water inside</text><path d="M150 100 l16 -10 M186 138 l18 -2 M150 180 l16 12 M104 96 l-12 -12" stroke="#7fa9d8" stroke-width="1.5"/><text x="130" y="232" font-size="11" text-anchor="middle" fill="#475569">Smooth, full surface (turgid)</text><!-- arrow: water leaves --><line x1="216" y1="140" x2="296" y2="140" stroke="#94a3ad" stroke-width="2"/><polygon points="296,140 286,134 286,146" fill="#94a3ad"/><text x="256" y="128" font-size="10" text-anchor="middle" fill="#64748b">water out</text><text x="256" y="156" font-size="10" text-anchor="middle" fill="#64748b">(osmosis)</text><!-- salted bacterium: shrivelled --><path d="M330 140 C330 112 350 96 388 96 C404 96 414 110 420 100 C430 112 444 116 440 138 C450 150 444 168 424 174 C418 188 396 188 386 178 C362 188 332 176 336 156 C326 152 326 146 330 140 Z" fill="#f4d7c4" stroke="#a8531a" stroke-width="2.5"/><text x="386" y="146" font-size="10" text-anchor="middle" fill="#a8531a">shrunken</text><text x="386" y="232" font-size="11" text-anchor="middle" fill="#475569">Wrinkled, shrivelled surface</text></svg>',
          },
          caption: 'Salt outside the bacterium has a higher solute concentration, so water leaves the cell by osmosis. The cell shrinks and its surface wrinkles.',
        },
        ph: 'Salt causes water to leave bacteria by osmosis — bacteria shrink/dehydrate.',
      },
    ],
  },

  // ─── Q3: Enzymes, Lactase & Genetics (Crit A, 10 marks) ────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Enzymes, Lactase & Genetics',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    topicsAlso: ['Digestion', 'DNA & Genetics'],
    marks: 10,
    stem: 'Lactose is the major energy source for infants and young mammals. Lactose is found in milk and is broken down by an enzyme called lactase.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="240" fill="#ffffff"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Lactase breaks lactose into smaller sugars</text><!-- lactase enzyme with active site --><path d="M70 120 m-46 0 a46 46 0 1 1 92 0 l0 -10 l-22 0 a18 18 0 0 0 -36 0 l-22 0 Z" fill="#cfe8e2" stroke="#3f7e72" stroke-width="2"/><text x="70" y="180" font-size="11" text-anchor="middle" fill="#3f7e72">lactase (enzyme)</text><!-- lactose = glucose + galactose joined --><circle cx="64" cy="100" r="16" fill="#f4c542" stroke="#b8901c"/><text x="64" y="104" font-size="8" text-anchor="middle" fill="#6b5310">glu</text><circle cx="92" cy="100" r="16" fill="#e08a4f" stroke="#a85a23"/><text x="92" y="104" font-size="8" text-anchor="middle" fill="#5a3010">gal</text><text x="78" y="64" font-size="10" text-anchor="middle" fill="#475569">lactose</text><!-- arrow --><line x1="160" y1="120" x2="240" y2="120" stroke="#94a3ad" stroke-width="2"/><polygon points="240,120 230,114 230,126" fill="#94a3ad"/><text x="200" y="110" font-size="10" text-anchor="middle" fill="#64748b">reaction</text><!-- products separated --><circle cx="320" cy="120" r="18" fill="#f4c542" stroke="#b8901c"/><text x="320" y="124" font-size="9" text-anchor="middle" fill="#6b5310">glu</text><text x="320" y="160" font-size="10" text-anchor="middle" fill="#475569">glucose</text><circle cx="400" cy="120" r="18" fill="#e08a4f" stroke="#a85a23"/><text x="400" y="124" font-size="9" text-anchor="middle" fill="#5a3010">gal</text><text x="400" y="160" font-size="10" text-anchor="middle" fill="#475569">galactose</text><text x="500" y="116" font-size="11" fill="#3f7e72">Enzymes act as</text><text x="500" y="132" font-size="11" fill="#3f7e72">biological catalysts</text><text x="500" y="148" font-size="11" fill="#3f7e72">(speed up reactions).</text></svg>',
      },
      caption: 'Lactase catalyses the breakdown of lactose into glucose and galactose, which can be absorbed and used for energy.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** the importance of enzymes in the body.',
        marks: 2,
        ph: 'Enzymes speed up reactions; are biological catalysts; build up or break down molecules.',
      },
      {
        label: 'b',
        text: '**State** whether each genotype below is lactose tolerant or not by completing the table. The dominant allele T must be inherited; the recessive allele has the symbol t.',
        marks: 1,
        widget: 'inline_dropdown_select',
        widgetItems: ['TT', 'Tt', 'tt'],
        widgetOptions: ['Yes', 'No'],
        ph: 'Dominant T = lactose tolerant; two recessive t = intolerant.',
      },
      {
        label: 'c',
        text: '**State** the meaning of the term phenotype.',
        marks: 1,
        ph: 'Observable characteristics from gene expression.',
      },
      {
        label: 'd',
        text: 'Using scientific knowledge, **identify** and **justify** one similarity and one difference in lactase production after birth in pigs and rats.',
        marks: 4,
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'line',
            title: 'Lactase production after birth in pigs and rats',
            source: 'Lactase activity study',
            x: {
              label: 'Days after birth',
              categories: ['0', '10', '20', '30', '40', '50', '60'],
            },
            y: {
              label: 'Lactase production',
              min: 0,
              max: 100,
              ticks: [0, 20, 40, 60, 80, 100],
            },
            series: [
              { name: 'Pigs', color: '#e8590c', points: [95, 80, 58, 40, 33, 31, 31] },
              { name: 'Rats', color: '#1971c2', points: [90, 62, 30, 14, 8, 6, 6] },
            ],
          },
          caption: 'Both species show high lactase production at birth that falls after birth. Pigs (orange) level off well above zero; rats (blue) fall faster and further. Hover a point for its value; toggle a series in the legend.',
        },
        ph: 'Similarity: both decrease after birth. Difference: pigs higher/level off later; justification needed.',
      },
      {
        label: 'e',
        text: 'Using the data in the infographic, **state** the relationship between lactose tolerance and milk consumption.',
        marks: 1,
        artefact: {
          component: 'ChoroplethWorld',
          data: {
            mode: 'highlight',
            title: 'Where adults remain lactose tolerant',
            source: 'Global lactase-persistence pattern',
            highlight: [
              'Denmark', 'Sweden', 'Norway', 'Finland', 'Ireland', 'United Kingdom',
              'Netherlands', 'Germany', 'France', 'Switzerland', 'Austria', 'Poland',
              'Czechia', 'Hungary', 'Belgium', 'Iceland',
            ],
            highlightLabel: 'High lactose tolerance & high milk consumption',
            baseLabel: 'Lower lactose tolerance',
            caption: 'Highlighted countries have high adult lactose tolerance and high per-person milk consumption. Hover a country to read it.',
          },
        },
        ph: 'Higher lactose tolerance → higher milk consumption (ORA).',
      },
      {
        label: 'f',
        text: '**Suggest** why scientists should be cautious when drawing conclusions from this data.',
        marks: 1,
        ph: 'Data not available for all countries; correlation ≠ causation.',
      },
    ],
  },

  // ─── Q4: Agave Fibre Humidity Investigation (Crit B, 16 marks) ─────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Agave Fibre Humidity Investigation',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Cell Structure & Function'],
    marks: 16,
    stem: 'The agave plant can be processed to produce fibres that can be used in the textile industry. Some students wanted to study the effects of humidity on the strength of plant fibres. They set up a preliminary investigation to test their method. The equipment can be used to test how easily the plant fibres break.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="320" fill="#ffffff"/><text x="310" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Testing how easily a plant fibre breaks</text><!-- humidity chambers --><g><rect x="30" y="50" width="120" height="56" rx="4" fill="#eef4f7" stroke="#5b6b78"/><rect x="42" y="90" width="96" height="12" fill="#d8c79a"/><text x="90" y="72" font-size="11" text-anchor="middle" fill="#475569">5% humidity</text></g><g><rect x="30" y="126" width="120" height="56" rx="4" fill="#e8f1f6" stroke="#5b6b78"/><rect x="42" y="166" width="96" height="12" fill="#d8c79a"/><text x="90" y="148" font-size="11" text-anchor="middle" fill="#475569">25% humidity</text></g><g><rect x="30" y="202" width="120" height="56" rx="4" fill="#dceaf2" stroke="#5b6b78"/><rect x="42" y="242" width="96" height="12" fill="#d8c79a"/><text x="90" y="224" font-size="11" text-anchor="middle" fill="#475569">50% humidity</text></g><text x="90" y="280" font-size="10" text-anchor="middle" fill="#94a3ad">Fibres conditioned at each humidity</text><!-- arrow --><line x1="172" y1="155" x2="222" y2="155" stroke="#475569" stroke-width="2"/><polygon points="222,155 210,148 210,162" fill="#475569"/><!-- clamp stand + hanging fibre + masses --><line x1="300" y1="60" x2="300" y2="280" stroke="#5b6b78" stroke-width="6"/><rect x="270" y="280" width="120" height="14" rx="3" fill="#2f6db0"/><line x1="300" y1="70" x2="360" y2="70" stroke="#5b6b78" stroke-width="6"/><circle cx="360" cy="70" r="6" fill="#3a4750"/><!-- fibre --><line x1="360" y1="76" x2="360" y2="180" stroke="#9a7b3a" stroke-width="2"/><text x="368" y="130" font-size="11" fill="#6b5310">plant fibre</text><!-- hook + mass pan --><line x1="360" y1="180" x2="360" y2="196" stroke="#5b6b78" stroke-width="2"/><rect x="338" y="196" width="44" height="22" rx="3" fill="#b6c4cf" stroke="#5b6b78"/><text x="430" y="210" font-size="11" fill="#475569">masses added</text><text x="430" y="226" font-size="11" fill="#475569">until fibre breaks</text><!-- spare masses --><circle cx="470" cy="270" r="9" fill="#aab6c0" stroke="#5b6b78"/><circle cx="492" cy="270" r="9" fill="#aab6c0" stroke="#5b6b78"/><circle cx="514" cy="270" r="9" fill="#aab6c0" stroke="#5b6b78"/><text x="492" y="296" font-size="10" text-anchor="middle" fill="#94a3ad">slotted masses</text></svg>',
      },
      caption: 'A conditioned fibre is clamped and masses are added until it breaks. The total mass needed to break the fibre is the measure of its strength.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a research question for this investigation.',
        marks: 1,
        ph: 'How does humidity affect the mass needed to break the fibre?',
      },
      {
        label: 'b',
        text: '**Identify** the independent and dependent variables in this investigation.',
        marks: 2,
        ph: 'IV = humidity (%); DV = mass (g) needed to break the fibre.',
      },
      {
        label: 'c',
        text: '**Suggest** two control variables that should be used in this investigation.',
        marks: 2,
        ph: 'E.g. diameter of fibre, temperature, length of fibre, type/age of plant.',
      },
      {
        label: 'd',
        text: '**State** why control variables are important in an investigation.',
        marks: 1,
        ph: 'Ensure DV is only affected by the IV.',
      },
      {
        label: 'e',
        text: '**Suggest** and **justify** how the experiment could be improved to collect sufficient data.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Humidity / %', 'Mass needed to break the plant fibre / g'],
            rows: [
              ['0', '30'],
              ['25', '40'],
              ['50', '40'],
            ],
          },
          caption: 'Preliminary results (one group, 10 g masses). Only three humidity levels were tested, with no repeats.',
        },
        ph: 'More humidity levels (range); add repeats to calculate average/identify anomalies.',
      },
      {
        label: 'f',
        text: '**Present** the data for both groups in a graph. Include a title, labelled axes with units, and a key.',
        marks: 4,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Humidity / %', 'Group 1 — mass to break / g (10 g masses)', 'Group 2 — mass to break / g (2.5 g masses)'],
            rows: [
              ['0', '30', '27.5'],
              ['25', '40', '32.5'],
              ['50', '40', '37.5'],
            ],
          },
          caption: 'Another group (Group 2) used 2.5 g masses. Plot both groups on one graph with a key and labelled axes.',
        },
        ph: 'Plot Group 1 and Group 2 points; equal Y-axis increments; key for each group.',
      },
      {
        label: 'g',
        text: '**State** the patterns shown in each group\'s data.',
        marks: 2,
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'line',
            title: 'Mass to break the fibre vs humidity (both groups)',
            source: 'Student results',
            x: {
              label: 'Humidity (%)',
              categories: ['0', '25', '50'],
            },
            y: {
              label: 'Mass to break the fibre',
              unit: 'g',
              min: 0,
              max: 50,
              ticks: [0, 10, 20, 30, 40, 50],
            },
            series: [
              { name: 'Group 1 (10 g masses)', color: '#0b7285', points: [30, 40, 40] },
              { name: 'Group 2 (2.5 g masses)', color: '#e8590c', points: [27.5, 32.5, 37.5] },
            ],
          },
          caption: 'Group 1 (10 g masses): mass increases from 0–25% then plateaus. Group 2 (2.5 g masses) increases steadily across the whole range. Hover a point for its value; toggle a series in the legend.',
        },
        ph: 'Group 1: increases then plateaus. Group 2: increases linearly.',
      },
      {
        label: 'h',
        text: '**Suggest** one reason to support the claim made by each group.',
        marks: 2,
        ph: 'Different strengths (natural variation) OR different masses (less precise equipment).',
      },
    ],
  },

  // ─── Q5: Plant Cell Diameter & Water Movement (Crit C, 10 marks) ───────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Plant Cell Diameter & Water Movement',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Cell Structure & Function'],
    marks: 10,
    stem: 'The students used microscopes with the same magnification to look at the cells in plant fibres after changing the humidity from 25% to 75%. The diagrams show what they saw.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="360" fill="#ffffff"/><text x="160" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">25% humidity</text><text x="460" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">75% humidity</text><!-- 25% panel: smaller cells --><rect x="30" y="40" width="260" height="220" rx="6" fill="#eef5ee" stroke="#7fa07f"/><g stroke="#5a8a5a" stroke-width="2" fill="#cfe4cf"><rect x="48" y="58" width="60" height="58" rx="6"/><rect x="116" y="58" width="58" height="58" rx="6"/><rect x="182" y="58" width="58" height="58" rx="6"/><rect x="48" y="124" width="58" height="58" rx="6"/><rect x="116" y="124" width="58" height="58" rx="6" fill="#a7d3a7"/><rect x="182" y="124" width="58" height="58" rx="6"/><rect x="48" y="190" width="58" height="58" rx="6"/><rect x="116" y="190" width="58" height="58" rx="6"/><rect x="182" y="190" width="58" height="58" rx="6"/></g><!-- highlighted cell 25%: ~80 um across --><line x1="116" y1="166" x2="174" y2="166" stroke="#b8463a" stroke-width="2"/><text x="145" y="160" font-size="10" text-anchor="middle" fill="#b8463a">80 µm</text><!-- 75% panel: larger swollen cells --><rect x="330" y="40" width="260" height="220" rx="6" fill="#eef5ee" stroke="#7fa07f"/><g stroke="#5a8a5a" stroke-width="2" fill="#cfe4cf"><rect x="346" y="54" width="76" height="74" rx="9"/><rect x="430" y="54" width="74" height="74" rx="9"/><rect x="512" y="54" width="66" height="74" rx="9"/><rect x="346" y="136" width="74" height="74" rx="9" fill="#a7d3a7"/><rect x="430" y="136" width="74" height="74" rx="9"/><rect x="512" y="136" width="66" height="74" rx="9"/></g><text x="556" y="120" font-size="10" fill="#475569">gaps</text><text x="556" y="134" font-size="10" fill="#475569">between</text><text x="556" y="148" font-size="10" fill="#475569">cells</text><line x1="600" y1="180" x2="578" y2="180" stroke="#475569" stroke-width="1"/><text x="556" y="232" font-size="10" fill="#475569">cell wall</text><line x1="600" y1="210" x2="578" y2="200" stroke="#475569" stroke-width="1"/><!-- highlighted cell 75%: ~95 um across --><line x1="346" y1="173" x2="420" y2="173" stroke="#b8463a" stroke-width="2"/><text x="383" y="167" font-size="10" text-anchor="middle" fill="#b8463a">?</text><!-- scale bar / ruler 0-400 um --><rect x="30" y="290" width="560" height="40" rx="4" fill="#fbfdfe" stroke="#cbd5e1"/><line x1="50" y1="318" x2="570" y2="318" stroke="#3a4750" stroke-width="2"/><g font-size="9" fill="#475569" text-anchor="middle"><line x1="50" y1="312" x2="50" y2="324" stroke="#3a4750"/><text x="50" y="306">0</text><line x1="115" y1="314" x2="115" y2="322" stroke="#3a4750"/><text x="115" y="306">50</text><line x1="180" y1="312" x2="180" y2="324" stroke="#3a4750"/><text x="180" y="306">100</text><line x1="245" y1="314" x2="245" y2="322" stroke="#3a4750"/><text x="245" y="306">150</text><line x1="310" y1="312" x2="310" y2="324" stroke="#3a4750"/><text x="310" y="306">200</text><line x1="375" y1="314" x2="375" y2="322" stroke="#3a4750"/><text x="375" y="306">250</text><line x1="440" y1="312" x2="440" y2="324" stroke="#3a4750"/><text x="440" y="306">300</text><line x1="505" y1="314" x2="505" y2="322" stroke="#3a4750"/><text x="505" y="306">350</text><line x1="570" y1="312" x2="570" y2="324" stroke="#3a4750"/><text x="570" y="306">400</text></g><text x="310" y="346" font-size="10" text-anchor="middle" fill="#94a3ad">scale / micrometres (µm) — same magnification in both views</text></svg>',
      },
      caption: 'Highlighted cell measures 80 µm across at 25% humidity. Use the ruler (0–400 µm) to measure its diameter at 75% humidity.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Measure** the diameter of the highlighted cell at 75% humidity.',
        marks: 1,
        ph: 'Use the scale bar — approximately 95 micrometres.',
      },
      {
        label: 'b',
        text: '**Calculate** the percentage increase in diameter for the highlighted cell from 25% to 75% humidity. Give your answer to the nearest 1%.',
        marks: 3,
        ph: '% increase = (value from a − 80) ÷ 80 × 100. Round to nearest %.',
      },
      {
        label: 'c',
        text: '**Explain** how the movement of water causes the plant fibres to increase in size as humidity increases.',
        marks: 4,
        ph: 'Water enters cells by osmosis/diffusion; cells/vacuoles swell; larger difference with environment.',
      },
      {
        label: 'd',
        text: '**Suggest** different measurements the student could take and **justify** how these measurements would benefit the investigation.',
        marks: 2,
        ph: 'Change in mass or 3D dimensions; justification: calculate % water absorbed/volume change.',
      },
    ],
  },

  // ─── Q6: Sodium Hydroxide Treatment of Plant Fibres (Crit B, 7 marks) ──────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Sodium Hydroxide Treatment of Plant Fibres',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    marks: 7,
    stem: 'Plant fibres can also be treated with sodium hydroxide solution to change their properties. The flow chart below briefly outlines the process used by a group of students to treat their plant fibres.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="220" fill="#ffffff"/><text x="320" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Treating plant fibres with sodium hydroxide</text><!-- Step 1 Immersion --><rect x="24" y="56" width="160" height="120" rx="8" fill="#eef4f7" stroke="#5b6b78"/><text x="104" y="78" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Immersion</text><path d="M64 110 h80 v34 a8 8 0 0 1 -8 8 h-64 a8 8 0 0 1 -8 -8 Z" fill="#dceefb" stroke="#3a6ea5"/><line x1="70" y1="120" x2="138" y2="120" stroke="#9a7b3a" stroke-width="2"/><line x1="70" y1="128" x2="138" y2="128" stroke="#9a7b3a" stroke-width="2"/><text x="104" y="172" font-size="9" text-anchor="middle" fill="#475569">fibres, same diameter</text><!-- arrow --><line x1="190" y1="116" x2="222" y2="116" stroke="#475569" stroke-width="2"/><polygon points="222,116 212,110 212,122" fill="#475569"/><!-- Step 2 Washing --><rect x="228" y="56" width="160" height="120" rx="8" fill="#eef4f7" stroke="#5b6b78"/><text x="308" y="78" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Washing</text><path d="M278 100 l60 0 l-8 52 l-44 0 Z" fill="#d7f0ea" stroke="#3f7e72"/><text x="308" y="166" font-size="9" text-anchor="middle" fill="#475569">sodium hydroxide</text><!-- arrow --><line x1="394" y1="116" x2="426" y2="116" stroke="#475569" stroke-width="2"/><polygon points="426,116 416,110 416,122" fill="#475569"/><!-- Step 3 Drying --><rect x="432" y="56" width="180" height="120" rx="8" fill="#eef4f7" stroke="#5b6b78"/><text x="522" y="78" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Drying</text><g stroke="#9a7b3a" stroke-width="2"><line x1="472" y1="104" x2="472" y2="150"/><line x1="492" y1="104" x2="492" y2="150"/><line x1="512" y1="104" x2="512" y2="150"/><line x1="532" y1="104" x2="532" y2="150"/><line x1="552" y1="104" x2="552" y2="150"/><line x1="572" y1="104" x2="572" y2="150"/></g><text x="522" y="166" font-size="9" text-anchor="middle" fill="#475569">treated fibres</text></svg>',
      },
      caption: 'Flow chart of the method: immerse fibres of the same diameter and length in sodium hydroxide, wash, then dry. Note which quantities are controlled and which are missing (e.g. immersion time).',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** one control variable shown in the flow chart.',
        marks: 1,
        ph: 'Volume of NaOH, initial fibre length/diameter, type of fibre.',
      },
      {
        label: 'b',
        text: 'The students discussed whether the flow chart was an appropriate way to present a scientific method. One student suggested that the length of time the fibres are immersed in the sodium hydroxide solution should be included. **Suggest** why this would improve the method.',
        marks: 1,
        ph: 'Immersion time affects results; makes method repeatable/comparable.',
      },
      {
        label: 'c',
        text: 'The students planned to investigate the effect of sodium hydroxide on the properties of the plant fibres. Before making their measurements, the students suggested the following hypothesis: "As the concentration of alkali changes, the fibres will stretch more." **Suggest** how the students could improve the hypothesis to make it testable.',
        marks: 3,
        ph: 'Identify alkali as NaOH; state direction of change; include range of IV concentrations; specify measurement.',
      },
      {
        label: 'd',
        text: 'The students presented their results in the graph below. Use data from the graph to **discuss** whether the students\' results support the hypothesis in part (c).',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Increase in length at break vs sodium hydroxide concentration',
            xLabel: 'Concentration of sodium hydroxide',
            yLabel: 'Increase in length at break',
            xUnit: '%',
            yUnit: 'mm',
            xMin: 0,
            xMax: 35,
            yMin: 0,
            yMax: 4.5,
            xStep: 5,
            yStep: 0.5,
            dataPoints: [
              { x: 0, y: 2.5 },
              { x: 2, y: 4.1 },
              { x: 5, y: 3.6 },
              { x: 10, y: 2.3 },
              { x: 15, y: 2.6 },
              { x: 20, y: 2.4 },
              { x: 25, y: 2.5 },
              { x: 30, y: 2.0 },
            ],
          },
          caption: 'The fibre stretch rises from 0–2%, falls from 2–10%, then shows no clear change above 10% — so the hypothesis is only partly supported.',
        },
        ph: 'Valid 0–2% or 5%; decreases 2–10%; no clear change above 10% — partially supports.',
      },
    ],
  },

  // ─── Q7: Plant Fibre Composition Design Investigation (Crit B, 15 marks) ───
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Plant Fibre Composition Design Investigation',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    marks: 15,
    stem: 'Plant fibres can be combined with other fibres to change their properties. The percentage of plant fibres in a rope can be changed to vary the stretching characteristics. You are provided with standard laboratory equipment and a range of different ropes containing between 0% and 20% plant fibres.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Measuring how far a rope stretches under a fixed mass</text><!-- clamp stand --><line x1="120" y1="50" x2="120" y2="290" stroke="#5b6b78" stroke-width="6"/><rect x="70" y="290" width="180" height="14" rx="3" fill="#2f6db0"/><line x1="120" y1="58" x2="200" y2="58" stroke="#5b6b78" stroke-width="6"/><circle cx="200" cy="58" r="6" fill="#3a4750"/><!-- rope --><line x1="200" y1="64" x2="200" y2="190" stroke="#a98b4a" stroke-width="5"/><text x="212" y="120" font-size="11" fill="#6b5310">rope (0–20% plant fibre)</text><!-- mass --><line x1="200" y1="190" x2="200" y2="206" stroke="#5b6b78" stroke-width="2"/><rect x="178" y="206" width="44" height="40" rx="4" fill="#aab6c0" stroke="#5b6b78"/><text x="200" y="231" font-size="11" text-anchor="middle" fill="#3a4750">fixed</text><text x="200" y="244" font-size="9" text-anchor="middle" fill="#3a4750">mass</text><!-- ruler measuring stretch --><line x1="280" y1="64" x2="280" y2="246" stroke="#3a4750" stroke-width="2"/><g stroke="#3a4750" stroke-width="1" font-size="8" fill="#475569"><line x1="276" y1="64" x2="284" y2="64"/><text x="290" y="68">0</text><line x1="276" y1="100" x2="284" y2="100"/><text x="290" y="104">2</text><line x1="276" y1="136" x2="284" y2="136"/><text x="290" y="140">4</text><line x1="276" y1="172" x2="284" y2="172"/><text x="290" y="176">6</text><line x1="276" y1="208" x2="284" y2="208"/><text x="290" y="212">8</text><line x1="276" y1="244" x2="284" y2="244"/><text x="290" y="248">10 cm</text></g><!-- selection of ropes --><rect x="380" y="60" width="190" height="200" rx="6" fill="#fbfdfe" stroke="#cbd5e1"/><text x="475" y="80" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Ropes provided</text><g font-size="10" fill="#475569"><line x1="400" y1="100" x2="550" y2="100" stroke="#c9b07a" stroke-width="3"/><text x="400" y="116">0% plant fibre</text><line x1="400" y1="135" x2="550" y2="135" stroke="#b89a55" stroke-width="4"/><text x="400" y="151">5% plant fibre</text><line x1="400" y1="170" x2="550" y2="170" stroke="#a98b4a" stroke-width="5"/><text x="400" y="186">10% plant fibre</text><line x1="400" y1="205" x2="550" y2="205" stroke="#967737" stroke-width="6"/><text x="400" y="221">15% plant fibre</text><line x1="400" y1="240" x2="550" y2="240" stroke="#7e6328" stroke-width="7"/><text x="400" y="256">20% plant fibre</text></g></svg>',
      },
      caption: 'Apparatus you might use: a clamped rope with a fixed mass, measuring the stretched length on a ruler. A range of ropes (0–20% plant fibre) is provided as the independent variable.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to find out how the percentage of plant fibres in a rope affects the length it will stretch to when a fixed mass is attached. In your answer, you should include:\n- a research question\n- the independent, dependent and two control variables\n- equipment you will use\n- details of how to manipulate, measure or control the variables\n- a description of a method to collect sufficient data\n- how you will make your method safe',
        marks: 15,
        ph: 'Full Criteria B design: RQ, IV/DV/CVs, equipment, method, data plan, safety.',
      },
    ],
  },

  // ─── Q8: Urbanisation & Biodiversity (Crit A, 13 marks) ────────────────────
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Urbanisation & Biodiversity',
    topicCanonical: 'Human Influences',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Biodiversity'],
    marks: 13,
    stem: 'One of the United Nations (UN) sustainable development goals is that cities should be inclusive, safe, resilient and sustainable. In response to migration to large cities, planners must consider the social, economic and environmental impact of urbanisation.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="300" fill="#ffffff"/><text x="310" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Why fewer pollinators reduces biodiversity</text><!-- chain boxes --><g><rect x="20" y="70" width="110" height="64" rx="8" fill="#fff3cd" stroke="#caa61e"/><text x="75" y="98" font-size="11" text-anchor="middle" fill="#6b5310">Fewer bees</text><text x="75" y="114" font-size="11" text-anchor="middle" fill="#6b5310">(pollinators)</text></g><line x1="132" y1="102" x2="162" y2="102" stroke="#475569" stroke-width="2"/><polygon points="162,102 152,96 152,108" fill="#475569"/><g><rect x="164" y="70" width="110" height="64" rx="8" fill="#e3f2da" stroke="#5a8a5a"/><text x="219" y="98" font-size="11" text-anchor="middle" fill="#33632f">Less</text><text x="219" y="114" font-size="11" text-anchor="middle" fill="#33632f">pollination</text></g><line x1="276" y1="102" x2="306" y2="102" stroke="#475569" stroke-width="2"/><polygon points="306,102 296,96 296,108" fill="#475569"/><g><rect x="308" y="70" width="110" height="64" rx="8" fill="#e3f2da" stroke="#5a8a5a"/><text x="363" y="98" font-size="11" text-anchor="middle" fill="#33632f">Fewer plants</text><text x="363" y="114" font-size="11" text-anchor="middle" fill="#33632f">grow / seed</text></g><line x1="420" y1="102" x2="450" y2="102" stroke="#475569" stroke-width="2"/><polygon points="450,102 440,96 440,108" fill="#475569"/><g><rect x="452" y="70" width="140" height="64" rx="8" fill="#fde2e0" stroke="#b8463a"/><text x="522" y="92" font-size="11" text-anchor="middle" fill="#8a2f26">Less food &amp;</text><text x="522" y="106" font-size="11" text-anchor="middle" fill="#8a2f26">habitat for</text><text x="522" y="120" font-size="11" text-anchor="middle" fill="#8a2f26">other species</text></g><!-- down to biodiversity --><line x1="522" y1="138" x2="522" y2="178" stroke="#475569" stroke-width="2"/><polygon points="522,178 516,168 528,168" fill="#475569"/><rect x="200" y="184" width="220" height="48" rx="8" fill="#dceefb" stroke="#3a6ea5"/><text x="310" y="206" font-size="12" text-anchor="middle" font-weight="700" fill="#1f3a5f">Biodiversity falls further</text><text x="310" y="222" font-size="10" text-anchor="middle" fill="#3a6ea5">fewer species across the food web</text><!-- cooling note --><rect x="20" y="248" width="580" height="36" rx="6" fill="#eef9f0" stroke="#5a8a5a"/><text x="310" y="270" font-size="10" text-anchor="middle" fill="#33632f">Plants also cool cities: water evaporating from leaves (transpiration) lowers the local temperature.</text></svg>',
      },
      caption: 'A reduction in pollinators ripples through the food web, reducing biodiversity further. Plants also cool urban areas through transpiration.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Plants have a cooling effect when water evaporates from their leaves. **Select** the name of this process.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Osmosis', 'Photosynthesis', 'Respiration', 'Transpiration'],
        ph: 'Water loss through leaf stomata.',
      },
      {
        label: 'b',
        text: 'A consequence of urbanisation is lower biodiversity. **Explain** how a reduction in the population of pollinators, such as bees, will further reduce biodiversity.',
        marks: 4,
        ph: 'Fewer bees → less pollination → fewer plants → less food → biodiversity reduced.',
      },
      {
        label: 'c',
        text: '**Explain** how an existing city can become more sustainable. In your answer, you should include:\n- a justification of one action an individual can take\n- a justification of one action a government can take\n- a statement of why each action might be difficult to implement\n- a conclusion',
        marks: 8,
        ph: 'Individual + justification + difficulty; government + justification + difficulty; conclusion.',
      },
    ],
  },

  // ─── Q9: Biosolar Roof Technology (Crit D, 13 marks) ───────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Biosolar Roof Technology',
    topicCanonical: 'Mitigation of Adverse Effects',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Biodiversity'],
    marks: 13,
    stem: 'Cities can enhance biodiversity by creating additional green spaces. Green roofs and solar panels can together form biosolar roof technology. Using information from this task and your wider MYP studies, discuss and evaluate the use of biosolar technology to improve the sustainability of urban areas.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="380" fill="#ffffff"/><text x="320" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Biosolar roof: green roof + solar panels combined</text><!-- building roof --><polygon points="60,250 360,250 420,300 120,300" fill="#cdd6dd" stroke="#94a3ad"/><!-- soil layer --><polygon points="60,232 360,232 360,250 60,250" fill="#7a5a32" stroke="#5a3f20"/><polygon points="60,250 360,250 420,300 120,300" fill="#e9efe6" opacity="0.0"/><!-- plants on roof --><g fill="#5a8a3a"><circle cx="90" cy="222" r="12"/><circle cx="120" cy="226" r="10"/><circle cx="320" cy="222" r="12"/><circle cx="290" cy="226" r="10"/></g><!-- solar panels angled --><g><polygon points="150,250 250,250 234,210 166,210" fill="#1f3a5f" stroke="#0f2238"/><line x1="170" y1="210" x2="154" y2="250" stroke="#3a5f8f" stroke-width="1"/><line x1="200" y1="210" x2="200" y2="250" stroke="#3a5f8f" stroke-width="1"/><line x1="230" y1="210" x2="246" y2="250" stroke="#3a5f8f" stroke-width="1"/></g><!-- callout: Plants --><rect x="430" y="44" width="200" height="96" rx="8" fill="#eef9f0" stroke="#5a8a5a"/><text x="442" y="62" font-size="12" font-weight="700" fill="#33632f">Plants</text><text x="442" y="80" font-size="10" fill="#475569">• remove pollution from air</text><text x="442" y="95" font-size="10" fill="#475569">• cooling effect; produce food</text><text x="442" y="110" font-size="10" fill="#475569">• provide green space for people</text><text x="442" y="125" font-size="10" fill="#475569">• increase urban biodiversity</text><line x1="320" y1="210" x2="430" y2="92" stroke="#5a8a5a" stroke-width="1" stroke-dasharray="3 3"/><!-- callout: Soil layer --><rect x="10" y="44" width="200" height="96" rx="8" fill="#f5efe6" stroke="#a8855a"/><text x="22" y="62" font-size="12" font-weight="700" fill="#6b4a23">Soil layer</text><text x="22" y="80" font-size="10" fill="#475569">• supports plant growth</text><text x="22" y="95" font-size="10" fill="#475569">• insulates the building</text><text x="22" y="110" font-size="10" fill="#475569">• absorbs water → less flooding</text><text x="22" y="125" font-size="10" fill="#475569">• reduces pollution from runoff</text><line x1="110" y1="232" x2="120" y2="140" stroke="#a8855a" stroke-width="1" stroke-dasharray="3 3"/><!-- callout: Solar panels --><rect x="220" y="320" width="400" height="52" rx="8" fill="#eef2f8" stroke="#3a6ea5"/><text x="232" y="340" font-size="12" font-weight="700" fill="#1f3a5f">Solar panels</text><text x="232" y="356" font-size="10" fill="#475569">• angled to maximise efficiency  • source of renewable energy  • become less efficient when too hot</text><line x1="200" y1="250" x2="260" y2="320" stroke="#3a6ea5" stroke-width="1" stroke-dasharray="3 3"/></svg>',
      },
      caption: 'A biosolar roof combines a soil/plant green roof with solar panels. The plants cool the panels (keeping them efficient) while the panels generate renewable electricity.',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the use of biosolar technology to improve the sustainability of urban areas. In your answer, you should include:\n- environmental impacts of green roofs and solar panels\n- economic impacts of green roofs and solar panels\n- additional benefits when green roofs and solar panels are combined in biosolar technology\n- one factor to consider when deciding where to place biosolar technology\n- a concluding statement',
        marks: 13,
        ph: 'Cover environmental, economic, additional biosolar benefits, location factor, conclusion.',
      },
    ],
  },
]
