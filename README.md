# アイシングクッキー教室ウェブサイト

React と Vite を使用したアイシングクッキー教室のシングルページアプリケーションです。

## ローカル開発環境のセットアップ

### 1. Replit の依存関係を削除

以下のファイルやディレクトリは Replit 固有のものなので削除してください：

```bash
rm -rf .replit
rm -rf .config
rm -rf .cache
rm -rf .upm
rm vite.config.ts   # 後で新しい設定ファイルを作成します
rm -rf .breakpoints
rm generated-icon.png
```

### 2. 新しい vite.config.ts を作成

```bash
cat > vite.config.ts << 'EOL'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
EOL
```

### 3. サーバーとフロントエンドのスクリプトを設定

package.json を編集して、開発スクリプトを整理します：

```bash
cat > package.json << 'EOL'
{
  "name": "icing-cookie-class",
  "version": "1.0.0",
  "description": "アイシングクッキー教室のウェブサイト",
  "main": "server/index.ts",
  "scripts": {
    "dev:client": "vite",
    "dev:server": "tsx watch server/index.ts",
    "dev": "concurrently \"npm run dev:client\" \"npm run dev:server\"",
    "build": "vite build",
    "preview": "vite preview",
    "start": "tsx server/index.ts"
  },
  "dependencies": {
    "@fullcalendar/core": "latest",
    "@fullcalendar/daygrid": "latest",
    "@fullcalendar/react": "latest",
    "@hookform/resolvers": "latest",
    "@radix-ui/react-accordion": "latest",
    "@radix-ui/react-alert-dialog": "latest",
    "@radix-ui/react-aspect-ratio": "latest",
    "@radix-ui/react-avatar": "latest",
    "@radix-ui/react-checkbox": "latest",
    "@radix-ui/react-collapsible": "latest",
    "@radix-ui/react-context-menu": "latest",
    "@radix-ui/react-dialog": "latest",
    "@radix-ui/react-dropdown-menu": "latest",
    "@radix-ui/react-hover-card": "latest",
    "@radix-ui/react-label": "latest",
    "@radix-ui/react-menubar": "latest",
    "@radix-ui/react-navigation-menu": "latest",
    "@radix-ui/react-popover": "latest",
    "@radix-ui/react-progress": "latest",
    "@radix-ui/react-radio-group": "latest",
    "@radix-ui/react-scroll-area": "latest",
    "@radix-ui/react-select": "latest",
    "@radix-ui/react-separator": "latest",
    "@radix-ui/react-slider": "latest",
    "@radix-ui/react-slot": "latest",
    "@radix-ui/react-switch": "latest",
    "@radix-ui/react-tabs": "latest",
    "@radix-ui/react-toast": "latest",
    "@radix-ui/react-toggle": "latest",
    "@radix-ui/react-toggle-group": "latest",
    "@radix-ui/react-tooltip": "latest",
    "@tanstack/react-query": "latest",
    "class-variance-authority": "latest",
    "clsx": "latest",
    "cmdk": "latest",
    "date-fns": "latest",
    "express": "latest",
    "framer-motion": "latest",
    "lucide-react": "latest",
    "react": "^18.2.0",
    "react-day-picker": "latest",
    "react-dom": "^18.2.0",
    "react-hook-form": "latest",
    "react-icons": "latest",
    "tailwind-merge": "latest",
    "wouter": "latest",
    "zod": "latest"
  },
  "devDependencies": {
    "@tailwindcss/typography": "latest",
    "@types/express": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "@vitejs/plugin-react": "latest",
    "autoprefixer": "latest",
    "concurrently": "latest",
    "postcss": "latest",
    "tailwindcss": "latest",
    "tailwindcss-animate": "latest",
    "tsx": "latest",
    "typescript": "latest",
    "vite": "latest"
  }
}
EOL
```

### 4. サーバー設定の修正

Express サーバーを修正して、ローカル環境で動作するようにします：

```bash
cat > server/index.ts << 'EOL'
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import { registerRoutes } from "./routes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// API ルートを登録
registerRoutes(app).then((server) => {
  // 静的ファイルの提供
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(express.static(path.join(__dirname, "../dist")));

  // 開発環境以外では、すべてのルートをクライアントアプリにリダイレクト
  if (process.env.NODE_ENV === "production") {
    app.get("*", (_req, res) => {
      res.sendFile(path.join(__dirname, "../dist/index.html"));
    });
  }

  // エラーハンドリング
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send("サーバーエラーが発生しました");
  });

  // サーバー起動
  app.listen(PORT, () => {
    console.log(`サーバーが起動しました: http://localhost:${PORT}`);
  });
});
EOL
```

### 5. クライアント設定の調整

以下のコマンドを実行して、必要なディレクトリ構造を確認し、整理します：

```bash
mkdir -p public/images
# 画像ファイルを public/images に配置
cp attached_assets/S__* public/images/
```

### 6. 必要なパッケージをインストール

```bash
npm install
npm install concurrently --save-dev  # 追加のdev依存関係
```

### 7. 開発サーバーの起動

```bash
npm run dev
```

これで以下のサーバーが起動します：
- フロントエンド: http://localhost:5173 (Vite開発サーバー)
- バックエンド: http://localhost:5000 (Express API)

### 8. 本番環境用ビルド

```bash
npm run build
npm start
```

ビルドされたアプリケーションは http://localhost:5000 で動作します。

## GitHub へのアップロード

### 1. gitignore ファイルの作成

```bash
cat > .gitignore << 'EOL'
# 依存関係
/node_modules

# ビルド
/dist

# 環境変数
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# ログ
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# エディタ設定
.idea
.vscode
*.swp
*.swo

# OS 関連
.DS_Store
Thumbs.db
EOL
```

### 2. Git リポジトリの初期化とコミット

```bash
git init
git add .
git commit -m "初回コミット: アイシングクッキー教室ウェブサイト"
```

### 3. GitHub にリポジトリを作成し、プッシュ

GitHub でリポジトリを作成し、以下のコマンドを実行します：

```bash
git remote add origin https://github.com/ユーザー名/リポジトリ名.git
git branch -M main
git push -u origin main
```

## プロジェクト構造

```
/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── lib/
│       ├── pages/
│       ├── App.tsx
│       ├── index.css
│       └── main.tsx
├── public/
│   └── images/
│       └── [画像ファイル]
├── server/
│   ├── index.ts
│   ├── routes.ts
│   └── storage.ts
├── shared/
│   └── schema.ts
├── package.json
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 主な技術スタック

- フロントエンド: React, TypeScript, Tailwind CSS, shadcn/ui
- バックエンド: Express, TypeScript
- カレンダー: FullCalendar
- 状態管理: React Query
- ルーティング: wouter
- フォーム管理: react-hook-form, zod
- ビルド: Vite
