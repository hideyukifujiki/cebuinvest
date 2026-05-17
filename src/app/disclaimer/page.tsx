import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "免責事項",
  description: "セブインベストの免責事項。投資・税務・法務・医療・留学等に関する情報の取り扱い。",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "免責事項" }]} />

      <article className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">免責事項</h1>
        <p className="text-sm text-ink-600 mt-2">最終更新日：2026年5月</p>

        <div className="mt-10 space-y-8 text-ink-700 leading-relaxed">
          <div className="bg-navy-50 rounded-2xl p-6 border border-navy-700/20">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-navy-900 shrink-0 mt-0.5" />
              <p className="text-sm">
                本サイトの情報は一般情報であり、個別の投資・税務・法務・医療助言ではありません。最新情報は各専門家・公式機関にご確認ください。
              </p>
            </div>
          </div>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">投資情報について</h2>
            <p className="mt-3">
              本サイトに掲載される投資関連情報は、一般的な情報提供を目的としています。特定の投資商品・取引の推奨や個別の投資助言ではありません。投資には為替・市況・規制等の変動リスクが伴い、収益を保証するものではありません。実際の意思決定の前に、税理士・弁護士・ファイナンシャルアドバイザー等の専門家にご相談ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">不動産情報について</h2>
            <p className="mt-3">
              セブ島／フィリピンの不動産価格、賃料、利回り、税制、ビザ要件、外国人保有規制は時期や地域により変動します。記載は執筆時点の情報です。実際の購入・賃貸・運用にあたっては、現地の法令、契約内容、デベロッパー、専門家への確認を必ず行ってください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">留学・学校情報について</h2>
            <p className="mt-3">
              学校情報、料金、入学条件、カリキュラム、ビザ要件は変更されることがあります。最新情報は各学校公式または認定エージェントへご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">医療・治安情報について</h2>
            <p className="mt-3">
              医療・治安・ビザ等の情報は変更されます。渡航・滞在前に外務省海外安全情報、現地大使館、公式情報源で最新情報をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">相談について</h2>
            <p className="mt-3">
              当サイトの「セブ島相談」は無料ですが、個別の投資・法務・税務・医療助言ではありません。専門的判断が必要な場合は、それぞれの専門家を別途ご案内します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-900">情報の更新</h2>
            <p className="mt-3">
              掲載情報の更新には努めますが、すべての情報を常に最新に保つことは保証できません。重要な意思決定の前には、必ず最新情報を公式情報源でご確認ください。
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
