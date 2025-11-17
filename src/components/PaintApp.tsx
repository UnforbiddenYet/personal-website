import usePaintCanvas, { type PaintTool } from "../hooks/useCanvasDraw";
import pencil from '../assets/pencil.png'
import spray from '../assets/spray.png'
import eraser from '../assets/eraser.png';
import monaLisa from '../assets/mona-lisa.png';

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
            <div style={{ display: 'flex'}}>
            <div className="pasted-image-container">
              <img src={monaLisa} alt="Mona Lisa" />
            </div>

            {/* <div className="pasted-image-container">
              <img src={msagent} alt="A man" />
            </div> */}
            </div>

            <p>I'm awesome</p>

            
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