import { SectionHeading } from "@/components/ui/SectionHeading";

type Reason = {
  metric: string;
  unit?: string;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    metric: "86",
    unit: "%",
    title: "英語環境",
    description:
      "フィリピンは英語人口比率が世界トップクラス。日常会話から教育まで英語が活きる。",
  },
  {
    metric: "4.5",
    unit: "h",
    title: "日本からの近さ",
    description:
      "マニラ経由・直行便ともに最短 4 時間台。短期・親子・社会人に最適な距離感。",
  },
  {
    metric: "1/2",
    unit: "〜1/3",
    title: "生活コスト",
    description:
      "日本と比べた目安。住み方次第で月の支出を大きく抑え、選択肢を増やせる。",
  },
  {
    metric: "25",
    unit: "歳",
    title: "若い人口",
    description:
      "中央年齢約 25 歳。労働人口が分厚く、教育・ビジネス・採用に勢いがある市場。",
  },
  {
    metric: "親子",
    title: "親子留学の充実",
    description:
      "親子向けプログラム、インターナショナルスクール、家族で住みやすい街並み。",
  },
  {
    metric: "海＋街",
    title: "リゾートと都市の両立",
    description:
      "マクタンのビーチと、ITパーク・ビジネスパークの都市機能が車で 1 時間圏内。",
  },
  {
    metric: "BPO",
    title: "ビジネスポテンシャル",
    description:
      "BPO 産業の集積、英語が使える人材、起業しやすい税制とコスト構造。",
  },
  {
    metric: "長期",
    title: "長期滞在のしやすさ",
    description:
      "ビザ・住まい・コミュニティ。短期から長期まで段階的に拠点を作れる。",
  },
];

export function WhyCebu() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="SECTION 03"
          title="なぜ、セブ島なのか"
          lead="日本人にとっての「もう一つの拠点」になりうる 8 つの理由。"
          className="mb-12 lg:mb-16"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="p-6 rounded-2xl border border-slate-200 bg-white"
            >
              <div className="text-3xl font-extrabold text-navy-900">
                {r.metric}
                {r.unit && <span className="text-base align-top">{r.unit}</span>}
              </div>
              <div className="font-bold mt-1">{r.title}</div>
              <p className="text-sm text-ink-600 mt-2 leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
