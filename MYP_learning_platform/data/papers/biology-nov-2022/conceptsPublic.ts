type ConceptEntry = {
  keyConcepts: string[]
  keywords: string[]
}

export const CONCEPTS_PUBLIC_BIOLOGY_NOV2022: Record<string, ConceptEntry> = {

  q1_a: {
    keyConcepts: ['food web predator prey sea otter kelp ecosystem'],
    keywords: ['sea urchin', 'small fish', 'large crab', 'prey', 'sea otter'],
  },
  q1_b: {
    keyConcepts: ['producers photosynthesis light energy sugar food web autotrophs'],
    keywords: ['producers', 'photosynthesis', 'light energy', 'sugar', 'glucose', 'autotroph'],
  },
  q1_c: {
    keyConcepts: ['conservation human action population increase species protection'],
    keywords: ['conservation zone', 'national park', 'captive breeding', 'reintroduction'],
  },
  q1_d: {
    keyConcepts: ['pyramid of numbers population change sea otter sea urchin kelp predator prey'],
    keywords: ['sea urchins decreased', 'eaten by sea otters', 'fewer sea urchins', 'kelp increased'],
  },

  q2_a: {
    keyConcepts: ['nutrition energy source nutrients carbohydrates fats'],
    keywords: ['carbohydrates', 'fats', 'sugars', 'glucose', 'energy source'],
  },
  q2_b: {
    keyConcepts: ['protein digestion proteases amino acids stomach'],
    keywords: ['amino acids', 'proteases', 'protein digestion'],
  },
  q2_c: {
    keyConcepts: ['enzyme activity pH optimum stomach acid protease'],
    keywords: ['enzyme A', 'acidic', 'pH 1.9', 'optimum pH', 'stomach'],
  },
  q2_d: {
    keyConcepts: ['diffusion active transport absorption bloodstream concentration gradient'],
    keywords: ['diffusion', 'active transport', 'high concentration', 'low concentration', 'bloodstream'],
  },
  q2_e: {
    keyConcepts: ['red blood cell adaptations haemoglobin biconcave disc surface area oxygen transport'],
    keywords: ['no nucleus', 'haemoglobin', 'biconcave disc', 'small and flexible', 'surface area', 'oxygen'],
  },

  q3_a: {
    keyConcepts: ['sex hormones testosterone progesterone testes ovaries site of production'],
    keywords: ['testosterone', 'testes', 'progesterone', 'ovaries', 'sex hormone'],
  },
  q3_b: {
    keyConcepts: ['puberty changes sex hormones males females both secondary sexual characteristics'],
    keywords: ['sperm production', 'facial hair', 'pubic hair', 'sex organs', 'hips widen', 'breast tissue', 'menstruation'],
  },
  q3_c: {
    keyConcepts: ['meiosis sex cells chromosomes fertilization haploid diploid'],
    keywords: ['meiosis', 'sex cells', '23 chromosomes', 'fertilization', '46 chromosomes'],
  },
  q3_d: {
    keyConcepts: ['sex chromosomes X Y sperm egg determination male female offspring'],
    keywords: ['XX', 'XY', 'sperm', 'X chromosome', 'Y chromosome', 'egg', 'sex determination'],
  },

  q4_a: {
    keyConcepts: ['photosynthesis word equation reactants products carbon dioxide water glucose oxygen'],
    keywords: ['carbon dioxide', 'water', 'glucose', 'oxygen', 'photosynthesis'],
  },
  q4_b: {
    keyConcepts: ['variables investigation photosynthesis temperature oxygen independent dependent control'],
    keywords: ['IV', 'temperature', 'DV', 'O₂ concentration', 'CV', 'CO₂', 'light level'],
  },
  q4_c: {
    keyConcepts: ['hypothesis photosynthesis temperature oxygen rate scientific reasoning'],
    keywords: ['if', 'then', 'because', 'temperature increases', 'oxygen increases', 'photosynthesis rate'],
  },
  q4_d: {
    keyConcepts: ['calculating average data table photosynthesis oxygen concentration'],
    keywords: ['average', '261', 'calculation'],
  },
  q4_e: {
    keyConcepts: ['data presentation table improvement units temperature'],
    keywords: ['units', 'temperature', '°C', 'table heading'],
  },
  q4_f: {
    keyConcepts: ['prediction validity data analysis temperature photosynthesis trend'],
    keywords: ['do not support', 'support', '20°C to 40°C', 'above 40°C', 'insufficient data'],
  },

  q5_a: {
    keyConcepts: ['control variables method repeatability photosynthesis CO2 investigation'],
    keywords: ['stem length', 'type of plant', 'light level', 'initial O₂', 'control variable'],
  },
  q5_b: {
    keyConcepts: ['temperature control variable optimum photosynthesis 40°C enzyme'],
    keywords: ['control temperature', 'optimum', 'reaction rate', '40°C'],
  },
  q5_c: {
    keyConcepts: ['investigation improvement data collection repeats increments control baseline reliability'],
    keywords: ['more repeats', 'more increments', 'control experiment', 'reliable', 'baseline', 'outliers'],
  },
  q5_d: {
    keyConcepts: ['CO₂ concentration photosynthesis rate limiting factor plateau graph interpretation'],
    keywords: ['increases', 'plateaus', '0.10%', 'CO₂ limiting', 'limiting factors', 'light intensity'],
  },
  q5_e: {
    keyConcepts: ['limiting factors photosynthesis light temperature rate increase'],
    keywords: ['temperature', 'light intensity', 'limiting factor'],
  },

  q6_: {
    keyConcepts: ['light intensity photosynthesis rate investigation design Criteria B variables hypothesis method data'],
    keywords: ['light intensity', 'IV', 'DV', 'O₂ concentration', 'CV', 'hypothesis', 'repeats', 'increments'],
  },

  q7_a: {
    keyConcepts: ['plant yield pesticide boric acid species comparison highest yield'],
    keywords: ['plant W', 'highest yield', 'pesticide'],
  },
  q7_b: {
    keyConcepts: ['pesticide effectiveness species-specific pest boric acid impact'],
    keywords: ['pest species', 'boric acid', 'no impact', 'specific'],
  },
  q7_c: {
    keyConcepts: ['greenhouse controlled environment variables control experiment'],
    keywords: ['control variables', 'greenhouse', 'constant conditions'],
  },
  q7_d: {
    keyConcepts: ['minimum concentration maximum yield graph reading boric acid plant W Y'],
    keywords: ['4%', '6%', 'minimum concentration', 'maximum yield', 'plant W', 'plant Y'],
  },
  q7_e: {
    keyConcepts: ['minimum concentration both species maximum yield decision justification'],
    keywords: ['6%', 'both plants', 'maximum yield', 'lowest concentration'],
  },

  q8_a: {
    keyConcepts: ['cancer incidence age sex male female trend graph similarity difference'],
    keywords: ['increases', 'decreases', 'age', 'peak', 'males', 'females'],
  },
  q8_b: {
    keyConcepts: ['cancer incidence age risk factors mutations accumulation lifetime exposure'],
    keywords: ['risk factors', 'exposure', 'mutations', 'accumulate', 'age'],
  },
  q8_c: {
    keyConcepts: ['sun exposure health benefits risks Vitamin D cancer cataracts mental health balance advice'],
    keywords: ['Vitamin D', 'mental health', 'skin cancer', 'cataracts', 'sunburn', 'sunscreen'],
  },

  q9_: {
    keyConcepts: ['personalized medicine DNA sequencing medical benefits economic ethical Criteria D discussion'],
    keywords: ['personalized medicine', 'DNA sequencing', 'medical benefit', 'economic', 'ethical', 'privacy', 'cost', 'conclusion'],
  },
}
