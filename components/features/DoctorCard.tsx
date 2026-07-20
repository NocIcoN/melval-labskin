import Image from "next/image";
import { GraduationCap, BadgeCheck } from "lucide-react";
import Card from "@/components/ui/Card";
import { BRANCHES } from "@/constants";
import type { Doctor } from "@/types";

export interface DoctorCardProps {
  doctor: Doctor;
}

/**
 * Doctor credibility card — used on Home (featured) and /doctors grid.
 * Showcases credentials prominently to support the "Showcase doctor
 * credibility" business goal.
 */
export default function DoctorCard({ doctor }: DoctorCardProps) {
  const branchName = BRANCHES.find((b) => b.id === doctor.branch)?.city;

  return (
    <Card className="group h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-200">
        <Image
          src={doctor.photo || "/images/doctors/default.webp"}
          alt={doctor.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
          <h3 className="font-playfair text-xl text-white">{doctor.name}</h3>
          <p className="font-inter text-sm text-gold-200">{doctor.specialty || "Dokter Estetika"}</p>
        </div>
      </div>

      <div className="p-5">
        <p className="font-inter text-sm leading-relaxed text-brand-gray line-clamp-3">
          {doctor.bio || "Dokter berpengalaman dengan keahlian di bidang estetika, siap membantu Anda mencapai penampilan terbaik."}
        </p>

        <div className="mt-4 flex items-start gap-2">
          <GraduationCap size={16} className="mt-0.5 shrink-0 text-gold-600" />
          <p className="font-inter text-xs text-brand-gray">{doctor.education?.[0] || "S1 Kedokteran"}</p>
        </div>
        <div className="mt-2 flex items-start gap-2">
          <BadgeCheck size={16} className="mt-0.5 shrink-0 text-gold-600" />
          <p className="font-inter text-xs text-brand-gray">{doctor.certifications?.[0] || "Bersertifikat Resmi"}</p>
        </div>

        {branchName && (
          <span className="mt-4 inline-block rounded-full bg-gold-50 px-3 py-1 font-inter text-xs font-medium text-gold-700">
            Praktik di {branchName}
          </span>
        )}
      </div>
    </Card>
  );
}
