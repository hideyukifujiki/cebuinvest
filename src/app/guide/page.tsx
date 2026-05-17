import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, FileEdit, FolderOpen, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { StickyCta } from "@/components/layout/StickyCta";
import {
  guideArticles,
  guideCategories,
  getCategory,
  getArticlesByCategory,
  getArticlesByArea,
  type GuideArticle,
  type GuideCategory,
} from "@/lib/guide";
import { areas, type Area } from "@/lib/areas";
import { isArticlePublished } from "@/content/articles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Guide｜セブ島の学ぶ・暮らす・働く・投資する記事",
  description:
    "セブ島での学ぶ・暮らす・働く・投資するを深掘りする読み物。短期留学から不動産投資まで、目的別に整理。",
  alternates: { canonical: "/guide" },
};

const pillarOrder = ["study", "live", "work", "invest"] as const;
const pillarLabels: Record<(typeof pillarOrder)[number], string> = {
  study: "Study｜学ぶ",
  live: "Live｜暮らす",
  work: "Work｜働く",
  invest: "Invest｜投資する",
};

export default function GuidePage() {
  // 公開済み（本文あり）記事のみを最新順で 6 件表示
  const latest = [...guideArticles]
    .filter((a) => isArticlePublished(a.slug))
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 6);

  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "Guide" }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-navy-50 via-white to-sky-50 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-navy-900 text-xs font-bold tracking-wide mb-6">
            GUIDE
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            セブ島の学ぶ・暮らす・働く・投資する
          </h1>
          <p className="mt-6 text-base lg:text-lg text-ink-600 leading-relaxed">
            短期留学から不動産投資まで、セブ島での意思決定に役立つ記事を目的別に整理しました。
          </p>
        </div>
      </section>

      {/* 最新記事 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-8">最新記事</h2>
          {latest.length === 0 ? (
            <div className="bg-slate-50 rounded-2xl p-8 text-center text-ink-600">
              準備中の記事が多くあります。順次公開していきます。
            </div>
          ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map((a) => {
              const cat = getCategory(a.categorySlug);
              return (
                <Link key={a.slug} href={`/guide/${a.slug}`} className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200">
                  <div className={cn("aspect-[16/9] grain bg-gradient-to-br", a.gradient)} />
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-ink-600">
                      <span className="font-bold text-navy-700">{cat?.name ?? a.categorySlug}</span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{a.publishedAt}</span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{a.readingMinutes}分</span>
                    </div>
                    <h3 className="mt-2 font-extrabold text-base leading-snug">{a.title}</h3>
                    <p className="mt-2 text-sm text-ink-600 line-clamp-2">{a.excerpt}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          )}
        </div>
      </section>

      {/* カテゴリー別の記事一覧 */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-bold tracking-widest text-navy-700 mb-3 flex items-center justify-center gap-2">
              <FolderOpen className="h-4 w-4" />
              CATEGORIES
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">カテゴリー別に読む</h2>
            <p className="mt-4 text-ink-600 text-sm max-w-xl mx-auto">
              4つのピラーの下に、合計{guideCategories.length}カテゴリー。気になるカテゴリーから直接記事を読めます。
            </p>
          </div>

          <div className="space-y-16">
            {pillarOrder.map((pillar) => {
              const cats = guideCategories.filter((c) => c.pillar === pillar);
              if (cats.length === 0) return null;
              return (
                <div key={pillar}>
                  <div className="flex items-end justify-between mb-6 border-b border-slate-300 pb-3">
                    <h3 className="text-xl lg:text-2xl font-extrabold text-navy-900">
                      {pillarLabels[pillar]}
                    </h3>
                    <Link
                      href={`/${pillar}`}
                      className="text-xs font-bold text-navy-700 hover:underline"
                    >
                      {pillarLabels[pillar].split("｜")[1] ?? "詳しく見る"}トップへ →
                    </Link>
                  </div>

                  <div className="space-y-10">
                    {cats.map((c) => (
                      <CategoryWithArticles key={c.slug} category={c} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* エリアから探す */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-bold tracking-widest text-navy-700 mb-3 flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              AREAS
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">エリアから探す</h2>
            <p className="mt-4 text-ink-600 text-sm max-w-xl mx-auto">
              セブ島の{areas.length}エリアごとに、生活・住まい・学校・仕事に関する記事を整理。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {areas.map((a) => (
              <AreaWithArticles key={a.slug} area={a} />
            ))}
          </div>
        </div>
      </section>

      <ConsultationCta />
      <StickyCta />
    </>
  );
}

/**
 * エリア1つにつき、エリア特化記事を最大 3 件表示。
 * 本文公開済み: 通常リンク行
 * 本文未公開: 「執筆予定」バッジ付きの非リンク行
 */
function AreaWithArticles({ area }: { area: Area }) {
  const allArticles = getArticlesByArea(area.slug);
  const articles = allArticles.slice(0, 3);
  const publishedCount = allArticles.filter((a) => isArticlePublished(a.slug)).length;
  const hasMore = allArticles.length > 3;

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
      {/* エリアヘッダー */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 sm:p-6 border-b border-slate-200">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "w-12 h-12 rounded-xl bg-gradient-to-br shrink-0",
              area.gradient
            )}
          />
          <div>
            <div className="flex items-baseline gap-2">
              <h4 className="font-extrabold text-base lg:text-lg">{area.name}</h4>
              <span className="text-xs text-ink-600">{area.nameEn}</span>
            </div>
            <p className="text-xs text-ink-600 mt-1 leading-relaxed line-clamp-2">
              {area.oneLiner}
            </p>
            {allArticles.length > 0 && (
              <p className="text-[10px] text-ink-600 mt-1">
                公開{publishedCount}本 / 執筆予定{allArticles.length - publishedCount}本
              </p>
            )}
          </div>
        </div>
        <Link
          href={`/areas/${area.slug}`}
          className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-navy-700 hover:underline self-start sm:self-center"
        >
          エリア詳細 <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      {/* 記事一覧 or 準備中 */}
      <div className="p-5 sm:p-6">
        {articles.length === 0 ? (
          <p className="text-sm text-ink-600 text-center py-4">
            {area.name}に関する記事は準備中です。
          </p>
        ) : (
          <>
            <ul className="space-y-3">
              {articles.map((a) =>
                isArticlePublished(a.slug) ? (
                  <PublishedAreaRow key={a.slug} article={a} />
                ) : (
                  <PlannedAreaRow key={a.slug} article={a} />
                )
              )}
            </ul>
            {hasMore && (
              <div className="mt-5 text-center">
                <Link
                  href={`/areas/${area.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-navy-700 hover:underline"
                >
                  「{area.name}」関連の記事をすべて見る（全{allArticles.length}件）
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function PublishedAreaRow({ article }: { article: GuideArticle }) {
  const category = getCategory(article.categorySlug);
  return (
    <li>
      <Link
        href={`/guide/${article.slug}`}
        className="flex items-start gap-3 p-3 -m-3 rounded-xl hover:bg-white transition-colors"
      >
        <div
          className={cn(
            "w-16 h-16 rounded-lg bg-gradient-to-br shrink-0 grain",
            article.gradient
          )}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[11px] text-ink-600">
            {category && (
              <>
                <span className="font-bold text-navy-700">{category.name}</span>
                <span>·</span>
              </>
            )}
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readingMinutes}分
            </span>
          </div>
          <h5 className="mt-1 font-bold text-sm leading-snug line-clamp-2">
            {article.title}
          </h5>
        </div>
      </Link>
    </li>
  );
}

function PlannedAreaRow({ article }: { article: GuideArticle }) {
  const category = getCategory(article.categorySlug);
  return (
    <li>
      <div className="flex items-start gap-3 p-3 -m-3 rounded-xl">
        <div
          className={cn(
            "w-16 h-16 rounded-lg bg-gradient-to-br shrink-0 grain relative",
            article.gradient
          )}
        >
          <div className="absolute inset-0 bg-white/40 rounded-lg" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[11px] text-ink-600 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-navy-900 text-white px-1.5 py-0.5 rounded">
              <FileEdit className="h-2.5 w-2.5" />
              執筆予定
            </span>
            {category && (
              <>
                <span className="font-bold text-navy-700">{category.name}</span>
                <span>·</span>
              </>
            )}
            <span>約{article.readingMinutes}分</span>
          </div>
          <h5 className="mt-1 font-bold text-sm leading-snug line-clamp-2 text-ink-700">
            {article.title}
          </h5>
        </div>
      </div>
    </li>
  );
}

/**
 * カテゴリ1つにつき、説明＋本文公開済みの記事 3 件を表示。
 * 4件以上ある場合は「カテゴリー一覧へ」で当該カテゴリページへ誘導。
 */
function CategoryWithArticles({ category }: { category: GuideCategory }) {
  const allArticles = getArticlesByCategory(category.slug).filter((a) =>
    isArticlePublished(a.slug)
  );
  const articles = [...allArticles]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 3);
  const hasMore = allArticles.length > 3;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* カテゴリヘッダー */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 sm:p-6 border-b border-slate-200">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "w-12 h-12 rounded-xl bg-gradient-to-br shrink-0",
              category.gradient
            )}
          />
          <div>
            <h4 className="font-extrabold text-base lg:text-lg">{category.name}</h4>
            <p className="text-xs text-ink-600 mt-1 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
        <Link
          href={`/guide/category/${category.slug}`}
          className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-navy-700 hover:underline self-start sm:self-center"
        >
          一覧 <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      {/* 記事一覧 or 準備中 */}
      <div className="p-5 sm:p-6">
        {articles.length === 0 ? (
          <p className="text-sm text-ink-600 text-center py-4">
            このカテゴリーの記事は準備中です。順次公開していきます。
          </p>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.map((a) => (
                <ArticleMiniCard key={a.slug} article={a} />
              ))}
            </div>
            {hasMore && (
              <div className="mt-5 text-center">
                <Link
                  href={`/guide/category/${category.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-navy-700 hover:underline"
                >
                  「{category.name}」の記事をすべて見る（全{allArticles.length}件）
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function ArticleMiniCard({ article }: { article: GuideArticle }) {
  return (
    <Link
      href={`/guide/${article.slug}`}
      className="card-hover block bg-slate-50 rounded-xl overflow-hidden border border-slate-200"
    >
      <div className={cn("aspect-[16/9] grain bg-gradient-to-br", article.gradient)} />
      <div className="p-4">
        <div className="flex items-center gap-2 text-[11px] text-ink-600">
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
        <h5 className="mt-2 font-bold text-sm leading-snug line-clamp-2">
          {article.title}
        </h5>
      </div>
    </Link>
  );
}
