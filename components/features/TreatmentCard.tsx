import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";
import type { Treatment } from "@/types";

export interface TreatmentCardProps {
  treatment: Treatment;
}

/**
 * Treatment listing card — used on Home (featured) and /treatments (full grid).
 * Pure Server Component; no interactivity required.
 */
export default function TreatmentCard({ treatment }: TreatmentCardProps) {
const lowestPrice = treatment.packages?.length
  ? Math.min(...treatment.packages.map((p) => p.price))
  : 0;
  
  return (
    <Card className="group flex h-full flex-col">
      <Link href={`/treatments/${treatment.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={treatment.image}
          alt={treatment.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {treatment.isBestSeller && (
          <Badge variant="gold" className="absolute left-4 top-4 shadow-brand-sm">
            Best Seller
          </Badge>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        {treatment.targetAge && (
          <span className="font-inter text-xs font-medium uppercase tracking-wide text-copper">
            {treatment.targetAge}
          </span>
        )}
        <h3 className="mt-2 font-playfair text-xl text-brand-black">
          <Link href={`/treatments/${treatment.slug}`} className="hover:text-gold-600">
            {treatment.name}
          </Link>
        </h3>
        <p className="mt-2 font-inter text-sm text-brand-gray line-clamp-2">
          {treatment.tagline}
        </p>

        <div className="mt-4 flex items-center gap-1.5 font-inter text-xs text-brand-gray">
          <Clock size={14} />
          {treatment.duration}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-brand-border pt-4">
          <div>
            <span className="font-inter text-xs text-brand-gray">Mulai dari</span>
            <p className="font-playfair text-lg font-semibold text-gold-700">
              {formatCurrency(lowestPrice)}
            </p>
          </div>
          <Link
            href={`/treatments/${treatment.slug}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-50 text-gold-700 transition-colors group-hover:bg-gold group-hover:text-white"
            aria-label={`Lihat detail ${treatment.name}`}
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </Card>
  );
}
