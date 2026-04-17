# Dev Container (GitHub Codespaces)

## What's included

| Tool | Version |
|------|---------|
| Node.js | 24 |
| GitHub CLI | latest |
| Claude Code CLI | latest |

VS Code extensions for ESLint and Prettier are installed automatically. Format-on-save is enabled for TypeScript and TSX files.

## Required: Anthropic API key

Claude Code needs an API key to run. Add it as a **Codespaces secret** in your GitHub account **before** starting a Codespace — it will be injected automatically.

1. Go to [github.com/settings/codespaces](https://github.com/settings/codespaces)
2. Under **Secrets**, add a new secret:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** your key from [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)
3. Grant access to this repository

## Starting a Codespace

Open this repository on GitHub and click **Code → Codespaces → Create codespace on main**.

The `postCreateCommand` will install Claude Code automatically. This takes a moment on first start.
