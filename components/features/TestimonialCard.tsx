import { Quote } from "lucide-react";
import Card from "@/components/ui/Card";
import RatingStars from "@/components/ui/RatingStars";
import { formatDate } from "@/lib/utils";
import { BRANCHES } from "@/constants";
import type { Testimonial } from "@/types";

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

/**
 * Customer testimonial card — used in the home testimonial carousel
 * and the full /testimonials grid.
 */
export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const branchName = BRANCHES.find((b) => b.id === testimonial.branch)?.city;

  return (
    <Card hover={false} className="flex h-full flex-col p-6">
      <Quote size={28} className="text-gold-200" fill="currentColor" />
      <RatingStars rating={testimonial.rating || 0} className="mt-3" />
      <p className="mt-4 flex-1 font-inter text-sm leading-relaxed text-brand-black">
        “{testimonial.review}”
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-brand-border pt-4">
        <div>
          <p className="font-playfair text-base text-brand-black">{testimonial.name}</p>
          <p className="font-inter text-xs text-brand-gray">
            {testimonial.treatment} {branchName && `· ${branchName}`}
          </p>
        </div>
        <span className="font-inter text-xs text-brand-gray/70">
          {formatDate(testimonial.date)}
        </span>
      </div>
    </Card>
  );
}
