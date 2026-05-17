import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

type Props = {
  /** 見出しを上書きできる（各ピラーLP流用想定） */
  heading?: string;
  /** リード文を上書き */
  lead?: string;
  /** プライマリ CTA のラベル */
  primaryLabel?: string;
  /** セカンダリ CTA を表示する場合（label/href） */
  secondary?: { label: string; href: string };
  /** 下部の理由チップを表示するか */
  showReasons?: boolean;
};

const reasons = [
  { title: "無料", note: "相談料はかかりません" },
  { title: "中立", note: "特定サービスは売りません" },
  { title: "11テーマ", note: "広く受け付けます" },
  { title: "24h以内", note: "返信目安" },
];

export function ConsultationCta({
  heading = "セブ島で何を実現したいですか？",
  lead = "留学、親子留学、移住、住まい、ビジネス、不動産まで、目的に合わせて整理します。",
  primaryLabel = "セブ島相談をする",
  secondary,
  showReasons = true,
}: Props) {
  return (
    <section
      id="consult"
      className="relative py-20 lg:py-28 bg-navy-900 text-white overflow-hidden"
    >
      {/* 装飾 */}
      <svg
        className="absolute -top-10 -left-20 w-[420px] h-[420px] opacity-30"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="180" stroke="#2BA8E0" strokeWidth="1" fill="none" strokeDasharray="2 6" />
        <circle cx="340" cy="60" r="40" fill="#F5C518" opacity="0.5" />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-[520px] h-[200px] opacity-40"
        viewBox="0 0 600 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 80 Q 150 30 300 80 T 600 80 V 200 H 0 Z" fill="#1B5BC4" />
        <path d="M0 110 Q 150 70 300 110 T 600 110 V 200 H 0 Z" fill="#2BA8E0" opacity="0.7" />
        <path d="M0 140 Q 150 110 300 140 T 600 140 V 200 H 0 Z" fill="#2BB7B7" opacity="0.6" />
      </svg>

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-wide mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-sun-500" />
          無料相談
        </div>
        <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight text-balance">
          {heading}
        </h2>
        <p className="mt-6 text-base lg:text-lg leading-relaxed text-white/80 max-w-2xl mx-auto text-balance">
          {lead}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={siteConfig.consultFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary inline-flex items-center gap-2 px-7 py-4 bg-sun-500 text-ink-900 font-bold rounded-2xl text-base shadow-soft"
          >
            {primaryLabel}
            <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
          </a>
          {secondary && (
            <a
              href={secondary.href}
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/15 transition-colors text-white font-bold rounded-2xl text-base border border-white/30"
            >
              {secondary.label}
            </a>
          )}
        </div>

        {showReasons && (
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-white/5 rounded-xl px-4 py-3 border border-white/10"
              >
                <div className="font-bold">{r.title}</div>
                <div className="text-xs text-white/70 mt-1">{r.note}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
