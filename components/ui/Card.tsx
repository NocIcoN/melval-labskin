import { cn } from "@/lib/utils";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * Base card surface used by TreatmentCard, ProductCard, DoctorCard, ArticleCard.
 * Centralizes border-radius, shadow, and hover elevation per design_rules
 * (consistent border radius + consistent shadow across the site).
 */
export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-brand-lg bg-white shadow-card",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
