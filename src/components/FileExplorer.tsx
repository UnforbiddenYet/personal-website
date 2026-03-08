import { useState } from 'react';
import styles from './FileExplorer.module.css';

// Import Windows 98 icons
import folderIcon from '../assets/directory_closed.ico';
import documentIcon from '../assets/document.ico';
import imageIcon from '../assets/kodak-image.ico';
import audioIcon from '../assets/loudspeaker_rays.ico';
import videoIcon from '../assets/video_mk.ico';
import executableIcon from '../assets/settings_gear.ico';
export interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  icon?: string;
  children?: FileItem[];
  size?: number; // in bytes
  metadata?: {
    [key: string]: unknown;
  };
}

type ExtractNodes<T> = T extends (infer Item)[]
  ? Item | (Item extends { children: infer Children } ? ExtractNodes<Children> : never)
  : never;
export interface FileExplorerProps<T extends FileItem[]> {
  items: T;
  onFileItemOpen?: (item: ExtractNodes<T>) => void;
  onNavigate?: (path: string[]) => void;
  showToolbar?: boolean;
  showStatusBar?: boolean;
}

export const FileExplorer = <T extends FileItem[]>({
  items,
  onNavigate,
  onFileItemOpen,
  showToolbar = true,
  showStatusBar = true,
}: FileExplorerProps<T>) => {
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  // Navigate through folder hierarchy
  const getCurrentItems = (): ExtractNodes<T>[] => {
    let current = items as unknown as ExtractNodes<T>[];
    for (const pathPart of currentPath) {
      const folder = current.find(item => item.name === pathPart && item.type === 'folder');
      if (folder?.children) {
        current = folder.children as ExtractNodes<T>[];
      }
    }
    return current;
  };

  const handleItemDoubleClick = (item: ExtractNodes<T>) => {
    if (item.type === 'folder') {
      const newPath = [...currentPath, item.name];
      setCurrentPath(newPath);
      setSelectedItems(new Set());
      onNavigate?.(newPath);
    }
    onFileItemOpen?.(item);
  };

  const handleItemClick = (item: FileItem, isCtrlClick: boolean = false) => {
    if (isCtrlClick) {
      const newSelected = new Set(selectedItems);
      if (newSelected.has(item.id)) {
        newSelected.delete(item.id);
      } else {
        newSelected.add(item.id);
      }
      setSelectedItems(newSelected);
    } else {
      setSelectedItems(new Set([item.id]));
    }
  };

  const goUp = () => {
    if (currentPath.length > 0) {
      const newPath = currentPath.slice(0, -1);
      setCurrentPath(newPath);
      setSelectedItems(new Set());
      onNavigate?.(newPath);
    }
  };

  const goBack = () => {
    goUp();
  };

  const currentItems = getCurrentItems();
  const selectedCount = selectedItems.size;
  const totalSize = currentItems
    .filter(item => selectedItems.has(item.id))
    .reduce((sum, item) => sum + (item.size || 0), 0);

  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getDefaultIcon = (item: FileItem): string => {
    if (item.icon) return item.icon;

    if (item.type === 'folder') {
      return folderIcon;
    }

    const ext = item.name.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'txt':
      case 'md':
        return documentIcon;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return imageIcon;
      case 'mp3':
      case 'wav':
      case 'flac':
        return audioIcon;
      case 'mp4':
      case 'avi':
      case 'mov':
        return videoIcon;
      case 'exe':
      case 'bat':
        return executableIcon;
      default:
        return documentIcon;
    }
  };

  return (
    <div className={styles.win95Explorer}>
      {showToolbar && (
        <div className={styles.explorerToolbar}>
          <button
            className={styles.toolbarButton}
            onClick={goBack}
            disabled={currentPath.length === 0}
            title="Up"
          >
            ↑
          </button>
          <div className={styles.toolbarSeparator}></div>
          <div className={styles.addressBar}>
            <span className={styles.addressLabel}>Address:</span>
            <div className={styles.addressPath}>
              C:\{currentPath.join('\\')}
            </div>
          </div>
        </div>
      )}

      <div className={styles.explorerContent}>
        <div className={styles.explorerIconsView}>
          {currentItems.map(item => (
            <div
              key={item.id}
              className={`${styles.explorerItem} ${selectedItems.has(item.id) ? styles.selected : ''}`}
              onClick={(e) => handleItemClick(item, e.ctrlKey || e.metaKey)}
              onDoubleClick={() => handleItemDoubleClick(item)}
            >
              <div className={styles.explorerItemIcon}>
                <img src={getDefaultIcon(item)} width={32} alt="" />
              </div>
              <div className={styles.explorerItemName}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      {showStatusBar && (
        <div className={styles.explorerStatusBar}>
          <div className={styles.statusSection}>
            {selectedCount > 0 ? (
              <>
                {selectedCount} object(s) selected
                {totalSize > 0 && ` (${formatSize(totalSize)})`}
              </>
            ) : (
              `${currentItems.length} object(s)`
            )}
          </div>
        </div>
      )}
    </div>
  );
}
