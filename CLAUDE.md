# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**The Wedding Keepsake** — a React SPA for the wedding of Celina & Mark.  
July 4, 2026 · Ceremony: Schloss Oldenburg · Reception: Gleispark  
No backend yet — pure frontend SPA for now. A backend may be introduced later.

## Stack (planned — scaffold not yet created)

- React + TypeScript (strict), Vite
- Tailwind CSS with the Veridian Heirloom custom theme
- React Router v6
- TanStack Query for server state, Zustand for global client state if needed
- Vitest + React Testing Library

## Commands (once scaffold exists at `src/frontend/`)

```bash
cd src/frontend
npm run dev          # start dev server
npm run build        # production build
npm run typecheck    # tsc --noEmit
npm run test         # vitest run
npm run test:watch   # vitest
npm run test -- TaskList   # run a single test file by name pattern
npm run lint         # eslint .
npm run format:check # prettier --check .
```

## Architecture

```
src/frontend/src/
├── app/          # App.tsx, router.tsx, global providers, config.ts (wedding constants)
├── features/     # One folder per page: home, details, timeline, people, fun
│   └── <name>/
│       ├── components/   # Page-specific components
│       ├── hooks/        # Feature hooks
│       ├── api.ts        # Data access for this feature
│       └── types.ts
├── shared/       # Reusable primitives (TopBar, BottomNav, Card, Button…)
└── main.tsx
```

All wedding content constants (names, date, venues) live in `src/app/config.ts`.

## Design System — Veridian Heirloom

Full spec: [`docs/mockup/veridian_heirloom/DESIGN.md`](docs/mockup/veridian_heirloom/DESIGN.md)  
UI mockups (HTML prototypes): [`docs/mockup/`](docs/mockup/)

Key rules that differ from conventional web UI:

- **No borders for sectioning.** Use background-color shifts (`surface` → `surface-container-low`) instead.
- **No box-shadows.** Use tonal layering (white card on cream background) for elevation.
- **No pure black.** Use `primary` (`#1b3022`) or `tertiary` (`#211500`) instead.
- **Glassmorphism for floating elements:** `bg-surface/80 backdrop-blur-[20px]`.
- **Asymmetric layouts** are intentional — elements are balanced, not mirrored.

Core tokens:

| Token | Value | Use |
|---|---|---|
| `primary` | `#1b3022` | Deep Forest Green — key interactive elements, headlines |
| `secondary` | `#51634f` | Sage Green — icons, supportive elements |
| `tertiary` | `#e9c176` | Shimmering Gold — high-impact accents, applied sparingly |
| `surface` | `#fbf9f4` | Base "paper" background |
| `surface-low` | `#f5f3ee` | Section separators |
| `surface-high` | `#e4e2dd` | Callouts |

Fonts: **Noto Serif** for all display/headline/emotional copy · **Manrope** for body/labels/logistics.

## Working with Claude

### When to use plan mode

Use `/plan` for any change touching more than one file or involving non-trivial logic. Single-line fixes are the only exception.

### Plan workflow

1. Clarify → 2. Create branch → 3. Plan mode → 4. Implement → 5. Archive plan  
Details: [`.claude/skills/plan/SKILL.md`](.claude/skills/plan/SKILL.md)

Completed plans are archived in `docs/plans/NNNN-<slug>.md`.

### Definition of done

Build passes + all tests pass + `eslint` + `prettier --check` clean.

### Scope discipline

Implement exactly what was asked. Flag adjacent issues explicitly rather than fixing them silently. Prefer small, focused changes — confirm direction after each step on large tasks.

## Git

- Branch from `main`: `<type>/<description>` — e.g. `feat/home-page`, `fix/bottom-nav-active-state`
- Conventional Commits: `feat(home): add hero section`, `fix(nav): correct active route highlight`
- Commit body explains *why*, not what
- Squash-merge PRs only · 1 approval required · `main` is protected

## Domain context

Update [`docs/context.md`](docs/context.md) when a new domain concept is introduced. Keep entries factual and minimal.
