import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaTemplate } from "@/components/area/AreaTemplate";
import { areas, getAreaBySlug } from "@/lib/areas";

type Params = { slug: string };

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return {
    title: `${area.name}（${area.nameEn}）｜セブ島エリアガイド`,
    description: area.oneLiner,
    alternates: { canonical: `/areas/${area.slug}` },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();
  return <AreaTemplate area={area} />;
}
