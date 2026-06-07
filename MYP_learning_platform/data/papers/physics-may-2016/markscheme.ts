import 'server-only'
import type { MSRecord } from '@/data/papers/physics-nov-2023/markscheme'

export const MS: Record<string, MSRecord> = {
  // ── Q1: Mass vs Weight ──
  '1a': {
    marks: 2,
    exemplar: 'Mass: kilogram, size only (scalar), independent of gravitational field strength. Weight: newton, size and direction (vector), dependent on gravitational field strength.',
    keyConcepts: ['mass = scalar, kg, independent of g', 'weight = vector, N, dependent on g'],
    keywords: ['kilogram', 'newton', 'size only', 'size and direction', 'independent', 'dependent'],
    feedbackHit: 'All table entries correctly placed.',
    feedbackMiss: 'Mass is measured in kg, is a scalar (size only), and does not depend on gravity. Weight is measured in N, is a vector (size and direction), and depends on gravitational field strength.',
  },
  '1b': {
    marks: 2,
    exemplar: 'Venus → Jupiter → Neptune (order from Sun)',
    keyConcepts: ['Venus = 2nd planet', 'Jupiter = 5th planet', 'Neptune = 8th planet'],
    keywords: ['Venus', 'Jupiter', 'Neptune'],
    feedbackHit: 'Planets correctly ordered from the Sun.',
    feedbackMiss: 'Order from Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. So Venus is closest, then Jupiter, then Neptune.',
  },
  '1c': {
    marks: 1,
    exemplar: 'Further from the Sun → less radiation/energy received per unit area → lower temperature.',
    keyConcepts: ['distance from Sun → less radiation received → lower temperature'],
    keywords: ['radiation', 'energy', 'less', 'further', 'temperature'],
    feedbackHit: 'Correct reasoning: less radiation at greater distance.',
    feedbackMiss: 'Planets further from the Sun receive less radiation per unit area from the Sun, so they are cooler.',
  },

  // ── Q2: Space Probe / Gravity ──
  '2a': {
    marks: 3,
    exemplar: 'g = 2s/t². Mercury: t from simulation, g ≈ 3.7 ms⁻². Mars: g ≈ 3.8 ms⁻². Award max 2 if more than 2 significant figures given.',
    keyConcepts: ['g = 2s/t² (from s = ½at² rearranged)', 'Mercury g ≈ 3.7 ms⁻²', 'Mars g ≈ 3.8 ms⁻²'],
    keywords: ['3.7', '3.8', 'ms⁻²', 'g = 2s/t²', 'Mercury', 'Mars'],
    feedbackHit: 'Correct g values for Mercury and Mars.',
    feedbackMiss: 'Use g = 2s/t² from rearranging s = ½gt². Read t from the simulation data, s = 100 m.',
  },
  '2b': {
    marks: 2,
    exemplar: 'A reference to the relationship between g and density (as g increases, density increases). A reference to the relationship between r and density — Mars has a much lower density than Mercury.',
    keyConcepts: ['g increases with density', 'g depends on r (radius)', 'Mars lower density than Mercury despite higher g'],
    keywords: ['density', 'g', 'radius', 'relationship', 'lower density', 'Mars'],
    feedbackHit: 'Both relationships (g-density and r-density) correctly identified.',
    feedbackMiss: 'g is proportional to density. Since Mars has larger radius but similar g to Mercury, Mars must have lower density than Mercury.',
  },
  '2c': {
    marks: 3,
    exemplar: 'Ep = mgh. Correct equation selected. Value = 108 J (or 3600 J depending on values used). Unit correct (J or kJ).',
    keyConcepts: ['Ep = mgh', 'correct substitution', 'unit J or kJ'],
    keywords: ['mgh', '108 J', '3600 J', 'joules', 'Ep'],
    feedbackHit: 'Correct calculation of gravitational potential energy with unit.',
    feedbackMiss: 'Use Ep = mgh. Convert mass to kg (600 g = 0.6 kg), use given g and h = 100 m. Ep = 0.6 × 1.8 × 100 = 108 J.',
  },
  '2d': {
    marks: 3,
    exemplar: 'As g on Ganymede is smaller, the GPE is smaller. All GPE converts to KE, so KE is smaller on Ganymede. As mass is the same, velocity is smaller on Ganymede (½mv² = KE → smaller KE → smaller v). Or reverse argument for Io.',
    keyConcepts: ['smaller g → smaller GPE (Ep = mgh)', 'all Ep converts to KE', 'smaller KE → smaller v (½mv²)'],
    keywords: ['smaller g', 'Ganymede', 'GPE', 'KE', 'smaller velocity', 'mgh', '½mv²'],
    feedbackHit: 'Full chain: g smaller → GPE smaller → KE smaller → velocity smaller.',
    feedbackMiss: 'Ganymede has smaller g → Ep = mgh is smaller. All Ep becomes KE, so KE is smaller. KE = ½mv², same mass, so smaller KE → smaller v.',
  },

  // ── Q3: Parachute Investigation ──
  '3a': {
    marks: 2,
    exemplar: 'Stopwatch (to measure fall time). Metre rule (to measure height fallen or area of parachute). Data logger with speed sensor (to measure velocity).',
    keyConcepts: ['timing device + reason', 'measuring device + reason', 'description of why equipment is needed'],
    keywords: ['stopwatch', 'timer', 'metre rule', 'data logger', 'measure time', 'measure height', 'measure speed'],
    feedbackHit: 'Equipment named with correct reason for each.',
    feedbackMiss: 'Name the equipment AND explain why each is needed: stopwatch to time the fall, metre rule to measure height/area.',
  },
  '3b': {
    marks: 3,
    exemplar: 'As area increases, terminal velocity decreases (prediction). Because larger area increases drag/air resistance force. Increased drag reduces terminal velocity (at terminal v, drag = weight). Quantitative: double area → half terminal velocity.',
    keyConcepts: ['larger area → greater drag', 'greater drag → lower terminal velocity', 'quantitative element in prediction'],
    keywords: ['area', 'increases', 'terminal velocity', 'decreases', 'drag', 'air resistance'],
    feedbackHit: 'Hypothesis with prediction, explanation using drag, and quantitative element.',
    feedbackMiss: 'State direction (larger area → lower terminal velocity). Explain: larger area → more drag → at terminal v, drag=weight is reached sooner → lower speed.',
  },
  '3c': {
    marks: 3,
    exemplar: 'Control variable: mass (of parachute + load). How to control: use the same mass each time. Reason: greater mass → greater downward force → affects terminal velocity.',
    keyConcepts: ['one CV from: mass, shape, material', 'description of how to control', 'reason why it must be controlled'],
    keywords: ['mass', 'shape', 'control', 'same', 'affects terminal velocity', 'reason'],
    feedbackHit: 'CV stated with method of control and reason correctly linked.',
    feedbackMiss: 'State a CV (e.g. mass). Describe how (e.g. use same mass each trial). Explain why (mass affects downward force and therefore terminal velocity).',
  },
  '3d': {
    marks: 3,
    exemplar: 'At least five different values of parachute area. Values evenly spread (e.g. 0.05, 0.10, 0.15, 0.20, 0.25 m²). Repeat measurements for each area (at least 3 times).',
    keyConcepts: ['minimum 5 different values of IV', 'values evenly spread over range', 'repetitions for each area'],
    keywords: ['5 values', 'evenly spread', 'range', 'repetitions', 'repeat'],
    feedbackHit: 'Data plan: 5+ areas, evenly spread, with repeats.',
    feedbackMiss: 'Describe at least 5 different areas, spread evenly across a range. Repeat each at least 3 times to calculate a mean.',
  },

  // ── Q4: Moon Phases ──
  '4a': {
    marks: 2,
    exemplar: 'The Moon orbits the Earth. As its position changes, different amounts of the sunlit surface of the Moon are visible from Earth. Different bright sections are visible from different positions in the orbit.',
    keyConcepts: ['Moon orbits Earth', 'position changes → different fraction of lit surface visible', 'phases caused by orbital position'],
    keywords: ['orbits', 'position changes', 'lit', 'bright', 'visible', 'different'],
    feedbackHit: 'Moon orbit + changing visible lit surface correctly explained.',
    feedbackMiss: 'The Moon orbits the Earth. At different positions in its orbit, different parts of the sunlit side face Earth, producing different phase appearances.',
  },
  '4b': {
    marks: 1,
    exemplar: 'Gravitational force / pull / attraction (accept: gravity)',
    keyConcepts: ['gravity keeps Moon in orbit'],
    keywords: ['gravitational', 'gravity', 'force', 'attraction'],
    feedbackHit: 'Correct: gravitational force.',
    feedbackMiss: 'The force keeping the Moon in orbit is gravity (gravitational force/pull/attraction).',
  },

  // ── Q5: Big Bang Theory ──
  '5a': {
    marks: 2,
    exemplar: 'Any two: the Big Bang theory states the universe has a moment of beginning. The universe is cooling over time. The density of the universe is not constant. Matter is not being created. Cosmic microwave background radiation does not support the steady-state model.',
    keyConcepts: ['universe has a beginning', 'universe is cooling', 'density not constant', 'CMB radiation evidence', 'matter not being created'],
    keywords: ['beginning', 'cooling', 'density', 'not constant', 'CMB', 'matter not created'],
    feedbackHit: 'Two valid pieces of Big Bang evidence stated.',
    feedbackMiss: 'Evidence for Big Bang includes: universe is expanding and cooling; cosmic microwave background radiation; density of universe is not constant; universe has a finite age.',
  },

  // ── Q6: Electricity Investigation ──
  '6a': {
    marks: 2,
    exemplar: 'In the incorrect diagram, the ammeter is not in series with the bulb. Therefore the ammeter is not measuring the current through the bulb. OR: ammeters have negligible resistance — all/most current flows through the ammeter and not through the lamp.',
    keyConcepts: ['ammeter must be in series with bulb', 'ammeter not in series = measures wrong current', 'ammeter has negligible resistance → most current bypasses bulb'],
    keywords: ['ammeter', 'series', 'not measuring', 'negligible resistance', 'current through bulb'],
    feedbackHit: 'Correctly explained why incorrect circuit fails to measure bulb current.',
    feedbackMiss: 'An ammeter must be in series with the component being measured. In the incorrect circuit, the ammeter is in parallel — it has almost zero resistance so most current flows through it, bypassing the bulb.',
  },
  '6b': {
    marks: 2,
    exemplar: 'Independent variable: voltage / potential difference. Dependent variable: current.',
    keyConcepts: ['IV = voltage/potential difference', 'DV = current'],
    keywords: ['voltage', 'potential difference', 'independent', 'current', 'dependent'],
    feedbackHit: 'IV and DV correctly identified.',
    feedbackMiss: 'IV = what you change = voltage. DV = what you measure = current.',
  },
  '6c': {
    marks: 3,
    exemplar: 'Data is sufficient: 9 measurements allow analysis. Voltage values cover 0–12V range (good). However, values are not distributed evenly — clustered in some areas with gaps elsewhere. This reduces the reliability of the relationship.',
    keyConcepts: ['9 measurements sufficient for analysis', 'range 0–12V covers proposed range', 'NOT evenly distributed → clustered and gaps → reduces reliability'],
    keywords: ['sufficient', '9 measurements', 'covers range', 'not evenly distributed', 'clustered', 'gaps'],
    feedbackHit: 'Correctly evaluated: sufficient data but poor distribution.',
    feedbackMiss: 'Good: 9 data points is enough; covers the full range. Problem: data points are not evenly spread — some areas have clusters and gaps, making the relationship less reliable to identify.',
  },

  // ── Q7: V-I Graph Data Processing ──
  '7a': {
    marks: 3,
    exemplar: 'At least 5 voltage values evenly distributed across 0–12V. Scatter graph appropriate for continuous data. Line of best fit should be drawn. Note the light level observation at ~10.4V.',
    keyConcepts: ['5+ values, 0-12V', 'evenly distributed', 'scatter plot + LOBF appropriate', 'observation about light'],
    keywords: ['5 values', '0-12V', 'evenly distributed', 'scatter graph', 'line of best fit', 'light'],
    feedbackHit: 'Good evaluation of data distribution and graph type.',
    feedbackMiss: 'For reliable analysis: 5+ evenly distributed voltages from 0–12V. A scatter graph with line of best fit is appropriate.',
  },
  '7b': {
    marks: 3,
    exemplar: 'Current increases with voltage. Linear (proportional) relationship for low voltages (below ~10.4V). Non-linear above 10.4V — current increases less per unit voltage at higher temperatures.',
    keyConcepts: ['current increases with voltage', 'linear for p.d. below 10.4V', 'non-linear above 10.4V'],
    keywords: ['current increases', 'linear', 'non-linear', '10.4V', 'proportional'],
    feedbackHit: 'Relationship correctly described: linear at low V, non-linear at high V.',
    feedbackMiss: 'Current increases with voltage. The relationship is linear/proportional for low voltages (below ~10.4V). It becomes non-linear at higher voltages — the rate of increase slows.',
  },
  '7c': {
    marks: 4,
    exemplar: 'Calculate R = V/I at a low voltage point → lower R value. Calculate R = V/I at a higher voltage point → higher R value. Conclusion: resistance increases as voltage/temperature increases.',
    keyConcepts: ['R = V/I', 'two calculations at different voltages', 'resistance increases with temperature', 'linked observations'],
    keywords: ['R = V/I', 'increases', 'resistance', 'temperature', 'two calculations'],
    feedbackHit: 'Two calculations with linked observations showing R increases.',
    feedbackMiss: 'Calculate R = V/I at two different voltage points (one low, one high). Show that R is higher at higher voltage, and state that resistance increases as temperature increases.',
  },
  '7d': {
    marks: 3,
    exemplar: 'For directly proportional: graph must be a straight line through the origin. Either: graph is NOT a straight line → not directly proportional → hypothesis NOT supported. OR: graph IS a straight line (if only low-voltage data) → hypothesis IS supported. Credit reference to "not all materials tested."',
    keyConcepts: ['proportional requires straight line through origin', 'evaluate whether graph meets this criterion', 'correctly state if hypothesis supported or not'],
    keywords: ['straight line', 'origin', 'directly proportional', 'hypothesis', 'supported', 'not supported'],
    feedbackHit: 'Correctly evaluated hypothesis against proportionality criterion.',
    feedbackMiss: 'Directly proportional = straight line through the origin. Check if your graph is a straight line through origin. State whether the hypothesis is supported or not based on the graph.',
  },

  // ── Q8: Lamp Resistance ──
  '8a': {
    marks: 1,
    exemplar: '10.4 V',
    keyConcepts: ['read from graph: light appears at 10.4 V'],
    keywords: ['10.4', 'V', 'volts'],
    feedbackHit: 'Correct voltage read from graph.',
    feedbackMiss: 'Read the voltage at which the light just becomes visible from the V-I graph ≈ 10.4 V.',
  },
  '8b': {
    marks: 2,
    exemplar: 'Only certain frequencies/wavelengths of EM radiation are in the visible range. Above a certain temperature, the EM waves emitted are in the visible frequency range.',
    keyConcepts: ['only certain frequencies = visible light', 'above threshold temperature filament emits visible frequencies'],
    keywords: ['frequencies', 'wavelengths', 'visible range', 'temperature', 'threshold'],
    feedbackHit: 'Correctly explained: threshold temperature for visible emission.',
    feedbackMiss: 'Only certain frequencies of EM radiation are visible. The filament must reach a threshold temperature to emit radiation in the visible frequency range.',
  },
  '8c': {
    marks: 5,
    exemplar: 'Current increases with voltage. At higher voltages the temperature increases. Higher temperature → atoms vibrate faster / have greater KE. More collisions between free electrons and vibrating atoms. Electrons are slowed more → resistance increases. Therefore current increases less per unit voltage at higher temperatures.',
    keyConcepts: ['temperature increases with voltage', 'atoms vibrate faster at higher T', 'more collisions between electrons and atoms', 'resistance increases', 'current increases less per unit voltage'],
    keywords: ['temperature', 'atoms', 'vibrate', 'collisions', 'resistance increases', 'electrons slowed'],
    feedbackHit: 'Full chain: T↑ → vibrations↑ → collisions↑ → resistance↑ → current increases less.',
    feedbackMiss: 'Higher voltage → higher temperature → atoms vibrate faster → more electron-atom collisions → resistance increases → current doesn\'t increase as fast.',
  },
  '8d': {
    marks: 2,
    exemplar: 'Suggestion: different component (e.g. resistor/diode) or different material or greater voltage range. Justification: correctly linked to suggestion (e.g. to compare whether resistance also increases in a resistor).',
    keyConcepts: ['reasonable extension suggestion', 'justification correctly linked'],
    keywords: ['different component', 'different material', 'greater range', 'justification'],
    feedbackHit: 'Valid extension with correct justification.',
    feedbackMiss: 'Suggest an extension (e.g. test different components) and justify why (e.g. to compare resistance behaviour across materials).',
  },

  // ── Q9: Satellite Investigation ──
  '9a': {
    marks: 2,
    exemplar: 'Transmission time = dependent variable. Ground distance = independent variable. Height of satellite = control variable.',
    keyConcepts: ['transmission time = DV', 'ground distance = IV', 'height of satellite = CV'],
    keywords: ['transmission time', 'dependent', 'ground distance', 'independent', 'height', 'control'],
    feedbackHit: 'All three variables correctly classified.',
    feedbackMiss: 'IV = ground distance (what you change). DV = transmission time (what you measure). CV = height of satellite (kept constant).',
  },
  '9b': {
    marks: 3,
    exemplar: 'As the ground distance between stations increases, the transmission time will increase. Because signals travel a greater total distance (station → satellite → station). Prediction: if distance doubles, time doubles (directly proportional).',
    keyConcepts: ['transmission time increases with ground distance', 'greater distance → longer signal path', 'quantitative prediction'],
    keywords: ['transmission time', 'increases', 'ground distance', 'longer path', 'proportional'],
    feedbackHit: 'Hypothesis with direction, reason, and quantitative element.',
    feedbackMiss: 'Greater station distance → longer signal path (station→satellite→station) → longer transmission time. Double distance → double time.',
  },
  '9c': {
    marks: 3,
    exemplar: 'Ground distance is the IV because it is what the student changes to investigate the effect. Height is a control variable because it affects the transmission time (different heights = different signal path length) and must be kept constant to ensure a fair test.',
    keyConcepts: ['ground distance = IV because it is changed', 'height = CV because it affects DV and must be kept constant'],
    keywords: ['independent', 'changes', 'control', 'height', 'affects', 'constant', 'fair test'],
    feedbackHit: 'Both IV and CV correctly explained with reasons.',
    feedbackMiss: 'IV = ground distance (it\'s what you vary). CV = satellite height (it affects signal path length so must be kept constant for a fair test).',
  },
  '9d': {
    marks: 2,
    exemplar: 'Beyond the maximum distance, the ground stations are outside the satellite\'s footprint. Signals cannot be transmitted if the station is beyond the curvature of the Earth relative to the satellite\'s position/line of sight.',
    keyConcepts: ['satellite footprint/coverage area is limited', 'beyond maximum distance = outside line-of-sight', 'Earth\'s curvature limits range'],
    keywords: ['footprint', 'coverage', 'curvature', 'beyond', 'line of sight', 'maximum distance'],
    feedbackHit: 'Correctly identified satellite footprint limit or Earth curvature.',
    feedbackMiss: 'The satellite can only communicate with stations within its footprint. Beyond a maximum distance, the Earth\'s curvature means stations are out of the satellite\'s line of sight.',
  },

  // ── Q10: Satellite Internet Evaluation ──
  '10a': {
    marks: 12,
    exemplar: 'Advantages: internet access in remote/rural areas; disaster recovery; wide coverage. Disadvantages: signal latency; weather interference; limited bandwidth; equipment cost. Technology: geostationary vs LEO; maintenance; energy. Economic: high costs; subscription unaffordable in developing countries; reduces digital divide; economic development. Conclusion: satellite internet valuable for remote access; challenges must be addressed; justified recommendation.',
    keyConcepts: ['advantages and disadvantages justified', 'technological considerations', 'economic factors justified', 'concluding appraisal linking all points'],
    keywords: ['advantages', 'disadvantages', 'latency', 'bandwidth', 'economic', 'digital divide', 'technology', 'conclusion'],
    feedbackHit: 'Comprehensive evaluation with justified advantages, disadvantages, tech and economic factors, and conclusion.',
    feedbackMiss: 'Structure: (1) advantage + justification; (2) disadvantage + justification; (3) technological consideration; (4) economic factor; (5) concluding appraisal.',
  },

  // ── Q11: Ionisation & Medical X-rays ──
  '11a': {
    marks: 3,
    exemplar: 'An atom absorbs energy from radiation (or a charged particle collides). An electron gains enough energy to escape the atom. An ion (positive) is left behind.',
    keyConcepts: ['energy absorbed by atom', 'electron gains enough energy to escape', 'positive ion left behind'],
    keywords: ['absorbs energy', 'electron escapes', 'ion', 'positive'],
    feedbackHit: 'Three-step ionisation process correctly described.',
    feedbackMiss: 'Ionisation: atom absorbs energy → electron gains enough energy to escape → positive ion remains.',
  },
  '11b': {
    marks: 2,
    exemplar: 'Ionising radiation damages DNA. DNA damage leads to mutations. Mutations can cause cancer or health issues. OR: damage to cytoplasm → cell death.',
    keyConcepts: ['DNA damage → mutations', 'mutations → cancer/health issues', 'or: cytoplasm damage → cell death'],
    keywords: ['DNA', 'damage', 'mutations', 'cancer', 'cell death', 'cytoplasm'],
    feedbackHit: 'Linked chain: DNA damage → mutation → cancer.',
    feedbackMiss: 'Ionising radiation damages DNA → mutations → cancer. Or: damages cytoplasm → cell death.',
  },
  '11c': {
    marks: 1,
    exemplar: 'Ultraviolet → X-ray → gamma ray',
    keyConcepts: ['penetrating power: UV < X-ray < gamma'],
    keywords: ['ultraviolet', 'X-ray', 'gamma', 'order', 'penetrating'],
    feedbackHit: 'Correct order of penetrating power.',
    feedbackMiss: 'From lowest to highest penetrating power: ultraviolet → X-ray → gamma ray.',
  },
  '11d': {
    marks: 3,
    exemplar: 'UV is blocked by all materials (absorbed by skin) → cannot reach bones. Gamma rays pass through all materials → no contrast between bone and soft tissue. Only X-rays are absorbed differently by bone vs soft tissue → produce a contrast image showing bone structure.',
    keyConcepts: ['UV absorbed by skin → cannot image bones', 'gamma passes through all materials → no contrast', 'X-rays absorbed by bone more than soft tissue → contrast image of bones'],
    keywords: ['UV absorbed', 'skin', 'gamma', 'passes through', 'no contrast', 'X-ray', 'bone', 'soft tissue', 'contrast'],
    feedbackHit: 'All three radiations correctly compared with reasons.',
    feedbackMiss: 'UV: absorbed by skin → can\'t reach bones. Gamma: passes through everything → no contrast. X-ray: bone absorbs more than soft tissue → clear shadow of bones.',
  },

  // ── Q12: X-ray of Foot ──
  '12a': {
    marks: 3,
    exemplar: 'First point must refer to image: high detail visible in X-ray. The foot is in an unnatural/distorted position inside the shoe. Information about shoe construction is revealed. Bones are visible and show distortion caused by the shoe design.',
    keyConcepts: ['first point must reference the image', 'unnatural/distorted position visible', 'shoe construction information', 'bones visible'],
    keywords: ['image', 'unnatural', 'distorted', 'shoe construction', 'bones', 'detail'],
    feedbackHit: 'Image-referenced scientific analysis of the X-ray.',
    feedbackMiss: 'First describe what you can see in the image (reference image). Then explain what it reveals scientifically: unnatural foot position, shoe internal structure, bone distortion.',
  },

  // ── Q13: XRFS Painting Analysis ──
  '13a': {
    marks: 2,
    exemplar: 'XRFS reveals Image B which is not visible in Image A. Image B resembles Image C (a later stage of the painting). Therefore XRFS reveals a hidden earlier version of the painting beneath the surface.',
    keyConcepts: ['XRFS reveals hidden layers', 'image B not visible in photo (A)', 'image B resembles image C'],
    keywords: ['hidden', 'XRFS', 'image B', 'not visible', 'earlier version', 'beneath'],
    feedbackHit: 'Correctly identified that XRFS reveals hidden layer matching Image C.',
    feedbackMiss: 'Image B (XRFS) shows content not visible in Image A (photo). Image B resembles Image C, suggesting an earlier layer of the painting is hidden beneath the visible surface.',
  },
  '13b': {
    marks: 2,
    exemplar: 'Any two: painting is not damaged. Hidden information is revealed non-invasively. Whole painting can be examined. Painting is preserved for future enjoyment.',
    keyConcepts: ['painting not damaged', 'non-invasive', 'whole painting examined', 'preserved'],
    keywords: ['not damaged', 'non-invasive', 'whole painting', 'preserved', 'hidden information'],
    feedbackHit: 'Two valid advantages of non-invasive XRFS analysis.',
    feedbackMiss: 'Advantages: painting is not damaged; hidden layers revealed without removing paint; entire painting can be studied; painting remains intact for display.',
  },
}
