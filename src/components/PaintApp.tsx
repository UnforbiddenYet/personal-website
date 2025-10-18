import usePaintCanvas, { type PaintTool } from "../hooks/useCanvasDraw";
import photo from '../assets/dmytro-pixelated.png'
import pencil from '../assets/pencil.png'
import spray from '../assets/spray.png'
import eraser from '../assets/eraser.png';

import './PaintApp.css';

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
const tools: [PaintTool, string][] = [
  ['paint', pencil],
  ['spray', spray],
  ['erase', eraser],
]

export function PaintApp() {
  const paintCanvasProps = usePaintCanvas({ color: "#000", lineWidth: 4 });

  return (
    <>
      <div className="paint-body">
        <aside className="toolbar">
          <div className="separator"></div>
          {tools.map(([tool, imgSrc]) => (
            <div key={tool} className={`tool-icon ${paintCanvasProps.isToolActive(tool) ? 'active' : ''}`} onClick={() => paintCanvasProps.setTool(tool)}>
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
            <button key={c} className="color-swatch" style={{ backgroundColor: c }} onClick={() => paintCanvasProps.setColor(c)}></button>
          ))}
        </div>
      </footer>
    </>
  )
}