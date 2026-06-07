'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import type { AIProvider } from '@/lib/ai-grading'

const PROVIDERS: { id: AIProvider; label: string; placeholder: string; docsUrl: string; defaultModel: string; models: string[] }[] = [
  {
    id: 'claude',
    label: 'Anthropic Claude',
    placeholder: 'sk-ant-api03-…',
    docsUrl: 'https://console.anthropic.com/settings/keys',
    defaultModel: 'claude-3-5-haiku-20241022',
    models: ['claude-3-5-haiku-20241022', 'claude-3-5-sonnet-20241022', 'claude-opus-4-5'],
  },
  {
    id: 'openai',
    label: 'OpenAI',
    placeholder: 'sk-…',
    docsUrl: 'https://platform.openai.com/api-keys',
    defaultModel: 'gpt-4o-mini',
    models: ['gpt-4o-mini', 'gpt-4o', 'gpt-4-turbo'],
  },
  {
    id: 'gemini',
    label: 'Google Gemini',
    placeholder: 'AIza…',
    docsUrl: 'https://aistudio.google.com/app/apikey',
    defaultModel: 'gemini-1.5-flash',
    models: ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-2.0-flash'],
  },
]

export default function SettingsPage() {
  const [provider, setProvider] = useState<AIProvider>('claude')
  const [apiKey, setApiKey]   = useState('')
  const [model, setModel]     = useState('')
  const [saved, setSaved]     = useState(false)
  const [showKey, setShowKey] = useState(false)
  const [hasKey, setHasKey]   = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const storedProvider = localStorage.getItem('myp_ai_provider') as AIProvider | null
    const storedKey      = localStorage.getItem('myp_ai_key') ?? ''
    const storedModel    = localStorage.getItem('myp_ai_model') ?? ''
    if (storedProvider) setProvider(storedProvider)
    if (storedKey)      { setApiKey(storedKey); setHasKey(true) }
    if (storedModel)    setModel(storedModel)
  }, [])

  const current = PROVIDERS.find((p) => p.id === provider)!

  const handleSave = () => {
    if (apiKey.trim()) {
      localStorage.setItem('myp_ai_provider', provider)
      localStorage.setItem('myp_ai_key', apiKey.trim())
      localStorage.setItem('myp_ai_model', model || current.defaultModel)
      setHasKey(true)
    } else {
      localStorage.removeItem('myp_ai_provider')
      localStorage.removeItem('myp_ai_key')
      localStorage.removeItem('myp_ai_model')
      setHasKey(false)
    }
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const handleClear = () => {
    localStorage.removeItem('myp_ai_provider')
    localStorage.removeItem('myp_ai_key')
    localStorage.removeItem('myp_ai_model')
    setApiKey('')
    setModel('')
    setHasKey(false)
  }

  return (
    <div style={{ background: '#f5edcc', minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto px-6 py-14">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className="text-[9px] font-black tracking-[0.3em] mb-2" style={{ color: 'rgba(31,54,116,0.4)' }}>
            SETTINGS
          </p>
          <h1 className="text-3xl font-extrabold mb-1" style={{ color: '#1f3674', letterSpacing: '-0.5px' }}>
            AI Grading
          </h1>
          <p className="text-sm" style={{ color: 'rgba(31,54,116,0.55)' }}>
            Connect your own AI key to get intelligent grading on open-ended extended responses.
            Structured questions (MCQ, drag-drop, fill-blank) always use the keyword engine — free and instant.
          </p>
        </motion.div>

        <div className="h-px my-8" style={{ background: 'rgba(31,54,116,0.1)' }} />

        {/* Status banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 rounded-lg px-4 py-3 mb-8"
          style={{
            background: hasKey ? 'rgba(173,241,196,0.2)' : 'rgba(31,54,116,0.06)',
            border: `1px solid ${hasKey ? 'rgba(173,241,196,0.4)' : 'rgba(31,54,116,0.12)'}`,
          }}
        >
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: hasKey ? '#adf1c4' : 'rgba(31,54,116,0.2)' }}
          />
          <span className="text-sm font-semibold" style={{ color: '#1f3674' }}>
            {hasKey
              ? `AI grading active — ${PROVIDERS.find(p => p.id === (localStorage.getItem('myp_ai_provider') ?? provider))?.label ?? provider}`
              : 'AI grading off — using keyword engine'}
          </span>
        </motion.div>

        {/* Provider selector */}
        <div className="mb-6">
          <label className="text-[9px] font-black tracking-[0.25em] block mb-3" style={{ color: 'rgba(31,54,116,0.4)' }}>
            PROVIDER
          </label>
          <div className="grid grid-cols-3 gap-3">
            {PROVIDERS.map((p) => (
              <button
                key={p.id}
                onClick={() => { setProvider(p.id); setModel('') }}
                className="px-4 py-3 text-sm font-bold rounded-lg transition-all text-left"
                style={{
                  background: provider === p.id ? '#1f3674' : '#fff',
                  color: provider === p.id ? '#adf1c4' : '#1f3674',
                  border: `2px solid ${provider === p.id ? '#1f3674' : 'rgba(31,54,116,0.15)'}`,
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* API Key input */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-[9px] font-black tracking-[0.25em]" style={{ color: 'rgba(31,54,116,0.4)' }}>
              API KEY
            </label>
            <a
              href={current.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold transition-opacity hover:opacity-70"
              style={{ color: '#547ca4' }}
            >
              Get key →
            </a>
          </div>
          <div className="relative">
            <input
              type={showKey ? 'text' : 'password'}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={current.placeholder}
              className="w-full px-4 py-3 rounded-lg text-sm font-mono outline-none transition-all"
              style={{
                background: '#fff',
                border: '1.5px solid rgba(31,54,116,0.2)',
                color: '#1f3674',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#547ca4' }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(31,54,116,0.2)' }}
            />
            <button
              type="button"
              onClick={() => setShowKey((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold transition-opacity hover:opacity-70"
              style={{ color: 'rgba(31,54,116,0.4)' }}
            >
              {showKey ? 'HIDE' : 'SHOW'}
            </button>
          </div>
          <p className="text-xs mt-1.5" style={{ color: 'rgba(31,54,116,0.35)' }}>
            Stored only in your browser. Never sent to our servers.
          </p>
        </div>

        {/* Model selector */}
        <div className="mb-8">
          <label className="text-[9px] font-black tracking-[0.25em] block mb-2" style={{ color: 'rgba(31,54,116,0.4)' }}>
            MODEL <span style={{ color: 'rgba(31,54,116,0.25)' }}>(OPTIONAL)</span>
          </label>
          <select
            value={model || current.defaultModel}
            onChange={(e) => setModel(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm font-medium outline-none"
            style={{
              background: '#fff',
              border: '1.5px solid rgba(31,54,116,0.2)',
              color: '#1f3674',
            }}
          >
            {current.models.map((m) => (
              <option key={m} value={m}>{m}{m === current.defaultModel ? ' (recommended)' : ''}</option>
            ))}
          </select>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={handleSave}
            whileTap={{ scale: 0.97 }}
            className="inline-block font-black text-sm tracking-[0.15em] text-white transition-opacity hover:opacity-80"
            style={{ background: '#1f3674', padding: '12px 32px' }}
          >
            {saved ? '✓ SAVED' : 'SAVE KEY'}
          </motion.button>
          {hasKey && (
            <button
              onClick={handleClear}
              className="text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: '#c3282d' }}
            >
              Clear key
            </button>
          )}
        </div>

        <div className="h-px my-10" style={{ background: 'rgba(31,54,116,0.08)' }} />

        {/* Info box */}
        <div className="rounded-lg p-5" style={{ background: 'rgba(31,54,116,0.04)', border: '1px solid rgba(31,54,116,0.1)' }}>
          <h3 className="text-xs font-black tracking-[0.2em] mb-3" style={{ color: '#1f3674' }}>HOW GRADING WORKS</h3>
          <div className="space-y-2 text-sm" style={{ color: 'rgba(31,54,116,0.6)' }}>
            {[
              ['MCQ, drag-drop, fill-blank, radio select', 'Keyword engine (always)'],
              ['Open-ended prose (Criteria C & D)', 'AI provider if key set, else keyword engine'],
              ['No key configured', 'Keyword engine for everything'],
            ].map(([task, method]) => (
              <div key={task} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#547ca4' }} />
                <span><strong style={{ color: '#1f3674' }}>{task}</strong> — {method}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
