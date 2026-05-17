import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, Clock, GraduationCap, Heart, Home, Info } from "lucide-react";
import { PillarLayout } from "@/components/pillar/PillarLayout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { RelatedArticles } from "@/components/guide/RelatedArticles";
import { siteConfig } from "@/lib/site.config";
import { investThemes } from "@/lib/invest-themes";

export const metadata: Metadata = {
  title: "セブ島に投資する｜不動産、教育、英語、家族の未来",
  description:
    "セブ島への投資は不動産だけではありません。教育、英語、ビジネス、家族の未来、長期滞在まで。煽らない、冷静な情報提供で投資の選択肢を整理します。",
  alternates: { canonical: "/invest" },
};

const themeIconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Heart: Heart,
  Clock: Clock,
  Briefcase: Briefcase,
  Home: Home,
} as const;

const risks = [
  { num: "01", title: "為替リスク", description: "ペソ／円の変動が長期で大きく影響する。複数シナリオで検討。" },
  { num: "02", title: "外国人保有規制", description: "不動産は土地保有が制限される。コンドミニアム・条件等を確認。" },
  { num: "03", title: "税制・規制の変動", description: "税率・ビザ要件・優遇制度は変わる。最新を確認する習慣を。" },
  { num: "04", title: "流動性", description: "不動産は売却まで時間がかかる。出口戦略を最初に考える。" },
  { num: "05", title: "運用コスト", description: "管理費・修繕積立・税金・空室・送金コスト。総コストで判断。" },
  { num: "06", title: "専門家の関与", description: "税理士・弁護士・現地パートナー。早い段階での関与が安全。" },
];

const recommendedAreas = [
  { name: "ビジネスパーク", nameEn: "Business Park", slug: "business-park", description: "中心地。経営層の住居・オフィス需要が安定。", tag: "都心型", gradient: "from-navy-900 to-sky-500" },
  { name: "ITパーク", nameEn: "IT Park", slug: "it-park", description: "BPO 企業集積。賃貸需要が読みやすい。", tag: "テック型", gradient: "from-sky-500 to-navy-700" },
  { name: "マクタン", nameEn: "Mactan", slug: "mactan", description: "空港・リゾート需要。短期賃貸との相性。", tag: "リゾート型", gradient: "from-teal-400 to-sky-500" },
];

const faqs = [
  { q: "不動産以外の「投資」とは具体的に何ですか？", a: "英語・教育・家族の海外経験・長期滞在・ビジネス展開など、長期で人生の選択肢を広げる支出をすべて「投資」と捉えています。短期の支出に見えても、10年単位で見ると人生のリターンが大きい場合があります。" },
  { q: "セブ島不動産は本当に儲かりますか？", a: "「儲かる／儲からない」と断定はできません。為替、規制、賃貸需要、流動性、税制すべてが日本と異なるため、利回りだけで判断するのは危険です。総コストと出口戦略をセットで検討してください。" },
  { q: "セブインベストは不動産を仲介・斡旋しますか？", a: "セブインベストはガイドメディアです。物件の販売・仲介はしません。検討の整理が進んだ段階で、信頼できる現地パートナー・専門家をご紹介することは可能です。" },
  { q: "ビジネス投資はどんなテーマがありますか？", a: "英語人材を活用したオフショア・BPO、教育、観光、リゾート、テックなど。最低資本金や外国人持株比率は業種で異なります。" },
];

