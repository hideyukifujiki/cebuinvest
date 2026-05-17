import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Briefcase, Building2, Globe, Laptop,
  Rocket, Users, Wifi,
} from "lucide-react";
import { PillarLayout } from "@/components/pillar/PillarLayout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { RelatedArticles } from "@/components/guide/RelatedArticles";
import { siteConfig } from "@/lib/site.config";
import { workStyles } from "@/lib/work-styles";

export const metadata: Metadata = {
  title: "セブ島で働く｜ノマド・現地就職・起業",
  description:
    "セブ島で働く。デジタルノマド、リモートワーク、現地就職、起業、BPO、採用。セブを拠点に世界に出るための実践ガイド。",
  alternates: { canonical: "/work" },
};

const styleIconMap = {
  Wifi: Wifi,
  Laptop: Laptop,
  Building2: Building2,
  Rocket: Rocket,
  Users: Users,
} as const;

const businessBasics = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "現地法人を作る",
    description: "SEC 登録、最低資本金、税制、外国人比率規制を理解する。専門家との連携が必須。",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "採用とチーム作り",
    description: "英語人材の採用相場、雇用契約、福利厚生、評価制度。日本流をそのまま持ち込まない。",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "オフィスを選ぶ",
    description: "コワーキング、サービスオフィス、自社賃借、専有オフィス。フェーズで使い分け。",
  },
];

const recommendedAreas = [
  { name: "ITパーク", nameEn: "IT Park", slug: "it-park", description: "テック企業・コワーキング集積。ノマドに最適。", tag: "ITパーク", gradient: "from-navy-900 to-sky-500" },
  { name: "ビジネスパーク", nameEn: "Business Park", slug: "business-park", description: "高機能オフィスと住まいの両立。経営者向け。", tag: "経営層", gradient: "from-sky-500 to-navy-700" },
  { name: "マクタン", nameEn: "Mactan", slug: "mactan", description: "海近くで集中したい人へ。短期ノマドに人気。", tag: "リゾートノマド", gradient: "from-teal-400 to-sky-500" },
];

const faqs = [
  { q: "観光ビザのままリモートワークしてもよいですか？", a: "日本の雇用主の業務をリモートで行う場合、観光ビザでの一般的な短期滞在では実務上行われています。ただし長期化する場合や現地で報酬を受ける場合はビザ要件が異なるため、専門家への確認が必要です。" },
  { q: "セブで起業するのに最低どのくらい資金が必要ですか？", a: "業種・外国人持株比率により大きく変動します。BPO や輸出比率の高い事業は外資 100% が可能で、最低資本金が低くなるケースもあります。" },
  { q: "英語が話せなくてもセブで採用できますか？", a: "採用面接や日々のマネジメントは英語が前提です。日本語ができる人材もいますが希少で給与水準が上がります。" },
  { q: "BPO 拠点を作りたい場合、何から始めますか？", a: "目的（コスト最適化／英語活用／時差活用）の整理、業務の切り出し、現地パートナー選び、オフィス選定、採用、運用体制の順に設計します。スモールスタートを推奨します。" },
];

