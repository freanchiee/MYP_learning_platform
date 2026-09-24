import React, { useState, useRef } from 'react';
import { Star, Award, Download, Play, CheckCircle, AlertCircle } from 'lucide-react';

const ScienceMethodologyGame = () => {
  const [gameState, setGameState] = useState('intro'); // intro, playerName, game, results
  const [playerName, setPlayerName] = useState('');
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [totalStars, setTotalStars] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [playerResponses, setPlayerResponses] = useState({});
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const modules = [
    {
      id: 'rq',
      title: 'Research Question (RQ)',
      description: 'Learn how to write a great Research Question!',
      lesson: 'A Research Question is the question that YOUR science experiment will try to answer. It should be clear, specific, and measurable!',
      example: '❓ Good RQ: "Does temperature affect how fast a salt dissolves in water?" ✅\n❌ Bad RQ: "Does temperature do stuff?" (too vague)',
      question: 'Which is a GOOD Research Question?',
      options: [
        { text: 'How cool is science?', correct: false, feedback: 'Too vague! We need to be specific about what we are testing.' },
        { text: 'Does the height of a ramp affect how far a toy car rolls?', correct: true, feedback: '⭐ Perfect! This is specific and measurable!' },
        { text: 'Do things move?', correct: false, feedback: 'Way too general! We need specifics.' },
        { text: 'Is gravity real?', correct: false, feedback: 'Not specific enough for an experiment.' }
      ],
      stars: 1,
      badgeReward: 'Question Master'
    },
    {
      id: 'iv',
      title: 'Independent Variable (IV)',
      description: 'Master what you CHANGE in an experiment!',
      lesson: 'The Independent Variable is what YOU change or manipulate in your experiment. It\'s the thing you TEST. You only change ONE variable at a time!',
      example: '🔧 If your RQ is "Does height of ramp affect car speed?" then the IV = the HEIGHT of the ramp (what you change)\n💡 Remember: You should only have ONE IV in an experiment!',
      question: 'In the experiment "Does plant growth depend on sunlight?", what is the Independent Variable?',
      options: [
        { text: 'The sunlight', correct: true, feedback: '⭐ Correct! You\'re changing the amount of sunlight!' },
        { text: 'The plant growth', correct: false, feedback: 'That\'s what you MEASURE (Dependent Variable)!' },
        { text: 'The type of soil', correct: false, feedback: 'That could be a Controlled Variable, but not the IV!' },
        { text: 'The water', correct: false, feedback: 'You should keep water the same (Controlled Variable)!' }
      ],
      stars: 1,
      badgeReward: 'Change Master'
    },
    {
      id: 'dv',
      title: 'Dependent Variable (DV)',
      description: 'Learn what you MEASURE in your experiment!',
      lesson: 'The Dependent Variable is what you MEASURE or OBSERVE. It\'s what you think will CHANGE because of your IV. The DV "depends on" the IV!',
      example: '📊 If your RQ is "Does height of ramp affect car speed?" then the DV = the SPEED of the car (what you measure)\n💡 You measure the outcome of your experiment!',
      question: 'A student does this experiment: "Does the type of music affect homework concentration?" What is the Dependent Variable?',
      options: [
        { text: 'The type of music', correct: false, feedback: 'That\'s the Independent Variable (what changes)!' },
        { text: 'Student concentration level', correct: true, feedback: '⭐ Correct! You\'re measuring how concentrated students are!' },
        { text: 'The time of day', correct: false, feedback: 'That\'s a Controlled Variable!' },
        { text: 'The homework difficulty', correct: false, feedback: 'That should stay the same (Controlled Variable)!' }
      ],
      stars: 1,
      badgeReward: 'Measurement Master'
    },
    {
      id: 'cv',
      title: 'Controlled Variables (CV)',
      description: 'Master the variables you keep the SAME!',
      lesson: 'Controlled Variables are factors you keep EXACTLY THE SAME during your experiment. If you don\'t control them, you won\'t know if changes are from your IV or something else!',
      example: '🔒 For "Does ramp height affect car speed?" CVs might be:\n• The same car every time\n• The same ramp material\n• Same starting position\n• Same floor surface\n💡 Keep everything else constant so you know it\'s your IV causing changes!',
      question: 'In an experiment testing "Does sugar affect how fast ice melts?", which should be a Controlled Variable?',
      options: [
        { text: 'The amount of sugar', correct: false, feedback: 'That\'s the Independent Variable!' },
        { text: 'How fast the ice melts', correct: false, feedback: 'That\'s the Dependent Variable!' },
        { text: 'The temperature of the room', correct: true, feedback: '⭐ Correct! You must keep room temperature the same!' },
        { text: 'The type of experiment', correct: false, feedback: 'That\'s not specific enough!' }
      ],
      stars: 1,
      badgeReward: 'Control Expert'
    },
    {
      id: 'hypothesis',
      title: 'Hypothesis',
      description: 'Write a prediction based on science!',
      lesson: 'A Hypothesis is an educated guess or prediction about what will happen in your experiment. It should be based on what you already know (prior knowledge) and be testable!',
      example: '🎯 Good Hypothesis: "If I increase the height of the ramp, then the toy car will roll faster, because gravity will pull it down with more force."\n📝 Format: IF [IV], THEN [DV], BECAUSE [reason]',
      question: 'Which is a good Hypothesis for "Does the thickness of a blanket affect how warm it keeps you?"',
      options: [
        { text: 'Blankets are nice.', correct: false, feedback: 'This is too vague and not testable!' },
        { text: 'If I use a thicker blanket, then I will feel warmer, because thicker materials trap more air and heat.', correct: true, feedback: '⭐ Perfect! It has IF-THEN-BECAUSE structure!' },
        { text: 'I think things will happen.', correct: false, feedback: 'This is not specific or scientific!' },
        { text: 'Warmth is important.', correct: false, feedback: 'This is an opinion, not a testable hypothesis!' }
      ],
      stars: 2,
      badgeReward: 'Hypothesis Hero'
    },
    {
      id: 'methodology',
      title: 'Methodology (Experimental Design)',
      description: 'Learn to plan your experiment step-by-step!',
      lesson: 'Your Methodology is the step-by-step plan for your experiment. It should be so clear that someone else could repeat your experiment exactly the way you did it!',
      example: '📋 A good methodology:\n1. Gather all materials\n2. Set up the experiment\n3. Change the IV in a specific way\n4. Measure/observe the DV\n5. Record data\n6. Repeat multiple times\n💡 Use specific measurements and clear language!',
      question: 'What should a good experimental methodology include?',
      options: [
        { text: 'Only the results', correct: false, feedback: 'You need to explain HOW you did the experiment too!' },
        { text: 'Step-by-step instructions that are clear enough for someone to repeat', correct: true, feedback: '⭐ Correct! Reproducibility is key!' },
        { text: 'Just the materials list', correct: false, feedback: 'You need the steps too!' },
        { text: 'Random order of steps', correct: false, feedback: 'Steps should be in logical order!' }
      ],
      stars: 2,
      badgeReward: 'Procedure Pro'
    },
    {
      id: 'materials',
      title: 'Selection of Materials',
      description: 'Choose the right tools for your experiment!',
      lesson: 'Choosing the right materials is super important! You need materials that will actually measure what you want to test, and they should be safe and easy to use.',
      example: '🧪 For "Does ramp height affect car speed?":\n✅ Good choices: Toy car, wooden ramp, measuring tape, stopwatch\n❌ Bad choices: A feather (won\'t work like a car), giant boulder (not practical)\n💡 Materials should be appropriate for your variables!',
      question: 'You\'re testing "Does plant growth depend on sunlight?" What materials would you need?',
      options: [
        { text: 'Seeds, soil, pots, light source, ruler, and water', correct: true, feedback: '⭐ Correct! These let you measure plant growth and control sunlight!' },
        { text: 'Just a plant and a window', correct: false, feedback: 'You need measurement tools and proper setup!' },
        { text: 'A thermometer and a microscope', correct: false, feedback: 'These don\'t help measure plant growth!' },
        { text: 'A camera and a computer', correct: false, feedback: 'You need actual experiment materials!' }
      ],
      stars: 1,
      badgeReward: 'Material Master'
    },
    {
      id: 'safety',
      title: 'Laboratory Safety',
      description: 'Stay safe while doing science!',
      lesson: 'Safety is the #1 rule in science! Always wear protective equipment, follow procedures, know what to do in emergencies, and never mix unknown substances.',
      example: '🦺 Safety essentials:\n✅ Wear safety goggles in the lab\n✅ Tie back long hair\n✅ Wear a lab coat if needed\n✅ Know where the first aid kit is\n✅ Never taste, touch, or smell chemicals\n✅ Ask for help if unsure\n❌ Never run in the lab\n❌ Never eat or drink in the lab\n❌ Never mix chemicals randomly',
      question: 'Why is safety important in science experiments?',
      options: [
        { text: 'It\'s not really important', correct: false, feedback: 'Safety is ALWAYS important! Your health comes first!' },
        { text: 'So you don\'t hurt yourself and can focus on good science', correct: true, feedback: '⭐ Correct! Safe scientists are happy scientists!' },
        { text: 'Just for fun', correct: false, feedback: 'Safety is serious!' },
        { text: 'Only when doing dangerous experiments', correct: false, feedback: 'Safety matters in ALL science work!' }
      ],
      stars: 2,
      badgeReward: 'Safety Star'
    }
  ];

  const badges = [
    { id: 'question-master', name: 'Question Master', emoji: '🎯' },
    { id: 'change-master', name: 'Change Master', emoji: '🔧' },
    { id: 'measurement-master', name: 'Measurement Master', emoji: '📊' },
    { id: 'control-expert', name: 'Control Expert', emoji: '🔒' },
    { id: 'hypothesis-hero', name: 'Hypothesis Hero', emoji: '💡' },
    { id: 'procedure-pro', name: 'Procedure Pro', emoji: '📋' },
    { id: 'material-master', name: 'Material Master', emoji: '🧪' },
    { id: 'safety-star', name: 'Safety Star', emoji: '🦺' }
  ];

  // Function to create and download text file
  const handleDownloadResponses = () => {
    let content = `🔬 SCIENCE METHODOLOGY GAME - STUDENT RESPONSES\n`;
    content += `==========================================\n`;
    content += `Student Name: ${playerName}\n`;
    content += `Total Stars Earned: ${totalStars}⭐\n`;
    content += `Badges Earned: ${earnedBadges.length}\n`;
    content += `Date: ${new Date().toLocaleDateString()}\n\n`;

    content += `DETAILED RESPONSES:\n`;
    content += `==========================================\n\n`;

    modules.forEach((module) => {
      const response = playerResponses[module.id];
      if (response) {
        content += `📚 ${module.title}\n`;
        content += `Question: ${response.question}\n`;
        content += `Student Answer: ${response.selectedAnswer}\n`;
        content += `Correct: ${response.correct ? '✅ YES' : '❌ NO'}\n`;
        content += `Feedback: ${response.feedback}\n`;
        content += `---\n\n`;
      }
    });

    content += `BADGES EARNED:\n`;
    content += `==========================================\n`;
    earnedBadges.forEach((badge) => {
      const badgeObj = badges.find((b) => b.name === badge);
      content += `${badgeObj.emoji} ${badge}\n`;
    });

    // Create blob and download
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${playerName}_Science_Game_Responses.txt`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleStartGame = () => {
    if (playerName.trim()) {
      setGameState('game');
    }
  };

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleAnswer = (option) => {
    const correct = option.correct;
    setIsCorrect(correct);
    setShowFeedback(true);

    // Store response
    const moduleId = modules[currentModuleIndex].id;
    setPlayerResponses({
      ...playerResponses,
      [moduleId]: {
        question: modules[currentModuleIndex].question,
        selectedAnswer: option.text,
        correct: correct,
        feedback: option.feedback
      }
    });

    if (correct) {
      const starsEarned = modules[currentModuleIndex].stars;
      setTotalStars(totalStars + starsEarned);

      // Check if badge should be earned
      const badgeName = modules[currentModuleIndex].badgeReward;
      if (!earnedBadges.includes(badgeName)) {
        setEarnedBadges([...earnedBadges, badgeName]);
      }
    }
  };

  const handleNextModule = () => {
    if (currentModuleIndex < modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentAnswer('');
      setShowFeedback(false);
      setIsCorrect(false);
    } else {
      setGameState('results');
    }
  };

  const handleRestart = () => {
    setGameState('intro');
    setPlayerName('');
    setCurrentModuleIndex(0);
    setTotalStars(0);
    setEarnedBadges([]);
    setPlayerResponses({});
    setCurrentAnswer('');
    setShowFeedback(false);
    setIsCorrect(false);
  };

  // INTRO PAGE
  if (gameState === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
          <div className="text-6xl mb-6">🔬</div>
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            BECOME A SCIENTIST!
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Learn the secrets of the scientific method in this fun, interactive game!
          </p>
          <div className="bg-purple-50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">What You'll Learn:</h2>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-2">
                <span className="text-2xl">❓</span>
                <div>
                  <p className="font-bold">Research Questions</p>
                  <p className="text-sm text-gray-600">Ask the right questions!</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">🔧</span>
                <div>
                  <p className="font-bold">Independent Variable</p>
                  <p className="text-sm text-gray-600">What you change</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-bold">Dependent Variable</p>
                  <p className="text-sm text-gray-600">What you measure</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">🔒</span>
                <div>
                  <p className="font-bold">Controlled Variables</p>
                  <p className="text-sm text-gray-600">Keep same</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="font-bold">Hypothesis</p>
                  <p className="text-sm text-gray-600">Make predictions</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">📋</span>
                <div>
                  <p className="font-bold">Methodology</p>
                  <p className="text-sm text-gray-600">Plan your work</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">🧪</span>
                <div>
                  <p className="font-bold">Materials</p>
                  <p className="text-sm text-gray-600">Choose wisely</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">🦺</span>
                <div>
                  <p className="font-bold">Safety</p>
                  <p className="text-sm text-gray-600">Stay protected</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            ⭐ Earn stars for correct answers | 🏅 Unlock badges as you learn!
          </p>
          <button
            onClick={() => setGameState('playerName')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition transform hover:scale-105"
          >
            <Play className="inline mr-2" size={24} />
            START GAME
          </button>
        </div>
      </div>
    );
  }

  // PLAYER NAME PAGE
  if (gameState === 'playerName') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-6">👤</div>
          <h1 className="text-3xl font-bold text-purple-600 mb-6">
            What's Your Name, Scientist?
          </h1>
          <input
            type="text"
            value={playerName}
            onChange={handleNameChange}
            placeholder="Enter your name..."
            className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg text-lg mb-6 focus:outline-none focus:border-purple-500"
            onKeyPress={(e) => e.key === 'Enter' && handleStartGame()}
          />
          <button
            onClick={handleStartGame}
            disabled={!playerName.trim()}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-300 text-white font-bold py-3 px-6 rounded-lg text-lg transition transform hover:scale-105 disabled:cursor-not-allowed"
          >
            Begin Adventure! 🚀
          </button>
        </div>
      </div>
    );
  }

  // GAME PAGE
  if (gameState === 'game') {
    const currentModule = modules[currentModuleIndex];
    const progress = ((currentModuleIndex + 1) / modules.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-white rounded-xl shadow-lg p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="text-3xl">👤</div>
              <div>
                <p className="text-sm text-gray-600">Scientist:</p>
                <p className="text-xl font-bold text-purple-600">{playerName}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 flex items-center gap-1">
                  <Star size={24} /> {totalStars}
                </div>
                <p className="text-xs text-gray-600">Stars</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {earnedBadges.length}
                </div>
                <p className="text-xs text-gray-600">Badges</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-white rounded-lg shadow p-2">
            <div className="flex justify-between mb-2">
              <p className="text-sm font-bold text-gray-700">
                Module {currentModuleIndex + 1} of {modules.length}
              </p>
              <p className="text-sm font-bold text-gray-700">{Math.round(progress)}%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {/* Module Header */}
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">{currentModule.id === 'rq' ? '❓' : currentModule.id === 'iv' ? '🔧' : currentModule.id === 'dv' ? '📊' : currentModule.id === 'cv' ? '🔒' : currentModule.id === 'hypothesis' ? '💡' : currentModule.id === 'methodology' ? '📋' : currentModule.id === 'materials' ? '🧪' : '🦺'}</div>
              <h2 className="text-3xl font-bold text-purple-600 mb-2">
                {currentModule.title}
              </h2>
              <p className="text-gray-600">{currentModule.description}</p>
            </div>

            {/* Lesson Content */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-purple-600 mb-3">📚 Lesson:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">{currentModule.lesson}</p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                <p className="text-gray-800 whitespace-pre-line font-mono text-sm">
                  {currentModule.example}
                </p>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                ❓ {currentModule.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentModule.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    disabled={showFeedback}
                    className={`w-full p-4 rounded-lg text-left font-semibold transition transform hover:scale-102 ${
                      showFeedback
                        ? option.correct
                          ? 'bg-green-200 border-2 border-green-500 text-green-900'
                          : playerResponses[currentModule.id]?.selectedAnswer === option.text
                          ? 'bg-red-200 border-2 border-red-500 text-red-900'
                          : 'bg-gray-100 border-2 border-gray-300 text-gray-700'
                        : 'bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 hover:border-blue-500 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        {showFeedback ? (
                          option.correct ? (
                            <CheckCircle size={20} className="text-green-600" />
                          ) : playerResponses[currentModule.id]?.selectedAnswer === option.text ? (
                            <AlertCircle size={20} className="text-red-600" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-gray-400" />
                          )
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-blue-400" />
                        )}
                      </div>
                      <span>{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div
                className={`rounded-lg p-4 mb-6 font-semibold text-lg ${
                  isCorrect
                    ? 'bg-green-100 text-green-800 border-2 border-green-500'
                    : 'bg-red-100 text-red-800 border-2 border-red-500'
                }`}
              >
                {isCorrect ? '✅' : '❌'} {modules[currentModuleIndex].options.find((o) => showFeedback && (isCorrect ? o.correct : playerResponses[currentModule.id]?.selectedAnswer === o.text))?.feedback}
              </div>
            )}

            {/* Next Button */}
            {showFeedback && (
              <button
                onClick={handleNextModule}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition transform hover:scale-105"
              >
                {currentModuleIndex < modules.length - 1 ? 'Next Module →' : 'See Results! 🎉'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // RESULTS PAGE
  if (gameState === 'results') {
    const earnedBadgeObjects = earnedBadges.map((name) =>
      badges.find((b) => b.name === name)
    );
    const maxPossibleStars = modules.reduce((sum, m) => sum + m.stars, 0);
    const percentage = Math.round((totalStars / maxPossibleStars) * 100);

    let resultMessage = '';
    if (percentage === 100) {
      resultMessage = '🏆 LEGENDARY SCIENTIST! You got everything perfect!';
    } else if (percentage >= 85) {
      resultMessage = '⭐ EXCELLENT SCIENTIST! You really know your stuff!';
    } else if (percentage >= 70) {
      resultMessage = '👍 GREAT SCIENTIST! You\'re well on your way!';
    } else if (percentage >= 50) {
      resultMessage = '📚 GOOD START! Keep learning and practicing!';
    } else {
      resultMessage = '💪 KEEP TRYING! Every scientist starts somewhere!';
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          {/* Celebration */}
          <div className="text-center mb-8">
            <div className="text-7xl mb-4 animate-bounce">🎉</div>
            <h1 className="text-4xl font-bold text-purple-600 mb-4">
              Game Complete!
            </h1>
            <p className="text-2xl font-bold text-gray-800 mb-6">{playerName}</p>
          </div>

          {/* Score */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 mb-6 text-center">
            <p className="text-gray-700 mb-3">Final Score:</p>
            <div className="text-5xl font-bold text-purple-600 mb-3">
              {totalStars} / {maxPossibleStars} ⭐
            </div>
            <p className="text-2xl font-bold text-pink-600 mb-3">{percentage}%</p>
            <p className="text-lg font-semibold text-gray-800">{resultMessage}</p>
          </div>

          {/* Badges */}
          {earnedBadges.length > 0 && (
            <div className="bg-yellow-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-yellow-700 mb-4 text-center">
                🏅 Badges Earned ({earnedBadges.length})
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {earnedBadgeObjects.map((badge, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 text-center border-2 border-yellow-300">
                    <div className="text-4xl mb-2">{badge.emoji}</div>
                    <p className="font-bold text-gray-800">{badge.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleDownloadResponses}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download size={24} />
              Download My Responses (.txt)
            </button>
            <button
              onClick={handleRestart}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition transform hover:scale-105"
            >
              Play Again 🔄
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            Keep practicing these concepts - you're on your way to becoming a real scientist! 🔬
          </p>
        </div>
      </div>
    );
  }
};

export default ScienceMethodologyGame;
