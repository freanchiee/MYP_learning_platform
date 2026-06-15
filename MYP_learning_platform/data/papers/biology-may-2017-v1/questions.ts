import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2017 · VARIANT 1  (isomorphic to biology-may-2017)
// Same criterion, command term, marks (task+question+total=120), tags, task
// structure and widgets per question — a NEW biological context each time, with
// self-contained data-driven artefacts (no figImages). Answers recomputed.
//   Q1 Senses/Nervous:   ear/hearing/hair cells → eye/vision/photoreceptors (rods & cones)
//   Q2 Sensory aids:      hearing aids/cochlear implant → spectacles/retinal implant
//   Q3 Genetics:          PAX3 hearing loss → albinism (recessive trait)
//   Q4 Homeostasis graph: blood O₂ vs altitude → core body temp vs cold-water dive depth
//   Q5 Crit C data:       O₂ sat & HR vs altitude → breathing rate & HR vs dive depth
//   Q6 Natural selection: pika body mass vs altitude → marmot tail length vs altitude
//   Q7 Crit B design:     altitude training → heat acclimation & athletic performance
//   Q8 Crit D genetics:   American chestnut + blight fungus → American elm + Dutch elm fungus
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'biology-may-2017-v1',
  subject: 'Biology',
  session: 'May',
  year: 2017,
  totalMarks: 120,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Q1: Senses & Nervous System — Vision (15 marks, Criterion A) ──────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Senses, Nervous System & Vision Loss',
    topicCanonical: 'Nervous System',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Senses'],
    marks: 15,
    stem: 'The human nervous system allows us to detect and respond to stimuli. The retina at the back of the eye contains light-sensitive photoreceptor cells (rods and cones) that respond to light and generate nerve signals.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="eyeb" cx="0.55" cy="0.5"><stop offset="0" stop-color="#eef6f9"/><stop offset="1" stop-color="#cfe1e8"/></radialGradient><marker id="ar1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="340" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Section through the human eye</text><path d="M120,170 Q120,60 300,60 Q470,60 470,170 Q470,280 300,280 Q120,280 120,170 Z" fill="url(#eyeb)" stroke="#5b6b78" stroke-width="2"/><path d="M120,170 q-26,0 -34,-22 q34,-10 34,-10 Z" fill="#bcd" stroke="#5b6b78"/><path d="M120,170 q-26,0 -34,22 q34,10 34,10 Z" fill="#bcd" stroke="#5b6b78"/><text x="64" y="174" font-size="11" fill="#3a6ea5">cornea</text><ellipse cx="150" cy="170" rx="20" ry="46" fill="#dff0d8" stroke="#3a7d44" stroke-width="2"/><text x="150" y="232" font-size="11" text-anchor="middle" fill="#3a7d44">lens</text><line x1="92" y1="170" x2="150" y2="170" stroke="#0b7285" stroke-width="2"/><line x1="150" y1="170" x2="440" y2="170" stroke="#0b7285" stroke-width="2" marker-end="url(#ar1)"/><text x="300" y="160" font-size="11" text-anchor="middle" fill="#0b7285">light ray</text><path d="M430,90 Q470,170 430,250" fill="none" stroke="#e8772e" stroke-width="6"/><text x="452" y="110" font-size="11" fill="#a8531a">retina</text><text x="452" y="124" font-size="10" fill="#a8531a">(photoreceptors)</text><path d="M442,250 Q500,250 520,210" fill="none" stroke="#f4c542" stroke-width="8"/><text x="512" y="200" font-size="11" fill="#9a7d0f">optic</text><text x="512" y="214" font-size="11" fill="#9a7d0f">nerve</text></svg>',
      },
      caption: 'The retina lines the back of the eye; its photoreceptor cells convert light into nerve signals sent along the optic nerve.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** two other human senses apart from sight.',
        marks: 2,
        ph: 'Two of: hearing, taste, smell, touch/proprioception...',
      },
      {
        label: 'b',
        text: '**Select** the type of cell that can detect a stimulus and generate nerve signals.',
        marks: 1,
        ph: 'Select the correct cell type.',
        widget: 'radio_select',
        widgetOptions: ['palisade', 'receptor', 'muscle', 'stem'],
      },
      {
        label: 'c',
        text: '**Outline** the route of a signal through the nervous system.',
        marks: 2,
        ph: 'Stimulus → sensory nerve → CNS/brain/spinal cord → motor nerve → effector/response...',
      },
      {
        label: 'd',
        text: 'In the eye, photoreceptor cells respond to light and generate nerve signals. Using the diagram above, **identify** the part of the eye where photoreceptor cells should be located.',
        marks: 1,
        ph: 'The retina...',
      },
      {
        label: 'e',
        text: 'Looking directly at very bright light, such as the Sun or a laser, can damage photoreceptor cells which results in gradual vision loss. Damaged or dead photoreceptor cells cannot be replaced through cell division so the vision loss is permanent.\n\n**State** the names of the two different types of cell division and **list** two differences.',
        marks: 4,
        ph: 'Mitosis and Meiosis. Differences: meiosis produces genetically different cells / different chromosome number / 4 cells produced vs 2...',
      },
      {
        label: 'f',
        text: 'Loss of vision can also be observed in young children. This loss of vision can be caused by events during birth, or develop later in life, or it can be inherited. During birth, an extended shortage of oxygen supply can damage photoreceptor cells while muscle cells are not affected.\n\n**State** the metabolic process that allows muscle cells to produce energy in the absence of oxygen.',
        marks: 2,
        ph: 'Anaerobic respiration / fermentation / lactic acid fermentation...',
      },
      {
        label: 'g',
        text: '**Suggest** how a breakdown in the body\'s oxygen supply system could lead to a permanent loss of vision.',
        marks: 3,
        ph: 'Lack of oxygen → lack of energy/ATP → photoreceptor cells cannot be repaired or replaced → permanent vision loss...',
      },
    ],
  },

  // ── Q2: Spectacles & Retinal Implants (9 marks, Criterion A) ─────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Spectacles & Retinal Implants',
    topicCanonical: 'Senses',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Nervous System'],
    marks: 9,
    stem: 'The graph shows the range of light wavelengths that an average 20-year-old human can see. Over time many devices have been used to assist humans with loss of vision. All of the spectacle lenses below aim to increase the sharpness of the image formed on the retina.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Brightness needed to detect light of different colours (age 20)',
        xLabel: 'Wavelength of light',
        yLabel: 'Brightness needed to just see it',
        xUnit: 'nm',
        yUnit: 'relative units',
        dataPoints: [{ x: 420, y: 70 }, { x: 480, y: 30 }, { x: 510, y: 8 }, { x: 555, y: 4 }, { x: 600, y: 12 }, { x: 660, y: 45 }, { x: 700, y: 80 }],
        xMin: 400, xMax: 720, yMin: 0, yMax: 90, xStep: 40, yStep: 10,
      },
      caption: 'The eye is most sensitive (needs least brightness) near 555 nm; sensitivity falls off towards the red and violet ends.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the graph to **state** the wavelength at which an average 20-year-old human can see the dimmest light.',
        marks: 1,
        ph: 'Approximately 555 nm (accept ±15 nm)...',
      },
      {
        label: 'b',
        text: 'Considering the function of the eye, **describe** an advantage and a disadvantage of focusing more light onto the retina.',
        marks: 2,
        ph: 'Advantage: more light stimulates photoreceptors more strongly / brighter, clearer image. Disadvantage: too much light can overstimulate / damage remaining photoreceptors...',
      },
      {
        label: 'c',
        text: 'Recently a different type of vision aid was developed called the retinal implant. The retinal implant consists of a tiny camera and a processor (a) mounted outside the head and the actual implant, placed on the back of the eye (b) and partly inside the retina (c).\n\nUse the image above to **suggest** what kind of stimulus part (c) of the retinal implant needs to generate for a person to detect light. **Justify** your answer.',
        marks: 2,
        ph: 'Electrical impulses/signals; because the retina/photoreceptors generate nerve signals electrically...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ar2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="260" fill="#ffffff"/><rect x="40" y="40" width="90" height="56" rx="8" fill="#2c3e50"/><circle cx="62" cy="68" r="11" fill="#5b9bd5"/><text x="85" y="118" font-size="11" text-anchor="middle" fill="#2c3e50">(a) camera + processor</text><path d="M300,130 m-90,0 a90,90 0 1,0 180,0 a90,90 0 1,0 -180,0" fill="#eef6f9" stroke="#5b6b78" stroke-width="2"/><path d="M375,80 Q420,130 375,180" fill="none" stroke="#e8772e" stroke-width="6"/><text x="430" y="96" font-size="11" fill="#a8531a">(c) inside retina</text><rect x="356" y="118" width="26" height="24" rx="3" fill="#0b7285"/><text x="430" y="150" font-size="11" fill="#0b7285">(b) implant on eye</text><line x1="130" y1="68" x2="350" y2="120" stroke="#0b7285" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ar2)"/><text x="240" y="84" font-size="10" fill="#0b7285">signal to implant</text><line x1="385" y1="130" x2="470" y2="130" stroke="#f4c542" stroke-width="7"/><text x="500" y="134" font-size="11" fill="#9a7d0f">optic</text><text x="500" y="148" font-size="11" fill="#9a7d0f">nerve</text></svg>',
          },
          caption: 'A retinal implant: an external camera (a) sends data to an implant (b) whose electrode array sits inside the retina (c).',
        },
      },
      {
        label: 'd',
        text: '**Suggest** an advantage and a disadvantage of retinal implants.',
        marks: 2,
        ph: 'Advantage: enables vision even when photoreceptors do not function / no nerve impulses transmitted. Disadvantage: expensive / requires surgery...',
      },
      {
        label: 'e',
        text: '**Suggest** an advantage and a disadvantage of (traditional) spectacles.',
        marks: 2,
        ph: 'Advantage: improves vision / no surgery required / low cost / readily available. Disadvantage: can break / uncomfortable / do not help if retina is damaged...',
      },
    ],
  },

  // ── Q3: Genetics — Albinism (7 marks, Criterion A) ───────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Genetics & Heredity — Albinism',
    topicCanonical: 'Inheritance & Variation',
    topicGroup: 'Evolution',
    topicsAlso: ['DNA & Genetics'],
    marks: 7,
    stem: 'Several genes have been discovered that are known to be responsible for albinism (a lack of the pigment melanin) in humans. The normal form of the TYR gene is dominant (symbol **A**, normal pigment). The mutated form of TYR is recessive (symbol **a**, albinism).',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><text x="280" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Inheritance of albinism (TYR gene)</text><circle cx="160" cy="80" r="24" fill="#cdb79e" stroke="#7a6248" stroke-width="2"/><rect x="376" y="58" width="46" height="46" rx="6" fill="#cdb79e" stroke="#7a6248" stroke-width="2"/><text x="160" y="124" font-size="12" text-anchor="middle" fill="#1f2d3a">Mother</text><text x="399" y="124" font-size="12" text-anchor="middle" fill="#1f2d3a">Father</text><text x="160" y="142" font-size="11" text-anchor="middle" fill="#5b6b78">normal pigment</text><text x="399" y="142" font-size="11" text-anchor="middle" fill="#5b6b78">normal pigment</text><line x1="184" y1="86" x2="376" y2="86" stroke="#5b6b78" stroke-width="1.5"/><line x1="280" y1="86" x2="280" y2="180" stroke="#5b6b78" stroke-width="1.5"/><circle cx="280" cy="206" r="24" fill="#f3eddf" stroke="#7a6248" stroke-width="2"/><text x="280" y="250" font-size="12" text-anchor="middle" fill="#1f2d3a">Child</text><text x="280" y="268" font-size="11" text-anchor="middle" fill="#a8531a">albinism (no pigment)</text></svg>',
      },
      caption: 'Two parents with normal pigment have a child with albinism.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Parents with normal pigment have a child with albinism. **Deduce and justify** whether this characteristic is controlled by a dominant allele (M) or a recessive allele (R).',
        marks: 2,
        ph: 'Recessive/a; because parents do not have the condition but child does; or if it was dominant the parents would be affected too...',
      },
      {
        label: 'b',
        text: 'Use the symbols **A** and **a** to show the genetic information (allele combination) of the parents and child in part (a).',
        marks: 3,
        ph: 'Mother: Aa, Father: Aa, Child: aa (accept aA)...',
      },
      {
        label: 'c',
        text: 'Gene TYR is one of the genes that control skin pigment. The normal form of TYR is dominant (symbol **A**, normal pigment). The mutated form of TYR is recessive (symbol **a**, albinism).\n\n**Explain** why a person with albinism possessing two recessive alleles (genotype **aa**) would only have children who carry at least one albinism allele.',
        marks: 2,
        ph: 'aa parent always passes on a (recessive) allele to every child; child always inherits at least one a; the allele inherited from the other parent determines whether the child shows albinism or is a carrier...',
      },
    ],
  },

  // ── Q4: Core Temperature & Cold-Water Diving (9 marks, Criterion C) ──────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Core Body Temperature, Cold-Water Diving & Homeostasis',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Circulation'],
    marks: 9,
    stem: 'In 2014, a group of international free-divers took part in a cold-water descent in a Norwegian fjord. The divers started at the surface (0 m) and descended to a depth of 30 m, where the water is much colder. During the dive, scientists monitored many factors to study how cold water affects the human body.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Core body temperature against dive depth',
        xLabel: 'Dive depth',
        yLabel: 'Core body temperature',
        xUnit: 'm',
        yUnit: '°C',
        dataPoints: [{ x: 5, y: 37.0 }, { x: 30, y: 36.0 }],
        xMin: 0, xMax: 35, yMin: 35, yMax: 38, xStep: 5, yStep: 0.5,
      },
      caption: 'Only two depths were measured. Core body temperature falls as the diver descends into colder, deeper water.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the blood cell responsible for transporting oxygen.',
        marks: 1,
        ph: 'Red blood cell / erythrocyte...',
      },
      {
        label: 'b',
        text: 'The scientists conducted one trial of an investigation during the dive. As one of the divers moved from the surface to deeper water, the scientists measured the core body temperature of the diver.\n\n**Suggest** a research question that could be investigated by this experiment.',
        marks: 1,
        ph: 'Does the core body temperature vary with dive depth? (link IV and DV)...',
      },
      {
        label: 'c',
        text: '**State** one weakness in the data shown on the graph.',
        marks: 1,
        ph: 'Only two data points / only one trial / only one diver...',
      },
      {
        label: 'd',
        text: 'Using the graph, **state** the relationship between dive depth and core body temperature.',
        marks: 1,
        ph: 'As dive depth increases, core body temperature decreases / inverse relationship...',
      },
      {
        label: 'e',
        text: 'Using the graph, **predict** the core body temperature at the surface (0 m).',
        marks: 1,
        ph: 'Accept any value in range 37.0–37.3 °C...',
      },
      {
        label: 'f',
        text: 'Heat is constantly lost from the body to the cold water around the diver. A graph of blood-flow rate to the skin against dive depth is shown above.\n\nThe fall in water temperature between the surface and 30 m is 45%. However the fall in the diver\'s core body temperature is only 3% over the same increase in depth.\n\n**Explain** how the change in blood flow to the skin is involved in homeostasis.',
        marks: 4,
        ph: 'Body responds to heat loss; reduces blood flow to skin (vasoconstriction); keeps warm blood in the core; core temperature falls much less than the water temperature; helps maintain a stable core temperature...',
      },
    ],
  },

  // ── Q5: Cold-Water Diving Investigation (13 marks, Criterion B) ──────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Breathing Rate & Heart Rate — Data Analysis',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Gas Exchange'],
    marks: 13,
    stem: 'During the dive, the breathing rate and heart rates of five divers were measured at three different depths.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Breathing rate against dive depth',
        xLabel: 'Dive depth',
        yLabel: 'Breathing rate',
        xUnit: 'm',
        yUnit: 'breaths min⁻¹',
        dataPoints: [{ x: 0, y: 14 }, { x: 15, y: 11 }, { x: 30, y: 8 }],
        xMin: 0, xMax: 35, yMin: 0, yMax: 16, xStep: 5, yStep: 2,
      },
      caption: 'Breathing rate against dive depth, averaged across five divers.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the independent variable, dependent variable and two control variables that should be considered in this investigation.',
        marks: 4,
        ph: 'IV: dive depth. DV: breathing rate or heart rate. CV1: age of divers. CV2: resting heart rate / wetsuit thickness / time underwater...',
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: ['Dive depth', 'Breathing rate', 'Heart rate', 'Age of divers', 'Resting heart rate of divers', 'Wetsuit thickness'],
      },
      {
        label: 'b',
        text: 'The measurements are shown in the graphs below. Breathing rate is the number of breaths taken each minute. **Interpret** the trends in the data shown in the graphs and **explain** the effect on the body shown by the results from this investigation.',
        marks: 3,
        ph: 'Breathing rate decreases with depth; heart rate decreases with depth (dive reflex); the body slows the heart and breathing to conserve oxygen for the brain at depth...',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Heart rate against dive depth',
            xLabel: 'Dive depth',
            yLabel: 'Heart rate',
            xUnit: 'm',
            yUnit: 'beats min⁻¹',
            dataPoints: [{ x: 0, y: 72 }, { x: 15, y: 58 }, { x: 30, y: 44 }],
            xMin: 0, xMax: 35, yMin: 0, yMax: 80, xStep: 5, yStep: 10,
          },
          caption: 'Heart rate against dive depth, averaged across five divers.',
        },
      },
      {
        label: 'c',
        text: '**Suggest** two improvements that could be made to this investigation. **Justify** your answers.',
        marks: 4,
        ph: 'Improvement 1: more depths / more divers. Justification: better idea of trend / more reliable data. Improvement 2: another measurable control variable. Justification: more controlled data...',
      },
      {
        label: 'd',
        text: '**Suggest** an extension for this investigation. **Justify** your answer.',
        marks: 2,
        ph: 'Study various ages / other physiological factors (e.g. blood oxygen saturation). Justification: linked to extension...',
      },
    ],
  },

  // ── Q6: Marmot Tail Length & Altitude (19 marks, Criterion B) ────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Marmot Tail Length — Natural Selection & Altitude',
    topicCanonical: 'Natural Selection',
    topicGroup: 'Evolution',
    marks: 19,
    stem: 'The yellow-bellied marmot is a small mammal that lives in the mountains. A team of scientists was interested in studying whether groups of marmots had adjusted to living at different altitudes. The aim of the research was to determine whether tail length was related to altitude. The scientists identified isolated groups of marmots living at different altitudes and determined the mean tail length of each group.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Mean marmot tail length against altitude',
        xLabel: 'Altitude',
        yLabel: 'Mean tail length',
        xUnit: 'm',
        yUnit: 'mm',
        dataPoints: [{ x: 1600, y: 152 }, { x: 2000, y: 146 }, { x: 2400, y: 138 }, { x: 2800, y: 131 }, { x: 3200, y: 124 }],
        xMin: 1400, xMax: 3400, yMin: 100, yMax: 160, xStep: 400, yStep: 20,
      },
      caption: 'Mean tail length of isolated marmot groups falls as altitude increases (shorter extremities lose less heat in cold mountain air).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest and justify** two control variables that should be considered for this experiment.',
        marks: 4,
        ph: 'CV1: age of marmot (justification: different ages have different tail lengths). CV2: sex of marmot (male/female may differ). CV3: time of year (seasonal changes)...',
      },
      {
        label: 'b',
        text: '**State** how many individuals in each group should be sampled to collect a sufficient amount of reliable data.',
        marks: 1,
        ph: 'At least three individuals...',
      },
      {
        label: 'c',
        text: 'Click on the image of each marmot to display mean tail-length data.\n\n**Design** a data table and collect data using the tool above. You should include headings in your table.',
        marks: 4,
        ph: 'Table headings: Altitude (m) and Mean (average) tail length (mm); both units; at least five values recorded...',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Altitude / m', 'Mean tail length / mm'],
            rows: [['1600', '152'], ['2000', '146'], ['2400', '138'], ['2800', '131'], ['3200', '124']],
          },
          caption: 'Mean tail length of each isolated marmot group, revealed by clicking the marmots.',
        },
      },
      {
        label: 'd',
        text: '**Calculate** the percentage decrease in mean tail length between the groups living at the lowest altitude and the highest altitude. Give your answer to an appropriate number of significant figures.',
        marks: 3,
        ph: 'Difference = 28 mm; percentage = 18.42% or 18% (to appropriate sig figs). Accept any correctly calculated final value...',
      },
      {
        label: 'e',
        text: 'The hypothesis for this investigation was that groups of marmots living at higher altitudes will have a shorter mean tail length in order to adjust to conditions at higher altitudes.\n\n**Outline** whether or not the data from this experiment support the hypothesis. **Justify** your answer.',
        marks: 2,
        ph: 'Hypothesis is supported; justification refers to trends in data; answer supported by numerical data from table...',
      },
      {
        label: 'f',
        text: 'The scientists asked if natural selection led to the change in mean tail length in the groups of marmots living on this mountain.\n\n**Evaluate** whether the method of this investigation is appropriate to answer the question the researchers asked. In your answer, you should identify strengths and weaknesses of the method. Use scientific knowledge and understanding to give a concluding appraisal.',
        marks: 5,
        ph: 'Strength: separate groups identified / measurements at several altitudes / trait reliably measured. Limitation: did not check if groups were isolated / only one mountain / did not check food was same / change in tail length ≠ natural selection. Appraisal: method was inappropriate...',
      },
    ],
  },

  // ── Q7: Investigation Design — Heat Acclimation & Performance (21, Crit B) ─
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Heat Acclimation & Athletic Performance',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    marks: 21,
    stem: 'The human body adjusts to changes in the environment. This is known as acclimatization. Some acclimatizations may allow athletes to improve their performance. Athletes sometimes train in hot conditions before they compete in hot climates, as they think that heat acclimation might give them a competitive advantage.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 580 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="trk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8a35a"/><stop offset="1" stop-color="#c97f30"/></linearGradient><radialGradient id="sun7" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0b419"/></radialGradient></defs><rect width="580" height="240" fill="#ffffff"/><circle cx="90" cy="56" r="26" fill="url(#sun7)" stroke="#c79a10"/><g stroke="#f0b419" stroke-width="3" stroke-linecap="round"><line x1="90" y1="14" x2="90" y2="2"/><line x1="124" y1="34" x2="134" y2="26"/><line x1="56" y1="34" x2="46" y2="26"/></g><text x="90" y="100" font-size="11" text-anchor="middle" fill="#9a7d0f">hot climate</text><ellipse cx="290" cy="200" rx="250" ry="30" fill="url(#trk)" stroke="#a8651e"/><ellipse cx="290" cy="200" rx="160" ry="16" fill="#ffffff" stroke="#a8651e"/><g><circle cx="250" cy="176" r="9" fill="#3a6ea5"/><rect x="246" y="185" width="8" height="20" fill="#3a6ea5"/><line x1="250" y1="190" x2="262" y2="200" stroke="#3a6ea5" stroke-width="3"/><line x1="250" y1="190" x2="238" y2="198" stroke="#3a6ea5" stroke-width="3"/></g><text x="300" y="40" font-size="14" font-weight="700" fill="#1f2d3a">Athlete training in heat</text><text x="300" y="60" font-size="11" fill="#5b6b78">measure performance before &amp; after acclimation</text></svg>',
      },
      caption: 'An athlete training in hot conditions; performance is measured before and after a period of heat acclimation.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to study the relationship between training in hot conditions and performance in athletes. In your answer you should:\n\n- outline a suitable physical activity\n- explain the problem to be studied\n- formulate a testable hypothesis with a scientific explanation\n- identify relevant variables\n- describe how to measure and manipulate the variables in your method\n- list any safety considerations\n- outline any ethical concerns about investigations using humans.',
        marks: 21,
        ph: 'Problem: Does training in hot conditions improve athletic performance in the heat? Hypothesis: Athletes who train in heat will perform better because the body adapts (sweats earlier, more plasma, better cooling). IV: temperature of training. DV: performance (time / distance). CV: age, fitness level, duration of training. Method: groups train at different temperatures; measure performance before and after; repeat with control group. Safety: monitor core temperature and hydration; stop if overheating. Ethics: informed consent; not exceeding safe limits...',
      },
    ],
  },

  // ── Q8: American Elm & Genetic Engineering (27 marks, Criterion D) ───────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Genetic Engineering — American Elm Trees',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Pathogens & Parasites', 'Ethical Implications'],
    marks: 27,
    stem: 'The American elm tree is native to North America and once lined streets across the continent. Many animals, such as birds and insects, relied on elm trees as a food source and habitat. Humans valued elms for shade and timber. Imported elm logs carried a disease-causing fungus, which causes Dutch elm disease. More than 75 per cent of all American elm trees were killed within a few decades. Some Asian elm species had evolved resistance to the fungus.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="trunk8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9c6b3f"/><stop offset="1" stop-color="#6b4423"/></linearGradient></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Healthy vs diseased American elm</text><g><ellipse cx="160" cy="90" rx="70" ry="50" fill="#2f9e44"/><ellipse cx="120" cy="110" rx="40" ry="30" fill="#37b24d"/><ellipse cx="200" cy="110" rx="40" ry="30" fill="#37b24d"/><rect x="150" y="130" width="20" height="100" fill="url(#trunk8)"/><text x="160" y="252" font-size="12" text-anchor="middle" fill="#2f9e44">healthy elm</text></g><g><path d="M400,140 l-12,-50 m12,50 l16,-46 m-16,46 l-2,-56" stroke="#8a5a2b" stroke-width="4" fill="none"/><circle cx="386" cy="86" r="6" fill="#caa55b"/><circle cx="418" cy="92" r="5" fill="#caa55b"/><circle cx="398" cy="80" r="4" fill="#caa55b"/><rect x="392" y="140" width="20" height="100" fill="url(#trunk8)"/><text x="402" y="262" font-size="12" text-anchor="middle" fill="#a8531a">diseased elm</text><text x="402" y="278" font-size="10" text-anchor="middle" fill="#a8531a">leaves wilt &amp; fall (blocked xylem)</text></g><circle cx="300" cy="120" r="5" fill="#0b7285"/><text x="300" y="108" font-size="10" text-anchor="middle" fill="#0b7285">fungus spreads</text></svg>',
      },
      caption: 'Dutch elm disease fungus blocks the tree\'s water-transport tissue, so leaves wilt and the tree dies.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using information from the video, **state** which **organism** caused American elm trees to die.',
        marks: 1,
        ph: 'Fungus...',
      },
      {
        label: 'b',
        text: '**Outline** the specific human action that caused the organism you named in part (a) to be introduced into North America.',
        marks: 2,
        ph: 'Importing infected elm logs / non-native elm wood that was carrying the Dutch elm disease fungus...',
      },
      {
        label: 'c',
        text: 'Using scientific language, **outline** the effect of the damage on the transport processes in the diseased trees.',
        marks: 3,
        ph: 'Correct use of: xylem, phloem, translocation, transpiration. Xylem or phloem or transport tissue is damaged/blocked; water/mineral nutrients not transported (by damaged xylem); sugars/assimilates not transported (by damaged phloem)...',
      },
      {
        label: 'd',
        text: '**State** one similarity and one difference between genetic engineering and selective breeding.',
        marks: 2,
        ph: 'Similarity: both can add new traits/characteristics; both can create new combination of genes. Difference: GE produces faster results / GE can add traits from one species to a new species...',
      },
      {
        label: 'e',
        text: '**Describe** how biotechnology is used to create disease-resistant American elm trees.',
        marks: 4,
        ph: 'Extract resistance/target gene or desired DNA from a resistant Asian elm; insert gene into American elm using enzymes; resistance gene/DNA/genetic information is transferred to offspring...',
      },
      {
        label: 'f',
        text: 'Using the information from this project and your wider MYP knowledge, **discuss and evaluate** the possible implications of changing the genome of American elm trees. In your answer you should include:\n\n- the advantages of introducing a new genetic variant\n- the disadvantages of introducing a new genetic variant\n- an environmental impact of introducing a new genetic variant\n- an economic impact of introducing a new genetic variant\n- an appraisal of the arguments you have discussed.',
        marks: 15,
        ph: 'Advantage: trees restored, habitat and shade return, ecosystem recovered, genetic diversity. Disadvantage: unknown ecological effects, resistance gene from different species, modified genes spread to wild elms. Environmental: restored ecosystem / could affect other species / genetic contamination. Economic: timber and street-tree value returns / cost of programme. Appraisal: balance of benefits vs risks; restoration outweighs risks if carefully managed...',
      },
    ],
  },
]
