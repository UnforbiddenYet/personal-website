
import './Home.css'

import { WindowIDs } from "./components/types";

import { Taskbar } from "./components/Taskbar";
import { Window } from "./components/Window";
import { PaintApp } from './components/PaintApp';
import { AboutPage } from './components/AboutPage';
import { useWindowManager } from "./hooks/useWindowManager";
import { DESKTOP_SHORTCUTS, getWindowConfig } from './config';

import desktopGif from './assets/desktopCleanup.gif'

export function Home() {
  const windowManager = useWindowManager([getWindowConfig(WindowIDs.paint)]);
  const openWindows = windowManager.windows.map(c => getWindowConfig(c.id)).filter(Boolean);

  return (
    <div className="desktop">
      <div className="desktop-shortcuts">
        {DESKTOP_SHORTCUTS.map(config => (
          <button key={config.id} onClick={() => windowManager.openWindow({
            id: config.id,
            width: config.width,
            height: config.height
          })}>
            <img src={config.icon} width={40} />
            <span>{config.title}</span>
          </button>
        ))}
      </div>
      {windowManager.windows.map(window => {
        switch (window.id) {
          case WindowIDs.paint:
            return (
              <Window
                key={window.id}
                position={{ x: window.x, y: window.y, z: window.z, }}
                width={window.width}
                height={window.height}
                title={getWindowConfig(window.id).title}
                controls={[
                  {
                    icon: '_',
                    label: 'Minimize',
                  },
                  {
                    icon: '□',
                    label: 'Maximize',
                    disabled: true,
                    onClick: () => {
                      alert('Bye')
                    }
                  },
                  {
                    icon: 'X',
                    label: 'Close',
                    onClick: () => {
                      windowManager.closeWindow(window.id)
                    }
                  }
                ]}
                menu={[
                  {
                    title: 'New',
                  },
                  {
                    title: 'Edit',
                    disabled: true,
                  },
                  // {
                  //   title: 'View',
                  // },
                  // {
                  //   title: 'Help',
                  // },
                ]}
              >
                <PaintApp />
              </Window>
            )
          case WindowIDs.about:
            return (
              <Window
                key={window.id}
                position={{ x: window.x, y: window.y, z: window.z, }}
                width={window.width}
                height={window.height}
                title={getWindowConfig(window.id).title}
                controls={[
                  {
                    icon: 'X',
                    label: 'Close',
                    onClick: () => {
                      windowManager.closeWindow(window.id)
                    }
                  }
                ]}
                menu={[]}
              >
                <AboutPage />
              </Window>
            )
          case WindowIDs.imageViewer:
            return (
              <Window
                key={window.id}
                position={{ x: window.x, y: window.y, z: window.z, }}
                width={window.width}
                height={window.height}
                title={getWindowConfig(window.id).title}
                controls={[
                  {
                    icon: 'X',
                    label: 'Close',
                    onClick: () => {
                      windowManager.closeWindow(window.id)
                    }
                  }
                ]}
                menu={[]}
              >
                <img src={desktopGif} />
              </Window>
            )

          default:
            return (
              <Window
                key={window.id}
                position={{ x: window.x, y: window.y, z: window.z, }}
                width={window.width}
                height={window.height}
                title={getWindowConfig(window.id).title}
                controls={[
                  {
                    icon: 'X',
                    label: 'Close',
                    onClick: () => {
                      windowManager.closeWindow(window.id)
                    }
                  }
                ]}
                menu={[]}
              >UNDER CONSTRUCTION</Window>
            )
        }
      })}

      <Taskbar openWindows={openWindows} activeWindowId={windowManager.activeWindowId} onClick={windowManager.bringToFront} />
    </div>
  )
}