import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site.config";

/**
 * PWA manifest。
 * /manifest.webmanifest として配信され、
 * ホーム画面追加時のアイコン・名称・テーマカラーを定義。
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name}｜${siteConfig.tagline}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0B3A8B",
    orientation: "portrait",
    lang: "ja",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
