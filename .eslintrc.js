module.exports = {
  extends: ['universe/native'],
  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    'import/order': ['off'],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          'module',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
