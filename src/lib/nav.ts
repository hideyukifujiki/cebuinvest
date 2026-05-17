export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "学ぶ", href: "/study" },
  { label: "暮らす", href: "/live" },
  { label: "働く", href: "/work" },
  { label: "投資する", href: "/invest" },
  { label: "エリア", href: "/areas" },
  { label: "Guide", href: "/guide" },
];

export const footerNav = {
  theme: [
    { label: "学ぶ", href: "/study" },
    { label: "暮らす", href: "/live" },
    { label: "働く", href: "/work" },
    { label: "投資する", href: "/invest" },
    { label: "Guide", href: "/guide" },
  ] satisfies NavItem[],
  area: [
    { label: "セブシティ", href: "/areas/cebu-city" },
    { label: "ITパーク", href: "/areas/it-park" },
    { label: "ビジネスパーク", href: "/areas/business-park" },
    { label: "バニラッド", href: "/areas/banilad" },
    { label: "マクタン", href: "/areas/mactan" },
    { label: "すべてのエリア", href: "/areas" },
  ] satisfies NavItem[],
  company: [
    { label: "About", href: "/about" },
    { label: "編集方針", href: "/about#editorial" },
    { label: "関連サービス", href: "/partners" },
    { label: "お問い合わせ", href: "/contact" },
    { label: "セブ島相談", href: "/consultation" },
  ] satisfies NavItem[],
  legal: [
    { label: "プライバシーポリシー", href: "/privacy" },
    { label: "利用規約", href: "/terms" },
    { label: "免責事項", href: "/disclaimer" },
  ] satisfies NavItem[],
};
