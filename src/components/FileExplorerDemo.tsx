import { FileExplorer, type FileItem } from './FileExplorer';

// Sample Windows 95 style file system
const sampleFiles: FileItem[] = [
  {
    id: 'ProgFiles',
    name: 'Program Files',
    type: 'folder',
    children: [
      {
        id: 'office',
        name: 'Microsoft Office',
        type: 'folder',
        children: [
          { id: 'word', name: 'WINWORD.EXE', type: 'file', size: 2048000 },
          { id: 'excel', name: 'EXCEL.EXE', type: 'file', size: 1536000 },
        ],
      },
      {
        id: 'netscape',
        name: 'Netscape',
        type: 'folder',
        children: [
          { id: 'nav', name: 'Netscape.exe', type: 'file', size: 3072000 },
        ],
      },
    ],
  },
  {
    id: 'windows',
    name: 'Windows',
    type: 'folder',
    children: [
      { id: 'notepad', name: 'notepad.exe', type: 'file', size: 51200 },
      { id: 'calc', name: 'calc.exe', type: 'file', size: 112640 },
      {
        id: 'system',
        name: 'System',
        type: 'folder',
        children: [
          { id: 'dll1', name: 'kernel32.dll', type: 'file', size: 409600 },
        ],
      },
    ],
  },
  {
    id: 'mydocs',
    name: 'My Documents',
    type: 'folder',
    children: [
      { id: 'readme', name: 'readme.txt', type: 'file', size: 1024 },
      { id: 'letter', name: 'letter.doc', type: 'file', size: 24576 },
      {
        id: 'photos',
        name: 'Photos',
        type: 'folder',
        children: [
          { id: 'photo1', name: 'vacation.jpg', type: 'file', size: 512000 },
          { id: 'photo2', name: 'family.jpg', type: 'file', size: 478000 },
        ],
      },
    ],
  },
  { id: 'autoexec', name: 'autoexec.bat', type: 'file', size: 256 },
  { id: 'config', name: 'config.sys', type: 'file', size: 128 },
];

export function FileExplorerDemo() {
  const handleNavigate = (path: string[]) => {
    console.log('Navigated to:', path);
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <FileExplorer
        items={sampleFiles}
        onNavigate={handleNavigate}
        showToolbar={true}
        showStatusBar={true}
      />
    </div>
  );
}
