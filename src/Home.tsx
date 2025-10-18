
import './Home.css'

import { WindowIDs } from "./components/types";

import { Taskbar } from "./components/Taskbar";
import { Window } from "./components/Window";
import { PaintApp } from './components/PaintApp';
import { useWindowManager } from "./hooks/useWindowManager";
import { DESKTOP_SHORTCUTS, getWindowConfig } from './config';

export function Home() {
  const windowManager = useWindowManager([getWindowConfig(WindowIDs.paint)]);
  const openWindows = windowManager.windows.map(c => getWindowConfig(c.id));

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
        if (window.id === WindowIDs.paint) return (
          <Window
            key={window.id}
            position={{ x: window.x, y: window.y, z: window.z, }}
            width={window.width}
            height={window.height}
            title="Dmytro's website - Painttt"
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
        if ([WindowIDs.blog, WindowIDs.contact, WindowIDs.about].includes(window.id)) return (
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
          >blog</Window>
        )
      })}

      <Taskbar openWindows={openWindows} activeWindowId={windowManager.activeWindowId} onClick={windowManager.bringToFront} />
    </div>
  )
}