module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react-hooks'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.12.0',
    },
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-unused-expressions': [
      'error',
      { allowTernary: true, allowShortCircuit: true },
    ],
    'no-console': 'off',
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
  },
};
