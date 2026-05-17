import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FaqList } from "@/components/ui/FaqList";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { StickyCta } from "@/components/layout/StickyCta";
import { AreaArticles } from "@/components/area/AreaArticles";
import {
  type Area,
  getNearbyAreas,
  pillarLabel,
  type AreaPillar,
} from "@/lib/areas";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";

type Props = {
  area: Area;
};

const perspectiveEyebrow: Record<string, { tone: string; bg: string; label: string }> = {
  study: { tone: "text-navy-700", bg: "bg-sky-50", label: "PERSPECTIVE — 学ぶ" },
  live: { tone: "text-palm-500", bg: "bg-white", label: "PERSPECTIVE — 暮らす" },
  work: { tone: "text-teal-400", bg: "bg-teal-50", label: "PERSPECTIVE — 働く" },
  invest: { tone: "text-navy-700", bg: "bg-white", label: "PERSPECTIVE — 投資" },
  tourism: { tone: "text-navy-700", bg: "bg-sky-50", label: "PERSPECTIVE — 観光" },
};

export function AreaTemplate({ area }: Props) {
  const nearby = getNearbyAreas(area.slug);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "エリア", href: "/areas" },
          { label: `${area.name}（${area.nameEn}）` },
        ]}
      />

      {/* HERO */}
      <section
        className={cn(
          "relative overflow-hidden text-white bg-gradient-to-br",
          area.gradient
        )}
      >
        {/* 装飾ビル群 */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15"
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect x="60" y="180" width="80" height="320" fill="#FFFFFF" />
          <rect x="150" y="120" width="90" height="380" fill="#FFFFFF" />
          <rect x="250" y="160" width="80" height="340" fill="#FFFFFF" />
          <rect x="340" y="90" width="100" height="410" fill="#FFFFFF" />
          <rect x="450" y="140" width="85" height="360" fill="#FFFFFF" />
          <rect x="545" y="100" width="95" height="400" fill="#FFFFFF" />
          <rect x="650" y="170" width="80" height="330" fill="#FFFFFF" />
          <rect x="740" y="130" width="90" height="370" fill="#FFFFFF" />
          <rect x="840" y="110" width="100" height="390" fill="#FFFFFF" />
          <rect x="950" y="150" width="85" height="350" fill="#FFFFFF" />
          <rect x="1045" y="190" width="95" height="310" fill="#FFFFFF" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-14 lg:pt-20 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-white text-xs font-bold tracking-wide mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-sun-500" />
                AREA GUIDE ｜ {area.nameEn}
              </div>
              <div className="flex items-baseline gap-3 flex-wrap">
                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
                  {area.name}
                </h1>
                <span className="text-xl lg:text-2xl text-white/70 font-bold">
                  {area.nameEn}
                </span>
              </div>
              <p className="mt-5 text-base lg:text-lg leading-relaxed text-white/85 max-w-2xl">
                {area.heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {area.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={cn(
                      "text-xs font-bold px-3 py-1.5 rounded-full",
                      i < 2
                        ? "bg-sun-500 text-ink-900"
                        : "bg-white/15 text-white"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-xs font-bold text-sun-500 tracking-widest mb-4">
                  QUICK FACTS
                </div>
                <dl className="space-y-3 text-sm">
                  {area.quickFacts.map((f, i) => (
                    <div key={i} className="flex justify-between gap-3">
                      <dt className="text-white/70">{f.label}</dt>
                      <dd className="font-bold text-right">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* TOC */}
          <div className="mt-12 lg:mt-16 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/70">
            <span className="font-bold text-white/90">目次：</span>
            <a href="#fit" className="hover:text-white">
              向く人
            </a>
            {area.perspectives.map((p, i) => (
              <a key={i} href={`#perspective-${p.pillar}`} className="hover:text-white">
                {pillarLabel[p.pillar as AreaPillar] ?? "観光"}
              </a>
            ))}
            <a href="#spots" className="hover:text-white">
              スポット
            </a>
            <a href="#nearby" className="hover:text-white">
              隣接
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </div>
        </div>
      </section>

      {/* FIT MATRIX */}
      <section id="fit" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-sm font-bold tracking-widest text-navy-700 mb-3">
              FIT MATRIX
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
              {area.name}は、誰に向くか？
            </h2>
            <p className="mt-4 text-ink-600">
              {area.fitScores.length} つの「目的」で見た、{area.name}の相性スコア。
            </p>
          </div>
          <div className="space-y-4">
            {area.fitScores.map((f, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-32 lg:w-40 shrink-0 font-bold text-sm lg:text-base">
                  {f.label}
                </div>
                <div className="flex-1 h-7 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-1000",
                      f.score >= 70 ? "bg-navy-900" : "bg-sky-500"
                    )}
                    style={{ width: `${f.score}%` }}
                  />
                </div>
                <div
                  className={cn(
                    "w-12 text-right font-extrabold",
                    f.score >= 70 ? "text-navy-900" : "text-sky-500"
                  )}
                >
                  {f.score}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-ink-600 text-center">
            ※ 編集部によるエリア横断の相対スコア。絶対値ではありません。
          </p>
        </div>
      </section>

      {/* PERSPECTIVES */}
      {area.perspectives.map((p, i) => {
        const eyebrow = perspectiveEyebrow[p.pillar] ?? perspectiveEyebrow.tourism;
        return (
          <section
            key={i}
            id={`perspective-${p.pillar}`}
            className={cn("py-16 lg:py-24", i % 2 === 0 ? eyebrow.bg : "bg-white")}
          >
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-4">
                  <div className={cn("text-sm font-bold tracking-widest mb-3", eyebrow.tone)}>
                    {eyebrow.label}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
                    {p.heading}
                  </h3>
                  <p className="mt-4 text-ink-600 leading-relaxed">{p.lead}</p>
                </div>
                <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                  {p.cards.map((c, j) => (
                    <div
                      key={j}
                      className="bg-white rounded-2xl p-6 border border-slate-200"
                    >
                      <div className="font-bold">{c.title}</div>
                      <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Invest セクションには免責 */}
              {p.pillar === "invest" && area.investDisclaimer && (
                <div className="mt-8 lg:mt-12 max-w-3xl mx-auto bg-navy-900 text-white rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-sun-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-white/85 leading-relaxed">
                      {area.investDisclaimer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* SPOTS */}
      <section id="spots" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-sm font-bold tracking-widest text-navy-700 mb-3">
              SPOTS
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
              代表的なスポット
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {area.spots.map((s, i) => (
              <div
                key={i}
                className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200"
              >
                <div
                  className={cn(
                    "aspect-[16/9] bg-gradient-to-br relative",
                    s.gradient
                  )}
                >
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold bg-sun-500 text-navy-900 px-2 py-0.5 rounded-full">
                      SPOT {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-base">{s.title}</h3>
                  <p className="text-xs text-ink-600 mt-1">{s.caption}</p>
                  <p className="text-sm text-ink-600 mt-3 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY */}
      {nearby.length > 0 && (
        <section id="nearby" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-sm font-bold tracking-widest text-navy-700 mb-3">
                NEARBY AREAS
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
                隣接エリアと比較
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/areas/${n.slug}`}
                  className="card-hover bg-white rounded-2xl p-6 border border-slate-200"
                >
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-extrabold text-lg">{n.name}</h3>
                    <span className="text-xs text-ink-600">{n.nameEn}</span>
                  </div>
                  <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                    {n.oneLiner}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-bold text-navy-700">
                    {n.name}を見る →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-bold tracking-widest text-navy-700 mb-3">
              FAQ
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
              よくある質問
            </h2>
          </div>
          <FaqList items={area.faqs} />
        </div>
      </section>

      {/* AREA-SPECIFIC ARTICLES */}
      <AreaArticles
        areaSlug={area.slug}
        areaName={area.name}
        limit={3}
        bgClassName="bg-white"
      />

      {/* CONSULTATION CTA */}
      <ConsultationCta
        heading={`${area.name}で何を実現したいか、一緒に整理します。`}
        primaryLabel={`${area.name}について相談する`}
        secondary={{ label: "他のエリアを見る", href: "/areas" }}
      />

      <StickyCta label={`${area.name}について相談する`} />
    </>
  );
}
