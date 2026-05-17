import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { StickyCta } from "@/components/layout/StickyCta";
import { LogoSymbol } from "@/components/brand/LogoSymbol";
import { siteConfig } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "セブインベストについて｜中立メディアの編集方針",
  description:
    "セブインベストは、セブ島を起点に英語・教育・キャリア・家族・ビジネス・暮らしの選択肢を広げる中立ガイドメディアです。編集方針と関連サービスとの関係を明示しています。",
  alternates: { canonical: "/about" },
};

const principles = [
  { title: "中立性を最優先する", description: "特定サービスをランキング型で推奨しません。複数の選択肢を並べ、判断はユーザーに委ねます。" },
  { title: "煽らない", description: "「高利回り」「絶対」「必ず」など断定的・誇張表現を使いません。前提条件とリスクを併記します。" },
  { title: "前提条件を明示する", description: "価格・利回り・制度は変動するため、執筆時点である旨と最新確認の必要性を必ず示します。" },
  { title: "専門家に委ねる領域を区別する", description: "投資・法務・税務・医療は専門家の領域。情報整理にとどめ、専門家を紹介します。" },
  { title: "提携関係を透明化する", description: "PR・提携・アフィリエイトの関係は記事冒頭または末尾で明示します。" },
];

const partners = [
  { name: "3D ACADEMY", category: "英語留学" },
  { name: "Genius English", category: "英語学校" },
  { name: "留学JP", category: "親子留学専門サービス" },
  { name: "セブ住まい相談", category: "賃貸・不動産" },
  { name: "セブビジネス相談", category: "起業・展開支援" },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "セブインベストについて" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-50 via-white to-sky-50">
        <div className="relative max-w-5xl mx-auto px-5 lg:px-8 pt-16 lg:pt-24 pb-12 lg:pb-16 text-center">
          <LogoSymbol className="h-16 w-16 mx-auto mb-6" />
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-navy-900 text-xs font-bold tracking-wide mb-6">
            ABOUT セブインベスト
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-balance">
            セブ島を、日本人にとっての
            <br />
            <span className="text-navy-900">「もう一つの選択肢」にする。</span>
          </h1>
          <p className="mt-6 text-base lg:text-lg text-ink-600 leading-relaxed max-w-3xl mx-auto">
            セブインベストは、英語・教育・移住・ビジネス・不動産まで、セブ島を起点に人生とキャリアの選択肢を広げる
            <br className="hidden lg:block" />
            中立ガイドメディアです。
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-xs font-bold text-navy-700 tracking-widest mb-3">MISSION</div>
              <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
                セブ島を、日本人にとっての「もう一つの選択肢」にする。
              </h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                英語、教育、家族の海外経験、移住、長期滞在、ビジネス、不動産。
                セブ島を活用して人生の選択肢を広げる、その実践ガイドになることが目的です。
              </p>
            </div>
            <div>
              <div className="text-xs font-bold text-navy-700 tracking-widest mb-3">VISION</div>
              <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
                留学・移住・ビジネス・不動産を 1 つの視点でつなぐ、日本人向け最大の Cebu Guide に。
              </h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                バラバラに語られがちなテーマを、「学ぶ・暮らす・働く・投資する」の 4 つの軸で統合的に整理。
                日本人ユーザーが迷わず、自分に合う選択肢にたどり着けるメディアを目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* なぜ「投資」という言葉を使うか */}
      <section className="py-16 lg:py-24 bg-sky-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <div className="text-xs font-bold text-navy-700 tracking-widest mb-3">EDITORIAL STANCE</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
            なぜ「投資」という言葉を使うのか。
          </h2>
          <p className="mt-6 text-ink-600 leading-relaxed text-base lg:text-lg">
            セブインベストの「Invest」は、不動産投資だけを意味しません。
            英語・教育・キャリア・家族の海外経験・長期滞在・ビジネス・不動産まで、
            <br className="hidden lg:block" />
            <span className="text-navy-900 font-bold">人生の選択肢を広げるための支出すべて</span>
            を「投資」と捉える編集方針です。
          </p>
          <p className="mt-6 text-ink-600 leading-relaxed">
            「お金を払う」のではなく「未来に投資する」。
            セブ島での意思決定を、長期的な視点で整理することを目指しています。
          </p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section id="editorial" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-navy-700 tracking-widest mb-3">EDITORIAL PRINCIPLES</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">編集の 5 原則</h2>
            <p className="mt-4 text-ink-600">中立メディアとして、すべての記事で守ること。</p>
          </div>
          <div className="space-y-4">
            {principles.map((p, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-navy-900" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-extrabold text-lg">{p.title}</div>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連サービスとの関係 */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-navy-700 tracking-widest mb-3">RELATIONSHIPS</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">関連サービスとの関係</h2>
            <p className="mt-4 text-ink-600">透明性のために、提携サービスの関係を公開します。</p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200">
            <p className="text-ink-600 leading-relaxed">
              セブインベストは、以下のサービスと編集・紹介の連携をしています。
              <br />
              なお、当サイトの運営会社である<span className="font-bold text-navy-900">{siteConfig.company.name}</span>は、「留学JP」を親子留学専門サービスとしても提供しているため、関連サービスとして取り上げる際は必ず関係性を明示しています。
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {partners.map((p) => {
                const isOwn = p.name === "留学JP";
                return (
                  <div
                    key={p.name}
                    className={`flex items-center gap-3 p-4 rounded-xl border ${
                      isOwn
                        ? "bg-sun-50 border-sun-500/40"
                        : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="font-extrabold text-navy-900">{p.name}</div>
                    {isOwn && (
                      <span className="text-[10px] font-bold bg-sun-500 text-ink-900 px-2 py-0.5 rounded-full">
                        運営会社のサービス
                      </span>
                    )}
                    <div className="text-xs text-ink-600 ml-auto">{p.category}</div>
                  </div>
                );
              })}
            </div>
            <p className="mt-8 text-xs text-ink-600 leading-relaxed">
              個別記事で関係性のある紹介を行う場合は、記事冒頭または末尾で「PR」「提携」「運営会社のサービス」等を必ず明示します。
              ランキング型・断定的推奨は行いません。
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-navy-700 tracking-widest mb-3">COMPANY</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">運営情報</h2>
          </div>
          <dl className="border-t border-slate-200">
            {[
              ["サイト名", "セブインベスト / Cebu Invest"],
              ["URL", siteConfig.url],
              ["運営", siteConfig.company.name],
              ["コンタクト", "/contact"],
              ["プライバシー", "/privacy"],
              ["利用規約", "/terms"],
              ["免責事項", "/disclaimer"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-3 gap-4 py-4 border-b border-slate-200 text-sm"
              >
                <dt className="text-ink-600">{label}</dt>
                <dd className="col-span-2 font-medium">
                  {value.startsWith("/") ? (
                    <Link href={value} className="text-navy-700 hover:underline">
                      {value}
                    </Link>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ConsultationCta />
      <StickyCta />
    </>
  );
}
