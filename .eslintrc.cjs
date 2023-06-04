// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:react-hooks/recommended",
//   ],
//   parser: "@typescript-eslint/parser",
//   parserOptions: { ecmaVersion: "latest", sourceType: "module" },
//   plugins: ["react-refresh"],
//   rules: {
//     "react-refresh/only-export-components": "warn",
//   },
// };

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "airbnb/hooks", "prettier", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "no-unused-vars": "warn",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "func-names": "off",
  },
};
