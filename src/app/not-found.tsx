import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-navy-50 via-white to-sky-50 min-h-[60vh]">
      <div className="max-w-2xl mx-auto px-5 lg:px-8 text-center">
        <div className="text-7xl lg:text-9xl font-extrabold text-navy-900">404</div>
        <h1 className="mt-4 text-2xl lg:text-3xl font-extrabold tracking-tight">
          ページが見つかりません
        </h1>
        <p className="mt-4 text-ink-600">
          リクエストされたページは削除されたか、URL が変更された可能性があります。
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 bg-sun-500 text-ink-900 font-bold rounded-xl cta-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          ホームに戻る
        </Link>
      </div>
    </section>
  );
}
