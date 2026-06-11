import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2021',
  subject: 'Biology',
  session: 'November',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ── Q1 — Flying Foxes (6 marks, Crit A) ─────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Flying Foxes — Ecology and Interdependence',
    topicCanonical: 'Interdependency',
    topicGroup: 'Organisms',
    topicsAlso: ['Food Chains & Webs'],
    marks: 6,
    stem: 'Flying foxes are a macro-bat found in the southern hemisphere. Unlike other types of bat, flying foxes rely on fruit, leaves or nectar as a food source. They live in large colonies in rural and residential areas. The food web shows feeding relationships in an ecosystem. Flying foxes are a keystone species.',
    figImages: ['/images/papers/biology-nov-2021/page-1.png', '/images/papers/biology-nov-2021/page-2.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the category that best describes a flying fox.',
        marks: 1,
        ph: 'Mammal.',
        widget: 'radio_select',
        widgetOptions: ['Mammal', 'Bird', 'Reptile', 'Insect'],
      },
      {
        label: 'b',
        text: 'Flying foxes play an important role in pollination and seed dispersal. **State** why these processes are important for plants.',
        marks: 2,
        ph: 'Pollination: pollen is transferred from one plant to another for reproduction / to increase genetic variation. Seed dispersal: seeds are transported away from the parent plant for better chance to survive / reduced competition.',
      },
      {
        label: 'c',
        text: '**Identify** a producer in the food web.',
        marks: 1,
        ph: 'Palm tree / eucalyptus / mango tree / grass. (Do not accept "tree" alone.)',
      },
      {
        label: 'd',
        text: 'Use the food web to **suggest** one advantage and one disadvantage of flying foxes to mango farmers.',
        marks: 2,
        ph: 'Advantage: flying foxes eat moth larvae which destroy the mango crop / act as pollinators. Disadvantage: flying foxes eat mango, reducing profit.',
        figImages: ['/images/papers/biology-nov-2021/page-3.png'],
      },
    ],
  },

  // ── Q2 — Cell Division (8 marks, Crit A) ─────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Cell Division — Mitosis and Meiosis',
    topicCanonical: 'Cell Division (Mitosis & Meiosis)',
    topicGroup: 'Evolution',
    marks: 8,
    figImages: ['/images/papers/biology-nov-2021/page-3.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** two reasons why cells must divide in organisms.',
        marks: 2,
        ph: 'Growth; repair or replacement of damaged cells; production of gametes (sexual reproduction); asexual reproduction.',
      },
      {
        label: 'b',
        text: '**Select** similarities and differences between mitosis and meiosis and drag the characteristics to the correct location in the Venn diagram.',
        marks: 2,
        ph: 'Mitosis only: daughter cells have 46 chromosomes. Both: begins with a single parent cell. Meiosis only: begins with two copies of each chromosome; genetically non-identical daughter cells.',
        figImages: ['/images/papers/biology-nov-2021/page-4.png'],
        widget: 'variable_classify',
        widgetItems: ['Mitosis only', 'Both', 'Meiosis only'],
        widgetOptions: ['Begins with two copies of each chromosome', 'Begins with a single parent cell', 'Daughter cells have 46 chromosomes', 'Genetically non-identical daughter cells'],
      },
      {
        label: 'c',
        text: 'Fertilization is the combination of genetic material from a sperm and an egg. **Explain** how fertilization leads to genetic variation in a population.',
        marks: 4,
        ph: 'Every individual has different genetic material; every sex cell/gamete is unique; genetic material from two parents is combined; each sex cell has equal chance of being fertilised; offspring express traits from both parents → each individual is unique.',
      },
    ],
  },

  // ── Q3 — Homeostasis and Temperature Regulation (10 marks, Crit A) ───────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Homeostasis — Temperature Regulation',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    marks: 10,
    stem: 'This model represents an example of homeostasis in the human body. Normal body temperature is 36.5°C – 37.5°C.',
    figImages: ['/images/papers/biology-nov-2021/page-5.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** two body systems that interact to monitor and maintain a constant body temperature.',
        marks: 2,
        ph: 'System to monitor temperature: nervous system. System to maintain temperature: cardio-vascular system or muscular system.',
        widget: 'inline_dropdown_select',
        widgetItems: ['System to monitor temperature', 'System to maintain temperature'],
        widgetOptions: ['Excretory system', 'Nervous system', 'Immune system', 'Reproductive system', 'Skeletal system', 'Digestive system', 'Cardio-vascular system', 'Muscular system'],
      },
      {
        label: 'b',
        text: 'Using your answer to part (a), **describe** how these two systems work together to respond to a reduction in body temperature.',
        marks: 3,
        ph: 'Nervous system detects/communicates the reduction in temperature; causes vasoconstriction / blood diverted away from extremities / hairs rise to trap warm air / shivering (involuntary muscle contractions); thereby reducing heat loss / producing heat.',
        figImages: ['/images/papers/biology-nov-2021/page-6.png'],
      },
      {
        label: 'c',
        text: 'In order for enzymes to effectively control reactions in the human body, temperature must remain constant in the range 36.5°C to 37.5°C. **Explain** why enzyme-based reactions in the body are dependent on the temperature not moving outside this range.',
        marks: 5,
        ph: 'Enzymes have an optimum temperature (36.5–37.5°C). Too cold: reactions do not occur fast enough / insufficient kinetic energy. Too hot: enzymes change shape (denature); active site changes shape; substrate can no longer fit; enzyme no longer functions. Use a term from: active site, denature, catalyse, lock and key, substrate.',
      },
    ],
  },

  // ── Q4 — Bacteria Investigation (17 marks, Crit A/C/B) ───────────────────
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Bacteria — Structure and Disinfectant Investigation',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 17,
    stem: 'Bacteria are simple, single-celled organisms that have no nucleus. A scientist investigates bacteria found on a mobile phone. The investigation uses agar plates prepared with an even layer of a known species of bacteria. After two days of growth in an incubator, different colonies of bacteria appeared showing distinct colour, form, elevation and margin characteristics.',
    figImages: ['/images/papers/biology-nov-2021/page-7.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** which of the following images shows a bacterial cell.',
        marks: 1,
        ph: 'Image C (rod-shaped bacteria with flagellum — a prokaryotic cell with no nucleus).',
        widget: 'radio_select',
        widgetOptions: ['Image A', 'Image B', 'Image C', 'Image D'],
      },
      {
        label: 'b',
        text: 'Use the chart to **select** the species of the circled bacterial colony based on its appearance.',
        marks: 1,
        ph: 'Species A.',
        figImages: ['/images/papers/biology-nov-2021/page-11.png'],
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: '**Identify** one qualitative and one quantitative piece of data that could be collected from the bacteria in the agar plate.',
        marks: 2,
        ph: 'Qualitative: colour / form / elevation / margin of colonies. Quantitative: number of colonies / measurement of size or diameter or radius.',
      },
      {
        label: 'd',
        text: 'Disinfectants can stop bacterial growth with varying levels of effectiveness. **Formulate** a research question for the disinfectant experiment shown in the video.',
        marks: 2,
        ph: 'A research question linking different disinfecting agents to an implied DV e.g. "How does the type of disinfectant affect the zone of no growth on an agar plate?"',
        figImages: ['/images/papers/biology-nov-2021/page-12.png'],
      },
      {
        label: 'e',
        text: '**State** the variables for this experiment: independent variable, dependent variable, and two control variables.',
        marks: 4,
        ph: 'IV: type of disinfectant. DV: diameter of zone of inhibition / clear zone around disk (must be measurable). CVs (any 2): species of bacteria on plate; size of disk; time of immersion of disk; concentration of disinfectant; time period of bacterial growth.',
        figImages: ['/images/papers/biology-nov-2021/page-13.png'],
      },
      {
        label: 'f',
        text: '**Suggest** a reason why water was also tested in this experiment.',
        marks: 1,
        ph: 'Water is a negative control; to show the effect is not caused by the disk or the water itself; zone is caused by the disinfectant; to measure how effective water is as a disinfectant.',
      },
      {
        label: 'g',
        text: 'Use the ruler to **measure** the zones of no growth surrounding the disks in Plate 2. Record your data in the table.',
        marks: 2,
        ph: 'Bleach: 24 mm; Ethanol: 7 mm; Hydrogen peroxide: 13 mm; Iodine: 15 mm; Water: 0 mm. (Accept ±1 mm for each measurement.)',
        figImages: ['/images/papers/biology-nov-2021/page-14.png'],
      },
      {
        label: 'h',
        text: '**Outline** the strengths and weaknesses of the experimental method.',
        marks: 4,
        ph: 'Strengths: range of disinfectants compared; water included as a control; reference to reliability linked to a named control variable. Weaknesses: only two trials; results cannot be verified with only two data points; cannot identify outliers; hydrogen peroxide data not reproducible.',
      },
    ],
  },

  // ── Q5 — Antibiotics and Resistance (15 marks, Crit A/C) ─────────────────
  {
    id: 5,
    crit: 'A',
    type: 'extended',
    topic: 'Antibiotics and Antibiotic Resistance',
    topicCanonical: 'Natural Selection',
    topicGroup: 'Evolution',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 15,
    stem: 'Antibiotics are important in the treatment of bacterial infections. They either prevent growth or kill bacteria enabling an organism to fight infection. Some bacteria are no longer killed by certain antibiotics — these are said to be resistant. Responsible use involves health professionals giving patients an antibiotic to which the bacteria are sensitive at a concentration strong enough to kill the bacteria.',
    figImages: ['/images/papers/biology-nov-2021/page-15.png'],
    tasks: [
      {
        label: 'a',
        text: 'The diagram shows how bacteria can evolve to become resistant. The labels for stages 2 and 5 are missing. **Outline** what is happening to the bacteria at each stage.',
        marks: 2,
        ph: 'Stage 2: bacteria sensitive to antibiotic are killed / only resistant individuals survive. Stage 5: no bacteria are killed (all are resistant); population of resistant bacteria increases; antibiotic has no effect.',
      },
      {
        label: 'b',
        text: '*E. coli* samples were taken from infected patients and tested for resistance. **Plot** the data from 2010 to 2014 to complete the graph.',
        marks: 2,
        ph: 'Data points: 2010=6.0%, 2011=5.0%, 2012=6.5%, 2013=8.1%, 2014=8.9%. Two data points correctly plotted = 1 mark; all correct (±0.1) = 2 marks.',
        figImages: ['/images/papers/biology-nov-2021/page-16.png'],
      },
      {
        label: 'c',
        text: 'The effect of several antibiotics was tested on *E. coli* bacteria. **Select** the antibiotic that is most effective and explain your answer with a scientific reason.',
        marks: 3,
        ph: 'Trimethoprim — it has the largest and clearest zone of no growth. Scientific reason: there are no resistant bacteria so the zone is clear; trimethoprim is effective at a lower concentration than the other antibiotics.',
        figImages: ['/images/papers/biology-nov-2021/page-17.png'],
        widget: 'radio_select',
        widgetOptions: ['Amoxicillin', 'Ampicillin', 'Gentamicin', 'Tetracycline', 'Trimethoprim'],
      },
      {
        label: 'd',
        text: 'A colorimeter measures the percentage of light absorbed by a liquid. **State** the relationship between the population of bacteria and the percentage absorption of light.',
        marks: 2,
        ph: 'As the population of bacteria increases, the percentage absorption of light increases. Positive / proportional / linear relationship.',
        figImages: ['/images/papers/biology-nov-2021/page-18.png', '/images/papers/biology-nov-2021/page-20.png'],
      },
      {
        label: 'e',
        text: 'The graph below shows the population growth of bacteria over time in a test tube with nutrient liquid. Use the graph to **explain** the change in bacteria population during each stage.',
        marks: 6,
        ph: 'Stage 1: slow growth; plentiful resources; few bacteria to reproduce. Stage 2: rapid/steady population growth; plentiful resources; many bacteria to reproduce. Stage 3: no net population growth; as many bacteria dying as reproducing; limiting factors present.',
        figImages: ['/images/papers/biology-nov-2021/page-19.png'],
      },
    ],
  },

  // ── Q6 — Design Investigation: Salt and Bacteria (17 marks, Crit B) ───────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Design Investigation — Salt Solution and Bacterial Growth',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 17,
    stem: 'All food has a small number of bacteria growing on it. When in small numbers, these bacteria are harmless; but if they multiply, the food spoils and can become harmful to eat. Preservatives are chemicals used to slow or prevent the growth of bacteria in food. Salt has been used as a method of food preservation for millennia. You are provided with standard laboratory equipment, a colorimeter, and liquids: a liquid containing bacteria, nutrient liquid, salt solutions with concentrations from 0% to 10%.',
    figImages: ['/images/papers/biology-nov-2021/page-20.png', '/images/papers/biology-nov-2021/page-21.png'],
    tasks: [
      {
        label: '',
        text: '**Design** an investigation into the effect of a salt solution on bacterial growth. In your answer, identify the independent and dependent variables; include two control variables; formulate a testable hypothesis with a scientific explanation; describe how to manipulate, measure or monitor all variables; describe the method to collect sufficient data; list any safety considerations.',
        marks: 17,
        ph: 'IV: concentration of salt solution (0–10%). DV: % absorption (measured with colorimeter). CVs: temperature, volume of solution, type of bacteria, time period. Hypothesis: higher salt concentration → less bacterial growth → lower % absorption (due to osmosis/dehydration of bacteria). Method: set up test tubes with same volume of bacteria + nutrient liquid + different salt concentrations, measure % absorption at start and after a fixed time, repeat at least 3 times for at least 5 concentrations including 0%. Safety: wash hands; handle bacteria safely; dispose of bacteria safely.',
      },
    ],
  },

  // ── Q7 — Cardiovascular Disease (12 marks, Crit D) ───────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Cardiovascular Disease — Atherosclerosis and Interventions',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Circulation'],
    marks: 12,
    stem: 'Changes in human lifestyles, in particular diet and activity, have led to increased levels of cardiovascular diseases. Cholesterol is a substance found in all body cells and has an important function in cell membranes and hormones. Too much cholesterol in the body can lead to atherosclerosis. Atherosclerosis is the development of plaques in blood vessels that produce cholesterol deposits.',
    figImages: ['/images/papers/biology-nov-2021/page-22.png'],
    tasks: [
      {
        label: 'a',
        text: '**Suggest** how atherosclerosis may lead to an increased chance of coronary heart disease.',
        marks: 3,
        ph: 'Coronary artery narrows / is obstructed by plaque; blood flow is restricted / heart must pump harder; heart muscle receives less oxygen or nutrients; this can lead to a heart attack.',
      },
      {
        label: 'b',
        text: '**Suggest** how statins may reduce cholesterol levels.',
        marks: 3,
        ph: 'Statins block the enzyme responsible for cholesterol production in the liver; so less cholesterol is produced and cholesterol levels decrease. Accept correct use of "active site" to describe the mechanism.',
        figImages: ['/images/papers/biology-nov-2021/page-23.png'],
      },
      {
        label: 'c',
        text: '**Describe** how angioplasty and a stent lead to a reduction in blood pressure.',
        marks: 2,
        ph: 'A stent is inserted and inflated in the artery; this widens/opens the artery so blood can flow more easily / resistance is reduced.',
      },
      {
        label: 'd',
        text: '**Suggest** one advantage and one disadvantage for each of the interventions described above (angioplasty and statins).',
        marks: 4,
        ph: 'Angioplasty: advantage (long-term effectiveness; minimally invasive; short recovery). Disadvantage (risk of complications such as blood clot or infection; must be done near heart). Statins: advantage (no surgery needed; lowers cholesterol; prevents other diseases). Disadvantage (must be taken long-term; possible side effects such as headache; may reduce vitamin D/hormone production).',
        figImages: ['/images/papers/biology-nov-2021/page-24.png'],
      },
    ],
  },

  // ── Q8 — Evaluate Lifestyle Choices and Cardiovascular Disease (15 marks, D)
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Evaluating Lifestyle Choices and Cardiovascular Disease',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Circulation'],
    marks: 15,
    stem: 'A healthy lifestyle is always recommended to prevent and treat cardiovascular diseases caused by atherosclerosis. The interactive graphic gives some information about aspects of a healthy lifestyle: not smoking, eating healthy foods, taking regular exercise, maintaining a healthy weight, monitoring blood pressure and cholesterol, minimising stress.',
    figImages: ['/images/papers/biology-nov-2021/page-24.png', '/images/papers/biology-nov-2021/page-25.png'],
    tasks: [
      {
        label: '',
        text: 'Using information from the infographic and knowledge from your wider MYP studies, **discuss and evaluate** the impact of lifestyle choices. In your answer, include: how an individual\'s quality of life may be impacted by cardiovascular disease; economic advantages and disadvantages of adopting a healthy lifestyle; a justification of whether good health is the responsibility of the individual; a justification of whether good health is the responsibility of the society; a concluding statement.',
        marks: 15,
        ph: 'Quality of life: cardiovascular disease reduces quality of life (reduced mobility, pain, fatigue, mental health impact). Economic: healthy lifestyle reduces healthcare costs (advantage), but may be expensive to eat healthily or join gym (disadvantage). Individual responsibility: each person can make choices (not smoking, exercise) to reduce risk. Society responsibility: governments should provide affordable healthy food, public exercise spaces, education. Conclusion: both individuals and society share responsibility — justified with examples.',
      },
    ],
  },
]
