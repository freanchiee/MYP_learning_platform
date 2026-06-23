import type { CSSProperties } from 'react'

/**
 * CritABCD wordmark. "Crit" inherits the surrounding text color (currentColor)
 * so it adapts to theme + dark mode for free; A/B/C/D carry the fixed brand
 * colors (blue/green/orange/red = the four MYP criteria the platform assesses).
 * Typography (size/weight/tracking) is driven by the passed className.
 */
export default function Wordmark({
  className,
  style,
}: {
  className?: string
  style?: CSSProperties
}) {
  return (
    <span className={className} style={{ whiteSpace: 'nowrap', ...style }}>
      Crit
      <span style={{ color: 'var(--logo-a)' }}>A</span>
      <span style={{ color: 'var(--logo-b)' }}>B</span>
      <span style={{ color: 'var(--logo-c)' }}>C</span>
      <span style={{ color: 'var(--logo-d)' }}>D</span>
    </span>
  )
}
