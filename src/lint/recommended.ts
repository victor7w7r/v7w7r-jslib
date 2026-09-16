import { defineConfig } from 'oxlint'

import all from './all.js'
import deMorgan from './de-morgan.js'
import functional from './functional.js'
import importRules from './import.js'
import math from './math.js'
import perfectionist from './perfectionist.js'
import promise from './promise.js'
import security from './security.js'
import sonar from './sonar.js'
import toplevel from './toplevel.js'
import typescript from './typescript.js'
import unicorn from './unicorn.js'

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
    sonar,
    toplevel,
    typescript,
    unicorn
  ]
})
