export const WindowIDs = {
  paint: "paint",
  about: "about",
  blog: "blog",
  contact: "contact",
  webStuff: "webStuff",
  imageViewer: "imageViewer",
  fileExplorer: "fileExplorer",
} as const;

export type WindowID = keyof typeof WindowIDs;

export interface WindowDataMap extends Record<WindowID, unknown> {
  imageViewer: { imageUrl: string };
}

interface WindowBase {
  title: string;
  icon: string;
  width?: number;
  height?: number;
}

export type WindowConfig<K extends WindowID = WindowID> = WindowBase & {
  id: K;
  data?: WindowDataMap[K];
};

export type NewWindowType<K extends WindowID = WindowID> = WindowConfig<K> & {
  cascade?: boolean;
};

export type WindowState<K extends WindowID = WindowID> = WindowConfig<K> & {
  width: number;
  height: number;
  x: number;
  y: number;
  z: number;
  minimized: boolean;
};

export type AnyWindowState = { [K in WindowID]: WindowState<K> }[WindowID];
export type AnyNewWindowType = { [K in WindowID]: NewWindowType<K> }[WindowID];

export type WindowControlType = {
  icon: string;
  label: string;
  cursor?: string;
  disabled?: boolean;
  onClick?: () => void;
};
