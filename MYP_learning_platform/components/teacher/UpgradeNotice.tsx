'use client'

import Link from 'next/link'

// The free-plan-limit DB triggers (0009_free_plan_limits.sql) already raise a
// readable message ("Free plan: 1 class. Upgrade to create more."), surfaced
// as-is via error.message in CreateClassForm/AssignSessions. This just dresses
// that exact moment up into a real upgrade prompt instead of plain red text —
// the single most relevant place to mention /pricing, since it's shown right
// when a teacher has hit the thing it would unlock.
export default function UpgradeNotice({ message }: { message: string }) {
  if (!message.startsWith('Free plan:')) {
    return <p className="text-sm" style={{ color: 'var(--danger)' }}>{message}</p>
  }
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-[var(--radius-control)] px-4 py-3 text-sm" style={{ background: 'var(--surface-2)', border: '1.5px solid var(--accent)', color: 'var(--text)' }}>
      <span className="font-semibold">{message}</span>
      <Link href="/pricing" className="font-black underline" style={{ color: 'var(--accent)' }}>Unlock everything →</Link>
    </div>
  )
}
