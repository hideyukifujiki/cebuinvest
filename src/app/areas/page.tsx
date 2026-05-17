import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { StickyCta } from "@/components/layout/StickyCta";
import { areas, pillarLabel } from "@/lib/areas";
import {
  getLatestAreaTaggedArticles,
  getCategory,
  type GuideArticle,
} from "@/lib/guide";
import { isArticlePublished } from "@/content/articles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "セブ島エリアガイド｜11エリアを4視点で比較",
  description:
    "セブ島の主要 11 エリアを「学ぶ・暮らす・働く・投資する」の 4 視点で整理。あなたに合うエリアを見つける。",
  alternates: { canonical: "/areas" },
};

export default function AreasIndexPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "エリア" }]} />

      <section className="bg-gradient-to-br from-navy-50 via-white to-sky-50 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-navy-900 text-xs font-bold tracking-wide mb-6">
            AREAS
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            セブ島エリアガイド
          </h1>
          <p className="mt-6 text-base lg:text-lg text-ink-600 leading-relaxed">
            セブ島の主要 11 エリアを「学ぶ・暮らす・働く・投資する」の 4 視点で整理しました。
            <br className="hidden lg:block" />
            あなたの目的に合うエリアを見つけてください。
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200"
              >
                <div className={`aspect-[16/9] bg-gradient-to-br ${area.gradient} relative`}>
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {area.pillars.slice(0, 3).map((p) => (
                      <span
                        key={p}
                        className="text-[10px] font-bold bg-white/95 text-navy-900 px-2 py-0.5 rounded-full"
                      >
                        {pillarLabel[p]}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-baseline gap-2">
                    <h2 className="font-extrabold text-lg">{area.name}</h2>
                    <span className="text-xs text-ink-600">{area.nameEn}</span>
                  </div>
                  <p className="text-sm text-ink-600 mt-2 leading-relaxed">
                    {area.oneLiner}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-bold text-navy-700">
                    詳しく見る →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AREA-TAGGED ARTICLES */}
      <AreaTaggedArticlesSection />

      <ConsultationCta heading="自分に合うエリアを、一緒に整理します。" />
      <StickyCta label="自分に合うエリアを相談する" />
    </>
  );
}

/**
 * /areas トップ用：エリアタグが付いた最新記事を一覧表示。
 * 本文公開済みの記事のみに絞り、最大 6 件まで表示。
 */
function AreaTaggedArticlesSection() {
  const articles = getLatestAreaTaggedArticles(20)
    .filter((a) => isArticlePublished(a.slug))
    .slice(0, 6);

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <div className="text-sm font-bold tracking-widest text-navy-700 mb-3 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              AREA × GUIDE
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
              エリアに紐づく最新記事
            </h2>
            <p className="mt-3 text-ink-600 text-sm">
              各エリアの生活、住まい、学校、仕事、移動を深掘りする記事を順次公開しています。
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
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
            <p className="text-ink-600">エリア関連の記事を準備中です。</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <AreaTaggedArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function AreaTaggedArticleCard({ article }: { article: GuideArticle }) {
  const category = getCategory(article.categorySlug);
  return (
    <Link
      href={`/guide/${article.slug}`}
      className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200"
    >
      <div className={cn("aspect-[16/9] grain bg-gradient-to-br", article.gradient)} />
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-ink-600 flex-wrap">
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
        {article.areaSlugs && article.areaSlugs.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {article.areaSlugs.slice(0, 4).map((slug) => {
              const a = areas.find((x) => x.slug === slug);
              if (!a) return null;
              return (
                <span
                  key={slug}
                  className="inline-flex items-center gap-1 text-[10px] font-bold bg-sky-50 text-navy-700 px-2 py-0.5 rounded-full"
                >
                  <MapPin className="h-2.5 w-2.5" />
                  {a.name}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </Link>
  );
}
