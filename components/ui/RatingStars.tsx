import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RatingStarsProps {
  rating: number;
  max?: number;
  size?: number;
  className?: string;
}

/**
 * Visual star rating display (read-only) used in testimonial and review cards.
 */
export default function RatingStars({ rating, max = 5, size = 16, className }: RatingStarsProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} role="img" aria-label={`Rating ${rating} dari ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            i < Math.round(rating) ? "fill-gold text-gold" : "fill-transparent text-brand-gray/40"
          )}
        />
      ))}
    </div>
  );
}
