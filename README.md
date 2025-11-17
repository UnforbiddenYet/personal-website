This is a personal portfolio website designed to look like a Windows 95 desktop environment. It's a creative, nostalgic recreation of the classic Windows 95 UI, serving as an interactive personal website for Dmytro Lubenets, a Software Engineer.

## Technologies & Frameworks

Core Stack:
- React 19.1.1 - Latest React with modern hooks
- TypeScript 5.9.3 - Full type safety throughout
- Vite 7.1.7 - Build tool and dev server with HMR (Hot Module Replacement)
- CSS Modules - For component-scoped styling

Development Tools:
- ESLint with React plugins for code quality
- TypeScript ESLint for type-aware linting
- Strict TypeScript configuration with full type checking

No External UI Libraries - Everything is built from scratch with custom CSS to achieve the Windows 95
aesthetic.

## Main Features & Sections

The website simulates a Windows 95 desktop with the following applications/windows:

Available Desktop Applications:
1. Paint App (/Users/dmytro/Code/my-site/src/components/PaintApp.tsx)
  - Working HTML5 canvas drawing tool
  - Multiple tools: pencil, spray paint, eraser
  - 16-color classic Windows palette
  - Custom pixel-art content overlay (Mona Lisa image, text)
  - Real drawing functionality with different brush modes
2. About Me (/Users/dmytro/Code/my-site/src/components/AboutPage.tsx)
  - Professional background (10+ years experience, frontend engineer)
  - Personal story and portfolio section
  - Contact buttons (mail, coffee)
  - Visitor counter (static for now)
  - Badge/achievement display
3. Image Viewer
  - Displays a desktop cleanup GIF
  - Simple image display window
4. My Favorite Web Links (placeholder)
  - Currently shows "UNDER CONSTRUCTION"
5. Contact Me (placeholder)
  - Currently shows "UNDER CONSTRUCTION"
6. Blog (commented out in config)
  - Not currently available on desktop

Core UI Components:
- Desktop - Teal background with clickable shortcut icons
- Taskbar - Bottom taskbar with open window buttons and live clock
- Window Manager - Draggable, closable windows with cascade positioning
- Windows 95-style buttons and controls

## Overall Structure & Architecture

Key Design Patterns:

1. Custom Hooks for State Management:
  - useWindowManager - Handles window lifecycle, positioning, z-index, focus management
  - useCanvasDraw - Encapsulates canvas drawing logic with tool selection
2. Configuration-Driven UI:
  - /Users/dmytro/Code/my-site/src/config.ts defines all window configurations
  - Type-safe window IDs using TypeScript const assertions
  - Centralized window properties (title, icon, dimensions)
3. Component Composition:
  - Generic Window component wraps all applications
  - Props for title bar controls, menu items, positioning
  - Children rendered as window content
4. State Management:
  - Pure React hooks (no Redux/Zustand)
  - Window state managed centrally in Home component
  - Each window tracks: id, x, y, z-index, width, height

## Content & Themes

Theme: Windows 95 Nostalgia
- Pixel-perfect recreation of Windows 95 UI elements
- Classic teal desktop background (#008080)
- Authentic gray windows (#c0c0c0)
- MS Sans Serif font for UI
- Silkscreen font for canvas content
- Vintage icons from actual Windows 95 era

Content Focus:
- Personal branding for Dmytro Lubenets
- Software Engineer portfolio
- Interactive, playful presentation
- Professional experience (10+ years, frontend focus, Y Combinator background)
- Current interests: Cloud-native systems, DevOps
- Personal journey: Ukraine → Toronto → Paris

Personality Elements:
- Creative, tinkerer mindset
- Web technology enthusiast
- Open to Co-Founder Engineer opportunities in DefenseTech, ClimateTech sectors
- Values: honesty, kindness, fairness

## Notable Design Patterns & Implementations

1. Window Management System (/Users/dmytro/Code/my-site/src/hooks/useWindowManager.ts)
- Sophisticated z-index management using refs to avoid re-renders
- Cascade window positioning with wrapping after 4 windows
- Centered window placement calculations
- Active window tracking
- Prevents duplicate windows from opening

2. Canvas Drawing Implementation (/Users/dmytro/Code/my-site/src/hooks/useCanvasDraw.ts)
- High-DPI screen support (device pixel ratio scaling)
- Multiple drawing tools with different composite operations
- Spray paint effect using random dot distribution
- Eraser using 'destination-out' composite mode
- Proper event handling (mouseDown, mouseMove, mouseUp, mouseLeave)

3. CSS Architecture:
- Mix of regular CSS and CSS Modules
- Nested CSS syntax (modern CSS features)
- Pixel-perfect Windows 95 styling with inset/outset borders
- Active state animations simulating button presses
- Authentic color palette (#c0c0c0, #808080, #000080, etc.)

4. Font Loading:
- Custom @font-face for MS Sans Serif authentic Windows font
- Google Fonts for Silkscreen (pixel-style font)
- CSS variables for font families

5. Type Safety:
- Strict TypeScript throughout
- Type-safe window IDs using const assertions
- Proper React props typing with PropsWithChildren
- No any types

6. Performance Optimizations:
- useCallback for expensive operations (window management)
- Refs for values that shouldn't trigger re-renders
- Minimal re-renders in window management

7. Interactive Desktop:
- Clickable desktop shortcuts that open windows
- Live taskbar clock updated every second
- Active window highlighting in taskbar
- Window focus management on click

## Project Status

In Progress/Planned (from .TODO.md):
- Setup Wizard on startup
- Under construction GIF
- Win95 scrollbars
- Blog section (currently commented out)
- Web links section
- Contact functionality
