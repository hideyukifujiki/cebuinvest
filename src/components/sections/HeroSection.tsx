import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-50 via-white to-sky-50">
      {/* 装飾 */}
      <svg
        className="absolute -top-10 -right-32 w-[720px] h-[720px] opacity-30 pointer-events-none"
        viewBox="0 0 600 600"
        aria-hidden="true"
      >
        <circle cx="300" cy="300" r="280" stroke="#1B5BC4" strokeWidth="2" fill="none" strokeDasharray="4 8" />
        <circle cx="500" cy="150" r="60" fill="#F5C518" opacity="0.5" />
        <path d="M0 480 Q 150 440 300 480 T 600 480" stroke="#2BB7B7" strokeWidth="6" fill="none" opacity="0.5" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center">
        {/* コピー */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-navy-900 text-xs font-bold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sun-500" />
            CEBU GUIDE for Japanese
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
            <span className="text-ink-900">セブ島で</span>
            <br className="lg:hidden" />
            <span className="text-navy-900">学ぶ</span>、
            <span className="text-navy-900">暮らす</span>、<br />
            <span className="text-navy-900">働く</span>、
            <span className="text-navy-900">投資する</span>。
          </h1>

          <p className="mt-6 text-base lg:text-lg leading-relaxed text-ink-600 max-w-2xl">
            セブインベストは、英語留学、親子留学、移住、長期滞在、ビジネス、不動産まで。
            <br className="hidden lg:block" />
            セブ島を起点に、人生とキャリアの選択肢を広げるための実践ガイドです。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.consultFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-flex items-center gap-2 px-6 py-4 bg-sun-500 text-ink-900 font-bold rounded-2xl text-base shadow-soft"
            >
              セブ島相談をする
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </a>
            <Link
              href="#purposes"
              className="cta-secondary inline-flex items-center gap-2 px-6 py-4 bg-white text-navy-900 font-bold rounded-2xl text-base border-2 border-navy-900"
            >
              目的別ガイドを見る
            </Link>
            <Link
              href="/guide"
              className="cta-secondary inline-flex items-center gap-2 px-6 py-4 text-navy-700 font-semibold text-base"
            >
              Guide記事を読む →
            </Link>
          </div>

          {/* trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-ink-600">
            <span className="font-semibold text-ink-700">関連サービス：</span>
            <span className="font-bold">3D ACADEMY</span>
            <span className="text-slate-200">|</span>
            <span className="font-bold">Genius English</span>
            <span className="text-slate-200">|</span>
            <span className="font-bold">留学JP</span>
            <span className="text-slate-200">|</span>
            <span className="font-bold">セブ住まい相談</span>
          </div>
        </div>

        {/* ビジュアル */}
        <div className="lg:col-span-5">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-100 to-white" />
            <svg viewBox="0 0 300 300" className="relative w-full h-full" aria-hidden="true">
              <circle cx="150" cy="150" r="140" fill="#F2FAFE" />
              <circle cx="200" cy="90" r="32" fill="#F5C518" />
              <circle cx="200" cy="90" r="44" fill="#F5C518" opacity="0.2" />
              <path d="M 10 200 Q 80 180 150 200 T 290 200 L 290 290 L 10 290 Z" fill="#2BB7B7" opacity="0.4" />
              <path d="M 10 215 Q 90 195 150 215 T 290 215 L 290 290 L 10 290 Z" fill="#2BA8E0" opacity="0.55" />
              <path d="M 10 230 Q 70 215 150 230 T 290 230 L 290 290 L 10 290 Z" fill="#1B5BC4" opacity="0.7" />
              <rect x="80" y="135" width="25" height="80" fill="#1B5BC4" />
              <rect x="108" y="115" width="28" height="100" fill="#0B3A8B" />
              <rect x="139" y="145" width="22" height="70" fill="#2BA8E0" />
              <rect x="164" y="125" width="30" height="90" fill="#1B5BC4" />
              {/* windows */}
              <g fill="#F2FAFE" opacity="0.9">
                <rect x="86" y="150" width="3" height="5" />
                <rect x="93" y="150" width="3" height="5" />
                <rect x="100" y="150" width="3" height="5" />
                <rect x="86" y="165" width="3" height="5" />
                <rect x="93" y="165" width="3" height="5" />
                <rect x="100" y="165" width="3" height="5" />
                <rect x="86" y="180" width="3" height="5" />
                <rect x="93" y="180" width="3" height="5" />
                <rect x="100" y="180" width="3" height="5" />
                <rect x="114" y="130" width="3" height="5" />
                <rect x="122" y="130" width="3" height="5" />
                <rect x="130" y="130" width="3" height="5" />
                <rect x="114" y="145" width="3" height="5" />
                <rect x="122" y="145" width="3" height="5" />
                <rect x="130" y="145" width="3" height="5" />
                <rect x="114" y="160" width="3" height="5" />
                <rect x="122" y="160" width="3" height="5" />
                <rect x="130" y="160" width="3" height="5" />
                <rect x="170" y="140" width="3" height="5" />
                <rect x="178" y="140" width="3" height="5" />
                <rect x="186" y="140" width="3" height="5" />
                <rect x="170" y="155" width="3" height="5" />
                <rect x="178" y="155" width="3" height="5" />
                <rect x="186" y="155" width="3" height="5" />
              </g>
              {/* ヤシ */}
              <line x1="230" y1="155" x2="230" y2="215" stroke="#2E9D4F" strokeWidth="3" strokeLinecap="round" />
              <path d="M 230 155 Q 210 138 200 145 Q 220 145 230 155 Z" fill="#2E9D4F" />
              <path d="M 230 155 Q 250 138 260 145 Q 240 145 230 155 Z" fill="#2E9D4F" />
              <path d="M 230 155 Q 220 135 215 130 Q 225 138 230 155 Z" fill="#2E9D4F" />
              <path d="M 230 155 Q 240 135 245 130 Q 235 138 230 155 Z" fill="#2E9D4F" />
            </svg>

            {/* floating chips */}
            <Chip className="top-6 -left-2 lg:-left-4" color="bg-sun-500" label="英語留学" />
            <Chip className="top-1/2 -right-2 lg:-right-4" color="bg-palm-500" label="親子留学" />
            <Chip className="-bottom-2 left-12" color="bg-sky-500" label="移住・長期滞在" />
            <Chip className="bottom-12 -right-4" color="bg-teal-400" label="不動産・ビジネス" />
          </div>
        </div>
      </div>

      {/* 下端の波装飾 */}
      <svg
        className="block w-full h-12 -mt-1"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 30 Q 150 0 300 30 T 600 30 T 900 30 T 1200 30 V60 H0 Z" fill="#FFFFFF" />
      </svg>
    </section>
  );
}

function Chip({
  className,
  color,
  label,
}: {
  className?: string;
  color: string;
  label: string;
}) {
  return (
    <div
      className={`absolute bg-white rounded-xl shadow-lg px-3 py-2 border border-slate-200 flex items-center gap-2 ${className ?? ""}`}
    >
      <span className={`w-2 h-2 rounded-full ${color}`} />
      <span className="text-xs font-bold text-ink-900">{label}</span>
    </div>
  );
}
