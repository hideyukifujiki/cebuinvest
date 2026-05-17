import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jp: [
          "Hiragino Sans",
          "Hiragino Kaku Gothic ProN",
          "Yu Gothic",
          "Meiryo",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        // ブランドカラー（03_ロゴ・ビジュアル仕様.md 準拠）
        navy: {
          50: "#EEF3FB",
          700: "#1B5BC4",
          900: "#0B3A8B",
        },
        sky: {
          50: "#F2FAFE",
          100: "#E6F5FC",
          500: "#2BA8E0",
        },
        sun: {
          50: "#FEF7E0",
          500: "#F5C518",
          600: "#E0AC00",
        },
        palm: {
          50: "#EAF7EE",
          500: "#2E9D4F",
        },
        teal: {
          50: "#E6F7F7",
          400: "#2BB7B7",
        },
        ink: {
          600: "#475569",
          700: "#1F2937",
          900: "#0F172A",
        },
      },
      borderRadius: {
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
      },
      boxShadow: {
        soft: "0 4px 16px rgba(11, 58, 139, 0.06)",
        card: "0 10px 24px rgba(11, 58, 139, 0.10)",
        cta: "0 8px 20px rgba(245, 197, 24, 0.35)",
      },
      maxWidth: {
        "7xl": "1200px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(245,197,24,0.4)" },
          "50%": { boxShadow: "0 0 0 14px rgba(245,197,24,0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.4s ease-out",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      // 記事本文のタイポグラフィをブランドカラーに合わせる
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#1F2937",
            "--tw-prose-headings": "#0B3A8B",
            "--tw-prose-lead": "#475569",
            "--tw-prose-links": "#1B5BC4",
            "--tw-prose-bold": "#0B3A8B",
            "--tw-prose-counters": "#475569",
            "--tw-prose-bullets": "#2BA8E0",
            "--tw-prose-hr": "#E2E8F0",
            "--tw-prose-quotes": "#0F172A",
            "--tw-prose-quote-borders": "#0B3A8B",
            "--tw-prose-captions": "#475569",
            "--tw-prose-code": "#0B3A8B",
            "--tw-prose-pre-code": "#FFFFFF",
            "--tw-prose-pre-bg": "#0F172A",
            "--tw-prose-th-borders": "#0B3A8B",
            "--tw-prose-td-borders": "#E2E8F0",
            maxWidth: "none",
            h2: {
              fontWeight: "800",
              marginTop: "2.5em",
              marginBottom: "1em",
              paddingBottom: "0.4em",
              borderBottom: "2px solid #E6F5FC",
            },
            h3: { fontWeight: "700", marginTop: "2em" },
            "h2 + p, h3 + p": { marginTop: "0.5em" },
            table: {
              fontSize: "0.95em",
            },
            "thead th": {
              backgroundColor: "#EEF3FB",
              color: "#0B3A8B",
              fontWeight: "700",
              padding: "0.75em 1em",
            },
            "tbody td": { padding: "0.6em 1em" },
            "tbody tr:nth-child(even)": { backgroundColor: "#F8FAFC" },
            hr: { marginTop: "2.5em", marginBottom: "2.5em" },
            blockquote: {
              fontStyle: "normal",
              borderLeftWidth: "4px",
              paddingLeft: "1.25em",
            },
            strong: { fontWeight: "700" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
