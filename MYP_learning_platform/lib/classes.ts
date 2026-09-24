// Classes: a teacher creates a class, students join with its code, and live
// sessions can be assigned to a class (supabase/migrations/0008).

export type UserRole = 'student' | 'teacher'

export interface ClassRow {
  id: string
  teacher_id: string
  name: string
  join_code: string
  emoji?: string | null
  theme?: string | null
  created_at: string
}

export interface ClassMemberRow {
  class_id: string
  user_id: string
  name: string
  joined_at: string
}

// A class "avatar": one emoji and one colour theme. Teachers can change both;
// until they do, a class gets a stable pick derived from its id.
export const CLASS_EMOJIS = ['🦊', '🐼', '🦉', '🐙', '🚀', '🌋', '🧪', '🔭', '🎨', '🧬', '⚡', '🌈', '🦋', '🐳', '🌵', '🍀', '🎯', '🧩', '🪐', '🦄']

export interface ClassTheme { key: string; name: string; from: string; to: string }
export const CLASS_THEMES: ClassTheme[] = [
  { key: 'sunset', name: 'Sunset', from: '#F97316', to: '#DB2777' },
  { key: 'ocean', name: 'Ocean', from: '#0EA5E9', to: '#4F46E5' },
  { key: 'forest', name: 'Forest', from: '#16A34A', to: '#0F766E' },
  { key: 'grape', name: 'Grape', from: '#9333EA', to: '#4338CA' },
  { key: 'gold', name: 'Gold', from: '#F59E0B', to: '#EA580C' },
  { key: 'berry', name: 'Berry', from: '#E11D48', to: '#7C3AED' },
  { key: 'mint', name: 'Mint', from: '#10B981', to: '#0891B2' },
  { key: 'slate', name: 'Night', from: '#475569', to: '#1E293B' },
]

const hashId = (s: string) => { let h = 0; for (let i = 0; i < s.length; i++) h = (Math.imul(h, 31) + s.charCodeAt(i)) >>> 0; return h }

export function classLook(c: { id: string; emoji?: string | null; theme?: string | null }) {
  const h = hashId(c.id)
  const emoji = c.emoji && CLASS_EMOJIS.includes(c.emoji) ? c.emoji : CLASS_EMOJIS[h % CLASS_EMOJIS.length]
  const theme = CLASS_THEMES.find((t) => t.key === c.theme) ?? CLASS_THEMES[(h >>> 5) % CLASS_THEMES.length]
  return { emoji, theme, gradient: `linear-gradient(135deg, ${theme.from}, ${theme.to})` }
}

/** The link a teacher shares so students can join without typing the code. */
export const inviteUrl = (origin: string, code: string) => `${origin}/join/${code}`

/** 6-character code, no look-alike characters (0/O, 1/I/L). */
export function generateClassCode(): string {
  const A = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'
  let c = ''
  for (let i = 0; i < 6; i++) c += A[Math.floor(Math.random() * A.length)]
  return c
}

/** Insert a class, retrying on the rare join-code collision. */
export async function createClassRow(
  sb: { from: (t: string) => any },
  teacherId: string,
  name: string,
): Promise<{ data: ClassRow | null; error: string | null }> {
  for (let i = 0; i < 4; i++) {
    const { data, error } = await sb
      .from('classes')
      .insert({
        teacher_id: teacherId,
        name: name.trim().slice(0, 80),
        join_code: generateClassCode(),
        emoji: CLASS_EMOJIS[Math.floor(Math.random() * CLASS_EMOJIS.length)],
        theme: CLASS_THEMES[Math.floor(Math.random() * CLASS_THEMES.length)].key,
      })
      .select('*')
      .single()
    if (!error) return { data: data as ClassRow, error: null }
    if (error.code !== '23505') return { data: null, error: error.message }
  }
  return { data: null, error: 'Could not generate a class code — please try again.' }
}
