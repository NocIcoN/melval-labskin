"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Flame, Tag } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import ButtonLink from "@/components/ui/ButtonLink";
import { formatCurrency, getCountdown, calculateDiscount } from "@/lib/utils";
import type { Promo } from "@/types";

interface Props {
  promos: Promo[];
}

function CountdownBlock({ expiresAt }: { expiresAt: string }) {
  const [countdown, setCountdown] = useState(getCountdown(expiresAt));

  useEffect(() => {
    const interval = setInterval(() => setCountdown(getCountdown(expiresAt)), 1000);
    return () => clearInterval(interval);
  }, [expiresAt]);

  if (!countdown) return (
    <span className="font-inter text-sm text-white/60">Promo telah berakhir</span>
  );

  return (
    <div className="flex items-center gap-2">
      <span className="font-inter text-xs text-white/60">Berakhir dalam:</span>
      {[
        { label: "H", value: countdown.days },
        { label: "J", value: countdown.hours },
        { label: "M", value: countdown.minutes },
        { label: "D", value: countdown.seconds },
      ].map((u) => (
        <div key={u.label} className="flex flex-col items-center rounded bg-white/10 px-2 py-1 min-w-[36px]">
          <span className="font-playfair text-lg text-white tabular-nums leading-none">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="font-inter text-[9px] text-white/50">{u.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function PromoClient({ promos }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-luxury pb-12 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Promo & Penawaran"
            title="Penawaran Spesial Untukmu"
            description="Dapatkan treatment dan produk Melval Labskin dengan harga terbaik. Promo terbatas — segera manfaatkan sebelum kehabisan!"
          />
        </div>
      </section>

      {/* Promos */}
      <section className="py-section-sm sm:py-section">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          {promos.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-inter text-brand-gray">
                Belum ada promo aktif saat ini. Pantau terus ya!
              </p>
            </div>
          ) : (
            promos.map((promo, i) => {
              if (!promo?.title) return null;
              const isEven = i % 2 === 0;
              const discount =
                promo.originalPrice && promo.discountedPrice
                  ? calculateDiscount(promo.originalPrice, promo.discountedPrice)
                  : promo.discountPercent;

              return (
                <div
                  key={promo.id}
                  className="overflow-hidden rounded-brand-xl bg-brand-black shadow-luxury"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                    {/* Image */}
                    <div className={`relative aspect-[16/10] lg:aspect-auto ${!isEven ? "lg:order-2" : ""}`}>
                      {promo.image ? (
                        <Image
                          src={promo.image}
                          alt={promo.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-coral/20" />
                      )}
                      {promo.isFlashSale && (
                        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-coral px-3 py-1.5">
                          <Flame size={14} className="text-white" />
                          <span className="font-inter text-xs font-bold text-white">FLASH SALE</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className={`flex flex-col justify-center p-8 sm:p-12 ${!isEven ? "lg:order-1" : ""}`}>
                      {promo.badge && (
                        <div className="flex items-center gap-2">
                          <Tag size={16} className="text-gold" />
                          <Badge variant="gold">{promo.badge}</Badge>
                        </div>
                      )}

                      <h2 className="mt-4 font-playfair text-display-sm text-white sm:text-display-md">
                        {promo.title}
                      </h2>
                      {promo.subtitle && (
                        <p className="mt-1 font-inter text-lg text-coral-300">{promo.subtitle}</p>
                      )}
                      {promo.description && (
                        <p className="mt-3 font-inter text-sm text-white/60">{promo.description}</p>
                      )}

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

                      {promo.expiresAt && (
                        <div className="mt-5">
                          <CountdownBlock expiresAt={promo.expiresAt} />
                        </div>
                      )}

                      {promo.ctaHref && (
                        <ButtonLink
                          href={promo.ctaHref}
                          variant="primary"
                          size="lg"
                          className="mt-8 w-fit"
                        >
                          {promo.ctaLabel ?? "Lihat Promo"}
                        </ButtonLink>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Note */}
      <section className="bg-cream py-10">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="font-inter text-sm text-brand-gray">
            * Semua promo berlaku selama persediaan masih ada dan dapat berubah sewaktu-waktu.
            Hubungi kami untuk informasi lebih lanjut.
          </p>
        </div>
      </section>
    </>
  );
}