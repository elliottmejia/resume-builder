# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start Vite dev server
npm run host     # Start dev server with network access (--host)
npm run build    # TypeScript check + Vite production build
npm run lint     # ESLint with zero warnings threshold
npm run preview  # Preview production build
```

## Architecture

This is a React + TypeScript resume builder application using Vite, deployed on Vercel.

### Key Directories

- `src/data/` - Resume content data (`data.ts`) and TypeScript types (`types.ts`)
- `src/components/resume/` - Web display components (Sidebar, Experience, Info, Skills)
- `src/components/resume-pdf/` - PDF generation using `@react-pdf/renderer`
- `src/components/ui/` - Radix UI-based primitives (menubar, toast, dialog, etc.)
- `src/components/taskbar/` - Top navigation with Share, Download, Print, Edit controls
- `src/lib/` - Utilities including `cn()` for Tailwind class merging

### Path Aliases

Configured in both `tsconfig.json` and `vite.config.ts`:
- `src/*`, `components/*`, `ui/*`, `data/*`, `lib/*`, `assets`

### Dual Rendering System

The resume renders in two ways:
1. **Web view** - React components in `components/resume/` for browser display and `react-to-print`
2. **PDF download** - `@react-pdf/renderer` components in `components/resume-pdf/` generate downloadable PDF

Both systems consume the same data from `src/data/data.ts`.

### Environment Modes

- `isProd()` / `isDev()` / `isTest()` utilities in `lib/utils.ts`
- Print and Edit features hidden in production (`!isProd()` checks in taskbar)
- Environment files stored in `./env` directory
