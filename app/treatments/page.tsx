import type { Metadata } from "next";
import TreatmentsClient from "./TreatmentsClient";

export const metadata: Metadata = {
  title: "Treatment & Layanan",
  description:
    "Temukan semua layanan treatment Melval Labskin: Infus Whitening, Slimming, Fat Freezing, Face Lipolysis, dan Stem Cell. Ditangani oleh dokter profesional bersertifikat.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  return <TreatmentsClient />;
}
