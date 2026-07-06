import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Consistent section heading used across the entire site
 * (eyebrow label + large Playfair title + optional description).
 * Centralizing this keeps heading typography/scale consistent per design_rules.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block font-inter text-sm font-semibold uppercase tracking-[0.2em] text-coral-500">
          {eyebrow}
        </span>
      )}
      <h2 className="font-playfair text-display-sm text-brand-black sm:text-display-md">
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-inter text-base leading-relaxed text-brand-gray sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
