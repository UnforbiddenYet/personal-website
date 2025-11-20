# FileExplorer Component

A pixel-perfect Windows 95 File Explorer replica with toolbar, address bar, icon grid view, and status bar.

## Features

- ✓ Authentic Windows 95 styling
- ✓ Toolbar with navigation buttons
- ✓ Address bar showing current path
- ✓ Grid-based icon view
- ✓ Multi-select with Ctrl/Cmd click
- ✓ Double-click to navigate folders
- ✓ Status bar with file count and size
- ✓ Nested folder navigation
- ✓ Automatic icon detection based on file extension

## Usage

### Basic Example

```tsx
import { FileExplorer, type FileItem } from './components/FileExplorer';

const myFiles: FileItem[] = [
  {
    id: 'folder1',
    name: 'My Documents',
    type: 'folder',
    children: [
      { id: 'file1', name: 'readme.txt', type: 'file', size: 1024 },
      { id: 'file2', name: 'notes.md', type: 'file', size: 2048 },
    ],
  },
  { id: 'file3', name: 'image.jpg', type: 'file', size: 512000 },
];

function MyComponent() {
  const handleNavigate = (path: string[]) => {
    console.log('Current path:', path.join('\\'));
  };

  return (
    <FileExplorer
      items={myFiles}
      onNavigate={handleNavigate}
      showToolbar={true}
      showStatusBar={true}
    />
  );
}
```

### Without Toolbar/Status Bar

```tsx
<FileExplorer
  items={myFiles}
  showToolbar={false}
  showStatusBar={false}
/>
```

### Custom Icons

```tsx
const filesWithCustomIcons: FileItem[] = [
  {
    id: 'special-folder',
    name: 'My Special Folder',
    type: 'folder',
    icon: '⭐',  // Custom icon
    children: [
      {
        id: 'important-file',
        name: 'important.txt',
        type: 'file',
        icon: '📌',  // Custom icon
      },
    ],
  },
];
```

### With Metadata

```tsx
const filesWithMetadata: FileItem[] = [
  {
    id: 'file1',
    name: 'document.pdf',
    type: 'file',
    metadata: {
      size: '2.5 MB',
      date: '2025-01-15',
      author: 'Dmytro',
    },
  },
];
```

## Props

### FileExplorerProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `FileItem[]` | Required | Array of files and folders to display |
| `onNavigate` | `(path: string[]) => void` | Optional | Called when navigating to a folder |
| `showToolbar` | `boolean` | `true` | Whether to show the toolbar |
| `showStatusBar` | `boolean` | `true` | Whether to show the status bar |

### FileItem Interface

```typescript
interface FileItem {
  id: string;                    // Unique identifier
  name: string;                  // Display name
  type: 'file' | 'folder';      // Item type
  icon?: string;                 // Optional custom icon (emoji or image)
  children?: FileItem[];         // Nested items (for folders)
  size?: number;                 // File size in bytes
  metadata?: {                   // Optional metadata
    [key: string]: any;
  };
}
```

## Automatic Icons

The component automatically assigns icons based on file extensions:

- **Documents**: `.txt`, `.md`, `.doc`, `.docx` → 📄
- **Images**: `.jpg`, `.jpeg`, `.png`, `.gif` → 🖼️
- **Music**: `.mp3`, `.wav`, `.flac` → 🎵
- **Videos**: `.mp4`, `.avi`, `.mov` → 🎬
- **Folders**: Closed 📁 / Open 📂

## Navigation

The FileExplorer maintains its own navigation state. Double-click a folder to navigate into it, and click the "Up" button in the toolbar to go back to the parent directory.

The address bar displays the current path in Windows 95 style (e.g., `C:\Program Files\Microsoft Office`).

## Integration with Window Component

```tsx
import { Window } from './components/Window';
import { FileExplorer } from './components/FileExplorer';

function MyApp() {
  return (
    <Window
      title="My Files"
      icon="📁"
      width={400}
      height={600}
    >
      <FileExplorer
        items={myFiles}
        onItemDoubleClick={handleOpen}
      />
    </Window>
  );
}
```

## Use Cases

- **Notes Manager**: Organize markdown notes in folders
- **Music Library**: Browse music by albums and playlists
- **Image Gallery**: Navigate image collections
- **Project Files**: Manage code projects and files
- **Bookmarks**: Organize web links in categories
- **Document Archive**: Browse and open documents

## Styling

The component uses Windows 95 styling matching the rest of the site. All styles are in `FileExplorer.css` and can be customized:

```css
.file-explorer {
  /* Main container styles */
}

.tree-item-label:hover {
  background-color: #000080;  /* Windows 95 blue highlight */
  color: #ffffff;
}
```

## Demo

See `FileExplorerDemo.tsx` for a demo with a sample Windows 95-style file system including:
- Program Files folder
- Windows folder with system files
- My Documents with photos
- System files (autoexec.bat, config.sys)

The demo is integrated as a desktop shortcut in the main application.
