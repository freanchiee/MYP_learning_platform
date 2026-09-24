import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, AlertCircle, CheckCircle, Save, Download, Lightbulb, AlertTriangle, Upload, X, Trophy, Star, Zap, Target } from 'lucide-react';

const SECTIONS = [
  { id: 1, title: 'Aim & Variables' },
  { id: 2, title: 'Background' },
  { id: 3, title: 'Methodology' },
  { id: 4, title: 'Data Collection' },
  { id: 5, title: 'Analysis' },
  { id: 6, title: 'Evaluation' }
];

export default function PhysicsIAScaffolder() {
  const [studentName, setStudentName] = useState('');
  const [started, setStarted] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  const [xp, setXp] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [streak, setStreak] = useState(0);
  const [formData, setFormData] = useState({
    aim: '', rq: '', hypothesis: '',
    ivVariable: '', ivMethod: '', ivUnit: '', ivRange: '', ivRationale: '',
    dvVariable: '', dvMethod: '', dvInstrument: '', dvUnit: '', dvPrecautions: '',
    cv1: '', cv1Unit: '', cv1Method: '', cv1Extent: '', cv1Impact: '',
    cv2: '', cv2Unit: '', cv2Method: '', cv2Extent: '', cv2Impact: '',
    cv3: '', cv3Unit: '', cv3Method: '', cv3Extent: '', cv3Impact: '',
    theory: '', formulae: '', applications: '',
    instruments: '', safety: '', procedure: '',
    rawData: '', processedData: '', graphs: '', models: '',
    modelAnalysis: '', comparison: '', theoretical: '',
    resultsEval: '', strengths: '', weaknesses: '', errors: '', conclusion: '',
    graphImages: []
  });

  useEffect(() => {
    const saved = localStorage.getItem('physicsIA');
    if (saved) {
      const data = JSON.parse(saved);
      setStudentName(data.studentName || '');
      setStarted(data.started || false);
      setXp(data.xp || 0);
      setAchievements(data.achievements || []);
      setStreak(data.streak || 0);
      setFormData({
        ...formData,
        ...data.formData,
        graphImages: data.formData?.graphImages || []
      });
    }
  }, []);

  useEffect(() => {
    if (started) {
      const timer = setTimeout(() => {
        localStorage.setItem('physicsIA', JSON.stringify({ studentName, started, formData, xp, achievements, streak }));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [studentName, started, formData, xp, achievements, streak]);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    addXP(2); // Small XP for every field update
  };

  const addXP = (amount) => {
    setXp(prev => prev + amount);
  };

  const unlockAchievement = (id, name) => {
    if (!achievements.includes(id)) {
      setAchievements(prev => [...prev, id]);
      addXP(50);
      // Could show a toast notification here
    }
  };

  const getSectionProgress = (sectionId) => {
    let totalFields = 0;
    let filledFields = 0;

    if (sectionId === 1) {
      const fields = ['aim', 'rq', 'hypothesis', 'ivVariable', 'ivMethod', 'ivUnit', 'ivRange', 'ivRationale',
        'dvVariable', 'dvMethod', 'dvInstrument', 'dvUnit', 'dvPrecautions',
        'cv1', 'cv1Unit', 'cv1Method', 'cv1Extent', 'cv1Impact',
        'cv2', 'cv2Unit', 'cv2Method', 'cv2Extent', 'cv2Impact',
        'cv3', 'cv3Unit', 'cv3Method', 'cv3Extent', 'cv3Impact'];
      totalFields = fields.length;
      filledFields = fields.filter(f => formData[f] && formData[f].trim()).length;
    } else if (sectionId === 2) {
      const fields = ['theory', 'formulae', 'applications'];
      totalFields = fields.length;
      filledFields = fields.filter(f => formData[f] && formData[f].trim()).length;
    } else if (sectionId === 3) {
      const fields = ['instruments', 'safety', 'procedure'];
      totalFields = fields.length;
      filledFields = fields.filter(f => formData[f] && formData[f].trim()).length;
    } else if (sectionId === 4) {
      const fields = ['rawData', 'processedData', 'graphs', 'models'];
      totalFields = fields.length + 1; // +1 for graph images
      filledFields = fields.filter(f => formData[f] && formData[f].trim()).length;
      if (formData.graphImages && formData.graphImages.length > 0) filledFields++;
    } else if (sectionId === 5) {
      const fields = ['modelAnalysis', 'comparison', 'theoretical'];
      totalFields = fields.length;
      filledFields = fields.filter(f => formData[f] && formData[f].trim()).length;
    } else if (sectionId === 6) {
      const fields = ['resultsEval', 'strengths', 'weaknesses', 'errors', 'conclusion'];
      totalFields = fields.length;
      filledFields = fields.filter(f => formData[f] && formData[f].trim()).length;
    }

    return Math.round((filledFields / totalFields) * 100);
  };

  const getOverallProgress = () => {
    const total = SECTIONS.reduce((sum, section) => sum + getSectionProgress(section.id), 0);
    return Math.round(total / SECTIONS.length);
  };

  useEffect(() => {
    // Check for achievements
    const progress1 = getSectionProgress(1);
    const overallProg = getOverallProgress();
    
    if (progress1 === 100 && !achievements.includes('variables_master')) {
      unlockAchievement('variables_master', 'Variables Master');
    }
    if (overallProg >= 50 && !achievements.includes('halfway')) {
      unlockAchievement('halfway', 'Halfway Hero');
    }
    if (overallProg === 100 && !achievements.includes('complete')) {
      unlockAchievement('complete', 'IA Complete!');
    }
  }, [formData, achievements]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          graphImages: [...prev.graphImages, { name: file.name, data: event.target.result }]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      graphImages: prev.graphImages.filter((_, i) => i !== index)
    }));
  };

  const exportToHTML = () => {
    try {
      const overallProgress = getOverallProgress();
      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString();
      
      const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${studentName} - Physics IA</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            max-width: 900px;
            margin: 40px auto;
            padding: 20px;
            line-height: 1.8;
            color: #1a202c;
            background: #f7fafc;
        }
        h1 {
            color: #1a365d;
            border-bottom: 4px solid #00d4ff;
            padding-bottom: 15px;
            margin-bottom: 30px;
        }
        h2 {
            color: #2d3748;
            margin-top: 40px;
            margin-bottom: 20px;
            font-size: 1.8em;
        }
        h3 {
            color: #4a5568;
            margin-top: 25px;
            margin-bottom: 15px;
            font-size: 1.3em;
        }
        .section {
            margin: 40px 0;
            padding: 30px;
            background: white;
            border-left: 5px solid #00d4ff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .field {
            margin: 20px 0;
        }
        .field-label {
            font-weight: bold;
            color: #2d3748;
            margin-bottom: 8px;
            display: block;
        }
        .field-content {
            color: #4a5568;
            white-space: pre-wrap;
            padding: 10px;
            background: #f7fafc;
            border-radius: 4px;
        }
        .variable-box {
            background: #ebf8ff;
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
            border-left: 3px solid #3182ce;
        }
        .graph-image {
            max-width: 100%;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .footer {
            margin-top: 60px;
            padding-top: 30px;
            border-top: 2px solid #cbd5e0;
            color: #718096;
            font-size: 0.9em;
            text-align: center;
        }
        .progress-badge {
            display: inline-block;
            background: #48bb78;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.85em;
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <h1>${studentName}'s Physics Internal Assessment <span class="progress-badge">${overallProgress}% Complete</span></h1>
    
    <div class="section">
        <h2>📋 Section 1: Aim & Variables</h2>
        
        ${formData.aim ? `<div class="field">
            <span class="field-label">Aim:</span>
            <div class="field-content">${formData.aim}</div>
        </div>` : ''}
        
        ${formData.rq ? `<div class="field">
            <span class="field-label">Research Question:</span>
            <div class="field-content">${formData.rq}</div>
        </div>` : ''}
        
        ${formData.ivVariable ? `<div class="variable-box">
            <h3>Independent Variable (IV)</h3>
            <div class="field"><span class="field-label">Variable:</span> ${formData.ivVariable} ${formData.ivUnit ? `(${formData.ivUnit})` : ''}</div>
            ${formData.ivMethod ? `<div class="field"><span class="field-label">Method:</span> ${formData.ivMethod}</div>` : ''}
            ${formData.ivRange ? `<div class="field"><span class="field-label">Range:</span> ${formData.ivRange}</div>` : ''}
            ${formData.ivRationale ? `<div class="field"><span class="field-label">Rationale:</span> ${formData.ivRationale}</div>` : ''}
        </div>` : ''}
        
        ${formData.dvVariable ? `<div class="variable-box">
            <h3>Dependent Variable (DV)</h3>
            <div class="field"><span class="field-label">Variable:</span> ${formData.dvVariable} ${formData.dvUnit ? `(${formData.dvUnit})` : ''}</div>
            ${formData.dvMethod ? `<div class="field"><span class="field-label">Method:</span> ${formData.dvMethod}</div>` : ''}
            ${formData.dvInstrument ? `<div class="field"><span class="field-label">Instrument:</span> ${formData.dvInstrument}</div>` : ''}
        </div>` : ''}
        
        ${formData.hypothesis ? `<div class="field">
            <span class="field-label">Hypothesis:</span>
            <div class="field-content">${formData.hypothesis}</div>
        </div>` : ''}
    </div>
    
    <div class="section">
        <h2>📚 Section 2: Background</h2>
        ${formData.theory ? `<div class="field">
            <span class="field-label">Theory:</span>
            <div class="field-content">${formData.theory}</div>
        </div>` : ''}
        ${formData.formulae ? `<div class="field">
            <span class="field-label">Formulae:</span>
            <div class="field-content">${formData.formulae}</div>
        </div>` : ''}
    </div>
    
    <div class="section">
        <h2>⚗️ Section 3: Methodology</h2>
        ${formData.procedure ? `<div class="field">
            <span class="field-label">Procedure:</span>
            <div class="field-content">${formData.procedure}</div>
        </div>` : ''}
    </div>
    
    <div class="section">
        <h2>📊 Section 4: Data</h2>
        ${formData.rawData ? `<div class="field">
            <span class="field-label">Raw Data:</span>
            <div class="field-content">${formData.rawData}</div>
        </div>` : ''}
        ${formData.graphImages && formData.graphImages.length > 0 ? `
            <h3>Graphs:</h3>
            ${formData.graphImages.map(img => `<img src="${img.data}" alt="${img.name}" class="graph-image">`).join('')}
        ` : ''}
    </div>
    
    <div class="section">
        <h2>🔢 Section 5: Analysis</h2>
        ${formData.modelAnalysis ? `<div class="field">
            <div class="field-content">${formData.modelAnalysis}</div>
        </div>` : ''}
    </div>
    
    <div class="section">
        <h2>✅ Section 6: Evaluation</h2>
        ${formData.conclusion ? `<div class="field">
            <div class="field-content">${formData.conclusion}</div>
        </div>` : ''}
    </div>
    
    <div class="footer">
        <p>Generated by Physics IA Scaffolder | ${currentDate} at ${currentTime}</p>
        <p>Completion: ${overallProgress}% | XP: ${xp} | Achievements: ${achievements.length}</p>
    </div>
</body>
</html>`;

      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${studentName.replace(/\s+/g, '_')}_Physics_IA.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      addXP(100);
      alert('✅ IA exported successfully! Check your downloads folder.');
    } catch (error) {
      alert('❌ Export failed: ' + error.message);
      console.error('Export error:', error);
    }
  };

  const getIVCompleteness = () => ({
    variable: !!formData.ivVariable,
    method: !!formData.ivMethod,
    unit: !!formData.ivUnit,
    range: !!formData.ivRange,
    rationale: !!formData.ivRationale
  });

  const getDVCompleteness = () => ({
    variable: !!formData.dvVariable,
    method: !!formData.dvMethod,
    instrument: !!formData.dvInstrument,
    unit: !!formData.dvUnit,
    precautions: !!formData.dvPrecautions
  });

  const getCVCompleteness = (num) => ({
    variable: !!formData[`cv${num}`],
    unit: !!formData[`cv${num}Unit`],
    method: !!formData[`cv${num}Method`],
    extent: !!formData[`cv${num}Extent`],
    impact: !!formData[`cv${num}Impact`]
  });

  const ScaffoldCard = ({ title, items, type = 'info' }) => (
    <div className={`p-4 rounded-lg border mt-3 ${type === 'warning' ? 'bg-amber-500/10 border-amber-500/30' : 'bg-blue-500/10 border-blue-500/30'}`}>
      <div className="flex items-start gap-2 mb-2">
        {type === 'warning' ? <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" /> : <Lightbulb className="w-5 h-5 text-blue-400 mt-0.5" />}
        <h4 className="font-semibold text-sm">{title}</h4>
      </div>
      <ul className="space-y-1 ml-7">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm text-slate-300">• {item}</li>
        ))}
      </ul>
    </div>
  );

  const VarScaffold = ({ completeness, missing }) => (
    <div className="grid grid-cols-5 gap-2 p-3 bg-slate-800/50 rounded-lg mb-3">
      {Object.entries(completeness).map(([key, done]) => (
        <div key={key} className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${done ? 'bg-green-500/20' : 'bg-slate-700'}`}>
            {done ? <CheckCircle className="w-5 h-5 text-green-400" /> : <AlertCircle className="w-5 h-5 text-slate-500" />}
          </div>
          <span className="text-xs mt-1 text-slate-400 capitalize">{key}</span>
        </div>
      ))}
      {missing.length > 0 && (
        <div className="col-span-5 mt-2 pt-2 border-t border-slate-700">
          <p className="text-xs text-amber-400 mb-1">Missing:</p>
          {missing.map((m, i) => <p key={i} className="text-xs text-slate-400">• {m}</p>)}
        </div>
      )}
    </div>
  );

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-cyan-500/20 rounded-full mb-4">
              <Trophy className="w-16 h-16 text-cyan-400" />
            </div>
            <h1 className="text-5xl font-bold text-cyan-400 mb-3">Physics IA Scaffolder</h1>
            <p className="text-xl text-slate-300 mb-6">Your guided companion for writing a focused, high-quality IB Physics Internal Assessment</p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">6 Sections</h3>
                <p className="text-sm text-slate-400">Step-by-step guidance</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">Earn XP</h3>
                <p className="text-sm text-slate-400">Gamified progress</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <Star className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">Achievements</h3>
                <p className="text-sm text-slate-400">Unlock milestones</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">What's your name?</label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && studentName.trim() && setStarted(true)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter your full name..."
                autoFocus
              />
            </div>
            <button
              onClick={() => {
                if (studentName.trim()) {
                  setStarted(true);
                  addXP(10);
                  setStreak(1);
                }
              }}
              disabled={!studentName.trim()}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-cyan-500/50"
            >
              Begin Your IA Journey 🚀
            </button>
            
            <div className="pt-6 border-t border-slate-700">
              <h3 className="text-sm font-semibold text-slate-300 mb-3">What you'll get:</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Visual scaffolding for each variable (IV, DV, CV)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Smart prompts for missing components
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Upload graphs and paste data tables
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Auto-save every 2 seconds
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Export to HTML when done
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const ivComp = getIVCompleteness();
  const dvComp = getDVCompleteness();
  const ivMiss = [];
  const dvMiss = [];
  
  if (!ivComp.variable) ivMiss.push('Specify independent variable');
  if (!ivComp.method) ivMiss.push('Method of manipulation');
  if (!ivComp.unit) ivMiss.push('Unit of measurement');
  if (!ivComp.range) ivMiss.push('Range of variation');
  if (!ivComp.rationale) ivMiss.push('Rationale for range');

  if (!dvComp.variable) dvMiss.push('Specify dependent variable');
  if (!dvComp.method) dvMiss.push('Method of measurement');
  if (!dvComp.instrument) dvMiss.push('Measuring instrument');
  if (!dvComp.unit) dvMiss.push('Unit');
  if (!dvComp.precautions) dvMiss.push('Precautions/alternatives');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-cyan-400">Physics IA Scaffolder</h1>
              <p className="text-sm text-slate-400">{studentName}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg border border-yellow-500/30">
                <Zap className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="text-xs text-slate-400">Total XP</div>
                  <div className="text-lg font-bold text-yellow-400">{xp}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg border border-purple-500/30">
                <Trophy className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-xs text-slate-400">Achievements</div>
                  <div className="text-lg font-bold text-purple-400">{achievements.length}/3</div>
                </div>
              </div>
              <button 
                onClick={exportToHTML}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/50"
              >
                <Download className="w-4 h-4" />
                Export HTML
              </button>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400">Overall Progress</span>
              <span className="text-cyan-400 font-semibold">{getOverallProgress()}%</span>
            </div>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${getOverallProgress()}%` }}
              />
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {SECTIONS.map(s => {
              const progress = getSectionProgress(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSection(s.id)}
                  className={`relative px-4 py-3 rounded-lg whitespace-nowrap text-sm transition-all ${currentSection === s.id ? 'bg-cyan-500 text-white shadow-lg' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                >
                  <div className="flex items-center gap-2">
                    {progress === 100 && <CheckCircle className="w-4 h-4 text-green-400" />}
                    <span>{s.id}. {s.title}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700 rounded-b-lg overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto p-6">
        {currentSection === 1 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-cyan-400">Section 1: Aim & Variables</h2>
            
            <div>
              <label className="block text-lg font-semibold mb-2">1.1 Aim</label>
              <textarea value={formData.aim} onChange={(e) => updateField('aim', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                rows={2} placeholder="State the aim of your investigation..." />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">1.2 Research Question</label>
              <textarea value={formData.rq} onChange={(e) => updateField('rq', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                rows={3} placeholder="How does [IV] affect [DV] when [CV controlled]?" />
              <ScaffoldCard title="Strong RQ Includes:" items={[
                'Clear IV and DV', 'Mention of key CVs', 'Specific/measurable quantities', 'Appropriate scope'
              ]} />
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <h3 className="font-semibold text-cyan-400 mb-3">Independent Variable (IV)</h3>
              <VarScaffold completeness={ivComp} missing={ivMiss} />
              <div className="space-y-3">
                <input value={formData.ivVariable} onChange={(e) => updateField('ivVariable', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  placeholder="IV (e.g., Temperature)" />
                <input value={formData.ivUnit} onChange={(e) => updateField('ivUnit', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  placeholder="Unit (e.g., °C)" />
                <textarea value={formData.ivMethod} onChange={(e) => updateField('ivMethod', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  rows={2} placeholder="Method of manipulation" />
                <input value={formData.ivRange} onChange={(e) => updateField('ivRange', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  placeholder="Range (e.g., 20-80°C in 10°C steps)" />
                <textarea value={formData.ivRationale} onChange={(e) => updateField('ivRationale', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  rows={2} placeholder="Rationale for range" />
              </div>
              {formData.ivVariable && formData.ivVariable.toLowerCase().includes('qualitative') && (
                <ScaffoldCard type="warning" title="⚠️ Qualitative IV" items={[
                  'Consider measurable quantity', 'E.g., density instead of material type'
                ]} />
              )}
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <h3 className="font-semibold text-cyan-400 mb-3">Dependent Variable (DV)</h3>
              <VarScaffold completeness={dvComp} missing={dvMiss} />
              <div className="space-y-3">
                <input value={formData.dvVariable} onChange={(e) => updateField('dvVariable', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  placeholder="DV (e.g., Spring constant)" />
                <input value={formData.dvUnit} onChange={(e) => updateField('dvUnit', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  placeholder="Unit (e.g., N/m)" />
                <textarea value={formData.dvMethod} onChange={(e) => updateField('dvMethod', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  rows={2} placeholder="Method of measurement" />
                <input value={formData.dvInstrument} onChange={(e) => updateField('dvInstrument', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  placeholder="Instrument (e.g., Force meter ±0.01N)" />
                <textarea value={formData.dvPrecautions} onChange={(e) => updateField('dvPrecautions', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  rows={2} placeholder="Precautions/alternatives" />
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <h3 className="font-semibold text-cyan-400 mb-3">Control Variables (Top 3)</h3>
              {[1,2,3].map(n => {
                const cvComp = getCVCompleteness(n);
                const cvMiss = [];
                if (!cvComp.variable) cvMiss.push('Variable name');
                if (!cvComp.unit) cvMiss.push('Unit');
                if (!cvComp.method) cvMiss.push('Control method');
                if (!cvComp.extent) cvMiss.push('Extent');
                if (!cvComp.impact) cvMiss.push('Impact on DV');
                
                return (
                  <div key={n} className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">CV {n}</h4>
                    <VarScaffold completeness={cvComp} missing={cvMiss} />
                    <div className="space-y-2">
                      <input value={formData[`cv${n}`]} onChange={(e) => updateField(`cv${n}`, e.target.value)}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm"
                        placeholder={`CV ${n}`} />
                      <div className="grid grid-cols-2 gap-2">
                        <input value={formData[`cv${n}Unit`]} onChange={(e) => updateField(`cv${n}Unit`, e.target.value)}
                          className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm"
                          placeholder="Unit" />
                        <input value={formData[`cv${n}Extent`]} onChange={(e) => updateField(`cv${n}Extent`, e.target.value)}
                          className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm"
                          placeholder="Extent" />
                      </div>
                      <textarea value={formData[`cv${n}Method`]} onChange={(e) => updateField(`cv${n}Method`, e.target.value)}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm"
                        rows={2} placeholder="Control method" />
                      <textarea value={formData[`cv${n}Impact`]} onChange={(e) => updateField(`cv${n}Impact`, e.target.value)}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm"
                        rows={2} placeholder="Impact if not controlled" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">1.4 Hypothesis</label>
              <textarea value={formData.hypothesis} onChange={(e) => updateField('hypothesis', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={4} placeholder="Hypothesis with scientific justification..." />
              <ScaffoldCard title="Strong Hypothesis:" items={[
                'Clear prediction about IV-DV relationship', 'Scientific justification', 'Reference to theory', 'Expected trend'
              ]} />
            </div>
          </div>
        )}

        {currentSection === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-400">Section 2: Background</h2>
            <div>
              <label className="block text-lg font-semibold mb-2">Theory</label>
              <textarea value={formData.theory} onChange={(e) => updateField('theory', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={6} placeholder="Relevant physics theory..." />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Formulae</label>
              <textarea value={formData.formulae} onChange={(e) => updateField('formulae', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={4} placeholder="Key equations with definitions..." />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Applications</label>
              <textarea value={formData.applications} onChange={(e) => updateField('applications', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={3} placeholder="Real-world applications..." />
            </div>
          </div>
        )}

        {currentSection === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-400">Section 3: Methodology</h2>
            <div>
              <label className="block text-lg font-semibold mb-2">Instruments</label>
              <textarea value={formData.instruments} onChange={(e) => updateField('instruments', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={5} placeholder="List instruments with least count and range..." />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Safety & Precautions</label>
              <textarea value={formData.safety} onChange={(e) => updateField('safety', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={4} placeholder="Safety and environmental considerations..." />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Procedure</label>
              <textarea value={formData.procedure} onChange={(e) => updateField('procedure', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={8} placeholder="Step-by-step procedure for replication..." />
            </div>
          </div>
        )}

        {currentSection === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-400">Section 4: Data Collection</h2>
            <div>
              <label className="block text-lg font-semibold mb-2">Raw Data</label>
              <textarea value={formData.rawData} onChange={(e) => updateField('rawData', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 font-mono text-sm"
                rows={6} placeholder="Paste your data table here (Excel/CSV format works!)..." />
              <div className="mt-2 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-sm text-slate-300">💡 <strong>Tip:</strong> Copy your table from Excel/Google Sheets and paste directly here. Tab-separated values will be preserved.</p>
              </div>
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Processed Data</label>
              <textarea value={formData.processedData} onChange={(e) => updateField('processedData', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 font-mono text-sm"
                rows={6} placeholder="Paste calculated values table here..." />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Graph Images</label>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 px-4 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg cursor-pointer transition-all">
                    <Upload className="w-5 h-5" />
                    <span>Upload Graph Images</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      multiple 
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  <span className="text-sm text-slate-400">PNG, JPG, or PDF</span>
                </div>
                
                {(formData.graphImages && formData.graphImages.length > 0) && (
                  <div className="grid grid-cols-2 gap-4">
                    {formData.graphImages.map((img, idx) => (
                      <div key={idx} className="relative bg-slate-800 rounded-lg p-3 border border-slate-700">
                        <img src={img.data} alt={img.name} className="w-full h-48 object-contain rounded mb-2" />
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-400 truncate">{img.name}</span>
                          <button 
                            onClick={() => removeImage(idx)}
                            className="px-2 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded text-xs flex items-center gap-1"
                          >
                            <X className="w-3 h-3" />
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Graph Descriptions & Analysis</label>
              <textarea value={formData.graphs} onChange={(e) => updateField('graphs', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={4} placeholder="Describe your graphs: axes labels, trends, patterns observed..." />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Mathematical Models</label>
              <textarea value={formData.models} onChange={(e) => updateField('models', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={4} placeholder="Best fit equations and R² values (e.g., y = 2.4x + 0.3, R² = 0.998)..." />
            </div>
          </div>
        )}

        {currentSection === 5 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-400">Section 5: Analysis</h2>
            <div>
              <label className="block text-lg font-semibold mb-2">Model Analysis</label>
              <textarea value={formData.modelAnalysis} onChange={(e) => updateField('modelAnalysis', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={6} placeholder="Compare R² values, justify model choice..." />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Comparative Analysis</label>
              <textarea value={formData.comparison} onChange={(e) => updateField('comparison', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={5} placeholder="Graphical and mathematical analysis..." />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Theoretical Comparison</label>
              <textarea value={formData.theoretical} onChange={(e) => updateField('theoretical', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={4} placeholder="Compare with literature/expected values..." />
            </div>
          </div>
        )}

        {currentSection === 6 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-400">Section 6: Evaluation</h2>
            <div>
              <label className="block text-lg font-semibold mb-2">Results & Hypothesis</label>
              <textarea value={formData.resultsEval} onChange={(e) => updateField('resultsEval', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={4} placeholder="Evaluate results and hypothesis validity..." />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Strengths</label>
              <textarea value={formData.strengths} onChange={(e) => updateField('strengths', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={4} placeholder="Strengths of experiment..." />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Weaknesses</label>
              <textarea value={formData.weaknesses} onChange={(e) => updateField('weaknesses', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={4} placeholder="Limitations and weaknesses..." />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Error Analysis</label>
              <textarea value={formData.errors} onChange={(e) => updateField('errors', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={4} placeholder="Error evaluation..." />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Conclusion</label>
              <textarea value={formData.conclusion} onChange={(e) => updateField('conclusion', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500"
                rows={4} placeholder="Did you answer the RQ directly?" />
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8 pt-6 border-t border-slate-700">
          <button onClick={() => currentSection > 1 && setCurrentSection(prev => prev - 1)}
            disabled={currentSection === 1}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 disabled:opacity-50">
            <ChevronLeft className="w-5 h-5" /> Previous
          </button>
          <button onClick={() => currentSection < 6 && setCurrentSection(prev => prev + 1)}
            disabled={currentSection === 6}
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-600 disabled:opacity-50">
            Next <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}