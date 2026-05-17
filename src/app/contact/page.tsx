import type { Metadata } from "next";
import { ArrowRight, ExternalLink, Mail, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { StickyCta } from "@/components/layout/StickyCta";
import { siteConfig } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "お問い合わせ｜セブインベスト",
  description:
    "セブインベストへのお問い合わせ。セブ島相談以外の取材・掲載・提携などはこちらから。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "お問い合わせ" }]} />

      <section className="bg-gradient-to-br from-navy-50 via-white to-sky-50 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-navy-900 text-xs font-bold tracking-wide mb-6">
            CONTACT
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            お問い合わせ
          </h1>
          <p className="mt-6 text-base lg:text-lg text-ink-600 leading-relaxed">
            ご相談・取材・掲載・提携など、お問い合わせ内容に合わせて窓口を分けています。
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 space-y-6">
          {/* セブ島相談 */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-700 rounded-3xl p-8 lg:p-10 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sun-500 text-ink-900 text-xs font-bold tracking-wide mb-4">
              最も多いご相談
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle className="h-8 w-8 text-sun-500 shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl lg:text-3xl font-extrabold leading-tight">
                  セブ島での留学・移住・住まい・ビジネス相談
                </h2>
                <p className="mt-3 text-white/85 leading-relaxed">
                  個別の相談は無料の「セブ島相談」窓口からお願いします。
                  24時間以内（土日祝除く）にご返信します。
                </p>
                <a
                  href={siteConfig.consultFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary mt-6 inline-flex items-center gap-2 px-6 py-3 bg-sun-500 text-ink-900 font-bold rounded-xl"
                >
                  セブ島相談を開く
                  <ExternalLink className="h-4 w-4" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>

          {/* 取材・掲載・提携 */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200">
            <div className="flex items-start gap-4">
              <Mail className="h-8 w-8 text-navy-700 shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-extrabold">取材・掲載・提携</h2>
                <p className="mt-3 text-ink-600 leading-relaxed">
                  メディア取材、提携サービスの掲載依頼、コンテンツ協力、広告・PRなどは、
                  下記アドレスまでご連絡ください。
                </p>
                <a
                  href="mailto:contact@cebuinvest.jp"
                  className="mt-6 inline-flex items-center gap-2 text-navy-700 font-bold hover:gap-3 transition-all"
                >
                  contact@cebuinvest.jp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* その他 */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200">
            <h2 className="text-xl font-extrabold">その他</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink-600">
              <li>・サイト不具合のご指摘 → 上記メール宛にスクリーンショット添付でご連絡ください</li>
              <li>・記事内容の指摘・更新依頼 → 該当 URL を明記の上、上記メール宛にご連絡ください</li>
              <li>・個人情報の取り扱いに関する問い合わせ → プライバシーポリシーの窓口宛</li>
            </ul>
          </div>
        </div>
      </section>

      <StickyCta />
    </>
  );
}
