import usePaintCanvas from "./hooks/useCanvasDraw";
import photo from './assets/dmytro-pixelated.png'

import './Home.css'

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
    'paint',
    'spray',
    'erase'
  ]

  return (
    <div className="paint-window">
      <header className="title-bar">
        <div className="title-text">Dmytro's website - Paint</div>
        <div className="window-controls">
          <button aria-label="Minimize">_</button>
          <button aria-label="Maximize">□</button>
          <button aria-label="Close">X</button>
        </div>
      </header>

      <nav className="menu-bar">
        <ul>
          <li><a href="#"><u>F</u>ile</a></li>
          <li><a href="#"><u>E</u>dit</a></li>
          <li><a href="#"><u>V</u>iew</a></li>
          <li><a href="#"><u>H</u>elp</a></li>
        </ul>
      </nav>

      <div className="paint-body">
        <aside className="toolbar">
          <div className="separator"></div>
          {tools.map(tool => (
            <div className={`tool-icon ${paintCanvasProps.isToolActive(tool) ? 'active' : ''}`} onClick={() => paintCanvasProps.setTool(tool)}>{tool}</div>
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
    </div>
  )
}