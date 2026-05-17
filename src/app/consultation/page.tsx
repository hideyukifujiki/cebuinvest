import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, Check, ExternalLink, GraduationCap, Home as HomeIcon, TrendingUp } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FaqList } from "@/components/ui/FaqList";
import { StickyCta } from "@/components/layout/StickyCta";
import { siteConfig } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "セブ島相談｜無料・中立・24時間以内に返信",
  description:
    "セブ島での留学、親子留学、移住、長期滞在、住まい、ビジネス、不動産まで。あなたの目的を、一緒に整理する無料相談。営業はしません。",
  alternates: { canonical: "/consultation" },
};

const themes = [
  "セブ島留学", "親子留学", "英語学習", "セブ島移住", "長期滞在", "住まい",
  "デジタルノマド", "ビジネス展開", "不動産", "リタイアメント", "家族の海外経験・教育",
];

const steps = [
  { num: "01", eyebrow: "FORM", title: "フォーム送信", description: "関心テーマ、希望時期、家族構成、自由記入の項目を選択・記入。所要 2〜3 分。" },
  { num: "02", eyebrow: "CHECK", title: "編集部が確認", description: "内容を整理し、必要な情報を確認。事前にメッセージで補足することもあります。" },
  { num: "03", eyebrow: "REPLY", title: "返信・打ち合わせ", description: "24 時間以内にメール返信。必要に応じてオンライン打ち合わせ（Zoom／Google Meet）を設定。" },
  { num: "04", eyebrow: "NEXT STEPS", title: "必要なら専門家へ", description: "税務・法務・現地手配など、専門領域は信頼できる関連先をご紹介します。強制はしません。" },
];

const promises = [
  { title: "特定サービスを押し売りしません", description: "中立メディアとして、あなたの目的に合うものだけをご紹介します。" },
  { title: "しつこい営業電話はかけません", description: "連絡はあなたが希望した方法・タイミングのみ。返信不要なら無理に追わせません。" },
  { title: "投資・税務・法務の助言ではありません", description: "情報の整理が目的。専門的判断が必要な領域は、専門家を別途ご案内します。" },
  { title: "個人情報は厳重に管理します", description: "プライバシーポリシーに基づき適切に取り扱います。第三者への無断提供は行いません。" },
];

const trust = [
  { label: "完全無料", color: "#2E9D4F" },
  { label: "中立・営業なし", color: "#2E9D4F" },
  { label: "24h以内に返信", color: "#2E9D4F" },
  { label: "無理な勧誘なし", color: "#2E9D4F" },
];

const pillarLinks = [
  { href: "/study", eyebrow: "STUDY", title: "学ぶ", description: "英語留学、親子留学、社会人留学。", icon: <GraduationCap className="h-6 w-6" /> },
  { href: "/live", eyebrow: "LIVE", title: "暮らす", description: "移住、長期滞在、住まい、家族生活。", icon: <HomeIcon className="h-6 w-6" /> },
  { href: "/work", eyebrow: "WORK", title: "働く", description: "ノマド、リモート、起業、現地就職。", icon: <Briefcase className="h-6 w-6" /> },
  { href: "/invest", eyebrow: "INVEST", title: "投資する", description: "不動産、教育、英語、家族の未来。", icon: <TrendingUp className="h-6 w-6" /> },
];

const faqs = [
  { q: "本当に無料ですか？", a: "はい、相談自体は完全無料です。費用が発生する場合（例：専門家を介した有償サポート）は事前に必ず明示します。" },
  { q: "しつこく営業されませんか？", a: "セブインベストは中立メディアです。特定サービスの押し売りはしません。電話営業も行いません。" },
  { q: "関心テーマが複数あってもいいですか？", a: "むしろ歓迎です。「親子留学 × 教育移住 × 住まい」のように、複数を横断する相談がほとんどです。" },
  { q: "渡航時期が未定でも相談できますか？", a: "問題ありません。「いずれセブを選択肢に」と考えている段階でも、情報整理に役立ちます。" },
  { q: "個人情報はどう扱われますか？", a: "プライバシーポリシーに基づき適切に管理します。あなたの同意なく第三者へ提供することはありません。" },
  { q: "セブインベストは具体的に何をしてくれますか？", a: "あなたの状況・目的をヒアリングし、関連情報・選択肢を整理してご返信します。必要に応じて関連サービス・現地の専門家・パートナーをご紹介します。" },
  { q: "返信はどれくらいで届きますか？", a: "24 時間以内（土日祝を除く）が目安です。混雑時や内容によっては数日いただく場合があります。" },
];

