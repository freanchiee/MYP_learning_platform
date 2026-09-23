import type { LiveActivityDefinition, MypYear } from './types'
import { MYP2_DESIGN_STUDIO } from './myp2-design-studio'
import { MYP3_UNIT1_KICKOFF } from './myp3-unit1-kickoff'
import { MYP4_PROTOTYPING } from './myp4-prototyping'

export const LIVE_ACTIVITIES: LiveActivityDefinition[] = [MYP2_DESIGN_STUDIO, MYP3_UNIT1_KICKOFF, MYP4_PROTOTYPING]

export const YEARS: MypYear[] = ['MYP2', 'MYP3', 'MYP4']

export function getLiveActivity(id: string): LiveActivityDefinition | undefined {
  return LIVE_ACTIVITIES.find((a) => a.id === id)
}

export function liveActivitiesForYear(year: MypYear): LiveActivityDefinition[] {
  return LIVE_ACTIVITIES.filter((a) => a.year === year)
}
