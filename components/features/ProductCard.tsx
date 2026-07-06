import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";
import type { Product } from "@/types";

export interface ProductCardProps {
  product: Product;
}

/**
 * Product listing card — used on Home (featured) and /products grid.
 */
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex h-full flex-col">
      <Link href={`/products/${product.slug}`} className="relative block aspect-square overflow-hidden bg-cream-200">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover p-6 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {product.isBestSeller && <Badge variant="gold">Best Seller</Badge>}
          {product.isNew && <Badge variant="coral">New</Badge>}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-playfair text-lg text-brand-black">
          <Link href={`/products/${product.slug}`} className="hover:text-gold-600">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 font-inter text-sm text-brand-gray line-clamp-1">{product.tagline}</p>

        {product.volume && (
          <span className="mt-2 font-inter text-xs text-brand-gray/70">{product.volume}</span>
        )}

        <div className="mt-4 flex items-center justify-between border-t border-brand-border pt-4">
          <p className="font-playfair text-base font-semibold text-gold-700">
            {formatCurrency(product.price)}
          </p>
          <Link
            href={`/products/${product.slug}`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-50 text-gold-700 transition-colors hover:bg-gold hover:text-white"
            aria-label={`Lihat detail ${product.name}`}
          >
            <ShoppingBag size={16} />
          </Link>
        </div>
      </div>
    </Card>
  );
}
