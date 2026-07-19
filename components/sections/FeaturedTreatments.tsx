import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import TreatmentCard from "@/components/features/TreatmentCard";
import { getFeaturedTreatments } from "@/lib/sanity/fetchers";

export default async function FeaturedTreatments() {
  const featured = await getFeaturedTreatments();

  return (
    <section className="py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Layanan Unggulan"
          title="Treatment Pilihan untuk Kulit Impianmu"
          description="Setiap perawatan dirancang sesuai kebutuhan dan usia kulit, ditangani langsung oleh dokter profesional bersertifikat."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink href="/treatments" variant="outline" size="md">
            Lihat Semua Treatment
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
