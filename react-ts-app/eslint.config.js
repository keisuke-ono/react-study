import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      // Reactの基本ルール
      'react/react-in-jsx-scope': 'off', // React17以降は不要
      'react/prop-types': 'off', // TypeScriptを使用する場合は不要
      'react/jsx-no-undef': 'error', // 未定義のコンポーネントを検出
      'react/jsx-curly-brace-presence': ['error', 'never'], // 不要な中括弧を禁止

      // Hooksのルール
      'react-hooks/rules-of-hooks': 'error', // Hooksのルールを強制
      'react-hooks/exhaustive-deps': 'warn', // 依存配列の警告

      // TypeScriptのルール
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 未使用変数の検出
      '@typescript-eslint/explicit-function-return-type': 'off', // 返り値の型を必須にしない
      '@typescript-eslint/no-explicit-any': 'warn', // anyの使用を警告

      // importの順序
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // node "builtin" 標準モジュール
            'external', // npm installしたパッケージ
            'internal', // パス設定したモジュール
            ['parent', 'sibling'], // 親階層と小階層のモジュール
            'index', // 同階層のモジュール
            'type', // 型定義
          ],
          'newlines-between': 'always', // グループ間で改行を入れる
          alphabetize: {
            order: 'asc', // アルファベット順
            caseInsensitive: true, // 大文字小文字を区別しない
          },
        },
      ],

      // コードスタイル
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];