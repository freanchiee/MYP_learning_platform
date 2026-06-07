import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2023: Record<string, ConceptEntry> = {

  // ── Q1: Work, Energy & Power ────────────────────────────────
  q1_a: {
    keyConcepts: ['speed = distance ÷ time', 'consistent units required (km and hours for km/h)'],
    keywords: ['speed', 'distance', 'time', 'km/h', 'unit conversion'],
  },
  q1_b: {
    keyConcepts: ['energy transformed = power × time', 'power is the rate of energy transfer'],
    keywords: ['power', 'energy', 'time', 'formula', 'rate'],
  },
  q1_c: {
    keyConcepts: ['weight = mass × gravitational field strength (W = mg)', 'mass = weight ÷ g'],
    keywords: ['weight', 'mass', 'g', '9.8 N/kg', 'Newton'],
  },
  q1_d: {
    keyConcepts: ['energy transformation sequence: chemical potential → kinetic → gravitational potential'],
    keywords: ['chemical potential energy', 'kinetic energy', 'gravitational potential energy', 'energy chain'],
  },
  q1_e: {
    keyConcepts: ['work done = mgh', 'power = work done ÷ time', 'converting watts to kilowatts'],
    keywords: ['power', 'work', 'ΔEp', 'mgh', 'time', 'kW'],
  },
  q1_f: {
    keyConcepts: ['I = P ÷ V', 'converting horsepower to watts (1 hp = 746 W)'],
    keywords: ['current', 'power', 'voltage', 'I = P/V', 'horsepower', 'watts'],
  },

  // ── Q2: Light & EM Waves ────────────────────────────────────
  q2_a: {
    keyConcepts: ['dispersion is the separation of white light into its component colours by a prism'],
    keywords: ['dispersion', 'prism', 'white light', 'visible spectrum', 'refraction'],
  },
  q2_b: {
    keyConcepts: ['red light has the longest wavelength in the visible spectrum', 'longer wavelength → less refraction → appears at top of spectrum'],
    keywords: ['red light', 'longest wavelength', 'lowest frequency', 'refracted least', 'refractive index'],
  },
  q2_c: {
    keyConcepts: ['infrared has longer wavelength and lower frequency than red light', 'infrared is detectable as heat'],
    keywords: ['infrared', 'longer wavelength', 'lower frequency', 'heat', 'beyond visible spectrum'],
  },
  q2_d: {
    keyConcepts: ['f = v/λ', 'wavelength must be converted from nm to m (× 10⁻⁹)', 'scientific notation in answers'],
    keywords: ['frequency', 'wavelength', 'wave equation', 'nm to m', 'scientific notation', 'Hz'],
  },

  // ── Q3: Atomic Physics ──────────────────────────────────────
  q3_a: {
    keyConcepts: ['atomic number = number of protons', 'mass number = protons + neutrons'],
    keywords: ['atomic number', 'mass number', 'protons', 'neutrons', 'carbon-14'],
  },
  q3_b: {
    keyConcepts: ['isotopes of the same element have the same number of protons but different numbers of neutrons'],
    keywords: ['isotope', 'protons', 'neutrons', 'stable', 'unstable', 'nucleons'],
  },
  q3_c: {
    keyConcepts: ['gamma rays originate from the nucleus during radioactive decay', 'X-rays originate from inner electron shells'],
    keywords: ['gamma ray', 'nucleus', 'X-ray', 'inner electrons', 'electromagnetic radiation'],
  },
  q3_d: {
    keyConcepts: ['alpha decay: mass number −4, atomic number −2', 'beta decay: mass number unchanged, atomic number +1'],
    keywords: ['alpha decay', 'beta decay', 'nuclear equation', 'conservation', 'mass number', 'atomic number'],
  },
  q3_e: {
    keyConcepts: ['neutron capture/absorption: a neutron is absorbed by the nucleus to increase mass number by 1'],
    keywords: ['neutron', 'absorption', 'nucleus', 'uranium-238', 'uranium-239'],
  },

  // ── Q4: Ideal Gas / Boyle's Law ─────────────────────────────
  q4_a: {
    keyConcepts: ['research question links independent variable (mass/pressure) to dependent variable (volume)'],
    keywords: ['research question', 'pressure', 'volume', 'mass', 'syringe'],
  },
  q4_b: {
    keyConcepts: ['IV is what the experimenter changes; DV is what is measured; CV is what is kept constant'],
    keywords: ['independent', 'dependent', 'control', 'mass', 'volume', 'temperature'],
  },
  q4_c: {
    keyConcepts: ['adding mass to the plunger increases force, which increases pressure on the gas'],
    keywords: ['pressure', 'increase', 'mass', 'force', 'plunger'],
  },
  q4_d: {
    keyConcepts: ['pressure = force ÷ area', 'F = mg', 'total pressure = atmospheric pressure + added pressure'],
    keywords: ['P = F/A', 'atmospheric pressure', 'total pressure', 'area', 'mass'],
  },
  q4_e: {
    keyConcepts: ['as pressure increases, volume decreases — an inverse relationship', 'Boyle\'s law: P ∝ 1/V'],
    keywords: ['inverse relationship', 'pressure', 'volume', 'Boyle\'s law'],
  },
  q4_f: {
    keyConcepts: ['Boyle\'s law: pV = constant at constant temperature', 'evaluating experimental data against a theoretical prediction'],
    keywords: ['pV constant', 'Boyle\'s law', 'experimental error', 'justify', 'horizontal line'],
  },
  q4_g: {
    keyConcepts: ['using pV = constant to calculate volume at a new pressure'],
    keywords: ['pV = constant', 'volume', 'pressure', 'graph reading', 'cm³'],
  },

  // ── Q5: Balloon Temperature Investigation ───────────────────
  q5_a: {
    keyConcepts: ['temperature ↑ → kinetic energy of particles ↑ → more/harder collisions with walls → pressure ↑ → balloon expands'],
    keywords: ['kinetic theory', 'temperature', 'kinetic energy', 'collisions', 'pressure', 'expand'],
  },
  q5_b: {
    keyConcepts: ['full investigation design requires: RQ, IV, DV, CV, equipment, method, sufficient data, safety'],
    keywords: ['research question', 'temperature', 'circumference', 'oven', 'tape measure', 'control variable', 'safety'],
  },

  // ── Q6: Balloon Rocket ──────────────────────────────────────
  q6_a: {
    keyConcepts: ['Newton\'s 2nd law: net force causes acceleration (F = ma)', 'Newton\'s 3rd law: expelled air and balloon thrust are equal and opposite action-reaction forces'],
    keywords: ['Newton\'s second law', 'Newton\'s third law', 'F = ma', 'action-reaction', 'thrust'],
  },
  q6_b: {
    keyConcepts: ['research question links circumference/volume of balloon (IV) to distance travelled (DV)'],
    keywords: ['circumference', 'volume', 'distance travelled', 'research question'],
  },
  q6_c: {
    keyConcepts: ['circumference of a circle = π × diameter'],
    keywords: ['circumference', 'π', 'diameter', 'cm'],
  },
  q6_d: {
    keyConcepts: ['data tables need units in headers only, ascending order of IV, consistent decimal places'],
    keywords: ['table', 'column headers', 'units', 'ascending order', 'circumference', 'distance'],
  },
  q6_e: {
    keyConcepts: ['evaluating hypothesis validity using graphs', 'distance ∝ circumference³ (not directly proportional)'],
    keywords: ['hypothesis', 'directly proportional', 'circumference cubed', 'Graph C', 'validity'],
  },
  q6_f: {
    keyConcepts: ['extending investigations by selecting a new IV and identifying relevant CVs'],
    keywords: ['independent variable', 'control variable', 'extension', 'temperature', 'gas type'],
  },
  q6_g: {
    keyConcepts: ['hypothesis format: if [IV] changes then [DV] will change because [reasoning]'],
    keywords: ['hypothesis', 'if-then-because', 'scientific reasoning', 'direction'],
  },

  // ── Q7: Waves & Radio Communication ────────────────────────
  q7_a: {
    keyConcepts: ['period = time for one complete wave cycle, read from graph', 'frequency = 1/period'],
    keywords: ['period', 'frequency', 'f = 1/T', 'Hz', 'graph reading'],
  },
  q7_b: {
    keyConcepts: ['same frequency means same period on a wave graph'],
    keywords: ['frequency', 'period', 'waveform', 'same frequency'],
  },
  q7_c: {
    keyConcepts: ['mobile phone communication sequence: voice → electrical → radio wave → tower → cable → tower → radio wave → sound'],
    keywords: ['microphone', 'electrical signal', 'radio wave', 'cell tower', 'fibre optic', 'conversion'],
  },
  q7_d: {
    keyConcepts: ['location tracking advantages for individuals (navigation, safety)', 'disadvantages (privacy, surveillance)', 'economic benefits for companies', 'security trade-offs for nations'],
    keywords: ['location tracking', 'privacy', 'surveillance', 'economic benefit', 'security', 'data protection', 'appraisal'],
  },

  // ── Q8: Controlling Scientific Information ──────────────────
  q8_a: {
    keyConcepts: ['benefits of controlling misinformation online', 'limitations including censorship risk and who decides truth', 'balanced evaluation required'],
    keywords: ['misinformation', 'censorship', 'accuracy', 'scientific consensus', 'freedom of speech', 'internet'],
  },
}
