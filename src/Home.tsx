import usePaintCanvas from "./hooks/useCanvasDraw";
import photo from './assets/dmytro-pixelated.png'
import pencil from './assets/pencil.png'
import spray from './assets/spray.png'
import eraser from './assets/eraser.png';
import jpegImage from './assets/jpeg-image.ico';
import myDocuments from './assets/my-documents.ico';
import textDocument from './assets/text-document.ico';

import './Home.css'
import { Taskbar } from "./components/Taskbar";
import { Window } from "./components/Window";
import { useMemo, useState } from "react";
import { WindowIDs, type WindowID } from "./components/types";
import { useWindowManager } from "./hooks/useWindowManager";

const WindowConfigsMap = {
  [WindowIDs.about]: {
    title: 'About Me',
    icon: textDocument,
    id: WindowIDs.about
  },
  [WindowIDs.blog]: {
    title: 'My Writings',
    icon: jpegImage,
    id: WindowIDs.blog
  },
  [WindowIDs.contact]: {
    title: 'Contact Me',
    icon: myDocuments,
    id: WindowIDs.contact
  },
  [WindowIDs.stuff]: {
    title: 'My Stuff',
    icon: textDocument,
    id: WindowIDs.stuff
  },
  [WindowIDs.projects]: {
    title: 'Projects',
    icon: textDocument,
    id: WindowIDs.projects
  },
}

export function Home() {
  const paintCanvasProps = usePaintCanvas({ color: "#000", lineWidth: 4 });
  const colors = [
    "#000",
    "#808080",
    "#800000",
    "#808000",
    "#008000",
    "#008080",
    "#000080",
    "#800080",
    "#fff",
    "#c0c0c0",
    "#ff0000",
    "#ffff00",
    "#00ff00",
    "#00ffff",
    "#0000ff",
    "#ff00ff",
  ];
  const tools = [
    ['paint', pencil],
    ['spray', spray],
    ['erase', eraser],
  ]
  // const [openWindowIds, setOpenWindowIds] = useState<Array<WindowID>>([WindowIDs.about, WindowIDs.contact])

  const windowManager = useWindowManager([{
    id: WindowIDs.about,
    width: 900,
    height: 600
  }, {
    id: WindowIDs.contact,
    width: 900,
    height: 600
  }]);
  const openWindows = windowManager.windows.map(c => WindowConfigsMap[c.id]);

  // const openDialog = (id: WindowID) => {
  //   const newWindowIds = [...openWindowIds, id];
  //   if (!openWindowIds.includes(id)) {
  //     setOpenWindowIds(newWindowIds)
  //   }
  //   setActiveWindowId(id)
  // }

  // const closeDialog = (id: WindowID) => {
  //   const newWindowIds = openWindowIds.filter(openId => openId !== id)
  //   setOpenWindowIds(newWindowIds)
  //   setActiveWindowId(newWindowIds.at(-1))
  // }

  return (
    <div className="desktop">
      <div className="desktop-shortcuts">
        {Object.values(WindowConfigsMap).map(config => (
          <button onClick={() => windowManager.openWindow({
            id: config.id,
            width: 900,
            height: 600
          })}>
            <img src={config.icon} width={40} />
            <span>{config.title}</span>
          </button>
        ))}
      </div>
      {windowManager.windows.map(window => {
        if (window.id === WindowIDs.about) return (
          <Window
            key={window.id}
            position={{ x: window.x, y: window.y, z: window.z, }}
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
            <>
              <div className="paint-body">
                <aside className="toolbar">
                  <div className="separator"></div>
                  {tools.map(([tool, imgSrc]) => (
                    <div className={`tool-icon ${paintCanvasProps.isToolActive(tool) ? 'active' : ''}`} onClick={() => paintCanvasProps.setTool(tool)}>
                      <img src={imgSrc} alt={tool} />
                    </div>
                  ))}
                </aside>

                <main className="canvas" {...{
                  onMouseDown: paintCanvasProps.startDrawing,
                  onMouseUp: paintCanvasProps.finishDrawing,
                  onMouseMove: paintCanvasProps.draw,
                  onMouseLeave: paintCanvasProps.finishDrawing, // Stop drawing if mouse leaves canvas
                }}>
                  <div className="content-canvas">
                    <h1>HELLO! I'M Dmytro.</h1>
                    <p>I'm awesome human being!</p>

                    <div className="pasted-image-container">
                      <img src={photo} alt="A pixelated self portrait of Dmytro." />
                    </div>

                    <div>
                      <small>Also, I build amazing apps!</small>
                      <button className="win95-button">
                        View My Work {"->"}
                      </button>
                    </div>
                  </div>
                  <canvas className="paint-canvas" {...{
                    ref: paintCanvasProps.ref,
                  }} />
                </main>
              </div>

              <footer className="color-palette">
                <div className="color-selected">
                  <div className="color-swatch" style={{ backgroundColor: paintCanvasProps.activeColor }}></div>
                </div>
                <div className="color-swatches">
                  {colors.map(c => (
                    <button className="color-swatch" style={{ backgroundColor: c }} onClick={() => paintCanvasProps.setColor(c)}></button>
                  ))}
                </div>
              </footer>
            </>
          </Window>
        )
        if (window.id === WindowIDs.blog) return (
          <Window
            key={window.id}
            position={{ x: window.x, y: window.y, z: window.z, }}
            title="Blog"
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
        if (window.id === WindowIDs.contact) return (
          <Window
            key={window.id}
            position={{ x: window.x, y: window.y, z: window.z, }}
            title="Contact Me"
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
          >Contact Me</Window>
        )
        if (window.id === WindowIDs.projects) return (
          <Window
            key={window.id}
            position={{ x: window.x, y: window.y, z: window.z, }}
            title="projects"
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
          >projects</Window>
        )
        if (window.id === WindowIDs.stuff) return (
          <Window
            key={window.id}
            position={{ x: window.x, y: window.y, z: window.z, }}
            title="stuff"
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
          >stuff</Window>
        )
      })}

      <Taskbar openWindows={openWindows} activeWindowId={windowManager.activeWindowId} onClick={windowManager.bringToFront} />
    </div>
  )
}