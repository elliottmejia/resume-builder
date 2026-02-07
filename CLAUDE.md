# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal resume website for Elliott Mejia — a React 18 SPA built with Vite and TypeScript, using React Router for variant-based routing. No backend, no global state library. Deployed on Vercel as a static site.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run host` — Dev server with network access (--host)
- `npm run build` — TypeScript check + Vite production build
- `npm run lint` — ESLint with zero warnings threshold
- `npm run preview` — Preview production build

No test suite is configured.

## Architecture

### Data-Driven Rendering

All resume content lives in `src/data/data.ts` with types in `src/data/types.ts`. To update resume content, edit `data.ts` — components render from these exports: `infoData`, `experienceData`, `skillsData`, `eduData`, `certData`. A `resumeConfig` map keyed by variant name holds per-variant data; `DEFAULT_VARIANT` controls the fallback.

### Routing

React Router serves variant-based routes (`/:variant`). The root `/` redirects to `/${DEFAULT_VARIANT}`. `ResumeView` reads the variant param and looks up data in `resumeConfig`.

### Component Organization

Feature-based folders under `src/components/`:
- `resume/` — Main resume layout: `resume-container/`, `sidebar/` (info + skills), `experience/` (cards + container), `bottom/` (education & certs), `cutout/`
- `taskbar/` — Top menubar with share/download/print/edit actions
- `modals/mail/` + `forms/mail-form/` — Contact form (uses web3forms via `VITE_MAIL_KEY` env var from `./env/`)
- `ui/` — shadcn/ui components (New York style, slate base color)
- `styling/` — Decorative elements (loading screen, screentone)

Each component folder uses `index.ts` barrel exports.

### Path Aliases

Configured in both `tsconfig.json` and `vite.config.ts`:
- `src/*`, `components/*`, `ui/*`, `data/*`, `assets/*`, `lib/*`

### Dual Rendering System

The resume renders in two ways:
1. **Web view** — React components in `components/resume/` for browser display and `react-to-print`
2. **PDF download** — `@react-pdf/renderer` components in `components/resume-pdf/` generate downloadable PDF

Both systems consume the same data from `src/data/data.ts`.

### Print System

Critical feature — uses `react-to-print` with a ref on `ResumeContainer`. Print CSS hides interactive/decorative elements and optimizes for 8.5" paper. Always test CSS changes against print output.

### Styling

Tailwind CSS with HSL CSS custom properties for theming. Extensive use of CSS `clip-path` polygons for geometric "cut corner" aesthetic. Dark mode via class strategy. Custom `print:` screen breakpoint in Tailwind config.

### iOS/Browser Handling

iOS detection disables clip-path rendering due to compatibility issues. Clipboard API has iOS-specific fallback in `src/lib/clipboardFunctions.ts`. Agent-specific CSS classes are applied.

### Dev-Only Features

Edit mode toggle stored in localStorage — only available in development. Some UI elements (print button) hidden in production. Environment helpers: `isProd()`, `isDev()`, `isTest()` in `src/lib/utils.ts`. Environment files stored in `./env` directory.

## Key Conventions

- TypeScript strict mode is **off**
- `@typescript-eslint/no-explicit-any` is disabled
- shadcn/ui pattern for UI primitives (Radix UI underneath)
- Iconify (`@iconify/react`) for icons
- Font loading uses a custom hook with a loading screen gate
