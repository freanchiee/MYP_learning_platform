/**
 * CLIENT-SAFE concept data for Biology May 2025.
 * keyConcepts and keywords ONLY — no exemplar answers, no feedbackHit/Miss.
 * Used by LiveKeywordTracker on the client side.
 *
 * Key format: `q{id}_{label}`  e.g. 'q1_b', 'q3_a'
 */
import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_BIOLOGY_MAY2025: Record<string, ConceptEntry> = {

  // ── Q1: Classification & Biological Molecules ─────────────────
  'q1_a': {
    keyConcepts: ['virus', 'virus is not a kingdom', 'non-cellular'],
    keywords: ['virus', 'kingdom', 'five kingdoms'],
  },
  'q1_b': {
    keyConcepts: ['vertebral column', 'backbone', 'spinal cord', 'birds', 'reptiles', 'amphibians', 'fish', 'chordata'],
    keywords: ['vertebral', 'backbone', 'spine', 'notochord', 'birds', 'reptiles', 'amphibians', 'fish', 'chordate'],
  },
  'q1_c': {
    keyConcepts: ['jaguar', 'tiger', 'lion', 'panthera', 'same genus', 'most closely related'],
    keywords: ['panthera', 'genus', 'jaguar', 'tiger', 'lion', 'closely related', 'binomial'],
  },
  'q1_d': {
    keyConcepts: ['lion', 'jaguar', '8 out of 10', 'most bases in common', 'most similar DNA'],
    keywords: ['lion', 'jaguar', '8', 'similar', 'DNA', 'bases', 'most similar'],
  },
  'q1_e': {
    keyConcepts: ['mutation', 'natural selection', 'speciation', 'random mutations', 'sexual reproduction', 'meiosis'],
    keywords: ['mutation', 'natural selection', 'speciation', 'evolution', 'random', 'meiosis'],
  },
  'q1_f': {
    keyConcepts: ['amino acids', 'amino acid', 'monomer', 'polymer'],
    keywords: ['amino acid', 'amino', 'monomer', 'protein'],
  },
  'q1_g': {
    keyConcepts: ['glucagon', 'insulin', 'raises blood sugar', 'lowers blood sugar', 'increases blood glucose', 'decreases blood glucose'],
    keywords: ['glucagon', 'insulin', 'blood sugar', 'blood glucose', 'raises', 'lowers', 'increases', 'decreases'],
  },
  'q1_h': {
    keyConcepts: ['homeostasis', 'constant internal environment', 'negative feedback'],
    keywords: ['homeostasis', 'constant', 'internal', 'feedback'],
  },

  // ── Q2: Gas Exchange & Blood ──────────────────────────────────
  'q2_a': {
    keyConcepts: ['high concentration in alveoli', 'low concentration in blood', 'concentration gradient', 'alveolar membrane', 'diffusion'],
    keywords: ['concentration gradient', 'high concentration', 'low concentration', 'alveolar', 'membrane', 'diffusion', 'thin wall'],
  },
  'q2_b': {
    keyConcepts: ['red blood cells', 'haemoglobin', 'oxyhaemoglobin', 'circulatory system', 'blood vessels'],
    keywords: ['red blood cell', 'haemoglobin', 'oxyhaemoglobin', 'blood vessel', 'artery', 'capillary', 'circulatory'],
  },
  'q2_c': {
    keyConcepts: ['pulse rate increased', 'breathing rate increased', 'cellular respiration', 'more oxygen needed', 'more CO2 produced', 'energy for muscles'],
    keywords: ['pulse', 'breathing', 'respiration', 'oxygen', 'carbon dioxide', 'CO2', 'energy', 'muscles', 'exercise', 'increase'],
  },
  'q2_d': {
    keyConcepts: ['victor', 'highest white blood cells', 'white blood cells fight infection'],
    keywords: ['victor', 'white blood cell', 'highest', 'infection', 'immune'],
  },
  'q2_e': {
    keyConcepts: ['age', 'fitness', 'stress', 'medical history', 'medication', 'ethnicity'],
    keywords: ['age', 'fitness', 'stress', 'medication', 'medical history', 'ethnicity', 'diet'],
  },

  // ── Q3: Seed Germination ──────────────────────────────────────
  'q3_a': {
    keyConcepts: ['species a', 'species A', 'highest germination at 75%'],
    keywords: ['species A', 'A', 'highest', '75%'],
  },
  'q3_b': {
    keyConcepts: ['control experiment', 'control', 'no light present', 'baseline'],
    keywords: ['control', 'baseline', 'no light', 'compare', 'zero'],
  },
  'q3_c': {
    keyConcepts: ['both had seeds germinate', 'increasing light increases germination', 'species A more than B', 'species B cannot germinate without light'],
    keywords: ['both', 'similar', 'increase', 'difference', 'species A', 'species B', '0%', 'more', 'germinate'],
  },
  'q3_d': {
    keyConcepts: ['does not require light', 'light does not affect', 'light independent germination'],
    keywords: ['does not need light', 'light independent', 'shade', 'no light required', 'independent of light'],
  },
  'q3_e': {
    keyConcepts: ['control other variables', 'fair test', 'other variables do not affect results'],
    keywords: ['control', 'variable', 'fair test', 'other factors', 'standardise'],
  },
  'q3_f': {
    keyConcepts: ['species Y 90%', 'species Z 80%', '90 percent', '80 percent'],
    keywords: ['90', '80', 'species Y', 'species Z', 'optimum', 'maximum'],
  },
  'q3_g': {
    keyConcepts: ['85% allows maximum for Z', 'species Z optimum below 85%', 'species Y optimum between 80 and 90', '85% not tested for Y'],
    keywords: ['85', 'species Y', 'species Z', 'optimum', 'maximum', 'supported', 'not supported'],
  },

  // ── Q4: Photosynthesis ────────────────────────────────────────
  'q4_a': {
    keyConcepts: ['carbon dioxide', 'water', 'oxygen', 'glucose', 'reactants', 'products'],
    keywords: ['carbon dioxide', 'water', 'oxygen', 'glucose', 'CO2', 'H2O', 'photosynthesis'],
  },
  'q4_b': {
    keyConcepts: ['independent variable light intensity', 'dependent variable stem length', 'control temperature', 'control same plant type'],
    keywords: ['independent', 'light intensity', 'dependent', 'stem length', 'stem height', 'control', 'temperature', 'same plant'],
  },
  'q4_c': {
    keyConcepts: ['increases rate of photosynthesis', 'more glucose', 'glucose used for growth', 'cell division'],
    keywords: ['photosynthesis', 'glucose', 'sugar', 'food', 'growth', 'rate', 'energy', 'cell division'],
  },
  'q4_d': {
    keyConcepts: ['45mm at 90%', '40mm average', 'mean', 'average calculation'],
    keywords: ['45', '40', 'average', 'measurement', 'mm', 'mean'],
  },
  'q4_e': {
    keyConcepts: ['mm', 'millimetres', 'cm', 'centimetres', 'units'],
    keywords: ['mm', 'cm', 'millimetre', 'centimetre', 'length', 'units'],
  },
  'q4_f': {
    keyConcepts: ['90 percent', 'no longer a limiting factor', 'another limiting factor', 'light not limiting'],
    keywords: ['90', 'limiting factor', 'plateau', 'maximum', 'stopped', 'another factor'],
  },
  'q4_g': {
    keyConcepts: ['increase temperature', 'increase carbon dioxide', 'add fertiliser', 'longer time', 'more minerals'],
    keywords: ['temperature', 'carbon dioxide', 'CO2', 'fertiliser', 'minerals', 'longer', 'time'],
  },
  'q4_h': {
    keyConcepts: ['data from 30 to 90 supports', 'stem length increases', 'beyond 90 does not support', 'growth constant above 90'],
    keywords: ['support', 'does not support', '30', '90', '100', 'increase', 'constant', 'plateau', 'data'],
  },

  // ── Q5: Temperature ──────────────────────────────────────────
  'q5_a': {
    keyConcepts: ['temperature', 'independent variable', 'what you change'],
    keywords: ['temperature', 'independent', 'change'],
  },
  'q5_b': {
    keyConcepts: ['x-axis temperature', 'y-axis stem length', 'units on axes', 'even scale', 'points plotted correctly'],
    keywords: ['temperature', 'stem length', 'increase', 'mm', 'axis', 'scale', 'plot', 'points'],
  },
  'q5_c': {
    keyConcepts: ['growth increases up to 40-45 degrees', 'photosynthesis increases', 'more glucose', 'enzymes denature', 'stomata close', 'optimum temperature'],
    keywords: ['temperature', 'increase', 'decrease', 'photosynthesis', 'enzyme', 'denature', 'optimum', 'stomata', 'glucose', '40', '45', '50'],
  },

  // ── Q6: Experimental Design ────────────────────────────────────
  'q6_a': {
    keyConcepts: ['independent variable pH', 'dependent variable plant growth stem length', 'controlled temperature', 'controlled water', 'equipment ruler pots', 'repeat each condition', 'safety gloves acid alkali'],
    keywords: ['pH', 'independent', 'dependent', 'controlled', 'stem length', 'growth', 'temperature', 'water', 'ruler', 'pots', 'measure', 'repeat', 'safety', 'gloves', 'acid', 'alkali'],
  },

  // ── Q7: Bird Banding ─────────────────────────────────────────
  'q7_a': {
    keyConcepts: ['grassland birds', 'greatest decline', 'largest decrease'],
    keywords: ['grassland', 'greatest', 'most', 'decline', 'decrease'],
  },
  'q7_b': {
    keyConcepts: ['identify critical habitats', 'protect habitats', 'migration routes', 'protected areas', 'corridors'],
    keywords: ['habitat', 'protect', 'migration', 'route', 'corridor', 'conservation', 'stopover'],
  },
  'q7_c': {
    keyConcepts: ['birds died', 'bird not recaptured', 'people did not return band', 'band lost', 'band fell off'],
    keywords: ['died', 'not caught', 'not returned', 'lost', 'fell off', 'no address', 'communication'],
  },
  'q7_d': {
    keyConcepts: ['repeat at different times', 'multiple locations', 'larger sample', 'reliable', 'representative'],
    keywords: ['repeat', 'sample size', 'location', 'time', 'species', 'reliable', 'representative'],
  },
  'q7_e': {
    keyConcepts: ['habitat destruction', 'agriculture', 'pesticides', 'urbanisation', 'protected areas', 'reduce pesticides'],
    keywords: ['habitat', 'agriculture', 'pesticide', 'urban', 'destruction', 'nesting', 'reduce', 'protect', 'conservation'],
  },

  // ── Q8: Technology in Animal Research ────────────────────────
  'q8_a': {
    keyConcepts: ['radio limited range', 'satellite global range', 'radio requires nearby scientist', 'satellite anywhere in world'],
    keywords: ['range', 'global', 'local', 'distance', 'satellite', 'radio', 'receiver', 'anywhere'],
  },
  'q8_b': {
    keyConcepts: ['advantage non-disturbing', 'continuous data', 'disadvantage affects behaviour', 'injury', 'expensive', 'battery'],
    keywords: ['advantage', 'disadvantage', 'disturb', 'behaviour', 'injury', 'expensive', 'battery', 'continuous'],
  },
  'q8_c': {
    keyConcepts: ['identify conflict zones', 'wildlife corridors', 'restrict human access', 'educate communities', 'habitat protection'],
    keywords: ['conflict', 'corridor', 'restrict', 'educate', 'community', 'management', 'habitat', 'protect', 'overlap'],
  },
  'q8_d': {
    keyConcepts: ['non-invasive monitoring', 'continuous data', 'global coverage', 'alters behaviour', 'expensive', 'data gaps', 'benefits outweigh limitations'],
    keywords: ['benefit', 'limitation', 'behaviour', 'expensive', 'cost', 'injury', 'monitor', 'continuous', 'global', 'welfare'],
  },
  'q8_e': {
    keyConcepts: ['public awareness', 'community support', 'secure funding', 'government policy', 'citizen science'],
    keywords: ['awareness', 'public', 'community', 'support', 'funding', 'policy', 'government', 'citizen science', 'conservation'],
  },
}
