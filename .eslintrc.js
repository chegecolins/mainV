module.exports = {
  settings: {
    "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
  },
};
