---
status: Completed
created: 2026-04-18
updated: 2026-04-18
---

# Scaffold: Initial React App

## Context

Bootstrap the `src/frontend/` workspace with React 19 + TypeScript (strict) + Vite, fully wired with Tailwind CSS (Veridian Heirloom theme), ESLint 9 (flat config), Prettier, and Vitest. The result must pass `typecheck`, `lint`, `format:check`, `test`, and `build` out of the box. Feature pages get minimal stubs so routes work immediately.

Primary color confirmed as `#061b0e` (DESIGN.md value — CLAUDE.md had a stale value; fix CLAUDE.md too).

---

## Files Created

### Tooling / Config
| File | Purpose |
|---|---|
| `src/frontend/package.json` | Scripts + all deps |
| `src/frontend/vite.config.ts` | Vite + Vitest (jsdom) |
| `src/frontend/tsconfig.json` | `strict: true`, path alias `@/` → `src/` |
| `src/frontend/tsconfig.node.json` | For Vite config file itself |
| `src/frontend/tailwind.config.ts` | Veridian Heirloom tokens + Google Fonts content paths |
| `src/frontend/postcss.config.cjs` | Tailwind + autoprefixer |
| `src/frontend/eslint.config.js` | ESLint 9 flat config (excludes `**/*.cjs`) |
| `src/frontend/.prettierrc` | Prettier rules |
| `src/frontend/.prettierignore` | Exclude build artifacts |
| `src/frontend/src/test-setup.ts` | Import `@testing-library/jest-dom` |

### HTML Entry
| File | Purpose |
|---|---|
| `src/frontend/index.html` | Loads Google Fonts (Noto Serif, Manrope), mounts `#root` |
| `src/frontend/public/robots.txt` | Minimal placeholder |

### App Shell
| File | Purpose |
|---|---|
| `src/frontend/src/main.tsx` | React root + StrictMode |
| `src/frontend/src/index.css` | Tailwind directives |
| `src/frontend/src/app/App.tsx` | `QueryClientProvider` + `RouterProvider` |
| `src/frontend/src/app/App.test.tsx` | Smoke test — renders without crashing |
| `src/frontend/src/app/router.tsx` | 5 routes wired to feature stubs |
| `src/frontend/src/app/config.ts` | Wedding constants (couple names, date, venues) |

### Feature Stubs
- `src/frontend/src/features/home/HomePage.tsx`
- `src/frontend/src/features/details/DetailsPage.tsx`
- `src/frontend/src/features/timeline/TimelinePage.tsx`
- `src/frontend/src/features/people/PeoplePage.tsx`
- `src/frontend/src/features/fun/FunPage.tsx`

### Shared Placeholder
- `src/frontend/src/shared/.gitkeep`

### Fixed
- `CLAUDE.md` — primary color corrected from `#1b3022` to `#061b0e`

---

## Key Decisions

- **`QueryClientProvider` in `App.tsx`** (not `main.tsx`) so tests can render `<App />` directly without extra wrapper setup.
- **ESLint ignores `**/*.cjs`** — `postcss.config.cjs` uses CommonJS `module.exports` which fails ESLint's `no-undef` in ESM mode.
- **`tsconfig.json` types** include `vitest/globals` and `@testing-library/jest-dom` so test globals and matchers are typed without explicit imports.
- **`import { defineConfig } from 'vitest/config'`** in vite.config.ts merges Vite and Vitest types cleanly.

---

## Verification Results

| Check | Result |
|---|---|
| `typecheck` | ✅ zero errors |
| `lint` | ✅ zero warnings |
| `format:check` | ✅ all files match |
| `test` | ✅ 1 test passed |
| `build` | ✅ dist produced cleanly |

PR: https://github.com/MarkJungeblut/our-wedding-journey/pull/2
Branch: `feat/frontend-scaffold`
