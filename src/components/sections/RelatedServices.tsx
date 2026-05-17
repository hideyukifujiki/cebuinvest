import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Service = {
  name: string;
  category: string;
  href: string;
};

const services: Service[] = [
  { name: "3D ACADEMY", category: "英語留学", href: "/partners/3d-academy" },
  { name: "Genius English", category: "英語学校", href: "/partners/genius-english" },
  { name: "留学JP", category: "親子留学専門サービス", href: "/partners/ryugaku-jp" },
  { name: "住まい相談", category: "不動産・賃貸", href: "/partners/housing" },
  { name: "ビジネス相談", category: "起業・展開", href: "/partners/business" },
];

export function RelatedServices() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="SECTION 07"
          title="セブインベストが扱うテーマと、関係するサービス"
          lead="セブインベストはガイドメディアです。広告ではなく、テーマに合う選択肢として中立的にご紹介します。"
          className="mb-12 lg:mb-16 max-w-3xl"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="card-hover bg-white rounded-2xl p-6 border border-slate-200 text-center"
            >
              <div className="h-12 flex items-center justify-center mb-3">
                <div className="font-extrabold text-base text-navy-900 tracking-tight">
                  {s.name}
                </div>
              </div>
              <div className="text-xs text-ink-600">{s.category}</div>
              <div className="mt-3 text-xs font-bold text-navy-700">編集部の解説 →</div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-600 text-center">
          ※ 一部は提携サービスを含みます。詳細は<Link href="/about" className="underline">About ページ</Link>でご確認ください。
        </p>
      </div>
    </section>
  );
}
