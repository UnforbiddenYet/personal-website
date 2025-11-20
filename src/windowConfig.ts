import textDocument from './assets/text-document.ico';
import myDocuments from './assets/my-documents.ico';
import phoneDesk from './assets/phone-desk.ico';
import internet from './assets/the-internet.ico';
import paint from './assets/paint.ico';
import kodakImage from './assets/kodak-image.ico';
import tree from './assets/tree.ico';
import { WindowIDs, type GenericWindowConfig, type ImageViewerWindowConfig, type WindowID } from './components/types';

const WINDOW_PAINT_CONFIG = {
  title: 'untitled - Paint',
  icon: paint,
  id: WindowIDs.paint,
  width: 900,
  height: 600,
} satisfies GenericWindowConfig;

const WINDOW_ABOUT_ME_CONFIG = {
  title: 'About Me',
  icon: internet,
  id: WindowIDs.about,
  width: 850,
  height: 750,
} satisfies GenericWindowConfig

const WINDOW_BLOG_CONFIG = {
  title: 'My Writing',
  icon: textDocument,
  id: WindowIDs.blog,
  width: 600,
  height: 500,
} satisfies GenericWindowConfig

const WINDOW_CONTACT_CONFIG = {
  title: 'Contact Me',
  icon: phoneDesk,
  id: WindowIDs.contact,
  width: 500,
  height: 450,
} satisfies GenericWindowConfig

const WINDOW_WEB_STUFF_CONFIG = {
  title: 'My Favorite Web links',
  icon: myDocuments,
  id: WindowIDs.webStuff,
  width: 600,
  height: 500,
} satisfies GenericWindowConfig

const WINDOW_IMAGE_VIEWER_CONFIG = {
  title: 'Image viewer',
  icon: kodakImage,
  id: WindowIDs.imageViewer,
  // width: 400,
  // height: 254,
} satisfies GenericWindowConfig

const MTV_IMAGE_WINDOW_CONFIG = {
  ...WINDOW_IMAGE_VIEWER_CONFIG,
  data: {
    imageUrl: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDI2MHkxbGltZnBlanpkNjUzYjVmb3h1dXY3bTJic2ZmY3ZwMjEwMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K4ppHUZTYKJYk/giphy.gif',
  }
} satisfies ImageViewerWindowConfig

const WINDOW_FILE_EXPLORER_CONFIG = {
  title: 'File Explorer',
  icon: tree,
  id: WindowIDs.fileExplorer,
  width: 800,
  height: 600,
} satisfies GenericWindowConfig

export const DESKTOP_SHORTCUTS = [
  WINDOW_PAINT_CONFIG,
  WINDOW_ABOUT_ME_CONFIG,
  WINDOW_WEB_STUFF_CONFIG,
  WINDOW_CONTACT_CONFIG,
  MTV_IMAGE_WINDOW_CONFIG,
  WINDOW_BLOG_CONFIG,
  WINDOW_FILE_EXPLORER_CONFIG,
]

export const getImageViewerBaseConfig = () => WINDOW_IMAGE_VIEWER_CONFIG