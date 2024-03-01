module.exports = {
  extends: [
    "next",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "import",
    "eslint-plugin-import-helpers",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: { jsx: true },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "prettier/prettier": "off",
    "no-console": "warn",
    "prefer-template": "error",
    "import/no-cycle": "error",
    "no-useless-rename": "warn",
    "object-shorthand": "warn",
    "react/react-in-jsx-scope": "off",
    "import/no-duplicates": "warn",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/prop-types": "off",
    "@typescript-eslint/consistent-type-imports": ["warn", { fixStyle: "inline-type-imports" }],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          ["/^react/"],
          ["/^next/"],
          "module",
          ["/^@/"],
          "parent",
          ["sibling", "type", "index"],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        "patterns": [
          {
            "group": ["next/link"],
            "message": "Please use '@/components/link' instead of 'next/link'"
          }
        ]
      }
    ]
    
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};
