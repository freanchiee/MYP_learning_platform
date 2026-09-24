import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, Trophy, Lightbulb, RotateCcw, Star } from 'lucide-react';

const EcosystemLearningGame = () => {
  const [currentScreen, setCurrentScreen] = useState('learning');
  const [expandedCard, setExpandedCard] = useState(null);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [placedItems, setPlacedItems] = useState({
    producers: [],
    consumers: [],
    decomposers: []
  });
  const [draggedItem, setDraggedItem] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [feedback, setFeedback] = useState('');

  const learningData = {
    producers: {
      emoji: '🌱',
      title: 'Producers',
      subtitle: 'The Food Makers!',
      description: 'Living things that make their own food using sunlight, water, and air.',
      details: {
        'sunlight': 'Plants use sunlight as energy to make food through photosynthesis',
        'photosynthesis': 'The process where plants turn sunlight, water, and carbon dioxide into food',
        'chlorophyll': 'The green substance in plants that captures sunlight',
        'oxygen': 'Plants release oxygen as a bonus when they make food!'
      },
      examples: ['Trees 🌳', 'Grass 🌿', 'Flowers 🌺', 'Algae 🌊']
    },
    consumers: {
      emoji: '🐰',
      title: 'Consumers',
      subtitle: 'The Food Eaters!',
      description: 'Living things that eat other living things because they cannot make their own food.',
      details: {
        'herbivores': 'Plant-eating animals like rabbits, deer, and cows',
        'carnivores': 'Meat-eating animals like lions, sharks, and eagles',
        'omnivores': 'Animals that eat both plants and meat, like humans and bears',
        'energy': 'Consumers get energy by eating producers or other consumers'
      },
      examples: ['Rabbits 🐰', 'Lions 🦁', 'Birds 🐦', 'Fish 🐟']
    },
    decomposers: {
      emoji: '🍄',
      title: 'Decomposers',
      subtitle: 'The Recyclers!',
      description: 'Living things that break down dead plants and animals, returning nutrients to the soil.',
      details: {
        'nutrients': 'Important chemicals that help plants grow, released when things decompose',
        'recycling': 'Decomposers recycle nutrients back into the soil for plants to use again',
        'bacteria': 'Tiny living things that help break down dead matter',
        'ecosystem': 'Without decomposers, dead things would pile up and plants would run out of nutrients'
      },
      examples: ['Mushrooms 🍄', 'Bacteria 🦠', 'Earthworms 🪱', 'Fungi 🍄‍🟫']
    }
  };

  const quizItems = [
    { id: 1, text: 'Makes food using sunlight', emoji: '☀️🌱', category: 'producers', hint: 'Think about who can make their own food!' },
    { id: 2, text: 'Eats plants for energy', emoji: '🐰🌿', category: 'consumers', hint: 'This describes something that eats plants.' },
    { id: 3, text: 'Breaks down dead leaves', emoji: '🍄🍂', category: 'decomposers', hint: 'Who cleans up the forest floor?' },
    { id: 4, text: 'Green plants in garden', emoji: '🌺🌻', category: 'producers', hint: 'Green plants can make their own food!' },
    { id: 5, text: 'Lion hunting zebra', emoji: '🦁🦓', category: 'consumers', hint: 'Lions need to eat other animals for energy.' },
    { id: 6, text: 'Mushroom on tree bark', emoji: '🍄🌳', category: 'decomposers', hint: 'Mushrooms help break things down.' },
    { id: 7, text: 'Fish swimming and eating', emoji: '🐟🌊', category: 'consumers', hint: 'Fish eat other things for food.' },
    { id: 8, text: 'Bacteria in soil', emoji: '🦠🌱', category: 'decomposers', hint: 'Bacteria help recycle nutrients in soil.' },
    { id: 9, text: 'Tree growing tall', emoji: '🌳☀️', category: 'producers', hint: 'Trees make their own food from sunlight!' },
    { id: 10, text: 'Worm eating dead plants', emoji: '🪱🍂', category: 'decomposers', hint: 'Worms help break down dead matter.' }
  ];

  const handleCardClick = (cardType) => {
    setExpandedCard(expandedCard === cardType ? null : cardType);
  };

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, category) => {
    e.preventDefault();
    const itemData = e.dataTransfer.getData('text/plain');
    if (!itemData) return;
    
    const item = JSON.parse(itemData);
    const isCorrect = item.category === category;
    setAttempts(attempts + 1);
    
    // Remove item from its previous location if it was already placed
    setPlacedItems(prev => {
      const newPlaced = { ...prev };
      Object.keys(newPlaced).forEach(key => {
        newPlaced[key] = newPlaced[key].filter(placedItem => placedItem.id !== item.id);
      });
      return newPlaced;
    });

    // Add item to new location with correct/incorrect status
    setPlacedItems(prev => ({
      ...prev,
      [category]: [...prev[category], { ...item, isCorrect, placedAt: Date.now() }]
    }));
    
    if (isCorrect) {
      setScore(score + 10);
      setFeedback(`🎉 Correct! +10 points`);
    } else {
      setScore(Math.max(0, score - 2));
      setFeedback(`❌ Wrong category! Try again. -2 points`);
    }
    
    // Check if all items are correctly placed
    setTimeout(() => {
      const allItems = Object.values(placedItems).flat();
      const correctItems = allItems.filter(item => item.isCorrect);
      if (correctItems.length === quizItems.length) {
        setGameComplete(true);
        setFeedback(`🏆 Congratulations! You completed the game with ${score + (isCorrect ? 10 : 0)} points!`);
      }
    }, 100);

    setTimeout(() => setFeedback(''), 3000);
  };

  const resetGame = () => {
    setScore(0);
    setAttempts(0);
    setPlacedItems({ producers: [], consumers: [], decomposers: [] });
    setGameComplete(false);
    setFeedback('');
    setShowHint(false);
  };

  const getAvailableItems = () => {
    const placedIds = Object.values(placedItems).flat().map(item => item.id);
    return quizItems.filter(item => !placedIds.includes(item.id));
  };

  const getAllPlacedItems = () => {
    return Object.values(placedItems).flat();
  };

  if (currentScreen === 'learning') {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">🌍 Ecosystem Explorers! 🌍</h1>
          <p className="text-lg text-gray-700">Learn about the amazing roles in nature!</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex gap-2 max-w-4xl">
            {Object.entries(learningData).map(([key, data], index) => (
              <div 
                key={key}
                className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex-shrink-0 w-72 ${
                  expandedCard === key ? 'ring-4 ring-blue-300 z-20' : 'z-10'
                }`}
                style={{
                  marginLeft: index > 0 ? '-60px' : '0',
                  zIndex: expandedCard === key ? 20 : 10 - index
                }}
                onClick={() => handleCardClick(key)}
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2 animate-bounce">{data.emoji}</div>
                  <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
                  <p className="text-green-600 font-medium">{data.subtitle}</p>
                </div>
                
                <p className="text-gray-600 text-center mb-4">{data.description}</p>
                
                <div className="flex justify-center">
                  {expandedCard === key ? <ChevronDown className="text-blue-500" /> : <ChevronRight className="text-blue-500" />}
                </div>

                {expandedCard === key && (
                  <div className="mt-6 space-y-4 animate-fadeIn">
                    <h3 className="font-bold text-gray-800 text-center">🔍 Learn More:</h3>
                    {Object.entries(data.details).map(([term, explanation]) => (
                      <div key={term} className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
                        <span className="font-semibold text-blue-800 capitalize">{term}:</span>
                        <p className="text-gray-700 mt-1">{explanation}</p>
                      </div>
                    ))}
                    
                    <div className="bg-yellow-50 rounded-lg p-3 border-l-4 border-yellow-400">
                      <span className="font-semibold text-yellow-800">Examples:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {data.examples.map((example, idx) => (
                          <span key={idx} className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => setCurrentScreen('quiz')}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            🎮 Ready for the Challenge! 🎮
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={() => setCurrentScreen('learning')}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Learning
        </button>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-lg">
            <Trophy className="text-yellow-600" size={20} />
            <span className="font-bold text-yellow-800">Score: {score}</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
            <Star className="text-blue-600" size={20} />
            <span className="font-bold text-blue-800">Attempts: {attempts}</span>
          </div>
          <button 
            onClick={() => setShowHint(!showHint)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
          >
            <Lightbulb size={16} />
            Hints
          </button>
          <button 
            onClick={resetGame}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>

      {feedback && (
        <div className="text-center mb-4 p-3 bg-white rounded-lg shadow-lg border-l-4 border-green-400">
          <p className="text-lg font-bold">{feedback}</p>
        </div>
      )}

      <div className="flex gap-6">
        {/* Available Items */}
        <div className="w-80 flex-shrink-0">
          <h2 className="text-xl font-bold mb-4 text-center bg-white rounded-lg p-3 shadow">
            🎯 Drag These Items:
          </h2>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {getAvailableItems().map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                className="bg-white p-3 rounded-lg shadow-lg cursor-move hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-dashed border-gray-300 hover:border-blue-400"
              >
                <div className="text-xl text-center mb-1">{item.emoji}</div>
                <p className="text-xs text-center font-medium">{item.text}</p>
                {showHint && (
                  <p className="text-xs text-orange-600 text-center mt-1 italic">
                    💡 {item.hint}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Drop Zones */}
        <div className="flex gap-4 flex-1">
          {Object.entries(learningData).map(([key, data]) => (
            <div 
              key={key}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDrop={(e) => handleDrop(e, key)}
              className="bg-white rounded-xl p-4 shadow-lg flex-1 border-4 border-dashed border-gray-300 hover:border-blue-400 transition-colors min-h-96"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{data.emoji}</div>
                <h3 className="text-lg font-bold text-gray-800">{data.title}</h3>
                <p className="text-xs text-gray-600">{data.subtitle}</p>
              </div>

              <div className="space-y-2">
                {placedItems[key].map((item) => (
                  <div 
                    key={`${item.id}-${item.placedAt}`} 
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                    className={`p-2 rounded-lg border-2 cursor-move transition-all duration-300 ${
                      item.isCorrect 
                        ? 'bg-green-100 border-green-400 text-green-800' 
                        : 'bg-red-100 border-red-400 text-red-800 hover:shadow-lg'
                    }`}
                  >
                    <div className="text-lg text-center mb-1">{item.emoji}</div>
                    <p className="text-xs text-center font-medium">{item.text}</p>
                    <div className="text-center text-xs font-bold mt-1">
                      {item.isCorrect ? '✓ Correct!' : '✗ Wrong - Drag to correct spot!'}
                    </div>
                  </div>
                ))}
              </div>

              {placedItems[key].length === 0 && (
                <div className="text-center text-gray-400 mt-8">
                  <p className="text-sm">Drop {data.title.toLowerCase()} here!</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {gameComplete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 text-center max-w-md mx-4 animate-pulse">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">Congratulations!</h2>
            <p className="text-lg mb-4">You're an Ecosystem Expert!</p>
            <p className="text-md text-gray-600 mb-6">Final Score: {score} points in {attempts} attempts</p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={resetGame}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                🎮 Play Again
              </button>
              <button 
                onClick={() => setCurrentScreen('learning')}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                📚 Review Lessons
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default EcosystemLearningGame;