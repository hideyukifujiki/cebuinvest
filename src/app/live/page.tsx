import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Home as HomeIcon, ShieldCheck, GraduationCap } from "lucide-react";
import { PillarLayout } from "@/components/pillar/PillarLayout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { RelatedArticles } from "@/components/guide/RelatedArticles";
import { siteConfig } from "@/lib/site.config";
import { liveBasics } from "@/lib/live-basics";

export const metadata: Metadata = {
  title: "セブ島で暮らす｜移住・長期滞在・家族生活",
  description:
    "セブ島で暮らす。移住、長期滞在、住まい、生活費、医療、治安、子育て、リタイアメントまで。生活コストを下げるのではなく、選択肢を増やす視点でガイドします。",
  alternates: { canonical: "/live" },
};

const patterns = [
  { eyebrow: "SHORT", title: "短期滞在", duration: "1週間〜1ヶ月", description: "ホテル・コンドミニアムで、生活の試運転。" },
  { eyebrow: "MID", title: "中期滞在", duration: "1〜3ヶ月", description: "サービスアパートで生活基盤を作る。" },
  { eyebrow: "LONG", title: "長期滞在", duration: "3ヶ月〜1年", description: "賃貸契約で、生活を本格的に組み立てる。" },
  { eyebrow: "FAMILY", title: "家族で住む", duration: "1年〜", description: "スクール・医療・住まいをセットで整える。" },
  { eyebrow: "RETIRE", title: "リタイアメント", duration: "無期限", description: "SRRV と長期滞在ビザで、人生後半をセブで。" },
];

type CostRow = [string, string, string, string];
const costRows: CostRow[] = [
  ["家賃", "3万円〜", "5〜10万円", "10〜20万円"],
  ["食費", "2万円", "3〜5万円", "6〜10万円"],
  ["交通費", "5千円", "1〜2万円", "2〜3万円"],
  ["通信・電気", "5千円", "1万円", "2万円"],
  ["教育（任意）", "—", "—", "5〜30万円"],
  ["医療・保険", "3千円〜", "5千円〜", "1〜3万円"],
];

const basicIconMap = {
  Home: HomeIcon,
  Heart: Heart,
  ShieldCheck: ShieldCheck,
  GraduationCap: GraduationCap,
} as const;

const recommendedAreas = [
  { name: "バニラッド", nameEn: "Banilad", slug: "banilad", description: "高級住宅・スクール・モールが揃う、家族向けの定番。", tag: "家族向け", gradient: "from-palm-500 to-sky-500" },
  { name: "マボロ", nameEn: "Mabolo", slug: "mabolo", description: "ビジネスパーク至近の住宅地。日本人ファミリーに人気。", tag: "利便性", gradient: "from-sky-500 to-navy-700" },
  { name: "マクタン", nameEn: "Mactan", slug: "mactan", description: "ビーチ・空港の島。リゾート暮らしを楽しみたい人へ。", tag: "リゾート", gradient: "from-teal-400 to-sky-500" },
];

const faqs = [
  { q: "子連れで移住する場合、何から考えるべきですか？", a: "学校選びを起点に、エリア・住まい・医療を組み立てるとスムーズです。短期滞在で生活を試運転してから判断する家族も多いです。" },
  { q: "家賃の相場はどのくらいですか？", a: "エリアとグレードで大きく変わります。日本人に人気のコンドミニアムで、単身月5〜15万円、家族向けで月10〜30万円が一つの目安です。" },
  { q: "長期滞在のためのビザはどうなりますか？", a: "観光ビザの延長、就労ビザ、SRRV（退職者向けビザ）などがあります。要件・費用・期限は変更されるため、専門家への確認が必要です。" },
  { q: "医療は安心できますか？", a: "国際水準の私立病院がセブシティ・マクタンにあります。海外旅行保険や現地医療保険の併用、日本人サポートの利用が安心です。" },
];

