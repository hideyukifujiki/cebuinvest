import Link from "next/link";
import { LogoSymbol } from "@/components/brand/LogoSymbol";
import { footerNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site.config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-white/80">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* ブランド */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3" aria-label="セブインベスト ホーム">
              <LogoSymbol className="h-10 w-10" invert />
              <div>
                <div className="text-lg font-extrabold text-white">セブインベスト</div>
                <div className="text-[10px] text-white/60 tracking-widest">CEBU INVEST</div>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              学ぶ・暮らす・働く・投資する、
              <br />
              セブ島の未来をつくるガイド。
            </p>
          </div>

          {/* テーマ */}
          <div>
            <div className="text-sm font-bold text-white mb-4">テーマ</div>
            <ul className="space-y-2.5 text-sm">
              {footerNav.theme.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* エリア */}
          <div>
            <div className="text-sm font-bold text-white mb-4">エリア</div>
            <ul className="space-y-2.5 text-sm">
              {footerNav.area.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 会社 */}
          <div>
            <div className="text-sm font-bold text-white mb-4">セブインベスト</div>
            <ul className="space-y-2.5 text-sm">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 法務 */}
          <div>
            <div className="text-sm font-bold text-white mb-4">法務</div>
            <ul className="space-y-2.5 text-sm">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 免責 */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-white/60 leading-relaxed">
          <p>
            本サイトの情報は一般情報であり、個別の投資・税務・法務・医療助言ではありません。最新情報は各専門家・公式機関にご確認ください。セブ島／フィリピンの不動産価格、賃料、利回り、税制、ビザ要件、外国人保有規制は時期や地域により変動します。記載は執筆時点の情報です。
          </p>
        </div>

        <div className="mt-8 text-xs text-white/50 space-y-1">
          <div>© {year} {siteConfig.company.name}. All rights reserved.</div>
          <div className="text-white/40">セブインベスト / Cebu Invest は {siteConfig.company.name} が運営しています。</div>
        </div>
      </div>
    </footer>
  );
}
