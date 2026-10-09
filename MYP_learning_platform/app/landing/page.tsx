import { redirect } from 'next/navigation'

// `/landing` used to render byte-identical content to `/` (both rendered the
// same component) — Google flagged every one of these as a duplicate with no
// user-selected canonical. The real content now lives only at `/`
// (components/marketing/LandingPage.tsx); this route just sends traffic there
// with a real 301 so the duplicate stops existing instead of being papered
// over with a canonical tag or a robots.txt block.
export default function LandingRedirect() {
  redirect('/')
}
