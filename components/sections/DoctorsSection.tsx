import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import DoctorCard from "@/components/features/DoctorCard";
import { DOCTORS } from "@/constants";

/**
 * Doctor credibility section for the homepage.
 * Directly supports the "Showcase doctor credibility" business goal.
 */
export default function DoctorsSection() {
  return (
    <section className="py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Tim Medis Profesional"
          title="Ditangani Langsung oleh Dokter Berpengalaman"
          description="Setiap treatment di Melval Labskin dilakukan dan diawasi oleh dokter bersertifikat dengan pengalaman bertahun-tahun di bidang estetika medis."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink href="/doctors" variant="outline" size="md">
            Lihat Semua Dokter
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
