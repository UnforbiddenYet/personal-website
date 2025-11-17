import { useRef } from 'react';
import usePaintCanvas, { type PaintTool } from "../hooks/useCanvasDraw";
import pencil from '../assets/pencil.png'
import spray from '../assets/spray.png'
import eraser from '../assets/eraser.png';
import monaLisa from '../assets/mona-lisa.png';
import textIcon from '../assets/text-document.ico';
import imageIcon from '../assets/jpeg-image.ico';

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
  ['text', textIcon],
  ['image', imageIcon],
]

export function PaintApp() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const paintCanvasProps = usePaintCanvas({
    color: "#000",
    lineWidth: 4,
    defaultImage: monaLisa,
    defaultText: "I'm awesome"
  });

  const handleImageInsert = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      paintCanvasProps.insertImage(file);
    }
  };

  const handleToolClick = (tool: PaintTool) => {
    paintCanvasProps.setTool(tool);
    if (tool === 'image') {
      handleImageInsert();
    }
  };

  return (
    <>
      <div className="paint-body">
        <aside className="toolbar">
          <div className="separator"></div>
          {tools.map(([tool, imgSrc]) => (
            <div
              key={tool}
              className={`tool-icon ${paintCanvasProps.isToolActive(tool) ? 'active' : ''}`}
              onClick={() => handleToolClick(tool)}
              title={tool === 'text' ? 'Add Text (A)' : tool === 'image' ? 'Insert Image' : tool}
            >
              <img src={imgSrc} alt={tool} />
            </div>
          ))}
        </aside>

        <main className="canvas" {...{
          onMouseDown: paintCanvasProps.startDrawing,
          onMouseUp: paintCanvasProps.finishDrawing,
          onMouseMove: paintCanvasProps.draw,
          onMouseLeave: paintCanvasProps.finishDrawing,
        }}>
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

      {/* Hidden file input for image insertion */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </>
  )
}