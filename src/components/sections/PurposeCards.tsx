import Link from "next/link";
import {
  ArrowUpDown,
  Briefcase,
  Building2,
  Clock,
  Globe2,
  Home as HomeIcon,
  Laptop,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Purpose = {
  href: string;
  audience: string;
  title: string;
  icon: React.ReactNode;
};

const purposes: Purpose[] = [
  {
    href: "/study/english",
    audience: "For: 社会人",
    title: "英語を学びたい",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    href: "/study/family",
    audience: "For: 家族",
    title: "親子留学を考えている",
    icon: <Users className="h-5 w-5" />,
  },
  {
    href: "/live/long-stay",
    audience: "For: 長期滞在",
    title: "セブ島に長期滞在したい",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    href: "/live/relocation",
    audience: "For: 移住",
    title: "セブ島移住を検討している",
    icon: <ArrowUpDown className="h-5 w-5" />,
  },
  {
    href: "/work/digital-nomad",
    audience: "For: ノマド",
    title: "セブ島で働きたい",
    icon: <Laptop className="h-5 w-5" />,
  },
  {
    href: "/work/startup",
    audience: "For: 経営者",
    title: "セブ島でビジネスを考えたい",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    href: "/invest/real-estate",
    audience: "For: 投資",
    title: "セブ島不動産を知りたい",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    href: "/invest/education",
    audience: "For: 保護者",
    title: "子どもの教育に海外経験を",
    icon: <Globe2 className="h-5 w-5" />,
  },
];

export function PurposeCards() {
  return (
    <section id="purposes" className="py-16 lg:py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="SECTION 02"
            title="目的別ガイド"
            lead="あなたの「やりたいこと」から、必要なガイドへ。"
            align="left"
            className="max-w-xl"
          />
          <Link
            href="/guide"
            className="self-start lg:self-auto cta-secondary inline-flex items-center gap-2 px-5 py-3 bg-white text-navy-900 font-bold rounded-xl border border-navy-900 text-sm"
          >
            すべての目的を見る →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {purposes.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="card-hover bg-white rounded-2xl p-5 border border-slate-200 flex items-start gap-4"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-navy-900">
                {p.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-navy-700">{p.audience}</div>
                <div className="font-extrabold text-base mt-0.5">{p.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
