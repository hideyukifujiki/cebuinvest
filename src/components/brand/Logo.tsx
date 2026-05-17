import Link from "next/link";
import { LogoSymbol } from "./LogoSymbol";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  invert?: boolean;
  /** 英語表記 (CEBU INVEST) を表示するか */
  showEnglish?: boolean;
};

/**
 * ロゴ + ワードマーク。クリックでホームへ。
 */
export function Logo({ className, invert = false, showEnglish = true }: Props) {
  return (
    <Link
      href="/"
      aria-label="セブインベスト ホーム"
      className={cn("flex items-center gap-2 lg:gap-3 shrink-0", className)}
    >
      <LogoSymbol className="h-9 w-9 lg:h-11 lg:w-11" invert={invert} />
      <div className="leading-tight">
        <div className="text-lg lg:text-xl font-extrabold tracking-tight">
          <span className={invert ? "text-white" : "text-navy-900"}>セブ</span>
          <span className={invert ? "text-white" : "text-ink-900"}>インベスト</span>
        </div>
        {showEnglish && (
          <div
            className={cn(
              "hidden lg:block text-[10px] tracking-widest mt-0.5",
              invert ? "text-white/60" : "text-ink-600"
            )}
          >
            CEBU INVEST
          </div>
        )}
      </div>
    </Link>
  );
}
