import Link from "next/link";
import { Instagram, MessageCircle, Facebook, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { NAV_ITEMS, BRANCHES, SOCIAL_MEDIA, WHATSAPP_NUMBER } from "@/constants";
import { buildWhatsAppLink } from "@/lib/utils";

/**
 * Site-wide footer. Pure Server Component — no interactivity needed,
 * so it ships zero client JS.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <Logo type="full" variant="coral" width={140} />
            <p className="mt-4 font-inter text-sm leading-relaxed text-white/60">
              Klinik kecantikan spesialis Infuse Whitening &amp; Slimming Treatment
              dengan tenaga medis profesional di 3 kota besar Indonesia.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SOCIAL_MEDIA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Melval Labskin"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-coral"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SOCIAL_MEDIA.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Melval Labskin"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-coral"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
                </svg>
              </a>
              <a
                href={SOCIAL_MEDIA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Melval Labskin"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-coral"
              >
                <Facebook size={18} />
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Melval Labskin"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-coral"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-playfair text-lg text-coral-400">Navigasi</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-inter text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="font-playfair text-lg text-coral-400">Cabang Kami</h3>
            <ul className="mt-4 space-y-4">
              {BRANCHES.map((branch) => (
                <li key={branch.id} className="flex gap-2.5">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-coral-400" />
                  <div>
                    <p className="font-inter text-sm font-medium text-white">{branch.city}</p>
                    <p className="font-inter text-xs text-white/50">{branch.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg text-coral-400">Hubungi Kami</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-coral-400" />
                <a href={`tel:${WHATSAPP_NUMBER}`} className="font-inter text-sm text-white/60 hover:text-white">
                  +{WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-coral-400" />
                <a
                  href="mailto:hello@melvallabskin.org"
                  className="font-inter text-sm text-white/60 hover:text-white"
                >
                  hello@melvallabskin.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-inter text-xs text-white/40">
            © {year} Melval Labskin. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-inter text-xs text-white/40 hover:text-white">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="font-inter text-xs text-white/40 hover:text-white">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
