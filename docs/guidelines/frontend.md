# Frontend Guidelines (React + TypeScript + Vite)

## Project Layout

```
src/frontend/
├── public/                  # Static assets (favicon, robots.txt)
├── src/
│   ├── app/                 # App shell, router, global providers, config.ts
│   ├── features/            # Feature folders (colocate component, hook, types, tests)
│   │   └── timeline/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── api.ts       # API calls for this feature (add when backend exists)
│   │       └── types.ts
│   ├── shared/              # Reusable UI primitives, utilities, shared types
│   ├── api/                 # Base API client (add when backend exists)
│   └── main.tsx             # Entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Naming Conventions

| Artifact            | Pattern                    | Example                    |
|---------------------|----------------------------|----------------------------|
| Component file      | PascalCase `.tsx`          | `TimelineCard.tsx`         |
| Hook file           | `use` + PascalCase `.ts`   | `useBottomNav.ts`          |
| Utility file        | camelCase `.ts`            | `formatDate.ts`            |
| Type / Interface    | PascalCase                 | `TimelineEvent`, `Contact` |
| CSS module          | camelCase `.module.css`    | `timelineCard.module.css`  |

## Component Structure

- One component per file.
- Export the component as a named export (not default).
- Keep components small; extract logic into custom hooks.
- Prefer function components with hooks — no class components.

## State Management

- Local UI state: `useState` / `useReducer`.
- Server state (fetching, caching, mutations): **TanStack Query** (React Query) — add when a backend exists.
- Global client state (if needed): **Zustand** — avoid Redux unless complexity warrants it.

## TypeScript

- `strict: true` is required in `tsconfig.json`.
- Avoid `any`; use `unknown` + type guards when the shape is truly unknown.
- Prefer `interface` for object shapes, `type` for unions and mapped types.

## Testing

- Framework: **Vitest** + **React Testing Library**
- Test files live alongside the code they test: `TimelineCard.test.tsx`.
- Test behavior, not implementation — query by accessible roles/text, not CSS classes.
- Do not test internal state directly; interact through the rendered UI.
