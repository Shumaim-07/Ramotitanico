import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({ eyebrow, title, description, align = "left", className }: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/80">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-accent-foreground">{eyebrow}</span>
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
