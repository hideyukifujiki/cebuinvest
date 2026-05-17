"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";

type Props = {
  /** ボタン文言。各ピラー LP で上書き可能 */
  label?: string;
};

/**
 * モバイル下部のスティッキー CTA。
 * ページのスクロール 18%〜92% の範囲でのみ表示。
 */
export function StickyCta({ label = "セブ島相談をする" }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.body.scrollHeight - window.innerHeight;
      const ratio = h > 0 ? y / h : 0;
      setVisible(ratio > 0.18 && ratio < 0.92);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "lg:hidden fixed bottom-4 left-4 right-4 z-40 transition-all duration-200",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
      )}
    >
      <a
        href={siteConfig.consultFormUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-primary flex items-center justify-center gap-2 w-full px-6 py-4 bg-sun-500 text-ink-900 font-extrabold rounded-2xl shadow-xl"
      >
        {label}
        <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
      </a>
    </div>
  );
}
