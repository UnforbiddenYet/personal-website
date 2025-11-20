# Dmytro Lubenets - Personal Website 🖥️

A creative personal portfolio website designed to look like a Windows 95-98 desktop environment. This nostalgic recreation of the classic Windows 95-98 UI serves as an interactive showcase for Dmytro Lubenets, a Software Engineer with 10+ years of experience.

## 🎨 Features

- **Authentic Windows 95 UI** - Pixel-perfect recreation with classic gray windows, title bars, and buttons
- **Interactive Desktop** - Clickable shortcut icons that open draggable, resizable windows
- **Functional Paint App** - Working MS Paint clone with pencil, spray paint, and eraser tools
- **Multi-Window Management** - Open multiple windows with proper z-index and focus management
- **Win95 Scrollbars** - Custom-styled scrollbars matching the Windows 95 aesthetic
- **Responsive Taskbar** - Live clock and active window tracking
- **Multiple Pages**:
  - **About Me** - Professional background, story, values, and achievements
  - **Contact** - Get in touch via email, LinkedIn, GitHub
  - **Web Links** - Curated collection of useful resources
  - **Paint App** - Interactive drawing canvas
  - **Image Viewer** - Display images in a classic viewer window

## 🛠️ Tech Stack

**Core Technologies:**
- **React 19.1.1** - Latest React with modern hooks
- **TypeScript 5.9.3** - Full type safety throughout
- **Vite 7.1.7** - Lightning-fast build tool and dev server
- **CSS Modules** - Component-scoped styling

**Development Tools:**
- ESLint with React plugins for code quality
- TypeScript ESLint for type-aware linting
- Strict TypeScript configuration with full type checking

**Design Philosophy:**
- No external UI libraries - Everything built from scratch
- Authentic Windows 95 color palette (#c0c0c0, #008080, #000080, etc.)
- MS Sans Serif font for UI authenticity
- Pixel-perfect borders and shadows

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd my-site

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development
The development server runs on `http://localhost:5173` with hot module replacement (HMR) enabled.

## 📦 Project Structure

```
my-site/
├── src/
│   ├── components/         # React components
│   │   ├── Window.tsx      # Reusable window container
│   │   ├── Taskbar.tsx     # Bottom taskbar with clock
│   │   ├── PaintApp.tsx    # MS Paint clone
│   │   ├── AboutPage.tsx   # About me content
│   │   ├── ContactPage.tsx # Contact information
│   │   ├── WebLinksPage.tsx # Web links collection
│   │   └── UnderConstruction.tsx # Placeholder component
│   ├── hooks/              # Custom React hooks
│   │   ├── useWindowManager.ts # Window state management
│   │   └── useCanvasDraw.ts   # Canvas drawing logic
│   ├── assets/             # Icons, images, fonts
│   ├── config.ts           # Window configurations
│   ├── types.ts            # TypeScript type definitions
│   ├── Home.tsx            # Main desktop layout
│   └── App.tsx             # Root component
├── public/                 # Static assets
├── netlify.toml           # Netlify deployment config
└── package.json           # Project dependencies
```

## 🏗️ Architecture

**Key Design Patterns:**

1. **Custom Hooks for State Management**
   - `useWindowManager` - Window lifecycle, positioning, z-index, focus management
   - `useCanvasDraw` - Canvas drawing logic with tool selection

2. **Configuration-Driven UI**
   - `config.ts` defines all window configurations
   - Type-safe window IDs using TypeScript const assertions
   - Centralized window properties (title, icon, dimensions)

3. **Component Composition**
   - Generic `Window` component wraps all applications
   - Props for title bar controls, menu items, positioning
   - Children rendered as window content

4. **Pure React State Management**
   - No Redux/Zustand - just React hooks
   - Window state managed centrally in Home component
   - Each window tracks: id, x, y, z-index, width, height

## 🚀 Deployment

This project is configured for easy deployment to multiple platforms:

### Deploy to Netlify

1. **Via Netlify UI:**
   ```bash
   # Build the project
   npm run build

   # Deploy dist folder to Netlify
   ```
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Configuration file: `netlify.toml` (already included)

2. **Via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### Environment Variables

No environment variables required for basic deployment. Update meta tags in `index.html` with your domain name for production.

## 🔧 Customization

### Updating Content

- **About Page:** Edit `/src/components/AboutPage.tsx`
- **Contact Info:** Edit `/src/components/ContactPage.tsx`
- **Web Links:** Edit `/src/components/WebLinksPage.tsx`
- **Window Configurations:** Edit `/src/config.ts`

### Adding New Windows

1. Create a new component in `/src/components/`
2. Add window configuration to `/src/config.ts`
3. Add window ID to `/src/components/types.ts`
4. Add case in `/src/Home.tsx` switch statement

### Styling

- Global styles: `/src/App.css`
- Component styles: Individual `.module.css` or `.css` files
- Win95 colors defined in CSS using exact hex codes

## 🎯 Notable Features & Implementation

### Window Management System
- Sophisticated z-index management using refs to avoid re-renders
- Cascade window positioning with wrapping after 4 windows
- Centered window placement calculations
- Active window tracking
- Prevents duplicate windows from opening

### Canvas Drawing Implementation
- High-DPI screen support (device pixel ratio scaling)
- Multiple drawing tools with different composite operations
- Spray paint effect using random dot distribution
- Eraser using 'destination-out' composite mode
- Proper event handling (mouseDown, mouseMove, mouseUp, mouseLeave)

### Windows 95 Scrollbars
- Custom-styled scrollbars with authentic Win95 appearance
- Raised/sunken button states
- Arrow icons on scroll buttons
- Proper hover and active states

### CSS Architecture
- Mix of regular CSS and CSS Modules
- Nested CSS syntax (modern CSS features)
- Pixel-perfect Windows 95 styling with inset/outset borders
- Active state animations simulating button presses
- Authentic color palette (#c0c0c0, #808080, #000080, etc.)

## 📝 License

This is a personal portfolio website. Feel free to use the code as inspiration for your own projects!

## 👤 About the Developer

**Dmytro Lubenets** - Software Engineer with 10+ years of experience

- 🌍 Currently based in Paris, France
- 💼 Open to Founding Engineer opportunities
- 🛠️ Specialties: TypeScript, React, Node.js, Cloud-Native DevOps
- 🎨 Passionate about web technologies and creative coding

### Connect with Me

- 📧 Email: dmytro.lubenets@gmail.com
- 💼 LinkedIn: [linkedin.com/in/dmytrolubenets](https://www.linkedin.com/in/dmytrolubenets/)
- 💻 GitHub: [github.com/dmytrolubenets](https://github.com/dmytrolubenets)

## 🙏 Acknowledgments

- Windows 95 for the nostalgic inspiration
- React and Vite teams for excellent developer tools
- The web development community for continuous learning

---

**Built with ❤️ and nostalgia for the 90s**
