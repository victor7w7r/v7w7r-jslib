import { defineConfig } from 'oxlint'

export default defineConfig({
  options: { typeAware: true },
  jsPlugins: [{ name: 'tailwindcss', specifier: 'eslint-plugin-tailwindcss' }],
  rules: {
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-canonical-classname': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/important-modifier-suffix': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-unnecessary-arbitrary-value': 'warn'
  }
})
