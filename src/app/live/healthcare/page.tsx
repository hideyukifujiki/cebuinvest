import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LiveBasicTemplate } from "@/components/live/LiveBasicTemplate";
import { getLiveBasic } from "@/lib/live-basics";

const SLUG = "healthcare";

export function generateMetadata(): Metadata {
  const basic = getLiveBasic(SLUG);
  if (!basic) return {};
  return {
    title: `${basic.title}｜セブ島で暮らす`,
    description: basic.shortDescription,
    alternates: { canonical: `/live/${basic.slug}` },
  };
}

export default function Page() {
  const basic = getLiveBasic(SLUG);
  if (!basic) notFound();
  return <LiveBasicTemplate basic={basic} />;
}
