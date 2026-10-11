// Free ORIGINAL sample practice questions (/sample-questions/<subject>/<topic>). Every question, number and
// mark scheme here was written for CritABCD in the style of MYP 4-5 sciences questions. Nothing is taken
// from IB past papers or the platform's paper bank, so the pages are free to publish and share.

export type SampleSubject = 'physics' | 'chemistry' | 'biology'

export interface SamplePart { label: string; q: string; marks: number; answer: string[] }

export interface SampleQuestion {
  subject: SampleSubject
  slug: string
  topic: string
  group: string
  criterion: 'A' | 'C'
  intro: string
  parts: SamplePart[]
  tip: string
}

export const SAMPLE_SUBJECTS: Record<SampleSubject, { name: string; papersHref: string; guideSlug: string }> = {
  physics: { name: 'Physics', papersHref: '/physics-papers', guideSlug: 'physics' },
  chemistry: { name: 'Chemistry', papersHref: '/chem-papers', guideSlug: 'chemistry' },
  biology: { name: 'Biology', papersHref: '/bio-papers', guideSlug: 'biology' },
}

export const SAMPLE_QUESTIONS: SampleQuestion[] = [
  // ------------------------------------------------------------------ PHYSICS
  {
    subject: 'physics', slug: 'speed-acceleration-and-force', topic: 'Speed, acceleration and force', group: 'Forces & Motion', criterion: 'A',
    intro: 'A cyclist accelerates in a straight line from rest to 6.0 m/s in 4.0 s. The cyclist and bicycle have a combined mass of 80 kg.',
    parts: [
      { label: 'a', q: 'Calculate the acceleration of the cyclist.', marks: 2, answer: ['a = change in velocity ÷ time (1)', 'a = 6.0 ÷ 4.0 = 1.5 m/s² (1)'] },
      { label: 'b', q: 'Calculate the resultant force acting on the cyclist and bicycle.', marks: 2, answer: ['F = ma (1)', 'F = 80 × 1.5 = 120 N (1)'] },
      { label: 'c', q: 'Calculate the distance travelled in the 4.0 s, assuming the acceleration is constant.', marks: 2, answer: ['distance = average speed × time = ½ × (0 + 6.0) × 4.0 (1)', 'distance = 12 m (1)'] },
    ],
    tip: 'Write the equation, substitute with units, then give the answer with units. Each step can earn a mark even if a later number is wrong.',
  },
  {
    subject: 'physics', slug: 'specific-heat-and-conduction', topic: 'Specific heat capacity and conduction', group: 'Thermal Physics', criterion: 'A',
    intro: 'A 0.50 kg aluminium block is heated from 20 °C to 60 °C. The specific heat capacity of aluminium is 900 J/kg °C.',
    parts: [
      { label: 'a', q: 'Calculate the thermal energy supplied to the block.', marks: 3, answer: ['Q = mcΔT (1)', 'Q = 0.50 × 900 × 40 (1)', 'Q = 18 000 J (18 kJ) (1)'] },
      { label: 'b', q: 'Explain, in terms of particles, why metals are good conductors of thermal energy.', marks: 2, answer: ['Metals contain free (delocalised) electrons that gain kinetic energy when heated (1)', 'These electrons move through the metal and transfer energy by collisions with other particles (1)'] },
    ],
    tip: 'In part b, the marks are for the mechanism. Saying that metals conduct heat well because they are metals scores nothing.',
  },
  {
    subject: 'physics', slug: 'wave-speed-frequency-wavelength', topic: 'Wave speed, frequency and wavelength', group: 'Waves & Sound', criterion: 'A',
    intro: 'A water wave on a pond has a frequency of 2.5 Hz and a wavelength of 0.40 m.',
    parts: [
      { label: 'a', q: 'Calculate the speed of the wave.', marks: 2, answer: ['v = fλ (1)', 'v = 2.5 × 0.40 = 1.0 m/s (1)'] },
      { label: 'b', q: 'The wave moves into shallower water, where its speed falls to 0.60 m/s. The frequency does not change. Calculate the new wavelength.', marks: 2, answer: ['λ = v ÷ f (1)', 'λ = 0.60 ÷ 2.5 = 0.24 m (1)'] },
      { label: 'c', q: 'State whether water waves are transverse or longitudinal and give one reason.', marks: 1, answer: ['Transverse, because the water surface moves up and down at right angles to the direction the wave travels (1)'] },
    ],
    tip: 'When a wave changes medium, frequency stays the same and speed and wavelength change together. Use that to decide which quantity to calculate.',
  },
  {
    subject: 'physics', slug: 'refraction-and-total-internal-reflection', topic: 'Refraction and total internal reflection', group: 'Electromagnetic Waves & Optics', criterion: 'A',
    intro: 'A ray of light travels from air into a rectangular glass block, and later a ray inside the glass hits the glass–air boundary at a large angle.',
    parts: [
      { label: 'a', q: 'State what is meant by refraction.', marks: 1, answer: ['The change in direction of a wave when it passes from one medium into another, caused by a change in speed (1)'] },
      { label: 'b', q: 'Explain why a ray of light bends towards the normal when it enters the glass.', marks: 2, answer: ['Light travels more slowly in glass than in air (1)', 'so the ray bends towards the normal as it enters the denser medium (1)'] },
      { label: 'c', q: 'State two conditions needed for total internal reflection to occur at the glass–air boundary.', marks: 2, answer: ['The light must be travelling from the denser medium (glass) towards the less dense one (air) (1)', 'The angle of incidence must be greater than the critical angle (1)'] },
    ],
    tip: 'Always connect bending to a change in speed. Optical fibres work because of total internal reflection, which is a good example to quote.',
  },
  {
    subject: 'physics', slug: 'parallel-circuits', topic: 'Current, voltage and resistance in parallel circuits', group: 'Electricity & Magnetism', criterion: 'A',
    intro: 'A 6 Ω resistor and a 12 Ω resistor are connected in parallel to a 12 V cell.',
    parts: [
      { label: 'a', q: 'Calculate the current in each resistor.', marks: 2, answer: ['I = V ÷ R (1)', '6 Ω: 2.0 A; 12 Ω: 1.0 A (1)'] },
      { label: 'b', q: 'State the total current drawn from the cell.', marks: 1, answer: ['2.0 + 1.0 = 3.0 A (1)'] },
      { label: 'c', q: 'Calculate the total resistance of the circuit.', marks: 2, answer: ['R = V ÷ I = 12 ÷ 3.0 (1)', 'R = 4.0 Ω (1)'] },
      { label: 'd', q: 'Give one reason why household lights are wired in parallel.', marks: 1, answer: ['Each lamp receives the full supply voltage and can be switched on and off independently (1)'] },
    ],
    tip: 'In parallel, the voltage across each branch is the same and the currents add. The total resistance is always smaller than the smallest branch.',
  },
  {
    subject: 'physics', slug: 'half-life', topic: 'Half-life and radioactive decay', group: 'Nuclear & Atomic Physics', criterion: 'A',
    intro: 'A radioactive isotope has a half-life of 6 hours. A sample has an initial activity of 800 counts per minute.',
    parts: [
      { label: 'a', q: 'State what is meant by half-life.', marks: 1, answer: ['The time taken for the activity (or the number of undecayed nuclei) to fall to half of its original value (1)'] },
      { label: 'b', q: 'Calculate the activity after 18 hours.', marks: 2, answer: ['18 hours is 3 half-lives (1)', '800 → 400 → 200 → 100 counts per minute (1)'] },
      { label: 'c', q: 'Explain why an isotope with a half-life of 6 hours is more suitable as a medical tracer than one with a half-life of 6 years.', marks: 2, answer: ['It decays quickly, so the patient is exposed to radiation for a short time (1)', 'It does not stay radioactive in the body or the environment for years (1)'] },
    ],
    tip: 'Count the number of half-lives first, then halve the activity that many times. A quick table of time and activity avoids slips.',
  },
  {
    subject: 'physics', slug: 'life-cycle-of-a-star', topic: 'The life cycle of a Sun-like star', group: 'Space & Astrophysics', criterion: 'A',
    intro: 'The Sun is a star in the main sequence stage of its life.',
    parts: [
      { label: 'a', q: 'Put these stages in the correct order for a star like the Sun: white dwarf, nebula, red giant, main sequence, protostar.', marks: 3, answer: ['nebula → protostar → main sequence → red giant → white dwarf (3 marks for all correct; 2 for one error; 1 for two errors)'] },
      { label: 'b', q: 'Explain why a main sequence star stays the same size for billions of years.', marks: 2, answer: ['Gravity pulls matter inwards (1)', 'This is balanced by outward pressure from the energy released by nuclear fusion in the core (1)'] },
    ],
    tip: 'Stability questions are about balance. Name both forces or pressures and say that they are equal.',
  },
  {
    subject: 'physics', slug: 'pressure-force-and-area', topic: 'Pressure, force and area', group: 'Pressure & Fluids', criterion: 'A',
    intro: 'A student of mass 60 kg stands on both feet. The area of each shoe in contact with the ground is 0.015 m². Take g = 10 N/kg.',
    parts: [
      { label: 'a', q: 'Calculate the weight of the student.', marks: 1, answer: ['W = mg = 60 × 10 = 600 N (1)'] },
      { label: 'b', q: 'Calculate the pressure on the ground when the student stands on both feet.', marks: 2, answer: ['Total area = 0.030 m² and p = F ÷ A (1)', 'p = 600 ÷ 0.030 = 20 000 Pa (20 kPa) (1)'] },
      { label: 'c', q: 'State the pressure when the student lifts one foot.', marks: 1, answer: ['40 000 Pa (40 kPa), because the area is halved (1)'] },
      { label: 'd', q: 'Explain why wearing snowshoes stops a person sinking into soft snow.', marks: 2, answer: ['Snowshoes have a larger area in contact with the snow (1)', 'The same force spread over a larger area gives a smaller pressure (1)'] },
    ],
    tip: 'Remember to add the areas of both shoes, and note that the force (weight) stays the same when the area changes.',
  },

  // ---------------------------------------------------------------- CHEMISTRY
  {
    subject: 'chemistry', slug: 'atoms-and-isotopes', topic: 'Atoms and isotopes', group: 'Atomic Structure & Periodic Table', criterion: 'A',
    intro: 'Chlorine has two main isotopes, chlorine-35 (³⁵Cl) and chlorine-37 (³⁷Cl). Chlorine has atomic number 17.',
    parts: [
      { label: 'a', q: 'State the number of protons, neutrons and electrons in a neutral atom of ³⁵Cl.', marks: 3, answer: ['17 protons (1)', '18 neutrons (1)', '17 electrons (1)'] },
      { label: 'b', q: 'State what is meant by isotopes.', marks: 1, answer: ['Atoms of the same element with the same number of protons but different numbers of neutrons (1)'] },
      { label: 'c', q: 'The relative atomic mass of chlorine is 35.5. Explain why it is not a whole number.', marks: 2, answer: ['Chlorine is a mixture of isotopes with different masses (1)', 'The relative atomic mass is a weighted average, closer to 35 because ³⁵Cl is more abundant (1)'] },
    ],
    tip: 'Neutrons = mass number − atomic number. Isotopes differ only in neutrons, so their chemical properties are the same.',
  },
  {
    subject: 'chemistry', slug: 'ionic-and-covalent-bonding', topic: 'Ionic and covalent bonding', group: 'Bonding & Structure', criterion: 'A',
    intro: 'Sodium chloride is an ionic compound. Methane (CH₄) is a simple molecular compound.',
    parts: [
      { label: 'a', q: 'Describe how the ionic bond in sodium chloride is formed.', marks: 2, answer: ['A sodium atom transfers an electron to a chlorine atom, forming Na⁺ and Cl⁻ ions (1)', 'Oppositely charged ions are held together by strong electrostatic attraction (1)'] },
      { label: 'b', q: 'Explain why sodium chloride has a high melting point.', marks: 2, answer: ['It has a giant lattice with strong electrostatic forces between the ions in all directions (1)', 'A lot of energy is needed to overcome these forces (1)'] },
      { label: 'c', q: 'Explain why methane has a low melting point.', marks: 2, answer: ['Methane has weak forces between its molecules (1)', 'Little energy is needed to overcome them; the strong covalent bonds inside the molecules are not broken (1)'] },
      { label: 'd', q: 'Explain why sodium chloride conducts electricity when molten but not when solid.', marks: 2, answer: ['In the molten state the ions are free to move and carry the current (1)', 'In the solid the ions are fixed in the lattice (1)'] },
    ],
    tip: 'For melting point, always say what is being overcome. For ionic compounds it is forces between ions; for molecules it is forces between molecules.',
  },
  {
    subject: 'chemistry', slug: 'particle-model-and-changes-of-state', topic: 'The particle model and changes of state', group: 'States of Matter', criterion: 'A',
    intro: 'Water in a beaker is heated until it boils. Its temperature stays at 100 °C while it boils, even though heating continues.',
    parts: [
      { label: 'a', q: 'Describe the arrangement and movement of particles in liquid water.', marks: 2, answer: ['Particles are close together but arranged irregularly (1)', 'They move past one another (1)'] },
      { label: 'b', q: 'Explain why the temperature stays constant while the water boils.', marks: 2, answer: ['The energy supplied is used to overcome the forces between the particles (1)', 'rather than to increase their kinetic energy, so the temperature does not rise (1)'] },
      { label: 'c', q: 'Name the change of state when steam turns back into water.', marks: 1, answer: ['Condensation (1)'] },
    ],
    tip: 'Temperature measures the average kinetic energy of the particles. During a change of state the energy goes into breaking attractions instead.',
  },
  {
    subject: 'chemistry', slug: 'equations-and-conservation-of-mass', topic: 'Chemical equations and conservation of mass', group: 'Chemical Reactions', criterion: 'A',
    intro: 'Magnesium ribbon burns in oxygen with a bright white flame to form a white powder.',
    parts: [
      { label: 'a', q: 'Write a word equation for the reaction.', marks: 1, answer: ['magnesium + oxygen → magnesium oxide (1)'] },
      { label: 'b', q: 'Write a balanced symbol equation, including state symbols.', marks: 2, answer: ['Correct formulae: Mg, O₂, MgO (1)', '2Mg(s) + O₂(g) → 2MgO(s) (balanced with state symbols) (1)'] },
      { label: 'c', q: 'The white powder has a greater mass than the original magnesium. Explain why.', marks: 2, answer: ['The magnesium has combined with oxygen from the air (1)', 'so the product contains the mass of the magnesium plus the mass of the oxygen that joined it (1)'] },
    ],
    tip: 'Balance by changing the numbers in front of formulae, never the small numbers inside them. Then count the atoms of each element on both sides.',
  },
  {
    subject: 'chemistry', slug: 'moles-and-concentration', topic: 'Moles, mass and concentration', group: 'Quantitative Chemistry', criterion: 'A',
    intro: 'A student dissolves 11.7 g of sodium chloride in water and makes the solution up to 500 cm³. (Relative atomic masses: Na = 23, Cl = 35.5.)',
    parts: [
      { label: 'a', q: 'Calculate the relative formula mass of sodium chloride.', marks: 1, answer: ['23 + 35.5 = 58.5 (1)'] },
      { label: 'b', q: 'Calculate the number of moles of sodium chloride in 11.7 g.', marks: 2, answer: ['moles = mass ÷ Mr (1)', '11.7 ÷ 58.5 = 0.20 mol (1)'] },
      { label: 'c', q: 'Calculate the concentration of the solution in mol/dm³.', marks: 2, answer: ['500 cm³ = 0.500 dm³ (1)', 'concentration = 0.20 ÷ 0.500 = 0.40 mol/dm³ (1)'] },
    ],
    tip: 'Convert cm³ to dm³ by dividing by 1000 before you use the concentration equation. It is the most common slip.',
  },
  {
    subject: 'chemistry', slug: 'alkanes-and-alkenes', topic: 'Alkanes, alkenes and combustion', group: 'Organic Chemistry', criterion: 'A',
    intro: 'Ethane (C₂H₆) is an alkane and ethene (C₂H₄) is an alkene.',
    parts: [
      { label: 'a', q: 'Describe a chemical test to distinguish ethene from ethane, and give the result for each.', marks: 3, answer: ['Add bromine water (1)', 'Ethene decolourises it, orange to colourless (1)', 'Ethane causes no change (1)'] },
      { label: 'b', q: 'Write a balanced symbol equation for the complete combustion of ethane.', marks: 2, answer: ['Products carbon dioxide and water (1)', '2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O (1)'] },
    ],
    tip: 'Check your equation by counting each element: 4 C, 12 H and 14 O on each side. Alkenes react with bromine because of the C=C double bond.',
  },
  {
    subject: 'chemistry', slug: 'electrolysis-of-molten-compounds', topic: 'Electrolysis of molten compounds', group: 'Electrochemistry', criterion: 'A',
    intro: 'Molten lead(II) bromide (PbBr₂) is electrolysed using inert electrodes.',
    parts: [
      { label: 'a', q: 'Explain why the lead(II) bromide must be molten.', marks: 1, answer: ['The ions are free to move and carry the current in the liquid state (1)'] },
      { label: 'b', q: 'Name the product at the cathode and explain how it forms.', marks: 2, answer: ['Lead (1)', 'Pb²⁺ ions are attracted to the cathode and gain electrons (reduction) (1)'] },
      { label: 'c', q: 'Name the product at the anode and write the half-equation for its formation.', marks: 3, answer: ['Bromine (1)', '2Br⁻ → Br₂ + 2e⁻ (2: one for correct species, one for balancing)'] },
    ],
    tip: 'Remember OIL RIG: oxidation is loss of electrons (at the anode) and reduction is gain (at the cathode).',
  },
  {
    subject: 'chemistry', slug: 'acid-rain', topic: 'Acid rain and air pollution', group: 'Environmental Chemistry', criterion: 'A',
    intro: 'Burning fossil fuels that contain sulfur releases a gas that contributes to acid rain.',
    parts: [
      { label: 'a', q: 'Name the gas that is released when sulfur-containing fuels are burned.', marks: 1, answer: ['Sulfur dioxide (1)'] },
      { label: 'b', q: 'Explain how this gas leads to acid rain.', marks: 2, answer: ['It dissolves in water droplets in clouds (and reacts with oxygen) (1)', 'forming acidic solutions such as sulfurous or sulfuric acid that fall as rain (1)'] },
      { label: 'c', q: 'Describe two effects of acid rain.', marks: 2, answer: ['Any two: damages limestone and marble buildings and statues; makes lakes acidic and harms fish and other organisms; damages trees and soil'] },
      { label: 'd', q: 'Suggest one way to reduce acid rain.', marks: 1, answer: ['Any one: remove sulfur dioxide from power-station gases (flue gas desulfurisation); use low-sulfur fuel; use renewable energy instead of fossil fuels (1)'] },
    ],
    tip: 'When asked for effects, give a specific example and, where you can, say why it happens (acid reacts with calcium carbonate in limestone).',
  },

  // ------------------------------------------------------------------ BIOLOGY
  {
    subject: 'biology', slug: 'plant-and-animal-cells', topic: 'Plant and animal cell structure', group: 'Cells', criterion: 'A',
    intro: 'Plant and animal cells share some structures, but plant cells have additional ones.',
    parts: [
      { label: 'a', q: 'Name three structures found in plant cells but not in animal cells.', marks: 3, answer: ['Cell wall (1)', 'Chloroplasts (1)', 'Permanent vacuole (1)'] },
      { label: 'b', q: 'State the function of mitochondria.', marks: 2, answer: ['The site of aerobic respiration (1)', 'releasing energy for the cell (1)'] },
      { label: 'c', q: 'State the function of the cell membrane.', marks: 1, answer: ['Controls which substances enter and leave the cell (1)'] },
    ],
    tip: 'Cell wall and cell membrane are different structures. The wall gives support; the membrane controls what passes in and out.',
  },
  {
    subject: 'biology', slug: 'enzymes-and-temperature', topic: 'Enzymes and temperature', group: 'Physiology', criterion: 'C',
    intro: 'A student measures how quickly the enzyme amylase breaks down starch at different temperatures. The rate is slow at 10 °C, fastest at 37 °C, and zero at 70 °C.',
    parts: [
      { label: 'a', q: 'Explain why the rate is slow at 10 °C.', marks: 2, answer: ['Particles have less kinetic energy and move more slowly (1)', 'so there are fewer collisions between enzyme and substrate (1)'] },
      { label: 'b', q: 'Explain why there is no reaction at 70 °C.', marks: 3, answer: ['The enzyme has been denatured (1)', 'The shape of the active site has changed (1)', 'so the substrate can no longer fit into it (1)'] },
      { label: 'c', q: 'State what is meant by the optimum temperature of an enzyme.', marks: 1, answer: ['The temperature at which the enzyme works fastest (1)'] },
    ],
    tip: 'Use the words active site, substrate and denatured. Low temperature slows an enzyme; high temperature destroys it.',
  },
  {
    subject: 'biology', slug: 'photosynthesis-and-limiting-factors', topic: 'Photosynthesis and limiting factors', group: 'Processes', criterion: 'C',
    intro: 'A student investigates how light intensity affects the rate of photosynthesis. The rate rises as light intensity increases, then levels off.',
    parts: [
      { label: 'a', q: 'Write the word equation for photosynthesis.', marks: 2, answer: ['carbon dioxide + water → glucose + oxygen (1)', 'in the presence of light and chlorophyll (1)'] },
      { label: 'b', q: 'Explain why the rate levels off at high light intensity.', marks: 2, answer: ['Another factor is now limiting the rate (1)', 'for example carbon dioxide concentration or temperature (1)'] },
      { label: 'c', q: 'Explain why some growers add carbon dioxide to greenhouses.', marks: 1, answer: ['It increases the rate of photosynthesis, so plants grow faster and give higher yields (1)'] },
    ],
    tip: 'On a graph, a plateau means a different factor is now limiting. Name the factor and say why it matters.',
  },
  {
    subject: 'biology', slug: 'osmosis', topic: 'Diffusion and osmosis', group: 'Cells', criterion: 'C',
    intro: 'A student places potato cylinders in sugar solutions of different concentrations and measures the change in mass after 30 minutes. A cylinder in distilled water gained mass.',
    parts: [
      { label: 'a', q: 'Define osmosis.', marks: 2, answer: ['The net movement of water molecules from a dilute solution to a more concentrated solution (1)', 'through a partially permeable membrane (1)'] },
      { label: 'b', q: 'Explain why the cylinder in distilled water gained mass.', marks: 2, answer: ['The solution inside the cells is more concentrated than the distilled water (1)', 'so water moved into the cells by osmosis (1)'] },
      { label: 'c', q: 'Describe how the results could be used to estimate the concentration inside the potato cells.', marks: 1, answer: ['Plot percentage change in mass against concentration; the concentration where the line crosses zero change in mass is the estimate (1)'] },
    ],
    tip: 'Say that water moves, not the sugar. Describe direction using more dilute to more concentrated.',
  },
  {
    subject: 'biology', slug: 'natural-selection-and-resistance', topic: 'Natural selection and antibiotic resistance', group: 'Evolution', criterion: 'A',
    intro: 'Some bacteria have become resistant to antibiotics that once killed them.',
    parts: [
      { label: 'a', q: 'Explain how antibiotic-resistant bacteria become more common in a population.', marks: 4, answer: ['There is variation: a mutation makes some bacteria resistant (1)', 'The antibiotic kills the non-resistant bacteria (1)', 'Resistant bacteria survive and reproduce, passing on the resistance allele (1)', 'The proportion of resistant bacteria increases over generations (1)'] },
    ],
    tip: 'Use the four steps of natural selection in order: variation, selection pressure, survival and reproduction, inheritance.',
  },
  {
    subject: 'biology', slug: 'food-chains-and-energy-transfer', topic: 'Food chains and energy transfer', group: 'Organisms', criterion: 'A',
    intro: 'Consider this food chain: grass → rabbit → fox. A disease greatly reduces the rabbit population.',
    parts: [
      { label: 'a', q: 'Predict and explain the effect on the amount of grass.', marks: 2, answer: ['Grass will increase (1)', 'because fewer rabbits are eating it (1)'] },
      { label: 'b', q: 'Predict and explain the effect on the fox population.', marks: 2, answer: ['The fox population will decrease (1)', 'because there is less food, so more starve or move away (1)'] },
      { label: 'c', q: 'Give two reasons why only a small proportion of the energy in one trophic level reaches the next.', marks: 2, answer: ['Any two: energy is lost as heat in respiration; some parts of the organism are not eaten; waste such as faeces and urine contains energy'] },
    ],
    tip: 'Follow the change step by step along the chain. Show a link such as less food, so fewer foxes.',
  },
  {
    subject: 'biology', slug: 'selective-breeding-and-genetic-modification', topic: 'Selective breeding and genetic modification', group: 'Biotechnology', criterion: 'A',
    intro: 'A farmer wants to develop a herd of cows that produce more milk.',
    parts: [
      { label: 'a', q: 'Describe how selective breeding could be used to produce cows that give more milk.', marks: 3, answer: ['Choose the cows (and bulls) that produce the most milk (1)', 'Breed them together (1)', 'Select the best offspring and repeat over many generations (1)'] },
      { label: 'b', q: 'State one difference between selective breeding and genetic modification.', marks: 1, answer: ['Genetic modification transfers a gene directly (possibly from another species) into the genome, taking one generation, whereas selective breeding takes many generations (1)'] },
      { label: 'c', q: 'Suggest one ethical concern about genetically modified crops.', marks: 1, answer: ['Any one: possible effects on wild species or biodiversity; unknown long-term health effects; control of seed supply by a few companies (1)'] },
    ],
    tip: 'Selective breeding uses natural variation and takes many generations. Genetic modification changes genes directly.',
  },
  {
    subject: 'biology', slug: 'vaccination-and-herd-immunity', topic: 'Vaccination and herd immunity', group: 'Cells', criterion: 'A',
    intro: 'Vaccination programmes have greatly reduced the number of cases of diseases such as measles.',
    parts: [
      { label: 'a', q: 'Explain how a vaccine gives a person immunity to a disease.', marks: 3, answer: ['The vaccine contains a weakened or dead pathogen, or its antigens (1)', 'This stimulates white blood cells to make antibodies and memory cells (1)', 'If the real pathogen enters later, the response is faster and stronger (1)'] },
      { label: 'b', q: 'Explain what is meant by herd immunity.', marks: 2, answer: ['When a large proportion of the population is immune, the pathogen spreads less (1)', 'which also protects people who cannot be vaccinated, such as babies (1)'] },
    ],
    tip: 'Mention antigens, antibodies and memory cells in that order. Herd immunity protects people who are not vaccinated.',
  },
]

export const getSampleQuestion = (subject: string, slug: string) => SAMPLE_QUESTIONS.find((q) => q.subject === subject && q.slug === slug)
export const sampleQuestionsFor = (subject: SampleSubject) => SAMPLE_QUESTIONS.filter((q) => q.subject === subject)
export const totalMarks = (q: SampleQuestion) => q.parts.reduce((n, p) => n + p.marks, 0)
