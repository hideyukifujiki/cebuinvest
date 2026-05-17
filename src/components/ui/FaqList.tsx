import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

type FaqItem = { q: string; a: string };

type Props = {
  items: FaqItem[];
  /** 構造化データの FAQPage を出力する場合 true */
  withStructuredData?: boolean;
};

export function FaqList({ items, withStructuredData = true }: Props) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <details
          key={i}
          className="bg-white border border-slate-200 rounded-2xl group"
        >
          <summary className="flex justify-between items-center gap-4 p-5 font-bold cursor-pointer list-none">
            <span>{it.q}</span>
            <ChevronDown
              className="h-4 w-4 shrink-0 text-navy-900 transition-transform group-open:rotate-180"
              strokeWidth={2.5}
            />
          </summary>
          <div className="px-5 pb-5 text-sm text-ink-600 leading-relaxed">
            {it.a}
          </div>
        </details>
      ))}
      {withStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      )}
    </div>
  );
}

export type { FaqItem };
