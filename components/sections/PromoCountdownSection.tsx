"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Flame } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ButtonLink from "@/components/ui/ButtonLink";
import { formatCurrency, getCountdown, calculateDiscount } from "@/lib/utils";
import type { Promo } from "@/types";

interface Props {
  promo: Promo;
}

/**
 * Client Component — menerima promo sebagai prop dari PromoCountdownWrapper (Server Component).
 * Countdown timer harus jalan di browser sehingga komponen ini perlu "use client".
 */
export default function PromoCountdownSection({ promo }: Props) {
  const [countdown, setCountdown] = useState(
    promo.expiresAt ? getCountdown(promo.expiresAt) : null
  );

  useEffect(() => {
    if (!promo.expiresAt) return;
    const interval = setInterval(() => {
      setCountdown(getCountdown(promo.expiresAt!));
    }, 1000);
    return () => clearInterval(interval);
  }, [promo.expiresAt]);

  const discount =
    promo.originalPrice && promo.discountedPrice
      ? calculateDiscount(promo.originalPrice, promo.discountedPrice)
      : promo.discountPercent;

  return (
    <section className="py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-brand-xl bg-brand-black">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto">
              <Image
                src={promo.image || "/images/promos/default.webp"}
                alt={promo.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="flex items-center gap-2">
                <Flame size={18} className="text-gold" />
                <Badge variant="gold">{promo.badge}</Badge>
              </div>
              <h2 className="mt-4 font-playfair text-display-sm text-white sm:text-display-md">
                {promo.title}
              </h2>
              <p className="mt-2 font-inter text-base text-white/70">{promo.subtitle}</p>
              <p className="mt-3 font-inter text-sm text-white/60">{promo.description ?? "Belum ada deskripsi untuk promo ini."}</p>

              {promo.originalPrice && promo.discountedPrice && (
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-inter text-base text-white/40 line-through">
                    {formatCurrency(promo.originalPrice)}
                  </span>
                  <span className="font-playfair text-3xl text-gold">
                    {formatCurrency(promo.discountedPrice)}
                  </span>
                  {discount && (
                    <span className="rounded-full bg-coral px-2.5 py-1 font-inter text-xs font-bold text-white">
                      -{discount}%
                    </span>
                  )}
                </div>
              )}

              {countdown && (
                <div className="mt-6 flex gap-3">
                  {[
                    { label: "Hari", value: countdown.days },
                    { label: "Jam", value: countdown.hours },
                    { label: "Menit", value: countdown.minutes },
                    { label: "Detik", value: countdown.seconds },
                  ].map((unit) => (
                    <div
                      key={unit.label}
                      className="flex w-16 flex-col items-center rounded-brand bg-white/10 py-3"
                    >
                      <span className="font-playfair text-2xl text-white tabular-nums">
                        {String(unit.value).padStart(2, "0")}
                      </span>
                      <span className="font-inter text-[10px] uppercase text-white/50">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <ButtonLink href={promo.ctaHref} variant="primary" size="lg" className="mt-8 w-fit">
                {promo.ctaLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
