import type { Lesson } from '@/data/learn/physics'

export function Chip({ children, tone = 'muted', onHero = false }: { children: React.ReactNode; tone?: 'muted' | 'accent'; onHero?: boolean }) {
  // On the gradient banner the chips sit on a solid surface so text stays readable in every theme.
  return (
    <span
      className="rounded-full px-2.5 py-1 text-[11px] font-black tracking-wider"
      style={
        onHero
          ? { background: 'var(--surface)', color: 'var(--text)' }
          : { background: tone === 'accent' ? 'var(--accent-soft)' : 'var(--surface-2)', color: tone === 'accent' ? 'var(--accent)' : 'var(--text-muted)' }
      }
    >
      {children}
    </span>
  )
}

export function LessonChips({ l, onHero = false }: { l: Lesson; onHero?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Chip tone="accent" onHero={onHero}>{l.level}</Chip>
      <Chip onHero={onHero}>{['Easier', 'Medium', 'Harder'][l.difficulty - 1]}</Chip>
      <Chip onHero={onHero}>{l.minutes} min</Chip>
      {l.access === 'free' && <Chip onHero={onHero}>Free</Chip>}
    </div>
  )
}
