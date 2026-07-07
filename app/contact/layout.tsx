import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi Melval Labskin untuk konsultasi gratis. Tersedia via WhatsApp, telepon, dan email. Kunjungi klinik kami di Jakarta, Malang, atau Surabaya.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
