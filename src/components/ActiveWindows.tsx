import type { ReactNode } from "react";
import { Window } from "../components/Window";
import { PaintApp } from "../components/PaintApp";
import { AboutPage } from "../components/AboutPage";
import { ContactPage } from "../components/ContactPage";
import { WebLinksPage } from "../components/WebLinksPage";
import { UnderConstruction } from "../components/UnderConstruction";
import { ImageViewer } from "../components/ImageViewer";
import { useWindowManagerContext } from "../contexts/WindowManagerContext";

import type {
  WindowControlType,
  WindowID,
  AnyWindowState,
} from "../components/types";
import { WindowIDs } from "../components/types";

interface WindowConfig {
  controls?: ("close" | "minimize")[];
  menu?: { title: string; disabled?: boolean; onClick?: () => void }[];
}

const windowConfigs: Partial<Record<WindowID, WindowConfig>> = {
  [WindowIDs.paint]: {
    controls: ["minimize", "close"],
    menu: [
      { title: "File", disabled: true },
      { title: "Edit", disabled: true },
      { title: "View", disabled: true },
      { title: "Help", disabled: true },
    ],
  },
};

function renderWindowContent(window: AnyWindowState): ReactNode {
  switch (window.id) {
    case WindowIDs.paint:
      return <PaintApp />;
    case WindowIDs.about:
      return <AboutPage />;
    case WindowIDs.imageViewer:
      return <ImageViewer imageUrl={window.data?.imageUrl} />;
    case WindowIDs.contact:
      return <ContactPage />;
    case WindowIDs.webStuff:
      return <WebLinksPage />;
    default:
      return <UnderConstruction />;
  }
}

function makeCloseControl(cb: () => void) {
  return {
    icon: "X",
    label: "Close",
    cursor: "pointer",
    onClick: cb,
  };
}

function makeMinimizeControl(cb: () => void) {
  return {
    icon: "_",
    label: "Minimize",
    cursor: "pointer",
    onClick: cb,
  };
}

export function ActiveWindows() {
  const windowManager = useWindowManagerContext();

  return (
    <>
      {windowManager.visibleWindows.map((window) => {
        const config = windowConfigs[window.id];

        function buildControls(): WindowControlType[] {
          return (config?.controls ?? ["close"]).map((control) => {
            if (control === "minimize")
              return makeMinimizeControl(() =>
                windowManager.bringToTray(window.id),
              );
            return makeCloseControl(() => windowManager.closeWindow(window.id));
          });
        }

        const windowProps = {
          position: { x: window.x, y: window.y, z: window.z },
          width: window.width,
          height: window.height,
          title: window.title,
          icon: window.icon,
          menu: config?.menu ?? [],
          controls: buildControls(),
          onTitleBarMouseDown: () => windowManager.bringToFront(window.id),
        };

        return <Window key={window.id} {...windowProps}>{renderWindowContent(window)}</Window>;
      })}
    </>
  );
}
