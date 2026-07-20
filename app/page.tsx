import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Spesialis Infuse Whitening & Slimming Treatment",
  description: "Melval Labskin adalah klinik kecantikan spesialis Infuse Whitening & Slimming Treatment.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <CTASection />
    </>
  );
}