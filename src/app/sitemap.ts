import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { siteConfig } from "@/lib/site.config";
import { studyTopics } from "@/lib/study-topics";
import { liveBasics } from "@/lib/live-basics";
import { workStyles } from "@/lib/work-styles";
import { investThemes } from "@/lib/invest-themes";
import { guideArticles, guideCategories } from "@/lib/guide";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, lastModified, priority: 1.0, changeFrequency: "weekly" },
    { url: `${siteConfig.url}/study`, lastModified, priority: 0.9, changeFrequency: "monthly" },
    { url: `${siteConfig.url}/live`, lastModified, priority: 0.9, changeFrequency: "monthly" },
    { url: `${siteConfig.url}/work`, lastModified, priority: 0.9, changeFrequency: "monthly" },
    { url: `${siteConfig.url}/invest`, lastModified, priority: 0.9, changeFrequency: "monthly" },
    { url: `${siteConfig.url}/areas`, lastModified, priority: 0.8, changeFrequency: "monthly" },
    { url: `${siteConfig.url}/consultation`, lastModified, priority: 0.9, changeFrequency: "monthly" },
    { url: `${siteConfig.url}/guide`, lastModified, priority: 0.8, changeFrequency: "weekly" },
    { url: `${siteConfig.url}/about`, lastModified, priority: 0.6, changeFrequency: "yearly" },
    { url: `${siteConfig.url}/partners`, lastModified, priority: 0.6, changeFrequency: "monthly" },
    { url: `${siteConfig.url}/contact`, lastModified, priority: 0.5, changeFrequency: "yearly" },
    { url: `${siteConfig.url}/privacy`, lastModified, priority: 0.3, changeFrequency: "yearly" },
    { url: `${siteConfig.url}/terms`, lastModified, priority: 0.3, changeFrequency: "yearly" },
    { url: `${siteConfig.url}/disclaimer`, lastModified, priority: 0.3, changeFrequency: "yearly" },
  ];

  const studyTopicPaths: MetadataRoute.Sitemap = studyTopics.map((t) => ({
    url: `${siteConfig.url}/study/${t.slug}`,
    lastModified,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const liveBasicPaths: MetadataRoute.Sitemap = liveBasics.map((b) => ({
    url: `${siteConfig.url}/live/${b.slug}`,
    lastModified,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const workStylePaths: MetadataRoute.Sitemap = workStyles.map((s) => ({
    url: `${siteConfig.url}/work/${s.slug}`,
    lastModified,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const investThemePaths: MetadataRoute.Sitemap = investThemes.map((t) => ({
    url: `${siteConfig.url}/invest/${t.slug}`,
    lastModified,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const areaPaths: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${siteConfig.url}/areas/${area.slug}`,
    lastModified,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const guideCategoryPaths: MetadataRoute.Sitemap = guideCategories.map((c) => ({
    url: `${siteConfig.url}/guide/category/${c.slug}`,
    lastModified,
    priority: 0.6,
    changeFrequency: "weekly" as const,
  }));

  const guideArticlePaths: MetadataRoute.Sitemap = guideArticles.map((a) => ({
    url: `${siteConfig.url}/guide/${a.slug}`,
    lastModified,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticPaths,
    ...studyTopicPaths,
    ...liveBasicPaths,
    ...workStylePaths,
    ...investThemePaths,
    ...areaPaths,
    ...guideCategoryPaths,
    ...guideArticlePaths,
  ];
}
