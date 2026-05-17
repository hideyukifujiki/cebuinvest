import Link from "next/link";
import { Calendar, Clock, MapPin, FileEdit } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getArticlesByArea,
  getCategory,
  type GuideArticle,
} from "@/lib/guide";
import { isArticlePublished } from "@/content/articles";

type Props = {
  /** エリア slug（例: "it-park"） */
  areaSlug: string;
  /** エリア表示名（例: "ITパーク"） */
  areaName: string;
  /** 表示件数（デフォルト 3） */
  limit?: number;
  /** セクションの背景色 */
  bgClassName?: string;
};

/**
 * エリアページ下部の「このエリアの記事」セクション。
 * - エリア特化記事（areaSlugs が当該エリア 1 つだけ）を最大 limit 件まで表示
 * - 本文公開済み: 通常のリンクカード
 * - 本文未公開: 「執筆予定」バッジ付きの非リンクカード（編集側に何を書くべきかが見える）
 * - 0 件のときは null（セクション自体を出さない方が綺麗だが、ここでは案内文を出す）
 */
export function AreaArticles({
  areaSlug,
  areaName,
  limit = 3,
  bgClassName = "bg-white",
}: Props) {
  const all = getArticlesByArea(areaSlug);
  const articles = all.slice(0, limit);
  const publishedCount = all.filter((a) => isArticlePublished(a.slug)).length;
  const plannedCount = all.length - publishedCount;

  return (
    <section className={cn("py-16 lg:py-24", bgClassName)}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <div className="text-sm font-bold tracking-widest text-navy-700 mb-3 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {areaName}エリアの記事
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
              {areaName}を知るためのGuide
            </h2>
            <p className="mt-3 text-ink-600 text-sm">
              {areaName}での生活、住まい、学校、仕事、移動を深掘りする読み物。
              {plannedCount > 0 && (
                <span className="ml-1 text-ink-600">
                  （公開{publishedCount}本 / 執筆予定{plannedCount}本）
                </span>
              )}
            </p>
          </div>
          <Link
            href="/guide"
            className="self-start lg:self-auto inline-flex items-center gap-2 px-5 py-3 bg-white text-navy-900 font-bold rounded-xl border border-navy-900 text-sm"
          >
            すべての記事を見る →
          </Link>
        </div>

        {articles.length === 0 ? (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center">
            <p className="text-ink-600">
              {areaName}に関する記事は準備中です。順次公開していきます。
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) =>
              isArticlePublished(a.slug) ? (
                <PublishedCard key={a.slug} article={a} />
              ) : (
                <PlannedCard key={a.slug} article={a} />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function PublishedCard({ article }: { article: GuideArticle }) {
  const category = getCategory(article.categorySlug);
  return (
    <Link
      href={`/guide/${article.slug}`}
      className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200"
    >
      <div className={cn("aspect-[16/9] grain bg-gradient-to-br", article.gradient)} />
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-ink-600">
          {category && (
            <>
              <span className="font-bold text-navy-700">{category.name}</span>
              <span>·</span>
            </>
          )}
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

function PlannedCard({ article }: { article: GuideArticle }) {
  const category = getCategory(article.categorySlug);
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-dashed border-slate-300 opacity-90">
      <div
        className={cn(
          "aspect-[16/9] grain bg-gradient-to-br relative",
          article.gradient
        )}
      >
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-navy-900 text-white px-2 py-0.5 rounded-full">
            <FileEdit className="h-3 w-3" />
            執筆予定
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-ink-600">
          {category && (
            <>
              <span className="font-bold text-navy-700">{category.name}</span>
              <span>·</span>
            </>
          )}
          <span>約{article.readingMinutes}分（予定）</span>
        </div>
        <h3 className="mt-2 font-extrabold text-base leading-snug text-ink-700">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-ink-600 line-clamp-2">{article.excerpt}</p>
      </div>
    </div>
  );
}