export default function LivePage() {
  return (
    <PillarLayout
      pillarName="暮らす"
      pillarEn="Live"
      breadcrumbBg="bg-palm-50"
      consultHeading="セブ島での暮らしを、一緒に設計します。"
      consultPrimaryLabel="セブ島移住を相談する"
      consultSecondary={{ label: "長期滞在の住まい相談", href: siteConfig.consultFormUrl }}
      stickyCtaLabel="セブ島移住を相談する"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-palm-50 via-white to-sky-50">
        <svg className="absolute -top-20 -right-40 w-[700px] h-[700px] opacity-25 pointer-events-none" viewBox="0 0 600 600" aria-hidden="true">
          <circle cx="300" cy="300" r="260" stroke="#2E9D4F" strokeWidth="2" fill="none" strokeDasharray="4 8" />
          <circle cx="490" cy="140" r="48" fill="#F5C518" opacity="0.55" />
        </svg>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-palm-50 text-palm-500 text-xs font-bold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-palm-500" />
              LIVE ｜ セブ島で暮らす
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.2] tracking-tight">
              コストを下げるのではない。
              <br />
              <span className="text-navy-900">選択肢を、増やす。</span>
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-ink-600 max-w-2xl">
              移住、長期滞在、住まい、生活費、医療、治安、子育て、リタイアメント。
              <br className="hidden lg:block" />
              セブ島での「暮らし方」を 5 つのパターンから整理します。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={siteConfig.consultFormUrl} target="_blank" rel="noopener noreferrer" className="cta-primary inline-flex items-center gap-2 px-6 py-4 bg-sun-500 text-ink-900 font-bold rounded-2xl text-base shadow-soft">
                セブ島移住を相談する <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
              </a>
              <a href="#patterns" className="cta-secondary inline-flex items-center gap-2 px-6 py-4 bg-white text-navy-900 font-bold rounded-2xl text-base border-2 border-navy-900">
                暮らし方を見る
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div><div className="text-2xl font-extrabold text-navy-900">月10万〜</div><div className="text-xs text-ink-600 mt-1">単身の生活費目安</div></div>
              <div><div className="text-2xl font-extrabold text-navy-900">通年27℃</div><div className="text-xs text-ink-600 mt-1">過ごしやすい気候</div></div>
              <div><div className="text-2xl font-extrabold text-navy-900">SRRV</div><div className="text-xs text-ink-600 mt-1">退職者向けビザ</div></div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-palm-50 to-white" />
              <svg viewBox="0 0 300 300" className="relative w-full h-full" aria-hidden="true">
                <circle cx="150" cy="150" r="140" fill="#F2FAFE" />
                <rect x="100" y="140" width="100" height="80" fill="#FFFFFF" stroke="#0B3A8B" strokeWidth="3" />
                <path d="M 90 140 L 150 90 L 210 140 Z" fill="#0B3A8B" />
                <rect x="135" y="170" width="30" height="50" fill="#1B5BC4" />
                <rect x="110" y="155" width="18" height="18" fill="#F5C518" />
                <rect x="175" y="155" width="18" height="18" fill="#F5C518" />
                <line x1="60" y1="155" x2="60" y2="220" stroke="#2E9D4F" strokeWidth="3" strokeLinecap="round" />
                <path d="M 60 155 Q 40 138 30 145 Q 50 145 60 155" fill="#2E9D4F" />
                <path d="M 60 155 Q 80 138 90 145 Q 70 145 60 155" fill="#2E9D4F" />
                <line x1="240" y1="155" x2="240" y2="220" stroke="#2E9D4F" strokeWidth="3" strokeLinecap="round" />
                <path d="M 240 155 Q 220 138 210 145 Q 230 145 240 155" fill="#2E9D4F" />
                <path d="M 240 155 Q 260 138 270 145 Q 250 145 240 155" fill="#2E9D4F" />
                <circle cx="225" cy="50" r="20" fill="#F5C518" opacity="0.9" />
                <path d="M 0 220 Q 75 215 150 220 T 300 220 V 300 H 0 Z" fill="#2E9D4F" opacity="0.3" />
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
            「安く住む」ではなく、
            <br />
            <span className="text-navy-900">「生活の選択肢を増やす」</span>視点で。
          </h2>
          <p className="mt-6 text-base text-ink-600 leading-relaxed">
            セブ島での暮らしは、日本にいながらは作れない選択肢を増やす行為です。家族との時間、英語環境、リゾートの近さ、医療水準、長期滞在のしやすさ。コストの安さだけでは語れない要素があります。
          </p>
        </div>
      </section>

      {/* PATTERNS */}
      <section id="patterns" className="py-16 lg:py-24 bg-palm-50/50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading eyebrow="LIVE PATTERNS" title="暮らし方の 5 パターン" lead="期間と目的で、生活設計は変わります。" className="mb-12 lg:mb-16" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {patterns.map((p) => (
              <div key={p.title} className="card-hover bg-white rounded-2xl p-6 border border-slate-200">
                <div className="text-xs font-bold text-palm-500 tracking-widest">{p.eyebrow}</div>
                <h3 className="text-lg font-extrabold mt-1">{p.title}</h3>
                <div className="text-xs text-ink-600 mt-1">{p.duration}</div>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST TABLE */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <SectionHeading eyebrow="COST OF LIVING" title="月の生活費（目安）" lead="エリア・住み方・人数で変わる。下記は標準的なレンジ。" className="mb-12" />
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-sm">
              <thead className="bg-palm-50 text-navy-900">
                <tr>
                  <th className="text-left font-bold px-5 py-4">項目</th>
                  <th className="text-left font-bold px-5 py-4">単身（節約）</th>
                  <th className="text-left font-bold px-5 py-4">単身（標準）</th>
                  <th className="text-left font-bold px-5 py-4">家族3人</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {costRows.map((row, i) => (
                  <tr key={i} className={`border-t border-slate-200 ${i % 2 ? "bg-palm-50/30" : ""}`}>
                    <td className="px-5 py-3 font-medium">{row[0]}</td>
                    <td className="px-5 py-3">{row[1]}</td>
                    <td className="px-5 py-3">{row[2]}</td>
                    <td className="px-5 py-3">{row[3]}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-navy-900 bg-white">
                  <td className="px-5 py-4 font-extrabold text-navy-900">月合計</td>
                  <td className="px-5 py-4 font-bold">約7万円〜</td>
                  <td className="px-5 py-4 font-bold">10〜19万円</td>
                  <td className="px-5 py-4 font-bold">25〜68万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink-600 text-center">※ 執筆時点の現地調査ベース。為替・物価・地域で変動します。</p>
        </div>
      </section>

      {/* BASICS — 4 個別ページへリンク */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="LIVING BASICS"
            title="住まい・医療・治安・教育"
            lead="各カードをクリックで詳細ページへ。判断軸・コスト感・推奨エリア・FAQまで整理しています。"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {liveBasics.map((b) => {
              const Icon = basicIconMap[b.iconName];
              return (
                <Link
                  key={b.slug}
                  href={`/live/${b.slug}`}
                  className="card-hover group flex flex-col bg-white rounded-2xl p-6 border border-slate-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-palm-50 flex items-center justify-center mb-4 text-navy-900">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-xs font-bold text-palm-500 tracking-widest">{b.eyebrow}</div>
                  <h3 className="font-extrabold text-lg mt-1">{b.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed flex-1">{b.shortDescription}</p>
                  <span className="mt-4 text-sm font-bold text-navy-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    詳しく見る →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading eyebrow="LIVE × AREA" title="暮らしに向くエリア" className="mb-12" />
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
            <div className="text-sm font-bold tracking-widest text-palm-500 mb-3">FAQ</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">よくある質問</h2>
          </div>
          <FaqList items={faqs} />
          <p className="mt-8 text-xs text-ink-600 text-center">
            医療・治安・ビザ等の情報は変更されます。渡航・滞在前に外務省海外安全情報、現地大使館、公式情報源で最新情報をご確認ください。
          </p>
        </div>
      </section>

      {/* 関連カテゴリーの記事 */}
      <RelatedArticles
        categorySlug="housing"
        limit={3}
        heading="暮らしカテゴリーの最新記事"
        lead="住まい・医療・治安・教育に関する記事を順次公開しています。"
      />
    </PillarLayout>
  );
}
