import React, { useState, useEffect } from 'react';
import { Award, Target, Zap, TrendingUp, Check, X, Eye, HelpCircle, Star } from 'lucide-react';

const StrandHoot = () => {
  const [stage, setStage] = useState('welcome'); // welcome, briefing, game, results
  const [studentName, setStudentName] = useState('');
  const [currentZone, setCurrentZone] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [badges, setBadges] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedMCQ, setSelectedMCQ] = useState(null);
  const [keywordsHit, setKeywordsHit] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [showExemplar, setShowExemplar] = useState(false);
  const [questionComplete, setQuestionComplete] = useState(false);
  const [zoneResults, setZoneResults] = useState([]);

  const zones = [
    {
      name: "Spectrum Sprint",
      criterion: "Criterion A: Knowing & Understanding",
      icon: "🌈",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Wave Detective",
      criterion: "Criterion B: Inquiring & Designing",
      icon: "🔍",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Ray Master",
      criterion: "Criterion C: Processing & Evaluating",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Impact Zone",
      criterion: "Criterion D: Reflecting",
      icon: "🎯",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const questions = [
    // Zone 1: Spectrum Sprint (Criterion A)
    [
      {
        type: 'mcq',
        question: 'Which type of electromagnetic wave has the SHORTEST wavelength?',
        options: ['Radio waves', 'Microwaves', 'Gamma rays', 'Infrared'],
        correct: 2,
        hint: 'Think about which waves have the highest energy and frequency.',
        points: 10
      },
      {
        type: 'written',
        question: 'List the electromagnetic spectrum in order from LONGEST to SHORTEST wavelength.',
        keywords: ['radio', 'microwave', 'infrared', 'visible', 'ultraviolet', 'x-ray', 'gamma'],
        keywordVariations: {
          'radio': ['radio waves', 'radio wave', 'radiowaves'],
          'microwave': ['microwaves', 'micro waves', 'micro wave'],
          'infrared': ['infra red', 'infra-red', 'IR'],
          'visible': ['visible light', 'light'],
          'ultraviolet': ['ultra violet', 'ultra-violet', 'UV'],
          'x-ray': ['xray', 'x ray', 'x rays'],
          'gamma': ['gamma rays', 'gamma ray']
        },
        exemplar: 'Radio waves, Microwaves, Infrared, Visible light, Ultraviolet, X-rays, Gamma rays',
        hint: 'Remember: Radio waves have the longest wavelength. Think about which waves can pass through your body.',
        points: 20
      },
      {
        type: 'written',
        question: 'In ROYGBIV, which color has the HIGHEST frequency and which has the LOWEST? Explain why.',
        keywords: ['violet', 'highest', 'red', 'lowest', 'wavelength', 'frequency', 'inverse'],
        keywordVariations: {
          'violet': ['purple'],
          'highest': ['greater', 'maximum', 'most'],
          'lowest': ['least', 'minimum', 'smaller'],
          'inverse': ['inversely', 'opposite', 'inversely proportional']
        },
        exemplar: 'Violet has the highest frequency and red has the lowest frequency. This is because frequency and wavelength are inversely proportional - violet light has the shortest wavelength, so it has the highest frequency.',
        hint: 'Think about the relationship between wavelength and frequency. What happens to frequency when wavelength decreases?',
        points: 20
      }
    ],
    // Zone 2: Wave Detective (Criterion B)
    [
      {
        type: 'written',
        question: 'A bat emits an ultrasound wave and hears an echo after 0.4 seconds. If sound travels at 340 m/s, how far away is the obstacle? Show your method.',
        keywords: ['distance', 'speed', 'time', '340', '0.4', 'divide', '2', '68'],
        keywordVariations: {
          'distance': ['d', 'dist'],
          'divide': ['divided', 'half', '/'],
          '68': ['68m', '68 m', '68 meters', '68 metres']
        },
        exemplar: 'Distance = (Speed × Time) ÷ 2 = (340 m/s × 0.4 s) ÷ 2 = 136 ÷ 2 = 68 meters. We divide by 2 because the sound travels to the obstacle and back.',
        hint: 'Remember: the sound wave travels TO the obstacle and BACK. Use the formula: distance = speed × time, but think carefully about the path.',
        points: 25
      },
      {
        type: 'mcq',
        question: 'Which statement about echolocation is CORRECT?',
        options: [
          'It only works in water',
          'It uses high-frequency sound waves to detect objects',
          'It requires visible light to function',
          'It cannot determine distance, only direction'
        ],
        correct: 1,
        hint: 'Think about how bats and dolphins use sound waves in their environment.',
        points: 10
      },
      {
        type: 'written',
        question: 'Design a simple experiment to measure the speed of sound using echo. What equipment would you need and what would you measure?',
        keywords: ['distance', 'time', 'stopwatch', 'measure', 'wall', 'clap', 'echo', 'calculate'],
        keywordVariations: {
          'stopwatch': ['timer', 'clock', 'watch'],
          'wall': ['building', 'obstacle', 'barrier', 'surface'],
          'clap': ['sound', 'noise', 'bang'],
          'calculate': ['divide', 'formula']
        },
        exemplar: 'Equipment needed: measuring tape/trundle wheel, stopwatch, large wall or building. Method: Measure a known distance from a wall (e.g., 100m). Make a sharp sound (clap). Time how long until you hear the echo. Calculate speed = (2 × distance) ÷ time. The 2 accounts for the sound traveling there and back.',
        hint: 'You need to create a sound, measure a distance, and time something. What path does the sound take?',
        points: 25
      }
    ],
    // Zone 3: Ray Master (Criterion C)
    [
      {
        type: 'mcq',
        question: 'When drawing ray diagrams for plane mirrors, the angle of incidence is:',
        options: [
          'Always 90 degrees',
          'Equal to the angle of reflection',
          'Greater than the angle of reflection',
          'Half of the angle of reflection'
        ],
        correct: 1,
        hint: 'Think about the law of reflection - what relationship exists between these two angles?',
        points: 10
      },
      {
        type: 'written',
        question: 'Describe what happens to a light ray when it passes from air into water. Include the terms: normal, refraction, and speed.',
        keywords: ['bends', 'towards', 'normal', 'slows', 'refraction', 'speed', 'decreases'],
        keywordVariations: {
          'bends': ['bend', 'changes direction', 'deflects'],
          'towards': ['toward', 'closer to'],
          'slows': ['slow down', 'slower', 'reduces'],
          'decreases': ['decrease', 'reduced']
        },
        exemplar: 'When light passes from air into water, it bends towards the normal. This is called refraction. The light ray bends because it slows down - the speed of light decreases in the denser medium (water).',
        hint: 'Think about what happens when light enters a denser medium. Does it speed up or slow down? How does this affect its direction?',
        points: 20
      },
      {
        type: 'written',
        question: 'A light ray hits a mirror at 30° to the normal. At what angle does it reflect? Explain the law you used.',
        keywords: ['30', 'degrees', 'law of reflection', 'equal', 'angle of incidence', 'angle of reflection'],
        keywordVariations: {
          '30': ['thirty', '30°'],
          'equal': ['same', 'equals', '='],
          'law of reflection': ['reflection law', 'law']
        },
        exemplar: 'The light ray reflects at 30° to the normal. According to the law of reflection, the angle of incidence equals the angle of reflection. Since the incident ray is at 30°, the reflected ray is also at 30° to the normal.',
        hint: 'There is a fundamental law about reflection that relates these two angles. They have a special relationship.',
        points: 20
      }
    ],
    // Zone 4: Impact Zone (Criterion D)
    [
      {
        type: 'mcq',
        question: 'Which application of electromagnetic waves raises the MOST ethical concerns about privacy?',
        options: [
          'Using radio waves for broadcasting',
          'Using X-rays for medical imaging',
          'Using infrared for thermal imaging surveillance',
          'Using visible light for photography'
        ],
        correct: 2,
        hint: 'Think about which technology can "see" through walls or in darkness without consent.',
        points: 10
      },
      {
        type: 'written',
        question: 'Explain how understanding the electromagnetic spectrum has improved medical diagnosis. Give at least two examples.',
        keywords: ['X-ray', 'ultrasound', 'MRI', 'diagnosis', 'bones', 'tumors', 'tissues', 'internal'],
        keywordVariations: {
          'X-ray': ['xray', 'x ray', 'x-rays'],
          'ultrasound': ['ultra sound', 'sonogram'],
          'MRI': ['magnetic resonance', 'magnetic resonance imaging'],
          'diagnosis': ['diagnose', 'detect', 'identify']
        },
        exemplar: 'Understanding EM waves has revolutionized medical diagnosis. X-rays allow doctors to see bones and detect fractures without surgery. MRI scans use radio waves to create detailed images of soft tissues, helping diagnose tumors and internal injuries. Ultrasound uses sound waves to safely monitor pregnancies.',
        hint: 'Think about different types of medical scans. What do X-rays show? What about other imaging technologies?',
        points: 25
      },
      {
        type: 'written',
        question: 'Reflect on your learning: What surprised you most about waves and the electromagnetic spectrum? How might this knowledge be useful in your future?',
        keywords: ['learned', 'surprised', 'applications', 'real world', 'technology', 'understanding'],
        keywordVariations: {
          'learned': ['learn', 'discovered', 'found out'],
          'surprised': ['interesting', 'amazed', 'unexpected'],
          'applications': ['uses', 'application', 'used'],
          'technology': ['tech', 'devices']
        },
        exemplar: 'I was surprised to learn how many everyday technologies rely on EM waves - from WiFi to medical scans. Understanding this helps me appreciate how physics connects to real life. This knowledge could be useful in careers in medicine, engineering, or communications technology.',
        hint: 'Think about what you found most interesting. How do EM waves affect your daily life? What careers use this knowledge?',
        points: 20
      }
    ]
  ];

  const checkKeywords = (answer, keywords, variations) => {
    const lowerAnswer = answer.toLowerCase();
    const hits = [];
    
    keywords.forEach(keyword => {
      const variants = variations[keyword] || [];
      const allVariants = [keyword, ...variants];
      
      // Fuzzy matching - check if any variant appears in the answer
      if (allVariants.some(variant => lowerAnswer.includes(variant.toLowerCase()))) {
        if (!keywordsHit.includes(keyword)) {
          hits.push(keyword);
        }
      }
    });
    
    return hits;
  };

  const calculateProgress = (currentKeywords, totalKeywords) => {
    return (currentKeywords.length / totalKeywords.length) * 100;
  };

  const handleAnswerChange = (value) => {
    setUserAnswer(value);
    
    const q = questions[currentZone][currentQuestion];
    if (q.type === 'written') {
      const newHits = checkKeywords(value, q.keywords, q.keywordVariations);
      if (newHits.length > 0) {
        setKeywordsHit([...keywordsHit, ...newHits]);
      }
    }
  };

  const handleMCQSelect = (index) => {
    setSelectedMCQ(index);
  };

  const submitAnswer = () => {
    const q = questions[currentZone][currentQuestion];
    let points = 0;
    let feedback = '';
    
    if (q.type === 'mcq') {
      if (selectedMCQ === q.correct) {
        points = q.points;
        feedback = 'Correct! Well done!';
      } else {
        points = 0;
        feedback = 'Not quite. Review the concept and try again!';
      }
    } else if (q.type === 'written') {
      const progress = calculateProgress(keywordsHit, q.keywords);
      points = Math.round((progress / 100) * q.points);
      feedback = `You've covered ${Math.round(progress)}% of the key concepts!`;
    }
    
    setTotalPoints(totalPoints + points);
    setQuestionComplete(true);
    
    // Award badges
    if (points === q.points) {
      const newBadge = `${zones[currentZone].name} - Question ${currentQuestion + 1}`;
      if (!badges.includes(newBadge)) {
        setBadges([...badges, newBadge]);
      }
    }
  };

  const nextQuestion = () => {
    const zoneQuestions = questions[currentZone];
    
    // Store result for this question
    const newResult = {
      zone: currentZone,
      question: currentQuestion,
      points: totalPoints - (zoneResults.reduce((sum, r) => sum + r.points, 0))
    };
    setZoneResults([...zoneResults, newResult]);
    
    if (currentQuestion < zoneQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      resetQuestion();
    } else if (currentZone < zones.length - 1) {
      setCurrentZone(currentZone + 1);
      setCurrentQuestion(0);
      resetQuestion();
    } else {
      setStage('results');
    }
  };

  const resetQuestion = () => {
    setUserAnswer('');
    setSelectedMCQ(null);
    setKeywordsHit([]);
    setShowHint(false);
    setShowExemplar(false);
    setQuestionComplete(false);
  };

  const q = questions[currentZone]?.[currentQuestion];
  const progress = q?.type === 'written' ? calculateProgress(keywordsHit, q.keywords) : 0;
  const canShowExemplar = progress >= 60 || showExemplar;

  if (stage === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
              STRAND HOOT
            </h1>
            <p className="text-gray-600">Waves & Electromagnetic Spectrum Challenge</p>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          
          <button
            onClick={() => setStage('briefing')}
            disabled={!studentName.trim()}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Start Adventure
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Welcome, {studentName}! 🎯
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-purple-600">Learning Objectives</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Master the electromagnetic spectrum order and properties</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Understand ROYGBIV color-frequency-wavelength relationships</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Apply wave principles to solve echo location problems</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Draw and analyze ray diagrams for reflection and refraction</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-purple-600">Challenge Zones</h3>
            <div className="grid grid-cols-2 gap-3">
              {zones.map((zone, idx) => (
                <div key={idx} className={`bg-gradient-to-r ${zone.color} p-4 rounded-lg text-white`}>
                  <div className="text-2xl mb-1">{zone.icon}</div>
                  <div className="font-bold text-sm">{zone.name}</div>
                  <div className="text-xs opacity-90">{zone.criterion}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>How it works:</strong> Answer questions to earn points and badges. 
              For written responses, hit keywords to fill your progress bar. Get hints if stuck!
            </p>
          </div>
          
          <button
            onClick={() => setStage('game')}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition"
          >
            Begin Challenge
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'results') {
    const maxPoints = questions.flat().reduce((sum, q) => sum + q.points, 0);
    const percentage = Math.round((totalPoints / maxPoints) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-600 via-emerald-500 to-teal-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="text-center mb-6">
            <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Challenge Complete!</h2>
            <p className="text-gray-600">Amazing work, {studentName}!</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">{totalPoints}</div>
              <div className="text-gray-700">Total Points</div>
              <div className="text-2xl font-bold text-pink-600 mt-2">{percentage}%</div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Badges Earned ({badges.length})</h3>
            <div className="grid grid-cols-2 gap-2">
              {badges.map((badge, idx) => (
                <div key={idx} className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3 flex items-center">
                  <Award className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">{badge}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Performance by Criterion</h3>
            {zones.map((zone, idx) => {
              const zonePoints = zoneResults
                .filter(r => r.zone === idx)
                .reduce((sum, r) => sum + r.points, 0);
              const zoneMax = questions[idx].reduce((sum, q) => sum + q.points, 0);
              const zonePercent = Math.round((zonePoints / zoneMax) * 100);
              
              return (
                <div key={idx} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700">{zone.name}</span>
                    <span className="text-sm text-gray-600">{zonePoints}/{zoneMax} pts</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`bg-gradient-to-r ${zone.color} h-3 rounded-full transition-all`}
                      style={{ width: `${zonePercent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-2xl p-4 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{zones[currentZone].name}</h2>
              <p className="text-sm text-gray-600">{zones[currentZone].criterion}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{totalPoints}</div>
              <div className="text-xs text-gray-600">Points</div>
            </div>
          </div>
          
          <div className="flex gap-2 mb-2">
            {questions[currentZone].map((_, idx) => (
              <div
                key={idx}
                className={`flex-1 h-2 rounded-full ${
                  idx < currentQuestion ? 'bg-green-500' :
                  idx === currentQuestion ? 'bg-purple-500' :
                  'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <div className="flex gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-gray-700">
              Question {currentQuestion + 1} of {questions[currentZone].length}
            </span>
          </div>
        </div>
        
        {/* Question Card */}
        <div className="bg-white p-6 shadow-lg">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">{q.question}</h3>
            
            {q.type === 'mcq' ? (
              <div className="space-y-3">
                {q.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleMCQSelect(idx)}
                    disabled={questionComplete}
                    className={`w-full text-left p-4 rounded-lg border-2 transition ${
                      selectedMCQ === idx
                        ? questionComplete && idx === q.correct
                          ? 'border-green-500 bg-green-50'
                          : questionComplete
                          ? 'border-red-500 bg-red-50'
                          : 'border-purple-500 bg-purple-50'
                        : questionComplete && idx === q.correct
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-300 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                        selectedMCQ === idx ? 'border-purple-500 bg-purple-500' : 'border-gray-400'
                      }`}>
                        {selectedMCQ === idx && <div className="w-3 h-3 bg-white rounded-full" />}
                      </div>
                      <span className="text-gray-800">{option}</span>
                      {questionComplete && idx === q.correct && (
                        <Check className="w-5 h-5 text-green-600 ml-auto" />
                      )}
                      {questionComplete && selectedMCQ === idx && idx !== q.correct && (
                        <X className="w-5 h-5 text-red-600 ml-auto" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div>
                <textarea
                  value={userAnswer}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  disabled={questionComplete}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none min-h-32"
                  placeholder="Type your answer here..."
                />
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700">Key Concepts Progress</span>
                    <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all flex items-center justify-end pr-2"
                      style={{ width: `${progress}%` }}
                    >
                      {progress > 10 && <Zap className="w-3 h-3 text-white" />}
                    </div>
                  </div>
                  
                  {/* Keywords Hit */}
                  {keywordsHit.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {keywordsHit.map((keyword, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Check className="w-3 h-3 mr-1" />
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Hint and Exemplar Buttons */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
            >
              <HelpCircle className="w-4 h-4" />
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
            
            {q.type === 'written' && (
              <button
                onClick={() => setShowExemplar(true)}
                disabled={!canShowExemplar && !questionComplete}
                className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Eye className="w-4 h-4" />
                View Exemplar {!canShowExemplar && !questionComplete && `(${Math.round(progress)}%)`}
              </button>
            )}
          </div>
          
          {/* Hint Display */}
          {showHint && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-gray-700">💡 <strong>Hint:</strong> {q.hint}</p>
            </div>
          )}
          
          {/* Exemplar Display */}
          {showExemplar && canShowExemplar && q.type === 'written' && (
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
              <p className="text-sm font-bold text-purple-700 mb-2">Exemplar Answer:</p>
              <p className="text-sm text-gray-700">{q.exemplar}</p>
            </div>
          )}
          
          {/* Submit/Next Buttons */}
          <div className="flex gap-3">
            {!questionComplete ? (
              <button
                onClick={submitAnswer}
                disabled={(q.type === 'mcq' && selectedMCQ === null) || (q.type === 'written' && !userAnswer.trim())}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition"
              >
                {currentQuestion < questions[currentZone].length - 1 ? 'Next Question' : 
                 currentZone < zones.length - 1 ? 'Next Zone' : 'View Results'}
              </button>
            )}
          </div>
        </div>
        
        {/* Badges Display */}
        {badges.length > 0 && (
          <div className="bg-white rounded-b-2xl p-4 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="font-bold text-gray-800">Badges Earned: {badges.length}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {badges.slice(-3).map((badge, idx) => (
                <span key={idx} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrandHoot;