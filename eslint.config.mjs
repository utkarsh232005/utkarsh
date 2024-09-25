import eslintRecommended from "eslint/conf/eslint-recommended";
import pluginReactRecommended from "eslint-plugin-react/configs/recommended";

export default [
  eslintRecommended,
  pluginReactRecommended,
  {
    languageOptions: {
      globals: {
        window: true,
        document: true,
        process: true,
      },
    },
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
