module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'latest',
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
  },
};
