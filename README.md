# Revanth Madasu — Portfolio

A modern, animated developer portfolio built with Vite, React 19, TypeScript and Tailwind CSS v4.

## Features

- ⚡️ **Vite 6 + React 19 + TypeScript** — fast, modern SPA
- 🎨 **Tailwind CSS v4** with CSS-variable design tokens
- 🌗 **Day / night theme** toggle (persisted, respects system preference)
- 🪟 **Glassmorphism** UI with an animated aurora background
- 🎬 **Framer Motion** page transitions, scroll reveals and shared-layout project modals
- 🧩 Content-driven — everything lives in typed files under `src/data/`

## Requirements

- **Node 18+** (developed on Node 22). If you use `nvm`: `nvm use 22`.

## Scripts

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:5173
npm run build   # type-check + production build to dist/
npm run preview # preview the production build
```

## Structure

```
src/
  components/   reusable UI (NavBar, AuroraBackground, ThemeToggle, SkillBadge …)
  data/         typed content (profile, skills, experience, projects, nav)
  lib/          helpers (rich-text renderer, skill-icon resolver)
  pages/        Home, Skills, Experience, Projects
  theme/        ThemeProvider (day/night)
  assets/       skill-icon SVGs
```

## Editing content

- **Profile / about / stats** — `src/data/profile.ts`
- **Skills & HackerRank badges** — `src/data/skills.ts`
- **Experience** — `src/data/experience.ts`
- **Projects** — `src/data/projects.ts`

Inline emphasis in text supports `{{highlight}}`, `{***text=Label;type=bold***}`
and `{***text=Label;type=link;link=https://…***}`.

## Deploy

Builds to `dist/`. Configured for Google App Engine (`app.yaml`, `cloudbuild.yaml`).
