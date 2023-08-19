module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
     "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "eslint-config-prettier"  
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        "paths": [
          "src"
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_"
      }
    ],
    "react/react-in-jsx-scope": "off",
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "no-console": 0,
    "object-curly-newline": 0,
    "import/prefer-default-export": 0,
    "comma-dangle": ["error", "only-multiline"],
    "@typescript-eslint/no-non-null-assertion": 0
  },
}
