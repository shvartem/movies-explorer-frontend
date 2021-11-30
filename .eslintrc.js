module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [
      1, { extensions: ['.js', '.jsx'] },
    ],
    'react/function-component-definition': [
      2, { namedComponents: 'function-declaration' },
    ],
    'jsx-a11y/label-has-associated-control': 0,
  },
};
