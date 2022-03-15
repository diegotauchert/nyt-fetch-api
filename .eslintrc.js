module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    "import/no-unresolved": [2, { "caseSensitive": false }],
    "react/function-component-definition": [2,{ namedComponents: "function-declaration"},]
  },
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "project": "./tsconfig.eslint.json",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  env: {
    jest: true,
    browser: true,
    node: true
  },
  globals: {
    document: false
  }
};