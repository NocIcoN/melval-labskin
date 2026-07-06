import { cn } from "@/lib/utils";

type BadgeVariant = "gold" | "coral" | "dark" | "outline";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  gold: "bg-coral-100 text-coral-700", //bg-gold-100 text-gold-700
  coral: "bg-coral/10 text-coral",
  dark: "bg-brand-black text-white",
  outline: "border border-coral text-coral-700 bg-transparent", //border border-gold text-gold-700 bg-transparent
};

/**
 * Small pill label used for "Best Seller", "Flash Sale", "New", category tags, etc.
 */
export default function Badge({ children, variant = "gold", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-inter text-xs font-semibold uppercase tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
