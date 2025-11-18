
import './Home.css'

import { WindowIDs } from "./components/types";

import { Taskbar } from "./components/Taskbar";
import { Window } from "./components/Window";
import { PaintApp } from './components/PaintApp';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { WebLinksPage } from './components/WebLinksPage';
import { UnderConstruction } from './components/UnderConstruction';
import { ImageViewer } from './components/ImageViewer';
import { useWindowManager } from "./hooks/useWindowManager";
import { DESKTOP_SHORTCUTS, getWindowConfig } from './windowConfig';

export function Home() {
  const windowManager = useWindowManager([getWindowConfig(WindowIDs.paint)]);
  const openWindows = windowManager.windows.map(c => getWindowConfig(c.id)).filter(Boolean);

  return (
    <div className="desktop">
      <div className="desktop-shortcuts">
        {DESKTOP_SHORTCUTS.map(windowConfig => (
          <button key={windowConfig.id} onClick={() => {
            windowManager.openWindow(windowConfig);
          }}>
            <img src={windowConfig.icon} width={40} />
            <span>{windowConfig.title}</span>
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
                icon={getWindowConfig(window.id).icon}
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
                    title: 'File',
                  },
                  {
                    title: 'Edit',
                    disabled: true,
                  },
                  {
                    title: 'View',
                  },
                  {
                    title: 'Help',
                  },
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
                icon={getWindowConfig(window.id).icon}
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
                icon={getWindowConfig(window.id).icon}
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
                <ImageViewer imageUrl={window.data?.imageUrl} />
              </Window>
            )
          case WindowIDs.contact:
            return (
              <Window
                key={window.id}
                position={{ x: window.x, y: window.y, z: window.z, }}
                width={window.width}
                height={window.height}
                title={getWindowConfig(window.id).title}
                icon={getWindowConfig(window.id).icon}
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
                <ContactPage />
              </Window>
            )
          case WindowIDs.webStuff:
            return (
              <Window
                key={window.id}
                position={{ x: window.x, y: window.y, z: window.z, }}
                width={window.width}
                height={window.height}
                title={getWindowConfig(window.id).title}
                icon={getWindowConfig(window.id).icon}
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
                <WebLinksPage />
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
                icon={getWindowConfig(window.id).icon}
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
                <UnderConstruction />
              </Window>
            )
        }
      })}

      <Taskbar openWindows={openWindows} activeWindowId={windowManager.activeWindowId} onClick={windowManager.bringToFront} />
    </div>
  )
}