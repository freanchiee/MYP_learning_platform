// Row shapes for the generic live_* tables (supabase/migrations/0004_live_classes.sql).

export interface LiveSessionRow {
  code: string
  activity_id: string
  host_id: string
  status: 'lobby' | 'active' | 'ended'
  stage_idx: number
  state: Record<string, any>
  class_id?: string | null
  created_at: string
  updated_at: string
}

export interface LivePlayerRow {
  id: string
  session_code: string
  user_id: string
  name: string
  team: number | null
  points: number
  badges: string[]
  data: Record<string, any>
  joined_at: string
}

export interface LiveEventRow {
  id: string
  session_code: string
  player_id: string | null
  type: string
  payload: Record<string, any>
  created_at: string
}

export interface LiveGradeRow {
  session_code: string
  player_id: string
  scores: Record<string, number | null>
  feedback: string
  graded: boolean
  updated_at: string
}
