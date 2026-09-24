// Blog posts that wrap an interactive learning artifact (public/artifacts/*.html)
// in real explanatory text — the embed is the payoff for a reader who has
// landed on the page; the article text is what actually gets indexed. Merged
// into POSTS in data/blog.ts. All content is original, written for CritABCD.

import type { BlogPost } from './blog'

const DATE = '2026-09-24'

export const ARTIFACT_POSTS: BlogPost[] = [
  {
    slug: 'food-chains-food-webs-human-impact-myp-biology',
    title: 'Food Chains, Food Webs & Human Impact on Ecosystems: MYP Biology (Amazon Rainforest Case Study)',
    description:
      'How energy moves through food chains and food webs, why removing one species affects many others, and how deforestation changes an ecosystem — with a free interactive Amazon rainforest assessment.',
    datePublished: DATE,
    readMinutes: 7,
    tags: ['Biology', 'Ecosystems'],
    intro:
      'An ecosystem is a web of living things and their surroundings, all linked by who eats whom. Food chains and food webs are the diagrams biologists use to show those links — and once you can read them, you can predict what happens when something in the ecosystem changes. That skill is exactly what MYP Biology assessments test, usually through an unfamiliar ecosystem like the Amazon rainforest.',
    embed: { src: '/artifacts/ecosystem-assessment-amazon.html', title: 'Amazon Rainforest Ecosystem Assessment — an interactive MYP Biology task on food chains, food webs and human impact', height: 800 },
    embedIntro:
      'Try it yourself: identify consumers, classify organisms in a food web, work out how removing a species affects the rest, and analyse deforestation data. It builds an assessment report at the end.',
    sections: [
      {
        heading: 'Reading a food chain',
        body: [
          'A food chain shows one path of energy through an ecosystem, starting with a producer (a plant or other organism that makes its own food using light energy) and moving through consumers. A primary consumer eats the producer, a secondary consumer eats the primary consumer, and so on. The arrows point in the direction energy flows — from the organism being eaten to the organism doing the eating — which is the opposite of what many students first assume.',
        ],
      },
      {
        heading: 'Why energy runs out',
        body: [
          'Only a fraction of the energy at one level reaches the next; the rest is used for life processes like movement and keeping warm, or lost as heat and in waste. As a rough guide, about a tenth is passed on, which is why food chains are short and why there are far fewer top predators than plants. When an exam asks "why are there fewer organisms at higher levels?", the answer is energy loss at each transfer.',
        ],
      },
      {
        heading: 'Food webs: many chains woven together',
        body: [
          'Real animals eat more than one thing, so ecosystems are better shown as food webs. A web explains why removing one species rarely has a single, simple effect: if a predator disappears, its prey may increase, and then the plants that prey depends on decrease. To answer "predict the effect" questions, trace the arrows both up and down from the changed species and describe each consequence in order.',
        ],
      },
      {
        heading: 'Abiotic factors and human impact',
        body: [
          'Living things also depend on non-living (abiotic) factors such as light, temperature, water and soil. Deforestation changes several at once: it removes the producers that support the whole web, destroys habitat, exposes soil to erosion, and can alter local rainfall. Because the food web is so interconnected, losing forest cover affects species that never lived in the trees themselves.',
        ],
      },
      {
        heading: 'Connecting local change to global effects',
        body: [
          'Higher-band answers link a local change to a wider one: forests store carbon, so clearing them releases carbon dioxide and contributes to climate change, which in turn affects ecosystems far away. This is the kind of impact reasoning MYP rewards under Criterion D.',
        ],
      },
    ],
    faq: [
      { q: 'Which way do the arrows in a food chain point?', a: 'They point from the organism being eaten to the organism that eats it, showing the direction energy flows.' },
      { q: 'Why are there fewer top predators than plants?', a: 'Energy is lost at every step of a food chain (as heat and in life processes), so less energy is available at each higher level to support organisms.' },
      { q: 'What happens to a food web if one species is removed?', a: 'The effects spread: its predators may lose food, its prey may increase, and the plants that prey feed on may decline. Trace each link to predict the outcome.' },
    ],
    related: [
      { label: 'Producers, consumers & decomposers', href: '/blog/producers-consumers-decomposers-ecosystem-roles-myp-biology' },
      { label: 'Hydrothermal vents & chemosynthesis', href: '/blog/hydrothermal-vents-chemosynthesis-myp-biology' },
      { label: 'MYP Biology subject guide', href: '/guides/biology' },
    ],
  },
  {
    slug: 'producers-consumers-decomposers-ecosystem-roles-myp-biology',
    title: 'Producers, Consumers & Decomposers: The Roles in an Ecosystem (MYP Biology)',
    description:
      'What producers, consumers and decomposers do, why decomposers matter for recycling nutrients, and how the three roles fit together — with a free interactive ecosystem game.',
    datePublished: DATE,
    readMinutes: 5,
    tags: ['Biology', 'Ecosystems'],
    intro:
      'Every organism in an ecosystem has a job, and biologists sort those jobs into three main roles: producers, consumers and decomposers. Knowing which role an organism plays lets you explain how energy and matter move through the whole system — and it is the foundation for food chains, food webs and nutrient cycles.',
    embed: { src: '/artifacts/ecosystem-learning-game.html', title: 'Ecosystem Explorers — an interactive game on producers, consumers and decomposers', height: 760 },
    embedIntro: 'Try it yourself: explore each role in turn and test what you have learned in the game.',
    sections: [
      {
        heading: 'Producers: making the food',
        body: [
          'Producers build their own food from simple ingredients. Plants, algae and some bacteria are producers: most use light energy to turn carbon dioxide and water into glucose by photosynthesis. Producers sit at the start of every food chain because every other organism depends, directly or indirectly, on the energy they capture.',
        ],
      },
      {
        heading: 'Consumers: eating to get energy',
        body: ['Consumers cannot make their own food, so they get energy by eating other organisms:'],
        bullets: [
          'Herbivores eat plants (primary consumers), e.g. a rabbit.',
          'Carnivores eat other animals (secondary or tertiary consumers), e.g. a fox.',
          'Omnivores eat both plants and animals, e.g. a bear.',
        ],
      },
      {
        heading: 'Decomposers: recycling the leftovers',
        body: [
          'Decomposers, mainly fungi and bacteria, break down dead plants and animals and waste. This releases nutrients back into the soil where producers can use them again. Without decomposers, dead material would pile up and the nutrients locked inside it would never be reused, so an ecosystem would run out of raw materials for new growth.',
        ],
      },
      {
        heading: 'Putting it together',
        body: [
          'Energy flows one way through an ecosystem — from the Sun, into producers, through consumers, and out as heat — while nutrients cycle round and round via decomposers. Being able to state that difference (energy flows, matter cycles) is a reliable way to gain marks.',
        ],
      },
    ],
    faq: [
      { q: 'Are decomposers the same as consumers?', a: 'They are different roles. Consumers eat living or freshly killed organisms; decomposers break down dead material and waste, returning nutrients to the soil.' },
      { q: 'What is a producer?', a: 'An organism that makes its own food from simple substances using an energy source — for most, light (photosynthesis).' },
      { q: 'Why do ecosystems need decomposers?', a: 'They recycle nutrients from dead organisms back into the environment so producers can use them again.' },
    ],
    related: [
      { label: 'Food chains, food webs & human impact', href: '/blog/food-chains-food-webs-human-impact-myp-biology' },
      { label: 'Cells, tissues & organs', href: '/blog/cells-tissues-organs-levels-of-organisation-myp-biology' },
      { label: 'MYP Biology subject guide', href: '/guides/biology' },
    ],
  },
  {
    slug: 'atomic-models-dalton-thomson-rutherford-bohr-myp-chemistry',
    title: 'The History of the Atom: Dalton, Thomson, Rutherford & Bohr (MYP Chemistry)',
    description:
      'How our model of the atom changed — from indivisible spheres to the plum pudding, the nucleus and electron shells — and the evidence behind each step, with a free interactive atomic-models game.',
    datePublished: DATE,
    readMinutes: 7,
    tags: ['Chemistry', 'Physics'],
    intro:
      'The atom is not something anyone has ever seen with the naked eye, so our picture of it was built from evidence, one experiment at a time. Each new model kept what the evidence supported and replaced what it contradicted. Understanding that story — model, evidence, revised model — is what MYP asks for when it says "models" and "evidence".',
    embed: { src: '/artifacts/atomic-quest.html', title: 'Atomic Quest — an interactive MYP game on models of the atom', height: 780 },
    embedIntro: 'Try it yourself: travel through the history of atomic models as a platformer, meeting each scientist and their evidence.',
    sections: [
      {
        heading: 'Early ideas and Dalton',
        body: [
          'Long before modern experiments, thinkers in several cultures — including the ancient Indian philosopher Kanad — proposed that matter is made of tiny indivisible particles. In the early 1800s John Dalton turned this into a scientific model: elements are made of identical atoms, atoms of different elements differ, and atoms are solid, indivisible spheres that rearrange in chemical reactions.',
        ],
      },
      {
        heading: 'Thomson: the electron and the plum pudding',
        body: [
          'In 1897 J.J. Thomson showed that atoms contain much smaller negatively charged particles, electrons. Since atoms are neutral overall, he pictured a positive "pudding" with electrons scattered through it like plums. Atoms were no longer indivisible — the first big revision of Dalton\'s model.',
        ],
      },
      {
        heading: 'Rutherford: the nucleus',
        body: [
          'Rutherford\'s team fired positively charged alpha particles at thin gold foil. Most passed straight through, a few were deflected, and a very few bounced almost straight back. That could only happen if the positive charge and most of the mass were packed into a tiny, dense nucleus, with the rest of the atom mostly empty space. The plum pudding could not explain it.',
        ],
      },
      {
        heading: 'Bohr: electrons in energy levels',
        body: [
          'A nucleus with orbiting electrons raised a problem: the electrons should lose energy and spiral in. Niels Bohr proposed that electrons can only occupy certain fixed energy levels (shells) around the nucleus and move between them by absorbing or emitting specific amounts of energy. This explained why elements give off light of only certain colours, and it is the shell model still used to draw electron arrangements today.',
        ],
      },
      {
        heading: 'How to answer "explain how the model changed"',
        body: [
          'A strong answer names the model, states the new evidence, and says what that evidence showed the old model could not explain. For Rutherford: "gold foil results — a few alpha particles deflected — showed a small dense positive nucleus, which the plum pudding model could not account for."',
        ],
      },
    ],
    faq: [
      { q: 'What did Rutherford\'s gold foil experiment show?', a: 'That an atom has a small, dense, positively charged nucleus with mostly empty space around it, because most alpha particles passed through and a few were deflected strongly.' },
      { q: 'What was wrong with the plum pudding model?', a: 'It could not explain why some alpha particles were deflected through large angles; that needed a concentrated positive nucleus.' },
      { q: 'What did Bohr add to the atomic model?', a: 'The idea that electrons occupy fixed energy levels (shells) and jump between them by absorbing or emitting specific amounts of energy.' },
    ],
    related: [
      { label: 'Ionic, covalent & metallic bonding', href: '/blog/ionic-covalent-metallic-bonding-myp-chemistry' },
      { label: 'MYP Chemistry subject guide', href: '/guides/chemistry' },
      { label: 'MYP assessment criteria explained', href: '/blog/myp-assessment-criteria-explained' },
    ],
  },
  {
    slug: 'ionic-covalent-metallic-bonding-myp-chemistry',
    title: 'Ionic, Covalent & Metallic Bonding Explained (MYP Chemistry)',
    description:
      'How atoms bond — ionic, covalent, giant structures and metallic — and how bonding explains melting points and conductivity, with a free interactive chemical bonding game.',
    datePublished: DATE,
    readMinutes: 8,
    tags: ['Chemistry', 'Bonding'],
    intro:
      'Why does salt dissolve and conduct when melted, while sugar does not? Why is diamond hard but graphite slippery? The answer to nearly every "properties" question in chemistry is bonding: what the particles are and how they are held together. Learn to identify the type of bonding and the properties follow.',
    embed: { src: '/artifacts/chemical-bonding.html', title: 'Chemical Bonding Strandhoot — an interactive game on ionic, covalent, giant and metallic bonding', height: 800 },
    embedIntro: 'Try it yourself: work through ionic, covalent, giant structures and metallic bonding, earning badges as you go.',
    sections: [
      {
        heading: 'Ionic bonding',
        body: [
          'Ionic bonding happens between a metal and a non-metal. The metal atom gives away electrons to become a positive ion and the non-metal atom gains them to become a negative ion. The strong electrostatic attraction between opposite charges holds a giant lattice together, which is why ionic compounds have high melting points and are hard but brittle. They conduct electricity only when molten or dissolved, because only then can the ions move.',
        ],
      },
      {
        heading: 'Covalent bonding',
        body: [
          'Covalent bonding happens between non-metal atoms, which share pairs of electrons. Simple molecules such as water or carbon dioxide have strong bonds inside each molecule but only weak forces between molecules, so they have low melting and boiling points and do not conduct electricity — there are no free charged particles.',
        ],
      },
      {
        heading: 'Giant covalent structures',
        body: [
          'Some covalent substances are one enormous network of bonded atoms. In diamond each carbon atom bonds to four others, making it extremely hard with a very high melting point. In graphite each carbon bonds to three others in layers, leaving spare electrons that move, so graphite conducts electricity, and the weak forces between layers let them slide.',
        ],
      },
      {
        heading: 'Metallic bonding',
        body: [
          'A metal is a lattice of positive ions in a "sea" of delocalised electrons. The electrons move freely, so metals conduct electricity and heat, and because layers of ions can slide over each other without breaking the bonding, metals are malleable and ductile.',
        ],
      },
      {
        heading: 'Linking structure to properties',
        body: [
          'In an exam, a full explanation names the particles, the bonding, and then the property: "graphite conducts because it has delocalised electrons that can move through the layers." Naming the property without the particle-level reason will not reach the top band.',
        ],
      },
    ],
    faq: [
      { q: 'Why do ionic compounds conduct electricity only when molten or dissolved?', a: 'The ions are locked in a lattice in the solid, but can move freely when molten or dissolved, carrying charge.' },
      { q: 'Why does graphite conduct electricity but diamond does not?', a: 'Each carbon in graphite uses only three of its four outer electrons for bonding, leaving delocalised electrons that can move. In diamond all four are used in bonds, so none are free.' },
      { q: 'Why are metals malleable?', a: 'Layers of positive ions can slide over each other while the delocalised electrons keep holding the structure together.' },
    ],
    related: [
      { label: 'The history of the atom', href: '/blog/atomic-models-dalton-thomson-rutherford-bohr-myp-chemistry' },
      { label: 'Significant figures explained', href: '/blog/significant-figures-rules-myp-science' },
      { label: 'MYP Chemistry subject guide', href: '/guides/chemistry' },
    ],
  },
  {
    slug: 'research-question-variables-methodology-criterion-b-myp-science',
    title: 'Criterion B Made Simple: Research Question, Variables & Method (MYP Science)',
    description:
      'How to write a focused research question, identify independent, dependent and controlled variables, and plan a safe, repeatable method — with a free interactive "How to Be a Scientist" game.',
    datePublished: DATE,
    readMinutes: 7,
    tags: ['Sciences', 'Criterion B'],
    intro:
      'Criterion B (Inquiring and designing) rewards one thing above all: a plan another person could follow and trust. That plan is built from a small number of parts — a research question, a hypothesis, the right variables, a step-by-step method, sensible materials and a safety check. Get each part right and the whole investigation holds together.',
    embed: { src: '/artifacts/how-to-be-a-scientist.html', title: 'How to Be a Scientist — an interactive MYP game on research questions, variables and methodology', height: 780 },
    embedIntro: 'Try it yourself: practise writing research questions, sorting variables, and building a method, earning badges for each skill.',
    sections: [
      {
        heading: 'A research question you can actually test',
        body: [
          'A strong research question is focused and names both what you will change and what you will measure: "How does the temperature of water affect the time taken for a sugar cube to dissolve?" beats "Does temperature matter?" because it tells the reader exactly what will be investigated.',
        ],
      },
      {
        heading: 'Variables',
        body: ['Every fair test has three kinds of variable:'],
        bullets: [
          'Independent variable (IV) — the one thing you change, with the range and steps you will use.',
          'Dependent variable (DV) — what you measure, and the unit and instrument you will measure it with.',
          'Controlled variables (CV) — everything else you keep the same, and how you will keep it the same.',
        ],
      },
      {
        heading: 'Hypothesis',
        body: [
          'A hypothesis predicts the outcome and gives a scientific reason: "As temperature increases the sugar dissolves faster, because particles move faster and collide with the sugar more often." The reason, drawn from real science, is what lifts it above a guess.',
        ],
      },
      {
        heading: 'Method, materials and safety',
        body: [
          'Write the method as numbered steps precise enough to repeat, and plan repeat trials so you can spot anomalies. Choose materials that suit the measurement — a measuring cylinder is more accurate than a beaker for volume — and list quantities. Finally, identify hazards, say how likely and serious the harm is, and state the control measure (goggles, tied-back hair, cooling hot glassware).',
        ],
      },
    ],
    faq: [
      { q: 'What makes a good research question?', a: 'It is focused, testable, and identifies both the independent variable (what you change) and the dependent variable (what you measure).' },
      { q: 'How do I control variables?', a: 'Decide which factors could affect the result, then keep each one constant (same volume, same equipment, same time) and say how you will do it in the method.' },
      { q: 'Why do I need repeat trials?', a: 'Repeats let you spot anomalies and calculate a more reliable average, which makes your conclusion more trustworthy.' },
    ],
    related: [
      { label: 'Scientific method: predictions, hypotheses & variables', href: '/blog/scientific-method-hypothesis-variables-myp-science' },
      { label: 'Significant figures explained', href: '/blog/significant-figures-rules-myp-science' },
      { label: 'MYP assessment criteria explained', href: '/blog/myp-assessment-criteria-explained' },
    ],
  },
  {
    slug: 'significant-figures-rules-myp-science',
    title: 'Significant Figures: The Rules for Zeros, Rounding & Calculations (MYP Science)',
    description:
      'A clear guide to significant figures — which digits count, the rules for leading, sandwiched and trailing zeros, and how to round calculation answers — with a free interactive game.',
    datePublished: DATE,
    readMinutes: 6,
    tags: ['Sciences', 'Maths'],
    intro:
      'Significant figures tell the reader how precise a measurement really is. Writing 12.0 instead of 12 is a claim that you measured to a tenth; writing more digits than your equipment can justify claims accuracy you do not have. Marks in Criterion C are regularly lost by reporting results to the wrong number of figures.',
    embed: { src: '/artifacts/sigfig-master.html', title: 'SigFig Master — an interactive game on counting significant figures', height: 780 },
    embedIntro: 'Try it yourself: apply each rule in a series of worlds and see how many significant figures you can count correctly.',
    sections: [
      {
        heading: 'Which digits count?',
        bullets: [
          'All non-zero digits count: 4.62 has 3 significant figures.',
          'Zeros between non-zero digits count ("sandwiched"): 5008 has 4.',
          'Leading zeros never count — they only place the decimal point: 0.0045 has 2.',
          'Trailing zeros count only if there is a decimal point: 1.500 has 4, and 2.30 has 3.',
        ],
      },
      {
        heading: 'The tricky case: trailing zeros without a decimal point',
        body: [
          'A number like 1500 is ambiguous — it might have 2, 3 or 4 significant figures. Scientific notation removes the doubt: 1.5 × 10³ has 2, while 1.500 × 10³ has 4. When you report a measurement, write it so the number of figures reflects how precisely you measured.',
        ],
      },
      {
        heading: 'Rounding in calculations',
        body: [
          'When multiplying or dividing, give the answer to the same number of significant figures as the least precise value used. When adding or subtracting, match the fewest decimal places instead. Round only at the end of a calculation, not in the middle, or small errors build up.',
        ],
      },
      {
        heading: 'Why examiners care',
        body: [
          'Reporting results to a sensible precision shows you understand measurement. A stopwatch that reads to 0.01 s does not justify an answer of 3.14159 s. In Criterion C, consistent, justified precision across a data table is a mark of careful processing.',
        ],
      },
    ],
    faq: [
      { q: 'How many significant figures are in 0.00450?', a: 'Three. The leading zeros do not count, but the 4, 5 and the trailing 0 (after the decimal point) do.' },
      { q: 'How many significant figures does 1500 have?', a: 'It is ambiguous without more information — at least 2. Write 1.5 × 10³ for 2, or 1.500 × 10³ for 4.' },
      { q: 'How do I round after multiplying?', a: 'Round to the same number of significant figures as the least precise number in the calculation.' },
    ],
    related: [
      { label: 'Scalars vs vectors & SI units', href: '/blog/scalars-vectors-si-units-myp-physics' },
      { label: 'Criterion B: research question & method', href: '/blog/research-question-variables-methodology-criterion-b-myp-science' },
      { label: 'MYP Physics subject guide', href: '/guides/physics' },
    ],
  },
  {
    slug: 'electromagnetic-spectrum-myp-physics',
    title: 'The Electromagnetic Spectrum: Waves, Uses & Hazards (MYP Physics)',
    description:
      'The seven regions of the electromagnetic spectrum in order, what they have in common, how wavelength and frequency link, and their uses and hazards — with a free interactive strand-based challenge.',
    datePublished: DATE,
    readMinutes: 7,
    tags: ['Physics', 'Waves'],
    intro:
      'Radio, light, X-rays and gamma rays look nothing alike in everyday life, yet they are all the same kind of wave — electromagnetic waves — differing only in wavelength and frequency. Understanding the spectrum as one family, ordered by energy, makes their very different uses and dangers easy to organise.',
    embed: { src: '/artifacts/em-spectrum-strandhoot.html', title: 'Electromagnetic Spectrum Strandhoot — an interactive MYP Physics challenge across criteria A to D', height: 800 },
    embedIntro: 'Try it yourself: four zones covering knowledge, investigation, calculation and impact, each mapped to an MYP criterion.',
    sections: [
      {
        heading: 'The seven regions, in order',
        body: ['From longest wavelength (lowest energy) to shortest wavelength (highest energy):'],
        bullets: [
          'Radio waves — broadcasting and communication.',
          'Microwaves — cooking, mobile and satellite signals.',
          'Infrared — remote controls, thermal cameras, heating.',
          'Visible light — the only part we can see, roughly 400–700 nm.',
          'Ultraviolet — sterilising, and the cause of sunburn.',
          'X-rays — medical imaging.',
          'Gamma rays — sterilising equipment and treating cancer.',
        ],
      },
      {
        heading: 'What they all share',
        body: [
          'All electromagnetic waves are transverse, can travel through a vacuum, and travel at the same speed there: about 3.00 × 10⁸ m/s. They differ in wavelength and frequency, linked by the wave equation speed = frequency × wavelength (c = fλ). Because c is fixed, higher frequency always means shorter wavelength.',
        ],
      },
      {
        heading: 'Energy and hazards',
        body: [
          'Energy increases with frequency, so the high-frequency end is the most hazardous. Ultraviolet, X-rays and gamma rays can ionise atoms and damage living cells, which is why sunscreen, lead shielding and limited X-ray exposure matter. Lower-frequency waves such as radio carry too little energy per photon to ionise atoms.',
        ],
      },
      {
        heading: 'Applying it in an assessment',
        body: [
          'Typical questions ask you to match a wave to a use and explain why its properties suit it — for example, why X-rays pass through soft tissue but are absorbed by bone. Then link the same property to the hazard, and weigh benefit against risk for Criterion D.',
        ],
      },
    ],
    faq: [
      { q: 'What is the order of the electromagnetic spectrum?', a: 'Radio, microwave, infrared, visible light, ultraviolet, X-ray, gamma — from longest wavelength to shortest.' },
      { q: 'Do all electromagnetic waves travel at the same speed?', a: 'Yes, in a vacuum they all travel at about 3.00 × 10⁸ m/s.' },
      { q: 'Why are gamma rays more dangerous than radio waves?', a: 'They have much higher frequency and energy, enough to ionise atoms and damage cells, whereas radio waves carry too little energy per photon.' },
    ],
    related: [
      { label: 'Scalars vs vectors & SI units', href: '/blog/scalars-vectors-si-units-myp-physics' },
      { label: 'Thermal conductivity & heat transfer', href: '/blog/thermal-conductivity-heat-transfer-myp-physics' },
      { label: 'MYP Physics subject guide', href: '/guides/physics' },
    ],
  },
  {
    slug: 'separation-techniques-natural-vs-synthetic-criterion-d-myp-chemistry',
    title: 'Separation Techniques, Natural vs Synthetic & Criterion D (MYP Chemistry: Toiletries)',
    description:
      'How separation techniques are used to make everyday products, and how to discuss environmental, social and ethical impacts for Criterion D — with a free interactive toiletries science challenge.',
    datePublished: DATE,
    readMinutes: 7,
    tags: ['Chemistry', 'Criterion D'],
    intro:
      'The shampoo, toothpaste and soap on a bathroom shelf are all the product of chemistry: mixtures being made, purified and separated. They are also a rich topic for Criterion D (Reflecting on the impacts of science), because every choice — natural or synthetic, packaging, ingredients — has environmental, social and ethical consequences worth discussing.',
    embed: { src: '/artifacts/toiletries-chemistry-strandhoot.html', title: 'Toiletries Science Challenge — an interactive MYP Chemistry task on Criterion D', height: 780 },
    embedIntro: 'Try it yourself: explain the science, discuss the impacts, weigh the implications and justify a personal opinion, strand by strand.',
    sections: [
      {
        heading: 'Separating mixtures',
        body: ['Different techniques suit different mixtures, depending on which property differs between the parts:'],
        bullets: [
          'Filtration — separates an insoluble solid from a liquid by particle size.',
          'Evaporation and crystallisation — recover a dissolved solid from a solution.',
          'Distillation — separates liquids with different boiling points, used for example to purify liquids and obtain fragrances.',
          'Chromatography — separates substances that travel at different speeds through a medium.',
        ],
      },
      {
        heading: 'Environmental impact',
        body: [
          'Products can affect the environment at every stage: sourcing ingredients, manufacturing, use and disposal. Plastic packaging and tiny plastic particles washed down drains persist in waterways, and some ingredients are linked to habitat loss where crops are grown. A good discussion names a specific impact and where in the product\'s life it occurs.',
        ],
      },
      {
        heading: 'Social, economic and ethical implications',
        body: [
          'Consider who benefits and who bears the cost: affordability for different households, jobs created or lost, and ethical questions such as animal testing. Address more than one perspective rather than listing one side.',
        ],
      },
      {
        heading: 'Natural is not automatically better',
        body: [
          'A common trap is assuming "natural" means safe and "synthetic" means harmful. Some natural substances are toxic or cause allergies, and some synthetic ones are gentler, cheaper or less damaging to produce. The top-band move is to weigh specific advantages and disadvantages of each and reach a justified opinion using evidence.',
        ],
      },
    ],
    faq: [
      { q: 'Which separation technique separates liquids with different boiling points?', a: 'Distillation.' },
      { q: 'What does Criterion D assess?', a: 'Reflecting on the impacts of science: explaining how science is applied and discussing its implications for people, society and the environment, supported by evidence.' },
      { q: 'Is a natural ingredient always safer than a synthetic one?', a: 'No. Safety depends on the specific substance and how it is used; some natural substances are harmful and some synthetic ones are safe.' },
    ],
    related: [
      { label: 'Criterion D: safety impact of technology', href: '/blog/criterion-d-reflecting-on-impact-safety-myp-science' },
      { label: 'Ionic, covalent & metallic bonding', href: '/blog/ionic-covalent-metallic-bonding-myp-chemistry' },
      { label: 'MYP Chemistry subject guide', href: '/guides/chemistry' },
    ],
  },
  {
    slug: 'criterion-d-reflecting-on-impact-safety-myp-science',
    title: 'Criterion D in Practice: Weighing the Safety Impact of Technology (Crumple Zones & Electric Vehicles)',
    description:
      'How to structure a Criterion D answer using personal, local, global, critical and sustainable thinking, with crumple zones and electric vehicles as worked examples — plus a free interactive task.',
    datePublished: DATE,
    readMinutes: 7,
    tags: ['Sciences', 'Criterion D'],
    intro:
      'Criterion D asks you to step back from the science and judge its impact. The strongest answers do not just list pros and cons — they look at the same technology through several lenses and reach a reasoned conclusion. Vehicle safety is a perfect case study, because it mixes physics, engineering, the environment and everyday life.',
    embed: { src: '/artifacts/criterion-d-safety-impact.html', title: 'Criterion D Strandhoot: Safety Impact Assessment — an interactive dual-pathway task on crumple zones and electric vehicles', height: 800 },
    embedIntro: 'Try it yourself: choose a pathway (crumple zones or electric vehicles) and work through five thinking strands, earning badges for well-supported ideas.',
    sections: [
      {
        heading: 'Case 1: crumple zones',
        body: [
          'A crumple zone is a part of a car designed to deform in a crash. The science is impulse: the change in momentum is fixed by the car\'s mass and speed, but force = change in momentum ÷ time, so by making the stopping time longer the crumple zone reduces the force on the passengers. Explaining that link, rather than just saying "it absorbs the impact", is what shows understanding.',
        ],
      },
      {
        heading: 'Case 2: electric vehicles',
        body: [
          'Electric vehicles produce no exhaust emissions where they are driven, which improves local air quality. But the full picture includes how the electricity is generated, mining the materials for batteries, and what happens to batteries at the end of their life. Weighing those together is a genuine evaluation, not a slogan.',
        ],
      },
      {
        heading: 'Five lenses for a balanced answer',
        body: ['Look at the technology from several viewpoints, and give a specific point for each:'],
        bullets: [
          'Personal — how it affects an individual\'s safety, cost or choices.',
          'Local — the effect on a community, town or school.',
          'Global — the wider effect on the planet or across countries.',
          'Critical — the strengths, limits and who is affected unequally.',
          'Sustainable — whether it can continue without harming future generations.',
        ],
      },
      {
        heading: 'Reaching a justified conclusion',
        body: [
          'End with a clear judgement and say why: which effects outweigh which, and what evidence supports that. Answers that stay neutral ("there are good and bad points") stay in the middle bands; a supported conclusion reaches the top.',
        ],
      },
    ],
    faq: [
      { q: 'How does a crumple zone reduce injury?', a: 'It increases the time over which the car stops, and since force equals change in momentum divided by time, a longer time means a smaller force on the occupants.' },
      { q: 'Are electric vehicles always better for the environment?', a: 'They remove exhaust emissions locally, but their overall impact depends on how the electricity is generated and how batteries are made and disposed of.' },
      { q: 'How do I score highly in Criterion D?', a: 'Explain the science accurately, discuss impacts from several perspectives with specific evidence, and finish with a justified conclusion.' },
    ],
    related: [
      { label: 'Toiletries chemistry & Criterion D', href: '/blog/separation-techniques-natural-vs-synthetic-criterion-d-myp-chemistry' },
      { label: 'MYP assessment criteria explained', href: '/blog/myp-assessment-criteria-explained' },
      { label: 'MYP command terms', href: '/blog/myp-command-terms' },
    ],
  },
  {
    slug: 'thermal-conductivity-heat-transfer-myp-physics',
    title: 'Thermal Conductivity & Heat Transfer by Conduction (MYP Physics)',
    description:
      'How heat travels by conduction, why metals conduct better than insulators, and what changes the rate of heat transfer — with a free interactive 3D thermal conductivity simulator.',
    datePublished: DATE,
    readMinutes: 6,
    tags: ['Physics', 'Energy'],
    intro:
      'Touch a metal spoon and a wooden spoon that have both been in hot soup and the metal feels far hotter. Same temperature, different materials — the difference is thermal conductivity. Understanding conduction explains why pans are metal with plastic handles, why houses have insulation, and why a winter jacket works by trapping air.',
    embed: { src: '/artifacts/thermal-conductivity.html', title: 'Thermal Conductivity — an interactive 3D simulator of heat transfer through different materials', height: 780 },
    embedIntro: 'Try it yourself: choose a material, customise the specimen and watch how heat moves through it.',
    sections: [
      {
        heading: 'How conduction works',
        body: [
          'In a solid, particles vibrate around fixed positions. When one end is heated its particles vibrate more strongly and pass that energy to their neighbours through collisions, so thermal energy spreads along the object without the material itself moving.',
        ],
      },
      {
        heading: 'Why metals conduct best',
        body: [
          'Metals contain free (delocalised) electrons that carry energy quickly through the material in addition to the vibrating particles, which is why metals are good thermal conductors. Materials like wood, plastic and air have no free electrons and transfer energy slowly, making them insulators.',
        ],
      },
      {
        heading: 'What controls the rate of heat transfer',
        body: ['For a solid bar, the rate at which heat flows increases with:'],
        bullets: [
          'a larger temperature difference between the two ends,',
          'a bigger cross-sectional area,',
          'a material with a higher thermal conductivity,',
          'and decreases as the bar gets longer (a thicker barrier).',
        ],
      },
      {
        heading: 'Using it in design',
        body: [
          'Good design matches the material to the job: high-conductivity metals where heat should move quickly (cooking pans, heat sinks), and insulators where it should not (oven gloves, cavity walls). Trapped air is an excellent insulator because gases conduct poorly, which is why fleece, double glazing and foam work.',
        ],
      },
    ],
    faq: [
      { q: 'Why do metals feel colder than wood at the same temperature?', a: 'Metal conducts heat away from your hand faster, so it feels colder, even though both are at room temperature.' },
      { q: 'What is a thermal insulator?', a: 'A material that conducts heat poorly, such as wood, plastic or trapped air.' },
      { q: 'How does the length of a rod affect heat transfer?', a: 'A longer rod transfers heat more slowly, because the energy must be passed along more particles.' },
    ],
    related: [
      { label: 'The electromagnetic spectrum', href: '/blog/electromagnetic-spectrum-myp-physics' },
      { label: 'Scalars vs vectors & SI units', href: '/blog/scalars-vectors-si-units-myp-physics' },
      { label: 'MYP Physics subject guide', href: '/guides/physics' },
    ],
  },
  {
    slug: 'life-cycle-of-stars-stellar-evolution-myp-physics',
    title: 'The Life Cycle of Stars: Stellar Evolution from Nebula to Black Hole',
    description:
      'How stars form, live and die — main sequence, red giants, white dwarfs, supernovae, neutron stars and black holes — and why a star\'s mass decides its fate, with a free interactive 3D explorer.',
    datePublished: DATE,
    readMinutes: 7,
    tags: ['Physics', 'Space'],
    intro:
      'Every star is a balance between two forces: gravity pulling inwards and the pressure from nuclear fusion pushing outwards. How long that balance lasts, and how it ends, depends almost entirely on one thing — the star\'s mass. Following a star from birth to death is a tour of energy, forces and the origin of the elements.',
    embed: { src: '/artifacts/stellar-evolution.html', title: 'Stellar Evolution Explorer — an interactive 3D explorer of the life cycles of stars', height: 800 },
    embedIntro: 'Try it yourself: explore the life cycles of stars in 3D, with quiz sections to check your understanding as you go.',
    sections: [
      {
        heading: 'Birth: nebula to main sequence',
        body: [
          'Stars form in giant clouds of gas and dust called nebulae. Gravity pulls a clump together into a protostar; as it contracts it heats up until its core is hot and dense enough for hydrogen to fuse into helium. That ignition starts the main sequence, the long, stable stage where fusion pressure balances gravity. Our Sun is a main sequence star.',
        ],
      },
      {
        heading: 'Mass decides the path',
        body: ['After the main sequence the routes split:'],
        bullets: [
          'Low and medium-mass stars (like the Sun) swell into red giants, shed their outer layers as a planetary nebula, and leave a small, dense white dwarf that slowly cools.',
          'Massive stars become red supergiants, fuse heavier elements, then end in a supernova explosion.',
          'The supernova leaves behind a neutron star or, for the most massive cores, a black hole.',
        ],
      },
      {
        heading: 'Why massive stars die young',
        body: [
          'It seems backwards, but bigger stars burn out faster. A massive star has more fuel yet much hotter, denser core, so fusion runs at a furious rate. A star many times the Sun\'s mass may live for only millions of years, while small stars can last far longer than the current age of the universe.',
        ],
      },
      {
        heading: 'The limit for white dwarfs',
        body: [
          'A white dwarf is held up by a quantum effect rather than fusion, but only up to a limit of about 1.4 times the Sun\'s mass (the Chandrasekhar limit). Beyond that, gravity wins and the core collapses, which is what triggers the most violent supernovae.',
        ],
      },
      {
        heading: 'Where the elements come from',
        body: [
          'Fusion inside stars builds heavier elements from lighter ones, and supernovae scatter them into space. The carbon in your body and the oxygen you breathe were made in earlier generations of stars — which is why we are sometimes described as "star stuff".',
        ],
      },
    ],
    faq: [
      { q: 'What decides how a star will end?', a: 'Mainly its mass: stars like the Sun end as white dwarfs, while much more massive stars end as supernovae leaving neutron stars or black holes.' },
      { q: 'What is the main sequence?', a: 'The long, stable stage of a star\'s life when it fuses hydrogen into helium in its core and fusion pressure balances gravity.' },
      { q: 'What will happen to the Sun?', a: 'In several billion years it will become a red giant, shed its outer layers, and end as a white dwarf.' },
    ],
    related: [
      { label: 'The electromagnetic spectrum', href: '/blog/electromagnetic-spectrum-myp-physics' },
      { label: 'The history of the atom', href: '/blog/atomic-models-dalton-thomson-rutherford-bohr-myp-chemistry' },
      { label: 'MYP Physics subject guide', href: '/guides/physics' },
    ],
  },
]
