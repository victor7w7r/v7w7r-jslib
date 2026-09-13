import { defineConfig } from 'oxlint'

import all from './lint/all.ts'
import deMorgan from './lint/de-morgan.ts'
import functional from './lint/functional.ts'
import importRules from './lint/import.ts'
import math from './lint/math.ts'
import perfectionist from './lint/perfectionist.ts'
import promise from './lint/promise.ts'
import security from './lint/security.ts'
import simpleImportSort from './lint/simple-import-sort.ts'
import sonar from './lint/sonar.ts'
import toplevel from './lint/toplevel.ts'
import typescript from './lint/typescript.ts'
import unicorn from './lint/unicorn.ts'

/*
  import astro from './lint/astro.ts'
  import hexagonal from './lint/hexagonal.ts'
  import svelte from './lint/svelte.ts'
  import tailwindcss from './lint/tailwindcss.ts'
  import vue from './lint/vue.ts'
  import wc from './lint/wc.ts'
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
