import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Award, Lightbulb, Download, CheckCircle, Circle, Sparkles, Beaker, Leaf, DollarSign, AlertTriangle } from 'lucide-react';

const ToiletriesStrandhoot = () => {
  const [currentStrand, setCurrentStrand] = useState(0);
  const [answers, setAnswers] = useState({
    strand1: '',
    strand2: '',
    strand3: '',
    strand4: ''
  });
  const [showHints, setShowHints] = useState({});
  const [badges, setBadges] = useState([]);
  const [keywordProgress, setKeywordProgress] = useState({});
  const [animateBeaker, setAnimateBeaker] = useState(false);

  const strands = [
    {
      id: 'intro',
      title: 'Welcome to Toiletries Science Challenge',
      subtitle: 'Criterion D: Reflecting on the impacts of science',
      icon: Beaker,
      color: 'bg-purple-500'
    },
    {
      id: 'strand1',
      title: 'Strand i: Explain Scientific Applications',
      subtitle: 'Describe how separation techniques are used in toiletry production',
      icon: Beaker,
      color: 'bg-blue-500',
      keywords: ['distillation', 'extraction', 'filtration', 'chromatography', 'crystallisation', 'separation', 'essential oils', 'solvent', 'hydrodistillation'],
      concepts: ['separation technique', 'manufacturing process', 'purification', 'volatile compounds'],
      task: 'Choose ONE toiletry product (shampoo, perfume, soap, or deodorant). Explain the scientific separation techniques used in its production.',
      tips: [
        'Name the specific product type',
        'Identify 2-3 separation techniques used',
        'Explain HOW each technique works in production',
        'Use scientific terminology correctly'
      ],
      exemplar: 'Level 7-8 Example: "Perfume production uses steam distillation to extract essential oils from plant materials. Steam passes through the plant matter, causing volatile aromatic compounds to vaporize. The vapour is then condensed, and liquid-liquid extraction separates the oil from water based on density differences. Solvent extraction with hexane can also dissolve fragrance molecules, followed by evaporation to remove the solvent and isolate pure essential oils."',
      hints: [
        'Think about the raw materials → finished product journey',
        'Consider: How are ingredients extracted? How are mixtures separated? How is purity ensured?',
        'Use examples from the pre-release material documents'
      ]
    },
    {
      id: 'strand2',
      title: 'Strand ii: Discuss Environmental Impact',
      subtitle: 'Analyze how toiletry production and use affects the environment',
      icon: Leaf,
      color: 'bg-green-500',
      keywords: ['pollution', 'waste', 'plastic', 'packaging', 'chemicals', 'aquatic', 'ecosystem', 'sustainability', 'carbon footprint', 'biodegradable'],
      concepts: ['environmental consequence', 'water pollution', 'plastic waste', 'chemical disposal', 'ecological impact'],
      task: 'Discuss the environmental impacts of your chosen toiletry product - both positive and negative.',
      tips: [
        'Consider the ENTIRE lifecycle: production → use → disposal',
        'Include specific environmental issues (water pollution, plastic waste, etc.)',
        'Discuss both negative impacts AND sustainable alternatives',
        'Use evidence from the sources provided'
      ],
      exemplar: 'Level 7-8 Example: "Liquid shampoos contribute to plastic pollution through single-use bottles, with millions entering landfills annually. During manufacturing, chemical surfactants like sodium lauryl sulfate can enter water systems, affecting aquatic ecosystems. However, shampoo bars offer a sustainable alternative: they eliminate plastic packaging, reduce shipping emissions due to compact size, and use biodegradable ingredients. The shift to bars demonstrates how consumer choices can reduce environmental footprints while maintaining product effectiveness."',
      hints: [
        'Think: production waste, packaging, chemicals in waterways, transport emissions',
        'What happens when the product goes down the drain?',
        'Are there eco-friendly alternatives mentioned in the sources?'
      ]
    },
    {
      id: 'strand3',
      title: 'Strand iii: Social, Economic & Ethical Implications',
      subtitle: 'Evaluate the broader impacts on society and ethical concerns',
      icon: DollarSign,
      color: 'bg-yellow-500',
      keywords: ['advertising', 'misleading', 'claims', 'body image', 'marketing', 'consumer', 'economic', 'cost', 'accessibility', 'ethical'],
      concepts: ['misleading advertising', 'beauty standards', 'consumer behavior', 'economic impact', 'ethical sourcing', 'health claims'],
      task: 'Discuss the social, economic, OR ethical implications of your toiletry product. Choose at least TWO aspects.',
      tips: [
        'Social: beauty standards, gender norms, advertising effects, health misconceptions',
        'Economic: cost to consumers, market trends, job creation, brand competition',
        'Ethical: misleading claims, ingredient sourcing, animal testing, cultural appropriation',
        'Use specific examples from the ASA guidelines and research articles'
      ],
      exemplar: 'Level 7-8 Example: "Hair care advertising raises significant ethical concerns. The ASA prohibits "repair" claims unless supported by robust evidence, yet many brands use scientific-sounding language to mislead consumers. This creates unrealistic expectations and wastes consumer money on ineffective products. Socially, male grooming advertisements construct new masculinity ideals, pressuring men to purchase skincare products to meet beautified standards. Economically, the shift to shampoo bars supports small artisanal businesses and local economies, creating jobs in sustainable ingredient sourcing, though it challenges established brands to adapt or lose market share."',
      hints: [
        'Look at the ASA advertising guidelines - what claims are problematic?',
        'Consider: Who benefits? Who is harmed? What pressures exist?',
        'Think about the "beautification" article and economic impact sources'
      ]
    },
    {
      id: 'strand4',
      title: 'Strand iv: Personal Opinion with Justification',
      subtitle: 'Should consumers prioritize natural or synthetic toiletries?',
      icon: AlertTriangle,
      color: 'bg-red-500',
      keywords: ['opinion', 'justify', 'balance', 'perspective', 'recommend', 'depends', 'consider', 'however', 'although'],
      concepts: ['balanced argument', 'evidence-based opinion', 'counterargument', 'reasoned conclusion'],
      task: 'Give your informed opinion: Should consumers choose natural or synthetic toiletry products? Justify using scientific evidence.',
      tips: [
        'State your position clearly',
        'Provide 2-3 scientific reasons supporting your view',
        'Acknowledge the opposing perspective (counterargument)',
        'Use evidence from sources to support claims',
        'End with a nuanced conclusion'
      ],
      exemplar: 'Level 7-8 Example: "Consumers should prioritize products based on sustainability and safety rather than the natural/synthetic distinction alone. While natural fragrances appeal emotionally as "authentic," they require intensive plant harvesting, threatening biodiversity and having shorter shelf lives. Synthetic fragrances offer consistency, cost-effectiveness, and reduce pressure on wild plant populations. However, some synthetics like phthalates pose health risks. The optimal approach is bioengineered synthetics, which combine sustainability benefits with safety profiles. Ultimately, consumers should examine evidence for specific products rather than assuming all natural products are superior or all synthetic products are harmful."',
      hints: [
        'There\'s no single "right" answer - it\'s about quality of reasoning',
        'Use the natural vs synthetic fragrance comparison article',
        'Show you understand BOTH sides before concluding'
      ]
    }
  ];

  const calculateProgress = (text, strand) => {
    if (!strand.keywords) return { keywords: 0, concepts: 0, phrases: 0 };
    
    const lowerText = text.toLowerCase();
    const keywordCount = strand.keywords.filter(k => lowerText.includes(k.toLowerCase())).length;
    const conceptCount = strand.concepts.filter(c => lowerText.includes(c.toLowerCase())).length;
    const phraseCount = (lowerText.length > 300 ? 1 : 0) + (lowerText.split('.').length > 4 ? 1 : 0);
    
    return {
      keywords: Math.min((keywordCount / strand.keywords.length) * 100, 100),
      concepts: Math.min((conceptCount / strand.concepts.length) * 100, 100),
      phrases: Math.min((phraseCount / 2) * 100, 100)
    };
  };

  useEffect(() => {
    const currentStrandData = strands[currentStrand];
    if (currentStrandData.id !== 'intro' && answers[currentStrandData.id]) {
      const progress = calculateProgress(answers[currentStrandData.id], currentStrandData);
      setKeywordProgress(prev => ({ ...prev, [currentStrandData.id]: progress }));
      
      // Award badges
      if (progress.keywords >= 60 && !badges.includes(`${currentStrandData.id}-keywords`)) {
        setBadges(prev => [...prev, `${currentStrandData.id}-keywords`]);
      }
      if (progress.concepts >= 75 && !badges.includes(`${currentStrandData.id}-concepts`)) {
        setBadges(prev => [...prev, `${currentStrandData.id}-concepts`]);
      }
    }
  }, [answers, currentStrand]);

  const handleAnswerChange = (strandId, value) => {
    setAnswers(prev => ({ ...prev, [strandId]: value }));
  };

  const toggleHint = (index) => {
    setShowHints(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const generatePDF = () => {
    const content = `
TOILETRIES SCIENCE - CRITERION D RESPONSE
Student Submission
Generated: ${new Date().toLocaleDateString()}

STRAND i: SCIENTIFIC APPLICATIONS
${answers.strand1 || '[No response]'}

STRAND ii: ENVIRONMENTAL IMPACT
${answers.strand2 || '[No response]'}

STRAND iii: SOCIAL, ECONOMIC & ETHICAL IMPLICATIONS
${answers.strand3 || '[No response]'}

STRAND iv: PERSONAL OPINION WITH JUSTIFICATION
${answers.strand4 || '[No response]'}

BADGES EARNED: ${badges.length}
    `.trim();
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'toiletries-criterion-d-response.txt';
    a.click();
  };

  const currentStrandData = strands[currentStrand];
  const progress = keywordProgress[currentStrandData.id] || { keywords: 0, concepts: 0, phrases: 0 };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`${currentStrandData.color} p-3 rounded-xl text-white`}>
                <currentStrandData.icon size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{currentStrandData.title}</h1>
                <p className="text-gray-600">{currentStrandData.subtitle}</p>
              </div>
            </div>
            <div className="flex gap-2">
              {badges.map((badge, i) => (
                <Award key={i} className="text-yellow-500" size={32} />
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          {currentStrandData.id !== 'intro' && (
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-blue-600">Keywords</span>
                  <span>{Math.round(progress.keywords)}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-500"
                    style={{ width: `${progress.keywords}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-green-600">Concepts</span>
                  <span>{Math.round(progress.concepts)}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 transition-all duration-500"
                    style={{ width: `${progress.concepts}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-purple-600">Depth</span>
                  <span>{Math.round(progress.phrases)}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-purple-500 transition-all duration-500"
                    style={{ width: `${progress.phrases}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {currentStrandData.id === 'intro' ? (
            <div className="text-center py-12">
              <Sparkles className="mx-auto mb-6 text-purple-500" size={64} />
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Welcome, Science Explorer!</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                You're about to explore the fascinating science behind toiletries - from separation techniques in production to the ethical implications of advertising.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                <div className="bg-blue-50 p-6 rounded-xl text-left">
                  <Beaker className="text-blue-500 mb-3" size={40} />
                  <h3 className="font-bold text-lg mb-2">What You'll Do</h3>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• Explain separation techniques in production</li>
                    <li>• Analyze environmental impacts</li>
                    <li>• Discuss social and ethical implications</li>
                    <li>• Form an evidence-based opinion</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl text-left">
                  <Award className="text-green-500 mb-3" size={40} />
                  <h3 className="font-bold text-lg mb-2">Earn Badges</h3>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• 🔬 Science Communicator</li>
                    <li>• 🌍 Environmental Analyst</li>
                    <li>• 💡 Critical Thinker</li>
                    <li>• 📊 Evidence Master</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 max-w-3xl mx-auto">
                <h3 className="font-bold text-lg mb-3 flex items-center justify-center gap-2">
                  <Lightbulb className="text-yellow-600" />
                  Assessment Criteria
                </h3>
                <p className="text-sm text-gray-700">
                  This Strandhoot assesses <strong>Criterion D: Reflecting on the impacts of science</strong>. 
                  You'll work through four strands that mirror the MYP achievement level descriptors. 
                  Real-time feedback will guide you toward Level 7-8 quality responses!
                </p>
              </div>
            </div>
          ) : (
            <div>
              {/* Task Description */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <h3 className="font-bold text-lg mb-2">Your Task</h3>
                <p className="text-gray-700">{currentStrandData.task}</p>
              </div>

              {/* Tips Section */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="text-green-500" />
                  Success Checklist
                </h3>
                <ul className="space-y-2">
                  {currentStrandData.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Circle className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hint System */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Lightbulb className="text-yellow-500" />
                  Need Help? Unlock Hints
                </h3>
                <div className="space-y-2">
                  {currentStrandData.hints.map((hint, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleHint(i)}
                        className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                      >
                        <span className="font-medium">Hint {i + 1}</span>
                        <ChevronRight className={`transform transition-transform ${showHints[i] ? 'rotate-90' : ''}`} />
                      </button>
                      {showHints[i] && (
                        <div className="p-4 bg-yellow-50 border-t border-gray-200">
                          <p className="text-gray-700">{hint}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Exemplar */}
              <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Sparkles className="text-green-600" />
                  Level 7-8 Exemplar
                </h3>
                <p className="text-sm text-gray-700 italic">{currentStrandData.exemplar}</p>
              </div>

              {/* Answer Input */}
              <div className="mb-6">
                <label className="block font-bold text-lg mb-3">Your Response</label>
                <textarea
                  value={answers[currentStrandData.id] || ''}
                  onChange={(e) => handleAnswerChange(currentStrandData.id, e.target.value)}
                  className="w-full h-64 p-4 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none"
                  placeholder="Type your response here... Watch the progress bars above to track your use of key terms and concepts!"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Word count: {(answers[currentStrandData.id] || '').split(' ').filter(w => w).length} words
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <button
              onClick={() => setCurrentStrand(Math.max(0, currentStrand - 1))}
              disabled={currentStrand === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gray-200 rounded-lg font-semibold disabled:opacity-50 hover:bg-gray-300 transition-colors"
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <div className="flex gap-2">
              {strands.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === currentStrand ? 'bg-purple-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            {currentStrand === strands.length - 1 ? (
              <button
                onClick={generatePDF}
                className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <Download size={20} />
                Download Submission
              </button>
            ) : (
              <button
                onClick={() => setCurrentStrand(Math.min(strands.length - 1, currentStrand + 1))}
                className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                Next
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-600">
          <p className="text-sm">
            💡 Tip: Use evidence from the pre-release materials to support all your claims!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToiletriesStrandhoot;