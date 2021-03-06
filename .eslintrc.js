// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:solid/typescript',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/consistent-type-imports': 'error',
      },
    },
    {
      files: ['./.eslintrc.js'],
      env: { node: true },
    },
  ],
  plugins: ['@typescript-eslint', 'import', 'solid'],
  extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
  rules: {
    curly: 'warn',
    eqeqeq: 'error',
    'import/no-unresolved': ['error', { ignore: ['\\.(css|scss|sass|less)$'] }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
})
