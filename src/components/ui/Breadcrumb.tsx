import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  items: Crumb[];
  /** 背景色を上書きする場合（デフォルトは sky-50） */
  bgClassName?: string;
};

export function Breadcrumb({ items, bgClassName = "bg-sky-50" }: Props) {
  // 構造化データ
  const itemList = items.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.label,
    ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
  }));

  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itemList,
  };

  return (
    <>
      <div className={`${bgClassName} border-b border-slate-200`}>
        <nav
          aria-label="パンくず"
          className="max-w-7xl mx-auto px-5 lg:px-8 py-3 text-xs text-ink-600"
        >
          {items.map((item, idx) => (
            <span key={idx}>
              {idx > 0 && <span className="mx-2 text-slate-200">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-navy-700">
                  {item.label}
                </Link>
              ) : (
                <span className="font-bold text-navy-900">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </>
  );
}
