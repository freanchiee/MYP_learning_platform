import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2017 · VARIANT 2  (isomorphic to biology-may-2017, ≠ v1)
// Same criterion, command term, marks (task+question+total=120), tags, task
// structure and widgets per question — a NEW biological context each time, with
// self-contained data-driven artefacts (no figImages). Answers recomputed.
//   Q1 Senses/Nervous:   ear/hearing/hair cells → skin/touch/mechanoreceptors (Pacinian)
//   Q2 Sensory aids:      hearing aids/cochlear implant → Braille pad / tactile implant
//   Q3 Genetics:          PAX3 hearing loss → cystic fibrosis (recessive trait, CFTR)
//   Q4 Homeostasis graph: blood O₂ vs altitude → blood glucose vs exercise duration
//   Q5 Crit C data:       O₂ sat & HR vs altitude → sweat rate & HR vs ambient temperature
//   Q6 Natural selection: pika body mass vs altitude → Arctic ground squirrel body mass vs latitude
//   Q7 Crit B design:     altitude training → intermittent-hypoxia (hypoxic tent) cycling
//   Q8 Crit D genetics:   American chestnut + blight fungus → Cavendish banana + Panama disease fungus
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'biology-may-2017-v2',
  subject: 'Biology',
  session: 'May',
  year: 2017,
  totalMarks: 120,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Q1: Senses & Nervous System — Touch (15 marks, Criterion A) ───────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Senses, Nervous System & Loss of Touch',
    topicCanonical: 'Nervous System',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Senses'],
    marks: 15,
    stem: 'The human nervous system allows us to detect and respond to stimuli. The skin contains mechanoreceptor cells (such as Pacinian corpuscles) that respond to pressure and vibration and generate nerve signals.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="skin1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6dcc2"/><stop offset="0.45" stop-color="#e8b896"/><stop offset="1" stop-color="#d49a72"/></linearGradient><marker id="aq1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="340" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Section through the skin</text><rect x="60" y="50" width="480" height="60" fill="#f6dcc2" stroke="#caa078"/><rect x="60" y="110" width="480" height="120" fill="url(#skin1)" stroke="#caa078"/><rect x="60" y="230" width="480" height="60" fill="#f4d29a" stroke="#caa078"/><text x="70" y="74" font-size="11" fill="#8a6a4a">epidermis</text><text x="70" y="170" font-size="11" fill="#8a6a4a">dermis</text><text x="70" y="262" font-size="11" fill="#8a6a4a">fatty tissue</text><g><ellipse cx="320" cy="170" rx="34" ry="26" fill="none" stroke="#0b7285" stroke-width="2"/><ellipse cx="320" cy="170" rx="24" ry="18" fill="none" stroke="#0b7285" stroke-width="1.4"/><ellipse cx="320" cy="170" rx="14" ry="10" fill="#cfe9f1" stroke="#0b7285"/><line x1="320" y1="196" x2="320" y2="250" stroke="#f4c542" stroke-width="6"/></g><text x="386" y="166" font-size="11" fill="#0b7285">Pacinian corpuscle</text><text x="386" y="180" font-size="10" fill="#0b7285">(mechanoreceptor)</text><text x="338" y="246" font-size="10" fill="#9a7d0f">sensory nerve</text><path d="M320,40 L320,64" stroke="#c0392b" stroke-width="3" marker-end="url(#aq1)"/><text x="332" y="46" font-size="11" fill="#c0392b">pressure</text></svg>',
      },
      caption: 'A Pacinian corpuscle in the dermis converts pressure and vibration into nerve signals carried by a sensory nerve.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** two other human senses apart from touch.',
        marks: 2,
        ph: 'Two of: sight, hearing, taste, smell/proprioception...',
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
        text: 'In the skin, mechanoreceptor cells respond to pressure and generate nerve signals. Using the diagram above, **identify** the layer of the skin where mechanoreceptor cells (Pacinian corpuscles) should be located.',
        marks: 1,
        ph: 'The dermis...',
      },
      {
        label: 'e',
        text: 'Repeated strong vibration, for example from operating heavy machinery, can damage mechanoreceptor cells which results in gradual loss of the sense of touch. Damaged or dead mechanoreceptor cells cannot be replaced through cell division so the loss of touch is permanent.\n\n**State** the names of the two different types of cell division and **list** two differences.',
        marks: 4,
        ph: 'Mitosis and Meiosis. Differences: meiosis produces genetically different cells / different chromosome number / 4 cells produced vs 2...',
      },
      {
        label: 'f',
        text: 'Loss of touch can also be observed in young children. This loss can be caused by events during birth, or develop later in life, or it can be inherited. During birth, an extended shortage of oxygen supply can damage mechanoreceptor cells while muscle cells are not affected.\n\n**State** the metabolic process that allows muscle cells to produce energy in the absence of oxygen.',
        marks: 2,
        ph: 'Anaerobic respiration / fermentation / lactic acid fermentation...',
      },
      {
        label: 'g',
        text: '**Suggest** how a breakdown in the body\'s oxygen supply system could lead to a permanent loss of the sense of touch.',
        marks: 3,
        ph: 'Lack of oxygen → lack of energy/ATP → mechanoreceptor cells cannot be repaired or replaced → permanent loss of touch...',
      },
    ],
  },

  // ── Q2: Braille Pads & Tactile Implants (9 marks, Criterion A) ───────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Braille Reading Pads & Tactile Implants',
    topicCanonical: 'Senses',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Nervous System'],
    marks: 9,
    stem: 'The graph shows the range of vibration frequencies that the fingertip skin of an average 20-year-old human can detect. Over time many devices have been used to assist humans with loss of touch. All of the tactile reading pads below aim to increase the strength of the pressure pulses delivered to the fingertip.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Smallest pressure that the fingertip can detect at each frequency (age 20)',
        xLabel: 'Vibration frequency',
        yLabel: 'Smallest pressure detectable',
        xUnit: 'Hz',
        yUnit: 'relative units',
        dataPoints: [{ x: 20, y: 70 }, { x: 80, y: 35 }, { x: 150, y: 12 }, { x: 250, y: 6 }, { x: 400, y: 20 }, { x: 600, y: 55 }, { x: 800, y: 85 }],
        xMin: 0, xMax: 850, yMin: 0, yMax: 90, xStep: 100, yStep: 10,
      },
      caption: 'The fingertip is most sensitive (needs the smallest pressure) near 250 Hz; sensitivity falls off at higher and lower frequencies.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the graph to **state** the frequency at which an average 20-year-old human can detect the smallest (lightest) pressure pulse.',
        marks: 1,
        ph: 'Approximately 250 Hz (accept ±50 Hz)...',
      },
      {
        label: 'b',
        text: 'Considering the function of the skin, **describe** an advantage and a disadvantage of increasing the strength of the pressure pulses delivered to the fingertip.',
        marks: 2,
        ph: 'Advantage: stronger pulses stimulate mechanoreceptors more strongly / easier to feel. Disadvantage: overstimulation can damage remaining mechanoreceptors / cause numbness...',
      },
      {
        label: 'c',
        text: 'Recently a different type of tactile aid was developed called the tactile implant. The tactile implant consists of a sensor pad and a processor (a) worn on the wrist and the actual implant, placed under the skin (b) and partly inside the fingertip nerve (c).\n\nUse the image above to **suggest** what kind of stimulus part (c) of the tactile implant needs to generate for a person to detect a touch. **Justify** your answer.',
        marks: 2,
        ph: 'Electrical impulses/signals; because the skin/mechanoreceptors generate nerve signals electrically...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="aq2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="260" fill="#ffffff"/><rect x="40" y="44" width="96" height="58" rx="10" fill="#2c3e50"/><rect x="52" y="56" width="72" height="22" rx="4" fill="#5b9bd5"/><text x="88" y="120" font-size="11" text-anchor="middle" fill="#2c3e50">(a) sensor + processor</text><path d="M300,70 q-40,0 -60,40 q-20,40 0,80 q30,50 60,40 q60,-20 60,-80 q0,-60 -60,-80 Z" fill="#f6dcc2" stroke="#caa078" stroke-width="2"/><ellipse cx="340" cy="150" rx="16" ry="12" fill="none" stroke="#0b7285" stroke-width="2"/><ellipse cx="340" cy="150" rx="8" ry="6" fill="#cfe9f1" stroke="#0b7285"/><text x="392" y="120" font-size="11" fill="#0b7285">(c) inside fingertip nerve</text><rect x="316" y="178" width="24" height="20" rx="3" fill="#0b7285"/><text x="392" y="150" font-size="11" fill="#0b7285">(b) implant under skin</text><line x1="136" y1="72" x2="312" y2="150" stroke="#0b7285" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#aq2)"/><text x="210" y="96" font-size="10" fill="#0b7285">signal to implant</text></svg>',
          },
          caption: 'A tactile implant: a wrist sensor (a) sends data to an implant (b) whose electrode sits inside the fingertip nerve (c).',
        },
      },
      {
        label: 'd',
        text: '**Suggest** an advantage and a disadvantage of tactile implants.',
        marks: 2,
        ph: 'Advantage: enables touch even when mechanoreceptors do not function / no nerve impulses transmitted. Disadvantage: expensive / requires surgery...',
      },
      {
        label: 'e',
        text: '**Suggest** an advantage and a disadvantage of (traditional) Braille reading pads.',
        marks: 2,
        ph: 'Advantage: enables reading by touch / no surgery required / low cost / readily available. Disadvantage: bulky / slow / do not help if the fingertip nerve is damaged...',
      },
    ],
  },

  // ── Q3: Genetics — Cystic Fibrosis (7 marks, Criterion A) ────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Genetics & Heredity — Cystic Fibrosis',
    topicCanonical: 'Inheritance & Variation',
    topicGroup: 'Evolution',
    topicsAlso: ['DNA & Genetics'],
    marks: 7,
    stem: 'Several genes have been discovered that are known to be responsible for cystic fibrosis (a condition causing thick, sticky mucus) in humans. The normal form of the CFTR gene is dominant (symbol **A**, no cystic fibrosis). The mutated form of CFTR is recessive (symbol **a**, cystic fibrosis).',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><text x="280" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Inheritance of cystic fibrosis (CFTR gene)</text><circle cx="160" cy="80" r="24" fill="#cfe9f1" stroke="#0b7285" stroke-width="2"/><rect x="376" y="58" width="46" height="46" rx="6" fill="#cfe9f1" stroke="#0b7285" stroke-width="2"/><text x="160" y="124" font-size="12" text-anchor="middle" fill="#1f2d3a">Mother</text><text x="399" y="124" font-size="12" text-anchor="middle" fill="#1f2d3a">Father</text><text x="160" y="142" font-size="11" text-anchor="middle" fill="#5b6b78">unaffected</text><text x="399" y="142" font-size="11" text-anchor="middle" fill="#5b6b78">unaffected</text><line x1="184" y1="86" x2="376" y2="86" stroke="#5b6b78" stroke-width="1.5"/><line x1="280" y1="86" x2="280" y2="180" stroke="#5b6b78" stroke-width="1.5"/><circle cx="280" cy="206" r="24" fill="#e8772e" stroke="#a8531a" stroke-width="2"/><text x="280" y="250" font-size="12" text-anchor="middle" fill="#1f2d3a">Child</text><text x="280" y="268" font-size="11" text-anchor="middle" fill="#a8531a">cystic fibrosis</text></svg>',
      },
      caption: 'Two unaffected parents have a child with cystic fibrosis.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Parents who are unaffected have a child with cystic fibrosis. **Deduce and justify** whether this characteristic is controlled by a dominant allele (M) or a recessive allele (R).',
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
        text: 'Gene CFTR is one of the genes that control mucus production. The normal form of CFTR is dominant (symbol **A**, no cystic fibrosis). The mutated form of CFTR is recessive (symbol **a**, cystic fibrosis).\n\n**Explain** why a person with cystic fibrosis possessing two recessive alleles (genotype **aa**) would only have children who carry at least one cystic fibrosis allele.',
        marks: 2,
        ph: 'aa parent always passes on a (recessive) allele to every child; child always inherits at least one a; the allele inherited from the other parent determines whether the child has cystic fibrosis or is a carrier...',
      },
    ],
  },

  // ── Q4: Blood Glucose & Exercise (9 marks, Criterion C) ──────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Blood Glucose, Exercise & Homeostasis',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Circulation'],
    marks: 9,
    stem: 'In 2015, a group of international students took part in a long-distance cycling event. The students cycled continuously for 60 minutes. During the ride, scientists monitored many factors to study how prolonged exercise affects the human body.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Blood glucose concentration against exercise duration',
        xLabel: 'Exercise duration',
        yLabel: 'Blood glucose concentration',
        xUnit: 'min',
        yUnit: 'mmol L⁻¹',
        dataPoints: [{ x: 10, y: 5.4 }, { x: 60, y: 4.0 }],
        xMin: 0, xMax: 70, yMin: 3, yMax: 6, xStep: 10, yStep: 0.5,
      },
      caption: 'Only two times were measured. Blood glucose falls as the duration of exercise increases (muscles use glucose for respiration).',
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
        text: 'The scientists conducted one trial of an investigation during the ride. As one of the students continued to cycle, the scientists measured the blood glucose concentration of the student.\n\n**Suggest** a research question that could be investigated by this experiment.',
        marks: 1,
        ph: 'Does the blood glucose concentration vary with the duration of exercise? (link IV and DV)...',
      },
      {
        label: 'c',
        text: '**State** one weakness in the data shown on the graph.',
        marks: 1,
        ph: 'Only two data points / only one trial / only one student...',
      },
      {
        label: 'd',
        text: 'Using the graph, **state** the relationship between exercise duration and blood glucose concentration.',
        marks: 1,
        ph: 'As exercise duration increases, blood glucose concentration decreases / inverse relationship...',
      },
      {
        label: 'e',
        text: 'Using the graph, **predict** the blood glucose concentration at the very start of the ride (0 min).',
        marks: 1,
        ph: 'Accept any value in range 5.4–5.7 mmol L⁻¹...',
      },
      {
        label: 'f',
        text: 'Glucose is constantly used by the muscles for respiration during exercise. A graph of the hormone glucagon in the blood against exercise duration is shown above.\n\nThe fall in glucose used by the muscles between 10 min and 60 min would be 45% if there were no response. However the fall in blood glucose concentration is only 26% over the same time.\n\n**Explain** how the change in glucagon concentration in the blood is involved in homeostasis.',
        marks: 4,
        ph: 'Body responds to falling glucose; the pancreas releases more glucagon; glucagon makes the liver release glucose into the blood; this slows the fall in blood glucose; helps maintain a stable blood glucose concentration...',
      },
    ],
  },

  // ── Q5: Exercise / Heat Investigation (13 marks, Criterion B) ────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Sweat Rate & Heart Rate — Data Analysis',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Gas Exchange'],
    marks: 13,
    stem: 'During an indoor cycling session, the sweat rate and heart rates of five students were measured at three different room (ambient) temperatures.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Sweat rate against ambient temperature',
        xLabel: 'Ambient temperature',
        yLabel: 'Sweat rate',
        xUnit: '°C',
        yUnit: 'mL min⁻¹',
        dataPoints: [{ x: 18, y: 6 }, { x: 26, y: 12 }, { x: 34, y: 20 }],
        xMin: 14, xMax: 38, yMin: 0, yMax: 24, xStep: 4, yStep: 4,
      },
      caption: 'Sweat rate against ambient temperature, averaged across five students.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the independent variable, dependent variable and two control variables that should be considered in this investigation.',
        marks: 4,
        ph: 'IV: ambient temperature. DV: sweat rate or heart rate. CV1: age of students. CV2: resting heart rate / cycling intensity / humidity...',
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: ['Ambient temperature', 'Sweat rate', 'Heart rate', 'Age of students', 'Resting heart rate of students', 'Cycling intensity'],
      },
      {
        label: 'b',
        text: 'The measurements are shown in the graphs below. Sweat rate is the volume of sweat produced each minute. **Interpret** the trends in the data shown in the graphs and **explain** the effect on the body shown by the results from this investigation.',
        marks: 3,
        ph: 'Sweat rate increases with temperature; heart rate increases with temperature; the body sweats more and pumps more blood to the skin to lose heat and stay cool as temperature rises...',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Heart rate against ambient temperature',
            xLabel: 'Ambient temperature',
            yLabel: 'Heart rate',
            xUnit: '°C',
            yUnit: 'beats min⁻¹',
            dataPoints: [{ x: 18, y: 120 }, { x: 26, y: 140 }, { x: 34, y: 160 }],
            xMin: 14, xMax: 38, yMin: 0, yMax: 180, xStep: 4, yStep: 20,
          },
          caption: 'Heart rate against ambient temperature, averaged across five students.',
        },
      },
      {
        label: 'c',
        text: '**Suggest** two improvements that could be made to this investigation. **Justify** your answers.',
        marks: 4,
        ph: 'Improvement 1: more temperatures / more students. Justification: better idea of trend / more reliable data. Improvement 2: another measurable control variable. Justification: more controlled data...',
      },
      {
        label: 'd',
        text: '**Suggest** an extension for this investigation. **Justify** your answer.',
        marks: 2,
        ph: 'Study various ages / other physiological factors (e.g. core body temperature). Justification: linked to extension...',
      },
    ],
  },

  // ── Q6: Ground Squirrel Body Mass & Latitude (19 marks, Criterion B) ─────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Ground Squirrel Body Mass — Natural Selection & Latitude',
    topicCanonical: 'Natural Selection',
    topicGroup: 'Evolution',
    marks: 19,
    stem: 'The Arctic ground squirrel is a small mammal that lives across the far north. A team of scientists was interested in studying whether groups of ground squirrels had adjusted to living at different latitudes. The aim of the research was to determine whether body mass was related to latitude. The scientists identified isolated groups of ground squirrels living at different latitudes and determined the mean body mass of each group.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Mean ground squirrel body mass against latitude',
        xLabel: 'Latitude',
        yLabel: 'Mean body mass',
        xUnit: '°N',
        yUnit: 'g',
        dataPoints: [{ x: 55, y: 620 }, { x: 60, y: 660 }, { x: 65, y: 705 }, { x: 70, y: 740 }, { x: 75, y: 775 }],
        xMin: 50, xMax: 80, yMin: 500, yMax: 800, xStep: 5, yStep: 50,
      },
      caption: 'Mean body mass of isolated ground squirrel groups rises as latitude increases (larger bodies conserve heat in colder northern climates).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest and justify** two control variables that should be considered for this experiment.',
        marks: 4,
        ph: 'CV1: age of squirrel (justification: different ages have different mass). CV2: sex of squirrel (male/female may differ). CV3: time of year (seasonal mass changes)...',
      },
      {
        label: 'b',
        text: '**State** how many individuals in each group should be sampled to collect a sufficient amount of reliable data.',
        marks: 1,
        ph: 'At least three individuals...',
      },
      {
        label: 'c',
        text: 'Click on the image of each ground squirrel to display mean body mass data.\n\n**Design** a data table and collect data using the tool above. You should include headings in your table.',
        marks: 4,
        ph: 'Table headings: Latitude (°N) and Mean (average) body mass (g); both units; at least five values recorded...',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Latitude / °N', 'Mean body mass / g'],
            rows: [['55', '620'], ['60', '660'], ['65', '705'], ['70', '740'], ['75', '775']],
          },
          caption: 'Mean body mass of each isolated ground squirrel group, revealed by clicking the squirrels.',
        },
      },
      {
        label: 'd',
        text: '**Calculate** the percentage increase in mean body mass between the groups living at the lowest latitude and the highest latitude. Give your answer to an appropriate number of significant figures.',
        marks: 3,
        ph: 'Difference = 155 g; percentage = 25.0% (to appropriate sig figs). Accept any correctly calculated final value...',
      },
      {
        label: 'e',
        text: 'The hypothesis for this investigation was that groups of ground squirrels living at higher latitudes will have a higher mean body mass in order to adjust to conditions at higher latitudes.\n\n**Outline** whether or not the data from this experiment support the hypothesis. **Justify** your answer.',
        marks: 2,
        ph: 'Hypothesis is supported; justification refers to trends in data; answer supported by numerical data from table...',
      },
      {
        label: 'f',
        text: 'The scientists asked if natural selection led to the change in mean body mass in the groups of ground squirrels living across these latitudes.\n\n**Evaluate** whether the method of this investigation is appropriate to answer the question the researchers asked. In your answer, you should identify strengths and weaknesses of the method. Use scientific knowledge and understanding to give a concluding appraisal.',
        marks: 5,
        ph: 'Strength: separate groups identified / measurements at several latitudes / trait reliably measured. Limitation: did not check if groups were isolated / only one region / did not check food was same / change in mass ≠ natural selection. Appraisal: method was inappropriate...',
      },
    ],
  },

  // ── Q7: Investigation Design — Hypoxic-Tent Training (21, Criterion B) ────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Intermittent Hypoxia & Cycling Performance',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    marks: 21,
    stem: 'The human body adjusts to changes in the environment. This is known as acclimatization. Some acclimatizations may allow athletes to improve their performance. Some cyclists sleep in a "hypoxic tent" that lowers the oxygen level of the air, as they think that intermittent exposure to low-oxygen air might give them a competitive advantage when racing at normal altitude.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 580 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="tent7" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe1ec"/><stop offset="1" stop-color="#9bb9cf"/></linearGradient></defs><rect width="580" height="240" fill="#ffffff"/><text x="290" y="30" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cyclist sleeping in a hypoxic (low-oxygen) tent</text><path d="M120,200 L300,80 L480,200 Z" fill="url(#tent7)" stroke="#5b7a90" stroke-width="2"/><line x1="300" y1="80" x2="300" y2="200" stroke="#5b7a90" stroke-width="1.5" stroke-dasharray="4 4"/><rect x="180" y="170" width="220" height="30" rx="8" fill="#3a6ea5"/><circle cx="210" cy="160" r="14" fill="#f1c27d" stroke="#c98a3c"/><text x="290" y="222" font-size="11" text-anchor="middle" fill="#5b6b78">O₂ level ≈ 15% (like high altitude)</text><rect x="486" y="120" width="58" height="40" rx="5" fill="#222"/><text x="515" y="138" font-size="11" fill="#3ad36a" text-anchor="middle" font-family="monospace">O₂%</text><text x="515" y="152" font-size="9" fill="#9bb9cf" text-anchor="middle">monitor</text></svg>',
      },
      caption: 'A cyclist sleeps in a hypoxic tent that lowers the oxygen level; performance is measured before and after a period of intermittent hypoxia.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to study the relationship between sleeping in low-oxygen air and cycling performance in athletes. In your answer you should:\n\n- outline a suitable physical activity\n- explain the problem to be studied\n- formulate a testable hypothesis with a scientific explanation\n- identify relevant variables\n- describe how to measure and manipulate the variables in your method\n- list any safety considerations\n- outline any ethical concerns about investigations using humans.',
        marks: 21,
        ph: 'Problem: Does sleeping in low-oxygen air improve cycling performance? Hypothesis: Cyclists who sleep in low-oxygen air will perform better because the body adapts (more hemoglobin / red blood cells, better O2 transport). IV: oxygen level of the tent air. DV: performance (time / distance / power). CV: age, fitness level, duration of exposure. Method: groups sleep at different oxygen levels; measure performance before and after; repeat with control group. Safety: monitor blood oxygen; stay within safe oxygen ranges. Ethics: informed consent; not exceeding safe limits...',
      },
    ],
  },

  // ── Q8: Cavendish Banana & Genetic Engineering (27 marks, Criterion D) ───
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Genetic Engineering — Cavendish Banana',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Pathogens & Parasites', 'Ethical Implications'],
    marks: 27,
    stem: 'The Cavendish banana is grown on plantations across the tropics and is the main banana eaten worldwide. Many people, and many farm economies, rely on the Cavendish banana as a food source and a cash crop. Soil moved between plantations carried a disease-causing fungus, which causes Panama disease (Fusarium wilt). Whole plantations of Cavendish bananas were killed within a few years. Some wild banana species had evolved resistance to the fungus.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="stem8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7bbf5a"/><stop offset="1" stop-color="#4e8a37"/></linearGradient></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Healthy vs diseased Cavendish banana plant</text><g><path d="M150,230 L150,90" stroke="url(#stem8)" stroke-width="16" stroke-linecap="round"/><path d="M150,100 Q90,70 70,110 Q120,100 150,120 Z" fill="#2f9e44"/><path d="M150,110 Q210,80 230,120 Q180,110 150,130 Z" fill="#37b24d"/><path d="M150,130 Q95,120 80,160 Q125,140 150,150 Z" fill="#2f9e44"/><g><path d="M140,150 q-6,16 4,18 q10,2 8,-16 Z" fill="#f4c542" stroke="#caa11a"/><path d="M150,150 q-2,18 8,18 q10,0 6,-18 Z" fill="#f4c542" stroke="#caa11a"/></g><text x="150" y="252" font-size="12" text-anchor="middle" fill="#2f9e44">healthy banana</text></g><g><path d="M400,230 L400,90" stroke="#8a7a3a" stroke-width="16" stroke-linecap="round"/><path d="M400,100 Q345,118 332,150 Q380,128 400,128 Z" fill="#b59a3a"/><path d="M400,114 Q455,128 466,156 Q418,138 400,138 Z" fill="#a8923a"/><text x="400" y="252" font-size="12" text-anchor="middle" fill="#a8531a">diseased banana</text><text x="400" y="268" font-size="10" text-anchor="middle" fill="#a8531a">leaves wilt &amp; yellow (blocked xylem)</text></g><circle cx="280" cy="150" r="5" fill="#0b7285"/><text x="280" y="138" font-size="10" text-anchor="middle" fill="#0b7285">fungus in soil</text></svg>',
      },
      caption: 'Panama disease fungus blocks the banana plant\'s water-transport tissue, so the leaves wilt and yellow and the plant dies.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using information from the video, **state** which **organism** caused Cavendish banana plants to die.',
        marks: 1,
        ph: 'Fungus...',
      },
      {
        label: 'b',
        text: '**Outline** the specific human action that caused the organism you named in part (a) to be introduced into the plantations.',
        marks: 2,
        ph: 'Moving infected soil / contaminated equipment between plantations that was carrying the Panama disease fungus...',
      },
      {
        label: 'c',
        text: 'Using scientific language, **outline** the effect of the damage on the transport processes in the diseased plants.',
        marks: 3,
        ph: 'Correct use of: xylem, phloem, translocation, transpiration. Xylem or phloem or transport tissue is damaged/blocked; water/mineral nutrients not transported (by damaged/blocked xylem); sugars/assimilates not transported (by damaged phloem)...',
      },
      {
        label: 'd',
        text: '**State** one similarity and one difference between genetic engineering and selective breeding.',
        marks: 2,
        ph: 'Similarity: both can add new traits/characteristics; both can create new combination of genes. Difference: GE produces faster results / GE can add traits from one species to a new species...',
      },
      {
        label: 'e',
        text: '**Describe** how biotechnology is used to create disease-resistant Cavendish banana plants.',
        marks: 4,
        ph: 'Extract resistance/target gene or desired DNA from a resistant wild banana; insert gene into the Cavendish banana using enzymes; resistance gene/DNA/genetic information is transferred to offspring...',
      },
      {
        label: 'f',
        text: 'Using the information from this project and your wider MYP knowledge, **discuss and evaluate** the possible implications of changing the genome of Cavendish banana plants. In your answer you should include:\n\n- the advantages of introducing a new genetic variant\n- the disadvantages of introducing a new genetic variant\n- an environmental impact of introducing a new genetic variant\n- an economic impact of introducing a new genetic variant\n- an appraisal of the arguments you have discussed.',
        marks: 15,
        ph: 'Advantage: crop saved, food source secured, farms protected, genetic diversity. Disadvantage: unknown ecological effects, resistance gene from different species, modified genes spread to wild bananas. Environmental: ecosystem and pollinators affected / genetic contamination. Economic: cash crop and farm jobs protected / cost of programme. Appraisal: balance of benefits vs risks; saving the crop outweighs risks if carefully managed...',
      },
    ],
  },
]
