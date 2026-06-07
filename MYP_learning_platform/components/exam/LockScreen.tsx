'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useExamStore } from '@/store/examStore'

const CRITERION_META: Record<string, { bg: string; label: string }> = {
  A: { bg: '#1f3674', label: 'Knowing & Understanding' },
  B: { bg: '#547ca4', label: 'Inquiring & Designing' },
  C: { bg: '#c3282d', label: 'Processing & Evaluating' },
  D: { bg: '#274e68', label: 'Reflecting' },
}

export default function LockScreen() {
  const questions    = useExamStore((s) => s.questions)
  const candidate    = useExamStore((s) => s.candidate)
  const setCandidate = useExamStore((s) => s.setCandidate)
  const setPhase     = useExamStore((s) => s.setPhase)
  const addStrike    = useExamStore((s) => s.addStrike)

  const [nameErr,   setNameErr]   = useState(false)
  const [schoolErr, setSchoolErr] = useState(false)

  const handleBegin = () => {
    let valid = true
    if (!candidate.name.trim())   { setNameErr(true);   valid = false } else setNameErr(false)
    if (!candidate.school.trim()) { setSchoolErr(true); valid = false } else setSchoolErr(false)
    if (!valid) return

    setPhase('active')
    const handleHidden = () => { if (document.hidden) addStrike() }
    document.addEventListener('visibilitychange', handleHidden)
  }

  const totalMarks = questions.reduce((s, q) => s + q.marks, 0)

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 relative overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #274e68 0%, #1f3674 55%, #0e1f45 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(173,241,196,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0,  scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
        style={{ background: 'rgba(245,237,204,0.97)', border: '1px solid rgba(173,241,196,0.2)' }}
      >
        {/* Top accent gradient bar */}
        <div style={{ height: 4, background: 'linear-gradient(90deg, #1f3674, #547ca4, #adf1c4)' }} />

        <div className="p-8">
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center font-extrabold text-xl shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #1f3674, #274e68)',
                border: '2px solid rgba(173,241,196,0.3)',
              }}
            >
              <span style={{ color: '#adf1c4' }}>MYP</span>
            </div>
          </div>

          <h1 className="text-center text-2xl font-extrabold mb-0.5" style={{ color: '#1f3674' }}>
            IB MYP Sciences
          </h1>
          <p className="text-center text-sm font-semibold mb-6" style={{ color: '#547ca4' }}>
            Physics Examination
          </p>

          {/* Paper info grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { label: 'Subject',     value: 'Physics' },
              { label: 'Total Marks', value: String(totalMarks) },
              { label: 'Duration',    value: '90 min' },
              { label: 'Questions',   value: String(questions.length) },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl p-3 text-center"
                style={{ background: 'rgba(31,54,116,0.06)', border: '1px solid rgba(31,54,116,0.1)' }}
              >
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#547ca4' }}>
                  {label}
                </div>
                <div className="text-lg font-extrabold" style={{ color: '#1f3674' }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Criterion pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {(['A', 'B', 'C', 'D'] as const).map((crit) => (
              <span
                key={crit}
                className="text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5"
                style={{ background: CRITERION_META[crit].bg }}
              >
                <span>Crit {crit}</span>
                <span style={{ opacity: 0.7 }}>· {CRITERION_META[crit].label}</span>
              </span>
            ))}
          </div>

          {/* Warning box */}
          <div
            className="rounded-xl p-4 mb-6 flex gap-3"
            style={{ background: 'rgba(195,40,45,0.08)', border: '1px solid rgba(195,40,45,0.22)' }}
          >
            <span className="text-lg flex-shrink-0">⚠️</span>
            <p className="text-sm" style={{ color: '#c3282d' }}>
              <strong>Focus detection is active.</strong> Leaving the window 3&nbsp;times will
              auto-submit your exam.
            </p>
          </div>

          {/* Candidate fields */}
          <div className="space-y-4 mb-6">
            {[
              {
                id: 'name', label: 'Candidate Name', placeholder: 'Enter your full name',
                value: candidate.name,
                onChange: (v: string) => { setCandidate({ name: v }); if (v.trim()) setNameErr(false) },
                err: nameErr, errMsg: 'Please enter your name.',
              },
              {
                id: 'school', label: 'School', placeholder: 'Enter your school name',
                value: candidate.school,
                onChange: (v: string) => { setCandidate({ school: v }); if (v.trim()) setSchoolErr(false) },
                err: schoolErr, errMsg: 'Please enter your school.',
              },
            ].map(({ id, label, placeholder, value, onChange, err, errMsg }) => (
              <div key={id}>
                <label className="block text-sm font-bold mb-1" style={{ color: '#1f3674' }}>{label}</label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder={placeholder}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                  style={{
                    border: `2px solid ${err ? '#c3282d' : 'rgba(31,54,116,0.2)'}`,
                    background: err ? 'rgba(195,40,45,0.04)' : '#fff',
                    color: '#1f3674',
                  }}
                />
                {err && <p className="text-xs mt-1" style={{ color: '#c3282d' }}>{errMsg}</p>}
              </div>
            ))}
          </div>

          {/* Begin button */}
          <motion.button
            onClick={handleBegin}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3.5 rounded-xl text-white font-extrabold text-base shadow-lg"
            style={{ background: 'linear-gradient(90deg, #1f3674 0%, #274e68 100%)' }}
          >
            Begin Examination →
          </motion.button>

          <p className="text-center text-xs mt-4" style={{ color: 'rgba(31,54,116,0.4)' }}>
            By starting, you agree to IB academic integrity policies.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
