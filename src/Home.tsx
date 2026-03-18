import { useState } from "react";
import { Taskbar } from "./components/Taskbar";

import { DESKTOP_SHORTCUTS } from "./windowConfig";
import { useWindowManagerContext } from "./contexts/WindowManagerContext";
import { TaskbarInfo } from "./components/TaskbarInfo";
import { ActiveWindows } from "./components/ActiveWindows";

import styles from "./Home.module.css";

export function Home() {
  const windowManager = useWindowManagerContext();
  const openWindows = windowManager.windows.filter(Boolean);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.desktop} onMouseDown={() => windowManager.clearActiveWindow()}>
      <div className={styles.desktopShortcuts}>
        {DESKTOP_SHORTCUTS.map((windowConfig) => (
          <button
            key={windowConfig.id}
            onClick={() => {
              windowManager.openWindow(windowConfig);
            }}
          >
            <img src={windowConfig.icon} width={40} />
            <span>{windowConfig.title}</span>
          </button>
        ))}
      </div>

      <ActiveWindows />

      {showInfo && <TaskbarInfo onClose={() => setShowInfo(false)} />}

      <Taskbar
        openWindows={openWindows}
        activeWindowId={windowManager.activeWindowId}
        onClick={windowManager.bringToFront}
        onInfoClick={() => setShowInfo(true)}
      />
    </div>
  );
}
