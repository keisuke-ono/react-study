# React + TypeScript プロジェクト

このプロジェクトは、React と TypeScript を使用したウェブアプリケーションのテンプレートです。

## ディレクトリ構造

```
src/
├── assets/          # 画像、フォント、その他の静的ファイル
├── components/      # 再利用可能な共通コンポーネント
├── features/        # 機能ごとのコンポーネントとロジック
├── hooks/          # カスタムReactフック
├── types/          # TypeScript型定義ファイル
├── utils/          # ユーティリティ関数
└── styles/         # グローバルスタイルとテーマ
```

## 各ディレクトリの説明

### assets/
- 画像ファイル（.png, .jpg, .svg）
- フォントファイル
- その他の静的リソース

### components/
- ボタン、フォーム、カードなどの再利用可能なUIコンポーネント
- コンポーネント固有のスタイル
- コンポーネントのテストファイル

### features/
- 特定の機能に関連するコンポーネント
- 機能固有のロジック
- 機能固有のAPI呼び出し
- 機能固有のテスト

### hooks/
- カスタムReactフック
- 共通のロジックをカプセル化
- 再利用可能な状態管理ロジック

### types/
- インターフェース定義
- 型エイリアス
- 列挙型（enum）
- 共通の型定義

### utils/
- ヘルパー関数
- 定数
- フォーマッター
- バリデーター

### styles/
- グローバルCSS
- テーマ設定
- スタイル変数
- アニメーション定義 


## その他

このプロジェクトは、Vite を使用して構築されています。
pnpm create vite react-ts-app --template react-ts

## 環境変数の設定

本プロジェクトでは、Viteの環境変数システムを使用しています。

### 環境変数ファイル

- `.env`: デフォルトの環境変数
- `.env.development`: 開発環境用の環境変数
- `.env.production`: 本番環境用の環境変数
- `.env.local`: ローカル環境用の環境変数（Gitで管理しない）

### 環境変数の命名規則

- すべての環境変数は`VITE_`プレフィックスが必要です
- 例: `VITE_API_URL`, `VITE_APP_TITLE`

### 環境変数の読み込み順序

1. 開発環境（`pnpm dev`）の場合:
   ```
   .env.development.local > .env.development > .env.local > .env
   ```

2. 本番環境（`pnpm build`）の場合:
   ```
   .env.production.local > .env.production > .env.local > .env
   ```

### 環境変数の使用方法

```typescript
// 環境変数へのアクセス
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;
```

### 環境の切り替え

- 開発環境: `pnpm dev`
- 本番環境: `pnpm build`
- カスタム環境: `pnpm dev --mode staging`

### セキュリティに関する注意

- 機密情報は`.env.local`に記述し、`.gitignore`に追加する
- `VITE_`プレフィックスの付いた環境変数はクライアントサイドに公開される
- APIキーなどの機密情報は、必要に応じてバックエンド側で管理する