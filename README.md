# 学習記録アプリ

学習時間を記録・管理する Web アプリケーションです。学習内容と時間を登録し、合計学習時間を可視化できます。

## 機能

- 学習内容と時間の登録
- 記録の一覧表示
- 記録の削除
- 合計学習時間の表示

## 技術スタック

- React
- Vite
- Supabase
- Jest / React Testing Library

## 環境設定

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd task2
```

### 2. 依存パッケージのインストール

```bash
npm install
```

### 3. 環境変数の設定

プロジェクトルートに `.env` ファイルを作成し、以下の内容を記述してください：

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

**取得方法:**

1. [Supabase](https://supabase.com/) でプロジェクトを作成
2. Settings > API から URL と anon key を取得
3. `.env` ファイルに貼り付け

## 起動方法

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセス

### テストの実行

```bash
npm run test
```

### ビルド

```bash
npm run build
```

### デプロイ（Firebase）

```bash
make deploy
```

または

```bash
npm run build
firebase deploy
```

## プロジェクト構成

```
task2/
├── src/
│   ├── App.jsx           # メインコンポーネント
│   ├── database/
│   │   ├── supabase.js   # Supabase クライアント
│   │   └── fetchRecords.js
│   └── tests/            # テストファイル
├── .env                  # 環境変数（要作成）
├── Makefile
└── package.json
```

## ライセンス

MIT
