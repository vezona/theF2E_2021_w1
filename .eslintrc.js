module.exports = {
    env: {
      node: true,
    },
    extends: [
      "eslint : recommended",
      'plugin:vue/vue3-recommended'
    ],
    rules: {
      // enable additional rules
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
  
      // override configuration set by extending "eslint:recommended"
      'no-empty': 'warn',
      'no-cond-assign': ['error', 'always'],
  
      // disable rules from base configurations
      'for-direction': 'off',
    }
};