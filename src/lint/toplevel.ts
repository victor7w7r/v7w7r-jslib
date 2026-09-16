import { defineConfig } from 'oxlint'

export default defineConfig({
  options: { typeAware: true },
  jsPlugins: [{ name: 'toplevel', specifier: 'eslint-plugin-toplevel' }],
  rules: {
    'toplevel/no-toplevel-let': 'warn',
    'toplevel/no-toplevel-var': 'error'
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      rules: { 'toplevel/no-toplevel-let': 'off' }
    }
  ]
})
