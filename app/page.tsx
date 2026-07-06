import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import FeaturedTreatments from "@/components/sections/FeaturedTreatments";
import PromoCountdownSection from "@/components/sections/PromoCountdownSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Melval Labskin",
  description:
    "Melval Labskin adalah klinik kecantikan spesialis Infuse Whitening & Slimming Treatment dengan tenaga medis profesional di Jakarta, Malang, dan Surabaya. Konsultasi gratis sekarang.",
  alternates: { canonical: "/" },
};

/**
 * Homepage — composes all sections in the order designed to move a
 * visitor from awareness (Hero/Stats) through consideration
 * (Treatments/Doctors/Products/Testimonials/Articles) to conversion
 * (Promo/CTA), per the Melval Care Model (Discover → Explore → Consult).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedTreatments />
      <PromoCountdownSection />
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
