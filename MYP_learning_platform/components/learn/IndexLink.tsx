'use client'

// Right-rail index entry: jumps to a slide (through the deck) or scrolls to a heading.
export default function IndexLink({ id, text }: { id: string; text: string }) {
  return (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('dp-goto', { detail: id }))
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }}
      className="font-semibold"
      style={{ color: 'var(--accent)' }}
    >
      {text}
    </a>
  )
}
