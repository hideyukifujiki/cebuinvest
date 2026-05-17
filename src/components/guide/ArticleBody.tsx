import { marked } from "marked";

type Props = {
  /** Markdown 本文（記事ファイルの content） */
  content: string;
};

// marked のグローバル設定（テーブル等を有効化）
marked.setOptions({
  gfm: true,
  breaks: true,
});

/**
 * 記事本文を Markdown → HTML 変換してレンダリング。
 * @tailwindcss/typography の prose クラスでスタイリング。
 *
 * Server Component。クライアントサイドでの再レンダリングは不要。
 */
export function ArticleBody({ content }: Props) {
  // marked.parse の戻り値は同期だが、型上 string | Promise<string> なので型キャスト
  const html = marked.parse(content) as string;

  return (
    <article
      className="prose prose-lg max-w-none"
      // 自前管理の Markdown のため XSS リスクなし
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
