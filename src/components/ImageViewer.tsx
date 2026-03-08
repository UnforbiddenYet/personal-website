import { useState } from 'react';
import styles from './ImageViewer.module.css';

interface ImageViewerProps {
  imageUrl?: string;
}

export function ImageViewer({ imageUrl }: ImageViewerProps) {
  const [error, setError] = useState(false);

  if (!imageUrl) {
    return (
      <div className={styles.imageViewerEmpty}>
        <p>No image URL provided</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.imageViewerError}>
        <p>Failed to load image</p>
        <p className={styles.imageUrl}>{imageUrl}</p>
      </div>
    );
  }

  return (
    <div className={styles.imageViewer}>
      <img
        src={imageUrl}
        alt="Viewed image"
        onError={() => setError(true)}
      />
    </div>
  );
}
