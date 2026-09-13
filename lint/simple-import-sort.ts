import { defineConfig } from 'oxlint'

export default defineConfig({
  options: { typeAware: true },
  jsPlugins: [
    {
      name: 'simple-import-sort',
      specifier: 'eslint-plugin-simple-import-sort'
    }
  ],
  rules: {
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn'
  }
})
