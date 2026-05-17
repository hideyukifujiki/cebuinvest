import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "利用規約",
  description: "セブインベストの利用規約。",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "利用規約" }]} />

      <article className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">利用規約</h1>
        <p className="text-sm text-ink-600 mt-2">最終更新日：2026年5月</p>

        <div className="mt-10 space-y-8 text-ink-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-extrabold text-navy-900">第1条（適用）</h2>
            <p className="mt-3">
              本規約は、セブインベスト（以下「当サイト」）が提供するすべてのサービスの利用条件を定めるものです。ユーザーは、当サイトを利用することにより、本規約に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">第2条（提供する情報の性質）</h2>
            <p className="mt-3">
              当サイトの掲載情報は、一般的な情報提供を目的としたものであり、個別の投資・税務・法務・医療助言ではありません。情報の正確性・最新性については慎重を期しますが、保証するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">第3条（禁止事項）</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>法令または公序良俗に違反する行為</li>
              <li>当サイトの運営を妨害する行為</li>
              <li>無断での記事・コンテンツの転載・複製</li>
              <li>他のユーザー・第三者の権利を侵害する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">第4条（免責事項）</h2>
            <p className="mt-3">
              当サイトの情報を利用したことにより生じたいかなる損害についても、当サイトは責任を負いません。投資・移住・留学等の意思決定は、ユーザー自身の判断と責任のもと行うものとします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">第5条（リンク）</h2>
            <p className="mt-3">
              当サイトには、第三者サイトへのリンクが含まれます。リンク先のコンテンツや運営方針については、当サイトは責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">第6条（変更）</h2>
            <p className="mt-3">
              当サイトは、必要に応じて本規約を変更することがあります。重要な変更がある場合は、当サイト上で通知します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">第7条（準拠法）</h2>
            <p className="mt-3">
              本規約の解釈・適用は、日本法に準拠するものとします。
            </p>
          </section>

          <p className="text-xs text-ink-600 pt-8 border-t border-slate-200">
            ※ 本規約はテンプレートです。実運用にあたっては、専門家による確認の上、内容を調整してください。
          </p>
        </div>
      </article>
    </>
  );
}
