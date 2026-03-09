import textDocument from './assets/text-document.ico';
import myDocuments from './assets/my-documents.ico';
import phoneDesk from './assets/phone-desk.ico';
import internet from './assets/the-internet.ico';
import paint from './assets/paint.ico';
import kodakImage from './assets/kodak-image.ico';
import { WindowIDs, type WindowConfig } from './components/types';

const WINDOW_PAINT_CONFIG = {
  title: 'Masterpiece - Paint',
  icon: paint,
  id: WindowIDs.paint,
  width: 768,
  height: 600,
} satisfies WindowConfig;

const WINDOW_ABOUT_ME_CONFIG = {
  title: 'About Me',
  icon: internet,
  id: WindowIDs.about,
  width: 768,
  height: 750,
} satisfies WindowConfig

const WINDOW_BLOG_CONFIG = {
  title: 'My Writing',
  icon: textDocument,
  id: WindowIDs.blog,
  width: 600,
  height: 500,
} satisfies WindowConfig

const WINDOW_CONTACT_CONFIG = {
  title: 'Contact Me',
  icon: phoneDesk,
  id: WindowIDs.contact,
  width: 500,
  height: 600,
} satisfies WindowConfig

const WINDOW_WEB_STUFF_CONFIG = {
  title: 'Collection (in progress)',
  icon: myDocuments,
  id: WindowIDs.webStuff,
  width: 600,
  height: 500,
} satisfies WindowConfig

const WINDOW_IMAGE_VIEWER_CONFIG = {
  title: 'Image viewer',
  icon: kodakImage,
  id: WindowIDs.imageViewer,
  // width: 400,
  // height: 254,
} satisfies WindowConfig

export const DESKTOP_SHORTCUTS = [
  WINDOW_PAINT_CONFIG,
  WINDOW_ABOUT_ME_CONFIG,
  WINDOW_WEB_STUFF_CONFIG,
  WINDOW_CONTACT_CONFIG,
  WINDOW_BLOG_CONFIG,
]

export const getImageViewerBaseConfig = () => WINDOW_IMAGE_VIEWER_CONFIG