import { defineConfig } from 'oxlint'

export default defineConfig({
  options: { typeAware: true },
  jsPlugins: [{ name: 'de-morgan', specifier: 'eslint-plugin-de-morgan' }],
  rules: {
    'de-morgan/no-negated-conjunction': 'warn',
    'de-morgan/no-negated-disjunction': 'warn'
  }
})
