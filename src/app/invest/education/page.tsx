import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InvestThemeTemplate } from "@/components/invest/InvestThemeTemplate";
import { getInvestTheme } from "@/lib/invest-themes";

const SLUG = "education";

export function generateMetadata(): Metadata {
  const theme = getInvestTheme(SLUG);
  if (!theme) return {};
  return {
    title: `${theme.title}｜セブに投資する`,
    description: theme.shortDescription,
    alternates: { canonical: `/invest/${theme.slug}` },
  };
}

export default function Page() {
  const theme = getInvestTheme(SLUG);
  if (!theme) notFound();
  return <InvestThemeTemplate theme={theme} />;
}