export default function WorkPage() {
  return (
    <PillarLayout
      pillarName="働く"
      pillarEn="Work"
      breadcrumbBg="bg-teal-50"
      consultHeading="セブでの働き方を、個人にもチームにも。"
      consultPrimaryLabel="セブでの働き方を相談"
      consultSecondary={{ label: "ビジネス展開を相談", href: siteConfig.consultFormUrl }}
      stickyCtaLabel="セブでの働き方を相談"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-sky-50">
        <svg className="absolute -top-20 -right-40 w-[700px] h-[700px] opacity-25" viewBox="0 0 600 600" aria-hidden="true">
          <circle cx="300" cy="300" r="260" stroke="#2BB7B7" strokeWidth="2" fill="none" strokeDasharray="4 8" />
          <circle cx="490" cy="140" r="48" fill="#F5C518" opacity="0.55" />
        </svg>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-400 text-xs font-bold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              WORK ｜ セブ島で働く
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.2] tracking-tight">
              場所を選ばない働き方を、
              <br />
              <span className="text-navy-900">セブから設計する。</span>
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-ink-600 max-w-2xl">
              デジタルノマド、リモートワーク、現地就職、起業、BPO、採用、オフィス。
              <br className="hidden lg:block" />
              セブを拠点に、自分とチームの働き方を再設計します。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={siteConfig.consultFormUrl} target="_blank" rel="noopener noreferrer" className="cta-primary inline-flex items-center gap-2 px-6 py-4 bg-sun-500 text-ink-900 font-bold rounded-2xl text-base shadow-soft">
                セブ島での働き方を相談する <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
              </a>
              <a href="#styles" className="cta-secondary inline-flex items-center gap-2 px-6 py-4 bg-white text-navy-900 font-bold rounded-2xl text-base border-2 border-navy-900">
                働き方を見る
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div><div className="text-2xl font-extrabold text-navy-900">英語</div><div className="text-xs text-ink-600 mt-1">標準言語</div></div>
              <div><div className="text-2xl font-extrabold text-navy-900">BPO</div><div className="text-xs text-ink-600 mt-1">産業の集積</div></div>
              <div><div className="text-2xl font-extrabold text-navy-900">$3〜</div><div className="text-xs text-ink-600 mt-1">時間給の目安</div></div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-50 to-white" />
              <svg viewBox="0 0 300 300" className="relative w-full h-full" aria-hidden="true">
                <circle cx="150" cy="150" r="140" fill="#F2FAFE" />
                <rect x="60" y="100" width="35" height="120" fill="#0B3A8B" />
                <rect x="100" y="80" width="40" height="140" fill="#1B5BC4" />
                <rect x="145" y="95" width="35" height="125" fill="#0B3A8B" />
                <rect x="185" y="110" width="40" height="110" fill="#2BA8E0" />
                <rect x="230" y="120" width="30" height="100" fill="#1B5BC4" />
                <g fill="#F5C518" opacity="0.8">
                  {[115, 135, 155, 175].map((y) => (
                    <g key={y}>
                      <rect x="66" y={y} width="5" height="6" />
                      <rect x="76" y={y} width="5" height="6" />
                      <rect x="86" y={y} width="5" height="6" />
                    </g>
                  ))}
                </g>
                <circle cx="240" cy="55" r="22" fill="#F5C518" />
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
            セブ島は、英語が使えるアジアの拠点。
            <br />
            <span className="text-navy-900">働き方を「場所」から再設計する。</span>
          </h2>
          <p className="mt-6 text-base text-ink-600 leading-relaxed">
            英語人材、BPO 産業の集積、コストの優位性、日本との距離。リモートワーカーから経営者まで、セブを「働く場所のひとつ」として捉え直す動きが広がっています。
          </p>
        </div>
      </section>

      {/* STYLES — 5 個別ページへリンク */}
      <section id="styles" className="py-16 lg:py-24 bg-teal-50/50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="WORK STYLES"
            title="セブで働く 5 つのスタイル"
            lead="各カードをクリックで詳細ページへ。判断軸・コスト感・推奨エリア・FAQまで整理しています。"
            className="mb-12 lg:mb-16"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workStyles.map((s) => {
              const Icon = styleIconMap[s.iconName];
              return (
                <Link
                  key={s.slug}
                  href={`/work/${s.slug}`}
                  className="card-hover group flex flex-col bg-white rounded-2xl p-6 border border-slate-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-3 text-navy-900">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs font-bold text-teal-400 tracking-widest">{s.eyebrow}</div>
                  <h3 className="text-lg font-extrabold mt-1">{s.title}</h3>
                  <p className="mt-3 text-sm text-ink-600 leading-relaxed flex-1">{s.shortDescription}</p>
                  <span className="mt-4 text-sm font-bold text-navy-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    詳しく見る →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* IT PARK & BUSINESS PARK CARDS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-navy-900 to-navy-700 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
              <div className="relative">
                <div className="text-xs font-bold text-sky-500 tracking-widest">AREA</div>
                <h3 className="text-2xl lg:text-3xl font-extrabold mt-2">ITパーク</h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  BPO 企業と多国籍テック企業が集積するセブのテックハブ。コワーキング、レストラン、24時間営業の店が揃い、ノマド・リモートワーカーに人気。
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/10 rounded-xl px-4 py-3">
                    <div className="text-xs text-white/70">向く人</div>
                    <div className="font-bold mt-1">ノマド・IT・社会人留学</div>
                  </div>
                  <div className="bg-white/10 rounded-xl px-4 py-3">
                    <div className="text-xs text-white/70">回線</div>
                    <div className="font-bold mt-1">光ファイバ・5G対応</div>
                  </div>
                </div>
                <Link href="/areas/it-park" className="mt-6 inline-flex items-center gap-2 text-sun-500 font-bold">
                  ITパーク詳細 →
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-500 to-teal-400 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
              <div className="relative">
                <div className="text-xs font-bold text-white/80 tracking-widest">AREA</div>
                <h3 className="text-2xl lg:text-3xl font-extrabold mt-2">セブ・ビジネスパーク</h3>
                <p className="mt-3 text-sm text-white/90 leading-relaxed">
                  高級モール（Ayala）・銀行・オフィス・コンドが集まる、セブの「丸の内」的エリア。経営層・大企業の拠点として機能。
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/15 rounded-xl px-4 py-3">
                    <div className="text-xs text-white/80">向く人</div>
                    <div className="font-bold mt-1">経営者・出張・家族</div>
                  </div>
                  <div className="bg-white/15 rounded-xl px-4 py-3">
                    <div className="text-xs text-white/80">特徴</div>
                    <div className="font-bold mt-1">オフィス・住居一体</div>
                  </div>
                </div>
                <Link href="/areas/business-park" className="mt-6 inline-flex items-center gap-2 text-white font-bold">
                  ビジネスパーク詳細 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS BASICS */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="BUSINESS BASICS"
            title="起業・BPO・採用の基本"
            lead="手続き・コスト・雇用の前提を中立に整理します。"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {businessBasics.map((b) => (
              <div key={b.title} className="card-hover bg-white rounded-2xl p-6 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 text-navy-900">{b.icon}</div>
                <h3 className="font-extrabold text-lg">{b.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading eyebrow="WORK × AREA" title="働くのに向くエリア" className="mb-12" />
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
            <div className="text-sm font-bold tracking-widest text-teal-400 mb-3">FAQ</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">よくある質問</h2>
          </div>
          <FaqList items={faqs} />
          <p className="mt-8 text-xs text-ink-600 text-center">
            税制・ビザ・労働関連の制度は変更されます。実際の意思決定の前に、税理士・弁護士・現地専門家にご確認ください。
          </p>
        </div>
      </section>

      {/* 関連カテゴリーの記事 */}
      <RelatedArticles
        categorySlug="remote"
        limit={3}
        heading="働き方カテゴリーの最新記事"
        lead="リモート・ノマド・現地就職・起業・BPOに関する記事を順次公開しています。"
      />
    </PillarLayout>
  );
}
