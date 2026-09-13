import { defineConfig } from 'oxlint'

export default defineConfig({
  options: { typeAware: true },
  jsPlugins: [
    {
      name: 'hexagonal-architecture',
      specifier: 'eslint-plugin-hexagonal-architecture'
    }
  ],
  rules: { 'hexagonal-architecture/enforce': ['error'] }
})
