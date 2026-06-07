import 'server-only'

export type MSEntry = {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
}
export type MCQEntry = { type: 'mcq'; correct: number }
export type MSRecord = MSEntry | MCQEntry

export const MS: Record<string, MSRecord> = {

  // ── Q1: Nuclear Fission & Decay ─────────────────────────────
  'q1a': {
    type: 'mcq',
    correct: 0, // inline_dropdown: atomic number, neutron, isotopes
  } as MCQEntry,

  'q1b': {
    type: 'mcq',
    correct: 2, // ⁹²₃₆Kr (index 2 in options array)
  } as MCQEntry,

  'q1c': {
    marks: 2,
    exemplar: 'The half-life of barium-141 is approximately 18.5 ± 0.5 minutes. Read from graph: initial activity ≈ 1000 Bq; half = 500 Bq; read time at 500 Bq from graph ≈ 18–19 minutes.',
    keyConcepts: ['half-life is time for activity to halve', 'reading from a graph of activity vs time'],
    keywords: ['half-life', 'activity', 'radioactive decay', 'barium-141'],
    feedbackHit: 'Correctly read the half-life from the decay graph. Well done.',
    feedbackMiss: 'Remember: half-life is the time taken for the activity to fall to HALF its initial value. Start at the initial activity (≈1000 Bq), find half (≈500 Bq), then read across to the time axis.',
  },

  'q1d': {
    marks: 2,
    exemplar: 'Energy needed = 1.18 × 10¹⁰ J. Energy per gram = 82 000 MJ = 8.2 × 10¹⁰ J/g. Mass = (1.18 × 10¹⁰) ÷ (8.2 × 10¹⁰) = 0.144 g (or approximately 0.14–0.15 g). Award 2 marks for correct answer with working; 1 mark for correct answer without working.',
    keyConcepts: ['unit conversion (MJ to J)', 'division to find mass from energy values'],
    keywords: ['energy per gram', 'nuclear fission', 'calculation', 'unit conversion'],
    feedbackHit: 'Correctly converted units and calculated the mass of uranium required.',
    feedbackMiss: 'Key step: convert 82 000 MJ into joules (× 10⁶). Then divide the annual energy requirement by the energy per gram. Check your unit conversions carefully.',
  },

  'q1e': {
    marks: 1,
    exemplar: 'Any reasonable suggestion: collaboration allows scientists with different skills (e.g. physics and chemistry) to contribute complementary expertise, solving problems more effectively. Science as a creative endeavour benefits from diverse perspectives.',
    keyConcepts: ['collaboration in science', 'interdisciplinary teamwork'],
    keywords: ['collaboration', 'different skills', 'complementary expertise', 'science'],
    feedbackHit: 'Good suggestion about the value of scientific collaboration.',
    feedbackMiss: 'Think about what different scientists (physicists vs chemists) can each contribute, and why working together leads to better results than working alone.',
  },

  // ── Q2: Thermal Energy & States of Matter ───────────────────
  'q2a': {
    marks: 2,
    exemplar: 'Heat energy added: Boiling (given), Melting. Heat energy removed: Freezing, Condensing. Award 1 mark per correct answer (Melting in "added"; both Freezing and Condensing in "removed").',
    keyConcepts: ['endothermic state changes (melting, boiling)', 'exothermic state changes (freezing, condensing)'],
    keywords: ['melting', 'freezing', 'condensing', 'state change', 'heat energy'],
    feedbackHit: 'Correctly classified all state changes. Melting and boiling require heat energy; freezing and condensing release it.',
    feedbackMiss: 'Think: when a solid melts, it needs energy to break intermolecular bonds (endothermic). When a gas condenses, bonds form and energy is released (exothermic).',
  },

  'q2b': {
    marks: 2,
    exemplar: 'Similarity: both are types of vaporisation (liquid → gas); both result in a change of state from liquid to gas. Difference (any one): evaporation happens at any temperature whereas boiling only occurs at the boiling point; evaporation is a slow process from the surface while boiling creates bubbles throughout the liquid; boiling happens at constant temperature.',
    keyConcepts: ['evaporation vs boiling', 'surface vs bulk vaporisation', 'temperature dependence of boiling'],
    keywords: ['evaporation', 'boiling', 'vaporisation', 'surface', 'bubbles', 'temperature'],
    feedbackHit: 'Good comparison — identified a valid similarity and a clear difference between evaporation and boiling.',
    feedbackMiss: 'A compare-and-contrast answer needs BOTH a similarity AND a difference. Key difference: evaporation occurs at any temperature from the liquid\'s surface; boiling occurs at a fixed temperature throughout the liquid.',
  },

  'q2c': {
    marks: 2,
    exemplar: 'No cooling effect: cooking oil. Greatest cooling effect: ethanol. The graph shows cooking oil\'s temperature remained approximately constant (flat line), while ethanol showed the greatest drop in temperature.',
    keyConcepts: ['evaporation causes cooling', 'latent heat of vaporisation varies by liquid'],
    keywords: ['cooking oil', 'ethanol', 'cooling effect', 'evaporation', 'graph reading'],
    feedbackHit: 'Correctly identified cooking oil as causing no cooling and ethanol as causing the greatest cooling.',
    feedbackMiss: 'Look at which liquid\'s temperature line remained highest (barely cooled = cooking oil) and which showed the greatest drop below ambient temperature (ethanol).',
  },

  'q2d': {
    marks: 1,
    exemplar: 'Approximately 20.8°C (accept 20–22°C). The temperature of cooking oil (which showed no cooling) represents the laboratory temperature since it barely changed.',
    keyConcepts: ['control substance shows ambient temperature', 'reading from graph'],
    keywords: ['laboratory temperature', 'ambient', 'cooking oil', 'graph'],
    feedbackHit: 'Correctly identified the laboratory temperature from the graph.',
    feedbackMiss: 'The cooking oil acts as a control — it does not evaporate significantly, so its temperature stays close to room temperature. Read the steady-state temperature of the cooking oil line.',
  },

  'q2e': {
    marks: 2,
    exemplar: 'Student B is correct. Cooking oil requires the most energy to evaporate. The graph shows cooking oil did not evaporate (no cooling effect), meaning much more energy would be needed to cause evaporation. Ethanol evaporated readily with a large cooling effect, showing it requires less energy per unit to evaporate. The correct link: the greater the cooling effect, the LESS energy required for evaporation (it evaporates more readily).',
    keyConcepts: ['cooling effect linked to latent heat of vaporisation', 'interpreting comparative data'],
    keywords: ['latent heat', 'evaporation', 'cooking oil', 'ethanol', 'cooling effect', 'energy'],
    feedbackHit: 'Correctly justified which student is right using graph evidence.',
    feedbackMiss: 'Greater cooling effect = liquid evaporates more readily = LESS energy barrier to vaporisation. Cooking oil barely evaporated, showing a high energy requirement for vaporisation. Link your graph reading to the concept of latent heat.',
  },

  // ── Q3: Astrophysics ────────────────────────────────────────
  'q3a': {
    marks: 2,
    exemplar: 'Any two valid differences: (1) Moons orbit planets; stars emit their own light. (2) Stars are gaseous; moons are rocky/solid. (3) Stars do not orbit planets; moons do not emit light. (4) Moons reflect light; stars produce light by nuclear fusion. Accept "satellite" as correct for moon.',
    keyConcepts: ['differences between moons and stars', 'natural satellites vs stellar objects'],
    keywords: ['moon', 'star', 'orbit', 'light emission', 'planet', 'reflection'],
    feedbackHit: 'Stated two valid differences between moons and stars.',
    feedbackMiss: 'Think about: (1) what they orbit — moons orbit planets, stars are orbited by planets; (2) light — stars produce their own light via nuclear fusion, moons only reflect light from a star.',
  },

  'q3b': {
    marks: 2,
    exemplar: 'Galileo observed the four moons orbiting Jupiter, not Earth. If the geocentric model were true, everything would orbit Earth — including these moons. The observation of bodies orbiting a planet other than Earth disproved the geocentric model.',
    keyConcepts: ['geocentric model', 'observational evidence disproving geocentrism'],
    keywords: ['geocentric', 'orbit', 'Jupiter', 'moons', 'evidence', 'disprove'],
    feedbackHit: 'Correctly explained how Galileo\'s moons disproved geocentrism.',
    feedbackMiss: 'The key: the geocentric model says EVERYTHING orbits Earth. Galileo showed that Jupiter\'s moons orbit Jupiter, not Earth. This is direct observational evidence against the geocentric model.',
  },

  'q3c': {
    marks: 1,
    exemplar: 'Any reasonable suggestion: liquid water could support life (as we know it requires water). Water on Europa could indicate conditions for microbial life or indicate habitability. Scientists are searching for evidence of life beyond Earth.',
    keyConcepts: ['conditions for life', 'water as requirement for life'],
    keywords: ['liquid water', 'life', 'habitability', 'Europa', 'astrobiology'],
    feedbackHit: 'Good suggestion — liquid water is essential for life as we know it.',
    feedbackMiss: 'Think about the basic requirements for life. Water is essential for all known life forms — finding liquid water on another world suggests it might support life.',
  },

  'q3d': {
    marks: 2,
    exemplar: 'Any two: (1) All EM waves travel at the same speed in a vacuum (3 × 10⁸ m/s). (2) All are transverse waves. (3) All can travel through a vacuum. (4) All obey the wave equation (v = fλ). (5) All transfer energy.',
    keyConcepts: ['properties of EM spectrum', 'transverse waves', 'speed of light in vacuum'],
    keywords: ['transverse', 'vacuum', 'speed of light', '3 × 10⁸ m/s', 'electromagnetic'],
    feedbackHit: 'Correctly stated two shared properties of all EM waves.',
    feedbackMiss: 'Key properties shared by ALL EM waves: they all travel at c = 3 × 10⁸ m/s in vacuum, they are all transverse waves, and they can all travel through a vacuum (unlike sound).',
  },

  // ── Q4: Motor Planning ─────────────────────────────────────
  'q4a': {
    marks: 1,
    exemplar: 'Heat energy OR sound energy. The motor produces waste heat due to resistance in the coils, and may produce sound from mechanical vibration.',
    keyConcepts: ['wasted energy in motors', 'energy transformations'],
    keywords: ['heat', 'sound', 'wasted energy', 'motor', 'resistance'],
    feedbackHit: 'Correctly identified a form of wasted energy in an electric motor.',
    feedbackMiss: 'In an electric motor, electrical energy is converted to kinetic energy (useful) plus waste heat (from resistance in wires) and sometimes sound (from vibrations).',
  },

  'q4b': {
    marks: 2,
    exemplar: 'A valid research question linking the independent variable (height or work done) to efficiency. Example: "How does the height to which a mass is lifted affect the efficiency of an electric motor?" Must link an IV to the DV (efficiency) and be testable.',
    keyConcepts: ['formulating a research question', 'independent and dependent variables'],
    keywords: ['research question', 'efficiency', 'independent variable', 'dependent variable', 'motor'],
    feedbackHit: 'Good research question — clearly links IV and DV.',
    feedbackMiss: 'A good research question must name both the variable you are changing (IV) and what you are measuring (DV = efficiency). Format: "How does [IV] affect [DV]?"',
  },

  'q4c': {
    marks: 2,
    exemplar: 'Vary height by lifting the mass to different measured heights (e.g. 10, 20, 30, 40, 50 cm). Measure height using a ruler. For each height, calculate ΔEp = mgh using the fixed mass value. This gives the useful energy output for each trial.',
    keyConcepts: ['varying independent variable', 'calculating gravitational potential energy'],
    keywords: ['height', 'ruler', 'ΔEp', 'mgh', 'useful energy', 'independent variable'],
    feedbackHit: 'Outlined a clear method for varying height and calculating useful energy.',
    feedbackMiss: 'Outline both steps: (1) how to change the height (use a ruler, set different values); (2) how to calculate useful energy output (ΔEp = mgh — multiply mass × 9.81 × measured height).',
  },

  'q4d': {
    marks: 3,
    exemplar: 'Circuit must include: Motor (M) connected in series with the Ammeter (A); Voltmeter (V) connected in parallel (across) the motor; both connected to the power supply. Award 1 mark each for: motor present, ammeter in series, voltmeter in parallel across motor.',
    keyConcepts: ['circuit diagrams', 'ammeter in series', 'voltmeter in parallel'],
    keywords: ['ammeter', 'voltmeter', 'parallel', 'series', 'motor', 'circuit'],
    feedbackHit: 'Drew a correct circuit with ammeter in series and voltmeter in parallel.',
    feedbackMiss: 'Key rule: ammeters are ALWAYS in series (current flows through them); voltmeters are ALWAYS in parallel across the component you are measuring voltage across (the motor).',
  },

  'q4e': {
    marks: 2,
    exemplar: 'The student must also measure time (of the lift). Total energy = power × time = V × I × t. So they measure: voltage (V), current (I, already measured), and time (t). Total energy in joules = V × I × t.',
    keyConcepts: ['energy = power × time', 'measuring time for energy calculation'],
    keywords: ['time', 'energy', 'power', 'V × I × t', 'total energy'],
    feedbackHit: 'Correctly identified time as the additional measurement and stated E = Pt = VIt.',
    feedbackMiss: 'Power = V × I (already known). But energy = power × time. So you need to measure the TIME for which the motor runs. Then: E = V × I × t.',
  },

  // ── Q5: Investigation Design ────────────────────────────────
  'q5a': {
    marks: 14,
    exemplar: 'Full mark scheme uses a rubric with four components:\n\nVariables (max 4): IV = voltage supplied (V); DV = time taken / efficiency (%); Control 1 = mass lifted (because changing mass changes useful energy output); Control 2 = height lifted (because changing height changes ΔEp). Award 1 mark each with justification for controls.\n\nMethod (max 2): Complete method described with measurements of voltage AND time AND sufficient trials (at least 5 voltage values, at least 3 trials each).\n\nData (max 4): At least 5 voltage increments or three trials; plans to measure time and current.\n\nProcessing (max 4): Plans to calculate useful energy (ΔEp = mgh) AND total energy (E = VIt) AND efficiency = (ΔEp/E) × 100.',
    keyConcepts: ['experimental design', 'control variables and justification', 'calculating efficiency from electrical and mechanical energy'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'efficiency', 'mgh', 'VIt', 'method', 'validity'],
    feedbackHit: 'Well-designed investigation with clear variables, justified controls, detailed method and correct data processing.',
    feedbackMiss: 'Check: (1) Did you name AND justify BOTH control variables? (2) Is your method detailed enough for another student to follow? (3) Did you include how to calculate BOTH useful energy (ΔEp = mgh) AND total energy (E = VIt)?',
  },

  // ── Q6: Data Processing ────────────────────────────────────
  'q6a': {
    marks: 2,
    exemplar: 'ΔEp = mgh = 0.050 × 9.81 × 0.95 = 0.465975 J ≈ 0.47 J. Award 2 marks for correct final answer (rounded to 2 or more sf). Award 1 mark for 46.6 J (no conversion of mass to kg or height to metres).',
    keyConcepts: ['gravitational potential energy formula ΔEp = mgh', 'unit conversion (g to kg, cm to m)'],
    keywords: ['ΔEp', 'mgh', '9.81', 'gravitational potential energy', '0.050 kg', '0.95 m'],
    feedbackHit: 'Correctly calculated the change in GPE using ΔEp = mgh.',
    feedbackMiss: 'Formula: ΔEp = mgh. Check units: mass must be in kg (50 g = 0.050 kg), height must be in metres (95.0 cm = 0.950 m), g = 9.81 N/kg.',
  },

  'q6b': {
    marks: 2,
    exemplar: 'Mass is the independent variable, so voltage must be controlled (kept the same). If voltage changed between trials, the power input would change, making it impossible to determine whether changes in efficiency were due to mass or voltage. Using the same voltage ensures any changes in efficiency are only due to the mass being lifted.',
    keyConcepts: ['control variables ensure validity', 'isolating the independent variable'],
    keywords: ['control variable', 'voltage', 'validity', 'independent variable', 'mass', 'efficiency'],
    feedbackHit: 'Correctly explained how constant voltage ensures validity by isolating the independent variable.',
    feedbackMiss: 'State what was controlled (voltage), why it was controlled (to isolate mass as the only changing variable), and what would happen if it was not controlled (efficiency changes could be due to voltage, not mass).',
  },

  'q6c': {
    marks: 3,
    exemplar: 'Table with correct column headers: Mass/g | Current/A | Time/s. Data in increasing order of mass: 10/0.12/4.32; 20/0.14/4.68; 30/0.15/4.74; 40/0.17/5.16; 50/0.18/5.21. Award 1 mark each for: data in correct order, column headers correct, units only in headers.',
    keyConcepts: ['data organisation', 'table formatting with units in headers', 'ordering data by IV'],
    keywords: ['table', 'headers', 'units', 'Mass/g', 'Current/A', 'Time/s', 'increasing order'],
    feedbackHit: 'Correctly organised data with proper headers, units in column headers only, and data in increasing order of mass.',
    feedbackMiss: 'Three marks, three criteria: (1) units in column headers only (e.g. Mass/g), not in data cells; (2) headers are correct; (3) data listed in increasing order of mass (10, 20, 30, 40, 50 g).',
  },

  'q6d': {
    marks: 3,
    exemplar: 'Total energy = V × I × t = 2 × 0.18 × 5.21 = 1.876 J (or 1.88 J). Efficiency = (ΔEp ÷ total energy) × 100 = (0.466 ÷ 1.876) × 100 = 24.8% ≈ 25%. Award marks: correct formula for total energy (1); correct value of total energy (1); correct efficiency calculation using ecf from part (a) (1).',
    keyConcepts: ['total energy = VIt', 'efficiency calculation', 'error carried forward'],
    keywords: ['V × I × t', 'total energy', 'efficiency', '2V', '0.18A', '5.21s'],
    feedbackHit: 'Correctly calculated total energy and efficiency.',
    feedbackMiss: 'Total energy E = V × I × t = 2 × 0.18 × 5.21. Then efficiency = (useful energy from part a) ÷ (total energy) × 100. Make sure to use your answer from part (a) — ecf applies.',
  },

  // ── Q7: Projectile Motion ───────────────────────────────────
  'q7a': {
    type: 'mcq',
    correct: 3, // Graph D (index 3)
  } as MCQEntry,

  'q7b': {
    marks: 2,
    exemplar: 'Height at 0° ≈ 5.1 ± 0.1 m. Angle when height = 0 m ≈ 82 ± 2 degrees. Both read from the line of best fit on Graph D.',
    keyConcepts: ['reading intercepts from a graph of best fit', 'identifying y-intercept and x-intercept'],
    keywords: ['y-intercept', 'x-intercept', 'graph reading', 'launch angle', 'maximum height'],
    feedbackHit: 'Correctly read both intercept values from the graph.',
    feedbackMiss: 'Read from the LINE OF BEST FIT, not from individual data points. The y-intercept gives height at 0°; the x-intercept gives the angle at which height = 0.',
  },

  'q7c': {
    marks: 3,
    exemplar: 'The prediction is partially correct: as the angle increases, the maximum height does decrease (this is supported by the data). However, the relationship is NOT inverse proportion. In inverse proportion, doubling the IV would halve the DV. The data shows this is not the case — e.g. doubling the angle does not halve the height. Additionally, the graph has a y-intercept (height when angle = 0 is approximately 5.1 m), which is not consistent with inverse proportion (which would pass through the origin).',
    keyConcepts: ['inverse proportion', 'testing predictions against data', 'properties of inverse proportion graphs'],
    keywords: ['inverse proportion', 'intercept', 'doubling', 'halving', 'prediction', 'validity'],
    feedbackHit: 'Good discussion — identified that decrease is correct but inverse proportion is not supported by the graph.',
    feedbackMiss: 'Two parts to this: (1) Does the height decrease? Yes — prediction correct on direction. (2) Is it inverse proportion? No — look for evidence: does doubling the angle halve the height? Does the graph pass through the origin? Inverse proportion requires both.',
  },

  'q7d': {
    type: 'mcq',
    correct: 1, // height (index 1)
  } as MCQEntry,

  'q7e': {
    marks: 1,
    exemplar: 'Repeated trials at each angle and calculate a mean. OR: Use a more accurate method for measuring height (e.g. video/camera).',
    keyConcepts: ['improving reliability through repeated trials', 'reducing random error'],
    keywords: ['repeated trials', 'mean', 'reliability', 'outlier', 'random error'],
    feedbackHit: 'Good suggestion — repeated trials are the standard method to reduce outliers.',
    feedbackMiss: 'Outliers are often due to random errors. The best way to identify and reduce their impact is to repeat each measurement multiple times and calculate a mean.',
  },

  'q7f': {
    marks: 3,
    exemplar: 'The height reached would be DECREASED. Reason: Air resistance acts as an additional force opposing the motion of the ball. The net upward force on the ball is reduced, causing greater deceleration. Therefore less kinetic energy is converted to gravitational potential energy, and the ball reaches a lower height. Energy is also transferred to the surroundings as heat/thermal energy.',
    keyConcepts: ['air resistance opposes motion', 'energy transfer to heat', 'net force and deceleration'],
    keywords: ['decreased', 'air resistance', 'opposing force', 'deceleration', 'kinetic energy', 'heat'],
    feedbackHit: 'Correctly reasoned that height decreases and explained using forces and energy.',
    feedbackMiss: 'Three marks — need three points: (1) height is DECREASED; (2) air resistance acts against motion / increases total resistive force; (3) energy converted to heat / less KE converted to GPE.',
  },

  'q7g': {
    marks: 2,
    exemplar: 'Shape: use a streamlined or aerodynamic shape (e.g. teardrop) so air flows around it more smoothly, reducing the number of collisions with air particles. Size: use a smaller object so less surface area is exposed to air particle collisions. Material: use a denser material (more mass) so the air resistance force is smaller relative to the inertia/momentum of the ball.',
    keyConcepts: ['streamlining to reduce drag', 'surface area and air resistance', 'particle theory of air resistance'],
    keywords: ['streamlined', 'surface area', 'air particles', 'collisions', 'dense', 'inertia', 'particle theory'],
    feedbackHit: 'Good suggestions linking shape/size/material to air resistance using particle theory.',
    feedbackMiss: 'Remember to link each suggestion to particle theory: air resistance is caused by collisions of air particles with the ball\'s surface. Fewer collisions (smaller area, streamlined shape) = less air resistance. More mass = less effect per unit mass.',
  },

  'q7h': {
    marks: 3,
    exemplar: 'Dependent variable: time of flight OR horizontal range (either accepted). Control variable 1: must be consistent with launch angle as IV and chosen DV (e.g. spring compression / launch speed — because this affects the initial KE and therefore the range/flight time). Control variable 2: mass of ball OR type of ball — because different masses have different inertia affecting the motion. Accept any two control variables that are consistent with the IV and DV chosen.',
    keyConcepts: ['extending investigations', 'identifying relevant control variables', 'projectile motion variables'],
    keywords: ['time of flight', 'horizontal range', 'control variable', 'spring compression', 'mass', 'launch speed'],
    feedbackHit: 'Good extension — identified a valid DV and two appropriate control variables.',
    feedbackMiss: 'Choose a DV that can actually be measured in projectile motion (time of flight or horizontal range). Then identify two things that would affect that DV (other than the angle) — these are your control variables.',
  },

  // ── Q8: Ultrasound & X-rays ─────────────────────────────────
  'q8a': {
    marks: 3,
    exemplar: 'Total distance = speed × time = 1600 × (1 × 10⁻⁴) = 0.16 m. Distance to stone = 0.16 ÷ 2 = 0.08 m = 8.0 cm. Award 1 mark for using d = v×t; 1 mark for halving (one-way distance); 1 mark for correct answer in cm (8.0 cm). Ecf: if incorrect distance 0.16 m then 16 cm (award 2 marks).',
    keyConcepts: ['wave speed formula d = vt', 'ultrasound echo — two-way travel time', 'unit conversion metres to centimetres'],
    keywords: ['d = vt', 'echo', 'reflection', 'half', '1600 m/s', '10⁻⁴ s', 'centimetres'],
    feedbackHit: 'Correctly applied d = vt and halved for the one-way distance.',
    feedbackMiss: 'Two key steps: (1) d = v × t = 1600 × 10⁻⁴ = 0.16 m total (both ways). (2) Distance to stone = 0.16 ÷ 2 = 0.08 m = 8 cm (the wave travels TO the stone and BACK, so halve the total distance).',
  },

  'q8b': {
    marks: 16,
    exemplar: 'Full marks require addressing all five bullet points:\n\n1. Wave mechanism: Ultrasound — sound waves emitted, reflect off tissue boundaries, time delay creates image. X-rays — high-energy EM waves, absorbed differently by dense (bone) vs soft tissue, shadow image on detector.\n\n2. Health impacts: Ultrasound — harmless, no ionising radiation, safe for foetus. X-rays — ionising radiation, increases cancer risk, particularly harmful to developing foetus; shielding reduces but does not eliminate risk.\n\n3. Economic implications: Ultrasound — $40 000/machine, $500/scan (more expensive per scan). X-rays — $30 000/machine, $150/image (cheaper); for a country with limited resources, x-rays allow more patients to be screened; however health costs of radiation damage may offset savings.\n\n4. Ethical implications: Using x-rays on pregnant women risks harm to foetus without consent — conflicts with principle of "do no harm". Not providing any imaging is also ethically problematic. Ultrasound is ethically preferable for pregnant women.\n\n5. Conclusion: Should give a justified opinion. Ultrasound is better for pregnant women due to safety and comparable (if more expensive) cost. X-rays better for bone imaging and general diagnosis if cost is the primary constraint.',
    keyConcepts: ['ultrasound vs x-ray image formation', 'ionising vs non-ionising radiation', 'ethics in science and medicine', 'economic analysis'],
    keywords: ['ultrasound', 'x-ray', 'reflection', 'ionising', 'cancer risk', 'foetus', 'ethics', 'economic', 'cost', 'justify'],
    feedbackHit: 'Strong extended response addressing wave physics, health, economics, ethics and giving a justified conclusion.',
    feedbackMiss: 'This question requires five components — check each: (1) how each wave creates an image; (2) health impacts with specifics; (3) both positive AND negative economic points; (4) an ethical point; (5) a conclusion that explicitly states and justifies your opinion.',
  },

  'q8c': {
    marks: 5,
    exemplar: 'Discussion of concern (up to 4 marks, any four relevant points): (1) Evidence of large numbers of selective terminations of female pregnancies. (2) Terminations should not take place based on sex alone (ethical concern). (3) A highly imbalanced sex ratio leads to fewer stable family structures / difficulty finding partners. (4) Workforce supply issues — fewer women in workforce. (5) Future fall in birth rate / population pyramid problems. (6) Difficult for males to find female partners.\n\nEthical suggestion (1 mark): introduce legislation preventing medical staff from revealing sex of foetus before birth OR run public education campaigns about the consequences of sex-selective termination.',
    keyConcepts: ['sex ratio imbalance and societal consequences', 'medical ethics', 'ethical actions in science'],
    keywords: ['sex ratio', 'termination', 'legislation', 'ethics', 'education', 'workforce', 'population'],
    feedbackHit: 'Good discussion of societal consequences and a clear ethical suggestion.',
    feedbackMiss: 'Four points for discussion: think about social (family structures, finding partners), economic (workforce), demographic (population). One mark for a specific ethical action — it must be something a government can actually DO.',
  },
}
