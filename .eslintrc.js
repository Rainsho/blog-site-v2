module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-unused-expressions': [
      'error',
      { allowTernary: true, allowShortCircuit: true },
    ],
    'no-console': 'off',
  },
};
