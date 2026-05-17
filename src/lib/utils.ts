import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind クラスをマージ。shadcn/ui 標準パターン。
 * 競合するクラスは後勝ち。
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
