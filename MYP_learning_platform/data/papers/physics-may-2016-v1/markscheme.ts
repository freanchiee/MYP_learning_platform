import 'server-only'
import type { MSRecord } from '@/data/papers/physics-nov-2023/markscheme'

export const MS: Record<string, MSRecord> = {
  // ── Q1: Mass vs Weight — Jupiter Moons ──
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
    exemplar: 'Io → Ganymede → Callisto (in order of increasing distance from Jupiter)',
    keyConcepts: ['Io = closest to Jupiter', 'Ganymede = middle', 'Callisto = furthest of the three'],
    keywords: ['Io', 'Ganymede', 'Callisto', 'distance from Jupiter'],
    feedbackHit: 'Moons correctly ordered from Jupiter outward: Io, Ganymede, Callisto.',
    feedbackMiss: 'Order from Jupiter (closest to furthest): Io (421,700 km), Ganymede (1,070,400 km), Callisto (1,882,700 km).',
  },
  '1c': {
    marks: 1,
    exemplar: 'Io is much closer to Jupiter so the gravitational tidal forces are far stronger, which flex Io\'s interior and generate heat through friction (tidal heating).',
    keyConcepts: ['closer to Jupiter → stronger gravitational tidal forces → more tidal heating'],
    keywords: ['tidal', 'gravity', 'closer', 'heating', 'Jupiter'],
    feedbackHit: 'Correctly identified tidal heating from Jupiter\'s stronger gravitational forces on Io.',
    feedbackMiss: 'Io is closer to Jupiter → stronger gravitational tidal forces → greater tidal flexing of Io\'s interior → more heat generated through friction.',
  },

  // ── Q2: Probe — Gravity on Moons of Jupiter ──
  '2a': {
    marks: 3,
    exemplar: 'g = 2s/t². Io: g = 2 × 50 / (7.4)² = 100 / 54.76 = 1.83 ms⁻². Callisto: g = 2 × 50 / (11.1)² = 100 / 123.21 = 0.81 ms⁻². Award max 2 if rounding errors present.',
    keyConcepts: ['g = 2s/t²', 'Io g ≈ 1.83 ms⁻²', 'Callisto g ≈ 0.81 ms⁻²'],
    keywords: ['1.83', '0.81', 'ms⁻²', 'g = 2s/t²', 'Io', 'Callisto'],
    feedbackHit: 'Correct g values calculated for Io and Callisto.',
    feedbackMiss: 'Rearrange s = ½at² → g = 2s/t². Io: 2 × 50 / 7.4² = 1.83 ms⁻². Callisto: 2 × 50 / 11.1² = 0.81 ms⁻².',
  },
  '2b': {
    marks: 2,
    exemplar: 'Io has a higher g than Callisto despite its smaller radius. This means Io must have a much higher density than Callisto. So g increases with increasing density; a larger radius alone does not guarantee higher g.',
    keyConcepts: ['g increases with density', 'Io denser than Callisto despite smaller radius', 'radius alone does not determine g'],
    keywords: ['density', 'Io', 'Callisto', 'smaller radius', 'higher density', 'g'],
    feedbackHit: 'Both density–g and radius–g relationships correctly explained from the data.',
    feedbackMiss: 'Io has smaller radius but higher g → Io must be denser. g increases with density. A larger radius does not always give higher g — density must also be considered.',
  },
  '2c': {
    marks: 3,
    exemplar: 'Ep = mgh. m = 0.6 kg, g = 1.3 ms⁻², h = 50.0 m. Ep = 0.6 × 1.3 × 50.0 = 39 J.',
    keyConcepts: ['Ep = mgh', '0.6 kg × 1.3 × 50.0 = 39 J', 'unit: J'],
    keywords: ['mgh', '39 J', 'joules', '0.6', '1.3', '50'],
    feedbackHit: 'Ep = 39 J with correct equation and unit.',
    feedbackMiss: 'Ep = mgh = 0.6 × 1.3 × 50.0 = 39 J. (Convert 600 g → 0.6 kg first.)',
  },
  '2d': {
    marks: 3,
    exemplar: 'g on Io is greater than on Europa → Ep = mgh is greater on Io (same m and h). All Ep converts to KE → KE is greater on Io. Since KE = ½mv² and mass is constant, greater KE → greater velocity on Io.',
    keyConcepts: ['greater g on Io → greater Ep', 'all Ep converts to KE', 'greater KE → greater velocity'],
    keywords: ['greater g', 'Io', 'Europa', 'Ep', 'KE', 'greater velocity', 'mgh', '½mv²'],
    feedbackHit: 'Full chain: g(Io) > g(Europa) → Ep↑ → KE↑ → v↑.',
    feedbackMiss: 'Io has greater g → Ep = mgh is larger → all Ep becomes KE → KE = ½mv², same mass, so v is larger on Io.',
  },

  // ── Q3: Sphere Diameter in Oil Investigation ──
  '3a': {
    marks: 2,
    exemplar: 'Stopwatch (to measure fall time). Metre rule (to measure height of oil column). Set of spheres of different diameters (to vary the IV). Measuring cylinder/tube of oil (to provide the fluid medium).',
    keyConcepts: ['timing device + reason', 'length-measuring device + reason'],
    keywords: ['stopwatch', 'timer', 'metre rule', 'spheres', 'oil', 'measure time', 'measure height'],
    feedbackHit: 'Equipment named with correct reason for each.',
    feedbackMiss: 'Name each piece of equipment AND state why it is needed: stopwatch to time the fall, metre rule to measure distance fallen.',
  },
  '3b': {
    marks: 3,
    exemplar: 'As the diameter of the sphere increases, the terminal velocity decreases. Because a larger sphere has greater cross-sectional area → more drag force from the oil. Increased drag lowers the speed at which drag = weight → lower terminal velocity.',
    keyConcepts: ['larger diameter → greater drag area → more drag', 'more drag → lower terminal velocity (at terminal v, drag = weight)'],
    keywords: ['diameter', 'increases', 'terminal velocity decreases', 'drag', 'cross-sectional area'],
    feedbackHit: 'Hypothesis with direction, drag mechanism, and link to terminal velocity.',
    feedbackMiss: 'Larger sphere → greater cross-sectional area → more drag in oil → equilibrium (drag=weight) reached at lower speed → lower terminal velocity.',
  },
  '3c': {
    marks: 3,
    exemplar: 'CV: density/material of the sphere. How: use spheres made of the same material (e.g. all steel). Reason: different densities give different weights for the same size sphere, which affects terminal velocity independently of diameter.',
    keyConcepts: ['CV: density or material', 'same material used for all spheres', 'different density → different weight → affects TV'],
    keywords: ['density', 'material', 'same', 'control', 'affects terminal velocity'],
    feedbackHit: 'CV stated, method of control described, reason correctly linked.',
    feedbackMiss: 'CV = density of sphere. Control by using same material for all spheres. Reason: different material → different density → different weight → affects TV regardless of diameter.',
  },
  '3d': {
    marks: 3,
    exemplar: 'At least 5 different sphere diameters. Values evenly spread across the available range. At least 3 repetitions for each diameter to calculate a mean and assess reliability.',
    keyConcepts: ['minimum 5 different diameter values', 'evenly spaced range', '3+ repeats per diameter'],
    keywords: ['5 values', 'evenly spread', 'range', 'repeats', '3 repetitions'],
    feedbackHit: '5+ diameters, evenly spread, with ≥3 repeats — full data plan.',
    feedbackMiss: 'Need at least 5 different diameters, spread evenly across the range. Repeat each at least 3 times to calculate a mean and improve reliability.',
  },

  // ── Q4: Phases of Europa ──
  '4a': {
    marks: 2,
    exemplar: 'Europa orbits Jupiter. As its orbital position changes, different amounts of Europa\'s sunlit surface face Earth. Different fractions of the illuminated side are visible → different phase appearances.',
    keyConcepts: ['Europa orbits Jupiter', 'orbital position changes → different fraction of sunlit surface visible', 'phases caused by changing position'],
    keywords: ['orbits', 'position changes', 'lit', 'sunlit', 'visible', 'different'],
    feedbackHit: 'Orbital position + changing visible lit fraction correctly explained.',
    feedbackMiss: 'Europa orbits Jupiter. At different positions, different fractions of the sunlit surface face Earth → phases change.',
  },
  '4b': {
    marks: 1,
    exemplar: 'Gravitational force / gravity (accept: gravitational pull / attraction)',
    keyConcepts: ['gravitational force keeps Europa in orbit around Jupiter'],
    keywords: ['gravitational', 'gravity', 'force', 'attraction'],
    feedbackHit: 'Correct: gravitational force.',
    feedbackMiss: 'The force keeping Europa in orbit is gravity (gravitational force).',
  },

  // ── Q5: Heliocentric Model Evidence ──
  '5a': {
    marks: 2,
    exemplar: 'Any two from: (1) Phases of Venus — Venus shows a full range of phases (including gibbous and full), which can only occur if Venus orbits the Sun. (2) Stellar parallax — nearby stars appear to shift against the background as Earth orbits the Sun. (3) Retrograde motion of outer planets is naturally explained by relative orbital speeds. (4) Gravitational calculations from heliocentrism correctly predict planetary positions.',
    keyConcepts: ['phases of Venus (full range)', 'stellar parallax (Earth moves around Sun)', 'retrograde motion of outer planets', 'gravitational model predictions'],
    keywords: ['phases of Venus', 'parallax', 'retrograde motion', 'gravitational predictions', 'heliocentric'],
    feedbackHit: 'Two valid pieces of evidence stated for the heliocentric model.',
    feedbackMiss: 'Evidence: (1) Venus shows gibbous/full phases → must orbit Sun. (2) Stellar parallax shows Earth moves → heliocentrism. (3) Retrograde motion of Mars etc. naturally explained.',
  },

  // ── Q6: Voltage–Resistance Wire Investigation ──
  '6a': {
    marks: 2,
    exemplar: 'In the incorrect circuit, the ammeter is connected in parallel with the wire, not in series. Ammeters have negligible (near-zero) resistance → most current flows through the ammeter, bypassing the wire. The ammeter measures current in the branch, not through the wire.',
    keyConcepts: ['ammeter must be in series with wire', 'in parallel: current bypasses wire through ammeter', 'ammeter negligible resistance → short circuit path'],
    keywords: ['ammeter', 'parallel', 'series', 'negligible resistance', 'bypass', 'not measuring wire current'],
    feedbackHit: 'Correctly identified that ammeter in parallel bypasses the wire due to negligible resistance.',
    feedbackMiss: 'An ammeter must be in series with the component. In the incorrect circuit it is in parallel — its near-zero resistance means almost all current flows through it, not the wire.',
  },
  '6b': {
    marks: 2,
    exemplar: 'Independent variable: voltage / potential difference (across the wire). Dependent variable: current (through the wire).',
    keyConcepts: ['IV = voltage/potential difference', 'DV = current'],
    keywords: ['voltage', 'potential difference', 'independent', 'current', 'dependent'],
    feedbackHit: 'IV and DV correctly identified.',
    feedbackMiss: 'IV = what you change = voltage. DV = what you measure = current.',
  },
  '6c': {
    marks: 3,
    exemplar: '8 voltage values is sufficient for reliable analysis. The range 0–10 V is appropriate. However, values are not evenly spread — some regions are clustered while others have gaps. This means the relationship cannot be reliably identified across the full range.',
    keyConcepts: ['8 values sufficient', '0–10 V covers range', 'unevenly spread → reliability reduced', 'clusters and gaps'],
    keywords: ['sufficient', '8 measurements', 'range', 'not evenly spread', 'clustered', 'gaps', 'reliability'],
    feedbackHit: 'Correct evaluation: 8 values OK, range adequate, but uneven distribution reduces reliability.',
    feedbackMiss: '8 data points and full 0–10 V range are fine. The problem is uneven spacing — clustered points and gaps make the trend harder to identify reliably.',
  },

  // ── Q7: V-I Characteristic — Nichrome Wire ──
  '7a': {
    marks: 3,
    exemplar: 'At least 5 voltage values evenly distributed across 0–10 V. A scatter graph is appropriate for continuous data. A straight line of best fit should be drawn through the points.',
    keyConcepts: ['5+ values evenly distributed 0–10 V', 'scatter graph appropriate for continuous data', 'line of best fit (straight) should be drawn'],
    keywords: ['5 values', '0–10 V', 'evenly distributed', 'scatter graph', 'line of best fit'],
    feedbackHit: 'Correctly evaluated data distribution and graphing approach.',
    feedbackMiss: 'Need 5+ evenly spaced voltages from 0–10 V. Scatter graph appropriate. Draw straight line of best fit.',
  },
  '7b': {
    marks: 3,
    exemplar: 'Current increases as voltage increases. The relationship is linear (straight line through the origin). Current is directly proportional to voltage throughout the range — consistent with Ohm\'s law for a metallic conductor at constant temperature.',
    keyConcepts: ['current increases with voltage', 'linear (straight line through origin)', 'directly proportional — Ohm\'s law obeyed'],
    keywords: ['current increases', 'linear', 'straight line', 'origin', 'proportional', 'Ohm\'s law'],
    feedbackHit: 'Linear/proportional relationship correctly described with reference to origin.',
    feedbackMiss: 'Current increases with voltage. Graph is a straight line through the origin → directly proportional (Ohm\'s law).',
  },
  '7c': {
    marks: 4,
    exemplar: 'Example: at V = 2.0 V, I = 0.40 A → R = 2.0/0.40 = 5.0 Ω. At V = 8.0 V, I = 1.60 A → R = 8.0/1.60 = 5.0 Ω. Conclusion: resistance stays approximately constant across the range — nichrome wire is Ohmic.',
    keyConcepts: ['R = V/I at low voltage point', 'R = V/I at high voltage point', 'resistance approximately constant → Ohmic conductor'],
    keywords: ['R = V/I', 'constant', 'two calculations', 'Ohmic', 'resistance'],
    feedbackHit: 'Two correct R calculations + observation that resistance is constant.',
    feedbackMiss: 'Calculate R = V/I at two different voltage points. Show both values are approximately the same → resistance is constant → Ohmic.',
  },
  '7d': {
    marks: 3,
    exemplar: 'Directly proportional requires a straight line through the origin. The nichrome wire graph IS a straight line through the origin → current IS directly proportional to voltage → hypothesis IS supported by the data.',
    keyConcepts: ['directly proportional = straight line through origin', 'check if graph meets this criterion', 'hypothesis is supported: graph is straight line through origin'],
    keywords: ['straight line', 'through origin', 'directly proportional', 'hypothesis supported'],
    feedbackHit: 'Correctly stated: straight line through origin → hypothesis is supported.',
    feedbackMiss: 'Directly proportional = straight line through the origin. Check graph. If it IS a straight line through origin → hypothesis IS supported.',
  },

  // ── Q8: Nichrome Wire — Temperature and Resistance ──
  '8a': {
    marks: 1,
    exemplar: 'Approximately 8.0 V (accept 7.5–8.5 V depending on graph).',
    keyConcepts: ['read from graph: resistance begins to increase noticeably around 8.0 V'],
    keywords: ['8.0', 'V', 'volts'],
    feedbackHit: 'Correct voltage range read from graph.',
    feedbackMiss: 'Read the voltage at which the V-I graph begins to curve (non-linear) above the initial linear region ≈ 8.0 V.',
  },
  '8b': {
    marks: 2,
    exemplar: 'Above a threshold temperature, the thermal energy radiated by the wire includes wavelengths in the visible part of the electromagnetic spectrum. Below this threshold, only infrared radiation is emitted.',
    keyConcepts: ['threshold temperature for visible emission', 'above threshold: EM radiation in visible wavelengths', 'below threshold: infrared only'],
    keywords: ['threshold temperature', 'visible', 'wavelengths', 'EM spectrum', 'infrared'],
    feedbackHit: 'Threshold temperature for visible emission correctly explained.',
    feedbackMiss: 'The wire must reach a threshold temperature to emit radiation in the visible frequency range. Below this temperature only infrared is emitted.',
  },
  '8c': {
    marks: 5,
    exemplar: 'Higher voltage → higher temperature. Higher temperature → atoms in wire vibrate with greater kinetic energy / vibrate faster. Electrons collide more frequently with the vibrating atoms. Each collision slows the electrons. Greater resistance to electron flow → resistance increases. Therefore current does not increase as much per unit increase in voltage at higher voltages.',
    keyConcepts: ['higher V → higher T', 'higher T → faster vibrations', 'more electron-atom collisions', 'electrons slowed → resistance increases', 'current increases less per unit voltage'],
    keywords: ['temperature', 'atoms vibrate', 'faster', 'collisions', 'resistance increases', 'electrons slowed', 'current less'],
    feedbackHit: 'Full five-step chain: V↑ → T↑ → vibrations↑ → collisions↑ → R↑ → current increases less.',
    feedbackMiss: 'Higher voltage → higher temperature → atoms vibrate faster → more electron-atom collisions → resistance increases → current does not increase as much.',
  },
  '8d': {
    marks: 2,
    exemplar: 'Suggestion: test a different wire material (e.g. copper or tungsten). Justification: to compare whether resistance also increases with temperature for different metallic conductors, and to determine if the behaviour is universal or specific to nichrome.',
    keyConcepts: ['reasonable extension (different material or wider voltage range)', 'justification correctly linked to suggestion'],
    keywords: ['different material', 'tungsten', 'copper', 'compare', 'justification'],
    feedbackHit: 'Valid extension with correctly linked justification.',
    feedbackMiss: 'Suggest testing a different wire material + justify why (e.g. to compare temperature-resistance behaviour across metals).',
  },

  // ── Q9: Radar Signal Investigation ──
  '9a': {
    marks: 2,
    exemplar: 'Signal return time = dependent variable. Distance to the object = independent variable. Frequency of radar waves = control variable.',
    keyConcepts: ['signal return time = DV', 'distance to object = IV', 'radar frequency = CV'],
    keywords: ['signal return time', 'dependent', 'distance', 'independent', 'frequency', 'control'],
    feedbackHit: 'All three variables correctly classified.',
    feedbackMiss: 'IV = distance (what you change). DV = signal return time (what you measure). CV = radar frequency (kept constant).',
  },
  '9b': {
    marks: 3,
    exemplar: 'As the distance to the object increases, the radar signal return time will increase. The signal must travel a greater total distance (to the object and back again). Prediction: if the distance doubles, the return time also doubles (directly proportional).',
    keyConcepts: ['return time increases with distance', 'longer round-trip path → longer time', 'quantitative: directly proportional (double distance → double time)'],
    keywords: ['return time', 'increases', 'distance', 'round-trip', 'proportional', 'doubles'],
    feedbackHit: 'Hypothesis with direction, mechanism, and quantitative prediction.',
    feedbackMiss: 'Greater distance → longer signal path (to object and back) → longer return time. Double distance → double return time.',
  },
  '9c': {
    marks: 3,
    exemplar: 'Distance is the IV because it is the quantity the student changes in the investigation. Radar frequency is the CV because different frequencies may have different properties (e.g. absorption by atmosphere) and could affect the return time; it must be kept constant to ensure a fair test.',
    keyConcepts: ['distance = IV: what is changed', 'frequency = CV: could affect DV, must be kept constant', 'fair test reasoning'],
    keywords: ['independent', 'changes', 'control', 'frequency', 'affects', 'constant', 'fair test'],
    feedbackHit: 'Both IV and CV correctly explained with reasons.',
    feedbackMiss: 'IV = distance (you change it). CV = frequency (it could affect signal behaviour → keep constant for a fair test).',
  },
  '9d': {
    marks: 2,
    exemplar: 'Beyond the maximum distance, the radar signal intensity has decreased to the point where the reflected signal is too weak to be detected by the receiver. Signal intensity decreases with distance (inverse square law), so the echo becomes undetectable beyond a maximum range.',
    keyConcepts: ['signal intensity decreases with distance', 'below minimum detectable threshold → no detection', 'maximum range limited by signal-to-noise ratio'],
    keywords: ['intensity decreases', 'too weak', 'not detected', 'maximum distance', 'inverse square'],
    feedbackHit: 'Correctly identified: signal too weak / below detection threshold beyond maximum range.',
    feedbackMiss: 'Signal intensity decreases with distance. Beyond maximum range, the reflected signal is too weak to be detected by the receiver.',
  },

  // ── Q10: Drone Delivery Evaluation ──
  '10a': {
    marks: 12,
    exemplar: 'Advantages: reaches remote communities without road infrastructure; faster delivery of emergency medical supplies; can operate in disaster zones inaccessible by road. Disadvantages: limited payload capacity (only small/light items); battery range limited; affected by weather (wind/rain); safety risks (collision, malfunction). Technology: requires autonomous navigation; GPS infrastructure; battery charging stations; maintenance of drone fleet. Economic: high initial cost of fleet and infrastructure; reduces long-term transport costs; affordable healthcare outcomes; requires training/skilled operators. Conclusion: drone delivery is most valuable for remote and emergency medical supply, where traditional transport fails; technological and economic challenges must be overcome; justified recommendation.',
    keyConcepts: ['advantages + justification', 'disadvantages + justification', 'technological considerations', 'economic factors', 'concluding appraisal'],
    keywords: ['advantages', 'disadvantages', 'technology', 'economic', 'payload', 'battery', 'infrastructure', 'conclusion'],
    feedbackHit: 'Comprehensive evaluation with justified advantages, disadvantages, tech and economic factors, and conclusion.',
    feedbackMiss: 'Structure: (1) advantage + justification; (2) disadvantage + justification; (3) technological consideration; (4) economic factor; (5) concluding appraisal linking all issues.',
  },

  // ── Q11: Ionisation & Radiotherapy ──
  '11a': {
    marks: 3,
    exemplar: 'An atom absorbs energy from incoming radiation (or a high-energy particle). An electron gains enough energy to overcome the electrostatic attraction of the nucleus and escapes from the atom. A positive ion is left behind.',
    keyConcepts: ['atom absorbs energy from radiation', 'electron gains enough energy to escape', 'positive ion left behind'],
    keywords: ['absorbs energy', 'electron escapes', 'ion', 'positive'],
    feedbackHit: 'Three-step ionisation correctly described.',
    feedbackMiss: 'Ionisation: atom absorbs energy → electron gains enough energy to escape → positive ion remains.',
  },
  '11b': {
    marks: 2,
    exemplar: 'Ionising radiation damages DNA in healthy cells (breaks chemical bonds). DNA damage causes mutations in the genetic code. Mutations in healthy cells may lead to cancer or cell death.',
    keyConcepts: ['ionising radiation damages DNA in healthy cells', 'DNA damage → mutations', 'mutations → cancer or cell death'],
    keywords: ['DNA', 'damage', 'mutations', 'cancer', 'cell death', 'healthy cells'],
    feedbackHit: 'Linked chain: DNA damage → mutations → cancer or cell death.',
    feedbackMiss: 'Ionising radiation damages DNA → mutations → cancer or cell death in healthy tissue.',
  },
  '11c': {
    marks: 1,
    exemplar: 'Ultraviolet → X-ray → gamma ray',
    keyConcepts: ['penetrating power order: UV < X-ray < gamma'],
    keywords: ['ultraviolet', 'X-ray', 'gamma', 'order'],
    feedbackHit: 'Correct penetrating power order.',
    feedbackMiss: 'Lowest to highest penetrating power: ultraviolet → X-ray → gamma ray.',
  },
  '11d': {
    marks: 3,
    exemplar: 'UV radiation is absorbed by the skin and cannot penetrate deep enough to reach a tumour. Low-energy X-rays are also absorbed by tissue before reaching deep tumours. Only high-energy gamma rays can penetrate deeply enough to deliver a lethal dose to tumours anywhere in the body. Multiple beams from different angles concentrate the maximum dose at the tumour while minimising damage to healthy tissue between the skin and the tumour.',
    keyConcepts: ['UV absorbed by skin → cannot reach deep tumours', 'low-energy X-rays absorbed by tissue before deep tumours', 'gamma rays penetrate deep enough for deep tumours', 'multiple beam angles minimise healthy tissue damage'],
    keywords: ['UV absorbed', 'skin', 'low-energy X-ray', 'absorbed', 'gamma rays', 'penetrate deeply', 'multiple beams', 'healthy tissue'],
    feedbackHit: 'All three radiation types correctly compared for radiotherapy use.',
    feedbackMiss: 'UV absorbed by skin → can\'t reach tumours. Low-energy X-rays absorbed too early. Gamma penetrates deeply → used. Multiple angles → maximum dose at tumour, less healthy tissue damage.',
  },

  // ── Q12: X-ray Inspection of Aircraft Weld ──
  '12a': {
    marks: 3,
    exemplar: 'First point must reference the image. Areas of lower metal density (cracks, voids, porosity) appear as darker regions in the X-ray image because they absorb fewer X-rays. This reveals internal structural defects not visible from the surface. The image provides information about the structural integrity and safety of the weld without cutting the metal.',
    keyConcepts: ['first point must reference image', 'defects/voids appear as dark regions (less X-ray absorption)', 'reveals internal structure not visible from surface', 'non-destructive assessment of weld integrity'],
    keywords: ['image', 'dark', 'void', 'crack', 'less absorption', 'structural defects', 'non-destructive', 'internal'],
    feedbackHit: 'Image referenced + scientific explanation of X-ray contrast + information revealed.',
    feedbackMiss: 'Reference image first. Voids/cracks in the weld absorb fewer X-rays → appear darker. Reveals internal flaws not visible on the surface.',
  },

  // ── Q13: CT Scanning vs Conventional X-ray ──
  '13a': {
    marks: 2,
    exemplar: 'A conventional X-ray (Image A) produces a 2D shadow projection — internal structures overlap and depth is lost. CT scanning (Images B and C) produces cross-sectional slices and a 3D reconstruction. This reveals the depth, exact location, and three-dimensional shape of internal structures and abnormalities that overlap in a standard X-ray and cannot be localised.',
    keyConcepts: ['X-ray = 2D projection, internal structures overlap', 'CT = cross-sectional slices + 3D reconstruction', 'CT reveals depth, shape, and exact location of structures'],
    keywords: ['2D', 'overlap', '3D', 'cross-section', 'depth', 'location', 'slices'],
    feedbackHit: 'Correctly distinguished 2D X-ray overlap from CT 3D/cross-section information.',
    feedbackMiss: 'X-ray: 2D image, structures overlap (no depth). CT: cross-sections and 3D reconstruction → reveals depth and exact location of structures.',
  },
  '13b': {
    marks: 2,
    exemplar: 'Any two from: (1) Patient is not cut open → no surgical risk. (2) No general anaesthesia required. (3) Recovery time is negligible compared with surgery. (4) The whole body can be examined in one scan. (5) Soft tissue and organs are visualised in detail. (6) No risk of surgical infection.',
    keyConcepts: ['no surgical risk / incision', 'no anaesthesia needed', 'shorter recovery', 'whole body examined', 'no infection risk'],
    keywords: ['not cut open', 'no surgery', 'recovery', 'faster', 'whole body', 'infection', 'anaesthesia'],
    feedbackHit: 'Two valid advantages of CT over exploratory surgery.',
    feedbackMiss: 'Advantages of CT over surgery: patient not cut open; no anaesthesia; no infection risk; full body scanned at once; rapid recovery.',
  },
}
