module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:node/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "array-callback-return": "warn",
    "import/no-unresolved": [
      1,
      {
        ignore: [
          // TODO: Add additional directories that you may want to use for 'absolute imports'
          "api",
          "db",
          "lib",
        ],
      },
    ],
    "import/prefer-default-export": 1,
    "no-debugger": "warn",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-unused-vars": ["warn", {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_" }],
  },
};
