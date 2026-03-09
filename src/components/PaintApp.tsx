import usePaintCanvas, { type PaintTool } from "../hooks/useCanvasDraw";
import pencil from "../assets/tool_pencil.png";
import spray from "../assets/tool_spray.png";
import eraser from "../assets/tool_eraser.png";
import image from "../assets/tool_image.png";
import text from "../assets/tool_text.png";
import monaLisa from "../assets/mona-lisa.png";

import styles from "./PaintApp.module.css";

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
  ["paint", pencil],
  ["spray", spray],
  ["erase", eraser],
  ["text", text],
  ["image", image],
];

export function PaintApp() {
  const paintCanvasProps = usePaintCanvas({
    color: "#000",
    lineWidth: 4,
    defaultImage: monaLisa,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      paintCanvasProps.insertImage(file);
    }
  };

  const handleToolClick = (tool: PaintTool) => {
    paintCanvasProps.setTool(tool);
  };

  return (
    <>
      <div className={styles.paintBody}>
        <aside className={styles.toolbar}>
          <hr />
          {tools.map(([tool, imgSrc]) => (
            <button
              key={tool}
              className={styles.toolButton}
              aria-pressed={paintCanvasProps.isToolActive(tool)}
              onClick={() => handleToolClick(tool)}
              title={
                tool === "text"
                  ? "Add Text (A)"
                  : tool === "image"
                    ? "Insert Image"
                    : tool
              }
            >
              <img className={styles.toolButtonImg} src={imgSrc} alt={tool} />
            </button>
          ))}
        </aside>

        <main
          className={styles.canvas}
          {...{
            onMouseDown: paintCanvasProps.startDrawing,
            onMouseUp: paintCanvasProps.finishDrawing,
            onMouseMove: paintCanvasProps.draw,
            onMouseLeave: paintCanvasProps.finishDrawing,
          }}
        >
          <canvas
            className={styles.paintCanvas}
            {...{
              ref: paintCanvasProps.ref,
            }}
          />
        </main>
      </div>

      <footer className={styles.colorPalette}>
        <div className={styles.colorSelected}>
          <div
            className={styles.colorSwatch}
            style={{ backgroundColor: paintCanvasProps.activeColor }}
          ></div>
        </div>
        <div className={styles.colorSwatches}>
          {colors.map((c) => (
            <button
              key={c}
              className={styles.colorSwatch}
              style={{ backgroundColor: c }}
              onClick={() => paintCanvasProps.setColor(c)}
            ></button>
          ))}
        </div>
      </footer>

      {/* Hidden file input for image insertion */}
      <input
        ref={paintCanvasProps.fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </>
  );
}
