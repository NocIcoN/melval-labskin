import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import FeaturedTreatments from "@/components/sections/FeaturedTreatments";
import PromoCountdownWrapper from "@/components/sections/PromoCountdownWrapper";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Spesialis Infuse Whitening & Slimming Treatment",
  description:
    "Melval Labskin adalah klinik kecantikan spesialis Infuse Whitening & Slimming Treatment dengan tenaga medis profesional di Jakarta, Malang, dan Surabaya. Konsultasi gratis sekarang.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedTreatments />
      <PromoCountdownWrapper />
      <BeforeAfterSection />
      <DoctorsSection />
      <ProductsSection />
      <TestimonialsSection />
      <ArticlesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
