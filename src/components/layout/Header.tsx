"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { mainNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        <Logo />

        {/* デスクトップナビ */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-ink-700">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href)}
              className={cn(
                "nav-link hover:text-navy-900",
                isActive(item.href) && "text-navy-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.consultFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex cta-primary items-center gap-2 px-5 py-2.5 bg-sun-500 text-ink-900 font-bold rounded-xl text-sm"
          >
            相談する
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            className="lg:hidden -mr-2 p-2"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        className={cn(
          "lg:hidden absolute left-0 right-0 top-16 bg-white border-b border-slate-200 shadow-lg transition-all duration-200",
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <nav className="px-5 py-4 flex flex-col gap-1 text-base font-medium text-ink-700">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "py-2.5 border-b border-slate-200",
                isActive(item.href) && "text-navy-900 font-bold"
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.consultFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 cta-primary inline-flex items-center justify-center gap-2 px-5 py-3 bg-sun-500 text-ink-900 font-bold rounded-xl"
          >
            相談する
          </a>
        </nav>
      </div>
    </header>
  );
}
