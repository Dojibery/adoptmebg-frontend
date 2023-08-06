module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  "rules": {
    "strict": 0,
    "no-await-in-loop": "off",
    "no-unneeded-ternary": "off",
    "no-underscore-dangle": "off",
    "import/named": "off",
    "import/no-cycle": "off",
    "semi": [
      "error"
    ],
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "single"
    ],
    "quote-props": [
      "error",
      "consistent-as-needed"
    ],
    "jsx-quotes": [
      "error",
      "prefer-single"
    ],
    "no-multiple-empty-lines": "error",
    "no-duplicate-imports": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-property-newline": [
      "error",
      {
        "allowAllPropertiesOnSameLine": false
      }
    ],
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "max-len": [
      "error",
      {
        "code": 145,
        "ignoreStrings": true
      }
    ],
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "jsx-a11y/media-has-caption": "off",
    "max-classes-per-file": "off",
    "no-empty-interface": "off",
    "no-empty": [
      2,
      {
        "allowEmptyCatch": true
      }
    ],
    "no-console": [
      "warn",
      {
        "allow": [
          "warn",
          "error",
          "time",
          "timeEnd"
        ]
      }
    ],
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-one-expression-per-line": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "max-depth": [
      "error",
      3
    ],
    "import/no-extraneous-dependencies": "off",
    "no-param-reassign": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-restricted-imports": [
      "error",
      {
        "paths": [
          {
            "name": "lodash",
            "message": "Please use `import [package] from 'lodash/[package]'` instead."
          },
          {
            "name": "@mui/material",
            "importNames": [
              "Fade"
            ],
            "message": "Please import <Fade /> from the ./components directory instead."
          }
        ],
        "patterns": [
          "!lodash/*"
        ]
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "**/*.ts?(x)"
      ],
      "parser": "@typescript-eslint/parser",
      "extends": [
        "plugin:@typescript-eslint/recommended"
      ],
      "rules": {
        "vars-on-top": 0,
        "no-var": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-explicit-any": "off"
      }
    },
    {
      "files": [
        "**/*.d.ts"
      ],
      "parser": "@typescript-eslint/parser",
      "extends": [
        "plugin:@typescript-eslint/recommended"
      ],
      "rules": {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
          "error"
        ]
      }
    }
  ]
}
