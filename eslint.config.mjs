export default [
  {
    languageOptions: {
      globals: {
        window: true,
        document: true,
        process: true,
      },
    }, // Closing the languageOptions object
    extends: [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 12,
      sourceType: "module"
    },
    plugins: [
      "react"
    ],
    rules: {
      "jsx-a11y/anchor-has-content": ["error", { "components": [] }],
      "react/jsx-no-target-blank": ["error", { "allowReferrer": true }]
    }
  }
];
