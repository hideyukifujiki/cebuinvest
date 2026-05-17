import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * セクションの見出しブロック。
 * eyebrow（小さい英字ラベル）→ title（H2）→ lead（補足文）。
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        align === "center" && "text-center max-w-2xl mx-auto",
        className
      )}
    >
      {eyebrow && (
        <div className="text-sm font-bold tracking-widest text-navy-700 mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
        {title}
      </h2>
      {lead && <p className="mt-4 text-ink-600">{lead}</p>}
    </div>
  );
}
