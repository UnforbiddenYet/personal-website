import jpegImage from './assets/jpeg-image.ico';
import myDocuments from './assets/my-documents.ico';
import textDocument from './assets/text-document.ico';
import { WindowIDs, type WindowConfig, type WindowID} from './components/types';

const WINDOW_PAINT_CONFIG: WindowConfig = {
  title: 'Paint',
  icon: textDocument,
  id: WindowIDs.paint,
  width: 900,
  height: 600,
}

const WINDOW_ABOUT_ME_CONFIG: WindowConfig = {
  title: 'About Me',
  icon: textDocument,
  id: WindowIDs.about,
  width: 800,
  height: 700,
}

const WINDOW_BLOG_CONFIG: WindowConfig = {
  title: 'Blog - My Writings',
  icon: jpegImage,
  id: WindowIDs.blog,
  width: 600,
  height: 500,
}

const WINDOW_CONTACT_CONFIG: WindowConfig = {
  title: 'Contact Me',
  icon: myDocuments,
  id: WindowIDs.contact,
  width: 400,
  height: 300,
}

export const DESKTOP_SHORTCUTS = [
  WINDOW_PAINT_CONFIG,
  WINDOW_ABOUT_ME_CONFIG,
  WINDOW_BLOG_CONFIG,
  WINDOW_CONTACT_CONFIG,
]

export const WINDOW_CONFIGS_BY_ID: Record<WindowID, WindowConfig> = {
  [WindowIDs.paint]: WINDOW_PAINT_CONFIG,
  [WindowIDs.about]: WINDOW_ABOUT_ME_CONFIG,
  [WindowIDs.blog]: WINDOW_BLOG_CONFIG,
  [WindowIDs.contact]: WINDOW_CONTACT_CONFIG,
}

// Type-safe function to get window config
export function getWindowConfig(windowId: WindowID): WindowConfig {
  return WINDOW_CONFIGS_BY_ID[windowId];
}
