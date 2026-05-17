import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** ダーク背景に使う白抜きバージョン */
  invert?: boolean;
};

/**
 * セブインベストのロゴシンボル（C 字＋太陽＋ビル＋ヤシ＋波）
 * 60x60 viewBox のインライン SVG。
 */
export function LogoSymbol({ className, invert = false }: Props) {
  const stroke = invert ? "#FFFFFF" : "#0B3A8B";
  const buildingMid = invert ? "#FFFFFF" : "#1B5BC4";

  return (
    <svg
      viewBox="0 0 60 60"
      className={cn("h-10 w-10", className)}
      aria-hidden="true"
    >
      {/* C 字クレセント */}
      <path
        d="M 10 30 A 20 20 0 1 1 50 30"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 10 30 A 20 20 0 0 0 22 47"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* 太陽 */}
      <circle cx="22" cy="22" r="6" fill="#F5C518" />
      {/* ビル群 */}
      <rect x="20" y="32" width="5" height="14" fill="#2BA8E0" />
      <rect x="26" y="28" width="6" height="18" fill={buildingMid} />
      <rect x="33" y="36" width="4" height="10" fill="#2BA8E0" />
      {/* ヤシの木 */}
      <line x1="40" y1="36" x2="40" y2="48" stroke="#2E9D4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 40 36 Q 32 30 30 32 Q 35 32 40 36 Z" fill="#2E9D4F" />
      <path d="M 40 36 Q 48 30 50 32 Q 45 32 40 36 Z" fill="#2E9D4F" />
      <path d="M 40 36 Q 38 28 34 27 Q 38 30 40 36 Z" fill="#2E9D4F" />
      <path d="M 40 36 Q 42 28 46 27 Q 42 30 40 36 Z" fill="#2E9D4F" />
      {/* 波 */}
      <path
        d="M 10 50 Q 18 46 26 50 T 42 50 T 50 49"
        stroke="#2BB7B7"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
