import type { LiveActivityDefinition, MypYear } from './types'
import { MYP2_DESIGN_STUDIO } from './myp2-design-studio'
import { MYP2_EVERYDAY_NEEDS } from './myp2-everyday-needs'
import { MYP3_UNIT1_KICKOFF } from './myp3-unit1-kickoff'
import { MYP3_UNIT1_KICKOFF_EXTENDED } from './myp3-unit1-kickoff-extended'
import { MYP4_PROTOTYPING } from './myp4-prototyping'
import { MYP4_DOCUMENTING_BUILD } from './myp4-documenting-build'
import { MYP5_SUSTAINABILITY } from './myp5-sustainability'
import { physicsLiveActivity } from '../../../lib/learn/live-physics'

export const LIVE_ACTIVITIES: LiveActivityDefinition[] = [MYP2_DESIGN_STUDIO, MYP2_EVERYDAY_NEEDS, MYP3_UNIT1_KICKOFF, MYP3_UNIT1_KICKOFF_EXTENDED, MYP4_PROTOTYPING, MYP4_DOCUMENTING_BUILD, MYP5_SUSTAINABILITY]

export const YEARS: MypYear[] = ['MYP2', 'MYP3', 'MYP4', 'MYP5']

export function getLiveActivity(id: string): LiveActivityDefinition | undefined {
  // Registered activities first; otherwise an id like "dpp--<module>--<lesson>" is a DP Physics lesson run live.
  return LIVE_ACTIVITIES.find((a) => a.id === id) ?? physicsLiveActivity(id)
}

export function liveActivitiesForYear(year: MypYear): LiveActivityDefinition[] {
  return LIVE_ACTIVITIES.filter((a) => a.year === year)
}
