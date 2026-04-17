import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['dist', 'coverage', '**/*.cjs'] },
  js.configs.recommended,
  tseslint.configs.strict,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  jsxA11y.flatConfigs.recommended,
  prettierConfig,
  {
    settings: { react: { version: 'detect' } },
  },
)
