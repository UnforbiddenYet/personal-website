import { useState } from 'react';
import './ImageViewer.css';

interface ImageViewerProps {
  imageUrl?: string;
}

export function ImageViewer({ imageUrl }: ImageViewerProps) {
  const [error, setError] = useState(false);

  if (!imageUrl) {
    return (
      <div className="image-viewer-empty">
        <p>No image URL provided</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="image-viewer-error">
        <p>Failed to load image</p>
        <p className="image-url">{imageUrl}</p>
      </div>
    );
  }

  return (
    <div className="image-viewer">
      <img
        src={imageUrl}
        alt="Viewed image"
        onError={() => setError(true)}
      />
    </div>
  );
}
