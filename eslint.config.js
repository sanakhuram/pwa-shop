import js from "@eslint/js";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginNode from "eslint-plugin-node";
import eslintPluginPromise from "eslint-plugin-promise";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        navigator: "readonly",
        console: "readonly",
        Notification: "readonly",
        self: "readonly",
        caches: "readonly",
        indexedDB: "readonly",
        fetch: "readonly",
      },
    },
  },
  js.configs.recommended,
  {
    plugins: {
      import: eslintPluginImport,
      node: eslintPluginNode,
      promise: eslintPluginPromise,
      "jsx-a11y": eslintPluginJsxA11y,
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": "warn",
      "import/no-unresolved": "off",
      "node/no-unsupported-features/es-syntax": "off",
    },
  },
  prettier,
];
