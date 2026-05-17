import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkStyleTemplate } from "@/components/work/WorkStyleTemplate";
import { getWorkStyle } from "@/lib/work-styles";

const SLUG = "startup";

export function generateMetadata(): Metadata {
  const style = getWorkStyle(SLUG);
  if (!style) return {};
  return {
    title: `${style.title}｜セブで働く`,
    description: style.shortDescription,
    alternates: { canonical: `/work/${style.slug}` },
  };
}

export default function Page() {
  const style = getWorkStyle(SLUG);
  if (!style) notFound();
  return <WorkStyleTemplate style={style} />;
}
