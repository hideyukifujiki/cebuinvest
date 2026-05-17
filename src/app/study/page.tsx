import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, BookOpen, Briefcase, Building, Clock, GraduationCap, Users,
} from "lucide-react";
import { PillarLayout } from "@/components/pillar/PillarLayout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { RelatedArticles } from "@/components/guide/RelatedArticles";
import { siteConfig } from "@/lib/site.config";
import { studyTopics } from "@/lib/study-topics";

export const metadata: Metadata = {
  title: "セブ島で学ぶ｜英語留学、親子留学、社会人留学",
  description:
    "セブ島で英語を学ぶ。短期留学、社会人留学、親子留学、子どもの英語教育、キャリア英語まで。セブインベストが学び方の選択肢を整理します。",
  alternates: { canonical: "/study" },
};

const iconMap = {
  Clock: Clock,
  Briefcase: Briefcase,
  Users: Users,
  BookOpen: BookOpen,
  GraduationCap: GraduationCap,
  Building: Building,
} as const;

const criteria = [
  { num: "01", title: "目的に合うか", description: "英会話・資格・キャリア・親子。学校ごとに強みが違う。" },
  { num: "02", title: "エリアが合うか", description: "セブシティ／ITパーク／ラホグ／マクタンで生活が変わる。" },
  { num: "03", title: "規模・国籍比率", description: "大規模・小規模、日本人比率、年齢層で雰囲気は大きく変わる。" },
  { num: "04", title: "価格と含まれるもの", description: "授業数、滞在、食事、空港送迎、ビザ更新。総額で比較する。" },
  { num: "05", title: "家族向け対応", description: "親子プラン、子ども年齢、ナニー、住まいの選択肢。" },
];

const services = [
  { name: "3D ACADEMY", caption: "セブシティ｜中規模・多国籍", description: "中規模ながら多国籍環境が特徴の老舗校。短期から長期、親子から社会人まで幅広く対応。", tags: ["短期", "親子可", "多国籍"] },
  { name: "Genius English", caption: "マクタン｜リゾート×集中", description: "海近くの落ち着いた環境で集中して学べる中規模校。社会人・家族に人気。", tags: ["社会人", "家族", "リゾート型"] },
  { name: "留学JP", caption: "親子留学専門サービス", description: "親子留学に特化した日本の専門サービス。学校選び・住まい・現地サポートまで一括。", tags: ["親子", "現地サポート"] },
];

const recommendedAreas = [
  { name: "セブシティ", nameEn: "Cebu City", slug: "cebu-city", description: "大規模校の集積地。コスパ重視・はじめての留学に。", gradient: "from-navy-900 to-sky-500" },
  { name: "ラホグ", nameEn: "Lahug", slug: "lahug", description: "学園エリア。学校と住宅街のバランスが良い。", gradient: "from-palm-500 to-teal-400" },
  { name: "マクタン", nameEn: "Mactan", slug: "mactan", description: "海近くで集中したい人に。リゾート型の留学。", gradient: "from-teal-400 to-sky-500" },
];

const faqs = [
  { q: "英語初心者でもセブ島留学はできますか？", a: "はい。マンツーマン中心のカリキュラムで、初心者向けクラスを持つ学校が多くあります。日本人スタッフのサポートがある学校もあるため、はじめての留学にも向きます。" },
  { q: "1週間だけでも意味はありますか？", a: "英語環境に身を置く体験と、学習習慣のリセットには十分有効です。スコアを大きく上げたい場合は1ヶ月以上を推奨します。" },
  { q: "親子留学は何歳から可能ですか？", a: "学校により異なりますが、6歳前後から受け入れる学校が多いです。3〜5歳向けのプログラムを持つ学校もあります。" },
  { q: "セブ島の治安は大丈夫ですか？", a: "エリアと時間帯に注意すれば留学・生活ともに概ね安全です。最新の渡航情報は外務省海外安全情報をご確認ください。" },
  { q: "セブインベストは学校を斡旋しますか？", a: "セブインベストはガイドメディアです。学校を売る場ではなく、目的・期間・予算に合わせて選択肢を整理します。" },
];

