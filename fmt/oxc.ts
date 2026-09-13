import type { OxfmtConfig } from 'oxfmt'

export const oxfmtConfig: OxfmtConfig = {
  ignorePatterns: [
    '**/*.log',
    '**/.DS_Store',
    '**/node_modules/',
    '.git/',
    '.github/',
    'public',
    'dist',
    'server',
    'tmp',
    '.env',
    '.dockerignore',
    '.gitignore',
    'Dockerfile',
    'LICENSE'
  ],

  arrowParens: 'avoid',
  printWidth: 80,
  quoteProps: 'preserve',
  semi: false,
  singleQuote: true,
  sortImports: true,
  sortPackageJson: false,
  sortTailwindcss: true,
  //svelte: true,
  trailingComma: 'none',
  vueIndentScriptAndStyle: true
}
