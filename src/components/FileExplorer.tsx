import { useState } from 'react';
import './FileExplorer.css';

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
    [key: string]: any;
  };
}

export interface FileExplorerProps {
  items: FileItem[];
  onNavigate?: (path: string[]) => void;
  showToolbar?: boolean;
  showStatusBar?: boolean;
}

export function FileExplorer({
  items,
  onNavigate,
  showToolbar = true,
  showStatusBar = true,
}: FileExplorerProps) {
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const viewMode = 'icons'; // Only icons view is currently implemented

  // Navigate through folder hierarchy
  const getCurrentItems = (): FileItem[] => {
    let current = items;
    for (const pathPart of currentPath) {
      const folder = current.find(item => item.name === pathPart && item.type === 'folder');
      if (folder?.children) {
        current = folder.children;
      }
    }
    return current;
  };

  const handleItemDoubleClick = (item: FileItem) => {
    if (item.type === 'folder') {
      const newPath = [...currentPath, item.name];
      setCurrentPath(newPath);
      setSelectedItems(new Set());
      onNavigate?.(newPath);
    }
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
    <div className="win95-explorer">
      {showToolbar && (
        <div className="explorer-toolbar">
          <button
            className="toolbar-button"
            onClick={goBack}
            disabled={currentPath.length === 0}
            title="Up"
          >
            ↑
          </button>
          <div className="toolbar-separator"></div>
          <div className="address-bar">
            <span className="address-label">Address:</span>
            <div className="address-path">
              C:\{currentPath.join('\\')}
            </div>
          </div>
        </div>
      )}

      <div className="explorer-content">
        {viewMode === 'icons' ? (
          <div className="explorer-icons-view">
            {currentItems.map(item => (
              <div
                key={item.id}
                className={`explorer-item ${selectedItems.has(item.id) ? 'selected' : ''}`}
                onClick={(e) => handleItemClick(item, e.ctrlKey || e.metaKey)}
                onDoubleClick={() => handleItemDoubleClick(item)}
              >
                <div className="explorer-item-icon">
                  <img src={getDefaultIcon(item)} width={32} alt="" />
                </div>
                <div className="explorer-item-name">{item.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="explorer-list-view">
            {/* List view implementation */}
          </div>
        )}
      </div>

      {showStatusBar && (
        <div className="explorer-status-bar">
          <div className="status-section">
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
