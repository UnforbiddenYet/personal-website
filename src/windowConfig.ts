import textDocument from './assets/text-document.ico';
import myDocuments from './assets/my-documents.ico';
import phoneDesk from './assets/phone-desk.ico';
import internet from './assets/the-internet.ico';
import paint from './assets/paint.ico';
import kodakImage from './assets/kodak-image.ico';
import { WindowIDs, type WindowConfig, type WindowID } from './components/types';

const WINDOW_PAINT_CONFIG: WindowConfig = {
  title: 'untitled - Paint',
  icon: paint,
  id: WindowIDs.paint,
  width: 900,
  height: 600,
}

const WINDOW_ABOUT_ME_CONFIG: WindowConfig = {
  title: 'About Me',
  icon: internet,
  id: WindowIDs.about,
  width: 850,
  height: 750,
}

const WINDOW_BLOG_CONFIG: WindowConfig = {
  title: 'My Writing',
  icon: textDocument,
  id: WindowIDs.blog,
  width: 600,
  height: 500,
}

const WINDOW_CONTACT_CONFIG: WindowConfig = {
  title: 'Contact Me',
  icon: phoneDesk,
  id: WindowIDs.contact,
  width: 500,
  height: 450,
}

const WINDOW_WEB_STUFF_CONFIG: WindowConfig = {
  title: 'My Favorite Web links',
  icon: myDocuments,
  id: WindowIDs.webStuff,
  width: 600,
  height: 500,
}

const WINDOW_IMAGE_VIEWER_CONFIG: WindowConfig = {
  title: 'Image viewer',
  icon: kodakImage,
  id: WindowIDs.imageViewer,
  // width: 400,
  // height: 254,
}

const MTV_IMAGE_WINDOW_CONFIG: WindowConfig = {
  ...WINDOW_IMAGE_VIEWER_CONFIG,
  data: {
    imageUrl: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDI2MHkxbGltZnBlanpkNjUzYjVmb3h1dXY3bTJic2ZmY3ZwMjEwMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K4ppHUZTYKJYk/giphy.gif',
  }
}

export const DESKTOP_SHORTCUTS = [
  WINDOW_PAINT_CONFIG,
  WINDOW_ABOUT_ME_CONFIG,
  WINDOW_WEB_STUFF_CONFIG,
  WINDOW_CONTACT_CONFIG,
  MTV_IMAGE_WINDOW_CONFIG,
  WINDOW_BLOG_CONFIG,
]

const WINDOW_CONFIGS_BY_ID: Record<WindowID, WindowConfig> = {
  [WindowIDs.paint]: WINDOW_PAINT_CONFIG,
  [WindowIDs.about]: WINDOW_ABOUT_ME_CONFIG,
  [WindowIDs.blog]: WINDOW_BLOG_CONFIG,
  [WindowIDs.contact]: WINDOW_CONTACT_CONFIG,
  [WindowIDs.webStuff]: WINDOW_WEB_STUFF_CONFIG,
  [WindowIDs.imageViewer]: WINDOW_IMAGE_VIEWER_CONFIG,
}

// Type-safe function to get window config
export function getWindowConfig(windowId: WindowID): WindowConfig {
  return WINDOW_CONFIGS_BY_ID[windowId];
}
