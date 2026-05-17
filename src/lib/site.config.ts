/**
 * サイト全体のメタデータと設定。
 * URLや問い合わせ先など、サイトワイドの値はここに集約。
 */

export const siteConfig = {
  name: "セブインベスト",
  nameEn: "Cebu Invest",
  tagline: "学ぶ・暮らす・働く・投資する、セブ島の未来をつくるガイド",
  description:
    "セブインベストは、英語留学、親子留学、移住、長期滞在、ビジネス、不動産まで、セブ島を起点に人生とキャリアの選択肢を広げるための実践ガイドです。",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cebuinvest.jp",
  ogImage: "/og-default.png",
  locale: "ja_JP",
  // 相談フォームURL（Google Form）
  consultFormUrl:
    process.env.NEXT_PUBLIC_CONSULT_FORM_URL ??
    "https://docs.google.com/forms/d/e/1FAIpQLSenuWkiQqK9pawNnKa2nigS1I1S2mx5dyBtdrJL_PxgA4haWQ/viewform",
  // 運営会社
  company: {
    name: "留学JP株式会社",
    nameEn: "Ryugaku JP Inc.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
