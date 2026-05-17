import Link from "next/link";
import { Calendar, Clock, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { getArticlesByCategory, getCategory, type GuideArticle } from "@/lib/guide";

type Props = {
  /** カテゴリslug。指定するとそのカテゴリの最新記事を表示 */
  categorySlug: string;
  /** 表示件数（デフォルト 3） */
  limit?: number;
  /** 上部の見出し */
  heading?: string;
  /** リード文 */
  lead?: string;
  /** 背景色（セクション単位） */
  bgClassName?: string;
};

/**
 * カテゴリ別の関連記事カード。
 * 学び方ページや エリアページから「関連カテゴリーの記事」を表示するのに使う。
 */
export function RelatedArticles({
  categorySlug,
  limit = 3,
  heading,
  lead,
  bgClassName = "bg-slate-50",
}: Props) {
  const category = getCategory(categorySlug);
  if (!category) return null;

  const articles = getArticlesByCategory(categorySlug).slice(0, limit);

  return (
    <section className={cn("py-16 lg:py-24", bgClassName)}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <div className="text-sm font-bold tracking-widest text-navy-700 mb-3 flex items-center gap-2">
              <FolderOpen className="h-4 w-4" />
              関連カテゴリー｜{category.name}
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
              {heading ?? `「${category.name}」の記事を読む`}
            </h2>
            {lead && <p className="mt-3 text-ink-600">{lead}</p>}
          </div>
          <Link
            href={`/guide/category/${category.slug}`}
            className="self-start lg:self-auto cta-secondary inline-flex items-center gap-2 px-5 py-3 bg-white text-navy-900 font-bold rounded-xl border border-navy-900 text-sm"
          >
            「{category.name}」記事一覧 →
          </Link>
        </div>

        {articles.length === 0 ? (
          <EmptyArticles categoryName={category.name} />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} category={category.name} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ArticleCard({ article, category }: { article: GuideArticle; category: string }) {
  return (
    <Link
      href={`/guide/${article.slug}`}
      className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200"
    >
      <div className={cn("aspect-[16/9] grain bg-gradient-to-br", article.gradient)} />
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-ink-600">
          <span className="font-bold text-navy-700">{category}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {article.publishedAt}
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readingMinutes}分
          </span>
        </div>
        <h3 className="mt-2 font-extrabold text-base leading-snug">{article.title}</h3>
        <p className="mt-2 text-sm text-ink-600 line-clamp-2">{article.excerpt}</p>
      </div>
    </Link>
  );
}

function EmptyArticles({ categoryName }: { categoryName: string }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
      <p className="text-ink-600">
        「{categoryName}」の記事は準備中です。順次公開していきます。
      </p>
    </div>
  );
}
