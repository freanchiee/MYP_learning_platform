import { redirect } from 'next/navigation'

// Backwards compat — redirect to the new subject-specific URL
export default function PapersRedirect() {
  redirect('/physics-papers')
}
