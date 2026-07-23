"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import ButtonLink from "@/components/ui/ButtonLink";
import { NAV_ITEMS, BRANCHES } from "@/constants";
import { buildWhatsAppLink, cn } from "@/lib/utils";

/**
 * Site-wide responsive navigation.
 * Client Component because it needs scroll-state (transparent -> solid)
 * and mobile menu open/close state — kept isolated from the rest of the
 * (mostly server-rendered) page tree.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled || isMobileOpen
          ? "bg-white/95 shadow-brand-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      {/* Top utility bar */}
      <div
        className={cn(
          "hidden border-b border-white/10 bg-brand-black text-white transition-all duration-300 lg:block",
          isScrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"
        )}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 font-inter text-xs">
          <span>4 Cabang: Jakarta · Malang · Surabaya . Bali</span>
          <a
            href={`tel:${BRANCHES[0].phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Phone size={12} />
            {BRANCHES[0].phone}
          </a>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo type="full" variant="coral" width={140} />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.href}
              className="relative"
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 font-inter text-sm font-medium text-brand-black transition-colors hover:text-coral-500",
                  pathname === item.href && "text-coral-500"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={buildWhatsAppLink()} variant="outline" size="sm">
            Konsultasi
          </ButtonLink>
          <ButtonLink href="/booking-payment" variant="primary" size="sm">
            Booking Sekarang
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label={isMobileOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMobileOpen}
          className="rounded-full p-2 text-brand-black lg:hidden"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile nav panel */}
      <div
        className={cn(
          "overflow-hidden bg-white transition-all duration-300 lg:hidden",
          isMobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-3 font-inter text-base font-medium text-brand-black border-b border-brand-border"
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block py-2 font-inter text-sm text-brand-gray"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 px-6 pb-8">
          <ButtonLink href={buildWhatsAppLink()} variant="outline" size="md" className="w-full">
            Konsultasi via WhatsApp
          </ButtonLink>
          <ButtonLink href="/booking" variant="primary" size="md" className="w-full">
            Booking Sekarang
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
