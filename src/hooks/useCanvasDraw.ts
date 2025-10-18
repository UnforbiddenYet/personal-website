// src/usePaintCanvas.js

import { useRef, useEffect, useState } from 'react';

export type PaintTool = 'spray' | 'paint' | 'erase'

const usePaintCanvas = (options: {
  color?: string,
  lineWidth?: number
}) => {
  const { lineWidth = 5 } = options;

  const [tool, setTool] = useState<PaintTool>('paint');
  const [color, setColor] = useState<string>(options.color || '#000000');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Effect for initializing the canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Adjust for high-DPI screens to make lines sharp
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;

    const context = canvas.getContext('2d');
    context.scale(dpr, dpr);
    context.lineCap = 'round';
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    contextRef.current = context;
  }, []);

  // Effect for updating drawing settings when they change
  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = color;
      contextRef.current.lineWidth = lineWidth;
      // Set the composite operation based on the tool
      contextRef.current.globalCompositeOperation = tool === 'erase' ? 'destination-out' : 'source-over';
    }
  }, [color, lineWidth, tool]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    if (contextRef.current) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  };

  const finishDrawing = () => {
    if (contextRef.current) {
      contextRef.current.closePath();
      setIsDrawing(false);
    }
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;

    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current;

    if (tool === 'paint' || tool === 'erase') {
      context.lineTo(offsetX, offsetY);
      context.stroke();
    } else if (tool === 'spray') {
      // Spray effect: draw multiple small dots in a radius
      const sprayRadius = lineWidth * 2;
      for (let i = 0; i < 20; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * sprayRadius;
        const x = offsetX + distance * Math.cos(angle);
        const y = offsetY + distance * Math.sin(angle);
        context.fillStyle = color;
        context.fillRect(x, y, 1, 1);
      }
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (canvas && context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return {
    ref: canvasRef,
    finishDrawing,
    startDrawing,
    draw,
    clearCanvas,
    isToolActive: (t: PaintTool) => t === tool,
    setTool,
    setColor,
    activeColor: color,
  };
};

export default usePaintCanvas;