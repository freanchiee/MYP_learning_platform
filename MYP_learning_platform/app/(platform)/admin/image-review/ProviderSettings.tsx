'use client'

import { useState, useTransition } from 'react'
import { saveProviderConfig, testProvider, testAnthropicKey, GEMINI_DEFAULT_MODEL, type ProviderId, type ProviderConfig } from './provider-config'

interface Props {
  initialConfig: ProviderConfig
}

interface ProviderDef {
  id: ProviderId
  name: string
  badge: string
  color: string
  description: string
  pricingNote: string
  keyLabel: string
  keyPlaceholder: string
  docsUrl: string
  extraField?: { label: string; key: 'model'; options: { value: string; label: string }[] }
}

const PROVIDERS: ProviderDef[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    badge: 'DALL-E 3',
    color: 'bg-emerald-100 text-emerald-800',
    description: 'High quality photorealistic images. Best for apparatus, organisms, real-world objects.',
    pricingNote: '~$0.04/image · standard 1024×1024',
    keyLabel: 'OpenAI API Key',
    keyPlaceholder: 'sk-...',
    docsUrl: 'https://platform.openai.com/api-keys',
    extraField: {
      label: 'Model',
      key: 'model',
      options: [
        { value: 'dall-e-3', label: 'DALL-E 3 (recommended)' },
        { value: 'dall-e-2', label: 'DALL-E 2 (cheaper, $0.02)' },
      ],
    },
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    badge: 'Flash 2.0',
    color: 'bg-blue-100 text-blue-800',
    description: 'Gemini 2.0 Flash image generation via AI Studio. Works with standard free-tier keys.',
    pricingNote: 'Free tier available · get key at aistudio.google.com',
    keyLabel: 'Google AI Studio Key',
    keyPlaceholder: 'AIza...',
    docsUrl: 'https://aistudio.google.com/app/apikey',
    extraField: {
      label: 'Model',
      key: 'model',
      options: [
        { value: 'gemini-2.0-flash-exp-image-generation', label: 'gemini-2.0-flash-exp-image-generation (recommended)' },
        { value: 'gemini-2.0-flash-preview-image-generation', label: 'gemini-2.0-flash-preview-image-generation' },
        { value: 'gemini-2.0-flash-exp', label: 'gemini-2.0-flash-exp (generic multimodal)' },
        { value: 'imagen-3.0-generate-001', label: 'imagen-3.0-generate-001 (Vertex AI / special quota)' },
      ],
    },
  },
  {
    id: 'stability',
    name: 'Stability AI',
    badge: 'SDXL Core',
    color: 'bg-purple-100 text-purple-800',
    description: 'Open-source Stable Diffusion. Free trial credits on sign-up.',
    pricingNote: '~$0.003/image · free credits on new account',
    keyLabel: 'Stability AI Key',
    keyPlaceholder: 'sk-...',
    docsUrl: 'https://platform.stability.ai/account/keys',
  },
]

function KeyInput({
  label, placeholder, value, onChange,
}: {
  label: string; placeholder: string; value: string; onChange: (v: string) => void
}) {
  const [show, setShow] = useState(false)
  const masked = value && !show
    ? value.slice(0, 8) + '•'.repeat(Math.max(0, value.length - 12)) + value.slice(-4)
    : value

  return (
    <div>
      <label className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wide mb-1">
        {label}
      </label>
      <div className="flex gap-2">
        <input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-mono text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
          autoComplete="off"
          spellCheck={false}
        />
        <button
          type="button"
          onClick={() => setShow(v => !v)}
          className="px-2.5 py-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 text-xs"
          title={show ? 'Hide key' : 'Show key'}
        >
          {show ? '🙈' : '👁️'}
        </button>
      </div>
    </div>
  )
}

