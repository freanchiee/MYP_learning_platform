import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2022',
  subject: 'Biology',
  session: 'May',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Cells & Organisation',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    topicsAlso: ['Tissues, Organs & Systems'],
    marks: 7,
    stem: 'The questions below are about cell structure and organisation. The diagram shows a classification key for identifying cell types and a labelled animal cell with two organelles marked A and B.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="360" fill="#ffffff"/><text x="320" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Classification key for cell types</text><g font-size="11" fill="#1e293b"><text x="20" y="56">1. Does the cell have a true nucleus?</text><line x1="40" y1="64" x2="40" y2="92" stroke="#94a3ad"/><text x="52" y="80">No  →  Bacterial cell</text><line x1="40" y1="92" x2="40" y2="118" stroke="#94a3ad"/><text x="52" y="108">Yes →  go to 2</text><text x="20" y="142">2. Does the cell have a large permanent vacuole and a cell wall?</text><line x1="40" y1="150" x2="40" y2="178" stroke="#94a3ad"/><text x="52" y="166">Yes →  Plant cell</text><line x1="40" y1="178" x2="40" y2="204" stroke="#94a3ad"/><text x="52" y="194">No  →  Animal cell</text></g><g><circle cx="470" cy="210" r="100" fill="#fde2c8" stroke="#e8590c" stroke-width="2"/><circle cx="470" cy="210" r="34" fill="#b197d6" stroke="#7048a3" stroke-width="2"/><circle cx="455" cy="200" r="9" fill="#7048a3"/><ellipse cx="430" cy="260" rx="14" ry="7" fill="#f08c00"/><ellipse cx="510" cy="175" rx="14" ry="7" fill="#f08c00"/><ellipse cx="430" cy="170" rx="13" ry="6" fill="#f08c00"/></g><text x="470" y="130" font-size="10" fill="#475569" text-anchor="middle">Animal cell</text><line x1="375" y1="248" x2="420" y2="240" stroke="#1e293b"/><text x="335" y="252" font-size="12" font-weight="700" fill="#1e293b" text-anchor="end">A</text><text x="335" y="266" font-size="9" fill="#64748b" text-anchor="end">(site of metabolic reactions)</text><line x1="565" y1="210" x2="568" y2="210" stroke="#1e293b"/><line x1="565" y1="210" x2="600" y2="210" stroke="#1e293b"/><text x="612" y="206" font-size="12" font-weight="700" fill="#1e293b">B</text><text x="612" y="220" font-size="9" fill="#64748b">(outer boundary)</text></svg>',
      },
      caption: 'A dichotomous classification key for cells, with an animal cell showing organelle A (cytoplasm, the site of metabolic reactions) and organelle B (the cell membrane).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the correct cell type for each branch of the classification key shown.',
        marks: 1,
        ph: 'Use nucleus and vacuole branches to classify plant, animal, bacterial cells.',
      },
      {
        label: 'b',
        text: '**Suggest** an alternative question to tell the difference between a plant cell and an animal cell.',
        marks: 1,
        ph: 'Think of a yes/no question using a unique organelle.',
      },
      {
        label: 'c',
        text: '**State** the name of the organelle labelled A in the diagram.',
        marks: 1,
        ph: 'Organelle A is the site of all metabolic reactions.',
      },
      {
        label: 'd',
        text: '**State** the function of the organelle labelled B in the diagram.',
        marks: 1,
        ph: 'Think about what controls entry and exit of substances.',
      },
      {
        label: 'e',
        text: '**Outline** the relationship between cells and tissues.',
        marks: 3,
        ph: 'Describe what tissues are made of and how cells work together.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 660 120" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="660" height="120" fill="#ffffff"/><text x="330" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Levels of organisation in the human body</text><g font-size="11" font-weight="700" fill="#0b7285"><rect x="14" y="46" width="92" height="38" rx="6" fill="#e6f4f6" stroke="#0b7285"/><text x="60" y="69" text-anchor="middle">cell</text><rect x="148" y="46" width="92" height="38" rx="6" fill="#e6f4f6" stroke="#0b7285"/><text x="194" y="69" text-anchor="middle">tissue</text><rect x="282" y="46" width="92" height="38" rx="6" fill="#e6f4f6" stroke="#0b7285"/><text x="328" y="69" text-anchor="middle">organ</text><rect x="416" y="46" width="110" height="38" rx="6" fill="#e6f4f6" stroke="#0b7285"/><text x="471" y="69" text-anchor="middle">body system</text><rect x="568" y="46" width="78" height="38" rx="6" fill="#e6f4f6" stroke="#0b7285"/><text x="607" y="69" text-anchor="middle">organism</text></g><g stroke="#9c36b5" stroke-width="3" marker-end="url(#ar)"><line x1="110" y1="65" x2="142" y2="65"/><line x1="244" y1="65" x2="276" y2="65"/><line x1="378" y1="65" x2="410" y2="65"/><line x1="530" y1="65" x2="562" y2="65"/></g><defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#9c36b5"/></marker></defs><text x="330" y="108" font-size="9" fill="#94a3ad" text-anchor="middle">A group of similar cells working together forms a tissue.</text></svg>',
          },
          caption: 'The body is organised from cells → tissues → organs → body systems → organism.',
        },
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Body Systems & Digestion',
    topicCanonical: 'Digestion',
    topicGroup: 'Metabolism',
    topicsAlso: ['Tissues, Organs & Systems'],
    marks: 11,
    stem: 'The questions below are about body systems and the digestive system. The interactive diagram lets you click numbered organs to reveal which body system they belong to.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Body systems — click a number to identify the system',
        center: { label: 'Human body', detail: 'made of several body systems working together', color: '#1e293b' },
        nodes: [
          { id: '1', label: '1 — Nervous', color: '#1971c2', detail: 'Brain, spinal cord and nerves; coordinates responses by carrying electrical impulses.' },
          { id: '2', label: '2 — Reproductive', color: '#c2255c', detail: 'Produces sex cells (gametes) and allows the species to reproduce.' },
          { id: 'd', label: 'Digestive', color: '#2f9e44', detail: 'Breaks food down into small soluble molecules that can be absorbed into the blood.' },
          { id: 'c', label: 'Circulatory', color: '#e8590c', detail: 'Heart and blood vessels transport nutrients, oxygen and waste around the body.' },
        ],
      },
      caption: 'Numbered organ groups in the body each belong to a body system; system 1 is the nervous system and system 2 is the reproductive system.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of each body system as you click on the numbers in the diagram.',
        marks: 2,
        ph: 'Identify the nervous and reproductive systems from the diagrams.',
      },
      {
        label: 'b',
        text: '**Select** the term for all the chemical processes occurring in cells.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Circulation', 'Digestion', 'Enzymes', 'Metabolism'],
        ph: 'All chemical reactions in a living organism.',
      },
      {
        label: 'c',
        text: '**State** two advantages of breaking food into smaller pieces during mechanical digestion.',
        marks: 3,
        ph: 'Think about surface area and the role of enzymes.',
      },
      {
        label: 'd',
        text: '**State** what is produced when carbohydrates are chemically digested.',
        marks: 1,
        ph: 'Carbohydrates are broken down into smaller molecules — sugars.',
      },
      {
        label: 'e',
        text: '**Explain** how the structure of the small intestine is adapted to absorb nutrients into the blood. You should use scientific language in your answer.',
        marks: 4,
        ph: 'Describe villi features and link each to efficient absorption.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="300" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Lining of the small intestine (villi)</text><rect x="40" y="200" width="480" height="44" fill="#f7c9b0"/><g fill="#e8907a" stroke="#c05a44" stroke-width="1.5"><path d="M60,200 Q70,130 80,200 Z"/><path d="M100,200 Q110,120 120,200 Z"/><path d="M140,200 Q150,128 160,200 Z"/><path d="M180,200 Q190,118 200,200 Z"/><path d="M220,200 Q230,126 240,200 Z"/><path d="M260,200 Q270,120 280,200 Z"/><path d="M300,200 Q310,128 320,200 Z"/><path d="M340,200 Q350,118 360,200 Z"/><path d="M380,200 Q390,126 400,200 Z"/><path d="M420,200 Q430,122 440,200 Z"/><path d="M460,200 Q470,128 480,200 Z"/></g><circle cx="190" cy="150" r="3" fill="#c2255c"/><line x1="190" y1="118" x2="190" y2="195" stroke="#c2255c" stroke-width="1.2" stroke-dasharray="2 2"/><text x="200" y="150" font-size="9" fill="#c2255c">capillary network (blood supply)</text><text x="50" y="280" font-size="11" fill="#475569">Each villus is one cell thick (short diffusion distance), and there</text><text x="50" y="294" font-size="11" fill="#475569">are millions of them — giving a very large surface area for absorption.</text></svg>',
          },
          caption: 'Villi give the small intestine a huge surface area, a thin (one-cell) wall and a rich blood supply for efficient nutrient absorption.',
        },
      },
    ],
  },
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Eutrophication',
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 10,
    stem: 'Eutrophication is a natural process that occurs in bodies of water over hundreds of years. Excess nutrients such as nitrogen, phosphorus and potassium slowly wash from the soil into bodies of water, causing increased growth of algae and aquatic plants. Eutrophication causes lakes to become shallower as sediment builds up.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="320" fill="#ffffff"/><text x="320" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Natural eutrophication of a lake over hundreds of years</text><rect x="20" y="44" width="600" height="40" fill="#dff1d6"/><text x="30" y="69" font-size="11" fill="#3a7a2a">soil → nutrients (nitrogen, phosphorus, potassium) wash in →</text><g><rect x="20" y="84" width="600" height="120" fill="#9bd0e6"/><rect x="20" y="184" width="600" height="60" fill="#c9a36b"/><text x="320" y="120" font-size="11" font-weight="700" fill="#1f6f8f" text-anchor="middle">water — algae &amp; aquatic plants grow faster</text><g fill="#3f9e44" opacity="0.7"><circle cx="120" cy="100" r="7"/><circle cx="150" cy="96" r="6"/><circle cx="320" cy="98" r="7"/><circle cx="480" cy="102" r="6"/><circle cx="510" cy="96" r="7"/></g><text x="320" y="218" font-size="11" font-weight="700" fill="#7a5a2a" text-anchor="middle">sediment builds up → lake becomes shallower</text></g><text x="30" y="278" font-size="10" fill="#475569">Stage 1: nutrients enter  →  Stage 2: algae &amp; plants bloom  →  Stage 3: dead matter sinks</text><text x="30" y="296" font-size="10" fill="#475569">and forms sediment, so the lake slowly fills in and becomes shallower.</text></svg>',
      },
      caption: 'Natural eutrophication: nutrients wash in from soil, algae and plants grow, and sediment slowly fills the lake over hundreds of years.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** one source of nutrients that causes natural eutrophication.',
        marks: 1,
        ph: 'A natural source that releases nutrients into water — not from human activity.',
      },
      {
        label: 'b',
        text: '**Suggest** one direct source and one indirect source of nutrients that contribute to eutrophication caused by human actions.',
        marks: 2,
        ph: 'Direct = enters water straight; indirect = travels via runoff or drainage.',
        artefact: {
          component: 'NetworkGraph',
          data: {
            title: 'Human sources of nutrients entering the lake',
            center: { label: 'Lake (excess nitrogen & phosphorus)', detail: 'nutrients build up and cause an algal bloom', color: '#1971c2' },
            nodes: [
              { id: 'sewage', label: 'Sewage treatment plant', color: '#c2255c', detail: 'Direct source — treated waste water is released straight into the lake.' },
              { id: 'fishfarm', label: 'Fish farm', color: '#0b7285', detail: 'Direct source — fish waste and uneaten feed enter the water directly.' },
              { id: 'farming', label: 'Farming (fertiliser)', color: '#2f9e44', detail: 'Indirect source — rain washes fertiliser off fields as runoff into the lake.' },
              { id: 'residential', label: 'Residential runoff', color: '#f08c00', detail: 'Indirect source — garden and street runoff drains into the lake after rain.' },
            ],
          },
          caption: 'Direct sources (sewage plant, fish farm) release nutrients straight into the water; indirect sources (farming, residential runoff) reach it via rain and drainage.',
        },
      },
      {
        label: 'c',
        text: '**Describe** how eutrophication caused by human actions can lead to an algal bloom.',
        marks: 3,
        ph: 'Follow the nutrient chain from water entry to algae population boom.',
      },
      {
        label: 'd',
        text: '**Explain** how a large algal bloom could cause a decrease in biomass in the ecosystem.',
        marks: 4,
        ph: 'Link algae → sunlight blocked → plants die → bacteria → oxygen depletion → organisms die.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="240" fill="#ffffff"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">From algal bloom to loss of biomass</text><defs><marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#475569"/></marker></defs><g font-size="10.5" fill="#1e293b"><rect x="20" y="40" width="150" height="40" rx="6" fill="#dff1d6" stroke="#2f9e44"/><text x="95" y="58" text-anchor="middle">Algal bloom covers</text><text x="95" y="72" text-anchor="middle">the surface</text><rect x="225" y="40" width="150" height="40" rx="6" fill="#fde2c8" stroke="#e8590c"/><text x="300" y="58" text-anchor="middle">Sunlight blocked,</text><text x="300" y="72" text-anchor="middle">water plants die</text><rect x="430" y="40" width="150" height="40" rx="6" fill="#fde2c8" stroke="#e8590c"/><text x="505" y="58" text-anchor="middle">Bacteria decompose</text><text x="505" y="72" text-anchor="middle">the dead matter</text><rect x="225" y="135" width="150" height="40" rx="6" fill="#f8d7da" stroke="#c2255c"/><text x="300" y="153" text-anchor="middle">Bacteria use up the</text><text x="300" y="167" text-anchor="middle">dissolved oxygen</text><rect x="20" y="135" width="150" height="40" rx="6" fill="#f8d7da" stroke="#c2255c"/><text x="95" y="153" text-anchor="middle">Fish and animals die,</text><text x="95" y="167" text-anchor="middle">biomass decreases</text></g><g stroke="#475569" stroke-width="2" fill="none"><line x1="170" y1="60" x2="222" y2="60" marker-end="url(#a3)"/><line x1="375" y1="60" x2="427" y2="60" marker-end="url(#a3)"/><path d="M505,80 L505,155 L378,155" marker-end="url(#a3)"/><line x1="222" y1="155" x2="173" y2="155" marker-end="url(#a3)"/></g><text x="300" y="215" font-size="9" fill="#94a3ad" text-anchor="middle">Decay uses oxygen faster than it is replaced, so organisms suffocate and total biomass falls.</text></svg>',
          },
          caption: 'A bloom blocks light, plants die, bacteria decompose them and use up dissolved oxygen, so fish and animals suffocate and biomass decreases.',
        },
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Transpiration Investigation',
    topicCanonical: 'Transpiration & Translocation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Gas Exchange'],
    marks: 17,
    stem: 'Transpiration is the evaporation and diffusion of water from plants. Water is transported from the roots to the leaves through the xylem. The water exits the plant through the stomata in the leaves. Oxygen and carbon dioxide also diffuse in and out of the plant through the stomata. A class of MYP students set up the simple experiment shown: they placed plant stems in seven identical beakers, each containing water with a different colour of food colouring, and measured the rate of transpiration.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="300" fill="#ffffff"/><text x="320" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Group 1 set-up: plant stems in seven coloured-water beakers</text><g><g transform="translate(40,140)"><rect x="0" y="40" width="48" height="60" rx="4" fill="#f4cccc" opacity="0.8" stroke="#b06"/><path d="M24,40 L24,0 M24,16 L14,6 M24,20 L34,8 M24,30 L16,22" stroke="#2f9e44" stroke-width="2" fill="none"/></g><g transform="translate(120,140)"><rect x="0" y="40" width="48" height="60" rx="4" fill="#fde2c8" stroke="#e8590c"/><path d="M24,40 L24,0 M24,16 L14,6 M24,20 L34,8 M24,30 L16,22" stroke="#2f9e44" stroke-width="2" fill="none"/></g><g transform="translate(200,140)"><rect x="0" y="40" width="48" height="60" rx="4" fill="#fff3bf" stroke="#f08c00"/><path d="M24,40 L24,0 M24,16 L14,6 M24,20 L34,8 M24,30 L16,22" stroke="#2f9e44" stroke-width="2" fill="none"/></g><g transform="translate(280,140)"><rect x="0" y="40" width="48" height="60" rx="4" fill="#d3f9d8" stroke="#2f9e44"/><path d="M24,40 L24,0 M24,16 L14,6 M24,20 L34,8 M24,30 L16,22" stroke="#2f9e44" stroke-width="2" fill="none"/></g><g transform="translate(360,140)"><rect x="0" y="40" width="48" height="60" rx="4" fill="#d0ebff" stroke="#1971c2"/><path d="M24,40 L24,0 M24,16 L14,6 M24,20 L34,8 M24,30 L16,22" stroke="#2f9e44" stroke-width="2" fill="none"/></g><g transform="translate(440,140)"><rect x="0" y="40" width="48" height="60" rx="4" fill="#dbe4ff" stroke="#3b5bdb"/><path d="M24,40 L24,0 M24,16 L14,6 M24,20 L34,8 M24,30 L16,22" stroke="#2f9e44" stroke-width="2" fill="none"/></g><g transform="translate(520,140)"><rect x="0" y="40" width="48" height="60" rx="4" fill="#eebefa" stroke="#9c36b5"/><path d="M24,40 L24,0 M24,16 L14,6 M24,20 L34,8 M24,30 L16,22" stroke="#2f9e44" stroke-width="2" fill="none"/></g></g><g font-size="9" fill="#475569" text-anchor="middle"><text x="64" y="256">red</text><text x="144" y="256">orange</text><text x="224" y="256">yellow</text><text x="304" y="256">green</text><text x="384" y="256">blue</text><text x="464" y="256">indigo</text><text x="544" y="256">violet</text></g><line x1="600" y1="120" x2="600" y2="240" stroke="#94a3ad" stroke-width="6"/><text x="612" y="180" font-size="9" fill="#64748b" transform="rotate(90,612,180)">thermometer</text><text x="320" y="284" font-size="10" fill="#94a3ad" text-anchor="middle">Only the colour of the water differed between the seven identical beakers.</text></svg>',
      },
      caption: 'Group 1 placed identical plant stems in seven beakers, changing only the food-colouring colour of the water, and measured the rate of transpiration.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the independent variable in this investigation.',
        marks: 1,
        ph: 'What did students change between the beakers?',
      },
      {
        label: 'b',
        text: '**Outline** the measurements needed to calculate the rate of transpiration in cubic centimetres per hour (cm³ h⁻¹).',
        marks: 3,
        ph: 'Volume of water, initial and final volumes, and time duration.',
      },
      {
        label: 'c',
        text: '**State** two control variables for this investigation.',
        marks: 2,
        ph: 'Variables kept the same — temperature, plant species, stem dimensions, light.',
      },
      {
        label: 'd',
        text: '**State** two improvements that group 2 made to the research question. **Justify** how each would improve the investigation.',
        marks: 4,
        ph: 'Identify the two improvements and explain why each makes the investigation stronger.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['', 'Group 1 research question', 'Group 2 research question'],
            rows: [
              ['Research question', 'The relationship between coloured solutions and the rate of transpiration.', 'How does changing the colour of water by adding 7 different food colourings affect the rate of transpiration in plant stems?'],
            ],
          },
          caption: 'The two groups wrote the research question differently. Compare them to identify the improvements group 2 made.',
        },
      },
      {
        label: 'e',
        text: '**State** and **justify** two reasons why the results from group 2 are more valid than the results from group 1.',
        marks: 4,
        ph: 'Link two significant figures, control group, or stated concentrations to validity.',
        artefact: {
          component: 'DataTableInteractive',
          data: {
            title: 'Transpiration rate by water colour — group 1 vs group 2',
            headers: ['Colour of water', 'Group 1 — rate / cm³ h⁻¹', 'Group 2 — rate / cm³ h⁻¹'],
            rows: [
              ['No dye (control)', '—', '6.0'],
              ['Red', '7', '5.8'],
              ['Orange', '6', '6.0'],
              ['Yellow', '6', '5.9'],
              ['Green', '7', '6.3'],
              ['Blue', '7', '6.0'],
              ['Indigo', '6', '6.0'],
              ['Violet', '6', '6.1'],
            ],
            caption: 'Pin the rows you compare. Group 2 included a no-dye control and recorded its rates to two significant figures.',
          },
          caption: 'Results from the two groups. Group 2 included a no-dye control and recorded its rates to two significant figures.',
        },
      },
      {
        label: 'f',
        text: '**Suggest** why the two groups should not combine their results.',
        marks: 1,
        ph: 'Think about differences in method, precision, or research question.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['', 'Group 1', 'Group 2'],
            rows: [
              ['Control (no dye)', 'not included', 'included'],
              ['Precision of rate', 'whole numbers (e.g. 7)', 'to 1 decimal place (e.g. 5.8)'],
              ['Research question', 'vague ("coloured solutions")', 'specific (7 colourings named)'],
            ],
          },
          caption: 'The two groups used different methods and precision, so their results are not directly comparable.',
        },
      },
      {
        label: 'g',
        text: '**Suggest** and **justify** why sealing the beakers is an improvement to the method.',
        marks: 2,
        ph: 'How does sealing prevent a confounding factor affecting the dependent variable?',
      },
    ],
  },
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Potometer Design Investigation',
    topicCanonical: 'Transpiration & Translocation',
    topicGroup: 'Metabolism',
    marks: 17,
    stem: 'Students researched alternative methods to investigate the transport of water in plants. They read about a piece of equipment called a potometer and found the following animation showing how a potometer works. You are provided with a potometer, a multi-speed fan and standard laboratory equipment.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="320" fill="#ffffff"/><text x="320" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">A simple potometer with a multi-speed fan</text><g><g transform="translate(70,60)"><path d="M40,90 L40,30 M40,52 L22,38 M40,52 L58,38 M40,68 L26,58 M40,68 L54,58" stroke="#2f9e44" stroke-width="3" fill="none"/><circle cx="22" cy="36" r="9" fill="#69db7c"/><circle cx="58" cy="36" r="9" fill="#69db7c"/><circle cx="40" cy="24" r="9" fill="#69db7c"/></g><rect x="96" y="150" width="36" height="50" rx="4" fill="#cfe9f5" stroke="#1971c2"/><text x="114" y="178" font-size="8" fill="#1971c2" text-anchor="middle">leafy</text><text x="114" y="188" font-size="8" fill="#1971c2" text-anchor="middle">shoot</text><line x1="132" y1="175" x2="360" y2="240" stroke="#1971c2" stroke-width="6"/><rect x="350" y="232" width="120" height="16" rx="3" fill="#e7f5ff" stroke="#1971c2"/><circle cx="380" cy="240" r="5" fill="#1c7ed6"/><text x="412" y="225" font-size="9" fill="#64748b" text-anchor="middle">air bubble moves along</text><text x="412" y="266" font-size="9" fill="#64748b" text-anchor="middle">scale (graduated tube)</text><line x1="350" y1="248" x2="470" y2="248" stroke="#94a3ad"/><g stroke="#94a3ad"><line x1="360" y1="248" x2="360" y2="254"/><line x1="385" y1="248" x2="385" y2="254"/><line x1="410" y1="248" x2="410" y2="254"/><line x1="435" y1="248" x2="435" y2="254"/><line x1="460" y1="248" x2="460" y2="254"/></g></g><g transform="translate(540,90)"><circle cx="40" cy="60" r="46" fill="#f1f3f5" stroke="#868e96"/><g fill="#adb5bd"><path d="M40,60 L40,18 Q54,30 40,60 Z"/><path d="M40,60 L82,60 Q70,74 40,60 Z"/><path d="M40,60 L40,102 Q26,90 40,60 Z"/><path d="M40,60 L-2,60 Q10,46 40,60 Z"/></g><circle cx="40" cy="60" r="6" fill="#495057"/></g><text x="580" y="216" font-size="9" fill="#64748b" text-anchor="middle">multi-speed fan</text><text x="320" y="300" font-size="10" fill="#94a3ad" text-anchor="middle">As the shoot transpires, water is drawn up and the air bubble moves along the scale — the distance moved per minute measures the rate.</text></svg>',
      },
      caption: 'A potometer: as the leafy shoot transpires it draws water up the tube, so the air bubble moves along the graduated scale. The fan can be set to different speeds to change air movement.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation into the effect of air movement on the rate of transpiration. In your design, you should:\n- identify the independent, dependent and two control variables\n- formulate a testable hypothesis with a scientific explanation\n- describe how to manipulate, measure or monitor all of the variables\n- describe a method to collect sufficient data\n- justify one calculation needed to transform the data collected\n- state how you will make your method safe',
        marks: 17,
        ph: 'Plan a full investigation: variables, hypothesis, method, data collection, calculation, safety.',
      },
    ],
  },
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Stomata Investigation',
    topicCanonical: 'Transpiration & Translocation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Gas Exchange'],
    marks: 14,
    stem: 'Having learned that stomata are important in both transpiration and gas exchange, students decided to examine the surfaces of leaves. To compare the leaves, they decided to estimate the number of stomata per square millimetre of leaf. This is called the stomatal density. They randomly selected 10 leaves from each plant, painted the lower surface with clear nail varnish, peeled off the dried layer, viewed it under a microscope in a 0.3 mm × 0.3 mm field of view and counted the stomata.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Plant', 'Stomata per mm² — upper surface', 'Stomata per mm² — lower surface', 'Habitat'],
        rows: [
          ['Sunflower', '120', '175', 'Grows in temperate climates (on land)'],
          ['Water lily', '460', '0', 'Floats on the surface of ponds and slow streams'],
          ['Pondweed', '0', '0', 'Grows fully underwater (submerged)'],
        ],
      },
      caption: 'Stomatal density data for three plant species, with the habitat each is normally found in. Use this table for parts (e)–(g).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** why the sample of 10 leaves from each plant was randomly selected.',
        marks: 2,
        ph: 'Two reasons: reduce bias, allow calculation of averages, representative sample.',
      },
      {
        label: 'b',
        text: '**Suggest** a reason why a leaf might be rejected from the random sample.',
        marks: 1,
        ph: 'A leaf that is not representative — damaged, dead, diseased.',
      },
      {
        label: 'c',
        text: '**Determine** the number of stomata present in maize leaf sample 10 and add your value to the table.',
        marks: 1,
        widget: 'fill_blank',
        widgetOptions: ['9'],
        ph: 'Count the stomata visible in the 0.3 × 0.3 mm field of view for sample 10.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="300" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Maize leaf sample 10 — field of view (0.3 mm × 0.3 mm)</text><rect x="40" y="44" width="220" height="220" fill="#e9f7b0" stroke="#7a9b1f" stroke-width="2"/><g fill="#3a6b0f"><ellipse cx="80" cy="84" rx="9" ry="4"/><ellipse cx="150" cy="70" rx="9" ry="4"/><ellipse cx="210" cy="96" rx="9" ry="4"/><ellipse cx="110" cy="140" rx="9" ry="4"/><ellipse cx="180" cy="150" rx="9" ry="4"/><ellipse cx="70" cy="190" rx="9" ry="4"/><ellipse cx="140" cy="210" rx="9" ry="4"/><ellipse cx="220" cy="200" rx="9" ry="4"/><ellipse cx="190" cy="240" rx="9" ry="4"/></g><line x1="40" y1="280" x2="260" y2="280" stroke="#475569"/><line x1="40" y1="276" x2="40" y2="284" stroke="#475569"/><line x1="260" y1="276" x2="260" y2="284" stroke="#475569"/><text x="150" y="296" font-size="10" fill="#475569" text-anchor="middle">0.3 mm</text><text x="300" y="150" font-size="11" fill="#475569">Each green oval is one stoma.</text><text x="300" y="170" font-size="11" fill="#475569">Count them to find the value for</text><text x="300" y="190" font-size="11" fill="#475569">maize leaf sample 10.</text></svg>',
          },
          caption: 'The 0.3 mm × 0.3 mm microscope field of view for maize leaf sample 10. Count the stomata (green ovals) and add your value to the table.',
        },
      },
      {
        label: 'd',
        text: '**Calculate** the average stomatal density of the lower surface of maize leaves. Give your answer to an appropriate degree of accuracy.',
        marks: 3,
        ph: 'Average count = 8; use the density formula: stomata ÷ area (0.09 mm²) ≈ 89 mm⁻².',
        artefact: {
          component: 'DataTableInteractive',
          data: {
            title: 'Stomata counted on the lower surface of 10 maize leaf samples',
            headers: ['Maize leaf sample', 'Number of stomata visible (0.3 mm × 0.3 mm)'],
            rows: [
              ['1', '7'],
              ['2', '9'],
              ['3', '8'],
              ['4', '8'],
              ['5', '10'],
              ['6', '5'],
              ['7', '10'],
              ['8', '6'],
              ['9', '8'],
              ['10', '9'],
            ],
            caption: 'Mean count = 8 stomata per 0.3 mm × 0.3 mm (0.09 mm²) field of view. Divide by the area to get the stomatal density.',
          },
          caption: 'Stomata counts for all 10 maize samples. The mean is 8 stomata in a 0.09 mm² field of view.',
        },
      },
      {
        label: 'e',
        text: '**Select** the name given to the type of data shown by the pictures and habitat descriptions.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Continuous', 'Graphical', 'Qualitative', 'Quantitative'],
        ph: 'The pictures and habitat descriptions are descriptive, not numerical.',
      },
      {
        label: 'f',
        text: '**Suggest** why pondweed does not have stomata.',
        marks: 1,
        ph: 'Pondweed is submerged — no need for stomata since gas exchange happens differently.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="220" fill="#ffffff"/><text x="260" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pondweed grows fully submerged</text><rect x="20" y="40" width="480" height="150" fill="#cfe9f5"/><line x1="20" y1="40" x2="500" y2="40" stroke="#1971c2" stroke-width="2"/><text x="40" y="58" font-size="9" fill="#1971c2">water surface</text><g stroke="#2f9e44" stroke-width="3" fill="none"><path d="M120,190 C110,140 130,110 120,70"/><path d="M260,190 C250,150 270,120 260,80"/><path d="M400,190 C390,140 410,120 400,75"/></g><g fill="#69db7c"><ellipse cx="120" cy="100" rx="14" ry="6"/><ellipse cx="120" cy="130" rx="14" ry="6"/><ellipse cx="260" cy="110" rx="14" ry="6"/><ellipse cx="400" cy="105" rx="14" ry="6"/><ellipse cx="400" cy="135" rx="14" ry="6"/></g><g fill="#1c7ed6"><circle cx="150" cy="90" r="3"/><circle cx="155" cy="80" r="2.5"/><circle cx="290" cy="100" r="3"/></g><text x="260" y="208" font-size="10" fill="#475569" text-anchor="middle">Gases dissolve directly into the leaf surface from the surrounding water, so no stomata are needed.</text></svg>',
          },
          caption: 'Pondweed is fully submerged. Gases diffuse directly across its leaf surface from the surrounding water, so it has no stomata (0 on both surfaces).',
        },
      },
      {
        label: 'g',
        text: '**Explain** the similarities and differences in distribution of stomata in sunflowers and water lilies. You should use scientific language in your answer.',
        marks: 5,
        ph: 'Compare number and location of stomata; link to transpiration and habitat.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Plastics, Enzymes & Natural Selection',
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Natural Selection', 'Enzymes & Biochemistry'],
    marks: 7,
    stem: 'Humans use resources to create products that simplify our lives without always considering the long-term impacts. Creative methods to recycle plastics are required to protect and maintain the environment for future generations. Plastics are large molecules made of repeated building blocks joined together in a long chain. They can be made from oil, natural gas or cellulose from plants. Plastics take a long time to break down or degrade, so plastics that are not recycled or burned build up in ecosystems.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="220" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">A plastic is a long chain of repeated building blocks</text><g transform="translate(60,70)"><path d="M30,-10 L30,-40 Q60,-50 90,-40 L90,-10 Z" fill="#cfe9f5" stroke="#1971c2"/><text x="60" y="-22" font-size="8" fill="#1971c2" text-anchor="middle">plastic</text></g><g><g fill="#a5d8ff" stroke="#1971c2" stroke-width="1.5"><rect x="170" y="92" width="34" height="34" rx="6"/><rect x="214" y="92" width="34" height="34" rx="6"/><rect x="258" y="92" width="34" height="34" rx="6"/><rect x="302" y="92" width="34" height="34" rx="6"/><rect x="346" y="92" width="34" height="34" rx="6"/><rect x="390" y="92" width="34" height="34" rx="6"/><rect x="434" y="92" width="34" height="34" rx="6"/></g><g stroke="#495057" stroke-width="2"><line x1="204" y1="109" x2="214" y2="109"/><line x1="248" y1="109" x2="258" y2="109"/><line x1="292" y1="109" x2="302" y2="109"/><line x1="336" y1="109" x2="346" y2="109"/><line x1="380" y1="109" x2="390" y2="109"/><line x1="424" y1="109" x2="434" y2="109"/></g></g><text x="320" y="160" font-size="11" fill="#475569" text-anchor="middle">Each square is one building block (monomer); the lines are the bonds joining them.</text><text x="320" y="180" font-size="11" fill="#475569" text-anchor="middle">Breaking these bonds breaks the plastic into smaller pieces.</text></svg>',
      },
      caption: 'A plastic molecule is a long chain of repeated building blocks (monomers) joined by chemical bonds. Breaking those bonds breaks the plastic down.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct meaning of the term "food web".',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: [
          'The interconnected food chains in an ecosystem',
          'A single chain showing what organisms are eaten in',
          'The total weight of all organisms in an area',
          'The part of the planet containing living organisms',
        ],
        ph: 'A food web connects multiple food chains — not just one chain.',
      },
      {
        label: 'b',
        text: '**Describe** how enzymes can break down plastics. You should use scientific language in your answer.',
        marks: 4,
        ph: 'Enzymes break bonds between building blocks; mention active site, substrate, catabolic.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="220" fill="#ffffff"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Bacterial enzymes break plastic into building blocks</text><g font-size="9.5" fill="#475569" text-anchor="middle"><text x="100" y="44">1. Long plastic chain</text><text x="300" y="44">2. Enzyme cuts the bonds</text><text x="500" y="44">3. Separate building blocks</text></g><g fill="#a5d8ff" stroke="#1971c2" stroke-width="1.5"><rect x="60" y="90" width="22" height="22" rx="5"/><rect x="86" y="90" width="22" height="22" rx="5"/><rect x="112" y="90" width="22" height="22" rx="5"/><rect x="138" y="90" width="22" height="22" rx="5"/></g><g fill="#a5d8ff" stroke="#1971c2" stroke-width="1.5"><rect x="250" y="90" width="22" height="22" rx="5"/><rect x="276" y="90" width="22" height="22" rx="5"/><rect x="320" y="90" width="22" height="22" rx="5"/><rect x="346" y="90" width="22" height="22" rx="5"/></g><path d="M300,72 q12,18 0,36 q-12,-18 0,-36 Z" fill="#ffe066" stroke="#f08c00"/><text x="300" y="135" font-size="8" fill="#f08c00" text-anchor="middle">enzyme (active site)</text><g fill="#a5d8ff" stroke="#1971c2" stroke-width="1.5"><rect x="450" y="90" width="22" height="22" rx="5"/><rect x="484" y="90" width="22" height="22" rx="5"/><rect x="518" y="90" width="22" height="22" rx="5"/><rect x="467" y="118" width="22" height="22" rx="5"/></g><g stroke="#495057" stroke-width="6" fill="none" marker-end="url(#a7)"><line x1="175" y1="101" x2="225" y2="101"/><line x1="375" y1="101" x2="425" y2="101"/></g><defs><marker id="a7" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#495057"/></marker></defs><text x="300" y="195" font-size="10" fill="#94a3ad" text-anchor="middle">The substrate (plastic) fits the enzyme active site; the enzyme catalyses breaking the bonds (catabolic reaction).</text></svg>',
          },
          caption: 'Bacterial enzymes bind the plastic chain at their active site and catalyse the breaking of the bonds between building blocks (a catabolic reaction).',
        },
      },
      {
        label: 'c',
        text: '**Organize** the statements to complete the natural selection diagram.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['Box 2', 'Box 3', 'Box 4'],
        widgetOptions: [
          'Individuals in a population have different characteristics from one another',
          'Individuals with characteristics adapted to the environment survive longer',
          'Characteristics of individuals who reproduce become more common in the population',
        ],
        ph: 'Follow the logic: variation → survival → population change.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="200" fill="#ffffff"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Natural selection in plastic-digesting bacteria</text><g font-size="9.5" fill="#1e293b"><rect x="14" y="60" width="120" height="70" rx="6" fill="#d3f9d8" stroke="#2f9e44"/><text x="74" y="84" text-anchor="middle">Box 1</text><text x="74" y="100" text-anchor="middle" font-size="8">Bacteria can</text><text x="74" y="112" text-anchor="middle" font-size="8">digest plastic</text><rect x="154" y="60" width="120" height="70" rx="6" fill="#fff3bf" stroke="#f08c00" stroke-dasharray="4 3"/><text x="214" y="92" text-anchor="middle">Box 2 — ?</text><rect x="294" y="60" width="120" height="70" rx="6" fill="#fff3bf" stroke="#f08c00" stroke-dasharray="4 3"/><text x="354" y="92" text-anchor="middle">Box 3 — ?</text><rect x="434" y="60" width="120" height="70" rx="6" fill="#fff3bf" stroke="#f08c00" stroke-dasharray="4 3"/><text x="494" y="92" text-anchor="middle">Box 4 — ?</text></g><g stroke="#9c36b5" stroke-width="3" marker-end="url(#a7b)"><line x1="134" y1="95" x2="150" y2="95"/><line x1="274" y1="95" x2="290" y2="95"/><line x1="414" y1="95" x2="430" y2="95"/></g><defs><marker id="a7b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#9c36b5"/></marker></defs><text x="300" y="170" font-size="10" fill="#94a3ad" text-anchor="middle">Drag the statements into boxes 2, 3 and 4: variation → survival of the fittest → trait becomes common.</text></svg>',
          },
          caption: 'The natural-selection sequence with boxes 2–4 left blank for you to complete: variation, survival, then the trait becoming more common.',
        },
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Plastics Recycling',
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Mitigation of Adverse Effects'],
    marks: 17,
    stem: 'Plastics have a wide range of properties so they can be used to make a wide range of items. For example, plastic bottles are lightweight and long-lasting. After they have been used, some plastics are recycled. The infographic shows three methods of recycling plastics: Chemical recycling, Mechanical recycling, Biological recycling.',
    artefact: {
      component: 'DataTableInteractive',
      data: {
        title: 'Three methods of recycling plastics',
        headers: ['Method of recycling', 'How it works', 'Environmental consequence', 'Economic impact'],
        rows: [
          ['Chemical recycling', 'Breaks plastic back into its chemical building blocks to make new plastic.', 'High energy use and some emissions, but can recycle mixed/dirty plastics.', 'Expensive equipment and high running costs.'],
          ['Mechanical recycling', 'Plastic is washed, shredded and melted into pellets to be reshaped.', 'Lower energy use, but quality falls each time so it cannot be repeated forever.', 'Cheap and widely available, but produces lower-value plastic.'],
          ['Biological recycling', 'Bacteria and their enzymes break the plastic down into building blocks.', 'Low energy and low emissions, but slow and still being developed.', 'Low running cost once set up, but new and not yet large-scale.'],
        ],
        caption: 'Pin the two methods you choose to discuss and evaluate.',
      },
      caption: 'Three methods of recycling plastics. Use this comparison to discuss the environmental and economic impacts of any two methods.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Discuss** and **evaluate** the methods of recycling plastics. In your answer, you should include:\n- reasons why the properties of plastics make them useful and widely used\n- the environmental consequences of two methods of recycling\n- the economic impacts of two methods of recycling\n- a concluding appraisal justifying your opinion of how plastics should be recycled',
        marks: 13,
        ph: 'Cover properties/uses, environmental and economic impacts of two methods, then conclude.',
      },
      {
        label: 'b',
        text: '**Suggest** and **justify** two additional ways in which pollution from plastics can be reduced.',
        marks: 4,
        ph: 'Two different ways (e.g. government policy, education, behavioural changes) + justification.',
        artefact: {
          component: 'NetworkGraph',
          data: {
            title: 'Ways to reduce plastic pollution (besides recycling)',
            center: { label: 'Reduce plastic pollution', detail: 'Recycling alone is not enough — pollution must be cut at the source too.', color: '#2f9e44' },
            nodes: [
              { id: 'reduce', label: 'Reduce / reuse', color: '#0b7285', detail: 'Use less single-use plastic and reuse items — less waste is created in the first place.' },
              { id: 'policy', label: 'Government policy', color: '#1971c2', detail: 'Bans or taxes on single-use plastics force producers and shoppers to use less.' },
              { id: 'education', label: 'Education', color: '#f08c00', detail: 'Teaching people to sort and dispose of waste correctly keeps plastic out of ecosystems.' },
              { id: 'biodegrad', label: 'Biodegradable plastics', color: '#9c36b5', detail: 'Plant-based plastics break down naturally, so they do not build up in ecosystems.' },
            ],
          },
          caption: 'Strategies that reduce plastic pollution at the source, beyond recycling. Choose any two and justify how each one helps.',
        },
      },
    ],
  },
]
