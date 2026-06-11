import 'server-only'
import type { MSRecord } from '@/data/papers/physics-nov-2023/markscheme'

export const MS: Record<string, MSRecord> = {
  // ── Q1: Mass vs Weight — Inner Planets ──
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
    exemplar: 'Mercury → Venus → Mars (in order of increasing distance from the Sun)',
    keyConcepts: ['Mercury = 1st (closest to Sun)', 'Venus = 2nd', 'Mars = 4th (of those listed, furthest)'],
    keywords: ['Mercury', 'Venus', 'Mars', 'distance from Sun'],
    feedbackHit: 'Inner planets correctly ordered: Mercury → Venus → Mars.',
    feedbackMiss: 'Order from Sun: Mercury (1st), Venus (2nd), Earth (3rd), Mars (4th). Of the three listed: Mercury closest, then Venus, then Mars.',
  },
  '1c': {
    marks: 1,
    exemplar: 'Venus has a thick atmosphere rich in CO₂ which acts as a greenhouse gas, trapping heat re-radiated from the surface and creating a strong greenhouse effect. Mercury has virtually no atmosphere so heat escapes easily.',
    keyConcepts: ['Venus thick CO₂ atmosphere → greenhouse effect → traps heat'],
    keywords: ['atmosphere', 'CO₂', 'greenhouse effect', 'traps heat', 'Venus'],
    feedbackHit: 'Greenhouse effect from Venus\'s thick atmosphere correctly identified.',
    feedbackMiss: 'Venus has a thick CO₂ atmosphere → strong greenhouse effect → heat trapped near surface → higher temperature than Mercury despite being further from the Sun.',
  },

  // ── Q2: Probe — Gravity on Inner Planets ──
  '2a': {
    marks: 3,
    exemplar: 'g = 2s/t². Venus: g = 2 × 90 / (4.5)² = 180 / 20.25 = 8.9 ms⁻². Mercury: g = 2 × 90 / (7.0)² = 180 / 49.0 = 3.67 ≈ 3.7 ms⁻². Award max 2 if rounding errors present.',
    keyConcepts: ['g = 2s/t²', 'Venus g ≈ 8.9 ms⁻²', 'Mercury g ≈ 3.7 ms⁻²'],
    keywords: ['8.9', '3.7', 'ms⁻²', 'g = 2s/t²', 'Venus', 'Mercury'],
    feedbackHit: 'Correct g values for Venus and Mercury.',
    feedbackMiss: 'Rearrange s = ½at² → g = 2s/t². Venus: 2×90/4.5² = 8.9 ms⁻². Mercury: 2×90/7.0² ≈ 3.7 ms⁻².',
  },
  '2b': {
    marks: 2,
    exemplar: 'Venus has greater g than Mercury and is larger than Mercury. Both density and radius contribute to higher g. Venus has higher density and larger radius than Mercury, both increasing g.',
    keyConcepts: ['g increases with both density and radius', 'Venus higher g: both larger and denser', 'radius contributes to higher g when paired with high density'],
    keywords: ['density', 'radius', 'Venus', 'Mercury', 'both', 'g increases'],
    feedbackHit: 'Both density and radius contributions to g correctly explained.',
    feedbackMiss: 'g increases with density. g also increases with radius. Venus is both larger and denser than Mercury → higher g.',
  },
  '2c': {
    marks: 3,
    exemplar: 'Ep = mgh. m = 0.45 kg, g = 3.8 ms⁻², h = 90.0 m. Ep = 0.45 × 3.8 × 90.0 = 154.35 J ≈ 154 J.',
    keyConcepts: ['Ep = mgh', '0.45 kg × 3.8 × 90.0 = 154 J', 'unit: J'],
    keywords: ['mgh', '154 J', 'joules', '0.45', '3.8', '90'],
    feedbackHit: 'Ep = 154 J with correct equation and unit.',
    feedbackMiss: 'Ep = mgh = 0.45 × 3.8 × 90.0 = 154 J. (Convert 450 g → 0.45 kg first.)',
  },
  '2d': {
    marks: 3,
    exemplar: 'g on Venus is greater than on Mars → Ep = mgh is greater on Venus (same m and h). All Ep converts to KE → KE is greater on Venus. Since KE = ½mv² and mass is constant, greater KE → greater velocity on Venus.',
    keyConcepts: ['greater g on Venus → greater Ep', 'all Ep converts to KE', 'greater KE → greater velocity'],
    keywords: ['greater g', 'Venus', 'Mars', 'Ep', 'KE', 'greater velocity', 'mgh', '½mv²'],
    feedbackHit: 'Full chain: g(Venus) > g(Mars) → Ep↑ → KE↑ → v↑.',
    feedbackMiss: 'Venus has greater g → Ep = mgh is larger → all Ep becomes KE → KE = ½mv², same mass, so v is larger on Venus.',
  },

  // ── Q3: Cone Parachute Mass Investigation ──
  '3a': {
    marks: 2,
    exemplar: 'Stopwatch (to measure fall time). Metre rule (to measure height fallen). Set of masses of different values (to vary the IV). Identical cone parachutes (to ensure consistent drag area).',
    keyConcepts: ['timing device + reason', 'length-measuring device + reason'],
    keywords: ['stopwatch', 'timer', 'metre rule', 'masses', 'parachute', 'measure time', 'measure height'],
    feedbackHit: 'Equipment named with correct reason for each.',
    feedbackMiss: 'Name each piece of equipment AND state why it is needed: stopwatch to time the fall, metre rule to measure height.',
  },
  '3b': {
    marks: 3,
    exemplar: 'As the mass increases, the terminal velocity increases. Because greater mass → greater weight (downward force). For the parachute to reach a new terminal velocity (drag = weight), the parachute must fall faster so that drag increases to match the greater weight.',
    keyConcepts: ['greater mass → greater weight', 'to balance greater weight, drag must increase', 'more drag → parachute must fall faster → higher terminal velocity'],
    keywords: ['mass increases', 'terminal velocity increases', 'weight', 'drag', 'balance', 'faster'],
    feedbackHit: 'Hypothesis with correct direction, weight-drag mechanism, and quantitative element.',
    feedbackMiss: 'Greater mass → greater weight. To reach terminal v (drag = weight), parachute must go faster to generate enough drag → higher terminal v.',
  },
  '3c': {
    marks: 3,
    exemplar: 'CV: size/shape of the cone parachute. How: use identical cone parachutes in every trial. Reason: different cone sizes have different cross-sectional areas → different drag forces → affects terminal velocity independently of mass.',
    keyConcepts: ['CV: cone size/shape (cross-sectional area)', 'same cone parachute used throughout', 'different area → different drag → affects TV'],
    keywords: ['cone', 'shape', 'size', 'identical', 'control', 'drag', 'affects terminal velocity'],
    feedbackHit: 'CV stated, method of control described, reason correctly linked.',
    feedbackMiss: 'CV = cone parachute size. Control by using identical cones. Reason: different sizes → different drag area → affects terminal velocity.',
  },
  '3d': {
    marks: 3,
    exemplar: 'At least 5 different mass values. Values evenly spread across the range (e.g. 5 g to 25 g in 5 g steps). At least 3 repetitions for each mass to calculate a mean and improve reliability.',
    keyConcepts: ['minimum 5 different mass values', 'evenly spread range', '3+ repeats per mass'],
    keywords: ['5 values', 'evenly spread', 'range', 'repeats', '3 repetitions'],
    feedbackHit: '5+ mass values, evenly spread, with ≥3 repeats — complete data plan.',
    feedbackMiss: 'At least 5 different masses, evenly spread across the range. Repeat each at least 3 times to calculate a mean and improve reliability.',
  },

  // ── Q4: Phases of Venus ──
  '4a': {
    marks: 2,
    exemplar: 'Venus orbits the Sun. As its orbital position changes relative to Earth, different amounts of Venus\'s sunlit surface face Earth. Different fractions of the illuminated surface are visible from Earth → different phase appearances.',
    keyConcepts: ['Venus orbits the Sun', 'orbital position changes → different fraction of sunlit surface visible', 'phases caused by orbital position'],
    keywords: ['orbits', 'Sun', 'position changes', 'lit', 'sunlit', 'visible', 'different'],
    feedbackHit: 'Orbital position + changing visible sunlit fraction correctly explained.',
    feedbackMiss: 'Venus orbits the Sun. Different orbital positions → different fractions of the sunlit surface face Earth → phases.',
  },
  '4b': {
    marks: 1,
    exemplar: 'Gravitational force / gravity (accept: gravitational pull / attraction)',
    keyConcepts: ['gravitational force keeps Venus in orbit around the Sun'],
    keywords: ['gravitational', 'gravity', 'force', 'attraction'],
    feedbackHit: 'Correct: gravitational force.',
    feedbackMiss: 'The force keeping Venus in orbit around the Sun is gravity (gravitational force).',
  },

  // ── Q5: Big Bang Evidence ──
  '5a': {
    marks: 2,
    exemplar: 'Any two from: (1) Redshift of distant galaxies — light from distant galaxies is red-shifted, showing the universe is expanding, consistent with a Big Bang origin. (2) Cosmic Microwave Background radiation — a uniform, low-temperature radiation field pervading the universe, matching the predicted afterglow of the Big Bang. (3) Abundance of light elements — the proportions of hydrogen and helium in the universe match predictions from Big Bang nucleosynthesis.',
    keyConcepts: ['redshift of galaxies → universe expanding', 'CMB radiation → remnant heat of Big Bang', 'abundance of H and He from nucleosynthesis'],
    keywords: ['redshift', 'expanding', 'CMB', 'microwave background', 'hydrogen', 'helium', 'nucleosynthesis'],
    feedbackHit: 'Two valid observations supporting Big Bang stated.',
    feedbackMiss: 'Evidence: (1) redshift shows expansion; (2) CMB radiation from afterglow; (3) abundance of light elements matches Big Bang predictions.',
  },

  // ── Q6: Voltage vs LED Brightness Investigation ──
  '6a': {
    marks: 2,
    exemplar: 'In the incorrect diagram, the ammeter is connected in parallel with the LED. Ammeters have near-zero resistance → almost all current flows through the ammeter, bypassing the LED. The ammeter measures current through the short circuit path, not through the LED.',
    keyConcepts: ['ammeter in parallel bypasses LED', 'near-zero resistance → current takes ammeter path', 'ammeter does not measure LED current'],
    keywords: ['parallel', 'ammeter', 'near-zero resistance', 'bypass', 'LED current'],
    feedbackHit: 'Correctly explained: parallel ammeter with negligible resistance bypasses LED.',
    feedbackMiss: 'Ammeter must be in series. In the incorrect circuit it is in parallel → near-zero resistance → most current bypasses LED → ammeter does not measure LED current.',
  },
  '6b': {
    marks: 2,
    exemplar: 'Independent variable: voltage / potential difference (across the LED). Dependent variable: brightness of the LED (or current through the LED).',
    keyConcepts: ['IV = voltage/potential difference', 'DV = brightness (or current)'],
    keywords: ['voltage', 'potential difference', 'independent', 'brightness', 'current', 'dependent'],
    feedbackHit: 'IV and DV correctly identified.',
    feedbackMiss: 'IV = what you change = voltage. DV = what you measure = brightness of LED (or current).',
  },
  '6c': {
    marks: 3,
    exemplar: '8 data points is sufficient for analysis. Range 0–5 V is appropriate for an LED (covers both below and above threshold voltage). Values are not evenly spread → some voltage regions are over-represented, others under-sampled → relationship may not be reliably identified across the full range.',
    keyConcepts: ['8 values sufficient', '0–5 V appropriate for LED', 'unevenly spread → reliability reduced', 'clustered and sparse regions'],
    keywords: ['sufficient', '8', 'range', 'not evenly spread', 'LED', 'reliability'],
    feedbackHit: 'Correct evaluation: sufficient data, good range, but uneven spacing reduces reliability.',
    feedbackMiss: '8 values fine; 0–5 V covers LED range. Problem: unevenly spread → some areas sparse → relationship harder to determine reliably.',
  },

  // ── Q7: V-I Characteristic — Diode ──
  '7a': {
    marks: 3,
    exemplar: 'Scatter graph is appropriate for continuous data. A smooth curve of best fit should be drawn (not a straight line) through the data points. Data should be denser around the threshold voltage region (~0.6 V) where the curve changes most rapidly.',
    keyConcepts: ['scatter graph appropriate for continuous data', 'smooth curve of best fit (not straight line)', 'denser data near threshold voltage (~0.6 V)'],
    keywords: ['scatter graph', 'smooth curve', 'best fit', 'threshold', '0.6 V', 'denser'],
    feedbackHit: 'Correctly evaluated: scatter graph + smooth curve + dense data near threshold.',
    feedbackMiss: 'Scatter graph appropriate. Draw smooth curve of best fit (not straight line). Include extra data points near 0.6 V where curve changes rapidly.',
  },
  '7b': {
    marks: 3,
    exemplar: 'Below approximately 0.6 V (threshold voltage), current is approximately zero — the diode does not conduct. Above the threshold, current increases very rapidly (non-linearly) with increasing voltage. The relationship is non-linear (exponential-like) — not directly proportional.',
    keyConcepts: ['zero current below threshold ~0.6 V', 'current increases rapidly above threshold', 'non-linear relationship (not proportional)'],
    keywords: ['threshold', '0.6 V', 'zero current', 'rapid increase', 'non-linear', 'not proportional'],
    feedbackHit: 'Threshold voltage, zero current below it, and rapid non-linear increase above it correctly described.',
    feedbackMiss: 'Below ~0.6 V: no current. Above ~0.6 V: current increases very rapidly (non-linear). Not proportional.',
  },
  '7c': {
    marks: 4,
    exemplar: 'At V = 0.4 V, I ≈ 0 mA → R is extremely large (effectively infinite). At V = 0.7 V, I ≈ 10 mA → R = 0.7 / 0.01 = 70 Ω. Conclusion: resistance decreases dramatically as voltage increases above the threshold. The diode is non-ohmic.',
    keyConcepts: ['R = V/I at two points', 'R very high below threshold', 'R decreases as voltage increases above threshold', 'diode is non-ohmic'],
    keywords: ['R = V/I', 'high resistance', 'decreases', 'threshold', 'non-ohmic', 'two calculations'],
    feedbackHit: 'Two R calculations showing resistance decreases above threshold — non-ohmic correctly identified.',
    feedbackMiss: 'Below threshold: R ≈ infinite. Above threshold: R decreases rapidly. Two calculations: R = V/I at 0.4 V and at 0.7 V. Diode is non-ohmic.',
  },
  '7d': {
    marks: 3,
    exemplar: 'Directly proportional requires a straight line through the origin. The diode graph is NOT a straight line — it is non-linear with a threshold voltage. The graph REJECTS the hypothesis — the current through a diode is not directly proportional to the voltage. The diode does not obey Ohm\'s law.',
    keyConcepts: ['directly proportional requires straight line through origin', 'diode graph is non-linear, NOT through origin at start', 'hypothesis is rejected'],
    keywords: ['straight line', 'origin', 'non-linear', 'hypothesis rejected', 'not proportional'],
    feedbackHit: 'Correctly stated: non-linear graph → hypothesis is rejected.',
    feedbackMiss: 'Directly proportional = straight line through origin. Diode graph is NOT a straight line → hypothesis is NOT supported (rejected).',
  },

  // ── Q8: NTC Thermistor ──
  '8a': {
    marks: 1,
    exemplar: 'Approximately 30°C (accept 25–35°C).',
    keyConcepts: ['resistance begins to decrease noticeably around 30°C from graph'],
    keywords: ['30', '°C', 'temperature'],
    feedbackHit: 'Correct temperature range read from graph.',
    feedbackMiss: 'Read the temperature at which resistance begins to decrease noticeably ≈ 30°C.',
  },
  '8b': {
    marks: 2,
    exemplar: 'In an NTC thermistor, increasing temperature releases more charge carriers (conduction electrons). With more charge carriers available, more current flows for the same voltage. R = V/I → more current for same V → lower resistance.',
    keyConcepts: ['higher temperature → more charge carriers released', 'more charge carriers → more current', 'R = V/I → lower resistance'],
    keywords: ['charge carriers', 'temperature increases', 'more current', 'resistance decreases', 'NTC'],
    feedbackHit: 'More charge carriers at higher temperature → more current → lower resistance correctly explained.',
    feedbackMiss: 'Higher temperature → more charge carriers (electrons) → more current for same V → R = V/I decreases.',
  },
  '8c': {
    marks: 5,
    exemplar: 'As temperature increases, resistance of the NTC thermistor decreases. This changes the voltage across the thermistor in a voltage divider circuit. The changing voltage can be detected by a comparator or microcontroller. When voltage exceeds a set threshold, an output switch activates. This output can trigger an alarm, switch a heater off, or activate a cooling system. The thermistor converts temperature change into a measurable voltage signal that can control a circuit.',
    keyConcepts: ['R decreases as T increases', 'voltage across thermistor changes in potential divider', 'voltage change detected by comparator', 'output triggers alarm or switch', 'temperature → electrical signal → circuit control'],
    keywords: ['resistance decreases', 'temperature', 'voltage changes', 'comparator', 'triggers', 'alarm', 'heating', 'cooling'],
    feedbackHit: 'Full five-step chain: T↑ → R↓ → V changes → comparator detects → output triggers alarm/switch.',
    feedbackMiss: 'T↑ → R↓ → voltage across thermistor changes → comparator detects change → triggers alarm or switch.',
  },
  '8d': {
    marks: 2,
    exemplar: 'Suggestion: compare with a positive temperature coefficient (PTC) thermistor. Justification: a PTC thermistor increases in resistance as temperature rises, which is the opposite behaviour to an NTC. Comparing the two shows how both types can be used in different circuit applications (e.g. PTC as a self-resetting fuse).',
    keyConcepts: ['extend: test PTC thermistor or widen temperature range', 'justification linked to suggestion'],
    keywords: ['PTC', 'positive temperature coefficient', 'compare', 'opposite behaviour', 'justification'],
    feedbackHit: 'Valid extension with correctly linked justification.',
    feedbackMiss: 'Suggest comparing a PTC thermistor (R increases with T) + justify: to show contrast in behaviour and different circuit applications.',
  },

  // ── Q9: Sonar Echo Investigation ──
  '9a': {
    marks: 2,
    exemplar: 'Echo return time = dependent variable. Depth of water = independent variable. Frequency of sonar pulse = control variable.',
    keyConcepts: ['echo return time = DV', 'depth of water = IV', 'sonar frequency = CV'],
    keywords: ['echo return time', 'dependent', 'depth', 'independent', 'frequency', 'control'],
    feedbackHit: 'All three variables correctly classified.',
    feedbackMiss: 'IV = depth (what you change). DV = echo return time (what you measure). CV = sonar frequency (kept constant).',
  },
  '9b': {
    marks: 3,
    exemplar: 'As the depth of water increases, the sonar echo return time will increase. The sound pulse must travel a greater total distance (to the bottom and back). Prediction: if depth doubles, return time doubles (directly proportional).',
    keyConcepts: ['return time increases with depth', 'greater depth → longer round trip', 'directly proportional: double depth → double time'],
    keywords: ['return time', 'increases', 'depth', 'round trip', 'proportional', 'doubles'],
    feedbackHit: 'Hypothesis with direction, mechanism (longer path), and quantitative prediction.',
    feedbackMiss: 'Greater depth → longer path (down and back) → longer return time. Double depth → double return time.',
  },
  '9c': {
    marks: 3,
    exemplar: 'Depth is the IV because it is the quantity the student deliberately changes during the investigation. Frequency is the CV because different frequencies may be absorbed differently by water and could affect the speed of the pulse, altering the return time; it must be kept constant for the test to be fair.',
    keyConcepts: ['depth = IV: deliberately changed by student', 'frequency = CV: could affect DV, must be constant', 'fair test reasoning'],
    keywords: ['independent', 'changes', 'control', 'frequency', 'affects', 'constant', 'fair test'],
    feedbackHit: 'IV and CV each explained with correct reasoning.',
    feedbackMiss: 'Depth = IV (you change it). Frequency = CV (different frequencies could affect signal → keep constant for fair test).',
  },
  '9d': {
    marks: 2,
    exemplar: 'Light is scattered and absorbed by particles (silt, plankton, dissolved matter) suspended in murky water. Light cannot penetrate to significant depths in turbid conditions. Sound waves are not absorbed or scattered by these particles and can travel to the seabed and back regardless of water clarity.',
    keyConcepts: ['light scattered/absorbed by suspended particles in murky water', 'sound not affected by particles → penetrates turbid water', 'sonar useful where light fails'],
    keywords: ['light absorbed', 'scattered', 'particles', 'murky', 'sound', 'penetrates', 'turbid'],
    feedbackHit: 'Light limited by absorption/scattering; sound unaffected by particles correctly contrasted.',
    feedbackMiss: 'Light absorbed/scattered by particles in murky water → can\'t reach seabed. Sound passes through murky water unaffected → sonar works where light does not.',
  },

  // ── Q10: Nuclear Power Evaluation ──
  '10a': {
    marks: 12,
    exemplar: 'Advantages: large reliable power output 24/7 (unlike solar/wind); no CO₂ emissions during operation → reduces climate impact; low fuel cost per kWh once plant is built; can power industrial development. Disadvantages: risk of meltdown/accident (e.g. Chernobyl, Fukushima); radioactive waste remains dangerous for thousands of years and requires secure storage; high risk of nuclear weapons proliferation if technology is misused. Safety/environment: reactor accident could contaminate land and water; uranium mining damages local environment; cooling water discharge affects aquatic ecosystems. Economic: extremely high initial construction cost; many years to build; high decommissioning cost; creates long-term skilled employment; low fuel cost long-term may be economically viable. Conclusion: nuclear power offers reliable, low-carbon electricity that could support industrial development in developing countries; however, the risks of accidents, waste, and weapons proliferation are serious concerns; countries must assess whether they have the regulatory infrastructure to safely manage nuclear power before investing.',
    keyConcepts: ['advantages + justification', 'disadvantages + justification', 'safety and environmental considerations', 'economic factors', 'concluding appraisal'],
    keywords: ['advantages', 'disadvantages', 'CO₂', 'nuclear waste', 'accident', 'economic', 'construction cost', 'proliferation', 'conclusion'],
    feedbackHit: 'Comprehensive evaluation: justified advantages/disadvantages, safety, economic factors, and balanced conclusion.',
    feedbackMiss: 'Structure: (1) advantage + justification; (2) disadvantage + justification; (3) safety/environmental consideration; (4) economic factor; (5) concluding appraisal linking all issues.',
  },

  // ── Q11: Ionisation & X-ray Security Screening ──
  '11a': {
    marks: 3,
    exemplar: 'An atom absorbs energy from incoming radiation. An electron gains enough energy to overcome the electrostatic attraction of the nucleus. The electron escapes from the atom, leaving behind a positive ion.',
    keyConcepts: ['atom absorbs energy', 'electron gains enough energy to escape', 'positive ion left behind'],
    keywords: ['absorbs energy', 'electron escapes', 'ion', 'positive'],
    feedbackHit: 'Three-step ionisation correctly described.',
    feedbackMiss: 'Ionisation: atom absorbs energy → electron gains enough energy to escape → positive ion remains.',
  },
  '11b': {
    marks: 2,
    exemplar: 'Ionising radiation ionises atoms within DNA molecules in cells. This breaks chemical bonds in the DNA strand. Broken DNA bonds cause mutations in the genetic code, which can lead to cancer.',
    keyConcepts: ['ionising radiation ionises atoms in DNA', 'chemical bonds broken → DNA strand damaged', 'mutations in DNA → cancer'],
    keywords: ['DNA', 'ionises', 'chemical bonds', 'broken', 'mutations', 'cancer'],
    feedbackHit: 'Linked chain: ionisation → DNA bond breakage → mutations → cancer.',
    feedbackMiss: 'X-rays ionise atoms in DNA → chemical bonds break → DNA mutations → cancer.',
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
    exemplar: 'UV radiation is absorbed by the outer layers of most materials (it cannot penetrate metal) → cannot scan inside baggage. Gamma rays are so penetrating that they pass through all baggage contents without being significantly absorbed → no differential image formed, and the radiation dose to nearby people would be unacceptably high. X-rays are absorbed differently by different materials (dense metal objects absorb more than soft materials such as clothing) → clear contrast image of baggage contents formed. X-rays therefore reveal the shape and density of objects inside the bag.',
    keyConcepts: ['UV absorbed by outer layers → cannot penetrate baggage', 'gamma too penetrating → no contrast image + high dose hazard', 'X-rays: differential absorption → contrast image of contents'],
    keywords: ['UV absorbed', 'cannot penetrate', 'gamma too penetrating', 'no contrast', 'X-ray differential', 'contrast image', 'metal vs soft material'],
    feedbackHit: 'All three radiation types correctly compared for baggage screening.',
    feedbackMiss: 'UV: absorbed → can\'t penetrate bags. Gamma: passes through all → no contrast (and high dose). X-rays: different absorption by different materials → forms clear image of contents.',
  },

  // ── Q12: X-ray Authentication of Painting ──
  '12a': {
    marks: 3,
    exemplar: 'First point must reference image. The X-ray image reveals a different composition beneath the visible paint surface — possibly an earlier version of the subject or an entirely different composition. Paints containing heavy metals (e.g. lead-white) absorb X-rays strongly → appear lighter in image. Revisions (pentimenti) made by the artist are revealed. This hidden underdrawing or earlier composition confirms the painting\'s history of reworking and can authenticate the work as an original (genuine artists revise; forgers typically do not re-draw beneath).',
    keyConcepts: ['first point must reference image', 'hidden earlier composition revealed', 'lead-white paints appear lighter (higher X-ray absorption)', 'pentimenti confirm artist reworking → supports authentication'],
    keywords: ['image', 'hidden', 'earlier composition', 'lead-white', 'lighter', 'pentimenti', 'reworking', 'authentication'],
    feedbackHit: 'Image referenced + X-ray contrast explained + authentication information identified.',
    feedbackMiss: 'Reference image first. Lead-based paints absorb more X-rays → lighter areas. Hidden earlier composition revealed (pentimenti). Genuine artist revision confirms authenticity.',
  },

  // ── Q13: Infrared Thermography ──
  '13a': {
    marks: 2,
    exemplar: 'The white/yellow areas in the thermographic image correspond to the highest temperature regions — windows, roof edges, and wall corners — indicating the greatest heat loss from the building. The blue/purple areas are the coldest regions, indicating good insulation. The image reveals that windows and the roof/corners are the main heat-loss pathways.',
    keyConcepts: ['white/yellow = hottest = greatest heat loss', 'blue/purple = coldest = good insulation', 'windows and roof edges are main heat-loss sources'],
    keywords: ['white', 'yellow', 'hottest', 'greatest heat loss', 'blue', 'purple', 'cold', 'insulation', 'windows', 'roof'],
    feedbackHit: 'Correct interpretation of colour scale and identification of heat-loss locations.',
    feedbackMiss: 'Yellow/white = high temperature = most heat loss (e.g. windows, roof). Blue/purple = low temperature = well insulated. Image reveals windows and roof as main heat loss areas.',
  },
  '13b': {
    marks: 2,
    exemplar: 'Any two from: (1) The whole building exterior is surveyed rapidly without removing cladding or drilling. (2) Non-destructive — the building is not damaged. (3) Provides quantitative temperature data as a colour map. (4) Can access inaccessible areas (e.g. behind walls) non-invasively. (5) Surveying is fast — a whole building can be imaged in one scan.',
    keyConcepts: ['non-destructive (building not damaged)', 'fast/whole building surveyed at once', 'quantitative temperature data', 'inaccessible areas surveyed'],
    keywords: ['non-destructive', 'not damaged', 'whole building', 'fast', 'quantitative', 'inaccessible'],
    feedbackHit: 'Two valid advantages of thermography over physical inspection.',
    feedbackMiss: 'Advantages: building not damaged; whole exterior surveyed rapidly; quantitative temperature data; inaccessible areas viewable.',
  },
}
