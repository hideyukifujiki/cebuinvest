import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Step = {
  num: string;
  title: string;
  description: string;
  /** 円の色トーン。プログレスを表現 */
  tone: "light" | "mid" | "dark" | "darkest";
};

const steps: Step[] = [
  { num: "01", title: "短期英語留学", description: "1〜4 週間、英語環境に身を置く。", tone: "light" },
  { num: "02", title: "社会人留学", description: "キャリアに直結する英語投資。", tone: "light" },
  { num: "03", title: "親子留学", description: "家族で英語と海外経験を共有。", tone: "mid" },
  { num: "04", title: "教育移住", description: "子の教育を軸に拠点を変える。", tone: "mid" },
  { num: "05", title: "デジタルノマド", description: "セブを拠点にリモートで働く。", tone: "dark" },
  { num: "06", title: "起業・不動産", description: "事業展開や資産形成の場へ。", tone: "darkest" },
  { num: "07", title: "リタイアメント", description: "人生後半をセブで過ごす。", tone: "darkest" },
];

const toneClass = {
  light: "bg-sky-100 text-navy-900",
  mid: "bg-sky-500 text-white",
  dark: "bg-navy-700 text-white",
  darkest: "bg-navy-900 text-white",
};

export function LifeDesignTimeline() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="SECTION 05"
          title="セブ島での人生設計モデル"
          lead="短期から長期へ。セブ島は、ステップを踏んで関わり方を深められる場所です。"
          className="mb-12 lg:mb-16"
        />

        <div className="relative">
          {/* 横線（デスクトップ） */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-sky-100 via-navy-700 to-navy-900 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-3">
            {steps.map((step) => (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                <div
                  className={cn(
                    "w-24 h-24 rounded-full flex items-center justify-center border-4 border-white shadow-soft text-2xl font-bold",
                    toneClass[step.tone]
                  )}
                >
                  {step.num}
                </div>
                <div className="font-extrabold mt-4">{step.title}</div>
                <p className="text-xs text-ink-600 mt-2 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
