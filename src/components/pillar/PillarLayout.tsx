import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { StickyCta } from "@/components/layout/StickyCta";

type Props = {
  pillarName: string;
  pillarEn: string;
  breadcrumbBg?: string;
  consultHeading?: string;
  consultPrimaryLabel?: string;
  consultSecondary?: { label: string; href: string };
  stickyCtaLabel?: string;
  children: ReactNode;
};

/**
 * ピラー LP の共通レイアウト。
 * パンくず → 子要素（Hero〜FAQ）→ 相談CTA → スティッキーCTA。
 */
export function PillarLayout({
  pillarName,
  pillarEn,
  breadcrumbBg = "bg-sky-50",
  consultHeading,
  consultPrimaryLabel,
  consultSecondary,
  stickyCtaLabel,
  children,
}: Props) {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: `${pillarName}（${pillarEn}）` },
        ]}
        bgClassName={breadcrumbBg}
      />
      {children}
      <ConsultationCta
        heading={consultHeading}
        primaryLabel={consultPrimaryLabel}
        secondary={consultSecondary}
      />
      <StickyCta label={stickyCtaLabel} />
    </>
  );
}
