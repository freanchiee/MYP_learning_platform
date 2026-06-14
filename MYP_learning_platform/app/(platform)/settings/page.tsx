'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import type { AIProvider } from '@/lib/ai-grading'
import ThemeSwitcher from '@/components/theme/ThemeSwitcher'

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
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto px-6 py-14">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className="text-[9px] font-black tracking-[0.3em] mb-2" style={{ color: 'var(--text-subtle)' }}>
            SETTINGS
          </p>
          <h1 className="text-3xl font-extrabold mb-1" style={{ color: 'var(--text)', letterSpacing: '-0.5px' }}>
            AI Grading
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Connect your own AI key to get intelligent grading on open-ended extended responses.
            Structured questions (MCQ, drag-drop, fill-blank) always use the keyword engine — free and instant.
          </p>
        </motion.div>

        <div className="h-px my-8" style={{ background: 'var(--divider)' }} />

        {/* Status banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 rounded-control px-4 py-3 mb-8"
          style={{
            background: hasKey ? 'var(--success-surface)' : 'var(--surface-2)',
            border: `1px solid ${hasKey ? 'var(--success)' : 'var(--border)'}`,
          }}
        >
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: hasKey ? 'var(--success)' : 'var(--text-subtle)' }}
          />
          <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
            {hasKey
              ? `AI grading active — ${PROVIDERS.find(p => p.id === (localStorage.getItem('myp_ai_provider') ?? provider))?.label ?? provider}`
              : 'AI grading off — using keyword engine'}
          </span>
        </motion.div>

        {/* Provider selector */}
        <div className="mb-6">
          <label className="text-[9px] font-black tracking-[0.25em] block mb-3" style={{ color: 'var(--text-subtle)' }}>
            PROVIDER
          </label>
          <div className="grid grid-cols-3 gap-3">
            {PROVIDERS.map((p) => (
              <button
                key={p.id}
                onClick={() => { setProvider(p.id); setModel('') }}
                className="px-4 py-3 text-sm font-bold rounded-control transition-all text-left"
                style={{
                  background: provider === p.id ? 'var(--accent)' : 'var(--surface)',
                  color: provider === p.id ? 'var(--accent-fg)' : 'var(--text)',
                  border: `2px solid ${provider === p.id ? 'var(--accent)' : 'var(--border)'}`,
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
            <label className="text-[9px] font-black tracking-[0.25em]" style={{ color: 'var(--text-subtle)' }}>
              API KEY
            </label>
            <a
              href={current.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold transition-opacity hover:opacity-70"
              style={{ color: 'var(--accent-2)' }}
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
              className="w-full px-4 py-3 rounded-control text-sm font-mono outline-none transition-all"
              style={{
                background: 'var(--surface-inset)',
                border: '1.5px solid var(--border-strong)',
                color: 'var(--text)',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'var(--accent)' }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--border-strong)' }}
            />
            <button
              type="button"
              onClick={() => setShowKey((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold transition-opacity hover:opacity-70"
              style={{ color: 'var(--text-subtle)' }}
            >
              {showKey ? 'HIDE' : 'SHOW'}
            </button>
          </div>
          <p className="text-xs mt-1.5" style={{ color: 'var(--text-subtle)' }}>
            Stored only in your browser. Never sent to our servers.
          </p>
        </div>

        {/* Model selector */}
        <div className="mb-8">
          <label className="text-[9px] font-black tracking-[0.25em] block mb-2" style={{ color: 'var(--text-subtle)' }}>
            MODEL <span style={{ color: 'var(--text-subtle)' }}>(OPTIONAL)</span>
          </label>
          <select
            value={model || current.defaultModel}
            onChange={(e) => setModel(e.target.value)}
            className="w-full px-4 py-3 rounded-control text-sm font-medium outline-none"
            style={{
              background: 'var(--surface-inset)',
              border: '1.5px solid var(--border-strong)',
              color: 'var(--text)',
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
            className="inline-block font-black text-sm tracking-[0.15em] transition-opacity hover:opacity-80 rounded-control"
            style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)', padding: '12px 32px' }}
          >
            {saved ? '✓ SAVED' : 'SAVE KEY'}
          </motion.button>
          {hasKey && (
            <button
              onClick={handleClear}
              className="text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: 'var(--danger)' }}
            >
              Clear key
            </button>
          )}
        </div>

        <div className="h-px my-10" style={{ background: 'var(--divider)' }} />

        {/* Info box */}
        <div className="rounded-control p-5" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
          <h3 className="text-xs font-black tracking-[0.2em] mb-3" style={{ color: 'var(--text)' }}>HOW GRADING WORKS</h3>
          <div className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            {[
              ['MCQ, drag-drop, fill-blank, radio select', 'Keyword engine (always)'],
              ['Open-ended prose (Criteria C & D)', 'AI provider if key set, else keyword engine'],
              ['No key configured', 'Keyword engine for everything'],
            ].map(([task, method]) => (
              <div key={task} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: 'var(--accent-2)' }} />
                <span><strong style={{ color: 'var(--text)' }}>{task}</strong> — {method}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px my-10" style={{ background: 'var(--divider)' }} />

        {/* Appearance / Theme */}
        <div>
          <p className="text-[9px] font-black tracking-[0.3em] mb-2" style={{ color: 'var(--text-subtle)' }}>
            APPEARANCE
          </p>
          <h2 className="text-2xl font-extrabold mb-1" style={{ color: 'var(--text)', letterSpacing: '-0.4px' }}>
            Theme
          </h2>
          <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>
            Choose how the platform looks. Your choice applies everywhere and is remembered on this device.
          </p>
          <div
            className="rounded-card p-5"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}
          >
            <ThemeSwitcher variant="panel" />
          </div>
        </div>

      </div>
    </div>
  )
}
