// src/usePaintCanvas.js

import { useRef, useEffect, useState, useCallback } from 'react';

export type PaintTool = 'spray' | 'paint' | 'erase' | 'text' | 'image'

const usePaintCanvas = (options: {
  color?: string,
  lineWidth?: number,
  defaultImage?: string,
  defaultText?: string
}) => {
  const { lineWidth = 5, defaultImage, defaultText } = options;

  const [tool, setTool] = useState<PaintTool>('paint');
  const [color, setColor] = useState<string>(options.color || '#000000');
  const [textInput, setTextInput] = useState<string>('');
  const [fontSize, setFontSize] = useState<number>(24);
  const [pendingImagePosition, setPendingImagePosition] = useState<{ x: number; y: number } | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Effect for initializing the canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isInitialized) return;

    // Adjust for high-DPI screens to make lines sharp
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.scale(dpr, dpr);
    context.lineCap = 'round';
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    contextRef.current = context;

    // Draw default content
    if (defaultImage) {
      const img = new Image();
      img.onload = () => {
        // Maintain aspect ratio
        const maxWidth = 150;
        const maxHeight = 200;
        let width = img.width;
        let height = img.height;

        // Scale down if too large while maintaining aspect ratio
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }

        context.drawImage(img, 10, 10, width, height);

        // Draw default text after image loads
        if (defaultText) {
          context.font = '24px "Silkscreen", monospace';
          context.fillStyle = '#000000';
          context.fillText(defaultText, 10, 20 + height);
        }

        setIsInitialized(true);
      };
      img.src = defaultImage;
    } else if (defaultText) {
      context.font = '24px "Silkscreen", monospace';
      context.fillStyle = '#000000';
      context.fillText(defaultText, 10, 30);
      setIsInitialized(true);
    } else {
      setIsInitialized(true);
    }
  }, [defaultImage, defaultText, isInitialized]);

  // Effect for updating drawing settings when they change
  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = color;
      contextRef.current.lineWidth = lineWidth;
      // Set the composite operation based on the tool
      contextRef.current.globalCompositeOperation = tool === 'erase' ? 'destination-out' : 'source-over';
    }
  }, [color, lineWidth, tool]);

  const startDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current;
    if (!context) return;

    // Handle text tool
    if (tool === 'text') {
      const text = prompt('Enter text to add:');
      if (text) {
        context.save();
        context.font = `${fontSize}px "Silkscreen", monospace`;
        context.fillStyle = color;
        context.fillText(text, offsetX, offsetY);
        context.restore();
      }
      return;
    }

    // Handle image tool
    if (tool === 'image') {
      // Store the click position and trigger file input
      setPendingImagePosition({ x: offsetX, y: offsetY });
      fileInputRef.current?.click();
      return;
    }

    // Handle drawing tools
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    if (contextRef.current) {
      contextRef.current.closePath();
      setIsDrawing(false);
    }
  };

  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    // Text and image tools don't use continuous drawing
    if (tool === 'text' || tool === 'image') return;

    if (!isDrawing) return;

    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current;
    if (!context) return;

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
      context.fillStyle = '#fff';
      context.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    }
  };

  const insertImage = useCallback((imageFile: File) => {
    const context = contextRef.current;
    if (!context) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Draw image at a reasonable size
        const maxWidth = 200;
        const maxHeight = 200;
        let width = img.width;
        let height = img.height;

        // Scale down if too large
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }

        // Use pending position if available, otherwise center
        let x, y;
        if (pendingImagePosition) {
          x = pendingImagePosition.x;
          y = pendingImagePosition.y;
          setPendingImagePosition(null); // Clear after use
        } else {
          x = (canvasRef.current!.offsetWidth - width) / 2;
          y = (canvasRef.current!.offsetHeight - height) / 2;
        }

        context.drawImage(img, x, y, width, height);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(imageFile);
  }, [pendingImagePosition]);

  const addText = useCallback((text: string, x: number, y: number) => {
    const context = contextRef.current;
    if (!context) return;

    context.save();
    context.font = `${fontSize}px "Silkscreen", monospace`;
    context.fillStyle = color;
    context.fillText(text, x, y);
    context.restore();
  }, [color, fontSize]);

  return {
    ref: canvasRef,
    fileInputRef,
    finishDrawing,
    startDrawing,
    draw,
    clearCanvas,
    insertImage,
    addText,
    isToolActive: (t: PaintTool) => t === tool,
    setTool,
    setColor,
    activeColor: color,
    textInput,
    setTextInput,
    fontSize,
    setFontSize,
  };
};

export default usePaintCanvas;