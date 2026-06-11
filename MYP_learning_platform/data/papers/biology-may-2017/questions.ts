import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

export const paperMeta: PaperMeta = {
  id: 'biology-may-2017',
  subject: 'Biology',
  session: 'May',
  year: 2017,
  totalMarks: 120,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Q1: Senses & Nervous System (15 marks, Criterion A) ──────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Senses, Nervous System & Hearing Loss',
    topicCanonical: 'Nervous System',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Senses'],
    marks: 15,
    stem: 'The human nervous system allows us to detect and respond to stimuli. The ear contains hair cells that respond to vibrations and generate nerve signals.',
    figImages: [
      '/images/papers/biology-may-2017/page-02.png',
      '/images/papers/biology-may-2017/page-03.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**State** two other human senses apart from hearing.',
        marks: 2,
        ph: 'Two of: sight, taste, smell, touch/proprioception...',
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
        text: 'In the ear, hair cells respond to vibrations and generate nerve signals. Using the animation above, **identify** the part of the ear where hair cells should be located.',
        marks: 1,
        ph: 'The cochlea...',
      },
      {
        label: 'e',
        text: 'Loud noises, including loud music, can damage hair cells which results in gradual hearing loss. Damaged or dead hair cells cannot be replaced through cell division so the hearing loss is permanent.\n\n**State** the names of the two different types of cell division and **list** two differences.',
        marks: 4,
        ph: 'Mitosis and Meiosis. Differences: meiosis produces genetically different cells / different chromosome number / 4 cells produced vs 2...',
      },
      {
        label: 'f',
        text: 'Loss of hearing can also be observed in young children. This loss of hearing can be caused by events during birth, or develop later in life, or it can be inherited. During birth, an extended shortage of oxygen supply can damage hair cells while muscle cells are not affected.\n\n**State** the metabolic process that allows muscle cells to produce energy in the absence of oxygen.',
        marks: 2,
        ph: 'Anaerobic respiration / fermentation / lactic acid fermentation...',
      },
      {
        label: 'g',
        text: '**Suggest** how a breakdown in the body\'s oxygen supply system could lead to a permanent loss of hearing.',
        marks: 3,
        ph: 'Lack of oxygen → lack of energy/ATP → hair cells cannot be repaired or replaced → permanent hearing loss...',
      },
    ],
  },

  // ── Q2: Hearing Aids & Cochlear Implants (9 marks, Criterion A/C/D) ───────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Hearing Aids & Cochlear Implants',
    topicCanonical: 'Senses',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Nervous System'],
    marks: 9,
    stem: 'The graph shows the range of frequencies that an average 20-year-old human can hear. Over time many devices have been used to assist humans with loss of hearing. All of the hearing aids below aim to increase the loudness of the sound entering the ear.',
    figImages: [
      '/images/papers/biology-may-2017/page-04.png',
      '/images/papers/biology-may-2017/page-05.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'Use the graph to **state** the frequency at which an average 20-year-old human can hear the quietest sound.',
        marks: 1,
        ph: 'Approximately 3900 Hz (accept ±100 Hz)...',
      },
      {
        label: 'b',
        text: 'Considering the function of the ear, **describe** an advantage and a disadvantage of amplifying the sound entering the ear.',
        marks: 2,
        ph: 'Advantage: louder sounds stimulate hair cells more strongly / improve hearing. Disadvantage: overstimulation can damage remaining hair cells...',
      },
      {
        label: 'c',
        text: 'Recently a different type of hearing aid was developed called the cochlear implant. The cochlear implant consists of a microphone and a processor (a) mounted outside the head and the actual implant, located under the skin (b) and partly inside the cochlea (c).\n\nUse the image above to **suggest** what kind of stimulus part (c) of the cochlear implant needs to generate for a person to detect a sound. **Justify** your answer.',
        marks: 2,
        ph: 'Electrical impulses/signals; because the cochlea/hair cells generate nerve signals electrically...',
        figImages: ['/images/papers/biology-may-2017/page-06.png'],
      },
      {
        label: 'd',
        text: '**Suggest** an advantage and a disadvantage of cochlear implants.',
        marks: 2,
        ph: 'Advantage: enables hearing even when hair cells do not function / no nerve impulses transmitted. Disadvantage: expensive / requires surgery...',
      },
      {
        label: 'e',
        text: '**Suggest** an advantage and a disadvantage of (traditional) hearing aids.',
        marks: 2,
        ph: 'Advantage: enables hearing / no surgery required / low cost / readily available. Disadvantage: expensive / heavy / uncomfortable...',
        figImages: ['/images/papers/biology-may-2017/page-07.png'],
      },
    ],
  },

  // ── Q3: Genetics — Hearing Loss (7 marks, Criterion A) ──────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Genetics & Heredity — Hearing Loss',
    topicCanonical: 'Inheritance & Variation',
    topicGroup: 'Evolution',
    topicsAlso: ['DNA & Genetics'],
    marks: 7,
    stem: 'Several genes have been discovered that are known to be responsible for hearing loss in humans. The normal form of PAX3 is recessive (symbol **a**, normal hearing). The mutated form of PAX3 is dominant (symbol **A**, hearing loss).',
    figImages: ['/images/papers/biology-may-2017/page-08.png'],
    tasks: [
      {
        label: 'a',
        text: 'Parents with normal hearing have a child with genetically determined hearing loss. **Deduce and justify** whether this characteristic is controlled by a dominant allele (M) or a recessive allele (R).',
        marks: 2,
        ph: 'Recessive/h; because parents do not have condition but child does; or if it was dominant the parents would be affected too...',
      },
      {
        label: 'b',
        text: 'Use the symbols **M** and **B** to show the genetic information (allele combination) of the parents and child in part (a).',
        marks: 3,
        ph: 'Mother: Hh, Father: Hh, Child: hh (accept hH)...',
      },
      {
        label: 'c',
        text: 'Gene PAX3 is one of the genes that control hearing. The normal form of PAX3 is recessive (symbol **a**, normal hearing). The mutated form of PAX3 is dominant (symbol **A**, hearing loss).\n\n**Explain** why a person with hearing loss possessing two dominant alleles (genotype **AA**) would only have children with hearing loss.',
        marks: 2,
        ph: 'AA parent always passes on A (dominant) allele to every child; child always inherits at least one A; dominant allele inherited from other parent will have no effect...',
      },
    ],
  },

  // ── Q4: Blood Oxygen & Altitude (9 marks, Criterion A/B/C) ───────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Blood Oxygen, Altitude & Homeostasis',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Circulation'],
    marks: 9,
    stem: 'In 2011, a group of international students took part in a run in Bolivia. The runners started at a lower altitude (700 m above sea level) and finished at a higher altitude (3500 m above sea level). During the run, scientists monitored many factors to study how altitude impacts the human body.',
    figImages: [
      '/images/papers/biology-may-2017/page-09.png',
      '/images/papers/biology-may-2017/page-10.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the blood cell responsible for transporting oxygen.',
        marks: 1,
        ph: 'Red blood cell / erythrocyte...',
      },
      {
        label: 'b',
        text: 'The scientists conducted one trial of an investigation during the run. As one of the runners moved from lower to higher altitude, the scientists measured the quantity of oxygen in his blood.\n\n**Suggest** a research question that could be investigated by this experiment.',
        marks: 1,
        ph: 'Does the quantity/amount of oxygen in the blood vary with altitude? (link IV and DV)...',
      },
      {
        label: 'c',
        text: '**State** one weakness in the data shown on the graph.',
        marks: 1,
        ph: 'Only two data points / only one trial / only one runner...',
        figImages: ['/images/papers/biology-may-2017/page-10.png'],
      },
      {
        label: 'd',
        text: 'Using the graph, **state** the relationship between altitude and quantity of oxygen in the blood.',
        marks: 1,
        ph: 'As altitude increases, quantity of oxygen in blood decreases / inverse relationship...',
        figImages: ['/images/papers/biology-may-2017/page-10.png'],
      },
      {
        label: 'e',
        text: 'Using the graph, **predict** the quantity of oxygen in the blood at sea level.',
        marks: 1,
        ph: 'Accept any value in range 78–82 (arbitrary units)...',
        figImages: ['/images/papers/biology-may-2017/page-11.png'],
      },
      {
        label: 'f',
        text: 'Hemoglobin is the molecule that transports oxygen in the blood around the body. A graph of hemoglobin concentration in the blood against altitude is shown above.\n\nThe percentage decrease in oxygen available in the air between an altitude of 700 m and 3500 m is 45%. However the percentage decrease in the quantity of oxygen in the blood is only 34% over the same increase in altitude.\n\n**Explain** how the change in hemoglobin concentration in the blood is involved in homeostasis.',
        marks: 4,
        ph: 'Body responds to less oxygen; produces more hemoglobin; increases O2 carried in blood; at higher altitude oxygen availability decreases more than in blood; hemoglobin concentration increases to maintain oxygen supply...',
        figImages: ['/images/papers/biology-may-2017/page-11.png', '/images/papers/biology-may-2017/page-12.png'],
      },
    ],
  },

  // ── Q5: Altitude & Physiological Investigation (13 marks, Criterion B/C) ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Blood O₂ Saturation & Heart Rate — Data Analysis',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Gas Exchange'],
    marks: 13,
    stem: 'During the run, the blood oxygen saturation and heart rates of five students were measured at three different altitudes.',
    figImages: [
      '/images/papers/biology-may-2017/page-12.png',
      '/images/papers/biology-may-2017/page-13.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Identify** the independent variable, dependent variable and two control variables that should be considered in this investigation.',
        marks: 4,
        ph: 'IV: altitude. DV: blood oxygen saturation or heart rate. CV1: age of runners. CV2: resting heart rate / time of acclimatization / mass of food...',
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: ['Altitude', 'Blood oxygen saturation', 'Heart rate', 'Age of runners', 'Resting heart rate of runners', 'Time of acclimatization'],
      },
      {
        label: 'b',
        text: 'The measurements are shown in the graphs below. Blood oxygen saturation shows the actual quantity of oxygen in the blood compared to the maximum quantity of oxygen that could be carried. 100% saturation means that the blood carries as much oxygen as possible.\n\n**Interpret** the trends in the data shown in the graphs and **explain** the effect on the body shown by the results from this investigation.',
        marks: 3,
        ph: 'Blood O2 saturation decreases with altitude; heart rate increases with altitude; body moves blood faster to supply oxygen to meet oxygen demand as altitude decreases availability...',
        figImages: ['/images/papers/biology-may-2017/page-13.png'],
      },
      {
        label: 'c',
        text: '**Suggest** two improvements that could be made to this investigation. **Justify** your answers.',
        marks: 4,
        ph: 'Improvement 1: more altitudes / more runners. Justification: better idea of trend / more reliable data. Improvement 2: another measurable control variable. Justification: more controlled data...',
        figImages: ['/images/papers/biology-may-2017/page-14.png'],
      },
      {
        label: 'd',
        text: '**Suggest** an extension for this investigation. **Justify** your answer.',
        marks: 2,
        ph: 'Study various ages / other physiological factors (e.g. lung capacity). Justification: linked to extension...',
      },
    ],
  },

  // ── Q6: Pika Body Mass & Altitude (19 marks, Criterion B/C) ───────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Pika Body Mass — Natural Selection & Altitude',
    topicCanonical: 'Natural Selection',
    topicGroup: 'Evolution',
    marks: 19,
    stem: 'The pika is a small mammal that lives in the mountains. A team of scientists was interested in studying whether groups of pikas had adjusted to living at different altitudes. The aim of the research was to determine whether body mass was related to altitude. The scientists identified isolated groups of pikas living at different altitudes and determined the mean body mass of each group.',
    figImages: [
      '/images/papers/biology-may-2017/page-15.png',
      '/images/papers/biology-may-2017/page-16.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Suggest and justify** two control variables that should be considered for this experiment.',
        marks: 4,
        ph: 'CV1: age of pika (justification: different ages have different mass). CV2: sex of pika (male/female may differ). CV3: time of year (seasonal mass changes)...',
      },
      {
        label: 'b',
        text: '**State** how many individuals in each group should be sampled to collect a sufficient amount of reliable data.',
        marks: 1,
        ph: 'At least three individuals...',
      },
      {
        label: 'c',
        text: 'Click on the image of each pika to display mean body mass data.\n\n**Design** a data table and collect data using the tool above. You should include headings in your table.',
        marks: 4,
        ph: 'Table headings: Altitude (m) and Mean (average) body mass (g); both units; at least five values recorded...',
        figImages: ['/images/papers/biology-may-2017/page-16.png'],
      },
      {
        label: 'd',
        text: '**Calculate** the percentage increase in mean body mass between the groups living at the lowest altitude and the highest altitude. Give your answer to an appropriate number of significant figures.',
        marks: 3,
        ph: 'Difference = 16.6 g; percentage = 11.87% or 12% (to 3 sig figs). Accept any correctly calculated final value...',
        figImages: ['/images/papers/biology-may-2017/page-17.png'],
      },
      {
        label: 'e',
        text: 'The hypothesis for this investigation was that groups of pikas living at higher altitudes will have a higher mean body mass in order to adjust to conditions at higher altitudes.\n\n**Outline** whether or not the data from this experiment support the hypothesis. **Justify** your answer.',
        marks: 2,
        ph: 'Hypothesis is supported; justification refers to trends in data; answer supported by numerical data from table...',
      },
      {
        label: 'f',
        text: 'The scientists asked if natural selection led to the change in mean body mass in the groups of pikas living on this mountain.\n\n**Evaluate** whether the method of this investigation is appropriate to answer the question the researchers asked. In your answer, you should identify strengths and weaknesses of the method. Use scientific knowledge and understanding to give a concluding appraisal.',
        marks: 5,
        ph: 'Strength: separate groups identified / measurements at several altitudes / trait reliably measured. Limitation: did not check if groups were isolated / only one mountain / did not check food was same / change in mass ≠ natural selection. Appraisal: method was inappropriate...',
      },
    ],
  },

  // ── Q7: Investigation Design — Altitude & Athletic Performance (21 marks, B) ─
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Altitude & Athletic Performance',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    marks: 21,
    stem: 'The human body adjusts to changes in the environment. This is known as acclimatization. Some acclimatizations may allow athletes to improve their performance. Athletes sometimes train at high altitudes before they compete at lower altitudes as they think that training at high altitude might give them a competitive advantage.',
    figImages: ['/images/papers/biology-may-2017/page-18.png'],
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to study the relationship between training at high altitude and performance in athletes. In your answer you should:\n\n- outline a suitable physical activity\n- explain the problem to be studied\n- formulate a testable hypothesis with a scientific explanation\n- identify relevant variables\n- describe how to measure and manipulate the variables in your method\n- list any safety considerations\n- outline any ethical concerns about investigations using humans.',
        marks: 21,
        ph: 'Problem: Does training at high altitude improve athletic performance at lower altitude? Hypothesis: Athletes who train at high altitude will perform better because body adapts (more hemoglobin, better O2 transport). IV: altitude of training. DV: performance (time / distance). CV: age, fitness level, duration of training. Method: groups train at different altitudes; measure performance before and after; repeat with control group. Safety: monitor vital signs; stay within safe altitude ranges. Ethics: informed consent; not exceed healthy limits...',
      },
    ],
  },

  // ── Q8: Chestnut Trees & Genetic Engineering (27 marks, Criterion A/D) ────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Genetic Engineering — American Chestnut Trees',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Pathogens & Parasites', 'Ethical Implications'],
    marks: 27,
    stem: 'The American chestnut tree is native to North America. Many animals, such as squirrels, bears and birds, relied on chestnut trees as a food source. Humans also used chestnuts as a food source. The imported trees carried a disease-causing fungus, which causes chestnut blight disease in other tree species. 98 per cent of all American chestnut trees were killed within 50 years. The Japanese chestnut trees had evolved resistance to the fungus.',
    figImages: [
      '/images/papers/biology-may-2017/page-19.png',
      '/images/papers/biology-may-2017/page-20.png',
      '/images/papers/biology-may-2017/page-21.png',
      '/images/papers/biology-may-2017/page-22.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'Using information from the video, **state** which **organism** caused American chestnut trees to die.',
        marks: 1,
        ph: 'Fungus...',
      },
      {
        label: 'b',
        text: '**Outline** the specific human action that caused the organism you named in part (a) to be introduced into North America.',
        marks: 2,
        ph: 'Introduction of Japanese/foreign/non-native/exotic trees that were carrying the blight disease/fungus/infection...',
        figImages: ['/images/papers/biology-may-2017/page-23.png'],
      },
      {
        label: 'c',
        text: 'Using scientific language, **outline** the effect of the damage on the transport processes in the diseased trees.',
        marks: 3,
        ph: 'Correct use of: xylem, phloem, translocation, transpiration. Xylem or phloem or transport tissue is damaged; water/mineral nutrients not transported (by damaged xylem); sugars/assimilates not transported (by damaged phloem)...',
      },
      {
        label: 'd',
        text: '**State** one similarity and one difference between genetic engineering and selective breeding.',
        marks: 2,
        ph: 'Similarity: both can add new traits/characteristics; both can create new combination of genes. Difference: GE produces faster results / GE can add traits from one species to a new species...',
      },
      {
        label: 'e',
        text: '**Describe** how biotechnology is used to create disease-resistant American chestnut trees.',
        marks: 4,
        ph: 'Extract resistance/target/oxo gene or desired DNA from wheat; insert gene into American chestnut using enzymes; resistance gene/DNA/genetic information is transferred to offspring...',
        figImages: ['/images/papers/biology-may-2017/page-24.png'],
      },
      {
        label: 'f',
        text: 'Using the information from this project and your wider MYP knowledge, **discuss and evaluate** the possible implications of changing the genome of American chestnut trees. In your answer you should include:\n\n- the advantages of introducing a new genetic variant\n- the disadvantages of introducing a new genetic variant\n- an environmental impact of introducing a new genetic variant\n- an economic impact of introducing a new genetic variant\n- an appraisal of the arguments you have discussed.',
        marks: 15,
        ph: 'Advantage: trees restored, food source returns, ecosystem recovered, genetic diversity. Disadvantage: unknown ecological effects, resistance gene from different species, modified genes spread to other plants. Environmental: restored ecosystem / could affect other species / genetic contamination. Economic: food source returns / cost of programme / loss of lumber. Appraisal: balance of benefits vs risks; restoration outweighs risks if carefully managed...',
      },
    ],
  },
]
