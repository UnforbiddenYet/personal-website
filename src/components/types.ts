export const WindowIDs = {
  paint: 'paint',
  about: 'about',
  blog: 'blog',
  contact: 'contact',
} as const

export type WindowID = keyof typeof WindowIDs;

export interface WindowConfig {
  title: string;
  icon: string;
  id: WindowID;
  width: number;
  height: number;
}