export default function InvestPage() {
  return (
    <PillarLayout
      pillarName="投資する"
      pillarEn="Invest"
      breadcrumbBg="bg-sun-50"
      consultHeading="投資の「結論」よりも、「整理」を一緒に。"
      consultPrimaryLabel="投資テーマを相談する"
      consultSecondary={{ label: "不動産を相談する", href: siteConfig.consultFormUrl }}
      stickyCtaLabel="投資テーマを相談する"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sun-50 via-white to-navy-50">
        <svg className="absolute -top-20 -right-40 w-[700px] h-[700px] opacity-25" viewBox="0 0 600 600" aria-hidden="true">
          <circle cx="300" cy="300" r="260" stroke="#F5C518" strokeWidth="2" fill="none" strokeDasharray="4 8" />
          <circle cx="490" cy="140" r="48" fill="#F5C518" opacity="0.5" />
        </svg>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sun-50 text-navy-900 text-xs font-bold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sun-500" />
              INVEST ｜ セブ島に投資する
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.2] tracking-tight">
              投資は、お金だけではない。
              <br />
              <span className="text-navy-900">人生の選択肢への投資。</span>
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-ink-600 max-w-2xl">
              不動産、ビジネス、教育、英語、家族の未来、長期滞在。
              <br className="hidden lg:block" />
              セブインベストは「煽らない」を編集方針に、冷静に整理します。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={siteConfig.consultFormUrl} target="_blank" rel="noopener noreferrer" className="cta-primary inline-flex items-center gap-2 px-6 py-4 bg-sun-500 text-ink-900 font-bold rounded-2xl text-base shadow-soft">
                投資テーマを相談する <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
              </a>
              <a href="#themes" className="cta-secondary inline-flex items-center gap-2 px-6 py-4 bg-white text-navy-900 font-bold rounded-2xl text-base border-2 border-navy-900">
                6つのテーマを見る
              </a>
            </div>
            <div className="mt-10 inline-flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl max-w-xl">
              <Info className="h-5 w-5 text-navy-900 shrink-0 mt-0.5" />
              <div className="text-xs text-ink-600 leading-relaxed">
                本ページは一般情報であり、個別の投資助言ではありません。投資には為替・市況・規制等のリスクがあり、収益を保証するものではありません。実際の意思決定前に、税理士・弁護士・FAなど専門家にご相談ください。
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sun-50 to-white" />
              <svg viewBox="0 0 300 300" className="relative w-full h-full" aria-hidden="true">
                <circle cx="150" cy="150" r="140" fill="#F2FAFE" />
                <line x1="50" y1="220" x2="250" y2="220" stroke="#475569" strokeWidth="1.5" />
                <line x1="50" y1="60" x2="50" y2="220" stroke="#475569" strokeWidth="1.5" />
                <rect x="65" y="180" width="22" height="40" fill="#1B5BC4" />
                <rect x="95" y="160" width="22" height="60" fill="#1B5BC4" />
                <rect x="125" y="140" width="22" height="80" fill="#1B5BC4" />
                <rect x="155" y="115" width="22" height="105" fill="#0B3A8B" />
                <rect x="185" y="95" width="22" height="125" fill="#0B3A8B" />
                <rect x="215" y="75" width="22" height="145" fill="#0B3A8B" />
                <path d="M 76 175 L 106 155 L 136 135 L 166 110 L 196 90 L 226 70" stroke="#F5C518" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="226" cy="70" r="8" fill="#F5C518" stroke="#FFFFFF" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <svg className="block w-full h-12 -mt-1" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30 Q 150 0 300 30 T 600 30 T 900 30 T 1200 30 V60 H0 Z" fill="#FFFFFF" />
        </svg>
      </section>

      {/* LEAD */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold leading-relaxed">
            「セブで儲かる」ではなく、
            <br />
            <span className="text-navy-900">「セブで未来の選択肢を増やす」</span>。
          </h2>
          <p className="mt-6 text-base text-ink-600 leading-relaxed">
            投資を不動産だけに閉じない、というのがセブインベストの編集方針です。お金、英語、教育、家族の海外経験、長期滞在、ビジネス、不動産。投資の対象を広く捉えて、人生の選択肢を増やすという観点で整理します。
          </p>
        </div>
      </section>

      {/* THEMES — 6 個別ページへリンク */}
      <section id="themes" className="py-16 lg:py-24 bg-sun-50/60">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="6 INVEST THEMES"
            title="セブ島への投資、6つのテーマ"
            lead="不動産はその中の 1 つ。広く捉えて、自分に合うものから始める。各カードをクリックで詳細ページへ。"
            className="mb-12 lg:mb-16"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {investThemes.map((t) => {
              const Icon = themeIconMap[t.iconName];
              return (
                <Link
                  key={t.slug}
                  href={`/invest/${t.slug}`}
                  className={`card-hover group flex flex-col bg-white rounded-2xl p-7 border ${
                    t.accent ? "border-slate-200 ring-2 ring-sun-500/30" : "border-slate-200"
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-sun-50 flex items-center justify-center mb-5 text-navy-900">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-xs font-bold text-navy-700 tracking-widest">{t.eyebrow}</div>
                  <h3 className="text-lg font-extrabold mt-1">{t.title}</h3>
                  <p className="mt-3 text-sm text-ink-600 leading-relaxed flex-1">{t.shortDescription}</p>
                  {t.accent && (
                    <div className="mt-3 text-[10px] font-bold bg-sun-50 text-navy-900 px-2 py-1 rounded-full inline-block self-start">
                      1テーマとして扱う
                    </div>
                  )}
                  <span className="mt-4 text-sm font-bold text-navy-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    詳しく見る →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* REAL ESTATE は1テーマ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="bg-gradient-to-br from-navy-900 to-navy-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sun-500 text-ink-900 text-xs font-bold tracking-wide mb-4">
                REAL ESTATE
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
                セブ島不動産は、
                <br />
                「煽らない」前提で見る。
              </h2>
              <p className="mt-6 text-base lg:text-lg text-white/85 leading-relaxed">
                セブインベストは、不動産を「最大の主役」にはしません。セブ島／フィリピンの不動産は、為替・規制・賃貸需要・流動性・税制すべてが日本と異なります。「高利回り」だけで判断するのではなく、生活・教育・ビジネスの目的と合わせて検討するのが原則です。
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                <div className="bg-white/10 rounded-xl px-4 py-3">
                  <div className="text-xs text-white/70">扱う観点</div>
                  <div className="font-bold mt-1">為替／規制／賃貸需要／税制</div>
                </div>
                <div className="bg-white/10 rounded-xl px-4 py-3">
                  <div className="text-xs text-white/70">扱わない</div>
                  <div className="font-bold mt-1">高利回り煽り／断定的予測</div>
                </div>
              </div>
              <a
                href={siteConfig.consultFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sun-500 font-bold"
              >
                不動産テーマを相談する →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RISKS */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="RISK & ASSUMPTIONS"
            title="投資の前に、確認しておきたい前提"
            lead="「儲かる前」ではなく「決める前」に、必ず整理する 6 つの観点。"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {risks.map((r) => (
              <div key={r.num} className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="text-xs font-bold text-navy-700 tracking-widest">{r.num}</div>
                <div className="font-bold text-lg mt-1">{r.title}</div>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading eyebrow="INVEST × AREA" title="投資視点でよく語られるエリア" className="mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recommendedAreas.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200">
                <div className={`aspect-[16/9] bg-gradient-to-br ${a.gradient} relative`}>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold bg-white/95 text-navy-900 px-2 py-0.5 rounded-full">{a.tag}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-extrabold text-base">{a.name}</h3>
                    <span className="text-xs text-ink-600">{a.nameEn}</span>
                  </div>
                  <p className="text-sm text-ink-600 mt-2">{a.description}</p>
                </div>
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
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">よくある質問</h2>
          </div>
          <FaqList items={faqs} />
          <p className="mt-8 text-xs text-ink-600 text-center">
            本ページは一般情報であり、個別の投資・税務・法務助言ではありません。為替・規制・税制は変動します。実際の意思決定の前に、税理士・弁護士・ファイナンシャルアドバイザー等の専門家にご相談ください。
          </p>
        </div>
      </section>

      {/* 関連カテゴリーの記事 */}
      <RelatedArticles
        categorySlug="education-invest"
        limit={3}
        heading="投資カテゴリーの最新記事"
        lead="教育・英語・家族・長期滞在・ビジネス・不動産に関する記事を順次公開しています。"
      />
    </PillarLayout>
  );
}
