import Link from "next/link";
import {
  AlertCircle, ArrowRight, BookOpen, Briefcase, Check, Clock,
  Coins, GraduationCap, Heart, Home as HomeIcon, Info,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FaqList } from "@/components/ui/FaqList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RelatedArticles } from "@/components/guide/RelatedArticles";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { StickyCta } from "@/components/layout/StickyCta";
import { siteConfig } from "@/lib/site.config";
import {
  type InvestTheme,
  getRelatedInvestThemes,
} from "@/lib/invest-themes";

type Props = { theme: InvestTheme };

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Heart: Heart,
  Clock: Clock,
  Briefcase: Briefcase,
  Home: HomeIcon,
} as const;

export function InvestThemeTemplate({ theme }: Props) {
  const Icon = iconMap[theme.iconName];
  const related = getRelatedInvestThemes(theme.slug);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "投資する", href: "/invest" },
          { label: theme.title },
        ]}
        bgClassName="bg-sun-50"
      />

      {/* HERO */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${theme.gradient} text-white`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <circle cx="200" cy="100" r="80" fill="#FFFFFF" />
            <circle cx="1000" cy="380" r="120" fill="#FFFFFF" />
            <circle cx="600" cy="250" r="50" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-xs font-bold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sun-500" />
              INVEST ｜ {theme.eyebrow}
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.2] tracking-tight">
              {theme.title}
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-white/90 max-w-2xl">
              {theme.heroLead}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {theme.tags.map((tag) => (
                <span key={tag} className="text-xs font-bold bg-white/15 text-white px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <a
                href={siteConfig.consultFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary inline-flex items-center gap-2 px-6 py-4 bg-sun-500 text-ink-900 font-bold rounded-2xl text-base shadow-soft"
              >
                {theme.title}について相談する
                <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
              </a>
            </div>

            {/* Hero 下の免責ノート（投資ページ特有） */}
            <div className="mt-8 inline-flex items-start gap-3 p-4 bg-white/10 backdrop-blur border border-white/20 rounded-xl max-w-xl">
              <Info className="h-5 w-5 text-sun-500 shrink-0 mt-0.5" />
              <div className="text-xs text-white/90 leading-relaxed">
                {theme.disclaimer}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon className="w-20 h-20 lg:w-28 lg:h-28 text-white" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + SCOPE / COST */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="text-sm font-bold tracking-widest text-navy-700 mb-3">OVERVIEW</div>
              <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight">
                {theme.title}とは
              </h2>
              <p className="mt-6 text-ink-600 leading-relaxed text-base">{theme.overview}</p>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-sun-50 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <Icon className="h-5 w-5 text-navy-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-navy-700">投資範囲</div>
                    <p className="text-sm mt-1 leading-relaxed">{theme.scopeGuideline}</p>
                  </div>
                </div>
              </div>
              <div className="bg-navy-50 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <Coins className="h-5 w-5 text-navy-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-navy-700">投資額目安</div>
                    <p className="text-sm mt-1 leading-relaxed">{theme.costGuideline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 対象 / リスク・注意点 */}
      <section className="py-16 lg:py-24 bg-sun-50/40">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="FIT & RISKS"
            title={`${theme.title}の対象と、リスク・注意点`}
            lead="判断軸を明確にして、自分の状況とリスク許容度で整える。"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-palm-50 flex items-center justify-center">
                  <Check className="h-5 w-5 text-palm-500" strokeWidth={3} />
                </div>
                <h3 className="text-lg font-extrabold">こんな人向け</h3>
              </div>
              <ul className="space-y-3">
                {theme.forWhom.map((item, i) => (
                  <li key={i} className="text-sm text-ink-700 leading-relaxed flex items-start gap-2">
                    <span className="text-palm-500 font-bold mt-0.5">・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-sun-50 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-sun-600" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-extrabold">リスク・注意点</h3>
              </div>
              <ul className="space-y-3">
                {theme.cautions.map((item, i) => (
                  <li key={i} className="text-sm text-ink-700 leading-relaxed flex items-start gap-2">
                    <span className="text-sun-600 font-bold mt-0.5">・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 判断軸 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="HOW TO DECIDE"
            title="判断軸"
            lead="数字や利回りだけで決めず、目的・リスク許容度・出口戦略を含めて整える。"
            className="mb-12"
          />
          <div className="space-y-3">
            {theme.selectionPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200"
              >
                <div className="w-9 h-9 rounded-lg bg-sun-50 flex items-center justify-center shrink-0">
                  <span className="font-bold text-navy-900">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <div className="font-bold">{point.title}</div>
                  <p className="text-sm text-ink-600 mt-1 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 推奨エリア */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="RECOMMENDED AREAS"
            title={`${theme.title}に関連するエリア`}
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {theme.recommendedAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="card-hover bg-white rounded-2xl p-6 border border-slate-200"
              >
                <div className="flex items-baseline gap-2">
                  <h3 className="font-extrabold text-lg">{area.name}</h3>
                  <span className="text-xs text-ink-600">{area.nameEn}</span>
                </div>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">{area.reason}</p>
                <span className="mt-4 inline-flex text-sm font-bold text-navy-700">
                  エリアを見る →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-bold tracking-widest text-navy-700 mb-3">FAQ</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
              よくある質問
            </h2>
          </div>
          <FaqList items={theme.faqs} />
          <p className="mt-8 text-xs text-ink-600 text-center">
            投資情報は変動します。実際の意思決定の前に、税理士・弁護士・ファイナンシャルアドバイザー等の専門家にご相談ください。
          </p>
        </div>
      </section>

      {/* 関連する投資テーマ */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24 bg-sun-50/40">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <SectionHeading eyebrow="RELATED INVEST THEMES" title="関連する投資テーマ" className="mb-12" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/invest/${r.slug}`}
                  className="card-hover bg-white rounded-2xl p-6 border border-slate-200"
                >
                  <div className="text-xs font-bold text-navy-700 tracking-widest">{r.eyebrow}</div>
                  <h3 className="text-lg font-extrabold mt-1">{r.title}</h3>
                  <p className="text-sm text-ink-600 mt-2 leading-relaxed">{r.shortDescription}</p>
                  <span className="mt-4 inline-flex text-sm font-bold text-navy-700">
                    詳しく見る →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 関連カテゴリーの記事 */}
      <RelatedArticles
        categorySlug={theme.relatedGuideCategory}
        limit={3}
        bgClassName="bg-slate-50"
      />

      {/* 投資ページ末尾の全体免責 */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="bg-navy-900 text-white rounded-2xl p-6 lg:p-8">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-sun-500 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-sun-500 mb-2">DISCLAIMER</div>
                <p className="text-sm text-white/85 leading-relaxed">{theme.disclaimer}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConsultationCta
        heading={`${theme.title}について、一緒に整理します。`}
        primaryLabel={`${theme.title}を相談する`}
        secondary={{ label: "投資のトップへ", href: "/invest" }}
      />

      <StickyCta label={`${theme.title}を相談する`} />
    </>
  );
}
