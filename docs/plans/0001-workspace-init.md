---
status: Completed
created: 2026-04-17
updated: 2026-04-17
---

# Plan: Commit workspace init to a branch and open PR

## Context

The workspace was just initialized with CLAUDE.md, Claude skills config, dev guidelines, design system mockups, and devcontainer config. None of this has been committed yet. The goal is to get it onto a proper branch (off `main`) and open a PR per the git workflow in `docs/guidelines/git-workflow.md`.

---

## Branch

```
chore/workspace-init
```

`chore/` is the right type — this is tooling/config/documentation setup, not a user-facing feature.

---

## Steps

### 1. Add `.gitignore`

Create `.gitignore` at repo root before staging anything, to prevent `.DS_Store` from being committed:

```
# macOS
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes

# Dependencies (future)
node_modules/

# Build output (future)
dist/
build/

# Env files (future)
.env
.env.local
```

### 2. Create and checkout branch

```bash
git checkout -b chore/workspace-init
```

### 3. Single commit — all workspace init files

Stage and commit in one focused commit (all files belong to the same "workspace initialization" effort):

```
chore: initialize workspace with guidelines, design system, and Claude config

Adds all foundational workspace files ahead of React scaffolding:
- CLAUDE.md: codebase guide for Claude Code sessions
- .claude/skills/plan/: enforces plan-mode workflow for non-trivial changes
- docs/guidelines/: frontend architecture, AI collaboration rules, git workflow
- docs/mockup/: Veridian Heirloom design system + 5 HTML page prototypes
- docs/plans/: archive directory with plan template
- .devcontainer/: GitHub Codespaces dev environment config
- .gitignore: excludes macOS artifacts and common build outputs
```

Files to stage (explicitly, not `git add .`):
- `.gitignore`
- `CLAUDE.md`
- `.claude/`
- `.devcontainer/`
- `docs/`

### 4. Push branch

```bash
git push -u origin chore/workspace-init
```

### 5. Open PR via `gh pr create`

```
Title: chore: initialize workspace with guidelines, design system, and Claude config

Body:
## Summary
- Adds CLAUDE.md as the Claude Code guide for all future sessions
- Adds Veridian Heirloom design system spec + 5 HTML mockup prototypes for the wedding guest app
- Adds frontend, AI collaboration, and git workflow guidelines
- Adds `.claude/skills/plan` to enforce plan-mode workflow
- Adds devcontainer config for GitHub Codespaces
- Adds .gitignore

## Type of change
- [x] Chore (non-breaking, no user-facing change)

## Test plan
- No code changes — documentation and config only
- Verify all files are present and readable on the branch
```

### 6. Archive this plan

After the PR is opened, archive to `docs/plans/0001-workspace-init.md`.

---

## Verification

- `git status` is clean after commit
- PR is open and all files visible on GitHub
- `.DS_Store` is NOT in the commit
