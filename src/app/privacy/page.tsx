import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "セブインベストの個人情報の取り扱いについて。",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "プライバシーポリシー" }]} />

      <article className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-24 prose-content">
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">プライバシーポリシー</h1>
        <p className="text-sm text-ink-600 mt-2">最終更新日：2026年5月</p>

        <div className="mt-10 space-y-8 text-ink-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-extrabold text-navy-900">1. 基本方針</h2>
            <p className="mt-3">
              セブインベスト（以下「当サイト」）は、ユーザーのプライバシーを尊重し、個人情報を適切に取り扱います。本プライバシーポリシーは、当サイトが収集する個人情報の種類、利用目的、第三者提供、ユーザーの権利などを定めるものです。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">2. 収集する情報</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>相談フォーム送信時に提供される情報（氏名、メールアドレス、関心テーマ、滞在予定、家族構成、自由記入欄等）</li>
              <li>アクセスログ（IPアドレス、ブラウザ情報、参照元URL等）</li>
              <li>Cookie および類似技術による情報（行動分析、広告配信等）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">3. 利用目的</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>ご相談への回答・関連情報のご案内</li>
              <li>サービスの改善および新機能の開発</li>
              <li>アクセス解析および利用状況の把握</li>
              <li>法令に基づく対応</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">4. 第三者提供</h2>
            <p className="mt-3">
              当サイトは、ユーザーの事前同意なく個人情報を第三者に提供しません。
              ただし、以下の場合を除きます：
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>業務委託先への提供（適切な監督のもと行います）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">5. Cookie の利用</h2>
            <p className="mt-3">
              当サイトでは、ユーザー体験の向上およびアクセス解析のために Cookie を使用しています。Google Analytics 等の第三者サービスを利用しており、これらは Cookie を介して匿名の利用情報を収集します。Cookie の利用を望まない場合は、ブラウザの設定で無効化できます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">6. ユーザーの権利</h2>
            <p className="mt-3">
              ユーザーは、自身の個人情報について、開示・訂正・削除・利用停止を求めることができます。ご希望の方は、お問い合わせ窓口までご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">7. お問い合わせ</h2>
            <p className="mt-3">
              個人情報の取り扱いに関するお問い合わせは、
              <a href="mailto:privacy@cebuinvest.jp" className="text-navy-700 underline">privacy@cebuinvest.jp</a> までお願いします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">8. 改定</h2>
            <p className="mt-3">
              本ポリシーは、必要に応じて改定する場合があります。重要な変更がある場合は、当サイト上で通知します。
            </p>
          </section>

          <p className="text-xs text-ink-600 pt-8 border-t border-slate-200">
            ※ 本ポリシーはテンプレートです。実運用にあたっては、専門家による確認の上、内容を調整してください。
          </p>
        </div>
      </article>
    </>
  );
}