export default function StudyPage() {
  return (
    <PillarLayout
      pillarName="学ぶ"
      pillarEn="Study"
      consultHeading="どんな留学が自分に合うか、一緒に整理します。"
      consultPrimaryLabel="セブ島留学を相談する"
      consultSecondary={{ label: "親子留学を相談する", href: siteConfig.consultFormUrl }}
      stickyCtaLabel="セブ島留学を相談する"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-navy-50">
        <svg className="absolute -top-20 -right-40 w-[700px] h-[700px] opacity-25 pointer-events-none" viewBox="0 0 600 600" aria-hidden="true">
          <circle cx="300" cy="300" r="260" stroke="#2BA8E0" strokeWidth="2" fill="none" strokeDasharray="4 8" />
          <circle cx="480" cy="130" r="48" fill="#F5C518" opacity="0.6" />
        </svg>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-navy-900 text-xs font-bold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sun-500" />
              STUDY ｜ セブ島で学ぶ
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.2] tracking-tight">
              英語は、「学費」ではなく
              <br />
              <span className="text-navy-900">人生への投資</span>になる。
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-ink-600 max-w-2xl">
              短期英語、社会人留学、親子留学、子どもの英語教育、キャリア英語まで。
              <br className="hidden lg:block" />
              セブ島での「学び方」の選択肢を、目的別に整理します。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.consultFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary inline-flex items-center gap-2 px-6 py-4 bg-sun-500 text-ink-900 font-bold rounded-2xl text-base shadow-soft"
              >
                セブ島留学について相談する
                <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
              </a>
              <a href="#types" className="cta-secondary inline-flex items-center gap-2 px-6 py-4 bg-white text-navy-900 font-bold rounded-2xl text-base border-2 border-navy-900">
                学び方の選択肢を見る
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div><div className="text-2xl font-extrabold text-navy-900">86%</div><div className="text-xs text-ink-600 mt-1">フィリピンの英語人口比率</div></div>
              <div><div className="text-2xl font-extrabold text-navy-900">1/2〜</div><div className="text-xs text-ink-600 mt-1">欧米留学比の費用</div></div>
              <div><div className="text-2xl font-extrabold text-navy-900">4.5h</div><div className="text-xs text-ink-600 mt-1">日本からの所要時間</div></div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-100 to-white" />
              <svg viewBox="0 0 300 300" className="relative w-full h-full" aria-hidden="true">
                <circle cx="150" cy="150" r="140" fill="#F2FAFE" />
                <rect x="80" y="120" width="140" height="100" rx="8" fill="#FFFFFF" stroke="#1B5BC4" strokeWidth="3" />
                <line x1="150" y1="120" x2="150" y2="220" stroke="#1B5BC4" strokeWidth="2" />
                <path d="M 90 140 L 140 140 M 90 155 L 135 155 M 90 170 L 138 170 M 90 185 L 130 185" stroke="#2BA8E0" strokeWidth="2" strokeLinecap="round" />
                <path d="M 160 140 L 210 140 M 160 155 L 205 155 M 160 170 L 208 170 M 160 185 L 200 185" stroke="#2BA8E0" strokeWidth="2" strokeLinecap="round" />
                <path d="M 150 70 L 100 90 L 150 110 L 200 90 Z" fill="#0B3A8B" />
                <rect x="148" y="105" width="4" height="15" fill="#0B3A8B" />
                <circle cx="200" cy="90" r="3" fill="#F5C518" />
                <circle cx="240" cy="50" r="20" fill="#F5C518" opacity="0.9" />
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
            英語は、留学費用ではない。
            <br />
            <span className="text-navy-900">10年単位で見れば、人生最大級の投資。</span>
          </h2>
          <p className="mt-6 text-base text-ink-600 leading-relaxed">
            キャリア、進学、家族の海外経験、子どもの教育。英語ができることで広がる選択肢は、留学費用を大きく超える価値を持ちます。セブインベストは「お金を払う」のではなく「未来に投資する」という視点で、セブ島での学び方を整理します。
          </p>
        </div>
      </section>

      {/* TYPES — 6 個別ページへリンク */}
      <section id="types" className="py-16 lg:py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="学び方の選択肢"
            title="あなたに合う、6つの学び方"
            lead="短期から長期、子どもから大人まで。目的別に整理しました。各カードをクリックで詳細ページへ。"
            className="mb-12 lg:mb-16"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {studyTopics.map((t) => {
              const Icon = iconMap[t.iconName];
              return (
                <Link
                  key={t.slug}
                  href={`/study/${t.slug}`}
                  className="card-hover group flex flex-col bg-white rounded-2xl p-7 border border-slate-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-5 text-navy-900">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-xs font-bold text-navy-700 tracking-widest">{t.eyebrow}</div>
                  <h3 className="text-lg font-extrabold mt-1">{t.title}</h3>
                  <p className="mt-3 text-sm text-ink-600 leading-relaxed flex-1">{t.shortDescription}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {t.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold bg-sky-100 text-navy-900 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 text-sm font-bold text-navy-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    詳しく見る →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 学校選びの基準 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-bold tracking-widest text-navy-700 mb-3">学校選びの判断軸</div>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                「人気No.1」より、
                <br />
                自分の目的に合うか。
              </h2>
              <p className="mt-6 text-ink-600 leading-relaxed">
                セブインベストは、特定の学校をランキングで推しません。あなたの目的・期間・予算・年齢・家族構成に合わせて、判断軸を整理することを大切にしています。
              </p>
              <a
                href={siteConfig.consultFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-navy-700 font-bold hover:gap-3 transition-all"
              >
                学校選びを相談する →
              </a>
            </div>
            <div className="space-y-3">
              {criteria.map((c) => (
                <div key={c.num} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                    <span className="font-bold text-navy-900">{c.num}</span>
                  </div>
                  <div>
                    <div className="font-bold">{c.title}</div>
                    <p className="text-sm text-ink-600 mt-1">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 lg:py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="学ぶ × 関連サービス"
            title="学び方の選択肢として、知っておきたいサービス"
            lead="セブインベストは中立メディアです。テーマに合う選択肢として、編集視点で紹介します。"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.name} href="/partners" className="card-hover bg-white rounded-2xl p-6 border border-slate-200">
                <div className="font-extrabold text-lg text-navy-900">{s.name}</div>
                <div className="text-xs text-ink-600 mt-1">{s.caption}</div>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">{s.description}</p>
                <div className="mt-4 flex gap-2 text-xs">
                  {s.tags.map((tag) => (
                    <span key={tag} className="font-bold bg-sky-100 text-navy-900 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="mt-5 text-sm font-bold text-navy-700">編集部の解説を見る →</div>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs text-ink-600 text-center">
            ※ 一部は提携サービスを含みます。中立性の方針は<Link href="/about" className="underline">About</Link>でご確認ください。
          </p>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="学ぶ × エリア"
            title="留学・学びに向くエリア"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recommendedAreas.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200">
                <div className={`aspect-[16/9] bg-gradient-to-br ${a.gradient} relative`}>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold bg-white/95 text-navy-900 px-2 py-0.5 rounded-full">学ぶ</span>
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
            学校情報・料金・入学条件は変更されることがあります。最新情報は各学校の公式または認定エージェントにご確認ください。
          </p>
        </div>
      </section>

      {/* 関連カテゴリーの記事（Study ピラー全般） */}
      <RelatedArticles
        categorySlug="short-term"
        limit={3}
        heading="Studyカテゴリーの最新記事"
        lead="6つの学び方に関する記事を順次公開しています。"
      />
    </PillarLayout>
  );
}
