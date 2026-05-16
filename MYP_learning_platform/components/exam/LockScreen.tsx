'use client'
import { useState } from 'react'
import { useExamStore } from '@/store/examStore'

const CRITERION_META: Record<string, { bg: string; label: string }> = {
  A: { bg: '#0079a8', label: 'Knowing & Understanding' },
  B: { bg: '#3daa35', label: 'Inquiring & Designing' },
  C: { bg: '#f5a623', label: 'Processing & Evaluating' },
  D: { bg: '#7b2d8b', label: 'Reflecting' },
}

export default function LockScreen() {
  const questions = useExamStore((s) => s.questions)
  const candidate = useExamStore((s) => s.candidate)
  const setCandidate = useExamStore((s) => s.setCandidate)
  const setPhase = useExamStore((s) => s.setPhase)
  const addStrike = useExamStore((s) => s.addStrike)

  const [nameErr, setNameErr] = useState(false)
  const [schoolErr, setSchoolErr] = useState(false)

  const handleBegin = () => {
    let valid = true
    if (!candidate.name.trim()) {
      setNameErr(true)
      valid = false
    } else {
      setNameErr(false)
    }
    if (!candidate.school.trim()) {
      setSchoolErr(true)
      valid = false
    } else {
      setSchoolErr(false)
    }
    if (!valid) return

    // Start the exam
    setPhase('active')

    // Attach focus detection now that exam is active
    const handleHidden = () => {
      if (document.hidden) addStrike()
    }
    document.addEventListener('visibilitychange', handleHidden)
  }

  const totalMarks = questions.reduce((s, q) => s + q.marks, 0)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCandidate({ name: e.target.value })
    if (e.target.value.trim()) setNameErr(false)
  }

  const handleSchoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCandidate({ school: e.target.value })
    if (e.target.value.trim()) setSchoolErr(false)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{ background: 'linear-gradient(135deg, #001e30 0%, #003b5c 100%)' }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
            style={{ background: '#0079a8' }}
          >
            MYP
          </div>
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl font-bold text-[#003b5c] mb-1">
          IB MYP Sciences
        </h1>
        <p className="text-center font-semibold mb-6" style={{ color: '#0079a8' }}>
          Physics — November 2023
        </p>

        {/* Paper info grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { label: 'Subject', value: 'Physics' },
            { label: 'Total Marks', value: String(totalMarks) },
            { label: 'Duration', value: '90 min' },
            { label: 'Questions', value: String(questions.length) },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center"
            >
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{label}</div>
              <div className="text-lg font-bold text-[#003b5c]">{value}</div>
            </div>
          ))}
        </div>

        {/* Criterion pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {(['A', 'B', 'C', 'D'] as const).map((crit) => (
            <span
              key={crit}
              className="text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5"
              style={{ background: CRITERION_META[crit].bg }}
            >
              <span className="font-bold">Crit {crit}</span>
              <span className="opacity-80">· {CRITERION_META[crit].label}</span>
            </span>
          ))}
        </div>

        {/* Warning box */}
        <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6 flex gap-3">
          <span className="text-amber-500 text-lg flex-shrink-0">⚠️</span>
          <p className="text-sm text-amber-800">
            <strong>This exam has focus detection.</strong> Leaving the window 3&nbsp;times will
            auto-submit your exam.
          </p>
        </div>

        {/* Candidate fields */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Candidate Name
            </label>
            <input
              type="text"
              value={candidate.name}
              onChange={handleNameChange}
              placeholder="Enter your full name"
              className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0079a8] transition ${
                nameErr ? 'border-red-400 bg-red-50' : 'border-gray-300'
              }`}
            />
            {nameErr && <p className="text-xs text-red-500 mt-1">Please enter your name.</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">School</label>
            <input
              type="text"
              value={candidate.school}
              onChange={handleSchoolChange}
              placeholder="Enter your school name"
              className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0079a8] transition ${
                schoolErr ? 'border-red-400 bg-red-50' : 'border-gray-300'
              }`}
            />
            {schoolErr && <p className="text-xs text-red-500 mt-1">Please enter your school.</p>}
          </div>
        </div>

        {/* Begin button */}
        <button
          onClick={handleBegin}
          className="w-full py-3 rounded-xl text-white font-bold text-lg transition hover:opacity-90 active:scale-95"
          style={{ background: 'linear-gradient(90deg, #003b5c, #0079a8)' }}
        >
          Begin Examination →
        </button>

        <p className="text-center text-xs text-gray-400 mt-4">
          By starting, you agree to IB academic integrity policies.
        </p>
      </div>
    </div>
  )
}
