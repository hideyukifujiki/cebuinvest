import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, FolderOpen, User } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ArticleBody } from "@/components/guide/ArticleBody";
import { RelatedArticles } from "@/components/guide/RelatedArticles";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { StickyCta } from "@/components/layout/StickyCta";
import {
  getArticle,
  getCategory,
  guideArticles,
} from "@/lib/guide";
import { getArticleBody } from "@/content/articles";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return guideArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/guide/${article.slug}` },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const category = getCategory(article.categorySlug);
  const body = getArticleBody(slug);

  // Article 構造化データ
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guide/${article.slug}` },
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "Guide", href: "/guide" },
          ...(category ? [{ label: category.name, href: `/guide/category/${category.slug}` }] : []),
          { label: article.title },
        ]}
      />

      {/* HERO */}
      <section className={cn("relative overflow-hidden text-white py-16 lg:py-20 bg-gradient-to-br grain", article.gradient)}>
        <div className="relative max-w-3xl mx-auto px-5 lg:px-8">
          {category && (
            <Link
              href={`/guide/category/${category.slug}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-xs font-bold tracking-wide mb-6 hover:bg-white/25 transition-colors"
            >
              <FolderOpen className="h-3 w-3" />
              {category.name}
            </Link>
          )}
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/85">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative w-5 h-5 rounded-full overflow-hidden bg-white">
                <Image src="/editor-team.png" alt="編集チーム" fill sizes="20px" className="object-cover" />
              </span>
              {article.author}
            </span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />公開 {article.publishedAt}</span>
            {article.updatedAt && (
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />更新 {article.updatedAt}</span>
            )}
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />読了 {article.readingMinutes}分</span>
          </div>
        </div>
      </section>

      {/* 本文 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          {/* リード（excerpt） */}
          <p className="text-lg text-ink-700 leading-relaxed font-medium border-l-4 border-navy-700 pl-4 mb-10">
            {article.excerpt}
          </p>

          {body ? (
            // 本文あり：Markdown レンダリング
            <ArticleBody content={body.content} />
          ) : (
            // 本文未執筆：プレースホルダ表示
            <div className="space-y-6 text-ink-700 leading-relaxed">
              <p>
                この記事は現在準備中です。編集部が順次内容を公開していきます。
              </p>
              <p>
                本記事のテーマに関心がある方は、下部の「関連カテゴリーの記事」もご覧ください。
                また、具体的な相談をしたい方は無料の「セブ島相談」をご利用ください。
              </p>
            </div>
          )}

          {/* 免責 */}
          <div className="mt-16 p-5 rounded-2xl bg-slate-50 text-xs text-ink-600 leading-relaxed">
            本記事の情報は一般情報であり、個別の投資・税務・法務・医療助言ではありません。最新情報は各専門家・公式機関にご確認ください。
          </div>

          {/* 著者 */}
          <div className="mt-12 p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-navy-900 bg-white flex-shrink-0">
              <Image
                src="/editor-team.png"
                alt="編集チーム"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-xs text-ink-600">執筆</div>
              <div className="font-bold">{article.author}</div>
              <div className="text-xs text-ink-600 mt-1">Cebu Guide編集部</div>
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center">
            <Link
              href={category ? `/guide/category/${category.slug}` : "/guide"}
              className="inline-flex items-center gap-2 text-navy-700 font-bold hover:gap-3 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              {category ? `「${category.name}」一覧へ戻る` : "Guide トップへ"}
            </Link>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <RelatedArticles
        categorySlug={article.categorySlug}
        limit={3}
        heading="同じカテゴリーの記事"
      />

      <ConsultationCta />
      <StickyCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </>
  );
}
