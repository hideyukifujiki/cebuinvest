# セブインベスト / Cebu Invest — Next.js

セブ島を起点にした投資型ライフスタイルメディアの Next.js 実装。

## スタック

- **Next.js 15** (App Router, React 19)
- **TypeScript** (strict)
- **Tailwind CSS 3.4**
- **Lucide Icons**
- **Noto Sans JP** (next/font/google)

## セットアップ

```bash
cd cebuinvest
pnpm install
cp .env.example .env.local
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開く。

## 環境変数

`.env.local` に以下を設定（`.env.example` を参照）:

```
NEXT_PUBLIC_SITE_URL=https://cebuinvest.jp
NEXT_PUBLIC_CONSULT_FORM_URL=https://forms.gle/YOUR_FORM_ID
```

`NEXT_PUBLIC_CONSULT_FORM_URL` を実際の Google Form URL に置き換えると、
すべての「相談する」ボタンが自動的にその URL を指します。

## 実装状況

すべての主要ページが完全実装済み。WordPress 連携の `/guide/` のみスタブ。

| ページ                          | ステータス | 内容 |
|--------------------------------|-----------|------|
| `/`                            | ✅ 完全実装 | 全 9 セクション |
| `/study`                       | ✅ 完全実装 | Hero / 6タイプ / 学校選び5判断軸 / 3関連サービス / 推奨エリア / FAQ |
| `/live`                        | ✅ 完全実装 | Hero / 5パターン / 生活費表 / 住医療治安教育 / 推奨エリア / FAQ |
| `/work`                        | ✅ 完全実装 | Hero / 5スタイル / ITパーク×ビジパーク並列 / 起業基本 / FAQ |
| `/invest`                      | ✅ 完全実装 | Hero（免責ノート付）/ 6テーマ / 不動産1テーマ / 6リスク / FAQ |
| `/areas`                       | ✅ 完全実装 | 11エリアのカードグリッド |
| `/areas/[slug]`                | ✅ 完全実装 | 11エリアをデータ駆動で動的生成 |
| `/consultation`                | ✅ 完全実装 | Google Form ボタン、11テーマ、4ステップ、中立宣言、FAQ |
| `/about`                       | ✅ 完全実装 | ミッション / 編集5原則 / 関連サービス透明化 |
| `/partners`                    | ✅ 完全実装 | 5提携サービス（向く人/向かない人 明示） |
| `/contact`                     | ✅ 完全実装 | セブ島相談 + 取材メール窓口 |
| `/privacy` / `/terms` / `/disclaimer` | ✅ テンプレ実装 | 専門家レビュー前提のひな形 |
| `/guide`                       | 🚧 スタブ | WordPress 連携で本実装予定 |
| `/sitemap.xml`                 | ✅ 動的生成 | 全ページ + 11エリア |
| `/robots.txt`                  | ✅ 動的生成 | sitemap参照付き |
| `/not-found`                   | ✅ 実装済 | 404ページ |

## ディレクトリ構造

```
cebuinvest/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx                 # Header/Footer/Fonts/JSON-LD
│  │  ├─ page.tsx                   # トップページ
│  │  ├─ globals.css                # Tailwind + カスタム
│  │  ├─ not-found.tsx              # 404
│  │  ├─ sitemap.ts                 # /sitemap.xml 動的生成
│  │  ├─ robots.ts                  # /robots.txt 動的生成
│  │  ├─ study/page.tsx             # 学ぶピラーLP
│  │  ├─ live/page.tsx              # 暮らすピラーLP
│  │  ├─ work/page.tsx              # 働くピラーLP
│  │  ├─ invest/page.tsx            # 投資するピラーLP
│  │  ├─ areas/
│  │  │  ├─ page.tsx                # エリア一覧
│  │  │  └─ [slug]/page.tsx         # 11エリア詳細（generateStaticParams）
│  │  ├─ consultation/page.tsx      # 相談ページ（Google Form連携）
│  │  ├─ about/page.tsx             # About + 編集方針
│  │  ├─ partners/page.tsx          # 関連サービス
│  │  ├─ contact/page.tsx           # お問い合わせ
│  │  ├─ privacy/page.tsx           # プライバシーポリシー
│  │  ├─ terms/page.tsx             # 利用規約
│  │  ├─ disclaimer/page.tsx        # 免責事項
│  │  └─ guide/page.tsx             # Guide（WordPress 連携前のスタブ）
│  ├─ components/
│  │  ├─ brand/
│  │  │  ├─ Logo.tsx
│  │  │  └─ LogoSymbol.tsx
│  │  ├─ layout/
│  │  │  ├─ Header.tsx              # スティッキー + ハンバーガー + アクティブ判定
│  │  │  ├─ Footer.tsx              # 4カラム + 免責
│  │  │  └─ StickyCta.tsx           # モバイル下部CTA
│  │  ├─ sections/                  # トップページのセクション群
│  │  │  ├─ HeroSection.tsx
│  │  │  ├─ FourCategories.tsx
│  │  │  ├─ PurposeCards.tsx
│  │  │  ├─ WhyCebu.tsx
│  │  │  ├─ PopularAreas.tsx
│  │  │  ├─ LifeDesignTimeline.tsx
│  │  │  ├─ LatestGuide.tsx
│  │  │  ├─ RelatedServices.tsx
│  │  │  └─ ConsultationCta.tsx     # 各 LP からも流用
│  │  ├─ pillar/
│  │  │  └─ PillarLayout.tsx        # ピラーLPの共通ラッパー
│  │  ├─ area/
│  │  │  └─ AreaTemplate.tsx        # データ駆動のエリア詳細テンプレ
│  │  └─ ui/
│  │     ├─ SectionHeading.tsx
│  │     ├─ Breadcrumb.tsx          # JSON-LD BreadcrumbList 自動出力
│  │     ├─ FaqList.tsx             # JSON-LD FAQPage 自動出力
│  │     └─ PageStub.tsx
│  └─ lib/
│     ├─ site.config.ts             # サイト全体設定
│     ├─ nav.ts                     # ヘッダー・フッターのナビ
│     ├─ areas.ts                   # 11エリアの完全データ（スコア・スポット・FAQ込み）
│     └─ utils.ts                   # cn ヘルパー
├─ .env.example
├─ next.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
└─ package.json
```

## デザイントークン

`tailwind.config.ts` の `theme.extend.colors` にブランドカラーを定義済み。

| トークン      | HEX      | 用途                                   |
| ------------- | -------- | -------------------------------------- |
| `navy-900`    | #0B3A8B  | プライマリ（「セブ」ロゴ、見出しなど） |
| `navy-700`    | #1B5BC4  | リンク／ボタン副                       |
| `sky-500`     | #2BA8E0  | サブアクセント                         |
| `sky-100`     | #E6F5FC  | 背景帯                                 |
| `sun-500`     | #F5C518  | プライマリ CTA（イエロー）             |
| `sun-600`     | #E0AC00  | プライマリ CTA Hover                   |
| `palm-500`    | #2E9D4F  | 補助アクセント                         |
| `teal-400`    | #2BB7B7  | 装飾／波モチーフ                       |
| `ink-900`     | #0F172A  | 本文                                   |
| `ink-600`     | #475569  | キャプション                           |

## SEO

- 全ページに `metadata` 設定済み（title / description / canonical）
- Open Graph タグ
- 構造化データ：
  - `Organization`（全ページの Layout で出力）
  - `BreadcrumbList`（`Breadcrumb` コンポーネントが自動出力）
  - `FAQPage`（`FaqList` コンポーネントが自動出力）
- `sitemap.xml` 動的生成
- `robots.txt` 動的生成

## 動作確認

```bash
# 型チェック
pnpm type-check

# Lint
pnpm lint

# 本番ビルド
pnpm build

# 起動
pnpm start
```

## 次のフェーズ

1. **Guide（WordPress 連携）** — Headless WordPress または `/guide/` サブディレクトリの実装
2. **OG画像の自動生成** — `next/og` で動的生成
3. **Article 構造化データ** — Guide 記事に追加
4. **多言語対応** — `/en/`、`/zh-hant/` への展開
5. **計測組み込み** — GA4、Microsoft Clarity、Search Console
6. **画像最適化** — `/public/` に実画像配置 → `next/image` で配信
7. **A/B テスト** — Hero コピーや CTA カラーのテスト

## コマンド

| Command          | Description           |
| ---------------- | --------------------- |
| `pnpm dev`       | 開発サーバ起動        |
| `pnpm build`     | 本番ビルド            |
| `pnpm start`     | 本番モードで起動      |
| `pnpm lint`      | ESLint 実行           |
| `pnpm type-check`| TypeScript 型チェック |

## ライセンス

Private. © 2026 セブインベスト / Cebu Invest.
