import Image from 'next/image'

const CONTACT_EMAIL = 'freanchie@gmail.com'

export default function PricingPage() {
  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: 'calc(100vh - 56px)' }}>
      <div className="mx-auto max-w-3xl px-6 py-14">
        <p className="text-[10px] font-black tracking-[0.35em]" style={{ color: 'var(--text-subtle)' }}>FULL ACCESS</p>
        <h1 className="mt-2 font-extrabold leading-tight" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-1.5px', color: 'var(--text)' }}>
          One payment. Everything, unlocked.
        </h1>
        <p className="mt-4 max-w-xl text-base" style={{ color: 'var(--text-muted)' }}>
          No subscription, no renewals — pay once and your account is unlocked for good: every class, every
          live session, every feature on CritABCD, with none of the free-plan limits.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-[1fr_280px]">
          <div className="rounded-[var(--radius-card)] p-6" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
            <div className="text-5xl font-extrabold" style={{ color: 'var(--text)' }}>
              €1,000
              <span className="ml-2 text-sm font-bold" style={{ color: 'var(--text-subtle)' }}>one-time</span>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm" style={{ color: 'var(--text)' }}>
              {[
                'Unlimited classes — no 1-class free-plan cap',
                'Unlimited live sessions assigned to your classes',
                'Every live activity, every MYP year group',
                'All current and future features, no separate upgrade needed',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span aria-hidden style={{ color: 'var(--accent)' }}>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 h-px" style={{ background: 'var(--divider)' }} />

            <div className="mt-6">
              <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>HOW TO PAY</div>
              <ol className="mt-3 space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>1. Scan the QR code with any UPI app and pay €1,000 (or the INR equivalent).</li>
                <li>
                  2. Email a screenshot of the payment to{' '}
                  <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('CritABCD full access payment')}`} className="font-bold underline" style={{ color: 'var(--accent)' }}>
                    {CONTACT_EMAIL}
                  </a>{' '}
                  along with the email address your CritABCD account uses.
                </li>
                <li>3. Your account is upgraded by hand, usually within 24 hours.</li>
              </ol>
              <p className="mt-3 text-xs" style={{ color: 'var(--text-subtle)' }}>
                This isn&apos;t an automated checkout yet — a real person confirms every payment before granting access.
              </p>
            </div>
          </div>

          <div className="self-start rounded-[var(--radius-card)] p-4 text-center" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
            <Image src="/images/pricing/upi-qr.png" alt="Scan to pay with any UPI app" width={590} height={635} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
