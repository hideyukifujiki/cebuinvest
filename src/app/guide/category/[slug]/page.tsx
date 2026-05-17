import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { StickyCta } from "@/components/layout/StickyCta";
import {
  getCategory,
  getArticlesByCategory,
  guideCategories,
} from "@/lib/guide";
import { cn } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return guideCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name}｜Guide`,
    description: category.description,
    alternates: { canonical: `/guide/category/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.slug);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "Guide", href: "/guide" },
          { label: category.name },
        ]}
      />

      <section className={cn("relative overflow-hidden text-white py-16 lg:py-20 bg-gradient-to-br", category.gradient)}>
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-xs font-bold tracking-wide mb-6">
            CATEGORY
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">{category.name}</h1>
          <p className="mt-6 text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            {category.description}
          </p>
          <p className="mt-3 text-sm text-white/70">{articles.length} 件の記事</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {articles.length === 0 ? (
            <div className="bg-slate-50 rounded-2xl p-12 text-center">
              <p className="text-ink-600">このカテゴリーの記事は準備中です。</p>
              <Link href="/guide" className="mt-4 inline-flex items-center gap-2 text-navy-700 font-bold hover:gap-3 transition-all">
                Guide トップへ戻る →
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((a) => (
                <Link key={a.slug} href={`/guide/${a.slug}`} className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200">
                  <div className={cn("aspect-[16/9] grain bg-gradient-to-br", a.gradient)} />
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-ink-600">
                      <span className="font-bold text-navy-700">{category.name}</span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{a.publishedAt}</span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{a.readingMinutes}分</span>
                    </div>
                    <h2 className="mt-2 font-extrabold text-base leading-snug">{a.title}</h2>
                    <p className="mt-2 text-sm text-ink-600 line-clamp-2">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <ConsultationCta />
      <StickyCta />
    </>
  );
}
