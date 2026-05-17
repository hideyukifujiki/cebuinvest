"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import {
  getLatestArticles,
  getCategory,
  type PillarKey,
} from "@/lib/guide";
import { isArticlePublished } from "@/content/articles";

type TabId = "all" | PillarKey;

type DisplayArticle = {
  slug: string;
  pillar: PillarKey;
  pillarLabel: string;
  date: string;
  title: string;
  excerpt: string;
  gradient: string;
};

const pillarLabel: Record<PillarKey, string> = {
  study: "Study",
  live: "Live",
  work: "Work",
  invest: "Invest",
  areas: "Areas",
};

const tabs: { id: TabId; label: string }[] = [
  { id: "all", label: "すべて" },
  { id: "study", label: "Study" },
  { id: "live", label: "Live" },
  { id: "work", label: "Work" },
  { id: "invest", label: "Invest" },
];

/**
 * トップページ「Guide 最新記事」セクション。
 * - guide.ts の記事メタデータから最新を取得。
 * - articles/index.ts の registry に本文が登録済みの記事だけを表示（404 防止）。
 * - カテゴリ → pillar の対応で Study / Live / Work / Invest タブを動的に切り替え。
 * 新しい記事を追加するときは guide.ts と registry を更新するだけで、ここは触らなくて良い。
 */
export function LatestGuide() {
  const [active, setActive] = useState<TabId>("all");

  // 本文が公開済みの記事のみに絞り、最新順で 6 件まで取得。
  const articles = useMemo<DisplayArticle[]>(() => {
    return getLatestArticles(50)
      .filter((a) => isArticlePublished(a.slug))
      .map((a) => {
        const cat = getCategory(a.categorySlug);
        const pillar: PillarKey = cat?.pillar ?? "live";
        return {
          slug: a.slug,
          pillar,
          pillarLabel: pillarLabel[pillar],
          date: a.publishedAt,
          title: a.title,
          excerpt: a.excerpt,
          gradient: a.gradient,
        };
      });
  }, []);

  const filtered = useMemo(
    () =>
      active === "all"
        ? articles.slice(0, 6)
        : articles.filter((a) => a.pillar === active).slice(0, 6),
    [active, articles]
  );

  return (
    <section id="guide" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <SectionHeading
            eyebrow="SECTION 06"
            title="Guide 最新記事"
            lead="セブ島での「学ぶ・暮らす・働く・投資する」を深掘りする読み物。"
            align="left"
            className="max-w-xl"
          />
          <Link
            href="/guide"
            className="self-start lg:self-auto cta-secondary inline-flex items-center gap-2 px-5 py-3 bg-white text-navy-900 font-bold rounded-xl border border-navy-900 text-sm"
          >
            すべての記事を見る →
          </Link>
        </div>

        {/* タブ */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-8 border-b border-slate-200">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={cn(
                "shrink-0 px-4 py-2 text-sm border-b-2 transition-colors",
                active === t.id
                  ? "border-navy-900 text-navy-900 font-bold"
                  : "border-transparent text-ink-600 hover:text-navy-900"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-ink-600 text-sm">このカテゴリの記事は準備中です。</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <Link
                key={a.slug}
                href={`/guide/${a.slug}`}
                className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200"
              >
                <div className={cn("aspect-[16/9] grain bg-gradient-to-br", a.gradient)} />
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-ink-600">
                    <span className="font-bold text-navy-700">{a.pillarLabel}</span>
                    <span>·</span>
                    <span>{a.date}</span>
                  </div>
                  <h3 className="mt-2 font-extrabold text-base leading-snug">{a.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 line-clamp-2">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