export default function ConsultationPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "セブ島相談" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-50 via-white to-sky-50">
        <svg className="absolute -top-20 -right-40 w-[700px] h-[700px] opacity-25 pointer-events-none" viewBox="0 0 600 600" aria-hidden="true">
          <circle cx="300" cy="300" r="260" stroke="#1B5BC4" strokeWidth="2" fill="none" strokeDasharray="4 8" />
          <circle cx="480" cy="130" r="48" fill="#F5C518" opacity="0.6" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sun-50 text-navy-900 text-xs font-bold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sun-500" />
              無料 ・ オンライン ・ 24時間以内に返信
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.2] tracking-tight">
              セブ島で何を実現したいか、
              <br />
              <span className="text-navy-900">一緒に整理します。</span>
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-ink-600 max-w-2xl">
              留学、親子留学、移住、長期滞在、住まい、ビジネス、不動産まで。
              <br />
              「結論を出す」より、「選択肢を並べる」相談を大切にしています。
            </p>

            <div className="mt-10">
              <a
                href={siteConfig.consultFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary animate-pulse-ring inline-flex items-center gap-3 px-8 py-5 bg-sun-500 text-ink-900 font-bold rounded-2xl text-lg shadow-soft"
              >
                無料でセブ島相談を始める
                <ExternalLink className="h-5 w-5" strokeWidth={2.5} />
              </a>
              <p className="mt-3 text-xs text-ink-600">入力は 2〜3 分。フォームは Google Form で開きます。</p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              {trust.map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-xs">
                  <Check className="h-4 w-4 text-palm-500" strokeWidth={3} />
                  <span className="font-bold">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-100 to-white" />
              <svg viewBox="0 0 300 300" className="relative w-full h-full" aria-hidden="true">
                <circle cx="150" cy="150" r="140" fill="#F2FAFE" />
                <rect x="60" y="80" width="130" height="80" rx="14" fill="#FFFFFF" stroke="#0B3A8B" strokeWidth="3" />
                <path d="M 90 158 L 100 175 L 110 158 Z" fill="#FFFFFF" stroke="#0B3A8B" strokeWidth="3" />
                <line x1="80" y1="105" x2="170" y2="105" stroke="#2BA8E0" strokeWidth="3" strokeLinecap="round" />
                <line x1="80" y1="120" x2="160" y2="120" stroke="#2BA8E0" strokeWidth="3" strokeLinecap="round" />
                <line x1="80" y1="135" x2="150" y2="135" stroke="#2BA8E0" strokeWidth="3" strokeLinecap="round" />
                <rect x="110" y="180" width="130" height="60" rx="14" fill="#0B3A8B" />
                <path d="M 220 240 L 230 256 L 215 240 Z" fill="#0B3A8B" />
                <line x1="130" y1="200" x2="220" y2="200" stroke="#F5C518" strokeWidth="3" strokeLinecap="round" />
                <line x1="130" y1="215" x2="200" y2="215" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                <circle cx="240" cy="55" r="20" fill="#F5C518" />
              </svg>
            </div>
          </div>
        </div>

        <svg className="block w-full h-12 -mt-1" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30 Q 150 0 300 30 T 600 30 T 900 30 T 1200 30 V60 H0 Z" fill="#FFFFFF" />
        </svg>
      </section>

      {/* THEMES */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-sm font-bold tracking-widest text-navy-700 mb-3">CONSULTATION THEMES</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">こんなテーマで相談できます</h2>
            <p className="mt-4 text-ink-600">複数選んでOK。「まだ漠然としている」も歓迎です。</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {themes.map((t) => (
              <span
                key={t}
                className="text-sm font-bold px-5 py-3 bg-sky-100 text-navy-900 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-600">
            「どれにも当てはまらない」場合も、自由記入欄に状況を書いていただければ整理します。
          </p>
        </div>
      </section>

      {/* FLOW */}
      <section className="py-16 lg:py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <div className="text-sm font-bold tracking-widest text-navy-700 mb-3">FLOW</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">相談の流れ</h2>
            <p className="mt-4 text-ink-600">入力 2〜3 分。返信は 24 時間以内が目安です。</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-7 border border-slate-200 relative">
                <div className="absolute -top-4 left-7 w-10 h-10 rounded-full bg-sun-500 text-ink-900 font-extrabold flex items-center justify-center">
                  {step.num}
                </div>
                <div className="mt-4">
                  <div className="text-xs font-bold text-navy-700 tracking-widest">{step.eyebrow}</div>
                  <h3 className="text-lg font-extrabold mt-1">{step.title}</h3>
                  <p className="mt-3 text-sm text-ink-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISES (NEUTRAL DECLARATION) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="bg-gradient-to-br from-navy-900 to-navy-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sun-500 text-ink-900 text-xs font-bold tracking-wide mb-4">
                編集部からのお約束
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
                セブインベストは、
                <br />
                「売る場」ではなく「整理する場」です。
              </h2>
              <div className="mt-8 space-y-4">
                {promises.map((p) => (
                  <div key={p.title} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-sun-500" strokeWidth={3} />
                    </div>
                    <div>
                      <div className="font-bold">{p.title}</div>
                      <p className="text-sm text-white/80 mt-1">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-16 lg:py-24 bg-sky-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold leading-relaxed">「漠然」のままでも、大丈夫です。</h2>
          <p className="mt-4 text-ink-600 leading-relaxed">
            セブ島でやりたいことが明確でなくても、現状と関心テーマを書いていただければ、こちらで整理してご返信します。
          </p>
          <a
            href={siteConfig.consultFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 cta-primary inline-flex items-center gap-3 px-7 py-4 bg-sun-500 text-ink-900 font-bold rounded-2xl text-base shadow-soft"
          >
            無料相談フォームを開く
            <ExternalLink className="h-5 w-5" strokeWidth={2.5} />
          </a>
          <p className="mt-3 text-xs text-ink-600">Google Form が新しいタブで開きます。所要 2〜3 分。</p>
        </div>
      </section>

      {/* EXPLORE FIRST */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-sm font-bold tracking-widest text-navy-700 mb-3">EXPLORE FIRST</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">まずは、テーマを覗いてみる</h2>
            <p className="mt-4 text-ink-600">相談の前に、ガイドを読んで自分の関心を絞ることもできます。</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillarLinks.map((l) => (
              <Link key={l.href} href={l.href} className="card-hover bg-white rounded-2xl p-7 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center mb-5 text-navy-900">{l.icon}</div>
                <div className="text-xs font-bold text-navy-700 tracking-widest">{l.eyebrow}</div>
                <h3 className="text-lg font-extrabold mt-1">{l.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{l.description}</p>
                <span className="mt-4 inline-flex text-sm font-bold text-navy-700">ガイドを見る →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-bold tracking-widest text-navy-700 mb-3">FAQ</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">よくある質問</h2>
          </div>
          <FaqList items={faqs} />
          <p className="mt-8 text-xs text-ink-600 text-center">
            相談は無料ですが、個別の投資・法務・税務・医療助言ではありません。専門的判断が必要な場合は、それぞれの専門家を別途ご案内します。
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 lg:py-28 bg-navy-900 text-white overflow-hidden">
        <svg className="absolute -top-10 -left-20 w-[420px] h-[420px] opacity-30" viewBox="0 0 400 400" aria-hidden="true">
          <circle cx="200" cy="200" r="180" stroke="#2BA8E0" strokeWidth="1" fill="none" strokeDasharray="2 6" />
          <circle cx="340" cy="60" r="40" fill="#F5C518" opacity="0.5" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-[520px] h-[200px] opacity-40" viewBox="0 0 600 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 80 Q 150 30 300 80 T 600 80 V 200 H 0 Z" fill="#1B5BC4" />
          <path d="M0 110 Q 150 70 300 110 T 600 110 V 200 H 0 Z" fill="#2BA8E0" opacity="0.7" />
          <path d="M0 140 Q 150 110 300 140 T 600 140 V 200 H 0 Z" fill="#2BB7B7" opacity="0.6" />
        </svg>
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sun-500" />
            無料相談 ・ 24h以内に返信
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            「やりたいこと」を、
            <br className="lg:hidden" />
            整理しに来てください。
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-white/80 max-w-2xl mx-auto">
            気軽に。漠然と。複数テーマでも。
            <br />
            あなたのセブ島での選択肢を、一緒に並べてみましょう。
          </p>
          <div className="mt-10">
            <a
              href={siteConfig.consultFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary animate-pulse-ring inline-flex items-center gap-3 px-8 py-5 bg-sun-500 text-ink-900 font-bold rounded-2xl text-lg shadow-soft"
            >
              無料相談フォームを開く
              <ExternalLink className="h-5 w-5" strokeWidth={2.5} />
            </a>
            <p className="mt-4 text-xs text-white/60">Google Form が新しいタブで開きます。送信完了後 24h 以内にメール返信。</p>
          </div>
        </div>
      </section>

      <StickyCta label="無料相談を始める" />
    </>
  );
}
