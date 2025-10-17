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

let highestZindex = 0;

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
  const [openWindowIds, setOpenWindowIds] = useState<Array<WindowID>>([WindowIDs.about, WindowIDs.contact])
  const [activeWindowId, setActiveWindowId] = useState(openWindowIds.at(-1));
  const openWindows = openWindowIds.map(id => WindowConfigsMap[id]);

  const openDialog = (id: WindowID) => {
    const newWindowIds = [...openWindowIds, id];
    if (!openWindowIds.includes(id)) {
      setOpenWindowIds(newWindowIds)
    }
    setActiveWindowId(id)
  }

  const closeDialog = (id: WindowID) => {
    const newWindowIds = openWindowIds.filter(openId => openId !== id)
    setOpenWindowIds(newWindowIds)
    setActiveWindowId(newWindowIds.at(-1))
  }

  return (
    <div className="desktop">
      <div className="desktop-shortcuts">
        {Object.values(WindowConfigsMap).map(config => (
          <button onClick={() => openDialog(config.id)}>
            <img src={config.icon} width={40} />
            <span>{config.title}</span>
          </button>
        ))}
      </div>
      {!!activeWindowId && <dialog className="window-dialog" id={activeWindowId} open>
        {activeWindowId === WindowIDs.about &&
          <Window
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
                  closeDialog(activeWindowId)
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
        }
        {activeWindowId === WindowIDs.blog && (
          <Window
            title="Blog"
            controls={[
              {
                icon: 'X',
                label: 'Close',
                onClick: () => {
                  closeDialog(activeWindowId)
                }
              }
            ]}
            menu={[]}
          >blog</Window>
        )}
        {activeWindowId === WindowIDs.contact && (
          <Window
            title="Contact Me"
            controls={[
              {
                icon: 'X',
                label: 'Close',
                onClick: () => {
                  closeDialog(activeWindowId)
                }
              }
            ]}
            menu={[]}
          >Contact Me</Window>
        )}
        {activeWindowId === WindowIDs.projects && (
          <Window
            title="projects"
            controls={[
              {
                icon: 'X',
                label: 'Close',
                onClick: () => {
                  closeDialog(activeWindowId)
                }
              }
            ]}
            menu={[]}
          >projects</Window>
        )}
        {activeWindowId === WindowIDs.stuff && (
          <Window
            title="stuff"
            controls={[
              {
                icon: 'X',
                label: 'Close',
                onClick: () => {
                  closeDialog(activeWindowId)
                }
              }
            ]}
            menu={[]}
          >stuff</Window>
        )}
      </dialog>
      }

      <Taskbar openWindows={openWindows} activeWindowId={activeWindowId} onClick={openDialog} />
    </div>
  )
}