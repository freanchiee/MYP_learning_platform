'use client'

import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { inviteUrl } from '@/lib/classes'

const btn = { border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' } as const

/** Share a class invite: a link students open to join, plus copy / WhatsApp /
 *  email / share buttons and a QR to project. The QR is drawn in the browser,
 *  so the class code is never sent to a third-party service. */
export default function InviteCard({ code, className: name }: { code: string; className: string }) {
  const [url, setUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [qr, setQr] = useState<string | null>(null)
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    const u = inviteUrl(window.location.origin, code)
    setUrl(u)
    setCanShare(typeof navigator !== 'undefined' && typeof navigator.share === 'function')
    QRCode.toDataURL(u, { width: 220, margin: 1, color: { dark: '#111111', light: '#ffffff' } }).then(setQr).catch(() => setQr(null))
  }, [code])

  const message = `Join my class "${name}" on CritABCD: ${url}  (class code ${code})`

  async function copy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.prompt('Copy this link:', url)
    }
  }

  return (
    <div className="rounded-[var(--radius-card)] p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
      <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>INVITE STUDENTS</div>
      <div className="mt-3 flex flex-wrap items-start gap-5">
        <div className="min-w-[260px] flex-1">
          <div className="break-all rounded-[var(--radius-control)] px-3 py-2.5 text-sm font-semibold" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border)', color: 'var(--text)' }}>
            {url || '…'}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button onClick={copy} className="rounded-[var(--radius-control)] px-4 py-2 text-xs font-black tracking-wider" style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}>
              {copied ? '✓ COPIED' : '🔗 COPY LINK'}
            </button>
            <a href={`https://wa.me/?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="rounded-[var(--radius-control)] px-3 py-2 text-xs font-bold" style={btn}>💬 WhatsApp</a>
            <a href={`mailto:?subject=${encodeURIComponent(`Join ${name} on CritABCD`)}&body=${encodeURIComponent(message)}`} className="rounded-[var(--radius-control)] px-3 py-2 text-xs font-bold" style={btn}>✉️ Email</a>
            {canShare && (
              <button onClick={() => navigator.share({ title: `Join ${name}`, text: message, url }).catch(() => undefined)} className="rounded-[var(--radius-control)] px-3 py-2 text-xs font-bold" style={btn}>📤 Share…</button>
            )}
          </div>
          <p className="mt-3 text-xs" style={{ color: 'var(--text-muted)' }}>
            Students who open the link sign in (or create an account) and join in one tap. Or they can type the code <b style={{ color: 'var(--text)', letterSpacing: '0.15em' }}>{code}</b> under “Join a class”.
          </p>
        </div>
        {qr && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={qr} alt={`QR code to join ${name}`} width={132} height={132} style={{ borderRadius: 10, border: '3px solid #fff' }} />
        )}
      </div>
    </div>
  )
}

/** A small "copy invite link" button for class cards. */
export function CopyInviteButton({ code, style }: { code: string; style?: React.CSSProperties }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={async () => {
        const u = inviteUrl(window.location.origin, code)
        try { await navigator.clipboard.writeText(u); setCopied(true); setTimeout(() => setCopied(false), 1600) } catch { window.prompt('Copy this link:', u) }
      }}
      className="rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider"
      style={style ?? { border: '1px solid var(--border-strong)', color: 'var(--text)' }}
      title="Copy the invite link"
    >
      {copied ? '✓ COPIED' : '🔗 INVITE'}
    </button>
  )
}
