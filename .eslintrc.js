module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-console': 0,
    'no-unused-vars': 1
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2019
  }
}
