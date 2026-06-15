type ConceptEntry = {
  keyConcepts: string[]
  keywords: string[]
}

export const CONCEPTS_PUBLIC_BIOLOGY_NOV2023_V1: Record<string, ConceptEntry> = {

  q1_a: {
    keyConcepts: ['nucleus DNA animal cell organelle genetic material'],
    keywords: ['nucleus', 'DNA', 'organelle'],
  },
  q1_b: {
    keyConcepts: ['DNA base pairing complementary bases adenine thymine cytosine guanine'],
    keywords: ['A', 'T', 'C', 'G', 'complementary base pairs', 'double helix'],
  },
  q1_c: {
    keyConcepts: ['allele definition gene different forms inheritance'],
    keywords: ['alleles', 'different forms', 'gene', 'definition'],
  },
  q1_d: {
    keyConcepts: ['Punnett square alleles dominant recessive genotype inheritance'],
    keywords: ['AA', 'Aa', 'aa', 'Punnett square', 'dominant', 'recessive'],
  },
  q1_e: {
    keyConcepts: ['probability carrier Punnett square heterozygous sickle-cell anaemia'],
    keywords: ['50%', 'carrier', 'Aa', 'probability'],
  },
  q1_f: {
    keyConcepts: ['red blood cell structure oxygen transport biconcave surface area haemoglobin'],
    keywords: ['biconcave', 'large surface area', 'no nucleus', 'haemoglobin', 'flexible'],
  },
  q1_g: {
    keyConcepts: ['sickle-cell anaemia symptoms blocked blood vessels reduced oxygen'],
    keywords: ['pain', 'tiredness', 'fatigue', 'shortness of breath', 'low oxygen'],
  },
  q1_h: {
    keyConcepts: ['gene editing CRISPR benefit ethical consideration'],
    keywords: ['cure disease', 'long-term effects', 'cosmetic', 'regulations'],
  },

  q2_a: {
    keyConcepts: ['nervous system body systems identification image'],
    keywords: ['nervous system', 'neural pathways', 'identify'],
  },
  q2_b: {
    keyConcepts: ['nervous system control processes mitosis cell division'],
    keywords: ['mitosis', 'not controlled', 'nervous system'],
  },
  q2_c: {
    keyConcepts: ['homeostasis constant internal environment nervous system'],
    keywords: ['constant', 'internal environment', 'maintain', 'stable'],
  },
  q2_d: {
    keyConcepts: ['cold response homeostasis shivering vasoconstriction temperature'],
    keywords: ['shivering', 'vasoconstriction', 'cold response'],
  },
  q2_e: {
    keyConcepts: ['sweating vasodilation body temperature reduction cooling heat loss'],
    keywords: ['sweating', 'evaporates', 'cooling', 'vasodilation', 'blood flow', 'hair flat'],
  },
  q2_f: {
    keyConcepts: ['negative feedback examples blood glucose homeostasis'],
    keywords: ['blood glucose', 'water', 'hormones', 'CO₂', 'negative feedback'],
  },

  q3_a: {
    keyConcepts: ['characteristics of life growth germination wheat seeds'],
    keywords: ['growth', 'germination', 'seeds', 'getting bigger'],
  },
  q3_b: {
    keyConcepts: ['aerobic respiration word equation glucose oxygen CO₂ water energy'],
    keywords: ['sugar', 'oxygen', 'carbon dioxide', 'water', 'energy'],
  },
  q3_c: {
    keyConcepts: ['variables gamma radiation wheat seeds respiration IV DV CV'],
    keywords: ['IV', 'gamma exposure time', 'DV', 'CO₂ concentration', 'CV', 'temperature'],
  },
  q3_d: {
    keyConcepts: ['hypothesis gamma radiation CO₂ respiration wheat seeds if then because'],
    keywords: ['gamma exposure increases', 'CO₂ decreases', 'enzyme', 'DNA'],
  },
  q3_e: {
    keyConcepts: ['water bath temperature control variable respiration'],
    keywords: ['control temperature', 'water bath', 'CV'],
  },
  q3_f: {
    keyConcepts: ['investigation weakness justification increments trials CVs equipment'],
    keywords: ['not enough increments', 'not enough trials', 'control variables', 'inaccurate equipment'],
  },
  q3_g: {
    keyConcepts: ['control experiment wheat seeds gamma radiation baseline comparison'],
    keywords: ['control experiment', 'baseline', 'due to gamma', 'no gamma exposure'],
  },

  q4_a: {
    keyConcepts: ['repeats reliability accuracy random error average'],
    keywords: ['increase trials', 'reduce random error', 'calculate average'],
  },
  q4_b: {
    keyConcepts: ['average concentration CO₂ rate calculation data transformation'],
    keywords: ['1194', '398', 'average', 'rate', 'ppm min⁻¹'],
  },
  q4_c: {
    keyConcepts: ['graph plot gamma exposure CO₂ rate line of best fit axes'],
    keywords: ['data points', 'line of best fit', 'gamma exposure time', 'CO₂ rate'],
  },
  q4_d: {
    keyConcepts: ['graph prediction line of best fit CO₂ rate gamma exposure'],
    keywords: ['495', 'ppm min⁻¹', 'predict', '20 minutes'],
  },
  q4_e: {
    keyConcepts: ['CO₂ concentration unchanged limiting factor seeds dead food store'],
    keywords: ['sugar limiting', 'food store', 'seeds dead', 'no respiration'],
  },
  q4_f: {
    keyConcepts: ['gene definition DNA heritable characteristic protein code'],
    keywords: ['section of DNA', 'heritable characteristic', 'codes for a protein'],
  },
  q4_g: {
    keyConcepts: ['gamma radiation DNA changes positive correlation mutations'],
    keywords: ['gamma increases', 'DNA changes increase', 'positive correlation'],
  },
  q4_h: {
    keyConcepts: ['gamma radiation enzyme DNA mutation active site denatured respiration'],
    keywords: ['cellular respiration less', 'DNA changes', 'enzyme active site', 'denatured'],
  },
  q4_i: {
    keyConcepts: ['gamma sanitizing food microorganisms effectiveness limitations'],
    keywords: ['seeds killed', 'other microorganisms', 'no evidence', 'not practical'],
  },

  q5_: {
    keyConcepts: ['temperature wheat seeds respiration design Criteria B IV DV CVs hypothesis method range'],
    keywords: ['temperature', 'IV', 'DV', 'CO₂', 'CVs', 'hypothesis', 'water bath', 'repeats', 'range'],
  },

  q6_a: {
    keyConcepts: ['bird flu Europe human action vaccination culling disease'],
    keywords: ['vaccination', 'culling', 'infected birds', 'human action'],
  },
  q6_b: {
    keyConcepts: ['food chain non-bird organisms pond plants snails mayfly frog perch'],
    keywords: ['pond plants', 'pond snails', 'mayfly larvae', 'frog', 'perch', 'food chain'],
  },
  q6_c: {
    keyConcepts: ['ecosystem bird flu heron food web consequences predator prey population'],
    keywords: ['perch increases', 'frog increases', 'predator', 'prey', 'population'],
  },

  q7_a: {
    keyConcepts: ['oral vaccine injectable advantage disadvantage population control ethics collaboration bird flu'],
    keywords: ['oral vaccine', 'population control', 'ethics', 'collaboration', 'economic', 'political'],
  },
  q7_b: {
    keyConcepts: ['farmer vaccination bird flu advantage disadvantage dose access'],
    keywords: ['protects at-risk', 'regular schedule', 'correct dose', 'immunity', 'supply issues', 'side effects'],
  },
}
