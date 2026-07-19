import type { Metadata } from "next";
import TreatmentsClient from "./TreatmentsClient";
import { getTreatments } from "@/lib/sanity/fetchers";

export const metadata: Metadata = {
  title: "Treatment & Layanan",
  description:
    "Temukan semua layanan treatment Melval Labskin: Infus Whitening, Slimming, Fat Freezing, Face Lipolysis, dan Stem Cell. Ditangani oleh dokter profesional bersertifikat.",
  alternates: { canonical: "/treatments" },
};

export default async function TreatmentsPage() {
  const treatments = await getTreatments();
  return <TreatmentsClient treatments={treatments} />;
}
