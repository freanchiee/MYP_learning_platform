import Link from 'next/link'

/** Small strip at the very end of every page: the three pages a school, parent or student needs to find. */
export default function LegalFooter() {
  const link = { color: 'var(--text-subtle)', textDecoration: 'underline' } as const
  return (
    <footer className="px-5 py-4 text-center text-xs" style={{ color: 'var(--text-subtle)' }} aria-label="Legal">
      <Link href="/privacy" style={link}>Privacy policy</Link>
      <span aria-hidden> · </span>
      <Link href="/terms" style={link}>Terms of use</Link>
      <span aria-hidden> · </span>
      <Link href="/impressum" style={link}>Impressum</Link>
    </footer>
  )
}
