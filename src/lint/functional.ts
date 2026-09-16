import { defineConfig } from 'oxlint'

export default defineConfig({
  options: { typeAware: true },
  jsPlugins: [
    { 'name': 'functional', 'specifier': 'eslint-plugin-functional' }
  ],
  rules: {
    'functional/functional-parameters': 'off',
    'functional/immutable-data': 'off',
    'functional/no-classes': 'off',
    'functional/no-let': 'error',
    'functional/no-throw-statements': 'error',
    'functional/no-try-statements': 'error',
    'functional/prefer-immutable-types': 'off',
    'functional/prefer-property-signatures': 'error',
    'functional/prefer-tacit': 'warn',
    'functional/readonly-type': 'error',
    'functional/type-declaration-immutability': 'off'
  }
})
