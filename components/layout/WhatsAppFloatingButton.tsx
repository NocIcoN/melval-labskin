"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/utils";

/**
 * Persistent floating WhatsApp CTA, present on every page.
 * Client Component only because of the hover micro-interaction;
 * markup itself is trivial so JS cost is negligible.
 */
export default function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 animate-pulse-gold items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <MessageCircle size={28} fill="white" className="text-[#25D366]" />
    </a>
  );
}
