import type { CSSProperties } from 'react'

const TILES: ReadonlyArray<readonly [string, string]> = [
  ['A', 'var(--logo-a)'],
  ['B', 'var(--logo-b)'],
  ['C', 'var(--logo-c)'],
  ['D', 'var(--logo-d)'],
]

// Glassy rounded tile (white letter on a brand-colour gradient), sized in `em`
// so it scales with the surrounding font size. Slightly taller than wide, like
// the supplied logo; the letter sits centred with modest padding.
function tileStyle(color: string): CSSProperties {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 auto',
    boxSizing: 'border-box',
    width: '1.12em',
    height: '1.26em',
    borderRadius: '0.26em',
    color: '#fff',
    fontWeight: 800,
    lineHeight: 1,
    background: `linear-gradient(155deg, color-mix(in srgb, ${color} 68%, #fff), ${color} 54%, color-mix(in srgb, ${color} 88%, #000))`,
    boxShadow: `0 0.05em 0.3em color-mix(in srgb, ${color} 45%, transparent), inset 0 0.06em 0.13em rgba(255,255,255,0.55), inset 0 -0.06em 0.12em rgba(0,0,0,0.25)`,
  }
}

/**
 * CritABCD wordmark. "Crit" inherits currentColor (theme / dark-mode native);
 * A/B/C/D are glassy rounded tiles in the fixed brand colours — a recreation of
 * the supplied logo. The inner row is a flex with align-items:center so the
 * tiles sit vertically centred against "Crit" (not baseline-floated).
 *
 * The outer <span> keeps the passed className so responsive/display utilities
 * like `hidden sm:block` on the platform nav still apply.
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
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.1em', verticalAlign: '-0.28em' }}>
        <span style={{ lineHeight: 1 }}>Crit</span>
        {TILES.map(([letter, color]) => (
          <span key={letter} style={tileStyle(color)}>{letter}</span>
        ))}
      </span>
    </span>
  )
}
