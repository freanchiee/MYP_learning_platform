// Classes: a teacher creates a class, students join with its code, and live
// sessions can be assigned to a class (supabase/migrations/0008).

export type UserRole = 'student' | 'teacher'

export interface ClassRow {
  id: string
  teacher_id: string
  name: string
  join_code: string
  created_at: string
}

export interface ClassMemberRow {
  class_id: string
  user_id: string
  name: string
  joined_at: string
}

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
      .insert({ teacher_id: teacherId, name: name.trim().slice(0, 80), join_code: generateClassCode() })
      .select('*')
      .single()
    if (!error) return { data: data as ClassRow, error: null }
    if (error.code !== '23505') return { data: null, error: error.message }
  }
  return { data: null, error: 'Could not generate a class code — please try again.' }
}
