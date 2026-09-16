import { defineConfig } from 'oxlint'

import all from './src/lint/all.ts'
import deMorgan from './src/lint/de-morgan.ts'
import functional from './src/lint/functional.ts'
import importRules from './src/lint/import.ts'
import math from './src/lint/math.ts'
import perfectionist from './src/lint/perfectionist.ts'
import promise from './src/lint/promise.ts'
import security from './src/lint/security.ts'
import simpleImportSort from './src/lint/simple-import-sort.ts'
import sonar from './src/lint/sonar.ts'
import toplevel from './src/lint/toplevel.ts'
import typescript from './src/lint/typescript.ts'
import unicorn from './src/lint/unicorn.ts'
/*
  import astro from './src/lint/astro.ts'
  import hexagonal from './src/lint/hexagonal.ts'
  import svelte from './src/lint/svelte.ts'
  import tailwindcss from './src/lint/tailwindcss.ts'
  import wc from './src/lint/wc.ts'
*/

export default defineConfig({
  categories: { correctness: 'error' },
  options: {
    typeAware: true
  },
  env: {
    browser: true,
    node: true
  },
  ignorePatterns: [
    '**/node_modules/',
    '**/*.log',
    '**/.DS_Store',
    '.git/',
    '.github/',
    'public/',
    'dist/',
    'server',
    'tmp',
    '.env',
    '.dockerignore',
    '.gitignore',
    'Dockerfile',
    'LICENSE'
  ],
  extends: [
    all,
    deMorgan,
    functional,
    importRules,
    math,
    perfectionist,
    promise,
    security,
    simpleImportSort,
    sonar,
    toplevel,
    typescript,
    unicorn
  ]
})
