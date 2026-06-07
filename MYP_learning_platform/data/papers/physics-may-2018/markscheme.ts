import 'server-only'
import type { MSRecord } from '@/data/papers/physics-nov-2023/markscheme'

export const MS: Record<string, MSRecord> = {
  // ── Q1: Magnetism & EM Induction ──
  '1a': { type: 'mcq', correct: 1 }, // B is correct field lines diagram

  '1b': {
    marks: 2,
    exemplar: 'Use a stronger magnet; move the magnet faster into the coil; increase the number of turns in the coil; use a coil with lower resistance.',
    keyConcepts: ['stronger magnet increases flux', 'faster movement increases rate of change of flux', 'more turns increases induced EMF', 'lower resistance increases current'],
    keywords: ['stronger magnet', 'faster', 'more turns', 'coils', 'resistance'],
    feedbackHit: 'Good — you identified valid ways to increase induced current.',
    feedbackMiss: 'Think about what factors affect the size of the induced EMF and current: magnet strength, speed of movement, and coil properties.',
  },

  '1c': {
    marks: 1,
    exemplar: 'The induced current will flow in the opposite direction.',
    keyConcepts: ['reversing magnet polarity reverses current direction', 'Lenz\'s law — induced current opposes change'],
    keywords: ['opposite direction', 'reverse', 'south pole', 'current direction'],
    feedbackHit: 'Correct — reversing the pole reverses the direction of the induced current.',
    feedbackMiss: 'The south pole entering creates an opposite change in magnetic flux compared to the north pole, so the induced current reverses direction.',
  },

  '1d': {
    marks: 2,
    exemplar: 'V_s / V_p = N_s / N_p → V_s = 110 × (20/10) = 220 V',
    keyConcepts: ['transformer equation: V_s/V_p = N_s/N_p', 'step-up transformer doubles voltage when turns ratio is 2:1'],
    keywords: ['transformer equation', '220', '220 V', 'turns ratio', 'V_s/V_p = N_s/N_p'],
    feedbackHit: 'Correct — you applied the transformer equation to find 220 V.',
    feedbackMiss: 'Use the transformer equation: V_s/V_p = N_s/N_p. With V_p = 110 V, N_p = 10, N_s = 20: V_s = 110 × 20/10 = 220 V.',
  },

  '1e': {
    marks: 2,
    exemplar: 'P_primary = 24 × 2.50 = 60 W; P_secondary = 12 × 4.75 = 57 W; efficiency = 57/60 = 0.95 = 95%',
    keyConcepts: ['power = voltage × current', 'efficiency = useful power output / total power input', 'efficiency = P_secondary / P_primary'],
    keywords: ['60 W', '57 W', '95%', '0.95', 'power', 'efficiency'],
    feedbackHit: 'Excellent — correct calculation of both powers and efficiency.',
    feedbackMiss: 'Calculate power in each coil (P = VI), then efficiency = P_secondary / P_primary. Primary: 24 × 2.50 = 60 W; Secondary: 12 × 4.75 = 57 W; Efficiency = 57/60 = 95%.',
  },

  '1f': {
    marks: 2,
    exemplar: 'Alternating current creates a constantly changing magnetic field in the primary coil. A changing magnetic field continuously induces a current in the secondary coil. Direct current only induces a current when it is switched on or off.',
    keyConcepts: ['AC produces constantly changing magnetic field', 'changing magnetic field continuously induces EMF in secondary', 'DC only induces current when switched on/off — no continuous output'],
    keywords: ['alternating current', 'changing magnetic field', 'continuously', 'direct current', 'switched on', 'switched off'],
    feedbackHit: 'Good — you explained the key difference between AC and DC for transformers.',
    feedbackMiss: 'AC continuously changes direction, creating a constantly changing magnetic field that continuously induces a current. DC is constant and only induces current briefly when switched on or off.',
  },

  // ── Q2: Dry Ski Slope — Energy ──
  '2a': {
    marks: 3,
    exemplar: 'Velocity → Speed in a particular direction; Kinetic energy → Energy due to the motion of an object; Power → Energy transformed per unit time.',
    keyConcepts: ['velocity = speed with direction', 'kinetic energy = energy of motion', 'power = energy per unit time'],
    keywords: ['velocity', 'direction', 'kinetic energy', 'motion', 'power', 'per unit time'],
    feedbackHit: 'All three definitions correctly matched.',
    feedbackMiss: 'Velocity is speed in a particular direction; KE is the energy of a moving object; Power is how quickly energy is transferred.',
  },

  '2b': { type: 'mcq', correct: 3 }, // Gravitational potential (index 3)

  '2c': {
    marks: 3,
    exemplar: 'GPE = mgh = 52 × 10 × 50 = 26 000 J = 26 kJ',
    keyConcepts: ['GPE = mgh', 'mass = 52 kg', 'g = 10 ms⁻²', 'height = 50 m', 'GPE = 26 000 J = 26 kJ'],
    keywords: ['26', '26 kJ', '26000', 'mgh', 'gravitational potential energy', '52', '50'],
    feedbackHit: 'Correct calculation of gravitational potential energy.',
    feedbackMiss: 'Use GPE = mgh. Mass = 52 kg, g = 10 ms⁻², height = 50 m. GPE = 52 × 10 × 50 = 26 000 J = 26 kJ.',
  },

  '2d': {
    marks: 1,
    exemplar: 'Friction (accept: air resistance / drag).',
    keyConcepts: ['friction between skis and slope', 'air resistance (drag) acts against motion'],
    keywords: ['friction', 'air resistance', 'drag'],
    feedbackHit: 'Correct — friction (and air resistance) reduces the skier\'s speed.',
    feedbackMiss: 'The force that opposes motion and reduces speed is friction (between skis and slope) or air resistance.',
  },

  '2e': {
    marks: 1,
    exemplar: 'Kinetic energy (~40%), thermal/heat energy (~50%), sound energy (~10%).',
    keyConcepts: ['40% kinetic energy at base', '50% thermal energy due to friction', '10% sound energy'],
    keywords: ['kinetic', '40%', 'thermal', 'heat', '50%', 'sound', '10%'],
    feedbackHit: 'Correct energy outputs identified with percentages.',
    feedbackMiss: 'The skier\'s initial gravitational potential energy is converted to: kinetic energy (40%), thermal/heat energy due to friction (50%), and sound energy (10%).',
  },

  // ── Q3: Heat Transfer ──
  '3a': { type: 'mcq', correct: 1 }, // Convection (index 1)

  '3b': {
    marks: 3,
    exemplar: 'Cold air sinks (or hot air rises). Hot air is less dense than cold air so it rises. Positioning cooling units at the top cools the air there, which then sinks and cools the whole slope more effectively.',
    keyConcepts: ['cold air denser → sinks', 'hot air less dense → rises', 'convection currents distribute cooling throughout building', 'cooling at top more effective'],
    keywords: ['cold air', 'sinks', 'hot air', 'rises', 'less dense', 'convection', 'effective'],
    feedbackHit: 'Good explanation using density difference and convection.',
    feedbackMiss: 'Hot air is less dense than cold air so it rises. Cold air is denser so it sinks. Cooling units at the top cool the air which then sinks, cooling the whole slope by convection.',
  },

  '3c': {
    marks: 3,
    exemplar: 'High energy particles (molecules) at the surface of the liquid have enough energy to escape (evaporate). Lower energy particles are left behind. The average kinetic energy of the remaining liquid decreases, so the temperature decreases.',
    keyConcepts: ['high energy particles escape from surface', 'lower energy particles remain', 'average kinetic energy decreases', 'temperature is proportional to average KE'],
    keywords: ['high energy', 'particles', 'escape', 'surface', 'lower energy', 'remain', 'average kinetic energy', 'temperature decreases'],
    feedbackHit: 'Excellent — correctly explained evaporative cooling using particle model.',
    feedbackMiss: 'The most energetic particles escape from the surface (evaporate). The remaining particles have lower average kinetic energy. Since temperature is related to average KE, the temperature of the remaining liquid falls.',
  },

  '3d': {
    marks: 2,
    exemplar: 'Silver / white / shiny / metallic. These colours are poor absorbers (good reflectors) of infrared radiation, so the cannon absorbs less thermal energy from the surroundings.',
    keyConcepts: ['silver/white/shiny/metallic = poor absorber of IR', 'good reflector of infrared radiation', 'reduces energy absorbed from surroundings'],
    keywords: ['silver', 'white', 'shiny', 'metallic', 'infrared', 'poor absorber', 'good reflector'],
    feedbackHit: 'Correct colour and correct reference to infrared radiation.',
    feedbackMiss: 'Silver, white, or shiny surfaces are poor absorbers of infrared radiation and therefore reflect more energy, keeping the cannon cooler.',
  },

  // ── Q4: Water Clocks ──
  '4a': {
    marks: 1,
    exemplar: 'How does the area of the hole affect the time it takes to fill/empty the container?',
    keyConcepts: ['question links IV (area) to DV (time)', 'WTTE — do not accept "time to empty" alone'],
    keywords: ['area', 'hole', 'time', 'fill', 'empty', 'affect'],
    feedbackHit: 'Good research question linking area to time.',
    feedbackMiss: 'Your question should link the independent variable (area of hole) to the dependent variable (time to fill/empty the container).',
  },

  '4b': {
    marks: 3,
    exemplar: 'As the area of the hole increases, the time to fill the container will decrease. The larger the hole, the greater the amount of water flowing through per unit time, so the container fills faster (or empties faster). This can be expressed as: the area and time are inversely proportional.',
    keyConcepts: ['prediction links IV to DV', 'larger area → more water flow per second → shorter time', 'inverse relationship between area and time'],
    keywords: ['increases', 'decreases', 'inverse', 'water flow', 'larger hole', 'faster'],
    feedbackHit: 'Good hypothesis with prediction and scientific reasoning.',
    feedbackMiss: 'Your hypothesis needs: a clear prediction (e.g. as area increases, time decreases) AND a scientific explanation (larger hole → greater flow rate → less time to fill).',
  },

  '4c': {
    marks: 3,
    exemplar: 'Independent: Area of the out-flow tube. Dependent: Time to fill the second container. Control: Type of liquid, Volume of second container, Viscosity of the liquid.',
    keyConcepts: ['IV = area of out-flow tube', 'DV = time to fill second container', 'CV = type of liquid AND viscosity'],
    keywords: ['independent', 'area', 'dependent', 'time', 'control', 'liquid', 'viscosity', 'volume'],
    feedbackHit: 'Variables correctly identified and classified.',
    feedbackMiss: 'IV = area of hole (what you change); DV = time to fill (what you measure); CV = things kept constant (liquid type, viscosity, volume).',
  },

  '4d': {
    marks: 2,
    exemplar: 'Stopwatch or timer; calipers or ruler (to measure the diameter/area of the hole); measuring cylinder.',
    keyConcepts: ['stopwatch to measure time', 'calipers/ruler to measure hole size', 'measuring cylinder for liquid volume'],
    keywords: ['stopwatch', 'timer', 'calipers', 'ruler', 'measuring cylinder'],
    feedbackHit: 'Correct equipment named including measurement device for hole size.',
    feedbackMiss: 'You need a timing device (stopwatch) and a device to measure the hole size (calipers or ruler). A measuring cylinder is also useful.',
  },

  '4e': {
    marks: 3,
    exemplar: 'Measure the time taken to fill the second container for at least 5 different areas of the hole (e.g. 0.5, 1.0, 1.5, 2.0, 2.5 cm²). Repeat each measurement 3 times. Calculate the mean time for each area.',
    keyConcepts: ['minimum 5 different values of IV', 'minimum 3 repeats per value', 'calculate mean for reliability'],
    keywords: ['5', 'different', 'increments', '3 repeats', 'mean', 'average', 'trials'],
    feedbackHit: 'Good data plan with sufficient increments and repeats.',
    feedbackMiss: 'Describe: measure time for at least 5 different hole areas; repeat each 3 times; calculate the mean.',
  },

  '4f': {
    marks: 1,
    exemplar: 'Variation of fill time with area of the hole / How the area of the hole affects the time to fill the container.',
    keyConcepts: ['title links IV (area) and DV (fill time)'],
    keywords: ['area', 'fill time', 'variation', 'affect'],
    feedbackHit: 'Title correctly links IV and DV.',
    feedbackMiss: 'The graph title must reference both variables: the area of the hole (IV) and the fill time (DV).',
  },

  '4g': {
    marks: 2,
    exemplar: 'As the inverse of the area increases, the fill time increases proportionally. The relationship is directly proportional (straight line through the origin).',
    keyConcepts: ['Graph 2: fill time vs 1/area is a straight line through origin', 'directly proportional relationship', 't ∝ 1/a'],
    keywords: ['proportional', 'straight line', 'origin', 'increases', 'directly proportional'],
    feedbackHit: 'Correct description of the proportional relationship.',
    feedbackMiss: 'Graph 2 shows fill time vs inverse area. The straight line through the origin means time is directly proportional to 1/area.',
  },

  '4h': {
    marks: 2,
    exemplar: 'k = gradient of Graph 2 = Δ(fill time) / Δ(1/area) ≈ 15 s cm²',
    keyConcepts: ['k = gradient of straight-line graph', 'use two widely spaced points', 'k ≈ 15 s cm²'],
    keywords: ['gradient', '15', 's cm²', 'constant', 'proportionality'],
    feedbackHit: 'Correct calculation of the constant of proportionality from the gradient.',
    feedbackMiss: 'The constant of proportionality = gradient of Graph 2. Choose two well-separated points and calculate Δy/Δx ≈ 15 s cm².',
  },

  '4i': {
    marks: 2,
    exemplar: 'k = t × a → a = k/t = 15/90 ≈ 0.17 cm²',
    keyConcepts: ['t = k/a → a = k/t', 'a = 15/90 = 0.167 cm² ≈ 0.17 cm²'],
    keywords: ['0.17', '0.167', 'cm²', 'area', '90', 'k/t'],
    feedbackHit: 'Correct use of the proportionality constant to find the area.',
    feedbackMiss: 'From t = k/a, rearrange to a = k/t. With k ≈ 15 s cm² and t = 90 s: a = 15/90 ≈ 0.17 cm².',
  },

  // ── Q5: Design (banded) ──
  '5a': {
    marks: 13,
    exemplar: 'Variables: IV = volume of water; DV = time to empty; CV = size of hole, type of liquid, temperature. Equipment: measuring cylinder, stopwatch, container with fixed hole, ruler. Method: measure 100 mL of water, pour into container, start stopwatch when tap opened, stop when empty, record time. Repeat for 200, 300, 400, 500 mL. Three trials each. Calculate mean.',
    keyConcepts: ['IV = volume of water in container', 'DV = time to empty', 'at least 2 CVs with justification for full marks', 'equipment named for measuring both IV and DV', 'complete reproducible method', '5 increments AND 3 trials for full data marks'],
    keywords: ['volume', 'time', 'control', 'stopwatch', 'measuring cylinder', 'method', '5 increments', '3 trials', 'mean'],
    feedbackHit: 'Well-designed investigation with all four components (variables, equipment, method, data).',
    feedbackMiss: 'For full marks you need: IV + DV + 2 justified CVs; named equipment including volume and time measurement devices; a complete method another student could follow; data plan with 5+ increments and 3 trials each.',
  },

  // ── Q6: Water Clock Height ──
  '6a': {
    marks: 2,
    exemplar: '12.8 s',
    keyConcepts: ['read stopwatch to 1 decimal place', 'value = 12.8', 'unit = s (seconds)'],
    keywords: ['12.8', 's', 'seconds'],
    feedbackHit: 'Correct reading of the stopwatch.',
    feedbackMiss: 'Read the stopwatch carefully to one decimal place. The time shown is 12.8 s. State the unit separately.',
  },

  '6b': {
    marks: 4,
    exemplar: 'Table with headers "Height of water / cm" and "Time taken to empty the tube / s". Units in headers only (not next to each value). All 5 data pairs correct and ordered: 2→6.4, 4→9.0, 6→11.1, 8→12.8, 10→14.3.',
    keyConcepts: ['headers include units: cm and s', 'units in headers not next to data', 'all 5 values correct (ECF from 6a for 8 cm)', 'data ordered ascending or descending'],
    keywords: ['height', 'time', 'cm', 's', '6.4', '9.0', '11.1', '12.8', '14.3', 'ordered'],
    feedbackHit: 'Well-structured table with correct headers, units, and ordered data.',
    feedbackMiss: 'Your table needs: correct headers with units (Height / cm; Time / s); units in headers only; all 5 data pairs; data in ascending or descending order.',
  },

  '6c': { type: 'mcq', correct: 0 }, // Graph A (straight line through origin)

  '6d': {
    marks: 2,
    exemplar: 'For the results to be proportional, the line must pass through (0,0). The line crosses the y-axis at approximately 5.0 (not zero), so the relationship is not proportional. OR: A curve fits the data better than a straight line, so the relationship is not proportional.',
    keyConcepts: ['proportional requires line through origin (0,0)', 'y-intercept ≈ 5.0 ≠ 0 → not proportional', 'OR: data fits a curve not a straight line'],
    keywords: ['origin', '0,0', 'y-intercept', '5.0', 'not proportional', 'curve'],
    feedbackHit: 'Correct reasoning: identified that non-zero y-intercept (or curve) means not proportional.',
    feedbackMiss: 'For proportionality, the graph must be a straight line through (0,0). The y-intercept is about 5.0, not zero, so the student is incorrect.',
  },

  '6e': {
    marks: 3,
    exemplar: 'Student D has the most valid method because the range of data most clearly shows the correct (non-linear) relationship. The other students used a narrower range of data, so their data appears to show a linear relationship across their limited range, which does not reveal the true curve.',
    keyConcepts: ['student D most valid', 'D has widest range of data', 'wider range reveals true non-proportional relationship', 'others show linear trend across narrow range'],
    keywords: ['student D', 'widest range', 'correct relationship', 'narrow range', 'linear', 'not valid'],
    feedbackHit: 'Good evaluation identifying Student D and explaining why range matters.',
    feedbackMiss: 'Student D is most valid because their wider data range clearly shows the curve/non-proportional relationship. Others used too narrow a range, making the data appear linear.',
  },

  '6f': {
    marks: 1,
    exemplar: 'Viscosity of the liquid / pressure / type of liquid / density of liquid.',
    keyConcepts: ['alternative IV must be different from area of hole, volume of container', 'accept: viscosity, pressure, liquid type, density'],
    keywords: ['viscosity', 'pressure', 'type of liquid', 'density'],
    feedbackHit: 'Valid alternative independent variable suggested.',
    feedbackMiss: 'Suggest a different IV such as viscosity of liquid, temperature, or pressure. Do not use size of hole or volume of container (already used).',
  },

  '6g': {
    marks: 3,
    exemplar: 'If viscosity of the liquid increases, the time taken to empty the tube will increase. More viscous liquids have stronger intermolecular forces/flow more slowly, so less water passes through the hole per second, taking longer to drain.',
    keyConcepts: ['prediction links IV from 6f to time', 'scientific explanation (molecular/particle level)', 'direction of change stated'],
    keywords: ['increases', 'decreases', 'viscosity', 'flow', 'molecular', 'slower', 'longer'],
    feedbackHit: 'Good hypothesis with prediction and scientific justification.',
    feedbackMiss: 'State how changing your IV will affect the time (direction), then explain why using scientific knowledge.',
  },

  // ── Q7: China / Three Gorges ──
  '7a': {
    marks: 2,
    exemplar: "China's consumption increased significantly over the 30-year period, rising from about 200 kWh/person in 1975 to over 1000 kWh/person in 2005. The world average also increased, but China's increase was greater/steeper. China started below the world average but approached it by 2005.",
    keyConcepts: ["China's consumption increased", 'world average also increased but slower', "China's rate of increase faster than world average", 'China below world average in 1975 but converging by 2005'],
    keywords: ['increased', 'consumption', 'world average', '1975', '2005', 'faster', 'below'],
    feedbackHit: 'Good comparison using data from the graph.',
    feedbackMiss: "Describe the trend for China (increased) and compare with the world average. Use values from the graph to support your answer.",
  },

  '7b': {
    marks: 1,
    exemplar: 'Rapid industrialisation / economic growth / urbanisation / increased manufacturing / higher standard of living leading to greater use of electrical devices.',
    keyConcepts: ['industrialisation', 'economic growth', 'urbanisation', 'increased manufacturing', 'improved living standards'],
    keywords: ['industrialisation', 'industry', 'economic', 'urban', 'manufacturing', 'living standard'],
    feedbackHit: 'Valid cause identified.',
    feedbackMiss: 'Consider what drove the rapid growth in China from 1975 to 2005: industrialisation, economic development, urbanisation.',
  },

  '7c': {
    marks: 2,
    exemplar: 'From energy graph: China 2005 ≈ 3150 kWh/person. From population graph: China 2005 ≈ 1.25 × 10⁹ people. Total = 3150 × 1.25 × 10⁹ = 3.94 × 10¹² kWh.',
    keyConcepts: ['read kWh/person from energy graph ≈ 3150', 'read population from graph ≈ 1.25 × 10⁹', 'total = kWh/person × population', '3.94 × 10¹² kWh (accept 3.9–4.1 × 10¹²)'],
    keywords: ['3150', '1.25', '3.94', '10¹²', 'kWh', 'population', 'multiply'],
    feedbackHit: 'Correct reading of both graphs and correct calculation.',
    feedbackMiss: 'Read China\'s kWh/person (~3150) from the energy graph and population (~1.25 × 10⁹) from the population graph. Multiply: 3150 × 1.25 × 10⁹ = 3.94 × 10¹² kWh.',
  },

  '7d': {
    marks: 3,
    exemplar: 'Burning fossil fuels releases CO₂, contributing to climate change / global warming. Air pollution from combustion products (SO₂, NOₓ) causes acid rain. Habitat destruction from mining coal or oil extraction. Water pollution from power station thermal discharge.',
    keyConcepts: ['CO₂ emission → climate change', 'air pollution from combustion', 'habitat destruction from mining', 'water/thermal pollution'],
    keywords: ['CO₂', 'climate change', 'air pollution', 'habitat', 'mining', 'water pollution', 'fossil fuels'],
    feedbackHit: 'Three valid environmental impacts identified.',
    feedbackMiss: 'State three environmental impacts: e.g. CO₂ emissions → climate change; air pollution from combustion; habitat destruction from resource extraction.',
  },

  '7e': {
    marks: 2,
    exemplar: 'Gravitational potential energy → Kinetic energy → Electrical energy.',
    keyConcepts: ['water at height has gravitational PE', 'falling water converts GPE to KE', 'turbine/generator converts KE to electrical energy'],
    keywords: ['gravitational potential', 'kinetic', 'electrical', 'energy transformation', 'turbine', 'generator'],
    feedbackHit: 'Correct energy chain in the correct order.',
    feedbackMiss: 'The water stored at height has gravitational potential energy. As it falls, this converts to kinetic energy. The turbine and generator convert kinetic energy into electrical energy.',
  },

  // ── Q8: Three Gorges Evaluation (banded) ──
  '8a': {
    marks: 14,
    exemplar: 'Impacts on river: positive = flood prevention (historically 300,000 deaths), power generation (22,500 MW, 34 generators); negative = 177 fish species disrupted, river dolphins now extinct, sediment trapped behind dam affecting downstream ecosystems. Wider landscape: 632 km² flooded, 1.2 million people displaced, 97 landslides in 2010 due to erosion. Global perspective: displaces 31 million tonnes coal/year saving ~80 million tonnes CO₂; but 40 million tonnes concrete used releasing 7 million tonnes CO₂. Conclusion: the dam provides significant clean energy and flood protection, but at considerable human and ecological cost; overall environmental impact is negative for local biodiversity but positive globally through CO₂ reduction.',
    keyConcepts: ['positive river impacts (flood control, power)', 'negative river impacts (fish, dolphins, sediment)', 'landscape displacement of 1.2M people', 'global CO₂ balance', 'justified concluding appraisal'],
    keywords: ['flood', 'power', 'fish', 'dolphins', 'displaced', 'CO₂', 'landscape', 'biodiversity', 'conclusion', 'evaluate'],
    feedbackHit: 'Comprehensive evaluation covering river, landscape, global, and concluding appraisal with evidence.',
    feedbackMiss: 'Structure your answer: (1) river impacts on living/non-living things; (2) wider landscape impacts; (3) global CO₂ perspective; (4) balanced conclusion. Use specific data from the sources.',
  },
}
