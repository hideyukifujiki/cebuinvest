import Link from "next/link";
import { areas, pillarLabel } from "@/lib/areas";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PopularAreas() {
  return (
    <section id="areas" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="SECTION 04"
            title="人気エリア"
            lead="学ぶ・暮らす・働く・投資する。それぞれに合うエリアがあります。"
            align="left"
            className="max-w-xl"
          />
          <Link
            href="/areas"
            className="self-start lg:self-auto cta-secondary inline-flex items-center gap-2 px-5 py-3 bg-white text-navy-900 font-bold rounded-xl border border-navy-900 text-sm"
          >
            すべてのエリアを見る →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200"
            >
              <div className={`aspect-[16/9] bg-gradient-to-br ${area.gradient} relative`}>
                {/* エリア固有のシンプルなSVGアクセント */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 180" aria-hidden="true">
                  <rect x="60" y="60" width="50" height="100" fill="#FFFFFF" opacity="0.65" />
                  <rect x="115" y="40" width="60" height="120" fill="#FFFFFF" opacity="0.8" />
                  <rect x="180" y="55" width="50" height="105" fill="#FFFFFF" opacity="0.65" />
                  <circle cx="260" cy="40" r="20" fill="#F5C518" opacity="0.85" />
                </svg>
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {area.pillars.slice(0, 3).map((p) => (
                    <span
                      key={p}
                      className="text-[10px] font-bold bg-white/95 text-navy-900 px-2 py-0.5 rounded-full"
                    >
                      {pillarLabel[p]}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-extrabold text-lg">{area.name}</h3>
                  <span className="text-xs text-ink-600">{area.nameEn}</span>
                </div>
                <p className="text-sm text-ink-600 mt-2 leading-relaxed">
                  {area.oneLiner}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
