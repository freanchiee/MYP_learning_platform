'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useExamStore } from '@/store/examStore'

// Criterion labels differ by subject group. Sciences use the MYP Sciences objectives;
// Individuals & Societies (humanities / geography / history) use the I&S objectives.
const CRIT_LABELS_SCI: Record<string, string> = {
  A: 'Knowing & Understanding', B: 'Inquiring & Designing', C: 'Processing & Evaluating', D: 'Reflecting',
}
const CRIT_LABELS_INS: Record<string, string> = {
  A: 'Knowing & Understanding', B: 'Investigating', C: 'Communicating', D: 'Thinking Critically',
}
const CRIT_BG: Record<string, string> = { A: 'var(--cA)', B: 'var(--cB)', C: 'var(--cC)', D: 'var(--cD)' }

// Derive subject name, group, theme colour and duration from paperId.
function subjectFromPaperId(paperId: string): {
  name: string; group: string; accent: string; gradient: string; isInS: boolean; durationMin: number
} {
  const slug = paperId.split('-')[0]
  if (slug === 'biology')   return { name: 'Biology',   group: 'Sciences', accent: '#2d7a4f', gradient: 'linear-gradient(135deg, #1a4a2e, #2d7a4f)', isInS: false, durationMin: 90 }
  if (slug === 'chemistry') return { name: 'Chemistry', group: 'Sciences', accent: '#274e68', gradient: 'linear-gradient(135deg, #0d1a2e, #274e68)', isInS: false, durationMin: 90 }
  if (slug === 'physics')   return { name: 'Physics',   group: 'Sciences', accent: '#1f3674', gradient: 'linear-gradient(135deg, #1f3674, #274e68)', isInS: false, durationMin: 90 }
  if (slug === 'geography') return { name: 'Geography', group: 'Individuals & Societies', accent: '#0b7285', gradient: 'linear-gradient(135deg, #0a3d4a, #0b7285)', isInS: true, durationMin: 120 }
  if (slug === 'history')   return { name: 'History',   group: 'Individuals & Societies', accent: '#9a6a2f', gradient: 'linear-gradient(135deg, #5a3d1a, #9a6a2f)', isInS: true, durationMin: 120 }
  if (slug === 'humanities') return { name: 'Integrated Humanities', group: 'Individuals & Societies', accent: '#0b7285', gradient: 'linear-gradient(135deg, #0a3d4a, #0b7285)', isInS: true, durationMin: 120 }
  return { name: 'Physics', group: 'Sciences', accent: '#1f3674', gradient: 'linear-gradient(135deg, #1f3674, #274e68)', isInS: false, durationMin: 90 }
}

export default function LockScreen() {
  const questions    = useExamStore((s) => s.questions)
  const paperId      = useExamStore((s) => s.paperId)
  const candidate    = useExamStore((s) => s.candidate)
  const setCandidate = useExamStore((s) => s.setCandidate)
  const setPhase     = useExamStore((s) => s.setPhase)
  const addStrike    = useExamStore((s) => s.addStrike)

  const [nameErr,   setNameErr]   = useState(false)
  const [schoolErr, setSchoolErr] = useState(false)

  const { name: subjectName, group, accent, gradient, isInS, durationMin } = subjectFromPaperId(paperId)
  const critLabels = isInS ? CRIT_LABELS_INS : CRIT_LABELS_SCI

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
      style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--accent-soft) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0,  scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
        style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}
      >
        {/* Top accent gradient bar */}
        <div style={{ height: 4, background: 'var(--gradient-brand)' }} />

        <div className="p-8">
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center font-extrabold text-xl shadow-lg"
              style={{
                background: gradient,
                border: '2px solid var(--border)',
              }}
            >
              <span style={{ color: 'var(--accent-fg)' }}>MYP</span>
            </div>
          </div>

          <h1 className="text-center text-2xl font-extrabold mb-0.5" style={{ color: 'var(--text)' }}>
            IB MYP {group}
          </h1>
          <p className="text-center text-sm font-semibold mb-6" style={{ color: accent }}>
            {subjectName} Examination
          </p>

          {/* Paper info grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { label: 'Subject',     value: subjectName },
              { label: 'Total Marks', value: String(totalMarks) },
              { label: 'Duration',    value: `${durationMin} min` },
              { label: 'Questions',   value: String(questions.length) },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl p-3 text-center"
                style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
              >
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--accent-2)' }}>
                  {label}
                </div>
                <div className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Criterion pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {(['A', 'B', 'C', 'D'] as const).map((crit) => (
              <span
                key={crit}
                className="text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5"
                style={{ background: CRIT_BG[crit], color: 'var(--criterion-fg)' }}
              >
                <span>Crit {crit}</span>
                <span style={{ opacity: 0.7 }}>· {critLabels[crit]}</span>
              </span>
            ))}
          </div>

          {/* Warning box */}
          <div
            className="rounded-xl p-4 mb-6 flex gap-3"
            style={{ background: 'var(--danger-surface)', border: '1px solid var(--danger)' }}
          >
            <span className="text-lg flex-shrink-0">⚠️</span>
            <p className="text-sm" style={{ color: 'var(--danger)' }}>
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
                <label className="block text-sm font-bold mb-1" style={{ color: 'var(--text)' }}>{label}</label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder={placeholder}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                  style={{
                    border: `2px solid ${err ? 'var(--danger)' : 'var(--border-strong)'}`,
                    background: err ? 'var(--danger-surface)' : 'var(--surface-inset)',
                    color: 'var(--text)',
                  }}
                />
                {err && <p className="text-xs mt-1" style={{ color: 'var(--danger)' }}>{errMsg}</p>}
              </div>
            ))}
          </div>

          {/* Begin button */}
          <motion.button
            onClick={handleBegin}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3.5 rounded-xl font-extrabold text-base shadow-lg"
            style={{ background: gradient, color: 'var(--text-on-accent)' }}
          >
            Begin Examination →
          </motion.button>

          <p className="text-center text-xs mt-4" style={{ color: 'var(--text-subtle)' }}>
            By starting, you agree to IB academic integrity policies.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
