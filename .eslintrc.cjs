module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier'
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'no-console': 1,
    'no-tabs': 'off',
    'max-len': [
      'warn',
      {
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        code: 130
      }
    ],
    'default-param-last': 'off',
    'no-param-reassign': 'off',
    'comma-dangle': ['error', 'never'],
    indent: [
      'error',
      2,
      {
        MemberExpression: 1,
        SwitchCase: 1
      }
    ],
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx']
      }
    ],
    'react/jsx-uses-react': 'off',
    'react/jsx-sort-props': ['warn', {}],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type', 'unknown'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '@utils/**',
            group: 'unknown'
          },
          {
            pattern: '{.,..}/*.scss',
            // same directory only
            group: 'index',
            position: 'before'
          }
        ],
        warnOnUnassignedImports: true,
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'import/no-unresolved': 'off',
    'react/no-unstable-nested-components': 'off'
  }
};
