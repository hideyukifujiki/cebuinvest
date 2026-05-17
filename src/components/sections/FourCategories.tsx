import Link from "next/link";
import { Briefcase, GraduationCap, Home, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Category = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const categories: Category[] = [
  {
    href: "/study",
    eyebrow: "STUDY",
    title: "学ぶ",
    description:
      "英語留学、親子留学、社会人留学、短期集中英語。子どもから大人まで、英語を「人生への投資」として捉え直す。",
    icon: <GraduationCap className="h-6 w-6" strokeWidth={2} />,
  },
  {
    href: "/live",
    eyebrow: "LIVE",
    title: "暮らす",
    description:
      "移住、長期滞在、住まい、生活費、医療、教育環境。生活コストを下げるのではなく、選択肢を増やす視点で。",
    icon: <Home className="h-6 w-6" strokeWidth={2} />,
  },
  {
    href: "/work",
    eyebrow: "WORK",
    title: "働く",
    description:
      "デジタルノマド、リモートワーク、現地就職、起業、ビジネス展開。場所に縛られない働き方を、セブから設計する。",
    icon: <Briefcase className="h-6 w-6" strokeWidth={2} />,
  },
  {
    href: "/invest",
    eyebrow: "INVEST",
    title: "投資する",
    description:
      "不動産、ビジネス、教育、英語、家族の未来。お金だけでなく、人生の選択肢を広げる「投資」として扱う。",
    icon: <TrendingUp className="h-6 w-6" strokeWidth={2} />,
  },
];

export function FourCategories() {
  return (
    <section id="categories" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="SECTION 01"
          title="セブインベストでできること"
          lead="セブ島を、人生の選択肢として 4 つの軸で捉え直します。"
          className="mb-12 lg:mb-16"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="card-hover group flex flex-col p-7 bg-white rounded-2xl border border-slate-200"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center mb-5 text-navy-900">
                {c.icon}
              </div>
              <div className="text-xs font-bold text-navy-700 tracking-widest">
                {c.eyebrow}
              </div>
              <h3 className="text-xl font-extrabold mt-1">{c.title}</h3>
              <p className="mt-3 text-sm text-ink-600 leading-relaxed flex-1">
                {c.description}
              </p>
              <span className="mt-5 text-sm font-bold text-navy-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                詳しく見る →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
