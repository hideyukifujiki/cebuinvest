import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { StickyCta } from "@/components/layout/StickyCta";
import { siteConfig } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "関連サービス｜セブ島の英語・住まい・ビジネスパートナー",
  description:
    "セブ島の英語留学・住まい・ビジネス展開で連携するパートナーサービスを中立視点でご紹介します。",
  alternates: { canonical: "/partners" },
};

type Partner = {
  name: string;
  category: string;
  oneLiner: string;
  forWhom: string;
  notForWhom: string;
  highlight: string;
};

const partners: Partner[] = [
  {
    name: "3D ACADEMY",
    category: "英語留学",
    oneLiner: "セブシティの中規模英語学校。多国籍環境で、短期から長期、親子から社会人まで。",
    forWhom: "多国籍環境で学びたい人・コスパ重視・はじめての留学",
    notForWhom: "海辺のリゾート感を求める人",
    highlight: "多国籍環境・運営の安定感・幅広い学習者層",
  },
  {
    name: "Genius English",
    category: "英語学校",
    oneLiner: "マクタンの中規模校。海近くで集中して学べるリゾート型留学。",
    forWhom: "落ち着いた環境で集中したい社会人・家族滞在",
    notForWhom: "都市型の刺激を求める人",
    highlight: "海近くの環境・社会人/家族プラン充実",
  },
  {
    name: "留学JP",
    category: "親子留学専門サービス",
    oneLiner: "親子留学に特化した日本の専門サービス。学校選びから現地サポートまで一括対応。",
    forWhom: "親子留学を初めて検討する家庭・現地サポートを重視する人",
    notForWhom: "自力で全て手配したい上級者",
    highlight: "親子留学特化・現地パートナーと直接連携・運営会社",
  },
  {
    name: "セブ住まい相談",
    category: "賃貸・短期滞在",
    oneLiner: "セブ島での住まい探し（短期・長期）を中立的にサポート。",
    forWhom: "コンドミニアム・賃貸を相談したい人",
    notForWhom: "投資物件購入を中心に検討したい人",
    highlight: "中立・複数物件比較",
  },
  {
    name: "セブビジネス相談",
    category: "起業・ビジネス展開",
    oneLiner: "セブでの法人設立、BPO展開、採用、オフィス選定の相談窓口。",
    forWhom: "セブを拠点に事業を作りたい人",
    notForWhom: "個人の生活相談が中心の人",
    highlight: "現地専門家ネットワーク",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "関連サービス" }]} />

      <section className="bg-gradient-to-br from-navy-50 via-white to-sky-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-navy-900 text-xs font-bold tracking-wide mb-6">
            PARTNERS
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            セブ島で関係するサービス
          </h1>
          <p className="mt-6 text-base lg:text-lg text-ink-600 leading-relaxed max-w-3xl mx-auto">
            セブインベストはガイドメディアです。広告ではなく、テーマに合う選択肢として中立的にご紹介します。
            <br />
            「向く人」「向かない人」「PR の有無」をすべて明示します。
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 space-y-6">
          {partners.map((p) => {
            const isOwn = p.name === "留学JP";
            return (
            <article
              key={p.name}
              className={`bg-white rounded-2xl border p-6 lg:p-8 ${
                isOwn ? "border-sun-500/50 ring-2 ring-sun-500/20" : "border-slate-200"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-navy-700 tracking-widest">
                    {p.category}
                  </div>
                  <h2 className="text-2xl font-extrabold mt-1">{p.name}</h2>
                  <p className="text-ink-600 mt-2">{p.oneLiner}</p>
                  {isOwn && (
                    <p className="text-xs text-ink-600 mt-3 leading-relaxed">
                      ※ 当サイト運営の <span className="font-bold text-navy-900">{siteConfig.company.name}</span> が提供する親子留学専門サービスです。
                    </p>
                  )}
                </div>
                <div className="shrink-0">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-full ${
                      isOwn ? "bg-sun-500 text-ink-900" : "bg-sun-50 text-navy-900"
                    }`}
                  >
                    {isOwn ? "運営会社のサービス" : "提携サービス"}
                  </span>
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
                <div className="bg-sky-50 rounded-xl p-4">
                  <div className="text-xs font-bold text-navy-700 mb-1">向く人</div>
                  <div className="text-ink-700">{p.forWhom}</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-xs font-bold text-ink-600 mb-1">向かない人</div>
                  <div className="text-ink-700">{p.notForWhom}</div>
                </div>
                <div className="bg-sun-50 rounded-xl p-4">
                  <div className="text-xs font-bold text-navy-700 mb-1">編集部の所感</div>
                  <div className="text-ink-700">{p.highlight}</div>
                </div>
              </div>
            </article>
            );
          })}

          <p className="text-xs text-ink-600 text-center mt-12 leading-relaxed">
            ※ 各サービスは、セブインベストの編集判断で紹介しています。提携関係の有無に関わらず、
            <br className="hidden lg:block" />
            「向く人」「向かない人」を含めた中立的な情報提供を方針としています。
          </p>
        </div>
      </section>

      <ConsultationCta />
      <StickyCta />
    </>
  );
}
