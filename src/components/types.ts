export const WindowIDs = {
  about: 'about',
  blog: 'blog',
  contact: 'contact',
  projects: 'projects',
  stuff: 'stuff',
} as const

export type WindowID = keyof typeof WindowIDs;