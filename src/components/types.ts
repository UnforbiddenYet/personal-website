export const WindowIDs = {
  paint: 'paint',
  about: 'about',
  blog: 'blog',
  contact: 'contact',
  webStuff: 'webStuff',
  imageViewer: 'imageViewer',
  fileExplorer: 'fileExplorer',
} as const

export type WindowID = keyof typeof WindowIDs;

export interface WindowConfig<TData = unknown> {
  title: string;
  icon: string;
  id: WindowID;
  width?: number;
  height?: number;
  data?: TData
}

export type GenericWindowConfig = WindowConfig

export type ImageViewerWindowConfig = WindowConfig<{
  imageUrl: string,
}>

export type NewWindowType<T = unknown> = WindowConfig<T> & {
  cascade?: boolean;
};

export type WindowState<T = unknown> = WindowConfig<T> & {
  width: number;
  height: number;
  x: number;
  y: number;
  z: number;
};