export default function ProviderSettings({ initialConfig }: Props) {
  const [open, setOpen] = useState(false)
  const [config, setConfig] = useState<ProviderConfig>({
    ...initialConfig,
    gemini:    { ...initialConfig.gemini, model: initialConfig.gemini?.model || GEMINI_DEFAULT_MODEL },
    anthropic: initialConfig.anthropic ?? { key: '' },
  })
  const [testResults, setTestResults] = useState<Record<string, { ok: boolean; msg: string }>>({})
  const [isPending, startTransition] = useTransition()
  const [saved, setSaved] = useState(false)

  function updateKey(provider: ProviderId, key: string) {
    setConfig(c => ({ ...c, [provider]: { ...c[provider], key } }))
  }
  function updateModel(provider: ProviderId, model: string) {
    setConfig(c => ({
      ...c,
      [provider]: { ...(c[provider] as Record<string, string>), model },
    }))
  }
  function updateAnthropicKey(key: string) {
    setConfig(c => ({ ...c, anthropic: { key } }))
  }
  function setActive(provider: ProviderId) {
    setConfig(c => ({ ...c, activeProvider: provider }))
  }

  function handleTest(provider: ProviderId) {
    const key = config[provider].key
    if (!key) {
      setTestResults(r => ({ ...r, [provider]: { ok: false, msg: 'Enter a key first' } }))
      return
    }
    startTransition(async () => {
      setTestResults(r => ({ ...r, [provider]: { ok: false, msg: 'Testing…' } }))
      const res = await testProvider(provider, key)
      setTestResults(r => ({
        ...r,
        [provider]: {
          ok: res.ok,
          msg: res.ok ? (res.error ?? '✅ Connected') : `❌ ${res.error}`,
        },
      }))
    })
  }

  function handleTestAnthropic() {
    const key = config.anthropic?.key ?? ''
    if (!key) {
      setTestResults(r => ({ ...r, anthropic: { ok: false, msg: 'Enter a key first' } }))
      return
    }
    startTransition(async () => {
      setTestResults(r => ({ ...r, anthropic: { ok: false, msg: 'Testing…' } }))
      const res = await testAnthropicKey(key)
      setTestResults(r => ({
        ...r,
        anthropic: {
          ok: res.ok,
          msg: res.ok ? (res.error ?? '✅ Connected') : `❌ ${res.error}`,
        },
      }))
    })
  }

  function handleSave() {
    startTransition(async () => {
      await saveProviderConfig(config)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    })
  }

  const activeProvider = PROVIDERS.find(p => p.id === config.activeProvider)

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 shadow-sm transition-colors"
      >
        <span>⚙️</span>
        <span>Image Providers</span>
        {config.activeProvider && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ml-1 ${activeProvider?.color ?? 'bg-gray-100 text-gray-600'}`}>
            {activeProvider?.badge ?? config.activeProvider}
          </span>
        )}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-out panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div>
            <h2 className="text-base font-bold text-gray-900">Image Generation Providers</h2>
            <p className="text-xs text-gray-500 mt-0.5">Keys are saved locally, never committed to git.</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-200 text-gray-500 text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {/* Provider list */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {PROVIDERS.map(p => {
            const isActive = config.activeProvider === p.id
            const result = testResults[p.id]
            const currentKey = config[p.id].key
            const currentModel = (config[p.id] as Record<string, string>).model ?? ''

            return (
              <div
                key={p.id}
                className={`rounded-2xl border-2 p-4 space-y-3 transition-colors ${isActive ? 'border-gray-900 bg-gray-50' : 'border-gray-100 bg-white'}`}
              >
                {/* Provider header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-gray-900">{p.name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${p.color}`}>
                      {p.badge}
                    </span>
                    {isActive && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-900 text-white">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <a
                    href={p.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-blue-600 hover:underline"
                  >
                    Get key ↗
                  </a>
                </div>

                <p className="text-xs text-gray-600">{p.description}</p>
                <p className="text-[11px] text-gray-400">{p.pricingNote}</p>

                {/* Key input */}
                <KeyInput
                  label={p.keyLabel}
                  placeholder={p.keyPlaceholder}
                  value={currentKey}
                  onChange={v => updateKey(p.id, v)}
                />

                {/* Model selector (OpenAI only) */}
                {p.extraField && (
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wide mb-1">
                      {p.extraField.label}
                    </label>
                    <select
                      value={currentModel}
                      onChange={e => updateModel(p.id, e.target.value)}
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                      {p.extraField.options.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Test result */}
                {result && (
                  <p className={`text-xs font-medium px-3 py-1.5 rounded-lg ${result.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {result.msg}
                  </p>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleTest(p.id)}
                    disabled={isPending || !currentKey}
                    className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition-colors"
                  >
                    Test Connection
                  </button>
                  {!isActive && currentKey && (
                    <button
                      onClick={() => setActive(p.id)}
                      className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-semibold hover:bg-gray-700 transition-colors"
                    >
                      Set as Active
                    </button>
                  )}
                </div>
              </div>
            )
          })}

          {/* ── Claude Vision section (inside scrollable list) ──────────────── */}
          <div className="rounded-2xl border-2 border-orange-200 bg-orange-50/40 p-4 space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-gray-900">Anthropic</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">
                  Claude Vision
                </span>
              </div>
              <a
                href="https://console.anthropic.com/settings/keys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-blue-600 hover:underline"
              >
                Get key ↗
              </a>
            </div>

            <p className="text-xs text-gray-600">
              Analyzes original exam images and writes specific, detailed prompts before generation.
              Enables <strong>2A (Vision)</strong> upgrades — much better results than text-only 2B prompts.
            </p>
            <p className="text-[11px] text-gray-400">
              claude-sonnet-4-6 · ~$0.003/analysis · console.anthropic.com
            </p>

            <KeyInput
              label="Anthropic API Key"
              placeholder="sk-ant-..."
              value={config.anthropic?.key ?? ''}
              onChange={updateAnthropicKey}
            />

            {/* Test result */}
            {testResults['anthropic'] && (
              <p className={`text-xs font-medium px-3 py-1.5 rounded-lg ${testResults['anthropic'].ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {testResults['anthropic'].msg}
              </p>
            )}

            <button
              onClick={handleTestAnthropic}
              disabled={isPending || !(config.anthropic?.key)}
              className="px-3 py-1.5 rounded-lg border border-orange-200 text-xs font-semibold text-orange-700 hover:bg-orange-100 disabled:opacity-40 transition-colors"
            >
              Test Connection
            </button>
          </div>
        </div>

        {/* Save footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center gap-3">
          <button
            onClick={handleSave}
            disabled={isPending}
            className="flex-1 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-gray-700 disabled:opacity-60 transition-colors"
          >
            {saved ? '✅ Saved!' : 'Save Configuration'}
          </button>
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
}
