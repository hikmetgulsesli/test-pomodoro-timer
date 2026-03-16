// eslint.config.js
const js = require('@eslint/js');
const html = require('eslint-plugin-html');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.html'],
    plugins: {
      html
    },
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        localStorage: 'readonly',
        navigator: 'readonly',
        alert: 'readonly',
        fetch: 'readonly',
        HTMLDocument: 'readonly',
        Element: 'readonly',
        EventTarget: 'readonly',
        tailwind: 'readonly'
      }
    },
    rules: {
      'no-undef': 'error'
    }
  }
];
