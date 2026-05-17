import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

type Props = {
  title: string;
  description?: string;
};

/**
 * 各ピラー・エリア・固定ページ用の暫定スタブ。
 * Phase 2 で本実装に置き換わる。
 */
export function PageStub({ title, description }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-navy-50 via-white to-sky-50 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-navy-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          ホームに戻る
        </Link>
        <span className="inline-block px-3 py-1 rounded-full bg-sun-50 text-navy-900 text-xs font-bold tracking-wide mb-4">
          実装予定
        </span>
        <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-base lg:text-lg text-ink-600 leading-relaxed">
            {description}
          </p>
        )}
        <p className="mt-8 text-sm text-ink-600">
          このページは現在準備中です。先にご相談いただく場合は、
          <a
            href={siteConfig.consultFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-700 font-bold underline"
          >
            無料相談
          </a>
          からどうぞ。
        </p>
      </div>
    </section>
  );
}
