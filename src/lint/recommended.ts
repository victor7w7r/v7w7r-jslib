import { defineConfig } from 'oxlint'

import all from './all'
import deMorgan from './de-morgan'
import functional from './functional'
import importRules from './import'
import math from './math'
import perfectionist from './perfectionist'
import promise from './promise'
import security from './security'
import simpleImportSort from './simple-import-sort'
import sonar from './sonar'
import toplevel from './toplevel'
import typescript from './typescript'
import unicorn from './unicorn'

export default defineConfig({
  categories: { correctness: 'error' },

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
