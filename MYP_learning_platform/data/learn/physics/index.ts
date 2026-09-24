import type { Lesson, Module } from './types'
import { PREFACE } from './preface'
import { KINEMATICS_INTRO } from './kinematics-intro'

export * from './types'

export const MODULES: Module[] = [PREFACE, KINEMATICS_INTRO]

export const getModule = (slug: string) => MODULES.find((m) => m.slug === slug)
export const getLesson = (m: Module, slug: string): Lesson | undefined => m.lessons.find((l) => l.slug === slug)

// Flat, ordered lesson list for previous / next navigation across modules.
export const ALL_LESSONS = MODULES.flatMap((m) => m.lessons.map((l) => ({ module: m, lesson: l })))
export const neighbours = (mSlug: string, lSlug: string) => {
  const i = ALL_LESSONS.findIndex((x) => x.module.slug === mSlug && x.lesson.slug === lSlug)
  return { prev: ALL_LESSONS[i - 1], next: ALL_LESSONS[i + 1] }
}
